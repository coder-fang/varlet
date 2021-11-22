import{A as U}from"./AppType.7d5457e5.js";import{d as w,i as V,c as z}from"./shared.61f3a471.js";import{e as x}from"./elements.6bb3d81f.js";import"./index.23ced9c1.js";import{q as D,h as t,H as E,d as B,o as T,c as I,i as e,F as L,l as n,t as d}from"./vendor.8a125dba.js";import{B as P}from"./index.74de91de.js";import{c as g}from"./index.789f7251.js";import{d as q}from"./index.77fe3760.js";import{u as H,a as $,_ as M,b as R,c as W}from"./en-US.51e06fb5.js";import{w as G,a as J,b as K}from"./utils.efdc8a96.js";import{_ as O}from"./elevation.8f12812c.js";import"./index.31c5b564.js";import"./components.33246c91.js";const A=o=>["mini","small","normal","large"].includes(o),Q=o=>A(o)||w(o)||V(o)||z(o),X=o=>["start","end","center","space-around","space-between"].includes(o),Y={align:{type:String},size:{type:[String,Number,Array],default:"normal",validator:Q},wrap:{type:Boolean,default:!0},direction:{type:String,default:"row"},justify:{type:String,default:"start",validator:X},inline:{type:Boolean,default:!1}};const Z={mini:[4,4],small:[6,6],normal:[8,12],large:[12,20]};var m=D({name:"VarSpace",props:Y,setup(o,{slots:p}){const v=(l,r)=>r?Z[l]:w(l)?l.map(x):[x(l),x(l)];return()=>{var j,S;const{inline:l,justify:r,align:b,wrap:i,direction:a,size:u}=o,y=(S=(j=p.default)==null?void 0:j.call(p))!=null?S:[],h=y.length-1,k=A(u),[s,_]=v(u,k),C=y.map((N,f)=>{let c="0";return a==="row"&&(r==="start"||r==="center"||r==="end"?f!==h?c=`${s/2}px ${_}px ${s/2}px 0`:c=`${s/2}px 0`:r==="space-around"?c=`${s/2}px ${_/2}px`:r==="space-between"&&(f===0?c=`${s/2}px ${_/2}px ${s/2}px 0`:f===h?c=`${s/2}px 0 ${s/2}px ${_/2}px`:c=`${s/2}px ${_/2}px`)),a==="column"&&f!==h&&(c=`0 0 ${s}px 0`),t("div",{style:{margin:c}},[N])});return t("div",{class:["var-space","var--box",l?"var-space--inline":null],style:{flexDirection:a,justifyContent:r,alignItems:b,flexWrap:i?"wrap":"nowrap",margin:a==="row"?`-${s/2}px 0`:void 0}},[C])}}});m.install=function(o){o.component(m.name,m)};var tt={baseUse:"\u57FA\u672C\u7528\u6CD5",vertical:"\u5782\u76F4",space:"\u95F4\u9699",rightAlign:"\u9760\u53F3",around:"\u73AF\u7ED5",center:"\u5C45\u4E2D",between:"\u4E24\u7AEF\u5BF9\u9F50"},et={baseUse:"Basic use",vertical:"Vertical",space:"Space Size",rightAlign:"Right Align",around:"Space Around",center:"Align Center",between:"Space Between"};const{add:F,use:nt,pack:at,packs:Pt,merge:qt}=H(),ot=o=>{W(o),nt(o)};$("zh-CN",M);$("en-US",R);F("zh-CN",tt);F("en-US",et);const lt={components:{VarSpace:m,VarButton:P,AppType:U},setup(){G(ot),J(q);const o=g.touchmoveForbid;return K(p=>{p==="pc"&&(g.touchmoveForbid=!1)}),E(()=>{g.touchmoveForbid=o}),{pack:at}}},st=n("Button1"),ut=n("Button2"),rt=n("Button3"),it=n("Button1"),ct=n("Button2"),dt=n("Button3"),pt=n("Button1"),_t=n("Button2"),ft=n("Button3"),mt=n("Button4"),ht=n("Button5"),xt=n("Button6"),Bt=n("Button1"),gt=n("Button2"),vt=n("Button1"),bt=n("Button2"),yt=n("Button1"),jt=n("Button2"),St=n("Button1"),wt=n("Button2");function $t(o,p,v,l,r,b){const i=B("app-type"),a=B("var-button"),u=B("var-space");return T(),I(L,null,[t(i,null,{default:e(()=>[n(d(l.pack.baseUse),1)]),_:1}),t(u,null,{default:e(()=>[t(a,null,{default:e(()=>[st]),_:1}),t(a,null,{default:e(()=>[ut]),_:1}),t(a,null,{default:e(()=>[rt]),_:1})]),_:1}),t(i,null,{default:e(()=>[n(d(l.pack.vertical),1)]),_:1}),t(u,{direction:"column",size:"large"},{default:e(()=>[t(a,null,{default:e(()=>[it]),_:1}),t(a,null,{default:e(()=>[ct]),_:1}),t(a,null,{default:e(()=>[dt]),_:1})]),_:1}),t(i,null,{default:e(()=>[n(d(l.pack.space),1)]),_:1}),t(u,{size:[20,20]},{default:e(()=>[t(a,null,{default:e(()=>[pt]),_:1}),t(a,null,{default:e(()=>[_t]),_:1}),t(a,null,{default:e(()=>[ft]),_:1}),t(a,null,{default:e(()=>[mt]),_:1}),t(a,null,{default:e(()=>[ht]),_:1}),t(a,null,{default:e(()=>[xt]),_:1})]),_:1}),t(i,null,{default:e(()=>[n(d(l.pack.rightAlign),1)]),_:1}),t(u,{justify:"end"},{default:e(()=>[t(a,null,{default:e(()=>[Bt]),_:1}),t(a,null,{default:e(()=>[gt]),_:1})]),_:1}),t(i,null,{default:e(()=>[n(d(l.pack.around),1)]),_:1}),t(u,{justify:"space-around"},{default:e(()=>[t(a,null,{default:e(()=>[vt]),_:1}),t(a,null,{default:e(()=>[bt]),_:1})]),_:1}),t(i,null,{default:e(()=>[n(d(l.pack.center),1)]),_:1}),t(u,{justify:"center"},{default:e(()=>[t(a,null,{default:e(()=>[yt]),_:1}),t(a,null,{default:e(()=>[jt]),_:1})]),_:1}),t(i,null,{default:e(()=>[n(d(l.pack.between),1)]),_:1}),t(u,{justify:"space-between"},{default:e(()=>[t(a,null,{default:e(()=>[St]),_:1}),t(a,null,{default:e(()=>[wt]),_:1})]),_:1})],64)}var Ht=O(lt,[["render",$t]]);export{Ht as default};