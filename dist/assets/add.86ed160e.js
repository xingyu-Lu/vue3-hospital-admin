var N=Object.defineProperty,A=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var v=(e,t,s)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,R=(e,t)=>{for(var s in t||(t={}))I.call(t,s)&&v(e,s,t[s]);if(k)for(var s of k(t))M.call(t,s)&&v(e,s,t[s]);return e},U=(e,t)=>A(e,D(t));import"./wangEditor.229e0f90.js";import{_ as z,a as G,u as O}from"./index.436d2b51.js";import{an as P,as as T,am as j,aq as H,u as J,r as K,o as Q,b,t as W,d,e as F,n as X,w as a,E as c,j as r,g as q,f as B,h as E,k as V,i as Y}from"./vendor.b09253f4.js";const Z={name:"historyLeader_add",components:{Plus:P,Delete:T},setup(){const e=j(null),t=j(null),s=H(),i=J(),{id:u}=s.query,l=K({token:"Bearer "+G("token")||"",id:u,historyLeaderForm:{img_url:"",img:"",name:"",time:"",sort:0,status:"0",disabled:!0,fileList:[]},rules:{img:[{required:"true",message:"\u56FE\u7247\u5FC5\u987B",trigger:["change"]}],name:[{required:"true",message:"\u59D3\u540D\u5FC5\u987B",trigger:["change"]}],time:[{required:"true",message:"\u4EFB\u804C\u65F6\u95F4\u5FC5\u987B",trigger:["change"]}],sort:[{required:"true",message:"\u6392\u5E8F\u5FC5\u987B",trigger:["change"]}],status:[{required:!1,message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}});Q(()=>{u&&b.get(`/api/back/historyLeaders/${u}`).then(o=>{l.historyLeaderForm={img_url:o.data.url||"",img:o.data.file_id,name:o.data.name,time:o.data.time,sort:o.data.sort,status:String(o.data.status),fileList:[{url:o.data.url}],disabled:!0}})});const g=()=>{e.value.validate(o=>{if(o){let p=b.post,L={img:l.historyLeaderForm.img,name:l.historyLeaderForm.name,time:l.historyLeaderForm.time,sort:l.historyLeaderForm.sort,status:l.historyLeaderForm.status},h="/api/back/historyLeaders";u&&(p=b.put,h=`/api/back/historyLeaders/${u}`),p(h,L).then(()=>{u?c.success("\u4FEE\u6539\u6210\u529F"):c.success("\u6DFB\u52A0\u6210\u529F"),i.push({path:"/history-leader"})})}})},f=o=>{const p=o.name.split(".")[1]||"";if(!["jpg","jpeg","png"].includes(p))return c.error("\u8BF7\u4E0A\u4F20 jpg\u3001jpeg\u3001png \u683C\u5F0F\u7684\u56FE\u7247"),!1},_=o=>{c.success("\u4E0A\u4F20\u6210\u529F"),l.historyLeaderForm.img_url=o.data.src||"",l.historyLeaderForm.img=o.data.id||""},y=o=>{c.error("\u4E0A\u4F20\u5931\u8D25")},m=o=>{t.value.clearFiles(),l.historyLeaderForm.img="",l.historyLeaderForm.img_url="",l.historyLeaderForm.fileList=[]};return U(R({},W(l)),{uploadRef:t,historyLeaderRef:e,submitAdd:g,uploadImgServer:O,handleBeforeUpload:f,handleUrlSuccess:_,handleUrlError:y,handleRemove:m})}},$=["src"],x={class:"el-upload-list__item-actions"},ee=V("\u5DF2\u5BA1\u6838"),te=V("\u5F85\u5BA1\u6838");function oe(e,t,s,i,u,l){const g=d("plus"),f=d("el-icon"),_=d("delete"),y=d("el-upload"),m=d("el-form-item"),o=d("el-input"),p=d("el-radio"),L=d("el-radio-group"),h=d("el-button"),S=d("el-form"),C=d("el-card");return F(),X(C,{style:{"min-height":"100%"}},{default:a(()=>[r(S,{model:e.historyLeaderForm,rules:e.rules,ref:"historyLeaderRef","label-width":"100px"},{default:a(()=>[r(m,{label:"\u56FE\u7247",prop:"img"},{default:a(()=>[r(y,{ref:"uploadRef",action:i.uploadImgServer,data:{basket:"img"},limit:1,"list-type":"picture-card","thumbnail-mode":"true",headers:{Authorization:e.token},"before-upload":i.handleBeforeUpload,"on-success":i.handleUrlSuccess,"on-error":i.handleUrlError,"auto-upload":!0,"file-list":e.historyLeaderForm.fileList},{default:a(()=>[r(f,null,{default:a(()=>[r(g)]),_:1})]),file:a(({file:n})=>[q("div",null,[e.historyLeaderForm.img_url?(F(),B("img",{key:0,class:"el-upload-list__item-thumbnail",src:e.historyLeaderForm.img_url,alt:""},null,8,$)):E("",!0),q("span",x,[e.historyLeaderForm.disabled?(F(),B("span",{key:0,class:"el-upload-list__item-delete",onClick:t[0]||(t[0]=(...w)=>i.handleRemove&&i.handleRemove(...w))},[r(f,null,{default:a(()=>[r(_)]),_:1})])):E("",!0)])])]),_:1},8,["action","headers","before-upload","on-success","on-error","file-list"])]),_:1}),r(m,{label:"\u59D3\u540D",prop:"name"},{default:a(()=>[r(o,{modelValue:e.historyLeaderForm.name,"onUpdate:modelValue":t[1]||(t[1]=n=>e.historyLeaderForm.name=n),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",type:"text"},null,8,["modelValue"])]),_:1}),r(m,{label:"\u65F6\u95F4",prop:"time"},{default:a(()=>[r(o,{modelValue:e.historyLeaderForm.time,"onUpdate:modelValue":t[2]||(t[2]=n=>e.historyLeaderForm.time=n),placeholder:"\u8BF7\u8F93\u5165\u5728\u804C\u65F6\u95F4",type:"text"},null,8,["modelValue"])]),_:1}),r(m,{label:"\u6392\u5E8F",prop:"sort"},{default:a(()=>[r(o,{modelValue:e.historyLeaderForm.sort,"onUpdate:modelValue":t[3]||(t[3]=n=>e.historyLeaderForm.sort=n),placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",type:"number",min:"0"},null,8,["modelValue"])]),_:1}),r(m,{label:"\u72B6\u6001",prop:"status"},{default:a(()=>[r(L,{modelValue:e.historyLeaderForm.status,"onUpdate:modelValue":t[4]||(t[4]=n=>e.historyLeaderForm.status=n),disabled:""},{default:a(()=>[r(p,{label:"1"},{default:a(()=>[ee]),_:1}),r(p,{label:"0"},{default:a(()=>[te]),_:1})]),_:1},8,["modelValue"])]),_:1}),r(m,null,{default:a(()=>[r(h,{type:"primary",onClick:t[5]||(t[5]=n=>i.submitAdd())},{default:a(()=>[V(Y(e.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var de=z(Z,[["render",oe]]);export{de as default};
