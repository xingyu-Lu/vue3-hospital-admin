var z=Object.defineProperty,S=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var k=(t,e,a)=>e in t?z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,b=(t,e)=>{for(var a in e||(e={}))E.call(e,a)&&k(t,a,e[a]);if(m)for(var a of m(e))B.call(e,a)&&k(t,a,e[a]);return t},y=(t,e)=>S(t,D(e));import{_ as j}from"./index.722ea317.js";import{u as I,r as N,o as O,b as v,t as V,al as q,d,am as A,e as s,n as C,w as l,E as M,j as c,an as R,f as p,g as w,k as L}from"./vendor.15e5bf5f.js";const T={name:"technicaloffice_introduce_index",setup(){const t=I(),e=N({loading:!1,tableData:[],total:0,currentPage:1,pageSize:10});O(()=>{a()});const a=()=>{e.loading=!0,v.get("/api/back/technicalOfficeIntroduces",{params:{page:e.currentPage,page_size:e.pageSize}}).then(n=>{e.tableData=n.data,e.pageSize=n.pagination.perPage,e.total=n.pagination.total,e.currentPage=n.pagination.currentPage,e.loading=!1})},o=n=>{e.currentPage=n,a()},_=()=>{t.push({path:"/technicaloffice-introduce-add"})},f=n=>{t.push({path:"/technicaloffice-introduce-add",query:{id:n}})},u=n=>{t.push({path:"/technicaloffice-introduce-preview",query:{id:n}})},i=(n,g)=>{v.put("/api/back/technicalOfficeIntroduces/status",{id:n,status:g}).then(()=>{M.success("\u4FEE\u6539\u6210\u529F"),a()})};return y(b({},V(e)),{changePage:o,handleAdd:_,handleEdit:f,handlePreview:u,handleStatus:i,Plus:q})}},$=L("\u65B0\u589E"),F={key:0,style:{color:"green"}},G={key:1,style:{color:"red"}},H=["onClick"],J=["onClick"],K=["onClick"],Q=["onClick"];function U(t,e,a,o,_,f){const u=d("el-button"),i=d("el-table-column"),n=d("el-table"),g=d("el-pagination"),P=d("el-card"),x=A("loading");return s(),C(P,{style:{"min-height":"100%"}},{header:l(()=>[c(u,{type:"primary",icon:o.Plus,onClick:o.handleAdd},{default:l(()=>[$]),_:1},8,["icon","onClick"])]),default:l(()=>[R((s(),C(n,{data:t.tableData,stripe:"",style:{width:"100%"}},{default:l(()=>[c(i,{prop:"id",label:"id"}),c(i,{prop:"office_name",label:"\u79D1\u5BA4\u540D\u79F0"}),c(i,{prop:"status",label:"\u72B6\u6001"},{default:l(r=>[r.row.status==1?(s(),p("span",F,"\u5DF2\u5BA1\u6838")):(s(),p("span",G,"\u5F85\u5BA1\u6838"))]),_:1}),c(i,{prop:"created_at",label:"\u521B\u5EFA\u65F6\u95F4"}),c(i,{label:"\u64CD\u4F5C",width:"200"},{default:l(r=>[w("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:h=>o.handlePreview(r.row.id)},"\u9884\u89C8",8,H),w("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:h=>o.handleEdit(r.row.id)},"\u4FEE\u6539",8,J),r.row.status==1?(s(),p("a",{key:0,style:{cursor:"pointer","margin-right":"10px"},onClick:h=>o.handleStatus(r.row.id,0)},"\u64A4\u9500\u5BA1\u6838",8,K)):(s(),p("a",{key:1,style:{cursor:"pointer","margin-right":"10px"},onClick:h=>o.handleStatus(r.row.id,1)},"\u5BA1\u6838",8,Q))]),_:1})]),_:1},8,["data"])),[[x,t.loading]]),c(g,{background:"",layout:"prev, pager, next",total:t.total,"page-size":t.pageSize,"current-page":t.currentPage,onCurrentChange:o.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})}var Z=j(T,[["render",U]]);export{Z as default};