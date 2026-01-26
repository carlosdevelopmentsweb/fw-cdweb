(function () {
  const app = document.getElementById("app");
  if (!app) {
    return;
  }

  const framework = window.CDWFW || null;
  const docsVersion = "v0.1.33";
  const version =
    framework && typeof framework.CDW_FW_VERSION === "string"
      ? framework.CDW_FW_VERSION
      : docsVersion;

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
  utilities: `
<section id="utilitarios" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Utilit&aacute;rios</h2>
    <p class="cdw-fw-docs-lead">
      Classes utilit&aacute;rias para ajustes de layout e comportamento visual sem criar componentes.
    </p>
  </div>

    <div class="cdw-fw-docs-toc">
    <span class="cdw-fw-docs-toc-title">Indice desta pagina</span>
    <a href="#cores">Cores</a>
    <a href="#util-espacamento">Espacamento</a>
    <a href="#util-display">Display</a>
    <a href="#util-flex">Flex</a>
    <a href="#util-gap">Gap</a>
    <a href="#util-dimensoes">Dimensoes</a>
    <a href="#util-alinhamento">Alinhamento</a>
    <a href="#util-posicionamento">Posicionamento</a>
    <a href="#util-overflow">Overflow</a>
    <a href="#util-texto">Texto</a>
    <a href="#util-design-exemplos">Design (exemplos)</a>
  </div>

  <div class="cdw-fw-docs-subsection" id="util-espacamento" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Espacamento</h3>
    <p class="cdw-fw-docs-subdesc">
      Controle de margin e padding com escala fixa baseada em 4px.
      <span class="cdw-fw-docs-when">Quando usar: separacao entre elementos e respiro interno.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-m-*</span>
      <span>cdw-fw-mt-*</span>
      <span>cdw-fw-mx-*</span>
      <span>cdw-fw-p-*</span>
      <span>cdw-fw-py-*</span>
    </div>

    <div class="cdw-fw-docs-card">
      <div class="cdw-fw-docs-card-title">Escala de espacamento</div>
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
        <div class="cdw-fw-docs-badge">Basico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-p-4 cdw-fw-accent-sky cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-lg">
          Caixa com padding 4
        </div>
        <div class="cdw-fw-mt-4 cdw-fw-px-3 cdw-fw-py-2 cdw-fw-accent-sun cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-lg">
          Margin top 4
        </div>
        <div class="cdw-fw-docs-example-caption">
          Use p-* para espaco interno e mt-* para separar itens verticalmente.
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-p-4 cdw-fw-accent-sky cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-lg"&gt;
  Caixa com padding 4
&lt;/div&gt;
&lt;div class="cdw-fw-mt-4 cdw-fw-px-3 cdw-fw-py-2 cdw-fw-accent-sun cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-lg"&gt;
  Margin top 4
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Eixo horizontal e vertical</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-mx-4 cdw-fw-p-3 cdw-fw-accent-slate cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-lg">
          mx-4 adiciona margem lateral
        </div>
        <div class="cdw-fw-my-6 cdw-fw-p-3 cdw-fw-accent-sky cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-lg">
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
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-mx-4 cdw-fw-p-3 cdw-fw-accent-slate cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-lg"&gt;
  mx-4 adiciona margem lateral
&lt;/div&gt;
&lt;div class="cdw-fw-my-6 cdw-fw-p-3 cdw-fw-accent-sky cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-lg"&gt;
  my-6 cria respiro vertical
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>
  <div class="cdw-fw-docs-subsection" id="util-display" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Display</h3>
    <p class="cdw-fw-docs-subdesc">
      Ajuste o comportamento de renderizacao dos elementos.
      <span class="cdw-fw-docs-when">Quando usar: alinhar itens pequenos, alternar visibilidade ou trocar o fluxo.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-block</span>
      <span>cdw-fw-inline</span>
      <span>cdw-fw-inline-block</span>
      <span>cdw-fw-flex</span>
      <span>cdw-fw-inline-flex</span>
      <span>cdw-fw-none</span>
      <span>cdw-fw-hidden</span>
      <span>cdw-fw-visible</span>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Inline vs block</div>
        <div class="cdw-fw-docs-badge">Basico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-inline cdw-fw-px-3 cdw-fw-py-2 cdw-fw-accent-sky cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-sm">inline</div>
        <div class="cdw-fw-inline-block cdw-fw-px-3 cdw-fw-py-2 cdw-fw-accent-sun cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-sm">inline-block</div>
        <div class="cdw-fw-block cdw-fw-px-3 cdw-fw-py-2 cdw-fw-accent-forest cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-sm">block</div>
        <div class="cdw-fw-docs-example-caption">Block quebra linha; inline fica na mesma linha.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-inline cdw-fw-px-3 cdw-fw-py-2 cdw-fw-accent-sky cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-sm"&gt;inline&lt;/div&gt;
&lt;div class="cdw-fw-inline-block cdw-fw-px-3 cdw-fw-py-2 cdw-fw-accent-sun cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-sm"&gt;inline-block&lt;/div&gt;
&lt;div class="cdw-fw-block cdw-fw-px-3 cdw-fw-py-2 cdw-fw-accent-forest cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-sm"&gt;block&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Flex basico</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-gap-2 cdw-fw-p-3 cdw-fw-accent-ash cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-lg">
          <div class="cdw-fw-docs-preview-box">A</div>
          <div class="cdw-fw-docs-preview-box">B</div>
          <div class="cdw-fw-docs-preview-box">C</div>
        </div>
        <div class="cdw-fw-docs-example-caption">cdw-fw-flex coloca itens na mesma linha.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-flex"&gt;...&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Hidden com toggle</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div id="cdw-fw-docs-hidden-target" class="cdw-fw-docs-preview-box cdw-fw-docs-preview-box--dark">
          Alvo ocultavel
        </div>
        <button class="cdw-fw-docs-toggle" type="button" data-cdw-fw-docs-toggle-hidden="cdw-fw-docs-hidden-target">
          Esconder
        </button>
        <div class="cdw-fw-docs-example-caption">
          O botao alterna a classe cdw-fw-hidden no alvo.
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div id="alvo" class="cdw-fw-hidden"&gt;Alvo ocultavel&lt;/div&gt;
&lt;button&gt;Mostrar/Esconder&lt;/button&gt;</code></pre>
      </div>
    </div>
  </div>
  <div class="cdw-fw-docs-subsection" id="util-flex" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Flex</h3>
    <p class="cdw-fw-docs-subdesc">
      Controle de alinhamento, direcao e quebra de linha com flexbox.
      <span class="cdw-fw-docs-when">Quando usar: barras de acao, cards alinhados e grids flexiveis.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-flex-row</span>
      <span>cdw-fw-flex-col</span>
      <span>cdw-fw-items-center</span>
      <span>cdw-fw-justify-between</span>
      <span>cdw-fw-flex-wrap</span>
      <span>cdw-fw-grow</span>
      <span>cdw-fw-shrink-0</span>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Justify between + items center</div>
        <div class="cdw-fw-docs-badge">Basico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-items-center cdw-fw-justify-between cdw-fw-p-3 cdw-fw-accent-ash cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-lg">
          <div class="cdw-fw-docs-preview-box">Esquerda</div>
          <div class="cdw-fw-docs-preview-box cdw-fw-docs-preview-box--alt">Centro</div>
          <div class="cdw-fw-docs-preview-box cdw-fw-docs-preview-box--dark">Direita</div>
        </div>
        <div class="cdw-fw-docs-example-caption">Distribui o conteudo com espaco entre os itens.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-flex cdw-fw-items-center cdw-fw-justify-between cdw-fw-p-3 cdw-fw-accent-ash cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-lg"&gt;
  ...
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Grow e shrink</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-gap-2 cdw-fw-p-3 cdw-fw-accent-ash cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-lg">
          <div class="cdw-fw-docs-preview-box">A</div>
          <div class="cdw-fw-docs-preview-box cdw-fw-grow">Grow</div>
          <div class="cdw-fw-docs-preview-box cdw-fw-shrink-0 cdw-fw-minw-80">Fixo</div>
        </div>
        <div class="cdw-fw-docs-example-caption">cdw-fw-grow ocupa o espaco livre e cdw-fw-shrink-0 evita reduzir.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-flex cdw-fw-gap-2 cdw-fw-p-3 cdw-fw-accent-ash cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-lg"&gt;
  &lt;div&gt;A&lt;/div&gt;
  &lt;div class="cdw-fw-grow"&gt;Grow&lt;/div&gt;
  &lt;div class="cdw-fw-shrink-0 cdw-fw-minw-80"&gt;Fixo&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="util-gap" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Gap</h3>
    <p class="cdw-fw-docs-subdesc">
      Espacamento entre itens de flex ou grid.
      <span class="cdw-fw-docs-when">Quando usar: listas horizontais e colunas alinhadas.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-gap-*</span>
      <span>cdw-fw-row-gap-*</span>
      <span>cdw-fw-col-gap-*</span>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Row e column gap</div>
        <div class="cdw-fw-docs-badge">Basico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-row cdw-fw-row-gap-2 cdw-fw-col-gap-4 cdw-fw-p-3 cdw-fw-accent-ash cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-lg">
          <div class="cdw-fw-col-6">
            <div class="cdw-fw-docs-preview-box">A1</div>
          </div>
          <div class="cdw-fw-col-6">
            <div class="cdw-fw-docs-preview-box">A2</div>
          </div>
          <div class="cdw-fw-col-6">
            <div class="cdw-fw-docs-preview-box cdw-fw-docs-preview-box--alt">B1</div>
          </div>
          <div class="cdw-fw-col-6">
            <div class="cdw-fw-docs-preview-box cdw-fw-docs-preview-box--alt">B2</div>
          </div>
        </div>
        <div class="cdw-fw-docs-example-caption">row-gap controla linhas e col-gap controla colunas.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-row cdw-fw-row-gap-2 cdw-fw-col-gap-4"&gt;
  &lt;div class="cdw-fw-col-6"&gt;...&lt;/div&gt;
  &lt;div class="cdw-fw-col-6"&gt;...&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>
  <div class="cdw-fw-docs-subsection" id="util-dimensoes" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Dimensoes</h3>
    <p class="cdw-fw-docs-subdesc">
      Ajuste largura, altura e limites basicos.
      <span class="cdw-fw-docs-when">Quando usar: containers responsivos e areas que precisam preencher o layout.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-w-100</span>
      <span>cdw-fw-w-auto</span>
      <span>cdw-fw-maxw-100</span>
      <span>cdw-fw-h-100</span>
      <span>cdw-fw-h-auto</span>
      <span>cdw-fw-maxh-100</span>
      <span>cdw-fw-minw-0</span>
      <span>cdw-fw-minh-0</span>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Largura 100% e auto</div>
        <div class="cdw-fw-docs-badge">Basico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <input class="cdw-fw-w-100 cdw-fw-p-2 cdw-fw-radius-sm cdw-fw-border-soft" type="text" placeholder="Input com w-100" />
        <div class="cdw-fw-w-auto cdw-fw-mt-3 cdw-fw-p-3 cdw-fw-accent-sky cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-md">Caixa w-auto</div>
        <div class="cdw-fw-docs-example-caption">w-100 expande, w-auto ajusta ao conteudo.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;input class="cdw-fw-w-100 cdw-fw-p-2 cdw-fw-radius-sm cdw-fw-border-soft" /&gt;
&lt;div class="cdw-fw-w-auto cdw-fw-mt-3 cdw-fw-p-3 cdw-fw-accent-sky cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-md"&gt;
  Caixa w-auto
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Altura preenchida</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-h-120 cdw-fw-p-3 cdw-fw-accent-ash cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-lg">
          <div class="cdw-fw-h-100 cdw-fw-p-3 cdw-fw-accent-sky cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-md">h-100</div>
        </div>
        <div class="cdw-fw-docs-example-caption">h-100 ocupa toda a altura do container.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-h-120 cdw-fw-p-3 cdw-fw-accent-ash cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-lg"&gt;
  &lt;div class="cdw-fw-h-100 cdw-fw-p-3 cdw-fw-accent-sky cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-md"&gt;h-100&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="util-alinhamento" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Alinhamento</h3>
    <p class="cdw-fw-docs-subdesc">
      Alinhe texto, blocos e elementos inline sem depender de flex.
      <span class="cdw-fw-docs-when">Quando usar: textos, cards e elementos simples em colunas.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-text-left</span>
      <span>cdw-fw-text-center</span>
      <span>cdw-fw-text-right</span>
      <span>cdw-fw-text-justify</span>
      <span>cdw-fw-align-left</span>
      <span>cdw-fw-align-center</span>
      <span>cdw-fw-align-right</span>
      <span>cdw-fw-align-top</span>
      <span>cdw-fw-align-middle</span>
      <span>cdw-fw-align-bottom</span>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Alinhamento de texto</div>
        <div class="cdw-fw-docs-badge">Basico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-text-left cdw-fw-p-3 cdw-fw-accent-sky cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-md">Texto alinhado a esquerda</div>
        <div class="cdw-fw-text-center cdw-fw-mt-2 cdw-fw-p-3 cdw-fw-accent-sun cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-md">Texto centralizado</div>
        <div class="cdw-fw-text-right cdw-fw-mt-2 cdw-fw-p-3 cdw-fw-accent-slate cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-md">Texto alinhado a direita</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-text-left cdw-fw-p-3 cdw-fw-accent-sky cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-md"&gt;
  Texto alinhado a esquerda
&lt;/div&gt;
&lt;div class="cdw-fw-text-center cdw-fw-mt-2 cdw-fw-p-3 cdw-fw-accent-sun cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-md"&gt;
  Texto centralizado
&lt;/div&gt;
&lt;div class="cdw-fw-text-right cdw-fw-mt-2 cdw-fw-p-3 cdw-fw-accent-slate cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-md"&gt;
  Texto alinhado a direita
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Alinhamento de blocos e vertical</div>
        <div class="cdw-fw-docs-badge">Comum</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-p-3 cdw-fw-accent-ash cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-lg">
          <div class="cdw-fw-align-left cdw-fw-w-140 cdw-fw-px-3 cdw-fw-py-2 cdw-fw-accent-sky cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-sm">Left</div>
          <div class="cdw-fw-align-center cdw-fw-w-140 cdw-fw-mt-2 cdw-fw-px-3 cdw-fw-py-2 cdw-fw-accent-sun cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-sm">Center</div>
          <div class="cdw-fw-align-right cdw-fw-w-140 cdw-fw-mt-2 cdw-fw-px-3 cdw-fw-py-2 cdw-fw-accent-forest cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-sm">Right</div>
        </div>
        <div class="cdw-fw-mt-3 cdw-fw-h-120 cdw-fw-p-3 cdw-fw-accent-ash cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-lg">
          <span class="cdw-fw-align-top cdw-fw-inline-flex cdw-fw-items-center cdw-fw-justify-center cdw-fw-text-center cdw-fw-w-70 cdw-fw-h-40 cdw-fw-accent-sky cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-sm">Top</span>
          <span class="cdw-fw-align-middle cdw-fw-inline-flex cdw-fw-items-center cdw-fw-justify-center cdw-fw-text-center cdw-fw-w-70 cdw-fw-h-60 cdw-fw-accent-sun cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-sm">Mid</span>
          <span class="cdw-fw-align-bottom cdw-fw-inline-flex cdw-fw-items-center cdw-fw-justify-center cdw-fw-text-center cdw-fw-w-70 cdw-fw-h-80 cdw-fw-accent-forest cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-sm">Bottom</span>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-align-center cdw-fw-w-140 cdw-fw-px-3 cdw-fw-py-2 cdw-fw-accent-sun cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-sm"&gt;
  Center
&lt;/div&gt;
&lt;span class="cdw-fw-align-top cdw-fw-inline-flex cdw-fw-items-center cdw-fw-justify-center cdw-fw-text-center cdw-fw-w-70 cdw-fw-h-40 cdw-fw-accent-sky cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-sm"&gt;
  Top
&lt;/span&gt;
&lt;span class="cdw-fw-align-middle cdw-fw-inline-flex cdw-fw-items-center cdw-fw-justify-center cdw-fw-text-center cdw-fw-w-70 cdw-fw-h-60 cdw-fw-accent-sun cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-sm"&gt;
  Mid
&lt;/span&gt;
&lt;span class="cdw-fw-align-bottom cdw-fw-inline-flex cdw-fw-items-center cdw-fw-justify-center cdw-fw-text-center cdw-fw-w-70 cdw-fw-h-80 cdw-fw-accent-forest cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-sm"&gt;
  Bottom
&lt;/span&gt;</code></pre>
      </div>
    </div>
  </div>
  <div class="cdw-fw-docs-subsection" id="util-posicionamento" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Posicionamento</h3>
    <p class="cdw-fw-docs-subdesc">
      Posicao basica para elementos fixos, absolutos ou relativos.
      <span class="cdw-fw-docs-when">Quando usar: badges, notificacoes e elementos destacados.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-pos-relative</span>
      <span>cdw-fw-pos-absolute</span>
      <span>cdw-fw-pos-fixed</span>
      <span>cdw-fw-pos-sticky</span>
      <span>cdw-fw-top-0</span>
      <span>cdw-fw-right-0</span>
      <span>cdw-fw-bottom-0</span>
      <span>cdw-fw-left-0</span>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Badge absoluto</div>
        <div class="cdw-fw-docs-badge">Basico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-pos-relative cdw-fw-p-4 cdw-fw-accent-ash cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-lg">
          Caixa relativa
          <span class="cdw-badge cdw-badge--docked cdw-badge--obsidian cdw-badge--solid cdw-badge--sm cdw-badge--pos-tr cdw-badge--offset">Novo</span>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-pos-relative cdw-fw-p-4 cdw-fw-accent-ash cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-lg"&gt;
  Caixa relativa
  &lt;span class="cdw-badge cdw-badge--docked cdw-badge--obsidian cdw-badge--solid cdw-badge--sm cdw-badge--pos-tr cdw-badge--offset"&gt;Novo&lt;/span&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="util-overflow" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Overflow</h3>
    <p class="cdw-fw-docs-subdesc">
      Controle o excesso de conteudo em areas compactas.
      <span class="cdw-fw-docs-when">Quando usar: tabelas, cards e paineis com altura fixa.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fw-overflow-hidden</span>
      <span>cdw-fw-overflow-auto</span>
      <span>cdw-fw-overflow-scroll</span>
      <span>cdw-fw-overflow-x-auto</span>
      <span>cdw-fw-overflow-y-auto</span>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Lista com overflow</div>
        <div class="cdw-fw-docs-badge">Basico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-overflow-auto cdw-fw-h-90 cdw-fw-p-3 cdw-fw-accent-ash cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-lg">
          <div class="cdw-fw-py-2 cdw-fw-border-bottom-soft">Registro 1</div>
          <div class="cdw-fw-py-2 cdw-fw-border-bottom-soft">Registro 2</div>
          <div class="cdw-fw-py-2 cdw-fw-border-bottom-soft">Registro 3</div>
          <div class="cdw-fw-py-2">Registro 4</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-overflow-auto cdw-fw-h-90 cdw-fw-p-3 cdw-fw-accent-ash cdw-fw-bg-accent cdw-fw-soft cdw-fw-radius-lg"&gt;
  &lt;div class="cdw-fw-py-2 cdw-fw-border-bottom-soft"&gt;Registro 1&lt;/div&gt;
  ...
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="util-texto" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Texto</h3>
    <p class="cdw-fw-docs-subdesc">
      Utilitarios tipograficos para leitura, hierarquia e consistencia visual.
      <span class="cdw-fw-docs-when">Quando usar: titulos, paragrafos, labels e dados.</span>
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
        <div class="cdw-fw-docs-example-title">Familias tipograficas</div>
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
          <div class="cdw-fw-text-base">Texto base para paragrafos</div>
          <div class="cdw-fw-text-lg">Texto lg para destaque leve</div>
          <div class="cdw-fw-text-xl">Texto xl para subtitulos</div>
          <div class="cdw-fw-text-2xl">Texto 2xl para titulos</div>
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
        <div class="cdw-fw-docs-example-title">Peso e transformacao</div>
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
        <div class="cdw-fw-flex cdw-fw-gap-2 cdw-fw-flex-wrap cdw-fw-mt-2">
          <div class="cdw-fw-text-italic">Texto italico</div>
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

    <h4 class="cdw-fw-docs-subtitle">Espacamento</h4>
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
          Linha tight para chamadas curtas e mensagens rapidas.
        </div>
        <div class="cdw-fw-text-base cdw-fw-leading-loose cdw-fw-mt-2">
          Linha loose melhora a leitura em paragrafos longos e institucionais.
        </div>
        <div class="cdw-fw-text-sm cdw-fw-tracking-wide cdw-fw-text-uppercase cdw-fw-mt-3">
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

    <h4 class="cdw-fw-docs-subtitle">Decoracao e realce</h4>
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
        <div class="cdw-fw-text-base cdw-fw-text-underline-accent cdw-fw-mt-2">Underline accent com cor do tema.</div>
        <div class="cdw-fw-text-base cdw-fw-text-muted cdw-fw-mt-2">Texto muted para informacao secundaria.</div>
        <div class="cdw-fw-text-base cdw-fw-text-emphasis cdw-fw-mt-2">Texto emphasis para pontos importantes.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-text-underline-soft"&gt;Underline soft&lt;/div&gt;
&lt;div class="cdw-fw-text-underline-accent cdw-fw-mt-2"&gt;Underline accent&lt;/div&gt;
&lt;div class="cdw-fw-text-muted cdw-fw-mt-2"&gt;Texto muted&lt;/div&gt;
&lt;div class="cdw-fw-text-emphasis cdw-fw-mt-2"&gt;Texto emphasis&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>
  <div class="cdw-fw-docs-subsection" id="util-design-exemplos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Design (exemplos)</h3>
    <p class="cdw-fw-docs-subdesc">
      Exemplos conceituais para cor, bordas, sombras, gradientes e estados visuais.
      <span class="cdw-fw-docs-when">Quando usar: reforcar identidade sem criar novos componentes.</span>
    </p>

    <h4 class="cdw-fw-docs-subtitle">Cores em uso</h4>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Accent aplicado</div>
        <div class="cdw-fw-docs-badge">Design</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-gap-3 cdw-fw-flex-wrap">
          <div class="cdw-fw-accent-ocean cdw-fw-text-accent cdw-fw-text-sm cdw-fw-p-3 cdw-fw-border cdw-fw-radius-lg">Texto com accent</div>
          <div class="cdw-fw-accent-sky cdw-fw-bg-accent cdw-fw-soft cdw-fw-text-sm cdw-fw-p-3 cdw-fw-radius-lg">Fundo soft</div>
          <div class="cdw-fw-accent-rose cdw-fw-border-accent cdw-fw-text-sm cdw-fw-p-3 cdw-fw-border-strong cdw-fw-radius-lg">Borda com accent</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-flex cdw-fw-gap-3 cdw-fw-flex-wrap"&gt;
  &lt;div class="cdw-fw-accent-ocean cdw-fw-text-accent cdw-fw-text-sm cdw-fw-p-3 cdw-fw-border cdw-fw-radius-lg"&gt;Texto com accent&lt;/div&gt;
  &lt;div class="cdw-fw-accent-sky cdw-fw-bg-accent cdw-fw-soft cdw-fw-text-sm cdw-fw-p-3 cdw-fw-radius-lg"&gt;Fundo soft&lt;/div&gt;
  &lt;div class="cdw-fw-accent-rose cdw-fw-border-accent cdw-fw-text-sm cdw-fw-p-3 cdw-fw-border-strong cdw-fw-radius-lg"&gt;Borda com accent&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <h4 class="cdw-fw-docs-subtitle">Formas &amp; raios</h4>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Cantos com intencao</div>
        <div class="cdw-fw-docs-badge">Design</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-gap-3 cdw-fw-flex-wrap">
          <div class="cdw-fw-p-3 cdw-fw-text-sm cdw-fw-border-soft cdw-fw-radius-0">Canto reto</div>
          <div class="cdw-fw-p-3 cdw-fw-text-sm cdw-fw-border-soft cdw-fw-radius-lg">Canto suave</div>
          <div class="cdw-fw-p-3 cdw-fw-text-sm cdw-fw-border-soft cdw-fw-radius-narrative">Canto narrativo</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-flex cdw-fw-gap-3 cdw-fw-flex-wrap"&gt;
  &lt;div class="cdw-fw-p-3 cdw-fw-text-sm cdw-fw-border-soft cdw-fw-radius-0"&gt;Canto reto&lt;/div&gt;
  &lt;div class="cdw-fw-p-3 cdw-fw-text-sm cdw-fw-border-soft cdw-fw-radius-lg"&gt;Canto suave&lt;/div&gt;
  &lt;div class="cdw-fw-p-3 cdw-fw-text-sm cdw-fw-border-soft cdw-fw-radius-narrative"&gt;Canto narrativo&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <h4 class="cdw-fw-docs-subtitle">Bordas</h4>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Separacao visual</div>
        <div class="cdw-fw-docs-badge">Design</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-gap-3 cdw-fw-flex-wrap">
          <div class="cdw-fw-p-3 cdw-fw-text-sm cdw-fw-border cdw-fw-radius-md">Separacao leve</div>
          <div class="cdw-fw-accent-indigo cdw-fw-border-accent cdw-fw-p-3 cdw-fw-text-sm cdw-fw-border-strong cdw-fw-radius-md">Borda com acento</div>
          <div class="cdw-fw-p-3 cdw-fw-text-sm cdw-fw-border-left-dashed cdw-fw-radius-md">Guia discreta</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-flex cdw-fw-gap-3 cdw-fw-flex-wrap"&gt;
  &lt;div class="cdw-fw-p-3 cdw-fw-text-sm cdw-fw-border cdw-fw-radius-md"&gt;Separacao leve&lt;/div&gt;
  &lt;div class="cdw-fw-accent-indigo cdw-fw-border-accent cdw-fw-p-3 cdw-fw-text-sm cdw-fw-border-strong cdw-fw-radius-md"&gt;Borda com acento&lt;/div&gt;
  &lt;div class="cdw-fw-p-3 cdw-fw-text-sm cdw-fw-border-left-dashed cdw-fw-radius-md"&gt;Guia discreta&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <h4 class="cdw-fw-docs-subtitle">Sombras &amp; elevacao</h4>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Camadas de profundidade</div>
        <div class="cdw-fw-docs-badge">Design</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-gap-3 cdw-fw-flex-wrap">
          <div class="cdw-fw-p-3 cdw-fw-text-sm cdw-fw-border cdw-fw-radius-lg cdw-fw-shadow-sm">Separacao suave</div>
          <div class="cdw-fw-p-3 cdw-fw-text-sm cdw-fw-border cdw-fw-radius-lg cdw-fw-shadow-md">Destaque moderado</div>
          <div class="cdw-fw-p-3 cdw-fw-text-sm cdw-fw-border cdw-fw-radius-lg cdw-fw-shadow-lg">Camada dominante</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-flex cdw-fw-gap-3 cdw-fw-flex-wrap"&gt;
  &lt;div class="cdw-fw-p-3 cdw-fw-text-sm cdw-fw-border cdw-fw-radius-lg cdw-fw-shadow-sm"&gt;Separacao suave&lt;/div&gt;
  &lt;div class="cdw-fw-p-3 cdw-fw-text-sm cdw-fw-border cdw-fw-radius-lg cdw-fw-shadow-md"&gt;Destaque moderado&lt;/div&gt;
  &lt;div class="cdw-fw-p-3 cdw-fw-text-sm cdw-fw-border cdw-fw-radius-lg cdw-fw-shadow-lg"&gt;Camada dominante&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <h4 class="cdw-fw-docs-subtitle">Gradientes</h4>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Direcao e profundidade</div>
        <div class="cdw-fw-docs-badge">Design</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-gap-3 cdw-fw-flex-wrap">
          <div class="cdw-fw-p-3 cdw-fw-text-sm cdw-fw-radius-lg cdw-fw-gradient-ocean-soft">Fundo narrativo</div>
          <div class="cdw-fw-p-3 cdw-fw-text-sm cdw-fw-radius-lg cdw-fw-gradient-mint-soft">Destaque suave</div>
          <div class="cdw-fw-p-3 cdw-fw-text-sm cdw-fw-radius-lg cdw-fw-gradient-amber-soft">Chamada equilibrada</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-flex cdw-fw-gap-3 cdw-fw-flex-wrap"&gt;
  &lt;div class="cdw-fw-p-3 cdw-fw-text-sm cdw-fw-radius-lg cdw-fw-gradient-ocean-soft"&gt;Fundo narrativo&lt;/div&gt;
  &lt;div class="cdw-fw-p-3 cdw-fw-text-sm cdw-fw-radius-lg cdw-fw-gradient-mint-soft"&gt;Destaque suave&lt;/div&gt;
  &lt;div class="cdw-fw-p-3 cdw-fw-text-sm cdw-fw-radius-lg cdw-fw-gradient-amber-soft"&gt;Chamada equilibrada&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <h4 class="cdw-fw-docs-subtitle">Estados</h4>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Feedback visual</div>
        <div class="cdw-fw-docs-badge">Design</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-gap-2 cdw-fw-flex-wrap">
          <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-accent-sky" type="button">Default</button>
          <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-accent-sky cdw-fw-state-hover" type="button">Hover</button>
          <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-accent-sky cdw-fw-state-focus" type="button">Focus</button>
          <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-accent-sky" type="button" disabled>Disabled</button>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-flex cdw-fw-gap-2 cdw-fw-flex-wrap"&gt;
  &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-accent-sky" type="button"&gt;Default&lt;/button&gt;
  &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-accent-sky cdw-fw-state-hover" type="button"&gt;Hover&lt;/button&gt;
  &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-accent-sky cdw-fw-state-focus" type="button"&gt;Focus&lt;/button&gt;
  &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-accent-sky" type="button" disabled&gt;Disabled&lt;/button&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <h4 class="cdw-fw-docs-subtitle">Motion &amp; transicoes</h4>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Microinteracoes</div>
        <div class="cdw-fw-docs-badge">Design</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-gap-2 cdw-fw-flex-wrap">
          <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-accent-violet" type="button">Passe o mouse</button>
          <button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-accent-violet" type="button">Transicao suave</button>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-flex cdw-fw-gap-2"&gt;
  &lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-accent-violet" type="button"&gt;Passe o mouse&lt;/button&gt;
  &lt;button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-accent-violet" type="button"&gt;Transicao suave&lt;/button&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <h4 class="cdw-fw-docs-subtitle">Acessibilidade</h4>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Contraste e foco</div>
        <div class="cdw-fw-docs-badge">Design</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-gap-3 cdw-fw-flex-wrap">
          <div class="cdw-fw-p-3 cdw-fw-text-sm cdw-fw-border cdw-fw-radius-lg">Contraste minimo</div>
          <a class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-accent-graphite cdw-fw-ring-soft" href="#">Foco visivel</a>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-flex cdw-fw-gap-3 cdw-fw-flex-wrap"&gt;
  &lt;div class="cdw-fw-p-3 cdw-fw-text-sm cdw-fw-border cdw-fw-radius-lg"&gt;Contraste minimo&lt;/div&gt;
  &lt;a class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-accent-graphite cdw-fw-ring-soft" href="#"&gt;Foco visivel&lt;/a&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <h4 class="cdw-fw-docs-subtitle">Tokens do sistema</h4>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Tokens em contexto</div>
        <div class="cdw-fw-docs-badge">Design</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-flex-col cdw-fw-gap-2">
          <div class="cdw-fw-font-mono cdw-fw-text-sm">--cdw-fw-accent-ocean</div>
          <div class="cdw-fw-font-mono cdw-fw-text-sm">--cdw-fw-accent-slate</div>
          <div class="cdw-fw-font-mono cdw-fw-text-sm">--cdw-fw-font</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-fw-flex cdw-fw-flex-col cdw-fw-gap-2"&gt;
  &lt;div class="cdw-fw-font-mono cdw-fw-text-sm"&gt;--cdw-fw-accent-ocean&lt;/div&gt;
  &lt;div class="cdw-fw-font-mono cdw-fw-text-sm"&gt;--cdw-fw-accent-slate&lt;/div&gt;
  &lt;div class="cdw-fw-font-mono cdw-fw-text-sm"&gt;--cdw-fw-font&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>
</section>


`,
  designOverview: `
<section id="design-visao" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Visao geral</h2>
    <p class="cdw-fw-docs-lead">
      O Sistema de Design do CDW-FW define linguagem visual, ritmo e criterios de consistencia.
      Ele orienta escolhas e evita variacoes arbitrarias, mantendo o framework coeso.
    </p>
  </div>
</section>


`,
  designTypography: `
<section id="design-tipografia" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Tipografia</h2>
    <p class="cdw-fw-docs-lead">
      Tipografia define a voz do sistema. Titulos fortes para hierarquia e texto limpo para leitura longa.
    </p>
  </div>
</section>


`,
  designRhythm: `
<section id="design-ritmo" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Ritmo &amp; Espacamento</h2>
    <p class="cdw-fw-docs-lead">
      O CDW-FW trabalha com escala de 4px para manter ritmo vertical. Espaco cria hierarquia e respiracao.
    </p>
  </div>
</section>


`,
  designShapes: `
<section id="design-formas" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Formas &amp; Raios</h2>
    <p class="cdw-fw-docs-lead">
      O CDW-FW alterna cantos retos e suaves conforme o contexto. Raios devem ter intencao, nao ser genericos.
    </p>
  </div>
</section>


`,
  designBorders: `
<section id="design-bordas" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Bordas</h2>
    <p class="cdw-fw-docs-lead">
      Bordas servem para separar e organizar. Elas comunicam estrutura, nao decoracao.
    </p>
  </div>
</section>


`,
  designShadows: `
<section id="design-sombras" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Sombras &amp; Elevacao</h2>
    <p class="cdw-fw-docs-lead">
      Elevacao cria hierarquia. A sombra deve ser precisa e sobria, nunca pesada ou generica.
    </p>
  </div>
</section>


`,
  designGradients: `
<section id="design-gradientes" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Gradientes</h2>
    <p class="cdw-fw-docs-lead">
      Gradientes sao usados para dar profundidade e direcao. Use com moderacao e foco institucional.
    </p>
  </div>
</section>


`,
  designStates: `
<section id="design-estados" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Estados</h2>
    <p class="cdw-fw-docs-lead">
      Estados visuais comunicam interacao: hover, focus, active, disabled e loading.
      O feedback deve ser consistente em todos os componentes.
    </p>
  </div>
</section>


`,
  designMotion: `
<section id="design-motion" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Motion &amp; Transicoes</h2>
    <p class="cdw-fw-docs-lead">
      Animacoes reforcam compreensao, nunca distracao. Use microinteracoes com tempos curtos e easing suave.
    </p>
  </div>
</section>


`,
  designAccessibility: `
<section id="design-acessibilidade" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Acessibilidade</h2>
    <p class="cdw-fw-docs-lead">
      Contraste, foco visivel e legibilidade sustentam a qualidade do sistema em qualquer contexto.
    </p>
  </div>
</section>


`,
  designTokens: `
<section id="design-tokens" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Tokens do Sistema</h2>
    <p class="cdw-fw-docs-lead">
      Tokens conectam cor, espacamento, raio e sombra aos componentes. Eles garantem consistencia global.
    </p>
  </div>
</section>


`,  colors: `
<section id="cores" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
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

  
  <div class="cdw-fw-docs-subsection" id="cores-mono" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Monocromaticas</h3>
    <p class="cdw-fw-docs-subdesc">
      Tons neutros para UI tecnica, hierarquia discreta e fundos institucionais.
      <span class="cdw-fw-docs-when">Quando usar: interfaces administrativas e base neutra.</span>
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
          <div class="cdw-fw-docs-color-swatch cdw-fw-docs-color-swatch--base cdw-fw-accent-ash cdw-fw-bg-accent">Base</div>
          <div class="cdw-fw-docs-color-swatch cdw-fw-accent-ash cdw-fw-bg-accent cdw-fw-soft">Soft</div>
        </div>
      </div>
      <div class="cdw-fw-docs-color-card">
        <div class="cdw-fw-docs-color-name">fog</div>
        <div class="cdw-fw-docs-color-swatches">
          <div class="cdw-fw-docs-color-swatch cdw-fw-docs-color-swatch--base cdw-fw-accent-fog cdw-fw-bg-accent">Base</div>
          <div class="cdw-fw-docs-color-swatch cdw-fw-accent-fog cdw-fw-bg-accent cdw-fw-soft">Soft</div>
        </div>
      </div>
    </div>
  </div><div class="cdw-fw-docs-subsection" id="cores-uso" data-cdw-fw-docs-section>
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
  images: `

<section id="images" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Image</h2>
    <p class="cdw-fw-docs-lead">
      Tratamento visual premium para imagens, com formas, bordas e efeitos sob medida para o CDW-FW.
    </p>
  </div>

  <div class="cdw-fw-docs-toc">
    <span class="cdw-fw-docs-toc-title">Indice desta pagina</span>
    <a href="#image-conceito">Conceito</a>
    <a href="#image-estrutura">Estrutura</a>
    <a href="#image-tamanhos">Tamanhos</a>
    <a href="#image-tipos">Tipos</a>
    <a href="#image-bordas">Bordas</a>
    <a href="#image-alinhamento">Alinhamento</a>
  </div>

  <div class="cdw-fw-docs-subsection" id="image-conceito" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Conceito</h3>
    <p class="cdw-fw-docs-subdesc">
      CDW Image trata a imagem como elemento de design: forma, borda, recorte e efeito fazem parte da hierarquia visual.
      <span class="cdw-fw-docs-when">Quando usar: avatar, destaque, leitura visual e apoio editorial.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-image</span>
      <span>cdw-image--*</span>
      <span>cdw-image-xs</span>
      <span>cdw-image-sm</span>
      <span>cdw-image-md</span>
      <span>cdw-image-lg</span>
      <span>cdw-image-xl</span>
      <span>cdw-fw-accent-*</span>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="image-estrutura" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Estrutura</h3>
    <p class="cdw-fw-docs-subdesc">
      Estrutura minima: um wrapper e uma tag img. Toda a variacao visual fica no wrapper.
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Base obrigatoria</div>
        <div class="cdw-fw-docs-badge">Estrutura</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-image cdw-image--rounded cdw-image-md cdw-fw-accent-ocean">
          <img src="https://picsum.photos/600/400?random=3" alt="Imagem de exemplo">
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-image cdw-image--rounded cdw-image-md cdw-fw-accent-ocean"&gt;
  &lt;img src="https://picsum.photos/600/400?random=3" alt="Imagem de exemplo"&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="image-tamanhos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Tamanhos</h3>
    <p class="cdw-fw-docs-subdesc">
      Os tamanhos mudam proporcao e ritmo visual, nao apenas largura. Escolha pelo contexto.
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-image-xs</span>
      <span>cdw-image-sm</span>
      <span>cdw-image-md</span>
      <span>cdw-image-lg</span>
      <span>cdw-image-xl</span>
    </div>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Escala completa</div>
        <div class="cdw-fw-docs-badge">Tamanhos</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-gap-3 cdw-fw-flex-wrap">
          <div class="cdw-image cdw-image--square cdw-image-xs cdw-fw-accent-slate">
            <img src="https://picsum.photos/160/160?random=11" alt="Imagem xs">
          </div>
          <div class="cdw-image cdw-image--rounded cdw-image-sm cdw-fw-accent-emerald">
            <img src="https://picsum.photos/320/240?random=12" alt="Imagem sm">
          </div>
          <div class="cdw-image cdw-image--frame cdw-image-md cdw-fw-accent-ocean">
            <img src="https://picsum.photos/600/400?random=13" alt="Imagem md">
          </div>
          <div class="cdw-image cdw-image--shadow-soft cdw-image-lg cdw-fw-accent-violet">
            <img src="https://picsum.photos/900/520?random=14" alt="Imagem lg">
          </div>
          <div class="cdw-image cdw-image--overlay cdw-image-xl cdw-fw-accent-sun">
            <img src="https://picsum.photos/1200/520?random=15" alt="Imagem xl">
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-image cdw-image--square cdw-image-xs cdw-fw-accent-slate"&gt;
  &lt;img src="https://picsum.photos/160/160?random=11" alt="Imagem xs"&gt;
&lt;/div&gt;
&lt;div class="cdw-image cdw-image--rounded cdw-image-sm cdw-fw-accent-emerald"&gt;
  &lt;img src="https://picsum.photos/320/240?random=12" alt="Imagem sm"&gt;
&lt;/div&gt;
&lt;div class="cdw-image cdw-image--frame cdw-image-md cdw-fw-accent-ocean"&gt;
  &lt;img src="https://picsum.photos/600/400?random=13" alt="Imagem md"&gt;
&lt;/div&gt;
&lt;div class="cdw-image cdw-image--shadow-soft cdw-image-lg cdw-fw-accent-violet"&gt;
  &lt;img src="https://picsum.photos/900/520?random=14" alt="Imagem lg"&gt;
&lt;/div&gt;
&lt;div class="cdw-image cdw-image--overlay cdw-image-xl cdw-fw-accent-sun"&gt;
  &lt;img src="https://picsum.photos/1200/520?random=15" alt="Imagem xl"&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="image-tipos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Tipos</h3>
    <p class="cdw-fw-docs-subdesc">
      Dez tipos reais com forma, borda ou efeito proprio. Cada exemplo e o codigo exato do preview.
    </p>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Image Square</div>
        <div class="cdw-fw-docs-badge">Tecnico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-image cdw-image--square cdw-image-md cdw-fw-accent-slate">
          <img src="https://picsum.photos/600/600?random=21" alt="Imagem quadrada">
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-image cdw-image--square cdw-image-md cdw-fw-accent-slate"&gt;
  &lt;img src="https://picsum.photos/600/600?random=21" alt="Imagem quadrada"&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Image Rounded</div>
        <div class="cdw-fw-docs-badge">Leitura</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-image cdw-image--rounded cdw-image-lg cdw-fw-accent-ocean">
          <img src="https://picsum.photos/900/520?random=22" alt="Imagem arredondada">
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-image cdw-image--rounded cdw-image-lg cdw-fw-accent-ocean"&gt;
  &lt;img src="https://picsum.photos/900/520?random=22" alt="Imagem arredondada"&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Image Circle</div>
        <div class="cdw-fw-docs-badge">Avatar</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-image cdw-image--circle cdw-image-sm cdw-fw-accent-emerald">
          <img src="https://picsum.photos/400/400?random=23" alt="Imagem circular">
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-image cdw-image--circle cdw-image-sm cdw-fw-accent-emerald"&gt;
  &lt;img src="https://picsum.photos/400/400?random=23" alt="Imagem circular"&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Image Frame</div>
        <div class="cdw-fw-docs-badge">Editorial</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-image cdw-image--frame cdw-image-md cdw-fw-accent-cocoa">
          <img src="https://picsum.photos/640/420?random=24" alt="Imagem com frame">
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-image cdw-image--frame cdw-image-md cdw-fw-accent-cocoa"&gt;
  &lt;img src="https://picsum.photos/640/420?random=24" alt="Imagem com frame"&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Image Border Soft</div>
        <div class="cdw-fw-docs-badge">Apoio</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-image cdw-image--border-soft cdw-image-md cdw-fw-accent-sky">
          <img src="https://picsum.photos/640/420?random=25" alt="Borda suave">
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-image cdw-image--border-soft cdw-image-md cdw-fw-accent-sky"&gt;
  &lt;img src="https://picsum.photos/640/420?random=25" alt="Borda suave"&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Image Border Strong</div>
        <div class="cdw-fw-docs-badge">Destaque</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-image cdw-image--border-strong cdw-image-md cdw-fw-accent-rose">
          <img src="https://picsum.photos/640/420?random=26" alt="Borda forte">
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-image cdw-image--border-strong cdw-image-md cdw-fw-accent-rose"&gt;
  &lt;img src="https://picsum.photos/640/420?random=26" alt="Borda forte"&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Image Edge Accent</div>
        <div class="cdw-fw-docs-badge">Sistema</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-image cdw-image--edge-accent cdw-image-md cdw-fw-accent-forest">
          <img src="https://picsum.photos/640/420?random=27" alt="Destaque lateral">
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-image cdw-image--edge-accent cdw-image-md cdw-fw-accent-forest"&gt;
  &lt;img src="https://picsum.photos/640/420?random=27" alt="Destaque lateral"&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Image Shadow Soft</div>
        <div class="cdw-fw-docs-badge">Elegante</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-image cdw-image--shadow-soft cdw-image-md cdw-fw-accent-indigo">
          <img src="https://picsum.photos/640/420?random=28" alt="Sombra suave">
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-image cdw-image--shadow-soft cdw-image-md cdw-fw-accent-indigo"&gt;
  &lt;img src="https://picsum.photos/640/420?random=28" alt="Sombra suave"&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Image Shadow Layer</div>
        <div class="cdw-fw-docs-badge">Camadas</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-image cdw-image--shadow-layer cdw-image-md cdw-fw-accent-lilac">
          <img src="https://picsum.photos/640/420?random=29" alt="Sombra em camadas">
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-image cdw-image--shadow-layer cdw-image-md cdw-fw-accent-lilac"&gt;
  &lt;img src="https://picsum.photos/640/420?random=29" alt="Sombra em camadas"&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Image Overlay</div>
        <div class="cdw-fw-docs-badge">Leitura</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-image cdw-image--overlay cdw-image-lg cdw-fw-accent-sun">
          <img src="https://picsum.photos/900/520?random=30" alt="Overlay leve">
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-image cdw-image--overlay cdw-image-lg cdw-fw-accent-sun"&gt;
  &lt;img src="https://picsum.photos/900/520?random=30" alt="Overlay leve"&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Image Placeholder</div>
        <div class="cdw-fw-docs-badge">Estado</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-image cdw-image--placeholder cdw-image-md cdw-fw-accent-slate">
          <img src="https://picsum.photos/640/420?random=31" alt="Imagem em placeholder">
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-image cdw-image--placeholder cdw-image-md cdw-fw-accent-slate"&gt;
  &lt;img src="https://picsum.photos/640/420?random=31" alt="Imagem em placeholder"&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="image-bordas" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Bordas</h3>
    <p class="cdw-fw-docs-subdesc">
      Bordas combinaveis com qualquer tipo. Solida, dupla, tracejada, assimetrica e com recorte.
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-image-border-solid</span>
      <span>cdw-image-border-double</span>
      <span>cdw-image-border-dashed</span>
      <span>cdw-image-border-asym</span>
      <span>cdw-image-border-notch</span>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Variacoes de borda</div>
        <div class="cdw-fw-docs-badge">Bordas</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-fw-flex cdw-fw-gap-3 cdw-fw-flex-wrap">
          <div class="cdw-image cdw-image--square cdw-image-sm cdw-image-border-solid cdw-fw-accent-ocean">
            <img src="https://picsum.photos/320/320?random=41" alt="Borda solida">
          </div>
          <div class="cdw-image cdw-image--rounded cdw-image-sm cdw-image-border-double cdw-fw-accent-cocoa">
            <img src="https://picsum.photos/320/240?random=42" alt="Borda dupla">
          </div>
          <div class="cdw-image cdw-image--square cdw-image-sm cdw-image-border-dashed cdw-fw-accent-emerald">
            <img src="https://picsum.photos/320/320?random=43" alt="Borda tracejada">
          </div>
          <div class="cdw-image cdw-image--rounded cdw-image-sm cdw-image-border-asym cdw-fw-accent-rose">
            <img src="https://picsum.photos/320/240?random=44" alt="Borda assimetrica">
          </div>
          <div class="cdw-image cdw-image--square cdw-image-sm cdw-image-border-notch cdw-fw-accent-slate">
            <img src="https://picsum.photos/320/320?random=45" alt="Borda com recorte">
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-image cdw-image--square cdw-image-sm cdw-image-border-solid cdw-fw-accent-ocean"&gt;
  &lt;img src="https://picsum.photos/320/320?random=41" alt="Borda solida"&gt;
&lt;/div&gt;
&lt;div class="cdw-image cdw-image--rounded cdw-image-sm cdw-image-border-double cdw-fw-accent-cocoa"&gt;
  &lt;img src="https://picsum.photos/320/240?random=42" alt="Borda dupla"&gt;
&lt;/div&gt;
&lt;div class="cdw-image cdw-image--square cdw-image-sm cdw-image-border-dashed cdw-fw-accent-emerald"&gt;
  &lt;img src="https://picsum.photos/320/320?random=43" alt="Borda tracejada"&gt;
&lt;/div&gt;
&lt;div class="cdw-image cdw-image--rounded cdw-image-sm cdw-image-border-asym cdw-fw-accent-rose"&gt;
  &lt;img src="https://picsum.photos/320/240?random=44" alt="Borda assimetrica"&gt;
&lt;/div&gt;
&lt;div class="cdw-image cdw-image--square cdw-image-sm cdw-image-border-notch cdw-fw-accent-slate"&gt;
  &lt;img src="https://picsum.photos/320/320?random=45" alt="Borda com recorte"&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="image-alinhamento" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Alinhamento</h3>
    <p class="cdw-fw-docs-subdesc">
      Uso combinado para inline, centralizado e flutuado sem criar novos componentes.
    </p>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Inline e centralizado</div>
        <div class="cdw-fw-docs-badge">Uso</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-image cdw-image--circle cdw-image-xs cdw-image--inline cdw-fw-accent-ocean">
          <img src="https://picsum.photos/160/160?random=51" alt="Inline avatar">
        </div>
        <div class="cdw-image cdw-image--rounded cdw-image-sm cdw-image--inline cdw-fw-accent-emerald" style="margin-left:8px;">
          <img src="https://picsum.photos/320/240?random=52" alt="Inline apoio">
        </div>
        <div class="cdw-image cdw-image--frame cdw-image-md cdw-image--center cdw-fw-accent-slate" style="margin-top:12px;">
          <img src="https://picsum.photos/640/420?random=53" alt="Imagem centralizada">
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-image cdw-image--circle cdw-image-xs cdw-image--inline cdw-fw-accent-ocean"&gt;
  &lt;img src="https://picsum.photos/160/160?random=51" alt="Inline avatar"&gt;
&lt;/div&gt;
&lt;div class="cdw-image cdw-image--rounded cdw-image-sm cdw-image--inline cdw-fw-accent-emerald"&gt;
  &lt;img src="https://picsum.photos/320/240?random=52" alt="Inline apoio"&gt;
&lt;/div&gt;
&lt;div class="cdw-image cdw-image--frame cdw-image-md cdw-image--center cdw-fw-accent-slate"&gt;
  &lt;img src="https://picsum.photos/640/420?random=53" alt="Imagem centralizada"&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Float esquerda e direita</div>
        <div class="cdw-fw-docs-badge">Leitura</div>
      </div>
      <div class="cdw-fw-docs-preview" style="overflow:hidden;">
        <div class="cdw-image cdw-image--rounded cdw-image-sm cdw-image--float-left cdw-fw-accent-ocean">
          <img src="https://picsum.photos/320/240?random=54" alt="Float esquerda">
        </div>
        <div class="cdw-image cdw-image--rounded cdw-image-sm cdw-image--float-right cdw-fw-accent-rose">
          <img src="https://picsum.photos/320/240?random=55" alt="Float direita">
        </div>
        <p style="margin:0; color:#1f2937;">
          Bloco de texto curto para demonstrar leitura com imagem flutuada em ambos os lados. A imagem nao vira galeria,
          apenas organiza o fluxo visual do conteudo.
        </p>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-image cdw-image--rounded cdw-image-sm cdw-image--float-left cdw-fw-accent-ocean"&gt;
  &lt;img src="https://picsum.photos/320/240?random=54" alt="Float esquerda"&gt;
&lt;/div&gt;
&lt;div class="cdw-image cdw-image--rounded cdw-image-sm cdw-image--float-right cdw-fw-accent-rose"&gt;
  &lt;img src="https://picsum.photos/320/240?random=55" alt="Float direita"&gt;
&lt;/div&gt;
&lt;p&gt;Bloco de texto curto para demonstrar leitura com imagem flutuada em ambos os lados.&lt;/p&gt;</code></pre>
      </div>
    </div>
  </div>
</section>

`,
  fab: `
<section id="fab" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Floating Action Button</h2>
    <p class="cdw-fw-docs-lead">
      Botao flutuante para acoes globais, com visual premium e interacoes elegantes.
    </p>
  </div>

  <div class="cdw-fw-docs-toc">
    <span class="cdw-fw-docs-toc-title">Indice desta pagina</span>
    <a href="#fab-conceito">Conceito</a>
    <a href="#fab-estrutura">Estrutura</a>
    <a href="#fab-posicionamento">Posicionamento</a>
    <a href="#fab-formas">Formas</a>
    <a href="#fab-tamanhos">Tamanhos</a>
    <a href="#fab-modelos">Modelos</a>
    <a href="#fab-exemplos">Exemplos de uso</a>
  </div>

  <div class="cdw-fw-docs-subsection" id="fab-conceito" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Conceito</h3>
    <p class="cdw-fw-docs-subdesc">
      cdw-fab e um botao flutuante fixo com foco em acao rapida e contexto global.
      <span class="cdw-fw-docs-when">Quando usar: ajuda, contato, acao principal ou menu rapido.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-fab</span>
      <span>cdw-fab-main</span>
      <span>cdw-fab-actions</span>
      <span>cdw-fab-action</span>
      <span>cdw-fab--br</span>
      <span>cdw-fab--circle</span>
      <span>cdw-fab--md</span>
      <span>cdw-fw-accent-*</span>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="fab-estrutura" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Estrutura</h3>
    <p class="cdw-fw-docs-subdesc">Estrutura base com botao principal e, opcionalmente, acoes secundarias.</p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Base obrigatoria</div>
        <div class="cdw-fw-docs-badge">Estrutura</div>
      </div>
      <div class="cdw-fw-docs-preview cdw-fw-docs-preview--fab">
        <div class="cdw-fab cdw-fab--simple cdw-fab--br cdw-fab--md cdw-fab--circle cdw-fw-accent-ocean" aria-label="FAB base">
          <button class="cdw-fab-main" type="button" aria-label="Ajuda">?</button>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class=&quot;cdw-fab cdw-fab--simple cdw-fab--br cdw-fab--md cdw-fab--circle cdw-fw-accent-ocean&quot;&gt;
  &lt;button class=&quot;cdw-fab-main&quot; type=&quot;button&quot; aria-label=&quot;Ajuda&quot;&gt;?&lt;/button&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="fab-posicionamento" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Posicionamento</h3>
    <p class="cdw-fw-docs-subdesc">O FAB pode ser fixado em oito pontos da viewport usando classes.</p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Mapa de posicoes</div>
        <div class="cdw-fw-docs-badge">Posicao</div>
      </div>
      <div class="cdw-fw-docs-preview cdw-fw-docs-preview--fab">
        <div class="cdw-fab cdw-fab--tl cdw-fab--sm cdw-fab--circle cdw-fw-accent-sky">
          <button class="cdw-fab-main" type="button" aria-label="Top left">TL</button>
        </div>
        <div class="cdw-fab cdw-fab--tr cdw-fab--sm cdw-fab--circle cdw-fw-accent-amber">
          <button class="cdw-fab-main" type="button" aria-label="Top right">TR</button>
        </div>
        <div class="cdw-fab cdw-fab--tc cdw-fab--sm cdw-fab--circle cdw-fw-accent-mint">
          <button class="cdw-fab-main" type="button" aria-label="Top center">TC</button>
        </div>
        <div class="cdw-fab cdw-fab--cl cdw-fab--sm cdw-fab--circle cdw-fw-accent-indigo">
          <button class="cdw-fab-main" type="button" aria-label="Center left">CL</button>
        </div>
        <div class="cdw-fab cdw-fab--cr cdw-fab--sm cdw-fab--circle cdw-fw-accent-rose">
          <button class="cdw-fab-main" type="button" aria-label="Center right">CR</button>
        </div>
        <div class="cdw-fab cdw-fab--bl cdw-fab--sm cdw-fab--circle cdw-fw-accent-ocean">
          <button class="cdw-fab-main" type="button" aria-label="Bottom left">BL</button>
        </div>
        <div class="cdw-fab cdw-fab--br cdw-fab--sm cdw-fab--circle cdw-fw-accent-graphite">
          <button class="cdw-fab-main" type="button" aria-label="Bottom right">BR</button>
        </div>
        <div class="cdw-fab cdw-fab--bc cdw-fab--sm cdw-fab--circle cdw-fw-accent-cocoa">
          <button class="cdw-fab-main" type="button" aria-label="Bottom center">BC</button>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class=&quot;cdw-fab cdw-fab--tl cdw-fab--sm cdw-fab--circle cdw-fw-accent-sky&quot;&gt;
  &lt;button class=&quot;cdw-fab-main&quot; type=&quot;button&quot;&gt;TL&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;cdw-fab cdw-fab--tr cdw-fab--sm cdw-fab--circle cdw-fw-accent-amber&quot;&gt;
  &lt;button class=&quot;cdw-fab-main&quot; type=&quot;button&quot;&gt;TR&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;cdw-fab cdw-fab--tc cdw-fab--sm cdw-fab--circle cdw-fw-accent-mint&quot;&gt;
  &lt;button class=&quot;cdw-fab-main&quot; type=&quot;button&quot;&gt;TC&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;cdw-fab cdw-fab--cl cdw-fab--sm cdw-fab--circle cdw-fw-accent-indigo&quot;&gt;
  &lt;button class=&quot;cdw-fab-main&quot; type=&quot;button&quot;&gt;CL&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;cdw-fab cdw-fab--cr cdw-fab--sm cdw-fab--circle cdw-fw-accent-rose&quot;&gt;
  &lt;button class=&quot;cdw-fab-main&quot; type=&quot;button&quot;&gt;CR&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;cdw-fab cdw-fab--bl cdw-fab--sm cdw-fab--circle cdw-fw-accent-ocean&quot;&gt;
  &lt;button class=&quot;cdw-fab-main&quot; type=&quot;button&quot;&gt;BL&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;cdw-fab cdw-fab--br cdw-fab--sm cdw-fab--circle cdw-fw-accent-graphite&quot;&gt;
  &lt;button class=&quot;cdw-fab-main&quot; type=&quot;button&quot;&gt;BR&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;cdw-fab cdw-fab--bc cdw-fab--sm cdw-fab--circle cdw-fw-accent-cocoa&quot;&gt;
  &lt;button class=&quot;cdw-fab-main&quot; type=&quot;button&quot;&gt;BC&lt;/button&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="fab-formas" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Formas</h3>
    <p class="cdw-fw-docs-subdesc">Circular, quadrado e octagono com recorte real.</p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Variacoes de forma</div>
        <div class="cdw-fw-docs-badge">Forma</div>
      </div>
      <div class="cdw-fw-docs-preview cdw-fw-docs-preview--fab">
        <div class="cdw-fab cdw-fab--bl cdw-fab--md cdw-fab--circle cdw-fw-accent-ocean">
          <button class="cdw-fab-main" type="button" aria-label="Circular">O</button>
        </div>
        <div class="cdw-fab cdw-fab--bc cdw-fab--md cdw-fab--square cdw-fw-accent-amber">
          <button class="cdw-fab-main" type="button" aria-label="Square">Q</button>
        </div>
        <div class="cdw-fab cdw-fab--br cdw-fab--md cdw-fab--octagon cdw-fw-accent-violet">
          <button class="cdw-fab-main" type="button" aria-label="Octagon">O</button>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class=&quot;cdw-fab cdw-fab--bl cdw-fab--md cdw-fab--circle cdw-fw-accent-ocean&quot;&gt;
  &lt;button class=&quot;cdw-fab-main&quot; type=&quot;button&quot;&gt;O&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;cdw-fab cdw-fab--bc cdw-fab--md cdw-fab--square cdw-fw-accent-amber&quot;&gt;
  &lt;button class=&quot;cdw-fab-main&quot; type=&quot;button&quot;&gt;Q&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;cdw-fab cdw-fab--br cdw-fab--md cdw-fab--octagon cdw-fw-accent-violet&quot;&gt;
  &lt;button class=&quot;cdw-fab-main&quot; type=&quot;button&quot;&gt;O&lt;/button&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="fab-tamanhos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Tamanhos</h3>
    <p class="cdw-fw-docs-subdesc">Escalas reais para o botao completo e icone.</p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">sm, md, lg</div>
        <div class="cdw-fw-docs-badge">Tamanho</div>
      </div>
      <div class="cdw-fw-docs-preview cdw-fw-docs-preview--fab">
        <div class="cdw-fab cdw-fab--bl cdw-fab--sm cdw-fab--circle cdw-fw-accent-sky">
          <button class="cdw-fab-main" type="button" aria-label="Small">S</button>
        </div>
        <div class="cdw-fab cdw-fab--bc cdw-fab--md cdw-fab--circle cdw-fw-accent-ocean">
          <button class="cdw-fab-main" type="button" aria-label="Medium">M</button>
        </div>
        <div class="cdw-fab cdw-fab--br cdw-fab--lg cdw-fab--circle cdw-fw-accent-graphite">
          <button class="cdw-fab-main" type="button" aria-label="Large">L</button>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class=&quot;cdw-fab cdw-fab--bl cdw-fab--sm cdw-fab--circle cdw-fw-accent-sky&quot;&gt;
  &lt;button class=&quot;cdw-fab-main&quot; type=&quot;button&quot;&gt;S&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;cdw-fab cdw-fab--bc cdw-fab--md cdw-fab--circle cdw-fw-accent-ocean&quot;&gt;
  &lt;button class=&quot;cdw-fab-main&quot; type=&quot;button&quot;&gt;M&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;cdw-fab cdw-fab--br cdw-fab--lg cdw-fab--circle cdw-fw-accent-graphite&quot;&gt;
  &lt;button class=&quot;cdw-fab-main&quot; type=&quot;button&quot;&gt;L&lt;/button&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="fab-modelos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Modelos</h3>
    <p class="cdw-fw-docs-subdesc">Seis modelos distintos com comportamento proprio.</p>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">FAB Simple</div>
        <div class="cdw-fw-docs-badge">Modelo</div>
      </div>
      <div class="cdw-fw-docs-preview cdw-fw-docs-preview--fab">
        <div class="cdw-fab cdw-fab--simple cdw-fab--br cdw-fab--md cdw-fab--circle cdw-fw-accent-ocean">
          <button class="cdw-fab-main" type="button" aria-label="Ajuda">?</button>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class=&quot;cdw-fab cdw-fab--simple cdw-fab--br cdw-fab--md cdw-fab--circle cdw-fw-accent-ocean&quot;&gt;
  &lt;button class=&quot;cdw-fab-main&quot; type=&quot;button&quot; aria-label=&quot;Ajuda&quot;&gt;?&lt;/button&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">FAB WhatsApp</div>
        <div class="cdw-fw-docs-badge">WhatsApp</div>
      </div>
      <div class="cdw-fw-docs-preview cdw-fw-docs-preview--fab">
        <div class="cdw-fab cdw-fab--whatsapp cdw-fab--bl cdw-fab--md cdw-fab--circle" data-phone="5511999999999" data-message="Quero suporte rapido">
          <a class="cdw-fab-main" aria-label="WhatsApp">
            <svg viewBox="0 0 32 32" width="50" height="50" aria-hidden="true" focusable="false">
              <path fill="currentColor" d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class=&quot;cdw-fab cdw-fab--whatsapp cdw-fab--bl cdw-fab--md cdw-fab--circle&quot; data-phone=&quot;5511999999999&quot; data-message=&quot;Quero suporte rapido&quot;&gt;
  &lt;a class=&quot;cdw-fab-main&quot; aria-label=&quot;WhatsApp&quot;&gt;
    &lt;svg viewBox=&quot;0 0 32 32&quot; width=&quot;50&quot; height=&quot;50&quot; aria-hidden=&quot;true&quot; focusable=&quot;false&quot;&gt;
      &lt;path fill=&quot;currentColor&quot; d=&quot; M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z&quot;/&gt;
    &lt;/svg&gt;
  &lt;/a&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">FAB Menu Radial</div>
        <div class="cdw-fw-docs-badge">Radial</div>
      </div>
      <div class="cdw-fw-docs-preview cdw-fw-docs-preview--fab">
        <div class="cdw-fab cdw-fab--radial cdw-fab--br cdw-fab--md cdw-fab--circle cdw-fw-accent-rose">
          <button class="cdw-fab-main" type="button" aria-label="Menu">+</button>
          <div class="cdw-fab-actions" aria-hidden="true">
            <button class="cdw-fab-action cdw-fab-action--1" type="button" aria-label="Nova tarefa">N</button>
            <button class="cdw-fab-action cdw-fab-action--2" type="button" aria-label="Buscar">B</button>
            <button class="cdw-fab-action cdw-fab-action--3" type="button" aria-label="Filtro">F</button>
            <button class="cdw-fab-action cdw-fab-action--4" type="button" aria-label="Calendario">C</button>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class=&quot;cdw-fab cdw-fab--radial cdw-fab--br cdw-fab--md cdw-fab--circle cdw-fw-accent-rose&quot;&gt;
  &lt;button class=&quot;cdw-fab-main&quot; type=&quot;button&quot; aria-label=&quot;Menu&quot;&gt;+&lt;/button&gt;
  &lt;div class=&quot;cdw-fab-actions&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;button class=&quot;cdw-fab-action cdw-fab-action--1&quot; type=&quot;button&quot; aria-label=&quot;Nova tarefa&quot;&gt;N&lt;/button&gt;
    &lt;button class=&quot;cdw-fab-action cdw-fab-action--2&quot; type=&quot;button&quot; aria-label=&quot;Buscar&quot;&gt;B&lt;/button&gt;
    &lt;button class=&quot;cdw-fab-action cdw-fab-action--3&quot; type=&quot;button&quot; aria-label=&quot;Filtro&quot;&gt;F&lt;/button&gt;
    &lt;button class=&quot;cdw-fab-action cdw-fab-action--4&quot; type=&quot;button&quot; aria-label=&quot;Calendario&quot;&gt;C&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">FAB Menu Stack</div>
        <div class="cdw-fw-docs-badge">Stack</div>
      </div>
      <div class="cdw-fw-docs-preview cdw-fw-docs-preview--fab">
        <div class="cdw-fab cdw-fab--stack cdw-fab--tr cdw-fab--md cdw-fab--square cdw-fw-accent-indigo">
          <button class="cdw-fab-main" type="button" aria-label="Acoes">+</button>
          <div class="cdw-fab-actions" aria-hidden="true">
            <button class="cdw-fab-action-pill" type="button" aria-label="Criar">
              <span class="cdw-fab-action-icon">+</span>
              <span>Criar</span>
            </button>
            <button class="cdw-fab-action-pill" type="button" aria-label="Duplicar">
              <span class="cdw-fab-action-icon">D</span>
              <span>Duplicar</span>
            </button>
            <button class="cdw-fab-action-pill" type="button" aria-label="Arquivar">
              <span class="cdw-fab-action-icon">A</span>
              <span>Arquivar</span>
            </button>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class=&quot;cdw-fab cdw-fab--stack cdw-fab--tr cdw-fab--md cdw-fab--square cdw-fw-accent-indigo&quot;&gt;
  &lt;button class=&quot;cdw-fab-main&quot; type=&quot;button&quot; aria-label=&quot;Acoes&quot;&gt;+&lt;/button&gt;
  &lt;div class=&quot;cdw-fab-actions&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;button class=&quot;cdw-fab-action-pill&quot; type=&quot;button&quot; aria-label=&quot;Criar&quot;&gt;
      &lt;span class=&quot;cdw-fab-action-icon&quot;&gt;+&lt;/span&gt;
      &lt;span&gt;Criar&lt;/span&gt;
    &lt;/button&gt;
    &lt;button class=&quot;cdw-fab-action-pill&quot; type=&quot;button&quot; aria-label=&quot;Duplicar&quot;&gt;
      &lt;span class=&quot;cdw-fab-action-icon&quot;&gt;D&lt;/span&gt;
      &lt;span&gt;Duplicar&lt;/span&gt;
    &lt;/button&gt;
    &lt;button class=&quot;cdw-fab-action-pill&quot; type=&quot;button&quot; aria-label=&quot;Arquivar&quot;&gt;
      &lt;span class=&quot;cdw-fab-action-icon&quot;&gt;A&lt;/span&gt;
      &lt;span&gt;Arquivar&lt;/span&gt;
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">FAB Contextual</div>
        <div class="cdw-fw-docs-badge">Contexto</div>
      </div>
      <div class="cdw-fw-docs-preview cdw-fw-docs-preview--fab">
        <div class="cdw-fab cdw-fab--contextual cdw-fab--cl cdw-fab--md cdw-fab--circle cdw-fw-accent-amber">
          <button class="cdw-fab-main" type="button" aria-label="Notificacoes">
            !
            <span class="cdw-fab-badge">3</span>
          </button>
          <div class="cdw-fab-actions" aria-hidden="true">
            <button class="cdw-fab-action" type="button" aria-label="Urgente">U</button>
            <button class="cdw-fab-action" type="button" aria-label="Aviso">A</button>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class=&quot;cdw-fab cdw-fab--contextual cdw-fab--cl cdw-fab--md cdw-fab--circle cdw-fw-accent-amber&quot;&gt;
  &lt;button class=&quot;cdw-fab-main&quot; type=&quot;button&quot; aria-label=&quot;Notificacoes&quot;&gt;
    !
    &lt;span class=&quot;cdw-fab-badge&quot;&gt;3&lt;/span&gt;
  &lt;/button&gt;
  &lt;div class=&quot;cdw-fab-actions&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;button class=&quot;cdw-fab-action&quot; type=&quot;button&quot; aria-label=&quot;Urgente&quot;&gt;U&lt;/button&gt;
    &lt;button class=&quot;cdw-fab-action&quot; type=&quot;button&quot; aria-label=&quot;Aviso&quot;&gt;A&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">FAB Multi-Action Premium</div>
        <div class="cdw-fw-docs-badge">Premium</div>
      </div>
      <div class="cdw-fw-docs-preview cdw-fw-docs-preview--fab">
        <div class="cdw-fab cdw-fab--premium cdw-fab--br cdw-fab--lg cdw-fab--circle cdw-fw-accent-violet">
          <button class="cdw-fab-main" type="button" aria-label="Painel">+</button>
          <div class="cdw-fab-actions" aria-hidden="true">
            <button class="cdw-fab-action cdw-fab-action--1" type="button" aria-label="Agenda">A</button>
            <button class="cdw-fab-action cdw-fab-action--2" type="button" aria-label="Relatorio">R</button>
            <button class="cdw-fab-action cdw-fab-action--3" type="button" aria-label="Equipe">E</button>
            <button class="cdw-fab-action cdw-fab-action--4" type="button" aria-label="Notas">N</button>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class=&quot;cdw-fab cdw-fab--premium cdw-fab--br cdw-fab--lg cdw-fab--circle cdw-fw-accent-violet&quot;&gt;
  &lt;button class=&quot;cdw-fab-main&quot; type=&quot;button&quot; aria-label=&quot;Painel&quot;&gt;+&lt;/button&gt;
  &lt;div class=&quot;cdw-fab-actions&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;button class=&quot;cdw-fab-action cdw-fab-action--1&quot; type=&quot;button&quot; aria-label=&quot;Agenda&quot;&gt;A&lt;/button&gt;
    &lt;button class=&quot;cdw-fab-action cdw-fab-action--2&quot; type=&quot;button&quot; aria-label=&quot;Relatorio&quot;&gt;R&lt;/button&gt;
    &lt;button class=&quot;cdw-fab-action cdw-fab-action--3&quot; type=&quot;button&quot; aria-label=&quot;Equipe&quot;&gt;E&lt;/button&gt;
    &lt;button class=&quot;cdw-fab-action cdw-fab-action--4&quot; type=&quot;button&quot; aria-label=&quot;Notas&quot;&gt;N&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="fab-exemplos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Exemplos de uso</h3>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Ajuda global</div>
        <div class="cdw-fw-docs-badge">Uso</div>
      </div>
      <div class="cdw-fw-docs-preview cdw-fw-docs-preview--fab">
        <div class="cdw-fab cdw-fab--simple cdw-fab--cr cdw-fab--md cdw-fab--circle cdw-fw-accent-graphite">
          <button class="cdw-fab-main" type="button" aria-label="Ajuda">?</button>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class=&quot;cdw-fab cdw-fab--simple cdw-fab--cr cdw-fab--md cdw-fab--circle cdw-fw-accent-graphite&quot;&gt;
  &lt;button class=&quot;cdw-fab-main&quot; type=&quot;button&quot; aria-label=&quot;Ajuda&quot;&gt;?&lt;/button&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>
</section>

`,

  tables: `

<section id="tables" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Tabelas</h2>
    <p class="cdw-fw-docs-lead">
      Tabelas narrativas e contextuais para leitura rapida, com identidade premium CDW-FW.
    </p>
  </div>

  <div class="cdw-fw-docs-toc">
    <span class="cdw-fw-docs-toc-title">Indice desta pagina</span>
    <a href="#tables-conceito">Conceito</a>
    <a href="#tables-estrutura">Estrutura</a>
    <a href="#tables-opcoes">Opcoes</a>
    <a href="#tables-variacoes">Variacoes</a>
    <a href="#tables-tamanhos">Tamanhos</a>
    <a href="#tables-estados">Estados</a>
    <a href="#tables-surface">Table Surface</a>
    <a href="#tables-rail">Table Rail</a>
    <a href="#tables-focus">Table Focus</a>
    <a href="#tables-split">Table Split</a>
    <a href="#tables-timeline">Table Timeline</a>
    <a href="#tables-minimal">Table Minimal</a>
    <a href="#tables-responsivo">Responsivo</a>
  </div>

  <div class="cdw-fw-docs-subsection" id="tables-conceito" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Conceito</h3>
    <p class="cdw-fw-docs-subdesc">
      Leitura em blocos e ritmo visual, sem grid agressivo. Ideal para admin, ERP e ambientes operacionais.
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-table</span>
      <span>cdw-table-header</span>
      <span>cdw-table-body</span>
      <span>cdw-table-row</span>
      <span>cdw-table-cell</span>
      <span>cdw-table-actions</span>
      <span>cdw-table-*</span>
      <span>row-*</span>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="tables-estrutura" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Estrutura</h3>
    <p class="cdw-fw-docs-subdesc">
      Header separado, body em blocos e linhas com estados. Use data-label para responsivo ou deixe o JS sincronizar pelo header.
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Base do componente</div>
        <div class="cdw-fw-docs-badge">Estrutura</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-table cdw-table-surface cdw-table-sm cdw-table-grid cdw-fw-accent-ocean">
          <div class="cdw-table-header">
            <div class="cdw-table-cell">Modulo</div>
            <div class="cdw-table-cell">Status</div>
            <div class="cdw-table-cell">Owner</div>
            <div class="cdw-table-cell">Acoes</div>
          </div>
          <div class="cdw-table-body">
            <div class="cdw-table-row row-default">
              <div class="cdw-table-cell" data-label="Modulo">
                Tokens base
                <span class="cdw-table-meta">Atualizado hoje</span>
              </div>
              <div class="cdw-table-cell" data-label="Status">Ativo</div>
              <div class="cdw-table-cell" data-label="Owner">UI Core</div>
              <div class="cdw-table-cell cdw-table-actions" data-label="Acoes">
                <button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--sm cdw-fw-btn--rounded">Abrir</button>
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
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-table cdw-table-surface cdw-table-sm cdw-table-grid cdw-fw-accent-ocean"&gt;
  &lt;div class="cdw-table-header"&gt;
    &lt;div class="cdw-table-cell"&gt;Modulo&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Status&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Owner&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Acoes&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-table-body"&gt;
    &lt;div class="cdw-table-row row-default"&gt;
      &lt;div class="cdw-table-cell" data-label="Modulo"&gt;
        Tokens base
        &lt;span class="cdw-table-meta"&gt;Atualizado hoje&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Status"&gt;Ativo&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Owner"&gt;UI Core&lt;/div&gt;
      &lt;div class="cdw-table-cell cdw-table-actions" data-label="Acoes"&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Abrir&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="tables-opcoes" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Opcoes</h3>
    <p class="cdw-fw-docs-subdesc">
      Controle grade, hover, zebra, cores e bordas via classes. Sem grade e com hover ja sao o padrao.
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-table-grid</span>
      <span>cdw-table-no-grid</span>
      <span>cdw-table-no-hover</span>
      <span>cdw-table-zebra</span>
      <span>cdw-table-head-accent</span>
      <span>cdw-table-head-strong</span>
      <span>cdw-table-row-accent</span>
      <span>cdw-table-row-muted</span>
      <span>cdw-table-surface-muted</span>
      <span>cdw-table-surface-accent</span>
      <span>cdw-table-border-all</span>
      <span>cdw-table-border-top</span>
      <span>cdw-table-border-right</span>
      <span>cdw-table-border-bottom</span>
      <span>cdw-table-border-left</span>
      <span>cdw-table-border-none</span>
      <span>cdw-table-cell-border-all</span>
      <span>cdw-table-cell-border-top</span>
      <span>cdw-table-cell-border-right</span>
      <span>cdw-table-cell-border-bottom</span>
      <span>cdw-table-cell-border-left</span>
      <span>cdw-table-cell-border-none</span>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="tables-tamanhos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Tamanhos</h3>
    <p class="cdw-fw-docs-subdesc">Altura da linha, padding interno e espacamento entre blocos.</p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-table-sm</span>
      <span>cdw-table-md</span>
      <span>cdw-table-lg</span>
    </div>
  </div>
  <div class="cdw-fw-docs-subsection" id="tables-estados" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Estados de linha</h3>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Row states</div>
        <div class="cdw-fw-docs-badge">Estados</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-table cdw-table-minimal cdw-table-sm cdw-fw-accent-rose">
          <div class="cdw-table-body">
            <div class="cdw-table-row row-default">
              <div class="cdw-table-cell" data-label="Estado">row-default</div>
              <div class="cdw-table-cell" data-label="Nota">Padrao</div>
            </div>
            <div class="cdw-table-row row-hover">
              <div class="cdw-table-cell" data-label="Estado">row-hover</div>
              <div class="cdw-table-cell" data-label="Nota">Hover aplicado</div>
            </div>
            <div class="cdw-table-row row-active">
              <div class="cdw-table-cell" data-label="Estado">row-active</div>
              <div class="cdw-table-cell" data-label="Nota">Linha em foco</div>
            </div>
            <div class="cdw-table-row row-selected">
              <div class="cdw-table-cell" data-label="Estado">row-selected</div>
              <div class="cdw-table-cell" data-label="Nota">Selecionada</div>
            </div>
            <div class="cdw-table-row row-disabled">
              <div class="cdw-table-cell" data-label="Estado">row-disabled</div>
              <div class="cdw-table-cell" data-label="Nota">Bloqueada</div>
            </div>
            <div class="cdw-table-row row-alert">
              <div class="cdw-table-cell" data-label="Estado">row-alert</div>
              <div class="cdw-table-cell" data-label="Nota">Atencao</div>
            </div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-table cdw-table-minimal cdw-table-sm cdw-fw-accent-rose"&gt;
  &lt;div class="cdw-table-body"&gt;
    &lt;div class="cdw-table-row row-default"&gt;
      &lt;div class="cdw-table-cell" data-label="Estado"&gt;row-default&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Nota"&gt;Padrao&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-table-row row-hover"&gt;
      &lt;div class="cdw-table-cell" data-label="Estado"&gt;row-hover&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Nota"&gt;Hover aplicado&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-table-row row-active"&gt;
      &lt;div class="cdw-table-cell" data-label="Estado"&gt;row-active&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Nota"&gt;Linha em foco&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-table-row row-selected"&gt;
      &lt;div class="cdw-table-cell" data-label="Estado"&gt;row-selected&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Nota"&gt;Selecionada&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-table-row row-disabled"&gt;
      &lt;div class="cdw-table-cell" data-label="Estado"&gt;row-disabled&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Nota"&gt;Bloqueada&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-table-row row-alert"&gt;
      &lt;div class="cdw-table-cell" data-label="Estado"&gt;row-alert&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Nota"&gt;Atencao&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="tables-surface" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Table Surface</h3>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Surface</div>
        <div class="cdw-fw-docs-badge">Modelo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-table cdw-table-surface cdw-table-md cdw-fw-accent-ocean">
          <div class="cdw-table-header">
            <div class="cdw-table-cell">Modulo</div>
            <div class="cdw-table-cell">Etapa</div>
            <div class="cdw-table-cell">Owner</div>
            <div class="cdw-table-cell">Acoes</div>
          </div>
          <div class="cdw-table-body">
            <div class="cdw-table-row row-default">
              <div class="cdw-table-cell" data-label="Modulo">Tokens base<span class="cdw-table-meta">Core UI</span></div>
              <div class="cdw-table-cell" data-label="Etapa">Concluido</div>
              <div class="cdw-table-cell" data-label="Owner">CDW Labs</div>
              <div class="cdw-table-cell cdw-table-actions" data-label="Acoes">
                <button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--sm cdw-fw-btn--rounded">Abrir</button>
              </div>
            </div>
            <div class="cdw-table-row row-default">
              <div class="cdw-table-cell" data-label="Modulo">Layout grid<span class="cdw-table-meta">12 colunas</span></div>
              <div class="cdw-table-cell" data-label="Etapa">Revisao</div>
              <div class="cdw-table-cell" data-label="Owner">Equipe UI</div>
              <div class="cdw-table-cell cdw-table-actions" data-label="Acoes">
                <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Detalhar</button>
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
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-table cdw-table-surface cdw-table-md cdw-fw-accent-ocean"&gt;
  &lt;div class="cdw-table-header"&gt;
    &lt;div class="cdw-table-cell"&gt;Modulo&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Etapa&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Owner&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Acoes&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-table-body"&gt;
    &lt;div class="cdw-table-row row-default"&gt;
      &lt;div class="cdw-table-cell" data-label="Modulo"&gt;Tokens base&lt;span class="cdw-table-meta"&gt;Core UI&lt;/span&gt;&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Etapa"&gt;Concluido&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Owner"&gt;CDW Labs&lt;/div&gt;
      &lt;div class="cdw-table-cell cdw-table-actions" data-label="Acoes"&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Abrir&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-table-row row-default"&gt;
      &lt;div class="cdw-table-cell" data-label="Modulo"&gt;Layout grid&lt;span class="cdw-table-meta"&gt;12 colunas&lt;/span&gt;&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Etapa"&gt;Revisao&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Owner"&gt;Equipe UI&lt;/div&gt;
      &lt;div class="cdw-table-cell cdw-table-actions" data-label="Acoes"&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Detalhar&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>
  <div class="cdw-fw-docs-subsection" id="tables-rail" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Table Rail</h3>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Rail</div>
        <div class="cdw-fw-docs-badge">Modelo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-table cdw-table-rail cdw-table-md cdw-fw-accent-emerald">
          <div class="cdw-table-header">
            <div class="cdw-table-cell">Servico</div>
            <div class="cdw-table-cell">Status</div>
            <div class="cdw-table-cell">Owner</div>
            <div class="cdw-table-cell">Acoes</div>
          </div>
          <div class="cdw-table-body">
            <div class="cdw-table-row row-default">
              <div class="cdw-table-cell" data-label="Servico">Login API<span class="cdw-table-meta">v3</span></div>
              <div class="cdw-table-cell" data-label="Status">Ativo</div>
              <div class="cdw-table-cell" data-label="Owner">Core</div>
              <div class="cdw-table-cell cdw-table-actions" data-label="Acoes">
                <button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--sm cdw-fw-btn--rounded">Monitorar</button>
              </div>
            </div>
            <div class="cdw-table-row row-alert">
              <div class="cdw-table-cell" data-label="Servico">Notificacoes<span class="cdw-table-meta">Fila</span></div>
              <div class="cdw-table-cell" data-label="Status">Atencao</div>
              <div class="cdw-table-cell" data-label="Owner">Ops</div>
              <div class="cdw-table-cell cdw-table-actions" data-label="Acoes">
                <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Revisar</button>
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
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-table cdw-table-rail cdw-table-md cdw-fw-accent-emerald"&gt;
  &lt;div class="cdw-table-header"&gt;
    &lt;div class="cdw-table-cell"&gt;Servico&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Status&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Owner&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Acoes&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-table-body"&gt;
    &lt;div class="cdw-table-row row-default"&gt;
      &lt;div class="cdw-table-cell" data-label="Servico"&gt;Login API&lt;span class="cdw-table-meta"&gt;v3&lt;/span&gt;&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Status"&gt;Ativo&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Owner"&gt;Core&lt;/div&gt;
      &lt;div class="cdw-table-cell cdw-table-actions" data-label="Acoes"&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Monitorar&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-table-row row-alert"&gt;
      &lt;div class="cdw-table-cell" data-label="Servico"&gt;Notificacoes&lt;span class="cdw-table-meta"&gt;Fila&lt;/span&gt;&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Status"&gt;Atencao&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Owner"&gt;Ops&lt;/div&gt;
      &lt;div class="cdw-table-cell cdw-table-actions" data-label="Acoes"&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Revisar&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="tables-focus" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Table Focus</h3>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Focus</div>
        <div class="cdw-fw-docs-badge">Modelo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-table cdw-table-focus cdw-table-md cdw-fw-accent-violet">
          <div class="cdw-table-header">
            <div class="cdw-table-cell">Item</div>
            <div class="cdw-table-cell">Status</div>
            <div class="cdw-table-cell">Owner</div>
            <div class="cdw-table-cell">Acoes</div>
          </div>
          <div class="cdw-table-body">
            <div class="cdw-table-row row-hover">
              <div class="cdw-table-cell" data-label="Item">Cadastro UI<span class="cdw-table-meta">Ativo</span></div>
              <div class="cdw-table-cell" data-label="Status">Ok</div>
              <div class="cdw-table-cell" data-label="Owner">Design</div>
              <div class="cdw-table-cell cdw-table-actions" data-label="Acoes">
                <button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--sm cdw-fw-btn--rounded">Editar</button>
              </div>
            </div>
            <div class="cdw-table-row row-active">
              <div class="cdw-table-cell" data-label="Item">Fluxo tokens<span class="cdw-table-meta">Focus</span></div>
              <div class="cdw-table-cell" data-label="Status">Em uso</div>
              <div class="cdw-table-cell" data-label="Owner">Core</div>
              <div class="cdw-table-cell cdw-table-actions" data-label="Acoes">
                <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Abrir</button>
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
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-table cdw-table-focus cdw-table-md cdw-fw-accent-violet"&gt;
  &lt;div class="cdw-table-header"&gt;
    &lt;div class="cdw-table-cell"&gt;Item&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Status&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Owner&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Acoes&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-table-body"&gt;
    &lt;div class="cdw-table-row row-hover"&gt;
      &lt;div class="cdw-table-cell" data-label="Item"&gt;Cadastro UI&lt;span class="cdw-table-meta"&gt;Ativo&lt;/span&gt;&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Status"&gt;Ok&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Owner"&gt;Design&lt;/div&gt;
      &lt;div class="cdw-table-cell cdw-table-actions" data-label="Acoes"&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Editar&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-table-row row-active"&gt;
      &lt;div class="cdw-table-cell" data-label="Item"&gt;Fluxo tokens&lt;span class="cdw-table-meta"&gt;Focus&lt;/span&gt;&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Status"&gt;Em uso&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Owner"&gt;Core&lt;/div&gt;
      &lt;div class="cdw-table-cell cdw-table-actions" data-label="Acoes"&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Abrir&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="tables-split" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Table Split</h3>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Split</div>
        <div class="cdw-fw-docs-badge">Modelo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-table cdw-table-split cdw-table-md cdw-fw-accent-indigo">
          <div class="cdw-table-header">
            <div class="cdw-table-cell">Projeto</div>
            <div class="cdw-table-cell">Ambiente</div>
            <div class="cdw-table-cell">Owner</div>
            <div class="cdw-table-cell">Acoes</div>
          </div>
          <div class="cdw-table-body">
            <div class="cdw-table-row row-default">
              <div class="cdw-table-cell" data-label="Projeto">CDW UI Kit<span class="cdw-table-meta">Docs</span></div>
              <div class="cdw-table-cell" data-label="Ambiente">Prod</div>
              <div class="cdw-table-cell" data-label="Owner">CDW</div>
              <div class="cdw-table-cell cdw-table-cell--actions cdw-table-actions" data-label="Acoes">
                <button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--sm cdw-fw-btn--rounded">Ver</button>
                <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Abrir</button>
              </div>
            </div>
            <div class="cdw-table-row row-selected">
              <div class="cdw-table-cell" data-label="Projeto">Tokens System<span class="cdw-table-meta">Atualizado</span></div>
              <div class="cdw-table-cell" data-label="Ambiente">Stage</div>
              <div class="cdw-table-cell" data-label="Owner">UI Core</div>
              <div class="cdw-table-cell cdw-table-cell--actions cdw-table-actions" data-label="Acoes">
                <button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--sm cdw-fw-btn--rounded">Detalhar</button>
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
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-table cdw-table-split cdw-table-md cdw-fw-accent-indigo"&gt;
  &lt;div class="cdw-table-header"&gt;
    &lt;div class="cdw-table-cell"&gt;Projeto&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Ambiente&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Owner&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Acoes&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-table-body"&gt;
    &lt;div class="cdw-table-row row-default"&gt;
      &lt;div class="cdw-table-cell" data-label="Projeto"&gt;CDW UI Kit&lt;span class="cdw-table-meta"&gt;Docs&lt;/span&gt;&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Ambiente"&gt;Prod&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Owner"&gt;CDW&lt;/div&gt;
      &lt;div class="cdw-table-cell cdw-table-cell--actions cdw-table-actions" data-label="Acoes"&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Ver&lt;/button&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Abrir&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-table-row row-selected"&gt;
      &lt;div class="cdw-table-cell" data-label="Projeto"&gt;Tokens System&lt;span class="cdw-table-meta"&gt;Atualizado&lt;/span&gt;&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Ambiente"&gt;Stage&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Owner"&gt;UI Core&lt;/div&gt;
      &lt;div class="cdw-table-cell cdw-table-cell--actions cdw-table-actions" data-label="Acoes"&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Detalhar&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>
  <div class="cdw-fw-docs-subsection" id="tables-timeline" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Table Timeline</h3>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Timeline</div>
        <div class="cdw-fw-docs-badge">Modelo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-table cdw-table-timeline cdw-table-md cdw-fw-accent-teal">
          <div class="cdw-table-header">
            <div class="cdw-table-cell">Evento</div>
            <div class="cdw-table-cell">Status</div>
            <div class="cdw-table-cell">Owner</div>
            <div class="cdw-table-cell">Acoes</div>
          </div>
          <div class="cdw-table-body">
            <div class="cdw-table-row row-default">
              <div class="cdw-table-cell" data-label="Evento">Deploy UI<span class="cdw-table-meta">10:42</span></div>
              <div class="cdw-table-cell" data-label="Status">Ok</div>
              <div class="cdw-table-cell" data-label="Owner">Pipeline</div>
              <div class="cdw-table-cell cdw-table-actions" data-label="Acoes">
                <button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--sm cdw-fw-btn--rounded">Log</button>
              </div>
            </div>
            <div class="cdw-table-row row-alert">
              <div class="cdw-table-cell" data-label="Evento">Build tokens<span class="cdw-table-meta">10:15</span></div>
              <div class="cdw-table-cell" data-label="Status">Atencao</div>
              <div class="cdw-table-cell" data-label="Owner">CI</div>
              <div class="cdw-table-cell cdw-table-actions" data-label="Acoes">
                <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Detalhar</button>
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
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-table cdw-table-timeline cdw-table-md cdw-fw-accent-teal"&gt;
  &lt;div class="cdw-table-header"&gt;
    &lt;div class="cdw-table-cell"&gt;Evento&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Status&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Owner&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Acoes&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-table-body"&gt;
    &lt;div class="cdw-table-row row-default"&gt;
      &lt;div class="cdw-table-cell" data-label="Evento"&gt;Deploy UI&lt;span class="cdw-table-meta"&gt;10:42&lt;/span&gt;&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Status"&gt;Ok&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Owner"&gt;Pipeline&lt;/div&gt;
      &lt;div class="cdw-table-cell cdw-table-actions" data-label="Acoes"&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Log&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-table-row row-alert"&gt;
      &lt;div class="cdw-table-cell" data-label="Evento"&gt;Build tokens&lt;span class="cdw-table-meta"&gt;10:15&lt;/span&gt;&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Status"&gt;Atencao&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Owner"&gt;CI&lt;/div&gt;
      &lt;div class="cdw-table-cell cdw-table-actions" data-label="Acoes"&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Detalhar&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="tables-minimal" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Table Minimal</h3>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Minimal</div>
        <div class="cdw-fw-docs-badge">Modelo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-table cdw-table-minimal cdw-table-lg cdw-fw-accent-slate">
          <div class="cdw-table-header">
            <div class="cdw-table-cell">Documento</div>
            <div class="cdw-table-cell">Versao</div>
            <div class="cdw-table-cell">Owner</div>
            <div class="cdw-table-cell">Acoes</div>
          </div>
          <div class="cdw-table-body">
            <div class="cdw-table-row row-default">
              <div class="cdw-table-cell" data-label="Documento">Guia visual<span class="cdw-table-meta">Editorial</span></div>
              <div class="cdw-table-cell" data-label="Versao">v1.2</div>
              <div class="cdw-table-cell" data-label="Owner">CDW</div>
              <div class="cdw-table-cell cdw-table-actions" data-label="Acoes">
                <button class="cdw-fw-btn cdw-fw-btn--text cdw-fw-btn--sm">Abrir</button>
              </div>
            </div>
            <div class="cdw-table-row row-default">
              <div class="cdw-table-cell" data-label="Documento">Notas release<span class="cdw-table-meta">Semana</span></div>
              <div class="cdw-table-cell" data-label="Versao">v1.1</div>
              <div class="cdw-table-cell" data-label="Owner">Core</div>
              <div class="cdw-table-cell cdw-table-actions" data-label="Acoes">
                <button class="cdw-fw-btn cdw-fw-btn--text cdw-fw-btn--sm">Ler</button>
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
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-table cdw-table-minimal cdw-table-lg cdw-fw-accent-slate"&gt;
  &lt;div class="cdw-table-header"&gt;
    &lt;div class="cdw-table-cell"&gt;Documento&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Versao&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Owner&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Acoes&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-table-body"&gt;
    &lt;div class="cdw-table-row row-default"&gt;
      &lt;div class="cdw-table-cell" data-label="Documento"&gt;Guia visual&lt;span class="cdw-table-meta"&gt;Editorial&lt;/span&gt;&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Versao"&gt;v1.2&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Owner"&gt;CDW&lt;/div&gt;
      &lt;div class="cdw-table-cell cdw-table-actions" data-label="Acoes"&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--text cdw-fw-btn--sm"&gt;Abrir&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-table-row row-default"&gt;
      &lt;div class="cdw-table-cell" data-label="Documento"&gt;Notas release&lt;span class="cdw-table-meta"&gt;Semana&lt;/span&gt;&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Versao"&gt;v1.1&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Owner"&gt;Core&lt;/div&gt;
      &lt;div class="cdw-table-cell cdw-table-actions" data-label="Acoes"&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--text cdw-fw-btn--sm"&gt;Ler&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="tables-responsivo" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Responsivo</h3>
    <p class="cdw-fw-docs-subdesc">
      Use (padrao nas demos). Em telas pequenas, cada linha vira bloco empilhado e o header vira label via data-label.
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Table responsive</div>
        <div class="cdw-fw-docs-badge">Default</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-table cdw-table-sm cdw-fw-accent-sky">
          <div class="cdw-table-header">
            <div class="cdw-table-cell">Area</div>
            <div class="cdw-table-cell">Status</div>
            <div class="cdw-table-cell">Owner</div>
            <div class="cdw-table-cell">Acoes</div>
          </div>
          <div class="cdw-table-body">
            <div class="cdw-table-row row-default">
              <div class="cdw-table-cell" data-label="Area">Painel config<span class="cdw-table-meta">UI</span></div>
              <div class="cdw-table-cell" data-label="Status">Ok</div>
              <div class="cdw-table-cell" data-label="Owner">CDW</div>
              <div class="cdw-table-cell cdw-table-actions" data-label="Acoes">
                <button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--sm cdw-fw-btn--rounded">Abrir</button>
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
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-table cdw-table-sm cdw-fw-accent-sky"&gt;
  &lt;div class="cdw-table-header"&gt;
    &lt;div class="cdw-table-cell"&gt;Area&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Status&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Owner&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Acoes&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-table-body"&gt;
    &lt;div class="cdw-table-row row-default"&gt;
      &lt;div class="cdw-table-cell" data-label="Area"&gt;Painel config&lt;span class="cdw-table-meta"&gt;UI&lt;/span&gt;&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Status"&gt;Ok&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Owner"&gt;CDW&lt;/div&gt;
      &lt;div class="cdw-table-cell cdw-table-actions" data-label="Acoes"&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Abrir&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>
  <div class="cdw-fw-docs-subsection" id="tables-variacoes" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Variacoes</h3>
    <p class="cdw-fw-docs-subdesc">
      Exemplos diretos de fundo do header, cor de linha, zebra e bordas direcionais.
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Header + fundo + zebra</div>
        <div class="cdw-fw-docs-badge">Variacao</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-table cdw-table-md cdw-table-head-strong cdw-table-row-accent cdw-table-zebra cdw-table-surface-accent cdw-table-border-all cdw-fw-accent-slate">
          <div class="cdw-table-header">
            <div class="cdw-table-cell">Modulo</div>
            <div class="cdw-table-cell">Status</div>
            <div class="cdw-table-cell">Owner</div>
            <div class="cdw-table-cell">Acoes</div>
          </div>
          <div class="cdw-table-body">
            <div class="cdw-table-row row-default">
              <div class="cdw-table-cell" data-label="Modulo">Core tokens<span class="cdw-table-meta">Base</span></div>
              <div class="cdw-table-cell" data-label="Status">Ativo</div>
              <div class="cdw-table-cell" data-label="Owner">CDW</div>
              <div class="cdw-table-cell cdw-table-actions" data-label="Acoes">
                <button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--sm cdw-fw-btn--rounded">Abrir</button>
              </div>
            </div>
            <div class="cdw-table-row row-default">
              <div class="cdw-table-cell" data-label="Modulo">Layout system<span class="cdw-table-meta">Grid</span></div>
              <div class="cdw-table-cell" data-label="Status">Revisao</div>
              <div class="cdw-table-cell" data-label="Owner">UI Core</div>
              <div class="cdw-table-cell cdw-table-actions" data-label="Acoes">
                <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Detalhar</button>
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
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-table cdw-table-md cdw-table-head-strong cdw-table-row-accent cdw-table-zebra cdw-table-surface-accent cdw-table-border-all cdw-fw-accent-slate"&gt;
  &lt;div class="cdw-table-header"&gt;
    &lt;div class="cdw-table-cell"&gt;Modulo&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Status&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Owner&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Acoes&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-table-body"&gt;
    &lt;div class="cdw-table-row row-default"&gt;
      &lt;div class="cdw-table-cell" data-label="Modulo"&gt;Core tokens&lt;span class="cdw-table-meta"&gt;Base&lt;/span&gt;&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Status"&gt;Ativo&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Owner"&gt;CDW&lt;/div&gt;
      &lt;div class="cdw-table-cell cdw-table-actions" data-label="Acoes"&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Abrir&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-table-row row-default"&gt;
      &lt;div class="cdw-table-cell" data-label="Modulo"&gt;Layout system&lt;span class="cdw-table-meta"&gt;Grid&lt;/span&gt;&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Status"&gt;Revisao&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Owner"&gt;UI Core&lt;/div&gt;
      &lt;div class="cdw-table-cell cdw-table-actions" data-label="Acoes"&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Detalhar&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Bordas direcionais</div>
        <div class="cdw-fw-docs-badge">Variacao</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-table cdw-table-sm cdw-table-head-accent cdw-table-border-left cdw-fw-accent-emerald">
          <div class="cdw-table-header">
            <div class="cdw-table-cell">Servico</div>
            <div class="cdw-table-cell">Status</div>
            <div class="cdw-table-cell">Owner</div>
            <div class="cdw-table-cell">Acoes</div>
          </div>
          <div class="cdw-table-body">
            <div class="cdw-table-row row-default">
              <div class="cdw-table-cell" data-label="Servico">Gateway API<span class="cdw-table-meta">v4</span></div>
              <div class="cdw-table-cell" data-label="Status">Ok</div>
              <div class="cdw-table-cell" data-label="Owner">Platform</div>
              <div class="cdw-table-cell cdw-table-actions" data-label="Acoes">
                <button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--sm cdw-fw-btn--rounded">Monitorar</button>
              </div>
            </div>
            <div class="cdw-table-row row-default">
              <div class="cdw-table-cell" data-label="Servico">Alert router<span class="cdw-table-meta">Fila</span></div>
              <div class="cdw-table-cell" data-label="Status">Ajuste</div>
              <div class="cdw-table-cell" data-label="Owner">Ops</div>
              <div class="cdw-table-cell cdw-table-actions" data-label="Acoes">
                <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Revisar</button>
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
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-table cdw-table-sm cdw-table-head-accent cdw-table-border-left cdw-fw-accent-emerald"&gt;
  &lt;div class="cdw-table-header"&gt;
    &lt;div class="cdw-table-cell"&gt;Servico&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Status&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Owner&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Acoes&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-table-body"&gt;
    &lt;div class="cdw-table-row row-default"&gt;
      &lt;div class="cdw-table-cell" data-label="Servico"&gt;Gateway API&lt;span class="cdw-table-meta"&gt;v4&lt;/span&gt;&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Status"&gt;Ok&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Owner"&gt;Platform&lt;/div&gt;
      &lt;div class="cdw-table-cell cdw-table-actions" data-label="Acoes"&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Monitorar&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-table-row row-default"&gt;
      &lt;div class="cdw-table-cell" data-label="Servico"&gt;Alert router&lt;span class="cdw-table-meta"&gt;Fila&lt;/span&gt;&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Status"&gt;Ajuste&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Owner"&gt;Ops&lt;/div&gt;
      &lt;div class="cdw-table-cell cdw-table-actions" data-label="Acoes"&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Revisar&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Borda em celula</div>
        <div class="cdw-fw-docs-badge">Variacao</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-table cdw-table-sm cdw-table-border-all cdw-fw-accent-ocean">
          <div class="cdw-table-header">
            <div class="cdw-table-cell">Token</div>
            <div class="cdw-table-cell">Status</div>
            <div class="cdw-table-cell">Owner</div>
            <div class="cdw-table-cell">Acoes</div>
          </div>
          <div class="cdw-table-body">
            <div class="cdw-table-row row-default">
              <div class="cdw-table-cell cdw-table-cell-border-left" data-label="Token">Core UI<span class="cdw-table-meta">Base</span></div>
              <div class="cdw-table-cell" data-label="Status">Ok</div>
              <div class="cdw-table-cell cdw-table-cell-border-right" data-label="Owner">CDW</div>
              <div class="cdw-table-cell cdw-table-actions" data-label="Acoes">
                <button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--sm cdw-fw-btn--rounded">Abrir</button>
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
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-table cdw-table-sm cdw-table-border-all cdw-fw-accent-ocean"&gt;
  &lt;div class="cdw-table-header"&gt;
    &lt;div class="cdw-table-cell"&gt;Token&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Status&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Owner&lt;/div&gt;
    &lt;div class="cdw-table-cell"&gt;Acoes&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-table-body"&gt;
    &lt;div class="cdw-table-row row-default"&gt;
      &lt;div class="cdw-table-cell cdw-table-cell-border-left" data-label="Token"&gt;Core UI&lt;span class="cdw-table-meta"&gt;Base&lt;/span&gt;&lt;/div&gt;
      &lt;div class="cdw-table-cell" data-label="Status"&gt;Ok&lt;/div&gt;
      &lt;div class="cdw-table-cell cdw-table-cell-border-right" data-label="Owner"&gt;CDW&lt;/div&gt;
      &lt;div class="cdw-table-cell cdw-table-actions" data-label="Acoes"&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--soft cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Abrir&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

</section>


`,
  hero: `
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
  panel: `
<section id="panel" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Panel</h2>
    <p class="cdw-fw-docs-lead">
      Paineis premium para organizar contexto, acao e leitura em blocos sofisticados.
    </p>
  </div>

  <div class="cdw-fw-docs-toc">
    <span class="cdw-fw-docs-toc-title">Indice desta pagina</span>
    <a href="#panel-conceito">Conceito</a>
    <a href="#panel-estrutura">Estrutura</a>
    <a href="#panel-tamanhos">Tamanhos</a>
    <a href="#panel-modelos">Modelos</a>
    <a href="#panel-exemplos">Exemplos</a>
  </div>

  <div class="cdw-fw-docs-subsection" id="panel-conceito" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Conceito</h3>
    <p class="cdw-fw-docs-subdesc">
      O Panel organiza informacao com ritmo visual, hierarquia e bordas expressivas.
      <span class="cdw-fw-docs-when">Quando usar: contexto, resumo, cards de apoio e blocos de sistema.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-panel</span>
      <span>cdw-panel-header</span>
      <span>cdw-panel-title</span>
      <span>cdw-panel-subtitle</span>
      <span>cdw-panel-body</span>
      <span>cdw-panel-footer</span>
      <span>cdw-panel-actions</span>
      <span>cdw-panel-*</span>
      <span>cdw-fw-accent-*</span>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="panel-estrutura" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Estrutura</h3>
    <p class="cdw-fw-docs-subdesc">
      Estrutura base com header, body e footer opcionais.
    </p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Base obrigatoria</div>
        <div class="cdw-fw-docs-badge">Estrutura</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-panel cdw-panel-md cdw-panel--frame cdw-fw-accent-ocean">
          <div class="cdw-panel-header">
            <div class="cdw-panel-title">Visao geral</div>
            <div class="cdw-panel-subtitle">Resumo do contexto</div>
          </div>
          <div class="cdw-panel-body">Conteudo principal do painel para orientar a leitura.</div>
          <div class="cdw-panel-footer">
            <div class="cdw-panel-meta">Atualizado agora</div>
            <div class="cdw-panel-actions">
              <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded" type="button">Abrir</button>
              <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded" type="button">Detalhar</button>
            </div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-panel cdw-panel-md cdw-panel--frame cdw-fw-accent-ocean"&gt;
  &lt;div class="cdw-panel-header"&gt;
    &lt;div class="cdw-panel-title"&gt;Visao geral&lt;/div&gt;
    &lt;div class="cdw-panel-subtitle"&gt;Resumo do contexto&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-panel-body"&gt;Conteudo principal do painel para orientar a leitura.&lt;/div&gt;
  &lt;div class="cdw-panel-footer"&gt;
    &lt;div class="cdw-panel-meta"&gt;Atualizado agora&lt;/div&gt;
    &lt;div class="cdw-panel-actions"&gt;
      &lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded" type="button"&gt;Abrir&lt;/button&gt;
      &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded" type="button"&gt;Detalhar&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="panel-tamanhos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Tamanhos</h3>
    <p class="cdw-fw-docs-subdesc">Use sm, md e lg para ajustar ritmo e densidade.</p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Escalas de leitura</div>
        <div class="cdw-fw-docs-badge">Tamanho</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-panel cdw-panel-sm cdw-panel--rail cdw-fw-accent-sky">
          <div class="cdw-panel-title">Panel sm</div>
          <div class="cdw-panel-body">Compacto para contexto rapido.</div>
        </div>
        <div class="cdw-panel cdw-panel-md cdw-panel--rail cdw-fw-accent-ocean" style="margin-top:12px;">
          <div class="cdw-panel-title">Panel md</div>
          <div class="cdw-panel-body">Padrao para paineis de leitura.</div>
        </div>
        <div class="cdw-panel cdw-panel-lg cdw-panel--rail cdw-fw-accent-mint" style="margin-top:12px;">
          <div class="cdw-panel-title">Panel lg</div>
          <div class="cdw-panel-body">Mais respiro para conteudo amplo.</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-panel cdw-panel-sm cdw-panel--rail cdw-fw-accent-sky"&gt;...&lt;/div&gt;
&lt;div class="cdw-panel cdw-panel-md cdw-panel--rail cdw-fw-accent-ocean"&gt;...&lt;/div&gt;
&lt;div class="cdw-panel cdw-panel-lg cdw-panel--rail cdw-fw-accent-mint"&gt;...&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="panel-modelos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Modelos</h3>
    <p class="cdw-fw-docs-subdesc">Cada modelo altera borda, camadas e recortes sem depender de sombras genericas.</p>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Panel Frame</div>
        <div class="cdw-fw-docs-badge">Modelo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-panel cdw-panel-md cdw-panel--frame cdw-fw-accent-indigo">
          <div class="cdw-panel-title">Documento institucional</div>
          <div class="cdw-panel-subtitle">Moldura editorial</div>
          <div class="cdw-panel-body">Estrutura para decisoes formais e comunicados.</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-panel cdw-panel-md cdw-panel--frame cdw-fw-accent-indigo"&gt;
  &lt;div class="cdw-panel-title"&gt;Documento institucional&lt;/div&gt;
  &lt;div class="cdw-panel-subtitle"&gt;Moldura editorial&lt;/div&gt;
  &lt;div class="cdw-panel-body"&gt;Estrutura para decisoes formais e comunicados.&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Panel Layer</div>
        <div class="cdw-fw-docs-badge">Modelo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-panel cdw-panel-lg cdw-panel--layer cdw-fw-accent-sky">
          <div class="cdw-panel-title">Camadas de contexto</div>
          <div class="cdw-panel-subtitle">Base + apoio visual</div>
          <div class="cdw-panel-body">Separar dados principais de apoio e acao.</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-panel cdw-panel-lg cdw-panel--layer cdw-fw-accent-sky"&gt;
  &lt;div class="cdw-panel-title"&gt;Camadas de contexto&lt;/div&gt;
  &lt;div class="cdw-panel-subtitle"&gt;Base + apoio visual&lt;/div&gt;
  &lt;div class="cdw-panel-body"&gt;Separar dados principais de apoio e acao.&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Panel Rail</div>
        <div class="cdw-fw-docs-badge">Modelo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-panel cdw-panel-md cdw-panel--rail cdw-fw-accent-amber">
          <div class="cdw-panel-title">Status ativo</div>
          <div class="cdw-panel-subtitle">Sinal lateral</div>
          <div class="cdw-panel-body">Destaque discreto para estados e alertas.</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-panel cdw-panel-md cdw-panel--rail cdw-fw-accent-amber"&gt;
  &lt;div class="cdw-panel-title"&gt;Status ativo&lt;/div&gt;
  &lt;div class="cdw-panel-subtitle"&gt;Sinal lateral&lt;/div&gt;
  &lt;div class="cdw-panel-body"&gt;Destaque discreto para estados e alertas.&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Panel Stack</div>
        <div class="cdw-fw-docs-badge">Modelo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-panel cdw-panel-md cdw-panel--stack cdw-fw-accent-rose">
          <div class="cdw-panel-title">Stack narrativo</div>
          <div class="cdw-panel-subtitle">Camadas offset</div>
          <div class="cdw-panel-body">Organize blocos com profundidade real.</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-panel cdw-panel-md cdw-panel--stack cdw-fw-accent-rose"&gt;
  &lt;div class="cdw-panel-title"&gt;Stack narrativo&lt;/div&gt;
  &lt;div class="cdw-panel-subtitle"&gt;Camadas offset&lt;/div&gt;
  &lt;div class="cdw-panel-body"&gt;Organize blocos com profundidade real.&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Panel Cut</div>
        <div class="cdw-fw-docs-badge">Modelo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-panel cdw-panel-md cdw-panel--cut cdw-fw-accent-graphite">
          <div class="cdw-panel-title">Recortes sutis</div>
          <div class="cdw-panel-subtitle">Cantos assimetricos</div>
          <div class="cdw-panel-body">Quebra visual elegante sem excesso.</div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-panel cdw-panel-md cdw-panel--cut cdw-fw-accent-graphite"&gt;
  &lt;div class="cdw-panel-title"&gt;Recortes sutis&lt;/div&gt;
  &lt;div class="cdw-panel-subtitle"&gt;Cantos assimetricos&lt;/div&gt;
  &lt;div class="cdw-panel-body"&gt;Quebra visual elegante sem excesso.&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="panel-exemplos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Exemplos</h3>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Resumo operacional</div>
        <div class="cdw-fw-docs-badge">Uso</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-panel cdw-panel-lg cdw-panel--outline-offset cdw-fw-accent-ocean">
          <div class="cdw-panel-header">
            <div class="cdw-panel-title">Modulo de configuracao</div>
            <div class="cdw-panel-subtitle">Fluxo base</div>
          </div>
          <div class="cdw-panel-body">Estrutura para escolhas administrativas com foco em decisao rapida.</div>
          <div class="cdw-panel-footer">
            <div class="cdw-panel-meta">Atualizado ha 2 horas</div>
            <div class="cdw-panel-actions">
              <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded" type="button">Abrir</button>
              <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded" type="button">Auditar</button>
            </div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-panel cdw-panel-lg cdw-panel--outline-offset cdw-fw-accent-ocean"&gt;
  &lt;div class="cdw-panel-header"&gt;
    &lt;div class="cdw-panel-title"&gt;Modulo de configuracao&lt;/div&gt;
    &lt;div class="cdw-panel-subtitle"&gt;Fluxo base&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-panel-body"&gt;Estrutura para escolhas administrativas com foco em decisao rapida.&lt;/div&gt;
  &lt;div class="cdw-panel-footer"&gt;
    &lt;div class="cdw-panel-meta"&gt;Atualizado ha 2 horas&lt;/div&gt;
    &lt;div class="cdw-panel-actions"&gt;
      &lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded" type="button"&gt;Abrir&lt;/button&gt;
      &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded" type="button"&gt;Auditar&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>
</section>

`, 
  steps: `
<section id="steps" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Steps</h2>
    <p class="cdw-fw-docs-lead">
      Etapas elegantes para progresso, fluxos e jornadas, com leitura clara em desktop e mobile.
    </p>
  </div>

  <div class="cdw-fw-docs-toc">
    <span class="cdw-fw-docs-toc-title">Indice desta pagina</span>
    <a href="#steps-conceito">Conceito</a>
    <a href="#steps-estrutura">Estrutura</a>
    <a href="#steps-estados">Estados</a>
    <a href="#steps-tamanhos">Tamanhos</a>
    <a href="#steps-modelos">Modelos</a>
    <a href="#steps-exemplos">Exemplos reais</a>
  </div>

  <div class="cdw-fw-docs-subsection" id="steps-conceito" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Conceito</h3>
    <p class="cdw-fw-docs-subdesc">
      Steps guia o usuario por etapas com ritmo visual, estados claros e hierarquia consistente.
      <span class="cdw-fw-docs-when">Quando usar: onboarding, checkout, cadastro e workflows.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-steps</span>
      <span>cdw-steps--*</span>
      <span>cdw-steps--sm</span>
      <span>cdw-steps--md</span>
      <span>cdw-steps--lg</span>
      <span>cdw-steps--xl</span>
      <span>cdw-step</span>
      <span>cdw-step-indicator</span>
      <span>cdw-step-content</span>
      <span>cdw-step-title</span>
      <span>cdw-step-desc</span>
      <span>cdw-fw-accent-*</span>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="steps-estrutura" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Estrutura</h3>
    <p class="cdw-fw-docs-subdesc">Estrutura base simples, com indicador e conteudo.</p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Base obrigatoria</div>
        <div class="cdw-fw-docs-badge">Estrutura</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-steps cdw-steps--linear-rail cdw-steps--md cdw-fw-accent-sky">
          <div class="cdw-step is-complete">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Conta</div>
              <div class="cdw-step-desc">Dados basicos do perfil.</div>
            </div>
          </div>
          <div class="cdw-step is-active">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Endereco</div>
              <div class="cdw-step-desc">Informacoes de entrega.</div>
            </div>
          </div>
          <div class="cdw-step is-pending">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Confirmacao</div>
              <div class="cdw-step-desc">Revisao final do pedido.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-steps cdw-steps--linear-rail cdw-steps--md cdw-fw-accent-sky"&gt;
  &lt;div class="cdw-step is-complete"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Conta&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Dados basicos do perfil.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-active"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Endereco&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Informacoes de entrega.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-pending"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Confirmacao&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Revisao final do pedido.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="steps-estados" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Estados</h3>
    <p class="cdw-fw-docs-subdesc">Complete, active, pending, disabled e error.</p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Mapa de estados</div>
        <div class="cdw-fw-docs-badge">Estados</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-steps cdw-steps--cards-connected cdw-steps--md cdw-fw-accent-ember">
          <div class="cdw-step is-complete">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Completo</div>
              <div class="cdw-step-desc">Etapa validada.</div>
            </div>
          </div>
          <div class="cdw-step is-active">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Ativo</div>
              <div class="cdw-step-desc">Em andamento.</div>
            </div>
          </div>
          <div class="cdw-step is-pending">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Pendente</div>
              <div class="cdw-step-desc">Aguardando.</div>
            </div>
          </div>
          <div class="cdw-step is-disabled">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Desabilitado</div>
              <div class="cdw-step-desc">Bloqueado.</div>
            </div>
          </div>
          <div class="cdw-step is-error">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Erro</div>
              <div class="cdw-step-desc">Falha encontrada.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-steps cdw-steps--cards-connected cdw-steps--md cdw-fw-accent-ember"&gt;
  &lt;div class="cdw-step is-complete"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Completo&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Etapa validada.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-active"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Ativo&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Em andamento.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-pending"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Pendente&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Aguardando.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-disabled"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Desabilitado&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Bloqueado.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-error"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Erro&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Falha encontrada.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="steps-tamanhos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Tamanhos</h3>
    <p class="cdw-fw-docs-subdesc">Comparacao vertical entre sm, md, lg e xl.</p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Escalas do componente</div>
        <div class="cdw-fw-docs-badge">Tamanho</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-steps cdw-steps--linear-rail cdw-steps--sm cdw-fw-accent-ocean">
          <div class="cdw-step is-complete">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Cadastro</div>
              <div class="cdw-step-desc">Dados basicos.</div>
            </div>
          </div>
          <div class="cdw-step is-active">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Perfil</div>
              <div class="cdw-step-desc">Preferencias.</div>
            </div>
          </div>
          <div class="cdw-step is-pending">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Finalizar</div>
              <div class="cdw-step-desc">Confirmacao.</div>
            </div>
          </div>
        </div>
        <div style="margin-top:16px;">
          <div class="cdw-steps cdw-steps--linear-rail cdw-steps--md cdw-fw-accent-ocean">
            <div class="cdw-step is-complete">
              <div class="cdw-step-indicator"></div>
              <div class="cdw-step-content">
                <div class="cdw-step-title">Cadastro</div>
                <div class="cdw-step-desc">Dados basicos.</div>
              </div>
            </div>
            <div class="cdw-step is-active">
              <div class="cdw-step-indicator"></div>
              <div class="cdw-step-content">
                <div class="cdw-step-title">Perfil</div>
                <div class="cdw-step-desc">Preferencias.</div>
              </div>
            </div>
            <div class="cdw-step is-pending">
              <div class="cdw-step-indicator"></div>
              <div class="cdw-step-content">
                <div class="cdw-step-title">Finalizar</div>
                <div class="cdw-step-desc">Confirmacao.</div>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-top:16px;">
          <div class="cdw-steps cdw-steps--linear-rail cdw-steps--lg cdw-fw-accent-ocean">
            <div class="cdw-step is-complete">
              <div class="cdw-step-indicator"></div>
              <div class="cdw-step-content">
                <div class="cdw-step-title">Cadastro</div>
                <div class="cdw-step-desc">Dados basicos.</div>
              </div>
            </div>
            <div class="cdw-step is-active">
              <div class="cdw-step-indicator"></div>
              <div class="cdw-step-content">
                <div class="cdw-step-title">Perfil</div>
                <div class="cdw-step-desc">Preferencias.</div>
              </div>
            </div>
            <div class="cdw-step is-pending">
              <div class="cdw-step-indicator"></div>
              <div class="cdw-step-content">
                <div class="cdw-step-title">Finalizar</div>
                <div class="cdw-step-desc">Confirmacao.</div>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-top:16px;">
          <div class="cdw-steps cdw-steps--linear-rail cdw-steps--xl cdw-fw-accent-ocean">
            <div class="cdw-step is-complete">
              <div class="cdw-step-indicator"></div>
              <div class="cdw-step-content">
                <div class="cdw-step-title">Cadastro</div>
                <div class="cdw-step-desc">Dados basicos.</div>
              </div>
            </div>
            <div class="cdw-step is-active">
              <div class="cdw-step-indicator"></div>
              <div class="cdw-step-content">
                <div class="cdw-step-title">Perfil</div>
                <div class="cdw-step-desc">Preferencias.</div>
              </div>
            </div>
            <div class="cdw-step is-pending">
              <div class="cdw-step-indicator"></div>
              <div class="cdw-step-content">
                <div class="cdw-step-title">Finalizar</div>
                <div class="cdw-step-desc">Confirmacao.</div>
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
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-steps cdw-steps--linear-rail cdw-steps--sm cdw-fw-accent-ocean"&gt;
  &lt;div class="cdw-step is-complete"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Cadastro&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Dados basicos.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-active"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Perfil&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Preferencias.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-pending"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Finalizar&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Confirmacao.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class="cdw-steps cdw-steps--linear-rail cdw-steps--md cdw-fw-accent-ocean"&gt;
  &lt;div class="cdw-step is-complete"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Cadastro&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Dados basicos.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-active"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Perfil&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Preferencias.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-pending"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Finalizar&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Confirmacao.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class="cdw-steps cdw-steps--linear-rail cdw-steps--lg cdw-fw-accent-ocean"&gt;
  &lt;div class="cdw-step is-complete"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Cadastro&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Dados basicos.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-active"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Perfil&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Preferencias.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-pending"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Finalizar&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Confirmacao.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class="cdw-steps cdw-steps--linear-rail cdw-steps--xl cdw-fw-accent-ocean"&gt;
  &lt;div class="cdw-step is-complete"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Cadastro&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Dados basicos.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-active"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Perfil&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Preferencias.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-pending"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Finalizar&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Confirmacao.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="steps-modelos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Modelos</h3>
    <p class="cdw-fw-docs-subdesc">Sete modelos distintos com identidade propria.</p>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Linear Rail</div>
        <div class="cdw-fw-docs-badge">Modelo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-steps cdw-steps--linear-rail cdw-steps--md cdw-fw-accent-sky">
          <div class="cdw-step is-complete">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Pedido</div>
              <div class="cdw-step-desc">Itens conferidos.</div>
            </div>
          </div>
          <div class="cdw-step is-active">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Pagamento</div>
              <div class="cdw-step-desc">Aprovacao em andamento.</div>
            </div>
          </div>
          <div class="cdw-step is-pending">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Entrega</div>
              <div class="cdw-step-desc">Previsao 2 dias.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-steps cdw-steps--linear-rail cdw-steps--md cdw-fw-accent-sky"&gt;
  &lt;div class="cdw-step is-complete"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Pedido&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Itens conferidos.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-active"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Pagamento&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Aprovacao em andamento.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-pending"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Entrega&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Previsao 2 dias.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Cards Conectados</div>
        <div class="cdw-fw-docs-badge">Modelo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-steps cdw-steps--cards-connected cdw-steps--md cdw-fw-accent-mint">
          <div class="cdw-step is-complete">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Briefing</div>
              <div class="cdw-step-desc">Contexto alinhado.</div>
            </div>
          </div>
          <div class="cdw-step is-active">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Proposta</div>
              <div class="cdw-step-desc">Revisao interna.</div>
            </div>
          </div>
          <div class="cdw-step is-pending">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Entrega</div>
              <div class="cdw-step-desc">Publicacao final.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-steps cdw-steps--cards-connected cdw-steps--md cdw-fw-accent-mint"&gt;
  &lt;div class="cdw-step is-complete"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Briefing&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Contexto alinhado.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-active"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Proposta&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Revisao interna.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-pending"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Entrega&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Publicacao final.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Vertical Timeline</div>
        <div class="cdw-fw-docs-badge">Modelo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-steps cdw-steps--vertical-timeline cdw-steps--md cdw-fw-accent-ocean">
          <div class="cdw-step is-complete">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Solicitado</div>
              <div class="cdw-step-desc">Pedido aberto pelo time.</div>
            </div>
          </div>
          <div class="cdw-step is-active">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Analise</div>
              <div class="cdw-step-desc">Revisao operacional.</div>
            </div>
          </div>
          <div class="cdw-step is-pending">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Aprovacao</div>
              <div class="cdw-step-desc">Liberacao do gestor.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-steps cdw-steps--vertical-timeline cdw-steps--md cdw-fw-accent-ocean"&gt;
  &lt;div class="cdw-step is-complete"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Solicitado&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Pedido aberto pelo time.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-active"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Analise&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Revisao operacional.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-pending"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Aprovacao&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Liberacao do gestor.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Focus Step</div>
        <div class="cdw-fw-docs-badge">Modelo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-steps cdw-steps--focus-step cdw-steps--lg cdw-fw-accent-amber">
          <div class="cdw-step is-complete">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Configurar</div>
              <div class="cdw-step-desc">Preferencias iniciais.</div>
            </div>
          </div>
          <div class="cdw-step is-active">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Integrar</div>
              <div class="cdw-step-desc">Conectar aos sistemas.</div>
            </div>
          </div>
          <div class="cdw-step is-pending">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Finalizar</div>
              <div class="cdw-step-desc">Checklist final.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-steps cdw-steps--focus-step cdw-steps--lg cdw-fw-accent-amber"&gt;
  &lt;div class="cdw-step is-complete"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Configurar&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Preferencias iniciais.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-active"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Integrar&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Conectar aos sistemas.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-pending"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Finalizar&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Checklist final.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Split Context</div>
        <div class="cdw-fw-docs-badge">Modelo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-steps cdw-steps--split-context cdw-steps--md cdw-fw-accent-violet">
          <div class="cdw-step is-complete">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Dados pessoais</div>
              <div class="cdw-step-desc">Documentos e perfil.</div>
            </div>
          </div>
          <div class="cdw-step is-active">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Endereco fiscal</div>
              <div class="cdw-step-desc">Informacoes para emissao.</div>
            </div>
          </div>
          <div class="cdw-step is-pending">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Validacao</div>
              <div class="cdw-step-desc">Analise automatica.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-steps cdw-steps--split-context cdw-steps--md cdw-fw-accent-violet"&gt;
  &lt;div class="cdw-step is-complete"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Dados pessoais&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Documentos e perfil.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-active"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Endereco fiscal&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Informacoes para emissao.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-pending"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Validacao&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Analise automatica.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Minimal Dots</div>
        <div class="cdw-fw-docs-badge">Modelo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-steps cdw-steps--minimal-dots cdw-steps--sm cdw-fw-accent-graphite">
          <div class="cdw-step is-complete">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Info</div>
              <div class="cdw-step-desc">Base.</div>
            </div>
          </div>
          <div class="cdw-step is-active">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Plano</div>
              <div class="cdw-step-desc">Escolha.</div>
            </div>
          </div>
          <div class="cdw-step is-pending">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Revisao</div>
              <div class="cdw-step-desc">Confirmar.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-steps cdw-steps--minimal-dots cdw-steps--sm cdw-fw-accent-graphite"&gt;
  &lt;div class="cdw-step is-complete"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Info&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Base.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-active"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Plano&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Escolha.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-pending"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Revisao&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Confirmar.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Narrative Progress</div>
        <div class="cdw-fw-docs-badge">Modelo</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-steps cdw-steps--narrative-progress cdw-steps--xl cdw-fw-accent-ocean">
          <div class="cdw-step is-complete">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Diagnostico</div>
              <div class="cdw-step-desc">Levantamento completo do contexto e metas.</div>
            </div>
          </div>
          <div class="cdw-step is-active">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Planejamento</div>
              <div class="cdw-step-desc">Estrutura de entregas e prioridades alinhadas.</div>
            </div>
          </div>
          <div class="cdw-step is-pending">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Execucao</div>
              <div class="cdw-step-desc">Ciclos de implementacao e validacao.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-steps cdw-steps--narrative-progress cdw-steps--xl cdw-fw-accent-ocean"&gt;
  &lt;div class="cdw-step is-complete"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Diagnostico&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Levantamento completo do contexto e metas.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-active"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Planejamento&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Estrutura de entregas e prioridades alinhadas.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-pending"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Execucao&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Ciclos de implementacao e validacao.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="steps-exemplos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Exemplos reais</h3>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Checkout de produto</div>
        <div class="cdw-fw-docs-badge">Checkout</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-steps cdw-steps--linear-rail cdw-steps--md cdw-fw-accent-mint">
          <div class="cdw-step is-complete">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Carrinho</div>
              <div class="cdw-step-desc">Itens revisados.</div>
            </div>
          </div>
          <div class="cdw-step is-active">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Entrega</div>
              <div class="cdw-step-desc">Endereco confirmado.</div>
            </div>
          </div>
          <div class="cdw-step is-pending">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Pagamento</div>
              <div class="cdw-step-desc">Cartao ou boleto.</div>
            </div>
          </div>
          <div class="cdw-step is-pending">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Finalizar</div>
              <div class="cdw-step-desc">Confirmacao final.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-steps cdw-steps--linear-rail cdw-steps--md cdw-fw-accent-mint"&gt;
  &lt;div class="cdw-step is-complete"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Carrinho&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Itens revisados.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-active"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Entrega&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Endereco confirmado.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-pending"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Pagamento&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Cartao ou boleto.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-pending"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Finalizar&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Confirmacao final.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Cadastro institucional</div>
        <div class="cdw-fw-docs-badge">Cadastro</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-steps cdw-steps--split-context cdw-steps--md cdw-fw-accent-rose">
          <div class="cdw-step is-complete">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Identidade</div>
              <div class="cdw-step-desc">Dados legais e contato.</div>
            </div>
          </div>
          <div class="cdw-step is-active">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Equipe</div>
              <div class="cdw-step-desc">Usuarios e niveis de acesso.</div>
            </div>
          </div>
          <div class="cdw-step is-pending">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Seguranca</div>
              <div class="cdw-step-desc">Politicas e revisao final.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-steps cdw-steps--split-context cdw-steps--md cdw-fw-accent-rose"&gt;
  &lt;div class="cdw-step is-complete"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Identidade&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Dados legais e contato.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-active"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Equipe&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Usuarios e niveis de acesso.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-pending"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Seguranca&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Politicas e revisao final.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Fluxo operacional</div>
        <div class="cdw-fw-docs-badge">Workflow</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-steps cdw-steps--vertical-timeline cdw-steps--md cdw-fw-accent-graphite">
          <div class="cdw-step is-complete">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Recebimento</div>
              <div class="cdw-step-desc">Registro inicial do pedido.</div>
            </div>
          </div>
          <div class="cdw-step is-active">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Separacao</div>
              <div class="cdw-step-desc">Itens em picking.</div>
            </div>
          </div>
          <div class="cdw-step is-pending">
            <div class="cdw-step-indicator"></div>
            <div class="cdw-step-content">
              <div class="cdw-step-title">Despacho</div>
              <div class="cdw-step-desc">Aguardando expedicao.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-steps cdw-steps--vertical-timeline cdw-steps--md cdw-fw-accent-graphite"&gt;
  &lt;div class="cdw-step is-complete"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Recebimento&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Registro inicial do pedido.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-active"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Separacao&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Itens em picking.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-step is-pending"&gt;
    &lt;div class="cdw-step-indicator"&gt;&lt;/div&gt;
    &lt;div class="cdw-step-content"&gt;
      &lt;div class="cdw-step-title"&gt;Despacho&lt;/div&gt;
      &lt;div class="cdw-step-desc"&gt;Aguardando expedicao.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>
</section>

`, 
  forms: `

<section id="forms" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Formularios</h2>
    <p class="cdw-fw-docs-lead">
      Formularios elegantes, consistentes e com identidade CDW-FW, prontos para sistemas e produtos premium.
    </p>
  </div>

  <div class="cdw-fw-docs-toc">
    <span class="cdw-fw-docs-toc-title">Indice desta pagina</span>
    <a href="#forms-conceito">Conceito</a>
    <a href="#forms-estrutura">Estrutura base</a>
    <a href="#forms-inputs">Inputs</a>
    <a href="#forms-selects">Selects</a>
    <a href="#forms-checks">Check / Radio</a>
    <a href="#forms-uploads">Uploads</a>
    <a href="#forms-grid">Grid</a>
    <a href="#forms-estados">Estados</a>
    <a href="#forms-responsivo">Responsividade</a>
    <a href="#forms-exemplos">Exemplos completos</a>
  </div>

  <div class="cdw-fw-docs-subsection" id="forms-conceito" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Conceito</h3>
    <p class="cdw-fw-docs-subdesc">
      Formularios como carro-chefe: tipografia precisa, contorno elegante, estados claros e leitura consistente.
      <span class="cdw-fw-docs-when">Quando usar: cadastro, configuracao, fluxos operacionais e onboarding.</span>
    </p>
    <div class="cdw-fw-docs-classlist">
      <span>cdw-form</span>
      <span>cdw-form-group</span>
      <span>cdw-form-label</span>
      <span>cdw-form-input</span>
      <span>cdw-form-select</span>
      <span>cdw-form-textarea</span>
      <span>cdw-form-check</span>
      <span>cdw-form-dropzone</span>
      <span>cdw-form-actions</span>
      <span>cdw-form-grid</span>
      <span>cdw-fw-accent-*</span>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="forms-estrutura" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Estrutura base</h3>
    <p class="cdw-fw-docs-subdesc">Container do formulario + grupos de campo.</p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Base obrigatoria</div>
        <div class="cdw-fw-docs-badge">Estrutura</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <form class="cdw-form cdw-form-md cdw-fw-accent-ocean">
          <div class="cdw-form-group">
            <label class="cdw-form-label">Nome</label>
            <input class="cdw-form-input cdw-input-md" type="text" placeholder="Nome completo" />
            <div class="cdw-form-helper">Obrigatorio para identificacao.</div>
          </div>
        </form>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;form class="cdw-form cdw-form-md cdw-fw-accent-ocean"&gt;
  &lt;div class="cdw-form-group"&gt;
    &lt;label class="cdw-form-label"&gt;Nome&lt;/label&gt;
    &lt;input class="cdw-form-input cdw-input-md" type="text" placeholder="Nome completo" /&gt;
    &lt;div class="cdw-form-helper"&gt;Obrigatorio para identificacao.&lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="forms-inputs" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Inputs</h3>
    <p class="cdw-fw-docs-subdesc">Inputs com tamanhos e estilos clean, soft, outline e underline.</p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Tipos e estilos</div>
        <div class="cdw-fw-docs-badge">Inputs</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <form class="cdw-form cdw-form-md cdw-fw-accent-sky">
          <div class="cdw-form-group">
            <label class="cdw-form-label">Email</label>
            <input class="cdw-form-input cdw-input-md is-soft" type="email" placeholder="nome@empresa.com" />
          </div>
          <div class="cdw-form-group">
            <label class="cdw-form-label">Senha</label>
            <input class="cdw-form-input cdw-input-md is-outline" type="password" placeholder="Senha segura" />
          </div>
          <div class="cdw-form-group">
            <label class="cdw-form-label">Numero</label>
            <input class="cdw-form-input cdw-input-md is-underline" type="number" placeholder="0" />
          </div>
        </form>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;form class="cdw-form cdw-form-md cdw-fw-accent-sky"&gt;
  &lt;div class="cdw-form-group"&gt;
    &lt;label class="cdw-form-label"&gt;Email&lt;/label&gt;
    &lt;input class="cdw-form-input cdw-input-md is-soft" type="email" placeholder="nome@empresa.com" /&gt;
  &lt;/div&gt;
  &lt;div class="cdw-form-group"&gt;
    &lt;label class="cdw-form-label"&gt;Senha&lt;/label&gt;
    &lt;input class="cdw-form-input cdw-input-md is-outline" type="password" placeholder="Senha segura" /&gt;
  &lt;/div&gt;
  &lt;div class="cdw-form-group"&gt;
    &lt;label class="cdw-form-label"&gt;Numero&lt;/label&gt;
    &lt;input class="cdw-form-input cdw-input-md is-underline" type="number" placeholder="0" /&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Tamanhos</div>
        <div class="cdw-fw-docs-badge">Escalas</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <form class="cdw-form cdw-form-md cdw-fw-accent-sky">
          <div class="cdw-form-group">
            <label class="cdw-form-label">Input sm</label>
            <input class="cdw-form-input cdw-input-sm" type="text" placeholder="Compacto" />
          </div>
          <div class="cdw-form-group">
            <label class="cdw-form-label">Input md</label>
            <input class="cdw-form-input cdw-input-md" type="text" placeholder="Padrao" />
          </div>
          <div class="cdw-form-group">
            <label class="cdw-form-label">Input lg</label>
            <input class="cdw-form-input cdw-input-lg" type="text" placeholder="Destaque" />
          </div>
          <div class="cdw-form-group">
            <label class="cdw-form-label">Textarea sm</label>
            <textarea class="cdw-form-textarea cdw-textarea-sm" placeholder="Mini texto"></textarea>
          </div>
          <div class="cdw-form-group">
            <label class="cdw-form-label">Textarea md</label>
            <textarea class="cdw-form-textarea cdw-textarea-md" placeholder="Texto padrao"></textarea>
          </div>
          <div class="cdw-form-group">
            <label class="cdw-form-label">Textarea lg</label>
            <textarea class="cdw-form-textarea cdw-textarea-lg" placeholder="Texto amplo"></textarea>
          </div>
        </form>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;input class="cdw-form-input cdw-input-sm" type="text" /&gt;
&lt;input class="cdw-form-input cdw-input-md" type="text" /&gt;
&lt;input class="cdw-form-input cdw-input-lg" type="text" /&gt;
&lt;textarea class="cdw-form-textarea cdw-textarea-sm"&gt;&lt;/textarea&gt;
&lt;textarea class="cdw-form-textarea cdw-textarea-md"&gt;&lt;/textarea&gt;
&lt;textarea class="cdw-form-textarea cdw-textarea-lg"&gt;&lt;/textarea&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Textarea com contador</div>
        <div class="cdw-fw-docs-badge">Textarea</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <form class="cdw-form cdw-form-md cdw-fw-accent-mint">
          <div class="cdw-form-group">
            <label class="cdw-form-label">Resumo</label>
            <textarea class="cdw-form-textarea cdw-textarea-lg" data-cdw-form-counter maxlength="240" placeholder="Descricao curta"></textarea>
          </div>
        </form>
        <div class="cdw-fw-docs-example-caption">Use data-cdw-form-counter para ativar o contador.</div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;form class="cdw-form cdw-form-md cdw-fw-accent-mint"&gt;
  &lt;div class="cdw-form-group"&gt;
    &lt;label class="cdw-form-label"&gt;Resumo&lt;/label&gt;
    &lt;textarea class="cdw-form-textarea cdw-textarea-lg" data-cdw-form-counter maxlength="240" placeholder="Descricao curta"&gt;&lt;/textarea&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="forms-selects" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Selects</h3>
    <p class="cdw-fw-docs-subdesc">Select nativo estilizado e select avancado autoral com busca.</p>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Select simples</div>
        <div class="cdw-fw-docs-badge">Basico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <form class="cdw-form cdw-form-md cdw-fw-accent-amber">
          <div class="cdw-form-group">
            <label class="cdw-form-label">Categoria</label>
            <select class="cdw-form-select">
              <option>Operacional</option>
              <option>Financeiro</option>
              <option>Compliance</option>
            </select>
          </div>
        </form>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;form class="cdw-form cdw-form-md cdw-fw-accent-amber"&gt;
  &lt;div class="cdw-form-group"&gt;
    &lt;label class="cdw-form-label"&gt;Categoria&lt;/label&gt;
    &lt;select class="cdw-form-select"&gt;
      &lt;option&gt;Operacional&lt;/option&gt;
      &lt;option&gt;Financeiro&lt;/option&gt;
      &lt;option&gt;Compliance&lt;/option&gt;
    &lt;/select&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Select avancado</div>
        <div class="cdw-fw-docs-badge">Premium</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-form cdw-form-md cdw-fw-accent-ocean">
          <div class="cdw-form-group">
            <label class="cdw-form-label">Workspace</label>
            <div class="cdw-form-select-advanced" data-cdw-form-select>
              <button class="cdw-form-select-trigger" type="button">
                <span class="cdw-form-select-value">Selecione...</span>
                <span class="cdw-form-select-icon"></span>
              </button>
              <div class="cdw-form-select-panel">
                <input class="cdw-form-select-search" type="text" placeholder="Buscar" />
                <div class="cdw-form-select-options">
                  <button class="cdw-form-select-option" data-value="core">Core UI</button>
                  <button class="cdw-form-select-option" data-value="ops">Operacoes</button>
                  <button class="cdw-form-select-option" data-value="labs">CDW Labs</button>
                  <button class="cdw-form-select-option" data-value="docs">Documentacao</button>
                </div>
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
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-form cdw-form-md cdw-fw-accent-ocean"&gt;
  &lt;div class="cdw-form-group"&gt;
    &lt;label class="cdw-form-label"&gt;Workspace&lt;/label&gt;
    &lt;div class="cdw-form-select-advanced" data-cdw-form-select&gt;
      &lt;button class="cdw-form-select-trigger" type="button"&gt;
        &lt;span class="cdw-form-select-value"&gt;Selecione...&lt;/span&gt;
        &lt;span class="cdw-form-select-icon"&gt;&lt;/span&gt;
      &lt;/button&gt;
      &lt;div class="cdw-form-select-panel"&gt;
        &lt;input class="cdw-form-select-search" type="text" placeholder="Buscar" /&gt;
        &lt;div class="cdw-form-select-options"&gt;
          &lt;button class="cdw-form-select-option" data-value="core"&gt;Core UI&lt;/button&gt;
          &lt;button class="cdw-form-select-option" data-value="ops"&gt;Operacoes&lt;/button&gt;
          &lt;button class="cdw-form-select-option" data-value="labs"&gt;CDW Labs&lt;/button&gt;
          &lt;button class="cdw-form-select-option" data-value="docs"&gt;Documentacao&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Tamanhos de select</div>
        <div class="cdw-fw-docs-badge">Escalas</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <form class="cdw-form cdw-form-md cdw-fw-accent-graphite">
          <div class="cdw-form-group">
            <label class="cdw-form-label">Select sm</label>
            <select class="cdw-form-select cdw-input-sm">
              <option>Compacto</option>
              <option>Base</option>
            </select>
          </div>
          <div class="cdw-form-group">
            <label class="cdw-form-label">Select md</label>
            <select class="cdw-form-select cdw-input-md">
              <option>Padrao</option>
              <option>Amplo</option>
            </select>
          </div>
          <div class="cdw-form-group">
            <label class="cdw-form-label">Select lg</label>
            <select class="cdw-form-select cdw-input-lg">
              <option>Destaque</option>
              <option>Amplo</option>
            </select>
          </div>
          <div class="cdw-form-group">
            <label class="cdw-form-label">Select avancado sm</label>
            <div class="cdw-form-select-advanced cdw-input-sm" data-cdw-form-select>
              <button class="cdw-form-select-trigger" type="button">
                <span class="cdw-form-select-value">Compacto</span>
                <span class="cdw-form-select-icon"></span>
              </button>
              <div class="cdw-form-select-panel">
                <input class="cdw-form-select-search" type="text" placeholder="Buscar" />
                <div class="cdw-form-select-options">
                  <button class="cdw-form-select-option" data-value="sm">Compacto</button>
                  <button class="cdw-form-select-option" data-value="md">Padrao</button>
                </div>
              </div>
            </div>
          </div>
          <div class="cdw-form-group">
            <label class="cdw-form-label">Select avancado lg</label>
            <div class="cdw-form-select-advanced cdw-input-lg" data-cdw-form-select>
              <button class="cdw-form-select-trigger" type="button">
                <span class="cdw-form-select-value">Destaque</span>
                <span class="cdw-form-select-icon"></span>
              </button>
              <div class="cdw-form-select-panel">
                <input class="cdw-form-select-search" type="text" placeholder="Buscar" />
                <div class="cdw-form-select-options">
                  <button class="cdw-form-select-option" data-value="lg">Destaque</button>
                  <button class="cdw-form-select-option" data-value="xl">Amplo</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;form class="cdw-form cdw-form-md cdw-fw-accent-graphite"&gt;
  &lt;div class="cdw-form-group"&gt;
    &lt;label class="cdw-form-label"&gt;Select sm&lt;/label&gt;
    &lt;select class="cdw-form-select cdw-input-sm"&gt;
      &lt;option&gt;Compacto&lt;/option&gt;
      &lt;option&gt;Base&lt;/option&gt;
    &lt;/select&gt;
  &lt;/div&gt;
  &lt;div class="cdw-form-group"&gt;
    &lt;label class="cdw-form-label"&gt;Select md&lt;/label&gt;
    &lt;select class="cdw-form-select cdw-input-md"&gt;
      &lt;option&gt;Padrao&lt;/option&gt;
      &lt;option&gt;Amplo&lt;/option&gt;
    &lt;/select&gt;
  &lt;/div&gt;
  &lt;div class="cdw-form-group"&gt;
    &lt;label class="cdw-form-label"&gt;Select lg&lt;/label&gt;
    &lt;select class="cdw-form-select cdw-input-lg"&gt;
      &lt;option&gt;Destaque&lt;/option&gt;
      &lt;option&gt;Amplo&lt;/option&gt;
    &lt;/select&gt;
  &lt;/div&gt;
  &lt;div class="cdw-form-group"&gt;
    &lt;label class="cdw-form-label"&gt;Select avancado sm&lt;/label&gt;
    &lt;div class="cdw-form-select-advanced cdw-input-sm" data-cdw-form-select&gt;
      &lt;button class="cdw-form-select-trigger" type="button"&gt;
        &lt;span class="cdw-form-select-value"&gt;Compacto&lt;/span&gt;
        &lt;span class="cdw-form-select-icon"&gt;&lt;/span&gt;
      &lt;/button&gt;
      &lt;div class="cdw-form-select-panel"&gt;
        &lt;input class="cdw-form-select-search" type="text" placeholder="Buscar" /&gt;
        &lt;div class="cdw-form-select-options"&gt;
          &lt;button class="cdw-form-select-option" data-value="sm"&gt;Compacto&lt;/button&gt;
          &lt;button class="cdw-form-select-option" data-value="md"&gt;Padrao&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-form-group"&gt;
    &lt;label class="cdw-form-label"&gt;Select avancado lg&lt;/label&gt;
    &lt;div class="cdw-form-select-advanced cdw-input-lg" data-cdw-form-select&gt;
      &lt;button class="cdw-form-select-trigger" type="button"&gt;
        &lt;span class="cdw-form-select-value"&gt;Destaque&lt;/span&gt;
        &lt;span class="cdw-form-select-icon"&gt;&lt;/span&gt;
      &lt;/button&gt;
      &lt;div class="cdw-form-select-panel"&gt;
        &lt;input class="cdw-form-select-search" type="text" placeholder="Buscar" /&gt;
        &lt;div class="cdw-form-select-options"&gt;
          &lt;button class="cdw-form-select-option" data-value="lg"&gt;Destaque&lt;/button&gt;
          &lt;button class="cdw-form-select-option" data-value="xl"&gt;Amplo&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="forms-checks" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Check / Radio</h3>
    <p class="cdw-fw-docs-subdesc">Checks em linha, bloco e switch autoral.</p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Variacoes</div>
        <div class="cdw-fw-docs-badge">Checks</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-form cdw-form-md cdw-fw-accent-rose">
          <label class="cdw-form-check cdw-form-check--inline">
            <input type="checkbox" checked />
            <span>Ativo</span>
          </label>
          <label class="cdw-form-check cdw-form-check--inline">
            <input type="checkbox" />
            <span>Revisao</span>
          </label>
          <div style="margin-top:12px;">
            <label class="cdw-form-check cdw-form-check--block cdw-form-check--radio">
              <input type="radio" name="perfil" checked />
              <span>Perfil primario</span>
            </label>
            <label class="cdw-form-check cdw-form-check--block cdw-form-check--radio">
              <input type="radio" name="perfil" />
              <span>Perfil secundario</span>
            </label>
          </div>
          <div style="margin-top:12px;">
            <label class="cdw-form-check cdw-form-check--switch">
              <input type="checkbox" checked />
              <span>Modo compacto</span>
            </label>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-form cdw-form-md cdw-fw-accent-rose"&gt;
  &lt;label class="cdw-form-check cdw-form-check--inline"&gt;
    &lt;input type="checkbox" checked /&gt;
    &lt;span&gt;Ativo&lt;/span&gt;
  &lt;/label&gt;
  &lt;label class="cdw-form-check cdw-form-check--inline"&gt;
    &lt;input type="checkbox" /&gt;
    &lt;span&gt;Revisao&lt;/span&gt;
  &lt;/label&gt;
  &lt;div style="margin-top:12px;"&gt;
    &lt;label class="cdw-form-check cdw-form-check--block cdw-form-check--radio"&gt;
      &lt;input type="radio" name="perfil" checked /&gt;
      &lt;span&gt;Perfil primario&lt;/span&gt;
    &lt;/label&gt;
    &lt;label class="cdw-form-check cdw-form-check--block cdw-form-check--radio"&gt;
      &lt;input type="radio" name="perfil" /&gt;
      &lt;span&gt;Perfil secundario&lt;/span&gt;
    &lt;/label&gt;
  &lt;/div&gt;
  &lt;div style="margin-top:12px;"&gt;
    &lt;label class="cdw-form-check cdw-form-check--switch"&gt;
      &lt;input type="checkbox" checked /&gt;
      &lt;span&gt;Modo compacto&lt;/span&gt;
    &lt;/label&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Tamanhos</div>
        <div class="cdw-fw-docs-badge">Escalas</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-form cdw-form-md cdw-fw-accent-ocean">
          <div>
            <label class="cdw-form-check cdw-form-check-sm cdw-form-check--inline">
              <input type="checkbox" checked />
              <span>Check sm</span>
            </label>
            <label class="cdw-form-check cdw-form-check--inline">
              <input type="checkbox" checked />
              <span>Check md</span>
            </label>
            <label class="cdw-form-check cdw-form-check-lg cdw-form-check--inline">
              <input type="checkbox" checked />
              <span>Check lg</span>
            </label>
          </div>
          <div style="margin-top:12px;">
            <label class="cdw-form-check cdw-form-check-sm cdw-form-check--radio cdw-form-check--inline">
              <input type="radio" name="perfil-size" checked />
              <span>Radio sm</span>
            </label>
            <label class="cdw-form-check cdw-form-check--radio cdw-form-check--inline">
              <input type="radio" name="perfil-size" />
              <span>Radio md</span>
            </label>
            <label class="cdw-form-check cdw-form-check-lg cdw-form-check--radio cdw-form-check--inline">
              <input type="radio" name="perfil-size" />
              <span>Radio lg</span>
            </label>
          </div>
          <div style="margin-top:12px;">
            <label class="cdw-form-check cdw-form-check--switch cdw-form-check-sm">
              <input type="checkbox" checked />
              <span>Switch sm</span>
            </label>
            <label class="cdw-form-check cdw-form-check--switch">
              <input type="checkbox" checked />
              <span>Switch md</span>
            </label>
            <label class="cdw-form-check cdw-form-check--switch cdw-form-check-lg">
              <input type="checkbox" checked />
              <span>Switch lg</span>
            </label>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-form cdw-form-md cdw-fw-accent-ocean"&gt;
  &lt;label class="cdw-form-check cdw-form-check-sm cdw-form-check--inline"&gt;
    &lt;input type="checkbox" checked /&gt;
    &lt;span&gt;Check sm&lt;/span&gt;
  &lt;/label&gt;
  &lt;label class="cdw-form-check cdw-form-check--inline"&gt;
    &lt;input type="checkbox" checked /&gt;
    &lt;span&gt;Check md&lt;/span&gt;
  &lt;/label&gt;
  &lt;label class="cdw-form-check cdw-form-check-lg cdw-form-check--inline"&gt;
    &lt;input type="checkbox" checked /&gt;
    &lt;span&gt;Check lg&lt;/span&gt;
  &lt;/label&gt;
  &lt;div style="margin-top:12px;"&gt;
    &lt;label class="cdw-form-check cdw-form-check-sm cdw-form-check--radio cdw-form-check--inline"&gt;
      &lt;input type="radio" name="perfil-size" checked /&gt;
      &lt;span&gt;Radio sm&lt;/span&gt;
    &lt;/label&gt;
    &lt;label class="cdw-form-check cdw-form-check--radio cdw-form-check--inline"&gt;
      &lt;input type="radio" name="perfil-size" /&gt;
      &lt;span&gt;Radio md&lt;/span&gt;
    &lt;/label&gt;
    &lt;label class="cdw-form-check cdw-form-check-lg cdw-form-check--radio cdw-form-check--inline"&gt;
      &lt;input type="radio" name="perfil-size" /&gt;
      &lt;span&gt;Radio lg&lt;/span&gt;
    &lt;/label&gt;
  &lt;/div&gt;
  &lt;div style="margin-top:12px;"&gt;
    &lt;label class="cdw-form-check cdw-form-check--switch cdw-form-check-sm"&gt;
      &lt;input type="checkbox" checked /&gt;
      &lt;span&gt;Switch sm&lt;/span&gt;
    &lt;/label&gt;
    &lt;label class="cdw-form-check cdw-form-check--switch"&gt;
      &lt;input type="checkbox" checked /&gt;
      &lt;span&gt;Switch md&lt;/span&gt;
    &lt;/label&gt;
    &lt;label class="cdw-form-check cdw-form-check--switch cdw-form-check-lg"&gt;
      &lt;input type="checkbox" checked /&gt;
      &lt;span&gt;Switch lg&lt;/span&gt;
    &lt;/label&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="forms-uploads" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Uploads</h3>
    <p class="cdw-fw-docs-subdesc">Upload simples com botao + lista e dropzone premium com preview.</p>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Upload simples</div>
        <div class="cdw-fw-docs-badge">Basico</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <form class="cdw-form cdw-form-md cdw-fw-accent-graphite">
          <div class="cdw-form-group">
            <label class="cdw-form-label">Arquivo</label>
            <div class="cdw-form-filebox" data-cdw-form-file>
              <input type="file" class="cdw-form-file-input" />
              <button class="cdw-form-file-button" type="button">Selecionar arquivo</button>
              <div class="cdw-form-file-list"></div>
            </div>
          </div>
        </form>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;form class="cdw-form cdw-form-md cdw-fw-accent-graphite"&gt;
  &lt;div class="cdw-form-group"&gt;
    &lt;label class="cdw-form-label"&gt;Arquivo&lt;/label&gt;
    &lt;div class="cdw-form-filebox" data-cdw-form-file&gt;
      &lt;input type="file" class="cdw-form-file-input" /&gt;
      &lt;button class="cdw-form-file-button" type="button"&gt;Selecionar arquivo&lt;/button&gt;
      &lt;div class="cdw-form-file-list"&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Dropzone premium</div>
        <div class="cdw-fw-docs-badge">Premium</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-form cdw-form-md cdw-fw-accent-ocean">
          <div class="cdw-form-dropzone-wrap">
            <div class="cdw-form-dropzone" data-cdw-form-dropzone>
              <input class="cdw-form-dropzone-input" type="file" multiple />
              <div class="cdw-form-dropzone-title">Arraste arquivos aqui</div>
              <div class="cdw-form-dropzone-helper">Formatos PDF, CSV ou PNG</div>
            </div>
            <div class="cdw-form-dropzone-list"></div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-form cdw-form-md cdw-fw-accent-ocean"&gt;
  &lt;div class="cdw-form-dropzone-wrap"&gt;
    &lt;div class="cdw-form-dropzone" data-cdw-form-dropzone&gt;
      &lt;input class="cdw-form-dropzone-input" type="file" multiple /&gt;
      &lt;div class="cdw-form-dropzone-title"&gt;Arraste arquivos aqui&lt;/div&gt;
      &lt;div class="cdw-form-dropzone-helper"&gt;Formatos PDF, CSV ou PNG&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-form-dropzone-list"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="forms-grid" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Grid</h3>
    <p class="cdw-fw-docs-subdesc">Grid 12 colunas com quebra automatica no mobile.</p>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Grid de formulario</div>
        <div class="cdw-fw-docs-badge">Layout</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <form class="cdw-form cdw-form-md cdw-fw-accent-sky">
          <div class="cdw-form-grid">
            <div class="cdw-col-6">
              <div class="cdw-form-group">
                <label class="cdw-form-label">Nome</label>
                <input class="cdw-form-input cdw-input-md" type="text" />
              </div>
            </div>
            <div class="cdw-col-6">
              <div class="cdw-form-group">
                <label class="cdw-form-label">Sobrenome</label>
                <input class="cdw-form-input cdw-input-md" type="text" />
              </div>
            </div>
            <div class="cdw-col-12">
              <div class="cdw-form-group">
                <label class="cdw-form-label">Email</label>
                <input class="cdw-form-input cdw-input-md" type="email" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;form class="cdw-form cdw-form-md cdw-fw-accent-sky"&gt;
  &lt;div class="cdw-form-grid"&gt;
    &lt;div class="cdw-col-6"&gt;
      &lt;div class="cdw-form-group"&gt;
        &lt;label class="cdw-form-label"&gt;Nome&lt;/label&gt;
        &lt;input class="cdw-form-input cdw-input-md" type="text" /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-col-6"&gt;
      &lt;div class="cdw-form-group"&gt;
        &lt;label class="cdw-form-label"&gt;Sobrenome&lt;/label&gt;
        &lt;input class="cdw-form-input cdw-input-md" type="text" /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-col-12"&gt;
      &lt;div class="cdw-form-group"&gt;
        &lt;label class="cdw-form-label"&gt;Email&lt;/label&gt;
        &lt;input class="cdw-form-input cdw-input-md" type="email" /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="forms-estados" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Estados</h3>
    <p class="cdw-fw-docs-subdesc">Default, filled, disabled, error, success e warning.</p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Estados visuais</div>
        <div class="cdw-fw-docs-badge">Estados</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <form class="cdw-form cdw-form-md cdw-fw-accent-ocean">
          <div class="cdw-form-group is-filled">
            <label class="cdw-form-label">Preenchido</label>
            <input class="cdw-form-input" value="Conteudo" />
          </div>
          <div class="cdw-form-group is-error">
            <label class="cdw-form-label">Erro</label>
            <input class="cdw-form-input" value="Valor invalido" />
            <div class="cdw-form-helper">Campo obrigatorio</div>
          </div>
          <div class="cdw-form-group is-success">
            <label class="cdw-form-label">Sucesso</label>
            <input class="cdw-form-input" value="Validado" />
            <div class="cdw-form-helper">Tudo certo</div>
          </div>
          <div class="cdw-form-group is-warning">
            <label class="cdw-form-label">Atencao</label>
            <input class="cdw-form-input" value="Revisar" />
            <div class="cdw-form-helper">Confirme antes de salvar</div>
          </div>
          <div class="cdw-form-group is-disabled">
            <label class="cdw-form-label">Desabilitado</label>
            <input class="cdw-form-input" value="Bloqueado" disabled />
          </div>
        </form>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;form class="cdw-form cdw-form-md cdw-fw-accent-ocean"&gt;
  &lt;div class="cdw-form-group is-filled"&gt;
    &lt;label class="cdw-form-label"&gt;Preenchido&lt;/label&gt;
    &lt;input class="cdw-form-input" value="Conteudo" /&gt;
  &lt;/div&gt;
  &lt;div class="cdw-form-group is-error"&gt;
    &lt;label class="cdw-form-label"&gt;Erro&lt;/label&gt;
    &lt;input class="cdw-form-input" value="Valor invalido" /&gt;
    &lt;div class="cdw-form-helper"&gt;Campo obrigatorio&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-form-group is-success"&gt;
    &lt;label class="cdw-form-label"&gt;Sucesso&lt;/label&gt;
    &lt;input class="cdw-form-input" value="Validado" /&gt;
    &lt;div class="cdw-form-helper"&gt;Tudo certo&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-form-group is-warning"&gt;
    &lt;label class="cdw-form-label"&gt;Atencao&lt;/label&gt;
    &lt;input class="cdw-form-input" value="Revisar" /&gt;
    &lt;div class="cdw-form-helper"&gt;Confirme antes de salvar&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cdw-form-group is-disabled"&gt;
    &lt;label class="cdw-form-label"&gt;Desabilitado&lt;/label&gt;
    &lt;input class="cdw-form-input" value="Bloqueado" disabled /&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="forms-responsivo" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Responsividade</h3>
    <p class="cdw-fw-docs-subdesc">No mobile: inputs full width, labels empilhados e botoes em stack.</p>
    <div class="cdw-fw-docs-card">
      <div class="cdw-fw-docs-card-title">Boas praticas</div>
      <div class="cdw-fw-docs-highlight">Use cdw-form-grid para manter proporcoes consistentes.</div>
      <div class="cdw-fw-docs-highlight">Acoes ficam em coluna automaticamente no mobile.</div>
      <div class="cdw-fw-docs-highlight">Dropzone reduz espacamento e mantem lista visivel.</div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="forms-exemplos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Exemplos completos</h3>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Cadastro institucional</div>
        <div class="cdw-fw-docs-badge">Form</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <form class="cdw-form cdw-form-lg cdw-fw-accent-graphite">
          <div class="cdw-form-grid">
            <div class="cdw-col-6">
              <div class="cdw-form-group">
                <label class="cdw-form-label">Nome</label>
                <input class="cdw-form-input cdw-input-lg" type="text" placeholder="Nome completo" />
              </div>
            </div>
            <div class="cdw-col-6">
              <div class="cdw-form-group">
                <label class="cdw-form-label">Departamento</label>
                <input class="cdw-form-input cdw-input-lg is-soft" type="text" placeholder="Area" />
              </div>
            </div>
            <div class="cdw-col-12">
              <div class="cdw-form-group">
                <label class="cdw-form-label">Mensagem</label>
                <textarea class="cdw-form-textarea cdw-textarea-lg" placeholder="Resumo do contexto"></textarea>
              </div>
            </div>
            <div class="cdw-col-12">
              <div class="cdw-form-actions">
                <button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded" type="button">Salvar</button>
                <button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded" type="button">Cancelar</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;form class="cdw-form cdw-form-lg cdw-fw-accent-graphite"&gt;
  &lt;div class="cdw-form-grid"&gt;
    &lt;div class="cdw-col-6"&gt;
      &lt;div class="cdw-form-group"&gt;
        &lt;label class="cdw-form-label"&gt;Nome&lt;/label&gt;
        &lt;input class="cdw-form-input cdw-input-lg" type="text" placeholder="Nome completo" /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-col-6"&gt;
      &lt;div class="cdw-form-group"&gt;
        &lt;label class="cdw-form-label"&gt;Departamento&lt;/label&gt;
        &lt;input class="cdw-form-input cdw-input-lg is-soft" type="text" placeholder="Area" /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-col-12"&gt;
      &lt;div class="cdw-form-group"&gt;
        &lt;label class="cdw-form-label"&gt;Mensagem&lt;/label&gt;
        &lt;textarea class="cdw-form-textarea cdw-textarea-lg" placeholder="Resumo do contexto"&gt;&lt;/textarea&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="cdw-col-12"&gt;
      &lt;div class="cdw-form-actions"&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--rounded" type="button"&gt;Salvar&lt;/button&gt;
        &lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--rounded" type="button"&gt;Cancelar&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
      </div>
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

      sections.login = `
<section id="login" class="cdw-fw-docs-section" data-cdw-fw-docs-section>
  <div class="cdw-fw-docs-section-head">
    <h2 class="cdw-fw-docs-section-title">Login / Auth</h2>
    <p class="cdw-fw-docs-lead">
      Tela full-screen com painel funcional e visual simplificado, com fundo liso e foco no produto.
    </p>
  </div>

  <div class="cdw-fw-docs-toc">
    <span class="cdw-fw-docs-toc-title">Índice desta página</span>
    <a href="#login-base">Base</a>
    <a href="#login-modelos">Modelos</a>
  </div>

  <div class="cdw-fw-docs-subsection" id="login-base" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Base</h3>
    <p class="cdw-fw-docs-subdesc">Painel funcional + visual minimalista com fundo escuro e letras claras.</p>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-preview">
        <div class="cdw-login cdw-login--split-clean cdw-fw-accent-carbon">
          <div class="cdw-login-panel cdw-login-panel--form">
            <div class="cdw-login__brand">
              <div class="cdw-login__brand-mark"></div>
              <div>
                <strong>CDW-FW</strong>
                <span>ERP Control Hub</span>
              </div>
            </div>
            <h3 class="cdw-login__title">Acesso seguro</h3>
            <p class="cdw-login__subtitle">Entrar em sistemas corporativos com confiança.</p>
            <form class="cdw-login__form cdw-form" data-cdw-login>
              <div class="cdw-form-group">
                <label class="cdw-form-label">Email corporativo</label>
                <input class="cdw-form-input cdw-input-lg" type="email" placeholder="nome@empresa.com" data-cdw-login-input="email" />
              </div>
              <div class="cdw-form-group">
                <label class="cdw-form-label">Senha</label>
                <div class="cdw-login__field">
                  <input class="cdw-form-input cdw-input-lg" type="password" data-cdw-login-input="password" placeholder="••••••••" />
                  <button type="button" class="cdw-login__toggle" data-cdw-login-toggle="password">Mostrar</button>
                </div>
              </div>
              <button type="submit" class="cdw-login__form-button cdw-fw-btn cdw-fw-btn--solid" data-cdw-login-submit>Entrar</button>
            </form>
          </div>
          <div class="cdw-login-panel cdw-login-panel--visual">
            <div class="cdw-login__visual-block">
              <h4>Inteligência Operacional</h4>
              <p>Fundo liso, frases curtas e formas limpas reforçam maturidade.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="cdw-fw-docs-subsection" id="login-modelos" data-cdw-fw-docs-section>
    <h3 class="cdw-fw-docs-subtitle">Modelos</h3>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-preview">
        <div class="cdw-login cdw-login--split-clean cdw-fw-accent-sky">
          <div class="cdw-login-panel cdw-login-panel--form">
            <div class="cdw-login__brand">
              <div class="cdw-login__brand-mark"></div>
              <div>
                <strong>CDW-FW</strong>
                <span>Project Flow</span>
              </div>
            </div>
            <h1 class="cdw-login__title">Login</h1>
            <p class="cdw-login__subtitle">Entre no painel de gestão de projetos.</p>
            <form class="cdw-login__form cdw-form" data-cdw-login>
              <div class="cdw-form-group">
                <label class="cdw-form-label">Email</label>
                <input class="cdw-form-input cdw-input-lg" type="email" placeholder="seu@email.com" data-cdw-login-input="email" />
              </div>
              <div class="cdw-form-group">
                <label class="cdw-form-label">Senha</label>
                <div class="cdw-login__field">
                  <input class="cdw-form-input cdw-input-lg" type="password" placeholder="Sua senha" data-cdw-login-input="password" />
                  <button type="button" class="cdw-login__toggle" data-cdw-login-toggle="password">Mostrar</button>
                </div>
              </div>
              <div class="cdw-login__row">
                <a class="cdw-login__link" href="#">Esqueci minha senha</a>
                <span class="cdw-login__meta-tag">Manter conectado</span>
              </div>
              <button type="submit" class="cdw-login__form-button cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--lg" data-cdw-login-submit>Entrar</button>
              <button type="button" class="cdw-login__form-button cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--lg" data-cdw-login-google>
                <span class="cdw-login__google-icon">G</span> Google
              </button>
            </form>
          </div>
          <div class="cdw-login-panel cdw-login-panel--visual">
            <div class="cdw-login-visual">
              <div class="cdw-login-visual__shape is-organic is-float-a" style="width:250px;height:250px;top:10%;left:10%;"></div>
              <div class="cdw-login-visual__shape is-circle is-float-b" style="width:180px;height:180px;bottom:15%;right:15%;"></div>
              <div class="cdw-login-visual__shape is-pill is-float-a" style="width:300px;height:100px;bottom:30%;left:5%;"></div>
              <div class="cdw-login-visual__shape is-organic is-float-b" style="width:150px;height:150px;top:20%;right:25%;"></div>
              <div class="cdw-login-visual__line" style="width:320px;height:320px;top:15%;left:15%;"></div>
              <div class="cdw-login-visual__line" style="width:220px;height:220px;bottom:10%;right:10%;transform:rotate(30deg);"></div>
              <div class="cdw-login-visual__thin" style="width:400px;top:35%;left:5%;transform:rotate(25deg);"></div>
              <div class="cdw-login-visual__thin" style="width:350px;bottom:40%;right:5%;transform:rotate(-20deg);"></div>
              <div class="cdw-login-visual__complex" style="width:160px;height:160px;top:10%;right:10%;"></div>
              <div class="cdw-login-visual__complex" style="width:120px;height:120px;bottom:20%;left:15%;"></div>
              <div class="cdw-login-visual__dot" style="width:12px;height:12px;top:25%;left:30%;"></div>
              <div class="cdw-login-visual__dot" style="width:8px;height:8px;top:40%;right:35%;"></div>
              <div class="cdw-login-visual__dot" style="width:16px;height:16px;bottom:45%;left:35%;"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-login cdw-login--split-clean cdw-fw-accent-sky"&gt;
  &lt;div class="cdw-login-panel cdw-login-panel--form"&gt;
    &lt;div class="cdw-login__brand"&gt;
      &lt;div class="cdw-login__brand-mark"&gt;&lt;/div&gt;
      &lt;div&gt;&lt;strong&gt;CDW-FW&lt;/strong&gt;&lt;span&gt;Project Flow&lt;/span&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;h1 class="cdw-login__title"&gt;Login&lt;/h1&gt;
    &lt;p class="cdw-login__subtitle"&gt;Entre no painel de gest&atilde;o de projetos.&lt;/p&gt;
    &lt;form class="cdw-login__form cdw-form" data-cdw-login&gt;
      &lt;div class="cdw-form-group"&gt;
        &lt;label class="cdw-form-label"&gt;Email&lt;/label&gt;
        &lt;input class="cdw-form-input cdw-input-lg" type="email" placeholder="seu@email.com" data-cdw-login-input="email" /&gt;
      &lt;/div&gt;
      &lt;div class="cdw-form-group"&gt;
        &lt;label class="cdw-form-label"&gt;Senha&lt;/label&gt;
        &lt;div class="cdw-login__field"&gt;
          &lt;input class="cdw-form-input cdw-input-lg" type="password" placeholder="Sua senha" data-cdw-login-input="password" /&gt;
          &lt;button type="button" class="cdw-login__toggle" data-cdw-login-toggle="password"&gt;Mostrar&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="cdw-login__row"&gt;
        &lt;a class="cdw-login__link" href="#"&gt;Esqueci minha senha&lt;/a&gt;
        &lt;span class="cdw-login__meta-tag"&gt;Manter conectado&lt;/span&gt;
      &lt;/div&gt;
      &lt;button type="submit" class="cdw-login__form-button cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--lg" data-cdw-login-submit&gt;Entrar&lt;/button&gt;
      &lt;button type="button" class="cdw-login__form-button cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--lg" data-cdw-login-google&gt;
        &lt;span class="cdw-login__google-icon"&gt;G&lt;/span&gt; Google
      &lt;/button&gt;
    &lt;/form&gt;
  &lt;/div&gt;
  &lt;div class="cdw-login-panel cdw-login-panel--visual"&gt;
    &lt;div class="cdw-login-visual"&gt;
      &lt;div class="cdw-login-visual__shape is-organic is-float-a" style="width:250px;height:250px;top:10%;left:10%;"&gt;&lt;/div&gt;
      &lt;div class="cdw-login-visual__shape is-circle is-float-b" style="width:180px;height:180px;bottom:15%;right:15%;"&gt;&lt;/div&gt;
      &lt;div class="cdw-login-visual__shape is-pill is-float-a" style="width:300px;height:100px;bottom:30%;left:5%;"&gt;&lt;/div&gt;
      &lt;div class="cdw-login-visual__shape is-organic is-float-b" style="width:150px;height:150px;top:20%;right:25%;"&gt;&lt;/div&gt;
      &lt;div class="cdw-login-visual__line" style="width:320px;height:320px;top:15%;left:15%;"&gt;&lt;/div&gt;
      &lt;div class="cdw-login-visual__line" style="width:220px;height:220px;bottom:10%;right:10%;transform:rotate(30deg);"&gt;&lt;/div&gt;
      &lt;div class="cdw-login-visual__thin" style="width:400px;top:35%;left:5%;transform:rotate(25deg);"&gt;&lt;/div&gt;
      &lt;div class="cdw-login-visual__thin" style="width:350px;bottom:40%;right:5%;transform:rotate(-20deg);"&gt;&lt;/div&gt;
      &lt;div class="cdw-login-visual__complex" style="width:160px;height:160px;top:10%;right:10%;"&gt;&lt;/div&gt;
      &lt;div class="cdw-login-visual__complex" style="width:120px;height:120px;bottom:20%;left:15%;"&gt;&lt;/div&gt;
      &lt;div class="cdw-login-visual__dot" style="width:12px;height:12px;top:25%;left:30%;"&gt;&lt;/div&gt;
      &lt;div class="cdw-login-visual__dot" style="width:8px;height:8px;top:40%;right:35%;"&gt;&lt;/div&gt;
      &lt;div class="cdw-login-visual__dot" style="width:16px;height:16px;bottom:45%;left:35%;"&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-preview">
        <div class="cdw-login cdw-login--inverted-focus cdw-fw-accent-indigo">
          <div class="cdw-login-panel cdw-login-panel--visual">
            <div class="cdw-login__visual-block">
              <h4>Inverted Focus</h4>
              <p>Gradiente mais escuro com texto claro e espaço vazio.</p>
            </div>
          </div>
          <div class="cdw-login-panel cdw-login-panel--form">
            <h3 class="cdw-login__title">Controles do produto</h3>
            <form class="cdw-login__form" data-cdw-login>
              <input class="cdw-form-input" type="email" placeholder="produto@empresa.com" />
              <input class="cdw-form-input" type="password" placeholder="••••••••" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;



    const pageLinks = [
    { key: "getting-started", label: "Come&ccedil;ando", href: "./index.html" },
    { key: "layout", label: "Layout", href: "./layout.html" },
    { key: "design", label: "Sistema de design", href: "./design.html" },
    { key: "utilities", label: "Utilit&aacute;rios", href: "./utilities.html" },
    { key: "components", label: "Componentes", href: "./components.html" },
    { key: "login", label: "Login / Auth", href: "./login.html" },
  ];

  const pageSections = {
    "getting-started": ["gettingStarted"],
    layout: ["layout"],
    design: ["designOverview", "designTypography", "designRhythm", "designShapes", "designBorders", "designShadows", "designGradients", "designStates", "designMotion", "designAccessibility", "designTokens"],
    utilities: ["colors", "utilities"],
    components: [
      "buttons",
      "accordion",
      "alert",
      "badges",
      "cards",
      "images",
        "fab",
        "tables",
      "hero",
      "panel",
      "steps",
      "forms",
      "gallery",
      "modal",
      "tooltip",
      "stage",
      "navbars",
    ],
    login: ["login"],
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
    ],        design: [
      {
        title: "SISTEMA DE DESIGN",
        items: [
          { title: "Visao geral", target: "#design-visao", links: [{ label: "Visao geral", href: "#design-visao" }] },
          { title: "Tipografia", target: "#design-tipografia", links: [{ label: "Tipografia", href: "#design-tipografia" }] },
          { title: "Ritmo &amp; Espacamento", target: "#design-ritmo", links: [{ label: "Ritmo &amp; Espacamento", href: "#design-ritmo" }] },
          { title: "Formas &amp; Raios", target: "#design-formas", links: [{ label: "Formas &amp; Raios", href: "#design-formas" }] },
          { title: "Bordas", target: "#design-bordas", links: [{ label: "Bordas", href: "#design-bordas" }] },
          { title: "Sombras &amp; Elevacao", target: "#design-sombras", links: [{ label: "Sombras &amp; Elevacao", href: "#design-sombras" }] },
          { title: "Gradientes", target: "#design-gradientes", links: [{ label: "Gradientes", href: "#design-gradientes" }] },
          { title: "Estados", target: "#design-estados", links: [{ label: "Estados", href: "#design-estados" }] },
          { title: "Motion &amp; Transicoes", target: "#design-motion", links: [{ label: "Motion &amp; Transicoes", href: "#design-motion" }] },
          { title: "Acessibilidade", target: "#design-acessibilidade", links: [{ label: "Acessibilidade", href: "#design-acessibilidade" }] },
          { title: "Tokens do Sistema", target: "#design-tokens", links: [{ label: "Tokens do Sistema", href: "#design-tokens" }] },
        ],
      },
    ],
    utilities: [
      {
        title: "UTILIT&Aacute;RIOS",
        items: [
          {
            title: "Cores",
            target: "#cores",
            links: [
              { label: "Introdu&ccedil;&atilde;o", href: "#cores-intro" },
              { label: "Paleta", href: "#cores-paleta" },
              { label: "Monocrom&aacute;ticas", href: "#cores-mono" },
              { label: "Uso b&aacute;sico", href: "#cores-uso" },
            ],
          },
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
            target: "#util-dimensoes",
            links: [{ label: "Dimens&otilde;es", href: "#util-dimensoes" }],
          },
          {
            title: "Alinhamento",
            target: "#util-alinhamento",
            links: [{ label: "Alinhamento", href: "#util-alinhamento" }],
          },
          {
            title: "Posicionamento",
            target: "#util-posicionamento",
            links: [{ label: "Posicionamento", href: "#util-posicionamento" }],
          },
          {
            title: "Overflow",
            target: "#util-overflow",
            links: [{ label: "Overflow", href: "#util-overflow" }],
          },
          {
            title: "Texto",
            target: "#util-texto",
            links: [{ label: "Texto", href: "#util-texto" }],
          },
          {
            title: "Design (exemplos)",
            target: "#util-design-exemplos",
            links: [{ label: "Design (exemplos)", href: "#util-design-exemplos" }],
          },
        ],
      },
    ],components: [
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
            title: "Alertas",
            target: "#alertas",
            links: [
              { label: "Introducao", href: "#alert-intro" },
              { label: "Estrutura base", href: "#alert-estrutura" },
              { label: "Modelos", href: "#alert-modelos" },
              { label: "Cores e variantes", href: "#alert-variantes" },
              { label: "API / Opcoes", href: "#alert-api" },
              { label: "Boas praticas", href: "#alert-boas-praticas" },
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
            title: "Image",
            target: "#images",
            links: [
              { label: "Conceito", href: "#image-conceito" },
              { label: "Estrutura", href: "#image-estrutura" },
              { label: "Tamanhos", href: "#image-tamanhos" },
              { label: "Tipos", href: "#image-tipos" },
              { label: "Bordas", href: "#image-bordas" },
              { label: "Alinhamento", href: "#image-alinhamento" },
            ],
          },          {
            title: "Floating Action Button",
            target: "#fab",
            links: [
              { label: "Conceito", href: "#fab-conceito" },
              { label: "Estrutura", href: "#fab-estrutura" },
              { label: "Posicionamento", href: "#fab-posicionamento" },
              { label: "Formas", href: "#fab-formas" },
              { label: "Tamanhos", href: "#fab-tamanhos" },
              { label: "Modelos", href: "#fab-modelos" },
              { label: "Exemplos de uso", href: "#fab-exemplos" },
            ],
          },
          {
            title: "Tabelas",
            target: "#tables",
            links: [
              { label: "Conceito", href: "#tables-conceito" },
              { label: "Estrutura", href: "#tables-estrutura" },
              { label: "Opcoes", href: "#tables-opcoes" },
              { label: "Variacoes", href: "#tables-variacoes" },
              { label: "Tamanhos", href: "#tables-tamanhos" },
              { label: "Estados", href: "#tables-estados" },
              { label: "Surface", href: "#tables-surface" },
              { label: "Rail", href: "#tables-rail" },
              { label: "Focus", href: "#tables-focus" },
              { label: "Split", href: "#tables-split" },
              { label: "Timeline", href: "#tables-timeline" },
              { label: "Minimal", href: "#tables-minimal" },
              { label: "Responsivo", href: "#tables-responsivo" },
            ],
          },
          {
            title: "Steps",
            target: "#steps",
            links: [
              { label: "Conceito", href: "#steps-conceito" },
              { label: "Estrutura", href: "#steps-estrutura" },
              { label: "Estados", href: "#steps-estados" },
              { label: "Tamanhos", href: "#steps-tamanhos" },
              { label: "Modelos", href: "#steps-modelos" },
              { label: "Exemplos reais", href: "#steps-exemplos" },
            ],
          },
          {
            title: "Formularios",
            target: "#forms",
            links: [
              { label: "Conceito", href: "#forms-conceito" },
              { label: "Estrutura base", href: "#forms-estrutura" },
              { label: "Inputs", href: "#forms-inputs" },
              { label: "Selects", href: "#forms-selects" },
              { label: "Check / Radio", href: "#forms-checks" },
              { label: "Uploads", href: "#forms-uploads" },
              { label: "Grid", href: "#forms-grid" },
              { label: "Estados", href: "#forms-estados" },
              { label: "Responsividade", href: "#forms-responsivo" },
              { label: "Exemplos completos", href: "#forms-exemplos" },
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
    login: [
      {
        title: "LOGIN / AUTH",
        items: [
          {
            title: "Estrutura",
            target: "#login-estrutura",
            links: [{ label: "Estrutura base", href: "#login-estrutura" }],
          },
          {
            title: "Modelos",
            target: "#login-modelos",
            links: [
              { label: "Split Clean", href: "#login-modelos" },
              { label: "Inverted Focus", href: "#login-modelos" },
              { label: "Frame / Panel", href: "#login-modelos" },
            ],
          },
          {
            title: "Painel visual",
            target: "#login-visual",
            links: [{ label: "Identidade", href: "#login-visual" }],
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

  const normalizeLabel = (value) => {
    if (!value) return "";
    const el = document.createElement("textarea");
    el.innerHTML = value;
    return el.value.trim().toLowerCase();
  };

  const sortByLabel = (a, b, key) => {
    const aLabel = normalizeLabel(key ? a[key] : a.label || a.title || "");
    const bLabel = normalizeLabel(key ? b[key] : b.label || b.title || "");
    return aLabel.localeCompare(bLabel, "pt-BR");
  };

  const sortedPageLinks = [...pageLinks].sort((a, b) => sortByLabel(a, b, "label"));
  const sortedNavData = navData
    .map((group) => ({
      ...group,
      items: [...group.items]
        .sort((a, b) => sortByLabel(a, b, "title"))
        .map((item) => ({
          ...item,
          links: [...item.links].sort((a, b) => sortByLabel(a, b, "label")),
        })),
    }))
    .sort((a, b) => sortByLabel(a, b, "title"));


  const createPageLink = (link) => {
    const anchor = document.createElement("a");
    anchor.className = "cdw-fw-docs-nav-link";
    anchor.href = link.href;
    anchor.innerHTML = link.label;
    return anchor;
  };

  const pageLinksWrap = document.createElement("div");
  pageLinksWrap.className = "cdw-fw-docs-nav-links";
  sortedPageLinks.forEach((link) => {
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

  sortedNavData.forEach((group) => {
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

  const loginShortcut = document.createElement("a");
  loginShortcut.className = "cdw-fw-docs-nav-link";
  loginShortcut.href = "./login.html";
  loginShortcut.textContent = "Login / Auth";
  nav.appendChild(loginShortcut);
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































































































































