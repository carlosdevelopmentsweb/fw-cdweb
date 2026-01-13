(function () {
  const app = document.getElementById("app");
  if (!app) {
    return;
  }

  const framework = window.CDWFW || null;
  const version =
    framework && typeof framework.CDW_FW_VERSION === "string"
      ? framework.CDW_FW_VERSION
      : "0.0.0";

  const sections = {
  layout: `<section id="layout" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Layout</h2>
    <p class="cdw-fw-docs-lead">
      Containers e grid de 12 colunas para composições responsivas.
    </p>
  </div>

  <div class="cdw-fw-docs-toc">
    <span class="cdw-fw-docs-toc-title">Índice desta página</span>
    <a href="#layout-container">Container</a>
    <a href="#layout-grid">Grid</a>
  </div>

  <div class="cdw-fw-docs-subsection" id="layout-container" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Container</h3>
    <p class="cdw-fw-docs-subdesc">
      Centralize conteúdo com largura máxima ou ocupe toda a largura com o fluid.
      <span class="cdw-fw-docs-when">Quando usar: páginas com leitura centralizada.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-container</span>
      <span>cdw-fw-container-fluid</span>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Container vs container-fluid</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-docs-layout-band">Container</div>
        <div class="cdw-fw-container" style="margin-top:10px;">
          <div class="cdw-fw-docs-grid-demo">Conteúdo centralizado</div>
        </div>
        <div class="cdw-fw-docs-layout-band" style="margin-top:14px;">Container fluid</div>
        <div class="cdw-fw-container-fluid" style="margin-top:10px;">
          <div class="cdw-fw-docs-grid-demo">Conteúdo full width</div>
        </div>
        <div class="cdw-fw-docs-example-caption">
          O container respeita max-width; o fluid ocupa 100%.
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-container"&gt;...&lt;/div&gt;
&lt;div class="cdw-fw-container-fluid"&gt;...&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="layout-grid" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Grid 12 colunas</h3>
    <p class="cdw-fw-docs-subdesc">
      Estruture linhas e colunas responsivas usando breakpoints.
      <span class="cdw-fw-docs-when">Quando usar: layouts de marketing e dashboards.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-row</span>
      <span>cdw-fw-col-*</span>
      <span>cdw-fw-col-md-*</span>
      <span>cdw-fw-col-lg-*</span>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Duas colunas</div>
        <div class="cdw-fw-docs-badge">Básico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-container">
          <div class="cdw-fw-row cdw-fw-gap-3">
            <div class="cdw-fw-col-12 cdw-fw-col-md-6">
              <div class="cdw-fw-docs-grid-demo">col-12 / md-6</div>
            </div>
            <div class="cdw-fw-col-12 cdw-fw-col-md-6">
              <div class="cdw-fw-docs-grid-demo">col-12 / md-6</div>
            </div>
          </div>
        </div>
        <div class="cdw-fw-docs-example-caption">Mobile empilha, md divide em 2 colunas.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-row cdw-fw-gap-3"&gt;
  &lt;div class="cdw-fw-col-12 cdw-fw-col-md-6"&gt;...&lt;/div&gt;
  &lt;div class="cdw-fw-col-12 cdw-fw-col-md-6"&gt;...&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Três colunas</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-container">
          <div class="cdw-fw-row cdw-fw-gap-3">
            <div class="cdw-fw-col-12 cdw-fw-col-md-6 cdw-fw-col-lg-4">
              <div class="cdw-fw-docs-grid-demo">col-12 / md-6 / lg-4</div>
            </div>
            <div class="cdw-fw-col-12 cdw-fw-col-md-6 cdw-fw-col-lg-4">
              <div class="cdw-fw-docs-grid-demo">col-12 / md-6 / lg-4</div>
            </div>
            <div class="cdw-fw-col-12 cdw-fw-col-lg-4">
              <div class="cdw-fw-docs-grid-demo">col-12 / lg-4</div>
            </div>
          </div>
        </div>
        <div class="cdw-fw-docs-example-caption">Mobile empilha, md divide, lg vira 3 colunas.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-row cdw-fw-gap-3"&gt;
  &lt;div class="cdw-fw-col-12 cdw-fw-col-md-6 cdw-fw-col-lg-4"&gt;...&lt;/div&gt;
  &lt;div class="cdw-fw-col-12 cdw-fw-col-md-6 cdw-fw-col-lg-4"&gt;...&lt;/div&gt;
  &lt;div class="cdw-fw-col-12 cdw-fw-col-lg-4"&gt;...&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Sidebar + conteúdo</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-container">
          <div class="cdw-fw-row cdw-fw-gap-3">
            <div class="cdw-fw-col-12 cdw-fw-col-lg-3">
              <div class="cdw-fw-docs-grid-demo">Sidebar</div>
            </div>
            <div class="cdw-fw-col-12 cdw-fw-col-lg-9">
              <div class="cdw-fw-docs-grid-demo">Conteúdo</div>
            </div>
          </div>
        </div>
        <div class="cdw-fw-docs-example-caption">Mobile empilha, lg separa sidebar e conteúdo.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-row cdw-fw-gap-3"&gt;
  &lt;div class="cdw-fw-col-12 cdw-fw-col-lg-3"&gt;Sidebar&lt;/div&gt;
  &lt;div class="cdw-fw-col-12 cdw-fw-col-lg-9"&gt;Conteúdo&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-card">
      <div class="cdw-fw-docs-card-title">Recomendações de uso</div>
      <div class="cdw-fw-docs-highlight">Row sempre como pai</div>
      <div class="cdw-fw-docs-highlight">Colunas sempre dentro de Row</div>
      <div class="cdw-fw-docs-highlight">Use gap utilities para espaçamento</div>
    </div>
  </div>
</section>
`,
  accordion: `<section id="accordion" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Accordion</h2>
    <p class="cdw-fw-docs-lead">
      Componente para organizar conte&uacute;do em blocos expans&iacute;veis, com anima&ccedil;&atilde;o suave,
      foco vis&iacute;vel e suporte completo ao teclado.
    </p>
  </div>

  <div class="cdw-fw-docs-card">
    <div class="cdw-fw-docs-card-title">Pr&eacute;-requisito</div>
    <p class="cdw-fw-docs-card-desc">
      Antes de usar, leia o Guia do Framework na se&ccedil;&atilde;o Come&ccedil;ando.
    </p>
  </div>

  <div class="cdw-fw-docs-toc">
    <span class="cdw-fw-docs-toc-title">&Iacute;ndice desta p&aacute;gina</span>
    <a href="#accordion-introducao">Introdu&ccedil;&atilde;o</a>
    <a href="#accordion-estrutura">Estrutura base</a>
    <a href="#accordion-basico">B&aacute;sico</a>
    <a href="#accordion-multiple">M&uacute;ltiplo</a>
    <a href="#accordion-default-open">Abertura padr&atilde;o</a>
    <a href="#accordion-disabled">Desativado</a>
    <a href="#accordion-variantes">Variantes</a>
    <a href="#accordion-icones">&Iacute;cones</a>
    <a href="#accordion-api">API / Op&ccedil;&otilde;es</a>
    <a href="#accordion-eventos">Eventos</a>
    <a href="#accordion-acessibilidade">Acessibilidade</a>
  </div>

  <div class="cdw-fw-docs-subsection" id="accordion-introducao" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Introdu&ccedil;&atilde;o</h3>
    <p class="cdw-fw-docs-subdesc">
      Use o Accordion para reduzir a altura de p&aacute;ginas longas, agrupar dados
      e facilitar a leitura por etapas. Ele suporta modo single ou m&uacute;ltiplo, &iacute;cone
      customiz&aacute;vel e configura&ccedil;&atilde;o por data-attributes.
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-accordion</span>
      <span>cdw-accordion-item</span>
      <span>cdw-accordion-trigger</span>
      <span>cdw-accordion-panel</span>
      <span>cdw-accordion-content</span>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="accordion-estrutura" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Estrutura base</h3>
    <p class="cdw-fw-docs-subdesc">
      Estrutura m&iacute;nima com container, item, trigger e panel.
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">HTML m&iacute;nimo</div>
        <div class="cdw-fw-docs-badge">B&aacute;sico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-accordion" data-cdw-accordion>
          <div class="cdw-accordion-item">
            <button class="cdw-accordion-trigger" type="button">
              <span>T&iacute;tulo</span>
              <span class="cdw-accordion-icon" aria-hidden="true"></span>
            </button>
            <div class="cdw-accordion-panel">
              <div class="cdw-accordion-content">Conte&uacute;do do item.</div>
            </div>
          </div>
        </div>
        <div class="cdw-fw-docs-example-caption">
          O trigger &eacute; sempre um bot&atilde;o para garantir acessibilidade.
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-accordion" data-cdw-accordion&gt;
  &lt;div class="cdw-accordion-item"&gt;
    &lt;button class="cdw-accordion-trigger" type="button"&gt;
      &lt;span&gt;T&iacute;tulo&lt;/span&gt;
      &lt;span class="cdw-accordion-icon" aria-hidden="true"&gt;&lt;/span&gt;
    &lt;/button&gt;
    &lt;div class="cdw-accordion-panel"&gt;
      &lt;div class="cdw-accordion-content"&gt;Conte&uacute;do do item.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="accordion-basico" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">B&aacute;sico (single)</h3>
    <p class="cdw-fw-docs-subdesc">
      Apenas um item aberto por vez, com op&ccedil;&atilde;o de fechar o atual.
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>data-mode="single"</span>
      <span>data-collapsible="true"</span>
    </div>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Accordion b&aacute;sico</div>
        <div class="cdw-fw-docs-badge">B&aacute;sico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-accordion" data-cdw-accordion data-mode="single" data-collapsible="true">
          <div class="cdw-accordion-item is-open">
            <button class="cdw-accordion-trigger" type="button">
              <span>Vis&atilde;o geral</span>
              <span class="cdw-accordion-icon" aria-hidden="true"></span>
            </button>
            <div class="cdw-accordion-panel">
              <div class="cdw-accordion-content">
                Este item inicia aberto para destacar o conte&uacute;do principal.
              </div>
            </div>
          </div>
          <div class="cdw-accordion-item">
            <button class="cdw-accordion-trigger" type="button">
              <span>Detalhes</span>
              <span class="cdw-accordion-icon" aria-hidden="true"></span>
            </button>
            <div class="cdw-accordion-panel">
              <div class="cdw-accordion-content">
                Cada item pode conter qualquer conte&uacute;do HTML.
              </div>
            </div>
          </div>
        </div>
        <div class="cdw-fw-docs-example-caption">
          Modo single garante apenas um item aberto por vez.
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-accordion" data-cdw-accordion data-mode="single" data-collapsible="true"&gt;
  ...
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="accordion-multiple" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">M&uacute;ltiplo</h3>
    <p class="cdw-fw-docs-subdesc">
      Permite abrir v&aacute;rios itens ao mesmo tempo.
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Modo m&uacute;ltiplo</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-accordion" data-cdw-accordion data-mode="multiple">
          <div class="cdw-accordion-item is-open">
            <button class="cdw-accordion-trigger" type="button">
              <span>Planejamento</span>
              <span class="cdw-accordion-icon" aria-hidden="true"></span>
            </button>
            <div class="cdw-accordion-panel">
              <div class="cdw-accordion-content">Itens abertos simultaneamente.</div>
            </div>
          </div>
          <div class="cdw-accordion-item is-open">
            <button class="cdw-accordion-trigger" type="button">
              <span>Execu&ccedil;&atilde;o</span>
              <span class="cdw-accordion-icon" aria-hidden="true"></span>
            </button>
            <div class="cdw-accordion-panel">
              <div class="cdw-accordion-content">Ideal para listas de tarefas.</div>
            </div>
          </div>
        </div>
        <div class="cdw-fw-docs-example-caption">
          Use o modo m&uacute;ltiplo quando o conte&uacute;do n&atilde;o &eacute; exclusivo.
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-accordion" data-cdw-accordion data-mode="multiple"&gt;
  ...
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="accordion-default-open" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Abertura padr&atilde;o</h3>
    <p class="cdw-fw-docs-subdesc">
      Defina qual item inicia aberto usando &iacute;ndice ou id l&oacute;gico.
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Abrir por &iacute;ndice</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-accordion" data-cdw-accordion data-default-open="1">
          <div class="cdw-accordion-item">
            <button class="cdw-accordion-trigger" type="button">
              <span>Primeiro</span>
              <span class="cdw-accordion-icon" aria-hidden="true"></span>
            </button>
            <div class="cdw-accordion-panel">
              <div class="cdw-accordion-content">Item 0 fechado.</div>
            </div>
          </div>
          <div class="cdw-accordion-item" data-cdw-accordion-item="meuId">
            <button class="cdw-accordion-trigger" type="button">
              <span>Segundo</span>
              <span class="cdw-accordion-icon" aria-hidden="true"></span>
            </button>
            <div class="cdw-accordion-panel">
              <div class="cdw-accordion-content">Item 1 abre por padr&atilde;o.</div>
            </div>
          </div>
        </div>
        <div class="cdw-fw-docs-example-caption">
          data-default-open="1" abre o segundo item.
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-accordion" data-cdw-accordion data-default-open="1"&gt;...&lt;/div&gt;
&lt;div class="cdw-accordion" data-cdw-accordion data-default-open="id:meuId"&gt;...&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="accordion-disabled" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Desativado</h3>
    <p class="cdw-fw-docs-subdesc">
      Itens desativados ficam visuais e n&atilde;o respondem a cliques.
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Item desativado</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-accordion" data-cdw-accordion>
          <div class="cdw-accordion-item">
            <button class="cdw-accordion-trigger" type="button">
              <span>Ativo</span>
              <span class="cdw-accordion-icon" aria-hidden="true"></span>
            </button>
            <div class="cdw-accordion-panel">
              <div class="cdw-accordion-content">Item interativo.</div>
            </div>
          </div>
          <div class="cdw-accordion-item is-disabled" data-disabled="true">
            <button class="cdw-accordion-trigger" type="button" disabled>
              <span>Desativado</span>
              <span class="cdw-accordion-icon" aria-hidden="true"></span>
            </button>
            <div class="cdw-accordion-panel">
              <div class="cdw-accordion-content">N&atilde;o pode ser aberto.</div>
            </div>
          </div>
        </div>
        <div class="cdw-fw-docs-example-caption">
          Use is-disabled ou data-disabled="true" para bloquear intera&ccedil;&atilde;o.
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-accordion-item is-disabled" data-disabled="true"&gt;
  &lt;button class="cdw-accordion-trigger" type="button" disabled&gt;...&lt;/button&gt;
  &lt;div class="cdw-accordion-panel"&gt;...&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="accordion-variantes" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Variantes</h3>
    <p class="cdw-fw-docs-subdesc">
      Ajuste o visual com as classes de variante.
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-accordion--flush</span>
      <span>cdw-accordion--soft</span>
      <span>cdw-accordion--compact</span>
    </div>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Flush / Soft / Compact</div>
        <div class="cdw-fw-docs-badge">Avan&ccedil;ado</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-flex-col cdw-fw-gap-3">
          <div class="cdw-accordion cdw-accordion--flush" data-cdw-accordion>
            <div class="cdw-accordion-item is-open">
              <button class="cdw-accordion-trigger" type="button">
                <span>Flush</span>
                <span class="cdw-accordion-icon" aria-hidden="true"></span>
              </button>
              <div class="cdw-accordion-panel">
                <div class="cdw-accordion-content">Sem bordas externas.</div>
              </div>
            </div>
          </div>
          <div class="cdw-accordion cdw-accordion--soft" data-cdw-accordion>
            <div class="cdw-accordion-item is-open">
              <button class="cdw-accordion-trigger" type="button">
                <span>Soft</span>
                <span class="cdw-accordion-icon" aria-hidden="true"></span>
              </button>
              <div class="cdw-accordion-panel">
                <div class="cdw-accordion-content">Fundo leve e moderno.</div>
              </div>
            </div>
          </div>
          <div class="cdw-accordion cdw-accordion--compact" data-cdw-accordion>
            <div class="cdw-accordion-item is-open">
              <button class="cdw-accordion-trigger" type="button">
                <span>Compact</span>
                <span class="cdw-accordion-icon" aria-hidden="true"></span>
              </button>
              <div class="cdw-accordion-panel">
                <div class="cdw-accordion-content">Mais denso e enxuto.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="cdw-fw-docs-example-caption">
          Combine as variantes conforme o contexto visual.
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-accordion cdw-accordion--flush" data-cdw-accordion&gt;...&lt;/div&gt;
&lt;div class="cdw-accordion cdw-accordion--soft" data-cdw-accordion&gt;...&lt;/div&gt;
&lt;div class="cdw-accordion cdw-accordion--compact" data-cdw-accordion&gt;...&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="accordion-icones" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">&Iacute;cones do Accordion</h3>
    <p class="cdw-fw-docs-subdesc">
      Escolha entre cinco estilos usando o atributo data-icon.
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>data-icon="chevron"</span>
      <span>data-icon="plus"</span>
      <span>data-icon="caret"</span>
      <span>data-icon="arrow"</span>
      <span>data-icon="dot"</span>
    </div>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">&Iacute;cones do Accordion</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-flex-wrap cdw-fw-gap-3">
          <div class="cdw-accordion" data-cdw-accordion data-icon="chevron">
            <div class="cdw-accordion-item is-open">
              <button class="cdw-accordion-trigger" type="button">
                <span>Chevron</span>
                <span class="cdw-accordion-icon" aria-hidden="true"></span>
              </button>
              <div class="cdw-accordion-panel">
                <div class="cdw-accordion-content">Seta minimalista, elegante e discreta.</div>
              </div>
            </div>
          </div>
          <div class="cdw-accordion" data-cdw-accordion data-icon="plus">
            <div class="cdw-accordion-item is-open">
              <button class="cdw-accordion-trigger" type="button">
                <span>Plus</span>
                <span class="cdw-accordion-icon" aria-hidden="true"></span>
              </button>
              <div class="cdw-accordion-panel">
                <div class="cdw-accordion-content">Transforma em menos ao abrir.</div>
              </div>
            </div>
          </div>
          <div class="cdw-accordion" data-cdw-accordion data-icon="caret">
            <div class="cdw-accordion-item is-open">
              <button class="cdw-accordion-trigger" type="button">
                <span>Caret</span>
                <span class="cdw-accordion-icon" aria-hidden="true"></span>
              </button>
              <div class="cdw-accordion-panel">
                <div class="cdw-accordion-content">Seta s&oacute;lida simples e direta.</div>
              </div>
            </div>
          </div>
          <div class="cdw-accordion" data-cdw-accordion data-icon="arrow">
            <div class="cdw-accordion-item is-open">
              <button class="cdw-accordion-trigger" type="button">
                <span>Arrow</span>
                <span class="cdw-accordion-icon" aria-hidden="true"></span>
              </button>
              <div class="cdw-accordion-panel">
                <div class="cdw-accordion-content">Seta linear fina, visual moderno.</div>
              </div>
            </div>
          </div>
          <div class="cdw-accordion" data-cdw-accordion data-icon="dot">
            <div class="cdw-accordion-item is-open">
              <button class="cdw-accordion-trigger" type="button">
                <span>Dot</span>
                <span class="cdw-accordion-icon" aria-hidden="true"></span>
              </button>
              <div class="cdw-accordion-panel">
                <div class="cdw-accordion-content">Indicador minimalista (ponto/anel).</div>
              </div>
            </div>
          </div>
        </div>
        <div class="cdw-fw-docs-example-caption">
          data-icon ajusta o estilo do indicador.
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-accordion" data-cdw-accordion data-icon="caret"&gt;...&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="accordion-api" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">API / Op&ccedil;&otilde;es</h3>
    <p class="cdw-fw-docs-subdesc">
      Configure via data-attributes ou via op&ccedil;&otilde;es do JavaScript.
    </p>
    <table class="cdw-fw-docs-scale-table">
      <thead>
        <tr>
          <th>Op&ccedil;&atilde;o</th>
          <th>Tipo</th>
          <th>Padr&atilde;o</th>
          <th>Descri&ccedil;&atilde;o</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>data-mode</td>
          <td>single | multiple</td>
          <td>single</td>
          <td>Controla se abre um ou v&aacute;rios itens.</td>
        </tr>
        <tr>
          <td>data-collapsible</td>
          <td>true | false</td>
          <td>false</td>
          <td>Permite fechar o item aberto no modo single.</td>
        </tr>
        <tr>
          <td>data-default-open</td>
          <td>number | id:xxx</td>
          <td>-</td>
          <td>Define qual item inicia aberto.</td>
        </tr>
        <tr>
          <td>data-animate</td>
          <td>true | false</td>
          <td>true</td>
          <td>Ativa/desativa anima&ccedil;&atilde;o.</td>
        </tr>
          <tr>
            <td>data-icon</td>
            <td>chevron | plus | caret | arrow | dot</td>
            <td>chevron</td>
            <td>Define o estilo do indicador.</td>
          </tr>
        <tr>
          <td>data-cdw-accordion-item</td>
          <td>string</td>
          <td>-</td>
          <td>Identificador opcional do item.</td>
        </tr>
        <tr>
          <td>data-disabled</td>
          <td>true | false</td>
          <td>false</td>
          <td>Desativa o item.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="cdw-fw-docs-subsection" id="accordion-eventos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Eventos</h3>
    <p class="cdw-fw-docs-subdesc">
      O accordion dispara eventos no container quando abre ou fecha itens.
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Listener</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">JS</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>const accordion = document.querySelector("[data-cdw-accordion]");

accordion?.addEventListener("cdw:accordion:open", (event) =&gt; {
  console.log("abriu", event.detail);
});

accordion?.addEventListener("cdw:accordion:close", (event) =&gt; {
  console.log("fechou", event.detail);
});</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="accordion-acessibilidade" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Acessibilidade</h3>
    <p class="cdw-fw-docs-subdesc">
      O componente possui foco vis&iacute;vel, ARIA completo e navega&ccedil;&atilde;o por teclado.
    </p>
    <div class="cdw-fw-docs-card">
      <div class="cdw-fw-docs-card-title">Atalhos de teclado</div>
      <div class="cdw-fw-docs-highlight">Enter / Espa&ccedil;o: abre e fecha.</div>
      <div class="cdw-fw-docs-highlight">Setas: navegam entre os triggers.</div>
      <div class="cdw-fw-docs-highlight">Home / End: primeiro e &uacute;ltimo item.</div>
    </div>
  </div>
</section>
`,
  buttons: `<section id="botoes" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Bot&otilde;es</h2>
    <p class="cdw-fw-docs-lead">
      Bot&otilde;es do CDW-FW foram pensados para combinar forma, estilo e cor de maneira modular.
    </p>
  </div>

  <div class="cdw-fw-docs-toc">
    <span class="cdw-fw-docs-toc-title">&Iacute;ndice desta p&aacute;gina</span>
    <a href="#botoes-intro">Introdu&ccedil;&atilde;o</a>
    <a href="#botoes-estrutura">Estrutura b&aacute;sica</a>
    <a href="#botoes-formas">Formas</a>
    <a href="#botoes-estilos">Estilos</a>
    <a href="#botoes-tamanhos">Tamanhos</a>
    <a href="#botoes-combinacoes">Combina&ccedil;&otilde;es</a>
    <a href="#botoes-estados">Estados</a>
  </div>

  <div class="cdw-fw-docs-subsection" id="botoes-intro" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Introdu&ccedil;&atilde;o</h3>
    <p class="cdw-fw-docs-subdesc">
      Separe forma (radius), estilo (solid/soft/outline/text) e cor (accent).
      <span class="cdw-fw-docs-when">Quando usar: qualquer a&ccedil;&atilde;o principal ou secund&aacute;ria da interface.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-btn</span>
      <span>cdw-fw-btn--solid</span>
      <span>cdw-fw-btn--outline</span>
      <span>cdw-fw-btn--soft</span>
      <span>cdw-fw-btn--text</span>
      <span>cdw-fw-accent-*</span>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="botoes-estrutura" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Estrutura b&aacute;sica</h3>
    <p class="cdw-fw-docs-subdesc">
      A estrutura m&iacute;nima combina a classe base, o estilo e a cor.
      <span class="cdw-fw-docs-when">Quando usar: ponto de partida para qualquer bot&atilde;o.</span>
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Bot&atilde;o m&iacute;nimo</div>
        <div class="cdw-fw-docs-badge">B&aacute;sico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--default cdw-fw-accent-ocean">Bot&atilde;o</button>
        <div class="cdw-fw-docs-example-caption">A cor vem de cdw-fw-accent-ocean.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-accent-ocean"&gt;
  Bot&atilde;o
&lt;/button&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="botoes-formas" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Formas</h3>
    <p class="cdw-fw-docs-subdesc">
      Ajuste o raio para refor&ccedil;ar o estilo da interface.
      <span class="cdw-fw-docs-when">Quando usar: diferenciar a&ccedil;&otilde;es prim&aacute;rias e secund&aacute;rias.</span>
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Formas principais</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-docs-btn-row">
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--default cdw-fw-accent-sky">Default</button>
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--square cdw-fw-accent-sky">Square</button>
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded cdw-fw-accent-sky">Rounded</button>
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--circle cdw-fw-accent-sky" aria-label="Detalhe">i</button>
        </div>
        <div class="cdw-fw-docs-example-caption">Circle &eacute; ideal para &iacute;cones.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--default cdw-fw-accent-sky"&gt;Default&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--square cdw-fw-accent-sky"&gt;Square&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded cdw-fw-accent-sky"&gt;Rounded&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--circle cdw-fw-accent-sky"&gt;i&lt;/button&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="botoes-estilos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Estilos</h3>
    <p class="cdw-fw-docs-subdesc">
      Defina como a cor aparece no bot&atilde;o.
      <span class="cdw-fw-docs-when">Quando usar: alterar o peso visual do CTA.</span>
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Solid, Soft, Outline e Text</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-docs-btn-row">
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--default cdw-fw-accent-rose">Solid</button>
          <button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--default cdw-fw-accent-rose">Soft</button>
          <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--default cdw-fw-accent-rose">Outline</button>
          <button class="cdw-fw-btn cdw-fw-btn--text cdw-fw-btn--default cdw-fw-accent-rose">Text</button>
        </div>
        <div class="cdw-fw-docs-example-caption">Soft usa o modifier cdw-fw-soft embutido no estilo.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-accent-rose"&gt;Solid&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-accent-rose"&gt;Soft&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-accent-rose"&gt;Outline&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--text cdw-fw-accent-rose"&gt;Text&lt;/button&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="botoes-tamanhos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Tamanhos</h3>
    <p class="cdw-fw-docs-subdesc">
      Tr&ecirc;s tamanhos para hierarquia visual.
      <span class="cdw-fw-docs-when">Quando usar: adaptar densidade da interface.</span>
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Small, Medium e Large</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-docs-btn-row">
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-accent-forest">Small</button>
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--md cdw-fw-accent-forest">Medium</button>
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--lg cdw-fw-accent-forest">Large</button>
        </div>
        <div class="cdw-fw-docs-example-caption">Medium &eacute; o tamanho padr&atilde;o.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-accent-forest"&gt;Small&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--md cdw-fw-accent-forest"&gt;Medium&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--lg cdw-fw-accent-forest"&gt;Large&lt;/button&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="botoes-combinacoes" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Combina&ccedil;&otilde;es reais</h3>
    <p class="cdw-fw-docs-subdesc">
      Exemplos prontos para cen&aacute;rios comuns.
      <span class="cdw-fw-docs-when">Quando usar: CTAs, a&ccedil;&otilde;es secund&aacute;rias e &iacute;cones.</span>
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">A&ccedil;&otilde;es principais</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-docs-btn-row">
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--default cdw-fw-accent-indigo">Bot&atilde;o principal</button>
          <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--default cdw-fw-accent-indigo">Secund&aacute;rio</button>
          <button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--default cdw-fw-accent-indigo">Suave</button>
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--circle cdw-fw-accent-indigo" aria-label="Editar">+</button>
        </div>
        <div class="cdw-fw-docs-example-caption">
          Solid para destaque, outline para secund&aacute;ria, soft para suporte e circle para &iacute;cone.
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-accent-indigo"&gt;Bot&atilde;o principal&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-accent-indigo"&gt;Secund&aacute;rio&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-accent-indigo"&gt;Suave&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--circle cdw-fw-accent-indigo"&gt;+&lt;/button&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="botoes-estados" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Estados</h3>
    <p class="cdw-fw-docs-subdesc">
      Estados padr&atilde;o para indicar intera&ccedil;&atilde;o.
      <span class="cdw-fw-docs-when">Quando usar: sinalizar hover, foco e desabilitado.</span>
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Hover, Focus e Disabled</div>
        <div class="cdw-fw-docs-badge">B&aacute;sico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-docs-btn-row">
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-accent-sun cdw-fw-docs-is-hover">Hover</button>
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-accent-sun cdw-fw-docs-is-focus">Focus</button>
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-accent-sun" disabled>Disabled</button>
        </div>
        <div class="cdw-fw-docs-example-caption">Focus usa highlight vis&iacute;vel; disabled reduz opacidade.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-accent-sun"&gt;Hover&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-accent-sun"&gt;Focus&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-accent-sun" disabled&gt;Disabled&lt;/button&gt;</code></pre>
      </div>
    </div>
  </div>
</section>
`,
  gettingStarted: `<section id="comecando" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Come&ccedil;ando</h2>
    <p class="cdw-fw-docs-lead">
      O CDW-FW &eacute; um framework de layout, utilidades e componentes leves para criar interfaces
      r&aacute;pidas e consistentes. Ele n&atilde;o conflita com outros frameworks porque todas as classes usam
      o prefixo <strong>cdw-fw-</strong>.
    </p>
  </div>

  <div class="cdw-fw-docs-toc">
    <span class="cdw-fw-docs-toc-title">&Iacute;ndice desta p&aacute;gina</span>
    <a href="#comecando-cdn">Inclus&atilde;o via CDN (Recomendado)</a>
    <a href="#comecando-latest">Vers&atilde;o sempre atual</a>
    <a href="#comecando-esm">Uso com ES Modules (ESM)</a>
  </div>

  <div class="cdw-fw-docs-subsection" id="comecando-cdn" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Inclus&atilde;o via CDN (Recomendado)</h3>
    <p class="cdw-fw-docs-subdesc">
      Use URLs com vers&atilde;o fixa para garantir estabilidade em produ&ccedil;&atilde;o.
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>CSS (vers&atilde;o fixa)</span>
      <span>JS UMD (vers&atilde;o fixa)</span>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Links diretos</div>
        <div class="cdw-fw-docs-badge">Recomendado</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-docs-highlight">
          https://cdn.jsdelivr.net/gh/carlosdevelopmentsweb/fw-cdweb@0.1.3/dist/cdw-fw.css
        </div>
        <div class="cdw-fw-docs-highlight">
          https://cdn.jsdelivr.net/gh/carlosdevelopmentsweb/fw-cdweb@0.1.3/dist/cdw-fw.js
        </div>
        <div class="cdw-fw-docs-example-caption">
          âœ”ï¸ Forma recomendada para produ&ccedil;&atilde;o. âœ”ï¸ Evita que atualiza&ccedil;&otilde;es quebrem seu projeto.
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/carlosdevelopmentsweb/fw-cdweb@0.1.3/dist/cdw-fw.css"&gt;

&lt;script src="https://cdn.jsdelivr.net/gh/carlosdevelopmentsweb/fw-cdweb@0.1.3/dist/cdw-fw.js"&gt;&lt;/script&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="comecando-latest" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Vers&atilde;o sempre atual (n&atilde;o recomendada para produ&ccedil;&atilde;o)</h3>
    <p class="cdw-fw-docs-subdesc">
      Carrega sempre a &uacute;ltima vers&atilde;o dispon&iacute;vel no CDN.
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>CSS (sempre atual)</span>
      <span>JS UMD (sempre atual)</span>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Links diretos</div>
        <div class="cdw-fw-docs-badge">Aten&ccedil;&atilde;o</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-docs-highlight">
          https://cdn.jsdelivr.net/gh/carlosdevelopmentsweb/fw-cdweb/dist/
        </div>
        <div class="cdw-fw-docs-callout">
          âš ï¸ Esta op&ccedil;&atilde;o carrega sempre a vers&atilde;o mais recente e pode quebrar seu projeto.
        </div>
        <div class="cdw-fw-docs-highlight">
          https://cdn.jsdelivr.net/gh/carlosdevelopmentsweb/fw-cdweb/dist/cdw-fw.css
        </div>
        <div class="cdw-fw-docs-highlight">
          https://cdn.jsdelivr.net/gh/carlosdevelopmentsweb/fw-cdweb/dist/cdw-fw.js
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/carlosdevelopmentsweb/fw-cdweb/dist/cdw-fw.css"&gt;

&lt;script src="https://cdn.jsdelivr.net/gh/carlosdevelopmentsweb/fw-cdweb/dist/cdw-fw.js"&gt;&lt;/script&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="comecando-esm" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Uso com ES Modules (ESM)</h3>
    <p class="cdw-fw-docs-subdesc">
      Ideal para projetos modernos com suporte a m&oacute;dulos ES.
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>ESM</span>
      <span>CDN</span>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Link ESM</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-docs-highlight">
          https://cdn.jsdelivr.net/gh/carlosdevelopmentsweb/fw-cdweb@0.1.3/dist/cdw-fw.esm.js
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/carlosdevelopmentsweb/fw-cdweb@0.1.3/dist/cdw-fw.css"&gt;

&lt;script type="module"&gt;
  import "https://cdn.jsdelivr.net/gh/carlosdevelopmentsweb/fw-cdweb@0.1.3/dist/cdw-fw.esm.js";
&lt;/script&gt;</code></pre>
      </div>
    </div>
  </div>
</section>
`,
  utilities: `<section id="utilitarios" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Utilitários</h2>
    <p class="cdw-fw-docs-lead">
      Classes utilitárias para resolver layout e ajustes rápidos sem criar componentes.
    </p>
  </div>

  <div class="cdw-fw-docs-toc">
    <span class="cdw-fw-docs-toc-title">Índice desta página</span>
    <a href="#util-espacamento">Espaçamento</a>
    <a href="#util-display">Display</a>
    <a href="#util-flex">Flex</a>
    <a href="#util-gap">Gap</a>
    <a href="#util-tamanho">Tamanho</a>
    <a href="#util-texto">Alinhamento de texto</a>
  </div>

  <div class="cdw-fw-docs-subsection" id="util-espacamento" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Espaçamento</h3>
    <p class="cdw-fw-docs-subdesc">
      Controle de margin e padding com escala fixa baseada em 4px.
      <span class="cdw-fw-docs-when">Quando usar: separação entre elementos e respiro interno.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-m-*</span>
      <span>cdw-fw-mt-*</span>
      <span>cdw-fw-mx-*</span>
      <span>cdw-fw-p-*</span>
      <span>cdw-fw-py-*</span>
    </div>

    <div class="cdw-fw-docs-card">
      <div class="cdw-fw-docs-card-title">Escala de espaçamento</div>
      <table class="cdw-fw-docs-scale-table">
        <thead>
          <tr>
            <th>Token</th>
            <th>Px</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>0</td><td>0</td></tr>
          <tr><td>1</td><td>4px</td></tr>
          <tr><td>2</td><td>8px</td></tr>
          <tr><td>3</td><td>12px</td></tr>
          <tr><td>4</td><td>16px</td></tr>
          <tr><td>5</td><td>20px</td></tr>
          <tr><td>6</td><td>24px</td></tr>
          <tr><td>8</td><td>32px</td></tr>
          <tr><td>10</td><td>40px</td></tr>
          <tr><td>12</td><td>48px</td></tr>
          <tr><td>16</td><td>64px</td></tr>
        </tbody>
      </table>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Padding e margin</div>
        <div class="cdw-fw-docs-badge">Básico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-p-4" style="background:#dfe9f6; border-radius:12px;">
          Caixa com padding 4
        </div>
        <div class="cdw-fw-mt-4" style="background:#f8dcc8; padding:10px 12px; border-radius:12px;">
          Margin top 4
        </div>
        <div class="cdw-fw-docs-example-caption">
          Use p-* para espaço interno e mt-* para separar itens verticalmente.
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-p-4"&gt;Caixa com padding 4&lt;/div&gt;
&lt;div class="cdw-fw-mt-4"&gt;Margin top 4&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Eixo horizontal e vertical</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-mx-4" style="background:#eef2f7; padding:10px; border-radius:12px;">
          mx-4 adiciona margem lateral
        </div>
        <div class="cdw-fw-my-6" style="background:#dfe9f6; padding:10px; border-radius:12px;">
          my-6 cria respiro vertical
        </div>
        <div class="cdw-fw-docs-example-caption">
          Use mx-* e my-* para ajustar apenas um eixo.
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-mx-4"&gt;mx-4 adiciona margem lateral&lt;/div&gt;
&lt;div class="cdw-fw-my-6"&gt;my-6 cria respiro vertical&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="util-display" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Display</h3>
    <p class="cdw-fw-docs-subdesc">
      Ajuste o comportamento de renderização dos elementos.
      <span class="cdw-fw-docs-when">Quando usar: alinhar itens pequenos ou ocultar conteúdo.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-block</span>
      <span>cdw-fw-inline</span>
      <span>cdw-fw-inline-block</span>
      <span>cdw-fw-hidden</span>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Inline vs block</div>
        <div class="cdw-fw-docs-badge">Básico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-inline" style="background:#dfe9f6; padding:6px 10px; border-radius:8px;">inline</div>
        <div class="cdw-fw-inline-block" style="background:#f8dcc8; padding:6px 10px; border-radius:8px;">inline-block</div>
        <div class="cdw-fw-block" style="background:#e2f0dc; padding:6px 10px; border-radius:8px;">block</div>
        <div class="cdw-fw-docs-example-caption">Block quebra linha; inline fica na mesma linha.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-inline"&gt;inline&lt;/div&gt;
&lt;div class="cdw-fw-inline-block"&gt;inline-block&lt;/div&gt;
&lt;div class="cdw-fw-block"&gt;block&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Hidden com toggle</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div id="cdw-fw-docs-hidden-target" class="cdw-fw-docs-preview-box cdw-fw-docs-preview-box--dark">
          Alvo ocultável
        </div>
        <button class="cdw-fw-docs-toggle" type="button" data-cdw-fw-docs-toggle-hidden="cdw-fw-docs-hidden-target">
          Esconder
        </button>
        <div class="cdw-fw-docs-example-caption">
          O botão alterna a classe cdw-fw-hidden no alvo.
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div id="alvo" class="cdw-fw-hidden"&gt;Alvo ocultável&lt;/div&gt;
&lt;button&gt;Mostrar/Esconder&lt;/button&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="util-flex" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Flex</h3>
    <p class="cdw-fw-docs-subdesc">
      Controle de alinhamento, direção e quebra de linha com flexbox.
      <span class="cdw-fw-docs-when">Quando usar: barras de ação, cards alinhados e grids flexíveis.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-flex</span>
      <span>cdw-fw-flex-col</span>
      <span>cdw-fw-items-center</span>
      <span>cdw-fw-justify-between</span>
      <span>cdw-fw-flex-wrap</span>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Justify between + items center</div>
        <div class="cdw-fw-docs-badge">Básico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-items-center cdw-fw-justify-between" style="background:#eef2f7; padding:12px; border-radius:12px;">
          <div class="cdw-fw-docs-preview-box">Esquerda</div>
          <div class="cdw-fw-docs-preview-box cdw-fw-docs-preview-box--alt">Centro</div>
          <div class="cdw-fw-docs-preview-box cdw-fw-docs-preview-box--dark">Direita</div>
        </div>
        <div class="cdw-fw-docs-example-caption">Distribui o conteúdo com espaço entre os itens.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-flex cdw-fw-items-center cdw-fw-justify-between"&gt;
  ...
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Coluna</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-flex-col cdw-fw-gap-2" style="background:#eef2f7; padding:12px; border-radius:12px;">
          <div class="cdw-fw-docs-preview-box">Item 1</div>
          <div class="cdw-fw-docs-preview-box cdw-fw-docs-preview-box--alt">Item 2</div>
        </div>
        <div class="cdw-fw-docs-example-caption">Empilha itens verticalmente com espaçamento.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-flex cdw-fw-flex-col cdw-fw-gap-2"&gt;...&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Wrap com gap</div>
        <div class="cdw-fw-docs-badge">Avançado</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-flex-wrap cdw-fw-gap-2" style="background:#eef2f7; padding:12px; border-radius:12px;">
          <div class="cdw-fw-docs-preview-box">A</div>
          <div class="cdw-fw-docs-preview-box">B</div>
          <div class="cdw-fw-docs-preview-box">C</div>
          <div class="cdw-fw-docs-preview-box">D</div>
          <div class="cdw-fw-docs-preview-box">E</div>
        </div>
        <div class="cdw-fw-docs-example-caption">Quebra linhas automaticamente mantendo o gap.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-flex cdw-fw-flex-wrap cdw-fw-gap-2"&gt;...&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="util-gap" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Gap</h3>
    <p class="cdw-fw-docs-subdesc">
      Espaçamento entre itens de flex ou grid.
      <span class="cdw-fw-docs-when">Quando usar: listas horizontais e colunas alinhadas.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-gap-*</span>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Comparando gap-2 e gap-6</div>
        <div class="cdw-fw-docs-badge">Básico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-gap-2">
          <div class="cdw-fw-docs-preview-box">gap-2</div>
          <div class="cdw-fw-docs-preview-box">gap-2</div>
          <div class="cdw-fw-docs-preview-box">gap-2</div>
        </div>
        <div class="cdw-fw-flex cdw-fw-gap-6" style="margin-top:10px;">
          <div class="cdw-fw-docs-preview-box cdw-fw-docs-preview-box--alt">gap-6</div>
          <div class="cdw-fw-docs-preview-box cdw-fw-docs-preview-box--alt">gap-6</div>
          <div class="cdw-fw-docs-preview-box cdw-fw-docs-preview-box--alt">gap-6</div>
        </div>
        <div class="cdw-fw-docs-example-caption">Use gaps maiores para blocos mais espaçados.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-flex cdw-fw-gap-2"&gt;...&lt;/div&gt;
&lt;div class="cdw-fw-flex cdw-fw-gap-6"&gt;...&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="util-tamanho" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Tamanho</h3>
    <p class="cdw-fw-docs-subdesc">
      Ajuste largura e limite máximo de forma simples.
      <span class="cdw-fw-docs-when">Quando usar: formulários e containers responsivos.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-w-100</span>
      <span>cdw-fw-w-auto</span>
      <span>cdw-fw-maxw-100</span>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Largura 100% e auto</div>
        <div class="cdw-fw-docs-badge">Básico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <input class="cdw-fw-w-100" type="text" placeholder="Input com w-100" style="padding:8px; border-radius:8px; border:1px solid #d1d7df;" />
        <div class="cdw-fw-w-auto" style="margin-top:10px; background:#dfe9f6; padding:10px; border-radius:10px;">Caixa w-auto</div>
        <div class="cdw-fw-docs-example-caption">w-100 expande, w-auto ajusta ao conteúdo.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;input class="cdw-fw-w-100" /&gt;
&lt;div class="cdw-fw-w-auto"&gt;Caixa w-auto&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Máximo de largura</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-maxw-100" style="background:#eef2f7; padding:10px; border-radius:10px;">
          Conteúdo longo que não ultrapassa o container.
        </div>
        <div class="cdw-fw-docs-example-caption">maxw-100 evita estouro horizontal.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-maxw-100"&gt;Conteúdo longo...&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="util-texto" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Alinhamento de texto</h3>
    <p class="cdw-fw-docs-subdesc">
      Alinhe texto rapidamente sem criar classes customizadas.
      <span class="cdw-fw-docs-when">Quando usar: títulos, cards e legendas.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-text-left</span>
      <span>cdw-fw-text-center</span>
      <span>cdw-fw-text-right</span>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Alinhamento em três caixas</div>
        <div class="cdw-fw-docs-badge">Básico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-gap-2">
          <div class="cdw-fw-text-left" style="background:#dfe9f6; padding:10px; border-radius:10px; flex:1;">Left</div>
          <div class="cdw-fw-text-center" style="background:#f8dcc8; padding:10px; border-radius:10px; flex:1;">Center</div>
          <div class="cdw-fw-text-right" style="background:#eef2f7; padding:10px; border-radius:10px; flex:1;">Right</div>
        </div>
        <div class="cdw-fw-docs-example-caption">Cada caixa usa uma classe de alinhamento.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-text-left"&gt;Left&lt;/div&gt;
&lt;div class="cdw-fw-text-center"&gt;Center&lt;/div&gt;
&lt;div class="cdw-fw-text-right"&gt;Right&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>
</section>
`,
  colors: `<section id="cores" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Cores (Accent System)</h2>
    <p class="cdw-fw-docs-lead">
      Escolha uma cor base com cdw-fw-accent-* e aplique com modificadores de texto, fundo ou borda.
    </p>
  </div>

  <div class="cdw-fw-docs-toc">
    <span class="cdw-fw-docs-toc-title">&Iacute;ndice desta p&aacute;gina</span>
    <a href="#cores-intro">Introdu&ccedil;&atilde;o</a>
    <a href="#cores-paleta">Paleta</a>
    <a href="#cores-uso">Uso b&aacute;sico</a>
  </div>

  <div class="cdw-fw-docs-subsection" id="cores-intro" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Introdu&ccedil;&atilde;o</h3>
    <p class="cdw-fw-docs-subdesc">
      Voc&ecirc; escolhe a cor com cdw-fw-accent-* e escolhe como usar com os modifiers.
      <span class="cdw-fw-docs-when">Quando usar: sempre que precisar padronizar destaque visual.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-accent-*</span>
      <span>cdw-fw-text-accent</span>
      <span>cdw-fw-bg-accent</span>
      <span>cdw-fw-border-accent</span>
      <span>cdw-fw-soft</span>
    </div>
    <div class="cdw-fw-docs-card">
      <div class="cdw-fw-docs-card-title">Conceito</div>
      <p class="cdw-fw-docs-card-desc">
        Voc&ecirc; separa "cor" de "como aplicar" para manter consist&ecirc;ncia e reutilizar a mesma paleta.
      </p>
      <p class="cdw-fw-docs-card-desc">
        Soft &eacute; apenas um modificador visual: n&atilde;o cria outra cor, s&oacute; suaviza a base.
      </p>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="cores-paleta" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Paleta de cores</h3>
    <p class="cdw-fw-docs-subdesc">
      12 cores oficiais, todas diferentes e prontas para uso.
      <span class="cdw-fw-docs-when">Quando usar: escolha a cor para o contexto do seu componente.</span>
    </p>

    <div class="cdw-fw-docs-color-grid">
      <div class="cdw-fw-docs-color-card">
        <div class="cdw-fw-docs-color-name">ocean</div>
        <div class="cdw-fw-docs-color-swatches">
          <div class="cdw-fw-docs-color-swatch cdw-fw-docs-color-swatch--base cdw-fw-accent-ocean cdw-fw-bg-accent">Base</div>
          <div class="cdw-fw-docs-color-swatch cdw-fw-accent-ocean cdw-fw-bg-accent cdw-fw-soft">Soft</div>
        </div>
      </div>
      <div class="cdw-fw-docs-color-card">
        <div class="cdw-fw-docs-color-name">sky</div>
        <div class="cdw-fw-docs-color-swatches">
          <div class="cdw-fw-docs-color-swatch cdw-fw-docs-color-swatch--base cdw-fw-accent-sky cdw-fw-bg-accent">Base</div>
          <div class="cdw-fw-docs-color-swatch cdw-fw-accent-sky cdw-fw-bg-accent cdw-fw-soft">Soft</div>
        </div>
      </div>
      <div class="cdw-fw-docs-color-card">
        <div class="cdw-fw-docs-color-name">teal</div>
        <div class="cdw-fw-docs-color-swatches">
          <div class="cdw-fw-docs-color-swatch cdw-fw-docs-color-swatch--base cdw-fw-accent-teal cdw-fw-bg-accent">Base</div>
          <div class="cdw-fw-docs-color-swatch cdw-fw-accent-teal cdw-fw-bg-accent cdw-fw-soft">Soft</div>
        </div>
      </div>
      <div class="cdw-fw-docs-color-card">
        <div class="cdw-fw-docs-color-name">forest</div>
        <div class="cdw-fw-docs-color-swatches">
          <div class="cdw-fw-docs-color-swatch cdw-fw-docs-color-swatch--base cdw-fw-accent-forest cdw-fw-bg-accent">Base</div>
          <div class="cdw-fw-docs-color-swatch cdw-fw-accent-forest cdw-fw-bg-accent cdw-fw-soft">Soft</div>
        </div>
      </div>
      <div class="cdw-fw-docs-color-card">
        <div class="cdw-fw-docs-color-name">lime</div>
        <div class="cdw-fw-docs-color-swatches">
          <div class="cdw-fw-docs-color-swatch cdw-fw-docs-color-swatch--base cdw-fw-accent-lime cdw-fw-bg-accent">Base</div>
          <div class="cdw-fw-docs-color-swatch cdw-fw-accent-lime cdw-fw-bg-accent cdw-fw-soft">Soft</div>
        </div>
      </div>
      <div class="cdw-fw-docs-color-card">
        <div class="cdw-fw-docs-color-name">sun</div>
        <div class="cdw-fw-docs-color-swatches">
          <div class="cdw-fw-docs-color-swatch cdw-fw-docs-color-swatch--base cdw-fw-accent-sun cdw-fw-bg-accent">Base</div>
          <div class="cdw-fw-docs-color-swatch cdw-fw-accent-sun cdw-fw-bg-accent cdw-fw-soft">Soft</div>
        </div>
      </div>
      <div class="cdw-fw-docs-color-card">
        <div class="cdw-fw-docs-color-name">ember</div>
        <div class="cdw-fw-docs-color-swatches">
          <div class="cdw-fw-docs-color-swatch cdw-fw-docs-color-swatch--base cdw-fw-accent-ember cdw-fw-bg-accent">Base</div>
          <div class="cdw-fw-docs-color-swatch cdw-fw-accent-ember cdw-fw-bg-accent cdw-fw-soft">Soft</div>
        </div>
      </div>
      <div class="cdw-fw-docs-color-card">
        <div class="cdw-fw-docs-color-name">cocoa</div>
        <div class="cdw-fw-docs-color-swatches">
          <div class="cdw-fw-docs-color-swatch cdw-fw-docs-color-swatch--base cdw-fw-accent-cocoa cdw-fw-bg-accent">Base</div>
          <div class="cdw-fw-docs-color-swatch cdw-fw-accent-cocoa cdw-fw-bg-accent cdw-fw-soft">Soft</div>
        </div>
      </div>
      <div class="cdw-fw-docs-color-card">
        <div class="cdw-fw-docs-color-name">ruby</div>
        <div class="cdw-fw-docs-color-swatches">
          <div class="cdw-fw-docs-color-swatch cdw-fw-docs-color-swatch--base cdw-fw-accent-ruby cdw-fw-bg-accent">Base</div>
          <div class="cdw-fw-docs-color-swatch cdw-fw-accent-ruby cdw-fw-bg-accent cdw-fw-soft">Soft</div>
        </div>
      </div>
      <div class="cdw-fw-docs-color-card">
        <div class="cdw-fw-docs-color-name">rose</div>
        <div class="cdw-fw-docs-color-swatches">
          <div class="cdw-fw-docs-color-swatch cdw-fw-docs-color-swatch--base cdw-fw-accent-rose cdw-fw-bg-accent">Base</div>
          <div class="cdw-fw-docs-color-swatch cdw-fw-accent-rose cdw-fw-bg-accent cdw-fw-soft">Soft</div>
        </div>
      </div>
      <div class="cdw-fw-docs-color-card">
        <div class="cdw-fw-docs-color-name">violet</div>
        <div class="cdw-fw-docs-color-swatches">
          <div class="cdw-fw-docs-color-swatch cdw-fw-docs-color-swatch--base cdw-fw-accent-violet cdw-fw-bg-accent">Base</div>
          <div class="cdw-fw-docs-color-swatch cdw-fw-accent-violet cdw-fw-bg-accent cdw-fw-soft">Soft</div>
        </div>
      </div>
      <div class="cdw-fw-docs-color-card">
        <div class="cdw-fw-docs-color-name">indigo</div>
        <div class="cdw-fw-docs-color-swatches">
          <div class="cdw-fw-docs-color-swatch cdw-fw-docs-color-swatch--base cdw-fw-accent-indigo cdw-fw-bg-accent">Base</div>
          <div class="cdw-fw-docs-color-swatch cdw-fw-accent-indigo cdw-fw-bg-accent cdw-fw-soft">Soft</div>
        </div>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="cores-uso" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Uso b&aacute;sico</h3>
    <p class="cdw-fw-docs-subdesc">
      Aplique a mesma cor em texto, fundo ou borda com modificadores.
      <span class="cdw-fw-docs-when">Quando usar: destaque pontual em componentes e chamadas.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-text-accent</span>
      <span>cdw-fw-bg-accent</span>
      <span>cdw-fw-border-accent</span>
      <span>cdw-fw-soft</span>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Texto colorido</div>
        <div class="cdw-fw-docs-badge">B&aacute;sico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <span class="cdw-fw-accent-ocean cdw-fw-text-accent">Texto em ocean</span>
        <div class="cdw-fw-docs-example-caption">A cor vem da classe cdw-fw-accent-ocean.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;span class="cdw-fw-accent-ocean cdw-fw-text-accent"&gt;
  Texto em ocean
&lt;/span&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Fundo suave</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-accent-rose cdw-fw-bg-accent cdw-fw-soft" style="padding:10px 12px; border-radius:10px;">
          Fundo pastel com a mesma cor base
        </div>
        <div class="cdw-fw-docs-example-caption">Soft deriva da mesma cor, sem criar nova paleta.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-accent-rose cdw-fw-bg-accent cdw-fw-soft"&gt;
  Fundo pastel com a mesma cor base
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Borda de destaque</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-accent-indigo cdw-fw-border-accent" style="border:2px solid; padding:10px 12px; border-radius:10px;">
          Borda usando a mesma cor de destaque
        </div>
        <div class="cdw-fw-docs-example-caption">A classe accent define a cor da borda.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-accent-indigo cdw-fw-border-accent" style="border:2px solid;"&gt;
  Borda usando a mesma cor de destaque
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>
</section>
`,
  alert: `<section id="alertas" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Alert</h2>
    <p class="cdw-fw-docs-lead">
      Alertas premium para mensagens importantes, com hierarquia clara,
      cores suaves e op&ccedil;&otilde;es elegantes de &iacute;cone e fechamento.
    </p>
  </div>

  <div class="cdw-fw-docs-toc">
    <span class="cdw-fw-docs-toc-title">&Iacute;ndice desta p&aacute;gina</span>
    <a href="#alert-intro">Introdu&ccedil;&atilde;o</a>
    <a href="#alert-estrutura">Estrutura base</a>
    <a href="#alert-modelos">Modelos</a>
    <a href="#alert-variantes">Cores e variantes</a>
    <a href="#alert-api">API / Op&ccedil;&otilde;es</a>
    <a href="#alert-boas-praticas">Boas pr&aacute;ticas</a>
  </div>

  <div class="cdw-fw-docs-subsection" id="alert-intro" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Introdu&ccedil;&atilde;o</h3>
    <p class="cdw-fw-docs-subdesc">
      Use o Alert para comunicar mensagens importantes sem perder
      a eleg&acirc;ncia visual. Ele suporta variantes sem&acirc;nticas, vers&otilde;es soft,
      &iacute;cones opcionais e bot&atilde;o de fechar.
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-alert</span>
      <span>cdw-alert--note</span>
      <span>cdw-alert--ok</span>
      <span>cdw-alert--focus</span>
      <span>cdw-alert--block</span>
      <span>cdw-alert--neutral</span>
      <span>cdw-alert-icon</span>
      <span>cdw-alert-close</span>
      <span>data-cdw-alert</span>
      <span>data-cdw-alert-close</span>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="alert-estrutura" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Estrutura base</h3>
    <p class="cdw-fw-docs-subdesc">
      Estrutura m&iacute;nima com &iacute;cone e bot&atilde;o opcionais.
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">HTML base</div>
        <div class="cdw-fw-docs-badge">B&aacute;sico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-alert cdw-alert--note" data-cdw-alert>
          <div class="cdw-alert-icon"></div>
          <div class="cdw-alert-content">
            <div class="cdw-alert-title">Atualiza&ccedil;&atilde;o dispon&iacute;vel</div>
            <div class="cdw-alert-message">Seu painel foi atualizado com sucesso.</div>
          </div>
          <button class="cdw-alert-close" data-cdw-alert-close aria-label="Fechar"></button>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-alert cdw-alert--note" data-cdw-alert&gt;
  &lt;div class="cdw-alert-icon"&gt;&lt;/div&gt;
  &lt;div class="cdw-alert-content"&gt;
    &lt;div class="cdw-alert-title"&gt;T&iacute;tulo&lt;/div&gt;
    &lt;div class="cdw-alert-message"&gt;Mensagem&lt;/div&gt;
  &lt;/div&gt;
  &lt;button class="cdw-alert-close" data-cdw-alert-close aria-label="Fechar"&gt;&lt;/button&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="alert-modelos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Modelos</h3>
    <p class="cdw-fw-docs-subdesc">
      Modelos prontos para contextos corporativos reais.
    </p>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Alert simples</div>
        <div class="cdw-fw-docs-badge">B&aacute;sico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-alert cdw-alert--note" data-cdw-alert>
          <div class="cdw-alert-content">
            <div class="cdw-alert-message">Seu perfil foi atualizado.</div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-alert cdw-alert--note" data-cdw-alert&gt;
  &lt;div class="cdw-alert-content"&gt;
    &lt;div class="cdw-alert-message"&gt;Seu perfil foi atualizado.&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">T&iacute;tulo + descri&ccedil;&atilde;o</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-alert cdw-alert--ok" data-cdw-alert>
          <div class="cdw-alert-content">
            <div class="cdw-alert-title">Pagamento confirmado</div>
            <div class="cdw-alert-message">Recebemos seu pagamento e atualizamos o status.</div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-alert cdw-alert--ok" data-cdw-alert&gt;
  &lt;div class="cdw-alert-content"&gt;
    &lt;div class="cdw-alert-title"&gt;Pagamento confirmado&lt;/div&gt;
    &lt;div class="cdw-alert-message"&gt;Recebemos seu pagamento.&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Alert com &iacute;cone</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-alert cdw-alert--focus" data-cdw-alert>
          <div class="cdw-alert-icon"></div>
          <div class="cdw-alert-content">
            <div class="cdw-alert-title">Verifique os dados</div>
            <div class="cdw-alert-message">Existem campos pendentes para finalizar o cadastro.</div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-alert cdw-alert--focus" data-cdw-alert&gt;
  &lt;div class="cdw-alert-icon"&gt;&lt;/div&gt;
  &lt;div class="cdw-alert-content"&gt;
    &lt;div class="cdw-alert-title"&gt;Verifique os dados&lt;/div&gt;
    &lt;div class="cdw-alert-message"&gt;Existem campos pendentes.&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Alert com fechar</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-alert cdw-alert--note" data-cdw-alert>
          <div class="cdw-alert-icon"></div>
          <div class="cdw-alert-content">
            <div class="cdw-alert-title">Nova mensagem</div>
            <div class="cdw-alert-message">Voc&ecirc; recebeu uma nova notifica&ccedil;&atilde;o.</div>
          </div>
          <button class="cdw-alert-close" data-cdw-alert-close aria-label="Fechar"></button>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-alert cdw-alert--note" data-cdw-alert&gt;
  &lt;div class="cdw-alert-icon"&gt;&lt;/div&gt;
  &lt;div class="cdw-alert-content"&gt;
    &lt;div class="cdw-alert-title"&gt;Nova mensagem&lt;/div&gt;
    &lt;div class="cdw-alert-message"&gt;Voc&ecirc; recebeu uma notifica&ccedil;&atilde;o.&lt;/div&gt;
  &lt;/div&gt;
  &lt;button class="cdw-alert-close" data-cdw-alert-close aria-label="Fechar"&gt;&lt;/button&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Alert soft corporativo</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-alert cdw-alert--neutral-soft" data-cdw-alert>
          <div class="cdw-alert-icon"></div>
          <div class="cdw-alert-content">
            <div class="cdw-alert-title">Pol&iacute;ticas atualizadas</div>
            <div class="cdw-alert-message">As novas diretrizes entram em vigor amanh&atilde;.</div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-alert cdw-alert--neutral-soft" data-cdw-alert&gt;
  &lt;div class="cdw-alert-icon"&gt;&lt;/div&gt;
  &lt;div class="cdw-alert-content"&gt;
    &lt;div class="cdw-alert-title"&gt;Pol&iacute;ticas atualizadas&lt;/div&gt;
    &lt;div class="cdw-alert-message"&gt;As novas diretrizes entram em vigor amanh&atilde;.&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Alert inline</div>
        <div class="cdw-fw-docs-badge">Forms</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-alert cdw-alert--focus-soft cdw-alert--inline" data-cdw-alert>
          <div class="cdw-alert-icon"></div>
          <div class="cdw-alert-content">
            <div class="cdw-alert-message">Digite um e-mail v&aacute;lido para continuar.</div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-alert cdw-alert--focus-soft cdw-alert--inline" data-cdw-alert&gt;
  &lt;div class="cdw-alert-icon"&gt;&lt;/div&gt;
  &lt;div class="cdw-alert-content"&gt;
    &lt;div class="cdw-alert-message"&gt;Digite um e-mail v&aacute;lido.&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Alert destaque</div>
        <div class="cdw-fw-docs-badge">Premium</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-alert cdw-alert--block cdw-alert--featured" data-cdw-alert>
          <div class="cdw-alert-icon"></div>
          <div class="cdw-alert-content">
            <div class="cdw-alert-title">Aten&ccedil;&atilde;o cr&iacute;tica</div>
            <div class="cdw-alert-message">Identificamos um acesso incomum na sua conta.</div>
          </div>
          <button class="cdw-alert-close" data-cdw-alert-close aria-label="Fechar"></button>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-alert cdw-alert--block cdw-alert--featured" data-cdw-alert&gt;
  &lt;div class="cdw-alert-icon"&gt;&lt;/div&gt;
  &lt;div class="cdw-alert-content"&gt;
    &lt;div class="cdw-alert-title"&gt;Aten&ccedil;&atilde;o cr&iacute;tica&lt;/div&gt;
    &lt;div class="cdw-alert-message"&gt;Identificamos um acesso incomum.&lt;/div&gt;
  &lt;/div&gt;
  &lt;button class="cdw-alert-close" data-cdw-alert-close aria-label="Fechar"&gt;&lt;/button&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="alert-variantes" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Cores e variantes</h3>
    <p class="cdw-fw-docs-subdesc">
      Use variantes sem&acirc;nticas para indicar o contexto da mensagem.
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-alert--note</span>
      <span>cdw-alert--note-soft</span>
      <span>cdw-alert--ok</span>
      <span>cdw-alert--ok-soft</span>
      <span>cdw-alert--focus</span>
      <span>cdw-alert--focus-soft</span>
      <span>cdw-alert--block</span>
      <span>cdw-alert--block-soft</span>
      <span>cdw-alert--neutral</span>
      <span>cdw-alert--neutral-soft</span>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="alert-api" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">API / Op&ccedil;&otilde;es</h3>
    <p class="cdw-fw-docs-subdesc">
      Configure o comportamento e o visual via classes e atributos.
    </p>
    <table class="cdw-fw-docs-scale-table">
      <thead>
        <tr>
          <th>Op&ccedil;&atilde;o</th>
          <th>Tipo</th>
          <th>Padr&atilde;o</th>
          <th>Descri&ccedil;&atilde;o</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>cdw-alert--note</td>
          <td>class</td>
          <td>-</td>
          <td>Mensagem contextual.</td>
        </tr>
        <tr>
          <td>cdw-alert--ok</td>
          <td>class</td>
          <td>-</td>
          <td>Confirma&ccedil;&atilde;o de sucesso.</td>
        </tr>
        <tr>
          <td>cdw-alert--focus</td>
          <td>class</td>
          <td>-</td>
          <td>Alerta de aten&ccedil;&atilde;o.</td>
        </tr>
        <tr>
          <td>cdw-alert--block</td>
          <td>class</td>
          <td>-</td>
          <td>Mensagem cr&iacute;tica.</td>
        </tr>
        <tr>
          <td>cdw-alert--neutral</td>
          <td>class</td>
          <td>-</td>
          <td>Mensagem neutra.</td>
        </tr>
        <tr>
          <td>cdw-alert--*-soft</td>
          <td>class</td>
          <td>-</td>
          <td>Vers&atilde;o suave da variante.</td>
        </tr>
        <tr>
          <td>cdw-alert--inline</td>
          <td>class</td>
          <td>-</td>
          <td>Compacto para formul&aacute;rios.</td>
        </tr>
        <tr>
          <td>cdw-alert--featured</td>
          <td>class</td>
          <td>-</td>
          <td>Layout de destaque premium.</td>
        </tr>
        <tr>
          <td>data-cdw-alert</td>
          <td>attribute</td>
          <td>-</td>
          <td>Ativa o comportamento autom&aacute;tico do Alert.</td>
        </tr>
        <tr>
          <td>data-cdw-alert-close</td>
          <td>attribute</td>
          <td>-</td>
          <td>Habilita o fechamento do Alert.</td>
        </tr>
        <tr>
          <td>data-autoclose</td>
          <td>number</td>
          <td>-</td>
          <td>Remove o alert ap&oacute;s X ms.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="cdw-fw-docs-subsection" id="alert-boas-praticas" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Boas pr&aacute;ticas</h3>
    <p class="cdw-fw-docs-subdesc">
      Use note para comunica&ccedil;&otilde;es neutras, ok para confirma&ccedil;&atilde;o,
      focus para avisos operacionais e block para bloqueios cr&iacute;ticos. Para mensagens din&acirc;micas,
      aplique aria-live="polite" no container.
    </p>
  </div>
</section>

`,
  };

  const sectionOrder = [
    "gettingStarted",
    "layout",
    "utilities",
    "colors",
    "buttons",
    "accordion",
    "alert",
  ];

  app.innerHTML = `
    <div class="cdw-fw-docs-app">
      <aside class="cdw-fw-docs-sidebar">
        <div class="cdw-fw-docs-brand">
          <div class="cdw-fw-docs-logo" aria-hidden="true"></div>
          <div>
            <div class="cdw-fw-docs-brand-title">CDW FW</div>
            <div class="cdw-fw-docs-brand-sub">Docs</div>
          </div>
        </div>
        <div class="cdw-fw-docs-side-version">v${version}</div>
        <nav class="cdw-fw-docs-nav" data-cdw-fw-docs-nav-container></nav>
        <div class="cdw-fw-docs-side-footer">Documentacao CDW-FW</div>
      </aside>
      <main class="cdw-fw-docs-main">
        <div class="cdw-fw-docs-topbar">
          <div>
            <div class="cdw-fw-docs-breadcrumb">Framework</div>
            <div class="cdw-fw-docs-title">CDW-FW</div>
          </div>
          <div class="cdw-fw-docs-version">v${version}</div>
        </div>
        <div class="cdw-fw-docs-content" data-cdw-fw-docs-content></div>
      </main>
    </div>
  `;

  const content = app.querySelector("[data-cdw-fw-docs-content]");
  if (!content) {
    return;
  }

  content.innerHTML = sectionOrder
    .map((key) => sections[key])
    .filter(Boolean)
    .join("\n");

  buildNav(app);
  setupCopy(app);
  setupHiddenToggle(app);
  setupSmoothScroll(app);
  setupScrollSpy(app);

})();

