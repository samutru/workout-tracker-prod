import{a as H,A as N,r as c,o as R,d as W,c as $,w as a,u as e,b as z,e as l,I as U,f as V,g as s,h as x,i as k,t as I,j as E,k as M,l as h,m,n as v,p as w,q as b,s as F,v as G,x as A,y as B,z as P,B as T,C as O}from"./index-387aea29.js";async function S(){const o={withCredentials:!0};try{return(await H.get(N+"/api/userInfo",o)).data}catch(u){return u}}async function j(o){const u={withCredentials:!0};try{await H.put(N+"/api/updateUser",o,u)}catch(i){throw i}}function q(){const o=c(),u=async()=>{try{o.value=await S()}catch(r){console.log(r)}},i=c(!1),f=c(0),d=c(0),p=c(0),g=r=>{i.value=r},y=async()=>{let r={height:d.value,weight:p.value,age:f.value,bmi:parseFloat((p.value/(d.value/100*(d.value/100))).toFixed(1))};await j(r),await u(),g(!1)};return R(()=>{u().then(()=>{var r,C,n,_;(r=o.value)!=null&&r.age&&o.value.height&&o.value.weight&&(f.value=(C=o.value)==null?void 0:C.age,d.value=(n=o.value)==null?void 0:n.height,p.value=(_=o.value)==null?void 0:_.weight)})}),{userInfo:o,openProfile:i,age:f,height:d,weight:p,openCloseModal:g,updateUserInfos:y,getTheUserInfos:u}}const D={style:{"text-align":"center"}},J=W({__name:"Profile",setup(o){const{userInfo:u,age:i,height:f,weight:d,openProfile:p,openCloseModal:g,updateUserInfos:y,getTheUserInfos:r}=q();return(C,n)=>(z(),$(e(O),null,{default:a(()=>[l(e(x),null,{default:a(()=>[l(e(U),null,{default:a(()=>[l(e(V),null,{default:a(()=>[s("Profile")]),_:1})]),_:1})]),_:1}),l(e(A),{class:"ion-padding",fullscreen:!0},{default:a(()=>{var _;return[l(e(x),{collapse:"condense"},{default:a(()=>[l(e(U),null,{default:a(()=>[l(e(V),{size:"large"},{default:a(()=>[s("Profile")]),_:1})]),_:1})]),_:1}),k("h1",null,"Welcome, "+I((_=e(u))==null?void 0:_.loginName)+"!",1),l(e(E),null,{default:a(()=>[l(e(M),null,{default:a(()=>[l(e(h),null,{default:a(()=>[l(e(m),{color:"primary"},{default:a(()=>[l(e(v),null,{default:a(()=>[l(e(w),null,{default:a(()=>{var t;return[s("Weight: "+I((t=e(u))==null?void 0:t.weight),1)]}),_:1})]),_:1})]),_:1})]),_:1}),l(e(h),null,{default:a(()=>[l(e(m),{color:"primary"},{default:a(()=>[l(e(v),null,{default:a(()=>[l(e(w),null,{default:a(()=>{var t;return[s("BMI: "+I((t=e(u))==null?void 0:t.bmi),1)]}),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(e(M),null,{default:a(()=>[l(e(h),null,{default:a(()=>[l(e(m),{color:"primary"},{default:a(()=>[l(e(v),null,{default:a(()=>[l(e(w),null,{default:a(()=>{var t;return[s("Height: "+I((t=e(u))==null?void 0:t.height),1)]}),_:1})]),_:1})]),_:1})]),_:1}),l(e(h),null,{default:a(()=>[l(e(m),{color:"primary"},{default:a(()=>[l(e(v),null,{default:a(()=>[l(e(w),null,{default:a(()=>{var t;return[s("Age: "+I((t=e(u))==null?void 0:t.age),1)]}),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),k("div",D,[l(e(b),{onClick:n[0]||(n[0]=t=>e(g)(!0))},{default:a(()=>[s("Edit")]),_:1})]),l(e(F),{"is-open":e(p)},{default:a(()=>[l(e(x),null,{default:a(()=>[l(e(U),null,{default:a(()=>[l(e(V),null,{default:a(()=>[s("Edit")]),_:1}),l(e(G),{slot:"end"},{default:a(()=>[l(e(b),{onClick:n[1]||(n[1]=t=>e(g)(!1))},{default:a(()=>[s("Close")]),_:1})]),_:1})]),_:1})]),_:1}),l(e(A),{class:"ion-padding"},{default:a(()=>[l(e(B),null,{default:a(()=>[l(e(P),{type:"number",placeholder:"Age",modelValue:e(i),"onUpdate:modelValue":n[2]||(n[2]=t=>T(i)?i.value=t:null)},null,8,["modelValue"])]),_:1}),l(e(B),null,{default:a(()=>[l(e(P),{type:"number",placeholder:"Heigth in CM",modelValue:e(f),"onUpdate:modelValue":n[3]||(n[3]=t=>T(f)?f.value=t:null)},null,8,["modelValue"])]),_:1}),l(e(B),null,{default:a(()=>[l(e(P),{type:"number",placeholder:"Weight in KG",modelValue:e(d),"onUpdate:modelValue":n[4]||(n[4]=t=>T(d)?d.value=t:null)},null,8,["modelValue"])]),_:1}),l(e(b),{onClick:n[5]||(n[5]=t=>e(y)())},{default:a(()=>[s("Save")]),_:1})]),_:1})]),_:1},8,["is-open"])]}),_:1})]),_:1}))}});export{J as default};