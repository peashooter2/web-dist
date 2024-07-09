import{u as wt,a as _,b as M,s as W,n as I,c as at,p as _t,d as Z,g as kt,f as $t,_ as lt,l as re,o as De,e as k,h as e,P as yt,i as vt,j as Ct,k as P,m as v,q as xt,r as me,t as St,v as Mt,w as Ot,x as ke,M as K,y as X,z as V,A as G,S as b,I as $e,T as Ft,F as Rt,B as oe,C as S,D as J,E as se,G as ue,H as Lt,J as Tt,K as Et,L as je,N as it,O as It,Q as Bt,R as zt,U as ce,V as fe,W as pe,X as Fe,Y as He,Z as ye,$ as Re,a0 as B,a1 as p,a2 as At,a3 as x,a4 as Y,a5 as Pt,a6 as Dt,a7 as ae,a8 as jt,a9 as st,aa as Ht,ab as Vt,ac as Nt,ad as Le,ae as z,af as Ut,ag as ve,ah as Ce,ai as be,aj as Ve,ak as Wt,al as q,am as Be,an as ct,ao as ut,ap as Ne,aq as U,ar as qt,as as Kt,at as Ue,au as Xt,av as Gt,aw as h,ax as We,ay as Jt,az as xe,aA as Yt,aB as ze,aC as dt,aD as Q,aE as Qt,aF as Zt,aG as en,aH as gt,aI as tn,aJ as ht,aK as C,aL as Te,aM as nn,aN as rn,aO as on,aP as Ye,aQ as an,aR as ln,aS as sn,aT as cn,aU as un,aV as dn,aW as A,aX as gn,aY as D,aZ as hn,a_ as mn,a$ as fn,b0 as pn,b1 as bn,b2 as wn,b3 as _n,b4 as kn,b5 as Se,b6 as $n,b7 as yn,b8 as Qe,b9 as vn,ba as Cn,bb as xn,bc as Ze,bd as Sn,be as Mn,bf as On,bg as Fn,bh as Rn,bi as Ln,bj as Tn,bk as En,bl as In,bm as Bn,bn as zn,bo as Ae,bp as An,bq as Pn,br as Dn,bs as jn,bt as Hn,bu as Vn,bv as Nn,bw as Un,bx as Wn,by as qn,bz as Kn,bA as Xn,bB as Gn,bC as Jn}from"./index.8fc1d184.js";import{u as Yn,a as Qn}from"./useTitle.2ceef731.js";import{u as T,r as Zn,a as er,b as tr,R as nr}from"./index.2e8d55b7.js";import{F as rr,M as qe}from"./FolderTree.51895ad4.js";import{A as or,F as mt,C as ar,a as lr,B as ir,b as sr,T as cr,c as et,d as ur}from"./index.86d8f602.js";function _e(t){return t==null||t===""}function dr(t){return t==null}async function gr(t,n){let r="/downloads/alist";const o=await at.post(t,{id:Math.random().toString(),jsonrpc:"2.0",method:"aria2.getGlobalOption",params:["token:"+n]});return console.log(o),o.status===200&&(_e(o.data.result.dir)||(r=o.data.result.dir),r=r.endsWith("/")?r.slice(0,-1):r),r}const hr=()=>{const{rawLinks:t}=wt(),n=_(),{pathname:r}=M();return{batchDownloadSelected:()=>{t(!0).forEach(l=>{window.open(l,"_blank")})},sendToAria2:async()=>{const o=W(),l=async(i,a)=>{var c;if(a.is_dir){const u=await $t(Z(r(),i,a.name),lt());if(u.code!==200)return u.message;const g=[];for(const m of(c=u.data.content)!=null?c:[]){const $=await l(Z(i,a.name),m);if(typeof $=="string")return $;g.push(...$)}return g}else return[{path:Z(i,a.name),dir:i,url:kt(Z(r(),i),a,"direct",!0),name:a.name}]},{aria2_rpc_url:s,aria2_rpc_secret:d}=re;if(!s){I.warning(n("home.toolbar.aria2_not_set"));return}try{let i="/downloads/alist";i=await gr(s,d);let a=!1;I.info(`${n("home.package_download.fetching_struct")}`);for(const c of o){const u=await l("",c);if(typeof u!="object"||u.length===void 0)return I.error(`${n("home.package_download.fetching_struct_failed")}: ${u}`),u;for(let g=0;g<u.length;g++){if(_e(u[g].path)||dr(u[g].dir)||_e(u[g].url)||_e(u[g].name)){I.error(`${n("home.package_download.fetching_struct_failed")}: ${JSON.stringify(u[g])}`);continue}a||(a=!0,I.info(`${n("home.package_download.downloading")}`));const m=await at.post(s,{id:Math.random().toString(),jsonrpc:"2.0",method:"aria2.addUri",params:["token:"+d,[u[g].url],{out:u[g].name,dir:i+u[g].dir,"check-certificate":"false"}]});console.log(m)}}I.success(n("home.toolbar.send_aria2_success"))}catch(i){console.error(i),I.error(`failed to send to aria2: ${i}`)}},playlistDownloadSelected:()=>{const o=W().filter(a=>!a.is_dir);let l=_t(r());o.length===1&&(l=o[0].name),l||(l=n("manage.sidemenu.home"));const s=o.reduce((a,c,u)=>`${a}#EXTINF:-1,${c.name}
${t(!0)[u]}
`,`#EXTM3U
`),d=new Blob([s],{type:"application/x-mpegURL"}),i=document.createElement("a");i.href=URL.createObjectURL(d),i.download=`${l}.m3u8`,i.click(),URL.revokeObjectURL(i.href)}}},mr=t=>(t=Array.isArray(t)?t[0]:t,t instanceof Element?t:void 0),fr=(t,n)=>{const r={once:!0};t.addEventListener("motioncomplete",n,r),k(t.removeEventListener.bind(t,"motioncomplete",n,r))},pr=t=>{let{initial:n=!0}=t;De(()=>n=!0);let r=!1,o=[],l=[],s=[];return k(()=>{s.concat(l).forEach(d=>d()),l=s=o=[]}),e(Ot.Provider,{value:{addCleanup:d=>l.push(d),addMount:d=>o.push(d),initial:()=>n},get children(){return e(yt.Provider,{value:void 0,get children(){return vt(()=>{const d=Ct(()=>t.children),i=P(()=>mr(d())),[a,c]=v(),[u,g]=v();return xt(me(i,y=>{s.push(...l),l=[],St(()=>{t.exitBeforeEnter?(c(),$(()=>!r&&m(y))):(m(y),$())})})),[a,u];function m(y){c(y),o.forEach(E=>E()),o=[]}function $(y){var le;const E=()=>{g(),s.forEach(ie=>ie()),s=[],y==null||y()},f=g((le=a())!=null?le:u());if(!f)return E();const O=Mt.get(f);if(!O||!O.getOptions().exit)return E();O.setActive("exit",r=!0),fr(f,()=>{r=!1,E()})}})}})}})},Ee=t=>{var i;const[n,r]=v((i=t.defaultValue)!=null?i:""),o=_();let l;const s=()=>{const a=n().lastIndexOf(".");setTimeout(()=>{a>0&&t.isRenamingFile?l.setSelectionRange(0,a):l.select()},10)};ke(()=>{l&&(l.focus(),s()),k(()=>{l&&l.setSelectionRange(0,0)})});const d=()=>{var a;if(!n()){I.warning(o("global.empty_input"));return}(a=t.onSubmit)==null||a.call(t,n()),r("")};return e(J,{blockScrollOnMount:!1,get opened(){return t.opened},get onClose(){return t.onClose},initialFocus:"#modal-input",get children(){return[e(K,{}),e(X,{get children(){return[e(V,{get children(){return o(t.title)}}),e(G,{get children(){return[e(b,{get when(){return t.topSlot},get children(){return t.topSlot}}),e(b,{get when(){return t.type==="text"},get fallback(){return e($e,{id:"modal-input",get type(){return t.type},get value(){return n()},ref:a=>l=a,onInput:a=>{r(a.currentTarget.value)},onFocus:s,onKeyDown:a=>{a.key==="Enter"&&d()}})},get children(){return e(Ft,{id:"modal-input",get value(){return n()},ref:a=>l=a,onInput:a=>{r(a.currentTarget.value)},onFocus:s})}}),e(b,{get when(){return t.tips},get children(){return e(Rt,{get children(){return t.tips}})}}),e(b,{get when(){return t.bottomSlot},get children(){return t.bottomSlot}})]}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(S,{get onClick(){return t.onClose},colorScheme:"neutral",get children(){return o("global.cancel")}}),e(S,{get loading(){return t.loading},onClick:()=>d(),get children(){return o("global.ok")}})]}})]}})]}})},br=()=>{const{pathname:t}=M(),n=P(()=>["",...t().split("/").filter(Boolean)]),r=_(),{setPathAs:o}=T(),l=P(()=>{const s={_after:{content:"",bgColor:"$background",position:"absolute",height:"100%",width:"99vw",zIndex:-1,transform:"translateX(-50%)",left:"50%",top:0}};switch(re.position_of_header_navbar){case"only_navbar_sticky":return{...s,position:"sticky",zIndex:"$sticky",top:0};case"sticky":return{...s,position:"sticky",zIndex:"$sticky",top:60};default:return{_after:void 0,position:void 0,zIndex:void 0,top:void 0}}});return e(zt,se(l,{background:"$background",class:"nav",w:"$full",get children(){return e(ue,{get each(){return n()},children:(s,d)=>{const i=P(()=>d()===n().length-1),a=n().slice(0,d()+1).join("/"),c=Lt(a);let u=()=>s;return u()===""&&(u=()=>ce("home_icon")+r("manage.sidemenu.home")),e(Tt,{class:"nav-item",get children(){return[e(Et,{class:"nav-link",css:{wordBreak:"break-all"},color:"unset",get _hover(){return{bgColor:je(),color:"unset"}},_active:{transform:"scale(.95)",transition:"0.1s"},cursor:"pointer",p:"$1",rounded:"$lg",get currentPage(){return i()},get as(){return i()?void 0:it},get href(){return It(c)},onMouseEnter:()=>o(a),children:u}),e(b,{get when(){return!i()},get children(){return e(Bt,{class:"nav-separator"})}})]}})}})}}))},wr=fe(()=>pe(()=>import("./Folder.540ebff9.js").then(t=>t.F),["assets/Folder.540ebff9.js","assets/Folder.b511ba9e.css","assets/index.8fc1d184.js","assets/index.15d8d646.css","assets/icon.6e695c7a.js","assets/index.86d8f602.js","assets/index.50376e40.js","assets/video_box.b3e6e8d1.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/index.2e8d55b7.js","assets/Paginator.63734f0b.js"])),_r=fe(()=>pe(()=>import("./File.8399aa1d.js").then(t=>t.a),["assets/File.8399aa1d.js","assets/index.8fc1d184.js","assets/index.15d8d646.css","assets/icon.6e695c7a.js","assets/index.86d8f602.js","assets/index.50376e40.js"])),kr=fe(()=>pe(()=>import("./Password.8435233f.js"),["assets/Password.8435233f.js","assets/index.8fc1d184.js","assets/index.15d8d646.css","assets/index.2e8d55b7.js","assets/index.86d8f602.js"])),[$r,yr]=v();let tt=!0;const vr=()=>{const t=Fe("white","$neutral3"),{pathname:n}=M(),{handlePathChange:r}=T();let o=n();return ke(me(n,l=>{Yn(),tt||er(),tt=!1,Zn(o,window.scrollY),r(l),o=l})),e(Y,{ref:l=>yr(l),class:"obj-box",w:"$full",rounded:"$xl",get bgColor(){return t()},p:"$2",shadow:"$lg",spacing:"$2",get children(){return e(He,{get fallback(){return e(ye,{})},get children(){return e(Re,{get children(){return[e(B,{get when(){return p.err},get children(){return e(At,{get msg(){return p.err},disableColor:!0})}}),e(B,{get when(){return[x.FetchingObj,x.FetchingObjs].includes(p.state)},get children(){return e(ye,{})}}),e(B,{get when(){return p.state===x.NeedPassword},get children(){return e(kr,{})}}),e(B,{get when(){return[x.Folder,x.FetchingMore].includes(p.state)},get children(){return e(wr,{})}}),e(B,{get when(){return p.state===x.File},get children(){return e(_r,{})}})]}})}})}})};function nt(t){const n=Fe("white","$neutral3"),{proxyLink:r}=Pt(),{pathname:o}=M(),l=P(me(()=>p.state,()=>{if(![x.FetchingMore,x.Folder,x.File].includes(p.state))return"";if([x.FetchingMore,x.Folder].includes(p.state)){const i=p.objs.find(a=>t.files.find(c=>c.toLowerCase()===a.name.toLowerCase()));if(i)return r(i,!0)}return p[t.fromMeta]&&typeof p[t.fromMeta]=="string"?p[t.fromMeta]:""})),s=async i=>{let a={content:i};return/^https?:\/\//g.test(i)&&(a=await Ht(i)),setTimeout(()=>{tr(o())}),a},[d]=Dt(l,s);return e(b,{get when(){return l()},get children(){return e(ae,{w:"$full",rounded:"$xl",p:"$4",get bgColor(){return n()},shadow:"$lg",get children(){return e(jt,{get loading(){return d.loading},get children(){return e(st,{get children(){var i;return(i=d())==null?void 0:i.content},readme:!0,get toc(){return t.fromMeta==="readme"}})}})}})}})}const ft=t=>{const n=ce("home_container");return e(Re,{get fallback(){return e(ae,{w:"min(99%, 980px)",get children(){return t.children}})},get children(){return e(B,{when:n==="hope_container",get children(){return e(Vt,{get children(){return t.children}})}})}})};function Cr(){const{to:t}=M(),n=Nt(),[r,o]=v(),[l,s]=v(),[d,i]=v(-999),a=()=>i(0),c=()=>{const g=$r(),m=l();if(!g||!m)return;const $=g.offsetLeft>50?16:0;m.clientWidth<g.offsetLeft-$?i(0):i(`calc(-100% + ${g.offsetLeft}px - ${$}px)`)};let u;return De(()=>{const g=r();g==null||g.setPath(n.pathname),u=requestAnimationFrame(c),window.addEventListener("resize",c),k(()=>window.removeEventListener("resize",c))}),ke(me(()=>p.state,()=>{cancelAnimationFrame(u),u=requestAnimationFrame(c)})),ke(me(()=>n.pathname,()=>{const g=r();g==null||g.setPath(n.pathname)})),e(ae,{get as(){return Le.div},initial:{x:-999},get animate(){return{x:d()}},zIndex:"$overlay",pos:"fixed",left:3,top:3,h:"calc(100vh - 6px)",minW:180,p:"$2",overflow:"auto",shadow:"$lg",rounded:"$lg",bgColor:"white",_dark:{bgColor:"$neutral3"},onMouseEnter:a,onMouseLeave:c,ref:g=>s(g),get children(){return e(rr,{autoOpen:!0,showEmptyIcon:!0,showHiddenFolder:!1,onChange:g=>t(g),handle:g=>o(g)})}})}function xr(){const t=P(()=>re.show_sidebar!=="none");return e(b,{get when(){return t()},get children(){return e(Cr,{})}})}const Sr=()=>e(ft,{get children(){return e(Y,{class:"body",mt:"$1",py:"$2",px:"2%",minH:"80vh",w:"$full",gap:"$4",get children(){return[e(nt,{files:["header.md","top.md"],fromMeta:"header"}),e(br,{}),e(vr,{}),e(nt,{files:["readme.md","footer.md","bottom.md"],fromMeta:"readme"}),e(xr,{})]}})}}),Mr=be("<span>|</span>"),Or=()=>{const t=_();return e(Y,{class:"footer",w:"$full",py:"$4",get children(){return e(z,{spacing:"$1",get children(){return[e(Ut,{href:"https://github.com/alist-org/alist",external:!0,get children(){return t("home.footer.powered_by")}}),Mr.cloneNode(!0),e(or,{as:it,get href(){return ve.is_guest(Ce())?"/@login":"/@manage"},get children(){return t(ve.is_guest(Ce())?"login.login":"home.footer.manage")}})]}})}})},rt={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},de="^\\s*",ge="\\s*$",ee="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",te="([0-9A-Fa-f])",ne="([0-9A-Fa-f]{2})",Fr=new RegExp(`${de}rgb\\s*\\(${ee},${ee},${ee}\\)${ge}`),Rr=new RegExp(`${de}rgba\\s*\\(${ee},${ee},${ee},${ee}\\)${ge}`),Lr=new RegExp(`${de}#${te}${te}${te}${ge}`),Tr=new RegExp(`${de}#${ne}${ne}${ne}${ge}`),Er=new RegExp(`${de}#${te}${te}${te}${te}${ge}`),Ir=new RegExp(`${de}#${ne}${ne}${ne}${ne}${ge}`);function F(t){return parseInt(t,16)}function pt(t){try{let n;if(n=Tr.exec(t))return[F(n[1]),F(n[2]),F(n[3]),1];if(n=Fr.exec(t))return[H(n[1]),H(n[5]),H(n[9]),1];if(n=Rr.exec(t))return[H(n[1]),H(n[5]),H(n[9]),Pe(n[13])];if(n=Lr.exec(t))return[F(n[1]+n[1]),F(n[2]+n[2]),F(n[3]+n[3]),1];if(n=Ir.exec(t))return[F(n[1]),F(n[2]),F(n[3]),Pe(F(n[4])/255)];if(n=Er.exec(t))return[F(n[1]+n[1]),F(n[2]+n[2]),F(n[3]+n[3]),Pe(F(n[4]+n[4])/255)];if(t in rt)return pt(rt[t]);throw new Error(`[seemly/rgba]: Invalid color value ${t}.`)}catch(n){throw n}}function Br(t){return t>1?1:t<0?0:t}function ot(t,n,r,o){return`rgba(${H(t)}, ${H(n)}, ${H(r)}, ${Br(o)})`}function Me(t,n){const[r,o,l,s=1]=Array.isArray(t)?t:pt(t);return n.alpha?ot(r,o,l,n.alpha):ot(r,o,l,s)}function Pe(t){const n=Math.round(Number(t)*100)/100;return n>1?1:n<0?0:n}function H(t){const n=Math.round(Number(t));return n>255?255:n<0?0:n}const zr={list:mt,grid:ct,image:ut},Ar=()=>{const t=_();return e(Ue,{get children(){return[e(Ve,{as:Wt,get color(){return q()},get bgColor(){return Me(q(),{alpha:.15})},get _hover(){return{bgColor:Me(q(),{alpha:.2})}},"aria-label":"switch layout",compact:!0,size:"lg",get icon(){return e(Re,{get children(){return[e(B,{get when(){return Be()==="list"},get children(){return e(mt,{})}}),e(B,{get when(){return Be()==="grid"},get children(){return e(ct,{})}}),e(B,{get when(){return Be()==="image"},get children(){return e(ut,{})}})]}})}}),e(Ne,{get children(){return e(ue,{get each(){return Object.entries(zr)},children:n=>e(U,{get icon(){return e(qt,{get component(){return n[1]}})},onSelect:()=>{Kt(n[0])},get children(){return t(`home.layouts.${n[0]}`)}})})}})]}})},Pr=()=>{const t=ce("logo").split(`
`),n=Fe(t[0],t.pop()),r=P(()=>{switch(re.position_of_header_navbar){case"sticky":return{position:"sticky",zIndex:"$sticky",top:0};default:return{position:void 0,zIndex:void 0,top:void 0}}});return e(dt,se(r,{bgColor:"$background",class:"header",w:"$full",get children(){return e(ft,{get children(){return e(z,{px:"calc(2% + 0.5rem)",py:"$2",w:"$full",justifyContent:"space-between",get children(){return[e(z,{class:"header-left",h:"44px",get children(){return e(Xt,{get src(){return n()},h:"$full",w:"auto",get fallback(){return e(Gt,{})}})}}),e(z,{class:"header-right",spacing:"$2",get children(){return e(b,{get when(){return p.state===x.Folder},get children(){return[e(b,{get when(){return ce("search_index")!=="none"},get children(){return e(z,{bg:"$neutral4",w:"$32",p:"$1",rounded:"$md",justifyContent:"space-between",border:"2px solid transparent",cursor:"pointer",get color(){return q()},get bgColor(){return Me(q(),{alpha:.15})},get _hover(){return{bgColor:Me(q(),{alpha:.2})}},onClick:()=>{h.emit("tool","search")},get children(){return[e(We,{as:Jt}),e(z,{get children(){return[xe(()=>Yt?e(ze,{children:"Cmd"}):e(ze,{children:"Ctrl"})),e(ze,{children:"K"})]}})]}})}}),e(Ar,{})]}})}})]}})}})}}))};function Dr(t){return Q({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M9 11l3 3 8-8"/><path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h9"/>'},t)}function jr(t){return Q({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><rect width="12" height="12" x="8" y="8" rx="2"/><path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2"/>'},t)}function So(t){return Q({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M11 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-5M10 14L20 4M15 4h5v5"/>'},t)}function Hr(t){return Q({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M14 3v4a1 1 0 001 1h4"/><path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2zM9 15h6"/><path d="M12.5 17.5L15 15l-2.5-2.5"/>'},t)}function Vr(t){return Q({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M10 14a3.5 3.5 0 005 0l4-4a3.5 3.5 0 00-5-5l-.5.5"/><path d="M14 10a3.5 3.5 0 00-5 0l-4 4a3.5 3.5 0 005 5l.5-.5"/>'},t)}function Nr(t){return Q({a:{viewBox:"0 0 16 16"},c:'<path fill="currentColor" d="M11 8v6h1V8h2.5l-3-3-3 3zM1 3h1.5v1H1V3zM3 3h1.5v1H3V3zM5 3h1v1.5H5V3zM1 6.5h1V8H1V6.5zM2.5 7H4v1H2.5V7zM4.5 7H6v1H4.5V7zM1 4.5h1V6H1V4.5zM5 5h1v1.5H5V5zM5 11v3H2v-3h3zm1-1H1v5h5v-5z"/>'},t)}function Mo(t){return Q({a:{viewBox:"0 0 16 16"},c:'<path fill="currentColor" d="M14 6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zM2 6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zm1.5 5.5A1.5 1.5 0 005 13v2c0 .55.45 1 1 1s1-.45 1-1v-2h2v2c0 .55.45 1 1 1s1-.45 1-1v-2a1.5 1.5 0 001.5-1.5V6h-9v5.5zM12.472 5a4.5 4.5 0 00-2.025-3.276l.5-1.001a.5.5 0 00-.895-.447L9.55 1.28l-.13-.052a4.504 4.504 0 00-2.84 0l-.13.052L5.948.276a.5.5 0 00-.895.447l.5 1.001A4.499 4.499 0 003.528 5v.5H12.5V5h-.028zM6.5 4a.5.5 0 01-.001-1h.002A.5.5 0 016.5 4zm3 0a.5.5 0 01-.001-1h.003a.5.5 0 01-.001 1z"/>'},t)}function Ur(t){return Q({a:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},c:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>'},t)}const N={rename:{icon:ar,color:"$accent9"},copy:{icon:jr,color:"$success9"},move:{icon:Hr,color:"$warning9"},delete:{icon:Qt,color:"$danger9"},copy_link:{icon:Vr,color:"$info9"},mkdir:{icon:lr,p:!0},recursive_move:{icon:Nr,p:!0},remove_empty_directory:{icon:Ur,p:!0},batch_rename:{icon:ir,p:!0},new_file:{icon:sr,p:!0},cancel_select:{icon:cr},download:{icon:Zt,color:"$primary9"}},Oe=t=>{const n=en.findIndex(o=>o===t.name);if(n!==-1&&!ve.can(Ce(),n))return null;const r=_();return e(gt,{placement:"top",withArrow:!0,get label(){return r(`home.toolbar.${t.name}`)},get children(){return e(We,se({get class(){return`toolbar-${t.name}`},get _hover(){return{bgColor:je()}},_focus:{outline:"none"},cursor:"pointer",boxSize:"$7",rounded:"$md",get p(){var o;return(o=N[t.name])!=null&&o.p?"$1_5":"$1"},_active:{transform:"scale(.94)",transition:"0.2s"},get as(){var o;return(o=N[t.name])==null?void 0:o.icon},get color(){var o;return(o=N[t.name])==null?void 0:o.color}},t))}})},L=t=>{const n=_();return e(gt,{get disabled(){return!t.tips},placement:"left",withArrow:!0,get label(){return n(`home.toolbar.${t.tips}`)},get children(){return e(We,se({get color(){return q()},get _hover(){return{bgColor:q(),color:"white"}},_focus:{outline:"none"},cursor:"pointer",boxSize:"$8",rounded:"$lg",p:"$1",_active:{transform:"scale(.94)",transition:"0.2s"},get as(){return t.icon}},t))}})},Wr=()=>{const t=_(),{copySelectedPreviewPage:n,copySelectedRawLink:r}=tn(),o="neutral";return e(Ue,{placement:"top",offset:10,get children(){return[e(Ve,{as:Oe,name:"copy_link"}),e(Ne,{get children(){return[e(U,{colorScheme:o,onSelect:()=>{n()},get children(){return t("home.toolbar.preview_page")}}),e(U,{colorScheme:o,onSelect:()=>{r()},get children(){return t("home.toolbar.down_link")}}),e(U,{colorScheme:o,onSelect:()=>{r(!0)},get children(){return t("home.toolbar.encode_down_link")}})]}})]}})},qr=be("<p></p>"),Kr=()=>{const t=_(),n="neutral",{batchDownloadSelected:r,sendToAria2:o,playlistDownloadSelected:l}=hr();return e(Ue,{placement:"top",offset:10,get children(){return[e(Ve,{as:Oe,name:"download"}),e(Ne,{get children(){return[e(U,{colorScheme:n,onSelect:r,get children(){return t("home.toolbar.batch_download")}}),e(b,{get when(){return ve.is_admin(Ce())||ht("package_download")},get children(){return[e(U,{colorScheme:n,onSelect:()=>{h.emit("tool","package_download")},get children(){return t("home.toolbar.package_download")}}),e(U,{colorScheme:n,onSelect:l,get children(){return t("home.toolbar.playlist_download")}})]}}),e(U,{colorScheme:n,onSelect:o,get children(){return t("home.toolbar.send_aria2")}})]}})]}})},Xr=fe(()=>pe(()=>import("./PackageDownload.a475aa46.js"),["assets/PackageDownload.a475aa46.js","assets/index.8fc1d184.js","assets/index.15d8d646.css"])),Gr=()=>{const t=_(),n=i=>{if(i==="package_download"){if(!ht("package_download"))return;o()}};h.on("tool",n),k(()=>{h.off("tool",n)});const{isOpen:r,onOpen:o,onClose:l}=C(),[s,d]=v("pre_tips");return e(J,{blockScrollOnMount:!1,get opened(){return r()},onClose:l,closeOnOverlayClick:!1,closeOnEsc:!1,get children(){return[e(K,{}),e(X,{get children(){return[e(V,{get children(){return t("home.toolbar.package_download")}}),e(He,{get fallback(){return e(ye,{})},get children(){return e(b,{get when(){return s()==="pre_tips"},get fallback(){return e(Xr,{onClose:l})},get children(){return[e(G,{get children(){const i=qr.cloneNode(!0);return Te(i,()=>t("home.toolbar.pre_package_download-tips")),i}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(S,{onClick:l,colorScheme:"neutral",get children(){return t("global.cancel")}}),e(S,{colorScheme:"info",onClick:()=>{d("package_download")},get children(){return t("global.confirm")}})]}})]}})}})]}})]}})},Jr=()=>{const t=P(()=>[x.Folder,x.FetchingMore].includes(p.state)&&nn()&&rn());return e(pr,{exitBeforeEnter:!0,get children(){return e(b,{get when(){return t()},get children(){return e(ae,{class:"center-toolbar",pos:"fixed",bottom:"$4",right:"50%",w:"max-content",color:"$neutral11",get as(){return Le.div},initial:{opacity:0,scale:.9,x:"50% ",y:10},animate:{opacity:1,scale:1,x:"50%",y:0},exit:{opacity:0,scale:.9},transition:{duration:.2},get children(){return e(z,{p:"$2",get bgColor(){return Fe("white","#000000d0")()},spacing:"$1",shadow:"0px 10px 30px -5px rgba(0, 0, 0, 0.3)",rounded:"$lg",css:{backdropFilter:"blur(8px)"},get children(){return[e(ue,{each:["rename","move","copy","delete"],children:n=>e(Oe,{name:n,onClick:()=>{h.emit("tool",n)}})}),e(Wr,{}),e(Kr,{}),e(Oe,{name:"cancel_select",onClick:()=>{on(!1)}})]}})}})}})}})},Yr=()=>{const{isOpen:t,onToggle:n}=C({defaultIsOpen:localStorage.getItem("more-open")==="true",onClose:()=>localStorage.setItem("more-open","false"),onOpen:()=>localStorage.setItem("more-open","true")}),r=P(()=>t()?"$4":"$5"),o=P(()=>p.state===x.Folder),{refresh:l}=T();return e(ae,{class:"left-toolbar-box",pos:"fixed",get right(){return r()},get bottom(){return r()},get children(){return e(b,{get when(){return t()},get fallback(){return e(L,{class:"toolbar-toggle",as:et,onClick:()=>{n()}})},get children(){return e(Y,{class:"left-toolbar",p:"$1",rounded:"$lg",spacing:"$1",bgColor:"$neutral1",get as(){return Le.div},initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.6},transition:{duration:.2},get children(){return[e(Y,{spacing:"$1",class:"left-toolbar-in",get children(){return[e(b,{get when(){return xe(()=>!!o(),!0)()&&(Ye("write")||p.write)},get children(){return[e(L,{as:nr,tips:"refresh",onClick:()=>{l(void 0,!0)}}),e(L,{get as(){return N.new_file.icon},tips:"new_file",onClick:()=>{h.emit("tool","new_file")}}),e(L,{get as(){return N.mkdir.icon},p:"$1_5",tips:"mkdir",onClick:()=>{h.emit("tool","mkdir")}}),e(L,{get as(){return N.recursive_move.icon},tips:"recursive_move",onClick:()=>{h.emit("tool","recursiveMove")}}),e(L,{get as(){return N.remove_empty_directory.icon},tips:"remove_empty_directory",onClick:()=>{h.emit("tool","removeEmptyDirectory")}}),e(L,{get as(){return N.batch_rename.icon},tips:"batch_rename",onClick:()=>{h.emit("tool","batchRename")}}),e(L,{as:an,tips:"upload",onClick:()=>{h.emit("tool","upload")}})]}}),e(b,{get when(){return xe(()=>!!o(),!0)()&&Ye("offline_download")},get children(){return e(L,{as:ln,pl:"0",tips:"offline_download",onClick:()=>{h.emit("tool","offline_download")}})}}),e(b,{get when(){return sn()},get children(){return e(L,{as:ur,tips:"toggle_markdown_toc",onClick:()=>{cn(s=>!s)}})}}),e(L,{tips:"toggle_checkbox",as:Dr,onClick:un}),e(L,{as:dn,tips:"local_settings",onClick:()=>{h.emit("tool","local_settings")}})]}}),e(L,{tips:"more",as:et,onClick:n})]}})}})}})},Qr=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),[o,l]=A(gn),{pathname:s}=M(),{refresh:d}=T(),i=a=>{a==="copy"&&n()};return h.on("tool",i),k(()=>{h.off("tool",i)}),e(qe,{get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(s(),a,W().map(u=>u.name));D(c,()=>{d(),r()})}})},Zr=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),[o,l]=A(hn),{pathname:s}=M(),{refresh:d}=T(),i=a=>{a==="move"&&n()};return h.on("tool",i),k(()=>{h.off("tool",i)}),e(qe,{get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(s(),a,W().map(u=>u.name));D(c,()=>{d(),r()})}})},eo=be("<p></p>"),to=()=>{const t=_(),{isOpen:n,onOpen:r,onClose:o}=C(),[l,s]=A(mn),{refresh:d}=T(),{pathname:i}=M(),a=c=>{c==="delete"&&r()};return h.on("tool",a),k(()=>{h.off("tool",a)}),e(J,{blockScrollOnMount:!1,get opened(){return n()},onClose:o,size:{"@initial":"xs","@md":"md"},get children(){return[e(K,{}),e(X,{get children(){return[e(V,{get children(){return t("home.toolbar.delete")}}),e(G,{get children(){const c=eo.cloneNode(!0);return Te(c,()=>t("home.toolbar.delete-tips")),c}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(S,{onClick:o,colorScheme:"neutral",get children(){return t("global.cancel")}}),e(S,{colorScheme:"danger",get loading(){return l()},onClick:async()=>{const c=await s(i(),W().map(u=>u.name));D(c,()=>{d(),o()})},get children(){return t("global.confirm")}})]}})]}})]}})},no=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),o=_(),[l,s]=A(fn),{pathname:d}=M(),{refresh:i}=T(),a=c=>{if(c==="rename"){if(!pn()){I.warning(o("home.toolbar.only_one-tips"));return}n()}};return h.on("tool",a),k(()=>{h.off("tool",a)}),e(b,{get when(){return t()},get children(){return e(Ee,{title:"home.toolbar.input_new_name",get isRenamingFile(){return!W()[0].is_dir},get opened(){return t()},onClose:r,get defaultValue(){var c,u;return(u=(c=W()[0])==null?void 0:c.name)!=null?u:""},get loading(){return l()},onSubmit:async c=>{const u=await s(Z(d(),W()[0].name),c);D(u,()=>{i(),r()})}})}})},ro=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),[o,l]=A(bn),{refresh:s}=T(),{pathname:d}=M(),i=a=>{a==="new_file"&&n()};return h.on("tool",i),k(()=>{h.off("tool",i)}),e(Ee,{title:"home.toolbar.input_filename",get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(Z(d(),a),lt());D(c,()=>{s(),r()})}})},oo=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),[o,l]=A(wn),{pathname:s}=M(),{refresh:d}=T(),i=a=>{a==="mkdir"&&n()};return h.on("tool",i),k(()=>{h.off("tool",i)}),e(Ee,{title:"home.toolbar.input_dir_name",get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(Z(s(),a));D(c,()=>{d(),r()})}})},ao=be("<p></p>"),lo=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),{isOpen:o,onOpen:l,onClose:s}=C(),[d,i]=A(_n),{pathname:a}=M(),{refresh:c}=T(),u=m=>{m==="recursiveMove"&&n()};h.on("tool",u),k(()=>{h.off("tool",u)});const g=_();return[e(J,{blockScrollOnMount:!1,get opened(){return t()},onClose:()=>r(),size:{"@initial":"xs","@md":"md"},get children(){return[e(K,{}),e(X,{get children(){return[e(V,{get children(){return g("home.toolbar.recursive_move")}}),e(G,{get children(){const m=ao.cloneNode(!0);return Te(m,()=>g("home.toolbar.recursive_move_directory-tips")),m}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(S,{onClick:()=>r(),colorScheme:"neutral",get children(){return g("global.cancel")}}),e(S,{onClick:()=>{r(),l()},colorScheme:"danger",get children(){return g("global.confirm")}})]}})]}})]}}),e(qe,{get opened(){return o()},onClose:s,get loading(){return d()},onSubmit:async m=>{const $=await i(a(),m);D($,()=>{c(),s()})}})]},io=be("<p></p>"),so=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),{pathname:o}=M(),[l,s]=A(kn),{refresh:d}=T(),i=c=>{c==="removeEmptyDirectory"&&n()};h.on("tool",i),k(()=>{h.off("tool",i)});const a=_();return e(J,{blockScrollOnMount:!1,get opened(){return t()},onClose:r,size:{"@initial":"xs","@md":"md"},get children(){return[e(K,{}),e(X,{get children(){return[e(V,{get children(){return a("home.toolbar.remove_empty_directory")}}),e(G,{get children(){const c=io.cloneNode(!0);return Te(c,()=>a("home.toolbar.remove_empty_directory-tips")),c}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(S,{onClick:r,colorScheme:"neutral",get children(){return a("global.cancel")}}),e(S,{colorScheme:"danger",get loading(){return l()},onClick:async()=>{const c=await s(o());D(c,()=>{d(),r()})},get children(){return a("global.confirm")}})]}})]}})]}})},co=t=>e(Le.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return e(z,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:je()}},get children(){return[e(Se,{w:{"@initial":"50%","@md":"50%"},class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return t.obj.src_name},get children(){return t.obj.src_name}}),e(Se,{w:{"@initial":"50%","@md":"50%"},class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return t.obj.new_name},get children(){return t.obj.new_name}})]}})}}),uo=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),{isOpen:o,onOpen:l,onClose:s}=C(),[d,i]=A($n),{pathname:a}=M(),{refresh:c}=T(),[u,g]=v("1"),[m,$]=v(""),[y,E]=v(""),[f,O]=v("string"),[le,ie]=v([]),R=_(),Ke=()=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:"left",cursor:"pointer"}),Xe=w=>{w==="batchRename"&&l()};h.on("tool",Xe),k(()=>{h.off("tool",Xe)});const Ie=()=>{if(!m()||!y()){I.warning(R("global.empty_input"));return}const w=new RegExp(m(),"g");let he;if(u()==="1")he=p.objs.filter(j=>j.name.match(m())).map(j=>({src_name:j.name,new_name:j.name.replace(w,y())}));else{let j=y();he=p.objs.map(we=>{let Ge="";const Je=we.name.lastIndexOf(".");Je!==-1&&(Ge=we.name.substring(Je+1));const bt={src_name:we.name,new_name:m()+j+"."+Ge};return j=(parseInt(j)+1).toString().padStart(j.length,"0"),bt})}ie(he),n(),s()};return[e(J,{blockScrollOnMount:!1,get opened(){return o()},onClose:s,initialFocus:"#modal-input1",size:{"@initial":"xs","@md":"md"},get children(){return[e(K,{}),e(X,{get children(){return[e(b,{get when(){return u()==="1"},get children(){return e(V,{get children(){return R("home.toolbar.regular_rename")}})}}),e(b,{get when(){return u()==="2"},get children(){return e(V,{get children(){return R("home.toolbar.sequential_renaming_desc")}})}}),e(G,{get children(){return[e(yn,{defaultValue:"1",style:{margin:"20px 0"},onChange:w=>{g(w),w==="1"?O("string"):w==="2"&&O("number")},get children(){return e(z,{spacing:"$4",get children(){return[e(Qe,{value:"1",get children(){return R("home.toolbar.regex_rename")}}),e(Qe,{value:"2",get children(){return R("home.toolbar.sequential_renaming")}})]}})}}),e(Y,{spacing:"$2",get children(){return[e($e,{id:"modal-input1",type:"string",get value(){return m()},onInput:w=>{$(w.currentTarget.value)},onKeyDown:w=>{w.key==="Enter"&&Ie()}}),e($e,{id:"modal-input2",get type(){return f()},get value(){return y()},onInput:w=>{E(w.currentTarget.value)},onKeyDown:w=>{w.key==="Enter"&&Ie()}})]}})]}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(S,{onClick:()=>{g("1"),O("string"),s()},colorScheme:"neutral",get children(){return R("global.cancel")}}),e(S,{onClick:()=>Ie(),get disabled(){return!m()||!y()},get children(){return R("global.ok")}})]}})]}})]}}),e(J,{size:"xl",get opened(){return t()},onClose:r,get children(){return[e(K,{}),e(X,{get children(){return[e(V,{get children(){return R("home.toolbar.regex_rename_preview")}}),e(G,{get children(){return e(Y,{class:"list",w:"$full",spacing:"$1",get children(){return[e(z,{class:"title",w:"$full",p:"$2",get children(){return[e(Se,se({w:{"@initial":"50%","@md":"50%"}},Ke,{get children(){return R("home.toolbar.regex_rename_preview_old_name")}})),e(Se,se({w:{"@initial":"50%","@md":"50%"}},Ke,{get children(){return R("home.toolbar.regex_rename_preview_new_name")}}))]}}),e(ue,{get each(){return le()},children:(w,he)=>e(co,{obj:w,get index(){return he()}})})]}})}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(S,{onClick:()=>{ie([]),g("1"),O("string"),r(),s()},colorScheme:"neutral",get children(){return R("global.cancel")}}),e(S,{onClick:()=>{ie([]),r(),l()},colorScheme:"neutral",get children(){return R("global.back")}}),e(S,{get loading(){return d()},onClick:async()=>{const w=await i(a(),le());D(w,()=>{ie([]),$(""),E(""),g("1"),O("string"),c(),s(),r()})},get disabled(){return le().length==0},get children(){return R("global.ok")}})]}})]}})]}})]},go=["delete_on_upload_succeed","delete_on_upload_failed","delete_never","delete_always"],ho=()=>{const t=_(),[n,r]=v([]),[o,l]=A(()=>vn.get("/public/offline_download_tools")),[s,d]=v(""),[i,a]=v("delete_on_upload_succeed");De(async()=>{const f=await l();Cn(f,O=>{r(O),d(O[0])})});const{isOpen:c,onOpen:u,onClose:g}=C(),[m,$]=A(xn),{pathname:y}=M(),E=f=>{f==="offline_download"&&u()};return h.on("tool",E),k(()=>{h.off("tool",E)}),e(Ee,{title:"home.toolbar.offline_download",type:"text",get opened(){return c()},onClose:g,get loading(){return o()||m()},get tips(){return t("home.toolbar.offline_download-tips")},get topSlot(){return e(ae,{mb:"$2",get children(){return e(Ze,{get value(){return s()},onChange:f=>d(f),get options(){return n().map(f=>({value:f,label:f}))}})}})},get bottomSlot(){return e(ae,{mb:"$2",get children(){return e(Ze,{get value(){return i()},onChange:f=>a(f),get options(){return go.map(f=>({value:f,label:t(`home.toolbar.delete_policy.${f}`)}))}})}})},onSubmit:async f=>{const O=await $(y(),f.split(`
`),s(),i());D(O,()=>{g()})}})},mo=t=>{const n=_(),r=d=>{d===t.name&&l()};h.on("tool",r),k(()=>{h.off("tool",r)});const{isOpen:o,onOpen:l,onClose:s}=C();return e(J,{get blockScrollOnMount(){return t.blockScrollOnMount},get opened(){return o()},onClose:s,closeOnOverlayClick:!1,closeOnEsc:!1,size:{"@initial":"xs","@md":"md","@lg":"lg","@xl":"xl","@2xl":"2xl"},get children(){return[e(K,{}),e(X,{get children(){return[e(Sn,{}),e(V,{get children(){return n(t.title)}}),e(G,{get children(){return e(b,{get when(){return o()},get children(){return e(He,{get fallback(){return e(ye,{})},get children(){return t.children}})}})}})]}})]}})};function fo(t){const n=_();return e(Xn,{get children(){return[e(zn,{get children(){return n(`home.local_settings.${t.key}`)}}),e(Re,{get fallback(){return e($e,{get value(){return re[t.key]},onInput:r=>{Ae(t.key,r.currentTarget.value)}})},get children(){return[e(B,{get when(){return t.type==="select"},get children(){return e(An,{get id(){return t.key},get defaultValue(){return re[t.key]},onChange:r=>Ae(t.key,r),get children(){return[e(Pn,{get children(){return[e(Dn,{get children(){return n("global.choose")}}),e(jn,{}),e(Hn,{})]}}),e(Vn,{get children(){return e(Nn,{get children(){return e(ue,{get each(){return xe(()=>typeof t.options=="function",!0)()?t.options():t.options},children:r=>e(Un,{value:r,get children(){return[e(Wn,{get children(){return n(`home.local_settings.${t.key}_options.${r}`)}}),e(qn,{})]}})})}})}})]}})}}),e(B,{get when(){return t.type==="boolean"},get children(){return e(Kn,{get defaultChecked(){return re[t.key]==="true"},onChange:r=>{Ae(t.key,r.currentTarget.checked.toString())}})}})]}})]}})}const po=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),o=_(),l=s=>{s==="local_settings"&&n()};return h.on("tool",l),k(()=>{h.off("tool",l)}),e(Bn,{get opened(){return t()},placement:"right",onClose:r,get children(){return[e(Mn,{}),e(On,{get children(){return[e(Fn,{}),e(Rn,{color:"$info9",get children(){return o("home.toolbar.local_settings")}}),e(Ln,{get children(){return[e(Y,{spacing:"$2",get children(){return e(ue,{get each(){return Tn.filter(s=>!s.hidden)},children:s=>e(fo,s)})}}),e(dt,{mt:"$4",get children(){return e(z,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[e(En,{}),e(In,{})]}})}})]}})]}})]}})},bo=fe(()=>pe(()=>import("./Upload.11c83a08.js"),["assets/Upload.11c83a08.js","assets/index.8fc1d184.js","assets/index.15d8d646.css","assets/index.2e8d55b7.js"])),wo=()=>[e(Qr,{}),e(Zr,{}),e(no,{}),e(to,{}),e(ro,{}),e(oo,{}),e(lo,{}),e(so,{}),e(uo,{}),e(ho,{}),e(Gr,{}),e(mo,{name:"upload",title:"home.toolbar.upload",get children(){return e(bo,{})}}),e(po,{})],_o=()=>e(Jn,{get children(){return[e(Yr,{}),e(Jr,{}),e(wo,{}),e(Gn,{})]}}),ko=()=>{Qn(ce("site_title"));const t=ce("announcement");return t&&I.render(()=>e(st,{children:t})),[e(Pr,{}),e(_o,{}),e(Sr,{}),e(Or,{})]},Oo=Object.freeze(Object.defineProperty({__proto__:null,default:ko},Symbol.toStringTag,{value:"Module"}));export{Mo as I,Oo as L,So as T,N as o,hr as u};
