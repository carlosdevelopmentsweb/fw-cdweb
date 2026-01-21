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
      Containers e grid de 12 colunas para composi&ccedil;&otilde;es responsivas.
    </p>
  </div>

  <div class="cdw-fw-docs-toc">
    <span class="cdw-fw-docs-toc-title">&Iacute;ndice desta p&aacute;gina</span>
    <a href="#layout-container">Container</a>
    <a href="#layout-grid">Grid</a>
  </div>

  <div class="cdw-fw-docs-subsection" id="layout-container" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Container</h3>
    <p class="cdw-fw-docs-subdesc">
      Centralize conte&uacute;do com largura m&aacute;xima ou ocupe toda a largura com o fluid.
      <span class="cdw-fw-docs-when">Quando usar: p&aacute;ginas com leitura centralizada.</span>
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
          <div class="cdw-fw-docs-grid-demo">Conte&uacute;do centralizado</div>
        </div>
        <div class="cdw-fw-docs-layout-band" style="margin-top:14px;">Container fluid</div>
        <div class="cdw-fw-container-fluid" style="margin-top:10px;">
          <div class="cdw-fw-docs-grid-demo">Conte&uacute;do full width</div>
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
      <span>cdw-fw-gap-*</span>
    </div>

    <div class="cdw-fw-docs-card">
      <div class="cdw-fw-docs-card-title">Sobre o gap</div>
      <div class="cdw-fw-docs-highlight">Gap cria espa&ccedil;o real entre colunas</div>
      <div class="cdw-fw-docs-highlight">Quando a soma + gap passa de 12, quebra linha</div>
      <div class="cdw-fw-docs-highlight">Use cdw-fw-gap-0 ou um gap menor para manter tudo na mesma row</div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Duas colunas</div>
        <div class="cdw-fw-docs-badge">B&aacute;sico</div>
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
        <div class="cdw-fw-docs-example-title">12 colunas sem quebra</div>
        <div class="cdw-fw-docs-badge">Base</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-container">
          <div class="cdw-fw-row cdw-fw-gap-0">
            <div class="cdw-fw-col-2"><div class="cdw-fw-docs-grid-demo">col-2</div></div>
            <div class="cdw-fw-col-2"><div class="cdw-fw-docs-grid-demo">col-2</div></div>
            <div class="cdw-fw-col-2"><div class="cdw-fw-docs-grid-demo">col-2</div></div>
            <div class="cdw-fw-col-2"><div class="cdw-fw-docs-grid-demo">col-2</div></div>
            <div class="cdw-fw-col-2"><div class="cdw-fw-docs-grid-demo">col-2</div></div>
            <div class="cdw-fw-col-2"><div class="cdw-fw-docs-grid-demo">col-2</div></div>
          </div>
        </div>
        <div class="cdw-fw-docs-example-caption">
          Sem gap, 6x col-2 fecha 12 e fica na mesma linha.
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-row cdw-fw-gap-0"&gt;
  &lt;div class="cdw-fw-col-2"&gt;...&lt;/div&gt;
  &lt;div class="cdw-fw-col-2"&gt;...&lt;/div&gt;
  &lt;div class="cdw-fw-col-2"&gt;...&lt;/div&gt;
  &lt;div class="cdw-fw-col-2"&gt;...&lt;/div&gt;
  &lt;div class="cdw-fw-col-2"&gt;...&lt;/div&gt;
  &lt;div class="cdw-fw-col-2"&gt;...&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Tr&ecirc;s colunas</div>
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
        <div class="cdw-fw-docs-example-title">Sidebar + conte&uacute;do</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-container">
          <div class="cdw-fw-row cdw-fw-gap-3">
            <div class="cdw-fw-col-12 cdw-fw-col-lg-3">
              <div class="cdw-fw-docs-grid-demo">Sidebar</div>
            </div>
            <div class="cdw-fw-col-12 cdw-fw-col-lg-9">
              <div class="cdw-fw-docs-grid-demo">Conte&uacute;do</div>
            </div>
          </div>
        </div>
        <div class="cdw-fw-docs-example-caption">Mobile empilha, lg separa sidebar e conte&uacute;do.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-row cdw-fw-gap-3"&gt;
  &lt;div class="cdw-fw-col-12 cdw-fw-col-lg-3"&gt;Sidebar&lt;/div&gt;
  &lt;div class="cdw-fw-col-12 cdw-fw-col-lg-9"&gt;Conte&uacute;do&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Mapa completo (1-12)</div>
        <div class="cdw-fw-docs-badge">Refer&ecirc;ncia</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-container">
          <div class="cdw-fw-row cdw-fw-gap-3">
            <div class="cdw-fw-col-12">
              <div class="cdw-fw-docs-grid-demo">col-12</div>
            </div>
          </div>
          <div class="cdw-fw-row cdw-fw-gap-3" style="margin-top:12px;">
            <div class="cdw-fw-col-11">
              <div class="cdw-fw-docs-grid-demo">col-11</div>
            </div>
            <div class="cdw-fw-col-1">
              <div class="cdw-fw-docs-grid-demo">col-1</div>
            </div>
          </div>
          <div class="cdw-fw-row cdw-fw-gap-3" style="margin-top:12px;">
            <div class="cdw-fw-col-10">
              <div class="cdw-fw-docs-grid-demo">col-10</div>
            </div>
            <div class="cdw-fw-col-2">
              <div class="cdw-fw-docs-grid-demo">col-2</div>
            </div>
          </div>
          <div class="cdw-fw-row cdw-fw-gap-3" style="margin-top:12px;">
            <div class="cdw-fw-col-9">
              <div class="cdw-fw-docs-grid-demo">col-9</div>
            </div>
            <div class="cdw-fw-col-3">
              <div class="cdw-fw-docs-grid-demo">col-3</div>
            </div>
          </div>
          <div class="cdw-fw-row cdw-fw-gap-3" style="margin-top:12px;">
            <div class="cdw-fw-col-8">
              <div class="cdw-fw-docs-grid-demo">col-8</div>
            </div>
            <div class="cdw-fw-col-4">
              <div class="cdw-fw-docs-grid-demo">col-4</div>
            </div>
          </div>
          <div class="cdw-fw-row cdw-fw-gap-3" style="margin-top:12px;">
            <div class="cdw-fw-col-7">
              <div class="cdw-fw-docs-grid-demo">col-7</div>
            </div>
            <div class="cdw-fw-col-5">
              <div class="cdw-fw-docs-grid-demo">col-5</div>
            </div>
          </div>
          <div class="cdw-fw-row cdw-fw-gap-3" style="margin-top:12px;">
            <div class="cdw-fw-col-6">
              <div class="cdw-fw-docs-grid-demo">col-6</div>
            </div>
            <div class="cdw-fw-col-6">
              <div class="cdw-fw-docs-grid-demo">col-6</div>
            </div>
          </div>
          <div class="cdw-fw-row cdw-fw-gap-3" style="margin-top:12px;">
            <div class="cdw-fw-col-4">
              <div class="cdw-fw-docs-grid-demo">col-4</div>
            </div>
            <div class="cdw-fw-col-4">
              <div class="cdw-fw-docs-grid-demo">col-4</div>
            </div>
            <div class="cdw-fw-col-4">
              <div class="cdw-fw-docs-grid-demo">col-4</div>
            </div>
          </div>
          <div class="cdw-fw-row cdw-fw-gap-3" style="margin-top:12px;">
            <div class="cdw-fw-col-3">
              <div class="cdw-fw-docs-grid-demo">col-3</div>
            </div>
            <div class="cdw-fw-col-3">
              <div class="cdw-fw-docs-grid-demo">col-3</div>
            </div>
            <div class="cdw-fw-col-3">
              <div class="cdw-fw-docs-grid-demo">col-3</div>
            </div>
            <div class="cdw-fw-col-3">
              <div class="cdw-fw-docs-grid-demo">col-3</div>
            </div>
          </div>
          <div class="cdw-fw-row cdw-fw-gap-3" style="margin-top:12px;">
            <div class="cdw-fw-col-2">
              <div class="cdw-fw-docs-grid-demo">col-2</div>
            </div>
            <div class="cdw-fw-col-2">
              <div class="cdw-fw-docs-grid-demo">col-2</div>
            </div>
            <div class="cdw-fw-col-2">
              <div class="cdw-fw-docs-grid-demo">col-2</div>
            </div>
            <div class="cdw-fw-col-2">
              <div class="cdw-fw-docs-grid-demo">col-2</div>
            </div>
            <div class="cdw-fw-col-2">
              <div class="cdw-fw-docs-grid-demo">col-2</div>
            </div>
            <div class="cdw-fw-col-2">
              <div class="cdw-fw-docs-grid-demo">col-2</div>
            </div>
          </div>
          <div class="cdw-fw-row cdw-fw-gap-3" style="margin-top:12px;">
            <div class="cdw-fw-col-1">
              <div class="cdw-fw-docs-grid-demo">col-1</div>
            </div>
            <div class="cdw-fw-col-1">
              <div class="cdw-fw-docs-grid-demo">col-1</div>
            </div>
            <div class="cdw-fw-col-1">
              <div class="cdw-fw-docs-grid-demo">col-1</div>
            </div>
            <div class="cdw-fw-col-1">
              <div class="cdw-fw-docs-grid-demo">col-1</div>
            </div>
            <div class="cdw-fw-col-1">
              <div class="cdw-fw-docs-grid-demo">col-1</div>
            </div>
            <div class="cdw-fw-col-1">
              <div class="cdw-fw-docs-grid-demo">col-1</div>
            </div>
            <div class="cdw-fw-col-1">
              <div class="cdw-fw-docs-grid-demo">col-1</div>
            </div>
            <div class="cdw-fw-col-1">
              <div class="cdw-fw-docs-grid-demo">col-1</div>
            </div>
            <div class="cdw-fw-col-1">
              <div class="cdw-fw-docs-grid-demo">col-1</div>
            </div>
            <div class="cdw-fw-col-1">
              <div class="cdw-fw-docs-grid-demo">col-1</div>
            </div>
            <div class="cdw-fw-col-1">
              <div class="cdw-fw-docs-grid-demo">col-1</div>
            </div>
            <div class="cdw-fw-col-1">
              <div class="cdw-fw-docs-grid-demo">col-1</div>
            </div>
          </div>
        </div>
        <div class="cdw-fw-docs-example-caption">
          Mapa visual com todas as larguras de 1 a 12 colunas.
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-row cdw-fw-gap-3"&gt;
  &lt;div class="cdw-fw-col-12"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-12&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-fw-row cdw-fw-gap-3"&gt;
  &lt;div class="cdw-fw-col-11"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-11&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-1"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-1&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-fw-row cdw-fw-gap-3"&gt;
  &lt;div class="cdw-fw-col-10"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-10&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-2"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-2&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-fw-row cdw-fw-gap-3"&gt;
  &lt;div class="cdw-fw-col-9"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-9&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-3"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-3&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-fw-row cdw-fw-gap-3"&gt;
  &lt;div class="cdw-fw-col-8"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-8&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-4"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-4&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-fw-row cdw-fw-gap-3"&gt;
  &lt;div class="cdw-fw-col-7"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-7&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-5"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-5&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-fw-row cdw-fw-gap-3"&gt;
  &lt;div class="cdw-fw-col-6"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-6&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-6"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-6&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-fw-row cdw-fw-gap-3"&gt;
  &lt;div class="cdw-fw-col-4"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-4&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-4"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-4&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-4"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-4&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-fw-row cdw-fw-gap-3"&gt;
  &lt;div class="cdw-fw-col-3"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-3&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-3"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-3&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-3"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-3&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-3"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-3&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-fw-row cdw-fw-gap-3"&gt;
  &lt;div class="cdw-fw-col-2"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-2&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-2"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-2&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-2"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-2&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-2"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-2&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-2"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-2&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-2"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-2&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-fw-row cdw-fw-gap-3"&gt;
  &lt;div class="cdw-fw-col-1"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-1&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-1"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-1&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-1"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-1&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-1"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-1&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-1"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-1&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-1"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-1&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-1"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-1&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-1"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-1&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-1"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-1&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-1"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-1&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-1"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-1&lt;/div&gt;&lt;/div&gt;
  &lt;div class="cdw-fw-col-1"&gt;&lt;div class="cdw-fw-docs-grid-demo"&gt;col-1&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-card">
      <div class="cdw-fw-docs-card-title">Recomenda&ccedil;&otilde;es de uso</div>
      <div class="cdw-fw-docs-highlight">Row sempre como pai</div>
      <div class="cdw-fw-docs-highlight">Colunas sempre dentro de Row</div>
      <div class="cdw-fw-docs-highlight">Use gap utilities para espa&ccedil;amento</div>
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
    <a href="#botoes-modelos">Modelos adicionais</a>
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

  <div class="cdw-fw-docs-subsection" id="botoes-modelos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Modelos adicionais</h3>
    <p class="cdw-fw-docs-subdesc">
      Mais formatos para compor bot&otilde;es com contagem, sele&ccedil;&atilde;o e &iacute;cones.
      <span class="cdw-fw-docs-when">Quando usar: a&ccedil;&otilde;es com feedback, filtros e clusters visuais.</span>
    </p>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Split com contador</div>
        <div class="cdw-fw-docs-badge">Novo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-docs-btn-row">
          <div class="cdw-fw-btn-group cdw-fw-btn-group--rounded">
            <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded cdw-fw-accent-rose cdw-fw-btn--iconic">
              <span class="cdw-fw-btn__icon">&hearts;</span>Curtir
            </button>
            <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded cdw-fw-accent-rose cdw-fw-btn--count">2.048</button>
          </div>
          <div class="cdw-fw-btn-group cdw-fw-btn-group--rounded">
            <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded cdw-fw-accent-sky cdw-fw-btn--iconic">
              <span class="cdw-fw-btn__icon">+</span>Salvar
            </button>
            <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded cdw-fw-accent-sky cdw-fw-btn--count">1.048</button>
          </div>
        </div>
        <div class="cdw-fw-docs-example-caption">Destaque com contador mantendo o CTA em evid&ecirc;ncia.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-btn-group cdw-fw-btn-group--rounded"&gt;
  &lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded cdw-fw-accent-rose cdw-fw-btn--iconic"&gt;
    &lt;span class="cdw-fw-btn__icon"&gt;&amp;hearts;&lt;/span&gt;Curtir
  &lt;/button&gt;
  &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded cdw-fw-accent-rose cdw-fw-btn--count"&gt;2.048&lt;/button&gt;
&lt;/div&gt;
&lt;div class="cdw-fw-btn-group cdw-fw-btn-group--rounded"&gt;
  &lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded cdw-fw-accent-sky cdw-fw-btn--iconic"&gt;
    &lt;span class="cdw-fw-btn__icon"&gt;+&lt;/span&gt;Salvar
  &lt;/button&gt;
  &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded cdw-fw-accent-sky cdw-fw-btn--count"&gt;1.048&lt;/button&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Segmentado de escolha</div>
        <div class="cdw-fw-docs-badge">Novo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-docs-btn-row">
          <div class="cdw-fw-btn-group cdw-fw-btn-group--rounded">
            <button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--rounded cdw-fw-accent-graphite">Solo</button>
            <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded cdw-fw-accent-graphite">Duo</button>
            <button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--rounded cdw-fw-accent-graphite">Trio</button>
          </div>
          <div class="cdw-fw-btn-group cdw-fw-btn-group--rounded">
            <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded cdw-fw-accent-sun">Mensal</button>
            <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded cdw-fw-accent-sun">Anual</button>
          </div>
        </div>
        <div class="cdw-fw-docs-example-caption">Alterna op&ccedil;&otilde;es mantendo coer&ecirc;ncia visual.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-btn-group cdw-fw-btn-group--rounded"&gt;
  &lt;button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--rounded cdw-fw-accent-graphite"&gt;Solo&lt;/button&gt;
  &lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded cdw-fw-accent-graphite"&gt;Duo&lt;/button&gt;
  &lt;button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--rounded cdw-fw-accent-graphite"&gt;Trio&lt;/button&gt;
&lt;/div&gt;
&lt;div class="cdw-fw-btn-group cdw-fw-btn-group--rounded"&gt;
  &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded cdw-fw-accent-sun"&gt;Mensal&lt;/button&gt;
  &lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded cdw-fw-accent-sun"&gt;Anual&lt;/button&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Dock com contador</div>
        <div class="cdw-fw-docs-badge">Novo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-docs-btn-row">
          <div class="cdw-fw-btn-dock cdw-fw-accent-ember">
            <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded">Pedidos</button>
            <span class="cdw-fw-btn-dock__count">24</span>
          </div>
          <div class="cdw-fw-btn-dock cdw-fw-accent-forest">
            <button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--rounded">Ativos</button>
            <span class="cdw-fw-btn-dock__count">128</span>
          </div>
        </div>
        <div class="cdw-fw-docs-example-caption">Contagem acoplada sem perder o contraste da a&ccedil;&atilde;o.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-btn-dock cdw-fw-accent-ember"&gt;
  &lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded"&gt;Pedidos&lt;/button&gt;
  &lt;span class="cdw-fw-btn-dock__count"&gt;24&lt;/span&gt;
&lt;/div&gt;
&lt;div class="cdw-fw-btn-dock cdw-fw-accent-forest"&gt;
  &lt;button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--rounded"&gt;Ativos&lt;/button&gt;
  &lt;span class="cdw-fw-btn-dock__count"&gt;128&lt;/span&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">&Iacute;cones integrados</div>
        <div class="cdw-fw-docs-badge">Novo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-docs-btn-row">
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded cdw-fw-btn--iconic cdw-fw-accent-indigo">
            <span class="cdw-fw-btn__icon">IN</span>Insights
          </button>
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded cdw-fw-btn--iconic cdw-fw-accent-carbon">
            <span class="cdw-fw-btn__icon">CL</span>Clube
          </button>
          <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded cdw-fw-btn--iconic cdw-fw-accent-carbon">
            <span class="cdw-fw-btn__icon">KB</span>Docs
          </button>
        </div>
        <div class="cdw-fw-docs-example-caption">Use solid, soft ou outline mantendo &iacute;cones circulares.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded cdw-fw-btn--iconic cdw-fw-accent-indigo"&gt;
  &lt;span class="cdw-fw-btn__icon"&gt;IN&lt;/span&gt;Insights
&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded cdw-fw-btn--iconic cdw-fw-accent-carbon"&gt;
  &lt;span class="cdw-fw-btn__icon"&gt;CL&lt;/span&gt;Clube
&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded cdw-fw-btn--iconic cdw-fw-accent-carbon"&gt;
  &lt;span class="cdw-fw-btn__icon"&gt;KB&lt;/span&gt;Docs
&lt;/button&gt;</code></pre>
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
          Recomendado: Forma indicada para produ&ccedil;&atilde;o. Evita que atualiza&ccedil;&otilde;es quebrem seu projeto.
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
          Aviso: Esta op&ccedil;&atilde;o carrega sempre a vers&atilde;o mais recente e pode quebrar seu projeto.
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
    <h2 class="cdw-fw-docs-section-title">Utilit&aacute;rios</h2>
    <p class="cdw-fw-docs-lead">
      Classes utilit&aacute;rias para resolver layout e ajustes r&aacute;pidos sem criar componentes.
    </p>
  </div>

  <div class="cdw-fw-docs-toc">
    <span class="cdw-fw-docs-toc-title">&Iacute;ndice desta p&aacute;gina</span>
    <a href="#util-espacamento">Espa&ccedil;amento</a>
    <a href="#util-display">Display</a>
    <a href="#util-flex">Flex</a>
    <a href="#util-gap">Gap</a>
    <a href="#util-tamanho">Tamanho</a>
    <a href="#util-texto">Texto</a>
  </div>

  <div class="cdw-fw-docs-subsection" id="util-espacamento" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Espa&ccedil;amento</h3>
    <p class="cdw-fw-docs-subdesc">
      Controle de margin e padding com escala fixa baseada em 4px.
      <span class="cdw-fw-docs-when">Quando usar: separa&ccedil;&atilde;o entre elementos e respiro interno.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-m-*</span>
      <span>cdw-fw-mt-*</span>
      <span>cdw-fw-mx-*</span>
      <span>cdw-fw-p-*</span>
      <span>cdw-fw-py-*</span>
    </div>

    <div class="cdw-fw-docs-card">
      <div class="cdw-fw-docs-card-title">Escala de espa&ccedil;amento</div>
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
        <div class="cdw-fw-docs-badge">B&aacute;sico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-p-4" style="background:#dfe9f6; border-radius:12px;">
          Caixa com padding 4
        </div>
        <div class="cdw-fw-mt-4" style="background:#f8dcc8; padding:10px 12px; border-radius:12px;">
          Margin top 4
        </div>
        <div class="cdw-fw-docs-example-caption">
          Use p-* para espa&ccedil;o interno e mt-* para separar itens verticalmente.
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
      Ajuste o comportamento de renderiza&ccedil;&atilde;o dos elementos.
      <span class="cdw-fw-docs-when">Quando usar: alinhar itens pequenos ou ocultar conte&uacute;do.</span>
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
        <div class="cdw-fw-docs-badge">B&aacute;sico</div>
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
          Alvo ocult&aacute;vel
        </div>
        <button class="cdw-fw-docs-toggle" type="button" data-cdw-fw-docs-toggle-hidden="cdw-fw-docs-hidden-target">
          Esconder
        </button>
        <div class="cdw-fw-docs-example-caption">
          O bot&atilde;o alterna a classe cdw-fw-hidden no alvo.
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div id="alvo" class="cdw-fw-hidden"&gt;Alvo ocult&aacute;vel&lt;/div&gt;
&lt;button&gt;Mostrar/Esconder&lt;/button&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="util-flex" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Flex</h3>
    <p class="cdw-fw-docs-subdesc">
      Controle de alinhamento, dire&ccedil;&atilde;o e quebra de linha com flexbox.
      <span class="cdw-fw-docs-when">Quando usar: barras de a&ccedil;&atilde;o, cards alinhados e grids flex&iacute;veis.</span>
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
        <div class="cdw-fw-docs-badge">B&aacute;sico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-items-center cdw-fw-justify-between" style="background:#eef2f7; padding:12px; border-radius:12px;">
          <div class="cdw-fw-docs-preview-box">Esquerda</div>
          <div class="cdw-fw-docs-preview-box cdw-fw-docs-preview-box--alt">Centro</div>
          <div class="cdw-fw-docs-preview-box cdw-fw-docs-preview-box--dark">Direita</div>
        </div>
        <div class="cdw-fw-docs-example-caption">Distribui o conte&uacute;do com espa&ccedil;o entre os itens.</div>
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
        <div class="cdw-fw-docs-example-caption">Empilha itens verticalmente com espa&ccedil;amento.</div>
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
        <div class="cdw-fw-docs-badge">Avan&ccedil;ado</div>
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
      Espa&ccedil;amento entre itens de flex ou grid.
      <span class="cdw-fw-docs-when">Quando usar: listas horizontais e colunas alinhadas.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-gap-*</span>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Comparando gap-2 e gap-6</div>
        <div class="cdw-fw-docs-badge">B&aacute;sico</div>
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
        <div class="cdw-fw-docs-example-caption">Use gaps maiores para blocos mais espa&ccedil;ados.</div>
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
      Ajuste largura e limite m&aacute;ximo de forma simples.
      <span class="cdw-fw-docs-when">Quando usar: formul&aacute;rios e containers responsivos.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-w-100</span>
      <span>cdw-fw-w-auto</span>
      <span>cdw-fw-maxw-100</span>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Largura 100% e auto</div>
        <div class="cdw-fw-docs-badge">B&aacute;sico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <input class="cdw-fw-w-100" type="text" placeholder="Input com w-100" style="padding:8px; border-radius:8px; border:1px solid #d1d7df;" />
        <div class="cdw-fw-w-auto" style="margin-top:10px; background:#dfe9f6; padding:10px; border-radius:10px;">Caixa w-auto</div>
        <div class="cdw-fw-docs-example-caption">w-100 expande, w-auto ajusta ao conte&uacute;do.</div>
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
        <div class="cdw-fw-docs-example-title">M&aacute;ximo de largura</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-maxw-100" style="background:#eef2f7; padding:10px; border-radius:10px;">
          Conte&uacute;do longo que n&atilde;o ultrapassa o container.
        </div>
        <div class="cdw-fw-docs-example-caption">maxw-100 evita estouro horizontal.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-maxw-100"&gt;Conte&uacute;do longo...&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="util-texto" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Texto</h3>
    <p class="cdw-fw-docs-subdesc">
      Utilit&aacute;rios tipogr&aacute;ficos para leitura, hierarquia e consist&ecirc;ncia visual.
      <span class="cdw-fw-docs-when">Quando usar: t&iacute;tulos, par&aacute;grafos, labels e dados.</span>
    </p>

    <h4 class="cdw-fw-docs-subtitle">Fontes</h4>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-font-base</span>
      <span>cdw-fw-font-display</span>
      <span>cdw-fw-font-mono</span>
      <span>cdw-fw-font-soft</span>
    </div>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Fam&iacute;lias tipogr&aacute;ficas</div>
        <div class="cdw-fw-docs-badge">Novo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-text-xl cdw-fw-font-display">Portal CDWeb</div>
        <div class="cdw-fw-text-base cdw-fw-font-base">Texto base para leitura do dia a dia.</div>
        <div class="cdw-fw-text-sm cdw-fw-font-soft">Leitura institucional com tom editorial.</div>
        <div class="cdw-fw-text-sm cdw-fw-font-mono">REF-8392-A / ID 0041</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-font-display"&gt;Portal CDWeb&lt;/div&gt;
&lt;div class="cdw-fw-font-base"&gt;Texto base para leitura&lt;/div&gt;
&lt;div class="cdw-fw-font-soft"&gt;Leitura institucional&lt;/div&gt;
&lt;div class="cdw-fw-font-mono"&gt;REF-8392-A&lt;/div&gt;</code></pre>
      </div>
    </div>

    <h4 class="cdw-fw-docs-subtitle">Tamanhos</h4>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-text-xs</span>
      <span>cdw-fw-text-sm</span>
      <span>cdw-fw-text-base</span>
      <span>cdw-fw-text-lg</span>
      <span>cdw-fw-text-xl</span>
      <span>cdw-fw-text-2xl</span>
    </div>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Escala de tamanhos</div>
        <div class="cdw-fw-docs-badge">Novo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-flex-col cdw-fw-gap-2">
          <div class="cdw-fw-text-xs">Texto xs para notas</div>
          <div class="cdw-fw-text-sm">Texto sm para labels</div>
          <div class="cdw-fw-text-base">Texto base para par&aacute;grafos</div>
          <div class="cdw-fw-text-lg">Texto lg para destaque leve</div>
          <div class="cdw-fw-text-xl">Texto xl para subt&iacute;tulos</div>
          <div class="cdw-fw-text-2xl">Texto 2xl para t&iacute;tulos</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-text-xs"&gt;Texto xs&lt;/div&gt;
&lt;div class="cdw-fw-text-sm"&gt;Texto sm&lt;/div&gt;
&lt;div class="cdw-fw-text-base"&gt;Texto base&lt;/div&gt;
&lt;div class="cdw-fw-text-lg"&gt;Texto lg&lt;/div&gt;
&lt;div class="cdw-fw-text-xl"&gt;Texto xl&lt;/div&gt;
&lt;div class="cdw-fw-text-2xl"&gt;Texto 2xl&lt;/div&gt;</code></pre>
      </div>
    </div>

    <h4 class="cdw-fw-docs-subtitle">Peso &amp; estilo</h4>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-text-light</span>
      <span>cdw-fw-text-regular</span>
      <span>cdw-fw-text-medium</span>
      <span>cdw-fw-text-semibold</span>
      <span>cdw-fw-text-bold</span>
      <span>cdw-fw-text-italic</span>
      <span>cdw-fw-text-uppercase</span>
      <span>cdw-fw-text-lowercase</span>
      <span>cdw-fw-text-capitalize</span>
    </div>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Peso e transforma&ccedil;&atilde;o</div>
        <div class="cdw-fw-docs-badge">Novo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-gap-2 cdw-fw-flex-wrap">
          <div class="cdw-fw-text-light">Light</div>
          <div class="cdw-fw-text-regular">Regular</div>
          <div class="cdw-fw-text-medium">Medium</div>
          <div class="cdw-fw-text-semibold">Semibold</div>
          <div class="cdw-fw-text-bold">Bold</div>
        </div>
        <div class="cdw-fw-flex cdw-fw-gap-2 cdw-fw-flex-wrap" style="margin-top:8px;">
          <div class="cdw-fw-text-italic">Texto it&aacute;lico</div>
          <div class="cdw-fw-text-uppercase">Uppercase label</div>
          <div class="cdw-fw-text-lowercase">lowercase tag</div>
          <div class="cdw-fw-text-capitalize">texto capitalizado</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-text-light"&gt;Light&lt;/div&gt;
&lt;div class="cdw-fw-text-semibold"&gt;Semibold&lt;/div&gt;
&lt;div class="cdw-fw-text-bold"&gt;Bold&lt;/div&gt;
&lt;div class="cdw-fw-text-italic"&gt;Texto italico&lt;/div&gt;
&lt;div class="cdw-fw-text-uppercase"&gt;Uppercase label&lt;/div&gt;</code></pre>
      </div>
    </div>

    <h4 class="cdw-fw-docs-subtitle">Espa&ccedil;amento</h4>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-leading-tight</span>
      <span>cdw-fw-leading-normal</span>
      <span>cdw-fw-leading-loose</span>
      <span>cdw-fw-tracking-tight</span>
      <span>cdw-fw-tracking-normal</span>
      <span>cdw-fw-tracking-wide</span>
    </div>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Line height e tracking</div>
        <div class="cdw-fw-docs-badge">Novo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-text-base cdw-fw-leading-tight">
          Linha tight para chamadas curtas e mensagens r&aacute;pidas.
        </div>
        <div class="cdw-fw-text-base cdw-fw-leading-loose" style="margin-top:8px;">
          Linha loose melhora a leitura em par&aacute;grafos longos e institucionais.
        </div>
        <div class="cdw-fw-text-sm cdw-fw-tracking-wide cdw-fw-text-uppercase" style="margin-top:10px;">
          Label com tracking wide
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;p class="cdw-fw-leading-tight"&gt;Linha tight...&lt;/p&gt;
&lt;p class="cdw-fw-leading-loose"&gt;Linha loose...&lt;/p&gt;
&lt;span class="cdw-fw-tracking-wide cdw-fw-text-uppercase"&gt;Label&lt;/span&gt;</code></pre>
      </div>
    </div>

    <h4 class="cdw-fw-docs-subtitle">Decora&ccedil;&atilde;o e realce</h4>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-text-underline-soft</span>
      <span>cdw-fw-text-underline-accent</span>
      <span>cdw-fw-text-muted</span>
      <span>cdw-fw-text-emphasis</span>
    </div>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Realces discretos</div>
        <div class="cdw-fw-docs-badge">Novo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-text-base cdw-fw-text-underline-soft">Underline soft para links contextuais.</div>
        <div class="cdw-fw-text-base cdw-fw-text-underline-accent" style="margin-top:6px;">Underline accent com cor do tema.</div>
        <div class="cdw-fw-text-base cdw-fw-text-muted" style="margin-top:6px;">Texto muted para informa&ccedil;&atilde;o secund&aacute;ria.</div>
        <div class="cdw-fw-text-base cdw-fw-text-emphasis" style="margin-top:6px;">Texto emphasis para pontos importantes.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-text-underline-soft"&gt;Underline soft&lt;/div&gt;
&lt;div class="cdw-fw-text-underline-accent"&gt;Underline accent&lt;/div&gt;
&lt;div class="cdw-fw-text-muted"&gt;Texto muted&lt;/div&gt;
&lt;div class="cdw-fw-text-emphasis"&gt;Texto emphasis&lt;/div&gt;</code></pre>
      </div>
    </div>

    <h4 class="cdw-fw-docs-subtitle">Alinhamento</h4>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-text-left</span>
      <span>cdw-fw-text-center</span>
      <span>cdw-fw-text-right</span>
    </div>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Alinhamento em tr&ecirc;s caixas</div>
        <div class="cdw-fw-docs-badge">B&aacute;sico</div>
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

    <h4 class="cdw-fw-docs-subtitle">Exemplos pr&aacute;ticos</h4>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Card com hierarquia tipogr&aacute;fica</div>
        <div class="cdw-fw-docs-badge">Uso</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div style="background:#f4f7fb; border-radius:14px; padding:16px; border:1px solid #d6dee8;">
          <div class="cdw-fw-text-xs cdw-fw-text-uppercase cdw-fw-tracking-wide cdw-fw-text-muted">Relat&oacute;rio mensal</div>
          <div class="cdw-fw-text-xl cdw-fw-text-semibold cdw-fw-font-display" style="margin-top:6px;">Performance operacional</div>
          <div class="cdw-fw-text-base cdw-fw-leading-loose" style="margin-top:8px;">
            Conte&uacute;do pensado para leitura longa com espa&ccedil;amento confort&aacute;vel.
          </div>
          <div class="cdw-fw-text-sm cdw-fw-text-underline-accent" style="margin-top:10px;">Ver detalhes</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-text-xs cdw-fw-text-uppercase cdw-fw-tracking-wide cdw-fw-text-muted"&gt;Relatorio mensal&lt;/div&gt;
