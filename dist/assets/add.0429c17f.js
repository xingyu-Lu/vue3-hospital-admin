var H=Object.defineProperty,M=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var L=(t,o,r)=>o in t?H(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,B=(t,o)=>{for(var r in o||(o={}))P.call(o,r)&&L(t,r,o[r]);if(A)for(var r of A(o))O.call(o,r)&&L(t,r,o[r]);return t},q=(t,o)=>M(t,D(o));import{W}from"./wangEditor.7fca4042.js";import{_ as G,a as T,c as E,u as x}from"./index.cdee2207.js";import{an as J,as as K,am as f,aq as Q,u as X,r as Y,o as Z,b as I,au as $,t as ee,d as i,e as S,n as te,w as n,E as p,j as l,g as R,f as z,h as N,k as j,i as ae}from"./vendor.03113035.js";const oe={name:"news_add",components:{Plus:J,Delete:K},setup(){const t=f(null),o=f(null),r=f(null),m=f(null),w=Q(),U=X(),{id:d}=w.query,s=Y({token:"Bearer "+T("token")||"",id:d,Form:{attachment:"",img_url:"",img:"",type:"0",title:"",content:"",release_time:f(""),status:"0",disabled:!0,fileList:[],attachmentFileList:[]},rules:{img:[{required:!1,message:"\u56FE\u7247\u5FC5\u987B",trigger:["change"]}],type:[{required:!0,message:"\u7C7B\u4FEE",trigger:["change"]}],title:[{required:"true",message:"\u6807\u9898",trigger:["change"]}],release_time:[{required:"true",message:"\u53D1\u5E03\u65F6\u95F4\u5FC5\u987B",trigger:["change"]}],status:[{required:!1,message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}});let e;Z(()=>{e=new W(r.value),e.config.showLinkImg=!1,e.config.showLinkImgAlt=!1,e.config.showLinkImgHref=!1,e.config.uploadImgMaxSize=10*1024*1024,e.config.uploadImgMaxLength=1,e.config.uploadImgAccept=["jpg","jpeg","png","gif","bmp","webp"],e.config.uploadFileName="file",e.config.uploadImgHeaders={Authorization:s.token},e.config.uploadImgParams={basket:"img"},e.config.uploadImgHooks={customInsert:function(a,u){console.log("result",u),a(u.data.src)}},e.config.uploadImgServer=E,Object.assign(e.config,{onchange(){console.log("change")}}),e.config.uploadVideoServer=E,e.config.uploadVideoMaxSize=1*200*1024*1024,e.config.uploadVideoAccept=["mp4"],e.config.uploadVideoParams={basket:"video"},e.config.uploadVideoName="file",e.config.uploadVideoHeaders={Authorization:s.token},e.config.uploadVideoHooks={customInsert:function(a,u){console.log("customInsert",u),a(u.data.src)}},e.create(),d&&I.get(`/api/back/partys/${d}`).then(a=>{s.Form={img_url:a.data.url||"",img:a.data.file_id,type:String(a.data.type),title:a.data.title,release_time:a.data.release_time,status:String(a.data.status),fileList:[a.data.url],disabled:!0},e&&e.txt.html(a.data.content)})}),$(()=>{e.destroy(),e=null});const F=()=>{o.value.validate(a=>{if(a){let u=I.post,h={img:s.Form.img,type:s.Form.type,title:s.Form.title,content:e.txt.html(),release_time:s.Form.release_time,status:s.Form.status},b="/api/back/partys";d&&(h.release_time=s.Form.release_time,u=I.put,b=`/api/back/partys/${d}`),u(b,h).then(()=>{d?p.success("\u4FEE\u6539\u6210\u529F"):p.success("\u6DFB\u52A0\u6210\u529F"),U.push({path:"/party"})})}})},g=a=>{const u=a.name.split(".")[1]||"";if(!["jpg","jpeg","png"].includes(u))return p.error("\u8BF7\u4E0A\u4F20 jpg\u3001jpeg\u3001png \u683C\u5F0F\u7684\u56FE\u7247"),!1},v=a=>{p.success("\u4E0A\u4F20\u6210\u529F"),s.Form.img_url=a.data.src||"",s.Form.img=a.data.id||""},k=a=>{p.error("\u4E0A\u4F20\u5931\u8D25")},y=a=>{m.value.clearFiles(),s.Form.img=""},V=a=>{p.success("\u4E0A\u4F20\u6210\u529F"),s.Form.attachmentFileList.push({name:a.data.src,url:a.data.src}),s.Form.attachment?s.Form.attachment=s.Form.attachment+","+a.data.id:s.Form.attachment=a.data.id},_=a=>{t.value.clearFiles(),s.Form.attachment="",s.Form.attachmentFileList=[]};return q(B({},ee(s)),{editor:r,attachmentRef:t,uploadRef:m,Ref:o,submitAdd:F,uploadImgServer:x,handleBeforeUpload:g,handleUrlSuccess:v,handleUrlError:k,handleRemove:y,handleAttachmentSuccess:V,handleAttachmentRemove:_})}},le=["src"],se={class:"el-upload-list__item-actions"},ne={ref:"editor",style:{"z-index":"1"}},re=j("\u5DF2\u5BA1\u6838"),ie=j("\u5F85\u5BA1\u6838");function de(t,o,r,m,w,U){const d=i("el-option"),s=i("el-select"),e=i("el-form-item"),F=i("plus"),g=i("el-icon"),v=i("delete"),k=i("el-upload"),y=i("el-input"),V=i("el-date-picker"),_=i("el-radio"),a=i("el-radio-group"),u=i("el-button"),h=i("el-form"),b=i("el-card");return S(),te(b,{style:{"min-height":"100%"}},{default:n(()=>[l(h,{model:t.Form,rules:t.rules,ref:"Ref","label-width":"100px"},{default:n(()=>[l(e,{label:"\u7C7B\u578B",prop:"type"},{default:n(()=>[l(s,{modelValue:t.Form.type,"onUpdate:modelValue":o[0]||(o[0]=c=>t.Form.type=c),placeholder:"Select"},{default:n(()=>[l(d,{value:"0",label:"\u515A\u52A1\u7BA1\u7406"}),l(d,{value:"1",label:"\u515A\u5458\u6559\u80B2"}),l(d,{value:"2",label:"\u515A\u98CE\u5EC9\u653F"}),l(d,{value:"3",label:"\u804C\u5DE5\u4E4B\u5BB6"}),l(d,{value:"4",label:"\u533B\u5FB7\u533B\u98CE"}),l(d,{value:"5",label:"\u9752\u5E74\u52A0\u6CB9\u7AD9"})]),_:1},8,["modelValue"])]),_:1}),l(e,{label:"\u5C01\u9762\u56FE",prop:"img"},{default:n(()=>[l(k,{ref:"uploadRef",action:m.uploadImgServer,data:{basket:"img"},limit:1,"list-type":"picture-card","thumbnail-mode":"true",headers:{Authorization:t.token},"before-upload":m.handleBeforeUpload,"on-success":m.handleUrlSuccess,"on-error":m.handleUrlError,"auto-upload":!0,"file-list":t.Form.fileList},{default:n(()=>[l(g,null,{default:n(()=>[l(F)]),_:1})]),file:n(({file:c})=>[R("div",null,[t.Form.img_url?(S(),z("img",{key:0,class:"el-upload-list__item-thumbnail",src:t.Form.img_url,alt:""},null,8,le)):N("",!0),R("span",se,[t.Form.disabled?(S(),z("span",{key:0,class:"el-upload-list__item-delete",onClick:o[1]||(o[1]=(...C)=>m.handleRemove&&m.handleRemove(...C))},[l(g,null,{default:n(()=>[l(v)]),_:1})])):N("",!0)])])]),_:1},8,["action","headers","before-upload","on-success","on-error","file-list"])]),_:1}),l(e,{label:"\u6807\u9898",prop:"title"},{default:n(()=>[l(y,{modelValue:t.Form.title,"onUpdate:modelValue":o[2]||(o[2]=c=>t.Form.title=c),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",type:"text"},null,8,["modelValue"])]),_:1}),l(e,{label:"\u5185\u5BB9",prop:"content"},{default:n(()=>[R("div",ne,null,512)]),_:1}),l(e,{label:"\u53D1\u5E03\u65F6\u95F4",prop:"release_time"},{default:n(()=>[l(V,{modelValue:t.Form.release_time,"onUpdate:modelValue":o[3]||(o[3]=c=>t.Form.release_time=c),type:"datetime","default-value":new Date,placeholder:"\u8BF7\u8F93\u5165\u53D1\u5E03\u65F6\u95F4"},null,8,["modelValue","default-value"])]),_:1}),l(e,{label:"\u72B6\u6001",prop:"status"},{default:n(()=>[l(a,{modelValue:t.Form.status,"onUpdate:modelValue":o[4]||(o[4]=c=>t.Form.status=c),disabled:""},{default:n(()=>[l(_,{label:"1"},{default:n(()=>[re]),_:1}),l(_,{label:"0"},{default:n(()=>[ie]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(e,null,{default:n(()=>[l(u,{type:"primary",onClick:o[5]||(o[5]=c=>m.submitAdd())},{default:n(()=>[j(ae(t.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var fe=G(oe,[["render",de]]);export{fe as default};