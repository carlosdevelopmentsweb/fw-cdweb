const HEADER_SELECTOR = ".cdw-table-header";
const ROW_SELECTOR = ".cdw-table-row";
const CELL_SELECTOR = ".cdw-table-cell";

function normalizeLabel(value: string): string {
  return value.trim().toLowerCase();
}

function getHeaderLabels(container: HTMLElement): string[] {
  const header = container.querySelector<HTMLElement>(HEADER_SELECTOR);
  if (!header) return [];
  const cells = Array.from(header.querySelectorAll<HTMLElement>(CELL_SELECTOR));
  return cells
    .map((cell) => (cell.getAttribute("data-label") ?? cell.textContent ?? "").trim())
    .filter(Boolean);
}

function ensureRowLabels(row: HTMLElement, headerLabels: string[]): void {
  if (headerLabels.length === 0) return;
  const cells = Array.from(row.querySelectorAll<HTMLElement>(CELL_SELECTOR));
  if (cells.length === 0) return;

  const hasAnyLabel = cells.some((cell) => {
    const label = cell.getAttribute("data-label");
    return label !== null && label.trim() !== "";
  });

  if (!hasAnyLabel) {
    cells.forEach((cell, idx) => {
      const label = headerLabels[idx];
      if (label) cell.setAttribute("data-label", label);
    });
    return;
  }

  cells.forEach((cell, idx) => {
    const label = cell.getAttribute("data-label");
    if ((!label || label.trim() === "") && headerLabels[idx]) {
      cell.setAttribute("data-label", headerLabels[idx]);
    }
  });

  const labelMap = new Map<string, HTMLElement>();
  cells.forEach((cell) => {
    const label = cell.getAttribute("data-label");
    if (!label) return;
    const key = normalizeLabel(label);
    if (!labelMap.has(key)) labelMap.set(key, cell);
  });

  const reordered: HTMLElement[] = [];
  const used = new Set<HTMLElement>();
  let needsRebuild = false;

  headerLabels.forEach((label, idx) => {
    const key = normalizeLabel(label);
    const found = labelMap.get(key);
    if (found) {
      reordered.push(found);
      used.add(found);
      if (!needsRebuild && cells[idx] !== found) {
        needsRebuild = true;
      }
      return;
    }

    const placeholder = document.createElement("div");
    placeholder.className = "cdw-table-cell";
    placeholder.setAttribute("data-label", label);
    placeholder.setAttribute("aria-hidden", "true");
    reordered.push(placeholder);
    needsRebuild = true;
  });

  cells.forEach((cell) => {
    if (used.has(cell)) return;
    reordered.push(cell);
    if (!needsRebuild && cells[reordered.length - 1] !== cell) {
      needsRebuild = true;
    }
  });

  if (needsRebuild) {
    row.replaceChildren(...reordered);
  }
}

export function bindTable(container: HTMLElement): void {
  const headerLabels = getHeaderLabels(container);
  if (headerLabels.length === 0) return;
  const rows = Array.from(container.querySelectorAll<HTMLElement>(ROW_SELECTOR));
  rows.forEach((row) => ensureRowLabels(row, headerLabels));
}
