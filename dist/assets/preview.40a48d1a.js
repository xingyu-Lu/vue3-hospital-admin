var m=Object.defineProperty,y=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var l=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t)=>{for(var n in t||(t={}))M.call(t,n)&&l(e,n,t[n]);if(d)for(var n of d(t))T.call(t,n)&&l(e,n,t[n]);return e},u=(e,t)=>y(e,v(t));import{_ as k}from"./index.ca2f71ab.js";import{aq as B,u as H,r as L,o as x,b,t as g,d as p,e as j,n as w,w as i,j as C,g as a,k as c}from"./vendor.363d5303.js";const $={name:"dynamic_preview",setup(){const e=B(),t=H(),{id:n}=e.query,s=L({data:{title:"",release_time:"",content:"",num:""}});x(()=>{n&&b.get(`/api/back/technicalOfficeFeatures/${n}`).then(o=>{s.data={title:o.data.title,release_time:o.data.release_time,content:o.data.content,num:o.data.num}})});const r=()=>{t.push({path:"/technicaloffice-feature"})};return u(_({},g(s)),{handleBack:r})}},N=c("\u8FD4\u56DE"),R={style:{display:"flex","justify-content":"center"}},V=["innerHTML"],q={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px"}},z=c(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),F=["innerHTML"],O=a("span",null,"\xA0\xA0\xA0\xA0",-1),A=c(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),D=["innerHTML"],E=["innerHTML"];function G(e,t,n,s,r,o){const f=p("el-button"),h=p("el-card");return j(),w(h,{style:{"min-height":"100%"}},{header:i(()=>[C(f,{type:"primary",onClick:s.handleBack},{default:i(()=>[N]),_:1},8,["onClick"])]),default:i(()=>[a("div",R,[a("strong",{innerHTML:e.data.title},null,8,V)]),a("div",q,[z,a("span",{innerHTML:e.data.release_time},null,8,F),O,A,a("span",{innerHTML:e.data.num},null,8,D)]),a("div",{innerHTML:e.data.content},null,8,E)]),_:1})}var P=k($,[["render",G]]);export{P as default};
