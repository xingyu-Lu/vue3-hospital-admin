var f=Object.defineProperty,y=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var l=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t)=>{for(var n in t||(t={}))H.call(t,n)&&l(e,n,t[n]);if(d)for(var n of d(t))M.call(t,n)&&l(e,n,t[n]);return e},u=(e,t)=>y(e,v(t));import{_ as T}from"./index.09bea2ec.js";import{aq as k,u as B,r as L,o as b,b as x,t as g,d as p,e as j,n as w,w as i,j as C,g as a,k as c}from"./vendor.404bcab0.js";const $={name:"dynamic_preview",setup(){const e=k(),t=B(),{id:n}=e.query,s=L({data:{title:"",release_time:"",content:"",num:""}});b(()=>{n&&x.get(`/api/back/technicalOfficeHealthSciences/${n}`).then(o=>{s.data={title:o.data.title,release_time:o.data.release_time,content:o.data.content,num:o.data.num}})});const r=()=>{t.push({path:"/technicaloffice-healthscience"})};return u(_({},g(s)),{handleBack:r})}},N=c("\u8FD4\u56DE"),R={style:{display:"flex","justify-content":"center"}},V=["innerHTML"],q={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px"}},z=c(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),O=["innerHTML"],S=a("span",null,"\xA0\xA0\xA0\xA0",-1),A=c(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),D=["innerHTML"],E=["innerHTML"];function F(e,t,n,s,r,o){const h=p("el-button"),m=p("el-card");return j(),w(m,{style:{"min-height":"100%"}},{header:i(()=>[C(h,{type:"primary",onClick:s.handleBack},{default:i(()=>[N]),_:1},8,["onClick"])]),default:i(()=>[a("div",R,[a("strong",{innerHTML:e.data.title},null,8,V)]),a("div",q,[z,a("span",{innerHTML:e.data.release_time},null,8,O),S,A,a("span",{innerHTML:e.data.num},null,8,D)]),a("div",{innerHTML:e.data.content},null,8,E)]),_:1})}var K=T($,[["render",F]]);export{K as default};
