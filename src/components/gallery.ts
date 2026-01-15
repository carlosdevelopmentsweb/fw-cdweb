interface FocusState {
  root: HTMLElement;
  frame: HTMLElement;
  media: HTMLElement;
  closeButtons: HTMLElement[];
  prev: HTMLButtonElement;
  next: HTMLButtonElement;
  items: HTMLElement[];
  index: number;
  controlsEnabled: boolean;
  lastTap: number;
  keyHandler: (event: KeyboardEvent) => void;
}

const GALLERY_SELECTOR = "[data-cdw-gallery]";
const ITEM_SELECTOR = "[data-cdw-gallery-item], .cdw-gallery__item";
const MEDIA_SELECTOR = ".cdw-gallery__media";
const LABEL_SELECTOR = ".cdw-gallery__label";
const PRODUCT_SELECTOR = "[data-cdw-gallery-product]";

let focusState: FocusState | null = null;

function getAspectClass(media: HTMLElement | null): string {
  if (!media) return "cdw-gallery__media--landscape";
  const match = Array.from(media.classList).find((cls) =>
    cls.startsWith("cdw-gallery__media--")
  );
  return match ?? "cdw-gallery__media--landscape";
}

function ensureFocus(): FocusState {
  if (focusState) return focusState;

  const root = document.createElement("div");
  root.className = "cdw-gallery-focus cdw-gallery-focus--clean";
  root.setAttribute("aria-hidden", "true");
  root.innerHTML = `
    <div class="cdw-gallery-focus__backdrop" data-cdw-gallery-close></div>
    <div class="cdw-gallery-focus__frame" role="dialog" aria-modal="true">
      <button class="cdw-gallery-focus__close" type="button" data-cdw-gallery-close aria-label="Fechar"></button>
      <div class="cdw-gallery-focus__media"></div>
      <button class="cdw-gallery-focus__nav cdw-gallery-focus__nav--prev" type="button" data-cdw-gallery-prev aria-label="Anterior"></button>
      <button class="cdw-gallery-focus__nav cdw-gallery-focus__nav--next" type="button" data-cdw-gallery-next aria-label="Proximo"></button>
    </div>
  `;
  document.body.appendChild(root);

  const frame = root.querySelector<HTMLElement>(".cdw-gallery-focus__frame")!;
  const media = root.querySelector<HTMLElement>(".cdw-gallery-focus__media")!;
  const prev = root.querySelector<HTMLButtonElement>("[data-cdw-gallery-prev]")!;
  const next = root.querySelector<HTMLButtonElement>("[data-cdw-gallery-next]")!;
  const closeButtons = Array.from(root.querySelectorAll<HTMLElement>("[data-cdw-gallery-close]"));

  const state: FocusState = {
    root,
    frame,
    media,
    prev,
    next,
    closeButtons,
    items: [],
    index: 0,
    controlsEnabled: false,
    lastTap: 0,
    keyHandler: (event) => {
      if (!state.root.classList.contains("is-open")) return;
      if (event.key === "Escape") {
        closeFocus();
      }
      if (state.controlsEnabled && event.key === "ArrowLeft") {
        showItem(state.index - 1);
      }
      if (state.controlsEnabled && event.key === "ArrowRight") {
        showItem(state.index + 1);
      }
    },
  };

  root.addEventListener("click", (event) => {
    const target = event.target as HTMLElement | null;
    if (!target) return;
    if (target.closest("[data-cdw-gallery-close]")) {
      closeFocus();
      return;
    }
    if (target.closest("[data-cdw-gallery-prev]")) {
      showItem(state.index - 1);
      return;
    }
    if (target.closest("[data-cdw-gallery-next]")) {
      showItem(state.index + 1);
    }
  });

  media.addEventListener("click", () => {
    const now = Date.now();
    if (now - state.lastTap < 280) {
      state.root.classList.toggle("is-zoomed");
    }
    state.lastTap = now;
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => closeFocus());
  });

  document.addEventListener("keydown", state.keyHandler);

  focusState = state;
  return state;
}

function setFocusVariant(root: HTMLElement, variant: string | null): void {
  root.classList.remove("cdw-gallery-focus--clean", "cdw-gallery-focus--immersive");
  if (variant === "immersive") {
    root.classList.add("cdw-gallery-focus--immersive");
  } else {
    root.classList.add("cdw-gallery-focus--clean");
  }
}

function closeFocus(): void {
  if (!focusState) return;
  focusState.root.classList.remove("is-open", "is-zoomed");
  focusState.root.setAttribute("aria-hidden", "true");
  document.body.classList.remove("cdw-gallery-focus-open");
}

function showItem(index: number): void {
  if (!focusState) return;
  const state = focusState;
  const max = state.items.length;
  if (!max) return;
  const nextIndex = (index + max) % max;
  const item = state.items[nextIndex];
  const media = item.querySelector<HTMLElement>(MEDIA_SELECTOR);
  const label = item.querySelector<HTMLElement>(LABEL_SELECTOR)?.textContent?.trim() ?? "Image";
  const aspectClass = getAspectClass(media);

  state.media.className = `cdw-gallery-focus__media ${aspectClass}`;
  state.media.innerHTML = `<span class="cdw-gallery__label cdw-gallery__label--focus">${label}</span>`;
  state.index = nextIndex;
}

