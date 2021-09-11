(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[2689],{2689:(s,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>c});var t=n(7875),l={class:"varlet-site-doc"},p=(0,t.uE)('<h1>弹出层</h1><div class="card"><h3>介绍</h3><p>创建一个可以从上、下、左、右、中心弹出的容器， 用于展示信息。默认使用<code>teleport</code>插入到<code>body</code>尾部。</p></div><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Popup)\n</code></pre></div><div class="card"><h3>弹出位置</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> \n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>\n  <span class="hljs-attr">block</span>\n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;center = true&quot;</span>\n&gt;</span>\n  居中弹出\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>\n  <span class="hljs-attr">block</span>\n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;bottom = true&quot;</span>\n&gt;</span>\n  下方弹出\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>\n  <span class="hljs-attr">block</span> \n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;top = true&quot;</span>\n&gt;</span>\n  上方弹出\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> \n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span> \n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>\n  <span class="hljs-attr">block</span>\n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;left = true&quot;</span>\n&gt;</span>\n  左侧弹出\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> \n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span> \n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>\n  <span class="hljs-attr">block</span> \n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;right = true&quot;</span>\n&gt;</span>\n  右侧弹出\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n\n// 居中弹出\n<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;center&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>\n    素胚勾勒出青花笔锋浓转淡, \n    瓶身描绘的牡丹一如你初妆, \n    冉冉檀香透过窗心事我了然, \n    宣纸上走笔至此搁一半。\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>\n\n// 下方弹出\n<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>\n    素胚勾勒出青花笔锋浓转淡, \n    瓶身描绘的牡丹一如你初妆, \n    冉冉檀香透过窗心事我了然, \n    宣纸上走笔至此搁一半。\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>\n\n// 上方弹出\n<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>\n    素胚勾勒出青花笔锋浓转淡, \n    瓶身描绘的牡丹一如你初妆, \n    冉冉檀香透过窗心事我了然, \n    宣纸上走笔至此搁一半。\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>\n\n// 左侧弹出\n<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>\n    素胚勾勒出青花笔锋浓转淡, \n    瓶身描绘的牡丹一如你初妆,\n    冉冉檀香透过窗心事我了然, \n    宣纸上走笔至此搁一半。\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>\n\n// 右侧弹出\n<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>\n    素胚勾勒出青花笔锋浓转淡, \n    瓶身描绘的牡丹一如你初妆, \n    冉冉檀香透过窗心事我了然, \n    宣纸上走笔至此搁一半。\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> center = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> top = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> bottom = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> left = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> right = ref(<span class="hljs-literal">false</span>)\n\n    <span class="hljs-keyword">return</span> {\n      center,\n      top,\n      bottom,\n      left,\n      right\n    }\n  }\n}\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-class">.mt-10</span> {\n  <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">10px</span>;\n}\n\n<span class="hljs-selector-class">.block</span> {\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span> <span class="hljs-number">24px</span>;\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">250px</span>;\n}\n</code></pre></div><div class="card"><h3>遮罩层样式</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>\n  <span class="hljs-attr">block</span> \n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;overlayClass = true&quot;</span>\n&gt;</span>\n  遮罩层class\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> \n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>\n  <span class="hljs-attr">block</span> \n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;overlayStyle = true&quot;</span>\n&gt;</span>\n  遮罩层style\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n\n// 遮罩层class\n<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> \n  <span class="hljs-attr">overlay-class</span>=<span class="hljs-string">&quot;custom-overlay&quot;</span> \n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;overlayClass&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>\n    素胚勾勒出青花笔锋浓转淡, \n    瓶身描绘的牡丹一如你初妆,\n    冉冉檀香透过窗心事我了然, \n    宣纸上走笔至此搁一半。\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>\n\n// 遮罩层style\n<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> \n  <span class="hljs-attr">:overlay-style</span>=<span class="hljs-string">&quot;{\n    backgroundColor: &#39;rgba(0, 0, 0, 0.3)&#39; \n  }&quot;</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;overlayStyle&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>\n    素胚勾勒出青花笔锋浓转淡, \n    瓶身描绘的牡丹一如你初妆, \n    冉冉檀香透过窗心事我了然, \n    宣纸上走笔至此搁一半。\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> overlayClass = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> overlayStyle = ref(<span class="hljs-literal">false</span>)\n\n    <span class="hljs-keyword">return</span> {\n      overlayClass,\n      overlayStyle\n    }\n  }\n}\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-comment">/* normal css */</span>\n<span class="hljs-selector-class">.custom-overlay</span> {\n  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.3</span>);\n}\n\n<span class="hljs-comment">/* scoped css */</span>\n<span class="hljs-selector-class">.mt-10</span> {\n  <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">10px</span>;\n}\n\n<span class="hljs-selector-class">.block</span> {\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span> <span class="hljs-number">24px</span>;\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">250px</span>;\n}\n</code></pre></div><div class="card"><h3>注册事件</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>\n  <span class="hljs-attr">block</span>\n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;event = true&quot;</span>\n&gt;</span>\n  注册事件\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;event&quot;</span>\n  @<span class="hljs-attr">open</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.info(&#39;open&#39;)&quot;</span>\n  @<span class="hljs-attr">opened</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.success(&#39;opened&#39;)&quot;</span>\n  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.warning(&#39;close&#39;)&quot;</span>\n  @<span class="hljs-attr">closed</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.error(&#39;closed&#39;)&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>\n    素胚勾勒出青花笔锋浓转淡,\n    瓶身描绘的牡丹一如你初妆,\n    冉冉檀香透过窗心事我了然, \n    宣纸上走笔至此搁一半。\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> event = ref(<span class="hljs-literal">false</span>)\n\n    <span class="hljs-keyword">return</span> {\n      event,\n      Snackbar\n    }\n  }\n}\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>是否显示弹出层</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>position</code></td><td>弹出位置，可选值为 <code>top</code> <code>bottom</code> <code>right</code> <code>left</code> <code>center</code></td><td><em>string</em></td><td><code>center</code></td></tr><tr><td><code>overlay</code></td><td>是否显示遮罩层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>自定义遮罩层的class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>自定义遮罩层的style</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>transition</code></td><td>过度动画的名称</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>是否禁止滚动穿透，禁止时滚动弹出层不会引发body的滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>是否点击遮罩层关闭弹出层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>弹出层挂载的位置</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>open</code></td><td>打开弹出层时触发</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>打开弹出层动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭弹出层时触发</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>关闭弹出层动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>点击遮罩层时触发</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>弹出层内容</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的css变量,可以使用<a href="#/zh-CN/style-provider">StyleProvider组件</a>进行样式定制</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--popup-overlay-background-color</code></td><td><code>rgba(0, 0, 0, .6)</code></td></tr><tr><td><code>--popup-content-background-color</code></td><td><code>#fff</code></td></tr></tbody></table></div>',11);const c={render:function(s,a){return(0,t.wg)(),(0,t.j4)("div",l,[p])}}}}]);