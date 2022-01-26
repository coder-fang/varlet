import{d as y,r as b,x as j,Y as B,e as i,o as l,c as u,G as S,p as T,n as C,R as $,i as d,j as v,F as E,k as N,l as V,m as x,t as w}from"./vendor.efca09d3.js";import{B as L}from"./index.922fa206.js";import{I as P}from"./index.821d0c0d.js";import{h as I,j as M,c as g,g as O}from"./shared.17f26706.js";import{b as F,c as k,d as H,s as z,e as D}from"./elements.be10beab.js";import{_}from"./elevation.6f443b25.js";import{C as q}from"./index.387be468.js";import{d as A}from"./index.9b1139e6.js";import{a as G}from"./utils.5a4067e3.js";import"./index.b50b8baf.js";import"./index.45528475.js";import"./index.a7398902.js";import"./components.2dc8f096.js";const R={visibilityHeight:{type:[Number,String],default:200},duration:{type:Number,default:300},right:{type:[Number,String]},bottom:{type:[Number,String]},target:{type:[String,Object]},onClick:{type:Function}};const U=y({name:"VarBackTop",components:{VarButton:L,VarIcon:P},props:R,setup(t){let e;const s=b(!1),a=b(null),m=o=>{var f;(f=t.onClick)==null||f.call(t,o);const h=H(e);z(e,{left:h,duration:t.duration,animation:I})},r=M(()=>{s.value=D(e)>=k(t.visibilityHeight)},200),n=()=>{if(!g(t.target)&&!O(t.target))throw Error('[Varlet] BackTop: type of prop "target" should be a string or an Object');const o=g(t.target)?document.querySelector(t.target):t.target;if(!o)throw Error('[Varlet] BackTop: "target" should be a selector');return o};return j(()=>{e=t.target?n():F(a.value),e.addEventListener("scroll",r)}),B(()=>{e.removeEventListener("scroll",r)}),{show:s,backTopEl:a,toPxNum:k,click:m}}});function Y(t,e,s,a,m,p){const r=i("var-icon"),n=i("var-button");return l(),u("div",{class:T(["var-back-top",[t.show?"var-back-top--active":null]]),ref:"backTopEl",style:C({right:t.right===void 0?t.right:t.toPxNum(t.right),bottom:t.bottom===void 0?t.bottom:t.toPxNum(t.bottom)}),onClick:e[0]||(e[0]=$((...o)=>t.click&&t.click(...o),["stop"]))},[S(t.$slots,"default",{},()=>[d(n,{type:"primary",round:"","var-back-top-cover":""},{default:v(()=>[d(r,{name:"chevron-up"})]),_:1})])],6)}var c=_(U,[["render",Y]]);c.install=function(t){t.component(c.name,c)};const J=[...Array(100).keys()],K={name:"BackTopExample",components:{VarBackTop:c,VarCell:q},setup(){return G(A),{lists:J}}};function Q(t,e,s,a,m,p){const r=i("var-cell"),n=i("var-back-top");return l(),u("div",null,[(l(!0),u(E,null,N(a.lists,o=>(l(),V(r,{key:o},{default:v(()=>[x("Scroll to bottom "+w(o),1)]),_:2},1024))),128)),d(n,{duration:300})])}var mt=_(K,[["render",Q]]);export{mt as default};