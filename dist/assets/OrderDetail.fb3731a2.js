var b=Object.defineProperty;var u=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var h=(e,t,a)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))g.call(t,a)&&h(e,a,t[a]);if(u)for(var a of u(t))w.call(t,a)&&h(e,a,t[a]);return e};import{ah as I,r as y,o as D,b as S,t as $,d as c,e as v,n as k,w as d,g as o,j as s,i,f as B,p as O,l as x}from"./vendor.49ed2502.js";import{_ as C}from"./index.0a6d330b.js";const N={name:"OrderDetail",setup(){const e=I(),{id:t}=e.query,a=y({data:{},tableData:[]});return D(()=>{S.get(`/orders/${t}`).then(r=>{console.log(r),a.data=r,a.tableData=r.newBeeMallOrderItemVOS})}),m({},$(a))}},_=e=>(O("data-v-7eba5ddd"),e=e(),x(),e),j={class:"data"},V=_(()=>o("div",{class:"card-header"},[o("span",null,"\u8BA2\u5355\u72B6\u6001")],-1)),M=_(()=>o("div",{class:"card-header"},[o("span",null,"\u521B\u5EFA\u65F6\u95F4")],-1)),R=_(()=>o("div",{class:"card-header"},[o("span",null,"\u8BA2\u5355\u53F7")],-1)),q=["src"];function E(e,t,a,r,P,T){const n=c("el-card"),l=c("el-table-column"),f=c("el-table");return v(),k(n,{class:"order-container"},{default:d(()=>[o("div",j,[s(n,{class:"data-item",shadow:"hover"},{header:d(()=>[V]),default:d(()=>[o("div",null,i(e.data.orderStatusString),1)]),_:1}),s(n,{class:"data-item",shadow:"hover"},{header:d(()=>[M]),default:d(()=>[o("div",null,i(e.data.createTime),1)]),_:1}),s(n,{class:"data-item",shadow:"hover"},{header:d(()=>[R]),default:d(()=>[o("div",null,i(e.data.orderNo),1)]),_:1})]),s(f,{data:e.tableData,"tooltip-effect":"dark",style:{width:"100%"}},{default:d(()=>[s(l,{label:"\u5546\u54C1\u56FE\u7247"},{default:d(p=>[(v(),B("img",{style:{width:"100px"},key:p.row.goodsId,src:e.$filters.prefix(p.row.goodsCoverImg),alt:"\u5546\u54C1\u4E3B\u56FE"},null,8,q))]),_:1}),s(l,{prop:"goodsId",label:"\u5546\u54C1\u7F16\u53F7"}),s(l,{prop:"goodsName",label:"\u5546\u54C1\u540D"}),s(l,{prop:"goodsCount",label:"\u5546\u54C1\u6570\u91CF"}),s(l,{prop:"sellingPrice",label:"\u4EF7\u683C"})]),_:1},8,["data"])]),_:1})}var G=C(N,[["render",E],["__scopeId","data-v-7eba5ddd"]]);export{G as default};
