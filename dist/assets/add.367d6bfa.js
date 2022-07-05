var U=Object.defineProperty,A=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var j=(o,t,n)=>t in o?U(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,S=(o,t)=>{for(var n in t||(t={}))B.call(t,n)&&j(o,n,t[n]);if(I)for(var n of I(t))H.call(t,n)&&j(o,n,t[n]);return o},w=(o,t)=>A(o,R(t));import{an as L,as as $,am as g,aq as x,u as z,r as E,o as M,b as k,au as N,t as C,d as u,e as P,n as D,w as i,E as f,j as s,g as O,k as y,i as W}from"./vendor.a46ae12f.js";import{W as G}from"./wangEditor.86f67c5e.js";import{_ as T,a as J,c as q,u as K}from"./index.efd4318d.js";const Q={name:"news_add",components:{Plus:L,Delete:$},setup(){g(null);const o=g(null),t=g(null),n=g(null),b=x(),v=z(),{id:p}=b.query,l=E({token:"Bearer "+J("token")||"",id:p,Form:{img_url:"",img:"",office_id:"",title:"",content:"",release_time:g(""),status:"0",disabled:!0,fileList:[],list:[]},rules:{img:[{required:!0,message:"\u56FE\u7247\u5FC5\u987B",trigger:["change"]}],type:[{required:!0,message:"\u7C7B\u578B\u5FC5\u987B",trigger:["change"]}],title:[{required:"true",message:"\u6807\u9898",trigger:["change"]}],release_time:[{required:"true",message:"\u53D1\u5E03\u65F6\u95F4\u5FC5\u987B",trigger:["change"]}],status:[{required:!1,message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}});let e;M(()=>{e=new G(t.value),e.config.lineHeights=["1","1.15","1.5","2","2.5","3"],e.config.showLinkImg=!1,e.config.showLinkImgAlt=!1,e.config.showLinkImgHref=!1,e.config.uploadImgMaxSize=10*1024*1024,e.config.uploadImgMaxLength=1,e.config.uploadImgAccept=["jpg","jpeg","png","gif","bmp","webp"],e.config.uploadFileName="file",e.config.uploadImgHeaders={Authorization:l.token},e.config.uploadImgParams={basket:"img"},e.config.uploadImgHooks={customInsert:function(a,r){console.log("result",r),a(r.data.src)}},e.config.uploadImgServer=q,Object.assign(e.config,{onchange(){console.log("change")}}),e.config.uploadVideoServer=q,e.config.uploadVideoMaxSize=1*200*1024*1024,e.config.uploadVideoAccept=["mp4"],e.config.uploadVideoParams={basket:"video"},e.config.uploadVideoName="file",e.config.uploadVideoHeaders={Authorization:l.token},e.config.uploadVideoHooks={customInsert:function(a,r){console.log("customInsert",r),a(r.data.src)}},e.create(),p&&k.get(`/api/back/scientifics/${p}`).then(a=>{l.Form={type:String(a.data.type),title:a.data.title,release_time:a.data.release_time,status:String(a.data.status)},e&&e.txt.html(a.data.content)})}),N(()=>{e.destroy(),e=null});const m=()=>{o.value.validate(a=>{if(a){let r=k.post,c={type:l.Form.type,title:l.Form.title,content:e.txt.html(),release_time:l.Form.release_time,status:l.Form.status},d="/api/back/scientifics";p&&(c.release_time=l.Form.release_time,r=k.put,d=`/api/back/scientifics/${p}`),r(d,c).then(()=>{p?f.success("\u4FEE\u6539\u6210\u529F"):f.success("\u6DFB\u52A0\u6210\u529F"),v.push({path:"/scientific",query:{type:c.type}})})}})},h=a=>{const r=a.name.split(".")[1]||"";if(!["jpg","jpeg","png"].includes(r))return f.error("\u8BF7\u4E0A\u4F20 jpg\u3001jpeg\u3001png \u683C\u5F0F\u7684\u56FE\u7247"),!1},F=a=>{f.success("\u4E0A\u4F20\u6210\u529F"),l.Form.img_url=a.data.src||"",l.Form.img=a.data.id||""},_=a=>{f.error("\u4E0A\u4F20\u5931\u8D25")},V=a=>{n.value.clearFiles(),l.Form.img="",l.Form.img_url="",l.Form.fileList=[]};return w(S({},C(l)),{editor:t,uploadRef:n,Ref:o,submitAdd:m,uploadImgServer:K,handleBeforeUpload:h,handleUrlSuccess:F,handleUrlError:_,handleRemove:V})}},X={ref:"editor",style:{"z-index":"1"}},Y=y("\u5DF2\u5BA1\u6838"),Z=y("\u5F85\u5BA1\u6838");function ee(o,t,n,b,v,p){const l=u("el-option"),e=u("el-select"),m=u("el-form-item"),h=u("el-input"),F=u("el-date-picker"),_=u("el-radio"),V=u("el-radio-group"),a=u("el-button"),r=u("el-form"),c=u("el-card");return P(),D(c,{style:{"min-height":"100%"}},{default:i(()=>[s(r,{model:o.Form,rules:o.rules,ref:"Ref","label-width":"100px"},{default:i(()=>[s(m,{label:"\u7C7B\u578B",prop:"type"},{default:i(()=>[s(e,{modelValue:o.Form.type,"onUpdate:modelValue":t[0]||(t[0]=d=>o.Form.type=d),placeholder:"Select",filterable:""},{default:i(()=>[s(l,{label:"\u79D1\u7814\u52A8\u6001",value:"0"}),s(l,{label:"\u5B66\u79D1\u5EFA\u8BBE",value:"1"}),s(l,{label:"\u7EE7\u7EED\u6559\u80B2",value:"2"})]),_:1},8,["modelValue"])]),_:1}),s(m,{label:"\u6807\u9898",prop:"title"},{default:i(()=>[s(h,{modelValue:o.Form.title,"onUpdate:modelValue":t[1]||(t[1]=d=>o.Form.title=d),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",type:"text"},null,8,["modelValue"])]),_:1}),s(m,{label:"\u5185\u5BB9",prop:"content"},{default:i(()=>[O("div",X,null,512)]),_:1}),s(m,{label:"\u53D1\u5E03\u65F6\u95F4",prop:"release_time"},{default:i(()=>[s(F,{modelValue:o.Form.release_time,"onUpdate:modelValue":t[2]||(t[2]=d=>o.Form.release_time=d),type:"datetime",placeholder:"\u8BF7\u8F93\u5165\u53D1\u5E03\u65F6\u95F4"},null,8,["modelValue"])]),_:1}),s(m,{label:"\u72B6\u6001",prop:"status"},{default:i(()=>[s(V,{modelValue:o.Form.status,"onUpdate:modelValue":t[3]||(t[3]=d=>o.Form.status=d),disabled:""},{default:i(()=>[s(_,{label:"1"},{default:i(()=>[Y]),_:1}),s(_,{label:"0"},{default:i(()=>[Z]),_:1})]),_:1},8,["modelValue"])]),_:1}),s(m,null,{default:i(()=>[s(a,{type:"primary",onClick:t[4]||(t[4]=d=>b.submitAdd())},{default:i(()=>[y(W(o.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var se=T(Q,[["render",ee]]);export{se as default};
