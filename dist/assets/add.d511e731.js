var M=Object.defineProperty,H=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var B=(o,l,d)=>l in o?M(o,l,{enumerable:!0,configurable:!0,writable:!0,value:d}):o[l]=d,T=(o,l)=>{for(var d in l||(l={}))D.call(l,d)&&B(o,d,l[d]);if(x)for(var d of x(l))G.call(l,d)&&B(o,d,l[d]);return o},A=(o,l)=>H(o,K(l));import{an as P,as as J,am as w,aq as Q,u as W,r as X,au as Y,E as c,o as Z,b as V,av as $,t as ee,d as m,e as b,n as j,w as a,j as t,f as R,q as oe,F as le,g as N,h as z,k as S,i as te}from"./vendor.573e8a1f.js";import{a as I,B as ae,E as re,T as ne}from"./index.esm.77a649e9.js";import{_ as se,a as ie,c as q,u as de}from"./index.19785c67.js";function me(o,l){const{link:d="",fileName:i=""}=o;return`<a data-w-e-type="attachment" data-w-e-is-void data-w-e-is-inline data-link="${d}" data-fileName="${i}" href="${d}" target="_blank">${i}</a>`}const ue={type:"attachment",elemToHtml:me};I.elemsToHtml=[ue];ae.registerModule(I);const fe={name:"experts_add",components:{Plus:P,Delete:J,Editor:re,Toolbar:ne},setup(){w(null);const o=w(null),l=w(null),d=Q(),i=W(),{id:g}=d.query,r=X({token:"Bearer "+ie("token")||"",id:g,Form:{img_url:"",img:"",office_id:"",name:"",position:"",professional:"",excel:"",content:"",sort:"",status:"0",disabled:!0,fileList:[],list:[]},rules:{img:[{required:!0,message:"\u56FE\u7247\u5FC5\u987B",trigger:["change"]}],office_id:[{required:!0,message:"\u79D1\u5BA4\u5FC5\u987B",trigger:["change"]}],name:[{required:!0,message:"\u59D3\u540D\u5FC5\u987B",trigger:["change"]}],position:[{required:!1,message:"\u804C\u52A1\u5FC5\u987B",trigger:["change"]}],professional:[{required:!1,message:"\u804C\u79F0\u5FC5\u987B",trigger:["change"]}],excel:[{required:!0,message:"\u64C5\u957F\u5FC5\u987B",trigger:["change"]}],sort:[{required:!0,message:"\u6392\u5E8F\u5FC5\u987B",trigger:["change"]}],status:[{required:!1,message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}}),p=Y(),h={insertKeys:{index:31,keys:["uploadAttachment"]}},u={placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9...",hoverbarKeys:{attachment:{menuKeys:["downloadAttachment"]}},MENU_CONF:{uploadImage:{server:q,fieldName:"file",maxFileSize:2*1024*1024,maxNumberOfFiles:10,allowedFileTypes:["image/*"],meta:{basket:"img"},headers:{Authorization:r.token},customInsert:function(e,n){n(e.data.src,e.data.file_name,e.data.src)},onError(e,n,f){c.error(new Error(n).message),console.log(e,n,f)}},uploadVideo:{server:q,fieldName:"file",maxFileSize:100*1024*1024,allowedFileTypes:["video/*"],meta:{basket:"video"},headers:{Authorization:r.token},customInsert:function(e,n){n(e.data.src)},onError(e,n,f){c.error(new Error(n).message),console.log(e,n,f)}},uploadAttachment:{server:q,fieldName:"file",maxFileSize:10*1024*1024,meta:{basket:"attachment"},headers:{Authorization:r.token},customInsert:function(e,n,f){f(`${n.name}`,e.data.src)},onError(e,n,f){c.error(new Error(n).message),console.log(e,n,f)}}}},k=e=>{p.value=e};Z(()=>{F(),g&&V.get(`/api/back/experts/${g}`).then(e=>{r.Form={img_url:e.data.url||"",img:e.data.file_id,office_id:e.data.office_id,name:e.data.name,position:e.data.position,professional:e.data.professional,content:e.data.content,excel:e.data.excel,sort:e.data.sort,status:String(e.data.status),fileList:[{url:e.data.url}],disabled:!0}})}),$(()=>{const e=p.value;e!=null&&e.destroy()});const F=()=>{V.get("/api/back/technicalOffices").then(e=>{r.Form.list=e.data})},y=()=>{o.value.validate(e=>{if(e){let n=V.post,f={img:r.Form.img,office_id:r.Form.office_id,name:r.Form.name,position:r.Form.position,professional:r.Form.professional,excel:r.Form.excel,sort:r.Form.sort,content:r.Form.content,status:r.Form.status},v="/api/back/experts";g&&(n=V.put,v=`/api/back/experts/${g}`),n(v,f).then(()=>{g?c.success("\u4FEE\u6539\u6210\u529F"):c.success("\u6DFB\u52A0\u6210\u529F"),i.push({path:"/expert"})})}})},C=e=>{const n=e.name.split(".")[1]||"";if(!["jpg","jpeg","png"].includes(n))return c.error("\u8BF7\u4E0A\u4F20 jpg\u3001jpeg\u3001png \u683C\u5F0F\u7684\u56FE\u7247"),!1},_=e=>{c.success("\u4E0A\u4F20\u6210\u529F"),r.Form.img_url=e.data.src||"",r.Form.img=e.data.id||""},E=e=>{c.error("\u4E0A\u4F20\u5931\u8D25")},U=e=>{l.value.clearFiles(),r.Form.img="",r.Form.img_url="",r.Form.fileList=[]};return A(T({},ee(r)),{editorRef:p,mode:"default",toolbarConfig:h,editorConfig:u,handleCreated:k,uploadRef:l,Ref:o,submitAdd:y,uploadImgServer:de,handleBeforeUpload:C,handleUrlSuccess:_,handleUrlError:E,handleRemove:U})}},pe=["src"],ce={class:"el-upload-list__item-actions"},ge={style:{border:"1px solid #ccc","z-index":"100"}},_e=S("\u5DF2\u5BA1\u6838"),be=S("\u5F85\u5BA1\u6838");function he(o,l,d,i,g,r){const p=m("el-option"),h=m("el-select"),u=m("el-form-item"),k=m("plus"),F=m("el-icon"),y=m("delete"),C=m("el-upload"),_=m("el-input"),E=m("Toolbar"),U=m("Editor"),e=m("el-radio"),n=m("el-radio-group"),f=m("el-button"),v=m("el-form"),O=m("el-card");return b(),j(O,{style:{"min-height":"100%"}},{default:a(()=>[t(v,{model:o.Form,rules:o.rules,ref:"Ref","label-width":"100px"},{default:a(()=>[t(u,{label:"\u79D1\u5BA4",prop:"office_id"},{default:a(()=>[t(h,{modelValue:o.Form.office_id,"onUpdate:modelValue":l[0]||(l[0]=s=>o.Form.office_id=s),placeholder:"Select",filterable:""},{default:a(()=>[(b(!0),R(le,null,oe(o.Form.list,s=>(b(),j(p,{key:s.id,label:s.name,value:s.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"\u5C01\u9762\u56FE",prop:"img"},{default:a(()=>[t(C,{ref:"uploadRef",action:i.uploadImgServer,data:{basket:"img"},limit:1,"list-type":"picture-card","thumbnail-mode":"true",headers:{Authorization:o.token},"before-upload":i.handleBeforeUpload,"on-success":i.handleUrlSuccess,"on-error":i.handleUrlError,"auto-upload":!0,"file-list":o.Form.fileList},{default:a(()=>[t(F,null,{default:a(()=>[t(k)]),_:1})]),file:a(({file:s})=>[N("div",null,[o.Form.img_url?(b(),R("img",{key:0,class:"el-upload-list__item-thumbnail",src:o.Form.img_url,alt:""},null,8,pe)):z("",!0),N("span",ce,[o.Form.disabled?(b(),R("span",{key:0,class:"el-upload-list__item-delete",onClick:l[1]||(l[1]=(...L)=>i.handleRemove&&i.handleRemove(...L))},[t(F,null,{default:a(()=>[t(y)]),_:1})])):z("",!0)])])]),_:1},8,["action","headers","before-upload","on-success","on-error","file-list"])]),_:1}),t(u,{label:"\u59D3\u540D",prop:"name"},{default:a(()=>[t(_,{modelValue:o.Form.name,"onUpdate:modelValue":l[2]||(l[2]=s=>o.Form.name=s),placeholder:"\u8BF7\u8F93\u5165\u4E13\u5BB6\u540D\u5B57",type:"text"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u804C\u52A1",prop:"position"},{default:a(()=>[t(_,{modelValue:o.Form.position,"onUpdate:modelValue":l[3]||(l[3]=s=>o.Form.position=s),placeholder:"\u8BF7\u8F93\u5165\u804C\u52A1",type:"text"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u804C\u79F0",prop:"professional"},{default:a(()=>[t(h,{modelValue:o.Form.professional,"onUpdate:modelValue":l[4]||(l[4]=s=>o.Form.professional=s),placeholder:"Select",filterable:""},{default:a(()=>[t(p,{value:"\u4E3B\u4EFB\u533B\u5E08",label:"\u4E3B\u4EFB\u533B\u5E08"}),t(p,{value:"\u526F\u4E3B\u4EFB\u533B\u5E08",label:"\u526F\u4E3B\u4EFB\u533B\u5E08"}),t(p,{value:"\u4E3B\u6CBB\u533B\u5E08",label:"\u4E3B\u6CBB\u533B\u5E08"}),t(p,{value:"\u533B\u5E08",label:"\u533B\u5E08"})]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"\u64C5\u957F",prop:"excel"},{default:a(()=>[t(_,{modelValue:o.Form.excel,"onUpdate:modelValue":l[5]||(l[5]=s=>o.Form.excel=s),placeholder:"\u8BF7\u8F93\u5165\u64C5\u957F",type:"text"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u5185\u5BB9",prop:"content"},{default:a(()=>[N("div",ge,[t(E,{style:{"border-bottom":"1px solid #ccc"},editor:i.editorRef,defaultConfig:i.toolbarConfig,mode:i.mode},null,8,["editor","defaultConfig","mode"]),t(U,{style:{height:"500px","overflow-y":"hidden"},modelValue:o.Form.content,"onUpdate:modelValue":l[6]||(l[6]=s=>o.Form.content=s),defaultConfig:i.editorConfig,mode:i.mode,onOnCreated:i.handleCreated},null,8,["modelValue","defaultConfig","mode","onOnCreated"])])]),_:1}),t(u,{label:"\u6392\u5E8F",prop:"sort"},{default:a(()=>[t(_,{modelValue:o.Form.sort,"onUpdate:modelValue":l[7]||(l[7]=s=>o.Form.sort=s),placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",type:"number",min:"0"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u72B6\u6001",prop:"status"},{default:a(()=>[t(n,{modelValue:o.Form.status,"onUpdate:modelValue":l[8]||(l[8]=s=>o.Form.status=s),disabled:""},{default:a(()=>[t(e,{label:"1"},{default:a(()=>[_e]),_:1}),t(e,{label:"0"},{default:a(()=>[be]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(u,null,{default:a(()=>[t(f,{type:"primary",onClick:l[9]||(l[9]=s=>i.submitAdd())},{default:a(()=>[S(te(o.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var ye=se(fe,[["render",he]]);export{ye as default};