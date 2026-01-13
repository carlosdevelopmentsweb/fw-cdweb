type AccordionMode = "single" | "multiple";
type AccordionIcon = "chevron" | "plus" | "caret" | "arrow" | "dot";

export interface AccordionOptions {
  mode?: AccordionMode;
  collapsible?: boolean;
  defaultOpen?: number | string | Array<number | string>;
  animate?: boolean;
  icon?: AccordionIcon;
}

interface AccordionItem {
  item: HTMLElement;
  trigger: HTMLElement;
  panel: HTMLElement;
  index: number;
  key: string;
  disabled: boolean;
}

interface AccordionState {
  container: HTMLElement;
  options: Required<AccordionOptions>;
  items: AccordionItem[];
  triggerMap: Map<HTMLElement, AccordionItem>;
  clickHandler: (event: Event) => void;
  keyHandler: (event: KeyboardEvent) => void;
  resizeHandler: () => void;
}

const ITEM_SELECTOR = ".cdw-accordion-item";
const TRIGGER_SELECTOR = ".cdw-accordion-trigger";
const PANEL_SELECTOR = ".cdw-accordion-panel";
const stateMap = new WeakMap<HTMLElement, AccordionState>();
let idCounter = 0;

function nextId(prefix: string): string {
  idCounter += 1;
  return `${prefix}-${idCounter}`;
}

function parseBoolean(value: string | null, fallback: boolean): boolean {
  if (value === null) return fallback;
  if (value === "") return true;
  return value === "true";
}

function parseMode(value: string | null, fallback: AccordionMode): AccordionMode {
  return value === "multiple" ? "multiple" : fallback;
}

function parseIcon(value: string | null, fallback: AccordionIcon): AccordionIcon {
  switch (value) {
    case "plus":
    case "caret":
    case "arrow":
    case "dot":
    case "chevron":
      return value;
    default:
      return fallback;
  }
}

function parseDefaultOpen(
  value: AccordionOptions["defaultOpen"] | null
): Array<string | number> {
  if (value === null || value === undefined) return [];
  if (Array.isArray(value)) return value;
  if (typeof value === "number") return [value];
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed) return [];
    if (trimmed.includes(",")) {
      return trimmed
        .split(",")
        .map((part) => part.trim())
        .filter(Boolean)
        .map((part) => {
          const num = Number(part);
          return Number.isNaN(num) ? part : num;
        });
    }
    const num = Number(trimmed);
    return Number.isNaN(num) ? [trimmed] : [num];
  }
  return [];
}

function resolveOptions(
  container: HTMLElement,
  options?: AccordionOptions
): Required<AccordionOptions> {
  const mode = parseMode(container.getAttribute("data-mode"), "single");
  const collapsible = parseBoolean(
    container.getAttribute("data-collapsible"),
    false
  );
  const animate = parseBoolean(container.getAttribute("data-animate"), true);
  const icon = parseIcon(container.getAttribute("data-icon"), "chevron");
  const defaultOpen = parseDefaultOpen(
    container.getAttribute("data-default-open")
  );

  return {
    mode: options?.mode ?? mode,
    collapsible: options?.collapsible ?? collapsible,
    defaultOpen: options?.defaultOpen ?? defaultOpen,
    animate: options?.animate ?? animate,
    icon: options?.icon ?? icon,
  };
}

function getItemKey(item: HTMLElement, index: number): string {
  return item.getAttribute("data-cdw-accordion-item") || item.id || String(index);
}

function matchKey(item: AccordionItem, key: string | number): boolean {
  if (typeof key === "number") {
    return item.index === key;
  }
  if (key.startsWith("id:")) {
    const idValue = key.slice(3);
    return item.key === idValue || item.item.id === idValue;
  }
  return item.key === key;
}

function setPanelState(panel: HTMLElement, open: boolean, animate: boolean): void {
  if (!animate) {
    panel.style.maxHeight = open ? "none" : "0px";
    panel.style.opacity = open ? "1" : "0";
    panel.style.pointerEvents = open ? "auto" : "none";
    return;
  }

  if (open) {
    panel.style.maxHeight = `${panel.scrollHeight}px`;
    panel.style.opacity = "1";
    panel.style.pointerEvents = "auto";
    const onEnd = (event: TransitionEvent) => {
      if (event.propertyName !== "max-height") return;
      if (panel.style.maxHeight !== "0px") {
        panel.style.maxHeight = "none";
      }
      panel.removeEventListener("transitionend", onEnd);
    };
    panel.addEventListener("transitionend", onEnd);
    return;
  }

  if (panel.style.maxHeight === "none" || panel.style.maxHeight === "") {
    panel.style.maxHeight = `${panel.scrollHeight}px`;
  }
  panel.style.opacity = "1";
  panel.style.pointerEvents = "none";
  panel.getBoundingClientRect();
  panel.style.maxHeight = "0px";
  panel.style.opacity = "0";
}