function buildNav(root) {
  const nav = root.querySelector("[data-cdw-fw-docs-nav-container]");
  if (!nav) {
    return;
  }

  nav.innerHTML = "";

  const sections = Array.from(root.querySelectorAll(".cdw-fw-docs-section"));
  sections.forEach((section) => {
    const title = section.querySelector(".cdw-fw-docs-section-title");
    const group = document.createElement("div");
    group.className = "cdw-fw-docs-nav-group";

    const link = document.createElement("a");
    link.className = "cdw-fw-docs-nav-link";
    link.href = `#${section.id}`;
    link.textContent = title ? title.textContent.trim() : section.id;
    link.setAttribute("data-cdw-fw-docs-nav", "");
    group.appendChild(link);

    const subSections = Array.from(section.querySelectorAll(".cdw-fw-docs-subsection"));
    subSections.forEach((sub) => {
      const subTitle = sub.querySelector(".cdw-fw-docs-subtitle");
      const subLink = document.createElement("a");
      subLink.className = "cdw-fw-docs-nav-link cdw-fw-docs-nav-link--sub";
      subLink.href = `#${sub.id}`;
      subLink.textContent = subTitle ? subTitle.textContent.trim() : sub.id;
      subLink.setAttribute("data-cdw-fw-docs-nav", "");
      group.appendChild(subLink);
    });

    nav.appendChild(group);
  });
}

