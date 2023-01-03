function g1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function y1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var es={},v1={get exports(){return es},set exports(t){es=t}},Wa={},_={},w1={get exports(){return _},set exports(t){_=t}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Os=Symbol.for("react.element"),E1=Symbol.for("react.portal"),S1=Symbol.for("react.fragment"),_1=Symbol.for("react.strict_mode"),T1=Symbol.for("react.profiler"),k1=Symbol.for("react.provider"),I1=Symbol.for("react.context"),C1=Symbol.for("react.forward_ref"),N1=Symbol.for("react.suspense"),R1=Symbol.for("react.memo"),A1=Symbol.for("react.lazy"),yf=Symbol.iterator;function D1(t){return t===null||typeof t!="object"?null:(t=yf&&t[yf]||t["@@iterator"],typeof t=="function"?t:null)}var rg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ig=Object.assign,sg={};function li(t,e,n){this.props=t,this.context=e,this.refs=sg,this.updater=n||rg}li.prototype.isReactComponent={};li.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};li.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function og(){}og.prototype=li.prototype;function wh(t,e,n){this.props=t,this.context=e,this.refs=sg,this.updater=n||rg}var Eh=wh.prototype=new og;Eh.constructor=wh;ig(Eh,li.prototype);Eh.isPureReactComponent=!0;var vf=Array.isArray,ag=Object.prototype.hasOwnProperty,Sh={current:null},lg={key:!0,ref:!0,__self:!0,__source:!0};function ug(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ag.call(e,r)&&!lg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Os,type:t,key:s,ref:o,props:i,_owner:Sh.current}}function x1(t,e){return{$$typeof:Os,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _h(t){return typeof t=="object"&&t!==null&&t.$$typeof===Os}function P1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wf=/\/+/g;function Hl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?P1(""+t.key):e.toString(36)}function Lo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Os:case E1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Hl(o,0):r,vf(i)?(n="",t!=null&&(n=t.replace(wf,"$&/")+"/"),Lo(i,e,n,"",function(u){return u})):i!=null&&(_h(i)&&(i=x1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(wf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",vf(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Hl(s,a);o+=Lo(s,e,n,l,i)}else if(l=D1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Hl(s,a++),o+=Lo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function uo(t,e,n){if(t==null)return t;var r=[],i=0;return Lo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function O1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ke={current:null},Mo={transition:null},L1={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:Mo,ReactCurrentOwner:Sh};H.Children={map:uo,forEach:function(t,e,n){uo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return uo(t,function(){e++}),e},toArray:function(t){return uo(t,function(e){return e})||[]},only:function(t){if(!_h(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=li;H.Fragment=S1;H.Profiler=T1;H.PureComponent=wh;H.StrictMode=_1;H.Suspense=N1;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L1;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ig({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ag.call(e,l)&&!lg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Os,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t){return t={$$typeof:I1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:k1,_context:t},t.Consumer=t};H.createElement=ug;H.createFactory=function(t){var e=ug.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:C1,render:t}};H.isValidElement=_h;H.lazy=function(t){return{$$typeof:A1,_payload:{_status:-1,_result:t},_init:O1}};H.memo=function(t,e){return{$$typeof:R1,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=Mo.transition;Mo.transition={};try{t()}finally{Mo.transition=e}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(t,e){return Ke.current.useCallback(t,e)};H.useContext=function(t){return Ke.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return Ke.current.useDeferredValue(t)};H.useEffect=function(t,e){return Ke.current.useEffect(t,e)};H.useId=function(){return Ke.current.useId()};H.useImperativeHandle=function(t,e,n){return Ke.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return Ke.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return Ke.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return Ke.current.useMemo(t,e)};H.useReducer=function(t,e,n){return Ke.current.useReducer(t,e,n)};H.useRef=function(t){return Ke.current.useRef(t)};H.useState=function(t){return Ke.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return Ke.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return Ke.current.useTransition()};H.version="18.2.0";(function(t){t.exports=H})(w1);const cg=y1(_),Vu=g1({__proto__:null,default:cg},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M1=_,$1=Symbol.for("react.element"),U1=Symbol.for("react.fragment"),F1=Object.prototype.hasOwnProperty,b1=M1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V1={key:!0,ref:!0,__self:!0,__source:!0};function hg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)F1.call(e,r)&&!V1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:$1,type:t,key:s,ref:o,props:i,_owner:b1.current}}Wa.Fragment=U1;Wa.jsx=hg;Wa.jsxs=hg;(function(t){t.exports=Wa})(v1);const Bu=es.Fragment,C=es.jsx,de=es.jsxs;/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zo(){return Zo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Zo.apply(this,arguments)}var dn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(dn||(dn={}));const Ef="popstate";function B1(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=fr(i.location.hash.substr(1));return zu("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:ts(s))}function r(i,s){z1(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return W1(e,n,r,t)}function Ee(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function z1(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function j1(){return Math.random().toString(36).substr(2,8)}function Sf(t){return{usr:t.state,key:t.key}}function zu(t,e,n,r){return n===void 0&&(n=null),Zo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?fr(e):e,{state:n,key:e&&e.key||r||j1()})}function ts(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function fr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function H1(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof t=="string"?t:ts(t);return Ee(e,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,e)}function W1(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=dn.Pop,l=null;function u(){a=dn.Pop,l&&l({action:a,location:d.location})}function c(g,y){a=dn.Push;let v=zu(d.location,g,y);n&&n(v,g);let P=Sf(v),p=d.createHref(v);try{o.pushState(P,"",p)}catch{i.location.assign(p)}s&&l&&l({action:a,location:d.location})}function h(g,y){a=dn.Replace;let v=zu(d.location,g,y);n&&n(v,g);let P=Sf(v),p=d.createHref(v);o.replaceState(P,"",p),s&&l&&l({action:a,location:d.location})}let d={get action(){return a},get location(){return t(i,o)},listen(g){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ef,u),l=g,()=>{i.removeEventListener(Ef,u),l=null}},createHref(g){return e(i,g)},encodeLocation(g){let y=H1(typeof g=="string"?g:ts(g));return{pathname:y.pathname,search:y.search,hash:y.hash}},push:c,replace:h,go(g){return o.go(g)}};return d}var _f;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(_f||(_f={}));function q1(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?fr(e):e,i=pg(r.pathname||"/",n);if(i==null)return null;let s=dg(t);K1(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=nE(s[a],sE(i));return o}function dg(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ee(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=mn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ee(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),dg(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:eE(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of fg(s.path))i(s,o,l)}),e}function fg(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=fg(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function K1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:tE(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const G1=/^:\w+$/,Q1=3,Y1=2,X1=1,J1=10,Z1=-2,Tf=t=>t==="*";function eE(t,e){let n=t.split("/"),r=n.length;return n.some(Tf)&&(r+=Z1),e&&(r+=Y1),n.filter(i=>!Tf(i)).reduce((i,s)=>i+(G1.test(s)?Q1:s===""?X1:J1),r)}function tE(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function nE(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=rE({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:mn([i,c.pathname]),pathnameBase:uE(mn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=mn([i,c.pathnameBase]))}return s}function rE(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=iE(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=oE(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function iE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Th(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function sE(t){try{return decodeURI(t)}catch(e){return Th(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function oE(t,e){try{return decodeURIComponent(t)}catch(n){return Th(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function pg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Th(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function aE(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?fr(t):t;return{pathname:n?n.startsWith("/")?n:lE(n,e):e,search:cE(r),hash:hE(i)}}function lE(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Wl(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mg(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function gg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=fr(t):(i=Zo({},t),Ee(!i.pathname||!i.pathname.includes("?"),Wl("?","pathname","search",i)),Ee(!i.pathname||!i.pathname.includes("#"),Wl("#","pathname","hash",i)),Ee(!i.search||!i.search.includes("#"),Wl("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=aE(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const mn=t=>t.join("/").replace(/\/\/+/g,"/"),uE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),cE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,hE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class dE{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function fE(t){return t instanceof dE}const pE=["post","put","patch","delete"];[...pE];/**
 * React Router v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ju(){return ju=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ju.apply(this,arguments)}function mE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const gE=typeof Object.is=="function"?Object.is:mE,{useState:yE,useEffect:vE,useLayoutEffect:wE,useDebugValue:EE}=Vu;function SE(t,e,n){const r=e(),[{inst:i},s]=yE({inst:{value:r,getSnapshot:e}});return wE(()=>{i.value=r,i.getSnapshot=e,ql(i)&&s({inst:i})},[t,r,e]),vE(()=>(ql(i)&&s({inst:i}),t(()=>{ql(i)&&s({inst:i})})),[t]),EE(r),r}function ql(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!gE(n,r)}catch{return!0}}function _E(t,e,n){return e()}const TE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kE=!TE,IE=kE?_E:SE;"useSyncExternalStore"in Vu&&(t=>t.useSyncExternalStore)(Vu);const CE=_.createContext(null),NE=_.createContext(null),yg=_.createContext(null),qa=_.createContext(null),Ka=_.createContext(null),pr=_.createContext({outlet:null,matches:[]}),vg=_.createContext(null);function RE(t,e){let{relative:n}=e===void 0?{}:e;Ls()||Ee(!1);let{basename:r,navigator:i}=_.useContext(qa),{hash:s,pathname:o,search:a}=wg(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:mn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ls(){return _.useContext(Ka)!=null}function Ga(){return Ls()||Ee(!1),_.useContext(Ka).location}function kh(){Ls()||Ee(!1);let{basename:t,navigator:e}=_.useContext(qa),{matches:n}=_.useContext(pr),{pathname:r}=Ga(),i=JSON.stringify(mg(n).map(a=>a.pathnameBase)),s=_.useRef(!1);return _.useEffect(()=>{s.current=!0}),_.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=gg(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:mn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function AE(){let{matches:t}=_.useContext(pr),e=t[t.length-1];return e?e.params:{}}function wg(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=_.useContext(pr),{pathname:i}=Ga(),s=JSON.stringify(mg(r).map(o=>o.pathnameBase));return _.useMemo(()=>gg(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function DE(t,e){Ls()||Ee(!1);let{navigator:n}=_.useContext(qa),r=_.useContext(yg),{matches:i}=_.useContext(pr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Ga(),u;if(e){var c;let v=typeof e=="string"?fr(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||Ee(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",g=q1(t,{pathname:d}),y=LE(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:mn([a,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:mn([a,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return e&&y?_.createElement(Ka.Provider,{value:{location:ju({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:dn.Pop}},y):y}function xE(){let t=FE(),e=fE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unhandled Thrown Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},e),n?_.createElement("pre",{style:i},n):null,_.createElement("p",null,"💿 Hey developer 👋"),_.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",_.createElement("code",{style:s},"errorElement")," props on ",_.createElement("code",{style:s},"<Route>")))}class PE extends _.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?_.createElement(pr.Provider,{value:this.props.routeContext},_.createElement(vg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function OE(t){let{routeContext:e,match:n,children:r}=t,i=_.useContext(CE);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),_.createElement(pr.Provider,{value:e},r)}function LE(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Ee(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||_.createElement(xE,null):null,c=e.concat(r.slice(0,a+1)),h=()=>_.createElement(OE,{match:o,routeContext:{outlet:s,matches:c}},l?u:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||a===0)?_.createElement(PE,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var kf;(function(t){t.UseRevalidator="useRevalidator"})(kf||(kf={}));var ea;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(ea||(ea={}));function ME(t){let e=_.useContext(yg);return e||Ee(!1),e}function $E(t){let e=_.useContext(pr);return e||Ee(!1),e}function UE(t){let e=$E(),n=e.matches[e.matches.length-1];return n.route.id||Ee(!1),n.route.id}function FE(){var t;let e=_.useContext(vg),n=ME(ea.UseRouteError),r=UE(ea.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Ri(t){Ee(!1)}function bE(t){let{basename:e="/",children:n=null,location:r,navigationType:i=dn.Pop,navigator:s,static:o=!1}=t;Ls()&&Ee(!1);let a=e.replace(/^\/*/,"/"),l=_.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=fr(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:g="default"}=r,y=_.useMemo(()=>{let v=pg(u,a);return v==null?null:{pathname:v,search:c,hash:h,state:d,key:g}},[a,u,c,h,d,g]);return y==null?null:_.createElement(qa.Provider,{value:l},_.createElement(Ka.Provider,{children:n,value:{location:y,navigationType:i}}))}function VE(t){let{children:e,location:n}=t,r=_.useContext(NE),i=r&&!e?r.router.routes:Hu(e);return DE(i,n)}var If;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(If||(If={}));new Promise(()=>{});function Hu(t,e){e===void 0&&(e=[]);let n=[];return _.Children.forEach(t,(r,i)=>{if(!_.isValidElement(r))return;if(r.type===_.Fragment){n.push.apply(n,Hu(r.props.children,e));return}r.type!==Ri&&Ee(!1),!r.props.index||!r.props.children||Ee(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Hu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wu(){return Wu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wu.apply(this,arguments)}function BE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function zE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function jE(t,e){return t.button===0&&(!e||e==="_self")&&!zE(t)}const HE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function WE(t){let{basename:e,children:n,window:r}=t,i=_.useRef();i.current==null&&(i.current=B1({window:r,v5Compat:!0}));let s=i.current,[o,a]=_.useState({action:s.action,location:s.location});return _.useLayoutEffect(()=>s.listen(a),[s]),_.createElement(bE,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const qu=_.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=BE(e,HE),d=RE(u,{relative:i}),g=qE(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function y(v){r&&r(v),v.defaultPrevented||g(v)}return _.createElement("a",Wu({},h,{href:d,onClick:s?r:y,ref:n,target:l}))});var Cf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Cf||(Cf={}));var Nf;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Nf||(Nf={}));function qE(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=kh(),l=Ga(),u=wg(t,{relative:o});return _.useCallback(c=>{if(jE(c,n)){c.preventDefault();let h=r!==void 0?r:ts(l)===ts(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var Ku={},Gu={},KE={get exports(){return Gu},set exports(t){Gu=t}},at={},Qu={},GE={get exports(){return Qu},set exports(t){Qu=t}},Eg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,V){var z=R.length;R.push(V);e:for(;0<z;){var ce=z-1>>>1,_e=R[ce];if(0<i(_e,V))R[ce]=V,R[z]=_e,z=ce;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var V=R[0],z=R.pop();if(z!==V){R[0]=z;e:for(var ce=0,_e=R.length,ao=_e>>>1;ce<ao;){var bn=2*(ce+1)-1,jl=R[bn],Vn=bn+1,lo=R[Vn];if(0>i(jl,z))Vn<_e&&0>i(lo,jl)?(R[ce]=lo,R[Vn]=z,ce=Vn):(R[ce]=jl,R[bn]=z,ce=bn);else if(Vn<_e&&0>i(lo,z))R[ce]=lo,R[Vn]=z,ce=Vn;else break e}}return V}function i(R,V){var z=R.sortIndex-V.sortIndex;return z!==0?z:R.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,y=!1,v=!1,P=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=R)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function w(R){if(v=!1,m(R),!y)if(n(l)!==null)y=!0,Bl(I);else{var V=n(u);V!==null&&zl(w,V.startTime-R)}}function I(R,V){y=!1,v&&(v=!1,p(O),O=-1),g=!0;var z=d;try{for(m(V),h=n(l);h!==null&&(!(h.expirationTime>V)||R&&!mt());){var ce=h.callback;if(typeof ce=="function"){h.callback=null,d=h.priorityLevel;var _e=ce(h.expirationTime<=V);V=t.unstable_now(),typeof _e=="function"?h.callback=_e:h===n(l)&&r(l),m(V)}else r(l);h=n(l)}if(h!==null)var ao=!0;else{var bn=n(u);bn!==null&&zl(w,bn.startTime-V),ao=!1}return ao}finally{h=null,d=z,g=!1}}var A=!1,D=null,O=-1,Z=5,j=-1;function mt(){return!(t.unstable_now()-j<Z)}function yi(){if(D!==null){var R=t.unstable_now();j=R;var V=!0;try{V=D(!0,R)}finally{V?vi():(A=!1,D=null)}}else A=!1}var vi;if(typeof f=="function")vi=function(){f(yi)};else if(typeof MessageChannel<"u"){var gf=new MessageChannel,m1=gf.port2;gf.port1.onmessage=yi,vi=function(){m1.postMessage(null)}}else vi=function(){P(yi,0)};function Bl(R){D=R,A||(A=!0,vi())}function zl(R,V){O=P(function(){R(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,Bl(I))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var z=d;d=V;try{return R()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,V){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var z=d;d=R;try{return V()}finally{d=z}},t.unstable_scheduleCallback=function(R,V,z){var ce=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ce+z:ce):z=ce,R){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=z+_e,R={id:c++,callback:V,priorityLevel:R,startTime:z,expirationTime:_e,sortIndex:-1},z>ce?(R.sortIndex=z,e(u,R),n(l)===null&&R===n(u)&&(v?(p(O),O=-1):v=!0,zl(w,z-ce))):(R.sortIndex=_e,e(l,R),y||g||(y=!0,Bl(I))),R},t.unstable_shouldYield=mt,t.unstable_wrapCallback=function(R){var V=d;return function(){var z=d;d=V;try{return R.apply(this,arguments)}finally{d=z}}}})(Eg);(function(t){t.exports=Eg})(GE);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg=_,st=Qu;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _g=new Set,ns={};function mr(t,e){qr(t,e),qr(t+"Capture",e)}function qr(t,e){for(ns[t]=e,t=0;t<e.length;t++)_g.add(e[t])}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yu=Object.prototype.hasOwnProperty,QE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rf={},Af={};function YE(t){return Yu.call(Af,t)?!0:Yu.call(Rf,t)?!1:QE.test(t)?Af[t]=!0:(Rf[t]=!0,!1)}function XE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function JE(t,e,n,r){if(e===null||typeof e>"u"||XE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ge(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pe[t]=new Ge(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pe[e]=new Ge(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pe[t]=new Ge(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pe[t]=new Ge(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pe[t]=new Ge(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pe[t]=new Ge(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pe[t]=new Ge(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pe[t]=new Ge(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pe[t]=new Ge(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ih=/[\-:]([a-z])/g;function Ch(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ih,Ch);Pe[e]=new Ge(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ih,Ch);Pe[e]=new Ge(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ih,Ch);Pe[e]=new Ge(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pe[t]=new Ge(t,1,!1,t.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pe[t]=new Ge(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nh(t,e,n,r){var i=Pe.hasOwnProperty(e)?Pe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(JE(e,n,i,r)&&(n=null),r||i===null?YE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Zt=Sg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,co=Symbol.for("react.element"),Sr=Symbol.for("react.portal"),_r=Symbol.for("react.fragment"),Rh=Symbol.for("react.strict_mode"),Xu=Symbol.for("react.profiler"),Tg=Symbol.for("react.provider"),kg=Symbol.for("react.context"),Ah=Symbol.for("react.forward_ref"),Ju=Symbol.for("react.suspense"),Zu=Symbol.for("react.suspense_list"),Dh=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),Ig=Symbol.for("react.offscreen"),Df=Symbol.iterator;function wi(t){return t===null||typeof t!="object"?null:(t=Df&&t[Df]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,Kl;function Ai(t){if(Kl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Kl=e&&e[1]||""}return`
`+Kl+t}var Gl=!1;function Ql(t,e){if(!t||Gl)return"";Gl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Gl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ai(t):""}function ZE(t){switch(t.tag){case 5:return Ai(t.type);case 16:return Ai("Lazy");case 13:return Ai("Suspense");case 19:return Ai("SuspenseList");case 0:case 2:case 15:return t=Ql(t.type,!1),t;case 11:return t=Ql(t.type.render,!1),t;case 1:return t=Ql(t.type,!0),t;default:return""}}function ec(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _r:return"Fragment";case Sr:return"Portal";case Xu:return"Profiler";case Rh:return"StrictMode";case Ju:return"Suspense";case Zu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case kg:return(t.displayName||"Context")+".Consumer";case Tg:return(t._context.displayName||"Context")+".Provider";case Ah:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dh:return e=t.displayName||null,e!==null?e:ec(t.type)||"Memo";case rn:e=t._payload,t=t._init;try{return ec(t(e))}catch{}}return null}function eS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ec(e);case 8:return e===Rh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function An(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Cg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tS(t){var e=Cg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ho(t){t._valueTracker||(t._valueTracker=tS(t))}function Ng(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Cg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ta(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function tc(t,e){var n=e.checked;return ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=An(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Rg(t,e){e=e.checked,e!=null&&Nh(t,"checked",e,!1)}function nc(t,e){Rg(t,e);var n=An(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?rc(t,e.type,n):e.hasOwnProperty("defaultValue")&&rc(t,e.type,An(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Pf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function rc(t,e,n){(e!=="number"||ta(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Di=Array.isArray;function Mr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+An(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ic(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Of(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Di(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:An(n)}}function Ag(t,e){var n=An(e.value),r=An(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Lf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Dg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Dg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fo,xg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fo=fo||document.createElement("div"),fo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function rs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nS=["Webkit","ms","Moz","O"];Object.keys(bi).forEach(function(t){nS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),bi[e]=bi[t]})});function Pg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||bi.hasOwnProperty(t)&&bi[t]?(""+e).trim():e+"px"}function Og(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Pg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var rS=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oc(t,e){if(e){if(rS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function ac(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lc=null;function xh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uc=null,$r=null,Ur=null;function Mf(t){if(t=Us(t)){if(typeof uc!="function")throw Error(S(280));var e=t.stateNode;e&&(e=Za(e),uc(t.stateNode,t.type,e))}}function Lg(t){$r?Ur?Ur.push(t):Ur=[t]:$r=t}function Mg(){if($r){var t=$r,e=Ur;if(Ur=$r=null,Mf(t),e)for(t=0;t<e.length;t++)Mf(e[t])}}function $g(t,e){return t(e)}function Ug(){}var Yl=!1;function Fg(t,e,n){if(Yl)return t(e,n);Yl=!0;try{return $g(t,e,n)}finally{Yl=!1,($r!==null||Ur!==null)&&(Ug(),Mg())}}function is(t,e){var n=t.stateNode;if(n===null)return null;var r=Za(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var cc=!1;if(Wt)try{var Ei={};Object.defineProperty(Ei,"passive",{get:function(){cc=!0}}),window.addEventListener("test",Ei,Ei),window.removeEventListener("test",Ei,Ei)}catch{cc=!1}function iS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Vi=!1,na=null,ra=!1,hc=null,sS={onError:function(t){Vi=!0,na=t}};function oS(t,e,n,r,i,s,o,a,l){Vi=!1,na=null,iS.apply(sS,arguments)}function aS(t,e,n,r,i,s,o,a,l){if(oS.apply(this,arguments),Vi){if(Vi){var u=na;Vi=!1,na=null}else throw Error(S(198));ra||(ra=!0,hc=u)}}function gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function bg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $f(t){if(gr(t)!==t)throw Error(S(188))}function lS(t){var e=t.alternate;if(!e){if(e=gr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return $f(i),t;if(s===r)return $f(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function Vg(t){return t=lS(t),t!==null?Bg(t):null}function Bg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Bg(t);if(e!==null)return e;t=t.sibling}return null}var zg=st.unstable_scheduleCallback,Uf=st.unstable_cancelCallback,uS=st.unstable_shouldYield,cS=st.unstable_requestPaint,he=st.unstable_now,hS=st.unstable_getCurrentPriorityLevel,Ph=st.unstable_ImmediatePriority,jg=st.unstable_UserBlockingPriority,ia=st.unstable_NormalPriority,dS=st.unstable_LowPriority,Hg=st.unstable_IdlePriority,Qa=null,Dt=null;function fS(t){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(Qa,t,void 0,(t.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:gS,pS=Math.log,mS=Math.LN2;function gS(t){return t>>>=0,t===0?32:31-(pS(t)/mS|0)|0}var po=64,mo=4194304;function xi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=xi(a):(s&=o,s!==0&&(r=xi(s)))}else o=n&~i,o!==0?r=xi(o):s!==0&&(r=xi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Et(e),i=1<<n,r|=t[n],e&=~i;return r}function yS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Et(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=yS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function dc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Wg(){var t=po;return po<<=1,!(po&4194240)&&(po=64),t}function Xl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ms(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Et(e),t[e]=n}function wS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Et(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Oh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Et(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var X=0;function qg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Kg,Lh,Gg,Qg,Yg,fc=!1,go=[],gn=null,yn=null,vn=null,ss=new Map,os=new Map,on=[],ES="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ff(t,e){switch(t){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":ss.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":os.delete(e.pointerId)}}function Si(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Us(e),e!==null&&Lh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function SS(t,e,n,r,i){switch(e){case"focusin":return gn=Si(gn,t,e,n,r,i),!0;case"dragenter":return yn=Si(yn,t,e,n,r,i),!0;case"mouseover":return vn=Si(vn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ss.set(s,Si(ss.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,os.set(s,Si(os.get(s)||null,t,e,n,r,i)),!0}return!1}function Xg(t){var e=Hn(t.target);if(e!==null){var n=gr(e);if(n!==null){if(e=n.tag,e===13){if(e=bg(n),e!==null){t.blockedOn=e,Yg(t.priority,function(){Gg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $o(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=pc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);lc=r,n.target.dispatchEvent(r),lc=null}else return e=Us(n),e!==null&&Lh(e),t.blockedOn=n,!1;e.shift()}return!0}function bf(t,e,n){$o(t)&&n.delete(e)}function _S(){fc=!1,gn!==null&&$o(gn)&&(gn=null),yn!==null&&$o(yn)&&(yn=null),vn!==null&&$o(vn)&&(vn=null),ss.forEach(bf),os.forEach(bf)}function _i(t,e){t.blockedOn===e&&(t.blockedOn=null,fc||(fc=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,_S)))}function as(t){function e(i){return _i(i,t)}if(0<go.length){_i(go[0],t);for(var n=1;n<go.length;n++){var r=go[n];r.blockedOn===t&&(r.blockedOn=null)}}for(gn!==null&&_i(gn,t),yn!==null&&_i(yn,t),vn!==null&&_i(vn,t),ss.forEach(e),os.forEach(e),n=0;n<on.length;n++)r=on[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<on.length&&(n=on[0],n.blockedOn===null);)Xg(n),n.blockedOn===null&&on.shift()}var Fr=Zt.ReactCurrentBatchConfig,oa=!0;function TS(t,e,n,r){var i=X,s=Fr.transition;Fr.transition=null;try{X=1,Mh(t,e,n,r)}finally{X=i,Fr.transition=s}}function kS(t,e,n,r){var i=X,s=Fr.transition;Fr.transition=null;try{X=4,Mh(t,e,n,r)}finally{X=i,Fr.transition=s}}function Mh(t,e,n,r){if(oa){var i=pc(t,e,n,r);if(i===null)au(t,e,r,aa,n),Ff(t,r);else if(SS(i,t,e,n,r))r.stopPropagation();else if(Ff(t,r),e&4&&-1<ES.indexOf(t)){for(;i!==null;){var s=Us(i);if(s!==null&&Kg(s),s=pc(t,e,n,r),s===null&&au(t,e,r,aa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else au(t,e,r,null,n)}}var aa=null;function pc(t,e,n,r){if(aa=null,t=xh(r),t=Hn(t),t!==null)if(e=gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=bg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return aa=t,null}function Jg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hS()){case Ph:return 1;case jg:return 4;case ia:case dS:return 16;case Hg:return 536870912;default:return 16}default:return 16}}var fn=null,$h=null,Uo=null;function Zg(){if(Uo)return Uo;var t,e=$h,n=e.length,r,i="value"in fn?fn.value:fn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Uo=i.slice(t,1<r?1-r:void 0)}function Fo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yo(){return!0}function Vf(){return!1}function lt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yo:Vf,this.isPropagationStopped=Vf,this}return ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yo)},persist:function(){},isPersistent:yo}),e}var ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uh=lt(ui),$s=ae({},ui,{view:0,detail:0}),IS=lt($s),Jl,Zl,Ti,Ya=ae({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ti&&(Ti&&t.type==="mousemove"?(Jl=t.screenX-Ti.screenX,Zl=t.screenY-Ti.screenY):Zl=Jl=0,Ti=t),Jl)},movementY:function(t){return"movementY"in t?t.movementY:Zl}}),Bf=lt(Ya),CS=ae({},Ya,{dataTransfer:0}),NS=lt(CS),RS=ae({},$s,{relatedTarget:0}),eu=lt(RS),AS=ae({},ui,{animationName:0,elapsedTime:0,pseudoElement:0}),DS=lt(AS),xS=ae({},ui,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),PS=lt(xS),OS=ae({},ui,{data:0}),zf=lt(OS),LS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},MS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$S={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function US(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$S[t])?!!e[t]:!1}function Fh(){return US}var FS=ae({},$s,{key:function(t){if(t.key){var e=LS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?MS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fh,charCode:function(t){return t.type==="keypress"?Fo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bS=lt(FS),VS=ae({},Ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jf=lt(VS),BS=ae({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fh}),zS=lt(BS),jS=ae({},ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),HS=lt(jS),WS=ae({},Ya,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qS=lt(WS),KS=[9,13,27,32],bh=Wt&&"CompositionEvent"in window,Bi=null;Wt&&"documentMode"in document&&(Bi=document.documentMode);var GS=Wt&&"TextEvent"in window&&!Bi,ey=Wt&&(!bh||Bi&&8<Bi&&11>=Bi),Hf=String.fromCharCode(32),Wf=!1;function ty(t,e){switch(t){case"keyup":return KS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ny(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Tr=!1;function QS(t,e){switch(t){case"compositionend":return ny(e);case"keypress":return e.which!==32?null:(Wf=!0,Hf);case"textInput":return t=e.data,t===Hf&&Wf?null:t;default:return null}}function YS(t,e){if(Tr)return t==="compositionend"||!bh&&ty(t,e)?(t=Zg(),Uo=$h=fn=null,Tr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ey&&e.locale!=="ko"?null:e.data;default:return null}}var XS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!XS[t.type]:e==="textarea"}function ry(t,e,n,r){Lg(r),e=la(e,"onChange"),0<e.length&&(n=new Uh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var zi=null,ls=null;function JS(t){py(t,0)}function Xa(t){var e=Cr(t);if(Ng(e))return t}function ZS(t,e){if(t==="change")return e}var iy=!1;if(Wt){var tu;if(Wt){var nu="oninput"in document;if(!nu){var Kf=document.createElement("div");Kf.setAttribute("oninput","return;"),nu=typeof Kf.oninput=="function"}tu=nu}else tu=!1;iy=tu&&(!document.documentMode||9<document.documentMode)}function Gf(){zi&&(zi.detachEvent("onpropertychange",sy),ls=zi=null)}function sy(t){if(t.propertyName==="value"&&Xa(ls)){var e=[];ry(e,ls,t,xh(t)),Fg(JS,e)}}function e_(t,e,n){t==="focusin"?(Gf(),zi=e,ls=n,zi.attachEvent("onpropertychange",sy)):t==="focusout"&&Gf()}function t_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xa(ls)}function n_(t,e){if(t==="click")return Xa(e)}function r_(t,e){if(t==="input"||t==="change")return Xa(e)}function i_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _t=typeof Object.is=="function"?Object.is:i_;function us(t,e){if(_t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yu.call(e,i)||!_t(t[i],e[i]))return!1}return!0}function Qf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yf(t,e){var n=Qf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qf(n)}}function oy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?oy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ay(){for(var t=window,e=ta();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ta(t.document)}return e}function Vh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function s_(t){var e=ay(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&oy(n.ownerDocument.documentElement,n)){if(r!==null&&Vh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Yf(n,s);var o=Yf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var o_=Wt&&"documentMode"in document&&11>=document.documentMode,kr=null,mc=null,ji=null,gc=!1;function Xf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gc||kr==null||kr!==ta(r)||(r=kr,"selectionStart"in r&&Vh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ji&&us(ji,r)||(ji=r,r=la(mc,"onSelect"),0<r.length&&(e=new Uh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=kr)))}function vo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ir={animationend:vo("Animation","AnimationEnd"),animationiteration:vo("Animation","AnimationIteration"),animationstart:vo("Animation","AnimationStart"),transitionend:vo("Transition","TransitionEnd")},ru={},ly={};Wt&&(ly=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function Ja(t){if(ru[t])return ru[t];if(!Ir[t])return t;var e=Ir[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ly)return ru[t]=e[n];return t}var uy=Ja("animationend"),cy=Ja("animationiteration"),hy=Ja("animationstart"),dy=Ja("transitionend"),fy=new Map,Jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(t,e){fy.set(t,e),mr(e,[t])}for(var iu=0;iu<Jf.length;iu++){var su=Jf[iu],a_=su.toLowerCase(),l_=su[0].toUpperCase()+su.slice(1);Ln(a_,"on"+l_)}Ln(uy,"onAnimationEnd");Ln(cy,"onAnimationIteration");Ln(hy,"onAnimationStart");Ln("dblclick","onDoubleClick");Ln("focusin","onFocus");Ln("focusout","onBlur");Ln(dy,"onTransitionEnd");qr("onMouseEnter",["mouseout","mouseover"]);qr("onMouseLeave",["mouseout","mouseover"]);qr("onPointerEnter",["pointerout","pointerover"]);qr("onPointerLeave",["pointerout","pointerover"]);mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pi));function Zf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,aS(r,e,void 0,t),t.currentTarget=null}function py(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Zf(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Zf(i,a,u),s=l}}}if(ra)throw t=hc,ra=!1,hc=null,t}function ee(t,e){var n=e[Sc];n===void 0&&(n=e[Sc]=new Set);var r=t+"__bubble";n.has(r)||(my(e,t,2,!1),n.add(r))}function ou(t,e,n){var r=0;e&&(r|=4),my(n,t,r,e)}var wo="_reactListening"+Math.random().toString(36).slice(2);function cs(t){if(!t[wo]){t[wo]=!0,_g.forEach(function(n){n!=="selectionchange"&&(u_.has(n)||ou(n,!1,t),ou(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wo]||(e[wo]=!0,ou("selectionchange",!1,e))}}function my(t,e,n,r){switch(Jg(e)){case 1:var i=TS;break;case 4:i=kS;break;default:i=Mh}n=i.bind(null,e,n,t),i=void 0,!cc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function au(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Hn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Fg(function(){var u=s,c=xh(n),h=[];e:{var d=fy.get(t);if(d!==void 0){var g=Uh,y=t;switch(t){case"keypress":if(Fo(n)===0)break e;case"keydown":case"keyup":g=bS;break;case"focusin":y="focus",g=eu;break;case"focusout":y="blur",g=eu;break;case"beforeblur":case"afterblur":g=eu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=NS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=zS;break;case uy:case cy:case hy:g=DS;break;case dy:g=HS;break;case"scroll":g=IS;break;case"wheel":g=qS;break;case"copy":case"cut":case"paste":g=PS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=jf}var v=(e&4)!==0,P=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=is(f,p),w!=null&&v.push(hs(f,w,m)))),P)break;f=f.return}0<v.length&&(d=new g(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==lc&&(y=n.relatedTarget||n.fromElement)&&(Hn(y)||y[qt]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Hn(y):null,y!==null&&(P=gr(y),y!==P||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=Bf,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=jf,w="onPointerLeave",p="onPointerEnter",f="pointer"),P=g==null?d:Cr(g),m=y==null?d:Cr(y),d=new v(w,f+"leave",g,n,c),d.target=P,d.relatedTarget=m,w=null,Hn(c)===u&&(v=new v(p,f+"enter",y,n,c),v.target=m,v.relatedTarget=P,w=v),P=w,g&&y)t:{for(v=g,p=y,f=0,m=v;m;m=vr(m))f++;for(m=0,w=p;w;w=vr(w))m++;for(;0<f-m;)v=vr(v),f--;for(;0<m-f;)p=vr(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=vr(v),p=vr(p)}v=null}else v=null;g!==null&&ep(h,d,g,v,!1),y!==null&&P!==null&&ep(h,P,y,v,!0)}}e:{if(d=u?Cr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var I=ZS;else if(qf(d))if(iy)I=r_;else{I=t_;var A=e_}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=n_);if(I&&(I=I(t,u))){ry(h,I,n,c);break e}A&&A(t,d,u),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&rc(d,"number",d.value)}switch(A=u?Cr(u):window,t){case"focusin":(qf(A)||A.contentEditable==="true")&&(kr=A,mc=u,ji=null);break;case"focusout":ji=mc=kr=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,Xf(h,n,c);break;case"selectionchange":if(o_)break;case"keydown":case"keyup":Xf(h,n,c)}var D;if(bh)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Tr?ty(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(ey&&n.locale!=="ko"&&(Tr||O!=="onCompositionStart"?O==="onCompositionEnd"&&Tr&&(D=Zg()):(fn=c,$h="value"in fn?fn.value:fn.textContent,Tr=!0)),A=la(u,O),0<A.length&&(O=new zf(O,t,null,n,c),h.push({event:O,listeners:A}),D?O.data=D:(D=ny(n),D!==null&&(O.data=D)))),(D=GS?QS(t,n):YS(t,n))&&(u=la(u,"onBeforeInput"),0<u.length&&(c=new zf("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=D))}py(h,e)})}function hs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function la(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=is(t,n),s!=null&&r.unshift(hs(t,s,i)),s=is(t,e),s!=null&&r.push(hs(t,s,i))),t=t.return}return r}function vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ep(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=is(n,s),l!=null&&o.unshift(hs(n,l,a))):i||(l=is(n,s),l!=null&&o.push(hs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var c_=/\r\n?/g,h_=/\u0000|\uFFFD/g;function tp(t){return(typeof t=="string"?t:""+t).replace(c_,`
`).replace(h_,"")}function Eo(t,e,n){if(e=tp(e),tp(t)!==e&&n)throw Error(S(425))}function ua(){}var yc=null,vc=null;function wc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,d_=typeof clearTimeout=="function"?clearTimeout:void 0,np=typeof Promise=="function"?Promise:void 0,f_=typeof queueMicrotask=="function"?queueMicrotask:typeof np<"u"?function(t){return np.resolve(null).then(t).catch(p_)}:Ec;function p_(t){setTimeout(function(){throw t})}function lu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),as(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);as(e)}function wn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ci=Math.random().toString(36).slice(2),Nt="__reactFiber$"+ci,ds="__reactProps$"+ci,qt="__reactContainer$"+ci,Sc="__reactEvents$"+ci,m_="__reactListeners$"+ci,g_="__reactHandles$"+ci;function Hn(t){var e=t[Nt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qt]||n[Nt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rp(t);t!==null;){if(n=t[Nt])return n;t=rp(t)}return e}t=n,n=t.parentNode}return null}function Us(t){return t=t[Nt]||t[qt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function Za(t){return t[ds]||null}var _c=[],Nr=-1;function Mn(t){return{current:t}}function te(t){0>Nr||(t.current=_c[Nr],_c[Nr]=null,Nr--)}function J(t,e){Nr++,_c[Nr]=t.current,t.current=e}var Dn={},Be=Mn(Dn),Je=Mn(!1),rr=Dn;function Kr(t,e){var n=t.type.contextTypes;if(!n)return Dn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ze(t){return t=t.childContextTypes,t!=null}function ca(){te(Je),te(Be)}function ip(t,e,n){if(Be.current!==Dn)throw Error(S(168));J(Be,e),J(Je,n)}function gy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,eS(t)||"Unknown",i));return ae({},n,r)}function ha(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dn,rr=Be.current,J(Be,t),J(Je,Je.current),!0}function sp(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=gy(t,e,rr),r.__reactInternalMemoizedMergedChildContext=t,te(Je),te(Be),J(Be,t)):te(Je),J(Je,n)}var Ft=null,el=!1,uu=!1;function yy(t){Ft===null?Ft=[t]:Ft.push(t)}function y_(t){el=!0,yy(t)}function $n(){if(!uu&&Ft!==null){uu=!0;var t=0,e=X;try{var n=Ft;for(X=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ft=null,el=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(t+1)),zg(Ph,$n),i}finally{X=e,uu=!1}}return null}var Rr=[],Ar=0,da=null,fa=0,ut=[],ct=0,ir=null,bt=1,Vt="";function Bn(t,e){Rr[Ar++]=fa,Rr[Ar++]=da,da=t,fa=e}function vy(t,e,n){ut[ct++]=bt,ut[ct++]=Vt,ut[ct++]=ir,ir=t;var r=bt;t=Vt;var i=32-Et(r)-1;r&=~(1<<i),n+=1;var s=32-Et(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,bt=1<<32-Et(e)+i|n<<i|r,Vt=s+t}else bt=1<<s|n<<i|r,Vt=t}function Bh(t){t.return!==null&&(Bn(t,1),vy(t,1,0))}function zh(t){for(;t===da;)da=Rr[--Ar],Rr[Ar]=null,fa=Rr[--Ar],Rr[Ar]=null;for(;t===ir;)ir=ut[--ct],ut[ct]=null,Vt=ut[--ct],ut[ct]=null,bt=ut[--ct],ut[ct]=null}var it=null,rt=null,ne=!1,wt=null;function wy(t,e){var n=ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function op(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,it=t,rt=wn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,it=t,rt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ir!==null?{id:bt,overflow:Vt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,it=t,rt=null,!0):!1;default:return!1}}function Tc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kc(t){if(ne){var e=rt;if(e){var n=e;if(!op(t,e)){if(Tc(t))throw Error(S(418));e=wn(n.nextSibling);var r=it;e&&op(t,e)?wy(r,n):(t.flags=t.flags&-4097|2,ne=!1,it=t)}}else{if(Tc(t))throw Error(S(418));t.flags=t.flags&-4097|2,ne=!1,it=t}}}function ap(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;it=t}function So(t){if(t!==it)return!1;if(!ne)return ap(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wc(t.type,t.memoizedProps)),e&&(e=rt)){if(Tc(t))throw Ey(),Error(S(418));for(;e;)wy(t,e),e=wn(e.nextSibling)}if(ap(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){rt=wn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}rt=null}}else rt=it?wn(t.stateNode.nextSibling):null;return!0}function Ey(){for(var t=rt;t;)t=wn(t.nextSibling)}function Gr(){rt=it=null,ne=!1}function jh(t){wt===null?wt=[t]:wt.push(t)}var v_=Zt.ReactCurrentBatchConfig;function yt(t,e){if(t&&t.defaultProps){e=ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var pa=Mn(null),ma=null,Dr=null,Hh=null;function Wh(){Hh=Dr=ma=null}function qh(t){var e=pa.current;te(pa),t._currentValue=e}function Ic(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function br(t,e){ma=t,Hh=Dr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Xe=!0),t.firstContext=null)}function ft(t){var e=t._currentValue;if(Hh!==t)if(t={context:t,memoizedValue:e,next:null},Dr===null){if(ma===null)throw Error(S(308));Dr=t,ma.dependencies={lanes:0,firstContext:t}}else Dr=Dr.next=t;return e}var Wn=null;function Kh(t){Wn===null?Wn=[t]:Wn.push(t)}function Sy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Kh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Kt(t,r)}function Kt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sn=!1;function Gh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _y(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ht(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function En(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Kt(t,n)}return i=r.interleaved,i===null?(e.next=e,Kh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Kt(t,n)}function bo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Oh(t,n)}}function lp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ga(t,e,n,r){var i=t.updateQueue;sn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(g,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(g,h,d):y,d==null)break e;h=ae({},h,d);break e;case 2:sn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);or|=o,t.lanes=o,t.memoizedState=h}}function up(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Ty=new Sg.Component().refs;function Cc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tl={isMounted:function(t){return(t=t._reactInternals)?gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=qe(),i=_n(t),s=Ht(r,i);s.payload=e,n!=null&&(s.callback=n),e=En(t,s,i),e!==null&&(St(e,t,i,r),bo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=qe(),i=_n(t),s=Ht(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=En(t,s,i),e!==null&&(St(e,t,i,r),bo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qe(),r=_n(t),i=Ht(n,r);i.tag=2,e!=null&&(i.callback=e),e=En(t,i,r),e!==null&&(St(e,t,r,n),bo(e,t,r))}};function cp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!us(n,r)||!us(i,s):!0}function ky(t,e,n){var r=!1,i=Dn,s=e.contextType;return typeof s=="object"&&s!==null?s=ft(s):(i=Ze(e)?rr:Be.current,r=e.contextTypes,s=(r=r!=null)?Kr(t,i):Dn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function hp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&tl.enqueueReplaceState(e,e.state,null)}function Nc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Ty,Gh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ft(s):(s=Ze(e)?rr:Be.current,i.context=Kr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&tl.enqueueReplaceState(i,i.state,null),ga(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ki(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Ty&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function _o(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dp(t){var e=t._init;return e(t._payload)}function Iy(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Tn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,w){return f===null||f.tag!==6?(f=gu(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,w){var I=m.type;return I===_r?c(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===rn&&dp(I)===f.type)?(w=i(f,m.props),w.ref=ki(p,f,m),w.return=p,w):(w=Wo(m.type,m.key,m.props,null,p.mode,w),w.ref=ki(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=yu(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,w,I){return f===null||f.tag!==7?(f=Xn(m,p.mode,w,I),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=gu(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case co:return m=Wo(f.type,f.key,f.props,null,p.mode,m),m.ref=ki(p,null,f),m.return=p,m;case Sr:return f=yu(f,p.mode,m),f.return=p,f;case rn:var w=f._init;return h(p,w(f._payload),m)}if(Di(f)||wi(f))return f=Xn(f,p.mode,m,null),f.return=p,f;_o(p,f)}return null}function d(p,f,m,w){var I=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return I!==null?null:a(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case co:return m.key===I?l(p,f,m,w):null;case Sr:return m.key===I?u(p,f,m,w):null;case rn:return I=m._init,d(p,f,I(m._payload),w)}if(Di(m)||wi(m))return I!==null?null:c(p,f,m,w,null);_o(p,m)}return null}function g(p,f,m,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(f,p,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case co:return p=p.get(w.key===null?m:w.key)||null,l(f,p,w,I);case Sr:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,I);case rn:var A=w._init;return g(p,f,m,A(w._payload),I)}if(Di(w)||wi(w))return p=p.get(m)||null,c(f,p,w,I,null);_o(f,w)}return null}function y(p,f,m,w){for(var I=null,A=null,D=f,O=f=0,Z=null;D!==null&&O<m.length;O++){D.index>O?(Z=D,D=null):Z=D.sibling;var j=d(p,D,m[O],w);if(j===null){D===null&&(D=Z);break}t&&D&&j.alternate===null&&e(p,D),f=s(j,f,O),A===null?I=j:A.sibling=j,A=j,D=Z}if(O===m.length)return n(p,D),ne&&Bn(p,O),I;if(D===null){for(;O<m.length;O++)D=h(p,m[O],w),D!==null&&(f=s(D,f,O),A===null?I=D:A.sibling=D,A=D);return ne&&Bn(p,O),I}for(D=r(p,D);O<m.length;O++)Z=g(D,p,O,m[O],w),Z!==null&&(t&&Z.alternate!==null&&D.delete(Z.key===null?O:Z.key),f=s(Z,f,O),A===null?I=Z:A.sibling=Z,A=Z);return t&&D.forEach(function(mt){return e(p,mt)}),ne&&Bn(p,O),I}function v(p,f,m,w){var I=wi(m);if(typeof I!="function")throw Error(S(150));if(m=I.call(m),m==null)throw Error(S(151));for(var A=I=null,D=f,O=f=0,Z=null,j=m.next();D!==null&&!j.done;O++,j=m.next()){D.index>O?(Z=D,D=null):Z=D.sibling;var mt=d(p,D,j.value,w);if(mt===null){D===null&&(D=Z);break}t&&D&&mt.alternate===null&&e(p,D),f=s(mt,f,O),A===null?I=mt:A.sibling=mt,A=mt,D=Z}if(j.done)return n(p,D),ne&&Bn(p,O),I;if(D===null){for(;!j.done;O++,j=m.next())j=h(p,j.value,w),j!==null&&(f=s(j,f,O),A===null?I=j:A.sibling=j,A=j);return ne&&Bn(p,O),I}for(D=r(p,D);!j.done;O++,j=m.next())j=g(D,p,O,j.value,w),j!==null&&(t&&j.alternate!==null&&D.delete(j.key===null?O:j.key),f=s(j,f,O),A===null?I=j:A.sibling=j,A=j);return t&&D.forEach(function(yi){return e(p,yi)}),ne&&Bn(p,O),I}function P(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===_r&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case co:e:{for(var I=m.key,A=f;A!==null;){if(A.key===I){if(I=m.type,I===_r){if(A.tag===7){n(p,A.sibling),f=i(A,m.props.children),f.return=p,p=f;break e}}else if(A.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===rn&&dp(I)===A.type){n(p,A.sibling),f=i(A,m.props),f.ref=ki(p,A,m),f.return=p,p=f;break e}n(p,A);break}else e(p,A);A=A.sibling}m.type===_r?(f=Xn(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=Wo(m.type,m.key,m.props,null,p.mode,w),w.ref=ki(p,f,m),w.return=p,p=w)}return o(p);case Sr:e:{for(A=m.key;f!==null;){if(f.key===A)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=yu(m,p.mode,w),f.return=p,p=f}return o(p);case rn:return A=m._init,P(p,f,A(m._payload),w)}if(Di(m))return y(p,f,m,w);if(wi(m))return v(p,f,m,w);_o(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=gu(m,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return P}var Qr=Iy(!0),Cy=Iy(!1),Fs={},xt=Mn(Fs),fs=Mn(Fs),ps=Mn(Fs);function qn(t){if(t===Fs)throw Error(S(174));return t}function Qh(t,e){switch(J(ps,e),J(fs,t),J(xt,Fs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sc(e,t)}te(xt),J(xt,e)}function Yr(){te(xt),te(fs),te(ps)}function Ny(t){qn(ps.current);var e=qn(xt.current),n=sc(e,t.type);e!==n&&(J(fs,t),J(xt,n))}function Yh(t){fs.current===t&&(te(xt),te(fs))}var se=Mn(0);function ya(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cu=[];function Xh(){for(var t=0;t<cu.length;t++)cu[t]._workInProgressVersionPrimary=null;cu.length=0}var Vo=Zt.ReactCurrentDispatcher,hu=Zt.ReactCurrentBatchConfig,sr=0,oe=null,ye=null,ke=null,va=!1,Hi=!1,ms=0,w_=0;function Le(){throw Error(S(321))}function Jh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_t(t[n],e[n]))return!1;return!0}function Zh(t,e,n,r,i,s){if(sr=s,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vo.current=t===null||t.memoizedState===null?T_:k_,t=n(r,i),Hi){s=0;do{if(Hi=!1,ms=0,25<=s)throw Error(S(301));s+=1,ke=ye=null,e.updateQueue=null,Vo.current=I_,t=n(r,i)}while(Hi)}if(Vo.current=wa,e=ye!==null&&ye.next!==null,sr=0,ke=ye=oe=null,va=!1,e)throw Error(S(300));return t}function ed(){var t=ms!==0;return ms=0,t}function Ct(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?oe.memoizedState=ke=t:ke=ke.next=t,ke}function pt(){if(ye===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=ye.next;var e=ke===null?oe.memoizedState:ke.next;if(e!==null)ke=e,ye=t;else{if(t===null)throw Error(S(310));ye=t,t={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},ke===null?oe.memoizedState=ke=t:ke=ke.next=t}return ke}function gs(t,e){return typeof e=="function"?e(t):e}function du(t){var e=pt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((sr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,oe.lanes|=c,or|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,_t(r,e.memoizedState)||(Xe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,oe.lanes|=s,or|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fu(t){var e=pt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);_t(s,e.memoizedState)||(Xe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ry(){}function Ay(t,e){var n=oe,r=pt(),i=e(),s=!_t(r.memoizedState,i);if(s&&(r.memoizedState=i,Xe=!0),r=r.queue,td(Py.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,ys(9,xy.bind(null,n,r,i,e),void 0,null),Ie===null)throw Error(S(349));sr&30||Dy(n,e,i)}return i}function Dy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xy(t,e,n,r){e.value=n,e.getSnapshot=r,Oy(e)&&Ly(t)}function Py(t,e,n){return n(function(){Oy(e)&&Ly(t)})}function Oy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_t(t,n)}catch{return!0}}function Ly(t){var e=Kt(t,1);e!==null&&St(e,t,1,-1)}function fp(t){var e=Ct();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gs,lastRenderedState:t},e.queue=t,t=t.dispatch=__.bind(null,oe,t),[e.memoizedState,t]}function ys(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function My(){return pt().memoizedState}function Bo(t,e,n,r){var i=Ct();oe.flags|=t,i.memoizedState=ys(1|e,n,void 0,r===void 0?null:r)}function nl(t,e,n,r){var i=pt();r=r===void 0?null:r;var s=void 0;if(ye!==null){var o=ye.memoizedState;if(s=o.destroy,r!==null&&Jh(r,o.deps)){i.memoizedState=ys(e,n,s,r);return}}oe.flags|=t,i.memoizedState=ys(1|e,n,s,r)}function pp(t,e){return Bo(8390656,8,t,e)}function td(t,e){return nl(2048,8,t,e)}function $y(t,e){return nl(4,2,t,e)}function Uy(t,e){return nl(4,4,t,e)}function Fy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function by(t,e,n){return n=n!=null?n.concat([t]):null,nl(4,4,Fy.bind(null,e,t),n)}function nd(){}function Vy(t,e){var n=pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function By(t,e){var n=pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function zy(t,e,n){return sr&21?(_t(n,e)||(n=Wg(),oe.lanes|=n,or|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Xe=!0),t.memoizedState=n)}function E_(t,e){var n=X;X=n!==0&&4>n?n:4,t(!0);var r=hu.transition;hu.transition={};try{t(!1),e()}finally{X=n,hu.transition=r}}function jy(){return pt().memoizedState}function S_(t,e,n){var r=_n(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hy(t))Wy(e,n);else if(n=Sy(t,e,n,r),n!==null){var i=qe();St(n,t,r,i),qy(n,e,r)}}function __(t,e,n){var r=_n(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hy(t))Wy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,_t(a,o)){var l=e.interleaved;l===null?(i.next=i,Kh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Sy(t,e,i,r),n!==null&&(i=qe(),St(n,t,r,i),qy(n,e,r))}}function Hy(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function Wy(t,e){Hi=va=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Oh(t,n)}}var wa={readContext:ft,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},T_={readContext:ft,useCallback:function(t,e){return Ct().memoizedState=[t,e===void 0?null:e],t},useContext:ft,useEffect:pp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bo(4194308,4,Fy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bo(4,2,t,e)},useMemo:function(t,e){var n=Ct();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ct();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=S_.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=Ct();return t={current:t},e.memoizedState=t},useState:fp,useDebugValue:nd,useDeferredValue:function(t){return Ct().memoizedState=t},useTransition:function(){var t=fp(!1),e=t[0];return t=E_.bind(null,t[1]),Ct().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,i=Ct();if(ne){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),Ie===null)throw Error(S(349));sr&30||Dy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,pp(Py.bind(null,r,s,t),[t]),r.flags|=2048,ys(9,xy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ct(),e=Ie.identifierPrefix;if(ne){var n=Vt,r=bt;n=(r&~(1<<32-Et(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ms++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=w_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},k_={readContext:ft,useCallback:Vy,useContext:ft,useEffect:td,useImperativeHandle:by,useInsertionEffect:$y,useLayoutEffect:Uy,useMemo:By,useReducer:du,useRef:My,useState:function(){return du(gs)},useDebugValue:nd,useDeferredValue:function(t){var e=pt();return zy(e,ye.memoizedState,t)},useTransition:function(){var t=du(gs)[0],e=pt().memoizedState;return[t,e]},useMutableSource:Ry,useSyncExternalStore:Ay,useId:jy,unstable_isNewReconciler:!1},I_={readContext:ft,useCallback:Vy,useContext:ft,useEffect:td,useImperativeHandle:by,useInsertionEffect:$y,useLayoutEffect:Uy,useMemo:By,useReducer:fu,useRef:My,useState:function(){return fu(gs)},useDebugValue:nd,useDeferredValue:function(t){var e=pt();return ye===null?e.memoizedState=t:zy(e,ye.memoizedState,t)},useTransition:function(){var t=fu(gs)[0],e=pt().memoizedState;return[t,e]},useMutableSource:Ry,useSyncExternalStore:Ay,useId:jy,unstable_isNewReconciler:!1};function Xr(t,e){try{var n="",r=e;do n+=ZE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function pu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var C_=typeof WeakMap=="function"?WeakMap:Map;function Ky(t,e,n){n=Ht(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Sa||(Sa=!0,Fc=r),Rc(t,e)},n}function Gy(t,e,n){n=Ht(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Rc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rc(t,e),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new C_;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=V_.bind(null,t,e,n),e.then(t,t))}function gp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ht(-1,1),e.tag=2,En(n,e,1))),n.lanes|=1),t)}var N_=Zt.ReactCurrentOwner,Xe=!1;function He(t,e,n,r){e.child=t===null?Cy(e,null,n,r):Qr(e,t.child,n,r)}function vp(t,e,n,r,i){n=n.render;var s=e.ref;return br(e,i),r=Zh(t,e,n,r,s,i),n=ed(),t!==null&&!Xe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(ne&&n&&Bh(e),e.flags|=1,He(t,e,r,i),e.child)}function wp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!cd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Qy(t,e,s,r,i)):(t=Wo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:us,n(o,r)&&t.ref===e.ref)return Gt(t,e,i)}return e.flags|=1,t=Tn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Qy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(us(s,r)&&t.ref===e.ref)if(Xe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Xe=!0);else return e.lanes=t.lanes,Gt(t,e,i)}return Ac(t,e,n,r,i)}function Yy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Pr,nt),nt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,J(Pr,nt),nt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,J(Pr,nt),nt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,J(Pr,nt),nt|=r;return He(t,e,i,n),e.child}function Xy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ac(t,e,n,r,i){var s=Ze(n)?rr:Be.current;return s=Kr(e,s),br(e,i),n=Zh(t,e,n,r,s,i),r=ed(),t!==null&&!Xe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(ne&&r&&Bh(e),e.flags|=1,He(t,e,n,i),e.child)}function Ep(t,e,n,r,i){if(Ze(n)){var s=!0;ha(e)}else s=!1;if(br(e,i),e.stateNode===null)zo(t,e),ky(e,n,r),Nc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ft(u):(u=Ze(n)?rr:Be.current,u=Kr(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&hp(e,o,r,u),sn=!1;var d=e.memoizedState;o.state=d,ga(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Je.current||sn?(typeof c=="function"&&(Cc(e,n,c,r),l=e.memoizedState),(a=sn||cp(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,_y(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:yt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ft(l):(l=Ze(n)?rr:Be.current,l=Kr(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&hp(e,o,r,l),sn=!1,d=e.memoizedState,o.state=d,ga(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Je.current||sn?(typeof g=="function"&&(Cc(e,n,g,r),y=e.memoizedState),(u=sn||cp(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Dc(t,e,n,r,s,i)}function Dc(t,e,n,r,i,s){Xy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&sp(e,n,!1),Gt(t,e,s);r=e.stateNode,N_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Qr(e,t.child,null,s),e.child=Qr(e,null,a,s)):He(t,e,a,s),e.memoizedState=r.state,i&&sp(e,n,!0),e.child}function Jy(t){var e=t.stateNode;e.pendingContext?ip(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ip(t,e.context,!1),Qh(t,e.containerInfo)}function Sp(t,e,n,r,i){return Gr(),jh(i),e.flags|=256,He(t,e,n,r),e.child}var xc={dehydrated:null,treeContext:null,retryLane:0};function Pc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Zy(t,e,n){var r=e.pendingProps,i=se.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),J(se,i&1),t===null)return kc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=sl(o,r,0,null),t=Xn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Pc(n),e.memoizedState=xc,t):rd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return R_(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Tn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Tn(a,s):(s=Xn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Pc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=xc,r}return s=t.child,t=s.sibling,r=Tn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function rd(t,e){return e=sl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function To(t,e,n,r){return r!==null&&jh(r),Qr(e,t.child,null,n),t=rd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function R_(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=pu(Error(S(422))),To(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=sl({mode:"visible",children:r.children},i,0,null),s=Xn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Qr(e,t.child,null,o),e.child.memoizedState=Pc(o),e.memoizedState=xc,s);if(!(e.mode&1))return To(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=pu(s,r,void 0),To(t,e,o,r)}if(a=(o&t.childLanes)!==0,Xe||a){if(r=Ie,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Kt(t,i),St(r,t,i,-1))}return ud(),r=pu(Error(S(421))),To(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=B_.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,rt=wn(i.nextSibling),it=e,ne=!0,wt=null,t!==null&&(ut[ct++]=bt,ut[ct++]=Vt,ut[ct++]=ir,bt=t.id,Vt=t.overflow,ir=e),e=rd(e,r.children),e.flags|=4096,e)}function _p(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ic(t.return,e,n)}function mu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ev(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(He(t,e,r.children,n),r=se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_p(t,n,e);else if(t.tag===19)_p(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(J(se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ya(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),mu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ya(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}mu(e,!0,n,null,s);break;case"together":mu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),or|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=Tn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function A_(t,e,n){switch(e.tag){case 3:Jy(e),Gr();break;case 5:Ny(e);break;case 1:Ze(e.type)&&ha(e);break;case 4:Qh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;J(pa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(J(se,se.current&1),e.flags|=128,null):n&e.child.childLanes?Zy(t,e,n):(J(se,se.current&1),t=Gt(t,e,n),t!==null?t.sibling:null);J(se,se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ev(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(se,se.current),r)break;return null;case 22:case 23:return e.lanes=0,Yy(t,e,n)}return Gt(t,e,n)}var tv,Oc,nv,rv;tv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oc=function(){};nv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,qn(xt.current);var s=null;switch(n){case"input":i=tc(t,i),r=tc(t,r),s=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),s=[];break;case"textarea":i=ic(t,i),r=ic(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ua)}oc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ns.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ns.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};rv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ii(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function D_(t,e,n){var r=e.pendingProps;switch(zh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return Ze(e.type)&&ca(),Me(e),null;case 3:return r=e.stateNode,Yr(),te(Je),te(Be),Xh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(So(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,wt!==null&&(Bc(wt),wt=null))),Oc(t,e),Me(e),null;case 5:Yh(e);var i=qn(ps.current);if(n=e.type,t!==null&&e.stateNode!=null)nv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Me(e),null}if(t=qn(xt.current),So(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Nt]=e,r[ds]=s,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<Pi.length;i++)ee(Pi[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":xf(r,s),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ee("invalid",r);break;case"textarea":Of(r,s),ee("invalid",r)}oc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Eo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Eo(r.textContent,a,t),i=["children",""+a]):ns.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":ho(r),Pf(r,s,!0);break;case"textarea":ho(r),Lf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ua)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Nt]=e,t[ds]=r,tv(t,e,!1,!1),e.stateNode=t;e:{switch(o=ac(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<Pi.length;i++)ee(Pi[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":xf(t,r),i=tc(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),ee("invalid",t);break;case"textarea":Of(t,r),i=ic(t,r),ee("invalid",t);break;default:i=r}oc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Og(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&rs(t,l):typeof l=="number"&&rs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ns.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",t):l!=null&&Nh(t,s,l,o))}switch(n){case"input":ho(t),Pf(t,r,!1);break;case"textarea":ho(t),Lf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+An(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Mr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Mr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ua)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)rv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=qn(ps.current),qn(xt.current),So(e)){if(r=e.stateNode,n=e.memoizedProps,r[Nt]=e,(s=r.nodeValue!==n)&&(t=it,t!==null))switch(t.tag){case 3:Eo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Eo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nt]=e,e.stateNode=r}return Me(e),null;case 13:if(te(se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&rt!==null&&e.mode&1&&!(e.flags&128))Ey(),Gr(),e.flags|=98560,s=!1;else if(s=So(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Nt]=e}else Gr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Me(e),s=!1}else wt!==null&&(Bc(wt),wt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||se.current&1?we===0&&(we=3):ud())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return Yr(),Oc(t,e),t===null&&cs(e.stateNode.containerInfo),Me(e),null;case 10:return qh(e.type._context),Me(e),null;case 17:return Ze(e.type)&&ca(),Me(e),null;case 19:if(te(se),s=e.memoizedState,s===null)return Me(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ii(s,!1);else{if(we!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ya(t),o!==null){for(e.flags|=128,Ii(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return J(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&he()>Jr&&(e.flags|=128,r=!0,Ii(s,!1),e.lanes=4194304)}else{if(!r)if(t=ya(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ii(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return Me(e),null}else 2*he()-s.renderingStartTime>Jr&&n!==1073741824&&(e.flags|=128,r=!0,Ii(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=he(),e.sibling=null,n=se.current,J(se,r?n&1|2:n&1),e):(Me(e),null);case 22:case 23:return ld(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?nt&1073741824&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function x_(t,e){switch(zh(e),e.tag){case 1:return Ze(e.type)&&ca(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Yr(),te(Je),te(Be),Xh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Yh(e),null;case 13:if(te(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Gr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return te(se),null;case 4:return Yr(),null;case 10:return qh(e.type._context),null;case 22:case 23:return ld(),null;case 24:return null;default:return null}}var ko=!1,Ue=!1,P_=typeof WeakSet=="function"?WeakSet:Set,N=null;function xr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(t,e,r)}else n.current=null}function Lc(t,e,n){try{n()}catch(r){le(t,e,r)}}var Tp=!1;function O_(t,e){if(yc=oa,t=ay(),Vh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vc={focusedElem:t,selectionRange:n},oa=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,P=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:yt(e.type,v),P);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){le(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return y=Tp,Tp=!1,y}function Wi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Lc(e,n,s)}i=i.next}while(i!==r)}}function rl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Mc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function iv(t){var e=t.alternate;e!==null&&(t.alternate=null,iv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Nt],delete e[ds],delete e[Sc],delete e[m_],delete e[g_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sv(t){return t.tag===5||t.tag===3||t.tag===4}function kp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $c(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ua));else if(r!==4&&(t=t.child,t!==null))for($c(t,e,n),t=t.sibling;t!==null;)$c(t,e,n),t=t.sibling}function Uc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Uc(t,e,n),t=t.sibling;t!==null;)Uc(t,e,n),t=t.sibling}var Re=null,vt=!1;function tn(t,e,n){for(n=n.child;n!==null;)ov(t,e,n),n=n.sibling}function ov(t,e,n){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(Qa,n)}catch{}switch(n.tag){case 5:Ue||xr(n,e);case 6:var r=Re,i=vt;Re=null,tn(t,e,n),Re=r,vt=i,Re!==null&&(vt?(t=Re,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(vt?(t=Re,n=n.stateNode,t.nodeType===8?lu(t.parentNode,n):t.nodeType===1&&lu(t,n),as(t)):lu(Re,n.stateNode));break;case 4:r=Re,i=vt,Re=n.stateNode.containerInfo,vt=!0,tn(t,e,n),Re=r,vt=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Lc(n,e,o),i=i.next}while(i!==r)}tn(t,e,n);break;case 1:if(!Ue&&(xr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){le(n,e,a)}tn(t,e,n);break;case 21:tn(t,e,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,tn(t,e,n),Ue=r):tn(t,e,n);break;default:tn(t,e,n)}}function Ip(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new P_),e.forEach(function(r){var i=z_.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Re=a.stateNode,vt=!1;break e;case 3:Re=a.stateNode.containerInfo,vt=!0;break e;case 4:Re=a.stateNode.containerInfo,vt=!0;break e}a=a.return}if(Re===null)throw Error(S(160));ov(s,o,i),Re=null,vt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){le(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)av(e,t),e=e.sibling}function av(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gt(e,t),It(t),r&4){try{Wi(3,t,t.return),rl(3,t)}catch(v){le(t,t.return,v)}try{Wi(5,t,t.return)}catch(v){le(t,t.return,v)}}break;case 1:gt(e,t),It(t),r&512&&n!==null&&xr(n,n.return);break;case 5:if(gt(e,t),It(t),r&512&&n!==null&&xr(n,n.return),t.flags&32){var i=t.stateNode;try{rs(i,"")}catch(v){le(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Rg(i,s),ac(a,o);var u=ac(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Og(i,h):c==="dangerouslySetInnerHTML"?xg(i,h):c==="children"?rs(i,h):Nh(i,c,h,u)}switch(a){case"input":nc(i,s);break;case"textarea":Ag(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Mr(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Mr(i,!!s.multiple,s.defaultValue,!0):Mr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ds]=s}catch(v){le(t,t.return,v)}}break;case 6:if(gt(e,t),It(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){le(t,t.return,v)}}break;case 3:if(gt(e,t),It(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{as(e.containerInfo)}catch(v){le(t,t.return,v)}break;case 4:gt(e,t),It(t);break;case 13:gt(e,t),It(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(od=he())),r&4&&Ip(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ue=(u=Ue)||c,gt(e,t),Ue=u):gt(e,t),It(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(N=t,c=t.child;c!==null;){for(h=N=c;N!==null;){switch(d=N,g=d.child,d.tag){case 0:case 11:case 14:case 15:Wi(4,d,d.return);break;case 1:xr(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){le(r,n,v)}}break;case 5:xr(d,d.return);break;case 22:if(d.memoizedState!==null){Np(h);continue}}g!==null?(g.return=d,N=g):Np(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Pg("display",o))}catch(v){le(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){le(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:gt(e,t),It(t),r&4&&Ip(t);break;case 21:break;default:gt(e,t),It(t)}}function It(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(sv(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(rs(i,""),r.flags&=-33);var s=kp(t);Uc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=kp(t);$c(t,a,o);break;default:throw Error(S(161))}}catch(l){le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function L_(t,e,n){N=t,lv(t)}function lv(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ko;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ue;a=ko;var u=Ue;if(ko=o,(Ue=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?Rp(i):l!==null?(l.return=o,N=l):Rp(i);for(;s!==null;)N=s,lv(s),s=s.sibling;N=i,ko=a,Ue=u}Cp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):Cp(t)}}function Cp(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ue||rl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&up(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}up(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&as(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Ue||e.flags&512&&Mc(e)}catch(d){le(e,e.return,d)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function Np(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function Rp(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{rl(4,e)}catch(l){le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){le(e,i,l)}}var s=e.return;try{Mc(e)}catch(l){le(e,s,l)}break;case 5:var o=e.return;try{Mc(e)}catch(l){le(e,o,l)}}}catch(l){le(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var M_=Math.ceil,Ea=Zt.ReactCurrentDispatcher,id=Zt.ReactCurrentOwner,dt=Zt.ReactCurrentBatchConfig,K=0,Ie=null,me=null,De=0,nt=0,Pr=Mn(0),we=0,vs=null,or=0,il=0,sd=0,qi=null,Qe=null,od=0,Jr=1/0,Ut=null,Sa=!1,Fc=null,Sn=null,Io=!1,pn=null,_a=0,Ki=0,bc=null,jo=-1,Ho=0;function qe(){return K&6?he():jo!==-1?jo:jo=he()}function _n(t){return t.mode&1?K&2&&De!==0?De&-De:v_.transition!==null?(Ho===0&&(Ho=Wg()),Ho):(t=X,t!==0||(t=window.event,t=t===void 0?16:Jg(t.type)),t):1}function St(t,e,n,r){if(50<Ki)throw Ki=0,bc=null,Error(S(185));Ms(t,n,r),(!(K&2)||t!==Ie)&&(t===Ie&&(!(K&2)&&(il|=n),we===4&&an(t,De)),et(t,r),n===1&&K===0&&!(e.mode&1)&&(Jr=he()+500,el&&$n()))}function et(t,e){var n=t.callbackNode;vS(t,e);var r=sa(t,t===Ie?De:0);if(r===0)n!==null&&Uf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Uf(n),e===1)t.tag===0?y_(Ap.bind(null,t)):yy(Ap.bind(null,t)),f_(function(){!(K&6)&&$n()}),n=null;else{switch(qg(r)){case 1:n=Ph;break;case 4:n=jg;break;case 16:n=ia;break;case 536870912:n=Hg;break;default:n=ia}n=gv(n,uv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function uv(t,e){if(jo=-1,Ho=0,K&6)throw Error(S(327));var n=t.callbackNode;if(Vr()&&t.callbackNode!==n)return null;var r=sa(t,t===Ie?De:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ta(t,r);else{e=r;var i=K;K|=2;var s=hv();(Ie!==t||De!==e)&&(Ut=null,Jr=he()+500,Yn(t,e));do try{F_();break}catch(a){cv(t,a)}while(1);Wh(),Ea.current=s,K=i,me!==null?e=0:(Ie=null,De=0,e=we)}if(e!==0){if(e===2&&(i=dc(t),i!==0&&(r=i,e=Vc(t,i))),e===1)throw n=vs,Yn(t,0),an(t,r),et(t,he()),n;if(e===6)an(t,r);else{if(i=t.current.alternate,!(r&30)&&!$_(i)&&(e=Ta(t,r),e===2&&(s=dc(t),s!==0&&(r=s,e=Vc(t,s))),e===1))throw n=vs,Yn(t,0),an(t,r),et(t,he()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:zn(t,Qe,Ut);break;case 3:if(an(t,r),(r&130023424)===r&&(e=od+500-he(),10<e)){if(sa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){qe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ec(zn.bind(null,t,Qe,Ut),e);break}zn(t,Qe,Ut);break;case 4:if(an(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Et(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*M_(r/1960))-r,10<r){t.timeoutHandle=Ec(zn.bind(null,t,Qe,Ut),r);break}zn(t,Qe,Ut);break;case 5:zn(t,Qe,Ut);break;default:throw Error(S(329))}}}return et(t,he()),t.callbackNode===n?uv.bind(null,t):null}function Vc(t,e){var n=qi;return t.current.memoizedState.isDehydrated&&(Yn(t,e).flags|=256),t=Ta(t,e),t!==2&&(e=Qe,Qe=n,e!==null&&Bc(e)),t}function Bc(t){Qe===null?Qe=t:Qe.push.apply(Qe,t)}function $_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!_t(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function an(t,e){for(e&=~sd,e&=~il,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Et(e),r=1<<n;t[n]=-1,e&=~r}}function Ap(t){if(K&6)throw Error(S(327));Vr();var e=sa(t,0);if(!(e&1))return et(t,he()),null;var n=Ta(t,e);if(t.tag!==0&&n===2){var r=dc(t);r!==0&&(e=r,n=Vc(t,r))}if(n===1)throw n=vs,Yn(t,0),an(t,e),et(t,he()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zn(t,Qe,Ut),et(t,he()),null}function ad(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(Jr=he()+500,el&&$n())}}function ar(t){pn!==null&&pn.tag===0&&!(K&6)&&Vr();var e=K;K|=1;var n=dt.transition,r=X;try{if(dt.transition=null,X=1,t)return t()}finally{X=r,dt.transition=n,K=e,!(K&6)&&$n()}}function ld(){nt=Pr.current,te(Pr)}function Yn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,d_(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(zh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ca();break;case 3:Yr(),te(Je),te(Be),Xh();break;case 5:Yh(r);break;case 4:Yr();break;case 13:te(se);break;case 19:te(se);break;case 10:qh(r.type._context);break;case 22:case 23:ld()}n=n.return}if(Ie=t,me=t=Tn(t.current,null),De=nt=e,we=0,vs=null,sd=il=or=0,Qe=qi=null,Wn!==null){for(e=0;e<Wn.length;e++)if(n=Wn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Wn=null}return t}function cv(t,e){do{var n=me;try{if(Wh(),Vo.current=wa,va){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}va=!1}if(sr=0,ke=ye=oe=null,Hi=!1,ms=0,id.current=null,n===null||n.return===null){we=1,vs=e,me=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=De,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=gp(o);if(g!==null){g.flags&=-257,yp(g,o,a,s,e),g.mode&1&&mp(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){mp(s,u,e),ud();break e}l=Error(S(426))}}else if(ne&&a.mode&1){var P=gp(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),yp(P,o,a,s,e),jh(Xr(l,a));break e}}s=l=Xr(l,a),we!==4&&(we=2),qi===null?qi=[s]:qi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Ky(s,l,e);lp(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Sn===null||!Sn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Gy(s,a,e);lp(s,w);break e}}s=s.return}while(s!==null)}fv(n)}catch(I){e=I,me===n&&n!==null&&(me=n=n.return);continue}break}while(1)}function hv(){var t=Ea.current;return Ea.current=wa,t===null?wa:t}function ud(){(we===0||we===3||we===2)&&(we=4),Ie===null||!(or&268435455)&&!(il&268435455)||an(Ie,De)}function Ta(t,e){var n=K;K|=2;var r=hv();(Ie!==t||De!==e)&&(Ut=null,Yn(t,e));do try{U_();break}catch(i){cv(t,i)}while(1);if(Wh(),K=n,Ea.current=r,me!==null)throw Error(S(261));return Ie=null,De=0,we}function U_(){for(;me!==null;)dv(me)}function F_(){for(;me!==null&&!uS();)dv(me)}function dv(t){var e=mv(t.alternate,t,nt);t.memoizedProps=t.pendingProps,e===null?fv(t):me=e,id.current=null}function fv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=x_(n,e),n!==null){n.flags&=32767,me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,me=null;return}}else if(n=D_(n,e,nt),n!==null){me=n;return}if(e=e.sibling,e!==null){me=e;return}me=e=t}while(e!==null);we===0&&(we=5)}function zn(t,e,n){var r=X,i=dt.transition;try{dt.transition=null,X=1,b_(t,e,n,r)}finally{dt.transition=i,X=r}return null}function b_(t,e,n,r){do Vr();while(pn!==null);if(K&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(wS(t,s),t===Ie&&(me=Ie=null,De=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Io||(Io=!0,gv(ia,function(){return Vr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=dt.transition,dt.transition=null;var o=X;X=1;var a=K;K|=4,id.current=null,O_(t,n),av(n,t),s_(vc),oa=!!yc,vc=yc=null,t.current=n,L_(n),cS(),K=a,X=o,dt.transition=s}else t.current=n;if(Io&&(Io=!1,pn=t,_a=i),s=t.pendingLanes,s===0&&(Sn=null),fS(n.stateNode),et(t,he()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Sa)throw Sa=!1,t=Fc,Fc=null,t;return _a&1&&t.tag!==0&&Vr(),s=t.pendingLanes,s&1?t===bc?Ki++:(Ki=0,bc=t):Ki=0,$n(),null}function Vr(){if(pn!==null){var t=qg(_a),e=dt.transition,n=X;try{if(dt.transition=null,X=16>t?16:t,pn===null)var r=!1;else{if(t=pn,pn=null,_a=0,K&6)throw Error(S(331));var i=K;for(K|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:Wi(8,c,s)}var h=c.child;if(h!==null)h.return=c,N=h;else for(;N!==null;){c=N;var d=c.sibling,g=c.return;if(iv(c),c===u){N=null;break}if(d!==null){d.return=g,N=d;break}N=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var P=v.sibling;v.sibling=null,v=P}while(v!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,N=p;break e}N=s.return}}var f=t.current;for(N=f;N!==null;){o=N;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,N=m;else e:for(o=f;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:rl(9,a)}}catch(I){le(a,a.return,I)}if(a===o){N=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,N=w;break e}N=a.return}}if(K=i,$n(),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(Qa,t)}catch{}r=!0}return r}finally{X=n,dt.transition=e}}return!1}function Dp(t,e,n){e=Xr(n,e),e=Ky(t,e,1),t=En(t,e,1),e=qe(),t!==null&&(Ms(t,1,e),et(t,e))}function le(t,e,n){if(t.tag===3)Dp(t,t,n);else for(;e!==null;){if(e.tag===3){Dp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){t=Xr(n,t),t=Gy(e,t,1),e=En(e,t,1),t=qe(),e!==null&&(Ms(e,1,t),et(e,t));break}}e=e.return}}function V_(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=qe(),t.pingedLanes|=t.suspendedLanes&n,Ie===t&&(De&n)===n&&(we===4||we===3&&(De&130023424)===De&&500>he()-od?Yn(t,0):sd|=n),et(t,e)}function pv(t,e){e===0&&(t.mode&1?(e=mo,mo<<=1,!(mo&130023424)&&(mo=4194304)):e=1);var n=qe();t=Kt(t,e),t!==null&&(Ms(t,e,n),et(t,n))}function B_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),pv(t,n)}function z_(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),pv(t,n)}var mv;mv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Je.current)Xe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Xe=!1,A_(t,e,n);Xe=!!(t.flags&131072)}else Xe=!1,ne&&e.flags&1048576&&vy(e,fa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;zo(t,e),t=e.pendingProps;var i=Kr(e,Be.current);br(e,n),i=Zh(null,e,r,t,i,n);var s=ed();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ze(r)?(s=!0,ha(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gh(e),i.updater=tl,e.stateNode=i,i._reactInternals=e,Nc(e,r,t,n),e=Dc(null,e,r,!0,s,n)):(e.tag=0,ne&&s&&Bh(e),He(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(zo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=H_(r),t=yt(r,t),i){case 0:e=Ac(null,e,r,t,n);break e;case 1:e=Ep(null,e,r,t,n);break e;case 11:e=vp(null,e,r,t,n);break e;case 14:e=wp(null,e,r,yt(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),Ac(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),Ep(t,e,r,i,n);case 3:e:{if(Jy(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,_y(t,e),ga(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Xr(Error(S(423)),e),e=Sp(t,e,r,n,i);break e}else if(r!==i){i=Xr(Error(S(424)),e),e=Sp(t,e,r,n,i);break e}else for(rt=wn(e.stateNode.containerInfo.firstChild),it=e,ne=!0,wt=null,n=Cy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gr(),r===i){e=Gt(t,e,n);break e}He(t,e,r,n)}e=e.child}return e;case 5:return Ny(e),t===null&&kc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,wc(r,i)?o=null:s!==null&&wc(r,s)&&(e.flags|=32),Xy(t,e),He(t,e,o,n),e.child;case 6:return t===null&&kc(e),null;case 13:return Zy(t,e,n);case 4:return Qh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Qr(e,null,r,n):He(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),vp(t,e,r,i,n);case 7:return He(t,e,e.pendingProps,n),e.child;case 8:return He(t,e,e.pendingProps.children,n),e.child;case 12:return He(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,J(pa,r._currentValue),r._currentValue=o,s!==null)if(_t(s.value,o)){if(s.children===i.children&&!Je.current){e=Gt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ht(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ic(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ic(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}He(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,br(e,n),i=ft(i),r=r(i),e.flags|=1,He(t,e,r,n),e.child;case 14:return r=e.type,i=yt(r,e.pendingProps),i=yt(r.type,i),wp(t,e,r,i,n);case 15:return Qy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),zo(t,e),e.tag=1,Ze(r)?(t=!0,ha(e)):t=!1,br(e,n),ky(e,r,i),Nc(e,r,i,n),Dc(null,e,r,!0,t,n);case 19:return ev(t,e,n);case 22:return Yy(t,e,n)}throw Error(S(156,e.tag))};function gv(t,e){return zg(t,e)}function j_(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(t,e,n,r){return new j_(t,e,n,r)}function cd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function H_(t){if(typeof t=="function")return cd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ah)return 11;if(t===Dh)return 14}return 2}function Tn(t,e){var n=t.alternate;return n===null?(n=ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")cd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _r:return Xn(n.children,i,s,e);case Rh:o=8,i|=8;break;case Xu:return t=ht(12,n,e,i|2),t.elementType=Xu,t.lanes=s,t;case Ju:return t=ht(13,n,e,i),t.elementType=Ju,t.lanes=s,t;case Zu:return t=ht(19,n,e,i),t.elementType=Zu,t.lanes=s,t;case Ig:return sl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Tg:o=10;break e;case kg:o=9;break e;case Ah:o=11;break e;case Dh:o=14;break e;case rn:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=ht(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Xn(t,e,n,r){return t=ht(7,t,r,e),t.lanes=n,t}function sl(t,e,n,r){return t=ht(22,t,r,e),t.elementType=Ig,t.lanes=n,t.stateNode={isHidden:!1},t}function gu(t,e,n){return t=ht(6,t,null,e),t.lanes=n,t}function yu(t,e,n){return e=ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function W_(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xl(0),this.expirationTimes=Xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hd(t,e,n,r,i,s,o,a,l){return t=new W_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ht(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gh(s),t}function q_(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function yv(t){if(!t)return Dn;t=t._reactInternals;e:{if(gr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ze(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(Ze(n))return gy(t,n,e)}return e}function vv(t,e,n,r,i,s,o,a,l){return t=hd(n,r,!0,t,i,s,o,a,l),t.context=yv(null),n=t.current,r=qe(),i=_n(n),s=Ht(r,i),s.callback=e??null,En(n,s,i),t.current.lanes=i,Ms(t,i,r),et(t,r),t}function ol(t,e,n,r){var i=e.current,s=qe(),o=_n(i);return n=yv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ht(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=En(i,e,o),t!==null&&(St(t,i,o,s),bo(t,i,o)),o}function ka(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function dd(t,e){xp(t,e),(t=t.alternate)&&xp(t,e)}function K_(){return null}var wv=typeof reportError=="function"?reportError:function(t){console.error(t)};function fd(t){this._internalRoot=t}al.prototype.render=fd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));ol(t,e,null,null)};al.prototype.unmount=fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ar(function(){ol(null,t,null,null)}),e[qt]=null}};function al(t){this._internalRoot=t}al.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<on.length&&e!==0&&e<on[n].priority;n++);on.splice(n,0,t),n===0&&Xg(t)}};function pd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pp(){}function G_(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ka(o);s.call(u)}}var o=vv(e,r,t,0,null,!1,!1,"",Pp);return t._reactRootContainer=o,t[qt]=o.current,cs(t.nodeType===8?t.parentNode:t),ar(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ka(l);a.call(u)}}var l=hd(t,0,!1,null,null,!1,!1,"",Pp);return t._reactRootContainer=l,t[qt]=l.current,cs(t.nodeType===8?t.parentNode:t),ar(function(){ol(e,l,n,r)}),l}function ul(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ka(o);a.call(l)}}ol(e,o,t,i)}else o=G_(n,e,t,i,r);return ka(o)}Kg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=xi(e.pendingLanes);n!==0&&(Oh(e,n|1),et(e,he()),!(K&6)&&(Jr=he()+500,$n()))}break;case 13:ar(function(){var r=Kt(t,1);if(r!==null){var i=qe();St(r,t,1,i)}}),dd(t,1)}};Lh=function(t){if(t.tag===13){var e=Kt(t,134217728);if(e!==null){var n=qe();St(e,t,134217728,n)}dd(t,134217728)}};Gg=function(t){if(t.tag===13){var e=_n(t),n=Kt(t,e);if(n!==null){var r=qe();St(n,t,e,r)}dd(t,e)}};Qg=function(){return X};Yg=function(t,e){var n=X;try{return X=t,e()}finally{X=n}};uc=function(t,e,n){switch(e){case"input":if(nc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Za(r);if(!i)throw Error(S(90));Ng(r),nc(r,i)}}}break;case"textarea":Ag(t,n);break;case"select":e=n.value,e!=null&&Mr(t,!!n.multiple,e,!1)}};$g=ad;Ug=ar;var Q_={usingClientEntryPoint:!1,Events:[Us,Cr,Za,Lg,Mg,ad]},Ci={findFiberByHostInstance:Hn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Y_={bundleType:Ci.bundleType,version:Ci.version,rendererPackageName:Ci.rendererPackageName,rendererConfig:Ci.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ci.findFiberByHostInstance||K_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Co.isDisabled&&Co.supportsFiber)try{Qa=Co.inject(Y_),Dt=Co}catch{}}at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q_;at.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pd(e))throw Error(S(200));return q_(t,e,null,n)};at.createRoot=function(t,e){if(!pd(t))throw Error(S(299));var n=!1,r="",i=wv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=hd(t,1,!1,null,null,n,!1,r,i),t[qt]=e.current,cs(t.nodeType===8?t.parentNode:t),new fd(e)};at.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=Vg(e),t=t===null?null:t.stateNode,t};at.flushSync=function(t){return ar(t)};at.hydrate=function(t,e,n){if(!ll(e))throw Error(S(200));return ul(null,t,e,!0,n)};at.hydrateRoot=function(t,e,n){if(!pd(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=wv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=vv(e,null,t,1,n??null,i,!1,s,o),t[qt]=e.current,cs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new al(e)};at.render=function(t,e,n){if(!ll(e))throw Error(S(200));return ul(null,t,e,!1,n)};at.unmountComponentAtNode=function(t){if(!ll(t))throw Error(S(40));return t._reactRootContainer?(ar(function(){ul(null,null,t,!1,function(){t._reactRootContainer=null,t[qt]=null})}),!0):!1};at.unstable_batchedUpdates=ad;at.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ll(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return ul(t,e,n,!1,r)};at.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=at})(KE);var Op=Gu;Ku.createRoot=Op.createRoot,Ku.hydrateRoot=Op.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},X_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Sv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ev(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):X_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},J_=function(t){const e=Ev(t);return Sv.encodeByteArray(e,!0)},Ia=function(t){return J_(t).replace(/\./g,"")},_v=function(t){try{return Sv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Z_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function eT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nT(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rT(){try{return typeof indexedDB=="object"}catch{return!1}}function iT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function sT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=()=>sT().__FIREBASE_DEFAULTS__,aT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_v(t[1]);return e&&JSON.parse(e)},md=()=>{try{return oT()||aT()||lT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Tv=t=>{var e,n;return(n=(e=md())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},uT=t=>{const e=Tv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},cT=()=>{var t;return(t=md())===null||t===void 0?void 0:t.config},kv=t=>{var e;return(e=md())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ia(JSON.stringify(n)),Ia(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT="FirebaseError";class en extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=fT,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bs.prototype.create)}}class bs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?pT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new en(i,a,r)}}function pT(t,e){return t.replace(mT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const mT=/\{\$([^}]+)}/g;function gT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ca(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Lp(s)&&Lp(o)){if(!Ca(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Lp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Oi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Li(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yT(t,e){const n=new vT(t,e);return n.subscribe.bind(n)}class vT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=vu),i.error===void 0&&(i.error=vu),i.complete===void 0&&(i.complete=vu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t){return t&&t._delegate?t._delegate:t}class lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_T(e))try{this.getOrInitializeService({instanceIdentifier:jn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jn){return this.instances.has(e)}getOptions(e=jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ST(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jn){return this.component?this.component.multipleInstances?e:jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ST(t){return t===jn?void 0:t}function _T(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ET(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const kT={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},IT=Q.INFO,CT={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},NT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=CT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gd{constructor(e){this.name=e,this._logLevel=IT,this._logHandler=NT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const RT=(t,e)=>e.some(n=>t instanceof n);let Mp,$p;function AT(){return Mp||(Mp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DT(){return $p||($p=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Iv=new WeakMap,zc=new WeakMap,Cv=new WeakMap,wu=new WeakMap,yd=new WeakMap;function xT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(kn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Iv.set(n,t)}).catch(()=>{}),yd.set(e,t),e}function PT(t){if(zc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});zc.set(t,e)}let jc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function OT(t){jc=t(jc)}function LT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Eu(this),e,...n);return Cv.set(r,e.sort?e.sort():[e]),kn(r)}:DT().includes(t)?function(...e){return t.apply(Eu(this),e),kn(Iv.get(this))}:function(...e){return kn(t.apply(Eu(this),e))}}function MT(t){return typeof t=="function"?LT(t):(t instanceof IDBTransaction&&PT(t),RT(t,AT())?new Proxy(t,jc):t)}function kn(t){if(t instanceof IDBRequest)return xT(t);if(wu.has(t))return wu.get(t);const e=MT(t);return e!==t&&(wu.set(t,e),yd.set(e,t)),e}const Eu=t=>yd.get(t);function $T(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=kn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(kn(o.result),l.oldVersion,l.newVersion,kn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const UT=["get","getKey","getAll","getAllKeys","count"],FT=["put","add","delete","clear"],Su=new Map;function Up(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Su.get(e))return Su.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=FT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||UT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Su.set(e,s),s}OT(t=>({...t,get:(e,n,r)=>Up(e,n)||t.get(e,n,r),has:(e,n)=>!!Up(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function VT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hc="@firebase/app",Fp="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new gd("@firebase/app"),BT="@firebase/app-compat",zT="@firebase/analytics-compat",jT="@firebase/analytics",HT="@firebase/app-check-compat",WT="@firebase/app-check",qT="@firebase/auth",KT="@firebase/auth-compat",GT="@firebase/database",QT="@firebase/database-compat",YT="@firebase/functions",XT="@firebase/functions-compat",JT="@firebase/installations",ZT="@firebase/installations-compat",ek="@firebase/messaging",tk="@firebase/messaging-compat",nk="@firebase/performance",rk="@firebase/performance-compat",ik="@firebase/remote-config",sk="@firebase/remote-config-compat",ok="@firebase/storage",ak="@firebase/storage-compat",lk="@firebase/firestore",uk="@firebase/firestore-compat",ck="firebase",hk="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="[DEFAULT]",dk={[Hc]:"fire-core",[BT]:"fire-core-compat",[jT]:"fire-analytics",[zT]:"fire-analytics-compat",[WT]:"fire-app-check",[HT]:"fire-app-check-compat",[qT]:"fire-auth",[KT]:"fire-auth-compat",[GT]:"fire-rtdb",[QT]:"fire-rtdb-compat",[YT]:"fire-fn",[XT]:"fire-fn-compat",[JT]:"fire-iid",[ZT]:"fire-iid-compat",[ek]:"fire-fcm",[tk]:"fire-fcm-compat",[nk]:"fire-perf",[rk]:"fire-perf-compat",[ik]:"fire-rc",[sk]:"fire-rc-compat",[ok]:"fire-gcs",[ak]:"fire-gcs-compat",[lk]:"fire-fst",[uk]:"fire-fst-compat","fire-js":"fire-js",[ck]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=new Map,qc=new Map;function fk(t,e){try{t.container.addComponent(e)}catch(n){ur.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zr(t){const e=t.name;if(qc.has(e))return ur.debug(`There were multiple attempts to register component ${e}.`),!1;qc.set(e,t);for(const n of Na.values())fk(n,t);return!0}function vd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},In=new bs("app","Firebase",pk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw In.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=hk;function Nv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Wc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw In.create("bad-app-name",{appName:String(i)});if(n||(n=cT()),!n)throw In.create("no-options");const s=Na.get(i);if(s){if(Ca(n,s.options)&&Ca(r,s.config))return s;throw In.create("duplicate-app",{appName:i})}const o=new TT(i);for(const l of qc.values())o.addComponent(l);const a=new mk(n,r,o);return Na.set(i,a),a}function Rv(t=Wc){const e=Na.get(t);if(!e&&t===Wc)return Nv();if(!e)throw In.create("no-app",{appName:t});return e}function Cn(t,e,n){var r;let i=(r=dk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ur.warn(a.join(" "));return}Zr(new lr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk="firebase-heartbeat-database",yk=1,ws="firebase-heartbeat-store";let _u=null;function Av(){return _u||(_u=$T(gk,yk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ws)}}}).catch(t=>{throw In.create("idb-open",{originalErrorMessage:t.message})})),_u}async function vk(t){try{return(await Av()).transaction(ws).objectStore(ws).get(Dv(t))}catch(e){if(e instanceof en)ur.warn(e.message);else{const n=In.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ur.warn(n.message)}}}async function bp(t,e){try{const r=(await Av()).transaction(ws,"readwrite");return await r.objectStore(ws).put(e,Dv(t)),r.done}catch(n){if(n instanceof en)ur.warn(n.message);else{const r=In.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ur.warn(r.message)}}}function Dv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=1024,Ek=30*24*60*60*1e3;class Sk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Vp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Ek}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vp(),{heartbeatsToSend:n,unsentEntries:r}=_k(this._heartbeatsCache.heartbeats),i=Ia(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Vp(){return new Date().toISOString().substring(0,10)}function _k(t,e=wk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Bp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Tk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rT()?iT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Bp(t){return Ia(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(t){Zr(new lr("platform-logger",e=>new bT(e),"PRIVATE")),Zr(new lr("heartbeat",e=>new Sk(e),"PRIVATE")),Cn(Hc,Fp,t),Cn(Hc,Fp,"esm2017"),Cn("fire-js","")}kk("");var Ik="firebase",Ck="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cn(Ik,Ck,"app");const Nk={apiKey:"AIzaSyA6R57u0CQWD8uAjk-Ea3cyl4-BUzLiUms",authDomain:"ucldk-4d8b1.firebaseapp.com",projectId:"ucldk-4d8b1",storageBucket:"ucldk-4d8b1.appspot.com",messagingSenderId:"683941640012",appId:"1:683941640012:web:b4e639ad4228c35eaec1e9"};Nv(Nk);function wd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function xv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rk=xv,Pv=new bs("auth","Firebase",xv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=new gd("@firebase/auth");function qo(t,...e){zp.logLevel<=Q.ERROR&&zp.error(`Auth (${Bs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,...e){throw Ed(t,...e)}function Pt(t,...e){return Ed(t,...e)}function Ak(t,e,n){const r=Object.assign(Object.assign({},Rk()),{[e]:n});return new bs("auth","Firebase",r).create(e,{appName:t.name})}function Ed(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Pv.create(t,...e)}function U(t,e,...n){if(!t)throw Ed(e,...n)}function Bt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qo(e),new Error(e)}function Qt(t,e){t||Bt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=new Map;function zt(t){Qt(t instanceof Function,"Expected a class definition");let e=jp.get(t);return e?(Qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jp.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(t,e){const n=vd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ca(s,e??{}))return i;Tt(i,"already-initialized")}return n.initialize({options:e})}function xk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Pk(){return Hp()==="http:"||Hp()==="https:"}function Hp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pk()||eT()||"connection"in navigator)?navigator.onLine:!0}function Lk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qt(n>e,"Short delay should be less than long delay!"),this.isMobile=Z_()||tT()}get(){return Ok()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t,e){Qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=new zs(3e4,6e4);function cl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function js(t,e,n,r,i={}){return Lv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Vs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Ov.fetch()(Mv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Lv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Mk),e);try{const i=new Uk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw No(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw No(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw No(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw No(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ak(t,c,u);Tt(t,c)}}catch(i){if(i instanceof en)throw i;Tt(t,"network-request-failed")}}async function hl(t,e,n,r,i={}){const s=await js(t,e,n,r,i);return"mfaPendingCredential"in s&&Tt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Mv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Sd(t.config,i):`${t.config.apiScheme}://${i}`}class Uk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pt(this.auth,"network-request-failed")),$k.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function No(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fk(t,e){return js(t,"POST","/v1/accounts:delete",e)}async function bk(t,e){return js(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vk(t,e=!1){const n=kt(t),r=await n.getIdToken(e),i=_d(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Gi(Tu(i.auth_time)),issuedAtTime:Gi(Tu(i.iat)),expirationTime:Gi(Tu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Tu(t){return Number(t)*1e3}function _d(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qo("JWT malformed, contained fewer than 3 sections"),null;try{const i=_v(n);return i?JSON.parse(i):(qo("Failed to decode base64 JWT payload"),null)}catch(i){return qo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Bk(t){const e=_d(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof en&&zk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gi(this.lastLoginAt),this.creationTime=Gi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ra(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Es(t,bk(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?qk(s.providerUserInfo):[],a=Wk(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new $v(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function Hk(t){const e=kt(t);await Ra(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function qk(t){return t.map(e=>{var{providerId:n}=e,r=wd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kk(t,e){const n=await Lv(t,{},async()=>{const r=Vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Mv(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ov.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Kk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ss;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ss,this.toJSON())}_performRefresh(){return Bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=wd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $v(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Es(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Vk(this,e)}reload(){return Hk(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ra(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Es(this,Fk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:I,providerData:A,stsTokenManager:D}=n;U(m&&D,e,"internal-error");const O=Ss.fromJSON(this.name,D);U(typeof m=="string",e,"internal-error"),nn(h,e.name),nn(d,e.name),U(typeof w=="boolean",e,"internal-error"),U(typeof I=="boolean",e,"internal-error"),nn(g,e.name),nn(y,e.name),nn(v,e.name),nn(P,e.name),nn(p,e.name),nn(f,e.name);const Z=new Jn({uid:m,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:I,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:O,createdAt:p,lastLoginAt:f});return A&&Array.isArray(A)&&(Z.providerData=A.map(j=>Object.assign({},j))),P&&(Z._redirectEventId=P),Z}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ss;i.updateFromServerResponse(n);const s=new Jn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ra(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Uv.type="NONE";const Wp=Uv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t,e,n){return`firebase:${t}:${e}:${n}`}class Br{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ko(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ko("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Br(zt(Wp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||zt(Wp);const o=Ko(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Jn._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Br(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Br(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zv(e))return"Blackberry";if(jv(e))return"Webos";if(Td(e))return"Safari";if((e.includes("chrome/")||bv(e))&&!e.includes("edge/"))return"Chrome";if(Bv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fv(t=ze()){return/firefox\//i.test(t)}function Td(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bv(t=ze()){return/crios\//i.test(t)}function Vv(t=ze()){return/iemobile/i.test(t)}function Bv(t=ze()){return/android/i.test(t)}function zv(t=ze()){return/blackberry/i.test(t)}function jv(t=ze()){return/webos/i.test(t)}function dl(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Gk(t=ze()){var e;return dl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Qk(){return nT()&&document.documentMode===10}function Hv(t=ze()){return dl(t)||Bv(t)||jv(t)||zv(t)||/windows phone/i.test(t)||Vv(t)}function Yk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(t,e=[]){let n;switch(t){case"Browser":n=qp(ze());break;case"Worker":n=`${qp(ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kp(this),this.idTokenSubscription=new Kp(this),this.beforeStateQueue=new Xk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Br.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ra(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?kt(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(zt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zt(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Br.create(this,[zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function fl(t){return kt(t)}class Kp{constructor(e){this.auth=e,this.observer=null,this.addObserver=yT(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Zk(t,e,n){const r=fl(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=qv(e),{host:o,port:a}=eI(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||tI()}function qv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eI(t){const e=qv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Gp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Gp(o)}}}function Gp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Bt("not implemented")}_getIdTokenResponse(e){return Bt("not implemented")}_linkToIdToken(e,n){return Bt("not implemented")}_getReauthenticationResolver(e){return Bt("not implemented")}}async function nI(t,e){return js(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rI(t,e){return hl(t,"POST","/v1/accounts:signInWithPassword",cl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iI(t,e){return hl(t,"POST","/v1/accounts:signInWithEmailLink",cl(t,e))}async function sI(t,e){return hl(t,"POST","/v1/accounts:signInWithEmailLink",cl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends kd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new _s(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new _s(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return rI(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return iI(e,{email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return nI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return sI(e,{idToken:n,email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zr(t,e){return hl(t,"POST","/v1/accounts:signInWithIdp",cl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI="http://localhost";class cr extends kd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=wd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new cr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zr(e,n)}buildRequest(){const e={requestUri:oI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lI(t){const e=Oi(Li(t)).link,n=e?Oi(Li(e)).deep_link_id:null,r=Oi(Li(t)).deep_link_id;return(r?Oi(Li(r)).link:null)||r||n||e||t}class Id{constructor(e){var n,r,i,s,o,a;const l=Oi(Li(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=aI((i=l.mode)!==null&&i!==void 0?i:null);U(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=lI(e);try{return new Id(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.providerId=hi.PROVIDER_ID}static credential(e,n){return _s._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Id.parseLink(n);return U(r,"argument-error"),_s._fromEmailAndCode(e,r.code,r.tenantId)}}hi.PROVIDER_ID="password";hi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends Kv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Hs{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Hs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cr._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return un.credential(n,r)}catch{return null}}}un.GOOGLE_SIGN_IN_METHOD="google.com";un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends Hs{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.GITHUB_SIGN_IN_METHOD="github.com";cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Hs{constructor(){super("twitter.com")}static credential(e,n){return cr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hn.credential(n,r)}catch{return null}}}hn.TWITTER_SIGN_IN_METHOD="twitter.com";hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Jn._fromIdTokenResponse(e,r,i),o=Qp(r);return new ei({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Qp(r);return new ei({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Qp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends en{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Aa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Aa(e,n,r,i)}}function Gv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Aa._fromErrorAndOperation(t,s,e,r):s})}async function uI(t,e,n=!1){const r=await Es(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ei._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cI(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Es(t,Gv(r,i,e,t),n);U(s.idToken,r,"internal-error");const o=_d(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),ei._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Tt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qv(t,e,n=!1){const r="signIn",i=await Gv(t,r,e),s=await ei._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function hI(t,e){return Qv(fl(t),e)}function dI(t,e,n){return hI(kt(t),hi.credential(e,n))}function fI(t,e,n,r){return kt(t).onIdTokenChanged(e,n,r)}function pI(t,e,n){return kt(t).beforeAuthStateChanged(e,n)}function mI(t,e,n,r){return kt(t).onAuthStateChanged(e,n,r)}function gI(t){return kt(t).signOut()}const Da="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Da,"1"),this.storage.removeItem(Da),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(){const t=ze();return Td(t)||dl(t)}const vI=1e3,wI=10;class Xv extends Yv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yI()&&Yk(),this.fallbackToPolling=Hv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Qk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xv.type="LOCAL";const EI=Xv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv extends Yv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Jv.type="SESSION";const Zv=Jv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new pl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await SI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Cd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return window}function TI(t){Ot().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(){return typeof Ot().WorkerGlobalScope<"u"&&typeof Ot().importScripts=="function"}async function kI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function II(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function CI(){return e0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0="firebaseLocalStorageDb",NI=1,xa="firebaseLocalStorage",n0="fbase_key";class Ws{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ml(t,e){return t.transaction([xa],e?"readwrite":"readonly").objectStore(xa)}function RI(){const t=indexedDB.deleteDatabase(t0);return new Ws(t).toPromise()}function Gc(){const t=indexedDB.open(t0,NI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xa,{keyPath:n0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xa)?e(r):(r.close(),await RI(),e(await Gc()))})})}async function Yp(t,e,n){const r=ml(t,!0).put({[n0]:e,value:n});return new Ws(r).toPromise()}async function AI(t,e){const n=ml(t,!1).get(e),r=await new Ws(n).toPromise();return r===void 0?null:r.value}function Xp(t,e){const n=ml(t,!0).delete(e);return new Ws(n).toPromise()}const DI=800,xI=3;class r0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return e0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pl._getInstance(CI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kI(),!this.activeServiceWorker)return;this.sender=new _I(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||II()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gc();return await Yp(e,Da,"1"),await Xp(e,Da),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>AI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ml(i,!1).getAll();return new Ws(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}r0.type="LOCAL";const PI=r0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function LI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Pt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",OI().appendChild(r)})}function MI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new zs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(t,e){return e?zt(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd extends kd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UI(t){return Qv(t.auth,new Nd(t),t.bypassAuthState)}function FI(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),cI(n,new Nd(t),t.bypassAuthState)}async function bI(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),uI(n,new Nd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UI;case"linkViaPopup":case"linkViaRedirect":return bI;case"reauthViaPopup":case"reauthViaRedirect":return FI;default:Tt(this.auth,"internal-error")}}resolve(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=new zs(2e3,1e4);class Or extends i0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const e=Cd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,VI.get())};e()}}Or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI="pendingRedirect",Go=new Map;class zI extends i0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Go.get(this.auth._key());if(!e){try{const r=await jI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Go.set(this.auth._key(),e)}return this.bypassAuthState||Go.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jI(t,e){const n=qI(e),r=WI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function HI(t,e){Go.set(t._key(),e)}function WI(t){return zt(t._redirectPersistence)}function qI(t){return Ko(BI,t.config.apiKey,t.name)}async function KI(t,e,n=!1){const r=fl(t),i=$I(r,e),o=await new zI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=10*60*1e3;class QI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!s0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jp(e))}saveEventToCache(e){this.cachedEventUids.add(Jp(e)),this.lastProcessedEventTime=Date.now()}}function Jp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function s0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return s0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI(t,e={}){return js(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZI=/^https?/;async function eC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await XI(t);for(const n of e)try{if(tC(n))return}catch{}Tt(t,"unauthorized-domain")}function tC(t){const e=Kc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ZI.test(n))return!1;if(JI.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=new zs(3e4,6e4);function Zp(){const t=Ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rC(t){return new Promise((e,n)=>{var r,i,s;function o(){Zp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zp(),n(Pt(t,"network-request-failed"))},timeout:nC.get()})}if(!((i=(r=Ot().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ot().gapi)===null||s===void 0)&&s.load)o();else{const a=MI("iframefcb");return Ot()[a]=()=>{gapi.load?o():n(Pt(t,"network-request-failed"))},LI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Qo=null,e})}let Qo=null;function iC(t){return Qo=Qo||rC(t),Qo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=new zs(5e3,15e3),oC="__/auth/iframe",aC="emulator/auth/iframe",lC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cC(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sd(e,aC):`https://${t.config.authDomain}/${oC}`,r={apiKey:e.apiKey,appName:t.name,v:Bs},i=uC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Vs(r).slice(1)}`}async function hC(t){const e=await iC(t),n=Ot().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:cC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Pt(t,"network-request-failed"),a=Ot().setTimeout(()=>{s(o)},sC.get());function l(){Ot().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fC=500,pC=600,mC="_blank",gC="http://localhost";class em{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yC(t,e,n,r=fC,i=pC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},dC),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ze().toLowerCase();n&&(a=bv(u)?mC:n),Fv(u)&&(e=e||gC,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(Gk(u)&&a!=="_self")return vC(e||"",a),new em(null);const h=window.open(e||"",a,c);U(h,t,"popup-blocked");try{h.focus()}catch{}return new em(h)}function vC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC="__/auth/handler",EC="emulator/auth/handler";function tm(t,e,n,r,i,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Bs,eventId:i};if(e instanceof Kv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Hs){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${SC(t)}?${Vs(a).slice(1)}`}function SC({config:t}){return t.emulator?Sd(t,EC):`https://${t.authDomain}/${wC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="webStorageSupport";class _C{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zv,this._completeRedirectFn=KI,this._overrideRedirectResult=HI}async _openPopup(e,n,r,i){var s;Qt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=tm(e,n,r,Kc(),i);return yC(e,o,Cd())}async _openRedirect(e,n,r,i){return await this._originValidation(e),TI(tm(e,n,r,Kc(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Qt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await hC(e),r=new QI(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ku,{type:ku},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ku];o!==void 0&&n(!!o),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hv()||Td()||dl()}}const TC=_C;var nm="@firebase/auth",rm="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function CC(t){Zr(new lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{U(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),U(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wv(t)},c=new Jk(a,l,u);return xk(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zr(new lr("auth-internal",e=>{const n=fl(e.getProvider("auth").getImmediate());return(r=>new kC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cn(nm,rm,IC(t)),Cn(nm,rm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=5*60,RC=kv("authIdTokenMaxAge")||NC;let im=null;const AC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>RC)return;const i=n==null?void 0:n.token;im!==i&&(im=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function DC(t=Rv()){const e=vd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Dk(t,{popupRedirectResolver:TC,persistence:[PI,EI,Zv]}),r=kv("authTokenSyncURL");if(r){const s=AC(r);pI(n,s,()=>s(n.currentUser)),fI(n,o=>s(o))}const i=Tv("auth");return i&&Zk(n,`http://${i}`),n}CC("Browser");const Iu=DC(),qs=_.createContext({user:null,loginUser:(t,e)=>{},logoutUser:()=>{},isUserLoggedIn:()=>{}});function xC(t){const[e,n]=_.useState(null);_.useEffect(()=>{mI(Iu,a=>{n(a)})},[]);function r(a,l){return new Promise((u,c)=>{dI(Iu,a,l).then(h=>{console.log(h),u(h.user)}).catch(h=>{console.error(h),c(h)})})}function i(){gI(Iu).then(()=>console.log("Signed out")).catch(a=>console.error("NOT SIGNED OUT",a))}function s(){return!!e}const o={user:e,loginUser:r,logoutUser:i,isUserLoggedIn:s};return C(qs.Provider,{value:o,children:t.children})}const PC="_contentContainer_z2flo_1",OC={contentContainer:PC},LC="_header_n6c94_1",MC={header:LC,"header--fixed":"_header--fixed_n6c94_12","pre-slash":"_pre-slash_n6c94_37"};function $C(t){const e=_.useContext(qs),n=_.useRef(null),r=_.useRef(null);function i(s){s.preventDefault(),e.loginUser(n.current.value,r.current.value).then(()=>t.onSuccess())}return de("form",{onSubmit:i,children:[de("div",{className:"input-control",children:[C("label",{htmlFor:"login-email",children:"Email"}),C("input",{type:"email",required:!0,id:"login-email",ref:n})]}),de("div",{className:"input-control",children:[C("label",{htmlFor:"login-password",children:"Password"}),C("input",{type:"password",required:!0,id:"login-password",ref:r})]}),C("div",{className:"form-actions",children:C("button",{className:"btn btn--primary",children:"Login"})})]})}function UC(t){return de("div",{className:"modal",children:[C("div",{className:"modal__bg",onClick:()=>t.onCancel()}),C("div",{className:"modal__dialog",children:t.children})]})}function FC(){const t=_.useContext(qs),[e,n]=_.useState(!1);return de(Bu,{children:[de("header",{className:MC.header,children:[C("hgroup",{children:C("h1",{children:"UCL Assignments"})}),C("nav",{children:C("nav",{children:C("ul",{children:t.isUserLoggedIn()?de(Bu,{children:[C("li",{children:C(qu,{to:"/admin/assignments",children:"Show all assignments"})}),C("li",{children:C(qu,{to:"/admin/assignments/new",children:"New assignment"})}),C("li",{children:C("button",{onClick:()=>t.logoutUser(),children:"Logout"})})]}):C("li",{children:C("button",{onClick:()=>n(!0),children:"Login"})})})})})]}),e&&C(UC,{onCancel:()=>n(!1),children:C($C,{onSuccess:()=>n(!1)})})]})}function bC(t){return de("div",{children:[C(FC,{}),C("div",{className:OC.contentContainer,children:t.children})]})}function Ks(t){return C("div",{className:"card",children:t.children})}function VC(){return de(Ks,{children:[C("h3",{children:"There is really no reason for you to be on this page!"}),de("p",{children:["I would strongly suggest the fantastic webpage called ",C("a",{href:"https://deeppink.ninja",children:"Deeppink.ninja"})]})]})}var BC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,Rd=Rd||{},F=BC||self;function Pa(){}function gl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Gs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function zC(t){return Object.prototype.hasOwnProperty.call(t,Cu)&&t[Cu]||(t[Cu]=++jC)}var Cu="closure_uid_"+(1e9*Math.random()>>>0),jC=0;function HC(t,e,n){return t.call.apply(t.bind,arguments)}function WC(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function be(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?be=HC:be=WC,be.apply(null,arguments)}function Ro(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Oe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Un(){this.s=this.s,this.o=this.o}var qC=0;Un.prototype.s=!1;Un.prototype.na=function(){!this.s&&(this.s=!0,this.M(),qC!=0)&&zC(this)};Un.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const o0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ad(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function sm(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(gl(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ve(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ve.prototype.h=function(){this.defaultPrevented=!0};var KC=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{F.addEventListener("test",Pa,e),F.removeEventListener("test",Pa,e)}catch{}return t}();function Oa(t){return/^[\s\xa0]*$/.test(t)}var om=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Nu(t,e){return t<e?-1:t>e?1:0}function yl(){var t=F.navigator;return t&&(t=t.userAgent)?t:""}function Rt(t){return yl().indexOf(t)!=-1}function Dd(t){return Dd[" "](t),t}Dd[" "]=Pa;function GC(t){var e=XC;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var QC=Rt("Opera"),ti=Rt("Trident")||Rt("MSIE"),a0=Rt("Edge"),Qc=a0||ti,l0=Rt("Gecko")&&!(yl().toLowerCase().indexOf("webkit")!=-1&&!Rt("Edge"))&&!(Rt("Trident")||Rt("MSIE"))&&!Rt("Edge"),YC=yl().toLowerCase().indexOf("webkit")!=-1&&!Rt("Edge");function u0(){var t=F.document;return t?t.documentMode:void 0}var La;e:{var Ru="",Au=function(){var t=yl();if(l0)return/rv:([^\);]+)(\)|;)/.exec(t);if(a0)return/Edge\/([\d\.]+)/.exec(t);if(ti)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(YC)return/WebKit\/(\S+)/.exec(t);if(QC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Au&&(Ru=Au?Au[1]:""),ti){var Du=u0();if(Du!=null&&Du>parseFloat(Ru)){La=String(Du);break e}}La=Ru}var XC={};function JC(){return GC(function(){let t=0;const e=om(String(La)).split("."),n=om("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Nu(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Nu(i[2].length==0,s[2].length==0)||Nu(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Yc;if(F.document&&ti){var am=u0();Yc=am||parseInt(La,10)||void 0}else Yc=void 0;var ZC=Yc;function Ts(t,e){if(Ve.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(l0){e:{try{Dd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:eN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ts.X.h.call(this)}}Oe(Ts,Ve);var eN={2:"touch",3:"pen",4:"mouse"};Ts.prototype.h=function(){Ts.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Qs="closure_listenable_"+(1e6*Math.random()|0),tN=0;function nN(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++tN,this.ba=this.ea=!1}function vl(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function xd(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function c0(t){const e={};for(const n in t)e[n]=t[n];return e}const lm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function h0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<lm.length;s++)n=lm[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function wl(t){this.src=t,this.g={},this.h=0}wl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Jc(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new nN(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Xc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=o0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(vl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Jc(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Pd="closure_lm_"+(1e6*Math.random()|0),xu={};function d0(t,e,n,r,i){if(r&&r.once)return p0(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)d0(t,e[s],n,r,i);return null}return n=Md(n),t&&t[Qs]?t.N(e,n,Gs(r)?!!r.capture:!!r,i):f0(t,e,n,!1,r,i)}function f0(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Gs(i)?!!i.capture:!!i,a=Ld(t);if(a||(t[Pd]=a=new wl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=rN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)KC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(g0(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function rN(){function t(n){return e.call(t.src,t.listener,n)}const e=iN;return t}function p0(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)p0(t,e[s],n,r,i);return null}return n=Md(n),t&&t[Qs]?t.O(e,n,Gs(r)?!!r.capture:!!r,i):f0(t,e,n,!0,r,i)}function m0(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)m0(t,e[s],n,r,i);else r=Gs(r)?!!r.capture:!!r,n=Md(n),t&&t[Qs]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Jc(s,n,r,i),-1<n&&(vl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ld(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Jc(e,n,r,i)),(n=-1<t?e[t]:null)&&Od(n))}function Od(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Qs])Xc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(g0(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ld(e))?(Xc(n,t),n.h==0&&(n.src=null,e[Pd]=null)):vl(t)}}}function g0(t){return t in xu?xu[t]:xu[t]="on"+t}function iN(t,e){if(t.ba)t=!0;else{e=new Ts(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Od(t),t=n.call(r,e)}return t}function Ld(t){return t=t[Pd],t instanceof wl?t:null}var Pu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Md(t){return typeof t=="function"?t:(t[Pu]||(t[Pu]=function(e){return t.handleEvent(e)}),t[Pu])}function Ce(){Un.call(this),this.i=new wl(this),this.P=this,this.I=null}Oe(Ce,Un);Ce.prototype[Qs]=!0;Ce.prototype.removeEventListener=function(t,e,n,r){m0(this,t,e,n,r)};function xe(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ve(e,t);else if(e instanceof Ve)e.target=e.target||t;else{var i=e;e=new Ve(r,t),h0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ao(o,r,!0,e)&&i}if(o=e.g=t,i=Ao(o,r,!0,e)&&i,i=Ao(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ao(o,r,!1,e)&&i}Ce.prototype.M=function(){if(Ce.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)vl(n[r]);delete t.g[e],t.h--}}this.I=null};Ce.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ce.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ao(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Xc(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var $d=F.JSON.stringify;function sN(){var t=w0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class oN{constructor(){this.h=this.g=null}add(e,n){const r=y0.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var y0=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new aN,t=>t.reset());class aN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function lN(t){F.setTimeout(()=>{throw t},0)}function v0(t,e){Zc||uN(),eh||(Zc(),eh=!0),w0.add(t,e)}var Zc;function uN(){var t=F.Promise.resolve(void 0);Zc=function(){t.then(cN)}}var eh=!1,w0=new oN;function cN(){for(var t;t=sN();){try{t.h.call(t.g)}catch(n){lN(n)}var e=y0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}eh=!1}function El(t,e){Ce.call(this),this.h=t||1,this.g=e||F,this.j=be(this.lb,this),this.l=Date.now()}Oe(El,Ce);x=El.prototype;x.ca=!1;x.R=null;x.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),xe(this,"tick"),this.ca&&(Ud(this),this.start()))}};x.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ud(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}x.M=function(){El.X.M.call(this),Ud(this),delete this.g};function Fd(t,e,n){if(typeof t=="function")n&&(t=be(t,n));else if(t&&typeof t.handleEvent=="function")t=be(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function E0(t){t.g=Fd(()=>{t.g=null,t.i&&(t.i=!1,E0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class hN extends Un{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:E0(this)}M(){super.M(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ks(t){Un.call(this),this.h=t,this.g={}}Oe(ks,Un);var um=[];function S0(t,e,n,r){Array.isArray(n)||(n&&(um[0]=n.toString()),n=um);for(var i=0;i<n.length;i++){var s=d0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function _0(t){xd(t.g,function(e,n){this.g.hasOwnProperty(n)&&Od(e)},t),t.g={}}ks.prototype.M=function(){ks.X.M.call(this),_0(this)};ks.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Sl(){this.g=!0}Sl.prototype.Aa=function(){this.g=!1};function dN(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function fN(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Lr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+mN(t,n)+(r?" "+r:"")})}function pN(t,e){t.info(function(){return"TIMEOUT: "+e})}Sl.prototype.info=function(){};function mN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return $d(n)}catch{return e}}var yr={},cm=null;function _l(){return cm=cm||new Ce}yr.Pa="serverreachability";function T0(t){Ve.call(this,yr.Pa,t)}Oe(T0,Ve);function Is(t){const e=_l();xe(e,new T0(e))}yr.STAT_EVENT="statevent";function k0(t,e){Ve.call(this,yr.STAT_EVENT,t),this.stat=e}Oe(k0,Ve);function We(t){const e=_l();xe(e,new k0(e,t))}yr.Qa="timingevent";function I0(t,e){Ve.call(this,yr.Qa,t),this.size=e}Oe(I0,Ve);function Ys(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var Tl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},C0={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function bd(){}bd.prototype.h=null;function hm(t){return t.h||(t.h=t.i())}function N0(){}var Xs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Vd(){Ve.call(this,"d")}Oe(Vd,Ve);function Bd(){Ve.call(this,"c")}Oe(Bd,Ve);var th;function kl(){}Oe(kl,bd);kl.prototype.g=function(){return new XMLHttpRequest};kl.prototype.i=function(){return{}};th=new kl;function Js(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new ks(this),this.O=gN,t=Qc?125:void 0,this.T=new El(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new R0}function R0(){this.i=null,this.g="",this.h=!1}var gN=45e3,nh={},Ma={};x=Js.prototype;x.setTimeout=function(t){this.O=t};function rh(t,e,n){t.K=1,t.v=Cl(Yt(e)),t.s=n,t.P=!0,A0(t,null)}function A0(t,e){t.F=Date.now(),Zs(t),t.A=Yt(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),U0(n.i,"t",r),t.C=0,n=t.l.H,t.h=new R0,t.g=iw(t.l,n?e:null,!t.s),0<t.N&&(t.L=new hN(be(t.La,t,t.g),t.N)),S0(t.S,t.g,"readystatechange",t.ib),e=t.H?c0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Is(),dN(t.j,t.u,t.A,t.m,t.U,t.s)}x.ib=function(t){t=t.target;const e=this.L;e&&jt(t)==3?e.l():this.La(t)};x.La=function(t){try{if(t==this.g)e:{const c=jt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Qc||this.g&&(this.h.h||this.g.fa()||mm(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Is(3):Is(2)),Il(this);var n=this.g.aa();this.Y=n;t:if(D0(this)){var r=mm(this.g);t="";var i=r.length,s=jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kn(this),Qi(this);var o="";break t}this.h.i=new F.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,fN(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Oa(a)){var u=a;break t}}u=null}if(n=u)Lr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ih(this,n);else{this.i=!1,this.o=3,We(12),Kn(this),Qi(this);break e}}this.P?(x0(this,c,o),Qc&&this.i&&c==3&&(S0(this.S,this.T,"tick",this.hb),this.T.start())):(Lr(this.j,this.m,o,null),ih(this,o)),c==4&&Kn(this),this.i&&!this.I&&(c==4?ew(this.l,this):(this.i=!1,Zs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,We(12)):(this.o=0,We(13)),Kn(this),Qi(this)}}}catch{}finally{}};function D0(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function x0(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=yN(t,n),i==Ma){e==4&&(t.o=4,We(14),r=!1),Lr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==nh){t.o=4,We(15),Lr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Lr(t.j,t.m,i,null),ih(t,i);D0(t)&&i!=Ma&&i!=nh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,We(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Gd(e),e.K=!0,We(11))):(Lr(t.j,t.m,n,"[Invalid Chunked Response]"),Kn(t),Qi(t))}x.hb=function(){if(this.g){var t=jt(this.g),e=this.g.fa();this.C<e.length&&(Il(this),x0(this,t,e),this.i&&t!=4&&Zs(this))}};function yN(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ma:(n=Number(e.substring(n,r)),isNaN(n)?nh:(r+=1,r+n>e.length?Ma:(e=e.substr(r,n),t.C=r+n,e)))}x.cancel=function(){this.I=!0,Kn(this)};function Zs(t){t.V=Date.now()+t.O,P0(t,t.O)}function P0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ys(be(t.gb,t),e)}function Il(t){t.B&&(F.clearTimeout(t.B),t.B=null)}x.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(pN(this.j,this.A),this.K!=2&&(Is(),We(17)),Kn(this),this.o=2,Qi(this)):P0(this,this.V-t)};function Qi(t){t.l.G==0||t.I||ew(t.l,t)}function Kn(t){Il(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ud(t.T),_0(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ih(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||sh(n.h,t))){if(!t.J&&sh(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Fa(n),Al(n);else break e;Kd(n),We(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ys(be(n.cb,n),6e3));if(1>=V0(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Gn(n,11)}else if((t.J||n.g==t)&&Fa(n),!Oa(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(zd(s,s.h),s.h=null))}if(r.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,re(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=rw(r,r.H?r.ka:null,r.V),o.J){B0(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Il(a),Zs(a)),r.g=o}else J0(r);0<n.i.length&&Dl(n)}else u[0]!="stop"&&u[0]!="close"||Gn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Gn(n,7):qd(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Is(4)}catch{}}function vN(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(gl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function wN(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(gl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function O0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(gl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=wN(t),r=vN(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var L0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function EN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Zn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Zn){this.h=e!==void 0?e:t.h,$a(this,t.j),this.s=t.s,this.g=t.g,Ua(this,t.m),this.l=t.l,e=t.i;var n=new Cs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),dm(this,n),this.o=t.o}else t&&(n=String(t).match(L0))?(this.h=!!e,$a(this,n[1]||"",!0),this.s=Mi(n[2]||""),this.g=Mi(n[3]||"",!0),Ua(this,n[4]),this.l=Mi(n[5]||"",!0),dm(this,n[6]||"",!0),this.o=Mi(n[7]||"")):(this.h=!!e,this.i=new Cs(null,this.h))}Zn.prototype.toString=function(){var t=[],e=this.j;e&&t.push($i(e,fm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push($i(e,fm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push($i(n,n.charAt(0)=="/"?TN:_N,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",$i(n,IN)),t.join("")};function Yt(t){return new Zn(t)}function $a(t,e,n){t.j=n?Mi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ua(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function dm(t,e,n){e instanceof Cs?(t.i=e,CN(t.i,t.h)):(n||(e=$i(e,kN)),t.i=new Cs(e,t.h))}function re(t,e,n){t.i.set(e,n)}function Cl(t){return re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Mi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function $i(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,SN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function SN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var fm=/[#\/\?@]/g,_N=/[#\?:]/g,TN=/[#\?]/g,kN=/[#\?@]/g,IN=/#/g;function Cs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fn(t){t.g||(t.g=new Map,t.h=0,t.i&&EN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=Cs.prototype;x.add=function(t,e){Fn(this),this.i=null,t=di(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function M0(t,e){Fn(t),e=di(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $0(t,e){return Fn(t),e=di(t,e),t.g.has(e)}x.forEach=function(t,e){Fn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};x.oa=function(){Fn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};x.W=function(t){Fn(this);let e=[];if(typeof t=="string")$0(this,t)&&(e=e.concat(this.g.get(di(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return Fn(this),this.i=null,t=di(this,t),$0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function U0(t,e,n){M0(t,e),0<n.length&&(t.i=null,t.g.set(di(t,e),Ad(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function di(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function CN(t,e){e&&!t.j&&(Fn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(M0(this,r),U0(this,i,n))},t)),t.j=e}var NN=class{constructor(t,e){this.h=t,this.g=e}};function F0(t){this.l=t||RN,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ga&&F.g.Ga()&&F.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var RN=10;function b0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function V0(t){return t.h?1:t.g?t.g.size:0}function sh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function zd(t,e){t.g?t.g.add(e):t.h=e}function B0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}F0.prototype.cancel=function(){if(this.i=z0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function z0(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ad(t.i)}function jd(){}jd.prototype.stringify=function(t){return F.JSON.stringify(t,void 0)};jd.prototype.parse=function(t){return F.JSON.parse(t,void 0)};function AN(){this.g=new jd}function DN(t,e,n){const r=n||"";try{O0(t,function(i,s){let o=i;Gs(i)&&(o=$d(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function xN(t,e){const n=new Sl;if(F.Image){const r=new Image;r.onload=Ro(Do,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ro(Do,n,r,"TestLoadImage: error",!1,e),r.onabort=Ro(Do,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ro(Do,n,r,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Do(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function eo(t){this.l=t.ac||null,this.j=t.jb||!1}Oe(eo,bd);eo.prototype.g=function(){return new Nl(this.l,this.j)};eo.prototype.i=function(t){return function(){return t}}({});function Nl(t,e){Ce.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Hd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Oe(Nl,Ce);var Hd=0;x=Nl.prototype;x.open=function(t,e){if(this.readyState!=Hd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ns(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||F).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,to(this)),this.readyState=Hd};x.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ns(this)),this.g&&(this.readyState=3,Ns(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;j0(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function j0(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}x.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?to(this):Ns(this),this.readyState==3&&j0(this)}};x.Va=function(t){this.g&&(this.response=this.responseText=t,to(this))};x.Ua=function(t){this.g&&(this.response=t,to(this))};x.ga=function(){this.g&&to(this)};function to(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ns(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ns(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Nl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var PN=F.JSON.parse;function ue(t){Ce.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=H0,this.K=this.L=!1}Oe(ue,Ce);var H0="",ON=/^https?$/i,LN=["POST","PUT"];x=ue.prototype;x.Ka=function(t){this.L=t};x.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():th.g(),this.C=this.u?hm(this.u):hm(th),this.g.onreadystatechange=be(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){pm(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=F.FormData&&t instanceof F.FormData,!(0<=o0(LN,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{K0(this),0<this.B&&((this.K=MN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=be(this.qa,this)):this.A=Fd(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){pm(this,s)}};function MN(t){return ti&&JC()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.qa=function(){typeof Rd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xe(this,"timeout"),this.abort(8))};function pm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,W0(t),Rl(t)}function W0(t){t.D||(t.D=!0,xe(t,"complete"),xe(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xe(this,"complete"),xe(this,"abort"),Rl(this))};x.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Rl(this,!0)),ue.X.M.call(this)};x.Ha=function(){this.s||(this.F||this.v||this.l?q0(this):this.fb())};x.fb=function(){q0(this)};function q0(t){if(t.h&&typeof Rd<"u"&&(!t.C[1]||jt(t)!=4||t.aa()!=2)){if(t.v&&jt(t)==4)Fd(t.Ha,0,t);else if(xe(t,"readystatechange"),jt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(L0)[1]||null;if(!i&&F.self&&F.self.location){var s=F.self.location.protocol;i=s.substr(0,s.length-1)}r=!ON.test(i?i.toLowerCase():"")}n=r}if(n)xe(t,"complete"),xe(t,"success");else{t.m=6;try{var o=2<jt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",W0(t)}}finally{Rl(t)}}}}function Rl(t,e){if(t.g){K0(t);const n=t.g,r=t.C[0]?Pa:null;t.g=null,t.C=null,e||xe(t,"ready");try{n.onreadystatechange=r}catch{}}}function K0(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}function jt(t){return t.g?t.g.readyState:0}x.aa=function(){try{return 2<jt(this)?this.g.status:-1}catch{return-1}};x.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),PN(e)}};function mm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case H0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}x.Ea=function(){return this.m};x.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function G0(t){let e="";return xd(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Wd(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=G0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):re(t,e,n))}function Ni(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Q0(t){this.Ca=0,this.i=[],this.j=new Sl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ni("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ni("baseRetryDelayMs",5e3,t),this.bb=Ni("retryDelaySeedMs",1e4,t),this.$a=Ni("forwardChannelMaxRetries",2,t),this.ta=Ni("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new F0(t&&t.concurrentRequestLimit),this.Fa=new AN,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}x=Q0.prototype;x.ma=8;x.G=1;function qd(t){if(Y0(t),t.G==3){var e=t.U++,n=Yt(t.F);re(n,"SID",t.I),re(n,"RID",e),re(n,"TYPE","terminate"),no(t,n),e=new Js(t,t.j,e,void 0),e.K=2,e.v=Cl(Yt(n)),n=!1,F.navigator&&F.navigator.sendBeacon&&(n=F.navigator.sendBeacon(e.v.toString(),"")),!n&&F.Image&&(new Image().src=e.v,n=!0),n||(e.g=iw(e.l,null),e.g.da(e.v)),e.F=Date.now(),Zs(e)}nw(t)}function Al(t){t.g&&(Gd(t),t.g.cancel(),t.g=null)}function Y0(t){Al(t),t.u&&(F.clearTimeout(t.u),t.u=null),Fa(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function Dl(t){b0(t.h)||t.m||(t.m=!0,v0(t.Ja,t),t.C=0)}function $N(t,e){return V0(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ys(be(t.Ja,t,e),tw(t,t.C)),t.C++,!0)}x.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Js(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=c0(s),h0(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=X0(this,i,e),n=Yt(this.F),re(n,"RID",t),re(n,"CVER",22),this.D&&re(n,"X-HTTP-Session-Id",this.D),no(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(G0(s)))+"&"+e:this.o&&Wd(n,this.o,s)),zd(this.h,i),this.Ya&&re(n,"TYPE","init"),this.O?(re(n,"$req",e),re(n,"SID","null"),i.Z=!0,rh(i,n,null)):rh(i,n,e),this.G=2}}else this.G==3&&(t?gm(this,t):this.i.length==0||b0(this.h)||gm(this))};function gm(t,e){var n;e?n=e.m:n=t.U++;const r=Yt(t.F);re(r,"SID",t.I),re(r,"RID",n),re(r,"AID",t.T),no(t,r),t.o&&t.s&&Wd(r,t.o,t.s),n=new Js(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=X0(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),zd(t.h,n),rh(n,r,e)}function no(t,e){t.ia&&xd(t.ia,function(n,r){re(e,r,n)}),t.l&&O0({},function(n,r){re(e,r,n)})}function X0(t,e,n){n=Math.min(t.i.length,n);var r=t.l?be(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{DN(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function J0(t){t.g||t.u||(t.Z=1,v0(t.Ia,t),t.A=0)}function Kd(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ys(be(t.Ia,t),tw(t,t.A)),t.A++,!0)}x.Ia=function(){if(this.u=null,Z0(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ys(be(this.eb,this),t)}};x.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,We(10),Al(this),Z0(this))};function Gd(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function Z0(t){t.g=new Js(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Yt(t.sa);re(e,"RID","rpc"),re(e,"SID",t.I),re(e,"CI",t.L?"0":"1"),re(e,"AID",t.T),re(e,"TYPE","xmlhttp"),no(t,e),t.o&&t.s&&Wd(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Cl(Yt(e)),n.s=null,n.P=!0,A0(n,t)}x.cb=function(){this.v!=null&&(this.v=null,Al(this),Kd(this),We(19))};function Fa(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function ew(t,e){var n=null;if(t.g==e){Fa(t),Gd(t),t.g=null;var r=2}else if(sh(t.h,e))n=e.D,B0(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=_l(),xe(r,new I0(r,n)),Dl(t)}else J0(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&$N(t,e)||r==2&&Kd(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Gn(t,5);break;case 4:Gn(t,10);break;case 3:Gn(t,6);break;default:Gn(t,2)}}}function tw(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Gn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=be(t.kb,t);n||(n=new Zn("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||$a(n,"https"),Cl(n)),xN(n.toString(),r)}else We(2);t.G=0,t.l&&t.l.va(e),nw(t),Y0(t)}x.kb=function(t){t?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))};function nw(t){if(t.G=0,t.la=[],t.l){const e=z0(t.h);(e.length!=0||t.i.length!=0)&&(sm(t.la,e),sm(t.la,t.i),t.h.i.length=0,Ad(t.i),t.i.length=0),t.l.ua()}}function rw(t,e,n){var r=n instanceof Zn?Yt(n):new Zn(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Ua(r,r.m);else{var i=F.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Zn(null,void 0);r&&$a(s,r),e&&(s.g=e),i&&Ua(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&re(r,n,e),re(r,"VER",t.ma),no(t,r),r}function iw(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ue(new eo({jb:!0})):new ue(t.ra),e.Ka(t.H),e}function sw(){}x=sw.prototype;x.xa=function(){};x.wa=function(){};x.va=function(){};x.ua=function(){};x.Ra=function(){};function ba(){if(ti&&!(10<=Number(ZC)))throw Error("Environmental error: no available transport.")}ba.prototype.g=function(t,e){return new ot(t,e)};function ot(t,e){Ce.call(this),this.g=new Q0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Oa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Oa(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new fi(this)}Oe(ot,Ce);ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;We(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=rw(t,null,t.V),Dl(t)};ot.prototype.close=function(){qd(this.g)};ot.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=$d(t),t=n);e.i.push(new NN(e.ab++,t)),e.G==3&&Dl(e)};ot.prototype.M=function(){this.g.l=null,delete this.j,qd(this.g),delete this.g,ot.X.M.call(this)};function ow(t){Vd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Oe(ow,Vd);function aw(){Bd.call(this),this.status=1}Oe(aw,Bd);function fi(t){this.g=t}Oe(fi,sw);fi.prototype.xa=function(){xe(this.g,"a")};fi.prototype.wa=function(t){xe(this.g,new ow(t))};fi.prototype.va=function(t){xe(this.g,new aw)};fi.prototype.ua=function(){xe(this.g,"b")};ba.prototype.createWebChannel=ba.prototype.g;ot.prototype.send=ot.prototype.u;ot.prototype.open=ot.prototype.m;ot.prototype.close=ot.prototype.close;Tl.NO_ERROR=0;Tl.TIMEOUT=8;Tl.HTTP_ERROR=6;C0.COMPLETE="complete";N0.EventType=Xs;Xs.OPEN="a";Xs.CLOSE="b";Xs.ERROR="c";Xs.MESSAGE="d";Ce.prototype.listen=Ce.prototype.N;ue.prototype.listenOnce=ue.prototype.O;ue.prototype.getLastError=ue.prototype.Oa;ue.prototype.getLastErrorCode=ue.prototype.Ea;ue.prototype.getStatus=ue.prototype.aa;ue.prototype.getResponseJson=ue.prototype.Sa;ue.prototype.getResponseText=ue.prototype.fa;ue.prototype.send=ue.prototype.da;ue.prototype.setWithCredentials=ue.prototype.Ka;var UN=function(){return new ba},FN=function(){return _l()},Ou=Tl,bN=C0,VN=yr,ym={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},BN=eo,xo=N0,zN=ue;const vm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$e.UNAUTHENTICATED=new $e(null),$e.GOOGLE_CREDENTIALS=new $e("google-credentials-uid"),$e.FIRST_PARTY=new $e("first-party-uid"),$e.MOCK_USER=new $e("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pi="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=new gd("@firebase/firestore");function wm(){return hr.logLevel}function L(t,...e){if(hr.logLevel<=Q.DEBUG){const n=e.map(Qd);hr.debug(`Firestore (${pi}): ${t}`,...n)}}function Xt(t,...e){if(hr.logLevel<=Q.ERROR){const n=e.map(Qd);hr.error(`Firestore (${pi}): ${t}`,...n)}}function oh(t,...e){if(hr.logLevel<=Q.WARN){const n=e.map(Qd);hr.warn(`Firestore (${pi}): ${t}`,...n)}}function Qd(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t="Unexpected state"){const e=`FIRESTORE (${pi}) INTERNAL ASSERTION FAILED: `+t;throw Xt(e),new Error(e)}function ge(t,e){t||B()}function G(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends en{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($e.UNAUTHENTICATED))}shutdown(){}}class HN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class WN{constructor(e){this.t=e,this.currentUser=$e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Nn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Nn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new lw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new $e(e)}}class qN{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=$e.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ge(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class KN{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new qN(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n($e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class GN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QN{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.A=n.token,new GN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=YN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Y(t,e){return t<e?-1:t>e?1:0}function ni(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new tt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.timestamp=e}static fromTimestamp(e){return new b(e)}static min(){return new b(new tt(0,0))}static max(){return new b(new tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n,r){n===void 0?n=0:n>e.length&&B(),r===void 0?r=e.length-n:r>e.length-n&&B(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Rs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ie extends Rs{construct(e,n,r){return new ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const XN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends Rs{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return XN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(ie.fromString(e))}static fromName(e){return new M(ie.fromString(e).popFirst(5))}static empty(){return new M(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new ie(e.slice()))}}function JN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=b.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new xn(i,M.empty(),e)}function ZN(t){return new xn(t.readTime,t.key,-1)}class xn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new xn(b.min(),M.empty(),-1)}static max(){return new xn(b.max(),M.empty(),-1)}}function eR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:Y(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yd(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==tR)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(i=>i?T.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new T((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new T((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ro(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Xd.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class As{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new As("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof As&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xl(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function iR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t){return t==null}function ah(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new je(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}je.EMPTY_BYTE_STRING=new je("");const sR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pn(t){if(ge(!!t),typeof t=="string"){let e=0;const n=sR.exec(t);if(ge(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:pe(t.seconds),nanos:pe(t.nanos)}}function pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ri(t){return typeof t=="string"?je.fromBase64String(t):je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hw(t){const e=t.mapValue.fields.__previous_value__;return cw(e)?hw(e):e}function Ds(t){const e=Pn(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function dr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?cw(t)?4:oR(t)?9007199254740991:10:B()}function Mt(t,e){if(t===e)return!0;const n=dr(t);if(n!==dr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ds(t).isEqual(Ds(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Pn(r.timestampValue),o=Pn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ri(r.bytesValue).isEqual(ri(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return pe(r.geoPointValue.latitude)===pe(i.geoPointValue.latitude)&&pe(r.geoPointValue.longitude)===pe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return pe(r.integerValue)===pe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=pe(r.doubleValue),o=pe(i.doubleValue);return s===o?ah(s)===ah(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ni(t.arrayValue.values||[],e.arrayValue.values||[],Mt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Em(s)!==Em(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Mt(s[a],o[a])))return!1;return!0}(t,e);default:return B()}}function xs(t,e){return(t.values||[]).find(n=>Mt(n,e))!==void 0}function ii(t,e){if(t===e)return 0;const n=dr(t),r=dr(e);if(n!==r)return Y(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Y(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=pe(i.integerValue||i.doubleValue),a=pe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Sm(t.timestampValue,e.timestampValue);case 4:return Sm(Ds(t),Ds(e));case 5:return Y(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ri(i),a=ri(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Y(o[l],a[l]);if(u!==0)return u}return Y(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Y(pe(i.latitude),pe(s.latitude));return o!==0?o:Y(pe(i.longitude),pe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ii(o[l],a[l]);if(u)return u}return Y(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Po.mapValue&&s===Po.mapValue)return 0;if(i===Po.mapValue)return 1;if(s===Po.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Y(a[c],u[c]);if(h!==0)return h;const d=ii(o[a[c]],l[u[c]]);if(d!==0)return d}return Y(a.length,u.length)}(t.mapValue,e.mapValue);default:throw B()}}function Sm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Y(t,e);const n=Pn(t),r=Pn(e),i=Y(n.seconds,r.seconds);return i!==0?i:Y(n.nanos,r.nanos)}function si(t){return lh(t)}function lh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Pn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ri(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=lh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${lh(r.fields[a])}`;return s+"}"}(t.mapValue):B();var e,n}function uh(t){return!!t&&"integerValue"in t}function Jd(t){return!!t&&"arrayValue"in t}function _m(t){return!!t&&"nullValue"in t}function Tm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Lu(t){return!!t&&"mapValue"in t}function Yi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xl(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Yi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function oR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n){this.position=e,this.inclusive=n}}function km(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=ii(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Im(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{}class ve extends dw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new uR(e,n,r):n==="array-contains"?new dR(e,r):n==="in"?new fR(e,r):n==="not-in"?new pR(e,r):n==="array-contains-any"?new mR(e,r):new ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new cR(e,r):new hR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ii(n,this.value)):n!==null&&dr(this.value)===dr(n)&&this.matchesComparison(ii(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class $t extends dw{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new $t(e,n)}matches(e){return fw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function fw(t){return t.op==="and"}function aR(t){return lR(t)&&fw(t)}function lR(t){for(const e of t.filters)if(e instanceof $t)return!1;return!0}function pw(t){if(t instanceof ve)return t.field.canonicalString()+t.op.toString()+si(t.value);{const e=t.filters.map(n=>pw(n)).join(",");return`${t.op}(${e})`}}function mw(t,e){return t instanceof ve?function(n,r){return r instanceof ve&&n.op===r.op&&n.field.isEqual(r.field)&&Mt(n.value,r.value)}(t,e):t instanceof $t?function(n,r){return r instanceof $t&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&mw(s,r.filters[o]),!0):!1}(t,e):void B()}function gw(t){return t instanceof ve?function(e){return`${e.field.canonicalString()} ${e.op} ${si(e.value)}`}(t):t instanceof $t?function(e){return e.op.toString()+" {"+e.getFilters().map(gw).join(" ,")+"}"}(t):"Filter"}class uR extends ve{constructor(e,n,r){super(e,n,r),this.key=M.fromName(r.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.matchesComparison(n)}}class cR extends ve{constructor(e,n){super(e,"in",n),this.keys=yw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hR extends ve{constructor(e,n){super(e,"not-in",n),this.keys=yw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function yw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class dR extends ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jd(n)&&xs(n.arrayValue,this.value)}}class fR extends ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xs(this.value.arrayValue,n)}}class pR extends ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(xs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xs(this.value.arrayValue,n)}}class mR extends ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n="asc"){this.field=e,this.dir=n}}function gR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||Ae.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oo(this.root,e,this.comparator,!0)}}class Oo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ae.RED,this.left=i??Ae.EMPTY,this.right=s??Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ae(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ae.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ae(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cm(this.data.getIterator())}getIteratorFrom(e){return new Cm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Se(this.comparator);return n.data=e,n}}class Cm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new er([])}unionWith(e){let n=new Se(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new er(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ni(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Lu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yi(n)}setAll(e){let n=Ye.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Yi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Lu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Lu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){xl(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new At(Yi(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Fe(e,0,b.min(),b.min(),b.min(),At.empty(),0)}static newFoundDocument(e,n,r,i){return new Fe(e,1,n,b.min(),r,i,0)}static newNoDocument(e,n){return new Fe(e,2,n,b.min(),b.min(),At.empty(),0)}static newUnknownDocument(e,n){return new Fe(e,3,n,b.min(),b.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(b.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Nm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new yR(t,e,n,r,i,s,o)}function Zd(t){const e=G(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pw(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Pl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>si(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>si(r)).join(",")),e.ft=n}return e.ft}function ef(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!gR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!mw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Im(t.startAt,e.startAt)&&Im(t.endAt,e.endAt)}function ch(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function vR(t,e,n,r,i,s,o,a){return new Ol(t,e,n,r,i,s,o,a)}function tf(t){return new Ol(t)}function Rm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wR(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ER(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function SR(t){return t.collectionGroup!==null}function jr(t){const e=G(t);if(e.dt===null){e.dt=[];const n=ER(e),r=wR(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Xi(n)),e.dt.push(new Xi(Ye.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Xi(Ye.keyField(),s))}}}return e.dt}function Jt(t){const e=G(t);if(!e._t)if(e.limitType==="F")e._t=Nm(e.path,e.collectionGroup,jr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of jr(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Xi(s.field,o))}const r=e.endAt?new Va(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Va(e.startAt.position,e.startAt.inclusive):null;e._t=Nm(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function hh(t,e,n){return new Ol(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ll(t,e){return ef(Jt(t),Jt(e))&&t.limitType===e.limitType}function vw(t){return`${Zd(Jt(t))}|lt:${t.limitType}`}function dh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>gw(r)).join(", ")}]`),Pl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>si(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>si(r)).join(",")),`Target(${n})`}(Jt(t))}; limitType=${t.limitType})`}function nf(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):M.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of jr(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=km(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,jr(n),r)||n.endAt&&!function(i,s,o){const a=km(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,jr(n),r))}(t,e)}function _R(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ww(t){return(e,n)=>{let r=!1;for(const i of jr(t)){const s=TR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function TR(t,e,n){const r=t.field.isKeyField()?M.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ii(a,l):B()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ah(e)?"-0":e}}function IR(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(){this._=void 0}}function CR(t,e,n){return t instanceof fh?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Ba?Ew(t,e):t instanceof za?Sw(t,e):function(r,i){const s=RR(r,i),o=Am(s)+Am(r.gt);return uh(s)&&uh(r.gt)?IR(o):kR(r.yt,o)}(t,e)}function NR(t,e,n){return t instanceof Ba?Ew(t,e):t instanceof za?Sw(t,e):n}function RR(t,e){return t instanceof ph?uh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class fh extends Ml{}class Ba extends Ml{constructor(e){super(),this.elements=e}}function Ew(t,e){const n=_w(e);for(const r of t.elements)n.some(i=>Mt(i,r))||n.push(r);return{arrayValue:{values:n}}}class za extends Ml{constructor(e){super(),this.elements=e}}function Sw(t,e){let n=_w(e);for(const r of t.elements)n=n.filter(i=>!Mt(i,r));return{arrayValue:{values:n}}}class ph extends Ml{constructor(e,n){super(),this.yt=e,this.gt=n}}function Am(t){return pe(t.integerValue||t.doubleValue)}function _w(t){return Jd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function AR(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ba&&r instanceof Ba||n instanceof za&&r instanceof za?ni(n.elements,r.elements,Mt):n instanceof ph&&r instanceof ph?Mt(n.gt,r.gt):n instanceof fh&&r instanceof fh}(t.transform,e.transform)}class tr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tr}static exists(e){return new tr(void 0,e)}static updateTime(e){return new tr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class rf{}function Tw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new xR(t.key,tr.none()):new sf(t.key,t.data,tr.none());{const n=t.data,r=At.empty();let i=new Se(Ye.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new $l(t.key,r,new er(i.toArray()),tr.none())}}function DR(t,e,n){t instanceof sf?function(r,i,s){const o=r.value.clone(),a=xm(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof $l?function(r,i,s){if(!Yo(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=xm(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(kw(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ji(t,e,n,r){return t instanceof sf?function(i,s,o,a){if(!Yo(i.precondition,s))return o;const l=i.value.clone(),u=Pm(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof $l?function(i,s,o,a){if(!Yo(i.precondition,s))return o;const l=Pm(i.fieldTransforms,a,s),u=s.data;return u.setAll(kw(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Yo(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Dm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ni(n,r,(i,s)=>AR(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class sf extends rf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class $l extends rf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function kw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function xm(t,e,n){const r=new Map;ge(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,NR(o,a,n[i]))}return r}function Pm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,CR(s,o,e))}return r}class xR extends rf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe,W;function Iw(t){if(t===void 0)return Xt("GRPC error has no .code"),k.UNKNOWN;switch(t){case fe.OK:return k.OK;case fe.CANCELLED:return k.CANCELLED;case fe.UNKNOWN:return k.UNKNOWN;case fe.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case fe.INTERNAL:return k.INTERNAL;case fe.UNAVAILABLE:return k.UNAVAILABLE;case fe.UNAUTHENTICATED:return k.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case fe.NOT_FOUND:return k.NOT_FOUND;case fe.ALREADY_EXISTS:return k.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return k.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case fe.ABORTED:return k.ABORTED;case fe.OUT_OF_RANGE:return k.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return k.UNIMPLEMENTED;case fe.DATA_LOSS:return k.DATA_LOSS;default:return B()}}(W=fe||(fe={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xl(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return iR(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=new Ne(M.comparator);function On(){return OR}const Cw=new Ne(M.comparator);function Ui(...t){let e=Cw;for(const n of t)e=e.insert(n.key,n);return e}function LR(t){let e=Cw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Qn(){return Zi()}function Nw(){return Zi()}function Zi(){return new mi(t=>t.toString(),(t,e)=>t.isEqual(e))}new Ne(M.comparator);const MR=new Se(M.comparator);function q(...t){let e=MR;for(const n of t)e=e.add(n);return e}const $R=new Se(Y);function Rw(){return $R}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,io.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ul(b.min(),i,Rw(),On(),q())}}class io{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new io(r,n,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class Aw{constructor(e,n){this.targetId=e,this.Et=n}}class Dw{constructor(e,n,r=je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Om{constructor(){this.At=0,this.Rt=Mm(),this.bt=je.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=q(),n=q(),r=q();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:B()}}),new io(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=Mm()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class UR{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=On(),this.qt=Lm(),this.Ut=new Se(Y)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:B()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const s=i.target;if(ch(s))if(r===0){const o=new M(s.path);this.Qt(n,o,Fe.newNoDocument(o,b.min()))}else ge(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&ch(a.target)){const l=new M(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Fe.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=q();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new Ul(e,n,this.Ut,this.Lt,r);return this.Lt=On(),this.qt=Lm(),this.Ut=new Se(Y),i}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Om,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Se(Y),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Om),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Lm(){return new Ne(M.comparator)}function Mm(){return new Ne(M.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),bR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),VR=(()=>({and:"AND",or:"OR"}))();class BR{constructor(e,n){this.databaseId=e,this.wt=n}}function zR(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jR(t,e){return t.wt?e.toBase64():e.toUint8Array()}function Hr(t){return ge(!!t),b.fromTimestamp(function(e){const n=Pn(e);return new tt(n.seconds,n.nanos)}(t))}function HR(t,e){return function(n){return new ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function xw(t){const e=ie.fromString(t);return ge(Mw(e)),e}function Mu(t,e){const n=xw(e);if(n.get(1)!==t.databaseId.projectId)throw new $(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(Pw(n))}function mh(t,e){return HR(t.databaseId,e)}function WR(t){const e=xw(t);return e.length===4?ie.emptyPath():Pw(e)}function $m(t){return new ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Pw(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function qR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.wt?(ge(u===void 0||typeof u=="string"),je.fromBase64String(u||"")):(ge(u===void 0||u instanceof Uint8Array),je.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?k.UNKNOWN:Iw(l.code);return new $(u,l.message||"")}(o);n=new Dw(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Mu(t,r.document.name),s=Hr(r.document.updateTime),o=r.document.createTime?Hr(r.document.createTime):b.min(),a=new At({mapValue:{fields:r.document.fields}}),l=Fe.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Xo(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Mu(t,r.document),s=r.readTime?Hr(r.readTime):b.min(),o=Fe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Xo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Mu(t,r.document),s=r.removedTargetIds||[];n=new Xo([],s,i,null)}else{if(!("filter"in e))return B();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new PR(i),o=r.targetId;n=new Aw(o,s)}}return n}function KR(t,e){return{documents:[mh(t,e.path)]}}function GR(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=mh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=mh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return Lw($t.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:wr(c.field),direction:XR(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.wt||Pl(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function QR(t){let e=WR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ge(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=Ow(c);return h instanceof $t&&aR(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Xi(Er(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Pl(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Va(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Va(d,h)}(n.endAt)),vR(e,i,o,s,a,"F",l,u)}function YR(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return B()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ow(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Er(e.unaryFilter.field);return ve.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Er(e.unaryFilter.field);return ve.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Er(e.unaryFilter.field);return ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Er(e.unaryFilter.field);return ve.create(s,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(t):t.fieldFilter!==void 0?function(e){return ve.create(Er(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return $t.create(e.compositeFilter.filters.map(n=>Ow(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return B()}}(e.compositeFilter.op))}(t):B()}function XR(t){return FR[t]}function JR(t){return bR[t]}function ZR(t){return VR[t]}function wr(t){return{fieldPath:t.canonicalString()}}function Er(t){return Ye.fromServerFormat(t.fieldPath)}function Lw(t){return t instanceof ve?function(e){if(e.op==="=="){if(Tm(e.value))return{unaryFilter:{field:wr(e.field),op:"IS_NAN"}};if(_m(e.value))return{unaryFilter:{field:wr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Tm(e.value))return{unaryFilter:{field:wr(e.field),op:"IS_NOT_NAN"}};if(_m(e.value))return{unaryFilter:{field:wr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wr(e.field),op:JR(e.op),value:e.value}}}(t):t instanceof $t?function(e){const n=e.getFilters().map(r=>Lw(r));return n.length===1?n[0]:{compositeFilter:{op:ZR(e.op),filters:n}}}(t):B()}function Mw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&DR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ji(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ji(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Nw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Tw(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(b.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),q())}isEqual(e){return this.batchId===e.batchId&&ni(this.mutations,e.mutations,(n,r)=>Dm(n,r))&&ni(this.baseMutations,e.baseMutations,(n,r)=>Dm(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,r,i,s=b.min(),o=b.min(),a=je.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.ie=e}}function rA(t){const e=QR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(){this.Je=new sA}addToCollectionParentIndex(e,n){return this.Je.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(xn.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(xn.min())}updateCollectionGroup(e,n,r){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class sA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Se(ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Se(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new oi(0)}static vn(){return new oi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(){this.changes=new mi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Fe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ji(r.mutation,i,er.empty(),tt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=q()){const i=Qn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ui();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Qn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=On();const o=Zi(),a=Zi();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof $l)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),Ji(c.mutation,u,c.mutation.getFieldMask(),tt.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new aA(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Zi();let i=new Ne((o,a)=>o-a),s=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||er.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||q()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=Nw();c.forEach(d=>{if(!s.has(d)){const g=Tw(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return M.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):SR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):T.resolve(Qn());let a=-1,l=s;return o.next(u=>T.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?T.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,q())).next(c=>({batchId:a,changes:LR(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(r=>{let i=Ui();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ui();return this.indexManager.getCollectionParents(e,i).next(o=>T.forEach(o,a=>{const l=function(u,c){return new Ol(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,Fe.newInvalidDocument(u)))});let o=Ui();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&Ji(u.mutation,l,er.empty(),tt.now()),nf(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return T.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Hr(r.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:rA(r.bundledQuery),readTime:Hr(r.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(){this.overlays=new Ne(M.comparator),this.es=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Qn();return T.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.oe(e,n,s)}),T.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),T.resolve()}getOverlaysForCollection(e,n,r){const i=Qn(),s=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return T.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ne((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Qn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Qn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return T.resolve(a)}oe(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new tA(n,r));let s=this.es.get(n);s===void 0&&(s=q(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(){this.ns=new Se(Te.ss),this.rs=new Se(Te.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Te(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Te(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new M(new ie([])),r=new Te(n,e),i=new Te(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new M(new ie([])),r=new Te(n,e),i=new Te(n,e+1);let s=q();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Te(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Te{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return M.comparator(e.key,n.key)||Y(e._s,n._s)}static os(e,n){return Y(e._s,n._s)||M.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Se(Te.ss)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eA(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Te(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return T.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Te(n,0),i=new Te(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),T.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Se(Y);return n.forEach(i=>{const s=new Te(i,0),o=new Te(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),T.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new Te(new M(s),0);let a=new Se(Y);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),T.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ge(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return T.forEach(n.mutations,i=>{const s=new Te(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Te(n,0),i=this.gs.firstAfterOrEqual(r);return T.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.Es=e,this.docs=new Ne(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():Fe.newInvalidDocument(n))}getEntries(e,n){let r=On();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Fe.newInvalidDocument(i))}),T.resolve(r)}getAllFromCollection(e,n,r){let i=On();const s=new M(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||eR(ZN(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return T.resolve(i)}getAllFromCollectionGroup(e,n,r,i){B()}As(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new fA(this)}getSize(e){return T.resolve(this.size)}}class fA extends oA{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e){this.persistence=e,this.Rs=new mi(n=>Zd(n),ef),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.bs=0,this.Ps=new of,this.targetCount=0,this.vs=oi.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),T.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new oi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Dn(n),T.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(s).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Xd(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new pA(this),this.indexManager=new iA,this.remoteDocumentCache=function(r){return new dA(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new nA(n),this.Ns=new uA(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new cA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new hA(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){L("MemoryPersistence","Starting transaction:",e);const i=new gA(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return T.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class gA extends nR{constructor(e){super(),this.currentSequenceNumber=e}}class af{constructor(e){this.persistence=e,this.Fs=new of,this.$s=null}static Bs(e){return new af(e)}get Ls(){if(this.$s)return this.$s;throw B()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),T.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Ls,r=>{const i=M.fromPath(r);return this.qs(e,i).next(s=>{s||n.removeEntry(i,b.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return T.or([()=>T.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=q(),i=q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new lf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(Rm(n))return T.resolve(null);let r=Jt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=hh(n,null,"F"),r=Jt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=q(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,hh(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return Rm(n)||i.isEqual(b.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(wm()<=Q.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),dh(n)),this.Bi(e,o,n,JN(i,-1)))})}Fi(e,n){let r=new Se(ww(e));return n.forEach((i,s)=>{nf(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return wm()<=Q.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",dh(n)),this.Ni.getDocumentsMatchingQuery(e,n,xn.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new Ne(Y),this.Ui=new mi(s=>Zd(s),ef),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lA(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function wA(t,e,n,r){return new vA(t,e,n,r)}async function $w(t,e){const n=G(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function Uw(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function EA(t,e){const n=G(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(je.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(y,v,P){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(d,g,c)&&a.push(n.Cs.updateTargetData(s,g))});let l=On(),u=q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(SA(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(b.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return T.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.qi=i,s))}function SA(t,e,n){let r=q(),i=q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=On();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(b.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function _A(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,T.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new nr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function gh(t,e,n){const r=G(t),i=r.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ro(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function Um(t,e,n){const r=G(t);let i=b.min(),s=q();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=G(a),h=c.Ui.get(u);return h!==void 0?T.resolve(c.qi.get(h)):c.Cs.getTargetData(l,u)}(r,o,Jt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:b.min(),n?s:q())).next(a=>(TA(r,_R(e),a),{documents:a,Hi:s})))}function TA(t,e,n){let r=t.Ki.get(e)||b.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class Fm{constructor(){this.activeTargetIds=Rw()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kA{constructor(){this.Lr=new Fm,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Fm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);L("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(L("RestConnection","Received: ",l),l),l=>{throw oh("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+pi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=CA[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new zN;a.setWithCredentials(!0),a.listenOnce(bN.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ou.NO_ERROR:const u=a.getResponseJson();L("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Ou.TIMEOUT:L("Connection",'RPC "'+e+'" timed out'),o(new $(k.DEADLINE_EXCEEDED,"Request time out"));break;case Ou.HTTP_ERROR:const c=a.getStatus();if(L("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const g=function(y){const v=y.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(v)>=0?v:k.UNKNOWN}(d.status);o(new $(g,d.message))}else o(new $(k.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new $(k.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{L("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=UN(),o=FN(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new BN({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");L("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new NA({Hr:y=>{h?L("Connection","Not sending because WebChannel is closed:",y):(c||(L("Connection","Opening WebChannel transport."),u.open(),c=!0),L("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),g=(y,v,P)=>{y.listen(v,p=>{try{P(p)}catch(f){setTimeout(()=>{throw f},0)}})};return g(u,xo.EventType.OPEN,()=>{h||L("Connection","WebChannel transport opened.")}),g(u,xo.EventType.CLOSE,()=>{h||(h=!0,L("Connection","WebChannel transport closed"),d.io())}),g(u,xo.EventType.ERROR,y=>{h||(h=!0,oh("Connection","WebChannel transport errored:",y),d.io(new $(k.UNAVAILABLE,"The operation could not be completed")))}),g(u,xo.EventType.MESSAGE,y=>{var v;if(!h){const P=y.data[0];ge(!!P);const p=P,f=p.error||((v=p[0])===null||v===void 0?void 0:v.error);if(f){L("Connection","WebChannel received error:",f);const m=f.status;let w=function(A){const D=fe[A];if(D!==void 0)return Iw(D)}(m),I=f.message;w===void 0&&(w=k.INTERNAL,I="Unknown error status: "+m+" with message "+f.message),h=!0,d.io(new $(w,I)),u.close()}else L("Connection","WebChannel received:",P),d.ro(P)}}),g(o,VN.STAT_EVENT,y=>{y.stat===ym.PROXY?L("Connection","Detected buffering proxy"):y.stat===ym.NOPROXY&&L("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function $u(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(t){return new BR(t,!0)}class bw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new bw(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(Xt(n.toString()),Xt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new $(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class DA extends AA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.yt=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=qR(this.yt,e),r=function(i){if(!("targetChange"in i))return b.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?b.min():s.readTime?Hr(s.readTime):b.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=$m(this.yt),n.addTarget=function(i,s){let o;const a=s.target;return o=ch(a)?{documents:KR(i,a)}:{query:GR(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=jR(i,s.resumeToken):s.snapshotVersion.compareTo(b.min())>0&&(o.readTime=zR(i,s.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=YR(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=$m(this.yt),n.removeTarget=e,this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=i,this.nu=!1}su(){if(this.nu)throw new $(k.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(k.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(k.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class PA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Xt(n),this.ou=!1):L("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{oo(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=G(a);l._u.add(4),await so(l),l.gu.set("Unknown"),l._u.delete(4),await Fl(l)}(this))})}),this.gu=new PA(r,i)}}async function Fl(t){if(oo(t))for(const e of t.wu)await e(!0)}async function so(t){for(const e of t.wu)await e(!1)}function Vw(t,e){const n=G(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),hf(n)?cf(n):gi(n).ko()&&uf(n,e))}function Bw(t,e){const n=G(t),r=gi(n);n.du.delete(e),r.ko()&&zw(n,e),n.du.size===0&&(r.ko()?r.Fo():oo(n)&&n.gu.set("Unknown"))}function uf(t,e){t.yu.Ot(e.targetId),gi(t).zo(e)}function zw(t,e){t.yu.Ot(e),gi(t).Ho(e)}function cf(t){t.yu=new UR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),gi(t).start(),t.gu.uu()}function hf(t){return oo(t)&&!gi(t).No()&&t.du.size>0}function oo(t){return G(t)._u.size===0}function jw(t){t.yu=void 0}async function LA(t){t.du.forEach((e,n)=>{uf(t,e)})}async function MA(t,e){jw(t),hf(t)?(t.gu.hu(e),cf(t)):t.gu.set("Unknown")}async function $A(t,e,n){if(t.gu.set("Online"),e instanceof Dw&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vm(t,r)}else if(e instanceof Xo?t.yu.Kt(e):e instanceof Aw?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(b.min()))try{const r=await Uw(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.Zt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(je.EMPTY_BYTE_STRING,l.snapshotVersion)),zw(i,a);const u=new nr(l.target,a,1,l.sequenceNumber);uf(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await Vm(t,r)}}async function Vm(t,e,n){if(!ro(e))throw e;t._u.add(1),await so(t),t.gu.set("Offline"),n||(n=()=>Uw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Fl(t)})}async function Bm(t,e){const n=G(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=oo(n);n._u.add(3),await so(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Fl(n)}async function UA(t,e){const n=G(t);e?(n._u.delete(2),await Fl(n)):e||(n._u.add(2),await so(n),n.gu.set("Unknown"))}function gi(t){return t.pu||(t.pu=function(e,n,r){const i=G(e);return i.su(),new DA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:LA.bind(null,t),Zr:MA.bind(null,t),Wo:$A.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),hf(t)?cf(t):t.gu.set("Unknown")):(await t.pu.stop(),jw(t))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new df(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hw(t,e){if(Xt("AsyncQueue",`${e}: ${t}`),ro(t))return new $(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=Ui(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new Wr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Wr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Wr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.Tu=new Ne(M.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):B():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ai{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ai(e,n,Wr.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ll(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(){this.Au=void 0,this.listeners=[]}}class bA{constructor(){this.queries=new mi(e=>vw(e),Ll),this.onlineState="Unknown",this.Ru=new Set}}async function Ww(t,e){const n=G(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new FA),i)try{s.Au=await n.onListen(r)}catch(o){const a=Hw(o,`Initialization of query '${dh(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&ff(n)}async function qw(t,e){const n=G(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function VA(t,e){const n=G(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&ff(n)}function BA(t,e,n){const r=G(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function ff(t){t.Ru.forEach(e=>{e.next()})}class Kw{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ai(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=ai.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e){this.key=e}}class Qw{constructor(e){this.key=e}}class zA{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=q(),this.mutatedKeys=q(),this.Gu=ww(e),this.Qu=new Wr(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new zm,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=nf(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let P=!1;d&&g?d.data.isEqual(g.data)?y!==v&&(r.track({type:3,doc:g}),P=!0):this.Hu(d,g)||(r.track({type:2,doc:g}),P=!0,(l&&this.Gu(g,l)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),P=!0):d&&!g&&(r.track({type:1,doc:d}),P=!0,(l||u)&&(a=!0)),P&&(g?(o=o.add(g),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,c)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return g(h)-g(d)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new ai(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new zm,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=q(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new Qw(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new Gw(r))}),n}tc(e){this.qu=e.Hi,this.Ku=q();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return ai.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class jA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class HA{constructor(e){this.key=e,this.nc=!1}}class WA{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new mi(a=>vw(a),Ll),this.rc=new Map,this.oc=new Set,this.uc=new Ne(M.comparator),this.cc=new Map,this.ac=new of,this.hc={},this.lc=new Map,this.fc=oi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function qA(t,e){const n=ZA(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await _A(n.localStore,Jt(e));n.isPrimaryClient&&Vw(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await KA(n,e,r,a==="current",o.resumeToken)}return i}async function KA(t,e,n,r,i){t._c=(h,d,g)=>async function(y,v,P,p){let f=v.view.Wu(P);f.$i&&(f=await Um(y.localStore,v.query,!1).then(({documents:I})=>v.view.Wu(I,f)));const m=p&&p.targetChanges.get(v.targetId),w=v.view.applyChanges(f,y.isPrimaryClient,m);return Hm(y,v.targetId,w.Xu),w.snapshot}(t,h,d,g);const s=await Um(t.localStore,e,!0),o=new zA(e,s.Hi),a=o.Wu(s.documents),l=io.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Hm(t,n,u.Xu);const c=new jA(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function GA(t,e){const n=G(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Ll(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await gh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Bw(n.remoteStore,r.targetId),yh(n,r.targetId)}).catch(Yd)):(yh(n,r.targetId),await gh(n.localStore,r.targetId,!0))}async function Yw(t,e){const n=G(t);try{const r=await EA(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(ge(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?ge(o.nc):i.removedDocuments.size>0&&(ge(o.nc),o.nc=!1))}),await Jw(n,r,e)}catch(r){await Yd(r)}}function jm(t,e,n){const r=G(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=G(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&ff(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function QA(t,e,n){const r=G(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new Ne(M.comparator);o=o.insert(s,Fe.newNoDocument(s,b.min()));const a=q().add(s),l=new Ul(b.min(),new Map,new Se(Y),o,a);await Yw(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),pf(r)}else await gh(r.localStore,e,!1).then(()=>yh(r,e,n)).catch(Yd)}function yh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||Xw(t,r)})}function Xw(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Bw(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),pf(t))}function Hm(t,e,n){for(const r of n)r instanceof Gw?(t.ac.addReference(r.key,e),YA(t,r)):r instanceof Qw?(L("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||Xw(t,r.key)):B()}function YA(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(L("SyncEngine","New document in limbo: "+n),t.oc.add(r),pf(t))}function pf(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new M(ie.fromString(e)),r=t.fc.next();t.cc.set(r,new HA(n)),t.uc=t.uc.insert(n,r),Vw(t.remoteStore,new nr(Jt(tf(n.path)),r,2,Xd.at))}}async function Jw(t,e,n){const r=G(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=lf.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,l){const u=G(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>T.forEach(l,h=>T.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>T.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!ro(c))throw c;L("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.qi.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);u.qi=u.qi.insert(h,y)}}}(r.localStore,s))}async function XA(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await $w(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new $(k.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Jw(n,r.ji)}}function JA(t,e){const n=G(t),r=n.cc.get(e);if(r&&r.nc)return q().add(r.key);{let i=q();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function ZA(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QA.bind(null,e),e.sc.Wo=VA.bind(null,e.eventManager),e.sc.wc=BA.bind(null,e.eventManager),e}class eD{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Fw(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return wA(this.persistence,new yA,e.initialUser,this.yt)}yc(e){return new mA(af.Bs,this.yt)}gc(e){return new kA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>jm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=XA.bind(null,this.syncEngine),await UA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new bA}createDatastore(e){const n=Fw(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new RA(i));var i;return function(s,o,a,l){return new xA(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>jm(this.syncEngine,a,0),o=bm.C()?new bm:new IA,new OA(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new WA(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=G(e);L("RemoteStore","RemoteStore shutting down."),n._u.add(5),await so(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(t,e,n){if(!n)throw new $(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nD(t,e,n,r){if(e===!0&&r===!0)throw new $(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Wm(t){if(!M.isDocumentKey(t))throw new $(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function qm(t){if(M.isDocumentKey(t))throw new $(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function rD(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":B()}function Ps(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rD(t);throw new $(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=new Map;class Gm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new $(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,nD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gm(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new jN;switch(n.type){case"gapi":const r=n.client;return new KN(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new $(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Km.get(e);n&&(L("ComponentProvider","Removing Datastore"),Km.delete(e),n.terminate())}(this),Promise.resolve()}}function iD(t,e,n,r={}){var i;const s=(t=Ps(t,bl))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&oh("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=$e.MOCK_USER;else{o=dT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new $(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new $e(l)}t._authCredentials=new HN(new lw(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}}class Vl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vl(this.firestore,e,this._query)}}class Rn extends Vl{constructor(e,n,r){super(e,n,tf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new M(e))}withConverter(e){return new Rn(this.firestore,e,this._path)}}function sD(t,e,...n){if(t=kt(t),Zw("collection","path",e),t instanceof bl){const r=ie.fromString(e,...n);return qm(r),new Rn(t,null,r)}{if(!(t instanceof Lt||t instanceof Rn))throw new $(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return qm(r),new Rn(t.firestore,null,r)}}function oD(t,e,...n){if(t=kt(t),arguments.length===1&&(e=uw.R()),Zw("doc","path",e),t instanceof bl){const r=ie.fromString(e,...n);return Wm(r),new Lt(t,null,new M(r))}{if(!(t instanceof Lt||t instanceof Rn))throw new $(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return Wm(r),new Lt(t.firestore,t instanceof Rn?t.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Xt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=$e.UNAUTHENTICATED,this.clientId=uw.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{L("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(L("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Hw(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lD(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await $w(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function uD(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cD(t);L("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Bm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Bm(e.remoteStore,s)),t.onlineComponents=e}async function cD(t){return t.offlineComponents||(L("FirestoreClient","Using default OfflineComponentProvider"),await lD(t,new eD)),t.offlineComponents}async function hD(t){return t.onlineComponents||(L("FirestoreClient","Using default OnlineComponentProvider"),await uD(t,new tD)),t.onlineComponents}async function t1(t){const e=await hD(t),n=e.eventManager;return n.onListen=qA.bind(null,e.syncEngine),n.onUnlisten=GA.bind(null,e.syncEngine),n}function dD(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new e1({next:h=>{s.enqueueAndForget(()=>qw(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new $(k.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new $(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Kw(tf(o.path),u,{includeMetadataChanges:!0,Nu:!0});return Ww(i,c)}(await t1(t),t.asyncQueue,e,n,r)),r.promise}function fD(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new e1({next:h=>{s.enqueueAndForget(()=>qw(i,c)),h.fromCache&&a.source==="server"?l.reject(new $(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Kw(o,u,{includeMetadataChanges:!0,Nu:!0});return Ww(i,c)}(await t1(t),t.asyncQueue,e,n,r)),r.promise}class pD{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new bw(this,"async_queue_retry"),this.Wc=()=>{const n=$u();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=$u();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=$u();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Nn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!ro(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Xt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=df.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.Uc.push(i),i}zc(){this.Kc&&B()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class mf extends bl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new pD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||i1(this),this._firestoreClient.terminate()}}function n1(t,e){const n=typeof t=="object"?t:Rv(),r=typeof t=="string"?t:e||"(default)",i=vd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=uT("firestore");s&&iD(i,...s)}return i}function r1(t){return t._firestoreClient||i1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function i1(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new rR(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new aD(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ja(je.fromBase64String(e))}catch(n){throw new $(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ja(je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}const gD=new RegExp("[~\\*/\\[\\]]");function yD(t,e,n){if(e.search(gD)>=0)throw Qm(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new s1(...e.split("."))._internalPath}catch{throw Qm(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qm(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new $(k.INVALID_ARGUMENT,a+t+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(a1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vD extends o1{data(){return super.data()}}function a1(t,e){return typeof e=="string"?yD(t,e):e instanceof s1?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ED{convertValue(e,n="none"){switch(dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ri(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw B()}}convertObject(e,n){const r={};return xl(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new mD(pe(e.latitude),pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=hw(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ds(e));default:return null}}convertTimestamp(e){const n=Pn(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ie.fromString(e);ge(Mw(r));const i=new As(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(n)||Xt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class l1 extends o1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Jo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(a1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Jo extends l1{data(e={}){return super.data(e)}}class SD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Fi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Jo(this._firestore,this._userDataWriter,r.key,r,new Fi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Jo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Fi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Jo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Fi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:_D(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _D(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TD(t){t=Ps(t,Lt);const e=Ps(t.firestore,mf);return dD(r1(e),t._key).then(n=>ID(e,t,n))}class u1 extends ED{constructor(e){super(),this.firestore=e}convertBytes(e){return new ja(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,n)}}function kD(t){t=Ps(t,Vl);const e=Ps(t.firestore,mf),n=r1(e),r=new u1(e);return wD(t._query),fD(n,t._query).then(i=>new SD(e,r,t,i))}function ID(t,e,n){const r=n.docs.get(e._key),i=new u1(t);return new l1(t,i,e._key,r,new Fi(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){pi=n})(Bs),Zr(new lr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new mf(new WN(n.getProvider("auth-internal")),new QN(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new $(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new As(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Cn(vm,"3.8.0",t),Cn(vm,"3.8.0","esm2017")})();function CD(t){const e=n1(),{id:n}=AE(),[r,i]=_.useState(!0),[s,o]=_.useState(null);async function a(){const l=oD(e,"assignments",n),u=await TD(l);u.exists()&&(o({id:u.id,...u.data()}),i(!1))}return _.useEffect(()=>{a()},[]),r?C("div",{children:"Loading..."}):de(Ks,{children:[C("h2",{children:s.title}),C("div",{dangerouslySetInnerHTML:{__html:s.description}})]})}function ND(t){const e=t.assignment;return C(Ks,{children:de("div",{className:"assignment__item",children:[C("h5",{children:e.title}),C(qu,{to:`/assignments/${e.id}`,className:"btn",children:"Show assignment"})]})})}function RD(){const t=_.useContext(qs),e=kh(),[n,r]=_.useState([]);_.useEffect(()=>{t.isUserLoggedIn()||e("/")},[t.user]);async function i(){const s=n1(),o=await kD(sD(s,"assignments"));let a=[];await o.forEach(l=>{a.push({id:l.id,...l.data()})}),r(a)}return _.useEffect(()=>{i()},[]),C("ul",{children:n.map(s=>C("li",{children:C(ND,{assignment:s})},s.id))})}var E={},AD={get exports(){return E},set exports(t){E=t}},DD="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",xD=DD,PD=xD;function c1(){}function h1(){}h1.resetWarningCache=c1;var OD=function(){function t(r,i,s,o,a,l){if(l!==PD){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:h1,resetWarningCache:c1};return n.PropTypes=n,n};AD.exports=OD();var vh=globalThis&&globalThis.__assign||function(){return vh=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},vh.apply(this,arguments)},d1={onActivate:E.func,onAddUndo:E.func,onBeforeAddUndo:E.func,onBeforeExecCommand:E.func,onBeforeGetContent:E.func,onBeforeRenderUI:E.func,onBeforeSetContent:E.func,onBeforePaste:E.func,onBlur:E.func,onChange:E.func,onClearUndos:E.func,onClick:E.func,onContextMenu:E.func,onCommentChange:E.func,onCopy:E.func,onCut:E.func,onDblclick:E.func,onDeactivate:E.func,onDirty:E.func,onDrag:E.func,onDragDrop:E.func,onDragEnd:E.func,onDragGesture:E.func,onDragOver:E.func,onDrop:E.func,onExecCommand:E.func,onFocus:E.func,onFocusIn:E.func,onFocusOut:E.func,onGetContent:E.func,onHide:E.func,onInit:E.func,onKeyDown:E.func,onKeyPress:E.func,onKeyUp:E.func,onLoadContent:E.func,onMouseDown:E.func,onMouseEnter:E.func,onMouseLeave:E.func,onMouseMove:E.func,onMouseOut:E.func,onMouseOver:E.func,onMouseUp:E.func,onNodeChange:E.func,onObjectResizeStart:E.func,onObjectResized:E.func,onObjectSelected:E.func,onPaste:E.func,onPostProcess:E.func,onPostRender:E.func,onPreProcess:E.func,onProgressState:E.func,onRedo:E.func,onRemove:E.func,onReset:E.func,onSaveContent:E.func,onSelectionChange:E.func,onSetAttrib:E.func,onSetContent:E.func,onShow:E.func,onSubmit:E.func,onUndo:E.func,onVisualAid:E.func,onSkinLoadError:E.func,onThemeLoadError:E.func,onModelLoadError:E.func,onPluginLoadError:E.func,onIconsLoadError:E.func,onLanguageLoadError:E.func},LD=vh({apiKey:E.string,id:E.string,inline:E.bool,init:E.object,initialValue:E.string,onEditorChange:E.func,value:E.string,tagName:E.string,cloudChannel:E.string,plugins:E.oneOfType([E.string,E.array]),toolbar:E.oneOfType([E.string,E.array]),disabled:E.bool,textareaName:E.string,tinymceScriptSrc:E.string,rollback:E.oneOfType([E.number,E.oneOf([!1])]),scriptLoading:E.shape({async:E.bool,defer:E.bool,delay:E.number})},d1),Uu=function(t){return typeof t=="function"},Ym=function(t){return t in d1},Xm=function(t){return t.substr(2)},MD=function(t,e,n,r,i,s,o){var a=Object.keys(i).filter(Ym),l=Object.keys(s).filter(Ym),u=a.filter(function(h){return s[h]===void 0}),c=l.filter(function(h){return i[h]===void 0});u.forEach(function(h){var d=Xm(h),g=o[d];n(d,g),delete o[d]}),c.forEach(function(h){var d=r(t,h),g=Xm(h);o[g]=d,e(g,d)})},$D=function(t,e,n,r,i){return MD(i,t.on.bind(t),t.off.bind(t),function(s,o){return function(a){var l;return(l=s(o))===null||l===void 0?void 0:l(a,t)}},e,n,r)},Jm=0,f1=function(t){var e=Date.now(),n=Math.floor(Math.random()*1e9);return Jm++,t+"_"+n+Jm+String(e)},Zm=function(t){return t!==null&&(t.tagName.toLowerCase()==="textarea"||t.tagName.toLowerCase()==="input")},eg=function(t){return typeof t>"u"||t===""?[]:Array.isArray(t)?t:t.split(" ")},UD=function(t,e){return eg(t).concat(eg(e))},FD=function(){return window.InputEvent&&typeof InputEvent.prototype.getTargetRanges=="function"},bD=function(t){if(!("isConnected"in Node.prototype)){for(var e=t,n=t.parentNode;n!=null;)e=n,n=e.parentNode;return e===t.ownerDocument}return t.isConnected},tg=function(t,e){t!==void 0&&(t.mode!=null&&typeof t.mode=="object"&&typeof t.mode.set=="function"?t.mode.set(e):t.setMode(e))},ng=function(){return{listeners:[],scriptId:f1("tiny-script"),scriptLoading:!1,scriptLoaded:!1}},VD=function(){var t=ng(),e=function(i,s,o,a,l,u){var c=s.createElement("script");c.referrerPolicy="origin",c.type="application/javascript",c.id=i,c.src=o,c.async=a,c.defer=l;var h=function(){c.removeEventListener("load",h),u()};c.addEventListener("load",h),s.head&&s.head.appendChild(c)},n=function(i,s,o,a,l,u){var c=function(){return e(t.scriptId,i,s,o,a,function(){t.listeners.forEach(function(h){return h()}),t.scriptLoaded=!0})};t.scriptLoaded?u():(t.listeners.push(u),t.scriptLoading||(t.scriptLoading=!0,l>0?setTimeout(c,l):c()))},r=function(){t=ng()};return{load:n,reinitialize:r}},BD=VD(),Fu=function(t){var e=t;return e&&e.tinymce?e.tinymce:null},zD=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Ha=globalThis&&globalThis.__assign||function(){return Ha=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Ha.apply(this,arguments)},p1=function(t){zD(e,t);function e(n){var r=this,i,s,o;return r=t.call(this,n)||this,r.rollbackTimer=void 0,r.valueCursor=void 0,r.rollbackChange=function(){var a=r.editor,l=r.props.value;a&&l&&l!==r.currentContent&&a.undoManager.ignore(function(){if(a.setContent(l),r.valueCursor&&(!r.inline||a.hasFocus()))try{a.selection.moveToBookmark(r.valueCursor)}catch{}}),r.rollbackTimer=void 0},r.handleBeforeInput=function(a){if(r.props.value!==void 0&&r.props.value===r.currentContent&&r.editor&&(!r.inline||r.editor.hasFocus()))try{r.valueCursor=r.editor.selection.getBookmark(3)}catch{}},r.handleBeforeInputSpecial=function(a){(a.key==="Enter"||a.key==="Backspace"||a.key==="Delete")&&r.handleBeforeInput(a)},r.handleEditorChange=function(a){var l=r.editor;if(l&&l.initialized){var u=l.getContent();r.props.value!==void 0&&r.props.value!==u&&r.props.rollback!==!1&&(r.rollbackTimer||(r.rollbackTimer=window.setTimeout(r.rollbackChange,typeof r.props.rollback=="number"?r.props.rollback:200))),u!==r.currentContent&&(r.currentContent=u,Uu(r.props.onEditorChange)&&r.props.onEditorChange(u,l))}},r.handleEditorChangeSpecial=function(a){(a.key==="Backspace"||a.key==="Delete")&&r.handleEditorChange(a)},r.initialise=function(a){var l,u,c;a===void 0&&(a=0);var h=r.elementRef.current;if(h){if(!bD(h)){if(a===0)setTimeout(function(){return r.initialise(1)},1);else if(a<100)setTimeout(function(){return r.initialise(a+1)},100);else throw new Error("tinymce can only be initialised when in a document");return}var d=Fu(r.view);if(!d)throw new Error("tinymce should have been loaded into global scope");var g=Ha(Ha({},r.props.init),{selector:void 0,target:h,readonly:r.props.disabled,inline:r.inline,plugins:UD((l=r.props.init)===null||l===void 0?void 0:l.plugins,r.props.plugins),toolbar:(u=r.props.toolbar)!==null&&u!==void 0?u:(c=r.props.init)===null||c===void 0?void 0:c.toolbar,setup:function(y){r.editor=y,r.bindHandlers({}),r.inline&&!Zm(h)&&y.once("PostRender",function(v){y.setContent(r.getInitialValue(),{no_events:!0})}),r.props.init&&Uu(r.props.init.setup)&&r.props.init.setup(y)},init_instance_callback:function(y){var v,P,p=r.getInitialValue();r.currentContent=(v=r.currentContent)!==null&&v!==void 0?v:y.getContent(),r.currentContent!==p&&(r.currentContent=p,y.setContent(p),y.undoManager.clear(),y.undoManager.add(),y.setDirty(!1));var f=(P=r.props.disabled)!==null&&P!==void 0?P:!1;tg(r.editor,f?"readonly":"design"),r.props.init&&Uu(r.props.init.init_instance_callback)&&r.props.init.init_instance_callback(y)}});r.inline||(h.style.visibility=""),Zm(h)&&(h.value=r.getInitialValue()),d.init(g)}},r.id=r.props.id||f1("tiny-react"),r.elementRef=_.createRef(),r.inline=(o=(i=r.props.inline)!==null&&i!==void 0?i:(s=r.props.init)===null||s===void 0?void 0:s.inline)!==null&&o!==void 0?o:!1,r.boundHandlers={},r}return Object.defineProperty(e.prototype,"view",{get:function(){var n,r;return(r=(n=this.elementRef.current)===null||n===void 0?void 0:n.ownerDocument.defaultView)!==null&&r!==void 0?r:window},enumerable:!1,configurable:!0}),e.prototype.componentDidUpdate=function(n){var r=this,i,s;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(n),this.editor.initialized)){if(this.currentContent=(i=this.currentContent)!==null&&i!==void 0?i:this.editor.getContent(),typeof this.props.initialValue=="string"&&this.props.initialValue!==n.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if(typeof this.props.value=="string"&&this.props.value!==this.currentContent){var o=this.editor;o.undoManager.transact(function(){var l;if(!r.inline||o.hasFocus())try{l=o.selection.getBookmark(3)}catch{}var u=r.valueCursor;if(o.setContent(r.props.value),!r.inline||o.hasFocus())for(var c=0,h=[l,u];c<h.length;c++){var d=h[c];if(d)try{o.selection.moveToBookmark(d),r.valueCursor=d;break}catch{}}})}if(this.props.disabled!==n.disabled){var a=(s=this.props.disabled)!==null&&s!==void 0?s:!1;tg(this.editor,a?"readonly":"design")}}},e.prototype.componentDidMount=function(){var n,r,i,s,o,a;Fu(this.view)!==null?this.initialise():this.elementRef.current&&this.elementRef.current.ownerDocument&&BD.load(this.elementRef.current.ownerDocument,this.getScriptSrc(),(r=(n=this.props.scriptLoading)===null||n===void 0?void 0:n.async)!==null&&r!==void 0?r:!1,(s=(i=this.props.scriptLoading)===null||i===void 0?void 0:i.defer)!==null&&s!==void 0?s:!1,(a=(o=this.props.scriptLoading)===null||o===void 0?void 0:o.delay)!==null&&a!==void 0?a:0,this.initialise)},e.prototype.componentWillUnmount=function(){var n=this,r=this.editor;r&&(r.off(this.changeEvents(),this.handleEditorChange),r.off(this.beforeInputEvent(),this.handleBeforeInput),r.off("keypress",this.handleEditorChangeSpecial),r.off("keydown",this.handleBeforeInputSpecial),r.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach(function(i){r.off(i,n.boundHandlers[i])}),this.boundHandlers={},r.remove(),this.editor=void 0)},e.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},e.prototype.changeEvents=function(){var n,r,i,s=(i=(r=(n=Fu(this.view))===null||n===void 0?void 0:n.Env)===null||r===void 0?void 0:r.browser)===null||i===void 0?void 0:i.isIE();return s?"change keyup compositionend setcontent CommentChange":"change input compositionend setcontent CommentChange"},e.prototype.beforeInputEvent=function(){return FD()?"beforeinput SelectionChange":"SelectionChange"},e.prototype.renderInline=function(){var n=this.props.tagName,r=n===void 0?"div":n;return _.createElement(r,{ref:this.elementRef,id:this.id})},e.prototype.renderIframe=function(){return _.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},e.prototype.getScriptSrc=function(){if(typeof this.props.tinymceScriptSrc=="string")return this.props.tinymceScriptSrc;var n=this.props.cloudChannel,r=this.props.apiKey?this.props.apiKey:"no-api-key";return"https://cdn.tiny.cloud/1/".concat(r,"/tinymce/").concat(n,"/tinymce.min.js")},e.prototype.getInitialValue=function(){return typeof this.props.initialValue=="string"?this.props.initialValue:typeof this.props.value=="string"?this.props.value:""},e.prototype.bindHandlers=function(n){var r=this;if(this.editor!==void 0){$D(this.editor,n,this.props,this.boundHandlers,function(a){return r.props[a]});var i=function(a){return a.onEditorChange!==void 0||a.value!==void 0},s=i(n),o=i(this.props);!s&&o?(this.editor.on(this.changeEvents(),this.handleEditorChange),this.editor.on(this.beforeInputEvent(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):s&&!o&&(this.editor.off(this.changeEvents(),this.handleEditorChange),this.editor.off(this.beforeInputEvent(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},e.propTypes=LD,e.defaultProps={cloudChannel:"6"},e}(_.Component);const jD="_actions_zf31i_1",HD="_control_zf31i_6",bu={actions:jD,control:HD};function WD(t){const e=_.useRef();return de(Ks,{children:[C("div",{className:"card__tools",children:C("button",{type:"button",onClick:()=>t.removeTask(t.task.id),children:"✕"})}),de("div",{className:"input-control",children:[C("label",{htmlFor:"task-title",children:"Title"}),C("input",{type:"text",required:!0,id:"task-title",ref:e})]}),de("div",{className:"input-control",children:[C("label",{htmlFor:"assignment-description",children:"Description"}),C(p1,{apiKey:"8i0stpcus5q22adp9e30d84adytwyxcdbnjwv71k7lzre29h",init:{height:200,menubar:!1,selector:"textarea",plugins:"link image table",statusbar:!1,toolbar:"undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image table"}})]})]})}function qD(){const t=_.useRef(1),[e,n]=_.useState([]);function r(s){n(o=>o.filter(a=>a.id!==s))}const i=_.useCallback(s=>{s.preventDefault(),n(o=>o.concat({id:t.current,title:"alpha",information:"Information goes here",timeSpan:10,groupAssignment:!0})),t.current++,console.log("exec id increase",t)});return de("div",{children:[C("h3",{children:"Tasks"}),e.map((s,o)=>C(WD,{index:o,task:s,removeTask:a=>r(a)},o)),C("button",{onClick:i,children:"Add Task"})]})}function KD(t){_.useRef(t.id||null);const e=_.useRef(t.title||"");_.useRef(t.description||""),_.useRef(t.tasks||[]);function n(r){r.preventDefault()}return de("form",{onSubmit:n,children:[C("h2",{children:"New Assignment"}),de(Ks,{children:[de("div",{className:bu.control,children:[C("label",{htmlFor:"assignment-title",children:"Title"}),C("input",{type:"text",required:!0,ref:e,id:"assignment-title"})]}),de("div",{className:bu.control,children:[C("label",{htmlFor:"assignment-description",children:"Description"}),C(p1,{apiKey:"8i0stpcus5q22adp9e30d84adytwyxcdbnjwv71k7lzre29h",init:{height:300,menubar:!1,selector:"textarea",plugins:"link image table",statusbar:!1,toolbar:"undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image table"}})]}),C(qD,{}),C("hr",{}),C("div",{className:bu.actions,children:C("button",{className:"btn btn--primary",children:"Save"})})]})]})}function GD(t){const e=_.useContext(qs),n=kh();return _.useEffect(()=>{e.isUserLoggedIn()||n("/")},[e.user]),C(Bu,{children:C(KD,{})})}function QD(){return C(bC,{children:de(VE,{children:[C(Ri,{path:"/",element:C(VC,{})}),C(Ri,{path:"/assignments/:id",element:C(CD,{})}),C(Ri,{path:"/admin/assignments",element:C(RD,{})}),C(Ri,{path:"/admin/assignments/new",element:C(GD,{})})]})})}Ku.createRoot(document.getElementById("root")).render(C(cg.StrictMode,{children:C(xC,{children:C(WE,{children:C(QD,{})})})}));
