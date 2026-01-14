type StageNavMode = "auto" | "manual";

interface StageOptions {
  autoplay: boolean;
  interval: number;
  pauseOnHover: boolean;
  loop: boolean;
  keyboard: boolean;
  swipe: boolean;
  startIndex: number;
  navMode: StageNavMode;
}

interface StageState {
  container: HTMLElement;
  track: HTMLElement;
  slides: HTMLElement[];
  navButtons: HTMLButtonElement[];
  prevButtons: HTMLButtonElement[];
  nextButtons: HTMLButtonElement[];
  counterEl: HTMLElement | null;
  progressEl: HTMLElement | null;
  options: StageOptions;
  current: number;
  timerId: number | null;
  hoverCount: number;
  touchStartX: number;
  touchStartY: number;
  touchActive: boolean;
  keyHandler: (event: KeyboardEvent) => void;
  clickHandler: (event: Event) => void;
  enterHandler: () => void;
  leaveHandler: () => void;
  touchStartHandler: (event: TouchEvent) => void;
  touchEndHandler: (event: TouchEvent) => void;
}

const TRACK_SELECTOR = ".cdw-stage-track";
const SLIDE_SELECTOR = ".cdw-stage-slide";
const PREV_SELECTOR = "[data-cdw-stage-prev]";
const NEXT_SELECTOR = "[data-cdw-stage-next]";
const GO_SELECTOR = "[data-cdw-stage-go]";
const COUNTER_SELECTOR = "[data-cdw-stage-counter]";
const PROGRESS_SELECTOR = "[data-cdw-stage-progress]";
const stateMap = new WeakMap<HTMLElement, StageState>();

function parseBoolean(value: string | null, fallback: boolean): boolean {
  if (value === null) return fallback;
  if (value === "") return true;
  return value === "true";
}

