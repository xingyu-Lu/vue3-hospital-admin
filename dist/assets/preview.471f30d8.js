var m=Object.defineProperty,v=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var _=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,l=(e,t)=>{for(var n in t||(t={}))M.call(t,n)&&_(e,n,t[n]);if(r)for(var n of r(t))T.call(t,n)&&_(e,n,t[n]);return e},p=(e,t)=>v(e,y(t));import{_ as k}from"./index.ca2f71ab.js";import{aq as x,u as B,r as H,o as L,b as g,t as w,d as u,e as b,n as j,w as i,j as C,g as a,k as c,p as I,l as S}from"./vendor.363d5303.js";const $={name:"dynamic_preview",setup(){const e=x(),t=B(),{id:n}=e.query,s=H({data:{title:"",release_time:"",content:"",num:""}});L(()=>{n&&g.get(`/api/back/patientServices/${n}`).then(o=>{s.data={title:o.data.title,release_time:o.data.release_time,content:o.data.content,num:o.data.num}})});const d=()=>{t.push({path:"/patient"})};return p(l({},w(s)),{handleBack:d})}},N=e=>(I("data-v-ffe2dac0"),e=e(),S(),e),R=c("\u8FD4\u56DE"),V={style:{display:"flex","justify-content":"center"}},q=["innerHTML"],z={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px"}},A=c(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),D=["innerHTML"],E=N(()=>a("span",null,"\xA0\xA0\xA0\xA0",-1)),F=c(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),G=["innerHTML"],J=["innerHTML"];function K(e,t,n,s,d,o){const h=u("el-button"),f=u("el-card");return b(),j(f,{style:{"min-height":"100%"}},{header:i(()=>[C(h,{type:"primary",onClick:s.handleBack},{default:i(()=>[R]),_:1},8,["onClick"])]),default:i(()=>[a("div",V,[a("strong",{innerHTML:e.data.title},null,8,q)]),a("div",z,[A,a("span",{innerHTML:e.data.release_time},null,8,D),E,F,a("span",{innerHTML:e.data.num},null,8,G)]),a("span",{innerHTML:e.data.content},null,8,J)]),_:1})}var U=k($,[["render",K],["__scopeId","data-v-ffe2dac0"]]);export{U as default};
