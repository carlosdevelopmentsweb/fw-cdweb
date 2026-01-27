type Orientation = "horizontal" | "vertical";

interface TabItem {
  id: string;
  button: HTMLElement;
  panel: HTMLElement | null;
  index: number;
  disabled: boolean;
}

interface TabsState {
  container: HTMLElement;
  nav: HTMLElement;
  tabs: TabItem[];
  activeId: string;
  orientation: Orientation;
  clickHandler: (event: Event) => void;
  keyHandler: (event: KeyboardEvent) => void;
}

const stateMap = new Map<HTMLElement, TabsState>();
let idCounter = 0;

function nextId(): string {
  idCounter += 1;
  return `cdw-tab-${idCounter}`;
}

function isVertical(container: HTMLElement): Orientation {
  if (
    container.classList.contains("cdw-tabs--vertical") ||
    container.classList.contains("cdw-tabs--left") ||
    container.classList.contains("cdw-tabs--right")
  ) {
    return "vertical";
  }
  return "horizontal";
}

function findPanel(container: HTMLElement, id: string): HTMLElement | null {
  return (
    container.querySelector<HTMLElement>(`.cdw-tabs-panel[data-cdw-tab-panel="${id}"]`) ||
    container.querySelector<HTMLElement>(`.cdw-tabs-panel#${id}`) ||
    container.querySelector<HTMLElement>(`.cdw-tabs-panel[data-tab="${id}"]`)
  );
}

function buildTabs(container: HTMLElement): TabItem[] {
  const nav = container.querySelector<HTMLElement>(".cdw-tabs-nav");
  if (!nav) return [];

  const buttons = Array.from(nav.querySelectorAll<HTMLElement>(".cdw-tabs-tab"));
  return buttons.map((button, index) => {
    const rawId =
      button.getAttribute("data-cdw-tab") ||
      button.getAttribute("data-tab") ||
      button.getAttribute("href")?.replace("#", "") ||
      button.id ||
      nextId();

    const id = rawId;

    if (!button.id) {
      button.id = `${id}-tab`;
    }

    const panel = findPanel(container, id);
    const disabled =
      button.classList.contains("is-disabled") ||
      button.getAttribute("aria-disabled") === "true" ||
      button.hasAttribute("disabled");

    if (panel && !panel.id) {
      panel.id = id;
    }

    return {
      id,
      button,
      panel: panel || null,
      index,
      disabled,
    };
  });
}

function applyAria(state: TabsState): void {
  state.nav.setAttribute("role", "tablist");
  state.nav.setAttribute(
    "aria-orientation",
    state.orientation === "vertical" ? "vertical" : "horizontal"
  );

  state.tabs.forEach((tab) => {
    const btn = tab.button;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", "false");
    btn.setAttribute("tabindex", "-1");

    if (btn.tagName === "BUTTON" && !btn.getAttribute("type")) {
      btn.setAttribute("type", "button");
    }

    if (tab.panel) {
      btn.setAttribute("aria-controls", tab.panel.id);
      tab.panel.setAttribute("role", "tabpanel");
      tab.panel.setAttribute("aria-labelledby", btn.id);
      tab.panel.setAttribute("tabindex", "0");
    }

    if (tab.disabled) {
      btn.setAttribute("aria-disabled", "true");
      btn.classList.add("is-disabled");
      if (btn.tagName === "BUTTON") {
        btn.setAttribute("disabled", "true");
      }
    } else {
      btn.removeAttribute("aria-disabled");
      btn.removeAttribute("disabled");
    }
  });
}

function setActive(state: TabsState, targetId: string, emit = true): void {
  const next = state.tabs.find((t) => t.id === targetId && !t.disabled);
  if (!next) return;
  if (state.activeId === next.id) return;

  state.tabs.forEach((tab) => {
    const isActive = tab.id === next.id;
    tab.button.classList.toggle("is-active", isActive);
    tab.button.setAttribute("aria-selected", isActive ? "true" : "false");
    tab.button.setAttribute("tabindex", isActive ? "0" : "-1");

    if (tab.panel) {
      tab.panel.classList.toggle("is-active", isActive);
      tab.panel.hidden = !isActive;
      if (isActive && tab.panel.hasAttribute("data-loading")) {
        tab.panel.removeAttribute("data-loading");
      }
    }
  });

  state.activeId = next.id;

  if (emit) {
    state.container.dispatchEvent(
      new CustomEvent("cdw:tab:change", {
        detail: {
          id: next.id,
          index: next.index,
          tab: next.button,
          panel: next.panel,
        },
      })
    );
  }

  if (typeof window !== "undefined" && next.panel?.id) {
    const hash = `#${next.panel.id}`;
    if (window.location.hash !== hash) {
      history.replaceState(null, "", hash);
    }
  }
}

function activateFromHash(state: TabsState): boolean {
  const hash = window.location.hash?.replace("#", "");
  if (!hash) return false;

  const match = state.tabs.find(
    (t) => t.id === hash || t.panel?.id === hash
  );

  if (match && !match.disabled) {
    setActive(state, match.id, false);
    return true;
  }

  return false;
}

