var B=Object.defineProperty,E=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var N=(e,t,s)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,P=(e,t)=>{for(var s in t||(t={}))q.call(t,s)&&N(e,s,t[s]);if(I)for(var s of I(t))F.call(t,s)&&N(e,s,t[s]);return e},V=(e,t)=>E(e,M(t));import{_ as L}from"./index.85c583ef.js";import{r as U,o as R,b as g,t as $,d as c,ai as A,e as p,n as u,w as a,E as _,g as m,j as r,f as h,q as G,F as H,aj as J,i as K,h as C,k as f,p as Q,l as W}from"./vendor.459d0839.js";const X={name:"Order",setup(){const e=U({loading:!1,tableData:[],multipleSelection:[],total:0,currentPage:1,pageSize:10,orderNo:"",orderStatus:"",options:[{value:"",label:"\u5168\u90E8"},{value:0,label:"\u5F85\u652F\u4ED8"},{value:1,label:"\u5DF2\u652F\u4ED8"},{value:2,label:"\u914D\u8D27\u5B8C\u6210"},{value:3,label:"\u51FA\u5E93\u6210\u529F"},{value:4,label:"\u4EA4\u6613\u6210\u529F"},{value:-1,label:"\u624B\u52A8\u5173\u95ED"},{value:-2,label:"\u8D85\u65F6\u5173\u95ED"},{value:-3,label:"\u5546\u5BB6\u5173\u95ED"}]});R(()=>{t()});const t=()=>{e.loading=!0,g.get("/orders",{params:{pageNumber:e.currentPage,pageSize:e.pageSize,orderNo:e.orderNo,orderStatus:e.orderStatus}}).then(l=>{e.tableData=l.list,e.total=l.totalCount,e.currentPage=l.currPage,e.loading=!1})},s=()=>{e.currentPage=1,t()},d=l=>{e.multipleSelection=l},k=l=>{e.currentPage=l,t()},w=l=>{console.log("id",l);let n;if(l)n=[l];else{if(!e.multipleSelection.length){console.log("state.multipleSelection",e.multipleSelection.length),_.error("\u8BF7\u9009\u62E9\u9879");return}n=e.multipleSelection.map(i=>i.orderId)}g.put("/orders/checkDone",{ids:n}).then(()=>{_.success("\u914D\u8D27\u6210\u529F"),t()})},S=l=>{let n;if(l)n=[l];else{if(!e.multipleSelection.length){_.error("\u8BF7\u9009\u62E9\u9879");return}n=e.multipleSelection.map(i=>i.orderId)}g.put("/orders/checkOut",{ids:n}).then(()=>{_.success("\u51FA\u5E93\u6210\u529F"),t()})},v=l=>{let n;if(l)n=[l];else{if(!e.multipleSelection.length){_.error("\u8BF7\u9009\u62E9\u9879");return}n=e.multipleSelection.map(i=>i.orderId)}g.put("/orders/close",{ids:n}).then(()=>{_.success("\u5173\u95ED\u6210\u529F"),t()})};return V(P({},$(e)),{handleSelectionChange:d,getOrderList:t,changePage:k,handleOption:s,handleConfig:w,handleSend:S,handleClose:v})}},y=e=>(Q("data-v-6cf26166"),e=e(),W(),e),Y={class:"header"},Z=f("\u914D\u8D27\u5B8C\u6210"),ee=f("\u51FA\u5E93"),te=f("\u5173\u95ED\u8BA2\u5355"),oe={key:0},le={key:1},ne={key:2},ae=y(()=>m("a",{style:{cursor:"pointer","margin-right":"10px"}},"\u914D\u8D27\u5B8C\u6210",-1)),re=y(()=>m("a",{style:{cursor:"pointer","margin-right":"10px"}},"\u51FA\u5E93",-1)),se=y(()=>m("a",{style:{cursor:"pointer","margin-right":"10px"}},"\u5173\u95ED\u8BA2\u5355",-1)),ie=f("\u8BA2\u5355\u8BE6\u60C5");function de(e,t,s,d,k,w){const S=c("el-input"),v=c("el-option"),l=c("el-select"),n=c("el-button"),i=c("el-table-column"),b=c("el-popconfirm"),O=c("router-link"),D=c("el-table"),x=c("el-pagination"),T=c("el-card"),j=A("loading");return p(),u(T,{class:"order-container"},{header:a(()=>[m("div",Y,[r(S,{style:{width:"200px","margin-right":"10px"},placeholder:"\u8BF7\u8F93\u5165\u8BA2\u5355\u53F7",modelValue:e.orderNo,"onUpdate:modelValue":t[0]||(t[0]=o=>e.orderNo=o),onChange:d.handleOption,size:"small",clearable:""},null,8,["modelValue","onChange"]),r(l,{onChange:d.handleOption,modelValue:e.orderStatus,"onUpdate:modelValue":t[1]||(t[1]=o=>e.orderStatus=o),size:"small",style:{width:"200px","margin-right":"10px"}},{default:a(()=>[(p(!0),h(H,null,G(e.options,o=>(p(),u(v,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["onChange","modelValue"]),r(n,{type:"primary",size:"small",icon:"el-icon-s-home",onClick:t[2]||(t[2]=o=>d.handleConfig())},{default:a(()=>[Z]),_:1}),r(n,{type:"primary",size:"small",icon:"el-icon-s-home",onClick:t[3]||(t[3]=o=>d.handleSend())},{default:a(()=>[ee]),_:1}),r(n,{type:"danger",size:"small",icon:"el-icon-delete",onClick:t[4]||(t[4]=o=>d.handleClose())},{default:a(()=>[te]),_:1})])]),default:a(()=>[J((p(),u(D,{data:e.tableData,"tooltip-effect":"dark",style:{width:"100%"},onSelectionChange:d.handleSelectionChange},{default:a(()=>[r(i,{type:"selection",width:"55"}),r(i,{prop:"orderNo",label:"\u8BA2\u5355\u53F7"}),r(i,{prop:"totalPrice",label:"\u8BA2\u5355\u603B\u4EF7"}),r(i,{prop:"orderStatus",label:"\u8BA2\u5355\u72B6\u6001"},{default:a(o=>[m("span",null,K(e.$filters.orderMap(o.row.orderStatus)),1)]),_:1}),r(i,{prop:"payType",label:"\u652F\u4ED8\u65B9\u5F0F"},{default:a(o=>[o.row.payType==1?(p(),h("span",oe,"\u5FAE\u4FE1\u652F\u4ED8")):o.row.payType==2?(p(),h("span",le,"\u652F\u4ED8\u5B9D\u652F\u4ED8")):(p(),h("span",ne,"\u672A\u652F\u4ED8"))]),_:1}),r(i,{prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4"}),r(i,{label:"\u64CD\u4F5C"},{default:a(o=>[o.row.orderStatus==1?(p(),u(b,{key:0,title:"\u786E\u5B9A\u914D\u8D27\u5B8C\u6210\u5417\uFF1F",onConfirm:z=>d.handleConfig(o.row.orderId)},{reference:a(()=>[ae]),_:2},1032,["onConfirm"])):C("",!0),o.row.orderStatus==2?(p(),u(b,{key:1,title:"\u786E\u5B9A\u51FA\u5E93\u5417\uFF1F",onConfirm:z=>d.handleSend(o.row.orderId)},{reference:a(()=>[re]),_:2},1032,["onConfirm"])):C("",!0),o.row.orderStatus==4||o.row.orderStatus<0?C("",!0):(p(),u(b,{key:2,title:"\u786E\u5B9A\u5173\u95ED\u8BA2\u5355\u5417\uFF1F",onConfirm:z=>d.handleClose(o.row.orderId)},{reference:a(()=>[se]),_:2},1032,["onConfirm"])),r(O,{to:{path:"/order_detail",query:{id:o.row.orderId}}},{default:a(()=>[ie]),_:2},1032,["to"])]),_:1})]),_:1},8,["data","onSelectionChange"])),[[j,e.loading]]),r(x,{background:"",layout:"prev, pager, next",total:e.total,"page-size":e.pageSize,"current-page":e.currentPage,onCurrentChange:d.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})}var _e=L(X,[["render",de],["__scopeId","data-v-6cf26166"]]);export{_e as default};