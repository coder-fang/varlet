import{S as u}from"./index.1eee7aa7.js";import{B as d}from"./index.73c1a0cc.js";import{A as f}from"./AppType.6775b756.js";import{w as k}from"./utils.3a4595f4.js";import{u as y,a as _,_ as v,b as S,c as h}from"./en-US.628e0d34.js";import{_ as x}from"./elevation.229458c1.js";import{e as p,o as b,c as C,i as t,j as e,a as l,Z as U,_ as g,m as s,t as c}from"./vendor.49f89f0d.js";import"./elements.92736b4e.js";import"./shared.506a394a.js";import"./index.f8492b74.js";import"./index.48ee5316.js";import"./index.9e43ebc8.js";import"./components.40fda177.js";var N={basicUsage:"\u57FA\u672C\u4F7F\u7528",localSticky:"\u5C40\u90E8\u5438\u9876"},B={basicUsage:"Basic Usage",localSticky:"Local Sticky"};const{add:m,use:V,pack:w,packs:aa,merge:ta}=y(),z=a=>{h(a),V(a)};_("zh-CN",v);_("en-US",S);m("zh-CN",N);m("en-US",B);const I={name:"StickyExample",components:{VarSticky:u,VarButton:d,AppType:f},setup(){return k(z),{pack:w}}},A=a=>(U("data-v-15a225b6"),a=a(),g(),a),E={class:"example"},F={class:"scroller"},L=A(()=>l("div",{class:"block"},null,-1));function T(a,$,j,o,D,Z){const r=p("app-type"),i=p("var-button"),n=p("var-sticky");return b(),C("div",E,[t(r,null,{default:e(()=>[s(c(o.pack.basicUsage),1)]),_:1}),t(n,{"offset-top":54},{default:e(()=>[t(i,{type:"primary"},{default:e(()=>[s(c(o.pack.basicUsage),1)]),_:1})]),_:1}),t(r,null,{default:e(()=>[s(c(o.pack.localSticky),1)]),_:1}),l("div",F,[t(n,null,{default:e(()=>[t(i,{type:"success"},{default:e(()=>[s(c(o.pack.localSticky),1)]),_:1})]),_:1}),L])])}var ea=x(I,[["render",T],["__scopeId","data-v-15a225b6"]]);export{ea as default};