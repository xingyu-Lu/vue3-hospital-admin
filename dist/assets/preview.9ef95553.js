var p=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var i=(n,e,t)=>e in n?p(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,d=(n,e)=>{for(var t in e||(e={}))k.call(e,t)&&i(n,t,e[t]);if(r)for(var t of r(e))b.call(e,t)&&i(n,t,e[t]);return n},u=(n,e)=>h(n,m(e));import{_ as v}from"./index.a3cf5bba.js";import{ap as x,u as w,r as B,o as y,b as C,t as $,d as _,e as g,n as j,w as o,j as M,g as N,k as R}from"./vendor.79f6bf74.js";const T={name:"technicaloffice_preview_news",setup(){const n=x(),e=w(),{id:t}=n.query,a=B({data:{content:""}});y(()=>{t&&C.get(`/api/back/technicalOfficeIntroduces/${t}`).then(s=>{a.data={content:s.data.content}})});const c=()=>{e.push({path:"/technicaloffice-introduce"})};return u(d({},$(a)),{handleBack:c})}},V=R("\u8FD4\u56DE"),H=["innerHTML"];function L(n,e,t,a,c,s){const f=_("el-button"),l=_("el-card");return g(),j(l,{style:{"min-height":"100%"}},{header:o(()=>[M(f,{type:"primary",onClick:a.handleBack},{default:o(()=>[V]),_:1},8,["onClick"])]),default:o(()=>[N("div",{innerHTML:n.data.content},null,8,H)]),_:1})}var z=v(T,[["render",L]]);export{z as default};
