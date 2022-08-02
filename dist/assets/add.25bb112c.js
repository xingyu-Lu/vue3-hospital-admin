var H=Object.defineProperty,K=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var j=(t,a,i)=>a in t?H(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i,q=(t,a)=>{for(var i in a||(a={}))D.call(a,i)&&j(t,i,a[i]);if(T)for(var i of T(a))G.call(a,i)&&j(t,i,a[i]);return t},z=(t,a)=>K(t,x(a));import{an as P,as as J,am as b,aq as Q,u as W,r as X,au as Y,E as p,o as Z,b as R,av as $,t as ee,d,e as S,n as te,w as s,j as l,g as U,f as I,h as L,k as N,i as ae}from"./vendor.573e8a1f.js";import{a as M,B as oe,E as le,T as re}from"./index.esm.77a649e9.js";import{_ as ne,a as se,c as A,u as ie}from"./index.19785c67.js";function de(t,a){const{link:i="",fileName:n=""}=t;return`<a data-w-e-type="attachment" data-w-e-is-void data-w-e-is-inline data-link="${i}" data-fileName="${n}" href="${i}" target="_blank">${n}</a>`}const me={type:"attachment",elemToHtml:de};M.elemsToHtml=[me];oe.registerModule(M);const ue={name:"news_add",components:{Plus:P,Delete:J,Editor:le,Toolbar:re},setup(){const t=b(null),a=b(null),i=b(null),n=Q(),B=W(),{id:f}=n.query,o=X({token:"Bearer "+se("token")||"",id:f,Form:{attachment:"",img_url:"",img:"",type:"0",title:"",content:"",release_time:b(""),status:"0",disabled:!0,fileList:[],attachmentFileList:[]},rules:{img:[{required:!1,message:"\u56FE\u7247\u5FC5\u987B",trigger:["change"]}],type:[{required:!0,message:"\u7C7B\u4FEE",trigger:["change"]}],title:[{required:"true",message:"\u6807\u9898",trigger:["change"]}],release_time:[{required:"true",message:"\u53D1\u5E03\u65F6\u95F4\u5FC5\u987B",trigger:["change"]}],status:[{required:!1,message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}}),_=Y(),c={insertKeys:{index:31,keys:["uploadAttachment"]}},y={placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9...",hoverbarKeys:{attachment:{menuKeys:["downloadAttachment"]}},MENU_CONF:{uploadImage:{server:A,fieldName:"file",maxFileSize:2*1024*1024,maxNumberOfFiles:10,allowedFileTypes:["image/*"],meta:{basket:"img"},headers:{Authorization:o.token},customInsert:function(e,r){r(e.data.src,e.data.file_name,e.data.src)},onError(e,r,m){p.error(new Error(r).message),console.log(e,r,m)}},uploadVideo:{server:A,fieldName:"file",maxFileSize:100*1024*1024,allowedFileTypes:["video/*"],meta:{basket:"video"},headers:{Authorization:o.token},customInsert:function(e,r){r(e.data.src)},onError(e,r,m){p.error(new Error(r).message),console.log(e,r,m)}},uploadAttachment:{server:A,fieldName:"file",maxFileSize:10*1024*1024,meta:{basket:"attachment"},headers:{Authorization:o.token},customInsert:function(e,r,m){m(`${r.name}`,e.data.src)},onError(e,r,m){p.error(new Error(r).message),console.log(e,r,m)}}}},g=e=>{_.value=e};Z(()=>{f&&R.get(`/api/back/partys/${f}`).then(e=>{o.Form={img_url:e.data.url||"",img:e.data.file_id,type:String(e.data.type),title:e.data.title,content:e.data.content,release_time:e.data.release_time,status:String(e.data.status),fileList:[{url:e.data.url}],disabled:!0}})}),$(()=>{const e=_.value;e!=null&&e.destroy()});const v=()=>{a.value.validate(e=>{if(e){let r=R.post,m={img:o.Form.img,type:o.Form.type,title:o.Form.title,content:o.Form.content,release_time:o.Form.release_time,status:o.Form.status},F="/api/back/partys";f&&(m.release_time=o.Form.release_time,r=R.put,F=`/api/back/partys/${f}`),r(F,m).then(()=>{f?p.success("\u4FEE\u6539\u6210\u529F"):p.success("\u6DFB\u52A0\u6210\u529F"),B.push({path:"/party",query:{type:m.type}})})}})},k=e=>{const r=e.name.split(".")[1]||"";if(!["jpg","jpeg","png"].includes(r))return p.error("\u8BF7\u4E0A\u4F20 jpg\u3001jpeg\u3001png \u683C\u5F0F\u7684\u56FE\u7247"),!1},V=e=>{p.success("\u4E0A\u4F20\u6210\u529F"),o.Form.img_url=e.data.src||"",o.Form.img=e.data.id||""},C=e=>{p.error("\u4E0A\u4F20\u5931\u8D25")},E=e=>{i.value.clearFiles(),o.Form.img="",o.Form.img_url="",o.Form.fileList=[]},w=e=>{p.success("\u4E0A\u4F20\u6210\u529F"),o.Form.attachmentFileList.push({name:e.data.src,url:e.data.src}),o.Form.attachment?o.Form.attachment=o.Form.attachment+","+e.data.id:o.Form.attachment=e.data.id},h=e=>{t.value.clearFiles(),o.Form.attachment="",o.Form.attachmentFileList=[]};return z(q({},ee(o)),{editorRef:_,mode:"default",toolbarConfig:c,editorConfig:y,handleCreated:g,attachmentRef:t,uploadRef:i,Ref:a,submitAdd:v,uploadImgServer:ie,handleBeforeUpload:k,handleUrlSuccess:V,handleUrlError:C,handleRemove:E,handleAttachmentSuccess:w,handleAttachmentRemove:h})}},ce=["src"],pe={class:"el-upload-list__item-actions"},fe={style:{border:"1px solid #ccc","z-index":"100"}},_e=N("\u5DF2\u5BA1\u6838"),ge=N("\u5F85\u5BA1\u6838");function he(t,a,i,n,B,f){const o=d("el-option"),_=d("el-select"),c=d("el-form-item"),y=d("plus"),g=d("el-icon"),v=d("delete"),k=d("el-upload"),V=d("el-input"),C=d("Toolbar"),E=d("Editor"),w=d("el-date-picker"),h=d("el-radio"),e=d("el-radio-group"),r=d("el-button"),m=d("el-form"),F=d("el-card");return S(),te(F,{style:{"min-height":"100%"}},{default:s(()=>[l(m,{model:t.Form,rules:t.rules,ref:"Ref","label-width":"100px"},{default:s(()=>[l(c,{label:"\u7C7B\u578B",prop:"type"},{default:s(()=>[l(_,{modelValue:t.Form.type,"onUpdate:modelValue":a[0]||(a[0]=u=>t.Form.type=u),placeholder:"Select"},{default:s(()=>[l(o,{value:"0",label:"\u515A\u52A1\u7BA1\u7406"}),l(o,{value:"1",label:"\u515A\u5458\u6559\u80B2"}),l(o,{value:"2",label:"\u515A\u98CE\u5EC9\u653F"}),l(o,{value:"3",label:"\u804C\u5DE5\u4E4B\u5BB6"}),l(o,{value:"4",label:"\u533B\u5FB7\u533B\u98CE"}),l(o,{value:"5",label:"\u9752\u5E74\u52A0\u6CB9\u7AD9"})]),_:1},8,["modelValue"])]),_:1}),l(c,{label:"\u5C01\u9762\u56FE",prop:"img"},{default:s(()=>[l(k,{ref:"uploadRef",action:n.uploadImgServer,data:{basket:"img"},limit:1,"list-type":"picture-card","thumbnail-mode":"true",headers:{Authorization:t.token},"before-upload":n.handleBeforeUpload,"on-success":n.handleUrlSuccess,"on-error":n.handleUrlError,"auto-upload":!0,"file-list":t.Form.fileList},{default:s(()=>[l(g,null,{default:s(()=>[l(y)]),_:1})]),file:s(({file:u})=>[U("div",null,[t.Form.img_url?(S(),I("img",{key:0,class:"el-upload-list__item-thumbnail",src:t.Form.img_url,alt:""},null,8,ce)):L("",!0),U("span",pe,[t.Form.disabled?(S(),I("span",{key:0,class:"el-upload-list__item-delete",onClick:a[1]||(a[1]=(...O)=>n.handleRemove&&n.handleRemove(...O))},[l(g,null,{default:s(()=>[l(v)]),_:1})])):L("",!0)])])]),_:1},8,["action","headers","before-upload","on-success","on-error","file-list"])]),_:1}),l(c,{label:"\u6807\u9898",prop:"title"},{default:s(()=>[l(V,{modelValue:t.Form.title,"onUpdate:modelValue":a[2]||(a[2]=u=>t.Form.title=u),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",type:"text"},null,8,["modelValue"])]),_:1}),l(c,{label:"\u5185\u5BB9",prop:"content"},{default:s(()=>[U("div",fe,[l(C,{style:{"border-bottom":"1px solid #ccc"},editor:n.editorRef,defaultConfig:n.toolbarConfig,mode:n.mode},null,8,["editor","defaultConfig","mode"]),l(E,{style:{height:"500px","overflow-y":"hidden"},modelValue:t.Form.content,"onUpdate:modelValue":a[3]||(a[3]=u=>t.Form.content=u),defaultConfig:n.editorConfig,mode:n.mode,onOnCreated:n.handleCreated},null,8,["modelValue","defaultConfig","mode","onOnCreated"])])]),_:1}),l(c,{label:"\u53D1\u5E03\u65F6\u95F4",prop:"release_time"},{default:s(()=>[l(w,{modelValue:t.Form.release_time,"onUpdate:modelValue":a[4]||(a[4]=u=>t.Form.release_time=u),type:"datetime",placeholder:"\u8BF7\u8F93\u5165\u53D1\u5E03\u65F6\u95F4"},null,8,["modelValue"])]),_:1}),l(c,{label:"\u72B6\u6001",prop:"status"},{default:s(()=>[l(e,{modelValue:t.Form.status,"onUpdate:modelValue":a[5]||(a[5]=u=>t.Form.status=u),disabled:""},{default:s(()=>[l(h,{label:"1"},{default:s(()=>[_e]),_:1}),l(h,{label:"0"},{default:s(()=>[ge]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(c,null,{default:s(()=>[l(r,{type:"primary",onClick:a[6]||(a[6]=u=>n.submitAdd())},{default:s(()=>[N(ae(t.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var ke=ne(ue,[["render",he]]);export{ke as default};