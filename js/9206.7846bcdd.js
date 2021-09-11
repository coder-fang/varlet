(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[9206],{9206:(s,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>c});var e=t(7875),n={class:"varlet-site-doc"},l=(0,e.uE)('<h1>Rate</h1><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Rate } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Rate)\n</code></pre></div><div class="card"><h3>Base Rate</h3><p>Default display style.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span>/&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> score = ref(<span class="hljs-number">3</span>)\n    \n    <span class="hljs-keyword">return</span> { \n      score \n    }\n  }\n}\n</code></pre></div><div class="card"><h3>Customize the total rating</h3><p>Set the total rating through the <code>count</code> attribute.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:count</span>=<span class="hljs-string">&quot;8&quot;</span>/&gt;</span>\n</code></pre></div><div class="card"><h3>Customize the rating icon color</h3><p>Set the colors of selected and unselected through the <code>color</code> and <code>empty-color</code> properties.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#9c27b0&quot;</span> <span class="hljs-attr">empty-color</span>=<span class="hljs-string">&quot;#d199da&quot;</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#e91e63&quot;</span> <span class="hljs-attr">empty-color</span>=<span class="hljs-string">&quot;#f48fb1&quot;</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#4caf50&quot;</span> <span class="hljs-attr">empty-color</span>=<span class="hljs-string">&quot;#a5d6a7&quot;</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#3f51b5&quot;</span> <span class="hljs-attr">empty-color</span>=<span class="hljs-string">&quot;#9fa8da&quot;</span>/&gt;</span>\n</code></pre></div><div class="card"><h3>Customize the rating icon style</h3><p>Set the icon style when it is selected or not through the <code>icon</code> and <code>empty-icon</code> attributes.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;heart&quot;</span> <span class="hljs-attr">empty-icon</span>=<span class="hljs-string">&quot;heart-outline&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;red&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">var-rate</span>&gt;</span>\n</code></pre></div><div class="card"><h3>Customize the rating icon size</h3><p>Set the size of the rating icon through the <code>size</code> attribute.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;14&quot;</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;16&quot;</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;18&quot;</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;20&quot;</span>/&gt;</span>\n</code></pre></div><div class="card"><h3>Custom Icon Interval</h3><p>Set the interval between ratings by the <code>gap</code> attribute.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:gap</span>=<span class="hljs-string">&quot;2&quot;</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:gap</span>=<span class="hljs-string">&quot;6&quot;</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:gap</span>=<span class="hljs-string">&quot;8&quot;</span>/&gt;</span>\n</code></pre></div><div class="card"><h3>allows half ICONS</h3><p>The <code>half</code> attribute is used to set the rating to semi selective, and the <code>half-icon</code> attribute is used to set the style of semi selective.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:count</span>=<span class="hljs-string">&quot;8&quot;</span> <span class="hljs-attr">half</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:count</span>=<span class="hljs-string">&quot;8&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;heart&quot;</span> <span class="hljs-attr">half-icon</span>=<span class="hljs-string">&quot;heart-half-full&quot;</span> <span class="hljs-attr">empty-icon</span>=<span class="hljs-string">&quot;heart-outline&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;red&quot;</span> <span class="hljs-attr">half</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">var-rate</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n\t<span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n\t\t<span class="hljs-keyword">const</span> score = ref(<span class="hljs-number">3.5</span>)\n    \n\t\t<span class="hljs-keyword">return</span> { score }\n\t}\n}\n</code></pre></div><div class="card"><h3>Disables rating</h3><p>The <code>disabled</code> attribute is used to set the rating to the status of no clicking, and the <code>disabled-color</code> is used to set the color of the icon when it is disabled.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">disabled-color</span>=<span class="hljs-string">&quot;#bbbbbb&quot;</span>/&gt;</span>\n</code></pre></div><div class="card"><h3>Read only rating</h3><p>Set the rating to read-only status through the <code>readonly</code> attribute.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">readonly</span>/&gt;</span>\n</code></pre></div><div class="card"><h3>Use water ripples</h3><p>Set the <code>ripple</code> attribute to <code>false</code> to prohibit the use of water ripples.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:ripple</span>=<span class="hljs-string">&quot;false&quot;</span>/&gt;</span>\n</code></pre></div><div class="card"><h3>listens for the change event</h3><p>Other interaction logic is completed by calling the <code>change</code> event.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange&quot;</span>/&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> { \n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> handleChange = <span class="hljs-function">(<span class="hljs-params">score</span>) =&gt;</span> {\n      Snackbar({\n        <span class="hljs-attr">content</span>: <span class="hljs-string">`click <span class="hljs-subst">${score}</span>`</span>,\n        <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;top&#39;</span>\n      })\n    }\n\n    <span class="hljs-keyword">return</span> { \n      handleChange \n    }\n  }\n}\n</code></pre></div><div class="card"><h3>Validate Value</h3><p>The values are validated by passing in an array of validators，If the validator returns <code>true</code>, the validation passes. Other values are converted to text as a user prompt.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[(v) =&gt; v &gt;= 3 || &#39;It has to be greater than 2&#39;]&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&#39;score&#39;</span> /&gt;</span>\n</code></pre></div><h2>API</h2><div class="card"><h3>props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The current rating</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>count</code></td><td>total rating</td><td><em>number | string</em></td><td><code>5</code></td></tr><tr><td><code>color</code></td><td>The color of the icon when selected</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>The icon style when the entire icon is selected</td><td><em>string</em></td><td><code>star</code></td></tr><tr><td><code>empty-color</code></td><td>The color of the icon when unchecked</td><td><em>string</em></td><td><code>#bdbdbd</code></td></tr><tr><td><code>empty-icon</code></td><td>Style of the icon when unchecked</td><td><em>string</em></td><td><code>star-outline</code></td></tr><tr><td><code>size</code></td><td>Icon size, default unit is <code>px</code></td><td><em>number | string</em></td><td><code>20</code></td></tr><tr><td><code>gap</code></td><td>Icon spacing, default unit is <code>px</code></td><td><em>number | string</em></td><td><code>4</code></td></tr><tr><td><code>half</code></td><td>Whether half selection is allowed</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>half-icon</code></td><td>The half-selected icon style only works if <code>half</code> is <code>true</code></td><td><em>string</em></td><td><code>star-half-full</code></td></tr><tr><td><code>disabled</code></td><td>Whether or not rating is prohibited</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled-color</code></td><td>The color of the icon when disabling grading is only effective when <code>disabled</code> is <code>true</code> and has higher priority than <code>color</code> and <code>empty-color</code></td><td><em>string</em></td><td><code>#bdbdbd</code></td></tr><tr><td><code>readonly</code></td><td>Whether to use rating read-only</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>Whether to use water ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>rules</code></td><td>The validation rules，Returns <code>true</code> to indicate that the validation passed,The remaining values are converted to text as user prompts</td><td><em>Array&lt;(v: string | number) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Triggered when the rating changes</td><td><code>value: string | number</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--rate-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--rate-disabled-color</code></td><td><code>#aaa</code></td></tr><tr><td><code>--rate-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--rate-action-padding</code></td><td><code>4px</code></td></tr></tbody></table></div>',18);const c={render:function(s,a){return(0,e.wg)(),(0,e.j4)("div",n,[l])}}}}]);