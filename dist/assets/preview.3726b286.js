var y=Object.defineProperty,v=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var r=(e,t,n)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))T.call(t,n)&&r(e,n,t[n]);if(_)for(var n of _(t))H.call(t,n)&&r(e,n,t[n]);return e},l=(e,t)=>v(e,M(t));import{_ as L}from"./index.5da2057f.js";import{aq as k,u as B,r as x,o as g,b as w,t as j,d as u,e as b,n as C,w as c,j as I,g as a,k as i,p as S,l as $}from"./vendor.f30e6799.js";const q={name:"dynamic_preview",setup(){const e=k(),t=B(),{id:n}=e.query,s=x({data:{title:"",office_name:"",release_time:"",content:"",num:"",type:0}});g(()=>{n&&w.get(`/api/back/patientServices/${n}`).then(o=>{s.data={title:o.data.title,office_name:o.data.office_name,release_time:o.data.release_time,content:o.data.content,num:o.data.num,type:o.data.type}})});const d=()=>{t.push({path:"/patient",query:{type:s.data.type}})};return l(p({},j(s)),{handleBack:d})}},f=e=>(S("data-v-0a217894"),e=e(),$(),e),N=i("\u8FD4\u56DE"),R={style:{display:"flex","justify-content":"center"}},V=["innerHTML"],z={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px"}},A=i(" \u53D1\u5E03\u79D1\u5BA4\uFF1A"),D=["innerHTML"],E=f(()=>a("span",null,"\xA0\xA0\xA0\xA0",-1)),F=i(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),G=["innerHTML"],J=f(()=>a("span",null,"\xA0\xA0\xA0\xA0",-1)),K=i(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),O=["innerHTML"],P=["innerHTML"];function Q(e,t,n,s,d,o){const h=u("el-button"),m=u("el-card");return b(),C(m,{style:{"min-height":"100%"}},{header:c(()=>[I(h,{type:"primary",onClick:s.handleBack},{default:c(()=>[N]),_:1},8,["onClick"])]),default:c(()=>[a("div",R,[a("strong",{innerHTML:e.data.title},null,8,V)]),a("div",z,[A,a("span",{innerHTML:e.data.office_name},null,8,D),E,F,a("span",{innerHTML:e.data.release_time},null,8,G),J,K,a("span",{innerHTML:e.data.num},null,8,O)]),a("span",{innerHTML:e.data.content},null,8,P)]),_:1})}var Y=L(q,[["render",Q],["__scopeId","data-v-0a217894"]]);export{Y as default};
