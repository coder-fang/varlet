import{S as Q}from"./index.70b5989a.js";import{q as j,r as c,b as x,T as W,o as _,k as P,i as b,a as L,B as V,A as Z,I as ee,l as T,t as f,y as ne,x as M,S as te,c as y,F as R,j as U,m as ae,n as $,z as oe,d as D,h as w}from"./vendor.8a125dba.js";import{c as se,e as re,b as le,f as ie}from"./components.581beddd.js";import{_ as z}from"./elevation.7a86b580.js";import{t as X,h as ce,g as de}from"./shared.cba5a5a3.js";import{h as ue,b as fe,s as ve,n as _e,r as me}from"./elements.524bf92a.js";import{C as he}from"./index.76c31e1f.js";import{u as pe,a as F,_ as xe,b as be,c as ye}from"./en-US.51e06fb5.js";import{w as Ce,a as ke}from"./utils.faa57f31.js";import"./index.7c2ed277.js";const H=Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"),Y=Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");function ge(){const{bindChildren:e,childProviders:r}=se(H),{length:a}=re(Y);return{length:a,indexAnchors:r,bindIndexAnchors:e}}function Ie(){const{parentProvider:e,bindParent:r}=le(H),{index:a}=ie(Y);if(!e||!r)throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');return{index:a,indexBar:e,bindIndexBar:r}}const Te={index:{type:[Number,String]}};const Be=j({name:"VarIndexAnchor",components:{VarSticky:Q},inheritAttrs:!1,props:Te,setup(e){const{index:r,indexBar:a,bindIndexBar:s}=Ie(),t=c(0),d=c(!1),o=x(()=>e.index),l=c(null),{active:m,sticky:i,cssMode:E,stickyOffsetTop:N,zIndex:C}=a;return s({index:r,name:o,ownTop:t,setOwnTop:()=>{!l.value||(t.value=l.value.$el?l.value.$el.offsetTop:l.value.offsetTop)},setDisabled:k=>{d.value=k}}),{name:o,anchorEl:l,active:m,sticky:i,zIndex:C,disabled:d,cssMode:E,stickyOffsetTop:N,Transition:W}}});function Ee(e,r,a,s,t,d){return _(),P(ee(e.sticky?"var-sticky":e.Transition),{"offset-top":e.sticky?e.stickyOffsetTop:null,"z-index":e.sticky?e.zIndex:null,disabled:e.disabled&&!e.cssMode,"css-mode":e.cssMode,ref:"anchorEl"},{default:b(()=>[L("div",Z({class:"var-index-anchor"},e.$attrs),[V(e.$slots,"default",{},()=>[T(f(e.name),1)])],16)]),_:3},8,["offset-top","z-index","disabled","css-mode"])}var Ne=z(Be,[["render",Ee]]);const Ae={sticky:{type:Boolean,default:!0},stickyOffsetTop:{type:Number,default:0},cssMode:{type:Boolean,default:!1},hideList:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:1},highlightColor:{type:String},duration:{type:[Number,String],default:0},onClick:{type:Function},onChange:{type:Function}};const Se=j({name:"VarIndexBar",props:Ae,setup(e){const{length:r,indexAnchors:a,bindIndexAnchors:s}=ge(),t=c(null),d=c(""),o=c(null),l=c(null),m=c([]),i=c(),E=x(()=>e.sticky),N=x(()=>e.cssMode),C=x(()=>e.stickyOffsetTop),A=x(()=>e.zIndex);s({active:i,sticky:E,cssMode:N,stickyOffsetTop:C,zIndex:A});const S=n=>{var v;const u=de(n)?n.name.value:n;u!==i.value&&(i.value=u,(v=e.onChange)==null||v.call(e,u))},k=()=>{const{scrollTop:n,scrollHeight:u}=t.value,{offsetTop:v}=l.value;a.forEach((h,p)=>{const g=h.ownTop.value,I=n-g+C.value-v,J=p===a.length-1?u:a[p+1].ownTop.value-h.ownTop.value;I>=0&&I<J&&!d.value&&(p&&!e.cssMode&&a[p-1].setDisabled(!0),h.setDisabled(!1),S(h))})},O=async(n,u)=>{var g;if(u&&((g=e.onClick)==null||g.call(e,n)),n===i.value)return;const v=a.find(({name:I})=>n===I.value);if(!v)return;const h=v.ownTop.value,p=fe(t.value);d.value=n,S(n),await ve(t.value,{left:p,top:h,animation:ce,duration:X(e.duration)}),_e(()=>{d.value=""})},G=n=>{me(()=>O(n,!0))};return ne(()=>r.value,()=>oe(()=>{a.forEach(({name:n,setOwnTop:u})=>{n.value&&m.value.push(n.value),u()})})),M(()=>{var n;o.value=ue(l.value),t.value=o.value===window?o.value.document.documentElement:o.value,(n=o.value)==null||n.addEventListener("scroll",k)}),te(()=>{var n;(n=o.value)==null||n.removeEventListener("scroll",k)}),{barEl:l,active:i,zIndex:A,anchorNameList:m,toNumber:X,scrollTo:G,anchorClick:O}}}),$e={class:"var-index-bar",ref:"barEl"},De=["onClick"];function we(e,r,a,s,t,d){return _(),y("div",$e,[V(e.$slots,"default"),L("ul",{class:"var-index-bar__anchor-list",style:$({zIndex:e.toNumber(e.zIndex)+2,display:e.hideList?"none":"block"})},[(_(!0),y(R,null,U(e.anchorNameList,o=>(_(),y("li",{key:o,class:ae(["var-index-bar__anchor-item",{"var-index-bar__anchor-item--active":e.active===o}]),style:$({color:e.active===o&&e.highlightColor?e.highlightColor:""}),onClick:l=>e.anchorClick(o)},f(o),15,De))),128))],4)],512)}var B=z(Se,[["render",we]]);B.install=function(e){e.component(B.name,B)};var ze={title:"\u6807\u9898",text:"\u6587\u672C"},Oe={title:"Title",text:"Text"};const{add:K,use:je,pack:Pe,packs:Qe,merge:We}=pe(),Le=e=>{ye(e),je(e)};F("zh-CN",xe);F("en-US",be);K("zh-CN",ze);K("en-US",Oe);const Ve={name:"IndexBarExample",components:{VarIndexBar:B,VarIndexAnchor:Ne,VarCell:he},setup(){const e=c([]),r=c("#e7edf7"),a=c("#2e67ba");M(()=>{for(let t=0;t<26;t++)e.value.push(String.fromCharCode(65+t))});const s=t=>{console.log(t)};return Ce(Le),ke(t=>{r.value=t==="darkThemes"?"rgb(41 42 45)":"#e7edf7",a.value=t==="darkThemes"?"#3980e8":"#2e67ba"}),{color:a,bgColor:r,list:e,pack:Pe,change:s}}};function Me(e,r,a,s,t,d){const o=D("var-index-anchor"),l=D("var-cell"),m=D("var-index-bar");return _(),P(m,{onChange:s.change,duration:"300","sticky-offset-top":54},{default:b(()=>[(_(!0),y(R,null,U(s.list,i=>(_(),y("div",{key:i},[w(o,{index:i,class:"var-index-anchor__example",style:$({background:s.bgColor,color:s.color})},{default:b(()=>[T(f(s.pack.title)+" "+f(i),1)]),_:2},1032,["index","style"]),w(l,null,{default:b(()=>[T(f(i)+" "+f(s.pack.text),1)]),_:2},1024),w(l,null,{default:b(()=>[T(f(i)+" "+f(s.pack.text),1)]),_:2},1024)]))),128))]),_:1},8,["onChange"])}var Ze=z(Ve,[["render",Me]]);export{Ze as default};