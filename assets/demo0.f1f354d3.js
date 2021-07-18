var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(a,l,n)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[l]=n,r=(e,a)=>{for(var l in a||(a={}))t.call(a,l)&&s(e,l,a[l]);if(n)for(var l of n(a))o.call(a,l)&&s(e,l,a[l]);return e},i=(e,n)=>a(e,l(n));import{g as d,I as u,s as p,Y as m,m as c,x as b,o as v,Z as h,v as f,r as g,a as y,c as w,d as S,k,i as x,f as I,U as j,G as H,H as V,S as C,J as P,h as T,W as B,F as _,j as O,e as M}from"./app.1ee411a5.js";import{f as U}from"./index.685ca15d.js";import{f as $}from"./index.3377d9ab.js";import{a as z,t as R}from"./index.7f181b2f.js";import{t as L}from"./index.086305aa.js";import{s as N}from"./index.730b050c.js";import{t as A}from"./index.e605fa4c.js";import{r as D}from"./index.ba0a20e9.js";import{t as q}from"./index.02bb6ec7.js";var E={hasInk:{type:Boolean,default:!0},defaultIndex:{type:Number,default:0},immediate:{type:Boolean,default:!1},inkLength:{type:Number,default:0}},F={label:{type:String,default:""},name:{type:String,default:""},disabled:{type:Boolean,default:!1}},G=d({name:"MdTabs",components:{MdSwiper:N,MdTabBar:A},props:E,emits:[u],setup(e,a){const{tabItems:l,swiperRef:n,currentIndex:t,changeHandler:o,swiperChangeHandler:s}=((e,{emit:a})=>{const l=p([]);m("Tabs",c({addItem:e=>(l.value.push(e),l.value.length-1),removeItem:e=>{const a=l.value.findIndex((a=>a.name===e.name&&a.label==a.label));l.value.splice(a,1)}}));const n=p(null),t=p(e.defaultIndex);return b(l,(()=>{var e,a;null==(a=null==(e=n.value)?void 0:e.getSwiperInstance())||a.refresh()}),{deep:!0}),v((()=>{var o,s,d;null==(d=null==(s=null==(o=n.value)?void 0:o.getSwiperInstance())?void 0:s.goToPage)||d.call(s,t.value,0),e.immediate&&a(u,i(r({},l.value[t.value]),{index:t.value}))})),{tabItems:l,swiperRef:n,currentIndex:t,changeHandler:function(e,o){var s,d;t.value=o,null==(d=null==(s=n.value)?void 0:s.getSwiperInstance())||d.goToPage(o,0),a(u,i(r({},l.value[t.value]),{index:t.value}))},swiperChangeHandler:(e,n)=>{t.value=n,a(u,i(r({},l.value[t.value]),{index:t.value}))}}})(e,a);return{tabItems:l,swiper:n,currentIndex:t,changeHandler:o,swiperChangeHandler:s}}}),J={class:"md-tabs"};G.render=function(e,a){var l;const n=g("md-tab-bar"),t=g("md-swiper");return y(),w("div",J,[S(n,{ref:"tabBar","model-value":(null==(l=e.tabItems[e.currentIndex])?void 0:l.name)||"",items:e.tabItems,"has-ink":e.hasInk,"ink-length":e.inkLength,onChange:e.changeHandler},null,8,["model-value","items","has-ink","ink-length","onChange"]),S(t,{ref:"swiper",autoplay:0,"is-loop":!1,"has-dots":!1,"is-prevent":!1,onBeforeChange:e.swiperChangeHandler},{default:k((()=>[x(e.$slots,"default")])),_:3},8,["onBeforeChange"])])};var W=G,Y=d({props:F,setup(e){(e=>{const{addItem:a,removeItem:l}=h("Tabs",{});a(e),f((()=>{l(e)}))})(e)}});Y.render=function(e,a){return e.disabled?I("v-if",!0):(y(),w("div",{key:0,class:"md-tab-pane",role:"tabpanel",tab:e.name},[x(e.$slots,"default")],8,["tab"]))};var Z=Y;W.install=e=>{e.component(W.name,W),e.component(Z.name,Z)},Z.install=e=>{e.component(Z.name,Z)};var K=Z,Q=[u,j,H,V,C],X={modelValue:{type:[Number,String,Array],default:()=>[]},visible:{type:Boolean,default:!1},data:{type:Object,default:()=>({})},defaultValue:{type:Array,default:()=>[]},placeholder:{type:String,default:q("md.tab_picker.choose")},value:{type:Boolean,default:!1},title:{type:String,default:""},describe:{type:String,default:""},maskClosable:{type:Boolean,default:!0},height:{type:String,default:"40vh"}},ee=d({name:"MdTabPicker",components:{MdPopup:z,MdPopupTitleBar:R,MdTabs:L,MdTabPane:K,MdRadioList:D},props:X,emits:Q,setup(e,a){const{popupShow:l,onHide:n,onShow:t,hide:o,tabsRef:s,panes:r,innerValue:i,changeHandler:d}=((e,{emit:a})=>{const l=p(null),{popupShow:n,onHide:t,onShow:o,hide:s}=P(e,a);b(n,(e=>{e&&B((()=>{const e=l.value.$refs.tabBar;l.value.swiper.renderSwiper(),e.setInkStyle(e.modelIndex)}))}));const r=T({get:()=>e.modelValue,set:e=>a(j,e)}),i=e=>{const a=c({});return e&&e.name&&(a.name=e.name,a.label=e.label,a.options=e.options),a},d=p([]);return v((()=>{d.value.push(i(e.data))})),{tabsRef:l,popupShow:n,onHide:t,onShow:o,hide:s,panes:d,innerValue:r,changeHandler:(e,n)=>{const t=e.find((e=>e.value===r.value[n]));d.value[n].label=t.label,a(u,{index:n,options:e,value:r.value[n]}),d.value.splice(n+1),r.value.splice(n+1),t.children?(d.value[n+1]=i(t.children),B((()=>{var e;null==(e=l.value.swiper.getSwiperInstance())||e.goToPage(n+1,0)}))):s()}}})(e,a);return{popupShow:l,onHide:n,onShow:t,hide:o,tabs:s,panes:r,innerValue:i,changeHandler:d}}});ee.render=function(e,a){const l=g("md-popup-title-bar"),n=g("md-radio-list"),t=g("md-tab-pane"),o=g("md-tabs"),s=g("md-popup");return y(),w(s,{modelValue:e.popupShow,"onUpdate:modelValue":a[1]||(a[1]=a=>e.popupShow=a),class:"md-tab-picker",position:"bottom","mask-closable":e.maskClosable,"prevent-scroll":!0,onHide:e.onHide,onShow:e.onShow},{default:k((()=>[x(e.$slots,"title",{},(()=>[S(l,{title:e.title,describe:e.describe,"only-close":"",onCancel:e.hide},null,8,["title","describe","onCancel"])])),S("div",{class:"md-tab-picker-content",style:{height:e.height}},[S(o,{ref:"tabs"},{default:k((()=>[(y(!0),w(_,null,O(e.panes,((a,l)=>(y(),w(t,{key:a.name+l,name:a.name,label:a.label},{default:k((()=>[S(n,{modelValue:e.innerValue[l],"onUpdate:modelValue":a=>e.innerValue[l]=a,options:a.options,"is-slot-scope":!!e.$slots.default,icon:"","icon-inverse":"","icon-position":"right",onChange:n=>e.changeHandler(a.options,l)},{default:k((({option:a})=>[x(e.$slots,"default",{option:a})])),_:2},1032,["modelValue","onUpdate:modelValue","options","is-slot-scope","onChange"])])),_:2},1032,["name","label"])))),128))])),_:1},512)],4)])),_:3},8,["modelValue","mask-closable","onHide","onShow"])};var ae=ee;ae.install=e=>{e.component(ae.name,ae)};var le=ae;var ne={name:"province",label:"请选择",options:[{value:"pk",label:"北京市",children:{name:"block",label:"请选择",options:[{value:"hd",label:"海淀区"},{value:"cp",label:"昌平区"},{value:"cy",label:"朝阳区"}]}},{value:"sc",label:"四川省",children:{name:"city",label:"请选择",options:[{value:"cd",label:"成都市",children:{name:"block",label:"请选择",options:[{value:"gx",label:"高新区"},{value:"qy",label:"青羊区"}]}},{value:"my",label:"绵阳市",children:{name:"block",label:"请选择",options:[{value:"jn",label:"金牛区"}]}},{value:"lz",label:"泸州市"},{value:"dy",label:"德阳市"},{value:"ms",label:"眉山市"},{value:"ls",label:"乐山市"},{value:"yb",label:"宜宾市"},{value:"ya",label:"雅安市"},{value:"zg",label:"自贡市"},{value:"pzh",label:"攀枝花市"},{value:"sn",label:"遂宁市"},{value:"nc",label:"南充市"},{value:"nj",label:"内江市"},{value:"dz",label:"达州市"},{value:"ga",label:"广安市"}]}}]};const te={class:"\n      md-example-child\n      md-example-child-tab-picker\n      md-example-child-tab-picker-0\n    "};var oe=d(i(r({},{name:"TabPickerDemo",title:"基本"}),{expose:[],setup(e){const a=p(!1),l=p([]);return(e,n)=>(y(),w("div",te,[S(M(U),{title:"地址"},{default:k((()=>[S(M($),{title:"联系地址",arrow:"arrow-right",placeholder:"请选择联系地址",solid:"",content:l.value.toString(),onClick:n[1]||(n[1]=e=>a.value=!a.value)},null,8,["content"])])),_:1}),S(M(le),{modelValue:l.value,"onUpdate:modelValue":n[2]||(n[2]=e=>l.value=e),visible:a.value,"onUpdate:visible":n[3]||(n[3]=e=>a.value=e),title:"请选择",describe:"请选择您所在的省份、城市、区县",data:M(ne)},null,8,["modelValue","visible","data"])]))}})),se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:oe});export{se as _};
