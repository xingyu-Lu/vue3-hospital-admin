var B=Object.defineProperty,H=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var V=(o,t,n)=>t in o?B(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,v=(o,t)=>{for(var n in t||(t={}))$.call(t,n)&&V(o,n,t[n]);if(I)for(var n of I(t))q.call(t,n)&&V(o,n,t[n]);return o},F=(o,t)=>H(o,O(t));import{W as x}from"./wangEditor.24174217.js";import{_ as z,a as E,c as w}from"./index.5da2057f.js";import{am as y,aq as L,u as M,r as N,o as R,b as p,au as C,t as U,d as r,e as b,n as S,w as s,E as j,j as i,f as P,q as W,F as D,g as G,k,i as T}from"./vendor.f30e6799.js";const J={name:"menu_add",setup(){const o=y(null),t=y(null),n=L(),g=M(),{id:f}=n.query,d=N({token:"Bearer "+E("token")||"",select_flag:!1,id:f,Form:{office_id:"",status:"0",list:[]},rules:{office_id:[{required:!0,message:"\u79D1\u5BA4\u5FC5\u987B",trigger:["change"]}],status:[{required:!0,message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}});let e;R(()=>{e=new x(t.value),e.config.lineHeights=["1","1.15","1.5","2","2.5","3"],e.config.showLinkImg=!1,e.config.showLinkImgAlt=!1,e.config.showLinkImgHref=!1,e.config.uploadImgMaxSize=10*1024*1024,e.config.uploadImgMaxLength=1,e.config.uploadImgAccept=["jpg","jpeg","png","gif","bmp","webp"],e.config.uploadFileName="file",e.config.uploadImgHeaders={Authorization:d.token},e.config.uploadImgParams={basket:"img"},e.config.uploadImgHooks={customInsert:function(a,l){console.log("result",l),a(l.data.src)}},e.config.uploadImgServer=w,Object.assign(e.config,{onchange(){console.log("change")}}),e.config.uploadVideoServer=w,e.config.uploadVideoMaxSize=1*200*1024*1024,e.config.uploadVideoAccept=["mp4"],e.config.uploadVideoParams={basket:"video"},e.config.uploadVideoName="file",e.config.uploadVideoHeaders={Authorization:d.token},e.config.uploadVideoHooks={customInsert:function(a,l){console.log("customInsert",l),a(l.data.src)}},e.create(),_(),f&&p.get(`/api/back/technicalOfficeIntroduces/${f}`).then(a=>{d.Form={office_id:a.data.office_id,name:a.data.name,status:String(a.data.status)},d.select_flag=!0,e&&e.txt.html(a.data.content)})}),C(()=>{e.destroy(),e=null});const _=async()=>{const a=await p.get("/api/back/technicalOffices");d.Form.list=a.data},u=()=>{o.value.validate(a=>{if(a){let l=p.post,h={office_id:d.Form.office_id,content:e.txt.html(),status:d.Form.status},m="/api/back/technicalOfficeIntroduces";f&&(l=p.put,m=`/api/back/technicalOfficeIntroduces/${f}`),l(m,h).then(()=>{f?j.success("\u4FEE\u6539\u6210\u529F"):j.success("\u6DFB\u52A0\u6210\u529F"),g.push({path:"/technicaloffice-introduce"})})}})};return F(v({},U(d)),{Ref:o,editor:t,submitAdd:u})}},K={ref:"editor",style:{"z-index":"1"}},Q=k("\u5DF2\u5BA1\u6838"),X=k("\u5F85\u5BA1\u6838");function Y(o,t,n,g,f,d){const e=r("el-option"),_=r("el-select"),u=r("el-form-item"),a=r("el-radio"),l=r("el-radio-group"),h=r("el-button"),m=r("el-form"),A=r("el-card");return b(),S(A,{style:{"min-height":"100%"}},{default:s(()=>[i(m,{model:o.Form,rules:o.rules,ref:"Ref","label-width":"100px"},{default:s(()=>[i(u,{label:"\u79D1\u5BA4",prop:"office_id"},{default:s(()=>[i(_,{modelValue:o.Form.office_id,"onUpdate:modelValue":t[0]||(t[0]=c=>o.Form.office_id=c),placeholder:"Select",filterable:"",disabled:o.select_flag},{default:s(()=>[(b(!0),P(D,null,W(o.Form.list,c=>(b(),S(e,{key:c.id,label:c.name,value:c.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1}),i(u,{label:"\u5185\u5BB9",prop:"content"},{default:s(()=>[G("div",K,null,512)]),_:1}),i(u,{label:"\u72B6\u6001",prop:"status"},{default:s(()=>[i(l,{modelValue:o.Form.status,"onUpdate:modelValue":t[1]||(t[1]=c=>o.Form.status=c),disabled:""},{default:s(()=>[i(a,{label:"1"},{default:s(()=>[Q]),_:1}),i(a,{label:"0"},{default:s(()=>[X]),_:1})]),_:1},8,["modelValue"])]),_:1}),i(u,null,{default:s(()=>[i(h,{type:"primary",onClick:t[2]||(t[2]=c=>g.submitAdd())},{default:s(()=>[k(T(o.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var ae=z(J,[["render",Y]]);export{ae as default};
