import{d as i,o as s,l as m,j as l,c as _,a,t as o,h as d,T as c}from"./vendor.49f89f0d.js";import{_ as f}from"./elevation.229458c1.js";import{h as p,j as u}from"./components.57927f97.js";const h={errorMessage:{type:String,default:""},maxlengthText:{type:String,default:""}};const v=i({name:"VarFormDetails",props:h}),g={key:0,class:"var-form-details"},F={class:"var-form-details__message"},M={class:"var-form-details__length"};function x(e,t,y,I,T,B){return s(),m(c,{name:"var-form-details"},{default:l(()=>[e.errorMessage||e.maxlengthText?(s(),_("div",g,[a("div",F,o(e.errorMessage),1),a("div",M,o(e.maxlengthText),1)])):d("v-if",!0)]),_:1})}var r=f(v,[["render",x]]);r.install=function(e){e.component(r.name,r)};const n=Symbol("FORM_BIND_FORM_ITEM_KEY");function E(){const{bindParent:e,parentProvider:t}=p(n);return{bindForm:e,form:t}}function k(){const{bindChildren:e,childProviders:t}=u(n);return{formItems:t,bindFormItems:e}}export{r as F,k as a,E as u};