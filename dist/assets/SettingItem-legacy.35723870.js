!function(){function e(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}System.register(["./index-legacy.0367ebcb.js","./useT-legacy.5a66a6bb.js","./index-legacy.93704d29.js","./item_type-legacy.d1f1c701.js","./index-legacy.c319d182.js"],(function(n){"use strict";var r,t,u,l,i,c,a,o,g,d,f,h,b,v,y,s,p,O,k,m,w,j,C,x,T,D,E,R;return{setters:[function(e){r=e.e,t=e.k,u=e.aX,l=e.az,i=e.a7,c=e.Q,a=e.ac,o=e.R,g=e.I,d=e.bQ,f=e.T,h=e.bR,b=e.bS,v=e.bT,y=e.bU,s=e.bV,p=e.bW,O=e.bX,k=e.t,m=e.bY,w=e.bZ,j=e.b_,C=e.F,x=e.aZ},function(e){T=e.u},function(e){D=e.F},function(e){E=e.T},function(e){R=e.Q}],execute:function(){n("I",(function(n){var S=T();return r(x,{get w(){var e;return null!==(e=n.w)&&void 0!==e?e:"100%"},display:"flex",flexDirection:"column",get children(){return[r(t,{get when(){return!n.hideLabel},get children(){var c,a;return r(u,(c={},"for",(a={}).for=a.for||{},a.for.get=function(){return n.key},e(c,"display","flex"),e(c,"alignItems","center"),"children",a.children=a.children||{},a.children.get=function(){return[l((function(){return S("settings.".concat(n.key))})),r(t,{get when(){return n.flag===D.DEPRECATED},get children(){return r(i,{ml:"$2",as:R,boxSize:"$5",color:"$danger9",verticalAlign:"middle",cursor:"pointer",onClick:function(){var e;null===(e=n.onDelete)||void 0===e||e.call(n)}})}})]},function(e,n){for(var r in n)(l=n[r]).configurable=l.enumerable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,r,l);if(Object.getOwnPropertySymbols)for(var t=Object.getOwnPropertySymbols(n),u=0;u<t.length;u++){var l,i=t[u];(l=n[i]).configurable=l.enumerable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,i,l)}}(c,a),c))}}),r(c,{get fallback(){return r(a,{get children(){return S("settings_other.unknown_type")}})},get children(){return[r(o,{get when(){return[E.String,E.Number].includes(n.type)},get children(){return r(g,{get type(){return n.type===E.Number?"number":""},get id(){return n.key},get value(){return n.value},onInput:function(e){var r;return null===(r=n.onChange)||void 0===r?void 0:r.call(n,e.currentTarget.value)},get readOnly(){return n.flag===D.READONLY}})}}),r(o,{get when(){return n.type===E.Bool},get children(){return r(d,{get id(){return n.key},get defaultChecked(){return"true"===n.value},onChange:function(e){var r;return null===(r=n.onChange)||void 0===r?void 0:r.call(n,e.currentTarget.checked?"true":"false")},get readOnly(){return n.flag===D.READONLY}})}}),r(o,{get when(){return n.type===E.Text},get children(){return r(f,{get id(){return n.key},get value(){return n.value},onChange:function(e){var r;return null===(r=n.onChange)||void 0===r?void 0:r.call(n,e.currentTarget.value)},get readOnly(){return n.flag===D.READONLY}})}}),r(o,{get when(){return n.type===E.Select},get children(){return r(h,{get id(){return n.key},get defaultValue(){return n.value},onChange:function(e){var r;return null===(r=n.onChange)||void 0===r?void 0:r.call(n,e)},get readOnly(){return n.flag===D.READONLY},get children(){return[r(b,{get children(){return[r(v,{get children(){return S("global.choose")}}),r(y,{}),r(s,{})]}}),r(p,{get children(){return r(O,{get children(){return r(k,{get each(){var e;return null===(e=n.options)||void 0===e?void 0:e.split(",")},children:function(e){return r(m,{value:e,get children(){return[r(w,{get children(){return S("settings.".concat(n.key,"s.").concat(e))}}),r(j,{})]}})}})}})}})]}})}})]}}),r(C,{get children(){return l((function(){return!!n.help}),!0)()?S("settings.".concat(n.key,"-tips")):""}})]}})}))}}}))}();
