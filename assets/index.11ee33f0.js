import{S as p}from"./index.dd35f607.js";import{a as _,f as d}from"./components.b90d3f87.js";import{T as f,a as u}from"./provide.930a1c9f.js";import{_ as v}from"./elevation.7f6c0241.js";import{q as l,r as c,b,d as I,o as T,k as S,w as B,B as C,f as w,m as E}from"./vendor.ea41cd30.js";function x(){const{parentProvider:e,bindParent:a}=_(f),{index:t}=d(u);if(!e||!a||!t)throw Error("<var-tab-item/> must in <var-tabs-items/>");return{index:t,tabsItems:e,bindTabsItems:a}}const P={name:{type:[String,Number]}};const j=l({name:"VarTabItem",components:{VarSwipeItem:p},props:P,setup(e){const a=c(!1),t=c(!1),r=b(()=>e.name),{index:n,bindTabsItems:o}=x();return o({index:n,name:r,setCurrent:m=>{!t.value&&m&&(t.value=!0),a.value=m}}),{current:a,initSlot:t}}});function A(e,a,t,r,n,o){const i=I("var-swipe-item");return T(),S(i,{class:E(["var-tab-item",[!e.current&&"var-tab-item--inactive"]]),"var-tab-item-cover":""},{default:B(()=>[e.initSlot?C(e.$slots,"default",{key:0}):w("v-if",!0)]),_:3},8,["class"])}var s=v(j,[["render",A]]);s.install=function(e){e.component(s.name,s)};export{s as T};