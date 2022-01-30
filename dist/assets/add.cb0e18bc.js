var C=Object.defineProperty,M=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var q=(e,o,n)=>o in e?C(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,A=(e,o)=>{for(var n in o||(o={}))P.call(o,n)&&q(e,n,o[n]);if(R)for(var n of R(o))W.call(o,n)&&q(e,n,o[n]);return e},B=(e,o)=>M(e,D(o));import{W as G}from"./wangEditor.860a6779.js";import{_ as T,a as J,c as H,u as K}from"./index.38431cad.js";import{al as Q,aq as X,ak as p,ao as Y,u as Z,r as $,o as x,b as k,as as ee,t as oe,d as r,e as g,n as L,w as i,E as _,j as a,f as y,q as le,F as te,g as j,h as E,k as w,i as ae}from"./vendor.15e5bf5f.js";const ie={name:"news_add",components:{Plus:Q,Delete:X},setup(){p(null);const e=p(null),o=p(null),n=p(null),c=Y(),U=Z(),{id:f}=c.query,s=$({token:"Bearer "+J("token")||"",id:f,select_flag:!1,Form:{img_url:"",img:"",office_id:"",title:"",content:"",release_time:p(""),status:"0",disabled:!0,fileList:[],list:[]},rules:{img:[{required:!0,message:"\u56FE\u7247\u5FC5\u987B",trigger:["change"]}],office_id:[{required:!0,message:"\u79D1\u5BA4\u5FC5\u987B",trigger:["change"]}],title:[{required:"true",message:"\u6807\u9898",trigger:["change"]}],release_time:[{required:"true",message:"\u53D1\u5E03\u65F6\u95F4\u5FC5\u987B",trigger:["change"]}],status:[{required:!1,message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}});let l;x(()=>{l=new G(o.value),l.config.showLinkImg=!1,l.config.showLinkImgAlt=!1,l.config.showLinkImgHref=!1,l.config.uploadImgMaxSize=10*1024*1024,l.config.uploadImgMaxLength=1,l.config.uploadImgAccept=["jpg","jpeg","png","gif","bmp","webp"],l.config.uploadFileName="file",l.config.uploadImgHeaders={Authorization:s.token},l.config.uploadImgParams={basket:"img"},l.config.uploadImgHooks={customInsert:function(t,d){console.log("result",d),t(d.data.src)}},l.config.uploadImgServer=H,Object.assign(l.config,{onchange(){console.log("change")}}),l.config.uploadVideoServer=H,l.config.uploadVideoMaxSize=1*200*1024*1024,l.config.uploadVideoAccept=["mp4"],l.config.uploadVideoParams={basket:"video"},l.config.uploadVideoName="file",l.config.uploadVideoHeaders={Authorization:s.token},l.config.uploadVideoHooks={customInsert:function(t,d){console.log("customInsert",d),t(d.data.src)}},l.create(),m(),f&&k.get(`/api/back/technicalOfficeHealthSciences/${f}`).then(t=>{s.Form={img_url:t.data.url||"",img:t.data.file_id,office_id:t.data.office_id,title:t.data.title,release_time:t.data.release_time,status:String(t.data.status),fileList:[t.data.url],disabled:!0},s.select_flag=!0,l&&l.txt.html(t.data.content)})}),ee(()=>{l.destroy(),l=null});const m=()=>{k.get("/api/back/technicalOffices").then(t=>{s.Form.list=t.data})},v=()=>{e.value.validate(t=>{if(t){let d=k.post,b={img:s.Form.img,office_id:s.Form.office_id,title:s.Form.title,content:l.txt.html(),release_time:s.Form.release_time,status:s.Form.status},F="/api/back/technicalOfficeHealthSciences";f&&(b.release_time=s.Form.release_time,d=k.put,F=`/api/back/technicalOfficeHealthSciences/${f}`),d(F,b).then(()=>{f?_.success("\u4FEE\u6539\u6210\u529F"):_.success("\u6DFB\u52A0\u6210\u529F"),U.push({path:"/technicaloffice-healthscience"})})}})},h=t=>{const d=t.name.split(".")[1]||"";if(!["jpg","jpeg","png"].includes(d))return _.error("\u8BF7\u4E0A\u4F20 jpg\u3001jpeg\u3001png \u683C\u5F0F\u7684\u56FE\u7247"),!1},V=t=>{_.success("\u4E0A\u4F20\u6210\u529F"),s.Form.img_url=t.data.src||"",s.Form.img=t.data.id||""},I=t=>{_.error("\u4E0A\u4F20\u5931\u8D25")},S=t=>{n.value.clearFiles(),s.Form.img=""};return B(A({},oe(s)),{editor:o,uploadRef:n,Ref:e,submitAdd:v,uploadImgServer:K,handleBeforeUpload:h,handleUrlSuccess:V,handleUrlError:I,handleRemove:S})}},se=["src"],ne={class:"el-upload-list__item-actions"},re={ref:"editor",style:{"z-index":"1"}},de=w("\u5DF2\u5BA1\u6838"),ue=w("\u5F85\u5BA1\u6838");function ce(e,o,n,c,U,f){const s=r("el-option"),l=r("el-select"),m=r("el-form-item"),v=r("plus"),h=r("el-icon"),V=r("delete"),I=r("el-upload"),S=r("el-input"),t=r("el-date-picker"),d=r("el-radio"),b=r("el-radio-group"),F=r("el-button"),z=r("el-form"),N=r("el-card");return g(),L(N,{style:{"min-height":"100%"}},{default:i(()=>[a(z,{model:e.Form,rules:e.rules,ref:"Ref","label-width":"100px"},{default:i(()=>[a(m,{label:"\u79D1\u5BA4",prop:"office_id"},{default:i(()=>[a(l,{modelValue:e.Form.office_id,"onUpdate:modelValue":o[0]||(o[0]=u=>e.Form.office_id=u),placeholder:"Select",filterable:"",disabled:e.select_flag},{default:i(()=>[(g(!0),y(te,null,le(e.Form.list,u=>(g(),L(s,{key:u.id,label:u.name,value:u.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1}),a(m,{label:"\u5C01\u9762\u56FE",prop:"img"},{default:i(()=>[a(I,{ref:"uploadRef",action:c.uploadImgServer,data:{basket:"img"},limit:1,"list-type":"picture-card","thumbnail-mode":"true",headers:{Authorization:e.token},"before-upload":c.handleBeforeUpload,"on-success":c.handleUrlSuccess,"on-error":c.handleUrlError,"auto-upload":!0,"file-list":e.Form.fileList},{default:i(()=>[a(h,null,{default:i(()=>[a(v)]),_:1})]),file:i(({file:u})=>[j("div",null,[e.Form.img_url?(g(),y("img",{key:0,class:"el-upload-list__item-thumbnail",src:e.Form.img_url,alt:""},null,8,se)):E("",!0),j("span",ne,[e.Form.disabled?(g(),y("span",{key:0,class:"el-upload-list__item-delete",onClick:o[1]||(o[1]=(...O)=>c.handleRemove&&c.handleRemove(...O))},[a(h,null,{default:i(()=>[a(V)]),_:1})])):E("",!0)])])]),_:1},8,["action","headers","before-upload","on-success","on-error","file-list"])]),_:1}),a(m,{label:"\u6807\u9898",prop:"title"},{default:i(()=>[a(S,{modelValue:e.Form.title,"onUpdate:modelValue":o[2]||(o[2]=u=>e.Form.title=u),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",type:"text"},null,8,["modelValue"])]),_:1}),a(m,{label:"\u5185\u5BB9",prop:"content"},{default:i(()=>[j("div",re,null,512)]),_:1}),a(m,{label:"\u53D1\u5E03\u65F6\u95F4",prop:"release_time"},{default:i(()=>[a(t,{modelValue:e.Form.release_time,"onUpdate:modelValue":o[3]||(o[3]=u=>e.Form.release_time=u),type:"datetime","default-value":new Date,placeholder:"\u8BF7\u8F93\u5165\u53D1\u5E03\u65F6\u95F4"},null,8,["modelValue","default-value"])]),_:1}),a(m,{label:"\u72B6\u6001",prop:"status"},{default:i(()=>[a(b,{modelValue:e.Form.status,"onUpdate:modelValue":o[4]||(o[4]=u=>e.Form.status=u),disabled:""},{default:i(()=>[a(d,{label:"1"},{default:i(()=>[de]),_:1}),a(d,{label:"0"},{default:i(()=>[ue]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(m,null,{default:i(()=>[a(F,{type:"primary",onClick:o[5]||(o[5]=u=>c.submitAdd())},{default:i(()=>[w(ae(e.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var _e=T(ie,[["render",ce]]);export{_e as default};
