import type { FrameworkAPI } from "../core/init";

export interface ComponentDefinition {
  name: string;
  selector: string;
  init: (el: HTMLElement, api: FrameworkAPI) => void;
}

const registry: ComponentDefinition[] = [];

export function register(def: ComponentDefinition): void {
  const idx = registry.findIndex((item) => item.name === def.name);
  if (idx >= 0) {
    registry[idx] = def;
    return;
  }
  registry.push(def);
}

export function getAll(): ComponentDefinition[] {
  return [...registry];
}

export function getByName(name: string): ComponentDefinition | undefined {
  return registry.find((item) => item.name === name);
}

export function clear(): void {
  registry.length = 0;
}
