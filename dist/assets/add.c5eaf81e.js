var Q=Object.defineProperty,W=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var A=(o,t,m)=>t in o?Q(o,t,{enumerable:!0,configurable:!0,writable:!0,value:m}):o[t]=m,j=(o,t)=>{for(var m in t||(t={}))Y.call(t,m)&&A(o,m,t[m]);if(q)for(var m of q(t))Z.call(t,m)&&A(o,m,t[m]);return o},z=(o,t)=>W(o,X(t));import{an as $,as as x,am as V,aq as ee,u as oe,r as te,au as le,E as f,o as ae,b,av as ne,t as re,d,e as p,n as B,w as i,j as l,f as C,q as I,F as L,g as O,h as M,k as E,i as ie}from"./vendor.573e8a1f.js";import{a as H,B as se,E as de,T as me}from"./index.esm.77a649e9.js";import{_ as ue,a as ce,c as T,u as fe}from"./index.19785c67.js";function _e(o,t){const{link:m="",fileName:s=""}=o;return`<a data-w-e-type="attachment" data-w-e-is-void data-w-e-is-inline data-link="${m}" data-fileName="${s}" href="${m}" target="_blank">${s}</a>`}const pe={type:"attachment",elemToHtml:_e};H.elemsToHtml=[pe];se.registerModule(H);const ge={name:"news_add",components:{Plus:$,Delete:x,Editor:de,Toolbar:me},setup(){V(null);const o=V(null),t=V(null),m=ee(),s=oe(),{id:_}=m.query,n=te({token:"Bearer "+ce("token")||"",id:_,select_flag:!1,Form:{img_url:"",img:"",office_id:"",column_id:"",title:"",content:"",release_time:V(""),sort:"0",status:"0",disabled:!0,fileList:[],list:[],column_list:[]},rules:{office_id:[{required:!0,message:"\u79D1\u5BA4\u5FC5\u987B",trigger:["change"]}],column_id:[{required:!0,message:"\u680F\u76EE\u5FC5\u987B",trigger:["change"]}],title:[{required:!0,message:"\u6807\u9898\u5FC5\u987B",trigger:["change"]}],release_time:[{required:!0,message:"\u53D1\u5E03\u65F6\u95F4\u5FC5\u987B",trigger:["change"]}],sort:[{required:!1,message:"\u6392\u5E8F\u5FC5\u987B",trigger:["change"]}],status:[{required:!0,message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}}),g=le(),w={insertKeys:{index:31,keys:["uploadAttachment"]}},U={placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9...",hoverbarKeys:{attachment:{menuKeys:["downloadAttachment"]}},MENU_CONF:{uploadImage:{server:T,fieldName:"file",maxFileSize:2*1024*1024,maxNumberOfFiles:10,allowedFileTypes:["image/*"],meta:{basket:"img"},headers:{Authorization:n.token},customInsert:function(e,r){r(e.data.src,e.data.file_name,e.data.src)},onError(e,r,u){f.error(new Error(r).message),console.log(e,r,u)}},uploadVideo:{server:T,fieldName:"file",maxFileSize:100*1024*1024,allowedFileTypes:["video/*"],meta:{basket:"video"},headers:{Authorization:n.token},customInsert:function(e,r){r(e.data.src)},onError(e,r,u){f.error(new Error(r).message),console.log(e,r,u)}},uploadAttachment:{server:T,fieldName:"file",maxFileSize:10*1024*1024,meta:{basket:"attachment"},headers:{Authorization:n.token},customInsert:function(e,r,u){u(`${r.name}`,e.data.src)},onError(e,r,u){f.error(new Error(r).message),console.log(e,r,u)}}}},F=e=>{g.value=e};ae(()=>{v(),_&&b.get(`/api/back/technicalOfficeColumns/${_}`).then(e=>{n.Form={img_url:e.data.url||"",img:e.data.file_id,office_id:e.data.office_id,column_id:String(e.data.column_id),title:e.data.title,content:e.data.content,release_time:e.data.release_time,sort:e.data.sort,status:String(e.data.status),fileList:[{url:e.data.url}],disabled:!0},n.select_flag=!0})}),ne(()=>{const e=g.value;e!=null&&e.destroy()});const v=()=>{b.get("/api/back/technicalOffices").then(e=>{n.Form.list=e.data})},c=e=>{console.log(e),b.get("/api/back/technicalOfficeColumnSets/list",{params:{office_id:e}}).then(r=>{n.Form.column_list=r.data})},S=()=>{o.value.validate(e=>{if(e){let r=b.post,u={img:n.Form.img,office_id:n.Form.office_id,column_id:n.Form.column_id,title:n.Form.title,content:n.Form.content,release_time:n.Form.release_time,sort:n.Form.sort,status:n.Form.status},h="/api/back/technicalOfficeColumns";_&&(u.release_time=n.Form.release_time,r=b.put,h=`/api/back/technicalOfficeColumns/${_}`),r(h,u).then(()=>{_?f.success("\u4FEE\u6539\u6210\u529F"):f.success("\u6DFB\u52A0\u6210\u529F"),s.push({path:"/technicaloffice-column"})})}})},k=e=>{const r=e.name.split(".")[1]||"";if(!["jpg","jpeg","png"].includes(r))return f.error("\u8BF7\u4E0A\u4F20 jpg\u3001jpeg\u3001png \u683C\u5F0F\u7684\u56FE\u7247"),!1},R=e=>{f.success("\u4E0A\u4F20\u6210\u529F"),n.Form.img_url=e.data.src||"",n.Form.img=e.data.id||""},N=e=>{f.error("\u4E0A\u4F20\u5931\u8D25")},y=e=>{t.value.clearFiles(),n.Form.img="",n.Form.img_url="",n.Form.fileList=[]};return z(j({},re(n)),{editorRef:g,mode:"default",toolbarConfig:w,editorConfig:U,handleCreated:F,uploadRef:t,Ref:o,submitAdd:S,uploadImgServer:fe,handleBeforeUpload:k,handleUrlSuccess:R,handleUrlError:N,handleRemove:y,get_technicaloffice_column_set_list:c})}},he=E("\u680F\u76EE\u7C7B\u578B\u4E3A\u4EC5\u56FE\uFF1A\u5219\u5FC5\u987B\u4F20\u56FE\u7247\uFF1B\u680F\u76EE\u7C7B\u578B\u4E3A\u56FE\u6587\u6216\u89C6\u9891\uFF1A\u5219\u5185\u5BB9\u5FC5\u987B"),be=["src"],Fe={class:"el-upload-list__item-actions"},ve={style:{border:"1px solid #ccc","z-index":"100"}},ke=E("\u5DF2\u5BA1\u6838"),ye=E("\u5F85\u5BA1\u6838");function Ve(o,t,m,s,_,n){const g=d("el-descriptions-item"),w=d("el-descriptions"),U=d("el-divider"),F=d("el-option"),v=d("el-select"),c=d("el-form-item"),S=d("plus"),k=d("el-icon"),R=d("delete"),N=d("el-upload"),y=d("el-input"),e=d("Toolbar"),r=d("Editor"),u=d("el-date-picker"),h=d("el-radio"),K=d("el-radio-group"),D=d("el-button"),G=d("el-form"),P=d("el-card");return p(),B(P,{style:{"min-height":"100%"}},{default:i(()=>[l(w,{title:"\u63D0\u793A"},{default:i(()=>[l(g,null,{default:i(()=>[he]),_:1})]),_:1}),l(U),l(G,{model:o.Form,rules:o.rules,ref:"Ref","label-width":"100px"},{default:i(()=>[l(c,{label:"\u79D1\u5BA4",prop:"office_id"},{default:i(()=>[l(v,{modelValue:o.Form.office_id,"onUpdate:modelValue":t[0]||(t[0]=a=>o.Form.office_id=a),placeholder:"Select","value-key":"item.id",onChange:s.get_technicaloffice_column_set_list,filterable:""},{default:i(()=>[(p(!0),C(L,null,I(o.Form.list,a=>(p(),B(F,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),l(c,{label:"\u680F\u76EE",prop:"column_id"},{default:i(()=>[l(v,{modelValue:o.Form.column_id,"onUpdate:modelValue":t[1]||(t[1]=a=>o.Form.column_id=a),placeholder:"Select",filterable:""},{default:i(()=>[(p(!0),C(L,null,I(o.Form.column_list,a=>(p(),B(F,{key:a.id,label:a.name+a.type_name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(c,{label:"\u56FE\u7247",prop:"img"},{default:i(()=>[l(N,{ref:"uploadRef",action:s.uploadImgServer,data:{basket:"img"},limit:1,"list-type":"picture-card","thumbnail-mode":"true",headers:{Authorization:o.token},"before-upload":s.handleBeforeUpload,"on-success":s.handleUrlSuccess,"on-error":s.handleUrlError,"auto-upload":!0,"file-list":o.Form.fileList},{default:i(()=>[l(k,null,{default:i(()=>[l(S)]),_:1})]),file:i(({file:a})=>[O("div",null,[o.Form.img_url?(p(),C("img",{key:0,class:"el-upload-list__item-thumbnail",src:o.Form.img_url,alt:""},null,8,be)):M("",!0),O("span",Fe,[o.Form.disabled?(p(),C("span",{key:0,class:"el-upload-list__item-delete",onClick:t[2]||(t[2]=(...J)=>s.handleRemove&&s.handleRemove(...J))},[l(k,null,{default:i(()=>[l(R)]),_:1})])):M("",!0)])])]),_:1},8,["action","headers","before-upload","on-success","on-error","file-list"])]),_:1}),l(c,{label:"\u6807\u9898",prop:"title"},{default:i(()=>[l(y,{modelValue:o.Form.title,"onUpdate:modelValue":t[3]||(t[3]=a=>o.Form.title=a),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",type:"text"},null,8,["modelValue"])]),_:1}),l(c,{label:"\u5185\u5BB9",prop:"content"},{default:i(()=>[O("div",ve,[l(e,{style:{"border-bottom":"1px solid #ccc"},editor:s.editorRef,defaultConfig:s.toolbarConfig,mode:s.mode},null,8,["editor","defaultConfig","mode"]),l(r,{style:{height:"500px","overflow-y":"hidden"},modelValue:o.Form.content,"onUpdate:modelValue":t[4]||(t[4]=a=>o.Form.content=a),defaultConfig:s.editorConfig,mode:s.mode,onOnCreated:s.handleCreated},null,8,["modelValue","defaultConfig","mode","onOnCreated"])])]),_:1}),l(c,{label:"\u53D1\u5E03\u65F6\u95F4",prop:"release_time"},{default:i(()=>[l(u,{modelValue:o.Form.release_time,"onUpdate:modelValue":t[5]||(t[5]=a=>o.Form.release_time=a),type:"datetime",placeholder:"\u8BF7\u8F93\u5165\u53D1\u5E03\u65F6\u95F4"},null,8,["modelValue"])]),_:1}),l(c,{label:"\u6392\u5E8F",prop:"sort"},{default:i(()=>[l(y,{modelValue:o.Form.sort,"onUpdate:modelValue":t[6]||(t[6]=a=>o.Form.sort=a),placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",type:"number"},null,8,["modelValue"])]),_:1}),l(c,{label:"\u72B6\u6001",prop:"status"},{default:i(()=>[l(K,{modelValue:o.Form.status,"onUpdate:modelValue":t[7]||(t[7]=a=>o.Form.status=a),disabled:""},{default:i(()=>[l(h,{label:"1"},{default:i(()=>[ke]),_:1}),l(h,{label:"0"},{default:i(()=>[ye]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(c,null,{default:i(()=>[l(D,{type:"primary",onClick:t[8]||(t[8]=a=>s.submitAdd())},{default:i(()=>[E(ie(o.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var Se=ue(ge,[["render",Ve]]);export{Se as default};