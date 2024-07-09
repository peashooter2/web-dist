import{a as b,h as t,bA as p,bn as y,I as B,cX as _,C as g,G as D,E as C,a4 as I,aW as v,b9 as f,cj as F,cU as G,m as J,cV as K,S as L,ba as k,n as u,bP as N,ae as O}from"./index.8fc1d184.js";import{b as T}from"./useTitle.2ceef731.js";import{G as R}from"./index.a4510246.js";import{I as W}from"./SettingItem.d997352d.js";import{R as j}from"./ResponsiveGrid.459ed240.js";import{a as q}from"./FolderTree.51895ad4.js";import{c as d}from"./index.fbe30688.js";import"./index.86d8f602.js";import"./index.50376e40.js";import"./item_type.be442da4.js";import"./_commonjs-dynamic-modules.30ae7933.js";const H=e=>{const s=b();return t(_,{w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[t(p,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[t(y,{for:"path",display:"flex",alignItems:"center",get children(){return s("global.name")}}),t(B,{id:"name",get value(){return e.name},onChange:n=>e.onChange({...e,name:n.currentTarget.value})})]}}),t(p,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[t(y,{for:"path",display:"flex",alignItems:"center",get children(){return s("metas.path")}}),t(q,{id:"path",get value(){return e.path},onChange:n=>e.onChange({...e,path:n})})]}}),t(_,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return t(g,{colorScheme:"danger",onClick:async()=>{e.onDelete()},get children(){return s("global.delete")}})}})]}})},P=e=>{const s=b();return console.log(e.buckets),t(I,{alignItems:"start",w:"$full",get children(){return[t(y,{display:"flex",alignItems:"center",get children(){return s("settings.s3_buckets")}}),t(g,{onClick:()=>{e.setSettings(n=>n.key==="s3_buckets","value",JSON.stringify([...e.buckets,{name:"",path:""}])),console.log(e.buckets)},get children(){return s("global.add")}}),t(D,{get each(){return e.buckets},children:n=>t(H,C(n,{onChange:r=>{console.log(r),e.setSettings(a=>a.key==="s3_buckets","value",JSON.stringify(e.buckets.map(a=>a.name===n.name?r:a)))},onDelete:()=>{e.setSettings(r=>r.key==="s3_buckets","value",JSON.stringify(e.buckets.filter(r=>r.name!==n.name)))}}))})]}})},w=e=>{const s={...e.find(n=>n.key==="s3_buckets")};return s.value?JSON.parse(s.value):[]},ne=()=>{const e=b();T("manage.sidemenu.s3");const[s,n]=v(()=>f.get(`/admin/setting/list?group=${R.S3}`)),[r,a]=F([]),m=async()=>{const c=await n();k(c,a)};m();const[$,x]=v(()=>f.post("/admin/setting/save",G(r))),[A,S]=J(!1);return t(I,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(j,{get children(){return[t(K,{each:r,children:(c,o)=>t(L,{get when(){return c().key!="s3_buckets"},get children(){return t(W,C(c,{onChange:l=>{a(i=>c().key===i.key,"value",l)},onDelete:async()=>{S(!0);const l=await f.post(`/admin/setting/delete?key=${c().key}`);S(!1),k(l,()=>{u.success(e("global.delete_success")),m()})}}))}})}),t(g,{onClick:()=>{const c=d.lib.WordArray.random(15),o=d.lib.WordArray.random(240/8),l=d.enc.Base64.stringify(c).replace(/[\r\n]/g,""),i=d.enc.Base64.stringify(o).replace(/[\r\n]/g,"");a(h=>h.key==="s3_access_key_id","value",l),a(h=>h.key==="s3_secret_access_key","value",i)},get children(){return e("settings.s3_generate")}}),t(N,{get children(){return e("settings.s3_restart_to_apply")}}),t(P,{get buckets(){return w(r)},setSettings:a})]}}),t(O,{spacing:"$2",get children(){return[t(g,{colorScheme:"accent",onClick:m,get loading(){return s()||A()},get children(){return e("global.refresh")}}),t(g,{get loading(){return $()},onClick:async()=>{const c=w(r),o=new Set;for(const i of c){if(i.name===""||i.path===""){u.error(e("settings.s3_buckets_empty"));return}if(o.has(i.name)){u.error(e("settings.s3_buckets_duplicate_name"));return}o.add(i.name)}const l=await x();k(l,()=>u.success(e("global.save_success")))},get children(){return e("global.save")}})]}})]}})};export{ne as default};
