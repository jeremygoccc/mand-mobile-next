import{g as e,U as l,h as t,s as a,V as n,o,r as d,X as s,a as u,c as r,y as i,d as c,F as p,j as f,l as m,t as y,f as v,i as b}from"./app.1ee411a5.js";import{n as x}from"./index.d75c9307.js";import{c as h}from"./index.90ddb7fb.js";var k={modelValue:{type:String,default:""},maxlength:{type:Number,default:4},autofocus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},justify:{type:Boolean,default:!1},mask:{type:Boolean,default:!1},system:{type:Boolean,default:!1},okText:{type:String},disorder:{type:Boolean,default:!1},isView:{type:Boolean,default:!1}};function g(e,l=100){if(e){const t=document.createElement("input");t.style.position="absolute",t.style.top=e.offsetTop+7+"px",t.style.left=e.offsetLeft+"px",t.style.height="0px",t.style.opacity="0",t.style.border="none",t.style.outline="none",document.body.appendChild(t),t.focus(),setTimeout((function(){var l,t;null==(l=null==e?void 0:e.focus)||l.call(e),null==(t=null==e?void 0:e.click)||t.call(e)}),l);return()=>{t&&(t.focus(),t.blur(),document.body.removeChild(t))}}}var H=e({name:"MdCodebox",components:{MdNumberKeyboard:x},directives:{clickOutside:h},props:k,emits:[l],setup(e,d){const{code:s,focused:u,focusHandler:r,blurHandler:i,inputHandler:c,nativeInputHandler:p,deleteHandler:f,numberKeyBoardRef:m,box:y,nativeInputRef:v}=((e,{emit:d})=>{const s=t({get:()=>e.modelValue,set:e=>d(l,e)}),u=a(!1),r=()=>{var l;u.value=!0,e.system&&(null==(l=f.value)||l.focus())},i=()=>{u.value=!1},c=a(null),p=t((()=>{var e,l;return null==(l=null==(e=c.value)?void 0:e.$refs.popup)?void 0:l.box})),f=a(null);return n((()=>{s.value.length>=e.maxlength&&i()})),o((()=>{e.autofocus&&r()})),{code:s,focused:u,focusHandler:r,blurHandler:i,inputHandler:l=>{s.value.length<e.maxlength&&(s.value+=`${l}`)},nativeInputHandler:l=>{l.target.value.length<=e.maxlength&&(s.value=l.target.value)},deleteHandler:()=>{s.value=`${s.value}`.slice(0,-1)},numberKeyBoardRef:c,box:p,nativeInputRef:f}})(e,d);return{code:s,focused:u,focusHandler:r,blurHandler:i,inputHandler:c,nativeInputHandler:p,deleteHandler:f,numberKeyBoard:m,box:y,input:v}}}),B={class:"md-codebox-wrapper"},I={key:0,class:"md-codebox-dot"},j={key:1,class:"md-codebox-blink"};H.render=function(e,l){const t=d("md-number-keyboard"),a=s("click-outside");return u(),r("div",B,[i(c("div",{class:["md-codebox",{"is-disabled":e.disabled,"is-justify":e.justify}],onClick:l[2]||(l[2]=(...l)=>e.focusHandler&&e.focusHandler(...l))},[e.maxlength>0?(u(!0),r(p,{key:0},f(e.maxlength,(l=>(u(),r("span",{key:l,class:["md-codebox-box",l===e.code.length+1&&e.focused&&"is-active",""!==e.code[l-1]&&"is-filled"]},[e.code[l-1]?(u(),r(p,{key:0},[e.mask?(u(),r("i",I)):(u(),r(p,{key:1},[m(y(e.code[l-1]),1)],2112))],2112)):v("v-if",!0),l===e.code.length+1&&e.focused?(u(),r("i",j)):v("v-if",!0)],2)))),128)):(u(),r(p,{key:1},[e.mask?(u(),r("input",{key:0,type:"password",maxlength:e.maxlength,value:e.code,readonly:"",disabled:"",class:["md-codebox-holder",e.focused&&"is-active"]},null,10,["maxlength","value"])):(u(),r("input",{key:1,type:"text",maxlength:e.maxlength,value:e.code,readonly:"",disabled:"",class:["md-codebox-holder",e.focused&&"is-active"]},null,10,["maxlength","value"]))],2112)),v(" hidden input "),e.system?(u(),r("input",{key:2,ref:"input",value:e.code,type:e.mask?"password":"text",maxlength:e.maxlength,class:"md-codebox-input",onInput:l[1]||(l[1]=(...l)=>e.nativeInputHandler&&e.nativeInputHandler(...l))},null,40,["value","type","maxlength"])):v("v-if",!0)],2),[[a,e.blurHandler,e.box]]),b(e.$slots,"default"),b(e.$slots,"keyboard",{focused:e.focused,refs:e.numberKeyBoard,inputHandler:e.inputHandler,deleteHandler:e.deleteHandler},(()=>[e.system?v("v-if",!0):(u(),r(t,{key:0,ref:"numberKeyBoard",visible:e.focused,"onUpdate:visible":l[3]||(l[3]=l=>e.focused=l),class:"fake-input-keyboard",type:"simple","ok-text":e.okText,disorder:e.disorder,"is-view":e.isView,onEnter:e.inputHandler,onDelete:e.deleteHandler},null,8,["visible","ok-text","disorder","is-view","onEnter","onDelete"]))]))])};var w=H;w.install=e=>{e.component(w.name,w)};var K=w;export{K as c,g as f};
