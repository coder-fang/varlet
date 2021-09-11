(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[6998],{5418:(s,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>l});var a=e(7875),d={class:"varlet-site-doc"},n=(0,a.uE)('<h1>PullRefresh</h1><div class="card"><h3>Intro</h3><p>Provides a drop-down refresh interaction.</p></div><div class="card"><h3>install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { PullRefresh } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(PullRefresh)\n</code></pre></div><div class="card"><h3>Basic Usage</h3><p>The refresh event will be Emitted when pull refresh, you should set <code>v-model</code> to <code>true</code> at the beginning of the event indicates that loading is under way, and setting <code>v-model</code> to <code>false</code> after completion indicates that loading is over.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-pull-refresh</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;isRefresh&quot;</span> @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;refresh&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>\n    <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) in data&quot;</span>\n    <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>\n    <span class="hljs-attr">border</span>\n  &gt;</span>\n    {{ item + &#39; &#39; + (index + 1) }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-pull-refresh</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">const</span> data1 = <span class="hljs-built_in">Array</span>(<span class="hljs-number">10</span>).fill(<span class="hljs-string">&#39;List Item&#39;</span>)\n<span class="hljs-keyword">const</span> data2 = <span class="hljs-built_in">Array</span>(<span class="hljs-number">10</span>).fill(<span class="hljs-string">&#39;This is new List Item&#39;</span>)\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> isRefresh = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> data = ref(data1)\n\n    <span class="hljs-keyword">const</span> refresh = <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n        data.value = data.value[<span class="hljs-number">0</span>] === <span class="hljs-string">&#39;List Item&#39;</span> ? data2 : data1\n        isRefresh.value = <span class="hljs-literal">false</span>\n      }, <span class="hljs-number">2000</span>)\n    }\n\n    <span class="hljs-keyword">return</span> {\n      refresh,\n      isRefresh,\n      data\n    }\n  }\n}\n</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Loading status</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable pull refresh</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>animation-duration</code></td><td>The duration of the animation to return to the initial position after loading(ms)</td><td><em>string | number</em></td><td><code>300</code></td></tr><tr><td><code>success-duration</code></td><td>Success text display duration(ms)</td><td><em>string | number</em></td><td><code>2000</code></td></tr><tr><td><code>bgColor</code></td><td>BackgroundColor of control</td><td><em>string</em></td><td><code>#005CAF</code></td></tr><tr><td><code>color</code></td><td>color of control</td><td><em>string</em></td><td><code>#ffffff</code></td></tr><tr><td><code>successBgColor</code></td><td>BackgroundColor of control when the status is success</td><td><em>string</em></td><td><code>#4CAF50</code></td></tr><tr><td><code>successColor</code></td><td>color of control when the status is success</td><td><em>string</em></td><td><code>ffffff</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>refresh</code></td><td>Emitted after pulling refresh</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Default slot</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--pull-refresh-size</code></td><td><code>40px</code></td></tr><tr><td><code>--pull-refresh-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--pull-refresh-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--pull-refresh-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--pull-refresh-icon-size</code></td><td><code>25px</code></td></tr></tbody></table></div>',9);const l={render:function(s,t){return(0,a.wg)(),(0,a.j4)("div",d,[n])}}}}]);