var q=Object.defineProperty,z=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var L=(o,a,i)=>a in o?q(o,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[a]=i,R=(o,a)=>{for(var i in a||(a={}))C.call(a,i)&&L(o,i,a[i]);if(y)for(var i of y(a))H.call(a,i)&&L(o,i,a[i]);return o},w=(o,a)=>z(o,B(a));import{an as x,as as E,am as g,aq as M,u as N,r as P,o as $,b as I,au as D,t as O,d,e as W,n as G,w as s,E as f,j as n,g as T,k as _,i as J}from"./vendor.a46ae12f.js";import{W as K}from"./wangEditor.86f67c5e.js";import{_ as Q,a as X,c as U,u as Y}from"./index.efd4318d.js";const Z={name:"news_add",components:{Plus:x,Delete:E},setup(){const o=g(null),a=g(null),i=g(null),p=g(null),A=M(),S=N(),{id:c}=A.query,l=P({token:"Bearer "+X("token")||"",id:c,Form:{attachment:"",img_url:"",img:"",office_id:"",title:"",content:"",release_time:g(""),status:"0",disabled:!0,fileList:[],attachmentFileList:[],list:[]},rules:{img:[{required:!0,message:"\u56FE\u7247\u5FC5\u987B",trigger:["change"]}],title:[{required:!1,message:"\u6807\u9898",trigger:["change"]}],release_time:[{required:"true",message:"\u53D1\u5E03\u65F6\u95F4\u5FC5\u987B",trigger:["change"]}],status:[{required:!1,message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}});let e;$(()=>{e=new K(i.value),e.config.lineHeights=["1","1.15","1.5","2","2.5","3"],e.config.showLinkImg=!1,e.config.showLinkImgAlt=!1,e.config.showLinkImgHref=!1,e.config.uploadImgMaxSize=2*1024*1024,e.config.uploadImgMaxLength=1,e.config.uploadImgAccept=["jpg","jpeg","png","gif","bmp","webp"],e.config.uploadFileName="file",e.config.uploadImgHeaders={Authorization:l.token},e.config.uploadImgParams={basket:"img"},e.config.uploadImgHooks={customInsert:function(t,r){console.log("result",r),t(r.data.src)}},e.config.uploadImgServer=U,Object.assign(e.config,{onchange(){console.log("change")}}),e.config.uploadVideoServer=U,e.config.uploadVideoMaxSize=1*200*1024*1024,e.config.uploadVideoAccept=["mp4"],e.config.uploadVideoParams={basket:"video"},e.config.uploadVideoName="file",e.config.uploadVideoHeaders={Authorization:l.token},e.config.uploadVideoHooks={customInsert:function(t,r){console.log("customInsert",r),t(r.data.src)}},e.create(),c&&I.get(`/api/back/epidemicControls/${c}`).then(t=>{l.Form={attachment:t.data.attachment_id,attachmentFileList:t.data.attachment,title:t.data.title,release_time:t.data.release_time,status:String(t.data.status)},e&&e.txt.html(t.data.content)})}),D(()=>{e.destroy(),e=null});const b=()=>{a.value.validate(t=>{if(t){let r=I.post,m={attachment:l.Form.attachment,title:l.Form.title,content:e.txt.html(),release_time:l.Form.release_time,status:l.Form.status},j="/api/back/epidemicControls";c&&(m.release_time=l.Form.release_time,r=I.put,j=`/api/back/epidemicControls/${c}`),r(j,m).then(()=>{c?f.success("\u4FEE\u6539\u6210\u529F"):f.success("\u6DFB\u52A0\u6210\u529F"),S.push({path:"/epidemic-control"})})}})},u=t=>{const r=t.name.split(".")[1]||"";if(!["jpg","jpeg","png"].includes(r))return f.error("\u8BF7\u4E0A\u4F20 jpg\u3001jpeg\u3001png \u683C\u5F0F\u7684\u56FE\u7247"),!1},h=t=>{f.success("\u4E0A\u4F20\u6210\u529F"),l.Form.img_url=t.data.src||"",l.Form.img=t.data.id||""},k=t=>{f.error("\u4E0A\u4F20\u5931\u8D25")},v=t=>{p.value.clearFiles(),l.Form.img="",l.Form.img_url="",l.Form.fileList=[]},F=t=>{f.success("\u4E0A\u4F20\u6210\u529F"),l.Form.attachmentFileList.push({name:t.data.src,url:t.data.src}),l.Form.attachment?l.Form.attachment=l.Form.attachment+","+t.data.id:l.Form.attachment=t.data.id},V=t=>{o.value.clearFiles(),l.Form.attachment="",l.Form.attachmentFileList=[]};return w(R({},O(l)),{editor:i,uploadRef:p,attachmentRef:o,Ref:a,submitAdd:b,uploadImgServer:Y,handleBeforeUpload:u,handleUrlSuccess:h,handleUrlError:k,handleRemove:v,handleAttachmentSuccess:F,handleAttachmentRemove:V})}},ee=_("\u5E94\u8058\u6D41\u7A0B\u53EA\u53EF\u65B0\u589E\u4E00\u6B21"),te=_("\u4E0A\u4F20"),oe={ref:"editor",style:{"z-index":"1"}},ae=_("\u5DF2\u5BA1\u6838"),le=_("\u5F85\u5BA1\u6838");function ne(o,a,i,p,A,S){const c=d("el-descriptions-item"),l=d("el-descriptions"),e=d("el-divider"),b=d("el-input"),u=d("el-form-item"),h=d("el-button"),k=d("el-upload"),v=d("el-date-picker"),F=d("el-radio"),V=d("el-radio-group"),t=d("el-form"),r=d("el-card");return W(),G(r,{style:{"min-height":"100%"}},{default:s(()=>[n(l,{title:"\u63D0\u793A"},{default:s(()=>[n(c,null,{default:s(()=>[ee]),_:1})]),_:1}),n(e),n(t,{model:o.Form,rules:o.rules,ref:"Ref","label-width":"100px"},{default:s(()=>[n(u,{label:"\u6807\u9898",prop:"title"},{default:s(()=>[n(b,{modelValue:o.Form.title,"onUpdate:modelValue":a[0]||(a[0]=m=>o.Form.title=m),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",type:"text"},null,8,["modelValue"])]),_:1}),n(u,{label:"\u9644\u4EF6",prop:"attachment"},{default:s(()=>[n(k,{ref:"attachmentRef",headers:{Authorization:o.token},action:p.uploadImgServer,"on-remove":p.handleAttachmentRemove,"on-success":p.handleAttachmentSuccess,"auto-upload":!0,data:{basket:"attachment"},limit:3,multiple:"","file-list":o.Form.attachmentFileList},{default:s(()=>[n(h,{type:"primary"},{default:s(()=>[te]),_:1})]),_:1},8,["headers","action","on-remove","on-success","file-list"])]),_:1}),n(u,{label:"\u5185\u5BB9",prop:"content"},{default:s(()=>[T("div",oe,null,512)]),_:1}),n(u,{label:"\u53D1\u5E03\u65F6\u95F4",prop:"release_time"},{default:s(()=>[n(v,{modelValue:o.Form.release_time,"onUpdate:modelValue":a[1]||(a[1]=m=>o.Form.release_time=m),type:"datetime",placeholder:"\u8BF7\u8F93\u5165\u53D1\u5E03\u65F6\u95F4"},null,8,["modelValue"])]),_:1}),n(u,{label:"\u72B6\u6001",prop:"status"},{default:s(()=>[n(V,{modelValue:o.Form.status,"onUpdate:modelValue":a[2]||(a[2]=m=>o.Form.status=m),disabled:""},{default:s(()=>[n(F,{label:"1"},{default:s(()=>[ae]),_:1}),n(F,{label:"0"},{default:s(()=>[le]),_:1})]),_:1},8,["modelValue"])]),_:1}),n(u,null,{default:s(()=>[n(h,{type:"primary",onClick:a[3]||(a[3]=m=>p.submitAdd())},{default:s(()=>[_(J(o.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var me=Q(Z,[["render",ne]]);export{me as default};
