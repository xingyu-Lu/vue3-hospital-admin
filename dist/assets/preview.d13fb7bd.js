var f=Object.defineProperty,y=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var l=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t)=>{for(var n in t||(t={}))M.call(t,n)&&l(e,n,t[n]);if(d)for(var n of d(t))T.call(t,n)&&l(e,n,t[n]);return e},u=(e,t)=>y(e,v(t));import{_ as k}from"./index.9294778e.js";import{aq as B,u as H,r as L,o as x,b as g,t as j,d as p,e as b,n as w,w as i,j as C,g as o,k as c}from"./vendor.363d5303.js";const $={name:"dynamic_preview",setup(){const e=B(),t=H(),{id:n}=e.query,s=L({data:{title:"",release_time:"",content:"",num:""}});x(()=>{n&&g.get(`/api/back/scientifics/${n}`).then(a=>{s.data={title:a.data.title,release_time:a.data.release_time,content:a.data.content,num:a.data.num}})});const r=()=>{t.push({path:"/scientific"})};return u(_({},j(s)),{handleBack:r})}},N=c("\u8FD4\u56DE"),R={style:{display:"flex","justify-content":"center"}},V=["innerHTML"],q={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px"}},z=c(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),A=["innerHTML"],D=o("span",null,"\xA0\xA0\xA0\xA0",-1),E=c(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),F=["innerHTML"],G=["innerHTML"];function I(e,t,n,s,r,a){const m=p("el-button"),h=p("el-card");return b(),w(h,{style:{"min-height":"100%"}},{header:i(()=>[C(m,{type:"primary",onClick:s.handleBack},{default:i(()=>[N]),_:1},8,["onClick"])]),default:i(()=>[o("div",R,[o("strong",{innerHTML:e.data.title},null,8,V)]),o("div",q,[z,o("span",{innerHTML:e.data.release_time},null,8,A),D,E,o("span",{innerHTML:e.data.num},null,8,F)]),o("div",{innerHTML:e.data.content},null,8,G)]),_:1})}var P=k($,[["render",I]]);export{P as default};
