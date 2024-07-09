!function(){function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return e};var e={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(O){s=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),u=new E(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(e.method=o,e.arg=i;;){var u=e.delegate;if(u){var a=x(u,e);if(a){if(a===h)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=l(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}(t,e,u),i}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(O){return{type:"throw",arg:O}}}e.wrap=f;var h={};function d(){}function y(){}function p(){}var v={};s(v,u,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(j([])));m&&m!==n&&o.call(m,u)&&(v=m);var w=p.prototype=d.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function _(r,e){function n(i,u,a,c){var s=l(r[i],r,u);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==t(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}}function x(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,x(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=l(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function L(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(o.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return y.prototype=p,s(w,"constructor",p),s(p,"constructor",y),y.displayName=s(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},b(_.prototype),s(_.prototype,a,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var u=new _(f(t,r,n,o),i);return e.isGeneratorFunction(r)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},b(w),s(w,c,"Generator"),s(w,u,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return u.type="throw",u.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],u=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var a=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(u)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;L(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:j(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},e}function e(t,r,e,n,o,i,u){try{var a=t[i](u),c=a.value}catch(s){return void e(s)}a.done?r(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var u=t.apply(r,n);function a(t){e(u,o,i,a,c,"next",t)}function c(t){e(u,o,i,a,c,"throw",t)}a(void 0)}))}}function o(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,o,i=[],u=!0,a=!1;try{for(e=e.call(t);!(u=(n=e.next()).done)&&(i.push(n.value),!r||i.length!==r);u=!0);}catch(c){a=!0,o=c}finally{try{u||null==e.return||e.return()}finally{if(a)throw o}}return i}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}System.register(["./index-legacy.1293434e.js","./useTitle-legacy.18fc3d58.js","./index-legacy.893dc85e.js","./SettingItem-legacy.b7801c42.js","./index-legacy.48074813.js","./index-legacy.d7a56406.js","./item_type-legacy.d1f1c701.js"],(function(t){"use strict";var e,i,u,a,c,s,f,l,h,d,y,p,v,g,m,w,b,_;return{setters:[function(t){e=t.a,i=t.m,u=t.aW,a=t.b9,c=t.bI,s=t.h,f=t.bP,l=t.d1,h=t.E,d=t.C,y=t.ba,p=t.n,v=t.I,g=t.ae,m=t.a8},function(t){w=t.b},function(t){b=t.G},function(t){_=t.I},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=e();w("manage.sidemenu.other");var x=o(i(""),2),k=x[0],L=x[1],E=o(i(""),2),j=E[0],S=E[1],O=o(i(""),2),I=O[0],A=O[1],C=o(i(""),2),G=C[0],$=C[1],N=o(i(""),2),P=N[0],q=N[1],T=o(i([]),2),F=T[0],Y=T[1],M=o(u((function(){return a.get("/admin/setting/list?groups=".concat(b.ARIA2,",").concat(b.SINGLE))})),2),R=M[0],U=M[1],W=o(u((function(){return a.post("/admin/setting/set_aria2",{uri:k(),secret:j()})})),2),z=W[0],B=W[1],D=o(u((function(){return a.post("/admin/setting/set_qbit",{url:I(),seedtime:G()})})),2),H=D[0],J=D[1],K=function(){var t=n(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U();case 2:e=t.sent,y(e,(function(t){var r,e,n,o,i;L((null===(r=t.find((function(t){return"aria2_uri"===t.key})))||void 0===r?void 0:r.value)||""),S((null===(e=t.find((function(t){return"aria2_secret"===t.key})))||void 0===e?void 0:e.value)||""),q((null===(n=t.find((function(t){return"token"===t.key})))||void 0===n?void 0:n.value)||""),A((null===(o=t.find((function(t){return"qbittorrent_url"===t.key})))||void 0===o?void 0:o.value)||""),$((null===(i=t.find((function(t){return"qbittorrent_seedtime"===t.key})))||void 0===i?void 0:i.value)||""),Y(t)}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();K();var Q=o(u((function(){return a.post("/admin/setting/reset_token")})),2),V=Q[0],X=Q[1],Z=c().copy;return s(m,{get loading(){return R()},get children(){return[s(f,{mb:"$2",get children(){return t("settings_other.aria2")}}),s(l,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[s(_,h((function(){return F().find((function(t){return"aria2_uri"===t.key}))}),{get value(){return k()},onChange:function(t){return L(t)}})),s(_,h((function(){return F().find((function(t){return"aria2_secret"===t.key}))}),{get value(){return j()},onChange:function(t){return S(t)}}))]}}),s(d,{my:"$2",get loading(){return z()},onClick:(o=n(r().mark((function e(){var n;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,B();case 2:n=r.sent,y(n,(function(r){p.success("".concat(t("settings_other.aria2_version")," ").concat(r))}));case 4:case"end":return r.stop()}}),e)}))),function(){return o.apply(this,arguments)}),get children(){return t("settings_other.set_aria2")}}),s(f,{my:"$2",get children(){return t("settings_other.qbittorrent")}}),s(l,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[s(_,h((function(){return F().find((function(t){return"qbittorrent_url"===t.key}))}),{get value(){return I()},onChange:function(t){return A(t)}})),s(_,h((function(){return F().find((function(t){return"qbittorrent_seedtime"===t.key}))}),{get value(){return G()},onChange:function(t){return $(t)}}))]}}),s(d,{my:"$2",get loading(){return H()},onClick:(e=n(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J();case 2:e=t.sent,y(e,(function(t){p.success(t)}));case 4:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)}),get children(){return t("settings_other.set_qbit")}}),s(f,{my:"$2",get children(){return t("settings.token")}}),s(v,{get value(){return P()},readOnly:!0}),s(g,{my:"$2",spacing:"$2",get children(){return[s(d,{onClick:function(){Z(P())},get children(){return t("settings_other.copy_token")}}),s(d,{colorScheme:"danger",get loading(){return V()},onClick:(e=n(r().mark((function e(){var n;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,X();case 2:n=r.sent,y(n,(function(r){p.success(t("settings_other.reset_token_success")),q(r)}));case 4:case"end":return r.stop()}}),e)}))),function(){return e.apply(this,arguments)}),get children(){return t("settings_other.reset_token")}})];var e}})];var e,o}})}))}}}))}();
