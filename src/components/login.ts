type LoginState = "default" | "loading" | "error";

const FEEDBACK_TEXTS: Record<LoginState, string> = {
  default: "Conexão criptografada. ERP, WMS e SaaS sob controle CDW-FW.",
  loading: "Validação em andamento...",
  error: "Ops! Usuário ou senha não conferem. Tente novamente.",
};

function setFeedback(feedback: HTMLElement | null, state: LoginState): void {
  if (!feedback) return;
  feedback.textContent = FEEDBACK_TEXTS[state];
  feedback.setAttribute("data-state", state);
}

function enableInputs(inputs: HTMLInputElement[], enabled: boolean): void {
  inputs.forEach((input) => {
    if (enabled) {
      input.removeAttribute("disabled");
    } else {
      input.setAttribute("disabled", "true");
    }
  });
}

function bindToggle(form: HTMLFormElement): void {
  const toggles = Array.from(form.querySelectorAll<HTMLButtonElement>("[data-cdw-login-toggle]"));
  toggles.forEach((toggle) => {
    const target = toggle.getAttribute("data-cdw-login-toggle");
    const input = target ? form.querySelector<HTMLInputElement>(`[data-cdw-login-input="${target}"]`) : null;
    if (!input) return;
    toggle.addEventListener("click", () => {
      const isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";
      toggle.textContent = isPassword ? "Ocultar" : "Mostrar";
      toggle.setAttribute("aria-pressed", String(!isPassword));
      input.focus();
    });
  });
}

export function bindLogin(element: HTMLElement): void {
  if (!(element instanceof HTMLFormElement)) return;
  const form = element as HTMLFormElement;
  const feedback = form.querySelector<HTMLElement>("[data-cdw-login-feedback]");
  const submitButton = form.querySelector<HTMLButtonElement>("[data-cdw-login-submit]");
  const googleButton = form.querySelector<HTMLButtonElement>("[data-cdw-login-google]");
  const inputs = Array.from(form.querySelectorAll<HTMLInputElement>("input"));
  let timer: number | null = null;

  bindToggle(form);
  setFeedback(feedback, "default");

  const resetState = (): void => {
    if (timer) {
      window.clearTimeout(timer);
      timer = null;
    }
    form.classList.remove("is-error", "is-loading");
    submitButton?.classList.remove("is-loading");
    enableInputs(inputs, true);
    if (submitButton?.hasAttribute("disabled")) {
      submitButton.removeAttribute("disabled");
    }
    setFeedback(feedback, "default");
  };

  inputs.forEach((input) => {
    input.addEventListener("input", resetState);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (form.classList.contains("is-loading")) return;
    form.classList.remove("is-error");
    form.classList.add("is-loading");
    submitButton?.classList.add("is-loading");
    submitButton?.setAttribute("disabled", "true");
    enableInputs(inputs, false);
    setFeedback(feedback, "loading");

    timer = window.setTimeout(() => {
      form.classList.remove("is-loading");
      form.classList.add("is-error");
      submitButton?.classList.remove("is-loading");
      enableInputs(inputs, true);
      submitButton?.removeAttribute("disabled");
      setFeedback(feedback, "error");
      timer = null;
    }, 1200);
  });

  googleButton?.addEventListener("click", () => {
    setFeedback(feedback, "loading");
    form.classList.add("is-loading");
    submitButton?.classList.add("is-loading");
    timer = window.setTimeout(() => {
      setFeedback(feedback, "default");
      form.classList.remove("is-loading");
      submitButton?.classList.remove("is-loading");
      timer = null;
    }, 900);
  });
}
