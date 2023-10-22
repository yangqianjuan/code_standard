<template><div><h1 id="encode-fe-markdownlint-config" tabindex="-1"><a class="header-anchor" href="#encode-fe-markdownlint-config" aria-hidden="true">#</a> encode-fe-markdownlint-config</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>印客学院 文档 规范</p>
</div>
<p>支持配套的 <a href="https://www.npmjs.com/package/markdownlint#optionsconfig" target="_blank" rel="noopener noreferrer">markdownlint 可共享配置<ExternalLinkIcon/></a>。</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<p>需要先行安装 <a href="https://www.npmjs.com/package/markdownlint" target="_blank" rel="noopener noreferrer">markdownlint<ExternalLinkIcon/></a>：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> encode-fe-markdownlint-config markdownlint --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<p>在 <code v-pre>.markdownlint.json</code> 中继承本包:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token string">"encode-fe-markdownlint-config"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


