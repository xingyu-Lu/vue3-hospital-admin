var V=Object.defineProperty,w=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var h=(t,o,n)=>o in t?V(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,k=(t,o)=>{for(var n in o||(o={}))j.call(o,n)&&h(t,n,o[n]);if(_)for(var n of _(o))y.call(o,n)&&h(t,n,o[n]);return t},b=(t,o)=>w(t,z(o));import{W as A}from"./wangEditor.24174217.js";import{_ as H,a as S,c as I}from"./index.5da2057f.js";import{am as v,aq as $,u as B,r as M,o as N,b as g,au as R,t as E,d as c,e as F,n as L,w as l,E as x,j as d,g as q,k as C,i as O}from"./vendor.f30e6799.js";const P={name:"organization_add",setup(){const t=v(null),o=v(null),n=$(),u=B(),{id:i}=n.query,r=M({token:"Bearer "+S("token")||"",id:i,Form:{content:""},rules:{content:[{required:!1,message:"\u5185\u5BB9\u5FC5\u987B",trigger:["change"]}]}});let e;N(()=>{e=new A(t.value),e.config.lineHeights=["1","1.15","1.5","2","2.5","3"],e.config.showLinkImg=!1,e.config.showLinkImgAlt=!1,e.config.showLinkImgHref=!1,e.config.uploadImgMaxSize=10*1024*1024,e.config.uploadImgMaxLength=1,e.config.uploadImgAccept=["jpg","jpeg","png","gif","bmp","webp"],e.config.uploadFileName="file",e.config.uploadImgHeaders={Authorization:r.token},e.config.uploadImgParams={basket:"img"},e.config.uploadImgHooks={customInsert:function(a,s){console.log("result",s),a(s.data.src)}},e.config.uploadImgServer=I,Object.assign(e.config,{onchange(){console.log("change")}}),e.config.uploadVideoServer=I,e.config.uploadVideoMaxSize=1*200*1024*1024,e.config.uploadVideoAccept=["mp4"],e.config.uploadVideoParams={basket:"video"},e.config.uploadVideoName="file",e.config.uploadVideoHeaders={Authorization:r.token},e.config.uploadVideoHooks={customInsert:function(a,s){console.log("customInsert",s),a(s.data.src)}},e.create(),i&&g.get(`/api/back/organizations/${i}`).then(a=>{r.Form={content:a.data.content},e&&e.txt.html(a.data.content)})}),R(()=>{e.destroy(),e=null});const f=()=>{o.value.validate(a=>{if(a){let s=g.post,p={content:e.txt.html()},m="/api/back/organizations";i&&(s=g.put,m=`/api/back/organizations/${i}`),s(m,p).then(()=>{i?x.success("\u4FEE\u6539\u6210\u529F"):x.success("\u6DFB\u52A0\u6210\u529F"),u.push({path:"/organization"})})}})};return b(k({},E(r)),{editor:t,Ref:o,submitAdd:f})}},W={ref:"editor"};function D(t,o,n,u,i,r){const e=c("el-form-item"),f=c("el-button"),a=c("el-form"),s=c("el-card");return F(),L(s,{style:{"min-height":"100%"}},{default:l(()=>[d(a,{model:t.Form,rules:t.rules,ref:"Ref","label-width":"100px",style:{"margin-top":"30px"}},{default:l(()=>[d(e,{label:"\u5185\u5BB9",prop:"content"},{default:l(()=>[q("div",W,null,512)]),_:1}),d(e,null,{default:l(()=>[d(f,{type:"primary",onClick:o[0]||(o[0]=p=>u.submitAdd())},{default:l(()=>[C(O(t.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var K=H(P,[["render",D]]);export{K as default};
