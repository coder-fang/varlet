import{S as c}from"./index.54360e0e.js";import{e as _,f as d}from"./components.fc1d8498.js";import{T as u,a as f}from"./provide.bd3151a0.js";import{_ as l}from"./IconSfc.a60484c8.js";import{q as b,r as p,b as v,d as I,o as T,k as S,w as C,O as B,f as E,m as w}from"./vendor.bac705d4.js";function x(){const{parentProvider:e,bindParent:s}=_(u),{index:t}=d(f);if(!e||!s||!t)throw Error("<var-tab-item/> must in <var-tabs-items/>");return{index:t,tabsItems:e,bindTabsItems:s}}const P={name:{type:[String,Number]}};const j=b({name:"VarTabItem",components:{[c.name]:c},props:P,setup(e){const s=p(!1),t=p(!1),n=v(()=>e.name),{index:r,bindTabsItems:o}=x();return o({index:r,name:n,setCurrent:i=>{!t.value&&i&&(t.value=!0),s.value=i}}),{current:s,initSlot:t}}});function A(e,s,t,n,r,o){const m=I("var-swipe-item");return T(),S(m,{class:w(["var-tab-item",[!e.current&&"var-tab-item--inactive"]])},{default:C(()=>[e.initSlot?B(e.$slots,"default",{key:0}):E("v-if",!0)]),_:3},8,["class"])}var a=l(j,[["render",A]]);a.install=function(e){e.component(a.name,a)};export{a as T};