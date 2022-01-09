import{a as ee}from"./components.84368457.js";import{F as te,u as ae}from"./provide.55e391cd.js";import{a as le}from"./elements.6bb3d81f.js";import{t as g,d as i,i as re}from"./shared.61f3a471.js";import{_ as ne}from"./elevation.a1530723.js";import{d as ue,r as $,q as se,b as k,y as H,x as oe,e as ie,o as w,c as L,a as c,n as f,F as de,k as ce,G as me,p as P,i as ve,z as be,t as he}from"./vendor.9810b84e.js";function fe(e){return["always","normal","never"].includes(e)}const Ve={modelValue:{type:[Number,Array],default:0},step:{type:[Number,String],default:1},range:{type:Boolean,default:!1},labelVisible:{type:String,default:"normal",validator:fe},activeColor:{type:String},trackColor:{type:String},thumbColor:{type:String},labelColor:{type:String},labelTextColor:{type:String},trackHeight:{type:[String,Number]},thumbSize:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rules:{type:Array},onChange:{type:Function},onStart:{type:Function},onEnd:{type:Function},"onUpdate:modelValue":{type:Function}};var r;(function(e){e.First="1",e.Second="2"})(r||(r={}));const ge=ue({name:"VarSlider",components:{VarFormDetails:te},props:Ve,setup(e){const{bindForm:V,form:m}=ae(),{errorMessage:p,validateWithTrigger:M,validate:j,resetValidation:F}=ee(),u=()=>j(e.rules,e.modelValue),d=()=>({startPosition:0,currentLeft:0,active:!1,percentValue:0}),q=()=>be(()=>M(["onChange"],"onChange",e.rules,e.modelValue)),T=$(null),v=$(0),z=$(!1),n=se({[r.First]:d(),[r.Second]:d()}),b=k(()=>v.value/100*g(e.step)),G=k(()=>{let t=[{value:e.modelValue,enumValue:r.First}];return e.range&&i(e.modelValue)&&(t=[{value:e.modelValue[0],enumValue:r.First},{value:e.modelValue[1],enumValue:r.Second}]),t}),R=t=>e.labelVisible==="always"?!0:e.labelVisible==="never"?!1:n[t].active,J=k(()=>{const{activeColor:t,range:a,modelValue:l}=e,s=a&&i(l)?Math.abs(l[0]-l[1]):l,o=a&&i(l)?Math.min(l[0],l[1]):0;return{width:`${s}%`,left:`${o}%`,background:t}}),S=k(()=>e.disabled||(m==null?void 0:m.disabled.value)),N=k(()=>e.readonly||(m==null?void 0:m.readonly.value)),B=(t,a)=>{var X;let l=[];const{step:s,range:o,modelValue:h,onChange:C}=e,U=g(s),y=Math.round(t/b.value)*U,x=n[a].percentValue;if(n[a].percentValue=y/U,o&&i(h)&&(l=a===r.First?[y,h[1]]:[h[0],y]),x!==y){const _=o?l:y;C==null||C(_),(X=e["onUpdate:modelValue"])==null||X.call(e,_),q()}},K=t=>{if(!e.range)return r.First;const a=n[r.First].percentValue*b.value,l=n[r.Second].percentValue*b.value,s=Math.abs(t-a),o=Math.abs(t-l);return s<=o?r.First:r.Second},O=(t,a)=>{var l;v.value||(v.value=T.value.offsetWidth),!(S.value||N.value)&&((l=e.onStart)==null||l.call(e),z.value=!0,n[a].startPosition=t.touches[0].clientX)},Q=(t,a)=>{if(S.value||N.value||!z.value)return;let l=t.touches[0].clientX-n[a].startPosition+n[a].currentLeft;n[a].active=!0,l<=0?l=0:l>=v.value&&(l=v.value),B(l,a)},W=t=>{const{range:a,modelValue:l,onEnd:s}=e;if(S.value||N.value)return;let o=[];n[t].currentLeft=n[t].percentValue*b.value,n[t].active=!1;const h=n[t].percentValue;a&&i(l)&&(o=t===r.First?[h,l[1]]:[l[0],h]),s==null||s(a?o:h),z.value=!1},Y=t=>{if(S.value||N.value||t.target.closest(".var-slider__thumb"))return;const a=t.clientX-le(t.currentTarget),l=K(a);B(a,l),W(l)},A=()=>{const t=g(e.step);return isNaN(t)?(console.warn('[Varlet] Slider: type of prop "step" should be Number'),!1):t<1||t>100?(console.warn('[Varlet] Slider: "step" should be >= 0 and <= 100'),!1):parseInt(`${e.step}`,10)!==t?(console.warn('[Varlet] Slider: "step" should be an Integer'),!1):!0},E=()=>{const{range:t,modelValue:a}=e;return t&&!i(a)?(console.error('[Varlet] Slider: "modelValue" should be an Array'),!1):!t&&i(a)?(console.error('[Varlet] Slider: "modelValue" should be a Number'),!1):t&&i(a)&&a.length<2?(console.error('[Varlet] Slider: "modelValue" should have two value'),!1):!0},I=(t=e.modelValue,a=g(e.step))=>{e.range&&i(t)?(n[r.First].percentValue=t[0]/a,n[r.First].currentLeft=n[r.First].percentValue*b.value,n[r.Second].percentValue=t[1]/a,n[r.Second].currentLeft=n[r.Second].percentValue*b.value):re(t)&&(n[r.First].currentLeft=t/a*b.value)};H([()=>e.modelValue,()=>e.step],([t,a])=>{!A()||!E()||z.value||I(t,g(a))}),H(v,()=>I()),oe(()=>{!A()||!E()||(v.value=T.value.offsetWidth)});const Z={reset:()=>{var a;const t=e.range?[0,0]:0;(a=e["onUpdate:modelValue"])==null||a.call(e,t),F()},validate:u,resetValidation:F};return V==null||V(Z),{Thumbs:r,sliderEl:T,getFillStyle:J,isDisabled:S,errorMessage:p,thumbsProps:n,thumbList:G,toNumber:g,showLabel:R,start:O,move:Q,end:W,click:Y}}}),Se={class:"var-slider"},ye={class:"var-slider__track"},ke=["onTouchstart","onTouchmove","onTouchend","onTouchcancel"];function Fe(e,V,m,p,M,j){const F=ie("var-form-details");return w(),L("div",Se,[c("div",{class:P(["var-slider-block",[e.isDisabled?"var-slider__disable":null,e.errorMessage?"var-slider__error":null]]),style:f({height:e.thumbSize===void 0?e.thumbSize:`${3*e.toNumber(e.thumbSize)}px`,margin:e.thumbSize===void 0?e.thumbSize:`0 ${e.toNumber(e.thumbSize)/2}px`}),ref:"sliderEl",onClick:V[0]||(V[0]=(...u)=>e.click&&e.click(...u))},[c("div",ye,[c("div",{class:"var-slider__track-background",style:f({background:e.trackColor,height:e.trackHeight+"px"})},null,4),c("div",{class:"var-slider__track-fill",style:f(e.getFillStyle)},null,4)]),(w(!0),L(de,null,ce(e.thumbList,u=>(w(),L("div",{class:"var-slider__thumb",key:u.enumValue,style:f({left:`${u.value}%`,zIndex:e.thumbsProps[u.enumValue].active?1:void 0}),onTouchstart:d=>e.start(d,u.enumValue),onTouchmove:d=>e.move(d,u.enumValue),onTouchend:d=>e.end(u.enumValue),onTouchcancel:d=>e.end(u.enumValue)},[me(e.$slots,"button",{currentValue:u.value},()=>[c("div",{class:"var-slider__thumb-block",style:f({background:e.thumbColor,height:e.thumbSize+"px",width:e.thumbSize+"px"})},null,4),c("div",{class:P(["var-slider__thumb-ripple",[e.thumbsProps[u.enumValue].active?"var-slider__thumb-ripple-active":null]]),style:f({background:e.thumbColor,height:e.thumbSize===void 0?void 0:e.thumbsProps[u.enumValue].active?`${3*e.toNumber(e.thumbSize)}px`:"0px",width:e.thumbSize===void 0?void 0:e.thumbsProps[u.enumValue].active?`${3*e.toNumber(e.thumbSize)}px`:"0px"})},null,6),c("div",{class:P(["var-slider__thumb-label",[e.showLabel(u.enumValue)?"var-slider__thumb-label-active":null]]),style:f({background:e.labelColor,color:e.labelTextColor,height:e.thumbSize===void 0?e.thumbSize:`${2*e.toNumber(e.thumbSize)}px`,width:e.thumbSize===void 0?e.thumbSize:`${2*e.toNumber(e.thumbSize)}px`})},[c("span",null,he(u.value),1)],6)])],44,ke))),128))],6),ve(F,{"error-message":e.errorMessage,class:"var-slider__form","var-slider-cover":""},null,8,["error-message"])])}var D=ne(ge,[["render",Fe]]);D.install=function(e){e.component(D.name,D)};export{D as S};