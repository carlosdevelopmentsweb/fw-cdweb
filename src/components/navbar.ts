interface NavbarState {
  container: HTMLElement;
  panel: HTMLElement | null;
  toggle: HTMLButtonElement | null;
  overlay: HTMLElement | null;
  closeButtons: HTMLElement[];
  subToggles: HTMLElement[];
  keyHandler: (event: KeyboardEvent) => void;
  clickHandler: (event: Event) => void;
}

const PANEL_SELECTOR = ".cdw-navbar-panel";
const TOGGLE_SELECTOR = "[data-cdw-navbar-toggle]";
const CLOSE_SELECTOR = "[data-cdw-navbar-close]";
const SUB_TOGGLE_SELECTOR = "[data-cdw-navbar-sub]";
const stateMap = new WeakMap<HTMLElement, NavbarState>();

function ensurePanelId(panel: HTMLElement, container: HTMLElement): string {
  if (panel.id) return panel.id;
  const id = `cdw-navbar-panel-${Math.random().toString(36).slice(2, 8)}`;
  panel.id = id;
  container.setAttribute("data-cdw-navbar-panel", id);
  return id;
}

function setExpanded(toggle: HTMLElement | null, expanded: boolean): void {
  if (!toggle) return;
  toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
}

function openNavbar(state: NavbarState): void {
  state.container.classList.add("is-open");
  setExpanded(state.toggle, true);
}

function closeNavbar(state: NavbarState): void {
  state.container.classList.remove("is-open");
  setExpanded(state.toggle, false);
}

function toggleNavbar(state: NavbarState): void {
  if (state.container.classList.contains("is-open")) {
    closeNavbar(state);
  } else {
    openNavbar(state);
  }
}

function toggleSubmenu(trigger: HTMLElement): void {
  const parent = trigger.closest(".cdw-navbar-item");
  if (!parent) return;
  const isOpen = parent.classList.toggle("is-open");
  trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

function initNavbar(container: HTMLElement): void {
  if (stateMap.has(container)) return;

  const panel = container.querySelector<HTMLElement>(PANEL_SELECTOR);
  const toggle = container.querySelector<HTMLButtonElement>(TOGGLE_SELECTOR);
  const overlay = container.querySelector<HTMLElement>(".cdw-navbar-overlay");
  const closeButtons = Array.from(container.querySelectorAll<HTMLElement>(CLOSE_SELECTOR));
  const subToggles = Array.from(container.querySelectorAll<HTMLElement>(SUB_TOGGLE_SELECTOR));

  if (panel) {
    const panelId = ensurePanelId(panel, container);
    if (toggle) {
      toggle.setAttribute("aria-controls", panelId);
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menu");
    }
  }

  const state: NavbarState = {
    container,
    panel,
    toggle,
    overlay,
    closeButtons,
    subToggles,
    keyHandler: (event) => {
      if (event.key === "Escape") {
        closeNavbar(state);
      }
    },
    clickHandler: (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const toggleEl = target.closest(TOGGLE_SELECTOR);
      if (toggleEl) {
        toggleNavbar(state);
        return;
      }

      if (target.closest(CLOSE_SELECTOR) || target.closest(".cdw-navbar-overlay")) {
        closeNavbar(state);
        return;
      }

      const submenu = target.closest(SUB_TOGGLE_SELECTOR);
      if (submenu) {
        event.preventDefault();
        toggleSubmenu(submenu as HTMLElement);
      }
    },
  };

  container.addEventListener("click", state.clickHandler);
  container.addEventListener("keydown", state.keyHandler);
  stateMap.set(container, state);
}

export function bindNavbar(container: HTMLElement): void {
  initNavbar(container);
}
