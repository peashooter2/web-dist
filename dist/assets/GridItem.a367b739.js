import{bI as v,h as r,al as w,l as d,ax as $,m as y,k as C,aM as a,b as M,a4 as S,L as m,az as O,dk as i,t as z,aO as P,aC as _,aw as b,S as g,av as A,b5 as E,ad as L}from"./index.8fc1d184.js";import{b as W}from"./Folder.540ebff9.js";import{u as D}from"./index.2e8d55b7.js";import{q as G}from"./index.86d8f602.js";import{I as H}from"./ImageWithError.52209ae3.js";import{g as K,O as f}from"./icon.6e695c7a.js";import{u as T,I as q,a as B}from"./helper.28946e83.js";const X=e=>{const{isHide:h}=v();if(h(e.obj))return null;const{setPathAs:j}=D(),l=r($,{get color(){return w()},get boxSize(){return`${parseInt(d.grid_item_size)-30}px`},get as(){return K(e.obj)}}),[x,s]=y(!1),k=C(()=>a()&&(x()||e.obj.selected)),{show:I}=W({id:1}),{pushHref:u,to:c}=M(),{isMouseSupported:n}=B(),o=T();return r(L.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return r(S,{get classList(){return{selected:!!e.obj.selected}},class:"grid-item viselect-item",get["data-index"](){return e.index},w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:m()}},as:G,get href(){return e.obj.name},get cursor(){return!n()&&(!a()||o())?"pointer":"default"},get bgColor(){return O(()=>!!e.obj.selected,!0)()?m():void 0},"on:dblclick":t=>{!n()||t.ctrlKey||t.metaKey||t.shiftKey||c(u(e.obj.name))},"on:click":t=>{if(n())return t.preventDefault();if(!!a()){if(t.preventDefault(),o()){c(u(e.obj.name));return}i(e.index,!e.obj.selected)}},onMouseEnter:()=>{s(!0),j(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{s(!1)},onContextMenu:t=>{z(()=>{P(!1),i(e.index,!0,!0)}),I(t,{props:e.obj})},get children(){return[r(_,{class:"item-thumbnail",get h(){return`${parseInt(d.grid_item_size)}px`},w:"$full","on:dblclick":t=>{!n()||e.obj.type===f.IMAGE&&(t.stopPropagation(),t.preventDefault(),b.emit("gallery",e.obj.name))},"on:click":t=>{n()||a()&&!o()||e.obj.type===f.IMAGE&&(t.stopPropagation(),t.preventDefault(),b.emit("gallery",e.obj.name))},pos:"relative",get children(){return[r(g,{get when(){return k()},get children(){return r(q,{pos:"absolute",left:"$1",top:"$1","on:click":t=>{t.stopPropagation()},get checked(){return e.obj.selected},onChange:t=>{i(e.index,t.target.checked)}})}}),r(g,{get when(){return e.obj.thumb},fallback:l,get children(){return r(H,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return r(A,{size:"lg"})},fallbackErr:l,get src(){return e.obj.thumb},loading:"lazy"})}})]}}),r(E,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return e.obj.name},get children(){return e.obj.name}})]}})}})};export{X as G};
