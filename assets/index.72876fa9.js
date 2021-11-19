import{C as E}from"./index.dc84683d.js";import{R as y}from"./index.23ced9c1.js";import{q as N,r as P,b as r,y as T,d as w,e as V,w as g,o as v,c as B,a as m,m as b,n as f,k as I,J as j,f as D,B as $,l as K,t as L}from"./vendor.8a125dba.js";import{c as Y,e as U,b as z,f as A}from"./components.581beddd.js";import{_ as R}from"./elevation.548891b7.js";const C=Symbol("SELECT_BIND_OPTION_KEY"),h=Symbol("SELECT_COUNT_OPTION_KEY");function ee(){const{bindChildren:e,childProviders:o}=Y(C),{length:n}=U(h);return{length:n,options:o,bindOptions:e}}function W(){const{bindParent:e,parentProvider:o}=z(C),{index:n}=A(h);if(!e||!o)throw Error("<var-option/> must in <var-select/>");return{index:n,select:o,bindSelect:e}}const q={label:{},value:{}};const J=N({name:"VarOption",directives:{Ripple:y},components:{VarCheckbox:E},props:q,setup(e){const o=P(!1),n=r(()=>o.value),c=r(()=>e.label),d=r(()=>e.value),{select:u,bindSelect:l}=W(),{wrapWidth:s,multiple:t,focusColor:S,onSelect:p}=u,k=()=>{o.value=!o.value,p(a)},_=()=>p(a),a={label:c,value:d,selected:n,sync:O=>{o.value=O}};return T([()=>e.label,()=>e.value],()=>{if(e.label==null&&e.value==null)throw Error(`Props label and value can't both be undefined
`)},{immediate:!0}),l(a),{optionSelected:o,wrapWidth:s,multiple:t,focusColor:S,handleClick:k,handleSelect:_}}}),M={class:"var-option__text"};function x(e,o,n,c,d,u){const l=w("var-checkbox"),s=V("ripple");return g((v(),B("div",{class:b(["var-option var--box",[e.optionSelected?"var-option--selected-color":null]]),style:f({width:e.wrapWidth,color:e.optionSelected?e.focusColor:void 0}),onClick:o[2]||(o[2]=(...t)=>e.handleClick&&e.handleClick(...t))},[m("div",{class:b(["var-option__cover",[e.optionSelected?"var-option--selected-background":null]]),style:f({background:e.optionSelected?e.focusColor:void 0})},null,6),e.multiple?(v(),I(l,{key:0,ref:"checkbox","checked-color":e.focusColor,modelValue:e.optionSelected,"onUpdate:modelValue":o[0]||(o[0]=t=>e.optionSelected=t),onClick:o[1]||(o[1]=j(()=>{},["stop"])),onChange:e.handleSelect},null,8,["checked-color","modelValue","onChange"])):D("v-if",!0),m("div",M,[$(e.$slots,"default",{},()=>[K(L(e.label),1)])])],6)),[[s]])}var i=R(J,[["render",x]]);i.install=function(e){e.component(i.name,i)};export{i as O,ee as u};