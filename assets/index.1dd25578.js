import{I as m}from"./index.09de2100.js";import{B as E}from"./index.922fa206.js";import{A as j}from"./AppType.78e3bbda.js";import{S as y}from"./index.eca52ccb.js";import{u as F,a as g,_ as S,b as B,c as U}from"./en-US.f8762106.js";import{w as D,b as $}from"./utils.5a4067e3.js";import{c as d}from"./index.45528475.js";import{_ as I}from"./elevation.6f443b25.js";import{d as A,C as N,r,e as c,o as P,c as z,a as h,i as s,j as a,F as T,m as t,t as i}from"./vendor.efca09d3.js";import"./index.2125dc0b.js";import"./provide.39a29931.js";import"./components.2dc8f096.js";import"./shared.17f26706.js";import"./elements.be10beab.js";import"./index.7d462926.js";import"./index.821d0c0d.js";import"./index.5544a1c5.js";import"./lock.363e6814.js";import"./zIndex.2548bfbd.js";import"./index.b50b8baf.js";import"./index.a7398902.js";var V={functionCall:"\u51FD\u6570\u8C03\u7528",componentCall:"\u7EC4\u4EF6\u8C03\u7528",preview:"\u57FA\u672C\u4F7F\u7528",callBack:"\u5904\u7406\u56DE\u8C03\u51FD\u6570",basicUse:"\u57FA\u672C\u4F7F\u7528",specifyInitialPosition:"\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E",displayCloseButton:"\u5C55\u793A\u5173\u95ED\u6309\u94AE",listenCloseEvents:"\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6",shutdownEvent:"\u89E6\u53D1\u4E86\u5173\u95ED\u4E8B\u4EF6\u3002"},L={functionCall:"Function Call",componentCall:"Component Call",preview:"Basic use",callBack:"Handle callback function",basicUse:"Basic use",specifyInitialPosition:"Specify initial position",displayCloseButton:"Display the close button",listenCloseEvents:"Listen for close event",shutdownEvent:"The shutdown event was triggered."};const{add:b,use:_,pack:k,packs:de,merge:ce}=F(),H=e=>{U(e),_(e)};g("zh-CN",S);g("en-US",B);b("zh-CN",V);b("en-US",L);const q=A({name:"ImagePreviewExample",components:{VarImagePreview:m.Component,VarButton:E,AppType:j},setup(){const e=["https://varlet.gitee.io/varlet-ui/cat.jpg","https://varlet.gitee.io/varlet-ui/cat2.jpg"],o=["https://varlet.gitee.io/varlet-ui/cat.jpg"],v=()=>{y({content:k.value.shutdownEvent,duration:1e3})},w=()=>{m({images:e,onChange:u=>{console.log("index",u)}})};D(H);const C=d.touchmoveForbid;return $(u=>{u==="pc"&&(d.touchmoveForbid=!1)}),N(()=>{d.touchmoveForbid=C}),{preview(){m(o)},previewCallback:w,pack:k,show:r(!1),currentShow:r(!1),closeShow:r(!1),closeEventShow:r(!1),images:r(e),image:r(o),handleCloseEvent:v}}}),G={class:"image-preview-demo"},J={class:"image-preview-demo"};function K(e,o,v,w,C,u){const f=c("app-type"),l=c("var-button"),p=c("var-image-preview");return P(),z(T,null,[h("div",G,[s(f,null,{default:a(()=>[t(i(e.pack.functionCall),1)]),_:1}),s(l,{type:"primary",block:"",onClick:e.preview},{default:a(()=>[t(i(e.pack.preview),1)]),_:1},8,["onClick"]),s(l,{type:"primary",block:"",onClick:e.previewCallback},{default:a(()=>[t(i(e.pack.callBack),1)]),_:1},8,["onClick"])]),h("div",J,[s(f,null,{default:a(()=>[t(i(e.pack.componentCall),1)]),_:1}),s(l,{type:"warning",block:"",onClick:o[0]||(o[0]=n=>e.show=!0)},{default:a(()=>[t(i(e.pack.basicUse),1)]),_:1}),s(p,{images:e.image,show:e.show,"onUpdate:show":o[1]||(o[1]=n=>e.show=n)},null,8,["images","show"]),s(l,{type:"warning",block:"",onClick:o[2]||(o[2]=n=>e.currentShow=!0)},{default:a(()=>[t(i(e.pack.specifyInitialPosition),1)]),_:1}),s(p,{images:e.images,show:e.currentShow,"onUpdate:show":o[3]||(o[3]=n=>e.currentShow=n),current:"https://varlet.gitee.io/varlet-ui/cat2.jpg"},null,8,["images","show"]),s(l,{type:"warning",block:"",onClick:o[4]||(o[4]=n=>e.closeShow=!0)},{default:a(()=>[t(i(e.pack.displayCloseButton),1)]),_:1}),s(p,{images:e.images,show:e.closeShow,"onUpdate:show":o[5]||(o[5]=n=>e.closeShow=n),closeable:!0},null,8,["images","show"]),s(l,{type:"warning",block:"",onClick:o[6]||(o[6]=n=>e.closeEventShow=!0)},{default:a(()=>[t(i(e.pack.listenCloseEvents),1)]),_:1}),s(p,{images:e.images,show:e.closeEventShow,"onUpdate:show":o[7]||(o[7]=n=>e.closeEventShow=n),onClose:e.handleCloseEvent},null,8,["images","show","onClose"])])],64)}var ve=I(q,[["render",K],["__scopeId","data-v-70a9600b"]]);export{ve as default};