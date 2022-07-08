var A=Object.defineProperty,D=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var P=(t,e,o)=>e in t?A(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,S=(t,e)=>{for(var o in e||(e={}))O.call(e,o)&&P(t,o,e[o]);if(v)for(var o of v(e))B.call(e,o)&&P(t,o,e[o]);return t},x=(t,e)=>D(t,N(e));import{u as j,r as U,o as q,b as C,t as F,an as H,d as p,ao as L,e as s,n as V,w as c,E as z,j as a,g as y,ap as M,f as d,h as E,k}from"./vendor.a46ae12f.js";import{_ as R}from"./index.4b462ec4.js";const T={name:"dynamin_index",setup(){const t=j(),e=U({column_name:"",office_name:"",title:"",loading:!1,tableData:[],total:0,currentPage:1,pageSize:10,multipleSelection:[]});q(()=>{o()});const o=()=>{e.loading=!0,C.get("/api/back/technicalOfficeColumns",{params:{page:e.currentPage,page_size:e.pageSize,office_name:e.office_name,column_name:e.column_name,title:e.title}}).then(l=>{e.tableData=l.data,e.pageSize=l.pagination.perPage,e.total=l.pagination.total,e.currentPage=l.pagination.currentPage,e.loading=!1})},r=()=>{e.currentPage=1,o()},b=l=>{e.currentPage=l,o()},w=()=>{t.push({path:"/technicaloffice-column-add"})},u=l=>{t.push({path:"/technicaloffice-column-add",query:{id:l}})},m=l=>{t.push({path:"/technicaloffice-column-preview",query:{id:l}})},i=(l,f)=>{C.put("/api/back/technicalOfficeColumns/status",{id:l,status:f}).then(()=>{z.success("\u4FEE\u6539\u6210\u529F"),o()})},_=l=>{e.multipleSelection=l},g=()=>{C.put("/api/back/technicalOfficeColumns/healthPromotion",{multipleSelection:e.multipleSelection}).then(()=>{z.success("\u8BBE\u7F6E\u6210\u529F"),getNewsList()})};return x(S({},F(e)),{handleOption:r,changePage:b,handleAdd:w,handleEdit:u,handleStatus:i,handlePreview:m,handleSelectionChange:_,handleHealthPromotion:g,Plus:H})}},G=k("\u65B0\u589E"),I=k("\u641C\u7D22"),J=k("\u8BBE\u7F6E\u4E3A\u5065\u5EB7\u79D1\u666E"),K={key:0,style:{color:"#67C23A"}},Q={key:1,style:{color:"#F56C6C"}},W={key:0,style:{color:"#67C23A"}},X={key:1,style:{color:"#E6A23C"}},Y={key:2,style:{color:"#F56C6C"}},Z=["onClick"],$=["onClick"],ee=["onClick"],te=["onClick"],ae=["onClick"];function ne(t,e,o,r,b,w){const u=p("el-button"),m=p("el-input"),i=p("el-table-column"),_=p("el-table"),g=p("el-pagination"),l=p("el-card"),f=L("loading");return s(),V(l,{style:{"min-height":"100%"}},{header:c(()=>[a(u,{type:"primary",icon:r.Plus,onClick:r.handleAdd},{default:c(()=>[G]),_:1},8,["icon","onClick"]),y("div",null,[a(m,{style:{width:"200px","margin-top":"20px","margin-right":"10px"},placeholder:"\u8BF7\u8F93\u5165\u79D1\u5BA4\u540D\u79F0",modelValue:t.office_name,"onUpdate:modelValue":e[0]||(e[0]=n=>t.office_name=n),clearable:""},null,8,["modelValue"]),a(m,{style:{width:"200px","margin-top":"20px","margin-right":"10px"},placeholder:"\u8BF7\u8F93\u5165\u680F\u76EE\u540D\u79F0",modelValue:t.column_name,"onUpdate:modelValue":e[1]||(e[1]=n=>t.column_name=n),clearable:""},null,8,["modelValue"]),a(m,{style:{width:"200px","margin-top":"20px","margin-right":"10px"},placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",modelValue:t.title,"onUpdate:modelValue":e[2]||(e[2]=n=>t.title=n),clearable:""},null,8,["modelValue"]),a(u,{type:"primary",onClick:r.handleOption},{default:c(()=>[I]),_:1},8,["onClick"]),a(u,{type:"primary",onClick:r.handleHealthPromotion},{default:c(()=>[J]),_:1},8,["onClick"])])]),default:c(()=>[M((s(),V(_,{data:t.tableData,stripe:"",style:{width:"100%"},onSelectionChange:r.handleSelectionChange},{default:c(()=>[a(i,{type:"selection"}),a(i,{prop:"id",label:"id"}),a(i,{prop:"office_name",label:"\u79D1\u5BA4\u540D\u79F0"}),a(i,{prop:"column_name",label:"\u680F\u76EE\u540D\u79F0"}),a(i,{prop:"column_type_name",label:"\u680F\u76EE\u7C7B\u578B"}),a(i,{prop:"title",label:"\u6807\u9898"}),a(i,{prop:"release_time",label:"\u53D1\u5E03\u65F6\u95F4"}),a(i,{prop:"num",label:"\u6D4F\u89C8\u6B21\u6570"}),a(i,{prop:"sort",label:"\u6392\u5E8F"}),a(i,{prop:"is_health_promotion_set",label:"\u662F\u5426\u8BBE\u7F6E\u5065\u5EB7\u79D1\u666E"},{default:c(n=>[n.row.is_health_promotion_set==1?(s(),d("span",K,"\u662F")):(s(),d("span",Q,"\u5426"))]),_:1}),a(i,{prop:"status",label:"\u72B6\u6001"},{default:c(n=>[n.row.status==1?(s(),d("span",W,"\u5DF2\u5BA1\u6838")):n.row.status==0?(s(),d("span",X,"\u5F85\u5BA1\u6838")):(s(),d("span",Y,"\u5BA1\u6838\u4E0D\u8FC7"))]),_:1}),a(i,{prop:"created_at",label:"\u521B\u5EFA\u65F6\u95F4"}),a(i,{label:"\u64CD\u4F5C",width:"200"},{default:c(n=>[y("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:h=>r.handlePreview(n.row.id)},"\u9884\u89C8",8,Z),y("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:h=>r.handleEdit(n.row.id)},"\u4FEE\u6539",8,$),n.row.status==0?(s(),d("a",{key:0,style:{cursor:"pointer","margin-right":"10px"},onClick:h=>r.handleStatus(n.row.id,2)},"\u5BA1\u6838\u4E0D\u8FC7",8,ee)):E("",!0),n.row.status==1?(s(),d("a",{key:1,style:{cursor:"pointer","margin-right":"10px"},onClick:h=>r.handleStatus(n.row.id,0)},"\u64A4\u9500\u5BA1\u6838",8,te)):n.row.status==0?(s(),d("a",{key:2,style:{cursor:"pointer","margin-right":"10px"},onClick:h=>r.handleStatus(n.row.id,1)},"\u5BA1\u6838",8,ae)):E("",!0)]),_:1})]),_:1},8,["data","onSelectionChange"])),[[f,t.loading]]),a(g,{background:"",layout:"prev, pager, next",total:t.total,"page-size":t.pageSize,"current-page":t.currentPage,onCurrentChange:r.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})}var re=R(T,[["render",ne]]);export{re as default};