&lt;div class="cdw-fw-text-xl cdw-fw-text-semibold cdw-fw-font-display"&gt;Performance operacional&lt;/div&gt;
&lt;div class="cdw-fw-text-base cdw-fw-leading-loose"&gt;Conteudo pensado para leitura longa.&lt;/div&gt;
&lt;div class="cdw-fw-text-sm cdw-fw-text-underline-accent"&gt;Ver detalhes&lt;/div&gt;</code></pre>
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
    <a href="#cores-monocromaticas">Monocrom&aacute;ticas</a>
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
      12 cores principais, todas diferentes e prontas para uso.
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
          <div class="cdw-fw-docs-color-swatch cdw-fw-docs-color-swatch--base cdw-fw-accent-carbon cdw-fw-bg-accent">Base</div>
          <div class="cdw-fw-docs-color-swatch cdw-fw-accent-carbon cdw-fw-bg-accent cdw-fw-soft">Soft</div>
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

  <div class="cdw-fw-docs-subsection" id="cores-monocromaticas" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Monocrom&aacute;ticas</h3>
    <p class="cdw-fw-docs-subdesc">
      8 tons neutros para hierarquia visual sem cores chamativas.
      <span class="cdw-fw-docs-when">Quando usar: layouts corporativos, dashboards e &aacute;reas administrativas.</span>
    </p>
    <div class="cdw-fw-docs-color-grid">
      <div class="cdw-fw-docs-color-card">
        <div class="cdw-fw-docs-color-name">carbon</div>
        <div class="cdw-fw-docs-color-swatches">
          <div class="cdw-fw-docs-color-swatch cdw-fw-docs-color-swatch--base cdw-fw-accent-carbon cdw-fw-bg-accent">Base</div>
          <div class="cdw-fw-docs-color-swatch cdw-fw-accent-carbon cdw-fw-bg-accent cdw-fw-soft">Soft</div>
        </div>
      </div>
      <div class="cdw-fw-docs-color-card">
        <div class="cdw-fw-docs-color-name">obsidian</div>
        <div class="cdw-fw-docs-color-swatches">
          <div class="cdw-fw-docs-color-swatch cdw-fw-docs-color-swatch--base cdw-fw-accent-obsidian cdw-fw-bg-accent">Base</div>
          <div class="cdw-fw-docs-color-swatch cdw-fw-accent-obsidian cdw-fw-bg-accent cdw-fw-soft">Soft</div>
        </div>
      </div>
      <div class="cdw-fw-docs-color-card">
        <div class="cdw-fw-docs-color-name">graphite-dark</div>
        <div class="cdw-fw-docs-color-swatches">
          <div class="cdw-fw-docs-color-swatch cdw-fw-docs-color-swatch--base cdw-fw-accent-graphite-dark cdw-fw-bg-accent">Base</div>
          <div class="cdw-fw-docs-color-swatch cdw-fw-accent-graphite-dark cdw-fw-bg-accent cdw-fw-soft">Soft</div>
        </div>
      </div>
      <div class="cdw-fw-docs-color-card">
        <div class="cdw-fw-docs-color-name">graphite</div>
        <div class="cdw-fw-docs-color-swatches">
          <div class="cdw-fw-docs-color-swatch cdw-fw-docs-color-swatch--base cdw-fw-accent-graphite cdw-fw-bg-accent">Base</div>
          <div class="cdw-fw-docs-color-swatch cdw-fw-accent-graphite cdw-fw-bg-accent cdw-fw-soft">Soft</div>
        </div>
      </div>
      <div class="cdw-fw-docs-color-card">
        <div class="cdw-fw-docs-color-name">steel</div>
        <div class="cdw-fw-docs-color-swatches">
          <div class="cdw-fw-docs-color-swatch cdw-fw-docs-color-swatch--base cdw-fw-accent-steel cdw-fw-bg-accent">Base</div>
          <div class="cdw-fw-docs-color-swatch cdw-fw-accent-steel cdw-fw-bg-accent cdw-fw-soft">Soft</div>
        </div>
      </div>
      <div class="cdw-fw-docs-color-card">
        <div class="cdw-fw-docs-color-name">slate</div>
        <div class="cdw-fw-docs-color-swatches">
          <div class="cdw-fw-docs-color-swatch cdw-fw-docs-color-swatch--base cdw-fw-accent-slate cdw-fw-bg-accent">Base</div>
          <div class="cdw-fw-docs-color-swatch cdw-fw-accent-slate cdw-fw-bg-accent cdw-fw-soft">Soft</div>
        </div>
      </div>
      <div class="cdw-fw-docs-color-card">
        <div class="cdw-fw-docs-color-name">ash</div>
        <div class="cdw-fw-docs-color-swatches">
          <div class="cdw-fw-docs-color-swatch cdw-fw-docs-color-swatch--base cdw-fw-docs-color-swatch--light cdw-fw-accent-ash cdw-fw-bg-accent">Base</div>
          <div class="cdw-fw-docs-color-swatch cdw-fw-accent-ash cdw-fw-bg-accent cdw-fw-soft">Soft</div>
        </div>
      </div>
      <div class="cdw-fw-docs-color-card">
        <div class="cdw-fw-docs-color-name">fog</div>
        <div class="cdw-fw-docs-color-swatches">
          <div class="cdw-fw-docs-color-swatch cdw-fw-docs-color-swatch--base cdw-fw-docs-color-swatch--light cdw-fw-accent-fog cdw-fw-bg-accent">Base</div>
          <div class="cdw-fw-docs-color-swatch cdw-fw-accent-fog cdw-fw-bg-accent cdw-fw-soft">Soft</div>
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
  badges: `<section id="badges" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Badges</h2>
    <p class="cdw-fw-docs-lead">
      Badges avan&ccedil;ados para status, novidade e destaque com identidade CDWeb.
    </p>
  </div>

  <div class="cdw-fw-docs-toc">
    <span class="cdw-fw-docs-toc-title">&Iacute;ndice desta p&aacute;gina</span>
    <a href="#badges-conceito">Conceito</a>
    <a href="#badges-tipos">Tipos</a>
    <a href="#badges-estilos">Estilos</a>
    <a href="#badges-exemplos">Exemplos visuais</a>
    <a href="#badges-uso">Exemplos de uso</a>
    <a href="#badges-modelos">Modelos adicionais</a>
  </div>

  <div class="cdw-fw-docs-subsection" id="badges-conceito" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Conceito</h3>
    <p class="cdw-fw-docs-subdesc">
      Badge &eacute; um marcador curto para status, novidade ou categoria. Pode ser inline,
      acoplado ou flutuante sem perder a eleg&acirc;ncia.
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-badge</span>
      <span>cdw-badge--inline</span>
      <span>cdw-badge--accent</span>
      <span>cdw-badge--corner</span>
      <span>cdw-badge--docked</span>
      <span>cdw-badge--floating</span>
      <span>cdw-badge--pos-tl</span>
      <span>cdw-badge--pos-tr</span>
      <span>cdw-badge--pos-side</span>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="badges-tipos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Tipos</h3>
    <p class="cdw-fw-docs-subdesc">
      Inline para textos, Accent para destaque, Corner/Flag para avisos e Docked/Floating para cards.
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Tipos de badge</div>
        <div class="cdw-fw-docs-badge">B&aacute;sico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-gap-2 cdw-fw-flex-wrap cdw-fw-items-center">
          <span class="cdw-badge cdw-badge--inline cdw-badge--ocean cdw-badge--solid cdw-badge--sm">Inline</span>
          <span class="cdw-badge cdw-badge--accent cdw-badge--sky cdw-badge--solid cdw-badge--sm">Accent</span>
          <span class="cdw-badge cdw-badge--corner cdw-badge--mint cdw-badge--solid cdw-badge--sm">Corner</span>
          <span class="cdw-badge cdw-badge--inline cdw-badge--graphite cdw-badge--outline cdw-badge--sm">Docked</span>
        </div>
        <div class="cdw-fw-mt-3" style="position:relative; max-width:360px;">
          <span class="cdw-badge cdw-badge--docked cdw-badge--rose cdw-badge--solid cdw-badge--sm cdw-badge--pos-tr" style="top:0; margin-top:-6px;">Beta</span>
          <span class="cdw-badge cdw-badge--floating cdw-badge--graphite cdw-badge--soft cdw-badge--sm cdw-badge--pos-tl cdw-badge--offset" style="top:0; margin-top:-6px;">Destaque</span>
          <div class="cdw-card cdw-card--flat cdw-card--ghost cdw-card--dense" style="padding-top:16px;">
            <div class="cdw-card__header">
              <div>
                <div class="cdw-card__title">Card corporativo</div>
                <div class="cdw-card__subtitle">Badge acoplado sem quebrar layout.</div>
              </div>
            </div>
            <div class="cdw-card__body">Conte&uacute;do resumido.</div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-flex cdw-fw-gap-2 cdw-fw-flex-wrap cdw-fw-items-center"&gt;
  &lt;span class="cdw-badge cdw-badge--inline cdw-badge--ocean cdw-badge--solid cdw-badge--sm"&gt;Inline&lt;/span&gt;
  &lt;span class="cdw-badge cdw-badge--accent cdw-badge--sky cdw-badge--solid cdw-badge--sm"&gt;Accent&lt;/span&gt;
  &lt;span class="cdw-badge cdw-badge--corner cdw-badge--mint cdw-badge--solid cdw-badge--sm"&gt;Corner&lt;/span&gt;
  &lt;span class="cdw-badge cdw-badge--inline cdw-badge--graphite cdw-badge--outline cdw-badge--sm"&gt;Docked&lt;/span&gt;
&lt;/div&gt;

&lt;div style="position:relative; max-width:360px;" class="cdw-fw-mt-3"&gt;
  &lt;span class="cdw-badge cdw-badge--docked cdw-badge--rose cdw-badge--solid cdw-badge--sm cdw-badge--pos-tr" style="top:0; margin-top:-6px;"&gt;Beta&lt;/span&gt;
  &lt;span class="cdw-badge cdw-badge--floating cdw-badge--graphite cdw-badge--soft cdw-badge--sm cdw-badge--pos-tl cdw-badge--offset" style="top:0; margin-top:-6px;"&gt;Destaque&lt;/span&gt;
  &lt;div class="cdw-card cdw-card--flat cdw-card--ghost cdw-card--dense" style="padding-top:16px;"&gt;
    &lt;div class="cdw-card__header"&gt;
      &lt;div&gt;
        &lt;div class="cdw-card__title"&gt;Card corporativo&lt;/div&gt;
        &lt;div class="cdw-card__subtitle"&gt;Badge acoplado sem quebrar layout.&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-card__body"&gt;Conte&amp;uacute;do resumido.&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="badges-estilos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Estilos</h3>
    <p class="cdw-fw-docs-subdesc">
      Solid e Glow para destaque, Soft e Flat para contexto, Outline para contraste limpo.
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Varia&ccedil;&otilde;es visuais</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-gap-2 cdw-fw-flex-wrap cdw-fw-items-center">
          <span class="cdw-badge cdw-badge--inline cdw-badge--ocean cdw-badge--solid cdw-badge--sm">Solid</span>
          <span class="cdw-badge cdw-badge--inline cdw-badge--sky cdw-badge--soft cdw-badge--sm">Soft</span>
          <span class="cdw-badge cdw-badge--inline cdw-badge--mint cdw-badge--outline cdw-badge--sm">Outline</span>
          <span class="cdw-badge cdw-badge--inline cdw-badge--amber cdw-badge--glow cdw-badge--sm">Glow</span>
          <span class="cdw-badge cdw-badge--inline cdw-badge--rose cdw-badge--flat cdw-badge--sm">Flat</span>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-flex cdw-fw-gap-2 cdw-fw-flex-wrap cdw-fw-items-center"&gt;
  &lt;span class="cdw-badge cdw-badge--inline cdw-badge--ocean cdw-badge--solid cdw-badge--sm"&gt;Solid&lt;/span&gt;
  &lt;span class="cdw-badge cdw-badge--inline cdw-badge--sky cdw-badge--soft cdw-badge--sm"&gt;Soft&lt;/span&gt;
  &lt;span class="cdw-badge cdw-badge--inline cdw-badge--mint cdw-badge--outline cdw-badge--sm"&gt;Outline&lt;/span&gt;
  &lt;span class="cdw-badge cdw-badge--inline cdw-badge--amber cdw-badge--glow cdw-badge--sm"&gt;Glow&lt;/span&gt;
  &lt;span class="cdw-badge cdw-badge--inline cdw-badge--rose cdw-badge--flat cdw-badge--sm"&gt;Flat&lt;/span&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="badges-exemplos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Exemplos visuais</h3>
    <p class="cdw-fw-docs-subdesc">
      Combina&ccedil;&otilde;es com &iacute;cone e contador em tamanhos compactos.
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Badge com &iacute;cone e contador</div>
        <div class="cdw-fw-docs-badge">Premium</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-gap-2 cdw-fw-flex-wrap cdw-fw-items-center">
          <span class="cdw-badge cdw-badge--inline cdw-badge--graphite cdw-badge--solid cdw-badge--md">
            <span class="cdw-badge-icon">?</span>
            Premium
            <span class="cdw-badge-count">12</span>
          </span>
          <span class="cdw-badge cdw-badge--accent cdw-badge--ghost cdw-badge--outline cdw-badge--md">
            <span class="cdw-badge-icon">?</span>
            Neutro
          </span>
          <span class="cdw-badge cdw-badge--corner cdw-badge--ocean cdw-badge--solid cdw-badge--md">Novo</span>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-flex cdw-fw-gap-2 cdw-fw-flex-wrap cdw-fw-items-center"&gt;
  &lt;span class="cdw-badge cdw-badge--inline cdw-badge--graphite cdw-badge--solid cdw-badge--md"&gt;
    &lt;span class="cdw-badge-icon"&gt;?&lt;/span&gt;
    Premium
    &lt;span class="cdw-badge-count"&gt;12&lt;/span&gt;
  &lt;/span&gt;
  &lt;span class="cdw-badge cdw-badge--accent cdw-badge--ghost cdw-badge--outline cdw-badge--md"&gt;
    &lt;span class="cdw-badge-icon"&gt;?&lt;/span&gt;
    Neutro
  &lt;/span&gt;
  &lt;span class="cdw-badge cdw-badge--corner cdw-badge--ocean cdw-badge--solid cdw-badge--md"&gt;Novo&lt;/span&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="badges-uso" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Exemplos de uso</h3>
    <p class="cdw-fw-docs-subdesc">
      Badges antes de t&iacute;tulos e acoplados a cards.
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Badges em contextos reais</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-gap-2 cdw-fw-items-center">
          <span class="cdw-badge cdw-badge--inline cdw-badge--ocean cdw-badge--solid cdw-badge--sm">Novo</span>
          <span>Relat&oacute;rio Financeiro</span>
        </div>
        <div class="cdw-fw-flex cdw-fw-gap-2 cdw-fw-flex-wrap cdw-fw-items-center" style="margin-top:10px;">
          <span class="cdw-badge cdw-badge--inline cdw-badge--ocean cdw-badge--soft cdw-badge--sm">Financeiro</span>
          <span class="cdw-badge cdw-badge--inline cdw-badge--mint cdw-badge--soft cdw-badge--sm">Operacional</span>
          <span class="cdw-badge cdw-badge--inline cdw-badge--amber cdw-badge--soft cdw-badge--sm">Urgente</span>
        </div>
        <div class="cdw-fw-mt-3" style="position:relative; max-width:360px;">
          <span class="cdw-badge cdw-badge--docked cdw-badge--sky cdw-badge--solid cdw-badge--sm cdw-badge--pos-tl" style="top:0; margin-top:-6px;">Novo</span>
          <div class="cdw-card cdw-card--flat cdw-card--ghost cdw-card--dense" style="padding-top:16px;">
            <div class="cdw-card__header">
              <div>
                <div class="cdw-card__title">Painel Executivo</div>
                <div class="cdw-card__subtitle">Badge destacado para conte&uacute;do priorit&aacute;rio.</div>
              </div>
            </div>
            <div class="cdw-card__body">Resumo do painel corporativo.</div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-flex cdw-fw-gap-2 cdw-fw-items-center"&gt;
  &lt;span class="cdw-badge cdw-badge--inline cdw-badge--ocean cdw-badge--solid cdw-badge--sm"&gt;Novo&lt;/span&gt;
  &lt;span&gt;Relat&amp;oacute;rio Financeiro&lt;/span&gt;
&lt;/div&gt;

&lt;div class="cdw-fw-flex cdw-fw-gap-2 cdw-fw-flex-wrap cdw-fw-items-center" style="margin-top:10px;"&gt;
  &lt;span class="cdw-badge cdw-badge--inline cdw-badge--ocean cdw-badge--soft cdw-badge--sm"&gt;Financeiro&lt;/span&gt;
  &lt;span class="cdw-badge cdw-badge--inline cdw-badge--mint cdw-badge--soft cdw-badge--sm"&gt;Operacional&lt;/span&gt;
  &lt;span class="cdw-badge cdw-badge--inline cdw-badge--amber cdw-badge--soft cdw-badge--sm"&gt;Urgente&lt;/span&gt;
&lt;/div&gt;

&lt;div style="position:relative; max-width:360px;" class="cdw-fw-mt-3"&gt;
  &lt;span class="cdw-badge cdw-badge--docked cdw-badge--sky cdw-badge--solid cdw-badge--sm cdw-badge--pos-tl" style="top:0; margin-top:-6px;"&gt;Novo&lt;/span&gt;
  &lt;div class="cdw-card cdw-card--flat cdw-card--ghost cdw-card--dense" style="padding-top:16px;"&gt;
    &lt;div class="cdw-card__header"&gt;
      &lt;div&gt;
        &lt;div class="cdw-card__title"&gt;Painel Executivo&lt;/div&gt;
        &lt;div class="cdw-card__subtitle"&gt;Badge destacado para conte&amp;uacute;do priorit&amp;aacute;rio.&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-card__body"&gt;Resumo do painel corporativo.&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>
</section>

  <div class="cdw-fw-docs-subsection" id="badges-modelos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Modelos adicionais</h3>
    <p class="cdw-fw-docs-subdesc">
      Combina&ccedil;&otilde;es extras com formas e posicionamentos diferentes.
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Cinco modelos novos</div>
        <div class="cdw-fw-docs-badge">Novo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-row cdw-fw-gap-3">
          <div class="cdw-fw-col-12 cdw-fw-col-md-6 cdw-fw-col-lg-4">
            <div style="font-size:12px; font-weight:600; margin-bottom:8px;">Quina esquerda</div>
            <div style="position:relative;">
              <span class="cdw-badge cdw-badge--docked cdw-badge--ocean cdw-badge--solid cdw-badge--sm cdw-badge--pos-tl" style="top:0; margin-top:-6px;">Novo</span>
              <div class="cdw-card cdw-card--flat cdw-card--ghost cdw-card--dense" style="padding-top:16px;">
                <div class="cdw-card__header">
                  <div>
                    <div class="cdw-card__title">Resumo mensal</div>
                    <div class="cdw-card__subtitle">Badge preso &agrave; quina.</div>
                  </div>
                </div>
                <div class="cdw-card__body">Resumo financeiro do m&ecirc;s.</div>
              </div>
            </div>
          </div>
          <div class="cdw-fw-col-12 cdw-fw-col-md-6 cdw-fw-col-lg-4">
            <div style="font-size:12px; font-weight:600; margin-bottom:8px;">Quina direita</div>
            <div style="position:relative;">
              <span class="cdw-badge cdw-badge--docked cdw-badge--amber cdw-badge--solid cdw-badge--sm cdw-badge--pos-tr" style="top:0; margin-top:-6px;">Beta</span>
              <div class="cdw-card cdw-card--flat cdw-card--ghost cdw-card--dense" style="padding-top:16px;">
                <div class="cdw-card__header">
                  <div>
                    <div class="cdw-card__title">Relat&oacute;rio executivo</div>
                    <div class="cdw-card__subtitle">Destaque em canto superior.</div>
                  </div>
                </div>
                <div class="cdw-card__body">Indicadores consolidados.</div>
              </div>
            </div>
          </div>
          <div class="cdw-fw-col-12 cdw-fw-col-md-6 cdw-fw-col-lg-4">
            <div style="font-size:12px; font-weight:600; margin-bottom:8px;">Lateral discreta</div>
            <div style="position:relative;">
              <span class="cdw-badge cdw-badge--docked cdw-badge--graphite cdw-badge--solid cdw-badge--sm cdw-badge--pos-side">Live</span>
              <div class="cdw-card cdw-card--flat cdw-card--ghost cdw-card--dense">
                <div class="cdw-card__header">
                  <div>
                    <div class="cdw-card__title">Painel de controle</div>
                    <div class="cdw-card__subtitle">Badge colado &agrave; borda.</div>
                  </div>
                </div>
                <div class="cdw-card__body">Monitora servi&ccedil;os ativos.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="cdw-fw-row cdw-fw-gap-3" style="margin-top:12px;">
          <div class="cdw-fw-col-12 cdw-fw-col-md-6">
            <div style="font-size:12px; font-weight:600; margin-bottom:8px;">Flutuante com contador</div>
            <div style="position:relative;">
              <span class="cdw-badge cdw-badge--floating cdw-badge--rose cdw-badge--glow cdw-badge--sm cdw-badge--pos-tr cdw-badge--offset" style="top:0; margin-top:-6px;">7</span>
              <div class="cdw-card cdw-card--flat cdw-card--ghost cdw-card--dense" style="padding-top:16px;">
                <div class="cdw-card__header">
                  <div>
                    <div class="cdw-card__title">Pend&ecirc;ncias</div>
                    <div class="cdw-card__subtitle">Indicador visual imediato.</div>
                  </div>
                </div>
                <div class="cdw-card__body">Itens aguardando revis&atilde;o.</div>
              </div>
            </div>
          </div>
          <div class="cdw-fw-col-12 cdw-fw-col-md-6">
            <div style="font-size:12px; font-weight:600; margin-bottom:8px;">Selo angular</div>
            <div style="position:relative;">
              <span class="cdw-badge cdw-badge--docked cdw-badge--accent cdw-badge--mint cdw-badge--solid cdw-badge--sm cdw-badge--pos-tl" style="top:0; margin-top:-6px;">Destaque</span>
              <div class="cdw-card cdw-card--flat cdw-card--ghost cdw-card--dense" style="padding-top:16px;">
                <div class="cdw-card__header">
                  <div>
                    <div class="cdw-card__title">Plano Enterprise</div>
                    <div class="cdw-card__subtitle">Apar&ecirc;ncia premium e angular.</div>
                  </div>
                </div>
                <div class="cdw-card__body">Recursos avan&ccedil;ados.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-row cdw-fw-gap-3"&gt;
  &lt;div class="cdw-fw-col-12 cdw-fw-col-md-6 cdw-fw-col-lg-4"&gt;
    &lt;div style="font-size:12px; font-weight:600; margin-bottom:8px;"&gt;Quina esquerda&lt;/div&gt;
    &lt;div style="position:relative;"&gt;
      &lt;span class="cdw-badge cdw-badge--docked cdw-badge--ocean cdw-badge--solid cdw-badge--sm cdw-badge--pos-tl" style="top:0; margin-top:-6px;"&gt;Novo&lt;/span&gt;
      &lt;div class="cdw-card cdw-card--flat cdw-card--ghost cdw-card--dense" style="padding-top:16px;"&gt;
        &lt;div class="cdw-card__header"&gt;
          &lt;div&gt;
            &lt;div class="cdw-card__title"&gt;Resumo mensal&lt;/div&gt;
            &lt;div class="cdw-card__subtitle"&gt;Badge preso &amp;agrave; quina.&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="cdw-card__body"&gt;Resumo financeiro do m&amp;ecirc;s.&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-fw-col-12 cdw-fw-col-md-6 cdw-fw-col-lg-4"&gt;
    &lt;div style="font-size:12px; font-weight:600; margin-bottom:8px;"&gt;Quina direita&lt;/div&gt;
    &lt;div style="position:relative;"&gt;
      &lt;span class="cdw-badge cdw-badge--docked cdw-badge--amber cdw-badge--solid cdw-badge--sm cdw-badge--pos-tr" style="top:0; margin-top:-6px;"&gt;Beta&lt;/span&gt;
      &lt;div class="cdw-card cdw-card--flat cdw-card--ghost cdw-card--dense" style="padding-top:16px;"&gt;
        &lt;div class="cdw-card__header"&gt;
          &lt;div&gt;
            &lt;div class="cdw-card__title"&gt;Relat&amp;oacute;rio executivo&lt;/div&gt;
            &lt;div class="cdw-card__subtitle"&gt;Destaque em canto superior.&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="cdw-card__body"&gt;Indicadores consolidados.&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-fw-col-12 cdw-fw-col-md-6 cdw-fw-col-lg-4"&gt;
    &lt;div style="font-size:12px; font-weight:600; margin-bottom:8px;"&gt;Lateral discreta&lt;/div&gt;
    &lt;div style="position:relative;"&gt;
      &lt;span class="cdw-badge cdw-badge--docked cdw-badge--graphite cdw-badge--solid cdw-badge--sm cdw-badge--pos-side"&gt;Live&lt;/span&gt;
      &lt;div class="cdw-card cdw-card--flat cdw-card--ghost cdw-card--dense"&gt;
        &lt;div class="cdw-card__header"&gt;
          &lt;div&gt;
            &lt;div class="cdw-card__title"&gt;Painel de controle&lt;/div&gt;
            &lt;div class="cdw-card__subtitle"&gt;Badge colado &amp;agrave; borda.&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="cdw-card__body"&gt;Monitora servi&amp;ccedil;os ativos.&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-fw-row cdw-fw-gap-3" style="margin-top:12px;"&gt;
  &lt;div class="cdw-fw-col-12 cdw-fw-col-md-6"&gt;
    &lt;div style="font-size:12px; font-weight:600; margin-bottom:8px;"&gt;Flutuante com contador&lt;/div&gt;
    &lt;div style="position:relative;"&gt;
      &lt;span class="cdw-badge cdw-badge--floating cdw-badge--rose cdw-badge--glow cdw-badge--sm cdw-badge--pos-tr cdw-badge--offset" style="top:0; margin-top:-6px;"&gt;7&lt;/span&gt;
      &lt;div class="cdw-card cdw-card--flat cdw-card--ghost cdw-card--dense" style="padding-top:16px;"&gt;
        &lt;div class="cdw-card__header"&gt;
          &lt;div&gt;
            &lt;div class="cdw-card__title"&gt;Pend&amp;ecirc;ncias&lt;/div&gt;
            &lt;div class="cdw-card__subtitle"&gt;Indicador visual imediato.&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="cdw-card__body"&gt;Itens aguardando revis&amp;atilde;o.&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-fw-col-12 cdw-fw-col-md-6"&gt;
    &lt;div style="font-size:12px; font-weight:600; margin-bottom:8px;"&gt;Selo angular&lt;/div&gt;
    &lt;div style="position:relative;"&gt;
      &lt;span class="cdw-badge cdw-badge--docked cdw-badge--accent cdw-badge--mint cdw-badge--solid cdw-badge--sm cdw-badge--pos-tl" style="top:0; margin-top:-6px;"&gt;Destaque&lt;/span&gt;
      &lt;div class="cdw-card cdw-card--flat cdw-card--ghost cdw-card--dense" style="padding-top:16px;"&gt;
        &lt;div class="cdw-card__header"&gt;
          &lt;div&gt;
            &lt;div class="cdw-card__title"&gt;Plano Enterprise&lt;/div&gt;
            &lt;div class="cdw-card__subtitle"&gt;Apar&amp;ecirc;ncia premium e angular.&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="cdw-card__body"&gt;Recursos avan&amp;ccedil;ados.&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>
</section>

`,
  cards: `<section id="cards" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Cards</h2>
    <p class="cdw-fw-docs-lead">
      Containers premium para pain&eacute;is, resumos e m&oacute;dulos com identidade CDWeb.
    </p>
  </div>

  <div class="cdw-fw-docs-toc">
    <span class="cdw-fw-docs-toc-title">&Iacute;ndice desta p&aacute;gina</span>
    <a href="#cards-conceito">Conceito</a>
    <a href="#cards-tipos">Tipos</a>
    <a href="#cards-estrutura">Estrutura</a>
    <a href="#cards-exemplos">Exemplos visuais</a>
    <a href="#cards-modelos">Modelos adicionais</a>
    <a href="#cards-uso">Exemplos de uso</a>
  </div>

  <div class="cdw-fw-docs-subsection" id="cards-conceito" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Conceito</h3>
    <p class="cdw-fw-docs-subdesc">
      Card CDWeb &eacute; um container estruturado para agrupar dados com
      personalidade visual. Ele &eacute; mais firme que caixas gen&eacute;ricas e funciona
      bem em dashboards e m&oacute;dulos.
    </p>
  </div>

  <div class="cdw-fw-docs-subsection" id="cards-tipos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Tipos</h3>
    <p class="cdw-fw-docs-subdesc">
      Flat para base, Accent para destaque, Docked para status e Panel para ambientes internos.
    </p>
    <div class="cdw-fw-docs-card-grid cdw-fw-docs-card-grid--models">
      <div class="cdw-card cdw-card--flat cdw-card--ocean">
        <div class="cdw-card__header">
          <div>
            <div class="cdw-card__title">Flat</div>
            <div class="cdw-card__subtitle">Base s&oacute;lida</div>
          </div>
          <span class="cdw-badge cdw-badge--inline cdw-badge--ocean cdw-badge--soft cdw-badge--sm">Novo</span>
        </div>
        <div class="cdw-card__body">Foco em leitura e espa&ccedil;o.</div>
      </div>
      <div class="cdw-card cdw-card--accent cdw-card--sky">
        <div class="cdw-card__header">
          <div>
            <div class="cdw-card__title">Accent</div>
            <div class="cdw-card__subtitle">Faixa lateral</div>
          </div>
        </div>
        <div class="cdw-card__body">Destaque lateral sem sombra cl&aacute;ssica.</div>
      </div>
      <div class="cdw-card cdw-card--docked cdw-card--mint">
        <div class="cdw-card__header">
          <div>
            <div class="cdw-card__title">Docked</div>
            <div class="cdw-card__subtitle">Barra superior</div>
          </div>
          <span class="cdw-badge cdw-badge--inline cdw-badge--mint cdw-badge--solid cdw-badge--sm">OK</span>
        </div>
        <div class="cdw-card__body">Ideal para status em pain&eacute;is.</div>
      </div>
      <div class="cdw-card cdw-card--panel cdw-card--graphite">
        <div class="cdw-card__header">
          <div>
            <div class="cdw-card__title">Panel</div>
            <div class="cdw-card__subtitle">Apar&ecirc;ncia t&eacute;cnica</div>
          </div>
        </div>
        <div class="cdw-card__body">Fundo fechado para ambientes internos.</div>
      </div>
    </div>
    <div class="cdw-fw-docs-codeblock" style="margin-top:16px;">
      <div class="cdw-fw-docs-code-head">
        <div class="cdw-fw-docs-code-title">HTML</div>
        <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
      </div>
      <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-card cdw-card--flat cdw-card--ocean"&gt;
  &lt;div class="cdw-card__header"&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__title"&gt;Flat&lt;/div&gt;
      &lt;div class="cdw-card__subtitle"&gt;Base s&oacute;lida&lt;/div&gt;
    &lt;/div&gt;
    &lt;span class="cdw-badge cdw-badge--inline cdw-badge--ocean cdw-badge--soft cdw-badge--sm"&gt;Novo&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__body"&gt;Foco em leitura e espa&ccedil;o.&lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-card cdw-card--accent cdw-card--sky"&gt;
  &lt;div class="cdw-card__header"&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__title"&gt;Accent&lt;/div&gt;
      &lt;div class="cdw-card__subtitle"&gt;Faixa lateral&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__body"&gt;Destaque lateral sem sombra cl&aacute;ssica.&lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-card cdw-card--docked cdw-card--mint"&gt;
  &lt;div class="cdw-card__header"&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__title"&gt;Docked&lt;/div&gt;
      &lt;div class="cdw-card__subtitle"&gt;Barra superior&lt;/div&gt;
    &lt;/div&gt;
    &lt;span class="cdw-badge cdw-badge--inline cdw-badge--mint cdw-badge--solid cdw-badge--sm"&gt;OK&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__body"&gt;Ideal para status em pain&eacute;is.&lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-card cdw-card--panel cdw-card--graphite"&gt;
  &lt;div class="cdw-card__header"&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__title"&gt;Panel&lt;/div&gt;
      &lt;div class="cdw-card__subtitle"&gt;Apar&ecirc;ncia t&eacute;cnica&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__body"&gt;Fundo fechado para ambientes internos.&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="cards-estrutura" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Estrutura</h3>
    <p class="cdw-fw-docs-subdesc">
      Header, Body e Footer com slots de badge e a&ccedil;&atilde;o.
    </p>
    <div class="cdw-card cdw-card--flat cdw-card--ghost cdw-card--dense">
      <div class="cdw-card__header">
        <div>
          <div class="cdw-card__title">Cabe&ccedil;alho</div>
          <div class="cdw-card__subtitle">Subt&iacute;tulo</div>
        </div>
        <span class="cdw-badge cdw-badge--inline cdw-badge--ghost cdw-badge--outline cdw-badge--sm">Badge</span>
      </div>
      <div class="cdw-card__body">
        Corpo com texto e conte&uacute;do principal.
      </div>
      <div class="cdw-card__footer">
        <span class="cdw-card__meta">Atualizado agora</span>
        <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-accent-ocean">A&ccedil;&atilde;o</button>
      </div>
    </div>
    <div class="cdw-fw-docs-codeblock" style="margin-top:16px;">
      <div class="cdw-fw-docs-code-head">
        <div class="cdw-fw-docs-code-title">HTML</div>
        <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
      </div>
      <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-card cdw-card--flat cdw-card--ghost cdw-card--dense"&gt;
  &lt;div class="cdw-card__header"&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__title"&gt;Cabe&amp;ccedil;alho&lt;/div&gt;
      &lt;div class="cdw-card__subtitle"&gt;Subt&amp;iacute;tulo&lt;/div&gt;
    &lt;/div&gt;
    &lt;span class="cdw-badge cdw-badge--inline cdw-badge--ghost cdw-badge--outline cdw-badge--sm"&gt;Badge&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__body"&gt;Corpo com texto e conte&amp;uacute;do principal.&lt;/div&gt;
  &lt;div class="cdw-card__footer"&gt;
    &lt;span class="cdw-card__meta"&gt;Atualizado agora&lt;/span&gt;
    &lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-accent-ocean"&gt;A&amp;ccedil;&amp;atilde;o&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="cards-exemplos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Exemplos visuais</h3>
    <p class="cdw-fw-docs-subdesc">
      Exemplos com destaque e status.
    </p>
    <div class="cdw-fw-docs-card-grid">
      <div class="cdw-card cdw-card--accent cdw-card--amber">
        <div class="cdw-card__header">
          <div>
            <div class="cdw-card__title">Resumo financeiro</div>
            <div class="cdw-card__subtitle">M&ecirc;s atual</div>
          </div>
          <span class="cdw-badge cdw-badge--inline cdw-badge--amber cdw-badge--solid cdw-badge--sm">Plus</span>
        </div>
        <div class="cdw-card__body">
          Receita 18% acima do esperado.
        </div>
      </div>
      <div class="cdw-card cdw-card--docked cdw-card--rose">
        <div class="cdw-card__header">
          <div>
            <div class="cdw-card__title">Alertas</div>
            <div class="cdw-card__subtitle">Prioridade alta</div>
          </div>
          <span class="cdw-badge cdw-badge--inline cdw-badge--rose cdw-badge--solid cdw-badge--sm">3</span>
        </div>
        <div class="cdw-card__body">Tarefas pendentes para revisar.</div>
      </div>
    </div>
    <div class="cdw-fw-docs-codeblock" style="margin-top:16px;">
      <div class="cdw-fw-docs-code-head">
        <div class="cdw-fw-docs-code-title">HTML</div>
        <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
      </div>
      <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-card cdw-card--accent cdw-card--amber"&gt;
  &lt;div class="cdw-card__header"&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__title"&gt;Resumo financeiro&lt;/div&gt;
      &lt;div class="cdw-card__subtitle"&gt;M&amp;ecirc;s atual&lt;/div&gt;
    &lt;/div&gt;
    &lt;span class="cdw-badge cdw-badge--inline cdw-badge--amber cdw-badge--solid cdw-badge--sm"&gt;Plus&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__body"&gt;Receita 18% acima do esperado.&lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-card cdw-card--docked cdw-card--rose"&gt;
  &lt;div class="cdw-card__header"&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__title"&gt;Alertas&lt;/div&gt;
      &lt;div class="cdw-card__subtitle"&gt;Prioridade alta&lt;/div&gt;
    &lt;/div&gt;
    &lt;span class="cdw-badge cdw-badge--inline cdw-badge--rose cdw-badge--solid cdw-badge--sm"&gt;3&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__body"&gt;Tarefas pendentes para revisar.&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="cards-modelos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Modelos adicionais</h3>
    <p class="cdw-fw-docs-subdesc">
      Combina&ccedil;&otilde;es com midia, status e hierarquia visual distinta.
    </p>
    <div class="cdw-fw-docs-card-grid cdw-fw-docs-card-grid--models">
      <div class="cdw-card cdw-card--flat cdw-card--ocean">
        <div class="cdw-card__media "></div>
        <div class="cdw-card__header cdw-card__row">
          <div class="cdw-card__avatar">KC</div>
          <div>
            <div class="cdw-card__title">Karina Costa</div>
            <div class="cdw-card__subtitle">Diretoria criativa</div>
          </div>
        </div>
        <div class="cdw-card__body">
          Atua em produtos digitais e opera&ccedil;&otilde;es globais.
        </div>
        <div class="cdw-card__footer cdw-card__stats">
          <span>22 conex&otilde;es</span>
          <span>14 projetos</span>
        </div>
      </div>

      <div class="cdw-card cdw-card--flat cdw-card--sky">
        <div class="cdw-card__media "></div>
        <div class="cdw-card__header cdw-card__row">
          <div class="cdw-card__avatar ">ML</div>
          <div>
            <div class="cdw-card__title">Marina Lima</div>
            <div class="cdw-card__subtitle">Produto digital</div>
          </div>
        </div>
        <div class="cdw-card__body">
          Lidera squads de entrega e experi&ecirc;ncia.
        </div>
        <div class="cdw-card__footer cdw-card__stats">
          <span>18 conex&otilde;es</span>
          <span>9 projetos</span>
        </div>
      </div>

      <div class="cdw-card cdw-card--flat cdw-card--mint">
        <div class="cdw-card__media "></div>
        <div class="cdw-card__header cdw-card__row">
          <div class="cdw-card__avatar ">BR</div>
          <div>
            <div class="cdw-card__title">Bruno Rocha</div>
            <div class="cdw-card__subtitle">Opera&ccedil;&otilde;es</div>
          </div>
        </div>
        <div class="cdw-card__body">
          Coordena integra&ccedil;&otilde;es e processos internos.
        </div>
        <div class="cdw-card__footer cdw-card__stats">
          <span>26 conex&otilde;es</span>
          <span>11 projetos</span>
        </div>
      </div>
    </div>
    <div class="cdw-fw-docs-codeblock" style="margin-top:16px;">
      <div class="cdw-fw-docs-code-head">
        <div class="cdw-fw-docs-code-title">HTML</div>
        <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
      </div>
      <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-card cdw-card--flat cdw-card--ocean"&gt;
  &lt;div class="cdw-card__media "&gt;&lt;/div&gt;
  &lt;div class="cdw-card__header cdw-card__row"&gt;
    &lt;div class="cdw-card__avatar"&gt;KC&lt;/div&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__title"&gt;Karina Costa&lt;/div&gt;
      &lt;div class="cdw-card__subtitle"&gt;Diretoria criativa&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__body"&gt;
    Atua em produtos digitais e opera&ccedil;&otilde;es globais.
  &lt;/div&gt;
  &lt;div class="cdw-card__footer cdw-card__stats"&gt;
    &lt;span&gt;22 conex&otilde;es&lt;/span&gt;
    &lt;span&gt;14 projetos&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-card cdw-card--flat cdw-card--sky"&gt;
  &lt;div class="cdw-card__media "&gt;&lt;/div&gt;
  &lt;div class="cdw-card__header cdw-card__row"&gt;
    &lt;div class="cdw-card__avatar "&gt;ML&lt;/div&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__title"&gt;Marina Lima&lt;/div&gt;
      &lt;div class="cdw-card__subtitle"&gt;Produto digital&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__body"&gt;
    Lidera squads de entrega e experi&ecirc;ncia.
  &lt;/div&gt;
  &lt;div class="cdw-card__footer cdw-card__stats"&gt;
    &lt;span&gt;18 conex&otilde;es&lt;/span&gt;
    &lt;span&gt;9 projetos&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-card cdw-card--flat cdw-card--mint"&gt;
  &lt;div class="cdw-card__media "&gt;&lt;/div&gt;
  &lt;div class="cdw-card__header cdw-card__row"&gt;
    &lt;div class="cdw-card__avatar "&gt;BR&lt;/div&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__title"&gt;Bruno Rocha&lt;/div&gt;
      &lt;div class="cdw-card__subtitle"&gt;Opera&ccedil;&otilde;es&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__body"&gt;
    Coordena integra&ccedil;&otilde;es e processos internos.
  &lt;/div&gt;
  &lt;div class="cdw-card__footer cdw-card__stats"&gt;
    &lt;span&gt;26 conex&otilde;es&lt;/span&gt;
    &lt;span&gt;11 projetos&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="cdw-fw-docs-card-grid cdw-fw-docs-card-grid--models" style="margin-top:16px;">
      <div class="cdw-card cdw-card--flat cdw-card--amber">
        <div class="cdw-card__header cdw-card__row">
          <div class="cdw-card__avatar ">RN</div>
          <div>
            <div class="cdw-card__title">Rafael Nunes</div>
            <div class="cdw-card__subtitle">h&aacute; 3h</div>
          </div>
          <span class="cdw-badge cdw-badge--inline cdw-badge--amber cdw-badge--outline cdw-badge--sm">Atual</span>
        </div>
        <div class="cdw-card__media "></div>
        <div class="cdw-card__footer cdw-card__actions">
          <span>5 coment&aacute;rios</span>
          <span>28 curtidas</span>
        </div>
      </div>

      <div class="cdw-card cdw-card--flat cdw-card--rose">
        <div class="cdw-card__header cdw-card__row">
          <div class="cdw-card__avatar ">LN</div>
          <div>
            <div class="cdw-card__title">Larissa Nogueira</div>
            <div class="cdw-card__subtitle">h&aacute; 1h</div>
          </div>
          <span class="cdw-badge cdw-badge--inline cdw-badge--rose cdw-badge--outline cdw-badge--sm">Novo</span>
        </div>
        <div class="cdw-card__media "></div>
        <div class="cdw-card__footer cdw-card__actions">
          <span>2 coment&aacute;rios</span>
          <span>11 curtidas</span>
        </div>
      </div>

      <div class="cdw-card cdw-card--flat cdw-card--graphite">
        <div class="cdw-card__header cdw-card__row">
          <div class="cdw-card__avatar ">JF</div>
          <div>
            <div class="cdw-card__title">Jo&atilde;o Faria</div>
            <div class="cdw-card__subtitle">h&aacute; 20m</div>
          </div>
          <span class="cdw-badge cdw-badge--inline cdw-badge--graphite cdw-badge--outline cdw-badge--sm">Ativo</span>
        </div>
        <div class="cdw-card__media "></div>
        <div class="cdw-card__footer cdw-card__actions">
          <span>8 coment&aacute;rios</span>
          <span>42 curtidas</span>
        </div>
      </div>
    </div>
    <div class="cdw-fw-docs-codeblock" style="margin-top:16px;">
      <div class="cdw-fw-docs-code-head">
        <div class="cdw-fw-docs-code-title">HTML</div>
        <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
      </div>
      <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-card cdw-card--flat cdw-card--amber"&gt;
  &lt;div class="cdw-card__header cdw-card__row"&gt;
    &lt;div class="cdw-card__avatar "&gt;RN&lt;/div&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__title"&gt;Rafael Nunes&lt;/div&gt;
      &lt;div class="cdw-card__subtitle"&gt;h&aacute; 3h&lt;/div&gt;
    &lt;/div&gt;
    &lt;span class="cdw-badge cdw-badge--inline cdw-badge--amber cdw-badge--outline cdw-badge--sm"&gt;Atual&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__media "&gt;&lt;/div&gt;
  &lt;div class="cdw-card__footer cdw-card__actions"&gt;
    &lt;span&gt;5 coment&aacute;rios&lt;/span&gt;
    &lt;span&gt;28 curtidas&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-card cdw-card--flat cdw-card--rose"&gt;
  &lt;div class="cdw-card__header cdw-card__row"&gt;
    &lt;div class="cdw-card__avatar "&gt;LN&lt;/div&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__title"&gt;Larissa Nogueira&lt;/div&gt;
      &lt;div class="cdw-card__subtitle"&gt;h&aacute; 1h&lt;/div&gt;
    &lt;/div&gt;
    &lt;span class="cdw-badge cdw-badge--inline cdw-badge--rose cdw-badge--outline cdw-badge--sm"&gt;Novo&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__media "&gt;&lt;/div&gt;
  &lt;div class="cdw-card__footer cdw-card__actions"&gt;
    &lt;span&gt;2 coment&aacute;rios&lt;/span&gt;
    &lt;span&gt;11 curtidas&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-card cdw-card--flat cdw-card--graphite"&gt;
  &lt;div class="cdw-card__header cdw-card__row"&gt;
    &lt;div class="cdw-card__avatar "&gt;JF&lt;/div&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__title"&gt;Jo&atilde;o Faria&lt;/div&gt;
      &lt;div class="cdw-card__subtitle"&gt;h&aacute; 20m&lt;/div&gt;
    &lt;/div&gt;
    &lt;span class="cdw-badge cdw-badge--inline cdw-badge--graphite cdw-badge--outline cdw-badge--sm"&gt;Ativo&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__media "&gt;&lt;/div&gt;
  &lt;div class="cdw-card__footer cdw-card__actions"&gt;
    &lt;span&gt;8 coment&aacute;rios&lt;/span&gt;
    &lt;span&gt;42 curtidas&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="cdw-fw-docs-card-grid cdw-fw-docs-card-grid--models" style="margin-top:16px;">
      <div class="cdw-card cdw-card--docked cdw-card--mint">
        <span class="cdw-badge cdw-badge--inline cdw-badge--mint cdw-badge--solid cdw-badge--sm cdw-card__badge">Live</span>
        <div class="cdw-card__header">
          <div>
            <div class="cdw-card__title">Indicadores KPIs</div>
            <div class="cdw-card__subtitle">Atualiza&ccedil;&atilde;o em tempo real</div>
          </div>
        </div>
        <div class="cdw-card__body cdw-card__kpi">
          <div>
            <div class="cdw-card__kpi-value">+18%</div>
            <div class="cdw-card__kpi-label">Convers&atilde;o</div>
          </div>
          <div>
            <div class="cdw-card__kpi-value">2m 14s</div>
            <div class="cdw-card__kpi-label">Tempo m&eacute;dio</div>
          </div>
        </div>
      </div>

      <div class="cdw-card cdw-card--docked cdw-card--sky">
        <span class="cdw-badge cdw-badge--inline cdw-badge--sky cdw-badge--solid cdw-badge--sm cdw-card__badge">Meta</span>
        <div class="cdw-card__header">
          <div>
            <div class="cdw-card__title">Receita anual</div>
            <div class="cdw-card__subtitle">Revis&atilde;o trimestral</div>
          </div>
        </div>
        <div class="cdw-card__body cdw-card__kpi">
          <div>
            <div class="cdw-card__kpi-value">R$ 2.1M</div>
            <div class="cdw-card__kpi-label">Meta</div>
          </div>
          <div>
            <div class="cdw-card__kpi-value">+9%</div>
            <div class="cdw-card__kpi-label">Progresso</div>
          </div>
        </div>
      </div>

      <div class="cdw-card cdw-card--docked cdw-card--amber">
        <span class="cdw-badge cdw-badge--inline cdw-badge--amber cdw-badge--solid cdw-badge--sm cdw-card__badge">Di&aacute;rio</span>
        <div class="cdw-card__header">
          <div>
            <div class="cdw-card__title">Atendimento</div>
            <div class="cdw-card__subtitle">Performance do dia</div>
          </div>
        </div>
        <div class="cdw-card__body cdw-card__kpi">
          <div>
            <div class="cdw-card__kpi-value">97%</div>
            <div class="cdw-card__kpi-label">NPS</div>
          </div>
          <div>
            <div class="cdw-card__kpi-value">38m</div>
            <div class="cdw-card__kpi-label">Fila</div>
          </div>
        </div>
      </div>
    </div>
    <div class="cdw-fw-docs-codeblock" style="margin-top:16px;">
      <div class="cdw-fw-docs-code-head">
        <div class="cdw-fw-docs-code-title">HTML</div>
        <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
      </div>
      <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-card cdw-card--docked cdw-card--mint"&gt;
  &lt;span class="cdw-badge cdw-badge--inline cdw-badge--mint cdw-badge--solid cdw-badge--sm cdw-card__badge"&gt;Live&lt;/span&gt;
  &lt;div class="cdw-card__header"&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__title"&gt;Indicadores KPIs&lt;/div&gt;
      &lt;div class="cdw-card__subtitle"&gt;Atualiza&ccedil;&atilde;o em tempo real&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__body cdw-card__kpi"&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__kpi-value"&gt;+18%&lt;/div&gt;
      &lt;div class="cdw-card__kpi-label"&gt;Convers&atilde;o&lt;/div&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__kpi-value"&gt;2m 14s&lt;/div&gt;
      &lt;div class="cdw-card__kpi-label"&gt;Tempo m&eacute;dio&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-card cdw-card--docked cdw-card--sky"&gt;
  &lt;span class="cdw-badge cdw-badge--inline cdw-badge--sky cdw-badge--solid cdw-badge--sm cdw-card__badge"&gt;Meta&lt;/span&gt;
  &lt;div class="cdw-card__header"&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__title"&gt;Receita anual&lt;/div&gt;
      &lt;div class="cdw-card__subtitle"&gt;Revis&atilde;o trimestral&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__body cdw-card__kpi"&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__kpi-value"&gt;R$ 2.1M&lt;/div&gt;
      &lt;div class="cdw-card__kpi-label"&gt;Meta&lt;/div&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__kpi-value"&gt;+9%&lt;/div&gt;
      &lt;div class="cdw-card__kpi-label"&gt;Progresso&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-card cdw-card--docked cdw-card--amber"&gt;
  &lt;span class="cdw-badge cdw-badge--inline cdw-badge--amber cdw-badge--solid cdw-badge--sm cdw-card__badge"&gt;Di&aacute;rio&lt;/span&gt;
  &lt;div class="cdw-card__header"&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__title"&gt;Atendimento&lt;/div&gt;
      &lt;div class="cdw-card__subtitle"&gt;Performance do dia&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__body cdw-card__kpi"&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__kpi-value"&gt;97%&lt;/div&gt;
      &lt;div class="cdw-card__kpi-label"&gt;NPS&lt;/div&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__kpi-value"&gt;38m&lt;/div&gt;
      &lt;div class="cdw-card__kpi-label"&gt;Fila&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="cdw-fw-docs-card-grid cdw-fw-docs-card-grid--models" style="margin-top:16px;">
      <div class="cdw-card cdw-card--accent cdw-card--amber">
        <span class="cdw-badge cdw-badge--corner cdw-badge--amber cdw-badge--solid cdw-badge--sm cdw-card__badge">Fila</span>
        <div class="cdw-card__header">
          <div>
            <div class="cdw-card__title">Aprova&ccedil;&otilde;es pendentes</div>
            <div class="cdw-card__subtitle">Setor financeiro</div>
          </div>
        </div>
        <div class="cdw-card__body cdw-card__list">
          <div>Reembolso #4821</div>
          <div>Contrato #1190</div>
          <div>Pedido #7712</div>
        </div>
      </div>

      <div class="cdw-card cdw-card--accent cdw-card--rose">
        <span class="cdw-badge cdw-badge--corner cdw-badge--rose cdw-badge--solid cdw-badge--sm cdw-card__badge">Pendente</span>
        <div class="cdw-card__header">
          <div>
            <div class="cdw-card__title">Revis&otilde;es legais</div>
            <div class="cdw-card__subtitle">Documentos</div>
          </div>
        </div>
        <div class="cdw-card__body cdw-card__list">
          <div>Contrato #2301</div>
          <div>Termo #1180</div>
          <div>Recurso #901</div>
        </div>
      </div>

      <div class="cdw-card cdw-card--accent cdw-card--ocean">
        <span class="cdw-badge cdw-badge--corner cdw-badge--ocean cdw-badge--solid cdw-badge--sm cdw-card__badge">Revis&atilde;o</span>
        <div class="cdw-card__header">
          <div>
            <div class="cdw-card__title">Entregas semanais</div>
            <div class="cdw-card__subtitle">Equipe interna</div>
          </div>
        </div>
        <div class="cdw-card__body cdw-card__list">
          <div>Release #32</div>
          <div>Checklist #88</div>
          <div>Deploy #14</div>
        </div>
      </div>
    </div>
    <div class="cdw-fw-docs-codeblock" style="margin-top:16px;">
      <div class="cdw-fw-docs-code-head">
        <div class="cdw-fw-docs-code-title">HTML</div>
        <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
      </div>
      <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-card cdw-card--accent cdw-card--amber"&gt;
  &lt;span class="cdw-badge cdw-badge--corner cdw-badge--amber cdw-badge--solid cdw-badge--sm cdw-card__badge"&gt;Fila&lt;/span&gt;
  &lt;div class="cdw-card__header"&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__title"&gt;Aprova&ccedil;&otilde;es pendentes&lt;/div&gt;
      &lt;div class="cdw-card__subtitle"&gt;Setor financeiro&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__body cdw-card__list"&gt;
    &lt;div&gt;Reembolso #4821&lt;/div&gt;
    &lt;div&gt;Contrato #1190&lt;/div&gt;
    &lt;div&gt;Pedido #7712&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-card cdw-card--accent cdw-card--rose"&gt;
  &lt;span class="cdw-badge cdw-badge--corner cdw-badge--rose cdw-badge--solid cdw-badge--sm cdw-card__badge"&gt;Pendente&lt;/span&gt;
  &lt;div class="cdw-card__header"&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__title"&gt;Revis&otilde;es legais&lt;/div&gt;
      &lt;div class="cdw-card__subtitle"&gt;Documentos&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__body cdw-card__list"&gt;
    &lt;div&gt;Contrato #2301&lt;/div&gt;
    &lt;div&gt;Termo #1180&lt;/div&gt;
    &lt;div&gt;Recurso #901&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-card cdw-card--accent cdw-card--ocean"&gt;
  &lt;span class="cdw-badge cdw-badge--corner cdw-badge--ocean cdw-badge--solid cdw-badge--sm cdw-card__badge"&gt;Revis&atilde;o&lt;/span&gt;
  &lt;div class="cdw-card__header"&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__title"&gt;Entregas semanais&lt;/div&gt;
      &lt;div class="cdw-card__subtitle"&gt;Equipe interna&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__body cdw-card__list"&gt;
    &lt;div&gt;Release #32&lt;/div&gt;
    &lt;div&gt;Checklist #88&lt;/div&gt;
    &lt;div&gt;Deploy #14&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="cdw-fw-docs-card-grid cdw-fw-docs-card-grid--models" style="margin-top:16px;">
      <div class="cdw-card cdw-card--panel cdw-card--graphite cdw-card--comfortable">
        <div class="cdw-card__header">
          <div>
            <div class="cdw-card__title">Painel t&eacute;cnico</div>
            <div class="cdw-card__subtitle">Infraestrutura</div>
          </div>
          <span class="cdw-badge cdw-badge--inline cdw-badge--ghost cdw-badge--outline cdw-badge--sm">Est&aacute;vel</span>
        </div>
        <div class="cdw-card__body cdw-card__grid-mini">
          <div>
            <div class="cdw-card__kpi-value">99.9%</div>
            <div class="cdw-card__kpi-label">Uptime</div>
          </div>
          <div>
            <div class="cdw-card__kpi-value">4.2s</div>
            <div class="cdw-card__kpi-label">Resposta</div>
          </div>
        </div>
        <div class="cdw-card__footer cdw-card__actions">
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-accent-sky">Detalhes</button>
          <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-accent-sky">Hist&oacute;rico</button>
        </div>
      </div>

      <div class="cdw-card cdw-card--panel cdw-card--ocean cdw-card--comfortable">
        <div class="cdw-card__header">
          <div>
            <div class="cdw-card__title">Monitoramento</div>
            <div class="cdw-card__subtitle">Servi&ccedil;os</div>
          </div>
          <span class="cdw-badge cdw-badge--inline cdw-badge--ghost cdw-badge--outline cdw-badge--sm">Ativo</span>
        </div>
        <div class="cdw-card__body cdw-card__grid-mini">
          <div>
            <div class="cdw-card__kpi-value">312</div>
            <div class="cdw-card__kpi-label">Alertas</div>
          </div>
          <div>
            <div class="cdw-card__kpi-value">1.8s</div>
            <div class="cdw-card__kpi-label">Lat&ecirc;ncia</div>
          </div>
        </div>
        <div class="cdw-card__footer cdw-card__actions">
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-accent-sky">Painel</button>
          <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-accent-sky">Logs</button>
        </div>
      </div>

      <div class="cdw-card cdw-card--panel cdw-card--ghost cdw-card--comfortable">
        <div class="cdw-card__header">
          <div>
            <div class="cdw-card__title">Compliance</div>
            <div class="cdw-card__subtitle">Auditorias</div>
          </div>
          <span class="cdw-badge cdw-badge--inline cdw-badge--ghost cdw-badge--outline cdw-badge--sm">Revis&atilde;o</span>
        </div>
        <div class="cdw-card__body cdw-card__grid-mini">
          <div>
            <div class="cdw-card__kpi-value">12</div>
            <div class="cdw-card__kpi-label">Itens</div>
          </div>
          <div>
            <div class="cdw-card__kpi-value">4</div>
            <div class="cdw-card__kpi-label">Pendentes</div>
          </div>
        </div>
        <div class="cdw-card__footer cdw-card__actions">
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-accent-sky">Abrir</button>
          <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-accent-sky">Exportar</button>
        </div>
      </div>
    </div>
    <div class="cdw-fw-docs-codeblock" style="margin-top:16px;">
      <div class="cdw-fw-docs-code-head">
        <div class="cdw-fw-docs-code-title">HTML</div>
        <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
      </div>
      <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-card cdw-card--panel cdw-card--graphite cdw-card--comfortable"&gt;
  &lt;div class="cdw-card__header"&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__title"&gt;Painel t&eacute;cnico&lt;/div&gt;
      &lt;div class="cdw-card__subtitle"&gt;Infraestrutura&lt;/div&gt;
    &lt;/div&gt;
    &lt;span class="cdw-badge cdw-badge--inline cdw-badge--ghost cdw-badge--outline cdw-badge--sm"&gt;Est&aacute;vel&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__body cdw-card__grid-mini"&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__kpi-value"&gt;99.9%&lt;/div&gt;
      &lt;div class="cdw-card__kpi-label"&gt;Uptime&lt;/div&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__kpi-value"&gt;4.2s&lt;/div&gt;
      &lt;div class="cdw-card__kpi-label"&gt;Resposta&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__footer cdw-card__actions"&gt;
    &lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-accent-sky"&gt;Detalhes&lt;/button&gt;
    &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-accent-sky"&gt;Hist&oacute;rico&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-card cdw-card--panel cdw-card--ocean cdw-card--comfortable"&gt;
  &lt;div class="cdw-card__header"&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__title"&gt;Monitoramento&lt;/div&gt;
      &lt;div class="cdw-card__subtitle"&gt;Servi&ccedil;os&lt;/div&gt;
    &lt;/div&gt;
    &lt;span class="cdw-badge cdw-badge--inline cdw-badge--ghost cdw-badge--outline cdw-badge--sm"&gt;Ativo&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__body cdw-card__grid-mini"&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__kpi-value"&gt;312&lt;/div&gt;
      &lt;div class="cdw-card__kpi-label"&gt;Alertas&lt;/div&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__kpi-value"&gt;1.8s&lt;/div&gt;
      &lt;div class="cdw-card__kpi-label"&gt;Lat&ecirc;ncia&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__footer cdw-card__actions"&gt;
    &lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-accent-sky"&gt;Painel&lt;/button&gt;
    &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-accent-sky"&gt;Logs&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-card cdw-card--panel cdw-card--ghost cdw-card--comfortable"&gt;
  &lt;div class="cdw-card__header"&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__title"&gt;Compliance&lt;/div&gt;
      &lt;div class="cdw-card__subtitle"&gt;Auditorias&lt;/div&gt;
    &lt;/div&gt;
    &lt;span class="cdw-badge cdw-badge--inline cdw-badge--ghost cdw-badge--outline cdw-badge--sm"&gt;Revis&atilde;o&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__body cdw-card__grid-mini"&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__kpi-value"&gt;12&lt;/div&gt;
      &lt;div class="cdw-card__kpi-label"&gt;Itens&lt;/div&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__kpi-value"&gt;4&lt;/div&gt;
      &lt;div class="cdw-card__kpi-label"&gt;Pendentes&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__footer cdw-card__actions"&gt;
    &lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-accent-sky"&gt;Abrir&lt;/button&gt;
    &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-accent-sky"&gt;Exportar&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="cards-uso" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Exemplos de uso</h3>
    <p class="cdw-fw-docs-subdesc">
      Cards em dashboard e painel interno.
    </p>
    <div class="cdw-fw-docs-card-grid">
      <div class="cdw-card cdw-card--flat cdw-card--ocean">
        <div class="cdw-card__header">
          <div>
            <div class="cdw-card__title">Painel de performance</div>
            <div class="cdw-card__subtitle">Resumo semanal</div>
          </div>
          <span class="cdw-badge cdw-badge--inline cdw-badge--ocean cdw-badge--soft cdw-badge--sm">Est&aacute;vel</span>
        </div>
        <div class="cdw-card__body">
          12 indicadores dentro da meta.
        </div>
        <div class="cdw-card__footer">
          <span class="cdw-card__meta">Atualizado 2h atr&aacute;s</span>
        </div>
      </div>
      <div class="cdw-card cdw-card--panel cdw-card--graphite cdw-card--comfortable">
        <div class="cdw-card__header">
          <div>
            <div class="cdw-card__title">Logs t&eacute;cnicos</div>
            <div class="cdw-card__subtitle">Ambiente interno</div>
          </div>
        </div>
        <div class="cdw-card__body">
          Sistema est&aacute;vel com 0 falhas cr&iacute;ticas.
        </div>
        <div class="cdw-card__footer">
          <span class="cdw-card__meta">Ver detalhes</span>
        </div>
      </div>
    </div>
    <div class="cdw-fw-docs-codeblock" style="margin-top:16px;">
      <div class="cdw-fw-docs-code-head">
        <div class="cdw-fw-docs-code-title">HTML</div>
        <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
      </div>
      <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-card cdw-card--flat cdw-card--ocean"&gt;
  &lt;div class="cdw-card__header"&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__title"&gt;Painel de performance&lt;/div&gt;
      &lt;div class="cdw-card__subtitle"&gt;Resumo semanal&lt;/div&gt;
    &lt;/div&gt;
    &lt;span class="cdw-badge cdw-badge--inline cdw-badge--ocean cdw-badge--soft cdw-badge--sm"&gt;Est&aacute;vel&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__body"&gt;
    12 indicadores dentro da meta.
  &lt;/div&gt;
  &lt;div class="cdw-card__footer"&gt;
    &lt;span class="cdw-card__meta"&gt;Atualizado 2h atr&aacute;s&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="cdw-card cdw-card--panel cdw-card--graphite cdw-card--comfortable"&gt;
  &lt;div class="cdw-card__header"&gt;
    &lt;div&gt;
      &lt;div class="cdw-card__title"&gt;Logs t&eacute;cnicos&lt;/div&gt;
      &lt;div class="cdw-card__subtitle"&gt;Ambiente interno&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-card__body"&gt;
    Sistema est&aacute;vel com 0 falhas cr&iacute;ticas.
  &lt;/div&gt;
  &lt;div class="cdw-card__footer"&gt;
    &lt;span class="cdw-card__meta"&gt;Ver detalhes&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
  </div>
</section>
  `,
  panel: `<section id="panel" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">CDW Panel</h2>
    <p class="cdw-fw-docs-lead">
      Cont&ecirc;iner narrativo para estados, contexto e separa&ccedil;&atilde;o visual com identidade CDWeb.
    </p>
  </div>

  <div class="cdw-fw-docs-toc">
    <span class="cdw-fw-docs-toc-title">&Iacute;ndice desta p&aacute;gina</span>
    <a href="#panel-conceito">Conceito</a>
    <a href="#panel-estrutura">Estrutura</a>
    <a href="#panel-tamanhos">Tamanhos</a>
    <a href="#panel-modelos">Modelos</a>
  </div>

  <div class="cdw-fw-docs-subsection" id="panel-conceito" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Conceito</h3>
    <p class="cdw-fw-docs-subdesc">
      O Panel organiza informa&ccedil;&atilde;o, estado e decis&atilde;o em um bloco de contexto.
      Ele &eacute; estrutural, n&atilde;o um card de destaque isolado.
    </p>
  </div>

  <div class="cdw-fw-docs-subsection" id="panel-estrutura" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Estrutura</h3>
    <p class="cdw-fw-docs-subdesc">
      Header e footer s&atilde;o opcionais, mas o body &eacute; sempre obrigat&oacute;rio.
    </p>
    <div class="cdw-panel cdw-panel-frame cdw-fw-accent-slate">
      <div class="cdw-panel-header">
        <div class="cdw-panel-title">Painel institucional</div>
        <div class="cdw-panel-subtitle">Documento de contexto</div>
      </div>
      <div class="cdw-panel-body">
        Texto principal com ritmo de leitura e separa&ccedil;&atilde;o clara de informa&ccedil;&otilde;es.
      </div>
      <div class="cdw-panel-footer">
        <span class="cdw-panel-meta">Atualizado agora</span>
        <div class="cdw-panel-actions">
          <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-accent-slate">Revisar</button>
        </div>
      </div>
    </div>
    <div class="cdw-fw-docs-codeblock" style="margin-top:16px;">
      <div class="cdw-fw-docs-code-head">
        <div class="cdw-fw-docs-code-title">HTML</div>
        <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
      </div>
      <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-panel cdw-panel-frame cdw-fw-accent-slate"&gt;
  &lt;div class="cdw-panel-header"&gt;
    &lt;div class="cdw-panel-title"&gt;Painel institucional&lt;/div&gt;
    &lt;div class="cdw-panel-subtitle"&gt;Documento de contexto&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-panel-body"&gt;Texto principal com ritmo de leitura e separa&ccedil;&atilde;o clara de informa&ccedil;&otilde;es.&lt;/div&gt;
  &lt;div class="cdw-panel-footer"&gt;
    &lt;span class="cdw-panel-meta"&gt;Atualizado agora&lt;/span&gt;
    &lt;div class="cdw-panel-actions"&gt;
      &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-accent-slate"&gt;Revisar&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="panel-tamanhos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Tamanhos</h3>
    <p class="cdw-fw-docs-subdesc">
      Sm &eacute; compacto, md leitura padr&atilde;o, lg leitura longa e xl narrativa institucional.
    </p>
    <div style="display:flex; flex-direction:column; gap:14px;">
      <div class="cdw-panel cdw-panel-rail cdw-panel-sm cdw-fw-accent-graphite">
        <div class="cdw-panel-title">Painel sm</div>
        <div class="cdw-panel-body">Mesmo conte&uacute;do para comparar ritmo e largura.</div>
      </div>
      <div class="cdw-panel cdw-panel-rail cdw-panel-md cdw-fw-accent-graphite">
        <div class="cdw-panel-title">Painel md</div>
        <div class="cdw-panel-body">Mesmo conte&uacute;do para comparar ritmo e largura.</div>
      </div>
      <div class="cdw-panel cdw-panel-rail cdw-panel-lg cdw-fw-accent-graphite">
        <div class="cdw-panel-title">Painel lg</div>
        <div class="cdw-panel-body">Mesmo conte&uacute;do para comparar ritmo e largura.</div>
      </div>
      <div class="cdw-panel cdw-panel-rail cdw-panel-xl cdw-fw-accent-graphite">
        <div class="cdw-panel-title">Painel xl</div>
        <div class="cdw-panel-body">Mesmo conte&uacute;do para comparar ritmo e largura.</div>
      </div>
    </div>
    <div class="cdw-fw-docs-codeblock" style="margin-top:16px;">
      <div class="cdw-fw-docs-code-head">
        <div class="cdw-fw-docs-code-title">HTML</div>
        <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
      </div>
      <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-panel cdw-panel-rail cdw-panel-sm cdw-fw-accent-graphite"&gt;...&lt;/div&gt;
&lt;div class="cdw-panel cdw-panel-rail cdw-panel-md cdw-fw-accent-graphite"&gt;...&lt;/div&gt;
&lt;div class="cdw-panel cdw-panel-rail cdw-panel-lg cdw-fw-accent-graphite"&gt;...&lt;/div&gt;
&lt;div class="cdw-panel cdw-panel-rail cdw-panel-xl cdw-fw-accent-graphite"&gt;...&lt;/div&gt;</code></pre>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="panel-modelos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Modelos</h3>
    <p class="cdw-fw-docs-subdesc">
      Seis modelos distintos, cada um com constru&ccedil;&atilde;o visual pr&oacute;pria.
    </p>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Panel Layer</div>
        <div class="cdw-fw-docs-badge">Layer</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-panel cdw-panel-layer cdw-fw-accent-sky">
          <div class="cdw-panel-header">
            <div class="cdw-panel-title">Camadas de contexto</div>
            <div class="cdw-panel-subtitle">Base + apoio visual</div>
          </div>
          <div class="cdw-panel-body">Separar dados prim&aacute;rios de apoio.</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-panel cdw-panel-layer cdw-fw-accent-sky"&gt;
  &lt;div class="cdw-panel-header"&gt;
    &lt;div class="cdw-panel-title"&gt;Camadas de contexto&lt;/div&gt;
    &lt;div class="cdw-panel-subtitle"&gt;Base + apoio visual&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-panel-body"&gt;Separar dados prim&aacute;rios de apoio.&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Panel Outline Offset</div>
        <div class="cdw-fw-docs-badge">Outline</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-panel cdw-panel-outline-offset cdw-fw-accent-rose">
          <div class="cdw-panel-header">
            <div class="cdw-panel-title">Contexto detalhado</div>
            <div class="cdw-panel-subtitle">Borda deslocada</div>
          </div>
          <div class="cdw-panel-body">Explica&ccedil;&atilde;o com profundidade sutil.</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-panel cdw-panel-outline-offset cdw-fw-accent-rose"&gt;
  &lt;div class="cdw-panel-header"&gt;
    &lt;div class="cdw-panel-title"&gt;Contexto detalhado&lt;/div&gt;
    &lt;div class="cdw-panel-subtitle"&gt;Borda deslocada&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-panel-body"&gt;Explica&ccedil;&atilde;o com profundidade sutil.&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Panel Frame</div>
        <div class="cdw-fw-docs-badge">Frame</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-panel cdw-panel-frame cdw-fw-accent-slate">
          <div class="cdw-panel-header">
            <div class="cdw-panel-title">Documento institucional</div>
            <div class="cdw-panel-subtitle">Borda dupla</div>
          </div>
          <div class="cdw-panel-body">Estrutura para decis&otilde;es formais.</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-panel cdw-panel-frame cdw-fw-accent-slate"&gt;
  &lt;div class="cdw-panel-header"&gt;
    &lt;div class="cdw-panel-title"&gt;Documento institucional&lt;/div&gt;
    &lt;div class="cdw-panel-subtitle"&gt;Borda dupla&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-panel-body"&gt;Estrutura para decis&otilde;es formais.&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Panel Frame Double</div>
        <div class="cdw-fw-docs-badge">Double</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-panel cdw-panel-frame-double cdw-fw-accent-mint">
          <div class="cdw-panel-header">
            <div class="cdw-panel-title">Respiro duplo</div>
            <div class="cdw-panel-subtitle">Camada interna elegante</div>
          </div>
          <div class="cdw-panel-body">Leitura limpa para contexto institucional.</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-panel cdw-panel-frame-double cdw-fw-accent-mint"&gt;
  &lt;div class="cdw-panel-header"&gt;
    &lt;div class="cdw-panel-title"&gt;Respiro duplo&lt;/div&gt;
    &lt;div class="cdw-panel-subtitle"&gt;Camada interna elegante&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-panel-body"&gt;Leitura limpa para contexto institucional.&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Panel Rail</div>
        <div class="cdw-fw-docs-badge">Rail</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-panel cdw-panel-rail cdw-fw-accent-ember">
          <div class="cdw-panel-header">
            <div class="cdw-panel-title">Trilha lateral</div>
            <div class="cdw-panel-subtitle">Linha estrutural</div>
          </div>
          <div class="cdw-panel-body">Organiza decis&otilde;es por contexto.</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-panel cdw-panel-rail cdw-fw-accent-ember"&gt;
  &lt;div class="cdw-panel-header"&gt;
    &lt;div class="cdw-panel-title"&gt;Trilha lateral&lt;/div&gt;
    &lt;div class="cdw-panel-subtitle"&gt;Linha estrutural&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-panel-body"&gt;Organiza decis&otilde;es por contexto.&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Panel Cut</div>
        <div class="cdw-fw-docs-badge">Cut</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-panel cdw-panel-cut cdw-fw-accent-ocean">
          <div class="cdw-panel-header">
            <div class="cdw-panel-title">Editorial premium</div>
            <div class="cdw-panel-subtitle">Cortes sutis</div>
          </div>
          <div class="cdw-panel-body">Leitura elegante com assimetria controlada.</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-panel cdw-panel-cut cdw-fw-accent-ocean"&gt;
  &lt;div class="cdw-panel-header"&gt;
    &lt;div class="cdw-panel-title"&gt;Editorial premium&lt;/div&gt;
    &lt;div class="cdw-panel-subtitle"&gt;Cortes sutis&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-panel-body"&gt;Leitura elegante com assimetria controlada.&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Panel Stack</div>
        <div class="cdw-fw-docs-badge">Stack</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-panel cdw-panel-stack cdw-fw-accent-carbon">
          <div class="cdw-panel-header">
            <div class="cdw-panel-title">Hist&oacute;rico comparativo</div>
            <div class="cdw-panel-subtitle">Profundidade sutil</div>
          </div>
          <div class="cdw-panel-body">Organiza passos ou estados anteriores.</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-panel cdw-panel-stack cdw-fw-accent-carbon"&gt;
  &lt;div class="cdw-panel-header"&gt;
    &lt;div class="cdw-panel-title"&gt;Hist&oacute;rico comparativo&lt;/div&gt;
    &lt;div class="cdw-panel-subtitle"&gt;Profundidade sutil&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-panel-body"&gt;Organiza passos ou estados anteriores.&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>


    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Panel Stack Alt</div>
        <div class="cdw-fw-docs-badge">Stack Alt</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-panel cdw-panel-stack-alt cdw-fw-accent-carbon">
          <div class="cdw-panel-header">
            <div class="cdw-panel-title">Camada de contexto</div>
            <div class="cdw-panel-subtitle">Borda pronunciada</div>
          </div>
          <div class="cdw-panel-body">Destaque editorial para comunicacao estruturada.</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-panel cdw-panel-stack-alt cdw-fw-accent-carbon"&gt;
  &lt;div class="cdw-panel-header"&gt;
    &lt;div class="cdw-panel-title"&gt;Camada de contexto&lt;/div&gt;
    &lt;div class="cdw-panel-subtitle"&gt;Borda pronunciada&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-panel-body"&gt;Destaque editorial para comunicacao estruturada.&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Panel Stack Notch</div>
        <div class="cdw-fw-docs-badge">Stack Notch</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-panel cdw-panel-stack-notch cdw-fw-accent-carbon">
          <div class="cdw-panel-header">
            <div class="cdw-panel-title">Ritmo narrativo</div>
            <div class="cdw-panel-subtitle">Recorte superior</div>
          </div>
          <div class="cdw-panel-body">Ideal para estados de acompanhamento e contexto.</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-panel cdw-panel-stack-notch cdw-fw-accent-carbon"&gt;
  &lt;div class="cdw-panel-header"&gt;
    &lt;div class="cdw-panel-title"&gt;Ritmo narrativo&lt;/div&gt;
    &lt;div class="cdw-panel-subtitle"&gt;Recorte superior&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-panel-body"&gt;Ideal para estados de acompanhamento e contexto.&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>


    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Panel Triple</div>
        <div class="cdw-fw-docs-badge">Triple</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-panel cdw-panel-triple cdw-fw-accent-carbon">
          <div class="cdw-panel-header">
            <div class="cdw-panel-title">Contexto estruturado</div>
            <div class="cdw-panel-subtitle">Bordas em camadas</div>
          </div>
          <div class="cdw-panel-body">Leitura limpa com delimitacao visual tripla.</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-panel cdw-panel-triple cdw-fw-accent-carbon"&gt;
  &lt;div class="cdw-panel-header"&gt;
    &lt;div class="cdw-panel-title"&gt;Contexto estruturado&lt;/div&gt;
    &lt;div class="cdw-panel-subtitle"&gt;Bordas em camadas&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-panel-body"&gt;Leitura limpa com delimitacao visual tripla.&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
</section>

`,  hero: `
<section id="hero" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Hero</h2>
    <p class="cdw-fw-docs-lead">
      Abertura premium para paginas institucionais, dashboards e documentacao com identidade CDW-FW.
    </p>
  </div>

  <div class="cdw-fw-docs-toc">
    <span class="cdw-fw-docs-toc-title">Indice desta pagina</span>
    <a href="#hero-conceito">Conceito</a>
    <a href="#hero-estrutura">Estrutura</a>
    <a href="#hero-tamanhos">Tamanhos</a>
    <a href="#hero-modelos">Modelos</a>
    <a href="#hero-uso">Uso</a>
  </div>

  <div class="cdw-fw-docs-subsection" id="hero-conceito" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Conceito</h3>
    <p class="cdw-fw-docs-subdesc">
      Hero e a abertura de contexto do framework. Une mensagem, direcao visual e acao para orientar o usuario.
      <span class="cdw-fw-docs-when">Quando usar: topo de paginas de produto, docs e sistemas internos.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-hero</span>
      <span>cdw-hero-inner</span>
      <span>cdw-hero-content</span>
      <span>cdw-hero-visual</span>
      <span>cdw-hero-visual-inner</span>
      <span>cdw-hero--*</span>
      <span>cdw-hero-sm</span>
      <span>cdw-hero-md</span>
      <span>cdw-hero-lg</span>
      <span>cdw-hero-xl</span>
      <span>cdw-fw-accent-*</span>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="hero-estrutura" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Estrutura</h3>
    <p class="cdw-fw-docs-subdesc">
      Eyebrow, acoes e meta sao opcionais. Titulo e subtitulo sao recomendados. O visual sempre existe.
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Base obrigatoria</div>
        <div class="cdw-fw-docs-badge">Estrutura</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <section class="cdw-hero cdw-hero--split-prism cdw-hero-md cdw-fw-accent-ocean">
          <div class="cdw-hero-inner">
            <div class="cdw-hero-content">
              <div class="cdw-hero-eyebrow">CDW FW</div>
              <h1 class="cdw-hero-title">Hero com identidade</h1>
              <p class="cdw-hero-subtitle">Mensagem curta para direcionar a pagina e destacar o framework.</p>
              <div class="cdw-hero-actions">
                <a class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded" href="#">Acao primaria</a>
                <a class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded" href="#">Acao secundaria</a>
              </div>
              <div class="cdw-hero-meta">Meta opcional</div>
            </div>
            <div class="cdw-hero-visual">
              <div class="cdw-hero-visual-inner">
                <div class="cdw-hero-mock">
                  <div class="cdw-hero-mock-bar"></div>
                  <div class="cdw-hero-mock-row"></div>
                  <div class="cdw-hero-mock-row is-short"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;section class="cdw-hero cdw-hero--split-prism cdw-hero-md cdw-fw-accent-ocean"&gt;
  &lt;div class="cdw-hero-inner"&gt;
    &lt;div class="cdw-hero-content"&gt;
      &lt;div class="cdw-hero-eyebrow"&gt;CDW FW&lt;/div&gt;
      &lt;h1 class="cdw-hero-title"&gt;Hero com identidade&lt;/h1&gt;
      &lt;p class="cdw-hero-subtitle"&gt;Mensagem curta para direcionar a pagina e destacar o framework.&lt;/p&gt;
      &lt;div class="cdw-hero-actions"&gt;
        &lt;a class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded" href="#"&gt;Acao primaria&lt;/a&gt;
        &lt;a class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded" href="#"&gt;Acao secundaria&lt;/a&gt;
      &lt;/div&gt;
      &lt;div class="cdw-hero-meta"&gt;Meta opcional&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-hero-visual"&gt;
      &lt;div class="cdw-hero-visual-inner"&gt;
        &lt;div class="cdw-hero-mock"&gt;
          &lt;div class="cdw-hero-mock-bar"&gt;&lt;/div&gt;
          &lt;div class="cdw-hero-mock-row"&gt;&lt;/div&gt;
          &lt;div class="cdw-hero-mock-row is-short"&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/section&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="hero-tamanhos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Tamanhos</h3>
    <p class="cdw-fw-docs-subdesc">
      Os tamanhos alteram tipografia, ritmo e proporcao do grid. Escolha pelo contexto da pagina.
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-hero-sm</span>
      <span>cdw-hero-md</span>
      <span>cdw-hero-lg</span>
      <span>cdw-hero-xl</span>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="hero-modelos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Modelos</h3>
    <p class="cdw-fw-docs-subdesc">
      Oito variacoes reais, cada uma com linguagem visual e ritmo proprios.
    </p>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Hero Split Prism</div>
        <div class="cdw-fw-docs-badge">Framework</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <section class="cdw-hero cdw-hero--split-prism cdw-hero-lg cdw-fw-accent-ocean">
          <div class="cdw-hero-inner">
            <div class="cdw-hero-content">
              <div class="cdw-hero-eyebrow">CDW FW</div>
              <h1 class="cdw-hero-title">Release visual 1.0</h1>
              <p class="cdw-hero-subtitle">Componentes com identidade, tokens claros e fluxo de uso consistente.</p>
              <div class="cdw-hero-actions">
                <a class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded" href="#">Ver release</a>
                <a class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded" href="#">Guia visual</a>
              </div>
              <div class="cdw-hero-meta">Atualizado hoje &bull; 24 componentes</div>
            </div>
            <div class="cdw-hero-visual">
              <div class="cdw-hero-visual-inner">
                <div class="cdw-hero-mock">
                  <div class="cdw-hero-mock-bar"></div>
                  <div class="cdw-hero-mock-row"></div>
                  <div class="cdw-hero-mock-row is-short"></div>
                  <div class="cdw-hero-mock-row"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;section class="cdw-hero cdw-hero--split-prism cdw-hero-lg cdw-fw-accent-ocean"&gt;
  &lt;div class="cdw-hero-inner"&gt;
    &lt;div class="cdw-hero-content"&gt;
      &lt;div class="cdw-hero-eyebrow"&gt;CDW FW&lt;/div&gt;
      &lt;h1 class="cdw-hero-title"&gt;Release visual 1.0&lt;/h1&gt;
      &lt;p class="cdw-hero-subtitle"&gt;Componentes com identidade, tokens claros e fluxo de uso consistente.&lt;/p&gt;
      &lt;div class="cdw-hero-actions"&gt;
        &lt;a class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded" href="#"&gt;Ver release&lt;/a&gt;
        &lt;a class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded" href="#"&gt;Guia visual&lt;/a&gt;
      &lt;/div&gt;
      &lt;div class="cdw-hero-meta"&gt;Atualizado hoje &bull; 24 componentes&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-hero-visual"&gt;
      &lt;div class="cdw-hero-visual-inner"&gt;
        &lt;div class="cdw-hero-mock"&gt;
          &lt;div class="cdw-hero-mock-bar"&gt;&lt;/div&gt;
          &lt;div class="cdw-hero-mock-row"&gt;&lt;/div&gt;
          &lt;div class="cdw-hero-mock-row is-short"&gt;&lt;/div&gt;
          &lt;div class="cdw-hero-mock-row"&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/section&gt;</code></pre>
      </div>
    </div>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Hero Frame Editorial</div>
        <div class="cdw-fw-docs-badge">Docs</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <section class="cdw-hero cdw-hero--frame-editorial cdw-hero-md cdw-fw-accent-cocoa">
          <div class="cdw-hero-inner">
            <div class="cdw-hero-content">
              <div class="cdw-hero-eyebrow">Documentacao</div>
              <h1 class="cdw-hero-title">Manual editorial CDW</h1>
              <p class="cdw-hero-subtitle">Diretrizes de voz, layout e hierarquia para interfaces consistentes.</p>
              <div class="cdw-hero-actions">
                <a class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded" href="#">Abrir manual</a>
                <a class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded" href="#">Baixar PDF</a>
              </div>
              <div class="cdw-hero-meta">Versao 3.2 &bull; 48 paginas</div>
            </div>
            <div class="cdw-hero-visual">
              <div class="cdw-hero-visual-inner">
                <div class="cdw-hero-editorial">
                  <div class="cdw-hero-editorial-line is-accent"></div>
                  <div class="cdw-hero-editorial-line"></div>
                  <div class="cdw-hero-editorial-line"></div>
                  <div class="cdw-hero-editorial-line is-accent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;section class="cdw-hero cdw-hero--frame-editorial cdw-hero-md cdw-fw-accent-cocoa"&gt;
  &lt;div class="cdw-hero-inner"&gt;
    &lt;div class="cdw-hero-content"&gt;
      &lt;div class="cdw-hero-eyebrow"&gt;Documentacao&lt;/div&gt;
      &lt;h1 class="cdw-hero-title"&gt;Manual editorial CDW&lt;/h1&gt;
      &lt;p class="cdw-hero-subtitle"&gt;Diretrizes de voz, layout e hierarquia para interfaces consistentes.&lt;/p&gt;
      &lt;div class="cdw-hero-actions"&gt;
        &lt;a class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded" href="#"&gt;Abrir manual&lt;/a&gt;
        &lt;a class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded" href="#"&gt;Baixar PDF&lt;/a&gt;
      &lt;/div&gt;
      &lt;div class="cdw-hero-meta"&gt;Versao 3.2 &bull; 48 paginas&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-hero-visual"&gt;
      &lt;div class="cdw-hero-visual-inner"&gt;
        &lt;div class="cdw-hero-editorial"&gt;
          &lt;div class="cdw-hero-editorial-line is-accent"&gt;&lt;/div&gt;
          &lt;div class="cdw-hero-editorial-line"&gt;&lt;/div&gt;
          &lt;div class="cdw-hero-editorial-line"&gt;&lt;/div&gt;
          &lt;div class="cdw-hero-editorial-line is-accent"&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/section&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Hero Layer Stack</div>
        <div class="cdw-fw-docs-badge">Sistema</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <section class="cdw-hero cdw-hero--layer-stack cdw-hero-lg cdw-fw-accent-violet">
          <div class="cdw-hero-inner">
            <div class="cdw-hero-content">
              <div class="cdw-hero-eyebrow">Configuracao</div>
              <h1 class="cdw-hero-title">Camadas de tema e densidade</h1>
              <p class="cdw-hero-subtitle">Ative niveis de contraste, grade e espacamento com consistencia total.</p>
              <div class="cdw-hero-actions">
                <a class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded" href="#">Configurar tema</a>
                <a class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded" href="#">Ver presets</a>
              </div>
              <div class="cdw-hero-meta">3 camadas prontas &bull; 12 presets</div>
            </div>
            <div class="cdw-hero-visual">
              <div class="cdw-hero-visual-inner">
                <div class="cdw-hero-layer-stack">
                  <div class="cdw-hero-layer-card">
                    <div class="cdw-hero-mock-bar"></div>
                    <div class="cdw-hero-mock-row"></div>
                  </div>
                  <div class="cdw-hero-layer-card is-offset">
                    <div class="cdw-hero-mock-bar"></div>
                    <div class="cdw-hero-mock-row is-short"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;section class="cdw-hero cdw-hero--layer-stack cdw-hero-lg cdw-fw-accent-violet"&gt;
  &lt;div class="cdw-hero-inner"&gt;
    &lt;div class="cdw-hero-content"&gt;
      &lt;div class="cdw-hero-eyebrow"&gt;Configuracao&lt;/div&gt;
      &lt;h1 class="cdw-hero-title"&gt;Camadas de tema e densidade&lt;/h1&gt;
      &lt;p class="cdw-hero-subtitle"&gt;Ative niveis de contraste, grade e espacamento com consistencia total.&lt;/p&gt;
      &lt;div class="cdw-hero-actions"&gt;
        &lt;a class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded" href="#"&gt;Configurar tema&lt;/a&gt;
        &lt;a class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded" href="#"&gt;Ver presets&lt;/a&gt;
      &lt;/div&gt;
      &lt;div class="cdw-hero-meta"&gt;3 camadas prontas &bull; 12 presets&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-hero-visual"&gt;
      &lt;div class="cdw-hero-visual-inner"&gt;
        &lt;div class="cdw-hero-layer-stack"&gt;
          &lt;div class="cdw-hero-layer-card"&gt;
            &lt;div class="cdw-hero-mock-bar"&gt;&lt;/div&gt;
            &lt;div class="cdw-hero-mock-row"&gt;&lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="cdw-hero-layer-card is-offset"&gt;
            &lt;div class="cdw-hero-mock-bar"&gt;&lt;/div&gt;
            &lt;div class="cdw-hero-mock-row is-short"&gt;&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/section&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Hero Edge Signal</div>
        <div class="cdw-fw-docs-badge">Sistema</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <section class="cdw-hero cdw-hero--edge-signal cdw-hero-sm cdw-fw-accent-forest">
          <div class="cdw-hero-inner">
            <div class="cdw-hero-content">
              <div class="cdw-hero-eyebrow">Console</div>
              <h1 class="cdw-hero-title">Politicas de acesso ativas</h1>
              <p class="cdw-hero-subtitle">Regras, niveis e auditoria alinhados ao padrao CDW.</p>
              <div class="cdw-hero-actions">
                <a class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded" href="#">Revisar politicas</a>
                <a class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded" href="#">Criar regra</a>
              </div>
              <div class="cdw-hero-meta">Atualizado ha 2h &bull; 6 niveis</div>
            </div>
            <div class="cdw-hero-visual">
              <div class="cdw-hero-visual-inner">
                <div class="cdw-hero-mock">
                  <div class="cdw-hero-mock-bar"></div>
                  <div class="cdw-hero-mock-row"></div>
                  <div class="cdw-hero-mock-row is-short"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;section class="cdw-hero cdw-hero--edge-signal cdw-hero-sm cdw-fw-accent-forest"&gt;
  &lt;div class="cdw-hero-inner"&gt;
    &lt;div class="cdw-hero-content"&gt;
      &lt;div class="cdw-hero-eyebrow"&gt;Console&lt;/div&gt;
      &lt;h1 class="cdw-hero-title"&gt;Politicas de acesso ativas&lt;/h1&gt;
      &lt;p class="cdw-hero-subtitle"&gt;Regras, niveis e auditoria alinhados ao padrao CDW.&lt;/p&gt;
      &lt;div class="cdw-hero-actions"&gt;
        &lt;a class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded" href="#"&gt;Revisar politicas&lt;/a&gt;
        &lt;a class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded" href="#"&gt;Criar regra&lt;/a&gt;
      &lt;/div&gt;
      &lt;div class="cdw-hero-meta"&gt;Atualizado ha 2h &bull; 6 niveis&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-hero-visual"&gt;
      &lt;div class="cdw-hero-visual-inner"&gt;
        &lt;div class="cdw-hero-mock"&gt;
          &lt;div class="cdw-hero-mock-bar"&gt;&lt;/div&gt;
          &lt;div class="cdw-hero-mock-row"&gt;&lt;/div&gt;
          &lt;div class="cdw-hero-mock-row is-short"&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/section&gt;</code></pre>
      </div>
    </div>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Hero Minimal Line</div>
        <div class="cdw-fw-docs-badge">Docs</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <section class="cdw-hero cdw-hero--minimal-line cdw-hero-md cdw-fw-accent-graphite">
          <div class="cdw-hero-inner">
            <div class="cdw-hero-content">
              <div class="cdw-hero-eyebrow">Documentacao</div>
              <h1 class="cdw-hero-title">API do CDW FW</h1>
              <p class="cdw-hero-subtitle">Tokens, grid e utilitarios com exemplos prontos para uso.</p>
              <div class="cdw-hero-actions">
                <a class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded" href="#">Ler referencia</a>
                <a class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded" href="#">Gerar token</a>
              </div>
              <div class="cdw-hero-meta">v2.4 &bull; atualizacao semanal</div>
            </div>
            <div class="cdw-hero-visual">
              <div class="cdw-hero-visual-inner">
                <div class="cdw-hero-wireframe">
                  <div class="cdw-hero-wireframe-chip">API v2.4</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;section class="cdw-hero cdw-hero--minimal-line cdw-hero-md cdw-fw-accent-graphite"&gt;
  &lt;div class="cdw-hero-inner"&gt;
    &lt;div class="cdw-hero-content"&gt;
      &lt;div class="cdw-hero-eyebrow"&gt;Documentacao&lt;/div&gt;
      &lt;h1 class="cdw-hero-title"&gt;API do CDW FW&lt;/h1&gt;
      &lt;p class="cdw-hero-subtitle"&gt;Tokens, grid e utilitarios com exemplos prontos para uso.&lt;/p&gt;
      &lt;div class="cdw-hero-actions"&gt;
        &lt;a class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded" href="#"&gt;Ler referencia&lt;/a&gt;
        &lt;a class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded" href="#"&gt;Gerar token&lt;/a&gt;
      &lt;/div&gt;
      &lt;div class="cdw-hero-meta"&gt;v2.4 &bull; atualizacao semanal&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-hero-visual"&gt;
      &lt;div class="cdw-hero-visual-inner"&gt;
        &lt;div class="cdw-hero-wireframe"&gt;
          &lt;div class="cdw-hero-wireframe-chip"&gt;API v2.4&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/section&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Hero Spotlight Glass</div>
        <div class="cdw-fw-docs-badge">Premium</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <section class="cdw-hero cdw-hero--spotlight-glass cdw-hero-lg cdw-fw-accent-rose">
          <div class="cdw-hero-inner">
            <div class="cdw-hero-content">
              <div class="cdw-hero-eyebrow">Workspace Prime</div>
              <h1 class="cdw-hero-title">Ambiente de prototipacao guiada</h1>
              <p class="cdw-hero-subtitle">Camadas visuais com foco em criacao rapida e padrao CDW.</p>
              <div class="cdw-hero-actions">
                <a class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded" href="#">Abrir workspace</a>
                <a class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded" href="#">Solicitar acesso</a>
              </div>
              <div class="cdw-hero-meta">Conformidade ativa &bull; 2 niveis</div>
            </div>
            <div class="cdw-hero-visual">
              <div class="cdw-hero-visual-inner">
                <div class="cdw-hero-glass-stack">
                  <div class="cdw-hero-glass-tile is-accent">
                    <div class="cdw-hero-mock-bar"></div>
                    <div class="cdw-hero-mock-row"></div>
                  </div>
                  <div class="cdw-hero-glass-tile">
                    <div class="cdw-hero-mock-row is-short"></div>
                    <div class="cdw-hero-mock-row"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;section class="cdw-hero cdw-hero--spotlight-glass cdw-hero-lg cdw-fw-accent-rose"&gt;
  &lt;div class="cdw-hero-inner"&gt;
    &lt;div class="cdw-hero-content"&gt;
      &lt;div class="cdw-hero-eyebrow"&gt;Workspace Prime&lt;/div&gt;
      &lt;h1 class="cdw-hero-title"&gt;Ambiente de prototipacao guiada&lt;/h1&gt;
      &lt;p class="cdw-hero-subtitle"&gt;Camadas visuais com foco em criacao rapida e padrao CDW.&lt;/p&gt;
      &lt;div class="cdw-hero-actions"&gt;
        &lt;a class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded" href="#"&gt;Abrir workspace&lt;/a&gt;
        &lt;a class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded" href="#"&gt;Solicitar acesso&lt;/a&gt;
      &lt;/div&gt;
      &lt;div class="cdw-hero-meta"&gt;Conformidade ativa &bull; 2 niveis&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-hero-visual"&gt;
      &lt;div class="cdw-hero-visual-inner"&gt;
        &lt;div class="cdw-hero-glass-stack"&gt;
          &lt;div class="cdw-hero-glass-tile is-accent"&gt;
            &lt;div class="cdw-hero-mock-bar"&gt;&lt;/div&gt;
            &lt;div class="cdw-hero-mock-row"&gt;&lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="cdw-hero-glass-tile"&gt;
            &lt;div class="cdw-hero-mock-row is-short"&gt;&lt;/div&gt;
            &lt;div class="cdw-hero-mock-row"&gt;&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/section&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Hero Dashboard Preview</div>
        <div class="cdw-fw-docs-badge">Sistema</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <section class="cdw-hero cdw-hero--dashboard-preview cdw-hero-xl cdw-fw-accent-sky">
          <div class="cdw-hero-inner">
            <div class="cdw-hero-content">
              <div class="cdw-hero-eyebrow">Painel CDW</div>
              <h1 class="cdw-hero-title">Insights do framework</h1>
              <p class="cdw-hero-subtitle">Adocao, cobertura e performance dos componentes em tempo real.</p>
              <div class="cdw-hero-actions">
                <a class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded" href="#">Abrir painel</a>
                <a class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded" href="#">Criar visao</a>
              </div>
              <div class="cdw-hero-meta">Atualizacao a cada 5 min &bull; 12 indicadores</div>
            </div>
            <div class="cdw-hero-visual">
              <div class="cdw-hero-visual-inner">
                <div class="cdw-hero-preview">
                  <div class="cdw-hero-preview-top">
                    <div class="cdw-hero-preview-brand">
                      <span class="cdw-hero-preview-dot"></span>
                      CDW Insights
                    </div>
                    <div class="cdw-hero-preview-status">Live</div>
                  </div>
                  <div class="cdw-hero-preview-grid">
                    <div class="cdw-hero-preview-card">
                      <div class="cdw-hero-preview-bar"></div>
                      <div class="cdw-hero-preview-bar is-short"></div>
                    </div>
                    <div class="cdw-hero-preview-card">
                      <div class="cdw-hero-preview-bar"></div>
                      <div class="cdw-hero-preview-bar is-short"></div>
                    </div>
                    <div class="cdw-hero-preview-card">
                      <div class="cdw-hero-preview-bar"></div>
                      <div class="cdw-hero-preview-bar is-short"></div>
                    </div>
                  </div>
                  <div class="cdw-hero-preview-chart"></div>
                  <div class="cdw-hero-preview-metrics">
                    <div class="cdw-hero-preview-pill">Adocao diaria</div>
                    <div class="cdw-hero-preview-pill">Qualidade alta</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;section class="cdw-hero cdw-hero--dashboard-preview cdw-hero-xl cdw-fw-accent-sky"&gt;
  &lt;div class="cdw-hero-inner"&gt;
    &lt;div class="cdw-hero-content"&gt;
      &lt;div class="cdw-hero-eyebrow"&gt;Painel CDW&lt;/div&gt;
      &lt;h1 class="cdw-hero-title"&gt;Insights do framework&lt;/h1&gt;
      &lt;p class="cdw-hero-subtitle"&gt;Adocao, cobertura e performance dos componentes em tempo real.&lt;/p&gt;
      &lt;div class="cdw-hero-actions"&gt;
        &lt;a class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded" href="#"&gt;Abrir painel&lt;/a&gt;
        &lt;a class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded" href="#"&gt;Criar visao&lt;/a&gt;
      &lt;/div&gt;
      &lt;div class="cdw-hero-meta"&gt;Atualizacao a cada 5 min &bull; 12 indicadores&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-hero-visual"&gt;
      &lt;div class="cdw-hero-visual-inner"&gt;
        &lt;div class="cdw-hero-preview"&gt;
          &lt;div class="cdw-hero-preview-top"&gt;
            &lt;div class="cdw-hero-preview-brand"&gt;
              &lt;span class="cdw-hero-preview-dot"&gt;&lt;/span&gt;
              CDW Insights
            &lt;/div&gt;
            &lt;div class="cdw-hero-preview-status"&gt;Live&lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="cdw-hero-preview-grid"&gt;
            &lt;div class="cdw-hero-preview-card"&gt;
              &lt;div class="cdw-hero-preview-bar"&gt;&lt;/div&gt;
              &lt;div class="cdw-hero-preview-bar is-short"&gt;&lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="cdw-hero-preview-card"&gt;
              &lt;div class="cdw-hero-preview-bar"&gt;&lt;/div&gt;
              &lt;div class="cdw-hero-preview-bar is-short"&gt;&lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="cdw-hero-preview-card"&gt;
              &lt;div class="cdw-hero-preview-bar"&gt;&lt;/div&gt;
              &lt;div class="cdw-hero-preview-bar is-short"&gt;&lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="cdw-hero-preview-chart"&gt;&lt;/div&gt;
          &lt;div class="cdw-hero-preview-metrics"&gt;
            &lt;div class="cdw-hero-preview-pill"&gt;Adocao diaria&lt;/div&gt;
            &lt;div class="cdw-hero-preview-pill"&gt;Qualidade alta&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/section&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Hero Center Stage</div>
        <div class="cdw-fw-docs-badge">CDW FW</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <section class="cdw-hero cdw-hero--center-stage cdw-hero-xl cdw-fw-accent-sun">
          <div class="cdw-hero-inner">
            <div class="cdw-hero-content">
              <div class="cdw-hero-eyebrow">CDW Framework</div>
              <h1 class="cdw-hero-title">Abertura clara para interfaces CDWeb</h1>
              <p class="cdw-hero-subtitle">Componentes elegantes, identidade forte e ritmo visual para produtos digitais.</p>
              <div class="cdw-hero-actions">
                <a class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded" href="#">Comecar agora</a>
                <a class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded" href="#">Ver componentes</a>
              </div>
              <div class="cdw-hero-meta">Atualizado hoje &bull; v0.0.0</div>
            </div>
            <div class="cdw-hero-visual">
              <div class="cdw-hero-visual-inner">
                <div class="cdw-hero-mock">
                  <div class="cdw-hero-mock-bar"></div>
                  <div class="cdw-hero-mock-row"></div>
                  <div class="cdw-hero-mock-row"></div>
                  <div class="cdw-hero-mock-row is-short"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;section class="cdw-hero cdw-hero--center-stage cdw-hero-xl cdw-fw-accent-sun"&gt;
  &lt;div class="cdw-hero-inner"&gt;
    &lt;div class="cdw-hero-content"&gt;
      &lt;div class="cdw-hero-eyebrow"&gt;CDW Framework&lt;/div&gt;
      &lt;h1 class="cdw-hero-title"&gt;Abertura clara para interfaces CDWeb&lt;/h1&gt;
      &lt;p class="cdw-hero-subtitle"&gt;Componentes elegantes, identidade forte e ritmo visual para produtos digitais.&lt;/p&gt;
      &lt;div class="cdw-hero-actions"&gt;
        &lt;a class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded" href="#"&gt;Comecar agora&lt;/a&gt;
        &lt;a class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded" href="#"&gt;Ver componentes&lt;/a&gt;
      &lt;/div&gt;
      &lt;div class="cdw-hero-meta"&gt;Atualizado hoje &bull; v0.0.0&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-hero-visual"&gt;
      &lt;div class="cdw-hero-visual-inner"&gt;
        &lt;div class="cdw-hero-mock"&gt;
          &lt;div class="cdw-hero-mock-bar"&gt;&lt;/div&gt;
          &lt;div class="cdw-hero-mock-row"&gt;&lt;/div&gt;
          &lt;div class="cdw-hero-mock-row"&gt;&lt;/div&gt;
          &lt;div class="cdw-hero-mock-row is-short"&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/section&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="hero-uso" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Uso</h3>
    <div class="cdw-fw-docs-card">
      <div class="cdw-fw-docs-card-title">Boas praticas</div>
      <div class="cdw-fw-docs-highlight">Use um modelo por contexto: institucional, sistema interno, docs.</div>
      <div class="cdw-fw-docs-highlight">O accent deve realcar linhas, cortes e detalhes, nunca apagar o texto.</div>
      <div class="cdw-fw-docs-highlight">A area visual pode ser mock, shape ou preview real do produto.</div>
      <div class="cdw-fw-docs-highlight">Para arredondar, use style com --cdw-hero-radius e --cdw-hero-visual-radius.</div>
    </div>
  </div>
</section>

`,
  gallery: `<section id="gallery" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
    <div class="cdw-fw-docs-section-head">
      <h2 class="cdw-fw-docs-section-title">Gallery</h2>
      <p class="cdw-fw-docs-lead">
        Galeria premium para imagens com ritmo visual, recortes e destaque controlado.
      </p>
    </div>

      <div class="cdw-fw-docs-toc">
        <a href="#gallery-conceito">Conceito</a>
        <a href="#gallery-estrutura">Estrutura</a>
        <a href="#gallery-modelos">Modelos</a>
        <a href="#gallery-ecommerce">E-commerce</a>
        <a href="#gallery-uso">Exemplos de uso</a>
      </div>

      <div class="cdw-fw-docs-subsection" id="gallery-conceito" data-cdw-fw-docs-section>
        <h3 class="cdw-fw-docs-subtitle">Conceito</h3>
        <p class="cdw-fw-docs-subdesc">
          CDWeb Gallery organiza imagens com hierarquia visual e espacamento refinado, sem grids genericos. Cada midia pode ter descricao individual e loading automatico na troca. O foco usa data-cdw-gallery-focus="clean|immersive".
        </p>
        <div class="cdw-fw-docs-classlist">
          <span>cdw-gallery</span>
          <span>cdw-gallery__list</span>
          <span>cdw-gallery__item</span>
          <span>cdw-gallery__media</span>
          <span>cdw-gallery__label</span>
          <span>data-cdw-gallery</span>
          <span>data-cdw-gallery-controls</span>
          <span>data-cdw-gallery-focus</span>
          <span>data-cdw-gallery-product</span>
          <span>data-title</span>
          <span>data-desc</span>
          <span>data-meta</span>
        </div>
      </div>

    <div class="cdw-fw-docs-subsection" id="gallery-estrutura" data-cdw-fw-docs-section>
      <h3 class="cdw-fw-docs-subtitle">Estrutura</h3>

      <div class="cdw-fw-docs-example">
        <div class="cdw-fw-docs-example-head">
          <div class="cdw-fw-docs-example-title">Estrutura base</div>
          <div class="cdw-fw-docs-badge">Base</div>
        </div>
        <div class="cdw-fw-docs-preview">
          <div class="cdw-gallery cdw-gallery--grid cdw-fw-accent-ocean" data-cdw-gallery data-cdw-gallery-focus="clean">
            <div class="cdw-gallery__list">
              <div class="cdw-gallery__item">
                <div class="cdw-gallery__media cdw-gallery__media--landscape">
                  <span class="cdw-gallery__label">Image 01</span>
                </div>
              </div>
              <div class="cdw-gallery__item">
                <div class="cdw-gallery__media cdw-gallery__media--square">
                  <span class="cdw-gallery__label">Image 02</span>
                </div>
              </div>
              <div class="cdw-gallery__item">
                <div class="cdw-gallery__media cdw-gallery__media--portrait">
                  <span class="cdw-gallery__label">Image 03</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cdw-fw-docs-codeblock">
          <div class="cdw-fw-docs-code-head">
            <div class="cdw-fw-docs-code-title">HTML</div>
            <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
          </div>
          <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-gallery cdw-gallery--grid cdw-fw-accent-ocean" data-cdw-gallery data-cdw-gallery-focus="clean"&gt;
  &lt;div class="cdw-gallery__list"&gt;
    &lt;div class="cdw-gallery__item"&gt;
      &lt;div class="cdw-gallery__media cdw-gallery__media--landscape"&gt;
        &lt;span class="cdw-gallery__label"&gt;Image 01&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-gallery__item"&gt;
      &lt;div class="cdw-gallery__media cdw-gallery__media--square"&gt;
        &lt;span class="cdw-gallery__label"&gt;Image 02&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-gallery__item"&gt;
      &lt;div class="cdw-gallery__media cdw-gallery__media--portrait"&gt;
        &lt;span class="cdw-gallery__label"&gt;Image 03&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>
    </div>

    <div class="cdw-fw-docs-subsection" id="gallery-modelos" data-cdw-fw-docs-section>
      <h3 class="cdw-fw-docs-subtitle">Modelos</h3>
      <p class="cdw-fw-docs-subdesc">Todos os modelos aplicam loading automatico na troca de midia.</p>

      <div class="cdw-fw-docs-example">
        <div class="cdw-fw-docs-example-head">
          <div class="cdw-fw-docs-example-title">Gallery Grid Classic</div>
          <div class="cdw-fw-docs-badge">Grid</div>
        </div>
        <div class="cdw-fw-docs-preview">
          <div class="cdw-gallery cdw-gallery--grid cdw-fw-accent-sky" data-cdw-gallery data-cdw-gallery-focus="clean">
            <div class="cdw-gallery__list">
              <div class="cdw-gallery__item"><div class="cdw-gallery__media cdw-gallery__media--landscape"><span class="cdw-gallery__label">Image 01</span></div></div>
              <div class="cdw-gallery__item"><div class="cdw-gallery__media cdw-gallery__media--square"><span class="cdw-gallery__label">Image 02</span></div></div>
              <div class="cdw-gallery__item"><div class="cdw-gallery__media cdw-gallery__media--wide"><span class="cdw-gallery__label">Image 03</span></div></div>
              <div class="cdw-gallery__item"><div class="cdw-gallery__media cdw-gallery__media--portrait"><span class="cdw-gallery__label">Image 04</span></div></div>
            </div>
          </div>
        </div>
        <div class="cdw-fw-docs-codeblock">
          <div class="cdw-fw-docs-code-head">
            <div class="cdw-fw-docs-code-title">HTML</div>
            <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
          </div>
          <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-gallery cdw-gallery--grid cdw-fw-accent-sky" data-cdw-gallery data-cdw-gallery-focus="clean"&gt;
  &lt;div class="cdw-gallery__list"&gt;
    &lt;div class="cdw-gallery__item"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--landscape"&gt;&lt;span class="cdw-gallery__label"&gt;Image 01&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
    &lt;div class="cdw-gallery__item"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--square"&gt;&lt;span class="cdw-gallery__label"&gt;Image 02&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
    &lt;div class="cdw-gallery__item"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--wide"&gt;&lt;span class="cdw-gallery__label"&gt;Image 03&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
    &lt;div class="cdw-gallery__item"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--portrait"&gt;&lt;span class="cdw-gallery__label"&gt;Image 04&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <div class="cdw-fw-docs-example">
        <div class="cdw-fw-docs-example-head">
          <div class="cdw-fw-docs-example-title">Gallery Mason Flow</div>
          <div class="cdw-fw-docs-badge">Masonry</div>
        </div>
        <div class="cdw-fw-docs-preview">
          <div class="cdw-gallery cdw-gallery--masonry cdw-fw-accent-mint" data-cdw-gallery data-cdw-gallery-focus="immersive">
            <div class="cdw-gallery__list">
              <div class="cdw-gallery__item"><div class="cdw-gallery__media cdw-gallery__media--portrait"><span class="cdw-gallery__label">Image 01</span></div></div>
              <div class="cdw-gallery__item"><div class="cdw-gallery__media cdw-gallery__media--wide"><span class="cdw-gallery__label">Image 02</span></div></div>
              <div class="cdw-gallery__item"><div class="cdw-gallery__media cdw-gallery__media--square"><span class="cdw-gallery__label">Image 03</span></div></div>
              <div class="cdw-gallery__item"><div class="cdw-gallery__media cdw-gallery__media--landscape"><span class="cdw-gallery__label">Image 04</span></div></div>
              <div class="cdw-gallery__item"><div class="cdw-gallery__media cdw-gallery__media--portrait"><span class="cdw-gallery__label">Image 05</span></div></div>
            </div>
          </div>
        </div>
        <div class="cdw-fw-docs-codeblock">
          <div class="cdw-fw-docs-code-head">
            <div class="cdw-fw-docs-code-title">HTML</div>
            <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
          </div>
          <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-gallery cdw-gallery--masonry cdw-fw-accent-mint" data-cdw-gallery data-cdw-gallery-focus="immersive"&gt;
  &lt;div class="cdw-gallery__list"&gt;
    &lt;div class="cdw-gallery__item"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--portrait"&gt;&lt;span class="cdw-gallery__label"&gt;Image 01&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
    &lt;div class="cdw-gallery__item"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--wide"&gt;&lt;span class="cdw-gallery__label"&gt;Image 02&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
    &lt;div class="cdw-gallery__item"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--square"&gt;&lt;span class="cdw-gallery__label"&gt;Image 03&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
    &lt;div class="cdw-gallery__item"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--landscape"&gt;&lt;span class="cdw-gallery__label"&gt;Image 04&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
    &lt;div class="cdw-gallery__item"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--portrait"&gt;&lt;span class="cdw-gallery__label"&gt;Image 05&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <div class="cdw-fw-docs-example">
        <div class="cdw-fw-docs-example-head">
          <div class="cdw-fw-docs-example-title">Gallery Highlight</div>
          <div class="cdw-fw-docs-badge">Highlight</div>
        </div>
        <div class="cdw-fw-docs-preview">
          <div class="cdw-gallery cdw-gallery--highlight cdw-fw-accent-amber" data-cdw-gallery data-cdw-gallery-focus="clean">
            <div class="cdw-gallery__list">
              <div class="cdw-gallery__item cdw-gallery__item--hero"><div class="cdw-gallery__media cdw-gallery__media--wide"><span class="cdw-gallery__label">Image 01</span></div></div>
              <div class="cdw-gallery__item"><div class="cdw-gallery__media cdw-gallery__media--square"><span class="cdw-gallery__label">Image 02</span></div></div>
              <div class="cdw-gallery__item"><div class="cdw-gallery__media cdw-gallery__media--landscape"><span class="cdw-gallery__label">Image 03</span></div></div>
              <div class="cdw-gallery__item"><div class="cdw-gallery__media cdw-gallery__media--portrait"><span class="cdw-gallery__label">Image 04</span></div></div>
            </div>
          </div>
        </div>
        <div class="cdw-fw-docs-codeblock">
          <div class="cdw-fw-docs-code-head">
            <div class="cdw-fw-docs-code-title">HTML</div>
            <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
          </div>
          <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-gallery cdw-gallery--highlight cdw-fw-accent-amber" data-cdw-gallery data-cdw-gallery-focus="clean"&gt;
  &lt;div class="cdw-gallery__list"&gt;
    &lt;div class="cdw-gallery__item cdw-gallery__item--hero"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--wide"&gt;&lt;span class="cdw-gallery__label"&gt;Image 01&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
    &lt;div class="cdw-gallery__item"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--square"&gt;&lt;span class="cdw-gallery__label"&gt;Image 02&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
    &lt;div class="cdw-gallery__item"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--landscape"&gt;&lt;span class="cdw-gallery__label"&gt;Image 03&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
    &lt;div class="cdw-gallery__item"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--portrait"&gt;&lt;span class="cdw-gallery__label"&gt;Image 04&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <div class="cdw-fw-docs-example">
        <div class="cdw-fw-docs-example-head">
          <div class="cdw-fw-docs-example-title">Gallery Strip</div>
          <div class="cdw-fw-docs-badge">Strip</div>
        </div>
        <div class="cdw-fw-docs-preview">
          <div class="cdw-gallery cdw-gallery--strip cdw-fw-accent-graphite" data-cdw-gallery data-cdw-gallery-controls="true" data-cdw-gallery-focus="immersive">
            <div class="cdw-gallery__list">
              <div class="cdw-gallery__item"><div class="cdw-gallery__media cdw-gallery__media--wide"><span class="cdw-gallery__label">Image 01</span></div></div>
              <div class="cdw-gallery__item"><div class="cdw-gallery__media cdw-gallery__media--square"><span class="cdw-gallery__label">Image 02</span></div></div>
              <div class="cdw-gallery__item"><div class="cdw-gallery__media cdw-gallery__media--landscape"><span class="cdw-gallery__label">Image 03</span></div></div>
              <div class="cdw-gallery__item"><div class="cdw-gallery__media cdw-gallery__media--portrait"><span class="cdw-gallery__label">Image 04</span></div></div>
            </div>
            <div class="cdw-gallery__controls">
              <button class="cdw-gallery__control cdw-gallery__control--prev" type="button" data-cdw-gallery-strip-prev></button>
              <button class="cdw-gallery__control cdw-gallery__control--next" type="button" data-cdw-gallery-strip-next></button>
            </div>
          </div>
        </div>
        <div class="cdw-fw-docs-codeblock">
          <div class="cdw-fw-docs-code-head">
            <div class="cdw-fw-docs-code-title">HTML</div>
            <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
          </div>
          <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-gallery cdw-gallery--strip cdw-fw-accent-graphite" data-cdw-gallery data-cdw-gallery-controls="true" data-cdw-gallery-focus="immersive"&gt;
  &lt;div class="cdw-gallery__list"&gt;
    &lt;div class="cdw-gallery__item"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--wide"&gt;&lt;span class="cdw-gallery__label"&gt;Image 01&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
    &lt;div class="cdw-gallery__item"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--square"&gt;&lt;span class="cdw-gallery__label"&gt;Image 02&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
    &lt;div class="cdw-gallery__item"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--landscape"&gt;&lt;span class="cdw-gallery__label"&gt;Image 03&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
    &lt;div class="cdw-gallery__item"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--portrait"&gt;&lt;span class="cdw-gallery__label"&gt;Image 04&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-gallery__controls"&gt;
    &lt;button class="cdw-gallery__control cdw-gallery__control--prev" type="button" data-cdw-gallery-strip-prev&gt;&lt;/button&gt;
    &lt;button class="cdw-gallery__control cdw-gallery__control--next" type="button" data-cdw-gallery-strip-next&gt;&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <div class="cdw-fw-docs-example">
        <div class="cdw-fw-docs-example-head">
          <div class="cdw-fw-docs-example-title">Gallery Overlay</div>
          <div class="cdw-fw-docs-badge">Focus</div>
        </div>
        <div class="cdw-fw-docs-preview">
          <div class="cdw-gallery cdw-gallery--overlay cdw-fw-accent-rose" data-cdw-gallery data-cdw-gallery-focus="immersive">
            <div class="cdw-gallery__list">
              <div class="cdw-gallery__item"><div class="cdw-gallery__media cdw-gallery__media--square"><span class="cdw-gallery__label">Image 01</span></div></div>
              <div class="cdw-gallery__item"><div class="cdw-gallery__media cdw-gallery__media--portrait"><span class="cdw-gallery__label">Image 02</span></div></div>
              <div class="cdw-gallery__item"><div class="cdw-gallery__media cdw-gallery__media--landscape"><span class="cdw-gallery__label">Image 03</span></div></div>
              <div class="cdw-gallery__item"><div class="cdw-gallery__media cdw-gallery__media--wide"><span class="cdw-gallery__label">Image 04</span></div></div>
            </div>
          </div>
        </div>
        <div class="cdw-fw-docs-codeblock">
          <div class="cdw-fw-docs-code-head">
            <div class="cdw-fw-docs-code-title">HTML</div>
            <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
          </div>
          <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-gallery cdw-gallery--overlay cdw-fw-accent-rose" data-cdw-gallery data-cdw-gallery-focus="immersive"&gt;
  &lt;div class="cdw-gallery__list"&gt;
    &lt;div class="cdw-gallery__item"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--square"&gt;&lt;span class="cdw-gallery__label"&gt;Image 01&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
    &lt;div class="cdw-gallery__item"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--portrait"&gt;&lt;span class="cdw-gallery__label"&gt;Image 02&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
    &lt;div class="cdw-gallery__item"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--landscape"&gt;&lt;span class="cdw-gallery__label"&gt;Image 03&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
    &lt;div class="cdw-gallery__item"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--wide"&gt;&lt;span class="cdw-gallery__label"&gt;Image 04&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>
      </div>

      <div class="cdw-fw-docs-subsection" id="gallery-ecommerce" data-cdw-fw-docs-section>
        <h3 class="cdw-fw-docs-subtitle">Gallery – E-commerce</h3>
        <p class="cdw-fw-docs-subdesc">
          Product Switch serve para alternar imagens rapidamente. Product Detail adiciona descricao individual por imagem e leitura de compra. Loading automatico aparece ao trocar.
        </p>

        <div class="cdw-fw-docs-example">
          <div class="cdw-fw-docs-example-head">
            <div class="cdw-fw-docs-example-title">Product Switch</div>
            <div class="cdw-fw-docs-badge">Produto</div>
          </div>
          <div class="cdw-fw-docs-preview">
            <div class="cdw-gallery cdw-gallery--product cdw-gallery--product-switch cdw-fw-accent-graphite" data-cdw-gallery data-cdw-gallery-product="switch">
              <div class="cdw-gallery__product">
                <div class="cdw-gallery__product-thumbs">
                  <button class="cdw-gallery__thumb is-active" type="button" data-cdw-gallery-thumb data-label="Product 01" data-alt="Produto 01" data-src="https://picsum.photos/seed/cdw-prod-01/900/900" data-aspect="cdw-gallery__media--square">
                    <div class="cdw-gallery__thumb-media">
                      <img src="https://picsum.photos/seed/cdw-prod-01/180/180" alt="Produto 01" loading="lazy" />
                    </div>
                  </button>
                  <button class="cdw-gallery__thumb" type="button" data-cdw-gallery-thumb data-label="Product 02" data-alt="Produto 02" data-src="https://picsum.photos/seed/cdw-prod-02/900/900" data-aspect="cdw-gallery__media--square">
                    <div class="cdw-gallery__thumb-media">
                      <img src="https://picsum.photos/seed/cdw-prod-02/180/180" alt="Produto 02" loading="lazy" />
                    </div>
                  </button>
                  <button class="cdw-gallery__thumb" type="button" data-cdw-gallery-thumb data-label="Product 03" data-alt="Produto 03" data-src="https://picsum.photos/seed/cdw-prod-03/900/900" data-aspect="cdw-gallery__media--square">
                    <div class="cdw-gallery__thumb-media">
                      <img src="https://picsum.photos/seed/cdw-prod-03/180/180" alt="Produto 03" loading="lazy" />
                    </div>
                  </button>
                  <button class="cdw-gallery__thumb" type="button" data-cdw-gallery-thumb data-label="Detail 04" data-alt="Detalhe 04" data-src="https://picsum.photos/seed/cdw-prod-04/900/620" data-aspect="cdw-gallery__media--landscape">
                    <div class="cdw-gallery__thumb-media">
                      <img src="https://picsum.photos/seed/cdw-prod-04/180/180" alt="Detalhe 04" loading="lazy" />
                    </div>
                  </button>
                </div>
                <div class="cdw-gallery__product-main">
                  <div class="cdw-gallery__media cdw-gallery__media--square">
                    <img src="https://picsum.photos/seed/cdw-prod-01/900/900" alt="Produto 01" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cdw-fw-docs-codeblock">
            <div class="cdw-fw-docs-code-head">
              <div class="cdw-fw-docs-code-title">HTML</div>
            </div>
            <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-gallery cdw-gallery--product cdw-gallery--product-switch cdw-fw-accent-graphite" data-cdw-gallery data-cdw-gallery-product="switch"&gt;
  &lt;div class="cdw-gallery__product"&gt;
    &lt;div class="cdw-gallery__product-thumbs"&gt;
      &lt;button class="cdw-gallery__thumb is-active" type="button" data-cdw-gallery-thumb data-label="Product 01" data-alt="Produto 01" data-src="https://picsum.photos/seed/cdw-prod-01/900/900" data-aspect="cdw-gallery__media--square"&gt;
        &lt;div class="cdw-gallery__thumb-media"&gt;
          &lt;img src="https://picsum.photos/seed/cdw-prod-01/180/180" alt="Produto 01" loading="lazy" /&gt;
        &lt;/div&gt;
      &lt;/button&gt;
      &lt;button class="cdw-gallery__thumb" type="button" data-cdw-gallery-thumb data-label="Product 02" data-alt="Produto 02" data-src="https://picsum.photos/seed/cdw-prod-02/900/900" data-aspect="cdw-gallery__media--square"&gt;
        &lt;div class="cdw-gallery__thumb-media"&gt;
          &lt;img src="https://picsum.photos/seed/cdw-prod-02/180/180" alt="Produto 02" loading="lazy" /&gt;
        &lt;/div&gt;
      &lt;/button&gt;
      &lt;button class="cdw-gallery__thumb" type="button" data-cdw-gallery-thumb data-label="Product 03" data-alt="Produto 03" data-src="https://picsum.photos/seed/cdw-prod-03/900/900" data-aspect="cdw-gallery__media--square"&gt;
        &lt;div class="cdw-gallery__thumb-media"&gt;
          &lt;img src="https://picsum.photos/seed/cdw-prod-03/180/180" alt="Produto 03" loading="lazy" /&gt;
        &lt;/div&gt;
      &lt;/button&gt;
      &lt;button class="cdw-gallery__thumb" type="button" data-cdw-gallery-thumb data-label="Detail 04" data-alt="Detalhe 04" data-src="https://picsum.photos/seed/cdw-prod-04/900/620" data-aspect="cdw-gallery__media--landscape"&gt;
        &lt;div class="cdw-gallery__thumb-media"&gt;
          &lt;img src="https://picsum.photos/seed/cdw-prod-04/180/180" alt="Detalhe 04" loading="lazy" /&gt;
        &lt;/div&gt;
      &lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="cdw-gallery__product-main"&gt;
      &lt;div class="cdw-gallery__media cdw-gallery__media--square"&gt;
        &lt;img src="https://picsum.photos/seed/cdw-prod-01/900/900" alt="Produto 01" loading="lazy" /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div>

          <div class="cdw-fw-docs-example">
            <div class="cdw-fw-docs-example-head">
              <div class="cdw-fw-docs-example-title">Product Detail</div>
              <div class="cdw-fw-docs-badge">Detalhe</div>
            </div>
            <div class="cdw-fw-docs-preview">
              <div class="cdw-gallery cdw-gallery--product cdw-gallery--product-detail cdw-fw-accent-slate" data-cdw-gallery data-cdw-gallery-product="detail">
                <div class="cdw-gallery__product">
                  <div class="cdw-gallery__product-main">
                    <div class="cdw-gallery__media cdw-gallery__media--landscape">
                      <img src="https://picsum.photos/seed/cdw-detail-01/980/640" alt="Produto 01" loading="lazy" />
                    </div>
                  </div>
                  <div class="cdw-gallery__product-thumbs">
                    <button class="cdw-gallery__thumb is-active" type="button" data-cdw-gallery-thumb data-label="Product 01" data-title="Produto executivo" data-desc="Acabamento premium com foco em durabilidade e leitura clara da textura." data-meta="Material: composto|Variacao: grafite|Status: pronto" data-alt="Produto 01" data-src="https://picsum.photos/seed/cdw-detail-01/980/640" data-aspect="cdw-gallery__media--landscape">
                      <div class="cdw-gallery__thumb-media">
                        <img src="https://picsum.photos/seed/cdw-detail-01/160/160" alt="Produto 01" loading="lazy" />
                      </div>
                    </button>
                    <button class="cdw-gallery__thumb" type="button" data-cdw-gallery-thumb data-label="Product 02" data-title="Linha tecnica" data-desc="Textura controlada e cor equilibrada para ambientes profissionais." data-meta="Material: tecido|Variacao: azul|Status: em linha" data-alt="Produto 02" data-src="https://picsum.photos/seed/cdw-detail-02/980/640" data-aspect="cdw-gallery__media--landscape">
                      <div class="cdw-gallery__thumb-media">
                        <img src="https://picsum.photos/seed/cdw-detail-02/160/160" alt="Produto 02" loading="lazy" />
                      </div>
                    </button>
                    <button class="cdw-gallery__thumb" type="button" data-cdw-gallery-thumb data-label="Detail 03" data-title="Detalhe ampliado" data-desc="Enfoque em acabamento e recorte para decisao rapida." data-meta="Material: acabamento|Variacao: grafite|Status: pronto" data-alt="Detalhe 03" data-src="https://picsum.photos/seed/cdw-detail-03/980/640" data-aspect="cdw-gallery__media--landscape">
                      <div class="cdw-gallery__thumb-media">
                        <img src="https://picsum.photos/seed/cdw-detail-03/160/160" alt="Detalhe 03" loading="lazy" />
                      </div>
                    </button>
                    <button class="cdw-gallery__thumb" type="button" data-cdw-gallery-thumb data-label="Detail 04" data-title="Vista lateral" data-desc="Visao complementar para comparar cortes e proporcao." data-meta="Material: composto|Variacao: grafite|Status: em linha" data-alt="Detalhe 04" data-src="https://picsum.photos/seed/cdw-detail-04/980/640" data-aspect="cdw-gallery__media--landscape">
                      <div class="cdw-gallery__thumb-media">
                        <img src="https://picsum.photos/seed/cdw-detail-04/160/160" alt="Detalhe 04" loading="lazy" />
                      </div>
                    </button>
                  </div>
                  <div class="cdw-gallery__product-info">
                    <div class="cdw-gallery__product-info-title">Produto executivo</div>
                    <div class="cdw-gallery__product-info-desc">Acabamento premium com foco em durabilidade e leitura clara da textura.</div>
                    <div class="cdw-gallery__product-info-meta">
                      <span>Material: composto</span>
                      <span>Variacao: grafite</span>
                      <span>Status: pronto</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cdw-fw-docs-codeblock">
              <div class="cdw-fw-docs-code-head">
                <div class="cdw-fw-docs-code-title">HTML</div>
              </div>
              <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-gallery cdw-gallery--product cdw-gallery--product-detail cdw-fw-accent-slate" data-cdw-gallery data-cdw-gallery-product="detail"&gt;
  &lt;div class="cdw-gallery__product"&gt;
    &lt;div class="cdw-gallery__product-main"&gt;
      &lt;div class="cdw-gallery__media cdw-gallery__media--landscape"&gt;
        &lt;img src="https://picsum.photos/seed/cdw-detail-01/980/640" alt="Produto 01" loading="lazy" /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-gallery__product-thumbs"&gt;
      &lt;button class="cdw-gallery__thumb is-active" type="button" data-cdw-gallery-thumb data-label="Product 01" data-title="Produto executivo" data-desc="Acabamento premium com foco em durabilidade e leitura clara da textura." data-meta="Material: composto|Variacao: grafite|Status: pronto" data-alt="Produto 01" data-src="https://picsum.photos/seed/cdw-detail-01/980/640" data-aspect="cdw-gallery__media--landscape"&gt;
        &lt;div class="cdw-gallery__thumb-media"&gt;
          &lt;img src="https://picsum.photos/seed/cdw-detail-01/160/160" alt="Produto 01" loading="lazy" /&gt;
        &lt;/div&gt;
      &lt;/button&gt;
      &lt;button class="cdw-gallery__thumb" type="button" data-cdw-gallery-thumb data-label="Product 02" data-title="Linha tecnica" data-desc="Textura controlada e cor equilibrada para ambientes profissionais." data-meta="Material: tecido|Variacao: azul|Status: em linha" data-alt="Produto 02" data-src="https://picsum.photos/seed/cdw-detail-02/980/640" data-aspect="cdw-gallery__media--landscape"&gt;
        &lt;div class="cdw-gallery__thumb-media"&gt;
          &lt;img src="https://picsum.photos/seed/cdw-detail-02/160/160" alt="Produto 02" loading="lazy" /&gt;
        &lt;/div&gt;
      &lt;/button&gt;
      &lt;button class="cdw-gallery__thumb" type="button" data-cdw-gallery-thumb data-label="Detail 03" data-title="Detalhe ampliado" data-desc="Enfoque em acabamento e recorte para decisao rapida." data-meta="Material: acabamento|Variacao: grafite|Status: pronto" data-alt="Detalhe 03" data-src="https://picsum.photos/seed/cdw-detail-03/980/640" data-aspect="cdw-gallery__media--landscape"&gt;
        &lt;div class="cdw-gallery__thumb-media"&gt;
          &lt;img src="https://picsum.photos/seed/cdw-detail-03/160/160" alt="Detalhe 03" loading="lazy" /&gt;
        &lt;/div&gt;
      &lt;/button&gt;
      &lt;button class="cdw-gallery__thumb" type="button" data-cdw-gallery-thumb data-label="Detail 04" data-title="Vista lateral" data-desc="Visao complementar para comparar cortes e proporcao." data-meta="Material: composto|Variacao: grafite|Status: em linha" data-alt="Detalhe 04" data-src="https://picsum.photos/seed/cdw-detail-04/980/640" data-aspect="cdw-gallery__media--landscape"&gt;
        &lt;div class="cdw-gallery__thumb-media"&gt;
          &lt;img src="https://picsum.photos/seed/cdw-detail-04/160/160" alt="Detalhe 04" loading="lazy" /&gt;
        &lt;/div&gt;
      &lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="cdw-gallery__product-info"&gt;
      &lt;div class="cdw-gallery__product-info-title"&gt;Produto executivo&lt;/div&gt;
      &lt;div class="cdw-gallery__product-info-desc"&gt;Acabamento premium com foco em durabilidade e leitura clara da textura.&lt;/div&gt;
      &lt;div class="cdw-gallery__product-info-meta"&gt;
        &lt;span&gt;Material: composto&lt;/span&gt;
        &lt;span&gt;Variacao: grafite&lt;/span&gt;
        &lt;span&gt;Status: pronto&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </div>
        </div>

    <div class="cdw-fw-docs-subsection" id="gallery-uso" data-cdw-fw-docs-section>
      <h3 class="cdw-fw-docs-subtitle">Exemplos de uso</h3>
      <p class="cdw-fw-docs-subdesc">Galerias para portfolio, produtos e destaque institucional com loading e descricao por imagem quando aplicavel.</p>

      <div class="cdw-fw-docs-example">
        <div class="cdw-fw-docs-example-head">
          <div class="cdw-fw-docs-example-title">Portfolio institucional</div>
          <div class="cdw-fw-docs-badge">Real</div>
        </div>
        <div class="cdw-fw-docs-preview">
          <div class="cdw-gallery cdw-gallery--highlight cdw-fw-accent-obsidian" data-cdw-gallery data-cdw-gallery-focus="clean">
            <div class="cdw-gallery__list">
              <div class="cdw-gallery__item cdw-gallery__item--hero"><div class="cdw-gallery__media cdw-gallery__media--wide"><span class="cdw-gallery__label">Image 01</span></div></div>
              <div class="cdw-gallery__item"><div class="cdw-gallery__media cdw-gallery__media--square"><span class="cdw-gallery__label">Image 02</span></div></div>
              <div class="cdw-gallery__item"><div class="cdw-gallery__media cdw-gallery__media--portrait"><span class="cdw-gallery__label">Image 03</span></div></div>
              <div class="cdw-gallery__item"><div class="cdw-gallery__media cdw-gallery__media--landscape"><span class="cdw-gallery__label">Image 04</span></div></div>
            </div>
          </div>
        </div>
        <div class="cdw-fw-docs-codeblock">
          <div class="cdw-fw-docs-code-head">
            <div class="cdw-fw-docs-code-title">HTML</div>
            <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
          </div>
          <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-gallery cdw-gallery--highlight cdw-fw-accent-obsidian" data-cdw-gallery data-cdw-gallery-focus="clean"&gt;
  &lt;div class="cdw-gallery__list"&gt;
    &lt;div class="cdw-gallery__item cdw-gallery__item--hero"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--wide"&gt;&lt;span class="cdw-gallery__label"&gt;Image 01&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
    &lt;div class="cdw-gallery__item"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--square"&gt;&lt;span class="cdw-gallery__label"&gt;Image 02&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
    &lt;div class="cdw-gallery__item"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--portrait"&gt;&lt;span class="cdw-gallery__label"&gt;Image 03&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
    &lt;div class="cdw-gallery__item"&gt;&lt;div class="cdw-gallery__media cdw-gallery__media--landscape"&gt;&lt;span class="cdw-gallery__label"&gt;Image 04&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>
      </div>
      </section>
    `,
    modal: `<section id="modal" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
    <div class="cdw-fw-docs-section-head">
      <h2 class="cdw-fw-docs-section-title">Modal</h2>
      <p class="cdw-fw-docs-lead">Camadas premium para decisoes, formul&aacute;rios e fluxos cr&iacute;ticos com identidade CDWeb.</p>
    </div>

    <div class="cdw-fw-docs-toc">
      <a href="#modal-conceito">Conceito</a>
      <a href="#modal-estrutura">Estrutura</a>
      <a href="#modal-tamanhos">Tamanhos</a>
      <a href="#modal-modelos">Modelos</a>
      <a href="#modal-exemplos">Exemplos visuais</a>
    </div>

    <div class="cdw-fw-docs-subsection" id="modal-conceito" data-cdw-fw-docs-section>
      <h3 class="cdw-fw-docs-subtitle">Conceito</h3>
      <p class="cdw-fw-docs-subdesc">
        Modais CDWeb abrem por data-attribute e entregam hierarquia visual clara, com anima&ccedil;&otilde;es suaves e foco no conte&uacute;do.
      </p>
      <div class="cdw-fw-docs-classlist">
        <span>cdw-modal</span>
        <span>cdw-modal__dialog</span>
        <span>cdw-modal__header</span>
        <span>cdw-modal__body</span>
        <span>cdw-modal__footer</span>
        <span>data-cdw-modal</span>
        <span>data-cdw-modal-open</span>
        <span>data-cdw-modal-close</span>
      </div>
    </div>

    <div class="cdw-fw-docs-subsection" id="modal-estrutura" data-cdw-fw-docs-section>
      <h3 class="cdw-fw-docs-subtitle">Estrutura</h3>
      <div class="cdw-fw-docs-example">
        <div class="cdw-fw-docs-example-head">
          <div class="cdw-fw-docs-example-title">Estrutura base</div>
          <div class="cdw-fw-docs-badge">Base</div>
        </div>
        <div class="cdw-fw-docs-preview">
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded cdw-fw-accent-ocean" data-cdw-modal-open="#modal-base">Abrir modal</button>
        </div>
        <div class="cdw-fw-docs-codeblock">
          <div class="cdw-fw-docs-code-head">
            <div class="cdw-fw-docs-code-title">HTML</div>
            <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
          </div>
          <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded cdw-fw-accent-ocean" data-cdw-modal-open="#modal-base"&gt;Abrir modal&lt;/button&gt;

&lt;div class="cdw-modal cdw-modal--frame cdw-modal--md cdw-fw-accent-ocean" id="modal-base" data-cdw-modal data-close-overlay="true"&gt;
  &lt;div class="cdw-modal__backdrop" data-cdw-modal-close&gt;&lt;/div&gt;
  &lt;div class="cdw-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-base-title"&gt;
    &lt;button class="cdw-modal__close" type="button" data-cdw-modal-close aria-label="Fechar"&gt;&lt;/button&gt;
    &lt;div class="cdw-modal__header"&gt;
      &lt;h3 class="cdw-modal__title" id="modal-base-title"&gt;Titulo do modal&lt;/h3&gt;
      &lt;div class="cdw-modal__subtitle"&gt;Texto de apoio para orientar a decisao.&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-modal__body"&gt;Conteudo principal do modal.&lt;/div&gt;
    &lt;div class="cdw-modal__footer"&gt;
      &lt;div class="cdw-modal__actions"&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded" data-cdw-modal-close&gt;Cancelar&lt;/button&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Confirmar&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>
    </div>

    <div class="cdw-fw-docs-subsection" id="modal-tamanhos" data-cdw-fw-docs-section>
      <h3 class="cdw-fw-docs-subtitle">Tamanhos</h3>
      <div class="cdw-fw-docs-example">
        <div class="cdw-fw-docs-example-head">
          <div class="cdw-fw-docs-example-title">sm / md / lg / xl</div>
          <div class="cdw-fw-docs-badge">Tamanho</div>
        </div>
        <div class="cdw-fw-docs-preview">
          <div class="cdw-fw-row cdw-fw-gap-3">
            <div class="cdw-fw-col-12 cdw-fw-col-md-6 cdw-fw-col-lg-3">
              <div class="cdw-modal cdw-modal--card cdw-modal--sm cdw-fw-accent-sky is-open" style="position:relative; inset:auto; display:flex; height:240px; padding:12px;">
                <div class="cdw-modal__backdrop" style="background:transparent;"></div>
                <div class="cdw-modal__dialog">
                  <div class="cdw-modal__header"><div class="cdw-modal__title">sm</div></div>
                  <div class="cdw-modal__body">Compacto e direto.</div>
                </div>
              </div>
            </div>
            <div class="cdw-fw-col-12 cdw-fw-col-md-6 cdw-fw-col-lg-3">
              <div class="cdw-modal cdw-modal--card cdw-modal--md cdw-fw-accent-mint is-open" style="position:relative; inset:auto; display:flex; height:240px; padding:12px;">
                <div class="cdw-modal__backdrop" style="background:transparent;"></div>
                <div class="cdw-modal__dialog">
                  <div class="cdw-modal__header"><div class="cdw-modal__title">md</div></div>
                  <div class="cdw-modal__body">Equilibrado.</div>
                </div>
              </div>
            </div>
            <div class="cdw-fw-col-12 cdw-fw-col-md-6 cdw-fw-col-lg-3">
              <div class="cdw-modal cdw-modal--card cdw-modal--lg cdw-fw-accent-amber is-open" style="position:relative; inset:auto; display:flex; height:240px; padding:12px;">
                <div class="cdw-modal__backdrop" style="background:transparent;"></div>
                <div class="cdw-modal__dialog">
                  <div class="cdw-modal__header"><div class="cdw-modal__title">lg</div></div>
                  <div class="cdw-modal__body">Conteudo amplo.</div>
                </div>
              </div>
            </div>
            <div class="cdw-fw-col-12 cdw-fw-col-md-6 cdw-fw-col-lg-3">
              <div class="cdw-modal cdw-modal--card cdw-modal--xl cdw-fw-accent-graphite is-open" style="position:relative; inset:auto; display:flex; height:240px; padding:12px;">
                <div class="cdw-modal__backdrop" style="background:transparent;"></div>
                <div class="cdw-modal__dialog">
                  <div class="cdw-modal__header"><div class="cdw-modal__title">xl</div></div>
                  <div class="cdw-modal__body">Para decis&otilde;es complexas.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cdw-fw-docs-codeblock">
          <div class="cdw-fw-docs-code-head">
            <div class="cdw-fw-docs-code-title">HTML</div>
            <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
          </div>
          <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-modal cdw-modal--card cdw-modal--sm cdw-fw-accent-sky" data-cdw-modal&gt;...&lt;/div&gt;
&lt;div class="cdw-modal cdw-modal--card cdw-modal--md cdw-fw-accent-mint" data-cdw-modal&gt;...&lt;/div&gt;
&lt;div class="cdw-modal cdw-modal--card cdw-modal--lg cdw-fw-accent-amber" data-cdw-modal&gt;...&lt;/div&gt;
&lt;div class="cdw-modal cdw-modal--card cdw-modal--xl cdw-fw-accent-graphite" data-cdw-modal&gt;...&lt;/div&gt;</code></pre>
        </div>
      </div>
    </div>

    <div class="cdw-fw-docs-subsection" id="modal-modelos" data-cdw-fw-docs-section>
      <h3 class="cdw-fw-docs-subtitle">Modelos</h3>
      <div class="cdw-fw-docs-example">
        <div class="cdw-fw-docs-example-head">
          <div class="cdw-fw-docs-example-title">Modal Frame</div>
          <div class="cdw-fw-docs-badge">Frame</div>
        </div>
        <div class="cdw-fw-docs-preview">
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded cdw-fw-accent-ocean" data-cdw-modal-open="#modal-frame">Abrir Frame</button>
        </div>
        <div class="cdw-fw-docs-codeblock">
          <div class="cdw-fw-docs-code-head">
            <div class="cdw-fw-docs-code-title">HTML</div>
            <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
          </div>
          <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded cdw-fw-accent-ocean" data-cdw-modal-open="#modal-frame"&gt;Abrir Frame&lt;/button&gt;

&lt;div class="cdw-modal cdw-modal--frame cdw-modal--md cdw-fw-accent-ocean" id="modal-frame" data-cdw-modal data-close-overlay="true"&gt;
  &lt;div class="cdw-modal__backdrop" data-cdw-modal-close&gt;&lt;/div&gt;
  &lt;div class="cdw-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-frame-title"&gt;
    &lt;button class="cdw-modal__close" type="button" data-cdw-modal-close aria-label="Fechar"&gt;&lt;/button&gt;
    &lt;div class="cdw-modal__header"&gt;
      &lt;h3 class="cdw-modal__title" id="modal-frame-title"&gt;Relatorio executivo&lt;/h3&gt;
      &lt;div class="cdw-modal__subtitle"&gt;Painel premium com moldura integrada.&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-modal__body"&gt;Conteudo com leitura clara e contraste equilibrado.&lt;/div&gt;
    &lt;div class="cdw-modal__footer"&gt;
      &lt;div class="cdw-modal__actions"&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded" data-cdw-modal-close&gt;Fechar&lt;/button&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Prosseguir&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <div class="cdw-fw-docs-example">
        <div class="cdw-fw-docs-example-head">
          <div class="cdw-fw-docs-example-title">Modal Focus</div>
          <div class="cdw-fw-docs-badge">Focus</div>
        </div>
        <div class="cdw-fw-docs-preview">
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded cdw-fw-accent-obsidian" data-cdw-modal-open="#modal-focus">Abrir Focus</button>
        </div>
        <div class="cdw-fw-docs-codeblock">
          <div class="cdw-fw-docs-code-head">
            <div class="cdw-fw-docs-code-title">HTML</div>
            <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
          </div>
          <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded cdw-fw-accent-obsidian" data-cdw-modal-open="#modal-focus"&gt;Abrir Focus&lt;/button&gt;

&lt;div class="cdw-modal cdw-modal--focus cdw-modal--md cdw-fw-accent-obsidian" id="modal-focus" data-cdw-modal data-close-overlay="true"&gt;
  &lt;div class="cdw-modal__backdrop" data-cdw-modal-close&gt;&lt;/div&gt;
  &lt;div class="cdw-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-focus-title"&gt;
    &lt;button class="cdw-modal__close" type="button" data-cdw-modal-close aria-label="Fechar"&gt;&lt;/button&gt;
    &lt;div class="cdw-modal__body"&gt;
      &lt;h3 class="cdw-modal__title" id="modal-focus-title"&gt;Ajuste critico&lt;/h3&gt;
      &lt;div class="cdw-modal__subtitle"&gt;Leitura direta para uma decisao importante.&lt;/div&gt;
      &lt;div style="margin-top:14px;"&gt;Confirme a acao para manter a consistencia do ambiente.&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-modal__footer"&gt;
      &lt;div class="cdw-modal__actions"&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded" data-cdw-modal-close&gt;Cancelar&lt;/button&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Confirmar&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <div class="cdw-fw-docs-example">
        <div class="cdw-fw-docs-example-head">
          <div class="cdw-fw-docs-example-title">Modal Action</div>
          <div class="cdw-fw-docs-badge">Action</div>
        </div>
        <div class="cdw-fw-docs-preview">
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded cdw-fw-accent-cocoa" data-cdw-modal-open="#modal-action">Abrir Action</button>
        </div>
        <div class="cdw-fw-docs-codeblock">
          <div class="cdw-fw-docs-code-head">
            <div class="cdw-fw-docs-code-title">HTML</div>
            <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
          </div>
          <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded cdw-fw-accent-cocoa" data-cdw-modal-open="#modal-action"&gt;Abrir Action&lt;/button&gt;

&lt;div class="cdw-modal cdw-modal--action cdw-modal--md cdw-fw-accent-cocoa" id="modal-action" data-cdw-modal data-close-overlay="true"&gt;
  &lt;div class="cdw-modal__backdrop" data-cdw-modal-close&gt;&lt;/div&gt;
  &lt;div class="cdw-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-action-title"&gt;
    &lt;button class="cdw-modal__close" type="button" data-cdw-modal-close aria-label="Fechar"&gt;&lt;/button&gt;
    &lt;div class="cdw-modal__header"&gt;
      &lt;h3 class="cdw-modal__title" id="modal-action-title"&gt;Confirmacao de fluxo&lt;/h3&gt;
      &lt;div class="cdw-modal__subtitle"&gt;Acao critica com prioridade alta.&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-modal__body"&gt;Validar os dados antes de prosseguir evita perda de informacao.&lt;/div&gt;
    &lt;div class="cdw-modal__footer"&gt;
      &lt;div class="cdw-modal__actions"&gt;
          &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded cdw-fw-accent-cocoa" data-cdw-modal-close&gt;Revisar&lt;/button&gt;
          &lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded cdw-fw-accent-cocoa"&gt;Confirmar&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <div class="cdw-fw-docs-example">
        <div class="cdw-fw-docs-example-head">
          <div class="cdw-fw-docs-example-title">Modal Split</div>
          <div class="cdw-fw-docs-badge">Split</div>
        </div>
        <div class="cdw-fw-docs-preview">
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded cdw-fw-accent-sky" data-cdw-modal-open="#modal-split">Abrir Split</button>
        </div>
        <div class="cdw-fw-docs-codeblock">
          <div class="cdw-fw-docs-code-head">
            <div class="cdw-fw-docs-code-title">HTML</div>
            <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
          </div>
          <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded cdw-fw-accent-sky" data-cdw-modal-open="#modal-split"&gt;Abrir Split&lt;/button&gt;

&lt;div class="cdw-modal cdw-modal--split cdw-modal--lg cdw-fw-accent-sky" id="modal-split" data-cdw-modal data-close-overlay="true"&gt;
  &lt;div class="cdw-modal__backdrop" data-cdw-modal-close&gt;&lt;/div&gt;
  &lt;div class="cdw-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-split-title"&gt;
    &lt;button class="cdw-modal__close" type="button" data-cdw-modal-close aria-label="Fechar"&gt;&lt;/button&gt;
    &lt;div class="cdw-modal__panel"&gt;
      &lt;div class="cdw-modal__panel-title"&gt;Contexto&lt;/div&gt;
      &lt;div style="margin-top:10px;"&gt;Dados auxiliares para apoiar a decisao.&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-modal__content"&gt;
      &lt;div class="cdw-modal__header"&gt;
        &lt;h3 class="cdw-modal__title" id="modal-split-title"&gt;Fluxo comparativo&lt;/h3&gt;
        &lt;div class="cdw-modal__subtitle"&gt;Preencha os campos com cuidado.&lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="cdw-modal__body"&gt;Area principal para formul&aacute;rio ou comparacao.&lt;/div&gt;
      &lt;div class="cdw-modal__footer"&gt;
        &lt;div class="cdw-modal__actions"&gt;
          &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded" data-cdw-modal-close&gt;Cancelar&lt;/button&gt;
          &lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Salvar&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <div class="cdw-fw-docs-example">
        <div class="cdw-fw-docs-example-head">
          <div class="cdw-fw-docs-example-title">Modal Card</div>
          <div class="cdw-fw-docs-badge">Card</div>
        </div>
        <div class="cdw-fw-docs-preview">
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded cdw-fw-accent-graphite" data-cdw-modal-open="#modal-card">Abrir Card</button>
        </div>
        <div class="cdw-fw-docs-codeblock">
          <div class="cdw-fw-docs-code-head">
            <div class="cdw-fw-docs-code-title">HTML</div>
            <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
          </div>
          <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded cdw-fw-accent-graphite" data-cdw-modal-open="#modal-card"&gt;Abrir Card&lt;/button&gt;

&lt;div class="cdw-modal cdw-modal--card cdw-modal--sm cdw-fw-accent-graphite" id="modal-card" data-cdw-modal data-close-overlay="true"&gt;
  &lt;div class="cdw-modal__backdrop" data-cdw-modal-close&gt;&lt;/div&gt;
  &lt;div class="cdw-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-card-title"&gt;
    &lt;button class="cdw-modal__close" type="button" data-cdw-modal-close aria-label="Fechar"&gt;&lt;/button&gt;
    &lt;div class="cdw-modal__header"&gt;
      &lt;h3 class="cdw-modal__title" id="modal-card-title"&gt;Status rapido&lt;/h3&gt;
    &lt;/div&gt;
    &lt;div class="cdw-modal__body"&gt;Atualizacao concluida com sucesso.&lt;/div&gt;
    &lt;div class="cdw-modal__footer"&gt;
      &lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Ok&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <div class="cdw-fw-docs-example">
        <div class="cdw-fw-docs-example-head">
          <div class="cdw-fw-docs-example-title">Modal Prime</div>
          <div class="cdw-fw-docs-badge">Prime</div>
        </div>
        <div class="cdw-fw-docs-preview">
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded cdw-fw-accent-rose" data-cdw-modal-open="#modal-prime">Abrir Prime</button>
        </div>
        <div class="cdw-fw-docs-codeblock">
          <div class="cdw-fw-docs-code-head">
            <div class="cdw-fw-docs-code-title">HTML</div>
            <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
          </div>
          <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded cdw-fw-accent-rose" data-cdw-modal-open="#modal-prime"&gt;Abrir Prime&lt;/button&gt;

&lt;div class="cdw-modal cdw-modal--prime cdw-modal--lg cdw-fw-accent-rose" id="modal-prime" data-cdw-modal data-close-overlay="true"&gt;
  &lt;div class="cdw-modal__backdrop" data-cdw-modal-close&gt;&lt;/div&gt;
  &lt;div class="cdw-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-prime-title"&gt;
    &lt;button class="cdw-modal__close" type="button" data-cdw-modal-close aria-label="Fechar"&gt;&lt;/button&gt;
    &lt;div class="cdw-modal__header"&gt;
      &lt;h3 class="cdw-modal__title" id="modal-prime-title"&gt;Plano executivo&lt;/h3&gt;
      &lt;div class="cdw-modal__subtitle"&gt;Apresentacao com foco em valor percebido.&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-modal__body"&gt;Camada premium para destacar planos e condicoes especiais.&lt;/div&gt;
    &lt;div class="cdw-modal__footer"&gt;
      &lt;div class="cdw-modal__actions"&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded" data-cdw-modal-close&gt;Voltar&lt;/button&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Escolher&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>
    </div>

    <div class="cdw-fw-docs-subsection" id="modal-exemplos" data-cdw-fw-docs-section>
      <h3 class="cdw-fw-docs-subtitle">Exemplos visuais</h3>
      <div class="cdw-fw-docs-example">
        <div class="cdw-fw-docs-example-head">
          <div class="cdw-fw-docs-example-title">Modal Frame</div>
          <div class="cdw-fw-docs-badge">Preview</div>
        </div>
        <div class="cdw-fw-docs-preview">
          <div class="cdw-modal cdw-modal--frame cdw-modal--md cdw-fw-accent-ocean is-open" style="position:relative; inset:auto; display:flex; height:360px;">
            <div class="cdw-modal__backdrop" style="background:rgba(15,23,42,0.08);"></div>
            <div class="cdw-modal__dialog">
              <div class="cdw-modal__header">
                <div class="cdw-modal__title">Frame premium</div>
                <div class="cdw-modal__subtitle">Moldura integrada e leitura limpa.</div>
              </div>
              <div class="cdw-modal__body">Conteudo central com borda sutil e destaque elegante.</div>
              <div class="cdw-modal__footer">
                <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Cancelar</button>
                <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Ativar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="cdw-fw-docs-example">
        <div class="cdw-fw-docs-example-head">
          <div class="cdw-fw-docs-example-title">Modal Split</div>
          <div class="cdw-fw-docs-badge">Preview</div>
        </div>
        <div class="cdw-fw-docs-preview">
          <div class="cdw-modal cdw-modal--split cdw-modal--lg cdw-fw-accent-sky is-open" style="position:relative; inset:auto; display:flex; height:360px;">
            <div class="cdw-modal__backdrop" style="background:rgba(15,23,42,0.08);"></div>
            <div class="cdw-modal__dialog">
              <div class="cdw-modal__panel">
                <div class="cdw-modal__panel-title">Resumo</div>
                <div style="margin-top:8px;">Indicadores para apoiar a escolha.</div>
              </div>
              <div class="cdw-modal__content">
                <div class="cdw-modal__header">
                  <div class="cdw-modal__title">Comparativo</div>
                  <div class="cdw-modal__subtitle">Decisao orientada por contexto.</div>
                </div>
                <div class="cdw-modal__body">Area principal para formularios e comparacoes tecnicas.</div>
                <div class="cdw-modal__footer">
                  <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Voltar</button>
                  <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Continuar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div class="cdw-modal cdw-modal--frame cdw-modal--md cdw-fw-accent-ocean" id="modal-base" data-cdw-modal data-close-overlay="true">
        <div class="cdw-modal__backdrop" data-cdw-modal-close></div>
        <div class="cdw-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-base-title">
          <button class="cdw-modal__close" type="button" data-cdw-modal-close aria-label="Fechar"></button>
          <div class="cdw-modal__header">
            <h3 class="cdw-modal__title" id="modal-base-title">Titulo do modal</h3>
            <div class="cdw-modal__subtitle">Texto de apoio para orientar a decisao.</div>
          </div>
          <div class="cdw-modal__body">Conteudo principal do modal.</div>
          <div class="cdw-modal__footer">
            <div class="cdw-modal__actions">
              <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded" data-cdw-modal-close>Cancelar</button>
              <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Confirmar</button>
            </div>
          </div>
        </div>
      </div>

      <div class="cdw-modal cdw-modal--frame cdw-modal--md cdw-fw-accent-ocean" id="modal-frame" data-cdw-modal data-close-overlay="true">
        <div class="cdw-modal__backdrop" data-cdw-modal-close></div>
        <div class="cdw-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-frame-title">
          <button class="cdw-modal__close" type="button" data-cdw-modal-close aria-label="Fechar"></button>
          <div class="cdw-modal__header">
            <h3 class="cdw-modal__title" id="modal-frame-title">Relatorio executivo</h3>
            <div class="cdw-modal__subtitle">Painel premium com moldura integrada.</div>
          </div>
          <div class="cdw-modal__body">Conteudo com leitura clara e contraste equilibrado.</div>
          <div class="cdw-modal__footer">
            <div class="cdw-modal__actions">
              <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded" data-cdw-modal-close>Fechar</button>
              <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Prosseguir</button>
            </div>
          </div>
        </div>
      </div>

      <div class="cdw-modal cdw-modal--focus cdw-modal--md cdw-fw-accent-obsidian" id="modal-focus" data-cdw-modal data-close-overlay="true">
        <div class="cdw-modal__backdrop" data-cdw-modal-close></div>
        <div class="cdw-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-focus-title">
          <button class="cdw-modal__close" type="button" data-cdw-modal-close aria-label="Fechar"></button>
          <div class="cdw-modal__body">
            <h3 class="cdw-modal__title" id="modal-focus-title">Ajuste critico</h3>
            <div class="cdw-modal__subtitle">Leitura direta para uma decisao importante.</div>
            <div style="margin-top:14px;">Confirme a acao para manter a consistencia do ambiente.</div>
          </div>
          <div class="cdw-modal__footer">
            <div class="cdw-modal__actions">
              <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded" data-cdw-modal-close>Cancelar</button>
              <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Confirmar</button>
            </div>
          </div>
        </div>
      </div>

      <div class="cdw-modal cdw-modal--action cdw-modal--md cdw-fw-accent-cocoa" id="modal-action" data-cdw-modal data-close-overlay="true">
        <div class="cdw-modal__backdrop" data-cdw-modal-close></div>
        <div class="cdw-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-action-title">
          <button class="cdw-modal__close" type="button" data-cdw-modal-close aria-label="Fechar"></button>
          <div class="cdw-modal__header">
            <h3 class="cdw-modal__title" id="modal-action-title">Confirmacao de fluxo</h3>
            <div class="cdw-modal__subtitle">Acao critica com prioridade alta.</div>
          </div>
          <div class="cdw-modal__body">Validar os dados antes de prosseguir evita perda de informacao.</div>
          <div class="cdw-modal__footer">
            <div class="cdw-modal__actions">
          <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded cdw-fw-accent-cocoa" data-cdw-modal-close>Revisar</button>
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded cdw-fw-accent-cocoa">Confirmar</button>
            </div>
          </div>
        </div>
      </div>

      <div class="cdw-modal cdw-modal--split cdw-modal--lg cdw-fw-accent-sky" id="modal-split" data-cdw-modal data-close-overlay="true">
        <div class="cdw-modal__backdrop" data-cdw-modal-close></div>
        <div class="cdw-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-split-title">
          <button class="cdw-modal__close" type="button" data-cdw-modal-close aria-label="Fechar"></button>
          <div class="cdw-modal__panel">
            <div class="cdw-modal__panel-title">Contexto</div>
            <div style="margin-top:10px;">Dados auxiliares para apoiar a decisao.</div>
          </div>
          <div class="cdw-modal__content">
            <div class="cdw-modal__header">
              <h3 class="cdw-modal__title" id="modal-split-title">Fluxo comparativo</h3>
              <div class="cdw-modal__subtitle">Preencha os campos com cuidado.</div>
            </div>
            <div class="cdw-modal__body">Area principal para formulario ou comparacao.</div>
            <div class="cdw-modal__footer">
              <div class="cdw-modal__actions">
                <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded" data-cdw-modal-close>Cancelar</button>
                <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Salvar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="cdw-modal cdw-modal--card cdw-modal--sm cdw-fw-accent-graphite" id="modal-card" data-cdw-modal data-close-overlay="true">
        <div class="cdw-modal__backdrop" data-cdw-modal-close></div>
        <div class="cdw-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-card-title">
          <button class="cdw-modal__close" type="button" data-cdw-modal-close aria-label="Fechar"></button>
          <div class="cdw-modal__header">
            <h3 class="cdw-modal__title" id="modal-card-title">Status rapido</h3>
          </div>
          <div class="cdw-modal__body">Atualizacao concluida com sucesso.</div>
          <div class="cdw-modal__footer">
            <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Ok</button>
          </div>
        </div>
      </div>

      <div class="cdw-modal cdw-modal--prime cdw-modal--lg cdw-fw-accent-rose" id="modal-prime" data-cdw-modal data-close-overlay="true">
        <div class="cdw-modal__backdrop" data-cdw-modal-close></div>
        <div class="cdw-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-prime-title">
          <button class="cdw-modal__close" type="button" data-cdw-modal-close aria-label="Fechar"></button>
          <div class="cdw-modal__header">
            <h3 class="cdw-modal__title" id="modal-prime-title">Plano executivo</h3>
            <div class="cdw-modal__subtitle">Apresentacao com foco em valor percebido.</div>
          </div>
          <div class="cdw-modal__body">Camada premium para destacar planos e condicoes especiais.</div>
          <div class="cdw-modal__footer">
            <div class="cdw-modal__actions">
              <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded" data-cdw-modal-close>Voltar</button>
              <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Escolher</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    `,
  tooltip: `<section id="tooltip" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Tooltip</h2>
    <p class="cdw-fw-docs-lead">
      Tooltips premium para refor&ccedil;ar contexto com eleg&acirc;ncia e clareza.
    </p>
  </div>

  <div class="cdw-fw-docs-toc">
    <span class="cdw-fw-docs-toc-title">&Iacute;ndice desta p&aacute;gina</span>
    <a href="#tooltip-conceito">Conceito</a>
    <a href="#tooltip-modelos">Modelos</a>
    <a href="#tooltip-posicionamento">Posicionamento</a>
    <a href="#tooltip-cores">Cores</a>
    <a href="#tooltip-exemplos">Exemplos</a>
  </div>

  <div class="cdw-fw-docs-subsection" id="tooltip-conceito" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Conceito</h3>
    <p class="cdw-fw-docs-subdesc">
      Use <code>data-cdw-tooltip</code> para o texto b&aacute;sico e complemente com t&iacute;tulo ou metadados quando precisar.
      <span class="cdw-fw-docs-when">Quando usar: instru&ccedil;&otilde;es curtas, avisos e refor&ccedil;o de contexto.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>data-cdw-tooltip</span>
      <span>data-tooltip-model</span>
      <span>data-tooltip-placement</span>
      <span>data-tooltip-trigger</span>
      <span>data-tooltip-title</span>
      <span>data-tooltip-text</span>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="tooltip-modelos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Modelos</h3>
    <p class="cdw-fw-docs-subdesc">
      Seis estilos com identidade pr&oacute;pria para diferentes tons de interface.
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Classic, Soft, Solid, Float, Card e Prime</div>
        <div class="cdw-fw-docs-badge">Modelos</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-docs-btn-row">
          <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded cdw-fw-accent-graphite" data-cdw-tooltip="Tooltip Classic" data-tooltip-model="classic">Classic</button>
          <button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--rounded cdw-fw-accent-sky" data-cdw-tooltip="Tooltip Soft" data-tooltip-model="soft">Soft</button>
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded cdw-fw-accent-ocean" data-cdw-tooltip="Tooltip Solid" data-tooltip-model="solid">Solid</button>
          <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded cdw-fw-accent-forest" data-cdw-tooltip="Tooltip Float" data-tooltip-model="float">Float</button>
          <button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--rounded cdw-fw-accent-cocoa" data-cdw-tooltip="Tooltip Card" data-tooltip-model="card" data-tooltip-title="Resumo curto" data-tooltip-text="Texto de apoio elegante.">Card</button>
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded cdw-fw-accent-carbon" data-cdw-tooltip="Tooltip Prime" data-tooltip-model="prime">Prime</button>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded cdw-fw-accent-graphite" data-cdw-tooltip="Tooltip Classic" data-tooltip-model="classic"&gt;Classic&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--rounded cdw-fw-accent-sky" data-cdw-tooltip="Tooltip Soft" data-tooltip-model="soft"&gt;Soft&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded cdw-fw-accent-ocean" data-cdw-tooltip="Tooltip Solid" data-tooltip-model="solid"&gt;Solid&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded cdw-fw-accent-forest" data-cdw-tooltip="Tooltip Float" data-tooltip-model="float"&gt;Float&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--rounded cdw-fw-accent-cocoa" data-cdw-tooltip="Tooltip Card" data-tooltip-model="card" data-tooltip-title="Resumo curto" data-tooltip-text="Texto de apoio elegante."&gt;Card&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded cdw-fw-accent-carbon" data-cdw-tooltip="Tooltip Prime" data-tooltip-model="prime"&gt;Prime&lt;/button&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="tooltip-posicionamento" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Posicionamento</h3>
    <p class="cdw-fw-docs-subdesc">
      Ajuste o posicionamento manualmente ou deixe em auto.
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Top, Right, Bottom e Left</div>
        <div class="cdw-fw-docs-badge">Posi&ccedil;&atilde;o</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-docs-btn-row">
          <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded cdw-fw-accent-indigo" data-cdw-tooltip="Topo alinhado" data-tooltip-placement="top">Top</button>
          <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded cdw-fw-accent-indigo" data-cdw-tooltip="Lado direito" data-tooltip-placement="right">Right</button>
          <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded cdw-fw-accent-indigo" data-cdw-tooltip="Base alinhada" data-tooltip-placement="bottom">Bottom</button>
          <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded cdw-fw-accent-indigo" data-cdw-tooltip="Lado esquerdo" data-tooltip-placement="left">Left</button>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded cdw-fw-accent-indigo" data-cdw-tooltip="Topo alinhado" data-tooltip-placement="top"&gt;Top&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded cdw-fw-accent-indigo" data-cdw-tooltip="Lado direito" data-tooltip-placement="right"&gt;Right&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded cdw-fw-accent-indigo" data-cdw-tooltip="Base alinhada" data-tooltip-placement="bottom"&gt;Bottom&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded cdw-fw-accent-indigo" data-cdw-tooltip="Lado esquerdo" data-tooltip-placement="left"&gt;Left&lt;/button&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="tooltip-cores" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Cores</h3>
    <p class="cdw-fw-docs-subdesc">
      Aplique qualquer cor da paleta CDWeb por meio de <code>data-tooltip-accent</code>.
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Cores em uso</div>
        <div class="cdw-fw-docs-badge">Paleta</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-docs-btn-row">
          <button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--rounded cdw-fw-accent-ocean" data-cdw-tooltip="Ocean" data-tooltip-model="soft" data-tooltip-accent="ocean">Ocean</button>
          <button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--rounded cdw-fw-accent-forest" data-cdw-tooltip="Forest" data-tooltip-model="soft" data-tooltip-accent="forest">Forest</button>
          <button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--rounded cdw-fw-accent-cocoa" data-cdw-tooltip="Cocoa" data-tooltip-model="soft" data-tooltip-accent="cocoa">Cocoa</button>
          <button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--rounded cdw-fw-accent-graphite" data-cdw-tooltip="Graphite" data-tooltip-model="soft" data-tooltip-accent="graphite">Graphite</button>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--rounded cdw-fw-accent-ocean" data-cdw-tooltip="Ocean" data-tooltip-model="soft" data-tooltip-accent="ocean"&gt;Ocean&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--rounded cdw-fw-accent-forest" data-cdw-tooltip="Forest" data-tooltip-model="soft" data-tooltip-accent="forest"&gt;Forest&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--rounded cdw-fw-accent-cocoa" data-cdw-tooltip="Cocoa" data-tooltip-model="soft" data-tooltip-accent="cocoa"&gt;Cocoa&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--rounded cdw-fw-accent-graphite" data-cdw-tooltip="Graphite" data-tooltip-model="soft" data-tooltip-accent="graphite"&gt;Graphite&lt;/button&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="tooltip-exemplos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Exemplos visuais</h3>
    <p class="cdw-fw-docs-subdesc">
      Card e Prime com conte&uacute;do mais rico e acionamento por clique.
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Tooltip com t&iacute;tulo e meta</div>
        <div class="cdw-fw-docs-badge">Premium</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-docs-btn-row">
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded cdw-fw-accent-slate" data-cdw-tooltip="Detalhes do plano" data-tooltip-model="card" data-tooltip-title="Plano Prime" data-tooltip-text="Suporte dedicado e recursos avan&ccedil;ados." data-tooltip-meta="Atualizado hoje">Ver detalhes</button>
          <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded cdw-fw-accent-indigo" data-cdw-tooltip="Clique para ver" data-tooltip-model="prime" data-tooltip-trigger="click" data-tooltip-title="A&ccedil;&atilde;o assistida" data-tooltip-text="Ideal para treinar o usu&aacute;rio." data-tooltip-meta="Clique novamente para fechar">Click tooltip</button>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded cdw-fw-accent-slate" data-cdw-tooltip="Detalhes do plano" data-tooltip-model="card" data-tooltip-title="Plano Prime" data-tooltip-text="Suporte dedicado e recursos avancados." data-tooltip-meta="Atualizado hoje"&gt;Ver detalhes&lt;/button&gt;
&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded cdw-fw-accent-indigo" data-cdw-tooltip="Clique para ver" data-tooltip-model="prime" data-tooltip-trigger="click" data-tooltip-title="Acao assistida" data-tooltip-text="Ideal para treinar o usuario." data-tooltip-meta="Clique novamente para fechar"&gt;Click tooltip&lt;/button&gt;</code></pre>
      </div>
    </div>
  </div>
</section>

`,
  stage: `<section id="stage" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Stage</h2>
    <p class="cdw-fw-docs-lead">Sequencias visuais premium para destaques, apresentacoes e dashboards sem depender de JS manual.</p>
  </div>

  <div class="cdw-fw-docs-subsection" id="stage-conceito" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Conceito</h3>
    <p class="cdw-fw-docs-subdesc">Stage e um componente de apresentacao sequencial para banners, destaques e fluxos de informacao, com identidade CDWeb e auto-init por data-attributes.</p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-stage</span>
      <span>cdw-stage-track</span>
      <span>cdw-stage-slide</span>
      <span>data-cdw-stage</span>
      <span>data-autoplay</span>
      <span>data-interval</span>
      <span>data-loop</span>
      <span>data-pause-on-hover</span>
      <span>data-swipe</span>
      <span>data-keyboard</span>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="stage-estrutura" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Estrutura</h3>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Estrutura base</div>
        <div class="cdw-fw-docs-badge">Base</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-stage cdw-stage--hero cdw-fw-accent-ocean" data-cdw-stage data-autoplay="6200"><div class="cdw-stage-track"><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Destaque</div><h3 class="cdw-stage__title">Titulo do slide</h3><p class="cdw-stage__text">Texto de apoio para o conteudo.</p><div class="cdw-stage__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Acao</button></div></article></div>
  <div class="cdw-stage-nav">
    <button class="cdw-stage-control" type="button" data-cdw-stage-prev aria-label="Slide anterior">Anterior</button>
    <button class="cdw-stage-indicator" type="button" data-cdw-stage-go="0" aria-label="Ir para o slide 1" aria-current="true"></button>
    <button class="cdw-stage-control" type="button" data-cdw-stage-next aria-label="Proximo slide">Proximo</button>
    
  </div></div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-stage cdw-stage--hero cdw-fw-accent-ocean" data-cdw-stage data-autoplay="6200"&gt;&lt;div class="cdw-stage-track"&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Destaque&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Titulo do slide&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Texto de apoio para o conteudo.&lt;/p&gt;&lt;div class="cdw-stage__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Acao&lt;/button&gt;&lt;/div&gt;&lt;/article&gt;&lt;/div&gt;
  &lt;div class="cdw-stage-nav"&gt;
    &lt;button class="cdw-stage-control" type="button" data-cdw-stage-prev aria-label="Slide anterior"&gt;Anterior&lt;/button&gt;
    &lt;button class="cdw-stage-indicator" type="button" data-cdw-stage-go="0" aria-label="Ir para o slide 1" aria-current="true"&gt;&lt;/button&gt;
    &lt;button class="cdw-stage-control" type="button" data-cdw-stage-next aria-label="Proximo slide"&gt;Proximo&lt;/button&gt;
    
  &lt;/div&gt;&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="stage-modelos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Modelos</h3>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Stage Hero</div>
        <div class="cdw-fw-docs-badge">Impacto</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-stage cdw-stage--hero cdw-fw-accent-ocean" data-cdw-stage data-autoplay="6200"><div class="cdw-stage-track"><article class="cdw-stage-slide" style="background-image: linear-gradient(180deg, rgba(255,255,255,0.82), rgba(245,248,252,0.7)), url('https://picsum.photos/seed/stage-hero-1/1280/720'); background-size: cover; background-position: center; padding: 28px 28px calc(28px + var(--cdw-stage-nav-space));"><div class="cdw-stage__eyebrow">Lancamento</div><h3 class="cdw-stage__title">Portal CDWeb Intelligence</h3><p class="cdw-stage__text">Camadas visuais elegantes para apresentar novas experiencias digitais.</p><div class="cdw-stage__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Comecar</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Visao geral</button></div></article><article class="cdw-stage-slide" style="background-image: linear-gradient(180deg, rgba(255,255,255,0.82), rgba(245,248,252,0.7)), url('https://picsum.photos/seed/stage-hero-2/1280/720'); background-size: cover; background-position: center; padding: 28px 28px calc(28px + var(--cdw-stage-nav-space));"><div class="cdw-stage__eyebrow">Atualizacao</div><h3 class="cdw-stage__title">Dashboards com clareza</h3><p class="cdw-stage__text">Fluxos controlados, tipografia firme e foco total no conteudo.</p><div class="cdw-stage__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Explorar</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Documentacao</button></div></article></div>
  <div class="cdw-stage-nav">
    <button class="cdw-stage-control" type="button" data-cdw-stage-prev aria-label="Slide anterior">Anterior</button>
    <button class="cdw-stage-indicator" type="button" data-cdw-stage-go="0" aria-label="Ir para o slide 1" aria-current="true"></button><button class="cdw-stage-indicator" type="button" data-cdw-stage-go="1" aria-label="Ir para o slide 2"></button>
    <button class="cdw-stage-control" type="button" data-cdw-stage-next aria-label="Proximo slide">Proximo</button>
    <div class="cdw-stage-counter" data-cdw-stage-counter>1/2</div>
  </div><div class="cdw-stage-progress"><span data-cdw-stage-progress></span></div></div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-stage cdw-stage--hero cdw-fw-accent-ocean" data-cdw-stage data-autoplay="6200"&gt;&lt;div class="cdw-stage-track"&gt;&lt;article class="cdw-stage-slide" style="background-image: linear-gradient(180deg, rgba(255,255,255,0.82), rgba(245,248,252,0.7)), url('https://picsum.photos/seed/stage-hero-1/1280/720'); background-size: cover; background-position: center; padding: 28px 28px calc(28px + var(--cdw-stage-nav-space));"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Lancamento&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Portal CDWeb Intelligence&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Camadas visuais elegantes para apresentar novas experiencias digitais.&lt;/p&gt;&lt;div class="cdw-stage__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Comecar&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Visao geral&lt;/button&gt;&lt;/div&gt;&lt;/article&gt;&lt;article class="cdw-stage-slide" style="background-image: linear-gradient(180deg, rgba(255,255,255,0.82), rgba(245,248,252,0.7)), url('https://picsum.photos/seed/stage-hero-2/1280/720'); background-size: cover; background-position: center; padding: 28px 28px calc(28px + var(--cdw-stage-nav-space));"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Atualizacao&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Dashboards com clareza&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Fluxos controlados, tipografia firme e foco total no conteudo.&lt;/p&gt;&lt;div class="cdw-stage__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Explorar&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Documentacao&lt;/button&gt;&lt;/div&gt;&lt;/article&gt;&lt;/div&gt;
  &lt;div class="cdw-stage-nav"&gt;
    &lt;button class="cdw-stage-control" type="button" data-cdw-stage-prev aria-label="Slide anterior"&gt;Anterior&lt;/button&gt;
    &lt;button class="cdw-stage-indicator" type="button" data-cdw-stage-go="0" aria-label="Ir para o slide 1" aria-current="true"&gt;&lt;/button&gt;&lt;button class="cdw-stage-indicator" type="button" data-cdw-stage-go="1" aria-label="Ir para o slide 2"&gt;&lt;/button&gt;
    &lt;button class="cdw-stage-control" type="button" data-cdw-stage-next aria-label="Proximo slide"&gt;Proximo&lt;/button&gt;
    &lt;div class="cdw-stage-counter" data-cdw-stage-counter&gt;1/2&lt;/div&gt;
  &lt;/div&gt;&lt;div class="cdw-stage-progress"&gt;&lt;span data-cdw-stage-progress&gt;&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Stage Flow</div>
        <div class="cdw-fw-docs-badge">Dashboard</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-stage cdw-stage--flow cdw-fw-accent-sky" data-cdw-stage data-autoplay="5400"><div class="cdw-stage-track"><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Fluxo ativo</div><h3 class="cdw-stage__title">Operacoes integradas</h3><p class="cdw-stage__text">Resumo de squads, filas e gargalos em tempo real.</p><div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-flow-1/1200/700'); background-size: cover; background-position: center;"></div></article><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Visao geral</div><h3 class="cdw-stage__title">KPIs sincronizados</h3><p class="cdw-stage__text">Indicadores com foco em decisao rapida e narrativa clara.</p><div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-flow-2/1200/700'); background-size: cover; background-position: center;"></div></article></div>
  <div class="cdw-stage-nav">
    <button class="cdw-stage-control" type="button" data-cdw-stage-prev aria-label="Slide anterior">Anterior</button>
    <button class="cdw-stage-indicator" type="button" data-cdw-stage-go="0" aria-label="Ir para o slide 1" aria-current="true"></button><button class="cdw-stage-indicator" type="button" data-cdw-stage-go="1" aria-label="Ir para o slide 2"></button>
    <button class="cdw-stage-control" type="button" data-cdw-stage-next aria-label="Proximo slide">Proximo</button>
    
  </div></div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-stage cdw-stage--flow cdw-fw-accent-sky" data-cdw-stage data-autoplay="5400"&gt;&lt;div class="cdw-stage-track"&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Fluxo ativo&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Operacoes integradas&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Resumo de squads, filas e gargalos em tempo real.&lt;/p&gt;&lt;div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-flow-1/1200/700'); background-size: cover; background-position: center;"&gt;&lt;/div&gt;&lt;/article&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Visao geral&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;KPIs sincronizados&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Indicadores com foco em decisao rapida e narrativa clara.&lt;/p&gt;&lt;div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-flow-2/1200/700'); background-size: cover; background-position: center;"&gt;&lt;/div&gt;&lt;/article&gt;&lt;/div&gt;
  &lt;div class="cdw-stage-nav"&gt;
    &lt;button class="cdw-stage-control" type="button" data-cdw-stage-prev aria-label="Slide anterior"&gt;Anterior&lt;/button&gt;
    &lt;button class="cdw-stage-indicator" type="button" data-cdw-stage-go="0" aria-label="Ir para o slide 1" aria-current="true"&gt;&lt;/button&gt;&lt;button class="cdw-stage-indicator" type="button" data-cdw-stage-go="1" aria-label="Ir para o slide 2"&gt;&lt;/button&gt;
    &lt;button class="cdw-stage-control" type="button" data-cdw-stage-next aria-label="Proximo slide"&gt;Proximo&lt;/button&gt;
    
  &lt;/div&gt;&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Stage Fade</div>
        <div class="cdw-fw-docs-badge">Minimal</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-stage cdw-stage--fade cdw-fw-accent-graphite" data-cdw-stage data-autoplay="6000"><div class="cdw-stage-track"><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Foco</div><h3 class="cdw-stage__title">Apresentacao silenciosa</h3><p class="cdw-stage__text">Transicoes suaves com maxima legibilidade.</p><div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-fade-1/1280/720'); background-size: cover; background-position: center;"></div></article><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Objetivo</div><h3 class="cdw-stage__title">Mensagem central</h3><p class="cdw-stage__text">Sem elementos chamativos fora do necessario.</p><div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-fade-2/1280/720'); background-size: cover; background-position: center;"></div></article></div>
  <div class="cdw-stage-nav">
    <button class="cdw-stage-control" type="button" data-cdw-stage-prev aria-label="Slide anterior">Anterior</button>
    <button class="cdw-stage-indicator" type="button" data-cdw-stage-go="0" aria-label="Ir para o slide 1" aria-current="true"></button><button class="cdw-stage-indicator" type="button" data-cdw-stage-go="1" aria-label="Ir para o slide 2"></button>
    <button class="cdw-stage-control" type="button" data-cdw-stage-next aria-label="Proximo slide">Proximo</button>
    
  </div></div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-stage cdw-stage--fade cdw-fw-accent-graphite" data-cdw-stage data-autoplay="6000"&gt;&lt;div class="cdw-stage-track"&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Foco&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Apresentacao silenciosa&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Transicoes suaves com maxima legibilidade.&lt;/p&gt;&lt;div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-fade-1/1280/720'); background-size: cover; background-position: center;"&gt;&lt;/div&gt;&lt;/article&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Objetivo&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Mensagem central&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Sem elementos chamativos fora do necessario.&lt;/p&gt;&lt;div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-fade-2/1280/720'); background-size: cover; background-position: center;"&gt;&lt;/div&gt;&lt;/article&gt;&lt;/div&gt;
  &lt;div class="cdw-stage-nav"&gt;
    &lt;button class="cdw-stage-control" type="button" data-cdw-stage-prev aria-label="Slide anterior"&gt;Anterior&lt;/button&gt;
    &lt;button class="cdw-stage-indicator" type="button" data-cdw-stage-go="0" aria-label="Ir para o slide 1" aria-current="true"&gt;&lt;/button&gt;&lt;button class="cdw-stage-indicator" type="button" data-cdw-stage-go="1" aria-label="Ir para o slide 2"&gt;&lt;/button&gt;
    &lt;button class="cdw-stage-control" type="button" data-cdw-stage-next aria-label="Proximo slide"&gt;Proximo&lt;/button&gt;
    
  &lt;/div&gt;&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Stage Timeline</div>
        <div class="cdw-fw-docs-badge">Processo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-stage cdw-stage--timeline cdw-fw-accent-amber" data-cdw-stage data-autoplay="7000"><div class="cdw-stage-track"><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Fase 1</div><h3 class="cdw-stage__title">Diagnostico inicial</h3><p class="cdw-stage__text">Mapeamento de riscos e pontos criticos.</p><div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-timeline-1/1200/700'); background-size: cover; background-position: center;"></div></article><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Fase 2</div><h3 class="cdw-stage__title">Planejamento tatico</h3><p class="cdw-stage__text">Roteiro com metas, indicadores e prazos.</p><div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-timeline-2/1200/700'); background-size: cover; background-position: center;"></div></article><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Fase 3</div><h3 class="cdw-stage__title">Entrega monitorada</h3><p class="cdw-stage__text">Execucao com checkpoints e validacao continua.</p><div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-timeline-3/1200/700'); background-size: cover; background-position: center;"></div></article></div><div class="cdw-stage-timeline"><button class="cdw-stage-timeline__step" type="button" data-cdw-stage-go="0" aria-current="true"><span class="cdw-stage-timeline__dot"></span></button><button class="cdw-stage-timeline__step" type="button" data-cdw-stage-go="1"><span class="cdw-stage-timeline__dot"></span></button><button class="cdw-stage-timeline__step" type="button" data-cdw-stage-go="2"><span class="cdw-stage-timeline__dot"></span></button></div></div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-stage cdw-stage--timeline cdw-fw-accent-amber" data-cdw-stage data-autoplay="7000"&gt;&lt;div class="cdw-stage-track"&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Fase 1&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Diagnostico inicial&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Mapeamento de riscos e pontos criticos.&lt;/p&gt;&lt;div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-timeline-1/1200/700'); background-size: cover; background-position: center;"&gt;&lt;/div&gt;&lt;/article&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Fase 2&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Planejamento tatico&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Roteiro com metas, indicadores e prazos.&lt;/p&gt;&lt;div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-timeline-2/1200/700'); background-size: cover; background-position: center;"&gt;&lt;/div&gt;&lt;/article&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Fase 3&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Entrega monitorada&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Execucao com checkpoints e validacao continua.&lt;/p&gt;&lt;div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-timeline-3/1200/700'); background-size: cover; background-position: center;"&gt;&lt;/div&gt;&lt;/article&gt;&lt;/div&gt;&lt;div class="cdw-stage-timeline"&gt;&lt;button class="cdw-stage-timeline__step" type="button" data-cdw-stage-go="0" aria-current="true"&gt;&lt;span class="cdw-stage-timeline__dot"&gt;&lt;/span&gt;&lt;/button&gt;&lt;button class="cdw-stage-timeline__step" type="button" data-cdw-stage-go="1"&gt;&lt;span class="cdw-stage-timeline__dot"&gt;&lt;/span&gt;&lt;/button&gt;&lt;button class="cdw-stage-timeline__step" type="button" data-cdw-stage-go="2"&gt;&lt;span class="cdw-stage-timeline__dot"&gt;&lt;/span&gt;&lt;/button&gt;&lt;/div&gt;&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Stage Stack</div>
        <div class="cdw-fw-docs-badge">Profundidade</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-stage cdw-stage--stack cdw-fw-accent-rose" data-cdw-stage data-autoplay="5600"><div class="cdw-stage-track"><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Camada 01</div><h3 class="cdw-stage__title">Visao estrategica</h3><p class="cdw-stage__text">Camadas sobrepostas para narrativa com energia.</p><div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-stack-1/1200/700'); background-size: cover; background-position: center;"></div><div class="cdw-stage__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Ativar</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Detalhar</button></div></article><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Camada 02</div><h3 class="cdw-stage__title">Interface expandida</h3><p class="cdw-stage__text">Paineis com leitura clara e foco no destaque.</p><div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-stack-2/1200/700'); background-size: cover; background-position: center;"></div><div class="cdw-stage__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Ver dados</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Relatorio</button></div></article></div>
  <div class="cdw-stage-nav">
    <button class="cdw-stage-control" type="button" data-cdw-stage-prev aria-label="Slide anterior">Anterior</button>
    <button class="cdw-stage-indicator" type="button" data-cdw-stage-go="0" aria-label="Ir para o slide 1" aria-current="true"></button><button class="cdw-stage-indicator" type="button" data-cdw-stage-go="1" aria-label="Ir para o slide 2"></button>
    <button class="cdw-stage-control" type="button" data-cdw-stage-next aria-label="Proximo slide">Proximo</button>
    
  </div></div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-stage cdw-stage--stack cdw-fw-accent-rose" data-cdw-stage data-autoplay="5600"&gt;&lt;div class="cdw-stage-track"&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Camada 01&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Visao estrategica&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Camadas sobrepostas para narrativa com energia.&lt;/p&gt;&lt;div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-stack-1/1200/700'); background-size: cover; background-position: center;"&gt;&lt;/div&gt;&lt;div class="cdw-stage__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Ativar&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Detalhar&lt;/button&gt;&lt;/div&gt;&lt;/article&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Camada 02&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Interface expandida&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Paineis com leitura clara e foco no destaque.&lt;/p&gt;&lt;div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-stack-2/1200/700'); background-size: cover; background-position: center;"&gt;&lt;/div&gt;&lt;div class="cdw-stage__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Ver dados&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Relatorio&lt;/button&gt;&lt;/div&gt;&lt;/article&gt;&lt;/div&gt;
  &lt;div class="cdw-stage-nav"&gt;
    &lt;button class="cdw-stage-control" type="button" data-cdw-stage-prev aria-label="Slide anterior"&gt;Anterior&lt;/button&gt;
    &lt;button class="cdw-stage-indicator" type="button" data-cdw-stage-go="0" aria-label="Ir para o slide 1" aria-current="true"&gt;&lt;/button&gt;&lt;button class="cdw-stage-indicator" type="button" data-cdw-stage-go="1" aria-label="Ir para o slide 2"&gt;&lt;/button&gt;
    &lt;button class="cdw-stage-control" type="button" data-cdw-stage-next aria-label="Proximo slide"&gt;Proximo&lt;/button&gt;
    
  &lt;/div&gt;&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Stage Docked</div>
        <div class="cdw-fw-docs-badge">Institucional</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-stage cdw-stage--docked cdw-fw-accent-graphite-dark" data-cdw-stage data-autoplay="6600"><div class="cdw-stage-track"><article class="cdw-stage-slide"><div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-docked-1/1200/800'); background-size: cover; background-position: center;"></div><div class="cdw-stage__content"><div class="cdw-stage__eyebrow">Institucional</div><h3 class="cdw-stage__title">Historico da plataforma</h3><p class="cdw-stage__text">Narrativa consistente com foco em confianca e solidez.</p><div class="cdw-stage__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Detalhes</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Equipe</button></div></div></article><article class="cdw-stage-slide"><div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-docked-2/1200/800'); background-size: cover; background-position: center;"></div><div class="cdw-stage__content"><div class="cdw-stage__eyebrow">Destaque</div><h3 class="cdw-stage__title">Portfolio premium</h3><p class="cdw-stage__text">Descricao objetiva para apresentacoes de alto nivel.</p><div class="cdw-stage__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Ver cases</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Contato</button></div></div></article></div>
  <div class="cdw-stage-nav">
    <button class="cdw-stage-control" type="button" data-cdw-stage-prev aria-label="Slide anterior">Anterior</button>
    <button class="cdw-stage-indicator" type="button" data-cdw-stage-go="0" aria-label="Ir para o slide 1" aria-current="true"></button><button class="cdw-stage-indicator" type="button" data-cdw-stage-go="1" aria-label="Ir para o slide 2"></button>
    <button class="cdw-stage-control" type="button" data-cdw-stage-next aria-label="Proximo slide">Proximo</button>
    
  </div></div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-stage cdw-stage--docked cdw-fw-accent-graphite-dark" data-cdw-stage data-autoplay="6600"&gt;&lt;div class="cdw-stage-track"&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-docked-1/1200/800'); background-size: cover; background-position: center;"&gt;&lt;/div&gt;&lt;div class="cdw-stage__content"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Institucional&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Historico da plataforma&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Narrativa consistente com foco em confianca e solidez.&lt;/p&gt;&lt;div class="cdw-stage__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Detalhes&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Equipe&lt;/button&gt;&lt;/div&gt;&lt;/div&gt;&lt;/article&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-docked-2/1200/800'); background-size: cover; background-position: center;"&gt;&lt;/div&gt;&lt;div class="cdw-stage__content"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Destaque&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Portfolio premium&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Descricao objetiva para apresentacoes de alto nivel.&lt;/p&gt;&lt;div class="cdw-stage__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Ver cases&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Contato&lt;/button&gt;&lt;/div&gt;&lt;/div&gt;&lt;/article&gt;&lt;/div&gt;
  &lt;div class="cdw-stage-nav"&gt;
    &lt;button class="cdw-stage-control" type="button" data-cdw-stage-prev aria-label="Slide anterior"&gt;Anterior&lt;/button&gt;
    &lt;button class="cdw-stage-indicator" type="button" data-cdw-stage-go="0" aria-label="Ir para o slide 1" aria-current="true"&gt;&lt;/button&gt;&lt;button class="cdw-stage-indicator" type="button" data-cdw-stage-go="1" aria-label="Ir para o slide 2"&gt;&lt;/button&gt;
    &lt;button class="cdw-stage-control" type="button" data-cdw-stage-next aria-label="Proximo slide"&gt;Proximo&lt;/button&gt;
    
  &lt;/div&gt;&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="stage-exemplos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Exemplos visuais</h3>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Destaque institucional</div>
        <div class="cdw-fw-docs-badge">Landing</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-stage cdw-stage--hero cdw-fw-accent-slate" data-cdw-stage data-autoplay="6800"><div class="cdw-stage-track"><article class="cdw-stage-slide" style="background-image: linear-gradient(180deg, rgba(255,255,255,0.82), rgba(245,248,252,0.7)), url('https://picsum.photos/seed/stage-landing-1/1280/720'); background-size: cover; background-position: center; padding: 28px 28px calc(28px + var(--cdw-stage-nav-space));"><div class="cdw-stage__eyebrow">CDWeb</div><h3 class="cdw-stage__title">Tecnologia com identidade</h3><p class="cdw-stage__text">Camadas visuais prontas para produtos institucionais.</p><div class="cdw-stage__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Conhecer</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Contato</button></div></article><article class="cdw-stage-slide" style="background-image: linear-gradient(180deg, rgba(255,255,255,0.82), rgba(245,248,252,0.7)), url('https://picsum.photos/seed/stage-landing-2/1280/720'); background-size: cover; background-position: center; padding: 28px 28px calc(28px + var(--cdw-stage-nav-space));"><div class="cdw-stage__eyebrow">Portifolio</div><h3 class="cdw-stage__title">Experiencias confiaveis</h3><p class="cdw-stage__text">Narrativas alinhadas com tons monocromaticos.</p><div class="cdw-stage__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Ver cases</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Equipe</button></div></article></div>
  <div class="cdw-stage-nav">
    <button class="cdw-stage-control" type="button" data-cdw-stage-prev aria-label="Slide anterior">Anterior</button>
    <button class="cdw-stage-indicator" type="button" data-cdw-stage-go="0" aria-label="Ir para o slide 1" aria-current="true"></button><button class="cdw-stage-indicator" type="button" data-cdw-stage-go="1" aria-label="Ir para o slide 2"></button>
    <button class="cdw-stage-control" type="button" data-cdw-stage-next aria-label="Proximo slide">Proximo</button>
    
  </div></div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-stage cdw-stage--hero cdw-fw-accent-slate" data-cdw-stage data-autoplay="6800"&gt;&lt;div class="cdw-stage-track"&gt;&lt;article class="cdw-stage-slide" style="background-image: linear-gradient(180deg, rgba(255,255,255,0.82), rgba(245,248,252,0.7)), url('https://picsum.photos/seed/stage-landing-1/1280/720'); background-size: cover; background-position: center; padding: 28px 28px calc(28px + var(--cdw-stage-nav-space));"&gt;&lt;div class="cdw-stage__eyebrow"&gt;CDWeb&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Tecnologia com identidade&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Camadas visuais prontas para produtos institucionais.&lt;/p&gt;&lt;div class="cdw-stage__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Conhecer&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Contato&lt;/button&gt;&lt;/div&gt;&lt;/article&gt;&lt;article class="cdw-stage-slide" style="background-image: linear-gradient(180deg, rgba(255,255,255,0.82), rgba(245,248,252,0.7)), url('https://picsum.photos/seed/stage-landing-2/1280/720'); background-size: cover; background-position: center; padding: 28px 28px calc(28px + var(--cdw-stage-nav-space));"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Portifolio&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Experiencias confiaveis&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Narrativas alinhadas com tons monocromaticos.&lt;/p&gt;&lt;div class="cdw-stage__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Ver cases&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Equipe&lt;/button&gt;&lt;/div&gt;&lt;/article&gt;&lt;/div&gt;
  &lt;div class="cdw-stage-nav"&gt;
    &lt;button class="cdw-stage-control" type="button" data-cdw-stage-prev aria-label="Slide anterior"&gt;Anterior&lt;/button&gt;
    &lt;button class="cdw-stage-indicator" type="button" data-cdw-stage-go="0" aria-label="Ir para o slide 1" aria-current="true"&gt;&lt;/button&gt;&lt;button class="cdw-stage-indicator" type="button" data-cdw-stage-go="1" aria-label="Ir para o slide 2"&gt;&lt;/button&gt;
    &lt;button class="cdw-stage-control" type="button" data-cdw-stage-next aria-label="Proximo slide"&gt;Proximo&lt;/button&gt;
    
  &lt;/div&gt;&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="stage-usos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Exemplos de uso real</h3>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Resumo executivo</div>
        <div class="cdw-fw-docs-badge">Operacao</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-stage cdw-stage--flow cdw-fw-accent-ember" data-cdw-stage data-autoplay="5200"><div class="cdw-stage-track"><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Execucao</div><h3 class="cdw-stage__title">Fila prioritaria</h3><p class="cdw-stage__text">Operacoes com gargalos controlados.</p><div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-real-1/1200/700'); background-size: cover; background-position: center;"></div><div class="cdw-stage__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Resolver</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Abrir</button></div></article><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Saude</div><h3 class="cdw-stage__title">Servicos estaveis</h3><p class="cdw-stage__text">Alertas reduzidos com tempo controlado.</p><div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-real-2/1200/700'); background-size: cover; background-position: center;"></div><div class="cdw-stage__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Ver logs</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Status</button></div></article></div>
  <div class="cdw-stage-nav">
    <button class="cdw-stage-control" type="button" data-cdw-stage-prev aria-label="Slide anterior">Anterior</button>
    <button class="cdw-stage-indicator" type="button" data-cdw-stage-go="0" aria-label="Ir para o slide 1" aria-current="true"></button><button class="cdw-stage-indicator" type="button" data-cdw-stage-go="1" aria-label="Ir para o slide 2"></button>
    <button class="cdw-stage-control" type="button" data-cdw-stage-next aria-label="Proximo slide">Proximo</button>
    
  </div></div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-stage cdw-stage--flow cdw-fw-accent-ember" data-cdw-stage data-autoplay="5200"&gt;&lt;div class="cdw-stage-track"&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Execucao&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Fila prioritaria&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Operacoes com gargalos controlados.&lt;/p&gt;&lt;div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-real-1/1200/700'); background-size: cover; background-position: center;"&gt;&lt;/div&gt;&lt;div class="cdw-stage__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Resolver&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Abrir&lt;/button&gt;&lt;/div&gt;&lt;/article&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Saude&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Servicos estaveis&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Alertas reduzidos com tempo controlado.&lt;/p&gt;&lt;div class="cdw-stage__media" style="background-image: url('https://picsum.photos/seed/stage-real-2/1200/700'); background-size: cover; background-position: center;"&gt;&lt;/div&gt;&lt;div class="cdw-stage__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Ver logs&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Status&lt;/button&gt;&lt;/div&gt;&lt;/article&gt;&lt;/div&gt;
  &lt;div class="cdw-stage-nav"&gt;
    &lt;button class="cdw-stage-control" type="button" data-cdw-stage-prev aria-label="Slide anterior"&gt;Anterior&lt;/button&gt;
    &lt;button class="cdw-stage-indicator" type="button" data-cdw-stage-go="0" aria-label="Ir para o slide 1" aria-current="true"&gt;&lt;/button&gt;&lt;button class="cdw-stage-indicator" type="button" data-cdw-stage-go="1" aria-label="Ir para o slide 2"&gt;&lt;/button&gt;
    &lt;button class="cdw-stage-control" type="button" data-cdw-stage-next aria-label="Proximo slide"&gt;Proximo&lt;/button&gt;
    
  &lt;/div&gt;&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>
</section>

`,

  navbars: `<section id="navbars" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">NavBars</h2>
    <p class="cdw-fw-docs-lead">NavBars premium para identidade e navegacao, com auto-init e responsividade nativa.</p>
  </div>

  <div class="cdw-fw-docs-subsection" id="navbars-conceito" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Conceito</h3>
    <p class="cdw-fw-docs-subdesc">NavBar CDWeb e a camada de identidade do produto, com controle total via classes e data-attributes.</p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-navbar</span>
      <span>cdw-navbar__brand</span>
      <span>cdw-navbar__links</span>
      <span>cdw-navbar__actions</span>
      <span>data-cdw-navbar</span>
      <span>data-cdw-navbar-toggle</span>
      <span>data-cdw-navbar-close</span>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="navbars-estrutura" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Estrutura</h3>

  <div class="cdw-fw-docs-example">
    <div class="cdw-fw-docs-example-head">
      <div class="cdw-fw-docs-example-title">Estrutura base</div>
      <div class="cdw-fw-docs-badge">Base</div>
    </div>
    <div class="cdw-fw-docs-preview"><div class="cdw-navbar cdw-navbar--prime cdw-navbar--soft cdw-fw-accent-ocean" data-cdw-navbar>
  <div class="cdw-navbar__inner">
    <div class="cdw-navbar__brand">
      <div class="cdw-navbar__logo"></div>
      <span>CDWeb</span>
    </div>
    <div class="cdw-navbar__panel">
      <div class="cdw-navbar__panel-top">
        <div class="cdw-navbar__brand">
          <div class="cdw-navbar__logo"></div>
          <span>CDWeb</span>
        </div>
        <button class="cdw-navbar__close" type="button" data-cdw-navbar-close></button>
      </div>
<div class="cdw-navbar__cluster cdw-navbar__cluster--center"><nav class="cdw-navbar__links cdw-navbar__links--pill"><a class=\"cdw-navbar__link\" href=\"#\">Inicio</a><a class=\"cdw-navbar__link\" href=\"#\">Servicos</a><a class=\"cdw-navbar__link\" href=\"#\">Cases</a><a class=\"cdw-navbar__link\" href=\"#\">Contato</a></nav></div>
<div class="cdw-navbar__cluster cdw-navbar__cluster--end">
        <div class="cdw-navbar__meta">
          <span class="cdw-navbar__chip">Premium</span>
          Navegacao principal
        </div>
        <div class="cdw-navbar__actions cdw-navbar__actions--compact"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Entrar</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Contato</button></div>
      </div>
    </div>
    <button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle></button>
  </div>
  <div class="cdw-navbar-overlay" data-cdw-navbar-close></div>
</div></div>
    <div class="cdw-fw-docs-codeblock">
      <div class="cdw-fw-docs-code-head">
        <div class="cdw-fw-docs-code-title">HTML</div>
        <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
      </div>
      <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-navbar cdw-navbar--prime cdw-navbar--soft cdw-fw-accent-ocean" data-cdw-navbar&gt;
  &lt;div class="cdw-navbar__inner"&gt;
    &lt;div class="cdw-navbar__brand"&gt;
      &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
      &lt;span&gt;CDWeb&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="cdw-navbar__panel"&gt;
      &lt;div class="cdw-navbar__panel-top"&gt;
        &lt;div class="cdw-navbar__brand"&gt;
          &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
          &lt;span&gt;CDWeb&lt;/span&gt;
        &lt;/div&gt;
        &lt;button class="cdw-navbar__close" type="button" data-cdw-navbar-close&gt;&lt;/button&gt;
      &lt;/div&gt;
&lt;div class="cdw-navbar__cluster cdw-navbar__cluster--center"&gt;&lt;nav class="cdw-navbar__links cdw-navbar__links--pill"&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Inicio&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Servicos&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Cases&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Contato&lt;/a&gt;&lt;/nav&gt;&lt;/div&gt;
&lt;div class="cdw-navbar__cluster cdw-navbar__cluster--end"&gt;
        &lt;div class="cdw-navbar__meta"&gt;
          &lt;span class="cdw-navbar__chip"&gt;Premium&lt;/span&gt;
          Navegacao principal
        &lt;/div&gt;
        &lt;div class="cdw-navbar__actions cdw-navbar__actions--compact"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Entrar&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Contato&lt;/button&gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="cdw-navbar-overlay" data-cdw-navbar-close&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
  </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="navbars-modelos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Modelos</h3>

  <div class="cdw-fw-docs-example">
    <div class="cdw-fw-docs-example-head">
      <div class="cdw-fw-docs-example-title">NavBar Prime</div>
      <div class="cdw-fw-docs-badge">Institucional</div>
    </div>
    <div class="cdw-fw-docs-preview"><div class="cdw-navbar cdw-navbar--prime cdw-navbar--soft cdw-fw-accent-ocean" data-cdw-navbar>
  <div class="cdw-navbar__inner">
    <div class="cdw-navbar__brand">
      <div class="cdw-navbar__logo"></div>
      <span>CDWeb</span>
    </div>
    <div class="cdw-navbar__panel">
      <div class="cdw-navbar__panel-top">
        <div class="cdw-navbar__brand">
          <div class="cdw-navbar__logo"></div>
          <span>CDWeb</span>
        </div>
        <button class="cdw-navbar__close" type="button" data-cdw-navbar-close></button>
      </div>
<div class="cdw-navbar__cluster cdw-navbar__cluster--center"><nav class="cdw-navbar__links cdw-navbar__links--pill"><a class=\"cdw-navbar__link\" href=\"#\">Inicio</a><a class=\"cdw-navbar__link\" href=\"#\">Servicos</a><a class=\"cdw-navbar__link\" href=\"#\">Cases</a><a class=\"cdw-navbar__link\" href=\"#\">Contato</a></nav></div>
<div class="cdw-navbar__cluster cdw-navbar__cluster--end">
        <div class="cdw-navbar__meta">
          <span class="cdw-navbar__chip">Premium</span>
          Navegacao principal
        </div>
        <div class="cdw-navbar__actions cdw-navbar__actions--compact"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Entrar</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Contato</button></div>
      </div>
    </div>
    <button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle></button>
  </div>
  <div class="cdw-navbar-overlay" data-cdw-navbar-close></div>
</div></div>
    <div class="cdw-fw-docs-codeblock">
      <div class="cdw-fw-docs-code-head">
        <div class="cdw-fw-docs-code-title">HTML</div>
        <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
      </div>
      <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-navbar cdw-navbar--prime cdw-navbar--soft cdw-fw-accent-ocean" data-cdw-navbar&gt;
  &lt;div class="cdw-navbar__inner"&gt;
    &lt;div class="cdw-navbar__brand"&gt;
      &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
      &lt;span&gt;CDWeb&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="cdw-navbar__panel"&gt;
      &lt;div class="cdw-navbar__panel-top"&gt;
        &lt;div class="cdw-navbar__brand"&gt;
          &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
          &lt;span&gt;CDWeb&lt;/span&gt;
        &lt;/div&gt;
        &lt;button class="cdw-navbar__close" type="button" data-cdw-navbar-close&gt;&lt;/button&gt;
      &lt;/div&gt;
&lt;div class="cdw-navbar__cluster cdw-navbar__cluster--center"&gt;&lt;nav class="cdw-navbar__links cdw-navbar__links--pill"&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Inicio&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Servicos&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Cases&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Contato&lt;/a&gt;&lt;/nav&gt;&lt;/div&gt;
&lt;div class="cdw-navbar__cluster cdw-navbar__cluster--end"&gt;
        &lt;div class="cdw-navbar__meta"&gt;
          &lt;span class="cdw-navbar__chip"&gt;Premium&lt;/span&gt;
          Navegacao principal
        &lt;/div&gt;
        &lt;div class="cdw-navbar__actions cdw-navbar__actions--compact"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Entrar&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Contato&lt;/button&gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="cdw-navbar-overlay" data-cdw-navbar-close&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
  </div>

  <div class="cdw-fw-docs-example">
    <div class="cdw-fw-docs-example-head">
      <div class="cdw-fw-docs-example-title">NavBar Action</div>
      <div class="cdw-fw-docs-badge">CTA</div>
    </div>
    <div class="cdw-fw-docs-preview"><div class="cdw-navbar cdw-navbar--action cdw-navbar--solid cdw-fw-accent-ember" data-cdw-navbar>
  <div class="cdw-navbar__inner">
    <div class="cdw-navbar__brand">
      <div class="cdw-navbar__logo"></div>
      <span>Atlas</span>
    </div>
    <div class="cdw-navbar__panel">
      <div class="cdw-navbar__panel-top">
        <div class="cdw-navbar__brand">
          <div class="cdw-navbar__logo"></div>
          <span>Atlas</span>
        </div>
        <button class="cdw-navbar__close" type="button" data-cdw-navbar-close></button>
      </div>
<div class="cdw-navbar__cluster"><nav class="cdw-navbar__links cdw-navbar__links--pill"><a class=\"cdw-navbar__link\" href=\"#\">Produto</a><a class=\"cdw-navbar__link\" href=\"#\">Precos</a><a class=\"cdw-navbar__link\" href=\"#\">Equipe</a><a class=\"cdw-navbar__link\" href=\"#\">Blog</a></nav></div>
<div class="cdw-navbar__cluster cdw-navbar__cluster--end">
        <div class="cdw-navbar__meta">
          <span class="cdw-navbar__chip">Live</span>
          Conversao alta
        </div>
        <div class="cdw-navbar__actions cdw-navbar__actions--pill"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Agendar demo</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Entrar</button></div>
      </div>
    </div>
    <button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle></button>
  </div>
  <div class="cdw-navbar-overlay" data-cdw-navbar-close></div>
</div></div>
    <div class="cdw-fw-docs-codeblock">
      <div class="cdw-fw-docs-code-head">
        <div class="cdw-fw-docs-code-title">HTML</div>
        <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
      </div>
      <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-navbar cdw-navbar--action cdw-navbar--solid cdw-fw-accent-ember" data-cdw-navbar&gt;
  &lt;div class="cdw-navbar__inner"&gt;
    &lt;div class="cdw-navbar__brand"&gt;
      &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
      &lt;span&gt;Atlas&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="cdw-navbar__panel"&gt;
      &lt;div class="cdw-navbar__panel-top"&gt;
        &lt;div class="cdw-navbar__brand"&gt;
          &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
          &lt;span&gt;Atlas&lt;/span&gt;
        &lt;/div&gt;
        &lt;button class="cdw-navbar__close" type="button" data-cdw-navbar-close&gt;&lt;/button&gt;
      &lt;/div&gt;
&lt;div class="cdw-navbar__cluster"&gt;&lt;nav class="cdw-navbar__links cdw-navbar__links--pill"&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Produto&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Precos&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Equipe&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Blog&lt;/a&gt;&lt;/nav&gt;&lt;/div&gt;
&lt;div class="cdw-navbar__cluster cdw-navbar__cluster--end"&gt;
        &lt;div class="cdw-navbar__meta"&gt;
          &lt;span class="cdw-navbar__chip"&gt;Live&lt;/span&gt;
          Conversao alta
        &lt;/div&gt;
        &lt;div class="cdw-navbar__actions cdw-navbar__actions--pill"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Agendar demo&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Entrar&lt;/button&gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="cdw-navbar-overlay" data-cdw-navbar-close&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
  </div>

  <div class="cdw-fw-docs-example">
    <div class="cdw-fw-docs-example-head">
      <div class="cdw-fw-docs-example-title">NavBar Iconic</div>
      <div class="cdw-fw-docs-badge">Icones</div>
    </div>
    <div class="cdw-fw-docs-preview"><div class="cdw-navbar cdw-navbar--iconic cdw-navbar--soft cdw-fw-accent-carbon" data-cdw-navbar>
  <div class="cdw-navbar__inner">
    <div class="cdw-navbar__brand">
      <div class="cdw-navbar__logo"></div>
      <span>Aurora</span>
    </div>
    <div class="cdw-navbar__panel">
      <div class="cdw-navbar__panel-top">
        <div class="cdw-navbar__brand">
          <div class="cdw-navbar__logo"></div>
          <span>Aurora</span>
        </div>
        <button class="cdw-navbar__close" type="button" data-cdw-navbar-close></button>
      </div>
<div class="cdw-navbar__cluster cdw-navbar__cluster--center"><nav class="cdw-navbar__links cdw-navbar__links--iconic"><a class=\"cdw-navbar__link\" href=\"#\"><span class=\"cdw-navbar__icon\">H</span>Home</a><a class=\"cdw-navbar__link\" href=\"#\"><span class=\"cdw-navbar__icon\">D</span>Dados</a><a class=\"cdw-navbar__link\" href=\"#\"><span class=\"cdw-navbar__icon\">A</span>Analise</a><a class=\"cdw-navbar__link\" href=\"#\"><span class=\"cdw-navbar__icon\">S</span>Suporte</a></nav></div>
<div class="cdw-navbar__cluster cdw-navbar__cluster--end">
        <div class="cdw-navbar__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Abrir app</button></div>
      </div>
    </div>
    <button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle></button>
  </div>
  <div class="cdw-navbar-overlay" data-cdw-navbar-close></div>
</div></div>
    <div class="cdw-fw-docs-codeblock">
      <div class="cdw-fw-docs-code-head">
        <div class="cdw-fw-docs-code-title">HTML</div>
        <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
      </div>
      <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-navbar cdw-navbar--iconic cdw-navbar--soft cdw-fw-accent-carbon" data-cdw-navbar&gt;
  &lt;div class="cdw-navbar__inner"&gt;
    &lt;div class="cdw-navbar__brand"&gt;
      &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
      &lt;span&gt;Aurora&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="cdw-navbar__panel"&gt;
      &lt;div class="cdw-navbar__panel-top"&gt;
        &lt;div class="cdw-navbar__brand"&gt;
          &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
          &lt;span&gt;Aurora&lt;/span&gt;
        &lt;/div&gt;
        &lt;button class="cdw-navbar__close" type="button" data-cdw-navbar-close&gt;&lt;/button&gt;
      &lt;/div&gt;
&lt;div class="cdw-navbar__cluster cdw-navbar__cluster--center"&gt;&lt;nav class="cdw-navbar__links cdw-navbar__links--iconic"&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;&lt;span class=\"cdw-navbar__icon\"&gt;H&lt;/span&gt;Home&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;&lt;span class=\"cdw-navbar__icon\"&gt;D&lt;/span&gt;Dados&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;&lt;span class=\"cdw-navbar__icon\"&gt;A&lt;/span&gt;Analise&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;&lt;span class=\"cdw-navbar__icon\"&gt;S&lt;/span&gt;Suporte&lt;/a&gt;&lt;/nav&gt;&lt;/div&gt;
&lt;div class="cdw-navbar__cluster cdw-navbar__cluster--end"&gt;
        &lt;div class="cdw-navbar__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Abrir app&lt;/button&gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="cdw-navbar-overlay" data-cdw-navbar-close&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
  </div>

  <div class="cdw-fw-docs-example">
    <div class="cdw-fw-docs-example-head">
      <div class="cdw-fw-docs-example-title">NavBar Search</div>
      <div class="cdw-fw-docs-badge">Busca</div>
    </div>
    <div class="cdw-fw-docs-preview"><div class="cdw-navbar cdw-navbar--search cdw-navbar--soft cdw-fw-accent-sky" data-cdw-navbar>
  <div class="cdw-navbar__inner">
    <div class="cdw-navbar__brand">
      <div class="cdw-navbar__logo"></div>
      <span>Helix</span>
    </div>
    <div class="cdw-navbar__panel">
      <div class="cdw-navbar__panel-top">
        <div class="cdw-navbar__brand">
          <div class="cdw-navbar__logo"></div>
          <span>Helix</span>
        </div>
        <button class="cdw-navbar__close" type="button" data-cdw-navbar-close></button>
      </div>
<div class="cdw-navbar__cluster"><nav class="cdw-navbar__links cdw-navbar__links--underline"><a class=\"cdw-navbar__link\" href=\"#\">Painel</a><a class=\"cdw-navbar__link\" href=\"#\">Insights</a><a class=\"cdw-navbar__link\" href=\"#\">Relatorios</a></nav></div>
<div class="cdw-navbar__cluster cdw-navbar__cluster--center">
      <div class="cdw-navbar__search cdw-navbar__search--wide">
        <input type="text" placeholder="Buscar no CDWeb" />
      </div>
    </div>
<div class="cdw-navbar__cluster cdw-navbar__cluster--end">
        <div class="cdw-navbar__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Nova busca</button></div>
        <span class="cdw-navbar__chip">Beta</span>
      </div>
    </div>
    <button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle></button>
  </div>
  <div class="cdw-navbar-overlay" data-cdw-navbar-close></div>
</div></div>
    <div class="cdw-fw-docs-codeblock">
      <div class="cdw-fw-docs-code-head">
        <div class="cdw-fw-docs-code-title">HTML</div>
        <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
      </div>
      <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-navbar cdw-navbar--search cdw-navbar--soft cdw-fw-accent-sky" data-cdw-navbar&gt;
  &lt;div class="cdw-navbar__inner"&gt;
    &lt;div class="cdw-navbar__brand"&gt;
      &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
      &lt;span&gt;Helix&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="cdw-navbar__panel"&gt;
      &lt;div class="cdw-navbar__panel-top"&gt;
        &lt;div class="cdw-navbar__brand"&gt;
          &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
          &lt;span&gt;Helix&lt;/span&gt;
        &lt;/div&gt;
        &lt;button class="cdw-navbar__close" type="button" data-cdw-navbar-close&gt;&lt;/button&gt;
      &lt;/div&gt;
&lt;div class="cdw-navbar__cluster"&gt;&lt;nav class="cdw-navbar__links cdw-navbar__links--underline"&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Painel&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Insights&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Relatorios&lt;/a&gt;&lt;/nav&gt;&lt;/div&gt;
&lt;div class="cdw-navbar__cluster cdw-navbar__cluster--center"&gt;
      &lt;div class="cdw-navbar__search cdw-navbar__search--wide"&gt;
        &lt;input type="text" placeholder="Buscar no CDWeb" /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
&lt;div class="cdw-navbar__cluster cdw-navbar__cluster--end"&gt;
        &lt;div class="cdw-navbar__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Nova busca&lt;/button&gt;&lt;/div&gt;
        &lt;span class="cdw-navbar__chip"&gt;Beta&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="cdw-navbar-overlay" data-cdw-navbar-close&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
  </div>

  <div class="cdw-fw-docs-example">
    <div class="cdw-fw-docs-example-head">
      <div class="cdw-fw-docs-example-title">NavBar Multi-Level</div>
      <div class="cdw-fw-docs-badge">Hierarquia</div>
    </div>
    <div class="cdw-fw-docs-preview"><div class="cdw-navbar cdw-navbar--multi cdw-navbar--soft cdw-fw-accent-mint" data-cdw-navbar>
  <div class="cdw-navbar__inner">
    <div class="cdw-navbar__brand">
      <div class="cdw-navbar__logo"></div>
      <span>Orbit</span>
    </div>
    <div class="cdw-navbar__panel">
      <div class="cdw-navbar__panel-top">
        <div class="cdw-navbar__brand">
          <div class="cdw-navbar__logo"></div>
          <span>Orbit</span>
        </div>
        <button class="cdw-navbar__close" type="button" data-cdw-navbar-close></button>
      </div>
<div class="cdw-navbar__cluster">
        <div class="cdw-navbar-item">
          <a class="cdw-navbar__link" href="javascript:void(0)" data-cdw-navbar-sub aria-expanded="false">Produtos</a>
          <div class="cdw-navbar__submenu">
            <a href="#">Core</a>
            <a href="#">Cloud</a>
            <a href="#">Analytics</a>
          </div>
        </div>
        <a class="cdw-navbar__link" href="#">Solucao</a>
        <a class="cdw-navbar__link" href="#">Mercados</a>
        <a class="cdw-navbar__link" href="#">Contato</a>
      </div>
<div class="cdw-navbar__cluster cdw-navbar__cluster--end">
        <div class="cdw-navbar__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Agenda</button></div>
      </div>
    </div>
    <button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle></button>
  </div>
  <div class="cdw-navbar-overlay" data-cdw-navbar-close></div>
</div></div>
    <div class="cdw-fw-docs-codeblock">
      <div class="cdw-fw-docs-code-head">
        <div class="cdw-fw-docs-code-title">HTML</div>
        <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
      </div>
      <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-navbar cdw-navbar--multi cdw-navbar--soft cdw-fw-accent-mint" data-cdw-navbar&gt;
  &lt;div class="cdw-navbar__inner"&gt;
    &lt;div class="cdw-navbar__brand"&gt;
      &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
      &lt;span&gt;Orbit&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="cdw-navbar__panel"&gt;
      &lt;div class="cdw-navbar__panel-top"&gt;
        &lt;div class="cdw-navbar__brand"&gt;
          &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
          &lt;span&gt;Orbit&lt;/span&gt;
        &lt;/div&gt;
        &lt;button class="cdw-navbar__close" type="button" data-cdw-navbar-close&gt;&lt;/button&gt;
      &lt;/div&gt;
&lt;div class="cdw-navbar__cluster"&gt;
        &lt;div class="cdw-navbar-item"&gt;
          &lt;a class="cdw-navbar__link" href="javascript:void(0)" data-cdw-navbar-sub aria-expanded="false"&gt;Produtos&lt;/a&gt;
          &lt;div class="cdw-navbar__submenu"&gt;
            &lt;a href="#"&gt;Core&lt;/a&gt;
            &lt;a href="#"&gt;Cloud&lt;/a&gt;
            &lt;a href="#"&gt;Analytics&lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;a class="cdw-navbar__link" href="#"&gt;Solucao&lt;/a&gt;
        &lt;a class="cdw-navbar__link" href="#"&gt;Mercados&lt;/a&gt;
        &lt;a class="cdw-navbar__link" href="#"&gt;Contato&lt;/a&gt;
      &lt;/div&gt;
&lt;div class="cdw-navbar__cluster cdw-navbar__cluster--end"&gt;
        &lt;div class="cdw-navbar__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Agenda&lt;/button&gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="cdw-navbar-overlay" data-cdw-navbar-close&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
  </div>

  <div class="cdw-fw-docs-example">
    <div class="cdw-fw-docs-example-head">
      <div class="cdw-fw-docs-example-title">NavBar Dashboard</div>
      <div class="cdw-fw-docs-badge">Sistema</div>
    </div>
    <div class="cdw-fw-docs-preview"><div class="cdw-navbar cdw-navbar--dashboard cdw-navbar--contrast cdw-fw-accent-graphite" data-cdw-navbar>
  <div class="cdw-navbar__inner">
    <div class="cdw-navbar__brand">
      <div class="cdw-navbar__logo"></div>
      <span>Control</span>
    </div>
    <div class="cdw-navbar__panel">
      <div class="cdw-navbar__panel-top">
        <div class="cdw-navbar__brand">
          <div class="cdw-navbar__logo"></div>
          <span>Control</span>
        </div>
        <button class="cdw-navbar__close" type="button" data-cdw-navbar-close></button>
      </div>
<div class="cdw-navbar__cluster"><nav class="cdw-navbar__links cdw-navbar__links--tabs"><a class=\"cdw-navbar__link\" href=\"#\">Visao</a><a class=\"cdw-navbar__link\" href=\"#\">Fluxos</a><a class=\"cdw-navbar__link\" href=\"#\">Logs</a><a class=\"cdw-navbar__link\" href=\"#\">Equipe</a></nav></div>
<div class="cdw-navbar__cluster cdw-navbar__cluster--center">
        <div class="cdw-navbar__meta">
          <span class="cdw-navbar__chip">Online</span>
          <span class="cdw-navbar__status-dot"></span>
          Sistema estavel
        </div>
      </div>
<div class="cdw-navbar__cluster cdw-navbar__cluster--end">
        <div class="cdw-navbar__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Criar</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Relatorios</button></div>
      </div>
    </div>
    <button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle></button>
  </div>
  <div class="cdw-navbar-overlay" data-cdw-navbar-close></div>
</div></div>
    <div class="cdw-fw-docs-codeblock">
      <div class="cdw-fw-docs-code-head">
        <div class="cdw-fw-docs-code-title">HTML</div>
        <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
      </div>
      <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-navbar cdw-navbar--dashboard cdw-navbar--contrast cdw-fw-accent-graphite" data-cdw-navbar&gt;
  &lt;div class="cdw-navbar__inner"&gt;
    &lt;div class="cdw-navbar__brand"&gt;
      &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
      &lt;span&gt;Control&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="cdw-navbar__panel"&gt;
      &lt;div class="cdw-navbar__panel-top"&gt;
        &lt;div class="cdw-navbar__brand"&gt;
          &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
          &lt;span&gt;Control&lt;/span&gt;
        &lt;/div&gt;
        &lt;button class="cdw-navbar__close" type="button" data-cdw-navbar-close&gt;&lt;/button&gt;
      &lt;/div&gt;
&lt;div class="cdw-navbar__cluster"&gt;&lt;nav class="cdw-navbar__links cdw-navbar__links--tabs"&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Visao&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Fluxos&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Logs&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Equipe&lt;/a&gt;&lt;/nav&gt;&lt;/div&gt;
&lt;div class="cdw-navbar__cluster cdw-navbar__cluster--center"&gt;
        &lt;div class="cdw-navbar__meta"&gt;
          &lt;span class="cdw-navbar__chip"&gt;Online&lt;/span&gt;
          &lt;span class="cdw-navbar__status-dot"&gt;&lt;/span&gt;
          Sistema estavel
        &lt;/div&gt;
      &lt;/div&gt;
&lt;div class="cdw-navbar__cluster cdw-navbar__cluster--end"&gt;
        &lt;div class="cdw-navbar__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Criar&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Relatorios&lt;/button&gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="cdw-navbar-overlay" data-cdw-navbar-close&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
  </div>

  <div class="cdw-fw-docs-example">
    <div class="cdw-fw-docs-example-head">
      <div class="cdw-fw-docs-example-title">NavBar Minimal</div>
      <div class="cdw-fw-docs-badge">Clean</div>
    </div>
    <div class="cdw-fw-docs-preview"><div class="cdw-navbar cdw-navbar--minimal cdw-navbar--soft cdw-fw-accent-slate" data-cdw-navbar>
  <div class="cdw-navbar__inner">
    <div class="cdw-navbar__brand">
      <div class="cdw-navbar__logo"></div>
      <span>Mono</span>
    </div>
    <div class="cdw-navbar__panel">
      <div class="cdw-navbar__panel-top">
        <div class="cdw-navbar__brand">
          <div class="cdw-navbar__logo"></div>
          <span>Mono</span>
        </div>
        <button class="cdw-navbar__close" type="button" data-cdw-navbar-close></button>
      </div>
<div class="cdw-navbar__cluster cdw-navbar__cluster--center"><nav class="cdw-navbar__links cdw-navbar__links--underline"><a class=\"cdw-navbar__link\" href=\"#\">Sobre</a><a class=\"cdw-navbar__link\" href=\"#\">Manifesto</a><a class=\"cdw-navbar__link\" href=\"#\">Trabalho</a><a class=\"cdw-navbar__link\" href=\"#\">Contato</a></nav></div>
    </div>
    <button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle></button>
  </div>
  <div class="cdw-navbar-overlay" data-cdw-navbar-close></div>
</div></div>
    <div class="cdw-fw-docs-codeblock">
      <div class="cdw-fw-docs-code-head">
        <div class="cdw-fw-docs-code-title">HTML</div>
        <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
      </div>
      <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-navbar cdw-navbar--minimal cdw-navbar--soft cdw-fw-accent-slate" data-cdw-navbar&gt;
  &lt;div class="cdw-navbar__inner"&gt;
    &lt;div class="cdw-navbar__brand"&gt;
      &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
      &lt;span&gt;Mono&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="cdw-navbar__panel"&gt;
      &lt;div class="cdw-navbar__panel-top"&gt;
        &lt;div class="cdw-navbar__brand"&gt;
          &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
          &lt;span&gt;Mono&lt;/span&gt;
        &lt;/div&gt;
        &lt;button class="cdw-navbar__close" type="button" data-cdw-navbar-close&gt;&lt;/button&gt;
      &lt;/div&gt;
&lt;div class="cdw-navbar__cluster cdw-navbar__cluster--center"&gt;&lt;nav class="cdw-navbar__links cdw-navbar__links--underline"&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Sobre&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Manifesto&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Trabalho&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Contato&lt;/a&gt;&lt;/nav&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="cdw-navbar-overlay" data-cdw-navbar-close&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
    </div>
  
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">NavBar Centered</div>
        <div class="cdw-fw-docs-badge">Centered</div>
      </div>
      <div class="cdw-fw-docs-preview"><div class="cdw-navbar cdw-navbar--centered cdw-navbar--soft cdw-fw-accent-ocean" data-cdw-navbar>
    <div class="cdw-navbar__inner">
      <div class="cdw-navbar__brand">
        <div class="cdw-navbar__logo"></div>
        <span>Fusion</span>
      </div>
      <div class="cdw-navbar__panel">
        <div class="cdw-navbar__panel-top">
          <div class="cdw-navbar__brand">
            <div class="cdw-navbar__logo"></div>
            <span>Fusion</span>
          </div>
          <button class="cdw-navbar__close" type="button" data-cdw-navbar-close></button>
        </div>
  <div class="cdw-navbar__cluster cdw-navbar__cluster--links"><nav class="cdw-navbar__links cdw-navbar__links--underline"><a class=\"cdw-navbar__link is-active\" href=\"#\">Inicio</a><a class=\"cdw-navbar__link\" href=\"#\">Produtos</a><a class=\"cdw-navbar__link\" href=\"#\">Recursos</a><a class=\"cdw-navbar__link\" href=\"#\">Suporte</a></nav></div>
  <div class="cdw-navbar__cluster cdw-navbar__cluster--search">
        <div class="cdw-navbar__search cdw-navbar__search--wide">
          <input type="text" placeholder="Pesquisar recursos" />
        </div>
      </div>
      </div>
      <button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle></button>
    </div>
    <div class="cdw-navbar-overlay" data-cdw-navbar-close></div>
  </div></div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-navbar cdw-navbar--centered cdw-navbar--soft cdw-fw-accent-ocean" data-cdw-navbar&gt;
    &lt;div class="cdw-navbar__inner"&gt;
      &lt;div class="cdw-navbar__brand"&gt;
        &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
        &lt;span&gt;Fusion&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class="cdw-navbar__panel"&gt;
        &lt;div class="cdw-navbar__panel-top"&gt;
          &lt;div class="cdw-navbar__brand"&gt;
            &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
            &lt;span&gt;Fusion&lt;/span&gt;
          &lt;/div&gt;
          &lt;button class="cdw-navbar__close" type="button" data-cdw-navbar-close&gt;&lt;/button&gt;
        &lt;/div&gt;
  &lt;div class="cdw-navbar__cluster cdw-navbar__cluster--links"&gt;&lt;nav class="cdw-navbar__links cdw-navbar__links--underline"&gt;&lt;a class=\"cdw-navbar__link is-active\" href=\"#\"&gt;Inicio&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Produtos&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Recursos&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Suporte&lt;/a&gt;&lt;/nav&gt;&lt;/div&gt;
  &lt;div class="cdw-navbar__cluster cdw-navbar__cluster--search"&gt;
        &lt;div class="cdw-navbar__search cdw-navbar__search--wide"&gt;
          &lt;input type="text" placeholder="Pesquisar recursos" /&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;/div&gt;
      &lt;button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="cdw-navbar-overlay" data-cdw-navbar-close&gt;&lt;/div&gt;
  &lt;/div&gt;</code></pre>
      </div>
    </div>
  
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">NavBar Hybrid</div>
        <div class="cdw-fw-docs-badge">Mix</div>
      </div>
      <div class="cdw-fw-docs-preview"><div class="cdw-navbar cdw-navbar--hybrid cdw-navbar--soft cdw-fw-accent-amber" data-cdw-navbar>
    <div class="cdw-navbar__inner">
      <div class="cdw-navbar__brand">
        <div class="cdw-navbar__logo"></div>
        <span>Fusion</span>
      </div>
      <div class="cdw-navbar__panel">
        <div class="cdw-navbar__panel-top">
          <div class="cdw-navbar__brand">
            <div class="cdw-navbar__logo"></div>
            <span>Fusion</span>
          </div>
          <button class="cdw-navbar__close" type="button" data-cdw-navbar-close></button>
        </div>
  <div class="cdw-navbar__cluster cdw-navbar__cluster--links"><nav class="cdw-navbar__links cdw-navbar__links--underline"><a class=\"cdw-navbar__link is-active\" href=\"#\">Inicio</a><a class=\"cdw-navbar__link\" href=\"#\">Produtos</a><a class=\"cdw-navbar__link\" href=\"#\">Recursos</a><a class=\"cdw-navbar__link\" href=\"#\">Suporte</a></nav></div>
  <div class="cdw-navbar__cluster cdw-navbar__cluster--search">
        <div class="cdw-navbar__search cdw-navbar__search--wide">
          <input type="text" placeholder="Pesquisar recursos" />
        </div>
      </div>
      </div>
      <div class="cdw-navbar__actions cdw-navbar__actions--pill"><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Entrar</button></div>
      <button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle></button>
    </div>
    <div class="cdw-navbar-overlay" data-cdw-navbar-close></div>
  </div></div>
    <div class="cdw-fw-docs-codeblock">
      <div class="cdw-fw-docs-code-head">
        <div class="cdw-fw-docs-code-title">HTML</div>
        <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
      </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-navbar cdw-navbar--hybrid cdw-navbar--soft cdw-fw-accent-amber" data-cdw-navbar&gt;
    &lt;div class="cdw-navbar__inner"&gt;
      &lt;div class="cdw-navbar__brand"&gt;
        &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
        &lt;span&gt;Fusion&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class="cdw-navbar__panel"&gt;
        &lt;div class="cdw-navbar__panel-top"&gt;
          &lt;div class="cdw-navbar__brand"&gt;
            &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
            &lt;span&gt;Fusion&lt;/span&gt;
          &lt;/div&gt;
          &lt;button class="cdw-navbar__close" type="button" data-cdw-navbar-close&gt;&lt;/button&gt;
        &lt;/div&gt;
  &lt;div class="cdw-navbar__cluster cdw-navbar__cluster--links"&gt;&lt;nav class="cdw-navbar__links cdw-navbar__links--underline"&gt;&lt;a class=\"cdw-navbar__link is-active\" href=\"#\"&gt;Inicio&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Produtos&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Recursos&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Suporte&lt;/a&gt;&lt;/nav&gt;&lt;/div&gt;
  &lt;div class="cdw-navbar__cluster cdw-navbar__cluster--search"&gt;
        &lt;div class="cdw-navbar__search cdw-navbar__search--wide"&gt;
          &lt;input type="text" placeholder="Pesquisar recursos" /&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="cdw-navbar__actions cdw-navbar__actions--pill"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Entrar&lt;/button&gt;&lt;/div&gt;
      &lt;button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="cdw-navbar-overlay" data-cdw-navbar-close&gt;&lt;/div&gt;
  &lt;/div&gt;</code></pre>
      </div>
    </div>
    </div>
  
    <div class="cdw-fw-docs-subsection" id="navbars-mobile" data-cdw-fw-docs-section>
      <h3 class="cdw-fw-docs-subtitle">Mobile</h3>
      <p class="cdw-fw-docs-subdesc">Estrutura compacta com overlay organizado. Exemplo fechado e aberto.</p>
  
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Menu fechado</div>
        <div class="cdw-fw-docs-badge">Mobile</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-docs-mobile-preview">
          <div class="cdw-navbar cdw-navbar--prime cdw-navbar--soft cdw-fw-accent-slate" data-cdw-navbar>
            <div class="cdw-navbar__inner">
              <div class="cdw-navbar__brand">
                <div class="cdw-navbar__logo"></div>
                <span>Helix</span>
              </div>
              <div class="cdw-navbar__panel">
                <div class="cdw-navbar__panel-top">
                  <div class="cdw-navbar__brand">
                    <div class="cdw-navbar__logo"></div>
                    <span>Helix</span>
                  </div>
                  <button class="cdw-navbar__close" type="button" data-cdw-navbar-close></button>
                </div>
                <div class="cdw-navbar__cluster">
                  <nav class="cdw-navbar__links cdw-navbar__links--underline">
                    <a class="cdw-navbar__link is-active" href="#">Painel</a>
                    <a class="cdw-navbar__link" href="#">Insights</a>
                    <a class="cdw-navbar__link" href="#">Relatorios</a>
                  </nav>
                </div>
                <div class="cdw-navbar__cluster">
                  <div class="cdw-navbar__actions">
                    <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Nova busca</button>
                    <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Entrar</button>
                  </div>
                </div>
                <div class="cdw-navbar__cluster">
                  <div class="cdw-navbar__search cdw-navbar__search--wide">
                    <input type="text" placeholder="Buscar no CDWeb" />
                  </div>
                </div>
                <div class="cdw-navbar__cluster">
                  <div class="cdw-navbar__meta">
                    <span class="cdw-navbar__chip">Beta</span>
                    Ambiente de testes
                  </div>
                </div>
              </div>
              <button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle></button>
            </div>
            <div class="cdw-navbar-overlay" data-cdw-navbar-close></div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-docs-mobile-preview"&gt;
  &lt;div class="cdw-navbar cdw-navbar--prime cdw-navbar--soft cdw-fw-accent-slate" data-cdw-navbar&gt;
    &lt;div class="cdw-navbar__inner"&gt;
      &lt;div class="cdw-navbar__brand"&gt;
        &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
        &lt;span&gt;Helix&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class="cdw-navbar__panel"&gt;
        &lt;div class="cdw-navbar__panel-top"&gt;
          &lt;div class="cdw-navbar__brand"&gt;
            &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
            &lt;span&gt;Helix&lt;/span&gt;
          &lt;/div&gt;
          &lt;button class="cdw-navbar__close" type="button" data-cdw-navbar-close&gt;&lt;/button&gt;
        &lt;/div&gt;
        &lt;div class="cdw-navbar__cluster"&gt;
          &lt;nav class="cdw-navbar__links cdw-navbar__links--underline"&gt;
            &lt;a class="cdw-navbar__link is-active" href="#"&gt;Painel&lt;/a&gt;
            &lt;a class="cdw-navbar__link" href="#"&gt;Insights&lt;/a&gt;
            &lt;a class="cdw-navbar__link" href="#"&gt;Relatorios&lt;/a&gt;
          &lt;/nav&gt;
        &lt;/div&gt;
        &lt;div class="cdw-navbar__cluster"&gt;
          &lt;div class="cdw-navbar__actions"&gt;
            &lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Nova busca&lt;/button&gt;
            &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Entrar&lt;/button&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="cdw-navbar__cluster"&gt;
          &lt;div class="cdw-navbar__search cdw-navbar__search--wide"&gt;
            &lt;input type="text" placeholder="Buscar no CDWeb" /&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="cdw-navbar__cluster"&gt;
          &lt;div class="cdw-navbar__meta"&gt;
            &lt;span class="cdw-navbar__chip"&gt;Beta&lt;/span&gt;
            Ambiente de testes
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="cdw-navbar-overlay" data-cdw-navbar-close&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Menu aberto</div>
        <div class="cdw-fw-docs-badge">Mobile</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-docs-mobile-preview cdw-fw-docs-mobile-preview--open">
          <div class="cdw-navbar cdw-navbar--prime cdw-navbar--soft cdw-fw-accent-slate is-open" data-cdw-navbar>
            <div class="cdw-navbar__inner">
              <div class="cdw-navbar__brand">
                <div class="cdw-navbar__logo"></div>
                <span>Helix</span>
              </div>
              <div class="cdw-navbar__panel">
                <div class="cdw-navbar__panel-top">
                  <div class="cdw-navbar__brand">
                    <div class="cdw-navbar__logo"></div>
                    <span>Helix</span>
                  </div>
                  <button class="cdw-navbar__close" type="button" data-cdw-navbar-close></button>
                </div>
                <div class="cdw-navbar__cluster">
                  <nav class="cdw-navbar__links cdw-navbar__links--underline">
                    <a class="cdw-navbar__link is-active" href="#">Painel</a>
                    <a class="cdw-navbar__link" href="#">Insights</a>
                    <a class="cdw-navbar__link" href="#">Relatorios</a>
                  </nav>
                </div>
                <div class="cdw-navbar__cluster">
                  <div class="cdw-navbar__actions">
                    <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Nova busca</button>
                    <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Entrar</button>
                  </div>
                </div>
                <div class="cdw-navbar__cluster">
                  <div class="cdw-navbar__search cdw-navbar__search--wide">
                    <input type="text" placeholder="Buscar no CDWeb" />
                  </div>
                </div>
                <div class="cdw-navbar__cluster">
                  <div class="cdw-navbar__meta">
                    <span class="cdw-navbar__chip">Beta</span>
                    Ambiente de testes
                  </div>
                </div>
              </div>
              <button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle></button>
            </div>
            <div class="cdw-navbar-overlay" data-cdw-navbar-close></div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-docs-mobile-preview cdw-fw-docs-mobile-preview--open"&gt;
  &lt;div class="cdw-navbar cdw-navbar--prime cdw-navbar--soft cdw-fw-accent-slate is-open" data-cdw-navbar&gt;
    &lt;div class="cdw-navbar__inner"&gt;
      &lt;div class="cdw-navbar__brand"&gt;
        &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
        &lt;span&gt;Helix&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class="cdw-navbar__panel"&gt;
        &lt;div class="cdw-navbar__panel-top"&gt;
          &lt;div class="cdw-navbar__brand"&gt;
            &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
            &lt;span&gt;Helix&lt;/span&gt;
          &lt;/div&gt;
          &lt;button class="cdw-navbar__close" type="button" data-cdw-navbar-close&gt;&lt;/button&gt;
        &lt;/div&gt;
        &lt;div class="cdw-navbar__cluster"&gt;
          &lt;nav class="cdw-navbar__links cdw-navbar__links--underline"&gt;
            &lt;a class="cdw-navbar__link is-active" href="#"&gt;Painel&lt;/a&gt;
            &lt;a class="cdw-navbar__link" href="#"&gt;Insights&lt;/a&gt;
            &lt;a class="cdw-navbar__link" href="#"&gt;Relatorios&lt;/a&gt;
          &lt;/nav&gt;
        &lt;/div&gt;
        &lt;div class="cdw-navbar__cluster"&gt;
          &lt;div class="cdw-navbar__actions"&gt;
            &lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Nova busca&lt;/button&gt;
            &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Entrar&lt;/button&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="cdw-navbar__cluster"&gt;
          &lt;div class="cdw-navbar__search cdw-navbar__search--wide"&gt;
            &lt;input type="text" placeholder="Buscar no CDWeb" /&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="cdw-navbar__cluster"&gt;
          &lt;div class="cdw-navbar__meta"&gt;
            &lt;span class="cdw-navbar__chip"&gt;Beta&lt;/span&gt;
            Ambiente de testes
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="cdw-navbar-overlay" data-cdw-navbar-close&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
    </div>
  
    <div class="cdw-fw-docs-subsection" id="navbars-exemplos" data-cdw-fw-docs-section>
      <h3 class="cdw-fw-docs-subtitle">Exemplos reais</h3>

  <div class="cdw-fw-docs-example">
    <div class="cdw-fw-docs-example-head">
      <div class="cdw-fw-docs-example-title">Navbar institucional</div>
      <div class="cdw-fw-docs-badge">Real</div>
    </div>
    <div class="cdw-fw-docs-preview"><div class="cdw-navbar cdw-navbar--prime cdw-navbar--soft cdw-fw-accent-slate" data-cdw-navbar>
  <div class="cdw-navbar__inner">
    <div class="cdw-navbar__brand">
      <div class="cdw-navbar__logo"></div>
      <span>CDWeb</span>
    </div>
    <div class="cdw-navbar__panel">
      <div class="cdw-navbar__panel-top">
        <div class="cdw-navbar__brand">
          <div class="cdw-navbar__logo"></div>
          <span>CDWeb</span>
        </div>
        <button class="cdw-navbar__close" type="button" data-cdw-navbar-close></button>
      </div>
<div class="cdw-navbar__cluster cdw-navbar__cluster--center"><nav class="cdw-navbar__links cdw-navbar__links--pill"><a class=\"cdw-navbar__link\" href=\"#\">Inicio</a><a class=\"cdw-navbar__link\" href=\"#\">Servicos</a><a class=\"cdw-navbar__link\" href=\"#\">Cases</a><a class=\"cdw-navbar__link\" href=\"#\">Contato</a></nav></div>
<div class="cdw-navbar__cluster cdw-navbar__cluster--end">
        <div class="cdw-navbar__meta">
          <span class="cdw-navbar__chip">Premium</span>
          Navegacao principal
        </div>
        <div class="cdw-navbar__actions cdw-navbar__actions--compact"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Entrar</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Contato</button></div>
      </div>
    </div>
    <button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle></button>
  </div>
  <div class="cdw-navbar-overlay" data-cdw-navbar-close></div>
</div></div>
    <div class="cdw-fw-docs-codeblock">
      <div class="cdw-fw-docs-code-head">
        <div class="cdw-fw-docs-code-title">HTML</div>
        <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
      </div>
      <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-navbar cdw-navbar--prime cdw-navbar--soft cdw-fw-accent-slate" data-cdw-navbar&gt;
  &lt;div class="cdw-navbar__inner"&gt;
    &lt;div class="cdw-navbar__brand"&gt;
      &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
      &lt;span&gt;CDWeb&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="cdw-navbar__panel"&gt;
      &lt;div class="cdw-navbar__panel-top"&gt;
        &lt;div class="cdw-navbar__brand"&gt;
          &lt;div class="cdw-navbar__logo"&gt;&lt;/div&gt;
          &lt;span&gt;CDWeb&lt;/span&gt;
        &lt;/div&gt;
        &lt;button class="cdw-navbar__close" type="button" data-cdw-navbar-close&gt;&lt;/button&gt;
      &lt;/div&gt;
&lt;div class="cdw-navbar__cluster cdw-navbar__cluster--center"&gt;&lt;nav class="cdw-navbar__links cdw-navbar__links--pill"&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Inicio&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Servicos&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Cases&lt;/a&gt;&lt;a class=\"cdw-navbar__link\" href=\"#\"&gt;Contato&lt;/a&gt;&lt;/nav&gt;&lt;/div&gt;
&lt;div class="cdw-navbar__cluster cdw-navbar__cluster--end"&gt;
        &lt;div class="cdw-navbar__meta"&gt;
          &lt;span class="cdw-navbar__chip"&gt;Premium&lt;/span&gt;
          Navegacao principal
        &lt;/div&gt;
        &lt;div class="cdw-navbar__actions cdw-navbar__actions--compact"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Entrar&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Contato&lt;/button&gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;button class="cdw-navbar__toggle" type="button" data-cdw-navbar-toggle&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="cdw-navbar-overlay" data-cdw-navbar-close&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
  </div>
  </div>
</section>

`,

  };

  const pageLinks = [
    { key: "getting-started", label: "Come&ccedil;ando", href: "./index.html" },
    { key: "layout", label: "Layout", href: "./layout.html" },
    { key: "design", label: "Sistema de design", href: "./design.html" },
    { key: "utilities", label: "Utilit&aacute;rios", href: "./utilities.html" },
    { key: "components", label: "Componentes", href: "./components.html" },
  ];

  const pageSections = {
    "getting-started": ["gettingStarted"],
    layout: ["layout"],
    design: ["colors"],
    utilities: ["utilities"],
    components: [
      "buttons",
      "accordion",
      "alert",
      "badges",
      "cards",
      "hero",
      "panel",
      "gallery",
      "modal",
      "tooltip",
      "stage",
      "navbars",
    ],
  };

  const pageKey =
    typeof window !== "undefined" && window.CDW_DOCS_PAGE
      ? String(window.CDW_DOCS_PAGE).toLowerCase()
      : "getting-started";

  const pageConfig = pageSections[pageKey]
    ? { key: pageKey, sections: pageSections[pageKey] }
    : { key: "getting-started", sections: pageSections["getting-started"] };

  const sectionOrder = pageConfig.sections;

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
  setupNavTargets(app);
  setupSmoothScroll(app);
  setupScrollSpy(app);

})();

