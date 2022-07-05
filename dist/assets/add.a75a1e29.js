var C=Object.defineProperty,M=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var H=(e,l,n)=>l in e?C(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,L=(e,l)=>{for(var n in l||(l={}))D.call(l,n)&&H(e,n,l[n]);if(R)for(var n of R(l))W.call(l,n)&&H(e,n,l[n]);return e},q=(e,l)=>M(e,P(l));import{an as G,as as T,am as p,aq as J,u as K,r as Q,o as X,b as k,au as Y,t as Z,d as r,e as g,n as A,w as s,E as _,j as a,f as y,q as $,F as x,g as j,h as B,k as U,i as ee}from"./vendor.a46ae12f.js";import{W as oe}from"./wangEditor.86f67c5e.js";import{_ as le,a as te,c as E,u as ae}from"./index.efd4318d.js";const ie={name:"news_add",components:{Plus:G,Delete:T},setup(){p(null);const e=p(null),l=p(null),n=p(null),c=J(),w=K(),{id:f}=c.query,i=Q({token:"Bearer "+te("token")||"",id:f,select_flag:!1,Form:{img_url:"",img:"",office_id:"",title:"",content:"",release_time:p(""),status:"0",disabled:!0,fileList:[],list:[]},rules:{img:[{required:!0,message:"\u56FE\u7247\u5FC5\u987B",trigger:["change"]}],office_id:[{required:!0,message:"\u79D1\u5BA4\u5FC5\u987B",trigger:["change"]}],title:[{required:"true",message:"\u6807\u9898",trigger:["change"]}],release_time:[{required:"true",message:"\u53D1\u5E03\u65F6\u95F4\u5FC5\u987B",trigger:["change"]}],status:[{required:!1,message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}});let o;X(()=>{o=new oe(l.value),o.config.lineHeights=["1","1.15","1.5","2","2.5","3"],o.config.showLinkImg=!1,o.config.showLinkImgAlt=!1,o.config.showLinkImgHref=!1,o.config.uploadImgMaxSize=10*1024*1024,o.config.uploadImgMaxLength=1,o.config.uploadImgAccept=["jpg","jpeg","png","gif","bmp","webp"],o.config.uploadFileName="file",o.config.uploadImgHeaders={Authorization:i.token},o.config.uploadImgParams={basket:"img"},o.config.uploadImgHooks={customInsert:function(t,d){console.log("result",d),t(d.data.src)}},o.config.uploadImgServer=E,Object.assign(o.config,{onchange(){console.log("change")}}),o.config.uploadVideoServer=E,o.config.uploadVideoMaxSize=1*200*1024*1024,o.config.uploadVideoAccept=["mp4"],o.config.uploadVideoParams={basket:"video"},o.config.uploadVideoName="file",o.config.uploadVideoHeaders={Authorization:i.token},o.config.uploadVideoHooks={customInsert:function(t,d){console.log("customInsert",d),t(d.data.src)}},o.create(),m(),f&&k.get(`/api/back/technicalOfficeHealthSciences/${f}`).then(t=>{i.Form={img_url:t.data.url||"",img:t.data.file_id,office_id:t.data.office_id,title:t.data.title,release_time:t.data.release_time,status:String(t.data.status),fileList:[{url:t.data.url}],disabled:!0},i.select_flag=!0,o&&o.txt.html(t.data.content)})}),Y(()=>{o.destroy(),o=null});const m=()=>{k.get("/api/back/technicalOffices").then(t=>{i.Form.list=t.data})},V=()=>{e.value.validate(t=>{if(t){let d=k.post,b={img:i.Form.img,office_id:i.Form.office_id,title:i.Form.title,content:o.txt.html(),release_time:i.Form.release_time,status:i.Form.status},F="/api/back/technicalOfficeHealthSciences";f&&(b.release_time=i.Form.release_time,d=k.put,F=`/api/back/technicalOfficeHealthSciences/${f}`),d(F,b).then(()=>{f?_.success("\u4FEE\u6539\u6210\u529F"):_.success("\u6DFB\u52A0\u6210\u529F"),w.push({path:"/technicaloffice-healthscience"})})}})},h=t=>{const d=t.name.split(".")[1]||"";if(!["jpg","jpeg","png"].includes(d))return _.error("\u8BF7\u4E0A\u4F20 jpg\u3001jpeg\u3001png \u683C\u5F0F\u7684\u56FE\u7247"),!1},v=t=>{_.success("\u4E0A\u4F20\u6210\u529F"),i.Form.img_url=t.data.src||"",i.Form.img=t.data.id||""},I=t=>{_.error("\u4E0A\u4F20\u5931\u8D25")},S=t=>{n.value.clearFiles(),i.Form.img="",i.Form.img_url="",i.Form.fileList=[]};return q(L({},Z(i)),{editor:l,uploadRef:n,Ref:e,submitAdd:V,uploadImgServer:ae,handleBeforeUpload:h,handleUrlSuccess:v,handleUrlError:I,handleRemove:S})}},se=["src"],ne={class:"el-upload-list__item-actions"},re={ref:"editor",style:{"z-index":"1"}},de=U("\u5DF2\u5BA1\u6838"),ue=U("\u5F85\u5BA1\u6838");function ce(e,l,n,c,w,f){const i=r("el-option"),o=r("el-select"),m=r("el-form-item"),V=r("plus"),h=r("el-icon"),v=r("delete"),I=r("el-upload"),S=r("el-input"),t=r("el-date-picker"),d=r("el-radio"),b=r("el-radio-group"),F=r("el-button"),z=r("el-form"),N=r("el-card");return g(),A(N,{style:{"min-height":"100%"}},{default:s(()=>[a(z,{model:e.Form,rules:e.rules,ref:"Ref","label-width":"100px"},{default:s(()=>[a(m,{label:"\u79D1\u5BA4",prop:"office_id"},{default:s(()=>[a(o,{modelValue:e.Form.office_id,"onUpdate:modelValue":l[0]||(l[0]=u=>e.Form.office_id=u),placeholder:"Select",filterable:"",disabled:e.select_flag},{default:s(()=>[(g(!0),y(x,null,$(e.Form.list,u=>(g(),A(i,{key:u.id,label:u.name,value:u.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1}),a(m,{label:"\u5C01\u9762\u56FE",prop:"img"},{default:s(()=>[a(I,{ref:"uploadRef",action:c.uploadImgServer,data:{basket:"img"},limit:1,"list-type":"picture-card","thumbnail-mode":"true",headers:{Authorization:e.token},"before-upload":c.handleBeforeUpload,"on-success":c.handleUrlSuccess,"on-error":c.handleUrlError,"auto-upload":!0,"file-list":e.Form.fileList},{default:s(()=>[a(h,null,{default:s(()=>[a(V)]),_:1})]),file:s(({file:u})=>[j("div",null,[e.Form.img_url?(g(),y("img",{key:0,class:"el-upload-list__item-thumbnail",src:e.Form.img_url,alt:""},null,8,se)):B("",!0),j("span",ne,[e.Form.disabled?(g(),y("span",{key:0,class:"el-upload-list__item-delete",onClick:l[1]||(l[1]=(...O)=>c.handleRemove&&c.handleRemove(...O))},[a(h,null,{default:s(()=>[a(v)]),_:1})])):B("",!0)])])]),_:1},8,["action","headers","before-upload","on-success","on-error","file-list"])]),_:1}),a(m,{label:"\u6807\u9898",prop:"title"},{default:s(()=>[a(S,{modelValue:e.Form.title,"onUpdate:modelValue":l[2]||(l[2]=u=>e.Form.title=u),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",type:"text"},null,8,["modelValue"])]),_:1}),a(m,{label:"\u5185\u5BB9",prop:"content"},{default:s(()=>[j("div",re,null,512)]),_:1}),a(m,{label:"\u53D1\u5E03\u65F6\u95F4",prop:"release_time"},{default:s(()=>[a(t,{modelValue:e.Form.release_time,"onUpdate:modelValue":l[3]||(l[3]=u=>e.Form.release_time=u),type:"datetime",placeholder:"\u8BF7\u8F93\u5165\u53D1\u5E03\u65F6\u95F4"},null,8,["modelValue"])]),_:1}),a(m,{label:"\u72B6\u6001",prop:"status"},{default:s(()=>[a(b,{modelValue:e.Form.status,"onUpdate:modelValue":l[4]||(l[4]=u=>e.Form.status=u),disabled:""},{default:s(()=>[a(d,{label:"1"},{default:s(()=>[de]),_:1}),a(d,{label:"0"},{default:s(()=>[ue]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(m,null,{default:s(()=>[a(F,{type:"primary",onClick:l[5]||(l[5]=u=>c.submitAdd())},{default:s(()=>[U(ee(e.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var _e=le(ie,[["render",ce]]);export{_e as default};
