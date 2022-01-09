var $e=Object.defineProperty,Te=Object.defineProperties;var Ue=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var Ve=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var ae=(e,t,c)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[t]=c,ie=(e,t)=>{for(var c in t||(t={}))Ve.call(t,c)&&ae(e,c,t[c]);if(oe)for(var c of oe(t))Ie.call(t,c)&&ae(e,c,t[c]);return e},re=(e,t)=>Te(e,Ue(t));import{A as Ae}from"./AppType.27bb49de.js";import{d as ue,r as w,b as O,y as X,o as R,c as _,a as $,n as Y,F as K,k as le,p as z,t as j,h as W,q as Q,e as Z,i as A,j as L,T as Ne,_ as Pe,m as E}from"./vendor.9810b84e.js";import{d as D}from"./index.fa127700.js";import{t as f}from"./shared.61f3a471.js";import{_ as ee}from"./elevation.a1530723.js";import{d as Be}from"./index.77fe3760.js";import{u as Fe,a as se,_ as Re,b as _e,c as je}from"./en-US.87180fe8.js";import{w as De,a as ze}from"./utils.72e4e7bc.js";const F=["12","1","2","3","4","5","6","7","8","9","10","11"],V=["00","13","14","15","16","17","18","19","20","21","22","23"],me=["00","05","10","15","20","25","30","35","40","45","50","55"];function xe(e){return["ampm","24hr"].includes(e)}const Le={modelValue:{type:String},shadow:{type:Boolean,default:!1},color:{type:String},headerColor:{type:String},format:{type:String,default:"ampm",validator:xe},allowedTime:{type:Object},min:{type:String},max:{type:String},useSeconds:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},"onUpdate:modelValue":{type:Function},onChange:{type:Function}},de=(e,t)=>e==="24hr"||t==="am",te=(e,t,c)=>{const a=F.findIndex(v=>f(v)===f(c)),S=de(e,t)?c:V[a];return{hourStr:S,hourNum:f(S)}},N=e=>{const[t,c,a]=e.split(":");return{hour:f(t),minute:f(c),second:f(a)}},ce=e=>{var p,I;const{time:t,format:c,ampm:a,hour:S,max:v,min:o,disableHour:r}=e,{hourStr:k,hourNum:P}=te(c,a,S);let M=!1,T=!1;if(r.includes(k))return!0;if(v&&!o){const{hour:B,minute:n}=N(v);M=B===P&&t>n}if(!v&&o){const{hour:B,minute:n}=N(o);M=B===P&&t<n}if(v&&o){const{hour:B,minute:n}=N(v),{hour:i,minute:m}=N(o);M=i===P&&t<m||B===P&&t>n}return((p=e.allowedTime)==null?void 0:p.minutes)&&(T=(I=e.allowedTime)==null?void 0:I.minutes(t)),M||T},ve=e=>{var I,B;const{time:t,format:c,ampm:a,hour:S,minute:v,max:o,min:r,disableHour:k}=e,{hourStr:P,hourNum:M}=te(c,a,S);let T=!1,p=!1;if(k.includes(P))return!0;if(o&&!r){const{hour:n,minute:i,second:m}=N(o);T=n===M&&i<v||i===v&&t>m}if(!o&&r){const{hour:n,minute:i,second:m}=N(r);T=n===M&&i>v||i===v&&t>m}if(o&&r){const{hour:n,minute:i,second:m}=N(o),{hour:l,minute:y,second:H}=N(r);T=n===M&&i<v||l===M&&y>v||n===M&&i===v&&t>m||l===M&&y===v&&t<H}return((I=e.allowedTime)==null?void 0:I.seconds)&&(p=(B=e.allowedTime)==null?void 0:B.seconds(t)),T||p},Ee=ue({name:"Clock",props:{isInner:{type:Boolean,required:!0},rad:{type:Number},format:{type:String,default:"ampm"},allowedTime:{type:Object},time:{type:Object,required:!0},useSeconds:{type:Boolean,default:!1},preventNextUpdate:{type:Boolean,default:!1},type:{type:String,default:"hour"},ampm:{type:String,default:"am"},color:{type:String},min:{type:String},max:{type:String}},emits:["update","change-prevent-update"],setup(e,{emit:t}){const c=w(null),a=w([]),S=w([]),v=O(()=>({transform:`rotate(${f(e.rad)}deg)`,height:e.isInner&&e.type==="hour"?"calc(50% - 40px)":"calc(50% - 4px)",backgroundColor:P(),borderColor:P()})),o=O(()=>{if(e.rad===void 0)return;const n=e.rad/30;return n>=0?n:n+12}),r=O(()=>e.type==="hour"?F:me),k=(n,i)=>{n=n!=null?n:e.type==="minute"?e.time.minute:e.time.second;const m=e.type==="minute"?ce:ve,l={time:f(n),format:e.format,ampm:e.ampm,hour:e.time.hour,minute:f(e.time.minute),max:e.max,min:e.min,allowedTime:e.allowedTime,disableHour:a.value};return i&&e.type==="minute"&&Reflect.deleteProperty(l,"minute"),m(l)},P=()=>{if(o.value===void 0)return e.color;const n=e.isInner?V[o.value]:r.value[o.value];return r.value===me?k()?"#bdbdbd":e.color:T(n)?"#bdbdbd":e.color},M=(n,i)=>i?o.value===n&&e.isInner:o.value===n&&(!e.isInner||e.type!=="hour"),T=n=>{if(e.type==="hour"){if(de(e.format,e.ampm))return a.value.includes(n);const i=F.findIndex(m=>m===n);return S.value.includes(i)}return k(n,!0)},p=(n,i,m)=>{const l=2*Math.PI/12*n-Math.PI/2,y=50*(1+Math.cos(l)),H=50*(1+Math.sin(l)),h=()=>M(n,m)?T(i)?{backgroundColor:"#bdbdbd",color:"#fff"}:{backgroundColor:e.color,color:void 0}:{backgroundColor:void 0,color:void 0},{backgroundColor:U,color:J}=h();return{left:`${y}%`,top:`${H}%`,backgroundColor:U,color:J}},I=()=>{const{width:n,height:i}=c.value.getBoundingClientRect();return{width:n,height:i}},B=()=>o.value===void 0?void 0:(e.ampm==="am"?F:V)[o.value].padStart(2,"0");return X([o,()=>e.isInner],([n,i],[m,l])=>{if(n===m&&i===l||e.type!=="hour"||o.value===void 0)return;const H=i?V[o.value]:B(),h=e.useSeconds?`:${e.time.second}`:"",U=`${H}:${e.time.minute}${h}`;e.preventNextUpdate||t("update",U),t("change-prevent-update")}),X(()=>e.rad,(n,i)=>{if(e.type==="hour"||n===void 0||i===void 0)return;const m=n/6>=0?n/6:n/6+60,l=i/6>=0?i/6:i/6+60;if(m===l)return;let y;const{hourStr:H}=te(e.format,e.ampm,e.time.hour);if(e.type==="minute"){const h=D().minute(m).format("mm"),U=e.useSeconds?`:${e.time.second}`:"";y=`${H}:${h}${U}`}if(e.type==="second"){const h=D().second(m).format("ss"),U=e.useSeconds?`:${h}`:"";y=`${H}:${e.time.minute}${U}`}t("update",y)}),X([()=>e.max,()=>e.min,()=>e.allowedTime],([n,i,m])=>{if(a.value=[],n&&!i){const{hour:l}=N(n),y=F.filter(h=>f(h)>l),H=V.filter(h=>f(h)>l);a.value=[...y,...H]}if(!n&&i){const{hour:l}=N(i),y=F.filter(h=>f(h)<l),H=V.filter(h=>f(h)<l);a.value=[...y,...H]}if(n&&i){const{hour:l}=N(n),{hour:y}=N(i),H=F.filter(U=>f(U)<y||f(U)>l),h=V.filter(U=>f(U)<y||f(U)>l);a.value=[...H,...h]}if(m==null?void 0:m.hours){const{hours:l}=m,y=F.filter(h=>!l(f(h))),H=V.filter(h=>!l(f(h)));a.value=[...new Set([...a.value,...y,...H])]}S.value=a.value.map(l=>V.findIndex(y=>l===y)).filter(l=>l>=0)},{immediate:!0}),{hours24:V,timeScales:r,inner:c,handStyle:v,disableHour:a,isActive:M,isDisable:T,getSize:I,getStyle:p,activeItemIndex:o}}}),qe={class:"var-time-picker-clock"},Oe={key:0,class:"var-time-picker-clock__inner",ref:"inner"};function Xe(e,t,c,a,S,v){return R(),_("div",qe,[$("div",{class:"var-time-picker-clock__hand",style:Y(e.handStyle)},null,4),(R(!0),_(K,null,le(e.timeScales,(o,r)=>(R(),_("div",{class:z(["var-time-picker-clock__item",[e.isActive(r,!1)?"var-time-picker-clock__item--active":null,e.isDisable(o)?"var-time-picker-clock__item--disable":null]]),key:o,style:Y(e.getStyle(r,o,!1))},j(o),7))),128)),e.format==="24hr"&&e.type==="hour"?(R(),_("div",Oe,[(R(!0),_(K,null,le(e.hours24,(o,r)=>(R(),_("div",{class:z(["var-time-picker-clock__item",[e.isActive(r,!0)?"var-time-picker-clock__item--active":null,e.isDisable(o)?"var-time-picker-clock__item--disable":null]]),key:o,style:Y(e.getStyle(r,o,!0))},j(o),7))),128))],512)):W("v-if",!0)])}var Ye=ee(Ee,[["render",Xe]]);const We=ue({name:"VarTimePicker",components:{Clock:Ye},props:Le,setup(e){const t=w(null),c=w(null),a=w(null),S=w(!1),v=w(!1),o=w(!1),r=w(!1),k=w(!1),P=w(void 0),M=w(0),T=w(0),p=w("hour"),I=w("am"),B=w(!1),n=w(!1),i=w({hour:"00",minute:"00",second:"00"}),m=Q({x:0,y:0}),l=Q({x:[],y:[]}),y=O(()=>p.value==="hour"?P.value:p.value==="minute"?M.value:T.value),H=u=>{var s,d;(s=e["onUpdate:modelValue"])==null||s.call(e,u),(d=e.onChange)==null||d.call(e,u)},h=u=>u*57.29577951308232,U=u=>{r.value=!1,n.value=!1,p.value=u},J=u=>{const{disableHour:s}=a.value,d=F.findIndex(b=>f(b)===f(i.value.hour)),g=u==="am"?F:V;return[...g.slice(d),...g.slice(0,d)].find((b,x)=>(v.value=x!==0,!s.includes(b)))},he=u=>{if(e.readonly)return;I.value=u;const s=J(u);if(!s)return;const d=e.useSeconds?`:${i.value.second}`:"",g=`${s.padStart(2,"0")}:${i.value.minute}${d}`;H(g)},ne=(u,s)=>{const d=u>=l.x[0]&&u<=l.x[1],g=s>=l.y[0]&&s<=l.y[1];return d&&g},ye=u=>{const s=e.format==="24hr"?"HH":"hh",{hour:d,minute:g,second:C}=N(u);return{hour:D().hour(d).format(s),minute:D().minute(g).format("mm"),second:D().second(C).format("ss")}},ke=u=>{const s=u/30;return s>=0?s:s+12},ge=()=>{const{width:u,height:s}=a.value.getSize(),d=m.x-u/2-8,g=m.x+u/2+8,C=m.y-s/2-8,b=m.y+s/2+8;return{rangeXMin:d,rangeXMax:g,rangeYMin:C,rangeYMax:b}},be=(u,s,d)=>{const{disableHour:g}=a.value;o.value=ne(u,s);const C=Math.round(d/30)*30+90,b=ke(C),x=S.value?F[b]:V[b];if(g.includes(x)||(S.value=e.format==="24hr"?ne(u,s):!1),S.value!==o.value)return;const q=S.value||I.value==="pm"?V[b]:F[b];B.value=g.includes(q),!B.value&&(P.value=C,r.value=!0)},Se=u=>{const{disableHour:s}=a.value,d=Math.round(u/6)*6+90,C={time:d/6>=0?d/6:d/6+60,format:e.format,ampm:I.value,hour:i.value.hour,max:e.max,min:e.min,disableHour:s,allowedTime:e.allowedTime};n.value=ce(C),!n.value&&(M.value=d,k.value=!0)},pe=u=>{const{disableHour:s}=a.value,d=Math.round(u/6)*6+90,C={time:d/6>=0?d/6:d/6+60,format:e.format,ampm:I.value,hour:i.value.hour,minute:f(i.value.minute),max:e.max,min:e.min,disableHour:s,allowedTime:e.allowedTime};ve(C)||(T.value=d)},He=()=>{const{left:u,top:s,width:d,height:g}=t.value.getBoundingClientRect();if(m.x=u+d/2,m.y=s+g/2,p.value==="hour"&&e.format==="24hr"){const{rangeXMin:C,rangeXMax:b,rangeYMin:x,rangeYMax:q}=ge();l.x=[C,b],l.y=[x,q]}},we=u=>{if(u.preventDefault(),e.readonly)return;He();const{clientX:s,clientY:d}=u.touches[0],g=s-m.x,C=d-m.y,b=Math.round(h(Math.atan2(C,g)));p.value==="hour"?be(s,d,b):p.value==="minute"?Se(b):pe(b)},Me=()=>{if(!e.readonly){if(p.value==="hour"&&r.value){p.value="minute";return}p.value==="minute"&&e.useSeconds&&k.value&&(p.value="second")}},Ce=()=>{v.value=!1};return X(()=>e.modelValue,u=>{if(u){const{hour:s,minute:d,second:g}=N(u),C=D().hour(s).format("hh"),b=D().hour(s).format("HH"),x=D().minute(d).format("mm"),q=D().second(g).format("ss");P.value=(C==="12"?0:f(C))*30,M.value=f(x)*6,T.value=f(q)*6,i.value=ye(u),e.format!=="24hr"&&(I.value=`${s}`.padStart(2,"0")===b&&V.includes(b)?"pm":"am"),S.value=e.format==="24hr"&&V.includes(b)}},{immediate:!0}),{getRad:y,time:i,container:t,inner:a,picker:c,isInner:S,type:p,ampm:I,isPreventNextUpdate:v,moveHand:we,checkPanel:U,checkAmpm:he,end:Me,update:H,changePreventUpdate:Ce}}}),Ge={class:"var-time-picker-title__time"},Je=$("span",null,":",-1),Ke={key:0},Qe={key:0,class:"var-time-picker-title__ampm"},Ze={class:"var-time-picker-body"};function et(e,t,c,a,S,v){const o=Z("clock");return R(),_("div",{class:z(["var-time-picker",[e.shadow?"var-elevation--2":null]]),ref:"picker"},[$("div",{class:"var-time-picker-title",style:Y({background:e.headerColor||e.color})},[$("div",Ge,[$("div",{class:z(["var-time-picker-title__btn",e.type==="hour"?"var-time-picker-title__btn--active":null]),onClick:t[0]||(t[0]=r=>e.checkPanel("hour"))},j(e.time.hour),3),Je,$("div",{class:z(["var-time-picker-title__btn",e.type==="minute"?"var-time-picker-title__btn--active":null]),onClick:t[1]||(t[1]=r=>e.checkPanel("minute"))},j(e.time.minute),3),e.useSeconds?(R(),_("span",Ke,":")):W("v-if",!0),e.useSeconds?(R(),_("div",{key:1,class:z(["var-time-picker-title__btn",e.type==="second"?"var-time-picker-title__btn--active":null]),onClick:t[2]||(t[2]=r=>e.checkPanel("second"))},j(e.time.second),3)):W("v-if",!0)]),e.format==="ampm"?(R(),_("div",Qe,[$("div",{class:z(["var-time-picker-title__btn",e.ampm==="am"?"var-time-picker-title__btn--active":null]),onClick:t[3]||(t[3]=r=>e.checkAmpm("am"))}," AM ",2),$("div",{class:z(["var-time-picker-title__btn",e.ampm==="pm"?"var-time-picker-title__btn--active":null]),onClick:t[4]||(t[4]=r=>e.checkAmpm("pm"))}," PM ",2)])):W("v-if",!0)],4),$("div",Ze,[$("div",{class:"var-time-picker-clock__container",onTouchstart:t[5]||(t[5]=(...r)=>e.moveHand&&e.moveHand(...r)),onTouchmove:t[6]||(t[6]=(...r)=>e.moveHand&&e.moveHand(...r)),onTouchend:t[7]||(t[7]=(...r)=>e.end&&e.end(...r)),ref:"container"},[A(Ne,{name:"var-time-picker-panel-fade"},{default:L(()=>[A(o,{key:e.type,ref:"inner",type:e.type,ampm:e.ampm,color:e.color,"is-inner":e.isInner,format:e.format,"allowed-time":e.allowedTime,rad:e.getRad,time:e.time,"prevent-next-update":e.isPreventNextUpdate,"use-seconds":e.useSeconds,max:e.max,min:e.min,onUpdate:e.update,onChangePreventUpdate:e.changePreventUpdate},null,8,["type","ampm","color","is-inner","format","allowed-time","rad","time","prevent-next-update","use-seconds","max","min","onUpdate","onChangePreventUpdate"])]),_:1})],544)])],2)}var G=ee(We,[["render",et]]);G.install=function(e){e.component(G.name,G)};var tt={basicUsage:"\u57FA\u672C\u4F7F\u7528",hour24:"24\u5C0F\u65F6\u683C\u5F0F",readonly:"\u53EA\u8BFB",timeLimit:"\u65F6\u95F4\u9650\u5236",custom:"\u81EA\u5B9A\u4E49",showSecond:"\u663E\u793A\u79D2"},nt={basicUsage:"Basic Usage",hour24:"24hr Format",readonly:"Readonly",timeLimit:"Time Limit",custom:"Custom",showSecond:"show-seconds"};const{add:fe,use:ot,pack:at,packs:gt,merge:bt}=Fe(),it=e=>{je(e),ot(e)};se("zh-CN",Re);se("en-US",_e);fe("zh-CN",tt);fe("en-US",nt);const rt={name:"TimePickerExample",components:{VarTimePicker:G,AppType:Ae},setup(){const e=Q({date:"11:20",date1:"15:10",date2:"07:10",date3:"07:10:12",date4:"05:10",date5:"17:36:22"}),t={hours(a){return a%2==0},minutes(a){return a%15!=0},seconds(a){return a%2!=0}},c=a=>{console.log(a)};return De(it),ze(Be),re(ie({},Pe(e)),{change:c,pack:at,allowedTime:t})}},ut={style:{"padding-bottom":"20px"}};function lt(e,t,c,a,S,v){const o=Z("app-type"),r=Z("var-time-picker");return R(),_(K,null,[$("div",null,[A(o,null,{default:L(()=>[E(j(a.pack.basicUsage),1)]),_:1}),A(r,{modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=k=>e.date=k)},null,8,["modelValue"])]),$("div",null,[A(o,null,{default:L(()=>[E(j(a.pack.hour24),1)]),_:1}),A(r,{modelValue:e.date1,"onUpdate:modelValue":t[1]||(t[1]=k=>e.date1=k),format:"24hr",shadow:""},null,8,["modelValue"])]),$("div",null,[A(o,null,{default:L(()=>[E(j(a.pack.showSecond),1)]),_:1}),A(r,{modelValue:e.date5,"onUpdate:modelValue":t[2]||(t[2]=k=>e.date5=k),format:"24hr","use-seconds":""},null,8,["modelValue"])]),$("div",null,[A(o,null,{default:L(()=>[E(j(a.pack.readonly),1)]),_:1}),A(r,{modelValue:e.date2,"onUpdate:modelValue":t[3]||(t[3]=k=>e.date2=k),readonly:"",shadow:""},null,8,["modelValue"])]),$("div",null,[A(o,null,{default:L(()=>[E(j(a.pack.timeLimit),1)]),_:1}),A(r,{modelValue:e.date3,"onUpdate:modelValue":t[4]||(t[4]=k=>e.date3=k),format:"24hr","use-seconds":"",min:"2:28:38",max:"19:40:22","allowed-time":a.allowedTime},null,8,["modelValue","allowed-time"])]),$("div",ut,[A(o,null,{default:L(()=>[E(j(a.pack.custom),1)]),_:1}),A(r,{modelValue:e.date4,"onUpdate:modelValue":t[5]||(t[5]=k=>e.date4=k),shadow:"","header-color":"purple",color:"#7bb872",min:"2:28:38",max:"19:40:22",onChange:a.change},null,8,["modelValue","onChange"])])],64)}var St=ee(rt,[["render",lt]]);export{St as default};