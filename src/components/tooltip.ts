type TooltipTrigger = "hover" | "click" | "focus" | "hover-focus";
type TooltipPlacement = "top" | "bottom" | "left" | "right" | "auto";
type TooltipModel = "classic" | "soft" | "solid" | "float" | "card" | "prime";

interface TooltipOptions {
  trigger: TooltipTrigger;
  placement: TooltipPlacement;
  model: TooltipModel;
  delay: number;
  accent: string | null;
  title: string | null;
  text: string | null;
  meta: string | null;
  icon: string | null;
}

interface TooltipState {
  trigger: HTMLElement;
  tooltip: HTMLElement;
  options: TooltipOptions;
  open: boolean;
  showTimer?: number;
  hideTimer?: number;
  boundReposition: () => void;
  boundOutside?: (event: Event) => void;
}

const TOOLTIP_SELECTOR = "[data-cdw-tooltip]";
const stateMap = new WeakMap<HTMLElement, TooltipState>();
let idCounter = 0;
let globalKeyBound = false;
const openTooltips = new Set<TooltipState>();

function nextId(): string {
  idCounter += 1;
  return `cdw-tooltip-${idCounter}`;
}

function parseTrigger(value: string | null): TooltipTrigger {
  if (value === "click" || value === "focus" || value === "hover-focus") {
    return value;
  }
  return "hover";
}

function parsePlacement(value: string | null): TooltipPlacement {
  if (value === "top" || value === "bottom" || value === "left" || value === "right") {
    return value;
  }
  return "auto";
}

function parseModel(value: string | null): TooltipModel {
  switch (value) {
    case "soft":
    case "solid":
    case "float":
    case "card":
    case "prime":
    case "classic":
      return value;
    default:
      return "classic";
  }
}

function parseDelay(value: string | null): number {
  if (!value) return 120;
  const num = Number(value);
  return Number.isNaN(num) ? 120 : Math.max(0, num);
}

function getAccent(trigger: HTMLElement): string | null {
  const explicit = trigger.getAttribute("data-tooltip-accent");
  if (explicit) return explicit.trim();
  const accentClass = Array.from(trigger.classList).find((item) =>
    item.startsWith("cdw-fw-accent-")
  );
  if (accentClass) return accentClass.replace("cdw-fw-accent-", "");
  return null;
}

function buildTooltip(state: TooltipState): void {
  const { tooltip, options } = state;
  const content = tooltip.querySelector(".cdw-tooltip__content");
  if (!content) return;
  content.innerHTML = "";

  if (options.icon) {
    const icon = document.createElement("span");
    icon.className = "cdw-tooltip__icon";
    icon.textContent = options.icon;
    content.appendChild(icon);
  }

  if (options.title) {
    const title = document.createElement("div");
    title.className = "cdw-tooltip__title";
    title.textContent = options.title;
    content.appendChild(title);
  }

  if (options.text) {
    const text = document.createElement("div");
    text.className = "cdw-tooltip__text";
    text.textContent = options.text;
    content.appendChild(text);
  }

  if (options.meta) {
    const meta = document.createElement("div");
    meta.className = "cdw-tooltip__meta";
    meta.textContent = options.meta;
    content.appendChild(meta);
  }
}

function createTooltip(trigger: HTMLElement, options: TooltipOptions): HTMLElement {
  const tooltip = document.createElement("div");
  const id = nextId();
  tooltip.id = id;
  tooltip.className = `cdw-tooltip cdw-tooltip--${options.model}`;
  tooltip.setAttribute("role", "tooltip");
  tooltip.setAttribute("data-placement", "top");

  const accent = options.accent;
  if (accent) {
    tooltip.classList.add(`cdw-fw-accent-${accent}`);
  }

  const content = document.createElement("div");
  content.className = "cdw-tooltip__content";
  tooltip.appendChild(content);

  const arrow = document.createElement("span");
  arrow.className = "cdw-tooltip__arrow";
  arrow.setAttribute("aria-hidden", "true");
  tooltip.appendChild(arrow);

  trigger.setAttribute("aria-describedby", id);
  tooltip.setAttribute("aria-hidden", "true");

  document.body.appendChild(tooltip);
  return tooltip;
}

function computePlacement(
  trigger: HTMLElement,
  tooltip: HTMLElement,
  placement: TooltipPlacement
): TooltipPlacement {
  const rect = trigger.getBoundingClientRect();
  const tip = tooltip.getBoundingClientRect();
  const gap = 10;
  const spaceTop = rect.top;
  const spaceBottom = window.innerHeight - rect.bottom;
  const spaceLeft = rect.left;
  const spaceRight = window.innerWidth - rect.right;

  const canFit = (side: TooltipPlacement) => {
    switch (side) {
      case "top":
        return spaceTop >= tip.height + gap;
      case "bottom":
        return spaceBottom >= tip.height + gap;
      case "left":
        return spaceLeft >= tip.width + gap;
      case "right":
        return spaceRight >= tip.width + gap;
      default:
        return false;
    }
  };

  if (placement !== "auto") {
    if (canFit(placement)) return placement;
    const opposite =
      placement === "top"
        ? "bottom"
        : placement === "bottom"
          ? "top"
          : placement === "left"
            ? "right"
            : "left";
    if (canFit(opposite)) return opposite;
  }

  if (spaceBottom >= tip.height + gap) return "bottom";
  if (spaceTop >= tip.height + gap) return "top";
  if (spaceRight >= tip.width + gap) return "right";
  if (spaceLeft >= tip.width + gap) return "left";
  return "bottom";
}

