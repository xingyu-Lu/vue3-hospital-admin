var f=Object.defineProperty,y=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var l=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t)=>{for(var n in t||(t={}))M.call(t,n)&&l(e,n,t[n]);if(d)for(var n of d(t))T.call(t,n)&&l(e,n,t[n]);return e},p=(e,t)=>y(e,v(t));import{_ as k}from"./index.658fd197.js";import{ap as B,u as H,r as L,o as x,b,t as g,d as u,e as j,n as w,w as i,j as C,g as a,k as r}from"./vendor.79f6bf74.js";const $={name:"dynamic_preview",setup(){const e=B(),t=H(),{id:n}=e.query,s=L({data:{title:"",release_time:"",content:"",num:""}});x(()=>{n&&b.get(`/api/back/patientServices/${n}`).then(o=>{s.data={title:o.data.title,release_time:o.data.release_time,content:o.data.content,num:o.data.num}})});const c=()=>{t.push({path:"/patient"})};return p(_({},g(s)),{handleBack:c})}},N=r("\u8FD4\u56DE"),R={style:{display:"flex","justify-content":"center"}},V=["innerHTML"],q={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px"}},z=r(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),S=["innerHTML"],A=a("span",null,"\xA0\xA0\xA0\xA0",-1),D=r(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),E=["innerHTML"],F=["innerHTML"];function G(e,t,n,s,c,o){const m=u("el-button"),h=u("el-card");return j(),w(h,{style:{"min-height":"100%"}},{header:i(()=>[C(m,{type:"primary",onClick:s.handleBack},{default:i(()=>[N]),_:1},8,["onClick"])]),default:i(()=>[a("div",R,[a("strong",{innerHTML:e.data.title},null,8,V)]),a("div",q,[z,a("span",{innerHTML:e.data.release_time},null,8,S),A,D,a("span",{innerHTML:e.data.num},null,8,E)]),a("div",{innerHTML:e.data.content},null,8,F)]),_:1})}var O=k($,[["render",G]]);export{O as default};
