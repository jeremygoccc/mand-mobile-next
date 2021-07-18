import{_ as a}from"./demo0.e3ba2f2b.js";import{r as n,a as s,c as t,d as E,e as p,f as e,b as o}from"./app.1ee411a5.js";import"./index.086305aa.js";import"./index.730b050c.js";import"./index.e605fa4c.js";const C=o('<h1 id="tabs"><a class="header-anchor" href="#tabs" aria-hidden="true">#</a> Tabs</h1><p>To create a tab page with a content area</p><h3 id="import"><a class="header-anchor" href="#import" aria-hidden="true">#</a> Import</h3><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Tabs<span class="token punctuation">,</span> TabPane <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mand-mobile&#39;</span>\n\nVue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>Tabs<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Tabs<span class="token punctuation">)</span>\nVue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>TabPane<span class="token punctuation">.</span>name<span class="token punctuation">,</span> TabPane<span class="token punctuation">)</span>\n</code></pre></div><h3 id="code-examples"><a class="header-anchor" href="#code-examples" aria-hidden="true">#</a> Code Examples</h3>',5),c=o('<h3 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h3><h4 id="tabs-props"><a class="header-anchor" href="#tabs-props" aria-hidden="true">#</a> Tabs Props</h4><table><thead><tr><th>Props</th><th>Description</th><th>Type</th><th>Default</th><th>Note</th></tr></thead><tbody><tr><td>v-model</td><td>name of selected tab</td><td>String</td><td>-</td><td>-</td></tr><tr><td>immediate</td><td>trigger a <code>change</code> event immediately after initialization</td><td>Boolean</td><td><code>false</code></td><td>-</td></tr></tbody></table><h4 id="tabpane-props"><a class="header-anchor" href="#tabpane-props" aria-hidden="true">#</a> TabPane Props</h4><table><thead><tr><th>Props</th><th>Description</th><th>Type</th><th>Default</th><th>Note</th></tr></thead><tbody><tr><td>name</td><td>unique name</td><td>String</td><td>-</td><td>required</td></tr><tr><td>label</td><td>tab label</td><td>String</td><td>-</td><td>required</td></tr><tr><td>disabled</td><td>disable pane</td><td>Boolean</td><td><code>false</code></td><td>-</td></tr></tbody></table><h4 id="tabs-methods"><a class="header-anchor" href="#tabs-methods" aria-hidden="true">#</a> Tabs Methods</h4><h5 id="reflowtabbar"><a class="header-anchor" href="#reflowtabbar" aria-hidden="true">#</a> reflowTabBar()</h5><p>relayout tabbar</p><h4 id="tabs-events"><a class="header-anchor" href="#tabs-events" aria-hidden="true">#</a> Tabs Events</h4><h5 id="change-tab"><a class="header-anchor" href="#change-tab" aria-hidden="true">#</a> @change(tab)</h5><p>when user select tab</p><table><thead><tr><th>Props</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>tab</td><td>object of selected tab</td><td>Object:{name: String, label: String, disabled: Boolean}</td></tr></tbody></table>',12),l='{"title":"Tabs","description":"","frontmatter":{"component":"tabs","title":"Tabs","preview":"https://didi.github.io/mand-mobile/examples/#/tabs"},"headers":[{"level":3,"title":"Import","slug":"import"},{"level":3,"title":"Code Examples","slug":"code-examples"},{"level":3,"title":"API","slug":"api"}],"relativePath":"en-US/components/tabs.md","lastUpdated":1626592701893}',u={};const F=Object.assign(u,{expose:[],setup:function(o){const l={"../../../src/packages/tabs/demo/demo0.vue":a};return(a,o)=>{const u=n("demo-wrapper");return s(),t("div",null,[C,E(u,{htmlStrs:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20name%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&TabsDemo&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20title%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&%E5%9F%BA%E6%9C%AC&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20MdTabs%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&mand-mobile%2Ftabs&%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20MdTabPane%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&..%2Fpane.vue&%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3Echange%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Eitem%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20any%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Eitem%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%0A%20%20%20%20%20%20md-example-child%0A%20%20%20%20%20%20md-example-child-tabs%0A%20%20%20%20%20%20md-example-child-tabs-0%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Emd-tabs%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Adefault-index%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E0%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aimmediate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etrue%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40change%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Echange%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Emd-tab-pane%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Econtent%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ename%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ep1%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E7%AC%AC%E4%B8%80%E7%AB%A0%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%E5%A5%B9%E5%AF%B9%E4%BB%96%E5%BE%88%E6%BB%A1%E6%84%8F%E3%80%82%E8%B5%B0%E5%90%A7%E3%80%82%E5%A5%BD%E3%80%82%E4%BB%96%E8%B5%B7%E8%BA%AB%E4%B9%B0%E5%8D%95%EF%BC%8C%E8%85%BF%E5%8D%B4%E4%B8%80%E6%8B%90%E4%B8%80%E6%8B%90%E7%9A%84%E3%80%82%E9%9A%BE%E6%80%AA%E4%BB%96%E6%89%8D%E5%8D%8E%E6%A8%AA%E6%BA%A2%EF%BC%8C%E4%BA%8B%E4%B8%9A%E6%9C%89%E6%88%90%EF%BC%8C%E5%8D%B4%E8%BF%98%E6%98%AF%E5%8D%95%E8%BA%AB%E3%80%82%E8%B6%81%E7%9D%80%E4%BB%96%E4%B9%B0%E5%8D%95%EF%BC%8C%E5%A5%B9%E8%B5%B6%E7%B4%A7%E6%82%84%E6%82%84%E8%B5%B0%E4%BA%86%E3%80%82%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Emd-tab-pane%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Emd-tab-pane%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Econtent%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ename%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ep2%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E7%AC%AC%E4%BA%8C%E7%AB%A0%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%E5%8F%88%E6%98%AF%E4%B8%80%E5%B9%B4%EF%BC%8C%E5%A5%B9%E5%8F%88%E9%81%87%E5%88%B0%E4%BA%86%E4%BB%96%EF%BC%8C%E4%BB%96%E6%AD%A3%E7%89%B5%E7%9D%80%E5%AD%A9%E5%AD%90%E7%9A%84%E6%89%8B%EF%BC%8C%E8%B5%B0%E7%9A%84%E9%A3%9E%E5%BF%AB%E3%80%82%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Emd-tab-pane%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Emd-tab-pane%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Econtent%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Ename%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ep3%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E7%AC%AC%E4%B8%89%E7%AB%A0%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Edisabled%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%E4%BD%A0%E7%9A%84%E8%85%BF%EF%BC%9F%E5%A5%B9%E6%9C%89%E4%BA%9B%E8%AF%A7%E5%BC%82%E3%80%82%E8%85%BF%EF%BC%9F%E6%88%91%E7%9A%84%E8%85%BF%E6%80%8E%E4%B9%88%E4%BA%86%EF%BC%9F%E4%BB%96%E6%9B%B4%E8%AF%A7%E5%BC%82%E3%80%82%E5%90%8E%E6%9D%A5%EF%BC%8C%E5%A5%B9%E6%89%8D%E7%9F%A5%E9%81%93%E4%BB%96%E7%9A%84%E8%85%BF%EF%BC%8C%E9%82%A3%E5%A4%A9%E5%8F%AA%E6%98%AF%E5%9D%90%E9%BA%BB%E4%BA%86%E8%80%8C%E5%B7%B2%E3%80%82%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Emd-tab-pane%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Emd-tabs%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Estylus%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A.md-example-child-tabs-0%0A%20%20background-color%20%23fff%0A%20%20.md-tab-bar%0A%20%20%20%20background-color%20%23fff%0A%20%20.content%0A%20%20%20%20margin%2012px%200%0A%20%20%20%20font-size%2028px%0A%20%20%20%20background%20%23FFF%0A%20%20%20%20padding%2020px%0A%20%20%20%20line-height%201.5%0A%20%20%20%20box-sizing%20border-box%0A%20%20.md-tabs-content%0A%20%20%20%20min-height%20200px%0A%20%20%20%20background%20%23FFF%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",codeStrs:"%3Cscript%20lang%3D%22ts%22%3E%0Aexport%20default%20%7B%0A%20%20name%3A%20&TabsDemo&%2C%0A%20%20title%3A%20&%E5%9F%BA%E6%9C%AC&%2C%0A%7D%0A%3C%2Fscript%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20MdTabs%20from%20&mand-mobile%2Ftabs&%0Aimport%20MdTabPane%20from%20&..%2Fpane.vue&%0A%0Aconst%20change%20%3D%20(item%3A%20any)%20%3D%3E%20%7B%0A%20%20console.log(item)%0A%7D%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%0A%20%20%20%20class%3D%22%0A%20%20%20%20%20%20md-example-child%0A%20%20%20%20%20%20md-example-child-tabs%0A%20%20%20%20%20%20md-example-child-tabs-0%0A%20%20%20%20%22%0A%20%20%3E%0A%20%20%20%20%3Cmd-tabs%0A%20%20%20%20%20%20%3Adefault-index%3D%220%22%0A%20%20%20%20%20%20%3Aimmediate%3D%22true%22%0A%20%20%20%20%20%20%40change%3D%22change%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cmd-tab-pane%20class%3D%22content%22%20name%3D%22p1%22%20label%3D%22%E7%AC%AC%E4%B8%80%E7%AB%A0%22%3E%0A%20%20%20%20%20%20%20%20%E5%A5%B9%E5%AF%B9%E4%BB%96%E5%BE%88%E6%BB%A1%E6%84%8F%E3%80%82%E8%B5%B0%E5%90%A7%E3%80%82%E5%A5%BD%E3%80%82%E4%BB%96%E8%B5%B7%E8%BA%AB%E4%B9%B0%E5%8D%95%EF%BC%8C%E8%85%BF%E5%8D%B4%E4%B8%80%E6%8B%90%E4%B8%80%E6%8B%90%E7%9A%84%E3%80%82%E9%9A%BE%E6%80%AA%E4%BB%96%E6%89%8D%E5%8D%8E%E6%A8%AA%E6%BA%A2%EF%BC%8C%E4%BA%8B%E4%B8%9A%E6%9C%89%E6%88%90%EF%BC%8C%E5%8D%B4%E8%BF%98%E6%98%AF%E5%8D%95%E8%BA%AB%E3%80%82%E8%B6%81%E7%9D%80%E4%BB%96%E4%B9%B0%E5%8D%95%EF%BC%8C%E5%A5%B9%E8%B5%B6%E7%B4%A7%E6%82%84%E6%82%84%E8%B5%B0%E4%BA%86%E3%80%82%0A%20%20%20%20%20%20%3C%2Fmd-tab-pane%3E%0A%20%20%20%20%20%20%3Cmd-tab-pane%20class%3D%22content%22%20name%3D%22p2%22%20label%3D%22%E7%AC%AC%E4%BA%8C%E7%AB%A0%22%3E%0A%20%20%20%20%20%20%20%20%E5%8F%88%E6%98%AF%E4%B8%80%E5%B9%B4%EF%BC%8C%E5%A5%B9%E5%8F%88%E9%81%87%E5%88%B0%E4%BA%86%E4%BB%96%EF%BC%8C%E4%BB%96%E6%AD%A3%E7%89%B5%E7%9D%80%E5%AD%A9%E5%AD%90%E7%9A%84%E6%89%8B%EF%BC%8C%E8%B5%B0%E7%9A%84%E9%A3%9E%E5%BF%AB%E3%80%82%0A%20%20%20%20%20%20%3C%2Fmd-tab-pane%3E%0A%20%20%20%20%20%20%3Cmd-tab-pane%0A%20%20%20%20%20%20%20%20class%3D%22content%22%0A%20%20%20%20%20%20%20%20name%3D%22p3%22%0A%20%20%20%20%20%20%20%20label%3D%22%E7%AC%AC%E4%B8%89%E7%AB%A0%22%0A%20%20%20%20%20%20%20%20disabled%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%E4%BD%A0%E7%9A%84%E8%85%BF%EF%BC%9F%E5%A5%B9%E6%9C%89%E4%BA%9B%E8%AF%A7%E5%BC%82%E3%80%82%E8%85%BF%EF%BC%9F%E6%88%91%E7%9A%84%E8%85%BF%E6%80%8E%E4%B9%88%E4%BA%86%EF%BC%9F%E4%BB%96%E6%9B%B4%E8%AF%A7%E5%BC%82%E3%80%82%E5%90%8E%E6%9D%A5%EF%BC%8C%E5%A5%B9%E6%89%8D%E7%9F%A5%E9%81%93%E4%BB%96%E7%9A%84%E8%85%BF%EF%BC%8C%E9%82%A3%E5%A4%A9%E5%8F%AA%E6%98%AF%E5%9D%90%E9%BA%BB%E4%BA%86%E8%80%8C%E5%B7%B2%E3%80%82%0A%20%20%20%20%20%20%3C%2Fmd-tab-pane%3E%0A%20%20%20%20%3C%2Fmd-tabs%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20lang%3D%22stylus%22%3E%0A.md-example-child-tabs-0%0A%20%20background-color%20%23fff%0A%20%20.md-tab-bar%0A%20%20%20%20background-color%20%23fff%0A%20%20.content%0A%20%20%20%20margin%2012px%200%0A%20%20%20%20font-size%2028px%0A%20%20%20%20background%20%23FFF%0A%20%20%20%20padding%2020px%0A%20%20%20%20line-height%201.5%0A%20%20%20%20box-sizing%20border-box%0A%20%20.md-tabs-content%0A%20%20%20%20min-height%20200px%0A%20%20%20%20background%20%23FFF%0A%3C%2Fstyle%3E%0A",src:"src/packages/tabs/demo",demos:p(l)},null,8,["demos"]),e(" DEMO "),c])}}});export default F;export{l as __pageData};