function parseNumber(value: string | null, fallback: number): number {
  if (!value) return fallback;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function resolveOptions(container: HTMLElement): StageOptions {
  const autoplayAttr = container.getAttribute("data-autoplay");
  const intervalAttr = container.getAttribute("data-interval");
  const pauseOnHover = parseBoolean(container.getAttribute("data-pause-on-hover"), true);
  const loop = parseBoolean(container.getAttribute("data-loop"), true);
  const keyboard = parseBoolean(container.getAttribute("data-keyboard"), true);
  const swipe = parseBoolean(container.getAttribute("data-swipe"), true);
  const startIndex = parseNumber(container.getAttribute("data-start"), 0);
  const navMode = container.getAttribute("data-nav") === "manual" ? "manual" : "auto";

  let autoplay = false;
  let interval = parseNumber(intervalAttr, 5200);

  if (autoplayAttr !== null) {
    autoplay = autoplayAttr === "" || autoplayAttr === "true";
    const autoParsed = Number.parseInt(autoplayAttr, 10);
    if (Number.isFinite(autoParsed)) {
      autoplay = true;
      interval = autoParsed;
    }
  }

  return {
    autoplay,
    interval,
    pauseOnHover,
    loop,
    keyboard,
    swipe,
    startIndex,
    navMode,
  };
}

function getSlides(container: HTMLElement): { track: HTMLElement; slides: HTMLElement[] } {
  const track = container.querySelector<HTMLElement>(TRACK_SELECTOR) || container;
  const slides = Array.from(track.querySelectorAll<HTMLElement>(SLIDE_SELECTOR));
  return { track, slides };
}

function clampIndex(state: StageState, nextIndex: number): number {
  const total = state.slides.length;
  if (total === 0) return 0;
  if (state.options.loop) {
    return (nextIndex + total) % total;
  }
  return Math.max(0, Math.min(total - 1, nextIndex));
}

function updateAria(state: StageState): void {
  const total = state.slides.length;
  state.slides.forEach((slide, index) => {
    slide.setAttribute("role", "group");
    slide.setAttribute("aria-roledescription", "slide");
    slide.setAttribute("aria-label", `${index + 1} de ${total}`);
    slide.setAttribute("aria-hidden", index === state.current ? "false" : "true");
  });
}

function updateIndicators(state: StageState): void {
  const total = state.slides.length;
  state.navButtons.forEach((button, index) => {
    const isActive = index === state.current;
    if (isActive) {
      button.setAttribute("aria-current", "true");
    } else {
      button.removeAttribute("aria-current");
    }
  });

  if (state.counterEl) {
    state.counterEl.textContent = `${state.current + 1}/${total}`;
  }

  if (state.progressEl) {
    const percent = total > 0 ? ((state.current + 1) / total) * 100 : 0;
    state.progressEl.style.width = `${percent}%`;
  }
}

function updateSlides(state: StageState, nextIndex: number): void {
  const total = state.slides.length;
  if (total === 0) return;

  const next = clampIndex(state, nextIndex);
  const prev = state.options.loop ? (next - 1 + total) % total : next - 1;
  const after = state.options.loop ? (next + 1) % total : next + 1;

  state.slides.forEach((slide, index) => {
    slide.classList.toggle("is-active", index === next);
    slide.classList.toggle("is-prev", prev >= 0 && index === prev);
    slide.classList.toggle("is-next", after < total && index === after);
  });

  state.current = next;
  updateAria(state);
  updateIndicators(state);
}

function startAutoplay(state: StageState): void {
  if (!state.options.autoplay || state.slides.length <= 1) return;
  if (state.timerId) window.clearInterval(state.timerId);
  state.timerId = window.setInterval(() => {
    updateSlides(state, state.current + 1);
  }, state.options.interval);
}

function stopAutoplay(state: StageState): void {
  if (!state.timerId) return;
  window.clearInterval(state.timerId);
  state.timerId = null;
}

function handlePrev(state: StageState): void {
  updateSlides(state, state.current - 1);
}

function handleNext(state: StageState): void {
  updateSlides(state, state.current + 1);
}

function handleGo(state: StageState, index: number): void {
  updateSlides(state, index);
}

function bindEvents(state: StageState): void {
  if (state.options.pauseOnHover) {
    state.container.addEventListener("mouseenter", state.enterHandler);
    state.container.addEventListener("mouseleave", state.leaveHandler);
    state.container.addEventListener("focusin", state.enterHandler);
    state.container.addEventListener("focusout", state.leaveHandler);
  }

  state.container.addEventListener("click", state.clickHandler);

  if (state.options.keyboard) {
    state.container.setAttribute("tabindex", "0");
    state.container.addEventListener("keydown", state.keyHandler);
  }

  if (state.options.swipe) {
    state.container.addEventListener("touchstart", state.touchStartHandler, { passive: true });
    state.container.addEventListener("touchend", state.touchEndHandler);
  }
}


function initStage(container: HTMLElement): void {
  if (stateMap.has(container)) return;

  const options = resolveOptions(container);
  const { track, slides } = getSlides(container);
  const navButtons = Array.from(container.querySelectorAll<HTMLButtonElement>(GO_SELECTOR));
  const prevButtons = Array.from(container.querySelectorAll<HTMLButtonElement>(PREV_SELECTOR));
  const nextButtons = Array.from(container.querySelectorAll<HTMLButtonElement>(NEXT_SELECTOR));
  const counterEl = container.querySelector<HTMLElement>(COUNTER_SELECTOR);
  const progressEl = container.querySelector<HTMLElement>(PROGRESS_SELECTOR);

  const state: StageState = {
    container,
    track,
    slides,
    navButtons,
    prevButtons,
    nextButtons,
    counterEl,
    progressEl,
    options,
    current: 0,
    timerId: null,
    hoverCount: 0,
    touchStartX: 0,
    touchStartY: 0,
    touchActive: false,
    keyHandler: (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePrev(state);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        handleNext(state);
      } else if (event.key === "Home") {
        event.preventDefault();
        handleGo(state, 0);
      } else if (event.key === "End") {
        event.preventDefault();
        handleGo(state, state.slides.length - 1);
      }
    },
    clickHandler: (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const prev = target.closest(PREV_SELECTOR) as HTMLButtonElement | null;
      const next = target.closest(NEXT_SELECTOR) as HTMLButtonElement | null;
      if (prev) {
        handlePrev(state);
        return;
      }
      if (next) {
        handleNext(state);
        return;
      }
      const go = target.closest(GO_SELECTOR) as HTMLButtonElement | null;
      if (go) {
        const value = go.getAttribute("data-cdw-stage-go");
        const index = Number.parseInt(value || "", 10);
        if (Number.isFinite(index)) {
          handleGo(state, index);
        }
      }
    },
    enterHandler: () => {
      state.hoverCount += 1;
      stopAutoplay(state);
    },
    leaveHandler: () => {
      state.hoverCount = Math.max(0, state.hoverCount - 1);
      if (state.hoverCount === 0) {
        startAutoplay(state);
      }
    },
    touchStartHandler: (event) => {
      if (event.touches.length !== 1) return;
      const touch = event.touches[0];
      state.touchActive = true;
      state.touchStartX = touch.clientX;
      state.touchStartY = touch.clientY;
    },
    touchEndHandler: (event) => {
      if (!state.touchActive) return;
      state.touchActive = false;
      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - state.touchStartX;
      const deltaY = touch.clientY - state.touchStartY;
      if (Math.abs(deltaX) < 30 || Math.abs(deltaX) < Math.abs(deltaY)) return;
      if (deltaX > 0) {
        handlePrev(state);
      } else {
        handleNext(state);
      }
    },
  };

  container.setAttribute("role", "region");
  container.setAttribute("aria-roledescription", "stage");
  if (slides.length > 0) {
    container.setAttribute("aria-live", "polite");
  }

  updateSlides(state, options.startIndex);
  bindEvents(state);
  startAutoplay(state);

  if (options.navMode === "auto" && navButtons.length === 0 && slides.length > 1) {
    // Fallback: create minimal nav buttons if none exist.
    const nav = document.createElement("div");
    nav.className = "cdw-stage-nav";
    slides.forEach((_, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "cdw-stage-indicator";
      button.setAttribute("data-cdw-stage-go", String(index));
      button.setAttribute("aria-label", `Ir para o slide ${index + 1}`);
      nav.appendChild(button);
      state.navButtons.push(button);
    });
    container.appendChild(nav);
    updateIndicators(state);
  }

  stateMap.set(container, state);
}

export function bindStage(container: HTMLElement): void {
  initStage(container);
}
