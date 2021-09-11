(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[2474],{2474:(s,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>c});var n=t(7875),l={class:"varlet-site-doc"},e=(0,n.uE)('<h1>Sticky</h1><div class="card"><h3>Intro</h3><p>A sticky layout is implemented by default using <code>position: sticky</code>, Browsers that do not support this property automatically revert to the traditional way of listening for <code>scroll</code> events.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Sticky } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Sticky)\n</code></pre></div><div class="card"><h3>Basic Use</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-sticky</span> <span class="hljs-attr">:offset-top</span>=<span class="hljs-string">&quot;50&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Basic Use<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-sticky</span>&gt;</span>\n</code></pre></div><div class="card"><h3>Local Sticky</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;scroller&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-sticky</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Local Sticky<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">var-sticky</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-class">.scroller</span> {\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;\n  <span class="hljs-attribute">overflow</span>: auto;\n  <span class="hljs-attribute">background</span>: <span class="hljs-number">#2979ff</span>;\n\n  <span class="hljs-selector-class">.block</span> {\n    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">600px</span>;\n    <span class="hljs-attribute">background</span>: <span class="hljs-number">#2979ff</span>;\n    <span class="hljs-attribute">opacity</span>: .<span class="hljs-number">5</span>;\n  }\n}\n</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>offset-top</code></td><td>Sticky offset top</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>z-index</code></td><td>Sticky z-index</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>scroll</code></td><td>Triggered when the scroll container rolls</td><td><code>offsetTop: number</code> <code>isFixed: boolean</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Sticky content</td><td><code>-</code></td></tr></tbody></table></div>',9);const c={render:function(s,a){return(0,n.wg)(),(0,n.j4)("div",l,[e])}}}}]);