var z=Object.defineProperty,B=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var R=(a,o,i)=>o in a?z(a,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[o]=i,L=(a,o)=>{for(var i in o||(o={}))H.call(o,i)&&R(a,i,o[i]);if(w)for(var i of w(o))M.call(o,i)&&R(a,i,o[i]);return a},U=(a,o)=>B(a,E(o));import{W as N}from"./wangEditor.7fca4042.js";import{_ as x,a as C,c as q,u as D}from"./index.10967962.js";import{an as P,as as $,am as g,aq as O,u as W,r as G,o as T,b as j,au as J,t as K,d as r,e as Q,n as X,w as s,E as f,j as n,g as Y,k as _,i as Z}from"./vendor.03113035.js";const ee={name:"news_add",components:{Plus:P,Delete:$},setup(){const a=g(null),o=g(null),i=g(null),p=g(null),S=O(),A=W(),{id:c}=S.query,l=G({token:"Bearer "+C("token")||"",id:c,Form:{attachment:"",type:"",img_url:"",img:"",office_id:"",title:"",content:"",release_time:g(""),status:"0",disabled:!0,fileList:[],attachmentFileList:[],list:[]},rules:{img:[{required:!0,message:"\u56FE\u7247\u5FC5\u987B",trigger:["change"]}],type:[{required:!0,message:"\u7C7B\u578B\u5FC5\u987B",trigger:["change"]}],title:[{required:!1,message:"\u6807\u9898",trigger:["change"]}],release_time:[{required:"true",message:"\u53D1\u5E03\u65F6\u95F4\u5FC5\u987B",trigger:["change"]}],status:[{required:!1,message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}});let t;T(()=>{t=new N(i.value),t.config.showLinkImg=!1,t.config.showLinkImgAlt=!1,t.config.showLinkImgHref=!1,t.config.uploadImgMaxSize=10*1024*1024,t.config.uploadImgMaxLength=1,t.config.uploadImgAccept=["jpg","jpeg","png","gif","bmp","webp"],t.config.uploadFileName="file",t.config.uploadImgHeaders={Authorization:l.token},t.config.uploadImgParams={basket:"img"},t.config.uploadImgHooks={customInsert:function(e,d){console.log("result",d),e(d.data.src)}},t.config.uploadImgServer=q,Object.assign(t.config,{onchange(){console.log("change")}}),t.config.uploadVideoServer=q,t.config.uploadVideoMaxSize=1*200*1024*1024,t.config.uploadVideoAccept=["mp4"],t.config.uploadVideoParams={basket:"video"},t.config.uploadVideoName="file",t.config.uploadVideoHeaders={Authorization:l.token},t.config.uploadVideoHooks={customInsert:function(e,d){console.log("customInsert",d),e(d.data.src)}},t.create(),c&&j.get(`/api/back/jobs/${c}`).then(e=>{l.Form={attachment:e.data.attachment_id,attachmentFileList:e.data.attachment,type:e.data.type,title:e.data.title,release_time:e.data.release_time,status:String(e.data.status)},t&&t.txt.html(e.data.content)})}),J(()=>{t.destroy(),t=null});const h=()=>{o.value.validate(e=>{if(e){let d=j.post,b={attachment:l.Form.attachment,type:l.Form.type,title:l.Form.title,content:t.txt.html(),release_time:l.Form.release_time,status:l.Form.status},v="/api/back/jobs";c&&(b.release_time=l.Form.release_time,d=j.put,v=`/api/back/jobs/${c}`),d(v,b).then(()=>{c?f.success("\u4FEE\u6539\u6210\u529F"):f.success("\u6DFB\u52A0\u6210\u529F"),A.push({path:"/job"})})}})},k=e=>{const d=e.name.split(".")[1]||"";if(!["jpg","jpeg","png"].includes(d))return f.error("\u8BF7\u4E0A\u4F20 jpg\u3001jpeg\u3001png \u683C\u5F0F\u7684\u56FE\u7247"),!1},m=e=>{f.success("\u4E0A\u4F20\u6210\u529F"),l.Form.img_url=e.data.src||"",l.Form.img=e.data.id||""},V=e=>{f.error("\u4E0A\u4F20\u5931\u8D25")},F=e=>{p.value.clearFiles(),l.Form.img=""},y=e=>{f.success("\u4E0A\u4F20\u6210\u529F"),l.Form.attachmentFileList.push({name:e.data.src,url:e.data.src}),l.Form.attachment?l.Form.attachment=l.Form.attachment+","+e.data.id:l.Form.attachment=e.data.id},I=e=>{a.value.clearFiles(),l.Form.attachment="",l.Form.attachmentFileList=[]};return U(L({},K(l)),{editor:i,uploadRef:p,attachmentRef:a,Ref:o,submitAdd:h,uploadImgServer:D,handleBeforeUpload:k,handleUrlSuccess:m,handleUrlError:V,handleRemove:F,handleAttachmentSuccess:y,handleAttachmentRemove:I})}},te=_("\u5E94\u8058\u6D41\u7A0B\u53EA\u53EF\u65B0\u589E\u4E00\u6B21"),ae=_("\u4E0A\u4F20"),oe={ref:"editor",style:{"z-index":"1"}},le=_("\u5DF2\u5BA1\u6838"),ne=_("\u5F85\u5BA1\u6838");function se(a,o,i,p,S,A){const c=r("el-descriptions-item"),l=r("el-descriptions"),t=r("el-divider"),h=r("el-option"),k=r("el-select"),m=r("el-form-item"),V=r("el-input"),F=r("el-button"),y=r("el-upload"),I=r("el-date-picker"),e=r("el-radio"),d=r("el-radio-group"),b=r("el-form"),v=r("el-card");return Q(),X(v,{style:{"min-height":"100%"}},{default:s(()=>[n(l,{title:"\u63D0\u793A"},{default:s(()=>[n(c,null,{default:s(()=>[te]),_:1})]),_:1}),n(t),n(b,{model:a.Form,rules:a.rules,ref:"Ref","label-width":"100px"},{default:s(()=>[n(m,{label:"\u7C7B\u578B",prop:"type"},{default:s(()=>[n(k,{modelValue:a.Form.type,"onUpdate:modelValue":o[0]||(o[0]=u=>a.Form.type=u),placeholder:"Select",filterable:""},{default:s(()=>[n(h,{value:"0",label:"\u62DB\u8058\u4FE1\u606F"}),n(h,{value:"1",label:"\u5E94\u8058\u6D41\u7A0B"})]),_:1},8,["modelValue"])]),_:1}),n(m,{label:"\u6807\u9898",prop:"title"},{default:s(()=>[n(V,{modelValue:a.Form.title,"onUpdate:modelValue":o[1]||(o[1]=u=>a.Form.title=u),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",type:"text"},null,8,["modelValue"])]),_:1}),n(m,{label:"\u9644\u4EF6",prop:"attachment"},{default:s(()=>[n(y,{ref:"attachmentRef",headers:{Authorization:a.token},action:p.uploadImgServer,"on-remove":p.handleAttachmentRemove,"on-success":p.handleAttachmentSuccess,"auto-upload":!0,data:{basket:"attachment"},limit:3,multiple:"","file-list":a.Form.attachmentFileList},{default:s(()=>[n(F,{type:"primary"},{default:s(()=>[ae]),_:1})]),_:1},8,["headers","action","on-remove","on-success","file-list"])]),_:1}),n(m,{label:"\u5185\u5BB9",prop:"content"},{default:s(()=>[Y("div",oe,null,512)]),_:1}),n(m,{label:"\u53D1\u5E03\u65F6\u95F4",prop:"release_time"},{default:s(()=>[n(I,{modelValue:a.Form.release_time,"onUpdate:modelValue":o[2]||(o[2]=u=>a.Form.release_time=u),type:"datetime","default-value":new Date,placeholder:"\u8BF7\u8F93\u5165\u53D1\u5E03\u65F6\u95F4"},null,8,["modelValue","default-value"])]),_:1}),n(m,{label:"\u72B6\u6001",prop:"status"},{default:s(()=>[n(d,{modelValue:a.Form.status,"onUpdate:modelValue":o[3]||(o[3]=u=>a.Form.status=u),disabled:""},{default:s(()=>[n(e,{label:"1"},{default:s(()=>[le]),_:1}),n(e,{label:"0"},{default:s(()=>[ne]),_:1})]),_:1},8,["modelValue"])]),_:1}),n(m,null,{default:s(()=>[n(F,{type:"primary",onClick:o[4]||(o[4]=u=>p.submitAdd())},{default:s(()=>[_(Z(a.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var ce=x(ee,[["render",se]]);export{ce as default};