function buildNav(root) {
  const nav = root.querySelector("[data-cdw-fw-docs-nav-container]");
  if (!nav) {
    return;
  }

  nav.innerHTML = "";

  const navDataByPage = {
    "getting-started": [
      {
        title: "COME&Ccedil;ANDO",
        items: [
          {
            title: "Primeiros passos",
            target: "#comecando",
            links: [
              { label: "Inclus&atilde;o via CDN", href: "#comecando-cdn" },
              { label: "Vers&atilde;o sempre atual", href: "#comecando-latest" },
              { label: "Uso com ES Modules", href: "#comecando-esm" },
            ],
          },
        ],
      },
    ],
    layout: [
      {
        title: "LAYOUT",
        items: [
          {
            title: "Containers",
            target: "#layout-container",
            links: [
              { label: "Container b&aacute;sico", href: "#layout-container" },
              { label: "Container fluido", href: "#layout-container" },
              { label: "Exemplos de uso", href: "#layout-container" },
            ],
          },
          {
            title: "Grids",
            target: "#layout-grid",
            links: [
              { label: "Grid system", href: "#layout-grid" },
              { label: "Colunas", href: "#layout-grid" },
              { label: "Responsividade", href: "#layout-grid" },
            ],
          },
        ],
      },
    ],
    design: [
      {
        title: "SISTEMA DE DESIGN",
        items: [
          {
            title: "Cores",
            target: "#cores",
            links: [
              { label: "Introdu&ccedil;&atilde;o", href: "#cores-intro" },
              { label: "Paleta", href: "#cores-paleta" },
              { label: "Uso b&aacute;sico", href: "#cores-uso" },
            ],
          },
        ],
      },
    ],
    utilities: [
      {
        title: "UTILIT&Aacute;RIOS",
        items: [
          {
            title: "Espa&ccedil;amento",
            target: "#util-espacamento",
            links: [{ label: "Espa&ccedil;amento", href: "#util-espacamento" }],
          },
          {
            title: "Display",
            target: "#util-display",
            links: [{ label: "Display", href: "#util-display" }],
          },
          {
            title: "Flex",
            target: "#util-flex",
            links: [{ label: "Flex", href: "#util-flex" }],
          },
          {
            title: "Gap",
            target: "#util-gap",
            links: [{ label: "Gap", href: "#util-gap" }],
          },
          {
            title: "Dimens&otilde;es",
            target: "#util-tamanho",
            links: [{ label: "Tamanho", href: "#util-tamanho" }],
          },
          {
            title: "Texto",
            target: "#util-texto",
            links: [{ label: "Texto", href: "#util-texto" }],
          },
        ],
      },
    ],
    components: [
      {
        title: "COMPONENTES",
        items: [
          {
            title: "Bot&otilde;es",
            target: "#botoes-estrutura",
            links: [
              { label: "Tipos", href: "#botoes-estrutura" },
              { label: "Estados", href: "#botoes-estados" },
              { label: "&Iacute;cones", href: "#botoes-estilos" },
            ],
          },
          {
            title: "Accordions",
            target: "#accordion-estrutura",
            links: [
              { label: "Uso", href: "#accordion-estrutura" },
              { label: "Varia&ccedil;&otilde;es", href: "#accordion-variedades" },
              { label: "Exemplos", href: "#accordion-exemplos" },
            ],
          },
          {
            title: "Alerts",
            target: "#alerts",
            links: [
              { label: "Tipos", href: "#alerts-tipos" },
              { label: "Contextos", href: "#alerts-contextos" },
              { label: "Exemplos", href: "#alerts-exemplos" },
            ],
          },
          {
            title: "Badges",
            target: "#badges",
            links: [
              { label: "Conceito", href: "#badges-conceito" },
              { label: "Tipos", href: "#badges-tipos" },
              { label: "Estilos", href: "#badges-estilos" },
              { label: "Exemplos", href: "#badges-exemplos" },
              { label: "Uso", href: "#badges-uso" },
            ],
          },
          {
            title: "Cards",
            target: "#cards",
            links: [
              { label: "Conceito", href: "#cards-conceito" },
              { label: "Tipos", href: "#cards-tipos" },
              { label: "Estrutura", href: "#cards-estrutura" },
              { label: "Exemplos", href: "#cards-exemplos" },
              { label: "Uso", href: "#cards-uso" },
            ],
          },
          {
            title: "Hero",
            target: "#hero",
            links: [
              { label: "Conceito", href: "#hero-conceito" },
              { label: "Estrutura", href: "#hero-estrutura" },
              { label: "Tamanhos", href: "#hero-tamanhos" },
              { label: "Modelos", href: "#hero-modelos" },
              { label: "Uso", href: "#hero-uso" },
            ],
          },
          {
            title: "Panel",
            target: "#panel",
            links: [
              { label: "Conceito", href: "#panel-conceito" },
              { label: "Estrutura", href: "#panel-estrutura" },
              { label: "Tamanhos", href: "#panel-tamanhos" },
              { label: "Modelos", href: "#panel-modelos" },
              { label: "Exemplos", href: "#panel-exemplos" },
            ],
          },
          {
            title: "Gallery",
            target: "#gallery",
            links: [
              { label: "Conceito", href: "#gallery-conceito" },
              { label: "Estrutura", href: "#gallery-estrutura" },
              { label: "Modelos", href: "#gallery-modelos" },
              { label: "E-commerce", href: "#gallery-ecommerce" },
              { label: "Uso", href: "#gallery-uso" },
            ],
          },
          {
            title: "Modal",
            target: "#modal",
            links: [
              { label: "Conceito", href: "#modal-conceito" },
              { label: "Estrutura", href: "#modal-estrutura" },
              { label: "Tamanhos", href: "#modal-tamanhos" },
              { label: "Modelos", href: "#modal-modelos" },
              { label: "Exemplos", href: "#modal-exemplos" },
            ],
          },
          {
            title: "Tooltip",
            target: "#tooltip",
            links: [
              { label: "Conceito", href: "#tooltip-conceito" },
              { label: "Modelos", href: "#tooltip-modelos" },
              { label: "Posicionamento", href: "#tooltip-posicionamento" },
              { label: "Cores", href: "#tooltip-cores" },
              { label: "Exemplos", href: "#tooltip-exemplos" },
            ],
          },
          {
            title: "Stage",
            target: "#stage",
            links: [
              { label: "Conceito", href: "#stage-conceito" },
              { label: "Estrutura", href: "#stage-estrutura" },
              { label: "Modelos", href: "#stage-modelos" },
              { label: "Exemplos", href: "#stage-exemplos" },
              { label: "Uso", href: "#stage-usos" },
            ],
          },
          {
            title: "NavBars",
            target: "#navbars",
            links: [
              { label: "Conceito", href: "#navbars-conceito" },
              { label: "Estrutura", href: "#navbars-estrutura" },
              { label: "Modelos", href: "#navbars-modelos" },
              { label: "Mobile", href: "#navbars-mobile" },
              { label: "Exemplos", href: "#navbars-exemplos" },
            ],
          },
        ],
      },
    ],
  };

    const pageKey =
    typeof window !== "undefined" && window.CDW_DOCS_PAGE
      ? String(window.CDW_DOCS_PAGE).toLowerCase()
      : "getting-started";

  const pageLinks = [
    { key: "getting-started", label: "Come&ccedil;ando", href: "./index.html" },
    { key: "layout", label: "Layout", href: "./layout.html" },
    { key: "design", label: "Sistema de design", href: "./design.html" },
    { key: "utilities", label: "Utilit&aacute;rios", href: "./utilities.html" },
    { key: "components", label: "Componentes", href: "./components.html" },
  ];

  const navData = navDataByPage[pageKey] || [];


  const createPageLink = (link) => {
    const anchor = document.createElement("a");
    anchor.className = "cdw-fw-docs-nav-link";
    anchor.href = link.href;
    anchor.innerHTML = link.label;
    return anchor;
  };

  const pageLinksWrap = document.createElement("div");
  pageLinksWrap.className = "cdw-fw-docs-nav-links";
  pageLinks.forEach((link) => {
    const anchor = createPageLink(link);
    if (link.key === pageKey) {
      anchor.setAttribute("aria-current", "page");
    }
    pageLinksWrap.appendChild(anchor);
  });
  nav.appendChild(pageLinksWrap);

  const createLink = (link) => {
    const anchor = document.createElement("a");
    anchor.className = "cdw-fw-docs-nav-link";
    anchor.href = link.href;
    anchor.innerHTML = link.label;
    anchor.setAttribute("data-cdw-fw-docs-nav", "");
    return anchor;
  };

  const navAccordion = document.createElement("div");
  navAccordion.className = "cdw-accordion cdw-fw-docs-nav-accordion";
  navAccordion.setAttribute("data-cdw-accordion", "");
  navAccordion.setAttribute("data-mode", "single");
  navAccordion.setAttribute("data-collapsible", "true");
  navAccordion.setAttribute("data-icon", "chevron");

  navData.forEach((group) => {
    const groupItem = document.createElement("div");
    groupItem.className = "cdw-accordion-item";

    const groupTrigger = document.createElement("button");
    groupTrigger.className = "cdw-accordion-trigger cdw-fw-docs-nav-group-trigger";
    groupTrigger.type = "button";

    const groupTitle = document.createElement("span");
    groupTitle.className = "cdw-fw-docs-nav-group-title";
    groupTitle.innerHTML = group.title;

    const groupIcon = document.createElement("span");
    groupIcon.className = "cdw-accordion-icon";
    groupIcon.setAttribute("aria-hidden", "true");

    groupTrigger.appendChild(groupTitle);
    groupTrigger.appendChild(groupIcon);
    groupItem.appendChild(groupTrigger);

    const groupPanel = document.createElement("div");
    groupPanel.className = "cdw-accordion-panel";
    const groupContent = document.createElement("div");
    groupContent.className = "cdw-accordion-content";

    const subAccordion = document.createElement("div");
    subAccordion.className = "cdw-accordion cdw-fw-docs-nav-sub";
    subAccordion.setAttribute("data-cdw-accordion", "");
    subAccordion.setAttribute("data-mode", "single");
    subAccordion.setAttribute("data-collapsible", "true");
    subAccordion.setAttribute("data-icon", "caret");

    group.items.forEach((item) => {
      const itemEntry = document.createElement("div");
      itemEntry.className = "cdw-accordion-item";

      const itemTrigger = document.createElement("button");
      itemTrigger.className = "cdw-accordion-trigger cdw-fw-docs-nav-item-trigger";
      itemTrigger.type = "button";

      const itemTitle = document.createElement("span");
      itemTitle.className = "cdw-fw-docs-nav-item-title";
      itemTitle.innerHTML = item.title;

      const itemIcon = document.createElement("span");
      itemIcon.className = "cdw-accordion-icon";
      itemIcon.setAttribute("aria-hidden", "true");

      itemTrigger.appendChild(itemTitle);
      itemTrigger.appendChild(itemIcon);
      if (item.target) {
        itemTrigger.setAttribute("data-cdw-fw-docs-target", item.target);
      }
      itemEntry.appendChild(itemTrigger);

      const itemPanel = document.createElement("div");
      itemPanel.className = "cdw-accordion-panel";
      const itemContent = document.createElement("div");
      itemContent.className = "cdw-accordion-content";
      const linksWrap = document.createElement("div");
      linksWrap.className = "cdw-fw-docs-nav-links";

      item.links.forEach((link) => {
        linksWrap.appendChild(createLink(link));
      });

      itemContent.appendChild(linksWrap);
      itemPanel.appendChild(itemContent);
      itemEntry.appendChild(itemPanel);
      subAccordion.appendChild(itemEntry);
    });

    groupContent.appendChild(subAccordion);
    groupPanel.appendChild(groupContent);
    groupItem.appendChild(groupPanel);
    navAccordion.appendChild(groupItem);
  });

  nav.appendChild(navAccordion);
}

function setupNavTargets(root) {
  const triggers = Array.from(root.querySelectorAll("[data-cdw-fw-docs-target]"));
  if (!triggers.length) {
    return;
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const targetId = trigger.getAttribute("data-cdw-fw-docs-target");
      if (!targetId) {
        return;
      }
      const target = root.querySelector(targetId);
      if (!target) {
        return;
      }
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", targetId);
    });
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
        if (!href || href === "#") {
          return;
        }
        if (link.hasAttribute("data-cdw-navbar-sub")) {
          return;
        }
        const id = href.slice(1);
        if (!id) {
          return;
        }
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
























