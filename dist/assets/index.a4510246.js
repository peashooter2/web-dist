import{h as t,G as P,a4 as y,k as x,ag as L,ah as S,bO as m,a0 as T,$ as M,b as f,a as _,N as W,O as U,L as w,S as p,ax as E,bP as h,m as z,bQ as I,ae as g,a7 as l,aD as N,V as n,W as r,bR as Y,bS as H,bT as j,bU as F,bV as X,bW as J,bX as D,bY as K,bZ as Q,aR as Z,b_ as q,b$ as G,c0 as ee,ay as te,c1 as ne,c2 as re,aK as oe,X as C,ak as R,c3 as ae,c4 as ie,n as se,bm as le,be as ce,bf as ue,bg as me,bh as ge,bi as de,aC as b,bk as O,bl as k,c5 as _e,c6 as he,c7 as pe}from"./index.8fc1d184.js";import{b as Ee,a as fe}from"./useTitle.2ceef731.js";import{A as Ie,f as be,g as $e,h as ve,i as Ae,j as Le}from"./index.86d8f602.js";import{S as Se}from"./index.50376e40.js";var i=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e))(i||{}),Te=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(Te||{});const De=e=>{const o=x(()=>{if(!L.is_admin(S())){if(e.role===void 0)return!1;if(e.role===m.GENERAL&&!L.is_general(S()))return!1}return!0});return t(M,{get fallback(){return t(Re,e)},get children(){return[t(T,{get when(){return!o()},children:null}),t(T,{get when(){return e.children},get children(){return t(Pe,e)}})]}})},Re=e=>{const{pathname:o}=f(),a=_(),c=()=>o()===e.to;return t(Ie,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:W,get href(){return e.to},onClick:u=>{var A;if(V(),e.refresh){(A=u.stopPropagation)==null||A.call(u);let d=e.to;d.startsWith("http")||(d=U(d)),window.open(d,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:c()?"$info4":w(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return c()?"$info4":""},get color(){return c()?"$info11":""},get external(){return e.external},get children(){return[t(p,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return a(e.title)}})]}})},Pe=e=>{const{pathname:o}=f(),[a,c]=z(o().includes(e.to)),u=_();return t(l,{w:"$full",get children(){return[t(I,{justifyContent:"space-between",onClick:()=>{c(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:w()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(g,{get children(){return[t(p,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return u(e.title)}})]}}),t(E,{as:be,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(p,{get when(){return a()},get children(){return t(l,{pl:"$2",get children(){return t($,{get items(){return e.children}})}})}})]}})},$=e=>t(y,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(P,{get each(){return e.items},children:o=>t(De,o)})}});function we(e){return N({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const s=n(()=>r(()=>import("./Common.7c26727a.js"),["assets/Common.7c26727a.js","assets/index.8fc1d184.js","assets/index.15d8d646.css","assets/useTitle.2ceef731.js","assets/SettingItem.d997352d.js","assets/item_type.be442da4.js","assets/index.86d8f602.js","assets/ResponsiveGrid.459ed240.js","assets/index.50376e40.js"])),v=[{title:"manage.sidemenu.profile",icon:Y,to:"/@manage",role:m.GUEST,component:n(()=>r(()=>import("./Profile.a2de846d.js"),["assets/Profile.a2de846d.js","assets/index.8fc1d184.js","assets/index.15d8d646.css","assets/useTitle.2ceef731.js","assets/index.86d8f602.js","assets/webauthn-json.browser-ponyfill.1c672167.js"]))},{title:"manage.sidemenu.settings",icon:H,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:j,to:"/@manage/settings/site",component:()=>t(s,{get group(){return i.SITE}})},{title:"manage.sidemenu.style",icon:F,to:"/@manage/settings/style",component:()=>t(s,{get group(){return i.STYLE}})},{title:"manage.sidemenu.preview",icon:X,to:"/@manage/settings/preview",component:()=>t(s,{get group(){return i.PREVIEW}})},{title:"manage.sidemenu.global",icon:J,to:"/@manage/settings/global",component:()=>t(s,{get group(){return i.GLOBAL}})},{title:"manage.sidemenu.sso",icon:D,to:"/@manage/settings/sso",component:()=>t(s,{get group(){return i.SSO}})},{title:"manage.sidemenu.ldap",icon:D,to:"/@manage/settings/ldap",component:()=>t(s,{get group(){return i.LDAP}})},{title:"manage.sidemenu.s3",icon:K,to:"/@manage/settings/s3",component:n(()=>r(()=>import("./S3.a6b390a8.js"),["assets/S3.a6b390a8.js","assets/index.8fc1d184.js","assets/index.15d8d646.css","assets/useTitle.2ceef731.js","assets/SettingItem.d997352d.js","assets/item_type.be442da4.js","assets/index.86d8f602.js","assets/ResponsiveGrid.459ed240.js","assets/FolderTree.51895ad4.js","assets/index.fbe30688.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/index.50376e40.js"]))},{title:"manage.sidemenu.other",icon:Q,to:"/@manage/settings/other",component:n(()=>r(()=>import("./Other.96a3f724.js"),["assets/Other.96a3f724.js","assets/index.8fc1d184.js","assets/index.15d8d646.css","assets/useTitle.2ceef731.js","assets/SettingItem.d997352d.js","assets/item_type.be442da4.js","assets/index.86d8f602.js","assets/index.50376e40.js"]))}]},{title:"manage.sidemenu.tasks",icon:we,to:"/@manage/tasks",children:[{title:"manage.sidemenu.offline_download",icon:Z,to:"/@manage/tasks/aria2",component:n(()=>r(()=>import("./offline_download.e1c8d93c.js"),["assets/offline_download.e1c8d93c.js","assets/index.8fc1d184.js","assets/index.15d8d646.css","assets/useTitle.2ceef731.js","assets/Tasks.2e9e15e0.js","assets/Paginator.63734f0b.js","assets/index.86d8f602.js"]))},{title:"manage.sidemenu.upload",icon:q,to:"/@manage/tasks/upload",component:n(()=>r(()=>import("./Upload.4a26395e.js"),["assets/Upload.4a26395e.js","assets/index.8fc1d184.js","assets/index.15d8d646.css","assets/useTitle.2ceef731.js","assets/Tasks.2e9e15e0.js","assets/Paginator.63734f0b.js","assets/index.86d8f602.js"]))},{title:"manage.sidemenu.copy",icon:G,to:"/@manage/tasks/copy",component:n(()=>r(()=>import("./Copy.b413d9c2.js"),["assets/Copy.b413d9c2.js","assets/index.8fc1d184.js","assets/index.15d8d646.css","assets/useTitle.2ceef731.js","assets/Tasks.2e9e15e0.js","assets/Paginator.63734f0b.js","assets/index.86d8f602.js"]))}]},{title:"manage.sidemenu.users",icon:ee,to:"/@manage/users",component:n(()=>r(()=>import("./Users.d2a9c4ca.js"),["assets/Users.d2a9c4ca.js","assets/index.8fc1d184.js","assets/index.15d8d646.css","assets/useTitle.2ceef731.js","assets/DeletePopover.b67d894d.js","assets/Wether.1979c731.js"]))},{title:"manage.sidemenu.storages",icon:$e,to:"/@manage/storages",component:n(()=>r(()=>import("./Storages.4b3ffd01.js"),["assets/Storages.4b3ffd01.js","assets/index.8fc1d184.js","assets/index.15d8d646.css","assets/useTitle.2ceef731.js","assets/DeletePopover.b67d894d.js"]))},{title:"manage.sidemenu.metas",icon:Se,to:"/@manage/metas",component:n(()=>r(()=>import("./Metas.18708542.js"),["assets/Metas.18708542.js","assets/index.8fc1d184.js","assets/index.15d8d646.css","assets/useTitle.2ceef731.js","assets/DeletePopover.b67d894d.js","assets/Wether.1979c731.js"]))},{title:"manage.sidemenu.indexes",icon:te,to:"/@manage/indexes",component:n(()=>r(()=>import("./indexes.2fcfc802.js"),["assets/indexes.2fcfc802.js","assets/index.8fc1d184.js","assets/index.15d8d646.css","assets/Common.7c26727a.js","assets/useTitle.2ceef731.js","assets/SettingItem.d997352d.js","assets/item_type.be442da4.js","assets/index.86d8f602.js","assets/ResponsiveGrid.459ed240.js","assets/index.50376e40.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:ve,component:n(()=>r(()=>import("./backup-restore.0178d73a.js"),["assets/backup-restore.0178d73a.js","assets/index.8fc1d184.js","assets/index.15d8d646.css","assets/useTitle.2ceef731.js","assets/index.fbe30688.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))},{title:"manage.sidemenu.about",icon:ne,to:"/@manage/about",role:m.GUEST,component:n(()=>r(()=>import("./About.07065544.js"),["assets/About.07065544.js","assets/index.8fc1d184.js","assets/index.15d8d646.css","assets/useTitle.2ceef731.js"]))},{title:"manage.sidemenu.docs",icon:Ae,to:"https://alist.nn.ci",role:m.GUEST,external:!0},{title:"manage.sidemenu.home",icon:re,to:"/",role:m.GUEST,refresh:!0}],{isOpen:Ce,onOpen:Oe,onClose:V}=oe(),ke=()=>{const e=_(),{to:o}=f();return t(l,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return C("$background","$neutral2")()},get children(){return[t(I,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(g,{spacing:"$2",get children(){return[t(R,{"aria-label":"menu",get icon(){return t(Le,{})},display:{"@sm":"none"},onClick:Oe,size:"sm"}),t(h,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{o("/@manage")},get children(){return e("manage.title")}})]}}),t(g,{spacing:"$1",get children(){return t(R,{"aria-label":"logout",get icon(){return t(ae,{})},onClick:()=>{ie(),se.success(e("manage.logout_success")),o(`/@login?redirect=${encodeURIComponent(location.pathname)}`)},size:"sm"})}})]}}),t(le,{get opened(){return Ce()},placement:"left",onClose:V,get children(){return[t(ce,{}),t(ue,{get children(){return[t(me,{}),t(ge,{color:"$info9",get children(){return e("manage.title")}}),t(de,{get children(){return[t($,{items:v}),t(b,{get children(){return t(g,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(O,{}),t(k,{})]}})}})]}})]}})]}})]}})},Ve=[{to:"/storages/add",component:n(()=>r(()=>import("./AddOrEdit.8b6a6f57.js"),["assets/AddOrEdit.8b6a6f57.js","assets/index.8fc1d184.js","assets/index.15d8d646.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.459ed240.js"]))},{to:"/storages/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.8b6a6f57.js"),["assets/AddOrEdit.8b6a6f57.js","assets/index.8fc1d184.js","assets/index.15d8d646.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.459ed240.js"]))},{to:"/users/add",component:n(()=>r(()=>import("./AddOrEdit.235eea37.js"),["assets/AddOrEdit.235eea37.js","assets/index.8fc1d184.js","assets/index.15d8d646.css","assets/FolderTree.51895ad4.js","assets/index.86d8f602.js"]))},{to:"/users/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.235eea37.js"),["assets/AddOrEdit.235eea37.js","assets/index.8fc1d184.js","assets/index.15d8d646.css","assets/FolderTree.51895ad4.js","assets/index.86d8f602.js"]))},{to:"/metas/add",component:n(()=>r(()=>import("./AddOrEdit.704d552b.js"),["assets/AddOrEdit.704d552b.js","assets/index.8fc1d184.js","assets/index.15d8d646.css","assets/FolderTree.51895ad4.js","assets/index.86d8f602.js"]))},{to:"/metas/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.704d552b.js"),["assets/AddOrEdit.704d552b.js","assets/index.8fc1d184.js","assets/index.15d8d646.css","assets/FolderTree.51895ad4.js","assets/index.86d8f602.js"]))},{to:"/2fa",component:n(()=>r(()=>import("./2fa.26296917.js"),["assets/2fa.26296917.js","assets/index.8fc1d184.js","assets/index.15d8d646.css"]))},{to:"/messenger",component:n(()=>r(()=>import("./Messenger.cc050498.js"),["assets/Messenger.cc050498.js","assets/index.8fc1d184.js","assets/index.15d8d646.css"]))}],Be=e=>(Ee(e.title),t(b,{h:"$full",get children(){return t(h,{get children(){return e.title}})}})),B=(e,o=[])=>(e.forEach(a=>{a.children?B(a.children,o):o.push({to:_e(a.to,"/@manage"),component:a.component||(()=>t(Be,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),o),ye=B(v).concat(Ve),xe=()=>{const e=_();return fe(()=>e("manage.title")),t(l,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(ke,{}),t(I,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(l,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return C("$background","$neutral2")()},overflowY:"auto",get children(){return[t($,{items:v}),t(b,{get children(){return t(g,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(O,{}),t(k,{})]}})}})]}}),t(l,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(he,{get children(){return t(P,{each:ye,children:o=>t(pe,{get path(){return o.to},get component(){return o.component}})})}})}})]}})]}})},Ne=Object.freeze(Object.defineProperty({__proto__:null,default:xe},Symbol.toStringTag,{value:"Module"}));export{Te as F,i as G,Ne as i};