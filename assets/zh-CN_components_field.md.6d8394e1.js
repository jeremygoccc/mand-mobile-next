import{_ as a}from"./demo0.4ba0bbca.js";import{r as n,a as s,c as t,d as p,e,b as E}from"./app.1ee411a5.js";import"./index.685ca15d.js";import"./index.3377d9ab.js";const o=E('<h1 id="field-区域列表组合"><a class="header-anchor" href="#field-区域列表组合" aria-hidden="true">#</a> Field 区域列表组合</h1><p>区域列表垂直排列，显示当前的内容、状态和可进行的操作。</p><h2 id="引入"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h2><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Field<span class="token punctuation">,</span> FieldItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mand-mobile-next&#39;</span>\n\nVue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>Field<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Field<span class="token punctuation">)</span>\nVue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>FieldItem<span class="token punctuation">.</span>name<span class="token punctuation">,</span> FieldItem<span class="token punctuation">)</span>\n</code></pre></div><h2 id="代码演示"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h2>',5),l=E('<h2 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="field-props"><a class="header-anchor" href="#field-props" aria-hidden="true">#</a> Field Props</h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>String</td><td>-</td><td>-</td></tr><tr><td>brief</td><td>描述内容</td><td>String</td><td>-</td><td>-</td></tr><tr><td>disabled</td><td>是否禁用区域</td><td>Boolean</td><td><code>false</code></td><td>-</td></tr><tr><td>plain</td><td>镂空样式</td><td>Boolean</td><td><code>false</code></td><td>-</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>当使用了<code>disabled</code>选项时，其后代内容可以通过<a href="https://vuejs.org/v2/api/#provide-inject" target="_blank" rel="noopener noreferrer">inject</a>的方式获取祖先<code>Field</code>的实例属性。</p></div><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;your-component&#39;</span><span class="token punctuation">,</span>\n\n  inject<span class="token operator">:</span> <span class="token punctuation">{</span>\n    rootField<span class="token operator">:</span> <span class="token punctuation">{</span>\n      from<span class="token operator">:</span> <span class="token string">&#39;rootField&#39;</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  computed<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">disabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rootField<span class="token punctuation">.</span>disabled\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="field-slots"><a class="header-anchor" href="#field-slots" aria-hidden="true">#</a> Field Slots</h3><h4 id="default"><a class="header-anchor" href="#default" aria-hidden="true">#</a> default</h4><p>内容默认插槽</p><h4 id="header"><a class="header-anchor" href="#header" aria-hidden="true">#</a> header</h4><p>页眉内容插槽</p><h4 id="action"><a class="header-anchor" href="#action" aria-hidden="true">#</a> action</h4><p>页眉操作区域插槽</p><h4 id="footer"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h4><p>页脚内容插槽</p><hr><h3 id="fielditem-props"><a class="header-anchor" href="#fielditem-props" aria-hidden="true">#</a> FieldItem Props</h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>String</td><td>-</td><td>-</td></tr><tr><td>content</td><td>描述内容</td><td>String</td><td>-</td><td>-</td></tr><tr><td>addon</td><td>附加文案</td><td>String</td><td>-</td><td>-</td></tr><tr><td>disabled</td><td>是否禁用项目</td><td>Boolean</td><td>false</td><td>-</td></tr><tr><td>solid</td><td>是否固定标题宽度，超出会自动换行</td><td>Boolean</td><td>false</td><td>-</td></tr><tr><td>arrow</td><td>动作箭头标识</td><td>Boolean</td><td>false</td><td>-</td></tr></tbody></table><h3 id="fielditem-events"><a class="header-anchor" href="#fielditem-events" aria-hidden="true">#</a> FieldItem Events</h3><h4 id="click-event"><a class="header-anchor" href="#click-event" aria-hidden="true">#</a> @click(event)</h4><p>非禁用状态下的点击事件</p><h3 id="fielditem-slots"><a class="header-anchor" href="#fielditem-slots" aria-hidden="true">#</a> FieldItem Slots</h3><h4 id="default-1"><a class="header-anchor" href="#default-1" aria-hidden="true">#</a> default</h4><p>内容默认插槽</p><h4 id="left"><a class="header-anchor" href="#left" aria-hidden="true">#</a> left</h4><p>起始区域插槽</p><h4 id="right"><a class="header-anchor" href="#right" aria-hidden="true">#</a> right</h4><p>末尾区域插槽</p><h4 id="children"><a class="header-anchor" href="#children" aria-hidden="true">#</a> children</h4><p>额外内容插槽</p>',29),c='{"title":"Field 区域列表组合","description":"","frontmatter":{"component":"field","title":"Field 区域列表组合","preview":"https://didi.github.io/mand-mobile/examples/#/field"},"headers":[{"level":2,"title":"引入","slug":"引入"},{"level":2,"title":"代码演示","slug":"代码演示"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Field Props","slug":"field-props"},{"level":3,"title":"Field Slots","slug":"field-slots"},{"level":3,"title":"FieldItem Props","slug":"fielditem-props"},{"level":3,"title":"FieldItem Events","slug":"fielditem-events"},{"level":3,"title":"FieldItem Slots","slug":"fielditem-slots"}],"relativePath":"zh-CN/components/field.md","lastUpdated":1626592701893}',C={};const i=Object.assign(C,{expose:[],setup:function(E){const c={"../../../src/packages/field/demo/demo0.vue":a};return(a,E)=>{const C=n("demo-wrapper");return s(),t("div",null,[o,p(C,{htmlStrs:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20name%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&FieldDemo&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20title%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&%E5%9F%BA%E6%9C%AC&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20MdField%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&mand-mobile%2Ffield&%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20MdFieldItem%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&mand-mobile%2Ffield-item&%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20MdIcon%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&mand-mobile%2Ficon&%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EonClick%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E&zzzz&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%0A%20%20%20%20%20%20md-example-child%0A%20%20%20%20%20%20md-example-child-field%0A%20%20%20%20%20%20md-example-child-field-0%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Emd-field%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Etitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E5%8C%BA%E5%9F%9F%E6%A0%87%E9%A2%98%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Ebrief%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E5%8C%BA%E5%9F%9F%E6%8F%8F%E8%BF%B0%E6%80%A7%E6%96%87%E6%9C%AC%EF%BC%8C%E5%8F%AF%E6%A0%B9%E6%8D%AE%E5%85%B7%E4%BD%93%E5%9C%BA%E6%99%AF%E9%85%8D%E7%BD%AE%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%23action%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eaction-container%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EonClick%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%E6%93%8D%E4%BD%9C%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Emd-icon%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ename%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Erectangle%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Emd-icon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%23footer%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E5%8C%BA%E5%9F%9F%E9%A1%B5%E8%84%9A%E5%8C%BA%E5%9F%9F%E5%86%85%E5%AE%B9%E6%8F%92%E6%A7%BD%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Emd-field-item%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Esolid%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Etitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E6%A0%87%E9%A2%98%E5%8C%BA%E5%9F%9F%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eplaceholder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E6%8F%90%E7%A4%BA%E6%96%87%E6%9C%AC%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Emd-field-item%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Esolid%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Etitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E6%A0%87%E9%A2%98%E5%8C%BA%E5%9F%9F%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Econtent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E5%86%85%E5%AE%B9%E6%96%87%E6%9C%AC%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eaddon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E6%AC%A1%E8%A6%81%E4%BF%A1%E6%81%AF%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Emd-field-item%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Esolid%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Etitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E9%99%84%E5%8A%A0%E5%86%85%E5%AE%B9%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Econtent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E6%AD%A3%E6%96%87%E5%86%85%E5%AE%B9%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%23children%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E8%BF%99%E6%98%AF%E5%AD%90%E5%86%85%E5%AE%B9%E5%8C%BA%E5%9F%9F%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Emd-field-item%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Emd-field-item%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Esolid%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Etitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E5%8A%A8%E4%BD%9C%E6%9D%A1%E7%9B%AE%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Earrow%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EonClick%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Emd-field-item%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Esolid%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Etitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E7%A6%81%E7%94%A8%E6%9D%A1%E7%9B%AE%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Econtent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E5%86%85%E5%AE%B9%E7%A6%81%E7%94%A8%E7%8A%B6%E6%80%81%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Earrow%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Edisabled%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Emd-field%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Estylus%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A.md-example-child-field-0%0A%20%20.md-field-action%0A%20%20%20%20height%2036px%0A%20%20%20%20align-items%20flex-end%0A%20%20%20%20.action-container%0A%20%20%20%20%20%20display%20flex%0A%20%20%20%20%20%20align-items%20center%0A%20%20%20%20%20%20.md-icon%0A%20%20%20%20%20%20%20%20margin-left%2010px%0A%20%20%20%20%20%20%20%20color%20%23C5CAD5%0A%20%20%20%20%20%20%20%20font-size%2016px%0A%20%20%20%20%20%20%20%20width%20auto%0A%20%20%20%20%20%20%20%20height%20auto%0A%20%20%20%20%20%20%20%20line-height%20normal%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",codeStrs:"%3Cscript%20lang%3D%22ts%22%3E%0Aexport%20default%20%7B%0A%20%20name%3A%20&FieldDemo&%2C%0A%20%20title%3A%20&%E5%9F%BA%E6%9C%AC&%2C%0A%7D%0A%3C%2Fscript%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20MdField%20from%20&mand-mobile%2Ffield&%0Aimport%20MdFieldItem%20from%20&mand-mobile%2Ffield-item&%0Aimport%20MdIcon%20from%20&mand-mobile%2Ficon&%0A%0Aconst%20onClick%20%3D%20()%20%3D%3E%20%7B%0A%20%20console.log(&zzzz&)%0A%7D%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%0A%20%20%20%20class%3D%22%0A%20%20%20%20%20%20md-example-child%0A%20%20%20%20%20%20md-example-child-field%0A%20%20%20%20%20%20md-example-child-field-0%0A%20%20%20%20%22%0A%20%20%3E%0A%20%20%20%20%3Cmd-field%0A%20%20%20%20%20%20title%3D%22%E5%8C%BA%E5%9F%9F%E6%A0%87%E9%A2%98%22%0A%20%20%20%20%20%20brief%3D%22%E5%8C%BA%E5%9F%9F%E6%8F%8F%E8%BF%B0%E6%80%A7%E6%96%87%E6%9C%AC%EF%BC%8C%E5%8F%AF%E6%A0%B9%E6%8D%AE%E5%85%B7%E4%BD%93%E5%9C%BA%E6%99%AF%E9%85%8D%E7%BD%AE%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23action%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22action-container%22%20%40click%3D%22onClick%22%3E%0A%20%20%20%20%20%20%20%20%20%20%E6%93%8D%E4%BD%9C%20%3Cmd-icon%20name%3D%22rectangle%22%3E%3C%2Fmd-icon%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23footer%3E%0A%20%20%20%20%20%20%20%20%3Cp%3E%E5%8C%BA%E5%9F%9F%E9%A1%B5%E8%84%9A%E5%8C%BA%E5%9F%9F%E5%86%85%E5%AE%B9%E6%8F%92%E6%A7%BD%3C%2Fp%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3Cmd-field-item%0A%20%20%20%20%20%20%20%20solid%0A%20%20%20%20%20%20%20%20title%3D%22%E6%A0%87%E9%A2%98%E5%8C%BA%E5%9F%9F%22%0A%20%20%20%20%20%20%20%20placeholder%3D%22%E6%8F%90%E7%A4%BA%E6%96%87%E6%9C%AC%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3Cmd-field-item%0A%20%20%20%20%20%20%20%20solid%0A%20%20%20%20%20%20%20%20title%3D%22%E6%A0%87%E9%A2%98%E5%8C%BA%E5%9F%9F%22%0A%20%20%20%20%20%20%20%20content%3D%22%E5%86%85%E5%AE%B9%E6%96%87%E6%9C%AC%22%0A%20%20%20%20%20%20%20%20addon%3D%22%E6%AC%A1%E8%A6%81%E4%BF%A1%E6%81%AF%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3Cmd-field-item%0A%20%20%20%20%20%20%20%20solid%0A%20%20%20%20%20%20%20%20title%3D%22%E9%99%84%E5%8A%A0%E5%86%85%E5%AE%B9%22%0A%20%20%20%20%20%20%20%20content%3D%22%E6%AD%A3%E6%96%87%E5%86%85%E5%AE%B9%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23children%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cp%3E%E8%BF%99%E6%98%AF%E5%AD%90%E5%86%85%E5%AE%B9%E5%8C%BA%E5%9F%9F%3C%2Fp%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fmd-field-item%3E%0A%20%20%20%20%20%20%3Cmd-field-item%0A%20%20%20%20%20%20%20%20solid%0A%20%20%20%20%20%20%20%20title%3D%22%E5%8A%A8%E4%BD%9C%E6%9D%A1%E7%9B%AE%22%0A%20%20%20%20%20%20%20%20arrow%0A%20%20%20%20%20%20%20%20%40click%3D%22onClick%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3Cmd-field-item%0A%20%20%20%20%20%20%20%20solid%0A%20%20%20%20%20%20%20%20title%3D%22%E7%A6%81%E7%94%A8%E6%9D%A1%E7%9B%AE%22%0A%20%20%20%20%20%20%20%20content%3D%22%E5%86%85%E5%AE%B9%E7%A6%81%E7%94%A8%E7%8A%B6%E6%80%81%22%0A%20%20%20%20%20%20%20%20arrow%0A%20%20%20%20%20%20%20%20disabled%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fmd-field%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20lang%3D%22stylus%22%3E%0A.md-example-child-field-0%0A%20%20.md-field-action%0A%20%20%20%20height%2036px%0A%20%20%20%20align-items%20flex-end%0A%20%20%20%20.action-container%0A%20%20%20%20%20%20display%20flex%0A%20%20%20%20%20%20align-items%20center%0A%20%20%20%20%20%20.md-icon%0A%20%20%20%20%20%20%20%20margin-left%2010px%0A%20%20%20%20%20%20%20%20color%20%23C5CAD5%0A%20%20%20%20%20%20%20%20font-size%2016px%0A%20%20%20%20%20%20%20%20width%20auto%0A%20%20%20%20%20%20%20%20height%20auto%0A%20%20%20%20%20%20%20%20line-height%20normal%0A%3C%2Fstyle%3E%0A",src:"src/packages/field/demo",demos:e(c)},null,8,["demos"]),l])}}});export default i;export{c as __pageData};