function positionTooltip(state: TooltipState): void {
  const { trigger, tooltip, options } = state;
  const rect = trigger.getBoundingClientRect();
  const tip = tooltip.getBoundingClientRect();
  const gap = 10;
  const placement = computePlacement(trigger, tooltip, options.placement);

  let top = 0;
  let left = 0;

  switch (placement) {
    case "top":
      top = rect.top - tip.height - gap;
      left = rect.left + (rect.width - tip.width) / 2;
      break;
    case "bottom":
      top = rect.bottom + gap;
      left = rect.left + (rect.width - tip.width) / 2;
      break;
    case "left":
      top = rect.top + (rect.height - tip.height) / 2;
      left = rect.left - tip.width - gap;
      break;
    case "right":
      top = rect.top + (rect.height - tip.height) / 2;
      left = rect.right + gap;
      break;
    default:
      break;
  }

  const maxLeft = window.innerWidth - tip.width - 8;
  const maxTop = window.innerHeight - tip.height - 8;
  left = Math.min(Math.max(8, left), Math.max(8, maxLeft));
  top = Math.min(Math.max(8, top), Math.max(8, maxTop));

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
  tooltip.setAttribute("data-placement", placement);

  if (placement === "top" || placement === "bottom") {
    const arrowX = rect.left + rect.width / 2 - left;
    const clampX = Math.min(Math.max(12, arrowX), tip.width - 12);
    tooltip.style.setProperty("--cdw-tooltip-arrow-x", `${clampX}px`);
  } else {
    const arrowY = rect.top + rect.height / 2 - top;
    const clampY = Math.min(Math.max(12, arrowY), tip.height - 12);
    tooltip.style.setProperty("--cdw-tooltip-arrow-y", `${clampY}px`);
  }
}

function showTooltip(state: TooltipState): void {
  if (state.open) return;
  state.open = true;
  state.tooltip.classList.add("is-open");
  state.tooltip.setAttribute("aria-hidden", "false");
  state.tooltip.style.visibility = "hidden";
  positionTooltip(state);
  state.tooltip.style.visibility = "visible";
  openTooltips.add(state);
  state.boundReposition();
}

function hideTooltip(state: TooltipState): void {
  if (!state.open) return;
  state.open = false;
  state.tooltip.classList.remove("is-open");
  state.tooltip.setAttribute("aria-hidden", "true");
  openTooltips.delete(state);
}

function clearTimers(state: TooltipState): void {
  if (state.showTimer) window.clearTimeout(state.showTimer);
  if (state.hideTimer) window.clearTimeout(state.hideTimer);
  state.showTimer = undefined;
  state.hideTimer = undefined;
}

function scheduleShow(state: TooltipState): void {
  clearTimers(state);
  state.showTimer = window.setTimeout(() => showTooltip(state), state.options.delay);
}

function scheduleHide(state: TooltipState): void {
  clearTimers(state);
  state.hideTimer = window.setTimeout(() => hideTooltip(state), 90);
}

function setupGlobalKey(): void {
  if (globalKeyBound) return;
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    openTooltips.forEach((state) => hideTooltip(state));
  });
  globalKeyBound = true;
}

function isTouchOnly(): boolean {
  return window.matchMedia && window.matchMedia("(hover: none)").matches;
}

export function bindTooltip(trigger: HTMLElement): void {
  if (!trigger.matches(TOOLTIP_SELECTOR)) return;
  if (stateMap.has(trigger)) return;

  const label = trigger.getAttribute("data-cdw-tooltip");
  const options: TooltipOptions = {
    trigger: parseTrigger(trigger.getAttribute("data-tooltip-trigger")),
    placement: parsePlacement(trigger.getAttribute("data-tooltip-placement")),
    model: parseModel(trigger.getAttribute("data-tooltip-model")),
    delay: parseDelay(trigger.getAttribute("data-tooltip-delay")),
    accent: getAccent(trigger),
    title: trigger.getAttribute("data-tooltip-title"),
    text: trigger.getAttribute("data-tooltip-text") ?? label,
    meta: trigger.getAttribute("data-tooltip-meta"),
    icon: trigger.getAttribute("data-tooltip-icon"),
  };

  const tooltip = createTooltip(trigger, options);
  const state: TooltipState = {
    trigger,
    tooltip,
    options,
    open: false,
    boundReposition: () => positionTooltip(state),
  };

  buildTooltip(state);

  const triggerMode = options.trigger === "hover" ? "hover-focus" : options.trigger;
  const useClick = triggerMode === "click" || (triggerMode === "hover-focus" && isTouchOnly());

  if (useClick) {
    const onDocClick = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      if (target === trigger || trigger.contains(target)) return;
      if (target === tooltip || tooltip.contains(target)) return;
      hideTooltip(state);
    };
    state.boundOutside = onDocClick;

    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      if (state.open) {
        hideTooltip(state);
      } else {
        showTooltip(state);
      }
      if (state.boundOutside) {
        document.addEventListener("click", state.boundOutside, { once: true });
      }
    });
  } else {
    trigger.addEventListener("mouseenter", () => scheduleShow(state));
    trigger.addEventListener("mouseleave", () => scheduleHide(state));
    trigger.addEventListener("focus", () => scheduleShow(state));
    trigger.addEventListener("blur", () => scheduleHide(state));
  }

  window.addEventListener("scroll", state.boundReposition, true);
  window.addEventListener("resize", state.boundReposition);

  setupGlobalKey();
  stateMap.set(trigger, state);
}
