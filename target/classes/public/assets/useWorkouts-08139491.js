import{g as I,a as b,c as T,b as C,d as M}from"./workouts-54ba8132.js";import{r,a5 as S,a6 as D,o as m,Q as F}from"./index-e05d4bb7.js";function B(){const d=r([]),v=r({}),u=r(new Date),f=S(),s=r([]),x=D(),n=r();m(async()=>{const{id:e}=x.params;if(e)try{v.value=await I(Number(e))}catch(o){console.log(o)}});const g=F(()=>u.value?u.value.toISOString().substring(0,16).replace("T"," "):""),l=async()=>{try{d.value=await b()}catch(e){console.log(e)}};m(l);const p=async()=>{if(u.value){let e={dateOfWorkout:new Date(u.value)};try{let o=await T(e);l(),f.push("/tabs/addExercises/"+o.id)}catch(o){console.log(o)}}},w=(e,o)=>{s.value.push({name:e,id:o,time:0})},W=e=>{s.value=s.value.filter(o=>o.id!==e)},h=(e,o)=>{y(e,o.target.value)},y=(e,o)=>{const t=s.value.findIndex(c=>c.id===e);t!==-1&&(s.value[t].time=o)},E=async e=>{if(!s.value.length)n.value=!0;else{n.value=!1;const o=s.value.map(t=>({reps:0,exerciseTime:t.time,exerciseInfo:{id:t.id}}));try{if(e!==null){let t=await C(o,e);f.push("/tabs/workout/"+e)}else console.log("workoutId.value is null")}catch(t){console.log(t)}}},k=r(!1),a=r(),i=r([]);return{showExercises:k,selectedWorkout:a,exercisesForWorkout:i,openCloseModal:async(e,o)=>{var t,c;k.value=e,a.value=o,e&&((t=a.value)!=null&&t.id)&&a!=null?i.value=await M((c=a.value)==null?void 0:c.id):i.value=[]},workouts:d,currentWorkout:v,selectedExercises:s,dateTime:g,noExercisesSelected:n,getWorkouts:l,saveWorkout:p,startWorkout:E,addExercise:w,removeExercise:W,onIonChange:h}}export{B as u};