function updateAria(item: AccordionItem, open: boolean): void {
  item.trigger.setAttribute("aria-expanded", open ? "true" : "false");
  item.panel.setAttribute("aria-hidden", open ? "false" : "true");
}

function fireEvent(
  container: HTMLElement,
  name: "cdw:accordion:open" | "cdw:accordion:close",
  item: AccordionItem
): void {
  container.dispatchEvent(
    new CustomEvent(name, {
      detail: {
        item: item.item,
        index: item.index,
        id: item.key,
      },
    })
  );
}

function closeItem(state: AccordionState, item: AccordionItem): void {
  if (!item.item.classList.contains("is-open")) return;
  item.item.classList.remove("is-open");
  updateAria(item, false);
  setPanelState(item.panel, false, state.options.animate);
  fireEvent(state.container, "cdw:accordion:close", item);
}

function openItem(state: AccordionState, item: AccordionItem): void {
  if (item.disabled) return;
  if (item.item.classList.contains("is-open")) return;

  if (state.options.mode === "single") {
    state.items.forEach((other) => {
      if (other !== item) closeItem(state, other);
    });
  }

  item.item.classList.add("is-open");
  updateAria(item, true);
  setPanelState(item.panel, true, state.options.animate);
  fireEvent(state.container, "cdw:accordion:open", item);
}

function toggleItem(state: AccordionState, item: AccordionItem): void {
  if (item.disabled) return;
  const isOpen = item.item.classList.contains("is-open");
  if (isOpen) {
    if (state.options.mode === "single" && !state.options.collapsible) {
      return;
    }
    closeItem(state, item);
    return;
  }
  openItem(state, item);
}

function buildItems(container: HTMLElement): AccordionItem[] {
  const nodes = Array.from(container.querySelectorAll<HTMLElement>(ITEM_SELECTOR));
  return nodes
    .map((item, index) => {
      const trigger = item.querySelector<HTMLElement>(TRIGGER_SELECTOR);
      const panel = item.querySelector<HTMLElement>(PANEL_SELECTOR);
      if (!trigger || !panel) return null;

      if (!trigger.id) {
        trigger.id = nextId("cdw-accordion-trigger");
      }
      if (!panel.id) {
        panel.id = nextId("cdw-accordion-panel");
      }

      trigger.setAttribute("aria-controls", panel.id);
      if (trigger.tagName === "BUTTON" && !trigger.getAttribute("type")) {
        trigger.setAttribute("type", "button");
      }
      panel.setAttribute("role", "region");
      panel.setAttribute("aria-labelledby", trigger.id);

      const disabled =
        item.classList.contains("is-disabled") ||
        item.getAttribute("data-disabled") === "true" ||
        trigger.hasAttribute("disabled") ||
        trigger.getAttribute("aria-disabled") === "true";

      if (disabled) {
        item.classList.add("is-disabled");
        trigger.setAttribute("aria-disabled", "true");
        if (trigger.tagName === "BUTTON") {
          trigger.setAttribute("disabled", "true");
        }
        if (trigger.tagName !== "BUTTON") {
          trigger.setAttribute("tabindex", "-1");
        }
      } else {
        item.classList.remove("is-disabled");
        trigger.removeAttribute("aria-disabled");
        if (trigger.tagName !== "BUTTON") {
          trigger.setAttribute("tabindex", "0");
        }
      }

      return {
        item,
        trigger,
        panel,
        index,
        key: getItemKey(item, index),
        disabled,
      };
    })
    .filter((entry): entry is AccordionItem => entry !== null);
}

