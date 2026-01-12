import "../index";
import { init } from "../index";
import { CDW_FW_VERSION } from "../core/env";
import "./docs.css";
import gettingStarted from "./sections/getting-started.html?raw";
import colors from "./sections/colors.html?raw";
import buttons from "./sections/buttons.html?raw";
import utilities from "./sections/utilities.html?raw";
import layout from "./sections/layout.html?raw";

const ACTIVE_CLASS = "cdw-fw-docs-nav-link--active";
const COPY_ATTR = "data-cdw-fw-docs-copy";
const CODE_ATTR = "data-cdw-fw-docs-code";
const SECTION_ATTR = "data-cdw-fw-docs-section";
const NAV_ATTR = "data-cdw-fw-docs-nav";
const HIDDEN_TRIGGER_ATTR = "data-cdw-fw-docs-toggle-hidden";

function copyText(text: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "true");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  return Promise.resolve();
}

function setupCopy(root: HTMLElement): void {
  const buttonsList = root.querySelectorAll<HTMLButtonElement>(`[${COPY_ATTR}]`);
  for (const button of buttonsList) {
    button.addEventListener("click", async () => {
      const example = button.closest<HTMLElement>(".cdw-fw-docs-example");
      const code = example?.querySelector<HTMLElement>(`[${CODE_ATTR}]`);
      const text = code?.textContent ?? "";
      if (!text) return;

      const original = button.textContent ?? "Copiar";
      await copyText(text.trim());
      button.textContent = "Copiado!";
      button.setAttribute("data-cdw-fw-docs-copied", "true");
      window.setTimeout(() => {
        button.textContent = original;
        button.removeAttribute("data-cdw-fw-docs-copied");
      }, 1200);
    });
  }
}

function setupActiveNav(root: HTMLElement): void {
  const links = Array.from(root.querySelectorAll<HTMLAnchorElement>(`[${NAV_ATTR}]`));
  const sections = Array.from(root.querySelectorAll<HTMLElement>(`[${SECTION_ATTR}]`));

  const setActive = (id: string): void => {
    for (const link of links) {
      const href = link.getAttribute("href");
      const active = href === `#${id}`;
      link.classList.toggle(ACTIVE_CLASS, active);
      if (active) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible[0]) {
        const id = (visible[0].target as HTMLElement).id;
        if (id) setActive(id);
      }
    },
    { root: null, rootMargin: "-35% 0px -55% 0px", threshold: 0 }
  );

  for (const section of sections) observer.observe(section);
  if (sections[0]?.id) setActive(sections[0].id);
}

function setupSmoothScroll(root: HTMLElement): void {
  const links = root.querySelectorAll<HTMLAnchorElement>("a[href^='#']");
  for (const link of links) {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href) return;
      const target = root.querySelector<HTMLElement>(href);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    });
  }
}

function setupHiddenToggle(root: HTMLElement): void {
  const buttonsList = root.querySelectorAll<HTMLButtonElement>(`[${HIDDEN_TRIGGER_ATTR}]`);
  for (const button of buttonsList) {
    button.addEventListener("click", () => {
      const id = button.getAttribute(HIDDEN_TRIGGER_ATTR);
      if (!id) return;
      const target = root.querySelector<HTMLElement>(`#${id}`);
      if (!target) return;
      const isHidden = target.classList.toggle("cdw-fw-hidden");
      button.textContent = isHidden ? "Mostrar" : "Esconder";
    });
  }
}

