import{a as D,m as i,aW as o,b9 as c,bI as F,h as t,bP as m,d1 as A,E as g,C as u,ba as l,n as h,I as N,ae as W,a8 as j}from"./index.8fc1d184.js";import{b as z}from"./useTitle.2ceef731.js";import{G}from"./index.a4510246.js";import{I as d}from"./SettingItem.d997352d.js";import"./index.86d8f602.js";import"./index.50376e40.js";import"./item_type.be442da4.js";const ne=()=>{const r=D();z("manage.sidemenu.other");const[p,_]=i(""),[k,y]=i(""),[b,f]=i(""),[$,v]=i(""),[C,S]=i(""),[a,Q]=i([]),[U,E]=o(()=>c.get(`/admin/setting/list?groups=${G.ARIA2},${G.SINGLE}`)),[H,M]=o(()=>c.post("/admin/setting/set_aria2",{uri:p(),secret:k()})),[O,P]=o(()=>c.post("/admin/setting/set_qbit",{url:b(),seedtime:$()}));(async()=>{const e=await E();l(e,n=>{var q,I,T,L,w;_(((q=n.find(s=>s.key==="aria2_uri"))==null?void 0:q.value)||""),y(((I=n.find(s=>s.key==="aria2_secret"))==null?void 0:I.value)||""),S(((T=n.find(s=>s.key==="token"))==null?void 0:T.value)||""),f(((L=n.find(s=>s.key==="qbittorrent_url"))==null?void 0:L.value)||""),v(((w=n.find(s=>s.key==="qbittorrent_seedtime"))==null?void 0:w.value)||""),Q(n)})})();const[R,x]=o(()=>c.post("/admin/setting/reset_token")),{copy:B}=F();return t(j,{get loading(){return U()},get children(){return[t(m,{mb:"$2",get children(){return r("settings_other.aria2")}}),t(A,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(d,g(()=>a().find(e=>e.key==="aria2_uri"),{get value(){return p()},onChange:e=>_(e)})),t(d,g(()=>a().find(e=>e.key==="aria2_secret"),{get value(){return k()},onChange:e=>y(e)}))]}}),t(u,{my:"$2",get loading(){return H()},onClick:async()=>{const e=await M();l(e,n=>{h.success(`${r("settings_other.aria2_version")} ${n}`)})},get children(){return r("settings_other.set_aria2")}}),t(m,{my:"$2",get children(){return r("settings_other.qbittorrent")}}),t(A,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(d,g(()=>a().find(e=>e.key==="qbittorrent_url"),{get value(){return b()},onChange:e=>f(e)})),t(d,g(()=>a().find(e=>e.key==="qbittorrent_seedtime"),{get value(){return $()},onChange:e=>v(e)}))]}}),t(u,{my:"$2",get loading(){return O()},onClick:async()=>{const e=await P();l(e,n=>{h.success(n)})},get children(){return r("settings_other.set_qbit")}}),t(m,{my:"$2",get children(){return r("settings.token")}}),t(N,{get value(){return C()},readOnly:!0}),t(W,{my:"$2",spacing:"$2",get children(){return[t(u,{onClick:()=>{B(C())},get children(){return r("settings_other.copy_token")}}),t(u,{colorScheme:"danger",get loading(){return R()},onClick:async()=>{const e=await x();l(e,n=>{h.success(r("settings_other.reset_token_success")),S(n)})},get children(){return r("settings_other.reset_token")}})]}})]}})};export{ne as default};