function setupCopy(root) {
  const buttons = Array.from(root.querySelectorAll("[data-cdw-fw-docs-copy]"));
  if (!buttons.length) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const block = button.closest(".cdw-fw-docs-codeblock");
      const code = block ? block.querySelector("[data-cdw-fw-docs-code]") : null;
      const text = code ? code.textContent || "" : "";
      if (!text) {
        return;
      }

      const markCopied = () => {
        button.setAttribute("data-cdw-fw-docs-copied", "true");
        window.setTimeout(() => {
          button.removeAttribute("data-cdw-fw-docs-copied");
        }, 1400);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(markCopied).catch(markCopied);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand("copy");
        } catch (_) {
          // Ignore copy issues.
        }
        document.body.removeChild(textarea);
        markCopied();
      }
    });
  });
}

function setupHiddenToggle(root) {
  const toggles = Array.from(root.querySelectorAll("[data-cdw-fw-docs-toggle-hidden]"));
  if (!toggles.length) {
    return;
  }

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const targetId = toggle.getAttribute("data-cdw-fw-docs-toggle-hidden");
      if (!targetId) {
        return;
      }
      const target = root.querySelector(`#${targetId}`);
      if (!target) {
        return;
      }

      const isHidden = target.classList.toggle("cdw-fw-hidden");
      toggle.textContent = isHidden ? "Mostrar" : "Esconder";
    });
  });
}