export function renderDocs(): void {
  const app = document.querySelector<HTMLElement>("#app");
  if (!app) return;

  app.innerHTML = `
    <div class="cdw-fw-docs-app">
      <aside class="cdw-fw-docs-sidebar">
        <div class="cdw-fw-docs-brand">
          <span class="cdw-fw-docs-logo"></span>
          <div>
            <div class="cdw-fw-docs-brand-title">CDW-FW</div>
            <div class="cdw-fw-docs-brand-sub">Framework Front-end</div>
          </div>
        </div>
        <div class="cdw-fw-docs-side-version">v${CDW_FW_VERSION}</div>
        <nav class="cdw-fw-docs-nav">
          <a class="cdw-fw-docs-nav-link" href="#comecando" ${NAV_ATTR}>Come\u00e7ando</a>
          <a class="cdw-fw-docs-nav-link" href="#cores" ${NAV_ATTR}>Cores (Accent System)</a>
          <div class="cdw-fw-docs-nav-group">
            <a class="cdw-fw-docs-nav-title" href="#cores" ${NAV_ATTR}>Cores</a>
            <a class="cdw-fw-docs-nav-link cdw-fw-docs-nav-link--sub" href="#cores-intro" ${NAV_ATTR}>Introdu\u00e7\u00e3o</a>
            <a class="cdw-fw-docs-nav-link cdw-fw-docs-nav-link--sub" href="#cores-paleta" ${NAV_ATTR}>Paleta</a>
            <a class="cdw-fw-docs-nav-link cdw-fw-docs-nav-link--sub" href="#cores-uso" ${NAV_ATTR}>Uso b\u00e1sico</a>
          </div>
          <div class="cdw-fw-docs-nav-group">
            <a class="cdw-fw-docs-nav-title" href="#botoes" ${NAV_ATTR}>Bot\u00f5es</a>
            <a class="cdw-fw-docs-nav-link cdw-fw-docs-nav-link--sub" href="#botoes-intro" ${NAV_ATTR}>Introdu\u00e7\u00e3o</a>
            <a class="cdw-fw-docs-nav-link cdw-fw-docs-nav-link--sub" href="#botoes-estrutura" ${NAV_ATTR}>Estrutura b\u00e1sica</a>
            <a class="cdw-fw-docs-nav-link cdw-fw-docs-nav-link--sub" href="#botoes-formas" ${NAV_ATTR}>Formas</a>
            <a class="cdw-fw-docs-nav-link cdw-fw-docs-nav-link--sub" href="#botoes-estilos" ${NAV_ATTR}>Estilos</a>
            <a class="cdw-fw-docs-nav-link cdw-fw-docs-nav-link--sub" href="#botoes-tamanhos" ${NAV_ATTR}>Tamanhos</a>
            <a class="cdw-fw-docs-nav-link cdw-fw-docs-nav-link--sub" href="#botoes-combinacoes" ${NAV_ATTR}>Combina\u00e7\u00f5es</a>
            <a class="cdw-fw-docs-nav-link cdw-fw-docs-nav-link--sub" href="#botoes-estados" ${NAV_ATTR}>Estados</a>
          </div>
          <div class="cdw-fw-docs-nav-group">
            <a class="cdw-fw-docs-nav-title" href="#utilitarios" ${NAV_ATTR}>Utilit\u00e1rios</a>
            <a class="cdw-fw-docs-nav-link cdw-fw-docs-nav-link--sub" href="#util-espacamento" ${NAV_ATTR}>Espa\u00e7amento</a>
            <a class="cdw-fw-docs-nav-link cdw-fw-docs-nav-link--sub" href="#util-display" ${NAV_ATTR}>Display</a>
            <a class="cdw-fw-docs-nav-link cdw-fw-docs-nav-link--sub" href="#util-flex" ${NAV_ATTR}>Flex</a>
            <a class="cdw-fw-docs-nav-link cdw-fw-docs-nav-link--sub" href="#util-gap" ${NAV_ATTR}>Gap</a>
            <a class="cdw-fw-docs-nav-link cdw-fw-docs-nav-link--sub" href="#util-tamanho" ${NAV_ATTR}>Tamanho</a>
            <a class="cdw-fw-docs-nav-link cdw-fw-docs-nav-link--sub" href="#util-texto" ${NAV_ATTR}>Alinhamento de texto</a>
          </div>
          <div class="cdw-fw-docs-nav-group">
            <a class="cdw-fw-docs-nav-title" href="#layout" ${NAV_ATTR}>Layout</a>
            <a class="cdw-fw-docs-nav-link cdw-fw-docs-nav-link--sub" href="#layout-container" ${NAV_ATTR}>Container</a>
            <a class="cdw-fw-docs-nav-link cdw-fw-docs-nav-link--sub" href="#layout-grid" ${NAV_ATTR}>Grid</a>
          </div>
        </nav>
        <div class="cdw-fw-docs-side-footer">Documenta\u00e7\u00e3o local do CDW-FW</div>
      </aside>
      <main class="cdw-fw-docs-main">
        <div class="cdw-fw-docs-topbar">
          <div>
            <div class="cdw-fw-docs-breadcrumb">Docs / Base</div>
            <div class="cdw-fw-docs-title">Documenta\u00e7\u00e3o CDW-FW</div>
          </div>
          <div class="cdw-fw-docs-version">v${CDW_FW_VERSION}</div>
        </div>
        <div class="cdw-fw-docs-content">
          ${gettingStarted}
          ${colors}
          ${buttons}
          ${utilities}
          ${layout}
        </div>
      </main>
    </div>
  `;

  setupCopy(app);
  setupActiveNav(app);
  setupSmoothScroll(app);
  setupHiddenToggle(app);
  init();
}
