var q=Object.defineProperty,A=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var v=(a,n,l)=>n in a?q(a,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[n]=l,P=(a,n)=>{for(var l in n||(n={}))j.call(n,l)&&v(a,l,n[l]);if(f)for(var l of f(n))R.call(n,l)&&v(a,l,n[l]);return a},x=(a,n)=>A(a,B(n));import{_ as L}from"./index.09bea2ec.js";import{u as M,aq as O,r as U,o as F,b as V,t as T,an as G,d as p,ao as H,e as s,n as b,w as c,E as I,j as o,g as S,ap as J,f as d,h as u,k as z}from"./vendor.404bcab0.js";const K={name:"rotate_list",setup(){const a=M(),n=O(),{type:l}=n.query,e=U({type:"0",title:"",loading:!1,tableData:[],srcList:[],total:0,currentPage:1,pageSize:10});F(()=>{l&&(e.type=l),_()});const _=()=>{e.loading=!0,V.get("/api/back/news",{params:{page:e.currentPage,page_size:e.pageSize,title:e.title,type:e.type}}).then(r=>{e.tableData=r.data,e.pageSize=r.pagination.perPage,e.total=r.pagination.total,e.currentPage=r.pagination.currentPage,e.loading=!1})},C=()=>{e.currentPage=1,_()},h=r=>{e.currentPage=r,_()},g=()=>{a.push({path:"/news-add"})},y=r=>{a.push({path:"/news-add",query:{id:r}})},k=r=>{a.push({path:"/news-preview",query:{id:r}})},i=(r,w)=>{V.put("/api/back/news/status",{id:r,status:w}).then(()=>{I.success("\u4FEE\u6539\u6210\u529F"),_()})};return x(P({},T(e)),{handleOption:C,changePage:h,handleAdd:g,handleEdit:y,handleStatus:i,handlePreview:k,Plus:G})}},Q=z("\u65B0\u589E"),W=z("\u641C\u7D22"),X={key:1},Y={key:0},Z={key:1},$={key:2},ee={key:0,style:{color:"#67C23A"}},te={key:1,style:{color:"#E6A23C"}},ae={key:2,style:{color:"#F56C6C"}},ne=["onClick"],oe=["onClick"],le=["onClick"],re=["onClick"],se=["onClick"];function ie(a,n,l,e,_,C){const h=p("el-button"),g=p("el-option"),y=p("el-select"),k=p("el-input"),i=p("el-table-column"),r=p("el-image"),w=p("el-table"),E=p("el-pagination"),D=p("el-card"),N=H("loading");return s(),b(D,{style:{"min-height":"100%"}},{header:c(()=>[o(h,{type:"primary",icon:e.Plus,onClick:e.handleAdd},{default:c(()=>[Q]),_:1},8,["icon","onClick"]),S("div",null,[o(y,{modelValue:a.type,"onUpdate:modelValue":n[0]||(n[0]=t=>a.type=t),placeholder:"Select",filterable:""},{default:c(()=>[o(g,{value:"0",label:"\u533B\u9662\u65B0\u95FB"}),o(g,{value:"1",label:"\u533B\u9662\u516C\u544A"}),o(g,{value:"2",label:"\u89C6\u9891\u65B0\u95FB"})]),_:1},8,["modelValue"]),o(k,{style:{width:"200px","margin-top":"20px","margin-right":"10px","margin-left":"10px"},placeholder:"\u8BF7\u8F93\u5165\u79D1\u5BA4\u540D\u79F0",modelValue:a.title,"onUpdate:modelValue":n[1]||(n[1]=t=>a.title=t),clearable:""},null,8,["modelValue"]),o(h,{type:"primary",onClick:e.handleOption},{default:c(()=>[W]),_:1},8,["onClick"])])]),default:c(()=>[J((s(),b(w,{data:a.tableData,stripe:"",style:{width:"100%"}},{default:c(()=>[o(i,{prop:"id",label:"id"}),o(i,{label:"\u56FE\u7247"},{default:c(t=>[t.row.url?(s(),b(r,{key:t.row.id,src:t.row.url,lazy:!0,"initial-index":1},null,8,["src"])):(s(),d("span",X,"\u65E0"))]),_:1}),o(i,{prop:"type",label:"\u7C7B\u578B"},{default:c(t=>[t.row.type==0?(s(),d("span",Y,"\u533B\u9662\u65B0\u95FB")):u("",!0),t.row.type==1?(s(),d("span",Z,"\u533B\u9662\u516C\u544A")):u("",!0),t.row.type==2?(s(),d("span",$,"\u89C6\u9891\u65B0\u95FB")):u("",!0)]),_:1}),o(i,{prop:"title",label:"\u6807\u9898"}),o(i,{prop:"release_time",label:"\u53D1\u5E03\u65F6\u95F4"}),o(i,{prop:"num",label:"\u6D4F\u89C8\u6B21\u6570"}),o(i,{prop:"status",label:"\u72B6\u6001"},{default:c(t=>[t.row.status==1?(s(),d("span",ee,"\u5DF2\u5BA1\u6838")):t.row.status==0?(s(),d("span",te,"\u5F85\u5BA1\u6838")):(s(),d("span",ae,"\u5DF2\u5220\u9664"))]),_:1}),o(i,{prop:"created_at",label:"\u521B\u5EFA\u65F6\u95F4"}),o(i,{label:"\u64CD\u4F5C",width:"200"},{default:c(t=>[S("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:m=>e.handlePreview(t.row.id)},"\u9884\u89C8",8,ne),t.row.status!=2?(s(),d("a",{key:0,style:{cursor:"pointer","margin-right":"10px"},onClick:m=>e.handleEdit(t.row.id)},"\u4FEE\u6539",8,oe)):u("",!0),t.row.status!=2?(s(),d("a",{key:1,style:{cursor:"pointer","margin-right":"10px"},onClick:m=>e.handleStatus(t.row.id,2)},"\u5220\u9664",8,le)):u("",!0),t.row.status==1?(s(),d("a",{key:2,style:{cursor:"pointer","margin-right":"10px"},onClick:m=>e.handleStatus(t.row.id,0)},"\u64A4\u9500\u5BA1\u6838",8,re)):t.row.status==0?(s(),d("a",{key:3,style:{cursor:"pointer","margin-right":"10px"},onClick:m=>e.handleStatus(t.row.id,1)},"\u5BA1\u6838",8,se)):u("",!0)]),_:1})]),_:1},8,["data"])),[[N,a.loading]]),o(E,{background:"",layout:"prev, pager, next",total:a.total,"page-size":a.pageSize,"current-page":a.currentPage,onCurrentChange:e.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})}var ue=L(K,[["render",ie]]);export{ue as default};