function applyInitialState(state: AccordionState): void {
  const defaultKeys = parseDefaultOpen(state.options.defaultOpen);
  const hasDefault = defaultKeys.length > 0;
  let opened = 0;

  state.items.forEach((item) => {
    const shouldOpen = hasDefault
      ? defaultKeys.some((key) => matchKey(item, key))
      : item.item.classList.contains("is-open");

    if (state.options.mode === "single" && opened > 0 && shouldOpen) {
      item.item.classList.remove("is-open");
    }

    const isOpen = shouldOpen && !item.disabled;
    if (isOpen) {
      item.item.classList.add("is-open");
      opened += 1;
    } else {
      item.item.classList.remove("is-open");
    }
    updateAria(item, isOpen);
    setPanelState(item.panel, isOpen, state.options.animate);
  });
}

function onClick(state: AccordionState, event: Event): void {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const trigger = target.closest(TRIGGER_SELECTOR) as HTMLElement | null;
  if (!trigger || !state.triggerMap.has(trigger)) return;
  if (trigger.getAttribute("aria-disabled") === "true" || trigger.hasAttribute("disabled")) {
    return;
  }
  const item = state.triggerMap.get(trigger);
  if (!item) return;
  toggleItem(state, item);
}

function onKeydown(state: AccordionState, event: KeyboardEvent): void {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const trigger = target.closest(TRIGGER_SELECTOR) as HTMLElement | null;
  if (!trigger || !state.triggerMap.has(trigger)) return;

  const enabledTriggers = state.items
    .filter((item) => !item.disabled)
    .map((item) => item.trigger);
  const currentIndex = enabledTriggers.indexOf(trigger);
  if (currentIndex === -1) return;

  const focusTrigger = (idx: number) => {
    const next = enabledTriggers[idx];
    if (next) next.focus();
  };

  switch (event.key) {
    case "Enter":
    case " ":
    case "Spacebar":
      event.preventDefault();
      toggleItem(state, state.triggerMap.get(trigger)!);
      break;
    case "ArrowDown":
      event.preventDefault();
      focusTrigger((currentIndex + 1) % enabledTriggers.length);
      break;
    case "ArrowUp":
      event.preventDefault();
      focusTrigger((currentIndex - 1 + enabledTriggers.length) % enabledTriggers.length);
      break;
    case "Home":
      event.preventDefault();
      focusTrigger(0);
      break;
    case "End":
      event.preventDefault();
      focusTrigger(enabledTriggers.length - 1);
      break;
    default:
      break;
  }
}

function onResize(state: AccordionState): void {
  if (!state.options.animate) return;
  state.items.forEach((item) => {
    if (item.item.classList.contains("is-open")) {
      item.panel.style.maxHeight = `${item.panel.scrollHeight}px`;
    }
  });
}

function initAccordion(container: HTMLElement, options?: AccordionOptions): void {
  if (stateMap.has(container)) {
    destroyAccordion(container);
  }

  const resolved = resolveOptions(container, options);
  container.setAttribute("data-icon", resolved.icon);
  container.setAttribute("data-animate", resolved.animate ? "true" : "false");

  const items = buildItems(container);
  const triggerMap = new Map<HTMLElement, AccordionItem>();
  items.forEach((item) => triggerMap.set(item.trigger, item));

  const state: AccordionState = {
    container,
    options: resolved,
    items,
    triggerMap,
    clickHandler: (event) => onClick(state, event),
    keyHandler: (event) => onKeydown(state, event),
    resizeHandler: () => onResize(state),
  };

  container.addEventListener("click", state.clickHandler);
  container.addEventListener("keydown", state.keyHandler);
  window.addEventListener("resize", state.resizeHandler);

  applyInitialState(state);
  stateMap.set(container, state);
}

function destroyAccordion(container: HTMLElement): void {
  const state = stateMap.get(container);
  if (!state) return;
  container.removeEventListener("click", state.clickHandler);
  container.removeEventListener("keydown", state.keyHandler);
  window.removeEventListener("resize", state.resizeHandler);
  state.items.forEach((item) => {
    item.item.classList.remove("is-open");
    item.trigger.removeAttribute("aria-expanded");
    item.trigger.removeAttribute("aria-controls");
    item.panel.removeAttribute("aria-hidden");
    item.panel.removeAttribute("aria-labelledby");
    item.panel.removeAttribute("role");
    item.panel.style.maxHeight = "";
    item.panel.style.opacity = "";
    item.panel.style.pointerEvents = "";
  });
  stateMap.delete(container);
}

export function bindAccordion(container: HTMLElement): void {
  initAccordion(container);
}
