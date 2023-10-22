<template><div><h1 id="encode-fe-eslint-config" tabindex="-1"><a class="header-anchor" href="#encode-fe-eslint-config" aria-hidden="true">#</a> encode-fe-eslint-config</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>印客学院 JavaScript TypeScript Node 规范</p>
</div>
<p>提供了多套配置文件以支持 <code v-pre>JavaScript</code>、<code v-pre>TypeScript</code>、<code v-pre>React</code>、<code v-pre>Vue</code>、<code v-pre>Node.js</code> 等多种项目类型。</p>
<h2 id="javascript-项目-encode-fe-eslint-config" tabindex="-1"><a class="header-anchor" href="#javascript-项目-encode-fe-eslint-config" aria-hidden="true">#</a> JavaScript 项目 - encode-fe-eslint-config</h2>
<p>针对未使用 <code v-pre>React</code> 或 <code v-pre>Vue</code> 的原生 <code v-pre>JavaScript</code> 项目，使用 <code v-pre>ESLint</code> 原生规则和 <a href="https://www.npmjs.com/package/eslint-plugin-import" target="_blank" rel="noopener noreferrer">eslint-plugin-import<ExternalLinkIcon/></a> 规则，使用 <a href="https://www.npmjs.com/package/@babel/eslint-parser" target="_blank" rel="noopener noreferrer">@babel/eslint-parser<ExternalLinkIcon/></a> 作为 <code v-pre>parser</code>，是本包的默认配置。</p>
<h3 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖" aria-hidden="true">#</a> 依赖</h3>
<ul>
<li><a href="https://www.npmjs.com/package/@babel/core" target="_blank" rel="noopener noreferrer">@babel/core<ExternalLinkIcon/></a>@^7.16.0</li>
<li><a href="https://www.npmjs.com/package/@babel/eslint-parser" target="_blank" rel="noopener noreferrer">@babel/eslint-parser<ExternalLinkIcon/></a>@^7.16.3</li>
<li><a href="https://www.npmjs.com/package/eslint-plugin-import" target="_blank" rel="noopener noreferrer">eslint-plugin-import<ExternalLinkIcon/></a>@^2.25.3</li>
</ul>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> encode-fe-eslint-config @babel/core @babel/eslint-parser eslint-plugin-import
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"encode-fe-eslint-config"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javascript-react-项目-encode-fe-eslint-config-react" tabindex="-1"><a class="header-anchor" href="#javascript-react-项目-encode-fe-eslint-config-react" aria-hidden="true">#</a> JavaScript + React 项目 - encode-fe-eslint-config/react</h2>
<p>针对 JS React 项目，继承了默认配置，并启用了 <a href="https://www.npmjs.com/package/eslint-plugin-react" target="_blank" rel="noopener noreferrer">eslint-plugin-react<ExternalLinkIcon/></a> 和 <a href="https://www.npmjs.com/package/eslint-plugin-react-hooks" target="_blank" rel="noopener noreferrer">eslint-plugin-react-hooks<ExternalLinkIcon/></a> 的规则。</p>
<h3 id="依赖-1" tabindex="-1"><a class="header-anchor" href="#依赖-1" aria-hidden="true">#</a> 依赖</h3>
<ul>
<li><a href="https://www.npmjs.com/package/@babel/core" target="_blank" rel="noopener noreferrer">@babel/core<ExternalLinkIcon/></a>@^7.16.0</li>
<li><a href="https://www.npmjs.com/package/@babel/eslint-parser" target="_blank" rel="noopener noreferrer">@babel/eslint-parser<ExternalLinkIcon/></a>@^7.16.3</li>
<li><a href="https://www.npmjs.com/package/eslint-plugin-import" target="_blank" rel="noopener noreferrer">eslint-plugin-import<ExternalLinkIcon/></a>@^2.25.3</li>
<li><a href="https://www.npmjs.com/package/eslint-plugin-react" target="_blank" rel="noopener noreferrer">eslint-plugin-react<ExternalLinkIcon/></a>@^7.17.0</li>
<li><a href="https://www.npmjs.com/package/" target="_blank" rel="noopener noreferrer">eslint-plugin-react-hooks<ExternalLinkIcon/></a>@^4.2.0</li>
<li><a href="https://www.npmjs.com/package/eslint-plugin-jsx-a11y" target="_blank" rel="noopener noreferrer">eslint-plugin-jsx-a11y<ExternalLinkIcon/></a>@^6.3.1（可选）</li>
</ul>
<h3 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> encode-fe-eslint-config @babel/core @babel/eslint-parser eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置-1" tabindex="-1"><a class="header-anchor" href="#配置-1" aria-hidden="true">#</a> 配置</h3>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"encode-fe-eslint-config/react"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要无障碍能力：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> eslint-plugin-jsx-a11y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"encode-fe-eslint-config/react"</span><span class="token punctuation">,</span> <span class="token string">"encode-fe-eslint-config/jsx-a11y"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javascript-vue-项目-encode-fe-eslint-config-vue" tabindex="-1"><a class="header-anchor" href="#javascript-vue-项目-encode-fe-eslint-config-vue" aria-hidden="true">#</a> JavaScript + Vue 项目 - encode-fe-eslint-config/vue</h2>
<p>针对 <code v-pre>JS Vue</code> 的项目，继承了默认配置，并启用了 <a href="https://www.npmjs.com/package/eslint-plugin-vue" target="_blank" rel="noopener noreferrer">eslint-plugin-vue<ExternalLinkIcon/></a> 插件的规则，使用 <a href="https://www.npmjs.com/package/vue-eslint-parser" target="_blank" rel="noopener noreferrer">vue-eslint-parser<ExternalLinkIcon/></a> 作为 parser。</p>
<h3 id="依赖-2" tabindex="-1"><a class="header-anchor" href="#依赖-2" aria-hidden="true">#</a> 依赖</h3>
<ul>
<li><a href="https://www.npmjs.com/package/@babel/core" target="_blank" rel="noopener noreferrer">@babel/core<ExternalLinkIcon/></a>@^7.16.0</li>
<li><a href="https://www.npmjs.com/package/@babel/eslint-parser" target="_blank" rel="noopener noreferrer">@babel/eslint-parser<ExternalLinkIcon/></a>@^7.16.3</li>
<li><a href="https://www.npmjs.com/package/eslint-plugin-import" target="_blank" rel="noopener noreferrer">eslint-plugin-import<ExternalLinkIcon/></a>@^2.25.3</li>
<li><a href="https://www.npmjs.com/package/vue-eslint-parser" target="_blank" rel="noopener noreferrer">vue-eslint-parser<ExternalLinkIcon/></a>@^7.0.0</li>
<li><a href="https://www.npmjs.com/package/eslint-plugin-vue" target="_blank" rel="noopener noreferrer">eslint-plugin-vue<ExternalLinkIcon/></a>@^7.3.0</li>
</ul>
<h3 id="安装-2" tabindex="-1"><a class="header-anchor" href="#安装-2" aria-hidden="true">#</a> 安装</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> encode-fe-eslint-config @babel/core @babel/eslint-parser eslint-plugin-import vue-eslint-parser eslint-plugin-vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置-2" tabindex="-1"><a class="header-anchor" href="#配置-2" aria-hidden="true">#</a> 配置</h3>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"encode-fe-eslint-config/vue"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javascript-node-js-项目-encode-fe-eslint-config-node" tabindex="-1"><a class="header-anchor" href="#javascript-node-js-项目-encode-fe-eslint-config-node" aria-hidden="true">#</a> JavaScript (Node.js) 项目 - encode-fe-eslint-config/node</h2>
<p>针对 Node.js 项目，继承了默认配置和 <a href="https://github.com/eggjs/eslint-config-egg/blob/master/lib/rules/node.js" target="_blank" rel="noopener noreferrer">eslint-config-egg 的规则<ExternalLinkIcon/></a>，规则由 ESLint 原生规则和 <a href="https://github.com/mysticatea/eslint-plugin-node" target="_blank" rel="noopener noreferrer">eslint-plugin-node<ExternalLinkIcon/></a> 提供。</p>
<h3 id="依赖-3" tabindex="-1"><a class="header-anchor" href="#依赖-3" aria-hidden="true">#</a> 依赖</h3>
<ul>
<li><a href="https://www.npmjs.com/package/@babel/core" target="_blank" rel="noopener noreferrer">@babel/core<ExternalLinkIcon/></a>@^7.16.0</li>
<li><a href="https://www.npmjs.com/package/@babel/eslint-parser" target="_blank" rel="noopener noreferrer">@babel/eslint-parser<ExternalLinkIcon/></a>@^7.16.3</li>
<li><a href="https://www.npmjs.com/package/eslint-plugin-import" target="_blank" rel="noopener noreferrer">eslint-plugin-import<ExternalLinkIcon/></a>@^2.25.3</li>
<li><a href="https://www.npmjs.com/package/eslint-config-egg" target="_blank" rel="noopener noreferrer">eslint-config-egg<ExternalLinkIcon/></a>@^10.0.0</li>
</ul>
<h3 id="安装-3" tabindex="-1"><a class="header-anchor" href="#安装-3" aria-hidden="true">#</a> 安装</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> encode-fe-eslint-config @babel/core @babel/eslint-parser eslint-plugin-import eslint-config-egg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置-3" tabindex="-1"><a class="header-anchor" href="#配置-3" aria-hidden="true">#</a> 配置</h3>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"encode-fe-eslint-config/node"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typescript-项目-encode-fe-eslint-config-typescript" tabindex="-1"><a class="header-anchor" href="#typescript-项目-encode-fe-eslint-config-typescript" aria-hidden="true">#</a> TypeScript 项目 - encode-fe-eslint-config/typescript</h2>
<p>针对未使用 <code v-pre>React</code> 或 <code v-pre>Vue</code> 的 <code v-pre>TypeScript</code> 项目，继承了默认配置，并启用了 <a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin" target="_blank" rel="noopener noreferrer">@typescript-eslint/eslint-plugin<ExternalLinkIcon/></a> 插件的规则，使用 <a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser" target="_blank" rel="noopener noreferrer">@typescript-eslint/parser<ExternalLinkIcon/></a> 作为 parser。</p>
<h3 id="依赖-4" tabindex="-1"><a class="header-anchor" href="#依赖-4" aria-hidden="true">#</a> 依赖</h3>
<ul>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser" target="_blank" rel="noopener noreferrer">@typescript-eslint/parser<ExternalLinkIcon/></a>@^5.0.0</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin" target="_blank" rel="noopener noreferrer">@typescript-eslint/eslint-plugin<ExternalLinkIcon/></a>@^5.0.0</li>
<li><a href="https://www.npmjs.com/package/eslint-plugin-import" target="_blank" rel="noopener noreferrer">eslint-plugin-import<ExternalLinkIcon/></a>@^2.25.3</li>
<li><a href="https://www.npmjs.com/package/eslint-import-resolver-typescript" target="_blank" rel="noopener noreferrer">eslint-import-resolver-typescript<ExternalLinkIcon/></a>@2</li>
</ul>
<h3 id="安装-4" tabindex="-1"><a class="header-anchor" href="#安装-4" aria-hidden="true">#</a> 安装</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> encode-fe-eslint-config @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置-4" tabindex="-1"><a class="header-anchor" href="#配置-4" aria-hidden="true">#</a> 配置</h3>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"encode-fe-eslint-config/typescript"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需保证项目已安装 <code v-pre>typescript</code> 依赖，另外如果项目的 <code v-pre>TS</code> 配置文件不是 <code v-pre>./tsconfig.json</code>，则需要设置 <code v-pre>.eslintrc</code> 中的 <a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject" target="_blank" rel="noopener noreferrer">parserOptions.project<ExternalLinkIcon/></a> 字段 ，例如：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token string">"encode-fe-eslint-config/typescript"</span><span class="token punctuation">,</span>
  <span class="token property">"parserOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"project"</span><span class="token operator">:</span> <span class="token string">"./tsconfig.eslint.json"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typescript-react-项目-encode-fe-eslint-config-typescript-react" tabindex="-1"><a class="header-anchor" href="#typescript-react-项目-encode-fe-eslint-config-typescript-react" aria-hidden="true">#</a> TypeScript + React 项目 - encode-fe-eslint-config/typescript/react</h2>
