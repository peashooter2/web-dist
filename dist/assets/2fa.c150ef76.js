import{b as v,aS as c,b5 as u,a as w,k as i,e as t,S,a3 as k,bM as g,ar as x,av as I,b1 as _,ak as $,I as C,B as M,a7 as T,ag as d,n as D,b6 as F,aU as L,cy as R}from"./index.29d84749.js";const A=()=>{const{back:n}=v(),[l,p]=c(()=>u.post("/auth/2fa/generate")),a=w(),[r,h]=i(),f=async()=>{if(d().otp){D.warning(a("users.2fa_already_enabled")),n();return}const e=await p();F(e,h)},[s,y]=i("");f();const[m,b]=c(()=>{var e;return u.post("/auth/2fa/verify",{code:s(),secret:(e=r())==null?void 0:e.secret})}),o=async()=>{const e=await b();L(e,()=>{R({...d(),otp:!0}),n()})};return t(T,{get loading(){return l()},get children(){return t(S,{get when(){return r()},get children(){return t(k,{spacing:"$2",alignItems:"start",get children(){return[t(g,{get children(){return a("users.scan_qr")}}),t(x,{boxSize:"$xs",rounded:"$lg",get src(){var e;return(e=r())==null?void 0:e.qr}}),t(g,{get children(){return[I(()=>a("users.or_manual")),":"," ",t(_,{get color(){return $()},get children(){var e;return(e=r())==null?void 0:e.secret}})]}}),t(C,{maxW:"$xs",get placeholder(){return a("users.input_code")},get value(){return s()},onInput:e=>y(e.currentTarget.value),onKeyDown:e=>{e.key==="Enter"&&o()}}),t(M,{get loading(){return m()},onClick:o,get children(){return a("users.verify")}})]}})}})}})};export{A as default};