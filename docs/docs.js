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
    <a href="#util-texto">Alinhamento de texto</a>
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
    <h3 class="cdw-fw-docs-subtitle">Alinhamento de texto</h3>
    <p class="cdw-fw-docs-subdesc">
      Alinhe texto rapidamente sem criar classes customizadas.
      <span class="cdw-fw-docs-when">Quando usar: t&iacute;tulos, cards e legendas.</span>
    </p>
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
        <div class="cdw-stage cdw-stage--hero cdw-fw-accent-ocean" data-cdw-stage data-autoplay="6200"><div class="cdw-stage-track"><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Lancamento</div><h3 class="cdw-stage__title">Portal CDWeb Intelligence</h3><p class="cdw-stage__text">Camadas visuais elegantes para apresentar novas experiencias digitais.</p><div class="cdw-stage__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Comecar</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Visao geral</button></div></article><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Atualizacao</div><h3 class="cdw-stage__title">Dashboards com clareza</h3><p class="cdw-stage__text">Fluxos controlados, tipografia firme e foco total no conteudo.</p><div class="cdw-stage__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Explorar</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Documentacao</button></div></article></div>
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
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-stage cdw-stage--hero cdw-fw-accent-ocean" data-cdw-stage data-autoplay="6200"&gt;&lt;div class="cdw-stage-track"&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Lancamento&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Portal CDWeb Intelligence&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Camadas visuais elegantes para apresentar novas experiencias digitais.&lt;/p&gt;&lt;div class="cdw-stage__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Comecar&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Visao geral&lt;/button&gt;&lt;/div&gt;&lt;/article&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Atualizacao&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Dashboards com clareza&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Fluxos controlados, tipografia firme e foco total no conteudo.&lt;/p&gt;&lt;div class="cdw-stage__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Explorar&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Documentacao&lt;/button&gt;&lt;/div&gt;&lt;/article&gt;&lt;/div&gt;
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
        <div class="cdw-stage cdw-stage--flow cdw-fw-accent-sky" data-cdw-stage data-autoplay="5400"><div class="cdw-stage-track"><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Fluxo ativo</div><h3 class="cdw-stage__title">Operacoes integradas</h3><p class="cdw-stage__text">Resumo de squads, filas e gargalos em tempo real.</p><div class="cdw-stage__media"></div></article><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Visao geral</div><h3 class="cdw-stage__title">KPIs sincronizados</h3><p class="cdw-stage__text">Indicadores com foco em decisao rapida e narrativa clara.</p><div class="cdw-stage__media"></div></article></div>
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
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-stage cdw-stage--flow cdw-fw-accent-sky" data-cdw-stage data-autoplay="5400"&gt;&lt;div class="cdw-stage-track"&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Fluxo ativo&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Operacoes integradas&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Resumo de squads, filas e gargalos em tempo real.&lt;/p&gt;&lt;div class="cdw-stage__media"&gt;&lt;/div&gt;&lt;/article&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Visao geral&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;KPIs sincronizados&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Indicadores com foco em decisao rapida e narrativa clara.&lt;/p&gt;&lt;div class="cdw-stage__media"&gt;&lt;/div&gt;&lt;/article&gt;&lt;/div&gt;
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
        <div class="cdw-stage cdw-stage--fade cdw-fw-accent-graphite" data-cdw-stage data-autoplay="6000"><div class="cdw-stage-track"><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Foco</div><h3 class="cdw-stage__title">Apresentacao silenciosa</h3><p class="cdw-stage__text">Transicoes suaves com maxima legibilidade.</p></article><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Objetivo</div><h3 class="cdw-stage__title">Mensagem central</h3><p class="cdw-stage__text">Sem elementos chamativos fora do necessario.</p></article></div>
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
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-stage cdw-stage--fade cdw-fw-accent-graphite" data-cdw-stage data-autoplay="6000"&gt;&lt;div class="cdw-stage-track"&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Foco&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Apresentacao silenciosa&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Transicoes suaves com maxima legibilidade.&lt;/p&gt;&lt;/article&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Objetivo&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Mensagem central&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Sem elementos chamativos fora do necessario.&lt;/p&gt;&lt;/article&gt;&lt;/div&gt;
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
        <div class="cdw-stage cdw-stage--timeline cdw-fw-accent-amber" data-cdw-stage data-autoplay="7000"><div class="cdw-stage-track"><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Fase 1</div><h3 class="cdw-stage__title">Diagnostico inicial</h3><p class="cdw-stage__text">Mapeamento de riscos e pontos criticos.</p></article><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Fase 2</div><h3 class="cdw-stage__title">Planejamento tatico</h3><p class="cdw-stage__text">Roteiro com metas, indicadores e prazos.</p></article><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Fase 3</div><h3 class="cdw-stage__title">Entrega monitorada</h3><p class="cdw-stage__text">Execucao com checkpoints e validacao continua.</p></article></div><div class="cdw-stage-timeline"><button class="cdw-stage-timeline__step" type="button" data-cdw-stage-go="0" aria-current="true"><span class="cdw-stage-timeline__dot"></span></button><button class="cdw-stage-timeline__step" type="button" data-cdw-stage-go="1"><span class="cdw-stage-timeline__dot"></span></button><button class="cdw-stage-timeline__step" type="button" data-cdw-stage-go="2"><span class="cdw-stage-timeline__dot"></span></button></div></div>
      </div>
      <div class="cdw-fw-docs-codeblock">
        <div class="cdw-fw-docs-code-head">
          <div class="cdw-fw-docs-code-title">HTML</div>
          <button class="cdw-fw-docs-copy" type="button" data-cdw-fw-docs-copy>Copiar</button>
        </div>
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-stage cdw-stage--timeline cdw-fw-accent-amber" data-cdw-stage data-autoplay="7000"&gt;&lt;div class="cdw-stage-track"&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Fase 1&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Diagnostico inicial&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Mapeamento de riscos e pontos criticos.&lt;/p&gt;&lt;/article&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Fase 2&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Planejamento tatico&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Roteiro com metas, indicadores e prazos.&lt;/p&gt;&lt;/article&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Fase 3&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Entrega monitorada&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Execucao com checkpoints e validacao continua.&lt;/p&gt;&lt;/article&gt;&lt;/div&gt;&lt;div class="cdw-stage-timeline"&gt;&lt;button class="cdw-stage-timeline__step" type="button" data-cdw-stage-go="0" aria-current="true"&gt;&lt;span class="cdw-stage-timeline__dot"&gt;&lt;/span&gt;&lt;/button&gt;&lt;button class="cdw-stage-timeline__step" type="button" data-cdw-stage-go="1"&gt;&lt;span class="cdw-stage-timeline__dot"&gt;&lt;/span&gt;&lt;/button&gt;&lt;button class="cdw-stage-timeline__step" type="button" data-cdw-stage-go="2"&gt;&lt;span class="cdw-stage-timeline__dot"&gt;&lt;/span&gt;&lt;/button&gt;&lt;/div&gt;&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="cdw-fw-docs-example">
      <div class="cdw-fw-docs-example-head">
        <div class="cdw-fw-docs-example-title">Stage Stack</div>
        <div class="cdw-fw-docs-badge">Profundidade</div>
      </div>
      <div class="cdw-fw-docs-preview">
        <div class="cdw-stage cdw-stage--stack cdw-fw-accent-rose" data-cdw-stage data-autoplay="5600"><div class="cdw-stage-track"><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Camada 01</div><h3 class="cdw-stage__title">Visao estrategica</h3><p class="cdw-stage__text">Camadas sobrepostas para narrativa com energia.</p><div class="cdw-stage__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Ativar</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Detalhar</button></div></article><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Camada 02</div><h3 class="cdw-stage__title">Interface expandida</h3><p class="cdw-stage__text">Paineis com leitura clara e foco no destaque.</p><div class="cdw-stage__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Ver dados</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Relatorio</button></div></article></div>
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
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-stage cdw-stage--stack cdw-fw-accent-rose" data-cdw-stage data-autoplay="5600"&gt;&lt;div class="cdw-stage-track"&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Camada 01&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Visao estrategica&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Camadas sobrepostas para narrativa com energia.&lt;/p&gt;&lt;div class="cdw-stage__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Ativar&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Detalhar&lt;/button&gt;&lt;/div&gt;&lt;/article&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Camada 02&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Interface expandida&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Paineis com leitura clara e foco no destaque.&lt;/p&gt;&lt;div class="cdw-stage__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Ver dados&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Relatorio&lt;/button&gt;&lt;/div&gt;&lt;/article&gt;&lt;/div&gt;
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
        <div class="cdw-stage cdw-stage--docked cdw-fw-accent-graphite-dark" data-cdw-stage data-autoplay="6600"><div class="cdw-stage-track"><article class="cdw-stage-slide"><div class="cdw-stage__media"></div><div class="cdw-stage__content"><div class="cdw-stage__eyebrow">Institucional</div><h3 class="cdw-stage__title">Historico da plataforma</h3><p class="cdw-stage__text">Narrativa consistente com foco em confianca e solidez.</p><div class="cdw-stage__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Detalhes</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Equipe</button></div></div></article><article class="cdw-stage-slide"><div class="cdw-stage__media"></div><div class="cdw-stage__content"><div class="cdw-stage__eyebrow">Destaque</div><h3 class="cdw-stage__title">Portfolio premium</h3><p class="cdw-stage__text">Descricao objetiva para apresentacoes de alto nivel.</p><div class="cdw-stage__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Ver cases</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Contato</button></div></div></article></div>
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
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-stage cdw-stage--docked cdw-fw-accent-graphite-dark" data-cdw-stage data-autoplay="6600"&gt;&lt;div class="cdw-stage-track"&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__media"&gt;&lt;/div&gt;&lt;div class="cdw-stage__content"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Institucional&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Historico da plataforma&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Narrativa consistente com foco em confianca e solidez.&lt;/p&gt;&lt;div class="cdw-stage__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Detalhes&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Equipe&lt;/button&gt;&lt;/div&gt;&lt;/div&gt;&lt;/article&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__media"&gt;&lt;/div&gt;&lt;div class="cdw-stage__content"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Destaque&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Portfolio premium&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Descricao objetiva para apresentacoes de alto nivel.&lt;/p&gt;&lt;div class="cdw-stage__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Ver cases&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Contato&lt;/button&gt;&lt;/div&gt;&lt;/div&gt;&lt;/article&gt;&lt;/div&gt;
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
        <div class="cdw-stage cdw-stage--hero cdw-fw-accent-slate" data-cdw-stage data-autoplay="6800"><div class="cdw-stage-track"><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">CDWeb</div><h3 class="cdw-stage__title">Tecnologia com identidade</h3><p class="cdw-stage__text">Camadas visuais prontas para produtos institucionais.</p><div class="cdw-stage__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Conhecer</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Contato</button></div></article><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Portifolio</div><h3 class="cdw-stage__title">Experiencias confiaveis</h3><p class="cdw-stage__text">Narrativas alinhadas com tons monocromaticos.</p><div class="cdw-stage__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Ver cases</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Equipe</button></div></article></div>
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
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-stage cdw-stage--hero cdw-fw-accent-slate" data-cdw-stage data-autoplay="6800"&gt;&lt;div class="cdw-stage-track"&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;CDWeb&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Tecnologia com identidade&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Camadas visuais prontas para produtos institucionais.&lt;/p&gt;&lt;div class="cdw-stage__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Conhecer&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Contato&lt;/button&gt;&lt;/div&gt;&lt;/article&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Portifolio&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Experiencias confiaveis&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Narrativas alinhadas com tons monocromaticos.&lt;/p&gt;&lt;div class="cdw-stage__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Ver cases&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Equipe&lt;/button&gt;&lt;/div&gt;&lt;/article&gt;&lt;/div&gt;
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
        <div class="cdw-stage cdw-stage--flow cdw-fw-accent-ember" data-cdw-stage data-autoplay="5200"><div class="cdw-stage-track"><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Execucao</div><h3 class="cdw-stage__title">Fila prioritaria</h3><p class="cdw-stage__text">Operacoes com gargalos controlados.</p><div class="cdw-stage__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Resolver</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Abrir</button></div></article><article class="cdw-stage-slide"><div class="cdw-stage__eyebrow">Saude</div><h3 class="cdw-stage__title">Servicos estaveis</h3><p class="cdw-stage__text">Alertas reduzidos com tempo controlado.</p><div class="cdw-stage__actions"><button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded">Ver logs</button><button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded">Status</button></div></article></div>
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
        <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-stage cdw-stage--flow cdw-fw-accent-ember" data-cdw-stage data-autoplay="5200"&gt;&lt;div class="cdw-stage-track"&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Execucao&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Fila prioritaria&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Operacoes com gargalos controlados.&lt;/p&gt;&lt;div class="cdw-stage__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Resolver&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Abrir&lt;/button&gt;&lt;/div&gt;&lt;/article&gt;&lt;article class="cdw-stage-slide"&gt;&lt;div class="cdw-stage__eyebrow"&gt;Saude&lt;/div&gt;&lt;h3 class="cdw-stage__title"&gt;Servicos estaveis&lt;/h3&gt;&lt;p class="cdw-stage__text"&gt;Alertas reduzidos com tempo controlado.&lt;/p&gt;&lt;div class="cdw-stage__actions"&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--solid cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Ver logs&lt;/button&gt;&lt;button class="cdw-fw-btn cdw-fw-btn--outline cdw-fw-btn--sm cdw-fw-btn--rounded"&gt;Status&lt;/button&gt;&lt;/div&gt;&lt;/article&gt;&lt;/div&gt;
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
    <div class="cdw-fw-docs-preview"><div class="cdw-navbar cdw-navbar--iconic cdw-navbar--soft cdw-fw-accent-violet" data-cdw-navbar>
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
      <pre class="cdw-fw-docs-code"><code data-cdw-fw-docs-code>&lt;div class="cdw-navbar cdw-navbar--iconic cdw-navbar--soft cdw-fw-accent-violet" data-cdw-navbar&gt;
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

  const sectionOrder = [
    "gettingStarted",
    "layout",
    "utilities",
    "colors",
    "buttons",
    "accordion",
    "alert",
    "badges",
    "cards",
    "stage",
    "navbars",
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

  const navData = [
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
        {
          title: "Cores",
          target: "#cores-paleta",
          links: [
            { label: "Paleta", href: "#cores-paleta" },
            { label: "Uso recomendado", href: "#cores-uso" },
            { label: "Boas pr&aacute;ticas", href: "#cores-uso" },
          ],
        },
      ],
    },
    {
      title: "COMPONENTES",
      items: [
        {
          title: "Bot&otilde;es",
          target: "#botoes-estrutura",
          links: [
            { label: "Tipos", href: "#botoes-estrutura" },
            { label: "Estados", href: "#botoes-estados" },
            { label: "&Iacute;cones", href: "#botoes-formas" },
          ],
        },
        {
          title: "Accordions",
          target: "#accordion-introducao",
          links: [
            { label: "Uso", href: "#accordion-introducao" },
            { label: "Varia&ccedil;&otilde;es", href: "#accordion-variantes" },
            { label: "Exemplos", href: "#accordion-basico" },
          ],
        },
        {
          title: "Alerts",
          target: "#alert-intro",
          links: [
            { label: "Tipos", href: "#alert-variantes" },
            { label: "Contextos", href: "#alert-intro" },
            { label: "Exemplos", href: "#alert-modelos" },
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
    {
      title: "UTILIT&Aacute;RIOS",
      items: [
        {
          title: "Helpers CSS",
          target: "#utilitarios",
          links: [{ label: "Vis&atilde;o geral", href: "#utilitarios" }],
        },
        {
          title: "Classes utilit&aacute;rias",
          target: "#util-espacamento",
          links: [
            { label: "Espa&ccedil;amento", href: "#util-espacamento" },
            { label: "Display", href: "#util-display" },
            { label: "Flex", href: "#util-flex" },
          ],
        },
      ],
    },
  ];

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

