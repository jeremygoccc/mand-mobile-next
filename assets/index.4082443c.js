import{g as e,n as t,h as l,Z as i,a as d,c as a,f as s,d as n,t as o,i as r,F as f,_ as c,r as m,l as p,$ as u,a0 as y,a1 as h}from"./app.cbe59ff4.js";var v=e({name:"MdField",props:{title:{type:String,default:""},brief:{type:String,default:""},disabled:{type:Boolean,default:!1},plain:{type:Boolean,default:!1}},setup(){i("rootField",u())}}),g={key:0,class:"md-field_header"},b={class:"md-field_header_heading"},$={class:"md-field_header_action"},_={class:"md-field_content"},k={key:1,class:"md-field_footer"};v.render=function(e,t){return d(),a(f,null,[s(" 考虑换个标签 "),n("section",{class:["md-field",[{"md-field--is-plain":e.plain,"md-field--is-disabled":e.disabled}]]},[e.title||e.brief||e.$slots.header||e.$slots.action?(d(),a("header",g,[n("div",b,[e.title?(d(),a("legend",{key:0,class:"md-field_header_title",textContent:o(e.title)},null,8,["textContent"])):s("v-if",!0),e.brief?(d(),a("p",{key:1,class:"md-field_header_brief",textContent:o(e.brief)},null,8,["textContent"])):s("v-if",!0),r(e.$slots,"header")]),n("div",$,[r(e.$slots,"action")])])):s("v-if",!0),n("div",_,[r(e.$slots,"default")]),e.$slots.footer?(d(),a("footer",k,[r(e.$slots,"footer")])):s("v-if",!0)],2)],2112)};var x=v,C=e({name:"MdFieldItem",components:{MdIcon:t},props:{title:{type:String,default:""},placeholder:{type:String,default:""},content:{type:String,default:""},addon:{type:String,default:""},arrow:{type:[Boolean,String],default:!1},solid:{type:Boolean,default:!1},alignRight:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},highlight:{type:String,default:""},isPadding:{type:Boolean,default:!0},titlePosition:{type:String,default:"fixed"},customContentClass:{type:Array,default:()=>[]}},setup(e,t){const i=c("rootField",{});return{inputEnv:l((()=>y?"is-ios":h?"is-android":"is-browser")),currentDisabled:l((()=>i.disabled||e.disabled))}}}),S={class:"md-field-item-content"},w={key:1,class:"md-field-item-left"},B={class:"md-field-item-control"},F={key:2,class:"md-field-item-right"},M={key:0,class:"md-field-item-children"};C.render=function(e,t){const l=m("md-icon");return d(),a("div",{class:["md-field-item",[e.solid?"is-solid":"",e.currentDisabled?"is-disabled":"",e.alignRight?"is-align-right":"",e.inputEnv]]},[n("div",S,[e.title?(d(),a("label",{key:0,class:"md-field-item-title",textContent:o(e.title)},null,8,["textContent"])):s("v-if",!0),e.$slots.left?(d(),a("div",w,[r(e.$slots,"left")])):s("v-if",!0),n("div",B,[r(e.$slots,"default",{},(()=>[e.content?(d(),a(f,{key:0},[p(o(e.content),1)],2112)):e.placeholder?(d(),a("div",{key:1,class:"md-field-item-placeholder",textContent:o(e.placeholder)},null,8,["textContent"])):s("v-if",!0)]))]),e.arrow||e.addon||e.$slots.right?(d(),a("div",F,[r(e.$slots,"right",{},(()=>[p(o(e.addon),1)])),e.arrow?(d(),a(l,{key:0,name:!0===e.arrow?"arrow-right":e.arrow,size:"md"},null,8,["name"])):s("v-if",!0)])):s("v-if",!0)]),e.$slots.children?(d(),a("div",M,[r(e.$slots,"children")])):s("v-if",!0)],2)};var D=C;x.install=e=>{e.component(x.name,x),e.component(D.name,D)},D.install=e=>{e.component(D.name,D)};var E=D;export{E as f};
