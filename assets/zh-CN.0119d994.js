import{_ as c}from"./elevation.d7d3ee97.js";import{e as n,o as l,c as o,a as s,i as a,j as e,m as t,U as r}from"./vendor.2c1af365.js";const h={components:{}},p={class:"varlet-site-doc"},i=s("h1",null,"\u591A\u5217\u9009\u62E9\u5668",-1),m=s("div",{class:"card"},[s("h3",null,"\u4ECB\u7ECD"),s("p",null,"\u63D0\u4F9B\u4E86\u51FD\u6570\u548C\u7EC4\u4EF6\u4E24\u79CD\u8C03\u7528\u65B9\u5F0F\u3002\u540C\u65F6\u652F\u6301\u7EA7\u8054\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u5904\u7406\u591A\u7EA7\u8054\u52A8\u3002")],-1),j=s("h2",null,"\u51FD\u6570\u8C03\u7528",-1),u={class:"card"},g=s("h3",null,"\u5355\u5217\u9009\u62E9",-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Picker } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" columns = ["),s("span",{class:"hljs-built_in"},"Array"),t(".from({ "),s("span",{class:"hljs-attr"},"length"),t(": "),s("span",{class:"hljs-number"},"20"),t(" }).map("),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"_, index"),t(") =>")]),t(` index)]

`),s("span",{class:"hljs-keyword"},"const"),t(" picker = "),s("span",{class:"hljs-keyword"},"async"),t(` () => {
  `),s("span",{class:"hljs-keyword"},"await"),t(` Picker(columns)
}
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"picker"'),t(">")]),t("\u5355\u5217\u9009\u62E9"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),_={class:"card"},k=s("h3",null,"\u591A\u5217\u9009\u62E9",-1),x=s("p",null,[t("Picker \u4F20\u5165\u4E00\u4E2A\u4E8C\u7EF4\u6570\u7EC4 "),s("code",null,"columns"),t(", "),s("code",null,"columns"),t(" \u7684\u6BCF\u4E00\u9879\u5C31\u662F\u6BCF\u4E00\u5217\u7684\u5185\u5BB9\u3002 Picker \u8FD4\u56DE\u7528\u6237\u89E6\u53D1\u72B6\u6001\uFF0C\u9009\u62E9\u7684\u6587\u672C\uFF0C\u9009\u62E9\u7684\u4E0B\u6807\u3002")],-1),y=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Picker } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(` columns = [
  `),s("span",{class:"hljs-built_in"},"Array"),t(".from({ "),s("span",{class:"hljs-attr"},"length"),t(": "),s("span",{class:"hljs-number"},"20"),t(" }).map("),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"_, index"),t(") =>")]),t(` index),
  `),s("span",{class:"hljs-built_in"},"Array"),t(".from({ "),s("span",{class:"hljs-attr"},"length"),t(": "),s("span",{class:"hljs-number"},"20"),t(" }).map("),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"_, index"),t(") =>")]),t(` index),
  `),s("span",{class:"hljs-built_in"},"Array"),t(".from({ "),s("span",{class:"hljs-attr"},"length"),t(": "),s("span",{class:"hljs-number"},"20"),t(" }).map("),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"_, index"),t(") =>")]),t(` index)
]

