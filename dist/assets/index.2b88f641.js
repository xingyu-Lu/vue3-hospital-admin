var z=Object.defineProperty,D=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var h=(e,a,n)=>a in e?z(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,b=(e,a)=>{for(var n in a||(a={}))S.call(a,n)&&h(e,n,a[n]);if(m)for(var n of m(a))F.call(a,n)&&h(e,n,a[n]);return e},y=(e,a)=>D(e,E(a));import{u as B,r as N,o as j,b as w,t as M,an as O,d as r,ao as R,e as d,n as k,w as s,E as U,g as u,j as l,ap as $,i as _,f,h as A,k as L}from"./vendor.a46ae12f.js";import{_ as T}from"./index.f781f7e6.js";const q={name:"dynamin_index",setup(){B();const e=N({staff_name:"",file_name:"",loading:!1,tableData:[],total:0,currentPage:1,pageSize:10});j(()=>{a()});const a=()=>{e.loading=!0,w.get("/api/back/fileEmployees",{params:{page:e.currentPage,page_size:e.pageSize,file_name:e.file_name,staff_name:e.staff_name}}).then(o=>{e.tableData=o.data,e.pageSize=o.pagination.perPage,e.total=o.pagination.total,e.currentPage=o.pagination.currentPage,e.loading=!1})},n=()=>{e.currentPage=1,a()},p=o=>{e.currentPage=o,a()},g=(o,c)=>{w.put("/api/back/fileEmployees/status",{id:o,status:c}).then(()=>{U.success("\u4FEE\u6539\u6210\u529F"),a()})};return y(b({},M(e)),{handleOption:n,changePage:p,handleStatus:g,Plus:O})}},G=L("\u641C\u7D22"),H={key:0,style:{color:"#67C23A"}},I={key:1,style:{color:"#F56C6C"}},J=["onClick"],K=["href"];function Q(e,a,n,p,g,o){const c=r("el-input"),x=r("el-button"),i=r("el-table-column"),C=r("el-table"),v=r("el-pagination"),P=r("el-card"),V=R("loading");return d(),k(P,{style:{"min-height":"100%"}},{header:s(()=>[u("div",null,[l(c,{style:{width:"200px","margin-top":"20px","margin-right":"10px","margin-left":"10px"},placeholder:"\u8BF7\u8F93\u5165\u5458\u5DE5\u540D\u5B57",modelValue:e.staff_name,"onUpdate:modelValue":a[0]||(a[0]=t=>e.staff_name=t),clearable:""},null,8,["modelValue"]),l(c,{style:{width:"200px","margin-top":"20px","margin-right":"10px","margin-left":"10px"},placeholder:"\u8BF7\u8F93\u5165\u6587\u4EF6\u540D",modelValue:e.file_name,"onUpdate:modelValue":a[1]||(a[1]=t=>e.file_name=t),clearable:""},null,8,["modelValue"]),l(x,{type:"primary",onClick:p.handleOption},{default:s(()=>[G]),_:1},8,["onClick"])])]),default:s(()=>[$((d(),k(C,{data:e.tableData,stripe:"",style:{width:"100%"}},{default:s(()=>[l(i,{prop:"id",label:"id",width:"100"}),l(i,{prop:"file_name",label:"\u6587\u4EF6\u540D",width:"300"}),l(i,{prop:"staff_name",label:"\u5458\u5DE5\u540D",width:"100"}),l(i,{prop:"file_size_m",label:"\u6587\u4EF6\u5927\u5C0F(\u5146)",width:"100"},{default:s(t=>[u("span",null,_(t.row.files.file_size_m),1)]),_:1}),l(i,{prop:"file_type",label:"\u6587\u4EF6\u7C7B\u578B",width:"300"},{default:s(t=>[u("span",null,_(t.row.files.file_type),1)]),_:1}),l(i,{prop:"extension",label:"\u6587\u4EF6\u6269\u5C55\u540D",width:"100"},{default:s(t=>[u("span",null,_(t.row.files.extension),1)]),_:1}),l(i,{prop:"status",label:"\u72B6\u6001"},{default:s(t=>[t.row.status==1?(d(),f("span",H,"\u6B63\u5E38")):(d(),f("span",I,"\u5DF2\u5220\u9664"))]),_:1}),l(i,{prop:"created_at",label:"\u521B\u5EFA\u65F6\u95F4"}),l(i,{label:"\u64CD\u4F5C",width:"200"},{default:s(t=>[t.row.status!=0?(d(),f("a",{key:0,style:{cursor:"pointer","margin-right":"10px",color:"#409EFF"},onClick:W=>p.handleStatus(t.row.id,0)},"\u5220\u9664",8,J)):A("",!0),u("a",{style:{"text-decoration":"none",cursor:"pointer","margin-right":"10px",color:"#409EFF"},href:t.row.file_url},"\u4E0B\u8F7D",8,K)]),_:1})]),_:1},8,["data"])),[[V,e.loading]]),l(v,{background:"",layout:"prev, pager, next",total:e.total,"page-size":e.pageSize,"current-page":e.currentPage,onCurrentChange:p.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})}var ee=T(q,[["render",Q]]);export{ee as default};