<p>针对 <code v-pre>TS React</code> 项目，继承了 <code v-pre>JS React</code> 的配置，并启用了 <a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin" target="_blank" rel="noopener noreferrer">@typescript-eslint/eslint-plugin<ExternalLinkIcon/></a> 插件的规则，使用 <a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser" target="_blank" rel="noopener noreferrer">@typescript-eslint/parser<ExternalLinkIcon/></a> 作为 parser。</p>
<h3 id="依赖-5" tabindex="-1"><a class="header-anchor" href="#依赖-5" aria-hidden="true">#</a> 依赖</h3>
<ul>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser" target="_blank" rel="noopener noreferrer">@typescript-eslint/parser<ExternalLinkIcon/></a>@^5.0.0</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin" target="_blank" rel="noopener noreferrer">@typescript-eslint/eslint-plugin<ExternalLinkIcon/></a>@^5.0.0</li>
<li><a href="https://www.npmjs.com/package/eslint-plugin-import" target="_blank" rel="noopener noreferrer">eslint-plugin-import<ExternalLinkIcon/></a>@^2.25.3</li>
<li><a href="https://www.npmjs.com/package/eslint-import-resolver-typescript" target="_blank" rel="noopener noreferrer">eslint-import-resolver-typescript<ExternalLinkIcon/></a>@2</li>
<li><a href="https://www.npmjs.com/package/eslint-plugin-react" target="_blank" rel="noopener noreferrer">eslint-plugin-react<ExternalLinkIcon/></a>@^7.17.0</li>
<li><a href="https://www.npmjs.com/package/eslint-plugin-react-hooks" target="_blank" rel="noopener noreferrer">eslint-plugin-react-hooks<ExternalLinkIcon/></a>@^4.2.0</li>
<li><a href="https://www.npmjs.com/package/eslint-plugin-jsx-a11y" target="_blank" rel="noopener noreferrer">eslint-plugin-jsx-a11y<ExternalLinkIcon/></a>@^6.3.1（可选）</li>
</ul>
<h3 id="安装-5" tabindex="-1"><a class="header-anchor" href="#安装-5" aria-hidden="true">#</a> 安装</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm i -D encode-fe-eslint-config @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript eslint-plugin-react eslint-plugin-react-hooks
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置-5" tabindex="-1"><a class="header-anchor" href="#配置-5" aria-hidden="true">#</a> 配置</h3>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"encode-fe-eslint-config/typescript/react"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要无障碍能力：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span>  eslint-plugin-jsx-a11y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"encode-fe-eslint-config/typescript/react"</span><span class="token punctuation">,</span> <span class="token string">"encode-fe-eslint-config/jsx-a11y"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typescript-vue-项目-encode-fe-eslint-config-typescript-vue" tabindex="-1"><a class="header-anchor" href="#typescript-vue-项目-encode-fe-eslint-config-typescript-vue" aria-hidden="true">#</a> TypeScript + Vue 项目 - encode-fe-eslint-config/typescript/vue</h2>
<p>针对 <code v-pre>TS Vue</code> 项目，继承了 <code v-pre>JS Vue</code> 的配置，并启用了 <a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin" target="_blank" rel="noopener noreferrer">@typescript-eslint/eslint-plugin<ExternalLinkIcon/></a> 插件的规则，使用 <a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser" target="_blank" rel="noopener noreferrer">@typescript-eslint/parser<ExternalLinkIcon/></a> 作为 <code v-pre>parser</code>。</p>
<h3 id="依赖-6" tabindex="-1"><a class="header-anchor" href="#依赖-6" aria-hidden="true">#</a> 依赖</h3>
<ul>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser" target="_blank" rel="noopener noreferrer">@typescript-eslint/parser<ExternalLinkIcon/></a>@^5.0.0</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin" target="_blank" rel="noopener noreferrer">@typescript-eslint/eslint-plugin<ExternalLinkIcon/></a>@^5.0.0</li>
<li><a href="https://www.npmjs.com/package/eslint-plugin-import" target="_blank" rel="noopener noreferrer">eslint-plugin-import<ExternalLinkIcon/></a>@^2.25.3</li>
<li><a href="https://www.npmjs.com/package/eslint-import-resolver-typescript" target="_blank" rel="noopener noreferrer">eslint-import-resolver-typescript<ExternalLinkIcon/></a>@2</li>
<li><a href="https://www.npmjs.com/package/vue-eslint-parser" target="_blank" rel="noopener noreferrer">vue-eslint-parser<ExternalLinkIcon/></a>@^7.0.0</li>
<li><a href="https://www.npmjs.com/package/eslint-plugin-vue" target="_blank" rel="noopener noreferrer">eslint-plugin-vue<ExternalLinkIcon/></a>@^7.3.0</li>
</ul>
<h3 id="安装-6" tabindex="-1"><a class="header-anchor" href="#安装-6" aria-hidden="true">#</a> 安装</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> encode-fe-eslint-config @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript vue-eslint-parser eslint-plugin-vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置-6" tabindex="-1"><a class="header-anchor" href="#配置-6" aria-hidden="true">#</a> 配置</h3>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"encode-fe-eslint-config/typescript/vue"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typescript-node-js-项目-encode-fe-eslint-config-typescript-node" tabindex="-1"><a class="header-anchor" href="#typescript-node-js-项目-encode-fe-eslint-config-typescript-node" aria-hidden="true">#</a> TypeScript (Node.js) 项目 - encode-fe-eslint-config/typescript/node</h2>
<p>针对未使用 <code v-pre>React</code> 和 <code v-pre>Vue</code> 的 <code v-pre>TypeScript(Node)</code> 项目，继承了 <code v-pre>JS Node.js</code> 配置，并启用了 <a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin" target="_blank" rel="noopener noreferrer">@typescript-eslint/eslint-plugin<ExternalLinkIcon/></a> 插件的规则，使用 <a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser" target="_blank" rel="noopener noreferrer">@typescript-eslint/parser<ExternalLinkIcon/></a> 作为 parser。</p>
<h3 id="依赖-7" tabindex="-1"><a class="header-anchor" href="#依赖-7" aria-hidden="true">#</a> 依赖</h3>
<ul>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser" target="_blank" rel="noopener noreferrer">@typescript-eslint/parser<ExternalLinkIcon/></a>@^5.0.0</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin" target="_blank" rel="noopener noreferrer">@typescript-eslint/eslint-plugin<ExternalLinkIcon/></a>@^5.0.0</li>
<li><a href="https://www.npmjs.com/package/eslint-plugin-import" target="_blank" rel="noopener noreferrer">eslint-plugin-import<ExternalLinkIcon/></a>@^2.25.3</li>
<li><a href="https://www.npmjs.com/package/eslint-import-resolver-typescript" target="_blank" rel="noopener noreferrer">eslint-import-resolver-typescript<ExternalLinkIcon/></a>@2</li>
<li><a href="https://www.npmjs.com/package/eslint-config-egg" target="_blank" rel="noopener noreferrer">eslint-config-egg<ExternalLinkIcon/></a>@^10.0.0</li>
</ul>
<h3 id="安装-7" tabindex="-1"><a class="header-anchor" href="#安装-7" aria-hidden="true">#</a> 安装</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm i -D encode-fe-eslint-config @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript eslint-config-egg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置-7" tabindex="-1"><a class="header-anchor" href="#配置-7" aria-hidden="true">#</a> 配置</h3>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"encode-fe-eslint-config/typescript/node"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配合-prettier-使用" tabindex="-1"><a class="header-anchor" href="#配合-prettier-使用" aria-hidden="true">#</a> 配合 Prettier 使用</h2>
<p>如果你的项目使用 <a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">Prettier<ExternalLinkIcon/></a> 进行代码格式化，本包的一些规则可能会跟 Prettier 格式化结果有冲突，<a href="https://github.com/typescript-eslint/typescript-eslint/issues/372" target="_blank" rel="noopener noreferrer">例如这条规则<ExternalLinkIcon/></a>。为了避免冲突，你需要手动安装 <a href="https://github.com/prettier/eslint-config-prettier" target="_blank" rel="noopener noreferrer">eslint-config-prettier<ExternalLinkIcon/></a> 和 <a href="https://github.com/prettier/eslint-plugin-prettier" target="_blank" rel="noopener noreferrer">eslint-plugin-prettier<ExternalLinkIcon/></a>：</p>
<h3 id="安装-8" tabindex="-1"><a class="header-anchor" href="#安装-8" aria-hidden="true">#</a> 安装</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev eslint-config-prettier eslint-plugin-prettier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置-8" tabindex="-1"><a class="header-anchor" href="#配置-8" aria-hidden="true">#</a> 配置</h3>
<p>并修改 <code v-pre>.eslintrc</code> 的 <code v-pre>extends</code> 配置，增加 <code v-pre>prettier</code>，如下（以 TS React 项目为例）：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"encode-fe-eslint-config/typescript/react"</span><span class="token punctuation">,</span> <span class="token string">"prettier"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>了解更多请阅读 <a href="https://prettier.io/docs/en/integrating-with-linters.html" target="_blank" rel="noopener noreferrer">Prettier - Integrating with Linters<ExternalLinkIcon/></a>。</p>
<h2 id="将风格问题降级" tabindex="-1"><a class="header-anchor" href="#将风格问题降级" aria-hidden="true">#</a> 将风格问题降级</h2>
<p>为了保证一致的编码风格，本包中大量风格相关的规则被设为了 <code v-pre>error</code> 级别，以引起开发者的足够重视。如果你觉得风格问题不足以是 <code v-pre>error</code> 级别（有些用户根据 ESLint error 进行流程卡点），本包还提供了一套名为 'essential' 的配置文件，这套配置将所有风格问题降级为 <code v-pre>warn</code> 级别，仅将必要问题报告为 <code v-pre>error</code>，引用方式为在相应配置的 <code v-pre>encode-fe-eslint-config</code> 后面加上 <code v-pre>/essential</code>，如对 <code v-pre>JS React</code> 项目为 <code v-pre>encode-fe-eslint-config/essential/react</code>、对 <code v-pre>TS Vue</code> 项目为 <code v-pre>encode-fe-eslint-config/essential/typescript/vue</code></p>
<h2 id="了解更多" tabindex="-1"><a class="header-anchor" href="#了解更多" aria-hidden="true">#</a> 了解更多</h2>
<ul>
<li>如果你对 ESLint 还不熟悉，可以阅读官网的 <a href="https://eslint.org/docs/user-guide/getting-started" target="_blank" rel="noopener noreferrer">Getting Started<ExternalLinkIcon/></a> 快速入门。</li>
<li>了解如何为 IDE 配置 ESLint，可以参考官网的 <a href="http://eslint.org/docs/user-guide/integrations" target="_blank" rel="noopener noreferrer">Integrations<ExternalLinkIcon/></a>。</li>
<li>了解如何在继承本包的基础上对项目 ESLint 进行个性化配置，可参考官网的 <a href="https://eslint.org/docs/user-guide/configuring" target="_blank" rel="noopener noreferrer">Configuring ESLint<ExternalLinkIcon/></a>。下面简介下 ESLint 配置中的几个常用字段：
<ul>
<li><code v-pre>extends</code>: 继承一组规则集。<code v-pre>&quot;extends&quot;: &quot;encode-fe-eslint-config&quot;,</code> 表示继承本包定义的规则配置。</li>
<li><code v-pre>rules</code>: 配置规则，这里定义的规则会覆盖 <code v-pre>extends</code> 的规则。如果觉得本包开启的某条规则过于严格，你可以暂时在这里将其关闭。</li>
<li><code v-pre>parser</code>: 设置 ESLint 的解析器。ESLint 使用 espree 作为默认的解析器，可以通过这个参数指定其他的解析器。比如指定为 <a href="https://npmjs.com/package/@babel/eslint-parser" target="_blank" rel="noopener noreferrer">@babel/eslint-parser<ExternalLinkIcon/></a>，以解析 Babel 支持但 ESLint 默认解析器不支持的语法（本包不同配置文件使用的解析器可在简介表格中的「依赖 parser」一列查看）。</li>
<li><code v-pre>globals</code>: 指定代码中可能用到的全局变量，以免全局变量被 <a href="http://eslint.org/docs/rules/no-undef" target="_blank" rel="noopener noreferrer">no-undef<ExternalLinkIcon/></a> 规则报错。</li>
<li><code v-pre>env</code>: 指定代码的运行环境，每个环境预定义了一组对应的全局变量，本包已开启的环境有 browser、node、jquery、es6 及几个测试框架的环境。</li>
</ul>
</li>
<li>了解常用的 ESLint 命令，如 <code v-pre>--fix</code>、<code v-pre>--ext</code>，可参考官网的 <a href="http://eslint.org/docs/user-guide/command-line-interface" target="_blank" rel="noopener noreferrer">Command Line Interface<ExternalLinkIcon/></a>。</li>
</ul>
</div></template>


