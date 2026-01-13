import { CDW_FW_VERSION } from "./env";
import { getAll, register } from "../components/_registry";
import type { ComponentDefinition } from "../components/_registry";

export interface FrameworkAPI {
  version: string;
  init: (root?: ParentNode | Document | HTMLElement) => FrameworkAPI;
  register: (def: ComponentDefinition) => void;
  scan: (root?: ParentNode | Document | HTMLElement) => void;
}

const INITIALIZED_ATTR = "data-cdw-fw-initialized";

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
  const defs = getAll();

  for (const def of defs) {
    const targets = collectTargets(rootNode, def.selector);
    for (const el of targets) {
      if (!shouldInit(el, def.name)) continue;
      try {
        def.init(el, api);
        markInitialized(el, def.name);
      } catch (err) {
        console.warn(`cdw-fw init issue: ${def.name}`, err);
      }
    }
  }
}

export function init(root?: ParentNode | Document | HTMLElement): FrameworkAPI {
  scan(root);
  return api;
}

const api: FrameworkAPI = {
  version: CDW_FW_VERSION,
  init,
  register,
  scan,
};
