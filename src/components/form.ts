type SelectAdvancedState = {
  root: HTMLElement;
  trigger: HTMLButtonElement;
  search: HTMLInputElement | null;
  options: HTMLButtonElement[];
  panel: HTMLElement;
  valueEl: HTMLElement | null;
};

type DropzoneState = {
  root: HTMLElement;
  input: HTMLInputElement | null;
  list: HTMLElement | null;
  files: File[];
};

const selectStates = new WeakMap<HTMLElement, SelectAdvancedState>();
const dropzoneStates = new WeakMap<HTMLElement, DropzoneState>();

function setInputFiles(input: HTMLInputElement, files: File[]): void {
  const transfer = new DataTransfer();
  files.forEach((file) => transfer.items.add(file));
  input.files = transfer.files;
}

function getOptions(root: HTMLElement): HTMLButtonElement[] {
  return Array.from(root.querySelectorAll<HTMLButtonElement>(".cdw-form-select-option"));
}

function setActiveOption(state: SelectAdvancedState, option: HTMLButtonElement | null): void {
  state.options.forEach((opt) => opt.classList.remove("is-active"));
  if (option) option.classList.add("is-active");
}

function setValue(state: SelectAdvancedState, option: HTMLButtonElement): void {
  const value = option.getAttribute("data-value") || option.textContent || "";
  const label = option.textContent || value;
  if (state.valueEl) state.valueEl.textContent = label.trim();
  state.trigger.setAttribute("data-value", value);
  setActiveOption(state, option);
}

function togglePanel(state: SelectAdvancedState, open: boolean, focusTrigger = true): void {
  state.root.classList.toggle("is-open", open);
  state.trigger.setAttribute("aria-expanded", open ? "true" : "false");
  if (open && state.search) {
    state.search.focus();
  } else if (focusTrigger) {
    state.trigger.focus();
  }
}

function onSelectClick(state: SelectAdvancedState, event: Event): void {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const option = target.closest<HTMLButtonElement>(".cdw-form-select-option");
  if (!option) return;
  setValue(state, option);
  togglePanel(state, false);
}

function onTriggerClick(state: SelectAdvancedState): void {
  const isOpen = state.root.classList.contains("is-open");
  togglePanel(state, !isOpen);
}

function onSearchInput(state: SelectAdvancedState, value: string): void {
  const query = value.trim().toLowerCase();
  state.options.forEach((option) => {
    const text = (option.textContent || "").trim().toLowerCase();
    option.style.display = text.includes(query) ? "" : "none";
  });
}

function onKeydown(state: SelectAdvancedState, event: KeyboardEvent): void {
  const key = event.key;
  const visibleOptions = state.options.filter((opt) => opt.style.display !== "none");
  if (!visibleOptions.length) return;

  const currentIndex = visibleOptions.findIndex((opt) => opt.classList.contains("is-active"));
  if (key === "ArrowDown" || key === "ArrowUp") {
    event.preventDefault();
    const nextIndex =
      key === "ArrowDown"
        ? Math.min(visibleOptions.length - 1, currentIndex + 1)
        : Math.max(0, currentIndex - 1);
    setActiveOption(state, visibleOptions[nextIndex] || visibleOptions[0]);
    return;
  }
  if (key === "Enter") {
    event.preventDefault();
    const active = visibleOptions[currentIndex] || visibleOptions[0];
    if (active) setValue(state, active);
    togglePanel(state, false);
    return;
  }
  if (key === "Escape") {
    event.preventDefault();
    togglePanel(state, false);
  }
}

function bindSelectAdvanced(root: HTMLElement): void {
  const trigger = root.querySelector<HTMLButtonElement>(".cdw-form-select-trigger");
  const panel = root.querySelector<HTMLElement>(".cdw-form-select-panel");
  if (!trigger || !panel) return;

  const state: SelectAdvancedState = {
    root,
    trigger,
    search: root.querySelector<HTMLInputElement>(".cdw-form-select-search"),
    options: getOptions(root),
    panel,
    valueEl: root.querySelector<HTMLElement>(".cdw-form-select-value"),
  };

  if (!state.options.length) return;
  if (!state.valueEl) {
    const valueEl = document.createElement("span");
    valueEl.className = "cdw-form-select-value";
    trigger.prepend(valueEl);
    state.valueEl = valueEl;
  }

  trigger.setAttribute("aria-haspopup", "listbox");
  trigger.setAttribute("aria-expanded", "false");
  panel.setAttribute("role", "listbox");

  if (!state.options.some((opt) => opt.classList.contains("is-active"))) {
    setActiveOption(state, state.options[0]);
    setValue(state, state.options[0]);
  }

  trigger.addEventListener("click", () => onTriggerClick(state));
  panel.addEventListener("click", (event) => onSelectClick(state, event));
  root.addEventListener("keydown", (event) => onKeydown(state, event));

  if (state.search) {
    state.search.addEventListener("input", (event) => {
      const target = event.target as HTMLInputElement;
      onSearchInput(state, target.value);
    });
  }

  document.addEventListener("click", (event) => {
    if (!root.contains(event.target as Node)) {
      togglePanel(state, false, false);
    }
  });

  selectStates.set(root, state);
}

