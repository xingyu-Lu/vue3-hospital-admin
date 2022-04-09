var j=Object.defineProperty,A=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var y=(a,e,n)=>e in a?j(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,q=(a,e)=>{for(var n in e||(e={}))N.call(e,n)&&y(a,n,e[n]);if(v)for(var n of v(e))L.call(e,n)&&y(a,n,e[n]);return a},U=(a,e)=>A(a,B(e));import"./wangEditor.ffd776a9.js";import{_ as M,a as S}from"./index.665f9c70.js";import{am as R,aq as $,u as D,r as G,o as I,b as k,t as O,d as m,e as c,n as g,w as s,E as V,j as t,h as T,f as z,q as H,F as J,k as w,i as E}from"./vendor.8eeddf68.js";const K={name:"admin_add",setup(){const a=R(null),e=R(!1),n=R(!0),p=$(),C=D(),{id:i}=p.query,o=G({token:"Bearer "+S("token")||"",id:i,adminForm:{name:"",password:"",new_password:"",status:"1",checkedRole:[]},role_list:[],rules:{name:[{required:"true",message:"\u8D26\u53F7\u540D\u79F0\u5FC5\u987B",trigger:["change"]}],password:[{required:!0,message:"\u8D26\u53F7\u5BC6\u7801\u5FC5\u987B",trigger:["change"]}],new_password:[{required:!1,message:"\u8D26\u53F7\u5BC6\u7801\u5FC5\u987B",trigger:["change"]}],status:[{required:"true",message:"\u8D26\u53F7\u72B6\u6001\u5FC5\u987B",trigger:["change"]}],checkedRole:[{required:!0,message:"\u89D2\u8272\u5FC5\u987B",trigger:["change"]}]}});I(()=>{u(),i&&k.get(`/api/back/admins/${i}`).then(d=>{o.adminForm={name:d.data.name,checkedRole:d.data.role,password:d.data.password,status:String(d.data.status)}})});const u=()=>{k.get("/api/back/roles").then(d=>{o.role_list=d.data})},F=()=>{a.value.validate(d=>{if(d){let r=k.post,f={name:o.adminForm.name,password:o.adminForm.password,new_password:o.adminForm.new_password,status:o.adminForm.status,role_ids:o.adminForm.checkedRole};if(f.name.length>30){V.error("\u8D26\u53F7\u540D\u79F0\u4E0D\u80FD\u8D85\u8FC730\u4E2A\u5B57\u7B26");return}if(f.status.length>30){V.error("\u8D26\u53F7\u5BC6\u7801\u4E0D\u80FD\u8D85\u8FC730\u4E2A\u5B57\u7B26");return}let _="/api/back/admins";i&&(r=k.put,_=`/api/back/admins/${i}`),r(_,f).then(()=>{V.success(i?"\u4FEE\u6539\u6210\u529F":"\u6DFB\u52A0\u6210\u529F"),C.push({path:"/admin"})})}})},b=d=>{d?(o.adminForm.checkedRole=[],o.role_list.forEach(r=>{o.adminForm.checkedRole.push(r.id)})):o.adminForm.checkedRole=[],n.value=!1},h=d=>{const r=d.length;e.value=r===o.role_list.length,n.value=r>0&&r<o.role_list.length};return U(q({},O(o)),{adminRef:a,submitAdd:F,checkRoleAll:e,isRoleIndeterminate:n,handleCheckRoleAllChange:b,handleCheckedRolesChange:h,id:i})}},P=w("\u5F00\u542F"),Q=w("\u7981\u7528");function W(a,e,n,p,C,i){const o=m("el-input"),u=m("el-form-item"),F=m("el-checkbox"),b=m("el-checkbox-group"),h=m("el-radio"),d=m("el-radio-group"),r=m("el-button"),f=m("el-form"),_=m("el-card");return c(),g(_,{style:{"min-height":"100%"}},{default:s(()=>[t(f,{model:a.adminForm,rules:a.rules,ref:"adminRef","label-width":"100px"},{default:s(()=>[t(u,{label:"\u8D26\u53F7",prop:"name"},{default:s(()=>[t(o,{modelValue:a.adminForm.name,"onUpdate:modelValue":e[0]||(e[0]=l=>a.adminForm.name=l),placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7\u540D\u79F0"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u5BC6\u7801",prop:"password"},{default:s(()=>[p.id?(c(),g(o,{key:0,modelValue:a.adminForm.password,"onUpdate:modelValue":e[1]||(e[1]=l=>a.adminForm.password=l),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",disabled:""},null,8,["modelValue"])):(c(),g(o,{key:1,modelValue:a.adminForm.password,"onUpdate:modelValue":e[2]||(e[2]=l=>a.adminForm.password=l),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"]))]),_:1}),p.id?(c(),g(u,{key:0,label:"\u65B0\u5BC6\u7801",prop:"new_password"},{default:s(()=>[t(o,{modelValue:a.adminForm.new_password,"onUpdate:modelValue":e[3]||(e[3]=l=>a.adminForm.new_password=l),placeholder:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"},null,8,["modelValue"])]),_:1})):T("",!0),t(u,{label:"\u89D2\u8272",prop:"checkedRole"},{default:s(()=>[t(b,{modelValue:a.adminForm.checkedRole,"onUpdate:modelValue":e[4]||(e[4]=l=>a.adminForm.checkedRole=l),onChange:p.handleCheckedRolesChange},{default:s(()=>[(c(!0),z(J,null,H(a.role_list,(l,X)=>(c(),g(F,{key:l.id,label:l.id},{default:s(()=>[w(E(l.name),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),t(u,{label:"\u72B6\u6001",prop:"status"},{default:s(()=>[t(d,{modelValue:a.adminForm.status,"onUpdate:modelValue":e[5]||(e[5]=l=>a.adminForm.status=l)},{default:s(()=>[t(h,{label:"1"},{default:s(()=>[P]),_:1}),t(h,{label:"0"},{default:s(()=>[Q]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(u,null,{default:s(()=>[t(r,{type:"primary",onClick:e[6]||(e[6]=l=>p.submitAdd())},{default:s(()=>[w(E(p.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var ae=M(K,[["render",W]]);export{ae as default};