function openFocus(container: HTMLElement, item: HTMLElement, controlsEnabled: boolean): void {
  const state = ensureFocus();
  const items = Array.from(container.querySelectorAll<HTMLElement>(ITEM_SELECTOR));
  state.items = items;
  state.controlsEnabled = controlsEnabled && items.length > 1;
  state.prev.style.display = state.controlsEnabled ? "block" : "none";
  state.next.style.display = state.controlsEnabled ? "block" : "none";
  setFocusVariant(state.root, container.getAttribute("data-cdw-gallery-focus"));
  state.root.classList.add("is-open");
  state.root.setAttribute("aria-hidden", "false");
  document.body.classList.add("cdw-gallery-focus-open");
  const index = Math.max(0, items.indexOf(item));
  showItem(index);
}

function handleStripControls(container: HTMLElement, list: HTMLElement | null): void {
  if (!list) return;
  const prev = container.querySelector<HTMLElement>("[data-cdw-gallery-strip-prev]");
  const next = container.querySelector<HTMLElement>("[data-cdw-gallery-strip-next]");
  if (!prev && !next) return;
  const scrollByAmount = () => Math.max(180, list.clientWidth * 0.75);
  prev?.addEventListener("click", () => {
    list.scrollBy({ left: -scrollByAmount(), behavior: "smooth" });
  });
  next?.addEventListener("click", () => {
    list.scrollBy({ left: scrollByAmount(), behavior: "smooth" });
  });
}

function setLoading(
  media: HTMLElement,
  image: HTMLImageElement | null,
  onReady?: () => void,
  forceWait?: boolean
): void {
  media.classList.add("is-loading");
  if (!image) {
    window.setTimeout(() => {
      media.classList.remove("is-loading");
      onReady?.();
    }, 220);
    return;
  }
  const finish = () => {
    media.classList.remove("is-loading");
    onReady?.();
  };
  if (forceWait) {
    image.addEventListener("load", finish, { once: true });
    return;
  }
  if (image.complete) {
    requestAnimationFrame(finish);
  } else {
    image.addEventListener("load", finish, { once: true });
  }
}

function bindProductGallery(container: HTMLElement): void {
  const product = container.querySelector<HTMLElement>(".cdw-gallery__product");
  if (!product) return;
  const main = product.querySelector<HTMLElement>(".cdw-gallery__product-main");
  const media = main?.querySelector<HTMLElement>(".cdw-gallery__media");
  const label = main?.querySelector<HTMLElement>(".cdw-gallery__label");
  const image = main?.querySelector<HTMLImageElement>(".cdw-gallery__media img");
  const info = product.querySelector<HTMLElement>(".cdw-gallery__product-info");
  const infoTitle = info?.querySelector<HTMLElement>(".cdw-gallery__product-info-title");
  const infoDesc = info?.querySelector<HTMLElement>(".cdw-gallery__product-info-desc");
  const infoMeta = info?.querySelector<HTMLElement>(".cdw-gallery__product-info-meta");
  const thumbs = Array.from(
    product.querySelectorAll<HTMLButtonElement>("[data-cdw-gallery-thumb]")
  );
  if (!main || !media || !thumbs.length) return;

  const updateMain = (thumb: HTMLButtonElement) => {
    thumbs.forEach((btn) => btn.classList.remove("is-active"));
    thumb.classList.add("is-active");
    const nextLabel = thumb.getAttribute("data-label") ?? "Product";
    const nextTitle = thumb.getAttribute("data-title") ?? nextLabel;
    const nextDesc = thumb.getAttribute("data-desc") ?? "";
    const nextMeta = thumb.getAttribute("data-meta") ?? "";
    const nextAspect = thumb.getAttribute("data-aspect") ?? "cdw-gallery__media--square";
    const nextSrc = thumb.getAttribute("data-src");
    const nextAlt = thumb.getAttribute("data-alt") ?? nextLabel;
    media.className = `cdw-gallery__media ${nextAspect}`;
    const applyInfo = () => {
      if (label) {
        label.textContent = nextLabel;
      }
      if (infoTitle) {
        infoTitle.textContent = nextTitle;
      }
      if (infoDesc) {
        infoDesc.textContent = nextDesc;
      }
      if (infoMeta) {
        infoMeta.innerHTML = nextMeta
          ? nextMeta
              .split("|")
              .map((item) => `<span>${item.trim()}</span>`)
              .join("")
          : "";
      }
      if (info) {
        info.classList.remove("is-loading");
      }
    };
    if (info) {
      info.classList.add("is-loading");
    }
    if (image && nextSrc) {
      const resolved = new URL(nextSrc, window.location.href).href;
      if (image.src === resolved) {
        setLoading(media, image, applyInfo);
        return;
      }
      setLoading(media, image, applyInfo, true);
      image.src = nextSrc;
      image.alt = nextAlt;
    } else {
      setLoading(media, image ?? null, applyInfo);
    }
  };

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", (event) => {
      if (!(event.target instanceof HTMLImageElement)) return;
      updateMain(thumb);
    });
  });

  const initial = thumbs.find((btn) => btn.classList.contains("is-active")) ?? thumbs[0];
  updateMain(initial);
}

export function bindGallery(container: HTMLElement): void {
  if (!container.matches(GALLERY_SELECTOR)) return;
  if (container.matches(PRODUCT_SELECTOR)) {
    bindProductGallery(container);
    return;
  }
  const list = container.querySelector<HTMLElement>(".cdw-gallery__list");
  handleStripControls(container, list);
  container.addEventListener("click", (event) => {
    const target = event.target as HTMLElement | null;
    if (!target) return;
    const item = target.closest<HTMLElement>(ITEM_SELECTOR);
    if (!item) return;
    const media = item.querySelector<HTMLElement>(MEDIA_SELECTOR);
    const image = media?.querySelector<HTMLImageElement>("img") ?? null;
    if (media) {
      setLoading(media, image);
    }
    const controlsEnabled = container.getAttribute("data-cdw-gallery-controls") === "true";
    openFocus(container, item, controlsEnabled);
  });
}
