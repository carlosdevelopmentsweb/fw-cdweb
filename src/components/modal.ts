type ModalState = {
  root: HTMLElement;
  dialog: HTMLElement;
  closeOnOverlay: boolean;
  lastActive: HTMLElement | null;
};

const MODAL_SELECTOR = "[data-cdw-modal]";
const OPEN_SELECTOR = "[data-cdw-modal-open]";
const CLOSE_SELECTOR = "[data-cdw-modal-close]";
const BODY_OPEN_CLASS = "cdw-modal-open";

const openModals: ModalState[] = [];
const modalStates = new WeakMap<HTMLElement, ModalState>();
let globalBound = false;

function getModalById(id: string): HTMLElement | null {
  const cleanId = id.replace(/^#/, "");
  return document.getElementById(cleanId);
}

function resolveTarget(target: string | null): HTMLElement | null {
  if (!target) return null;
  if (target.startsWith("#")) {
    return getModalById(target);
  }
  return document.querySelector<HTMLElement>(target);
}

function isOpen(modal: HTMLElement): boolean {
  return modal.classList.contains("is-open");
}

function closeModal(state: ModalState): void {
  if (!isOpen(state.root)) return;
  state.root.classList.remove("is-open");
  state.root.setAttribute("aria-hidden", "true");
  const index = openModals.findIndex((item) => item.root === state.root);
  if (index >= 0) openModals.splice(index, 1);
  if (openModals.length === 0) {
    document.body.classList.remove(BODY_OPEN_CLASS);
  }
  state.lastActive?.focus();
}

function openModal(state: ModalState): void {
  if (isOpen(state.root)) return;
  state.lastActive = document.activeElement as HTMLElement | null;
  state.root.classList.add("is-open");
  state.root.setAttribute("aria-hidden", "false");
  if (!openModals.find((item) => item.root === state.root)) {
    openModals.push(state);
  }
  document.body.classList.add(BODY_OPEN_CLASS);
  state.dialog.focus();
}

function initModal(modal: HTMLElement): ModalState {
  const existing = modalStates.get(modal);
  if (existing) return existing;
  const dialog = modal.querySelector<HTMLElement>(".cdw-modal__dialog");
  if (!dialog) {
    throw new Error("Modal sem .cdw-modal__dialog");
  }
  dialog.setAttribute("tabindex", "-1");
  modal.setAttribute("aria-hidden", "true");
  const closeOnOverlay = modal.getAttribute("data-close-overlay") !== "false";

  const state: ModalState = {
    root: modal,
    dialog,
    closeOnOverlay,
    lastActive: null,
  };

  modal.addEventListener("click", (event) => {
    const target = event.target as HTMLElement | null;
    if (!target) return;
    if (target.closest(CLOSE_SELECTOR)) {
      closeModal(state);
      return;
    }
    if (closeOnOverlay && target.classList.contains("cdw-modal__backdrop")) {
      closeModal(state);
    }
  });

  modalStates.set(modal, state);
  return state;
}

function handleGlobalOpen(event: Event): void {
  const target = event.target as HTMLElement | null;
  if (!target) return;
  const trigger = target.closest<HTMLElement>(OPEN_SELECTOR);
  if (!trigger) return;
  const selector = trigger.getAttribute("data-cdw-modal-open");
  const modal = resolveTarget(selector);
  if (!modal) return;
  event.preventDefault();
  const state = initModal(modal);
  openModal(state);
}

function handleGlobalKey(event: KeyboardEvent): void {
  if (event.key !== "Escape") return;
  const last = openModals[openModals.length - 1];
  if (!last) return;
  closeModal(last);
}

function ensureGlobalHandlers(): void {
  if (globalBound) return;
  document.addEventListener("click", handleGlobalOpen);
  document.addEventListener("keydown", handleGlobalKey);
  globalBound = true;
}

export function bindModal(root: HTMLElement): void {
  if (!root.matches(MODAL_SELECTOR)) return;
  ensureGlobalHandlers();
  initModal(root);
}
