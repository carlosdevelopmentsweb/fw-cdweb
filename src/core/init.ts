import { bindAccordion } from "../components/accordion";
import { bindAlert } from "../components/alert";
import { bindGallery } from "../components/gallery";
import { bindModal } from "../components/modal";
import { bindNavbar } from "../components/navbar";
import { bindStage } from "../components/stage";
import { bindTooltip } from "../components/tooltip";

export interface FrameworkAPI {
  version: string;
  scan: (root?: ParentNode | Document | HTMLElement) => void;
}

const INITIALIZED_ATTR = "data-cdw-fw-initialized";
const OBSERVER_OPTIONS: MutationObserverInit = {
  childList: true,
  subtree: true,
};

const defs = [
  {
    name: "accordion",
    selector: "[data-cdw-accordion]",
    bind: bindAccordion,
  },
  {
    name: "alert",
    selector: "[data-cdw-alert]",
    bind: bindAlert,
  },
  {
    name: "gallery",
    selector: "[data-cdw-gallery]",
    bind: bindGallery,
  },
  {
    name: "modal",
    selector: "[data-cdw-modal]",
    bind: bindModal,
  },
  {
    name: "navbar",
    selector: "[data-cdw-navbar]",
    bind: bindNavbar,
  },
  {
    name: "stage",
    selector: "[data-cdw-stage]",
    bind: bindStage,
  },
  {
    name: "tooltip",
    selector: "[data-cdw-tooltip]",
    bind: bindTooltip,
  },
];

function getRoot(root?: ParentNode | Document | HTMLElement): ParentNode | Document | HTMLElement {
  return root ?? document;
}

function getInitializedSet(el: HTMLElement): Set<string> {
  const value = el.getAttribute(INITIALIZED_ATTR);
  if (!value) return new Set();
  return new Set(value.split(" ").filter(Boolean));
}

function markInitialized(el: HTMLElement, name: string): void {
  const set = getInitializedSet(el);
  if (set.has(name)) return;
  set.add(name);
  el.setAttribute(INITIALIZED_ATTR, Array.from(set).join(" "));
}

function shouldInit(el: HTMLElement, name: string): boolean {
  const set = getInitializedSet(el);
  return !set.has(name);
}

function collectTargets(
  root: ParentNode | Document | HTMLElement,
  selector: string
): HTMLElement[] {
  const nodes = Array.from(root.querySelectorAll<HTMLElement>(selector));
  if (root instanceof HTMLElement && root.matches(selector)) {
    nodes.unshift(root);
  }
  return nodes;
}

export function scan(root?: ParentNode | Document | HTMLElement): void {
  const rootNode = getRoot(root);

  for (const def of defs) {
    const targets = collectTargets(rootNode, def.selector);
    for (const el of targets) {
      if (!shouldInit(el, def.name)) continue;
      try {
        def.bind(el);
        markInitialized(el, def.name);
      } catch (err) {
        console.warn(`cdw-fw init issue: ${def.name}`, err);
      }
    }
  }
}

function observeDom(): void {
  if (typeof MutationObserver === "undefined") return;
  const target = document.body;
  if (!target) return;
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          scan(node);
        }
      });
    }
  });
  observer.observe(target, OBSERVER_OPTIONS);
}

function start(): void {
  scan(document);
  observeDom();
}

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => start(), { once: true });
  } else {
    start();
  }
}
