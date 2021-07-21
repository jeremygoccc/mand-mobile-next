import{D as e}from"./index.472c0f11.js";import{_ as t}from"./index.ab71b8e6.js";import{t as o}from"./index.0698aebd.js";import{u as n}from"./show.9662b872.js";import"./animate.43d2fd98.js";import{b as a,H as s,S as d,h as l}from"./constants.3b37bb64.js";import{m as c,O as r,D as u,B as i,d as p,r as m,o as h,c as f,w as x,f as b,t as w,l as g,n as v,i as y,g as S}from"./vendor.ac61ab51.js";const C={title:{type:String},brief:{type:String,default:""},content:{type:String,default:""},visible:{type:Boolean,default:!1},maxlength:{type:Number,default:4},mask:{type:Boolean,default:!1},system:{type:Boolean,default:!1},autoSend:{type:Boolean,default:!0},autoCountdown:{type:Boolean,default:!0},count:{type:Number,default:60},countNormalText:{type:String,default:o("md.captcha.sendCaptcha")},countActiveText:{type:String,default:o("md.captcha.countdown")},isView:{type:Boolean,default:!1}},H=(e,{emit:t})=>{const{popupShow:o,onShow:a,onHide:s,hide:d}=n(e,t),p=c(null),m=c("");r((()=>{m.value.length===e.maxlength&&t(l,m.value)}));const h=c(!1),f=c("");let x,b=e.count;const w=()=>{b&&(h.value=!0,f.value=e.countActiveText.replace("{$1}",`${b}`),x=globalThis.setInterval((()=>{b<=1?g():(b-=1,f.value=e.countActiveText.replace("{$1}",`${b}`))}),1e3))},g=()=>{h.value=!1,f.value=e.countNormalText,clearInterval(x)},v=c(""),y=()=>{e.autoSend&&(t("send",w),e.autoCountdown&&w())},S=i(o,(e=>{e&&y(),S()}));return{popupShow:o,onShow:()=>{p.value.focusHandler(),a()},onHide:()=>{m.value="",s()},hide:d,code:m,errorMsg:v,countBtnText:f,isCounting:h,codeboxRef:p,countdown:w,setError:e=>{u((()=>{v.value=e}))},sendHandler:y}};var B=p({name:"MdCaptcha",components:{MdDialog:e,MdCodebox:t},props:C,emits:[a,s,d,l,"send"],setup(e,t){const{popupShow:o,onShow:n,onHide:a,code:s,errorMsg:d,countBtnText:l,isCounting:c,codeboxRef:r,countdown:u,setError:i,sendHandler:p}=H(e,t);return{popupShow:o,onShow:n,onHide:a,code:s,errorMsg:d,countBtnText:l,isCounting:c,codebox:r,countdown:u,setError:i,sendHandler:p}}});const T={class:"md-captcha-content"},k={class:"md-captcha-message"},M={class:"md-captcha-footer"};B.render=function(e,t,o,n,a,s){const d=m("md-codebox");return h(),f(y(e.isView?"div":"MdDialog"),{modelValue:e.popupShow,"onUpdate:modelValue":t[3]||(t[3]=t=>e.popupShow=t),class:"md-captcha",onShow:e.onShow,onHide:e.onHide},{default:x((()=>[b("div",T,[e.title?(h(),f("p",{key:0,class:"md-captcha-title",textContent:w(e.title)},null,8,["textContent"])):g("",!0),b("div",k,[v(e.$slots,"default",{},(()=>[S(w(e.content),1)]))])]),b(d,{ref:"codebox",modelValue:e.code,"onUpdate:modelValue":t[2]||(t[2]=t=>e.code=t),maxlength:e.maxlength,system:e.system,mask:e.mask,justify:!0,"is-view":e.isView},{default:x((()=>[b("footer",M,[e.errorMsg?(h(),f("div",{key:0,class:"md-captcha-error",textContent:w(e.errorMsg)},null,8,["textContent"])):(h(),f("div",{key:1,class:"md-captcha-brief",textContent:w(e.brief)},null,8,["textContent"])),e.count?(h(),f("button",{key:2,class:"md-captcha-btn",disabled:e.isCounting,onClick:t[1]||(t[1]=(...t)=>e.sendHandler&&e.sendHandler(...t)),textContent:w(e.countBtnText||e.countNormalText)},null,8,["disabled","textContent"])):g("",!0)])])),_:1},8,["modelValue","maxlength","system","mask","is-view"])])),_:3},8,["modelValue","onShow","onHide"])},B.install=e=>{e.component(B.name,B)};export{B as _};
