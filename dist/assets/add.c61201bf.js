var H=Object.defineProperty,M=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var U=(a,o,r)=>o in a?H(a,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[o]=r,B=(a,o)=>{for(var r in o||(o={}))P.call(o,r)&&U(a,r,o[r]);if(j)for(var r of j(o))O.call(o,r)&&U(a,r,o[r]);return a},q=(a,o)=>M(a,D(o));import{W}from"./wangEditor.860a6779.js";import{_ as G,a as T,c as z,u as J}from"./index.4888963d.js";import{al as K,aq as Q,ak as f,ao as X,u as Y,r as Z,o as x,b as S,as as $,t as ee,d as i,e as w,n as te,w as s,E as p,j as l,g as R,f as E,h as N,k,i as ae}from"./vendor.15e5bf5f.js";const oe={name:"news_add",components:{Plus:K,Delete:Q},setup(){const a=f(null),o=f(null),r=f(null),d=f(null),A=X(),L=Y(),{id:u}=A.query,n=Z({token:"Bearer "+T("token")||"",id:u,Form:{attachment:"",img_url:"",img:"",type:"0",title:"",content:"",release_time:f(""),status:"0",disabled:!0,fileList:[],attachmentFileList:[]},rules:{img:[{required:!1,message:"\u56FE\u7247\u5FC5\u987B",trigger:["change"]}],type:[{required:!0,message:"\u7C7B\u4FEE",trigger:["change"]}],title:[{required:"true",message:"\u6807\u9898",trigger:["change"]}],release_time:[{required:"true",message:"\u53D1\u5E03\u65F6\u95F4\u5FC5\u987B",trigger:["change"]}],status:[{required:!1,message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}});let e;x(()=>{e=new W(r.value),e.config.showLinkImg=!1,e.config.showLinkImgAlt=!1,e.config.showLinkImgHref=!1,e.config.uploadImgMaxSize=10*1024*1024,e.config.uploadImgMaxLength=1,e.config.uploadImgAccept=["jpg","jpeg","png","gif","bmp","webp"],e.config.uploadFileName="file",e.config.uploadImgHeaders={Authorization:n.token},e.config.uploadImgParams={basket:"img"},e.config.uploadImgHooks={customInsert:function(t,m){console.log("result",m),t(m.data.src)}},e.config.uploadImgServer=z,Object.assign(e.config,{onchange(){console.log("change")}}),e.config.uploadVideoServer=z,e.config.uploadVideoMaxSize=1*200*1024*1024,e.config.uploadVideoAccept=["mp4"],e.config.uploadVideoParams={basket:"video"},e.config.uploadVideoName="file",e.config.uploadVideoHeaders={Authorization:n.token},e.config.uploadVideoHooks={customInsert:function(t,m){console.log("customInsert",m),t(m.data.src)}},e.create(),u&&S.get(`/api/back/news/${u}`).then(t=>{n.Form={attachment:t.data.attachment_id,attachmentFileList:t.data.attachment,img_url:t.data.url||"",img:t.data.file_id,type:String(t.data.type),title:t.data.title,release_time:t.data.release_time,status:String(t.data.status),fileList:[t.data.url],disabled:!0},e&&e.txt.html(t.data.content)})}),$(()=>{e.destroy(),e=null});const v=()=>{o.value.validate(t=>{if(t){let m=S.post,F={attachment:n.Form.attachment,img:n.Form.img,type:n.Form.type,title:n.Form.title,content:e.txt.html(),release_time:n.Form.release_time,status:n.Form.status},b="/api/back/news";u&&(F.release_time=n.Form.release_time,m=S.put,b=`/api/back/news/${u}`),m(b,F).then(()=>{u?p.success("\u4FEE\u6539\u6210\u529F"):p.success("\u6DFB\u52A0\u6210\u529F"),L.push({path:"/news"})})}})},g=t=>{const m=t.name.split(".")[1]||"";if(!["jpg","jpeg","png"].includes(m))return p.error("\u8BF7\u4E0A\u4F20 jpg\u3001jpeg\u3001png \u683C\u5F0F\u7684\u56FE\u7247"),!1},y=t=>{p.success("\u4E0A\u4F20\u6210\u529F"),n.Form.img_url=t.data.src||"",n.Form.img=t.data.id||""},_=t=>{p.error("\u4E0A\u4F20\u5931\u8D25")},h=t=>{d.value.clearFiles(),n.Form.img=""},V=t=>{p.success("\u4E0A\u4F20\u6210\u529F"),n.Form.attachmentFileList.push({name:t.data.src,url:t.data.src}),n.Form.attachment?n.Form.attachment=n.Form.attachment+","+t.data.id:n.Form.attachment=t.data.id},I=t=>{a.value.clearFiles(),n.Form.attachment="",n.Form.attachmentFileList.attachment=[]};return q(B({},ee(n)),{editor:r,attachmentRef:a,uploadRef:d,Ref:o,submitAdd:v,uploadImgServer:J,handleBeforeUpload:g,handleUrlSuccess:y,handleUrlError:_,handleRemove:h,handleAttachmentSuccess:V,handleAttachmentRemove:I})}},le=["src"],ne={class:"el-upload-list__item-actions"},se=k("\u4E0A\u4F20"),re={ref:"editor",style:{"z-index":"1"}},ie=k("\u5DF2\u5BA1\u6838"),de=k("\u5F85\u5BA1\u6838");function me(a,o,r,d,A,L){const u=i("el-option"),n=i("el-select"),e=i("el-form-item"),v=i("plus"),g=i("el-icon"),y=i("delete"),_=i("el-upload"),h=i("el-button"),V=i("el-input"),I=i("el-date-picker"),t=i("el-radio"),m=i("el-radio-group"),F=i("el-form"),b=i("el-card");return w(),te(b,{style:{"min-height":"100%"}},{default:s(()=>[l(F,{model:a.Form,rules:a.rules,ref:"Ref","label-width":"100px"},{default:s(()=>[l(e,{label:"\u7C7B\u578B",prop:"type"},{default:s(()=>[l(n,{modelValue:a.Form.type,"onUpdate:modelValue":o[0]||(o[0]=c=>a.Form.type=c),placeholder:"Select"},{default:s(()=>[l(u,{label:"\u533B\u9662\u65B0\u95FB",value:"0"}),l(u,{label:"\u533B\u9662\u516C\u544A",value:"1"}),l(u,{label:"\u89C6\u9891\u65B0\u95FB",value:"2"})]),_:1},8,["modelValue"])]),_:1}),l(e,{label:"\u5C01\u9762\u56FE",prop:"img"},{default:s(()=>[l(_,{ref:"uploadRef",action:d.uploadImgServer,data:{basket:"img"},limit:1,"list-type":"picture-card","thumbnail-mode":"true",headers:{Authorization:a.token},"before-upload":d.handleBeforeUpload,"on-success":d.handleUrlSuccess,"on-error":d.handleUrlError,"auto-upload":!0,"file-list":a.Form.fileList},{default:s(()=>[l(g,null,{default:s(()=>[l(v)]),_:1})]),file:s(({file:c})=>[R("div",null,[a.Form.img_url?(w(),E("img",{key:0,class:"el-upload-list__item-thumbnail",src:a.Form.img_url,alt:""},null,8,le)):N("",!0),R("span",ne,[a.Form.disabled?(w(),E("span",{key:0,class:"el-upload-list__item-delete",onClick:o[1]||(o[1]=(...C)=>d.handleRemove&&d.handleRemove(...C))},[l(g,null,{default:s(()=>[l(y)]),_:1})])):N("",!0)])])]),_:1},8,["action","headers","before-upload","on-success","on-error","file-list"])]),_:1}),l(e,{label:"\u9644\u4EF6",prop:"attachment"},{default:s(()=>[l(_,{ref:"attachmentRef",headers:{Authorization:a.token},action:d.uploadImgServer,"on-remove":d.handleAttachmentRemove,"on-success":d.handleAttachmentSuccess,"auto-upload":!0,data:{basket:"attachment"},limit:3,multiple:"","file-list":a.Form.attachmentFileList},{default:s(()=>[l(h,{type:"primary"},{default:s(()=>[se]),_:1})]),_:1},8,["headers","action","on-remove","on-success","file-list"])]),_:1}),l(e,{label:"\u6807\u9898",prop:"title"},{default:s(()=>[l(V,{modelValue:a.Form.title,"onUpdate:modelValue":o[2]||(o[2]=c=>a.Form.title=c),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",type:"text"},null,8,["modelValue"])]),_:1}),l(e,{label:"\u5185\u5BB9",prop:"content"},{default:s(()=>[R("div",re,null,512)]),_:1}),l(e,{label:"\u53D1\u5E03\u65F6\u95F4",prop:"release_time"},{default:s(()=>[l(I,{modelValue:a.Form.release_time,"onUpdate:modelValue":o[3]||(o[3]=c=>a.Form.release_time=c),type:"datetime","default-value":new Date,placeholder:"\u8BF7\u8F93\u5165\u53D1\u5E03\u65F6\u95F4"},null,8,["modelValue","default-value"])]),_:1}),l(e,{label:"\u72B6\u6001",prop:"status"},{default:s(()=>[l(m,{modelValue:a.Form.status,"onUpdate:modelValue":o[4]||(o[4]=c=>a.Form.status=c),disabled:""},{default:s(()=>[l(t,{label:"1"},{default:s(()=>[ie]),_:1}),l(t,{label:"0"},{default:s(()=>[de]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(e,null,{default:s(()=>[l(h,{type:"primary",onClick:o[5]||(o[5]=c=>d.submitAdd())},{default:s(()=>[k(ae(a.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var ge=G(oe,[["render",me]]);export{ge as default};
