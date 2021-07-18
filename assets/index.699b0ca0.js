var o=Object.defineProperty,n=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,l=(n,e,t)=>e in n?o(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;import{t as a}from"./index.02bb6ec7.js";import{g as i,n as c,E as s,p as r,U as d,H as m,S as p,h as u,r as v,a as g,c as f,f as b,d as y,k as S,i as h,t as w,F as x,j as k,a4 as H,l as j}from"./app.1ee411a5.js";import{p as C}from"./index.7f181b2f.js";import{r as V}from"./index.c1a0b8b5.js";var _={modelValue:{type:Boolean,default:!1},title:{type:String,default:""},icon:{type:String,default:""},iconSvg:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},content:{type:String,default:""},actions:{type:Array,default:()=>[]},layout:{type:String,default:"row"},appendTo:{type:[Object,String],default:()=>globalThis.document.body},hasMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!1},transition:{type:String,default:"md-fade"},preventScroll:{type:Boolean,default:!1},preventScrollExclude:{type:[Object],default:void 0}},P=i({name:"MdDialog",components:{MdPopup:C,MdIcon:c,MdActivityIndicatorRolling:V},props:_,emits:[d,m,p],setup:(o,a)=>((o,a)=>{for(var i in a||(a={}))e.call(a,i)&&l(o,i,a[i]);if(n)for(var i of n(a))t.call(a,i)&&l(o,i,a[i]);return o})({},((o,{emit:n})=>{const e=u({get:()=>o.modelValue,set:()=>n(d,!1)}),t=()=>{n(d,!1)};return{dialogShow:e,close:t,onHide:()=>{n(m)},onShow:()=>{n(p)},actionHandler:o=>{o.disabled||o.loading||("function"==typeof o.handler?o.handler.call(null,o):t())}}})(o,a))}),M={class:"md-dialog-content"},O={class:"md-dialog-body"},T={key:1,class:"md-dialog-icon"};P.render=function(o,n){const e=v("md-icon"),t=v("md-activity-indicator-rolling"),l=v("md-popup");return g(),f(x,null,[b(" eslint-disable vue/no-v-html "),y(l,{modelValue:o.dialogShow,"onUpdate:modelValue":n[3]||(n[3]=n=>o.dialogShow=n),class:"md-dialog","has-mask":o.hasMask,"mask-closable":o.maskClosable,transition:o.transition,"prevent-scroll":o.preventScroll,"prevent-scroll-exclude":o.preventScrollExclude,position:"center",onShow:o.onShow,onHide:o.onHide},{default:S((()=>[b(" content area "),y("div",M,[h(o.$slots,"header"),y("div",O,[o.closable?(g(),f("a",{key:0,role:"button",class:"md-dialog-close",onClick:n[1]||(n[1]=(...n)=>o.close&&o.close(...n))},[y(e,{name:"close"})])):b("v-if",!0),o.icon?(g(),f("div",T,[y(e,{name:o.icon,svg:o.iconSvg},null,8,["name","svg"])])):b("v-if",!0),o.title?(g(),f("div",{key:2,class:"md-dialog-title",textContent:w(o.title)},null,8,["textContent"])):b("v-if",!0),b(" text or html content "),h(o.$slots,"default",{},(()=>[y("div",{class:"md-dialog-text",innerHTML:o.content},null,8,["innerHTML"])]))]),b(" buttons area "),o.actions.length>0?(g(),f("div",{key:0,class:["md-dialog-actions",{"is-column":"column"===o.layout}]},[(g(!0),f(x,null,k(o.actions,((l,a)=>(g(),f("a",{key:a,role:"button",class:["md-dialog-btn",{disabled:!!l.disabled,warning:!l.disabled&&!!l.warning}],onTouchmove:n[2]||(n[2]=H((()=>{}),["prevent"])),onClick:n=>o.actionHandler(l)},[l.loading?(g(),f(t,{key:0,class:"md-dialog-btn-loading"})):l.icon?(g(),f(e,{key:1,class:"md-dialog-btn-icon",name:l.icon,svg:l.iconSvg,size:"md"},null,8,["name","svg"])):b("v-if",!0),j(" "+w(l.text),1)],42,["onClick"])))),128))],2)):b("v-if",!0)])])),_:3},8,["modelValue","has-mask","mask-closable","transition","prevent-scroll","prevent-scroll-exclude","onShow","onHide"])],2112)};var B=P;B.create=function({title:o="",icon:n="",iconSvg:e=!1,content:t="",closable:l=!1,transition:a="md-bounce",actions:i=[],onShow:c=s,onHide:d=s,onClose:m=s}){var p,u,v,g;const f={title:o,icon:n,iconSvg:e,content:t,closable:l,actions:i,transition:a,preventScroll:!0,onShow:c,onHide:d,"onUpdate:modelValue":m};if(B._show=()=>{B._instance.component.proxy.updateProps({modelValue:!0})},B._instance)return B._instance.component.proxy.updateProps(f),null==(p=B._show)||p.call(B),B._instance.component.proxy;const b=B._instance=r(B,f);if(null==(u=B._show)||u.call(B),null==(v=null==b?void 0:b.component)?void 0:v.proxy){const o=b.component.proxy.remove;b.component.proxy.remove=(...n)=>{var e;null==o||o.apply(null==(e=b.component)?void 0:e.proxy,n),B._instance=null}}return null==(g=null==b?void 0:b.component)?void 0:g.proxy},B.confirm=({title:o="",icon:n="",iconSvg:e=!1,content:t="",cancelText:l=a("md.dialog.cancel"),cancelWarning:i=!1,confirmText:c=a("md.dialog.confirm"),confirmWarning:r=!1,closable:d=!1,transition:m="md-bounce",onConfirm:p=s,onCancel:u=s,onShow:v=s,onHide:g=s})=>{const f=B.create({title:o,icon:n,iconSvg:e,content:t,closable:d,transition:m,onShow:v,onHide:g,actions:[{text:l,warning:i,handler:()=>{u(),f.updateProps({modelValue:!1})}},{text:c,warning:r,handler:()=>{p(),f.updateProps({modelValue:!1})}}]});return f},B.alert=({title:o="",icon:n="",iconSvg:e=!1,content:t="",confirmText:l=a("md.dialog.confirm"),closable:i=!1,warning:c=!1,transition:r="md-bounce",onConfirm:d=s,onShow:m=s,onHide:p=s})=>{const u=B.create({title:o,icon:n,iconSvg:e,content:t,closable:i,transition:r,onShow:m,onHide:p,actions:[{text:l,warning:c,handler:()=>{d(),u.updateProps({modelValue:!1})}}]});return u},B.succeed=o=>(o.icon="success-color",B.confirm(o)),B.failed=o=>(o.icon="warn-color",E.confirm(o));var E=B;E.install=o=>{o.component(E.name,E)};var I=E;export{I as d};
