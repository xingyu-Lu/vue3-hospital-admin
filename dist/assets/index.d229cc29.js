var D=Object.defineProperty,L=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var f=(a,e,o)=>e in a?D(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o,y=(a,e)=>{for(var o in e||(e={}))A.call(e,o)&&f(a,o,e[o]);if(b)for(var o of b(e))B.call(e,o)&&f(a,o,e[o]);return a},C=(a,e)=>L(a,S(e));import{_ as N}from"./index.665f9c70.js";import{u as V,r as j,o as M,b as h,t as P,an as R,d as c,ao as $,e as n,n as m,w as i,E as q,j as l,ap as z,f as d,g as F,h as w,k as T}from"./vendor.8eeddf68.js";const G={name:"rotate_list",setup(){const a=V(),e=j({loading:!1,tableData:[],srcList:[]});M(()=>{o(),r()});const o=()=>{e.loading=!0,h.get("/api/back/leaders").then(t=>{e.tableData=t.data,e.loading=!1})},r=()=>{h.get("/api/back/leaders/srclist").then(t=>{e.srcList=t.data})},k=()=>{a.push({path:"/leader-add"})},g=t=>{a.push({path:"/leader-add",query:{id:t}})},_=(t,u)=>{h.put("/api/back/leaders/status",{id:t,status:u}).then(()=>{q.success("\u4FEE\u6539\u6210\u529F"),o()})};return C(y({},P(e)),{handleAdd:k,handleEdit:g,handleStatus:_,Plus:R})}},H=T("\u65B0\u589E"),I={key:0,style:{color:"#67C23A"}},J={key:1,style:{color:"#E6A23C"}},K={key:2,style:{color:"#F56C6C"}},O=["onClick"],Q=["onClick"],U=["onClick"],W=["onClick"];function X(a,e,o,r,k,g){const _=c("el-button"),t=c("el-table-column"),u=c("el-image"),v=c("el-table"),x=c("el-card"),E=$("loading");return n(),m(x,{style:{"min-height":"100%"}},{header:i(()=>[l(_,{type:"primary",icon:r.Plus,onClick:r.handleAdd},{default:i(()=>[H]),_:1},8,["icon","onClick"])]),default:i(()=>[z((n(),m(v,{data:a.tableData,stripe:"",style:{width:"100%"}},{default:i(()=>[l(t,{prop:"id",label:"id"}),l(t,{label:"\u56FE\u7247"},{default:i(s=>[(n(),m(u,{key:s.row.id,src:s.row.url,lazy:!0,"initial-index":1},null,8,["src"]))]),_:1}),l(t,{prop:"position",label:"\u804C\u52A1"}),l(t,{prop:"professional",label:"\u804C\u79F0"}),l(t,{prop:"status",label:"\u72B6\u6001"},{default:i(s=>[s.row.status==1?(n(),d("span",I,"\u5DF2\u5BA1\u6838")):s.row.status==0?(n(),d("span",J,"\u5F85\u5BA1\u6838")):(n(),d("span",K,"\u5BA1\u6838\u4E0D\u8FC7"))]),_:1}),l(t,{prop:"sort",label:"\u6392\u5E8F"}),l(t,{prop:"created_at",label:"\u521B\u5EFA\u65F6\u95F4"}),l(t,{label:"\u64CD\u4F5C",width:"200"},{default:i(s=>[F("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:p=>r.handleEdit(s.row.id)},"\u4FEE\u6539",8,O),s.row.status==0?(n(),d("a",{key:0,style:{cursor:"pointer","margin-right":"10px"},onClick:p=>r.handleStatus(s.row.id,2)},"\u5BA1\u6838\u4E0D\u8FC7",8,Q)):w("",!0),s.row.status==1?(n(),d("a",{key:1,style:{cursor:"pointer","margin-right":"10px"},onClick:p=>r.handleStatus(s.row.id,0)},"\u64A4\u9500\u5BA1\u6838",8,U)):s.row.status==0?(n(),d("a",{key:2,style:{cursor:"pointer","margin-right":"10px"},onClick:p=>r.handleStatus(s.row.id,1)},"\u5BA1\u6838",8,W)):w("",!0)]),_:1})]),_:1},8,["data"])),[[E,a.loading]])]),_:1})}var te=N(G,[["render",X]]);export{te as default};