function setupSmoothScroll(root) {
  const links = Array.from(root.querySelectorAll("a[href^='#']"));
  if (!links.length) {
    return;
  }

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href) {
        return;
      }
      const id = href.slice(1);
      const target = root.querySelector(`#${id}`);
      if (!target) {
        return;
      }
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    });
  });
}

function setupScrollSpy(root) {
  const ACTIVE_CLASS = "cdw-fw-docs-nav-link--active";
  const navLinks = Array.from(root.querySelectorAll("[data-cdw-fw-docs-nav]"));
  if (!navLinks.length) {
    return;
  }

  const linkMap = new Map();
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      linkMap.set(href.slice(1), link);
    }
  });

  const sections = Array.from(root.querySelectorAll("[data-cdw-fw-docs-section]"));
  if (!sections.length || typeof IntersectionObserver !== "function") {
    return;
  }

  let activeId = null;

  const setActive = (id) => {
    if (id === activeId) {
      return;
    }

    activeId = id;
    navLinks.forEach((link) => link.classList.remove(ACTIVE_CLASS));
    const activeLink = linkMap.get(id);
    if (activeLink) {
      activeLink.classList.add(ACTIVE_CLASS);
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      rootMargin: "0px 0px -60% 0px",
      threshold: 0.15,
    }
  );

  sections.forEach((section) => observer.observe(section));

  const initialHash = window.location.hash ? window.location.hash.slice(1) : "";
  if (initialHash && linkMap.has(initialHash)) {
    setActive(initialHash);
  }
}