function bindDropzone(root: HTMLElement): void {
  const input = root.querySelector<HTMLInputElement>(".cdw-form-dropzone-input");
  const wrap = root.closest<HTMLElement>(".cdw-form-dropzone-wrap");
  const list =
    root.querySelector<HTMLElement>(".cdw-form-dropzone-list") ||
    wrap?.querySelector<HTMLElement>(".cdw-form-dropzone-list") ||
    null;
  const state: DropzoneState = { root, input, list, files: [] };

  if (!input) return;

  const renderFiles = () => {
    if (!list) return;
    list.innerHTML = "";
    if (!state.files.length) return;
    state.files.forEach((file, index) => {
      const item = document.createElement("div");
      item.className = "cdw-form-dropzone-item";
      item.innerHTML = `<span>${file.name}</span><span>${Math.round(
        file.size / 1024
      )}kb</span><button class="cdw-form-dropzone-remove" type="button" data-index="${index}" aria-label="Remover">Remover</button>`;
      list.appendChild(item);
    });
  };

  input.addEventListener("change", () => {
    state.files = Array.from(input.files || []);
    renderFiles();
  });
  list?.addEventListener("click", (event) => {
    const target = event.target as HTMLElement | null;
    if (!target) return;
    const button = target.closest<HTMLButtonElement>(".cdw-form-dropzone-remove");
    if (!button) return;
    const index = Number(button.getAttribute("data-index"));
    if (!Number.isFinite(index)) return;
    state.files.splice(index, 1);
    setInputFiles(input, state.files);
    renderFiles();
  });
  root.addEventListener("dragenter", (event) => {
    event.preventDefault();
    root.classList.add("is-dragging");
  });
  root.addEventListener("dragover", (event) => {
    event.preventDefault();
    root.classList.add("is-dragging");
  });
  root.addEventListener("dragleave", () => {
    root.classList.remove("is-dragging");
  });
  root.addEventListener("drop", (event) => {
    event.preventDefault();
    root.classList.remove("is-dragging");
    const files = (event as DragEvent).dataTransfer?.files;
    if (files && input) {
      state.files = state.files.concat(Array.from(files));
      setInputFiles(input, state.files);
      renderFiles();
    }
  });

  dropzoneStates.set(root, state);
}

export function bindForm(root: HTMLElement): void {
  const selects = Array.from(root.querySelectorAll<HTMLElement>(".cdw-form-select-advanced"));
  selects.forEach((select) => bindSelectAdvanced(select));

  const dropzones = Array.from(root.querySelectorAll<HTMLElement>(".cdw-form-dropzone"));
  dropzones.forEach((zone) => bindDropzone(zone));

  const fileBoxes = Array.from(root.querySelectorAll<HTMLElement>(".cdw-form-filebox"));
  fileBoxes.forEach((box) => {
    const input = box.querySelector<HTMLInputElement>(".cdw-form-file-input");
    const list = box.querySelector<HTMLElement>(".cdw-form-file-list");
    const button = box.querySelector<HTMLButtonElement>(".cdw-form-file-button");
    if (!input || !list || !button) return;

    const renderFiles = () => {
      list.innerHTML = "";
      const file = input.files && input.files[0] ? input.files[0] : null;
      if (!file) return;
      const item = document.createElement("div");
      item.className = "cdw-form-file-item";
      item.innerHTML = `<span>${file.name}</span><button class="cdw-form-file-remove" type="button" aria-label="Remover">Remover</button>`;
      list.appendChild(item);
    };

    button.addEventListener("click", () => input.click());
    input.addEventListener("change", () => renderFiles());
    list.addEventListener("click", (event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const removeButton = target.closest<HTMLButtonElement>(".cdw-form-file-remove");
      if (!removeButton) return;
      input.value = "";
      renderFiles();
    });
  });

  const counters = Array.from(
    root.querySelectorAll<HTMLTextAreaElement>("textarea[data-cdw-form-counter]")
  );
  counters.forEach((textarea) => {
    const maxAttr = textarea.getAttribute("maxlength") || textarea.getAttribute("data-max");
    const max = maxAttr ? Number(maxAttr) : 240;
    let counter = textarea.nextElementSibling as HTMLElement | null;
    if (!counter || !counter.classList.contains("cdw-form-counter")) {
      counter = document.createElement("div");
      counter.className = "cdw-form-counter";
      textarea.insertAdjacentElement("afterend", counter);
    }
    const updateCount = () => {
      const count = textarea.value.length;
      counter.textContent = `${count}/${Number.isFinite(max) ? max : count}`;
    };
    textarea.addEventListener("input", updateCount);
    updateCount();
  });
}
