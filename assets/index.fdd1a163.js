import{I as h}from"./index.93a7b5ad.js";import{B as r}from"./index.995aacb5.js";import{A}from"./index.d1d191b2.js";import{A as y}from"./AppType.14280320.js";import{S as j}from"./index.65fa0f7b.js";import{d as I}from"./index.5d153c96.js";import{u as N,a as F,_ as $,b as V,c as z}from"./en-US.307522bf.js";import{w as P,a as L}from"./utils.dea25200.js";import{I as T}from"./index.bd1a1c4d.js";import{_ as H}from"./elevation.46d11dfe.js";import{r as i,b as M,o as O,c as q,a as S,i as a,V as e,j as l,F as G,m as n,t as u}from"./vendor.4fe81855.js";import"./index.0a94affc.js";import"./provide.d242b901.js";import"./components.cd8ba2fd.js";import"./elements.579153f5.js";import"./index.ab05f7c4.js";import"./index.94704541.js";import"./lock.fc59b905.js";import"./index.afd38bc1.js";import"./zIndex.6b63131d.js";/* empty css               */import"./index.46338cdd.js";import"./index.f32c995c.js";var J={functionCall:"\u51FD\u6570\u8C03\u7528",componentCall:"\u7EC4\u4EF6\u8C03\u7528",preview:"\u57FA\u672C\u4F7F\u7528",callBack:"\u5904\u7406\u56DE\u8C03\u51FD\u6570",basicUse:"\u57FA\u672C\u4F7F\u7528",specifyInitialPosition:"\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E",displayCloseButton:"\u5C55\u793A\u5173\u95ED\u6309\u94AE",listenCloseEvents:"\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6",shutdownEvent:"\u89E6\u53D1\u4E86\u5173\u95ED\u4E8B\u4EF6\u3002",showExtraSlots:"\u5C55\u793A\u989D\u5916\u63D2\u69FD",operate:"\u64CD\u4F5C"},K={functionCall:"Function Call",componentCall:"Component Call",preview:"Basic use",callBack:"Handle callback function",basicUse:"Basic use",specifyInitialPosition:"Specify initial position",displayCloseButton:"Display the close button",listenCloseEvents:"Listen for close event",shutdownEvent:"The shutdown event was triggered.",showExtraSlots:"Show extra slots",operate:"Operate"};const{add:b,use:Q,pack:s,packs:ye,merge:Se}=N(),R=m=>{z(m),Q(m)};F("zh-CN",$);F("en-US",V);b("zh-CN",J);b("en-US",K);const W={class:"image-preview-demo"},X={class:"image-preview-demo"},Y={setup(m){const p=h.Component,B=A.Component,c=i(!1),w=i(!1),d=i(!1),C=i(!1),f=i(!1),g=i(!1),v=i(["https://varlet-varletjs.vercel.app/cat.jpg","https://varlet-varletjs.vercel.app/cat2.jpg"]),k=i(["https://varlet-varletjs.vercel.app/cat.jpg"]),D=M(()=>[{name:s.value.operate,icon:"wrench"},{name:s.value.operate,icon:"wrench"}]),x=()=>{j({content:s.value.shutdownEvent,duration:1e3})},U=()=>{h(k.value)},_=()=>{h({images:v,onChange:E=>{console.log("index",E)}})};return P(R),L(I),(E,t)=>(O(),q(G,null,[S("div",W,[a(e(y),null,{default:l(()=>[n(u(e(s).functionCall),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:U},{default:l(()=>[n(u(e(s).preview),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:_},{default:l(()=>[n(u(e(s).callBack),1)]),_:1})]),S("div",X,[a(e(y),null,{default:l(()=>[n(u(e(s).componentCall),1)]),_:1}),a(e(r),{type:"warning",block:"",onClick:t[0]||(t[0]=o=>c.value=!0)},{default:l(()=>[n(u(e(s).basicUse),1)]),_:1}),a(e(p),{images:k.value,show:c.value,"onUpdate:show":t[1]||(t[1]=o=>c.value=o)},null,8,["images","show"]),a(e(r),{type:"warning",block:"",onClick:t[2]||(t[2]=o=>w.value=!0)},{default:l(()=>[n(u(e(s).specifyInitialPosition),1)]),_:1}),a(e(p),{images:v.value,show:w.value,"onUpdate:show":t[3]||(t[3]=o=>w.value=o),current:"https://varlet-varletjs.vercel.app/cat2.jpg"},null,8,["images","show"]),a(e(r),{type:"warning",block:"",onClick:t[4]||(t[4]=o=>d.value=!0)},{default:l(()=>[n(u(e(s).displayCloseButton),1)]),_:1}),a(e(p),{images:v.value,show:d.value,"onUpdate:show":t[5]||(t[5]=o=>d.value=o),closeable:!0},null,8,["images","show"]),a(e(r),{type:"warning",block:"",onClick:t[6]||(t[6]=o=>C.value=!0)},{default:l(()=>[n(u(e(s).listenCloseEvents),1)]),_:1}),a(e(p),{images:v.value,show:C.value,"onUpdate:show":t[7]||(t[7]=o=>C.value=o),onClose:x},null,8,["images","show"]),a(e(r),{type:"warning",block:"",onClick:t[8]||(t[8]=o=>f.value=!0)},{default:l(()=>[n(u(e(s).showExtraSlots),1)]),_:1}),a(e(p),{images:v.value,show:f.value,"onUpdate:show":t[11]||(t[11]=o=>f.value=o)},{extra:l(()=>[a(e(T),{name:"menu",size:22,color:"#fff",onClick:t[9]||(t[9]=o=>g.value=!0)}),a(e(B),{actions:e(D),show:g.value,"onUpdate:show":t[10]||(t[10]=o=>g.value=o)},null,8,["actions","show"])]),_:1},8,["images","show"])])],64))}};var Fe=H(Y,[["__scopeId","data-v-3dc8e146"]]);export{Fe as default};