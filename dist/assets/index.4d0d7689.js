var z=Object.defineProperty,D=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var h=(e,a,n)=>a in e?z(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,b=(e,a)=>{for(var n in a||(a={}))E.call(a,n)&&h(e,n,a[n]);if(f)for(var n of f(a))B.call(a,n)&&h(e,n,a[n]);return e},y=(e,a)=>D(e,S(a));import{_ as N}from"./index.1c833f41.js";import{u as j,r as F,o as M,b as w,t as O,an as R,d as r,ao as U,e as d,n as k,w as s,E as $,g as c,j as l,ap as A,i as _,f as g,h as L,k as T}from"./vendor.363d5303.js";const q={name:"dynamin_index",setup(){j();const e=F({staff_name:"",file_name:"",loading:!1,tableData:[],total:0,currentPage:1,pageSize:10});M(()=>{a()});const a=()=>{e.loading=!0,w.get("/api/back/fileEmployees",{params:{page:e.currentPage,page_size:e.pageSize,file_name:e.file_name,staff_name:e.staff_name}}).then(o=>{e.tableData=o.data,e.pageSize=o.pagination.perPage,e.total=o.pagination.total,e.currentPage=o.pagination.currentPage,e.loading=!1})},n=()=>{e.currentPage=1,a()},p=o=>{e.currentPage=o,a()},m=(o,u)=>{w.put("/api/back/fileEmployees/status",{id:o,status:u}).then(()=>{$.success("\u4FEE\u6539\u6210\u529F"),a()})};return y(b({},O(e)),{handleOption:n,changePage:p,handleStatus:m,Plus:R})}},G=T("\u641C\u7D22"),H={key:0,style:{color:"#67C23A"}},I={key:1,style:{color:"#F56C6C"}},J=["onClick"];function K(e,a,n,p,m,o){const u=r("el-input"),C=r("el-button"),i=r("el-table-column"),x=r("el-table"),v=r("el-pagination"),P=r("el-card"),V=U("loading");return d(),k(P,{style:{"min-height":"100%"}},{header:s(()=>[c("div",null,[l(u,{style:{width:"200px","margin-top":"20px","margin-right":"10px","margin-left":"10px"},placeholder:"\u8BF7\u8F93\u5165\u5458\u5DE5\u540D\u5B57",modelValue:e.staff_name,"onUpdate:modelValue":a[0]||(a[0]=t=>e.staff_name=t),clearable:""},null,8,["modelValue"]),l(u,{style:{width:"200px","margin-top":"20px","margin-right":"10px","margin-left":"10px"},placeholder:"\u8BF7\u8F93\u5165\u6587\u4EF6\u540D",modelValue:e.file_name,"onUpdate:modelValue":a[1]||(a[1]=t=>e.file_name=t),clearable:""},null,8,["modelValue"]),l(C,{type:"primary",onClick:p.handleOption},{default:s(()=>[G]),_:1},8,["onClick"])])]),default:s(()=>[A((d(),k(x,{data:e.tableData,stripe:"",style:{width:"100%"}},{default:s(()=>[l(i,{prop:"id",label:"id",width:"100"}),l(i,{prop:"file_name",label:"\u6587\u4EF6\u540D",width:"300"}),l(i,{prop:"staff_name",label:"\u5458\u5DE5\u540D",width:"100"}),l(i,{prop:"file_size_m",label:"\u6587\u4EF6\u5927\u5C0F(\u5146)",width:"100"},{default:s(t=>[c("span",null,_(t.row.files.file_size_m),1)]),_:1}),l(i,{prop:"file_type",label:"\u6587\u4EF6\u7C7B\u578B",width:"300"},{default:s(t=>[c("span",null,_(t.row.files.file_type),1)]),_:1}),l(i,{prop:"extension",label:"\u6587\u4EF6\u6269\u5C55\u540D",width:"100"},{default:s(t=>[c("span",null,_(t.row.files.extension),1)]),_:1}),l(i,{prop:"status",label:"\u72B6\u6001"},{default:s(t=>[t.row.status==1?(d(),g("span",H,"\u6B63\u5E38")):(d(),g("span",I,"\u5DF2\u5220\u9664"))]),_:1}),l(i,{prop:"created_at",label:"\u521B\u5EFA\u65F6\u95F4"}),l(i,{label:"\u64CD\u4F5C",width:"200"},{default:s(t=>[t.row.status!=0?(d(),g("a",{key:0,style:{cursor:"pointer","margin-right":"10px",color:"#409EFF"},onClick:Q=>p.handleStatus(t.row.id,0)},"\u5220\u9664",8,J)):L("",!0)]),_:1})]),_:1},8,["data"])),[[V,e.loading]]),l(v,{background:"",layout:"prev, pager, next",total:e.total,"page-size":e.pageSize,"current-page":e.currentPage,onCurrentChange:p.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})}var Z=N(q,[["render",K]]);export{Z as default};