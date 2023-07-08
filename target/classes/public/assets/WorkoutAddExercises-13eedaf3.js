import{d as Y,c,w as t,u as e,b as n,e as l,I as S,f as y,g as o,t as i,h as B,L as C,H as m,J as A,K as O,q as h,_ as H,P as k,y as x,N as K,B as q,O as _,s as G,v as J,x as w,C as M,$ as E,G as W,a0 as j,a1 as L,a2 as N,a3 as z,a4 as Q,i as V}from"./index-a9502547.js";import{U as X}from"./useExerciseInfos-e7756f64.js";import{u as Z}from"./useWorkouts-98ec6f41.js";import"./workouts-9067b9cc.js";const $=s=>(z("data-v-f8084638"),s=s(),Q(),s),ee=$(()=>V("h3",null,"Description:",-1)),te={key:0},le=$(()=>V("h3",null,"YouTube:",-1)),oe=["src"],ae=Y({__name:"WorkoutAddExercises",setup(s){const{currentWorkout:u,selectedExercises:f,noExercisesSelected:I,addExercise:g,startWorkout:D,onIonChange:T,removeExercise:F}=Z(),{filterExercisesInWorkout:P,isOpen:R,setOpen:b,selectedBodypart:v,selectedExercise:r}=X(),U=["OK"];return(se,d)=>(n(),c(e(M),null,{default:t(()=>[l(e(B),null,{default:t(()=>[l(e(S),null,{default:t(()=>[l(e(y),null,{default:t(()=>[o("Add Exercises to Your Workout ("+i(e(u)&&e(u).dateOfWorkout?new Date(e(u).dateOfWorkout).toLocaleDateString():"...loading")+")",1)]),_:1})]),_:1})]),_:1}),l(e(w),{fullscreen:!0,class:"ion-padding"},{default:t(()=>[l(e(y),null,{default:t(()=>[o("Selected Exercises")]),_:1}),l(e(C),null,{default:t(()=>[(n(!0),m(O,null,A(e(f),a=>(n(),c(e(E),{key:a.exerciseId},{default:t(()=>[l(e(x),null,{default:t(()=>[l(e(W),null,{default:t(()=>[o(i(a.name),1)]),_:2},1024),l(e(j),{onIonChange:p=>e(T)(a.exerciseId,p),pin:!0,snaps:!0},null,8,["onIonChange"]),l(e(W),null,{default:t(()=>[o(i(a.time)+"s",1)]),_:2},1024)]),_:2},1024),l(e(L),null,{default:t(()=>[l(e(N),{color:"danger",onClick:p=>e(F)(a.exerciseId)},{default:t(()=>[o("Remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1}),l(e(h),{id:"startWorkout",onClick:d[0]||(d[0]=a=>e(D)(e(u).id))},{default:t(()=>[o("Start Workout")]),_:1}),e(I)?(n(),c(e(H),{key:0,trigger:"startWorkout",header:"Warning",message:"Please add some exercises first",buttons:U})):k("",!0),l(e(C),null,{default:t(()=>[l(e(x),null,{default:t(()=>[l(e(K),{"aria-label":"Bodypart",interface:"alert",placeholder:"Select Bodypart",modelValue:e(v),"onUpdate:modelValue":d[1]||(d[1]=a=>q(v)?v.value=a:null),fill:"solid"},{default:t(()=>[l(e(_),{value:"Abs"},{default:t(()=>[o("Abs")]),_:1}),l(e(_),{value:"Arms"},{default:t(()=>[o("Arms")]),_:1}),l(e(_),{value:"Chest"},{default:t(()=>[o("Chest")]),_:1}),l(e(_),{value:"Legs"},{default:t(()=>[o("Legs")]),_:1}),l(e(_),{value:"NoFilter"},{default:t(()=>[o("No Filter")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(e(C),null,{default:t(()=>[(n(!0),m(O,null,A(e(P),a=>(n(),c(e(E),{key:a.id},{default:t(()=>[l(e(L),{side:"start"},{default:t(()=>[l(e(N),{color:"success",onClick:p=>e(g)(a.name,a.id)},{default:t(()=>[o("Add")]),_:2},1032,["onClick"])]),_:2},1024),l(e(x),null,{default:t(()=>[l(e(W),null,{default:t(()=>[o(i(a.name),1)]),_:2},1024),l(e(h),{onClick:p=>e(b)(!0,a),color:"light"},{default:t(()=>[o("Description")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1}),l(e(G),{"is-open":e(R)},{default:t(()=>[l(e(B),null,{default:t(()=>[l(e(S),null,{default:t(()=>[e(r)?(n(),c(e(y),{key:0},{default:t(()=>[o(i(e(r).name),1)]),_:1})):k("",!0),l(e(J),{slot:"end"},{default:t(()=>[l(e(h),{onClick:d[2]||(d[2]=a=>e(b)(!1,null))},{default:t(()=>[o("Close")]),_:1})]),_:1})]),_:1})]),_:1}),l(e(w),{class:"ion-padding"},{default:t(()=>[ee,e(r)?(n(),m("p",te,i(e(r).description),1)):k("",!0),le,e(r)?(n(),m("iframe",{key:1,width:"100%",height:"315",src:e(r).youtubeLink,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,oe)):k("",!0)]),_:1})]),_:1},8,["is-open"])]),_:1})]),_:1}))}});const ne=(s,u)=>{const f=s.__vccOpts||s;for(const[I,g]of u)f[I]=g;return f},ce=ne(ae,[["__scopeId","data-v-f8084638"]]);export{ce as default};
