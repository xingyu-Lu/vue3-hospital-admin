var w=Object.defineProperty,y=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var _=(a,e,t)=>e in a?w(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,p=(a,e)=>{for(var t in e||(e={}))D.call(e,t)&&_(a,t,e[t]);if(c)for(var t of c(e))j.call(e,t)&&_(a,t,e[t]);return a},u=(a,e)=>y(a,C(e));import{am as h,u as B,r as N,o as R,b as V,t as A,an as E,d,ao as P,e as m,n as b,w as s,j as o,ap as $,g as q,k as L}from"./vendor.a46ae12f.js";import{_ as M}from"./index.4b462ec4.js";const T={name:"admin-list",setup(){h(!0),h(null);const a=B(),e=N({loading:!1,tableData:[]});R(()=>{t()});const t=()=>{e.loading=!0,V.get("/api/back/roles").then(r=>{e.tableData=r.data,e.loading=!1})},n=()=>{a.push({path:"/role-add"})},i=r=>{a.push({path:"/role-add",query:{id:r}})};return u(p({},A(e)),{handleAdd:n,handleEdit:i,Plus:E})}},z=L("\u65B0\u589E\u89D2\u8272"),F=["onClick"];function G(a,e,t,n,i,r){const f=d("el-button"),l=d("el-table-column"),g=d("el-table"),v=d("el-card"),k=P("loading");return m(),b(v,{style:{"min-height":"100%"}},{header:s(()=>[o(f,{type:"primary",icon:n.Plus,onClick:n.handleAdd},{default:s(()=>[z]),_:1},8,["icon","onClick"])]),default:s(()=>[$((m(),b(g,{data:a.tableData,stripe:"",style:{width:"100%"}},{default:s(()=>[o(l,{prop:"id",label:"id"}),o(l,{prop:"name",label:"\u89D2\u8272\u540D\u5B57"}),o(l,{prop:"guard_name",label:"\u5B88\u536B"}),o(l,{prop:"created_at",label:"\u521B\u5EFA\u65F6\u95F4"}),o(l,{label:"\u64CD\u4F5C",width:"100"},{default:s(x=>[q("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:H=>n.handleEdit(x.row.id)},"\u4FEE\u6539",8,F)]),_:1})]),_:1},8,["data"])),[[k,a.loading]])]),_:1})}var O=M(T,[["render",G]]);export{O as default};
