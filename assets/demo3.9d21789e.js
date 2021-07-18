var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,s=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&i(e,a,t[a]);if(l)for(var a of l(t))n.call(t,a)&&i(e,a,t[a]);return e},u=(e,l)=>t(e,a(l));import{g as d,S as r,H as c,I as p,s as m,h as v,x,o as f,ai as h,r as b,a as S,c as L,d as M,F as g,j as B,t as I,k as w,i as _,aj as y,e as C}from"./app.1ee411a5.js";import{p as k}from"./index.7f181b2f.js";import{l as D}from"./index.55bd040c.js";function V(e,t,a){e.value=t.defaultValue,h(t.data,["options"],((e,l,o)=>{const n=o[0],i=t.defaultValue[n];if(void 0!==i&&(e.value===i||e.text===i||e.label===i))return a.value[n]=e,!1}))}var j=d({name:"MdDropMenu",components:{MdPopup:k,MdRadioList:D},props:{data:{type:Array,default:()=>[]},defaultValue:{type:Array,default:()=>[]}},emits:[r,c,p],setup(e,t){const{hasSlot:a,isPopupShow:l,onListShow:o,onListHide:n,onListItemClick:i,onListBeforeHide:s,activeMenuListData:u,getBarItemText:d,onBarItemClick:h,checkBarItemSelect:b,activeMenuBarIndex:S,selectedMenuListValue:L,scroller:M,boxRef:g,menuRef:B}=((e,{emit:t,slots:a})=>{const l=m(!1),o=v((()=>!!a.default));x((()=>e.data),((t,a)=>{y(t,a)||V(u,e,s)})),x((()=>e.defaultValue),((t,a)=>{y(t,a)||V(u,e,s)}));const n=m(-1),i=v((()=>n.value<0||!e.data[n.value]?[]:e.data[n.value].options)),s=m([]),u=m([]),d=m(""),h=m(null),b=m(null);return f((()=>{V(u,e,s)})),{hasSlot:o,isPopupShow:l,onListShow:()=>{!function(e,t,a){const l=t?e:null;l&&t&&l.clientHeight>=t.clientHeight?a.value=".md-drop-menu-list":a.value=""}(h.value,b.value,d),t(r)},onListHide:()=>{t(c)},onListItemClick:a=>{const o=n.value,i=e.data[o];l.value=!1,u.value[o]=a.value,s.value[o]=a,t(p,i,a)},onListBeforeHide:()=>{n.value=-1},activeMenuListData:i,getBarItemText:(e,t)=>void 0!==s.value[t]?s.value[t].text:e.text,onBarItemClick:(e,t)=>{e&&!e.disabled&&(l.value?l.value=!1:(l.value=!0,n.value=t))},checkBarItemSelect:t=>!(void 0===s.value[t]&&!e.defaultValue[t]),activeMenuBarIndex:n,selectedMenuListValue:u,scroller:d,boxRef:h,menuRef:b}})(e,t);return{hasSlot:a,isPopupShow:l,onListShow:o,onListHide:n,onListItemClick:i,onListBeforeHide:s,activeMenuListData:u,getBarItemText:d,onBarItemClick:h,checkBarItemSelect:b,activeMenuBarIndex:S,selectedMenuListValue:L,scroller:M,box:g,menu:B}}}),H={ref:"menu",class:"md-drop-menu"},T={class:"md-drop-menu-bar"},O={ref:"drop",class:"md-drop-menu-list"};j.render=function(e,t){const a=b("md-radio-list"),l=b("md-popup");return S(),L("div",H,[M("div",T,[(S(!0),L(g,null,B(e.data,((t,a)=>(S(),L("div",{key:a,class:["bar-item",{active:a===e.activeMenuBarIndex,selected:e.checkBarItemSelect(a),disabled:t.disabled}],onClick:l=>e.onBarItemClick(t,a)},[M("span",{textContent:I(e.getBarItemText(t,a))},null,8,["textContent"])],10,["onClick"])))),128))]),M(l,{modelValue:e.isPopupShow,"onUpdate:modelValue":t[2]||(t[2]=t=>e.isPopupShow=t),position:"top","prevent-scroll":"","append-to-body":!1,onShow:e.onListShow,onHide:e.onListHide,onBeforeHide:e.onListBeforeHide},{default:w((()=>[M("div",O,[M(a,{modelValue:e.selectedMenuListValue[e.activeMenuBarIndex],"onUpdate:modelValue":t[1]||(t[1]=t=>e.selectedMenuListValue[e.activeMenuBarIndex]=t),options:e.activeMenuListData,"is-slot-scope":e.hasSlot,"align-center":"",onChange:e.onListItemClick},{default:w((({option:t})=>[_(e.$slots,"default",{option:t})])),_:1},8,["modelValue","options","is-slot-scope","onChange"])],512)])),_:1},8,["modelValue","onShow","onHide","onBeforeHide"])],512)};var P=j;P.install=e=>{e.component(P.name,P)};var U=P;const E={class:"\n      md-example-child\n      md-example-child-drop-menu\n      md-example-child-drop-menu-0\n    "},R=M("div",{class:"content"},"正文区域",-1);var z=d(u(s({},{name:"DropMenuDemo",title:"基础下拉菜单",titleEnUS:"Basic drop-down menu",height:250}),{expose:[],setup(e){const t=m([{text:"一级选项1",options:[{value:"0",text:"二级选项1"},{value:"1",text:"二级选项2"}]}]);return(e,a)=>(S(),L("div",E,[M(C(U),{data:t.value},null,8,["data"]),R]))}})),A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:z});const F={class:"\n      md-example-child\n      md-example-child-drop-menu\n      md-example-child-drop-menu-1\n    "},$=M("div",{class:"content"},"正文区域",-1);var q=d(u(s({},{name:"DropMenuDemo",title:"初始下拉菜单",titleEnUS:"Drop-down menu with initial selection",height:500}),{expose:[],setup(e){const t=m([{text:"排量",options:[{value:"0",text:"1.6L"},{value:"1",text:"1.8L"},{value:"2",text:"2.0L"},{value:"3",text:"1.2T"},{value:"4",text:"1.4T"},{value:"5",text:"1.6T"}]},{text:"变速箱",options:[{value:"7",text:"手动挡"},{value:"8",text:"自动挡"},{value:"9",text:"手自一体"}]}]);return(e,a)=>(S(),L("div",F,[M(C(U),{data:t.value,"default-value":["1","8"]},null,8,["data"]),$]))}})),G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});const J={class:"\n      md-example-child\n      md-example-child-drop-menu\n      md-example-child-drop-menu-2\n    "},K=M("div",{class:"content"},"正文区域",-1);var N=d(u(s({},{name:"DropMenuDemo",title:"禁用下拉菜单",titleEnUS:"Drop-down menu with disabled item",height:500}),{expose:[],setup(e){const t=m([{text:"排量",options:[{value:"0",text:"1.6L"},{value:"1",text:"1.8L"},{value:"2",text:"2.0L",disabled:!0},{value:"3",text:"1.2T"},{value:"4",text:"1.4T"},{value:"5",text:"1.6T"}]},{text:"变速箱",disabled:!0,options:[{value:"7",text:"手动挡"},{value:"8",text:"自动挡"},{value:"9",text:"手自一体"}]}]);return(e,a)=>(S(),L("div",J,[M(C(U),{data:t.value,"default-value":["1","8"]},null,8,["data"]),K]))}})),Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:N});const W={class:"\n      md-example-child\n      md-example-child-drop-menu\n      md-example-child-drop-menu-3\n    "},X={class:"md-drop-menu-custom-brief"},Y=M("div",{class:"content"},"正文区域",-1);var Z=d(u(s({},{name:"DropMenuDemo",title:"自定义菜单项",titleEnUS:"Custom menu options",height:250}),{expose:[],setup(e){const t=m([{text:"一级选项1",options:[{value:"0",text:"二级选项1"},{value:"1",text:"二级选项2"}]}]);return(e,a)=>(S(),L("div",W,[M(C(U),{data:t.value},{default:w((({option:e})=>[M("div",{class:"md-drop-menu-custom-title",textContent:I(e.text)},null,8,["textContent"]),M("div",X,I(e.text)+" 【可使用slot-scope进行自定义描述】 ",1)])),_:1},8,["data"]),Y]))}})),ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Z});export{A as _,G as a,Q as b,ee as c};
