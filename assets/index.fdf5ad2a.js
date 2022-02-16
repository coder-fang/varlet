import{a as N}from"./provide.1c802451.js";import{_ as F}from"./elevation.7485794b.js";import{d as R,b as C,o as M,c as D,G,q as z,r as V,C as O,e as n,i as r,j as l,F as L,Z as j,_ as q,m as s,t as u,a as y}from"./vendor.4723551d.js";import{I as Y}from"./index.fc9163fc.js";import{S as Z}from"./index.acbce031.js";import{O as H}from"./index.56ae19cb.js";import{C as J}from"./index.63b5d731.js";import{C as K}from"./index.b129628d.js";import{R as Q,a as W}from"./index.e4437c75.js";import{B as X}from"./index.8478ae25.js";import{S as $}from"./index.0f185a80.js";import{S as ee}from"./index.d76fae9d.js";import{U as ae}from"./index.865cb737.js";import{C as oe}from"./index.285bae5f.js";import{R as re}from"./index.2fa099df.js";import{A as le}from"./AppType.b9ef6ffb.js";import{c as E}from"./index.f37174b5.js";import{d as te}from"./index.9b1139e6.js";import{b as ne,w as se,a as ue}from"./utils.75b0da7e.js";import{u as me,a as h,_ as de,b as pe,c as ce}from"./en-US.dcb2670f.js";import"./components.40efc8e7.js";import"./shared.506a394a.js";import"./index.3107e013.js";import"./elements.6395be39.js";import"./index.abae40f3.js";import"./zIndex.5ac96ba7.js";import"./index.991f7121.js";import"./index.735d573b.js";import"./index.f3fea850.js";import"./index.20ff0409.js";import"./lock.f38ed9b3.js";import"./index.3300ef1b.js";import"./index.2d91105d.js";import"./provide.fe26be30.js";import"./index.3ceb232a.js";const ie={disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}};const fe=R({name:"VarForm",props:ie,setup(t){const o=C(()=>t.disabled),f=C(()=>t.readonly),{formItems:e,bindFormItems:g}=N(),m=async()=>(await Promise.all(e.map(({validate:i})=>i()))).every(i=>i===!0),d=()=>e.forEach(({reset:c})=>c()),k=()=>e.forEach(({resetValidation:c})=>c());return g({disabled:o,readonly:f}),{validate:m,reset:d,resetValidation:k}}}),ge={class:"var-form"};function _e(t,o,f,e,g,m){return M(),D("div",ge,[G(t.$slots,"default")])}var v=F(fe,[["render",_e]]);v.install=function(t){t.component(v.name,v)};var ke={example:"\u8868\u5355\u793A\u4F8B",username:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",usernameMessage:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",password:"\u8BF7\u8F93\u5165\u5BC6\u7801",passwordMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801",department:"\u8BF7\u9009\u62E9\u90E8\u95E8",departmentMessage:"\u5FC5\u987B\u9009\u4E00\u4E2A\u90E8\u95E8",eat:"\u5403\u996D",sleep:"\u7761\u89C9",play:"\u6253\u6E38\u620F",departmentUnit:"\u90E8",group:"\u8BF7\u9009\u62E9\u7EC4\u7EC7",groupMessage:"\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u7EC4\u7EC7",groupUnit:"\u7EC4",genderMessage:"\u5FC5\u987B\u9009\u62E9\u4E00\u4E2A\u6027\u522B",male:"\u7537",female:"\u5973",rateMessage:"\u5FC5\u987B\u5927\u4E8E2",likeMessage:"\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u7231\u597D",licenseMessage:"\u60A8\u5FC5\u987B\u5F00\u542F",countMessage:"\u5FC5\u987B\u5927\u4E8E10",rangeMessage:"\u5FC5\u987B\u5927\u4E8E10",filesMessage:"\u81F3\u5C11\u4E0A\u4F20\u4E00\u5F20\u56FE\u7247",controller:"\u8868\u5355\u63A7\u5236",reset:"\u6E05\u7A7A\u8868\u5355",resetValidation:"\u6E05\u7A7A\u9A8C\u8BC1",validate:"\u89E6\u53D1\u9A8C\u8BC1",disabled:"\u8868\u5355\u7981\u7528",readonly:"\u8868\u5355\u53EA\u8BFB"},ve={example:"Form Example",username:"Please input username",usernameMessage:"The username cannot be empty",password:"Please input password",passwordMessage:"The password cannot be empty",department:"Please select department",departmentMessage:"The select cannot be empty",eat:"Eat",sleep:"Sleep",play:"Play game",departmentUnit:" department",group:"Please select group",groupMessage:"The select cannot be empty",groupUnit:" group",genderMessage:"The gender cannot be empty",male:"Male",female:"Female",rateMessage:"It has to be greater than 2",likeMessage:"The select cannot be empty",licenseMessage:"You must turn on",countMessage:"It has to be greater than 10",rangeMessage:"It has to be greater than 10",filesMessage:"Upload at least one picture",controller:"Form control",reset:"Empty form",resetValidation:"Empty the validation",validate:"Trigger validation",disabled:"Form disabled",readonly:"Form readonly"};const{add:U,use:be,pack:Ve,packs:ma,merge:da}=me(),Ee=t=>{ce(t),be(t)};h("zh-CN",de);h("en-US",pe);U("zh-CN",ke);U("en-US",ve);const ye={name:"FormExample",components:{VarForm:v,VarInput:Y,VarSelect:Z,VarCheckboxGroup:J,VarCheckbox:K,VarRadioGroup:Q,VarRadio:W,VarOption:H,VarButton:X,VarSlider:ee,VarSwitch:$,VarUploader:ae,VarCounter:oe,VarRate:re,AppType:le},setup(){const t=z({username:"",password:"",department:"",gender:void 0,license:!1,range:0,count:0,group:[],score:0,like:[],files:[]}),o=V(null),f=V(!1),e=V(!1),g=E.touchmoveForbid;return ne(m=>{m==="pc"&&(E.touchmoveForbid=!1)}),O(()=>{E.touchmoveForbid=g}),se(m=>{var d;Ee(m),(d=o.value)==null||d.reset()}),ue(te),{pack:Ve,form:o,formData:t,disabled:f,readonly:e}}},Ce=t=>(j("data-v-4d60761c"),t=t(),q(),t),Fe={class:"row mb"},Me={class:"row mb"},De=Ce(()=>y("div",{class:"space"},null,-1));function he(t,o,f,e,g,m){const d=n("app-type"),k=n("var-input"),p=n("var-option"),c=n("var-select"),i=n("var-radio"),B=n("var-radio-group"),b=n("var-checkbox"),w=n("var-checkbox-group"),x=n("var-rate"),A=n("var-switch"),S=n("var-counter"),I=n("var-slider"),T=n("var-uploader"),P=n("var-form"),_=n("var-button");return M(),D(L,null,[r(d,null,{default:l(()=>[s(u(e.pack.example),1)]),_:1}),r(P,{ref:"form",disabled:e.disabled,readonly:e.readonly},{default:l(()=>[r(k,{class:"mb",placeholder:e.pack.username,rules:[a=>!!a||e.pack.usernameMessage],modelValue:e.formData.username,"onUpdate:modelValue":o[0]||(o[0]=a=>e.formData.username=a)},null,8,["placeholder","rules","modelValue"]),r(k,{class:"mb",type:"password",placeholder:e.pack.password,rules:[a=>!!a||e.pack.passwordMessage],modelValue:e.formData.password,"onUpdate:modelValue":o[1]||(o[1]=a=>e.formData.password=a)},null,8,["placeholder","rules","modelValue"]),r(c,{class:"mb",placeholder:e.pack.department,rules:[a=>!!a||e.pack.departmentMessage],modelValue:e.formData.department,"onUpdate:modelValue":o[2]||(o[2]=a=>e.formData.department=a)},{default:l(()=>[r(p,{label:`${e.pack.eat}${e.pack.departmentUnit}`},null,8,["label"]),r(p,{label:`${e.pack.sleep}${e.pack.departmentUnit}`},null,8,["label"]),r(p,{label:`${e.pack.play}${e.pack.departmentUnit}`},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),r(c,{class:"mb",multiple:"",placeholder:e.pack.group,rules:[a=>a.length>=1||e.pack.groupMessage],modelValue:e.formData.group,"onUpdate:modelValue":o[3]||(o[3]=a=>e.formData.group=a)},{default:l(()=>[r(p,{label:`${e.pack.eat}${e.pack.groupUnit}`},null,8,["label"]),r(p,{label:`${e.pack.sleep}${e.pack.groupUnit}`},null,8,["label"]),r(p,{label:`${e.pack.play}${e.pack.groupUnit}`},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),r(B,{class:"mb",rules:[a=>!!a||e.pack.genderMessage],modelValue:e.formData.gender,"onUpdate:modelValue":o[4]||(o[4]=a=>e.formData.gender=a)},{default:l(()=>[r(i,{"checked-value":1},{default:l(()=>[s(u(e.pack.male),1)]),_:1}),r(i,{"checked-value":2},{default:l(()=>[s(u(e.pack.female),1)]),_:1})]),_:1},8,["rules","modelValue"]),r(w,{class:"mb",rules:[a=>a.length>0||e.pack.likeMessage],modelValue:e.formData.like,"onUpdate:modelValue":o[5]||(o[5]=a=>e.formData.like=a)},{default:l(()=>[r(b,{"checked-value":1},{default:l(()=>[s(u(e.pack.eat),1)]),_:1}),r(b,{"checked-value":2},{default:l(()=>[s(u(e.pack.sleep),1)]),_:1}),r(b,{"checked-value":3},{default:l(()=>[s(u(e.pack.play),1)]),_:1})]),_:1},8,["rules","modelValue"]),r(x,{class:"mb",rules:[a=>a>=3||e.pack.rateMessage],modelValue:e.formData.score,"onUpdate:modelValue":o[6]||(o[6]=a=>e.formData.score=a)},null,8,["rules","modelValue"]),y("div",Fe,[r(A,{rules:[a=>!!a||e.pack.licenseMessage],modelValue:e.formData.license,"onUpdate:modelValue":o[7]||(o[7]=a=>e.formData.license=a)},null,8,["rules","modelValue"])]),y("div",Me,[r(S,{rules:[a=>a>10||e.pack.countMessage],modelValue:e.formData.count,"onUpdate:modelValue":o[8]||(o[8]=a=>e.formData.count=a)},null,8,["rules","modelValue"])]),r(I,{class:"mb",rules:[a=>a>10||e.pack.rangeMessage],modelValue:e.formData.range,"onUpdate:modelValue":o[9]||(o[9]=a=>e.formData.range=a)},null,8,["rules","modelValue"]),r(T,{class:"mb",rules:[a=>a.length>=1||e.pack.filesMessage],modelValue:e.formData.files,"onUpdate:modelValue":o[10]||(o[10]=a=>e.formData.files=a)},null,8,["rules","modelValue"])]),_:1},8,["disabled","readonly"]),r(d,null,{default:l(()=>[s(u(e.pack.controller),1)]),_:1}),r(_,{class:"mt",block:"",type:"danger",onClick:o[11]||(o[11]=a=>e.form.reset())},{default:l(()=>[s(u(e.pack.reset),1)]),_:1}),r(_,{class:"mt",block:"",type:"warning",onClick:o[12]||(o[12]=a=>e.form.resetValidation())},{default:l(()=>[s(u(e.pack.resetValidation),1)]),_:1}),r(_,{class:"mt",block:"",type:"success",onClick:o[13]||(o[13]=a=>e.form.validate())},{default:l(()=>[s(u(e.pack.validate),1)]),_:1}),r(_,{class:"mt",block:"",type:"info",onClick:o[14]||(o[14]=a=>e.disabled=!e.disabled)},{default:l(()=>[s(u(e.pack.disabled),1)]),_:1}),r(_,{class:"mt",block:"",type:"primary",onClick:o[15]||(o[15]=a=>e.readonly=!e.readonly)},{default:l(()=>[s(u(e.pack.readonly),1)]),_:1}),De],64)}var pa=F(ye,[["render",he],["__scopeId","data-v-4d60761c"]]);export{pa as default};