`),s("span",{class:"hljs-keyword"},"const"),t(" picker = "),s("span",{class:"hljs-keyword"},"async"),t(` () => {
  `),s("span",{class:"hljs-keyword"},"const"),t(" { state, texts, indexes } = "),s("span",{class:"hljs-keyword"},"await"),t(` Picker(columns)
}
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"picker"'),t(">")]),t("\u591A\u5217\u9009\u62E9"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),v={class:"card"},f=s("h3",null,"\u7EA7\u8054\u9009\u62E9",-1),w=s("p",null,[t("Picker \u4F20\u5165\u4E00\u4E2A "),s("code",null,"cascade"),t(" \u5C5E\u6027\u5F00\u542F\u7EA7\u8054\u6EDA\u52A8\u3002 \u7EC4\u4EF6\u5E93\u5185\u7F6E\u63D0\u4F9B\u4E86\u7701\u5E02\u533A\u4E09\u7EA7\u8054\u52A8\uFF0C\u5F15\u5165 "),s("code",null,"area.json"),t("\u3002")],-1),C=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Picker } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" columns "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui/json/area.json'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" picker = "),s("span",{class:"hljs-keyword"},"async"),t(` () => {
  `),s("span",{class:"hljs-keyword"},"const"),t(" { state, texts, indexes } = "),s("span",{class:"hljs-keyword"},"await"),t(` Picker({
    `),s("span",{class:"hljs-attr"},"cascade"),t(": "),s("span",{class:"hljs-literal"},"true"),t(`,
    columns
  })
}
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"picker"'),t(">")]),t("\u7EA7\u8054\u9009\u62E9"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),T=s("h2",null,"\u7EC4\u4EF6\u8C03\u7528",-1),P={class:"card"},A=s("h3",null,"\u5355\u5217\u9009\u62E9",-1),N=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" columns = ref(["),s("span",{class:"hljs-built_in"},"Array"),t(".from({ "),s("span",{class:"hljs-attr"},"length"),t(": "),s("span",{class:"hljs-number"},"20"),t(" }).map("),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"_, index"),t(") =>")]),t(` index)])
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-picker"),t(),s("span",{class:"hljs-attr"},":columns"),t("="),s("span",{class:"hljs-string"},'"columns"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),B={class:"card"},V=s("h3",null,"\u591A\u5217\u9009\u62E9",-1),$=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(` columns = ref([
  `),s("span",{class:"hljs-built_in"},"Array"),t(".from({ "),s("span",{class:"hljs-attr"},"length"),t(": "),s("span",{class:"hljs-number"},"20"),t(" }).map("),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"_, index"),t(") =>")]),t(` index),
  `),s("span",{class:"hljs-built_in"},"Array"),t(".from({ "),s("span",{class:"hljs-attr"},"length"),t(": "),s("span",{class:"hljs-number"},"20"),t(" }).map("),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"_, index"),t(") =>")]),t(` index),
  `),s("span",{class:"hljs-built_in"},"Array"),t(".from({ "),s("span",{class:"hljs-attr"},"length"),t(": "),s("span",{class:"hljs-number"},"20"),t(" }).map("),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"_, index"),t(") =>")]),t(` index)
])
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-picker"),t(),s("span",{class:"hljs-attr"},":columns"),t("="),s("span",{class:"hljs-string"},'"columns"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),z={class:"card"},O=s("h3",null,"\u7EA7\u8054\u9009\u62E9",-1),I=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" area "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui/json/area.json'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(` columns = ref(area)
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-picker"),t(),s("span",{class:"hljs-attr"},"cascade"),t(),s("span",{class:"hljs-attr"},":columns"),t("="),s("span",{class:"hljs-string"},'"columns"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),S=r('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>columns</code></td><td>\u5217\u5185\u5BB9</td><td><em>NormalColumn[] | CascadeColumn[] | Texts</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>\u6807\u9898</td><td><em>string</em></td><td><code>\u63D0\u793A</code></td></tr><tr><td><code>text-key</code></td><td>\u6587\u672C\u7684\u5C5E\u6027 key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>toolbar</code></td><td>\u662F\u5426\u663E\u793A\u4E0A\u65B9\u5DE5\u5177\u680F</td><td><em>string</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>\u662F\u5426\u5F00\u542F\u7EA7\u8054\u6A21\u5F0F</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>option-height</code></td><td>\u9009\u9879\u7684\u9AD8\u5EA6(px rem)</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>option-count</code></td><td>\u53EF\u89C1\u7684\u9009\u9879\u4E2A\u6570</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirm-button-text</code></td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u786E\u8BA4</code></td></tr><tr><td><code>cancel-button-text</code></td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u53D6\u6D88</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Picker Options</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>columns</code></td><td>\u5217\u5185\u5BB9</td><td><em>NormalColumn[] | CascadeColumn[] | Texts</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>\u6807\u9898</td><td><em>string</em></td><td><code>\u63D0\u793A</code></td></tr><tr><td><code>textKey</code></td><td>\u6587\u672C\u7684\u5C5E\u6027 key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>toolbar</code></td><td>\u662F\u5426\u663E\u793A\u4E0A\u65B9\u5DE5\u5177\u680F</td><td><em>string</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>\u662F\u5426\u5F00\u542F\u7EA7\u8054\u6A21\u5F0F</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>optionHeight</code></td><td>\u9009\u9879\u7684\u9AD8\u5EA6</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>optionCount</code></td><td>\u53EF\u89C1\u7684\u9009\u9879\u4E2A\u6570</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirmButtonText</code></td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u786E\u8BA4</code></td></tr><tr><td><code>cancelButtonText</code></td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u53D6\u6D88</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>\u5F39\u51FA\u5C42\u5F00\u542F\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>\u5F39\u51FA\u5C42\u5F00\u542F\u52A8\u753B\u7ED3\u675F\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>\u5F39\u51FA\u5C42\u5173\u95ED\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>\u5173\u95ED\u5F39\u51FA\u5C42\u52A8\u753B\u7ED3\u675F\u65F6\u56DE\u8C03</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onChange</code></td><td>\u9009\u62E9\u5185\u5BB9\u53D8\u5316\u65F6\u56DE\u8C03</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onConfirm</code></td><td>\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u65F6\u89E6\u53D1</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onCancel</code></td><td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr></tbody></table></div><div class="card"><h3>Picker NormalColumn</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>texts</code></td><td>\u6587\u672C\u6570\u7EC4</td><td><em>Texts</em></td><td><code>-</code></td></tr><tr><td><code>initialIndex</code></td><td>\u521D\u59CB\u5316\u7D22\u5F15</td><td><em>number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>Picker CascadeColumn</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>text</code></td><td>\u6BCF\u4E00\u884C\u7684\u6587\u672C</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>children</code></td><td>\u5B50\u7EA7</td><td><em>CascadeColumn[]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>confirm</code></td><td>\u7ACB\u523B\u505C\u6B62\u6EDA\u52A8\u5E76\u89E6\u53D1 confirm \u4E8B\u4EF6</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>\u7ACB\u523B\u505C\u6B62\u6EDA\u52A8\u5E76\u89E6\u53D1 cancel \u4E8B\u4EF6</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>change</code></td><td>\u9009\u62E9\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1</td><td><code>texts: Texts</code> \u9009\u62E9\u7684\u5185\u5BB9\u6570\u7EC4 <br> <code>indexes: number[]</code> \u9009\u62E9\u7684\u4E0B\u6807\u6570\u7EC4</td></tr><tr><td><code>cancel</code></td><td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1</td><td><code>texts: Texts</code> \u9009\u62E9\u7684\u5185\u5BB9\u6570\u7EC4 <br> <code>indexes: number[]</code> \u9009\u62E9\u7684\u4E0B\u6807\u6570\u7EC4</td></tr><tr><td><code>confirm</code></td><td>\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u65F6\u89E6\u53D1</td><td><code>texts: Texts</code> \u9009\u62E9\u7684\u5185\u5BB9\u6570\u7EC4 <br> <code>indexes: number[]</code> \u9009\u62E9\u7684\u4E0B\u6807\u6570\u7EC4</td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>cancel</code></td><td>\u53D6\u6D88\u6309\u94AE\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>\u6807\u9898\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>\u786E\u8BA4\u6309\u94AE\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--picker-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--picker-toolbar-height</code></td><td><code>44px</code></td></tr><tr><td><code>--picker-confirm-button-text-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--picker-cancel-button-text-color</code></td><td><code>#888</code></td></tr><tr><td><code>--picker-picked-border</code></td><td><code>1px solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--picker-title-font-size</code></td><td><code>16px</code></td></tr><tr><td><code>--picker-toolbar-padding</code></td><td><code>0 4px</code></td></tr><tr><td><code>--picker-mask-background-image</code></td><td><code>linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))</code></td></tr></tbody></table></div>',9);function E(H,K,U,q,D,F){const d=n("var-site-code-example");return l(),o("div",p,[i,m,j,s("div",u,[g,a(d,null,{default:e(()=>[b]),_:1})]),s("div",_,[k,x,a(d,null,{default:e(()=>[y]),_:1})]),s("div",v,[f,w,a(d,null,{default:e(()=>[C]),_:1})]),T,s("div",P,[A,a(d,null,{default:e(()=>[N]),_:1})]),s("div",B,[V,a(d,null,{default:e(()=>[$]),_:1})]),s("div",z,[O,a(d,null,{default:e(()=>[I]),_:1})]),S])}var L=c(h,[["render",E]]);export{L as default};