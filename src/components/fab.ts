type FabState = {
  root: HTMLElement;
  main: HTMLElement;
  actions: HTMLElement | null;
  open: boolean;
};

const FAB_SELECTOR = ".cdw-fab";
const stateMap = new WeakMap<HTMLElement, FabState>();
const openFabs = new Set<FabState>();
let globalBound = false;

function hasActions(actions: HTMLElement | null): boolean {
  if (!actions) return false;
  return actions.children.length > 0;
}

function setExpanded(state: FabState, expanded: boolean): void {
  state.main.setAttribute("aria-expanded", expanded ? "true" : "false");
  if (state.actions) {
    state.actions.setAttribute("aria-hidden", expanded ? "false" : "true");
  }
}

function openFab(state: FabState): void {
  if (state.open) return;
  state.open = true;
  state.root.classList.add("is-open");
  setExpanded(state, true);
  openFabs.add(state);
}

function closeFab(state: FabState): void {
  if (!state.open) return;
  state.open = false;
  state.root.classList.remove("is-open");
  setExpanded(state, false);
  openFabs.delete(state);
}

function toggleFab(state: FabState): void {
  if (state.open) {
    closeFab(state);
  } else {
    openFab(state);
  }
}

function closeAll(except?: FabState): void {
  openFabs.forEach((state) => {
    if (except && state === except) return;
    closeFab(state);
  });
}

function handleDocClick(event: Event): void {
  if (openFabs.size === 0) return;
  const target = event.target as HTMLElement | null;
  if (!target) return;
  openFabs.forEach((state) => {
    if (target.closest(FAB_SELECTOR) === state.root) return;
    closeFab(state);
  });
}

function handleDocKey(event: KeyboardEvent): void {
  if (event.key !== "Escape") return;
  closeAll();
}

function ensureGlobalHandlers(): void {
  if (globalBound) return;
  document.addEventListener("click", handleDocClick);
  document.addEventListener("keydown", handleDocKey);
  globalBound = true;
}

function applyWhatsApp(root: HTMLElement, main: HTMLElement): void {
  if (!root.classList.contains("cdw-fab--whatsapp")) return;
  if (!(main instanceof HTMLAnchorElement)) return;
  const phone = root.getAttribute("data-phone");
  if (!phone) return;
  const cleanPhone = phone.replace(/\D+/g, "");
  if (!cleanPhone) return;
  const message = root.getAttribute("data-message") || "";
  const base = `https://wa.me/${cleanPhone}`;
  const href = message ? `${base}?text=${encodeURIComponent(message)}` : base;
  main.href = href;
  main.target = "_blank";
  main.rel = "noopener";
}

function initFab(root: HTMLElement): FabState {
  const existing = stateMap.get(root);
  if (existing) return existing;

  const main = root.querySelector<HTMLElement>(".cdw-fab-main");
  if (!main) {
    throw new Error("FAB sem .cdw-fab-main");
  }

  const actions = root.querySelector<HTMLElement>(".cdw-fab-actions");
  const state: FabState = {
    root,
    main,
    actions,
    open: root.classList.contains("is-open"),
  };

  if (actions && !actions.id) {
    actions.id = `cdw-fab-actions-${Math.random().toString(36).slice(2, 9)}`;
  }

  if (actions) {
    main.setAttribute("aria-controls", actions.id);
  }
  main.setAttribute("aria-haspopup", actions ? "true" : "false");

  const hasMenu = hasActions(actions);
  setExpanded(state, state.open);

  if (hasMenu) {
    main.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeAll(state);
      toggleFab(state);
    });

    root.addEventListener("click", (event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      if (target.closest(".cdw-fab-action")) {
        closeFab(state);
      }
    });
  }

  applyWhatsApp(root, main);

  stateMap.set(root, state);
  return state;
}

export function bindFab(root: HTMLElement): void {
  if (!root.matches(FAB_SELECTOR)) return;
  ensureGlobalHandlers();
  initFab(root);
}
