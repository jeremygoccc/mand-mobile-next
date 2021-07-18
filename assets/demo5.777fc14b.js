var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,r=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,d=(e,t)=>{for(var l in t||(t={}))n.call(t,l)&&r(e,l,t[l]);if(a)for(var l of a(t))u.call(t,l)&&r(e,l,t[l]);return e},o=(e,a)=>t(e,l(a));import{g as s,s as p,h as i,au as m,U as c,x as v,o as f,I as b,a as x,c as g,d as _,k as h,e as y}from"./app.1ee411a5.js";import{f as S}from"./index.685ca15d.js";import{f as M}from"./index.3377d9ab.js";var O={defaultValue:{type:[Number,String],default:0},modelValue:{type:[Number,String],default:0},step:{type:[Number,String],default:1},min:{type:[Number,String],default:-Number.MAX_VALUE},max:{type:[Number,String],default:Number.MAX_VALUE},disabled:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},isInteger:{type:Boolean,default:!1}};function V(e){try{return e.toString().split(".")[1].length}catch(t){return 0}}var j=(e,{emit:t})=>{const l=p(!1),a=p(!1),n=p(!1),u=p(0),r=i((()=>{if(!e.modelValue)return 2;const t=e.modelValue.toString().length;return t>2?t:2})),d=()=>{n.value=!1,u.value=g(u.value)},o=t=>(t=String(t).replace(/[^0-9.-]|^\./g,""),"NaN"===String(m(t))&&(t=""),""===t?0:e.isInteger?Math.floor(+t):+t),s=()=>{l.value=u.value<=e.min,a.value=u.value>=e.max},x=()=>(e.min,e.max,e.max>e.min),g=t=>Math.max(Math.min(+e.max,o(t)),+e.min);return v((()=>e.defaultValue),(e=>{u.value=g(+e)})),v((()=>e.modelValue),(e=>{n.value||(u.value=g(+e))})),v((()=>e.min),(e=>{u.value<+e&&(u.value=+e),s()})),v((()=>e.max),(e=>{u.value>+e&&(u.value=+e),s()})),v(u,((l,a=0)=>{s(),l!=+e.modelValue&&(t(c,l),t(b,l));const n=l-a;n>0?t("increase",n):n<0&&t("decrease",Math.abs(n))}),{immediate:!0}),f((()=>{var t;x();const l=null!=(t=e.modelValue)?t:e.defaultValue;u.value=g(+l),s()})),{isMin:l,isMax:a,isEditing:n,currentNum:u,contentLength:r,add:()=>{e.disabled||a.value||(u.value=function(e,t){const l=V(e),a=V(t),n=Math.pow(10,Math.max(l,a));return+(e*n+t*n)/n}(u.value,+e.step),d())},onChange:d,reduce:()=>{e.disabled||l.value||(u.value=function(e,t){const l=V(e),a=V(t),n=Math.pow(10,Math.max(l,a));return+((e*n-t*n)/n).toFixed(l>=a?l:a)}(u.value,+e.step),d())},formatNum:o,getCurrentNum:g,checkStatus:s,checkMinMax:x,onInput:e=>{const{value:l}=e.target,a=o(l);u.value=a,+l!==a&&(e.target.value=""+a),t(c,a)},onFocus:()=>{n.value=!0}}},N=s({name:"MdStepper",props:O,emits:[c,b,"increase","decrease"],setup:(e,t)=>d({},j(e,t))}),z={class:"md-stepper-number"};N.render=function(e,t){return x(),g("div",{class:["md-stepper",{disabled:e.disabled}]},[_("div",{class:["md-stepper-button md-stepper-button-reduce",{disabled:e.isMin}],onClick:t[1]||(t[1]=(...t)=>e.reduce&&e.reduce(...t))},null,2),_("div",z,[_("input",{type:"tel",size:e.contentLength,readOnly:e.readOnly,disabled:e.disabled,value:e.currentNum,onInput:t[2]||(t[2]=(...t)=>e.onInput&&e.onInput(...t)),onFocus:t[3]||(t[3]=(...t)=>e.onFocus&&e.onFocus(...t)),onBlur:t[4]||(t[4]=(...t)=>e.onChange&&e.onChange(...t))},null,40,["size","readOnly","disabled","value"])]),_("div",{class:["md-stepper-button md-stepper-button-add",{disabled:e.isMax}],onClick:t[5]||(t[5]=(...t)=>e.add&&e.add(...t))},null,2)],2)};var I=N;I.install=e=>{e.component(I.name,I)};var D=I;const w={class:"\n      md-example-child\n      md-example-child-stepper\n      md-example-child-stepper-0\n    "};var C=s(o(d({},{name:"StepperDemo",title:"禁用"}),{expose:[],setup:e=>(e,t)=>(x(),g("div",w,[_(y(S),null,{default:h((()=>[_(y(M),{title:"禁用"},{default:h((()=>[_(y(D),{disabled:""})])),_:1})])),_:1})]))})),T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C});const k={class:"\n      md-example-child\n      md-example-child-stepper\n      md-example-child-stepper-0\n    "};var F=s(o(d({},{name:"StepperDemo",title:"ReadOnly"}),{expose:[],setup:e=>(e,t)=>(x(),g("div",k,[_(y(S),null,{default:h((()=>[_(y(M),{title:"只读"},{default:h((()=>[_(y(D),{"read-only":""})])),_:1})])),_:1})]))})),P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});const U={class:"\n      md-example-child\n      md-example-child-stepper\n      md-example-child-stepper-0\n    "};var A=s(o(d({},{name:"StepperDemo",title:"最小最大"}),{expose:[],setup(e){const t=p(0);return(e,l)=>(x(),g("div",U,[_(y(S),null,{default:h((()=>[_(y(M),{title:"最小值-12，最大值18"},{default:h((()=>[_(y(D),{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=e=>t.value=e),min:"-12",max:"18"},null,8,["modelValue"])])),_:1})])),_:1})]))}})),B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A});const E={class:"\n      md-example-child\n      md-example-child-stepper\n      md-example-child-stepper-0\n    "};var L=s(o(d({},{name:"StepperDemo",title:"输入整数"}),{expose:[],setup(e){const t=p(0);return(e,l)=>(x(),g("div",E,[_(y(S),null,{default:h((()=>[_(y(M),{title:"步进2, 只允许输入整数"},{default:h((()=>[_(y(D),{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=e=>t.value=e),step:2,min:2,"is-integer":""},null,8,["modelValue"])])),_:1})])),_:1})]))}})),X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:L});const R={class:"\n      md-example-child\n      md-example-child-stepper\n      md-example-child-stepper-0\n    "};var q=s(o(d({},{name:"StepperDemo",title:"最小值"}),{expose:[],setup:e=>(e,t)=>(x(),g("div",R,[_(y(S),null,{default:h((()=>[_(y(M),{title:"最小值4大于默认值"},{default:h((()=>[_(y(D),{min:4})])),_:1})])),_:1})]))})),G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});const H={class:"\n      md-example-child\n      md-example-child-stepper\n      md-example-child-stepper-0\n    "};var J=s(o(d({},{name:"StepperDemo",title:"step为小数"}),{expose:[],setup:e=>(e,t)=>(x(),g("div",H,[_(y(S),null,{default:h((()=>[_(y(M),{title:"step为小数1.3"},{default:h((()=>[_(y(D),{step:1.3},null,8,["step"])])),_:1})])),_:1})]))})),K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:J});export{T as _,P as a,B as b,X as c,G as d,K as e};