function getEnabledTabs(state: TabsState): TabItem[] {
  return state.tabs.filter((t) => !t.disabled);
}

function handleClick(state: TabsState, event: Event): void {
  const target = event.target as Element | null;
  if (!target) return;

  const tabButton = target.closest(".cdw-tabs-tab") as HTMLElement | null;
  if (!tabButton) return;

  const tab = state.tabs.find((t) => t.button === tabButton);
  if (!tab || tab.disabled) return;

  event.preventDefault();
  setActive(state, tab.id);
  tab.button.focus();
}

function handleKeydown(state: TabsState, event: KeyboardEvent): void {
  const target = event.target as Element | null;
  if (!target) return;

  const tabButton = target.closest(".cdw-tabs-tab") as HTMLElement | null;
  if (!tabButton) return;

  const enabled = getEnabledTabs(state).map((t) => t.button);
  const currentIndex = enabled.indexOf(tabButton);
  if (currentIndex === -1) return;

  const move = (delta: number) => {
    const nextIndex = (currentIndex + delta + enabled.length) % enabled.length;
    enabled[nextIndex].focus();
  };

  switch (event.key) {
    case "ArrowRight":
      if (state.orientation === "horizontal") {
        event.preventDefault();
        move(1);
      }
      break;
    case "ArrowLeft":
      if (state.orientation === "horizontal") {
        event.preventDefault();
        move(-1);
      }
      break;
    case "ArrowDown":
      if (state.orientation === "vertical") {
        event.preventDefault();
        move(1);
      }
      break;
    case "ArrowUp":
      if (state.orientation === "vertical") {
        event.preventDefault();
        move(-1);
      }
      break;
    case "Home":
      event.preventDefault();
      enabled[0]?.focus();
      break;
    case "End":
      event.preventDefault();
      enabled[enabled.length - 1]?.focus();
      break;
    case "Enter":
    case " ":
    case "Spacebar":
      event.preventDefault();
      const id =
        tabButton.getAttribute("data-cdw-tab") ||
        tabButton.getAttribute("data-tab");
      if (id) setActive(state, id);
      break;
  }
}

function initTabs(container: HTMLElement): void {
  const nav = container.querySelector<HTMLElement>(".cdw-tabs-nav");
  if (!nav) return;

  const tabs = buildTabs(container);
  const orientation = isVertical(container);

  const state: TabsState = {
    container,
    nav,
    tabs,
    activeId: "",
    orientation,
    clickHandler: (e) => handleClick(state, e),
    keyHandler: (e) => handleKeydown(state, e),
  };

  applyAria(state);
  nav.addEventListener("click", state.clickHandler);
  nav.addEventListener("keydown", state.keyHandler);

  const hasHash =
    typeof window !== "undefined" ? activateFromHash(state) : false;

  if (!hasHash) {
    const preset =
      tabs.find((t) => t.button.classList.contains("is-active")) ||
      tabs.find((t) => t.button.getAttribute("aria-selected") === "true") ||
      tabs.find((t) => !t.disabled);

    if (preset) {
      setActive(state, preset.id, false);
    }
  }

  stateMap.set(container, state);
}

function destroyTabs(container: HTMLElement): void {
  const state = stateMap.get(container);
  if (!state) return;

  state.nav.removeEventListener("click", state.clickHandler);
  state.nav.removeEventListener("keydown", state.keyHandler);

  state.tabs.forEach((tab) => {
    tab.button.removeAttribute("role");
    tab.button.removeAttribute("aria-selected");
    tab.button.removeAttribute("aria-controls");
    tab.button.removeAttribute("tabindex");

    if (tab.panel) {
      tab.panel.removeAttribute("role");
      tab.panel.removeAttribute("aria-labelledby");
      tab.panel.removeAttribute("tabindex");
      tab.panel.hidden = false;
    }
  });

  stateMap.delete(container);
}

export function bindTabs(el: HTMLElement): void {
  initTabs(el);
}

export const TabsAPI = {
  init(root?: ParentNode | Document | HTMLElement) {
    const scope = root ?? document;
    Array.from(
      scope.querySelectorAll<HTMLElement>("[data-cdw-tabs]")
    ).forEach((node) => initTabs(node));
  },

  open(tabId: string): boolean {
    for (const [, state] of stateMap) {
      const match = state.tabs.find(
        (t) => t.id === tabId || t.panel?.id === tabId
      );
      if (match) {
        setActive(state, match.id);
        return true;
      }
    }
    return false;
  },

  destroy(root?: ParentNode | Document | HTMLElement) {
    const scope = root ?? document;
    Array.from(
      scope.querySelectorAll<HTMLElement>("[data-cdw-tabs]")
    ).forEach((node) => destroyTabs(node));
  },
};

declare global {
  interface Window {
    CDW?: Record<string, unknown>;
  }
}

if (typeof window !== "undefined") {
  window.CDW = window.CDW || {};
  (window.CDW as Record<string, unknown>).Tabs = TabsAPI;
}
