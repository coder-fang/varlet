(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[1959],{1959:(s,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>e});var t=n(7875),l={class:"varlet-site-doc"},p=(0,t.uE)('<h1>徽标</h1><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Badge } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Badge)\n</code></pre></div><div class="card"><h3>徽标类型</h3><p>通过<code>type</code>属性设置徽标的类型。</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>圆点徽标</h3><p>通过<code>dot</code>属性将徽标设置为圆点。</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">dot</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>自定义徽标内容</h3><p>通过<code>value</code>属性设置徽标的内容。</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;badge&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;hot&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;66&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>最大值</h3><p>通过<code>value</code>和<code>max-value</code>控制徽标显示值的范围（当<code>value</code>与<code>max-value</code>都存在时生效）。</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:max-value</span>=<span class="hljs-string">&quot;maxValue&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:max-value</span>=<span class="hljs-string">&quot;maxValue&quot;</span> /&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-number">88</span>);\n    <span class="hljs-keyword">const</span> value1 = ref(<span class="hljs-number">188</span>);\n    <span class="hljs-keyword">const</span> maxValue = ref(<span class="hljs-number">99</span>);\n\n    <span class="hljs-keyword">return</span> {\n      value,\n      value1,\n      maxValue\n    }\n  }\n}\n</code></pre></div><div class="card"><h3>不同定位徽标</h3><p>通过<code>position</code>属性设置徽标的位置。</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right-top&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span>&gt;</span>右上<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right-bottom&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span>&gt;</span>右下<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left-top&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span>&gt;</span>左上<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left-bottom&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span>&gt;</span>左下<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-badge</span>&gt;</span>\n</code></pre></div><div class="card"><h3>是否显示徽标</h3><p>通过<code>hidden</code>属性设置是否显示徽标。</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleChange&quot;</span>&gt;</span>点击改变状态<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right-top&quot;</span> <span class="hljs-attr">:hidden</span>=<span class="hljs-string">&quot;hidden&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span>&gt;</span>徽标<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-badge</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> hidden = ref(<span class="hljs-literal">false</span>);\n\n    <span class="hljs-keyword">const</span> handleChange = <span class="hljs-function">() =&gt;</span> {\n      hidden.value = !hidden.value\n    }\n\n    <span class="hljs-keyword">return</span> {\n      hidden,\n      handleChange\n    }\n  }\n}\n</code></pre></div><div class="card"><h3>自定义徽标颜色</h3><p>通过<code>color</code>属性设置徽标的颜色。</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#6200ea&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right-top&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span>&gt;</span>徽标<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-badge</span>&gt;</span>\n</code></pre></div><div class="card"><h3>自定义徽标图标</h3><p>通过<code>icon</code>属性设置徽标图标。</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-badge</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#6200ea&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right-top&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;notebook&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span>&gt;</span>徽标<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-badge</span>&gt;</span>\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>类型， 可选值为 <code>default</code> <code>primary</code> <code>info</code> <code>success</code> <code>warning</code> <code>danger</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>dot</code></td><td>徽标是否为小圆点</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>value</code></td><td>徽标中显示的值（当<code>dot</code>为<code>false</code>时生效）</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>max-value</code></td><td>徽标中显示的最大值，当<code>value</code>大于<code>max-value</code>时会显示<code>max-value+</code>(当<code>value</code>与<code>max-value</code>都存在时生效)</td><td><em>number</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td>徽标标签中有其他标签时定义徽标在其他标签上的位置，可选值<code>right-top</code> <code>top-bottom</code> <code>left-top</code> <code>left-bottom</code></td><td><em>string</em></td><td><code>right-top</code></td></tr><tr><td><code>color</code></td><td>自定义徽标颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>自定义徽标中图标的内容（优先级高于<code>value</code>）</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>徽标内容</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的css变量,可以使用<a href="#/zh-CN/style-provider">StyleProvider组件</a>进行样式定制</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--badge-content-padding</code></td><td><code>2px 6px</code></td></tr><tr><td><code>--badge-default-color</code></td><td><code>#f5f5f5</code></td></tr><tr><td><code>--badge-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--badge-danger-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--badge-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--badge-warning-color</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--badge-info-color</code></td><td><code>var(--color-info)</code></td></tr></tbody></table></div>',14);const e={render:function(s,a){return(0,t.wg)(),(0,t.j4)("div",l,[p])}}}}]);