import{m as C}from"./elements.13db9b83.js";import{a as F,c as b}from"./components.9703deeb.js";import{d as N,P as w,q as x,r as E,C as P,o as R,c as U,i as a,Z as e,j as n,F as B,m as c,t as p}from"./vendor.2c1af365.js";import{R as z}from"./index.91eb3c50.js";import{S as D}from"./index.500789e4.js";import{B as g}from"./index.e6fbf5d6.js";import{A as h}from"./AppType.6d3af19d.js";import{d as j}from"./index.079ade67.js";import{w as $,g as A}from"./utils.5323a59a.js";import{u as L,a as v,_ as O,b as q,c as K}from"./en-US.6bd391a6.js";import"./index.591dca26.js";import"./elevation.d7d3ee97.js";import"./provide.0b8fbd3f.js";import"./index.f800f17a.js";import"./index.b5fc70e2.js";/* empty css               */import"./index.726d2ffd.js";const{n:Z}=b("style-provider"),l=N({name:"VarStyleProvider",props:{styleVars:{type:Object,default:()=>({})}},setup(o,{slots:r}){return()=>w("div",{class:Z(),style:C(o.styleVars)},F(r.default))}}),y=[];function u(o={}){y.forEach(t=>document.documentElement.style.removeProperty(t)),y.length=0;const r=C(o);Object.entries(r).forEach(([t,s])=>{document.documentElement.style.setProperty(t,s),y.push(t)})}u.Component=l;l.install=function(o){o.component(l.name,l)};u.install=function(o){o.component(l.name,l)};var G={componentCall:"\u7EC4\u4EF6\u8C03\u7528",functionCall:"\u51FD\u6570\u8C03\u7528",toggleTheme:"\u5207\u6362\u6837\u5F0F\u53D8\u91CF",toggleRootTheme:"\u5207\u6362\u6839\u8282\u70B9\u6837\u5F0F\u53D8\u91CF"},H={componentCall:"Component Call",functionCall:"Function Call",toggleTheme:"Toggle Theme",toggleRootTheme:"Toggle Root Theme"};const{add:_,use:I,pack:i,packs:de,merge:fe}=L(),J=o=>{K(o),I(o)};v("zh-CN",O);v("en-US",q);_("zh-CN",G);_("en-US",H);const ye={setup(o){const r=u.Component,t=x({score:5,license:!0}),s=E(null),T={"--rate-primary-color":"var(--color-success)","--button-primary-color":"var(--color-success)","--switch-handle-active-background":"var(--color-success)","--switch-track-active-background":"var(--color-success)"},V=()=>{s.value=s.value?null:T};let d=null;const k={"--color-primary":"#3f51b5"},S=()=>{d=d?null:k,u(d)};return $(J),P(()=>{u(A()==="darkThemes"?j:null)}),(M,m)=>(R(),U(B,null,[a(e(h),null,{default:n(()=>[c(p(e(i).componentCall),1)]),_:1}),a(e(r),{"style-vars":s.value},{default:n(()=>[a(e(z),{modelValue:e(t).score,"onUpdate:modelValue":m[0]||(m[0]=f=>e(t).score=f)},null,8,["modelValue"]),a(e(D),{modelValue:e(t).license,"onUpdate:modelValue":m[1]||(m[1]=f=>e(t).license=f)},null,8,["modelValue"]),a(e(g),{style:{"margin-top":"10px"},type:"primary",block:"",onClick:V},{default:n(()=>[c(p(e(i).toggleTheme),1)]),_:1})]),_:1},8,["style-vars"]),a(e(h),null,{default:n(()=>[c(p(e(i).functionCall),1)]),_:1}),a(e(g),{type:"primary",block:"",onClick:S},{default:n(()=>[c(p(e(i).toggleRootTheme),1)]),_:1})],64))}};export{ye as default};