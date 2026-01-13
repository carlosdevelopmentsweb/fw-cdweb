const CLOSE_SELECTOR = "[data-cdw-alert-close]";
const AUTO_CLOSE_ATTR = "data-autoclose";

function parseAutoClose(value: string | null): number | null {
  if (!value) return null;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

function closeAlert(alert: HTMLElement): void {
  if (alert.classList.contains("is-hiding")) return;
  alert.classList.add("is-hiding");
  window.setTimeout(() => {
    alert.remove();
  }, 200);
}

function initAlert(alert: HTMLElement): void {
  const closeButton = alert.querySelector<HTMLButtonElement>(CLOSE_SELECTOR);
  if (closeButton) {
    closeButton.addEventListener("click", () => closeAlert(alert));
  }

  const autoClose = parseAutoClose(alert.getAttribute(AUTO_CLOSE_ATTR));
  if (autoClose) {
    window.setTimeout(() => closeAlert(alert), autoClose);
  }
}

export function bindAlert(alert: HTMLElement): void {
  initAlert(alert);
}
