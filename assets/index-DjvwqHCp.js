(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Jf={exports:{}},No={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function US(){if(g_)return No;g_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:u}}return No.Fragment=t,No.jsx=i,No.jsxs=i,No}var __;function LS(){return __||(__=1,Jf.exports=US()),Jf.exports}var ke=LS(),$f={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function NS(){if(v_)return re;v_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function v(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function S(L,$,xt){this.props=L,this.context=$,this.refs=A,this.updater=xt||y}S.prototype.isReactComponent={},S.prototype.setState=function(L,$){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,$,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=S.prototype;function O(L,$,xt){this.props=L,this.context=$,this.refs=A,this.updater=xt||y}var D=O.prototype=new _;D.constructor=O,E(D,S.prototype),D.isPureReactComponent=!0;var U=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function I(L,$,xt,yt,Q,dt){return xt=dt.ref,{$$typeof:s,type:L,key:$,ref:xt!==void 0?xt:null,props:dt}}function W(L,$){return I(L.type,$,void 0,void 0,void 0,L.props)}function w(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function C(L){var $={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(xt){return $[xt]})}var F=/\/+/g;function ot(L,$){return typeof L=="object"&&L!==null&&L.key!=null?C(""+L.key):$.toString(36)}function st(){}function gt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(st,st):(L.status="pending",L.then(function($){L.status==="pending"&&(L.status="fulfilled",L.value=$)},function($){L.status==="pending"&&(L.status="rejected",L.reason=$)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ct(L,$,xt,yt,Q){var dt=typeof L;(dt==="undefined"||dt==="boolean")&&(L=null);var St=!1;if(L===null)St=!0;else switch(dt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(L.$$typeof){case s:case t:St=!0;break;case g:return St=L._init,ct(St(L._payload),$,xt,yt,Q)}}if(St)return Q=Q(L),St=yt===""?"."+ot(L,0):yt,U(Q)?(xt="",St!=null&&(xt=St.replace(F,"$&/")+"/"),ct(Q,$,xt,"",function(Yt){return Yt})):Q!=null&&(w(Q)&&(Q=W(Q,xt+(Q.key==null||L&&L.key===Q.key?"":(""+Q.key).replace(F,"$&/")+"/")+St)),$.push(Q)),1;St=0;var At=yt===""?".":yt+":";if(U(L))for(var Nt=0;Nt<L.length;Nt++)yt=L[Nt],dt=At+ot(yt,Nt),St+=ct(yt,$,xt,dt,Q);else if(Nt=v(L),typeof Nt=="function")for(L=Nt.call(L),Nt=0;!(yt=L.next()).done;)yt=yt.value,dt=At+ot(yt,Nt++),St+=ct(yt,$,xt,dt,Q);else if(dt==="object"){if(typeof L.then=="function")return ct(gt(L),$,xt,yt,Q);throw $=String(L),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return St}function B(L,$,xt){if(L==null)return L;var yt=[],Q=0;return ct(L,yt,"","",function(dt){return $.call(xt,dt,Q++)}),yt}function Z(L){if(L._status===-1){var $=L._result;$=$(),$.then(function(xt){(L._status===0||L._status===-1)&&(L._status=1,L._result=xt)},function(xt){(L._status===0||L._status===-1)&&(L._status=2,L._result=xt)}),L._status===-1&&(L._status=0,L._result=$)}if(L._status===1)return L._result.default;throw L._result}var Y=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Et(){}return re.Children={map:B,forEach:function(L,$,xt){B(L,function(){$.apply(this,arguments)},xt)},count:function(L){var $=0;return B(L,function(){$++}),$},toArray:function(L){return B(L,function($){return $})||[]},only:function(L){if(!w(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},re.Component=S,re.Fragment=i,re.Profiler=l,re.PureComponent=O,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,re.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},re.cache=function(L){return function(){return L.apply(null,arguments)}},re.cloneElement=function(L,$,xt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var yt=E({},L.props),Q=L.key,dt=void 0;if($!=null)for(St in $.ref!==void 0&&(dt=void 0),$.key!==void 0&&(Q=""+$.key),$)!H.call($,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&$.ref===void 0||(yt[St]=$[St]);var St=arguments.length-2;if(St===1)yt.children=xt;else if(1<St){for(var At=Array(St),Nt=0;Nt<St;Nt++)At[Nt]=arguments[Nt+2];yt.children=At}return I(L.type,Q,void 0,void 0,dt,yt)},re.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},re.createElement=function(L,$,xt){var yt,Q={},dt=null;if($!=null)for(yt in $.key!==void 0&&(dt=""+$.key),$)H.call($,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Q[yt]=$[yt]);var St=arguments.length-2;if(St===1)Q.children=xt;else if(1<St){for(var At=Array(St),Nt=0;Nt<St;Nt++)At[Nt]=arguments[Nt+2];Q.children=At}if(L&&L.defaultProps)for(yt in St=L.defaultProps,St)Q[yt]===void 0&&(Q[yt]=St[yt]);return I(L,dt,void 0,void 0,null,Q)},re.createRef=function(){return{current:null}},re.forwardRef=function(L){return{$$typeof:d,render:L}},re.isValidElement=w,re.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:Z}},re.memo=function(L,$){return{$$typeof:p,type:L,compare:$===void 0?null:$}},re.startTransition=function(L){var $=z.T,xt={};z.T=xt;try{var yt=L(),Q=z.S;Q!==null&&Q(xt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(Et,Y)}catch(dt){Y(dt)}finally{z.T=$}},re.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},re.use=function(L){return z.H.use(L)},re.useActionState=function(L,$,xt){return z.H.useActionState(L,$,xt)},re.useCallback=function(L,$){return z.H.useCallback(L,$)},re.useContext=function(L){return z.H.useContext(L)},re.useDebugValue=function(){},re.useDeferredValue=function(L,$){return z.H.useDeferredValue(L,$)},re.useEffect=function(L,$,xt){var yt=z.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(L,$)},re.useId=function(){return z.H.useId()},re.useImperativeHandle=function(L,$,xt){return z.H.useImperativeHandle(L,$,xt)},re.useInsertionEffect=function(L,$){return z.H.useInsertionEffect(L,$)},re.useLayoutEffect=function(L,$){return z.H.useLayoutEffect(L,$)},re.useMemo=function(L,$){return z.H.useMemo(L,$)},re.useOptimistic=function(L,$){return z.H.useOptimistic(L,$)},re.useReducer=function(L,$,xt){return z.H.useReducer(L,$,xt)},re.useRef=function(L){return z.H.useRef(L)},re.useState=function(L){return z.H.useState(L)},re.useSyncExternalStore=function(L,$,xt){return z.H.useSyncExternalStore(L,$,xt)},re.useTransition=function(){return z.H.useTransition()},re.version="19.1.0",re}var x_;function Ad(){return x_||(x_=1,$f.exports=NS()),$f.exports}var _t=Ad(),th={exports:{}},Oo={},eh={exports:{}},nh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function OS(){return S_||(S_=1,function(s){function t(B,Z){var Y=B.length;B.push(Z);t:for(;0<Y;){var Et=Y-1>>>1,L=B[Et];if(0<l(L,Z))B[Et]=Z,B[Y]=L,Y=Et;else break t}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Z=B[0],Y=B.pop();if(Y!==Z){B[0]=Y;t:for(var Et=0,L=B.length,$=L>>>1;Et<$;){var xt=2*(Et+1)-1,yt=B[xt],Q=xt+1,dt=B[Q];if(0>l(yt,Y))Q<L&&0>l(dt,yt)?(B[Et]=dt,B[Q]=Y,Et=Q):(B[Et]=yt,B[xt]=Y,Et=xt);else if(Q<L&&0>l(dt,Y))B[Et]=dt,B[Q]=Y,Et=Q;else break t}}return Z}function l(B,Z){var Y=B.sortIndex-Z.sortIndex;return Y!==0?Y:B.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,x=null,v=3,y=!1,E=!1,A=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function U(B){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=B)r(p),Z.sortIndex=Z.expirationTime,t(m,Z);else break;Z=i(p)}}function z(B){if(A=!1,U(B),!E)if(i(m)!==null)E=!0,H||(H=!0,ot());else{var Z=i(p);Z!==null&&ct(z,Z.startTime-B)}}var H=!1,I=-1,W=5,w=-1;function C(){return S?!0:!(s.unstable_now()-w<W)}function F(){if(S=!1,H){var B=s.unstable_now();w=B;var Z=!0;try{t:{E=!1,A&&(A=!1,O(I),I=-1),y=!0;var Y=v;try{e:{for(U(B),x=i(m);x!==null&&!(x.expirationTime>B&&C());){var Et=x.callback;if(typeof Et=="function"){x.callback=null,v=x.priorityLevel;var L=Et(x.expirationTime<=B);if(B=s.unstable_now(),typeof L=="function"){x.callback=L,U(B),Z=!0;break e}x===i(m)&&r(m),U(B)}else r(m);x=i(m)}if(x!==null)Z=!0;else{var $=i(p);$!==null&&ct(z,$.startTime-B),Z=!1}}break t}finally{x=null,v=Y,y=!1}Z=void 0}}finally{Z?ot():H=!1}}}var ot;if(typeof D=="function")ot=function(){D(F)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,gt=st.port2;st.port1.onmessage=F,ot=function(){gt.postMessage(null)}}else ot=function(){_(F,0)};function ct(B,Z){I=_(function(){B(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(B){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var Y=v;v=Z;try{return B()}finally{v=Y}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=v;v=B;try{return Z()}finally{v=Y}},s.unstable_scheduleCallback=function(B,Z,Y){var Et=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Et+Y:Et):Y=Et,B){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Y+L,B={id:g++,callback:Z,priorityLevel:B,startTime:Y,expirationTime:L,sortIndex:-1},Y>Et?(B.sortIndex=Y,t(p,B),i(m)===null&&B===i(p)&&(A?(O(I),I=-1):A=!0,ct(z,Y-Et))):(B.sortIndex=L,t(m,B),E||y||(E=!0,H||(H=!0,ot()))),B},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(B){var Z=v;return function(){var Y=v;v=Z;try{return B.apply(this,arguments)}finally{v=Y}}}}(nh)),nh}var y_;function PS(){return y_||(y_=1,eh.exports=OS()),eh.exports}var ih={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function BS(){if(M_)return An;M_=1;var s=Ad();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},An.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},An.requestFormReset=function(m){r.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},An.useFormStatus=function(){return h.H.useHostTransitionStatus()},An.version="19.1.0",An}var E_;function IS(){if(E_)return ih.exports;E_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),ih.exports=BS(),ih.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function zS(){if(T_)return Oo;T_=1;var s=PS(),t=Ad(),i=IS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),e;if(f===o)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var M=!1,T=c.child;T;){if(T===a){M=!0,a=c,o=f;break}if(T===o){M=!0,o=c,a=f;break}T=T.sibling}if(!M){for(T=f.child;T;){if(T===a){M=!0,a=f,o=c;break}if(T===o){M=!0,o=f,a=c;break}T=T.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function ot(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case A:return"StrictMode";case z:return"Suspense";case H:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case D:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:gt(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return gt(e(n))}catch{}}return null}var ct=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Et=[],L=-1;function $(e){return{current:e}}function xt(e){0>L||(e.current=Et[L],Et[L]=null,L--)}function yt(e,n){L++,Et[L]=e.current,e.current=n}var Q=$(null),dt=$(null),St=$(null),At=$(null);function Nt(e,n){switch(yt(St,n),yt(dt,e),yt(Q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Xg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Xg(n),e=Wg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}xt(Q),yt(Q,e)}function Yt(){xt(Q),xt(dt),xt(St)}function ae(e){e.memoizedState!==null&&yt(At,e);var n=Q.current,a=Wg(n,e.type);n!==a&&(yt(dt,e),yt(Q,a))}function we(e){dt.current===e&&(xt(Q),xt(dt)),At.current===e&&(xt(At),Co._currentValue=Y)}var fe=Object.prototype.hasOwnProperty,He=s.unstable_scheduleCallback,V=s.unstable_cancelCallback,Pn=s.unstable_shouldYield,me=s.unstable_requestPaint,ee=s.unstable_now,Xt=s.unstable_getCurrentPriorityLevel,De=s.unstable_ImmediatePriority,kt=s.unstable_UserBlockingPriority,N=s.unstable_NormalPriority,b=s.unstable_LowPriority,tt=s.unstable_IdlePriority,vt=s.log,Mt=s.unstable_setDisableYieldValue,ft=null,It=null;function Rt(e){if(typeof vt=="function"&&Mt(e),It&&typeof It.setStrictMode=="function")try{It.setStrictMode(ft,e)}catch{}}var Ct=Math.clz32?Math.clz32:Ft,ge=Math.log,bt=Math.LN2;function Ft(e){return e>>>=0,e===0?32:31-(ge(e)/bt|0)|0}var Wt=256,Zt=4194304;function Ot(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function le(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?c=Ot(o):(M&=T,M!==0?c=Ot(M):a||(a=T&~e,a!==0&&(c=Ot(a))))):(T=o&~f,T!==0?c=Ot(T):M!==0?c=Ot(M):a||(a=o&~e,a!==0&&(c=Ot(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function te(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ue(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=Wt;return Wt<<=1,(Wt&4194048)===0&&(Wt=256),e}function Dt(){var e=Zt;return Zt<<=1,(Zt&62914560)===0&&(Zt=4194304),e}function lt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function pt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pt(e,n,a,o,c,f){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,P=e.expirationTimes,J=e.hiddenUpdates;for(a=M&~a;0<a;){var ut=31-Ct(a),mt=1<<ut;T[ut]=0,P[ut]=-1;var et=J[ut];if(et!==null)for(J[ut]=null,ut=0;ut<et.length;ut++){var nt=et[ut];nt!==null&&(nt.lane&=-536870913)}a&=~mt}o!==0&&Lt(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(M&~n))}function Lt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ct(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function ie(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ct(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function ze(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function tn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Me(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:c_(e.type))}function qn(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var hn=Math.random().toString(36).slice(2),sn="__reactFiber$"+hn,xn="__reactProps$"+hn,Bn="__reactContainer$"+hn,qa="__reactEvents$"+hn,nl="__reactListeners$"+hn,il="__reactHandles$"+hn,Ya="__reactResources$"+hn,la="__reactMarker$"+hn;function ua(e){delete e[sn],delete e[xn],delete e[qa],delete e[nl],delete e[il]}function Ni(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Bn]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Zg(e);e!==null;){if(a=e[sn])return a;e=Zg(e)}return n}e=a,a=e.parentNode}return null}function Oi(e){if(e=e[sn]||e[Bn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function ja(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ca(e){var n=e[Ya];return n||(n=e[Ya]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(e){e[la]=!0}var al=new Set,rl={};function R(e,n){X(e,n),X(e+"Capture",n)}function X(e,n){for(rl[e]=n,e=0;e<n.length;e++)al.add(n[e])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},j={};function Tt(e){return fe.call(j,e)?!0:fe.call(at,e)?!1:it.test(e)?j[e]=!0:(at[e]=!0,!1)}function wt(e,n,a){if(Tt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function zt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Bt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Qt,$t;function Gt(e){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+$t}var he=!1;function xe(e,n){if(!e||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(nt){var et=nt}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(nt){et=nt}e.call(mt.prototype)}}else{try{throw Error()}catch(nt){et=nt}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(nt){if(nt&&et&&typeof nt.stack=="string")return[nt.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),M=f[0],T=f[1];if(M&&T){var P=M.split(`
`),J=T.split(`
`);for(c=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(o===P.length||c===J.length)for(o=P.length-1,c=J.length-1;1<=o&&0<=c&&P[o]!==J[c];)c--;for(;1<=o&&0<=c;o--,c--)if(P[o]!==J[c]){if(o!==1||c!==1)do if(o--,c--,0>c||P[o]!==J[c]){var ut=`
`+P[o].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=o&&0<=c);break}}}finally{he=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Gt(a):""}function qe(e){switch(e.tag){case 26:case 27:case 5:return Gt(e.type);case 16:return Gt("Lazy");case 13:return Gt("Suspense");case 19:return Gt("SuspenseList");case 0:case 15:return xe(e.type,!1);case 11:return xe(e.type.render,!1);case 1:return xe(e.type,!0);case 31:return Gt("Activity");default:return""}}function Ge(e){try{var n="";do n+=qe(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function on(e){var n=qt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(M){o=""+M,f.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function _e(e){e._valueTracker||(e._valueTracker=on(e))}function In(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=qt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dn=/[\n"\\]/g;function dn(e){return e.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Le(e,n,a,o,c,f,M,T){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ne(n)):e.value!==""+ne(n)&&(e.value=""+ne(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Tn(e,M,ne(n)):a!=null?Tn(e,M,ne(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ne(T):e.removeAttribute("name")}function Un(e,n,a,o,c,f,M,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Tn(e,n,a){n==="number"&&di(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ye(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Sn(e,n,a){if(n!=null&&(n=""+ne(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ne(a):""}function Dr(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ct(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ne(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function zn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var C0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||C0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Wd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Xd(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Xd(e,f,n[f])}function Ku(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var w0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),D0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sl(e){return D0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Qu=null;function Ju(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ur=null,Lr=null;function qd(e){var n=Oi(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Le(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+dn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[xn]||null;if(!c)throw Error(r(90));Le(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&In(o)}break t;case"textarea":Sn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ye(e,!!a.multiple,n,!1)}}}var $u=!1;function Yd(e,n,a){if($u)return e(n,a);$u=!0;try{var o=e(n);return o}finally{if($u=!1,(Ur!==null||Lr!==null)&&(Wl(),Ur&&(n=Ur,e=Lr,Lr=Ur=null,qd(n),e)))for(n=0;n<e.length;n++)qd(e[n])}}function Hs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tc=!1;if(Pi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){tc=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{tc=!1}var fa=null,ec=null,ol=null;function jd(){if(ol)return ol;var e,n=ec,a=n.length,o,c="value"in fa?fa.value:fa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===c[f-o];o++);return ol=c.slice(e,1<o?1-o:void 0)}function ll(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ul(){return!0}function Zd(){return!1}function Fn(e){function n(a,o,c,f,M){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=M,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ul:Zd,this.isPropagationStopped=Zd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=Fn(Za),Vs=g({},Za,{view:0,detail:0}),U0=Fn(Vs),nc,ic,ks,fl=g({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ks&&(ks&&e.type==="mousemove"?(nc=e.screenX-ks.screenX,ic=e.screenY-ks.screenY):ic=nc=0,ks=e),nc)},movementY:function(e){return"movementY"in e?e.movementY:ic}}),Kd=Fn(fl),L0=g({},fl,{dataTransfer:0}),N0=Fn(L0),O0=g({},Vs,{relatedTarget:0}),ac=Fn(O0),P0=g({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),B0=Fn(P0),I0=g({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),z0=Fn(I0),F0=g({},Za,{data:0}),Qd=Fn(F0),H0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=V0[e])?!!n[e]:!1}function rc(){return k0}var X0=g({},Vs,{key:function(e){if(e.key){var n=H0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ll(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?G0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rc,charCode:function(e){return e.type==="keypress"?ll(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ll(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),W0=Fn(X0),q0=g({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jd=Fn(q0),Y0=g({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rc}),j0=Fn(Y0),Z0=g({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),K0=Fn(Z0),Q0=g({},fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),J0=Fn(Q0),$0=g({},Za,{newState:0,oldState:0}),tx=Fn($0),ex=[9,13,27,32],sc=Pi&&"CompositionEvent"in window,Xs=null;Pi&&"documentMode"in document&&(Xs=document.documentMode);var nx=Pi&&"TextEvent"in window&&!Xs,$d=Pi&&(!sc||Xs&&8<Xs&&11>=Xs),tp=" ",ep=!1;function np(e,n){switch(e){case"keyup":return ex.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nr=!1;function ix(e,n){switch(e){case"compositionend":return ip(n);case"keypress":return n.which!==32?null:(ep=!0,tp);case"textInput":return e=n.data,e===tp&&ep?null:e;default:return null}}function ax(e,n){if(Nr)return e==="compositionend"||!sc&&np(e,n)?(e=jd(),ol=ec=fa=null,Nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return $d&&n.locale!=="ko"?null:n.data;default:return null}}var rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ap(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!rx[e.type]:n==="textarea"}function rp(e,n,a,o){Ur?Lr?Lr.push(o):Lr=[o]:Ur=o,n=Ql(n,"onChange"),0<n.length&&(a=new cl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Ws=null,qs=null;function sx(e){Fg(e,0)}function hl(e){var n=ja(e);if(In(n))return e}function sp(e,n){if(e==="change")return n}var op=!1;if(Pi){var oc;if(Pi){var lc="oninput"in document;if(!lc){var lp=document.createElement("div");lp.setAttribute("oninput","return;"),lc=typeof lp.oninput=="function"}oc=lc}else oc=!1;op=oc&&(!document.documentMode||9<document.documentMode)}function up(){Ws&&(Ws.detachEvent("onpropertychange",cp),qs=Ws=null)}function cp(e){if(e.propertyName==="value"&&hl(qs)){var n=[];rp(n,qs,e,Ju(e)),Yd(sx,n)}}function ox(e,n,a){e==="focusin"?(up(),Ws=n,qs=a,Ws.attachEvent("onpropertychange",cp)):e==="focusout"&&up()}function lx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hl(qs)}function ux(e,n){if(e==="click")return hl(n)}function cx(e,n){if(e==="input"||e==="change")return hl(n)}function fx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:fx;function Ys(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!fe.call(n,c)||!Yn(e[c],n[c]))return!1}return!0}function fp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hp(e,n){var a=fp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=fp(a)}}function dp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?dp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function pp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=di(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=di(e.document)}return n}function uc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var hx=Pi&&"documentMode"in document&&11>=document.documentMode,Or=null,cc=null,js=null,fc=!1;function mp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fc||Or==null||Or!==di(o)||(o=Or,"selectionStart"in o&&uc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),js&&Ys(js,o)||(js=o,o=Ql(cc,"onSelect"),0<o.length&&(n=new cl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Or)))}function Ka(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Pr={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},hc={},gp={};Pi&&(gp=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function Qa(e){if(hc[e])return hc[e];if(!Pr[e])return e;var n=Pr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in gp)return hc[e]=n[a];return e}var _p=Qa("animationend"),vp=Qa("animationiteration"),xp=Qa("animationstart"),dx=Qa("transitionrun"),px=Qa("transitionstart"),mx=Qa("transitioncancel"),Sp=Qa("transitionend"),yp=new Map,dc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");dc.push("scrollEnd");function pi(e,n){yp.set(e,n),R(n,[e])}var Mp=new WeakMap;function ni(e,n){if(typeof e=="object"&&e!==null){var a=Mp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ge(n)},Mp.set(e,n),n)}return{value:e,source:n,stack:Ge(n)}}var ii=[],Br=0,pc=0;function dl(){for(var e=Br,n=pc=Br=0;n<e;){var a=ii[n];ii[n++]=null;var o=ii[n];ii[n++]=null;var c=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,o!==null&&c!==null){var M=o.pending;M===null?c.next=c:(c.next=M.next,M.next=c),o.pending=c}f!==0&&Ep(a,c,f)}}function pl(e,n,a,o){ii[Br++]=e,ii[Br++]=n,ii[Br++]=a,ii[Br++]=o,pc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function mc(e,n,a,o){return pl(e,n,a,o),ml(e)}function Ir(e,n){return pl(e,null,null,n),ml(e)}function Ep(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Ct(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function ml(e){if(50<So)throw So=0,Mf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zr={};function gx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,n,a,o){return new gx(e,n,a,o)}function gc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bi(e,n){var a=e.alternate;return a===null?(a=jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Tp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function gl(e,n,a,o,c,f){var M=0;if(o=e,typeof e=="function")gc(e)&&(M=1);else if(typeof e=="string")M=vS(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=jn(31,a,n,c),e.elementType=w,e.lanes=f,e;case E:return Ja(a.children,c,f,n);case A:M=8,c|=24;break;case S:return e=jn(12,a,n,c|2),e.elementType=S,e.lanes=f,e;case z:return e=jn(13,a,n,c),e.elementType=z,e.lanes=f,e;case H:return e=jn(19,a,n,c),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case D:M=10;break t;case O:M=9;break t;case U:M=11;break t;case I:M=14;break t;case W:M=16,o=null;break t}M=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=jn(M,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function Ja(e,n,a,o){return e=jn(7,e,o,n),e.lanes=a,e}function _c(e,n,a){return e=jn(6,e,null,n),e.lanes=a,e}function vc(e,n,a){return n=jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Fr=[],Hr=0,_l=null,vl=0,ai=[],ri=0,$a=null,Ii=1,zi="";function tr(e,n){Fr[Hr++]=vl,Fr[Hr++]=_l,_l=e,vl=n}function bp(e,n,a){ai[ri++]=Ii,ai[ri++]=zi,ai[ri++]=$a,$a=e;var o=Ii;e=zi;var c=32-Ct(o)-1;o&=~(1<<c),a+=1;var f=32-Ct(n)+c;if(30<f){var M=c-c%5;f=(o&(1<<M)-1).toString(32),o>>=M,c-=M,Ii=1<<32-Ct(n)+c|a<<c|o,zi=f+e}else Ii=1<<f|a<<c|o,zi=e}function xc(e){e.return!==null&&(tr(e,1),bp(e,1,0))}function Sc(e){for(;e===_l;)_l=Fr[--Hr],Fr[Hr]=null,vl=Fr[--Hr],Fr[Hr]=null;for(;e===$a;)$a=ai[--ri],ai[ri]=null,zi=ai[--ri],ai[ri]=null,Ii=ai[--ri],ai[ri]=null}var Ln=null,je=null,be=!1,er=null,bi=!1,yc=Error(r(519));function nr(e){var n=Error(r(418,""));throw Qs(ni(n,e)),yc}function Ap(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[sn]=e,n[xn]=o,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)pe(Mo[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),Un(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),_e(n);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),Dr(n,o.value,o.defaultValue,o.children),_e(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||kg(n.textContent,a)?(o.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),o.onScroll!=null&&pe("scroll",n),o.onScrollEnd!=null&&pe("scrollend",n),o.onClick!=null&&(n.onclick=Jl),n=!0):n=!1,n||nr(e)}function Rp(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:Ln=Ln.return}}function Zs(e){if(e!==Ln)return!1;if(!be)return Rp(e),be=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||zf(e.type,e.memoizedProps)),a=!a),a&&je&&nr(e),Rp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){je=gi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}je=null}}else n===27?(n=je,Ra(e.type)?(e=Vf,Vf=null,je=e):je=n):je=Ln?gi(e.stateNode.nextSibling):null;return!0}function Ks(){je=Ln=null,be=!1}function Cp(){var e=er;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),er=null),e}function Qs(e){er===null?er=[e]:er.push(e)}var Mc=$(null),ir=null,Fi=null;function ha(e,n,a){yt(Mc,n._currentValue),n._currentValue=a}function Hi(e){e._currentValue=Mc.current,xt(Mc)}function Ec(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Tc(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var M=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var P=0;P<n.length;P++)if(T.context===n[P]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Ec(f.return,a,e),o||(M=null);break t}f=T.next}}else if(c.tag===18){if(M=c.return,M===null)throw Error(r(341));M.lanes|=a,f=M.alternate,f!==null&&(f.lanes|=a),Ec(M,a,e),M=null}else M=c.child;if(M!==null)M.return=c;else for(M=c;M!==null;){if(M===e){M=null;break}if(c=M.sibling,c!==null){c.return=M.return,M=c;break}M=M.return}c=M}}function Js(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var M=c.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var T=c.type;Yn(c.pendingProps.value,M.value)||(e!==null?e.push(T):e=[T])}}else if(c===At.current){if(M=c.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Co):e=[Co])}c=c.return}e!==null&&Tc(n,e,a,o),n.flags|=262144}function xl(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ar(e){ir=e,Fi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bn(e){return wp(ir,e)}function Sl(e,n){return ir===null&&ar(e),wp(e,n)}function wp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(e===null)throw Error(r(308));Fi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Fi=Fi.next=n;return a}var _x=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},vx=s.unstable_scheduleCallback,xx=s.unstable_NormalPriority,ln={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bc(){return{controller:new _x,data:new Map,refCount:0}}function $s(e){e.refCount--,e.refCount===0&&vx(xx,function(){e.controller.abort()})}var to=null,Ac=0,Gr=0,Vr=null;function Sx(e,n){if(to===null){var a=to=[];Ac=0,Gr=wf(),Vr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ac++,n.then(Dp,Dp),n}function Dp(){if(--Ac===0&&to!==null){Vr!==null&&(Vr.status="fulfilled");var e=to;to=null,Gr=0,Vr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function yx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Up=B.S;B.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Sx(e,n),Up!==null&&Up(e,n)};var rr=$(null);function Rc(){var e=rr.current;return e!==null?e:Fe.pooledCache}function yl(e,n){n===null?yt(rr,rr.current):yt(rr,n.pool)}function Lp(){var e=Rc();return e===null?null:{parent:ln._currentValue,pool:e}}var eo=Error(r(460)),Np=Error(r(474)),Ml=Error(r(542)),Cc={then:function(){}};function Op(e){return e=e.status,e==="fulfilled"||e==="rejected"}function El(){}function Pp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(El,El),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ip(e),e;default:if(typeof n.status=="string")n.then(El,El);else{if(e=Fe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ip(e),e}throw no=n,eo}}var no=null;function Bp(){if(no===null)throw Error(r(459));var e=no;return no=null,e}function Ip(e){if(e===eo||e===Ml)throw Error(r(483))}var da=!1;function wc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ma(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Re&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=ml(e),Ep(e,null,a),n}return pl(e,o,n,a),ml(e)}function io(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ie(e,a)}}function Uc(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=M:f=f.next=M,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Lc=!1;function ao(){if(Lc){var e=Vr;if(e!==null)throw e}}function ro(e,n,a,o){Lc=!1;var c=e.updateQueue;da=!1;var f=c.firstBaseUpdate,M=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var P=T,J=P.next;P.next=null,M===null?f=J:M.next=J,M=P;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,T=ut.lastBaseUpdate,T!==M&&(T===null?ut.firstBaseUpdate=J:T.next=J,ut.lastBaseUpdate=P))}if(f!==null){var mt=c.baseState;M=0,ut=J=P=null,T=f;do{var et=T.lane&-536870913,nt=et!==T.lane;if(nt?(Se&et)===et:(o&et)===et){et!==0&&et===Gr&&(Lc=!0),ut!==null&&(ut=ut.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Jt=e,jt=T;et=n;var Pe=a;switch(jt.tag){case 1:if(Jt=jt.payload,typeof Jt=="function"){mt=Jt.call(Pe,mt,et);break t}mt=Jt;break t;case 3:Jt.flags=Jt.flags&-65537|128;case 0:if(Jt=jt.payload,et=typeof Jt=="function"?Jt.call(Pe,mt,et):Jt,et==null)break t;mt=g({},mt,et);break t;case 2:da=!0}}et=T.callback,et!==null&&(e.flags|=64,nt&&(e.flags|=8192),nt=c.callbacks,nt===null?c.callbacks=[et]:nt.push(et))}else nt={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ut===null?(J=ut=nt,P=mt):ut=ut.next=nt,M|=et;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;nt=T,T=nt.next,nt.next=null,c.lastBaseUpdate=nt,c.shared.pending=null}}while(!0);ut===null&&(P=mt),c.baseState=P,c.firstBaseUpdate=J,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),Ea|=M,e.lanes=M,e.memoizedState=mt}}function zp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Fp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)zp(a[e],n)}var kr=$(null),Tl=$(0);function Hp(e,n){e=Yi,yt(Tl,e),yt(kr,n),Yi=e|n.baseLanes}function Nc(){yt(Tl,Yi),yt(kr,kr.current)}function Oc(){Yi=Tl.current,xt(kr),xt(Tl)}var ga=0,ue=null,Ne=null,nn=null,bl=!1,Xr=!1,sr=!1,Al=0,so=0,Wr=null,Mx=0;function Je(){throw Error(r(321))}function Pc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function Bc(e,n,a,o,c,f){return ga=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?Em:Tm,sr=!1,f=a(o,c),sr=!1,Xr&&(f=Vp(n,a,o,c)),Gp(e),f}function Gp(e){B.H=Ll;var n=Ne!==null&&Ne.next!==null;if(ga=0,nn=Ne=ue=null,bl=!1,so=0,Wr=null,n)throw Error(r(300));e===null||pn||(e=e.dependencies,e!==null&&xl(e)&&(pn=!0))}function Vp(e,n,a,o){ue=e;var c=0;do{if(Xr&&(Wr=null),so=0,Xr=!1,25<=c)throw Error(r(301));if(c+=1,nn=Ne=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=wx,f=n(a,o)}while(Xr);return f}function Ex(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?oo(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(ue.flags|=1024),n}function Ic(){var e=Al!==0;return Al=0,e}function zc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Fc(e){if(bl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}bl=!1}ga=0,nn=Ne=ue=null,Xr=!1,so=Al=0,Wr=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?ue.memoizedState=nn=e:nn=nn.next=e,nn}function an(){if(Ne===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=nn===null?ue.memoizedState:nn.next;if(n!==null)nn=n,Ne=e;else{if(e===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},nn===null?ue.memoizedState=nn=e:nn=nn.next=e}return nn}function Hc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(e){var n=so;return so+=1,Wr===null&&(Wr=[]),e=Pp(Wr,e,n),n=ue,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Em:Tm),e}function Rl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oo(e);if(e.$$typeof===D)return bn(e)}throw Error(r(438,String(e)))}function Gc(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Hc(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function Gi(e,n){return typeof n=="function"?n(e):n}function Cl(e){var n=an();return Vc(n,Ne,e)}function Vc(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var M=c.next;c.next=f.next,f.next=M}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=M=null,P=null,J=n,ut=!1;do{var mt=J.lane&-536870913;if(mt!==J.lane?(Se&mt)===mt:(ga&mt)===mt){var et=J.revertLane;if(et===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),mt===Gr&&(ut=!0);else if((ga&et)===et){J=J.next,et===Gr&&(ut=!0);continue}else mt={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(T=P=mt,M=f):P=P.next=mt,ue.lanes|=et,Ea|=et;mt=J.action,sr&&a(f,mt),f=J.hasEagerState?J.eagerState:a(f,mt)}else et={lane:mt,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(T=P=et,M=f):P=P.next=et,ue.lanes|=mt,Ea|=mt;J=J.next}while(J!==null&&J!==n);if(P===null?M=f:P.next=T,!Yn(f,e.memoizedState)&&(pn=!0,ut&&(a=Vr,a!==null)))throw a;e.memoizedState=f,e.baseState=M,e.baseQueue=P,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function kc(e){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var M=c=c.next;do f=e(f,M.action),M=M.next;while(M!==c);Yn(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function kp(e,n,a){var o=ue,c=an(),f=be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!Yn((Ne||c).memoizedState,a);M&&(c.memoizedState=a,pn=!0),c=c.queue;var T=qp.bind(null,o,c,e);if(lo(2048,8,T,[e]),c.getSnapshot!==n||M||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,qr(9,wl(),Wp.bind(null,o,c,a,n),null),Fe===null)throw Error(r(349));f||(ga&124)!==0||Xp(o,n,a)}return a}function Xp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Hc(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Wp(e,n,a,o){n.value=a,n.getSnapshot=o,Yp(n)&&jp(e)}function qp(e,n,a){return a(function(){Yp(n)&&jp(e)})}function Yp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function jp(e){var n=Ir(e,2);n!==null&&$n(n,e,2)}function Xc(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),sr){Rt(!0);try{a()}finally{Rt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:e},n}function Zp(e,n,a,o){return e.baseState=a,Vc(e,Ne,typeof o=="function"?o:Gi)}function Tx(e,n,a,o,c){if(Ul(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){f.listeners.push(M)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Kp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Kp(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=B.T,M={};B.T=M;try{var T=a(c,o),P=B.S;P!==null&&P(M,T),Qp(e,n,T)}catch(J){Wc(e,n,J)}finally{B.T=f}}else try{f=a(c,o),Qp(e,n,f)}catch(J){Wc(e,n,J)}}function Qp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Jp(e,n,o)},function(o){return Wc(e,n,o)}):Jp(e,n,a)}function Jp(e,n,a){n.status="fulfilled",n.value=a,$p(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Kp(e,a)))}function Wc(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,$p(n),n=n.next;while(n!==o)}e.action=null}function $p(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function tm(e,n){return n}function em(e,n){if(be){var a=Fe.formState;if(a!==null){t:{var o=ue;if(be){if(je){e:{for(var c=je,f=bi;c.nodeType!==8;){if(!f){c=null;break e}if(c=gi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){je=gi(c.nextSibling),o=c.data==="F!";break t}}nr(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tm,lastRenderedState:n},a.queue=o,a=Sm.bind(null,ue,o),o.dispatch=a,o=Xc(!1),f=Kc.bind(null,ue,!1,o.queue),o=Hn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=Tx.bind(null,ue,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function nm(e){var n=an();return im(n,Ne,e)}function im(e,n,a){if(n=Vc(e,n,tm)[0],e=Cl(Gi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=oo(n)}catch(M){throw M===eo?Ml:M}else o=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,qr(9,wl(),bx.bind(null,c,a),null)),[o,f,e]}function bx(e,n){e.action=n}function am(e){var n=an(),a=Ne;if(a!==null)return im(n,a,e);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function qr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Hc(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function wl(){return{destroy:void 0,resource:void 0}}function rm(){return an().memoizedState}function Dl(e,n,a,o){var c=Hn();o=o===void 0?null:o,ue.flags|=e,c.memoizedState=qr(1|n,wl(),a,o)}function lo(e,n,a,o){var c=an();o=o===void 0?null:o;var f=c.memoizedState.inst;Ne!==null&&o!==null&&Pc(o,Ne.memoizedState.deps)?c.memoizedState=qr(n,f,a,o):(ue.flags|=e,c.memoizedState=qr(1|n,f,a,o))}function sm(e,n){Dl(8390656,8,e,n)}function om(e,n){lo(2048,8,e,n)}function lm(e,n){return lo(4,2,e,n)}function um(e,n){return lo(4,4,e,n)}function cm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function fm(e,n,a){a=a!=null?a.concat([e]):null,lo(4,4,cm.bind(null,n,e),a)}function qc(){}function hm(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Pc(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function dm(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Pc(n,o[1]))return o[0];if(o=e(),sr){Rt(!0);try{e()}finally{Rt(!1)}}return a.memoizedState=[o,n],o}function Yc(e,n,a){return a===void 0||(ga&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=gg(),ue.lanes|=e,Ea|=e,a)}function pm(e,n,a,o){return Yn(a,n)?a:kr.current!==null?(e=Yc(e,a,o),Yn(e,n)||(pn=!0),e):(ga&42)===0?(pn=!0,e.memoizedState=a):(e=gg(),ue.lanes|=e,Ea|=e,n)}function mm(e,n,a,o,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var M=B.T,T={};B.T=T,Kc(e,!1,n,a);try{var P=c(),J=B.S;if(J!==null&&J(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ut=yx(P,o);uo(e,n,ut,Jn(e))}else uo(e,n,o,Jn(e))}catch(mt){uo(e,n,{then:function(){},status:"rejected",reason:mt},Jn())}finally{Z.p=f,B.T=M}}function Ax(){}function jc(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=gm(e).queue;mm(e,c,n,Y,a===null?Ax:function(){return _m(e),a(o)})}function gm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function _m(e){var n=gm(e).next.queue;uo(e,n,{},Jn())}function Zc(){return bn(Co)}function vm(){return an().memoizedState}function xm(){return an().memoizedState}function Rx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();e=pa(a);var o=ma(n,e,a);o!==null&&($n(o,n,a),io(o,n,a)),n={cache:bc()},e.payload=n;return}n=n.return}}function Cx(e,n,a){var o=Jn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ul(e)?ym(n,a):(a=mc(e,n,a,o),a!==null&&($n(a,e,o),Mm(a,n,o)))}function Sm(e,n,a){var o=Jn();uo(e,n,a,o)}function uo(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ul(e))ym(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var M=n.lastRenderedState,T=f(M,a);if(c.hasEagerState=!0,c.eagerState=T,Yn(T,M))return pl(e,n,c,0),Fe===null&&dl(),!1}catch{}finally{}if(a=mc(e,n,c,o),a!==null)return $n(a,e,o),Mm(a,n,o),!0}return!1}function Kc(e,n,a,o){if(o={lane:2,revertLane:wf(),action:o,hasEagerState:!1,eagerState:null,next:null},Ul(e)){if(n)throw Error(r(479))}else n=mc(e,a,o,2),n!==null&&$n(n,e,2)}function Ul(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function ym(e,n){Xr=bl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Mm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ie(e,a)}}var Ll={readContext:bn,use:Rl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je},Em={readContext:bn,use:Rl,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:bn,useEffect:sm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Dl(4194308,4,cm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Dl(4194308,4,e,n)},useInsertionEffect:function(e,n){Dl(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var o=e();if(sr){Rt(!0);try{e()}finally{Rt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Hn();if(a!==void 0){var c=a(n);if(sr){Rt(!0);try{a(n)}finally{Rt(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Cx.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=Xc(e);var n=e.queue,a=Sm.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:qc,useDeferredValue:function(e,n){var a=Hn();return Yc(a,e,n)},useTransition:function(){var e=Xc(!1);return e=mm.bind(null,ue,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ue,c=Hn();if(be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Fe===null)throw Error(r(349));(Se&124)!==0||Xp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,sm(qp.bind(null,o,f,e),[e]),o.flags|=2048,qr(9,wl(),Wp.bind(null,o,f,a,n),null),a},useId:function(){var e=Hn(),n=Fe.identifierPrefix;if(be){var a=zi,o=Ii;a=(o&~(1<<32-Ct(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Al++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Mx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Zc,useFormState:em,useActionState:em,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Kc.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:Gc,useCacheRefresh:function(){return Hn().memoizedState=Rx.bind(null,ue)}},Tm={readContext:bn,use:Rl,useCallback:hm,useContext:bn,useEffect:om,useImperativeHandle:fm,useInsertionEffect:lm,useLayoutEffect:um,useMemo:dm,useReducer:Cl,useRef:rm,useState:function(){return Cl(Gi)},useDebugValue:qc,useDeferredValue:function(e,n){var a=an();return pm(a,Ne.memoizedState,e,n)},useTransition:function(){var e=Cl(Gi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:kp,useId:vm,useHostTransitionStatus:Zc,useFormState:nm,useActionState:nm,useOptimistic:function(e,n){var a=an();return Zp(a,Ne,e,n)},useMemoCache:Gc,useCacheRefresh:xm},wx={readContext:bn,use:Rl,useCallback:hm,useContext:bn,useEffect:om,useImperativeHandle:fm,useInsertionEffect:lm,useLayoutEffect:um,useMemo:dm,useReducer:kc,useRef:rm,useState:function(){return kc(Gi)},useDebugValue:qc,useDeferredValue:function(e,n){var a=an();return Ne===null?Yc(a,e,n):pm(a,Ne.memoizedState,e,n)},useTransition:function(){var e=kc(Gi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:kp,useId:vm,useHostTransitionStatus:Zc,useFormState:am,useActionState:am,useOptimistic:function(e,n){var a=an();return Ne!==null?Zp(a,Ne,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Gc,useCacheRefresh:xm},Yr=null,co=0;function Nl(e){var n=co;return co+=1,Yr===null&&(Yr=[]),Pp(Yr,e,n)}function fo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ol(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function bm(e){var n=e._init;return n(e._payload)}function Am(e){function n(q,G){if(e){var K=q.deletions;K===null?(q.deletions=[G],q.flags|=16):K.push(G)}}function a(q,G){if(!e)return null;for(;G!==null;)n(q,G),G=G.sibling;return null}function o(q){for(var G=new Map;q!==null;)q.key!==null?G.set(q.key,q):G.set(q.index,q),q=q.sibling;return G}function c(q,G){return q=Bi(q,G),q.index=0,q.sibling=null,q}function f(q,G,K){return q.index=K,e?(K=q.alternate,K!==null?(K=K.index,K<G?(q.flags|=67108866,G):K):(q.flags|=67108866,G)):(q.flags|=1048576,G)}function M(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function T(q,G,K,ht){return G===null||G.tag!==6?(G=_c(K,q.mode,ht),G.return=q,G):(G=c(G,K),G.return=q,G)}function P(q,G,K,ht){var Ht=K.type;return Ht===E?ut(q,G,K.props.children,ht,K.key):G!==null&&(G.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===W&&bm(Ht)===G.type)?(G=c(G,K.props),fo(G,K),G.return=q,G):(G=gl(K.type,K.key,K.props,null,q.mode,ht),fo(G,K),G.return=q,G)}function J(q,G,K,ht){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=vc(K,q.mode,ht),G.return=q,G):(G=c(G,K.children||[]),G.return=q,G)}function ut(q,G,K,ht,Ht){return G===null||G.tag!==7?(G=Ja(K,q.mode,ht,Ht),G.return=q,G):(G=c(G,K),G.return=q,G)}function mt(q,G,K){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=_c(""+G,q.mode,K),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case v:return K=gl(G.type,G.key,G.props,null,q.mode,K),fo(K,G),K.return=q,K;case y:return G=vc(G,q.mode,K),G.return=q,G;case W:var ht=G._init;return G=ht(G._payload),mt(q,G,K)}if(ct(G)||ot(G))return G=Ja(G,q.mode,K,null),G.return=q,G;if(typeof G.then=="function")return mt(q,Nl(G),K);if(G.$$typeof===D)return mt(q,Sl(q,G),K);Ol(q,G)}return null}function et(q,G,K,ht){var Ht=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ht!==null?null:T(q,G,""+K,ht);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case v:return K.key===Ht?P(q,G,K,ht):null;case y:return K.key===Ht?J(q,G,K,ht):null;case W:return Ht=K._init,K=Ht(K._payload),et(q,G,K,ht)}if(ct(K)||ot(K))return Ht!==null?null:ut(q,G,K,ht,null);if(typeof K.then=="function")return et(q,G,Nl(K),ht);if(K.$$typeof===D)return et(q,G,Sl(q,K),ht);Ol(q,K)}return null}function nt(q,G,K,ht,Ht){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return q=q.get(K)||null,T(G,q,""+ht,Ht);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case v:return q=q.get(ht.key===null?K:ht.key)||null,P(G,q,ht,Ht);case y:return q=q.get(ht.key===null?K:ht.key)||null,J(G,q,ht,Ht);case W:var ce=ht._init;return ht=ce(ht._payload),nt(q,G,K,ht,Ht)}if(ct(ht)||ot(ht))return q=q.get(K)||null,ut(G,q,ht,Ht,null);if(typeof ht.then=="function")return nt(q,G,K,Nl(ht),Ht);if(ht.$$typeof===D)return nt(q,G,K,Sl(G,ht),Ht);Ol(G,ht)}return null}function Jt(q,G,K,ht){for(var Ht=null,ce=null,Vt=G,Kt=G=0,gn=null;Vt!==null&&Kt<K.length;Kt++){Vt.index>Kt?(gn=Vt,Vt=null):gn=Vt.sibling;var Ee=et(q,Vt,K[Kt],ht);if(Ee===null){Vt===null&&(Vt=gn);break}e&&Vt&&Ee.alternate===null&&n(q,Vt),G=f(Ee,G,Kt),ce===null?Ht=Ee:ce.sibling=Ee,ce=Ee,Vt=gn}if(Kt===K.length)return a(q,Vt),be&&tr(q,Kt),Ht;if(Vt===null){for(;Kt<K.length;Kt++)Vt=mt(q,K[Kt],ht),Vt!==null&&(G=f(Vt,G,Kt),ce===null?Ht=Vt:ce.sibling=Vt,ce=Vt);return be&&tr(q,Kt),Ht}for(Vt=o(Vt);Kt<K.length;Kt++)gn=nt(Vt,q,Kt,K[Kt],ht),gn!==null&&(e&&gn.alternate!==null&&Vt.delete(gn.key===null?Kt:gn.key),G=f(gn,G,Kt),ce===null?Ht=gn:ce.sibling=gn,ce=gn);return e&&Vt.forEach(function(La){return n(q,La)}),be&&tr(q,Kt),Ht}function jt(q,G,K,ht){if(K==null)throw Error(r(151));for(var Ht=null,ce=null,Vt=G,Kt=G=0,gn=null,Ee=K.next();Vt!==null&&!Ee.done;Kt++,Ee=K.next()){Vt.index>Kt?(gn=Vt,Vt=null):gn=Vt.sibling;var La=et(q,Vt,Ee.value,ht);if(La===null){Vt===null&&(Vt=gn);break}e&&Vt&&La.alternate===null&&n(q,Vt),G=f(La,G,Kt),ce===null?Ht=La:ce.sibling=La,ce=La,Vt=gn}if(Ee.done)return a(q,Vt),be&&tr(q,Kt),Ht;if(Vt===null){for(;!Ee.done;Kt++,Ee=K.next())Ee=mt(q,Ee.value,ht),Ee!==null&&(G=f(Ee,G,Kt),ce===null?Ht=Ee:ce.sibling=Ee,ce=Ee);return be&&tr(q,Kt),Ht}for(Vt=o(Vt);!Ee.done;Kt++,Ee=K.next())Ee=nt(Vt,q,Kt,Ee.value,ht),Ee!==null&&(e&&Ee.alternate!==null&&Vt.delete(Ee.key===null?Kt:Ee.key),G=f(Ee,G,Kt),ce===null?Ht=Ee:ce.sibling=Ee,ce=Ee);return e&&Vt.forEach(function(DS){return n(q,DS)}),be&&tr(q,Kt),Ht}function Pe(q,G,K,ht){if(typeof K=="object"&&K!==null&&K.type===E&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case v:t:{for(var Ht=K.key;G!==null;){if(G.key===Ht){if(Ht=K.type,Ht===E){if(G.tag===7){a(q,G.sibling),ht=c(G,K.props.children),ht.return=q,q=ht;break t}}else if(G.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===W&&bm(Ht)===G.type){a(q,G.sibling),ht=c(G,K.props),fo(ht,K),ht.return=q,q=ht;break t}a(q,G);break}else n(q,G);G=G.sibling}K.type===E?(ht=Ja(K.props.children,q.mode,ht,K.key),ht.return=q,q=ht):(ht=gl(K.type,K.key,K.props,null,q.mode,ht),fo(ht,K),ht.return=q,q=ht)}return M(q);case y:t:{for(Ht=K.key;G!==null;){if(G.key===Ht)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){a(q,G.sibling),ht=c(G,K.children||[]),ht.return=q,q=ht;break t}else{a(q,G);break}else n(q,G);G=G.sibling}ht=vc(K,q.mode,ht),ht.return=q,q=ht}return M(q);case W:return Ht=K._init,K=Ht(K._payload),Pe(q,G,K,ht)}if(ct(K))return Jt(q,G,K,ht);if(ot(K)){if(Ht=ot(K),typeof Ht!="function")throw Error(r(150));return K=Ht.call(K),jt(q,G,K,ht)}if(typeof K.then=="function")return Pe(q,G,Nl(K),ht);if(K.$$typeof===D)return Pe(q,G,Sl(q,K),ht);Ol(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,G!==null&&G.tag===6?(a(q,G.sibling),ht=c(G,K),ht.return=q,q=ht):(a(q,G),ht=_c(K,q.mode,ht),ht.return=q,q=ht),M(q)):a(q,G)}return function(q,G,K,ht){try{co=0;var Ht=Pe(q,G,K,ht);return Yr=null,Ht}catch(Vt){if(Vt===eo||Vt===Ml)throw Vt;var ce=jn(29,Vt,null,q.mode);return ce.lanes=ht,ce.return=q,ce}finally{}}}var jr=Am(!0),Rm=Am(!1),si=$(null),Ai=null;function _a(e){var n=e.alternate;yt(un,un.current&1),yt(si,e),Ai===null&&(n===null||kr.current!==null||n.memoizedState!==null)&&(Ai=e)}function Cm(e){if(e.tag===22){if(yt(un,un.current),yt(si,e),Ai===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ai=e)}}else va()}function va(){yt(un,un.current),yt(si,si.current)}function Vi(e){xt(si),Ai===e&&(Ai=null),xt(un)}var un=$(0);function Pl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Gf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Qc(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Jc={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Jn(),c=pa(o);c.payload=n,a!=null&&(c.callback=a),n=ma(e,c,o),n!==null&&($n(n,e,o),io(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Jn(),c=pa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ma(e,c,o),n!==null&&($n(n,e,o),io(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Jn(),o=pa(a);o.tag=2,n!=null&&(o.callback=n),n=ma(e,o,a),n!==null&&($n(n,e,a),io(n,e,a))}};function wm(e,n,a,o,c,f,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,M):n.prototype&&n.prototype.isPureReactComponent?!Ys(a,o)||!Ys(c,f):!0}function Dm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Jc.enqueueReplaceState(n,n.state,null)}function or(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Bl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Um(e){Bl(e)}function Lm(e){console.error(e)}function Nm(e){Bl(e)}function Il(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Om(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function $c(e,n,a){return a=pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Il(e,n)},a}function Pm(e){return e=pa(e),e.tag=3,e}function Bm(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){Om(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Om(n,a,o),typeof c!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Dx(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Js(n,a,c,!0),a=si.current,a!==null){switch(a.tag){case 13:return Ai===null?Tf():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Cc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Af(e,o,c)),!1;case 22:return a.flags|=65536,o===Cc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Af(e,o,c)),!1}throw Error(r(435,a.tag))}return Af(e,o,c),Tf(),!1}if(be)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==yc&&(e=Error(r(422),{cause:o}),Qs(ni(e,a)))):(o!==yc&&(n=Error(r(423),{cause:o}),Qs(ni(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ni(o,a),c=$c(e.stateNode,o,c),Uc(e,c),Ze!==4&&(Ze=2)),!1;var f=Error(r(520),{cause:o});if(f=ni(f,a),xo===null?xo=[f]:xo.push(f),Ze!==4&&(Ze=2),n===null)return!0;o=ni(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=$c(a.stateNode,o,e),Uc(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ta===null||!Ta.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Pm(c),Bm(c,e,a,o),Uc(a,c),!1}a=a.return}while(a!==null);return!1}var Im=Error(r(461)),pn=!1;function yn(e,n,a,o){n.child=e===null?Rm(n,null,a,o):jr(n,e.child,a,o)}function zm(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var M={};for(var T in o)T!=="ref"&&(M[T]=o[T])}else M=o;return ar(n),o=Bc(e,n,a,M,f,c),T=Ic(),e!==null&&!pn?(zc(e,n,c),ki(e,n,c)):(be&&T&&xc(n),n.flags|=1,yn(e,n,o,c),n.child)}function Fm(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!gc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Hm(e,n,f,o,c)):(e=gl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!lf(e,c)){var M=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ys,a(M,o)&&e.ref===n.ref)return ki(e,n,c)}return n.flags|=1,e=Bi(f,o),e.ref=n.ref,e.return=n,n.child=e}function Hm(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(Ys(f,o)&&e.ref===n.ref)if(pn=!1,n.pendingProps=o=f,lf(e,c))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,ki(e,n,c)}return tf(e,n,a,o,c)}function Gm(e,n,a){var o=n.pendingProps,c=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Vm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&yl(n,f!==null?f.cachePool:null),f!==null?Hp(n,f):Nc(),Cm(n);else return n.lanes=n.childLanes=536870912,Vm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(yl(n,f.cachePool),Hp(n,f),va(),n.memoizedState=null):(e!==null&&yl(n,null),Nc(),va());return yn(e,n,c,a),n.child}function Vm(e,n,a,o){var c=Rc();return c=c===null?null:{parent:ln._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&yl(n,null),Nc(),Cm(n),e!==null&&Js(e,n,o,!0),null}function zl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function tf(e,n,a,o,c){return ar(n),a=Bc(e,n,a,o,void 0,c),o=Ic(),e!==null&&!pn?(zc(e,n,c),ki(e,n,c)):(be&&o&&xc(n),n.flags|=1,yn(e,n,a,c),n.child)}function km(e,n,a,o,c,f){return ar(n),n.updateQueue=null,a=Vp(n,o,a,c),Gp(e),o=Ic(),e!==null&&!pn?(zc(e,n,f),ki(e,n,f)):(be&&o&&xc(n),n.flags|=1,yn(e,n,a,f),n.child)}function Xm(e,n,a,o,c){if(ar(n),n.stateNode===null){var f=zr,M=a.contextType;typeof M=="object"&&M!==null&&(f=bn(M)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Jc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},wc(n),M=a.contextType,f.context=typeof M=="object"&&M!==null?bn(M):zr,f.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Qc(n,a,M,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(M=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),M!==f.state&&Jc.enqueueReplaceState(f,f.state,null),ro(n,o,f,c),ao(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,P=or(a,T);f.props=P;var J=f.context,ut=a.contextType;M=zr,typeof ut=="object"&&ut!==null&&(M=bn(ut));var mt=a.getDerivedStateFromProps;ut=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||J!==M)&&Dm(n,f,o,M),da=!1;var et=n.memoizedState;f.state=et,ro(n,o,f,c),ao(),J=n.memoizedState,T||et!==J||da?(typeof mt=="function"&&(Qc(n,a,mt,o),J=n.memoizedState),(P=da||wm(n,a,P,o,et,J,M))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),f.props=o,f.state=J,f.context=M,o=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Dc(e,n),M=n.memoizedProps,ut=or(a,M),f.props=ut,mt=n.pendingProps,et=f.context,J=a.contextType,P=zr,typeof J=="object"&&J!==null&&(P=bn(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M!==mt||et!==P)&&Dm(n,f,o,P),da=!1,et=n.memoizedState,f.state=et,ro(n,o,f,c),ao();var nt=n.memoizedState;M!==mt||et!==nt||da||e!==null&&e.dependencies!==null&&xl(e.dependencies)?(typeof T=="function"&&(Qc(n,a,T,o),nt=n.memoizedState),(ut=da||wm(n,a,ut,o,et,nt,P)||e!==null&&e.dependencies!==null&&xl(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,nt,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,nt,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=nt),f.props=o,f.state=nt,f.context=P,o=ut):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,zl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=jr(n,e.child,null,c),n.child=jr(n,null,a,c)):yn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=ki(e,n,c),e}function Wm(e,n,a,o){return Ks(),n.flags|=256,yn(e,n,a,o),n.child}var ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(e){return{baseLanes:e,cachePool:Lp()}}function af(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=oi),e}function qm(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,M;if((M=f)||(M=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),M&&(c=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(be){if(c?_a(n):va(),be){var T=je,P;if(P=T){t:{for(P=T,T=bi;P.nodeType!==8;){if(!T){T=null;break t}if(P=gi(P.nextSibling),P===null){T=null;break t}}T=P}T!==null?(n.memoizedState={dehydrated:T,treeContext:$a!==null?{id:Ii,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},P=jn(18,null,null,0),P.stateNode=T,P.return=n,n.child=P,Ln=n,je=null,P=!0):P=!1}P||nr(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Gf(T)?n.lanes=32:n.lanes=536870912,null;Vi(n)}return T=o.children,o=o.fallback,c?(va(),c=n.mode,T=Fl({mode:"hidden",children:T},c),o=Ja(o,c,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,c=n.child,c.memoizedState=nf(a),c.childLanes=af(e,M,a),n.memoizedState=ef,o):(_a(n),rf(n,T))}if(P=e.memoizedState,P!==null&&(T=P.dehydrated,T!==null)){if(f)n.flags&256?(_a(n),n.flags&=-257,n=sf(e,n,a)):n.memoizedState!==null?(va(),n.child=e.child,n.flags|=128,n=null):(va(),c=o.fallback,T=n.mode,o=Fl({mode:"visible",children:o.children},T),c=Ja(c,T,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,jr(n,e.child,null,a),o=n.child,o.memoizedState=nf(a),o.childLanes=af(e,M,a),n.memoizedState=ef,n=c);else if(_a(n),Gf(T)){if(M=T.nextSibling&&T.nextSibling.dataset,M)var J=M.dgst;M=J,o=Error(r(419)),o.stack="",o.digest=M,Qs({value:o,source:null,stack:null}),n=sf(e,n,a)}else if(pn||Js(e,n,a,!1),M=(a&e.childLanes)!==0,pn||M){if(M=Fe,M!==null&&(o=a&-a,o=(o&42)!==0?1:ze(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,Ir(e,o),$n(M,e,o),Im;T.data==="$?"||Tf(),n=sf(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,je=gi(T.nextSibling),Ln=n,be=!0,er=null,bi=!1,e!==null&&(ai[ri++]=Ii,ai[ri++]=zi,ai[ri++]=$a,Ii=e.id,zi=e.overflow,$a=n),n=rf(n,o.children),n.flags|=4096);return n}return c?(va(),c=o.fallback,T=n.mode,P=e.child,J=P.sibling,o=Bi(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,J!==null?c=Bi(J,c):(c=Ja(c,T,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,T=e.child.memoizedState,T===null?T=nf(a):(P=T.cachePool,P!==null?(J=ln._currentValue,P=P.parent!==J?{parent:J,pool:J}:P):P=Lp(),T={baseLanes:T.baseLanes|a,cachePool:P}),c.memoizedState=T,c.childLanes=af(e,M,a),n.memoizedState=ef,o):(_a(n),a=e.child,e=a.sibling,a=Bi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function rf(e,n){return n=Fl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Fl(e,n){return e=jn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function sf(e,n,a){return jr(n,e.child,null,a),e=rf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ym(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ec(e.return,n,a)}function of(e,n,a,o,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function jm(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(yn(e,n,o.children,a),o=un.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ym(e,a,n);else if(e.tag===19)Ym(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(yt(un,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Pl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),of(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Pl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}of(n,!0,a,null,f);break;case"together":of(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ki(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ea|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Js(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Bi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Bi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function lf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&xl(e)))}function Ux(e,n,a){switch(n.tag){case 3:Nt(n,n.stateNode.containerInfo),ha(n,ln,e.memoizedState.cache),Ks();break;case 27:case 5:ae(n);break;case 4:Nt(n,n.stateNode.containerInfo);break;case 10:ha(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(_a(n),n.flags|=128,null):(a&n.child.childLanes)!==0?qm(e,n,a):(_a(n),e=ki(e,n,a),e!==null?e.sibling:null);_a(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Js(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return jm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(un,un.current),o)break;return null;case 22:case 23:return n.lanes=0,Gm(e,n,a);case 24:ha(n,ln,e.memoizedState.cache)}return ki(e,n,a)}function Zm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!lf(e,a)&&(n.flags&128)===0)return pn=!1,Ux(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,be&&(n.flags&1048576)!==0&&bp(n,vl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")gc(o)?(e=or(o,e),n.tag=1,n=Xm(null,n,o,e,a)):(n.tag=0,n=tf(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===U){n.tag=11,n=zm(null,n,o,e,a);break t}else if(c===I){n.tag=14,n=Fm(null,n,o,e,a);break t}}throw n=gt(o)||o,Error(r(306,n,""))}}return n;case 0:return tf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=or(o,n.pendingProps),Xm(e,n,o,c,a);case 3:t:{if(Nt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Dc(e,n),ro(n,o,null,a);var M=n.memoizedState;if(o=M.cache,ha(n,ln,o),o!==f.cache&&Tc(n,[ln],a,!0),ao(),o=M.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Wm(e,n,o,a);break t}else if(o!==c){c=ni(Error(r(424)),n),Qs(c),n=Wm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=gi(e.firstChild),Ln=n,be=!0,er=null,bi=!0,a=Rm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ks(),o===c){n=ki(e,n,a);break t}yn(e,n,o,a)}n=n.child}return n;case 26:return zl(e,n),e===null?(a=$g(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,e=n.pendingProps,o=$l(St.current).createElement(a),o[sn]=n,o[xn]=e,En(o,a,e),en(o),n.stateNode=o):n.memoizedState=$g(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ae(n),e===null&&be&&(o=n.stateNode=Kg(n.type,n.pendingProps,St.current),Ln=n,bi=!0,c=je,Ra(n.type)?(Vf=c,je=gi(o.firstChild)):je=c),yn(e,n,n.pendingProps.children,a),zl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&be&&((c=o=je)&&(o=rS(o,n.type,n.pendingProps,bi),o!==null?(n.stateNode=o,Ln=n,je=gi(o.firstChild),bi=!1,c=!0):c=!1),c||nr(n)),ae(n),c=n.type,f=n.pendingProps,M=e!==null?e.memoizedProps:null,o=f.children,zf(c,f)?o=null:M!==null&&zf(c,M)&&(n.flags|=32),n.memoizedState!==null&&(c=Bc(e,n,Ex,null,null,a),Co._currentValue=c),zl(e,n),yn(e,n,o,a),n.child;case 6:return e===null&&be&&((e=a=je)&&(a=sS(a,n.pendingProps,bi),a!==null?(n.stateNode=a,Ln=n,je=null,e=!0):e=!1),e||nr(n)),null;case 13:return qm(e,n,a);case 4:return Nt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=jr(n,null,o,a):yn(e,n,o,a),n.child;case 11:return zm(e,n,n.type,n.pendingProps,a);case 7:return yn(e,n,n.pendingProps,a),n.child;case 8:return yn(e,n,n.pendingProps.children,a),n.child;case 12:return yn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ha(n,n.type,o.value),yn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,ar(n),c=bn(c),o=o(c),n.flags|=1,yn(e,n,o,a),n.child;case 14:return Fm(e,n,n.type,n.pendingProps,a);case 15:return Hm(e,n,n.type,n.pendingProps,a);case 19:return jm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Fl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Bi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Gm(e,n,a);case 24:return ar(n),o=bn(ln),e===null?(c=Rc(),c===null&&(c=Fe,f=bc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},wc(n),ha(n,ln,c)):((e.lanes&a)!==0&&(Dc(e,n),ro(n,null,null,a),ao()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ha(n,ln,o)):(o=f.cache,ha(n,ln,o),o!==c.cache&&Tc(n,[ln],a,!0))),yn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Xi(e){e.flags|=4}function Km(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!a_(n)){if(n=si.current,n!==null&&((Se&4194048)===Se?Ai!==null:(Se&62914560)!==Se&&(Se&536870912)===0||n!==Ai))throw no=Cc,Np;e.flags|=8192}}function Hl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Dt():536870912,e.lanes|=n,Jr|=n)}function ho(e,n){if(!be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Xe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Lx(e,n,a){var o=n.pendingProps;switch(Sc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Hi(ln),Yt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zs(n)?Xi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Cp())),Xe(n),null;case 26:return a=n.memoizedState,e===null?(Xi(n),a!==null?(Xe(n),Km(n,a)):(Xe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Xi(n),Xe(n),Km(n,a)):(Xe(n),n.flags&=-16777217):(e.memoizedProps!==o&&Xi(n),Xe(n),n.flags&=-16777217),null;case 27:we(n),a=St.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Xi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}e=Q.current,Zs(n)?Ap(n):(e=Kg(c,o,a),n.stateNode=e,Xi(n))}return Xe(n),null;case 5:if(we(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Xi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}if(e=Q.current,Zs(n))Ap(n);else{switch(c=$l(St.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[sn]=n,e[xn]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(En(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Xi(n)}}return Xe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Xi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=St.current,Zs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Ln,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||kg(e.nodeValue,a)),e||nr(n)}else e=$l(e).createTextNode(o),e[sn]=n,n.stateNode=e}return Xe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Zs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[sn]=n}else Ks(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),c=!1}else c=Cp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Vi(n),n):(Vi(n),null)}if(Vi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Hl(n,n.updateQueue),Xe(n),null;case 4:return Yt(),e===null&&Nf(n.stateNode.containerInfo),Xe(n),null;case 10:return Hi(n.type),Xe(n),null;case 19:if(xt(un),c=n.memoizedState,c===null)return Xe(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)ho(c,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Pl(e),f!==null){for(n.flags|=128,ho(c,!1),e=f.updateQueue,n.updateQueue=e,Hl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Tp(a,e),a=a.sibling;return yt(un,un.current&1|2),n.child}e=e.sibling}c.tail!==null&&ee()>kl&&(n.flags|=128,o=!0,ho(c,!1),n.lanes=4194304)}else{if(!o)if(e=Pl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Hl(n,e),ho(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!be)return Xe(n),null}else 2*ee()-c.renderingStartTime>kl&&a!==536870912&&(n.flags|=128,o=!0,ho(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ee(),n.sibling=null,e=un.current,yt(un,o?e&1|2:e&1),n):(Xe(n),null);case 22:case 23:return Vi(n),Oc(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),a=n.updateQueue,a!==null&&Hl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&xt(rr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(ln),Xe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Nx(e,n){switch(Sc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Hi(ln),Yt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return we(n),null;case 13:if(Vi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ks()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return xt(un),null;case 4:return Yt(),null;case 10:return Hi(n.type),null;case 22:case 23:return Vi(n),Oc(),e!==null&&xt(rr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Hi(ln),null;case 25:return null;default:return null}}function Qm(e,n){switch(Sc(n),n.tag){case 3:Hi(ln),Yt();break;case 26:case 27:case 5:we(n);break;case 4:Yt();break;case 13:Vi(n);break;case 19:xt(un);break;case 10:Hi(n.type);break;case 22:case 23:Vi(n),Oc(),e!==null&&xt(rr);break;case 24:Hi(ln)}}function po(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,M=a.inst;o=f(),M.destroy=o}a=a.next}while(a!==c)}}catch(T){Ie(n,n.return,T)}}function xa(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var M=o.inst,T=M.destroy;if(T!==void 0){M.destroy=void 0,c=n;var P=a,J=T;try{J()}catch(ut){Ie(c,P,ut)}}}o=o.next}while(o!==f)}}catch(ut){Ie(n,n.return,ut)}}function Jm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Fp(n,a)}catch(o){Ie(e,e.return,o)}}}function $m(e,n,a){a.props=or(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ie(e,n,o)}}function mo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Ie(e,n,c)}}function Ri(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ie(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ie(e,n,c)}else a.current=null}function tg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ie(e,e.return,c)}}function uf(e,n,a){try{var o=e.stateNode;tS(o,e.type,a,n),o[xn]=n}catch(c){Ie(e,e.return,c)}}function eg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ra(e.type)||e.tag===4}function cf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||eg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ff(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Jl));else if(o!==4&&(o===27&&Ra(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ff(e,n,a),e=e.sibling;e!==null;)ff(e,n,a),e=e.sibling}function Gl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ra(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Gl(e,n,a),e=e.sibling;e!==null;)Gl(e,n,a),e=e.sibling}function ng(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);En(n,o,a),n[sn]=e,n[xn]=a}catch(f){Ie(e,e.return,f)}}var Wi=!1,$e=!1,hf=!1,ig=typeof WeakSet=="function"?WeakSet:Set,mn=null;function Ox(e,n){if(e=e.containerInfo,Bf=ru,e=pp(e),uc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var M=0,T=-1,P=-1,J=0,ut=0,mt=e,et=null;e:for(;;){for(var nt;mt!==a||c!==0&&mt.nodeType!==3||(T=M+c),mt!==f||o!==0&&mt.nodeType!==3||(P=M+o),mt.nodeType===3&&(M+=mt.nodeValue.length),(nt=mt.firstChild)!==null;)et=mt,mt=nt;for(;;){if(mt===e)break e;if(et===a&&++J===c&&(T=M),et===f&&++ut===o&&(P=M),(nt=mt.nextSibling)!==null)break;mt=et,et=mt.parentNode}mt=nt}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(If={focusedElem:e,selectionRange:a},ru=!1,mn=n;mn!==null;)if(n=mn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,mn=e;else for(;mn!==null;){switch(n=mn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Jt=or(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(Jt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(jt){Ie(a,a.return,jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Hf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,mn=e;break}mn=n.return}}function ag(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Sa(e,a),o&4&&po(5,a);break;case 1:if(Sa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){Ie(a,a.return,M)}else{var c=or(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Ie(a,a.return,M)}}o&64&&Jm(a),o&512&&mo(a,a.return);break;case 3:if(Sa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Fp(e,n)}catch(M){Ie(a,a.return,M)}}break;case 27:n===null&&o&4&&ng(a);case 26:case 5:Sa(e,a),n===null&&o&4&&tg(a),o&512&&mo(a,a.return);break;case 12:Sa(e,a);break;case 13:Sa(e,a),o&4&&og(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=kx.bind(null,a),oS(e,a))));break;case 22:if(o=a.memoizedState!==null||Wi,!o){n=n!==null&&n.memoizedState!==null||$e,c=Wi;var f=$e;Wi=o,($e=n)&&!f?ya(e,a,(a.subtreeFlags&8772)!==0):Sa(e,a),Wi=c,$e=f}break;case 30:break;default:Sa(e,a)}}function rg(e){var n=e.alternate;n!==null&&(e.alternate=null,rg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ua(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ve=null,Gn=!1;function qi(e,n,a){for(a=a.child;a!==null;)sg(e,n,a),a=a.sibling}function sg(e,n,a){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:$e||Ri(a,n),qi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||Ri(a,n);var o=Ve,c=Gn;Ra(a.type)&&(Ve=a.stateNode,Gn=!1),qi(e,n,a),To(a.stateNode),Ve=o,Gn=c;break;case 5:$e||Ri(a,n);case 6:if(o=Ve,c=Gn,Ve=null,qi(e,n,a),Ve=o,Gn=c,Ve!==null)if(Gn)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(a.stateNode)}catch(f){Ie(a,n,f)}else try{Ve.removeChild(a.stateNode)}catch(f){Ie(a,n,f)}break;case 18:Ve!==null&&(Gn?(e=Ve,jg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Lo(e)):jg(Ve,a.stateNode));break;case 4:o=Ve,c=Gn,Ve=a.stateNode.containerInfo,Gn=!0,qi(e,n,a),Ve=o,Gn=c;break;case 0:case 11:case 14:case 15:$e||xa(2,a,n),$e||xa(4,a,n),qi(e,n,a);break;case 1:$e||(Ri(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&$m(a,n,o)),qi(e,n,a);break;case 21:qi(e,n,a);break;case 22:$e=(o=$e)||a.memoizedState!==null,qi(e,n,a),$e=o;break;default:qi(e,n,a)}}function og(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Lo(e)}catch(a){Ie(n,n.return,a)}}function Px(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ig),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ig),n;default:throw Error(r(435,e.tag))}}function df(e,n){var a=Px(e);n.forEach(function(o){var c=Xx.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function Zn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,M=n,T=M;t:for(;T!==null;){switch(T.tag){case 27:if(Ra(T.type)){Ve=T.stateNode,Gn=!1;break t}break;case 5:Ve=T.stateNode,Gn=!1;break t;case 3:case 4:Ve=T.stateNode.containerInfo,Gn=!0;break t}T=T.return}if(Ve===null)throw Error(r(160));sg(f,M,c),Ve=null,Gn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)lg(n,e),n=n.sibling}var mi=null;function lg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Zn(n,e),Kn(e),o&4&&(xa(3,e,e.return),po(3,e),xa(5,e,e.return));break;case 1:Zn(n,e),Kn(e),o&512&&($e||a===null||Ri(a,a.return)),o&64&&Wi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=mi;if(Zn(n,e),Kn(e),o&512&&($e||a===null||Ri(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[la]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),En(f,o,a),f[sn]=e,en(f),o=f;break t;case"link":var M=n_("link","href",c).get(o+(a.href||""));if(M){for(var T=0;T<M.length;T++)if(f=M[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(T,1);break e}}f=c.createElement(o),En(f,o,a),c.head.appendChild(f);break;case"meta":if(M=n_("meta","content",c).get(o+(a.content||""))){for(T=0;T<M.length;T++)if(f=M[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(T,1);break e}}f=c.createElement(o),En(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[sn]=e,en(f),o=f}e.stateNode=o}else i_(c,e.type,e.stateNode);else e.stateNode=e_(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?i_(c,e.type,e.stateNode):e_(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&uf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Zn(n,e),Kn(e),o&512&&($e||a===null||Ri(a,a.return)),a!==null&&o&4&&uf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Zn(n,e),Kn(e),o&512&&($e||a===null||Ri(a,a.return)),e.flags&32){c=e.stateNode;try{zn(c,"")}catch(nt){Ie(e,e.return,nt)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,uf(e,c,a!==null?a.memoizedProps:c)),o&1024&&(hf=!0);break;case 6:if(Zn(n,e),Kn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(nt){Ie(e,e.return,nt)}}break;case 3:if(nu=null,c=mi,mi=tu(n.containerInfo),Zn(n,e),mi=c,Kn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Lo(n.containerInfo)}catch(nt){Ie(e,e.return,nt)}hf&&(hf=!1,ug(e));break;case 4:o=mi,mi=tu(e.stateNode.containerInfo),Zn(n,e),Kn(e),mi=o;break;case 12:Zn(n,e),Kn(e);break;case 13:Zn(n,e),Kn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(xf=ee()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,df(e,o)));break;case 22:c=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,J=Wi,ut=$e;if(Wi=J||c,$e=ut||P,Zn(n,e),$e=ut,Wi=J,Kn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Wi||$e||lr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)M=f.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{T=P.stateNode;var mt=P.memoizedProps.style,et=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(nt){Ie(P,P.return,nt)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(nt){Ie(P,P.return,nt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,df(e,a))));break;case 19:Zn(n,e),Kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,df(e,o)));break;case 30:break;case 21:break;default:Zn(n,e),Kn(e)}}function Kn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(eg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=cf(e);Gl(e,f,c);break;case 5:var M=a.stateNode;a.flags&32&&(zn(M,""),a.flags&=-33);var T=cf(e);Gl(e,T,M);break;case 3:case 4:var P=a.stateNode.containerInfo,J=cf(e);ff(e,J,P);break;default:throw Error(r(161))}}catch(ut){Ie(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ug(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;ug(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Sa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ag(e,n.alternate,n),n=n.sibling}function lr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:xa(4,n,n.return),lr(n);break;case 1:Ri(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&$m(n,n.return,a),lr(n);break;case 27:To(n.stateNode);case 26:case 5:Ri(n,n.return),lr(n);break;case 22:n.memoizedState===null&&lr(n);break;case 30:lr(n);break;default:lr(n)}e=e.sibling}}function ya(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:ya(c,f,a),po(4,f);break;case 1:if(ya(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Ie(o,o.return,J)}if(o=f,c=o.updateQueue,c!==null){var T=o.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)zp(P[c],T)}catch(J){Ie(o,o.return,J)}}a&&M&64&&Jm(f),mo(f,f.return);break;case 27:ng(f);case 26:case 5:ya(c,f,a),a&&o===null&&M&4&&tg(f),mo(f,f.return);break;case 12:ya(c,f,a);break;case 13:ya(c,f,a),a&&M&4&&og(c,f);break;case 22:f.memoizedState===null&&ya(c,f,a),mo(f,f.return);break;case 30:break;default:ya(c,f,a)}n=n.sibling}}function pf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$s(a))}function mf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$s(e))}function Ci(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)cg(e,n,a,o),n=n.sibling}function cg(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(e,n,a,o),c&2048&&po(9,n);break;case 1:Ci(e,n,a,o);break;case 3:Ci(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$s(e)));break;case 12:if(c&2048){Ci(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,M=f.id,T=f.onPostCommit;typeof T=="function"&&T(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Ie(n,n.return,P)}}else Ci(e,n,a,o);break;case 13:Ci(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,M=n.alternate,n.memoizedState!==null?f._visibility&2?Ci(e,n,a,o):go(e,n):f._visibility&2?Ci(e,n,a,o):(f._visibility|=2,Zr(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&pf(M,n);break;case 24:Ci(e,n,a,o),c&2048&&mf(n.alternate,n);break;default:Ci(e,n,a,o)}}function Zr(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,M=n,T=a,P=o,J=M.flags;switch(M.tag){case 0:case 11:case 15:Zr(f,M,T,P,c),po(8,M);break;case 23:break;case 22:var ut=M.stateNode;M.memoizedState!==null?ut._visibility&2?Zr(f,M,T,P,c):go(f,M):(ut._visibility|=2,Zr(f,M,T,P,c)),c&&J&2048&&pf(M.alternate,M);break;case 24:Zr(f,M,T,P,c),c&&J&2048&&mf(M.alternate,M);break;default:Zr(f,M,T,P,c)}n=n.sibling}}function go(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:go(a,o),c&2048&&pf(o.alternate,o);break;case 24:go(a,o),c&2048&&mf(o.alternate,o);break;default:go(a,o)}n=n.sibling}}var _o=8192;function Kr(e){if(e.subtreeFlags&_o)for(e=e.child;e!==null;)fg(e),e=e.sibling}function fg(e){switch(e.tag){case 26:Kr(e),e.flags&_o&&e.memoizedState!==null&&SS(mi,e.memoizedState,e.memoizedProps);break;case 5:Kr(e);break;case 3:case 4:var n=mi;mi=tu(e.stateNode.containerInfo),Kr(e),mi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=_o,_o=16777216,Kr(e),_o=n):Kr(e));break;default:Kr(e)}}function hg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function vo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,pg(o,e)}hg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)dg(e),e=e.sibling}function dg(e){switch(e.tag){case 0:case 11:case 15:vo(e),e.flags&2048&&xa(9,e,e.return);break;case 3:vo(e);break;case 12:vo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Vl(e)):vo(e);break;default:vo(e)}}function Vl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,pg(o,e)}hg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:xa(8,n,n.return),Vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vl(n));break;default:Vl(n)}e=e.sibling}}function pg(e,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:$s(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,mn=o;else t:for(a=e;mn!==null;){o=mn;var c=o.sibling,f=o.return;if(rg(o),o===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var Bx={getCacheForType:function(e){var n=bn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Ix=typeof WeakMap=="function"?WeakMap:Map,Re=0,Fe=null,de=null,Se=0,Ce=0,Qn=null,Ma=!1,Qr=!1,gf=!1,Yi=0,Ze=0,Ea=0,ur=0,_f=0,oi=0,Jr=0,xo=null,Vn=null,vf=!1,xf=0,kl=1/0,Xl=null,Ta=null,Mn=0,ba=null,$r=null,ts=0,Sf=0,yf=null,mg=null,So=0,Mf=null;function Jn(){if((Re&2)!==0&&Se!==0)return Se&-Se;if(B.T!==null){var e=Gr;return e!==0?e:wf()}return Me()}function gg(){oi===0&&(oi=(Se&536870912)===0||be?k():536870912);var e=si.current;return e!==null&&(e.flags|=32),oi}function $n(e,n,a){(e===Fe&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)&&(es(e,0),Aa(e,Se,oi,!1)),pt(e,a),((Re&2)===0||e!==Fe)&&(e===Fe&&((Re&2)===0&&(ur|=a),Ze===4&&Aa(e,Se,oi,!1)),wi(e))}function _g(e,n,a){if((Re&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||te(e,n),c=o?Hx(e,n):bf(e,n,!0),f=o;do{if(c===0){Qr&&!o&&Aa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!zx(a)){c=bf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var T=e;c=xo;var P=T.current.memoizedState.isDehydrated;if(P&&(es(T,M).flags|=256),M=bf(T,M,!1),M!==2){if(gf&&!P){T.errorRecoveryDisabledLanes|=f,ur|=f,c=4;break t}f=Vn,Vn=c,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}c=M}if(f=!1,c!==2)continue}}if(c===1){es(e,0),Aa(e,n,0,!0);break}t:{switch(o=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Aa(o,n,oi,!Ma);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=xf+300-ee(),10<c)){if(Aa(o,n,oi,!Ma),le(o,0,!0)!==0)break t;o.timeoutHandle=qg(vg.bind(null,o,a,Vn,Xl,vf,n,oi,ur,Jr,Ma,f,2,-0,0),c);break t}vg(o,a,Vn,Xl,vf,n,oi,ur,Jr,Ma,f,0,-0,0)}}break}while(!0);wi(e)}function vg(e,n,a,o,c,f,M,T,P,J,ut,mt,et,nt){if(e.timeoutHandle=-1,mt=n.subtreeFlags,(mt&8192||(mt&16785408)===16785408)&&(Ro={stylesheets:null,count:0,unsuspend:xS},fg(n),mt=yS(),mt!==null)){e.cancelPendingCommit=mt(bg.bind(null,e,n,f,a,o,c,M,T,P,ut,1,et,nt)),Aa(e,f,M,!J);return}bg(e,n,f,a,o,c,M,T,P)}function zx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Aa(e,n,a,o){n&=~_f,n&=~ur,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-Ct(c),M=1<<f;o[f]=-1,c&=~M}a!==0&&Lt(e,a,n)}function Wl(){return(Re&6)===0?(yo(0),!1):!0}function Ef(){if(de!==null){if(Ce===0)var e=de.return;else e=de,Fi=ir=null,Fc(e),Yr=null,co=0,e=de;for(;e!==null;)Qm(e.alternate,e),e=e.return;de=null}}function es(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,nS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ef(),Fe=e,de=a=Bi(e.current,null),Se=n,Ce=0,Qn=null,Ma=!1,Qr=te(e,n),gf=!1,Jr=oi=_f=ur=Ea=Ze=0,Vn=xo=null,vf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Ct(o),f=1<<c;n|=e[c],o&=~f}return Yi=n,dl(),a}function xg(e,n){ue=null,B.H=Ll,n===eo||n===Ml?(n=Bp(),Ce=3):n===Np?(n=Bp(),Ce=4):Ce=n===Im?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,de===null&&(Ze=1,Il(e,ni(n,e.current)))}function Sg(){var e=B.H;return B.H=Ll,e===null?Ll:e}function yg(){var e=B.A;return B.A=Bx,e}function Tf(){Ze=4,Ma||(Se&4194048)!==Se&&si.current!==null||(Qr=!0),(Ea&134217727)===0&&(ur&134217727)===0||Fe===null||Aa(Fe,Se,oi,!1)}function bf(e,n,a){var o=Re;Re|=2;var c=Sg(),f=yg();(Fe!==e||Se!==n)&&(Xl=null,es(e,n)),n=!1;var M=Ze;t:do try{if(Ce!==0&&de!==null){var T=de,P=Qn;switch(Ce){case 8:Ef(),M=6;break t;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var J=Ce;if(Ce=0,Qn=null,ns(e,T,P,J),a&&Qr){M=0;break t}break;default:J=Ce,Ce=0,Qn=null,ns(e,T,P,J)}}Fx(),M=Ze;break}catch(ut){xg(e,ut)}while(!0);return n&&e.shellSuspendCounter++,Fi=ir=null,Re=o,B.H=c,B.A=f,de===null&&(Fe=null,Se=0,dl()),M}function Fx(){for(;de!==null;)Mg(de)}function Hx(e,n){var a=Re;Re|=2;var o=Sg(),c=yg();Fe!==e||Se!==n?(Xl=null,kl=ee()+500,es(e,n)):Qr=te(e,n);t:do try{if(Ce!==0&&de!==null){n=de;var f=Qn;e:switch(Ce){case 1:Ce=0,Qn=null,ns(e,n,f,1);break;case 2:case 9:if(Op(f)){Ce=0,Qn=null,Eg(n);break}n=function(){Ce!==2&&Ce!==9||Fe!==e||(Ce=7),wi(e)},f.then(n,n);break t;case 3:Ce=7;break t;case 4:Ce=5;break t;case 7:Op(f)?(Ce=0,Qn=null,Eg(n)):(Ce=0,Qn=null,ns(e,n,f,7));break;case 5:var M=null;switch(de.tag){case 26:M=de.memoizedState;case 5:case 27:var T=de;if(!M||a_(M)){Ce=0,Qn=null;var P=T.sibling;if(P!==null)de=P;else{var J=T.return;J!==null?(de=J,ql(J)):de=null}break e}}Ce=0,Qn=null,ns(e,n,f,5);break;case 6:Ce=0,Qn=null,ns(e,n,f,6);break;case 8:Ef(),Ze=6;break t;default:throw Error(r(462))}}Gx();break}catch(ut){xg(e,ut)}while(!0);return Fi=ir=null,B.H=o,B.A=c,Re=a,de!==null?0:(Fe=null,Se=0,dl(),Ze)}function Gx(){for(;de!==null&&!Pn();)Mg(de)}function Mg(e){var n=Zm(e.alternate,e,Yi);e.memoizedProps=e.pendingProps,n===null?ql(e):de=n}function Eg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=km(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=km(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:Fc(n);default:Qm(a,n),n=de=Tp(n,Yi),n=Zm(a,n,Yi)}e.memoizedProps=e.pendingProps,n===null?ql(e):de=n}function ns(e,n,a,o){Fi=ir=null,Fc(n),Yr=null,co=0;var c=n.return;try{if(Dx(e,c,n,a,Se)){Ze=1,Il(e,ni(a,e.current)),de=null;return}}catch(f){if(c!==null)throw de=c,f;Ze=1,Il(e,ni(a,e.current)),de=null;return}n.flags&32768?(be||o===1?e=!0:Qr||(Se&536870912)!==0?e=!1:(Ma=e=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),Tg(n,e)):ql(n)}function ql(e){var n=e;do{if((n.flags&32768)!==0){Tg(n,Ma);return}e=n.return;var a=Lx(n.alternate,n,Yi);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);Ze===0&&(Ze=5)}function Tg(e,n){do{var a=Nx(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Ze=6,de=null}function bg(e,n,a,o,c,f,M,T,P){e.cancelPendingCommit=null;do Yl();while(Mn!==0);if((Re&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=pc,Pt(e,a,f,M,T,P),e===Fe&&(de=Fe=null,Se=0),$r=n,ba=e,ts=a,Sf=f,yf=c,mg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Wx(N,function(){return Dg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,c=Z.p,Z.p=2,M=Re,Re|=4;try{Ox(e,n,a)}finally{Re=M,Z.p=c,B.T=o}}Mn=1,Ag(),Rg(),Cg()}}function Ag(){if(Mn===1){Mn=0;var e=ba,n=$r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=Z.p;Z.p=2;var c=Re;Re|=4;try{lg(n,e);var f=If,M=pp(e.containerInfo),T=f.focusedElem,P=f.selectionRange;if(M!==T&&T&&T.ownerDocument&&dp(T.ownerDocument.documentElement,T)){if(P!==null&&uc(T)){var J=P.start,ut=P.end;if(ut===void 0&&(ut=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(ut,T.value.length);else{var mt=T.ownerDocument||document,et=mt&&mt.defaultView||window;if(et.getSelection){var nt=et.getSelection(),Jt=T.textContent.length,jt=Math.min(P.start,Jt),Pe=P.end===void 0?jt:Math.min(P.end,Jt);!nt.extend&&jt>Pe&&(M=Pe,Pe=jt,jt=M);var q=hp(T,jt),G=hp(T,Pe);if(q&&G&&(nt.rangeCount!==1||nt.anchorNode!==q.node||nt.anchorOffset!==q.offset||nt.focusNode!==G.node||nt.focusOffset!==G.offset)){var K=mt.createRange();K.setStart(q.node,q.offset),nt.removeAllRanges(),jt>Pe?(nt.addRange(K),nt.extend(G.node,G.offset)):(K.setEnd(G.node,G.offset),nt.addRange(K))}}}}for(mt=[],nt=T;nt=nt.parentNode;)nt.nodeType===1&&mt.push({element:nt,left:nt.scrollLeft,top:nt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var ht=mt[T];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}ru=!!Bf,If=Bf=null}finally{Re=c,Z.p=o,B.T=a}}e.current=n,Mn=2}}function Rg(){if(Mn===2){Mn=0;var e=ba,n=$r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=Z.p;Z.p=2;var c=Re;Re|=4;try{ag(e,n.alternate,n)}finally{Re=c,Z.p=o,B.T=a}}Mn=3}}function Cg(){if(Mn===4||Mn===3){Mn=0,me();var e=ba,n=$r,a=ts,o=mg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,$r=ba=null,wg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ta=null),tn(a),n=n.stateNode,It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,c=Z.p,Z.p=2,B.T=null;try{for(var f=e.onRecoverableError,M=0;M<o.length;M++){var T=o[M];f(T.value,{componentStack:T.stack})}}finally{B.T=n,Z.p=c}}(ts&3)!==0&&Yl(),wi(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===Mf?So++:(So=0,Mf=e):So=0,yo(0)}}function wg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,$s(n)))}function Yl(e){return Ag(),Rg(),Cg(),Dg()}function Dg(){if(Mn!==5)return!1;var e=ba,n=Sf;Sf=0;var a=tn(ts),o=B.T,c=Z.p;try{Z.p=32>a?32:a,B.T=null,a=yf,yf=null;var f=ba,M=ts;if(Mn=0,$r=ba=null,ts=0,(Re&6)!==0)throw Error(r(331));var T=Re;if(Re|=4,dg(f.current),cg(f,f.current,M,a),Re=T,yo(0,!1),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(ft,f)}catch{}return!0}finally{Z.p=c,B.T=o,wg(e,n)}}function Ug(e,n,a){n=ni(a,n),n=$c(e.stateNode,n,2),e=ma(e,n,2),e!==null&&(pt(e,2),wi(e))}function Ie(e,n,a){if(e.tag===3)Ug(e,e,a);else for(;n!==null;){if(n.tag===3){Ug(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ta===null||!Ta.has(o))){e=ni(a,e),a=Pm(2),o=ma(n,a,2),o!==null&&(Bm(a,o,n,e),pt(o,2),wi(o));break}}n=n.return}}function Af(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Ix;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(gf=!0,c.add(a),e=Vx.bind(null,e,n,a),n.then(e,e))}function Vx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Fe===e&&(Se&a)===a&&(Ze===4||Ze===3&&(Se&62914560)===Se&&300>ee()-xf?(Re&2)===0&&es(e,0):_f|=a,Jr===Se&&(Jr=0)),wi(e)}function Lg(e,n){n===0&&(n=Dt()),e=Ir(e,n),e!==null&&(pt(e,n),wi(e))}function kx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Lg(e,a)}function Xx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Lg(e,a)}function Wx(e,n){return He(e,n)}var jl=null,is=null,Rf=!1,Zl=!1,Cf=!1,cr=0;function wi(e){e!==is&&e.next===null&&(is===null?jl=is=e:is=is.next=e),Zl=!0,Rf||(Rf=!0,Yx())}function yo(e,n){if(!Cf&&Zl){Cf=!0;do for(var a=!1,o=jl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var M=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-Ct(42|e)+1)-1,f&=c&~(M&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Bg(o,f))}else f=Se,f=le(o,o===Fe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||te(o,f)||(a=!0,Bg(o,f));o=o.next}while(a);Cf=!1}}function qx(){Ng()}function Ng(){Zl=Rf=!1;var e=0;cr!==0&&(eS()&&(e=cr),cr=0);for(var n=ee(),a=null,o=jl;o!==null;){var c=o.next,f=Og(o,n);f===0?(o.next=null,a===null?jl=c:a.next=c,c===null&&(is=a)):(a=o,(e!==0||(f&3)!==0)&&(Zl=!0)),o=c}yo(e)}function Og(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var M=31-Ct(f),T=1<<M,P=c[M];P===-1?((T&a)===0||(T&o)!==0)&&(c[M]=Ue(T,n)):P<=n&&(e.expiredLanes|=T),f&=~T}if(n=Fe,a=Se,a=le(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&V(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||te(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&V(o),tn(a)){case 2:case 8:a=kt;break;case 32:a=N;break;case 268435456:a=tt;break;default:a=N}return o=Pg.bind(null,e),a=He(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&V(o),e.callbackPriority=2,e.callbackNode=null,2}function Pg(e,n){if(Mn!==0&&Mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Yl()&&e.callbackNode!==a)return null;var o=Se;return o=le(e,e===Fe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(_g(e,o,n),Og(e,ee()),e.callbackNode!=null&&e.callbackNode===a?Pg.bind(null,e):null)}function Bg(e,n){if(Yl())return null;_g(e,n,!0)}function Yx(){iS(function(){(Re&6)!==0?He(De,qx):Ng()})}function wf(){return cr===0&&(cr=k()),cr}function Ig(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sl(""+e)}function zg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function jx(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=Ig((c[xn]||null).action),M=o.submitter;M&&(n=(n=M[xn]||null)?Ig(n.formAction):M.getAttribute("formAction"),n!==null&&(f=n,M=null));var T=new cl("action","action",null,o,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(cr!==0){var P=M?zg(c,M):new FormData(c);jc(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(T.preventDefault(),P=M?zg(c,M):new FormData(c),jc(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var Df=0;Df<dc.length;Df++){var Uf=dc[Df],Zx=Uf.toLowerCase(),Kx=Uf[0].toUpperCase()+Uf.slice(1);pi(Zx,"on"+Kx)}pi(_p,"onAnimationEnd"),pi(vp,"onAnimationIteration"),pi(xp,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(dx,"onTransitionRun"),pi(px,"onTransitionStart"),pi(mx,"onTransitionCancel"),pi(Sp,"onTransitionEnd"),X("onMouseEnter",["mouseout","mouseover"]),X("onMouseLeave",["mouseout","mouseover"]),X("onPointerEnter",["pointerout","pointerover"]),X("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function Fg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var M=o.length-1;0<=M;M--){var T=o[M],P=T.instance,J=T.currentTarget;if(T=T.listener,P!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=J;try{f(c)}catch(ut){Bl(ut)}c.currentTarget=null,f=P}else for(M=0;M<o.length;M++){if(T=o[M],P=T.instance,J=T.currentTarget,T=T.listener,P!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=J;try{f(c)}catch(ut){Bl(ut)}c.currentTarget=null,f=P}}}}function pe(e,n){var a=n[qa];a===void 0&&(a=n[qa]=new Set);var o=e+"__bubble";a.has(o)||(Hg(n,e,2,!1),a.add(o))}function Lf(e,n,a){var o=0;n&&(o|=4),Hg(a,e,o,n)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function Nf(e){if(!e[Kl]){e[Kl]=!0,al.forEach(function(a){a!=="selectionchange"&&(Qx.has(a)||Lf(a,!1,e),Lf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Kl]||(n[Kl]=!0,Lf("selectionchange",!1,n))}}function Hg(e,n,a,o){switch(c_(n)){case 2:var c=TS;break;case 8:c=bS;break;default:c=Yf}a=c.bind(null,n,a,e),c=void 0,!tc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Of(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var T=o.stateNode.containerInfo;if(T===c)break;if(M===4)for(M=o.return;M!==null;){var P=M.tag;if((P===3||P===4)&&M.stateNode.containerInfo===c)return;M=M.return}for(;T!==null;){if(M=Ni(T),M===null)return;if(P=M.tag,P===5||P===6||P===26||P===27){o=f=M;continue t}T=T.parentNode}}o=o.return}Yd(function(){var J=f,ut=Ju(a),mt=[];t:{var et=yp.get(e);if(et!==void 0){var nt=cl,Jt=e;switch(e){case"keypress":if(ll(a)===0)break t;case"keydown":case"keyup":nt=W0;break;case"focusin":Jt="focus",nt=ac;break;case"focusout":Jt="blur",nt=ac;break;case"beforeblur":case"afterblur":nt=ac;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":nt=Kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":nt=N0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":nt=j0;break;case _p:case vp:case xp:nt=B0;break;case Sp:nt=K0;break;case"scroll":case"scrollend":nt=U0;break;case"wheel":nt=J0;break;case"copy":case"cut":case"paste":nt=z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":nt=Jd;break;case"toggle":case"beforetoggle":nt=tx}var jt=(n&4)!==0,Pe=!jt&&(e==="scroll"||e==="scrollend"),q=jt?et!==null?et+"Capture":null:et;jt=[];for(var G=J,K;G!==null;){var ht=G;if(K=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||K===null||q===null||(ht=Hs(G,q),ht!=null&&jt.push(Eo(G,ht,K))),Pe)break;G=G.return}0<jt.length&&(et=new nt(et,Jt,null,a,ut),mt.push({event:et,listeners:jt}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",nt=e==="mouseout"||e==="pointerout",et&&a!==Qu&&(Jt=a.relatedTarget||a.fromElement)&&(Ni(Jt)||Jt[Bn]))break t;if((nt||et)&&(et=ut.window===ut?ut:(et=ut.ownerDocument)?et.defaultView||et.parentWindow:window,nt?(Jt=a.relatedTarget||a.toElement,nt=J,Jt=Jt?Ni(Jt):null,Jt!==null&&(Pe=u(Jt),jt=Jt.tag,Jt!==Pe||jt!==5&&jt!==27&&jt!==6)&&(Jt=null)):(nt=null,Jt=J),nt!==Jt)){if(jt=Kd,ht="onMouseLeave",q="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(jt=Jd,ht="onPointerLeave",q="onPointerEnter",G="pointer"),Pe=nt==null?et:ja(nt),K=Jt==null?et:ja(Jt),et=new jt(ht,G+"leave",nt,a,ut),et.target=Pe,et.relatedTarget=K,ht=null,Ni(ut)===J&&(jt=new jt(q,G+"enter",Jt,a,ut),jt.target=K,jt.relatedTarget=Pe,ht=jt),Pe=ht,nt&&Jt)e:{for(jt=nt,q=Jt,G=0,K=jt;K;K=as(K))G++;for(K=0,ht=q;ht;ht=as(ht))K++;for(;0<G-K;)jt=as(jt),G--;for(;0<K-G;)q=as(q),K--;for(;G--;){if(jt===q||q!==null&&jt===q.alternate)break e;jt=as(jt),q=as(q)}jt=null}else jt=null;nt!==null&&Gg(mt,et,nt,jt,!1),Jt!==null&&Pe!==null&&Gg(mt,Pe,Jt,jt,!0)}}t:{if(et=J?ja(J):window,nt=et.nodeName&&et.nodeName.toLowerCase(),nt==="select"||nt==="input"&&et.type==="file")var Ht=sp;else if(ap(et))if(op)Ht=cx;else{Ht=lx;var ce=ox}else nt=et.nodeName,!nt||nt.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?J&&Ku(J.elementType)&&(Ht=sp):Ht=ux;if(Ht&&(Ht=Ht(e,J))){rp(mt,Ht,a,ut);break t}ce&&ce(e,et,J),e==="focusout"&&J&&et.type==="number"&&J.memoizedProps.value!=null&&Tn(et,"number",et.value)}switch(ce=J?ja(J):window,e){case"focusin":(ap(ce)||ce.contentEditable==="true")&&(Or=ce,cc=J,js=null);break;case"focusout":js=cc=Or=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,mp(mt,a,ut);break;case"selectionchange":if(hx)break;case"keydown":case"keyup":mp(mt,a,ut)}var Vt;if(sc)t:{switch(e){case"compositionstart":var Kt="onCompositionStart";break t;case"compositionend":Kt="onCompositionEnd";break t;case"compositionupdate":Kt="onCompositionUpdate";break t}Kt=void 0}else Nr?np(e,a)&&(Kt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Kt="onCompositionStart");Kt&&($d&&a.locale!=="ko"&&(Nr||Kt!=="onCompositionStart"?Kt==="onCompositionEnd"&&Nr&&(Vt=jd()):(fa=ut,ec="value"in fa?fa.value:fa.textContent,Nr=!0)),ce=Ql(J,Kt),0<ce.length&&(Kt=new Qd(Kt,e,null,a,ut),mt.push({event:Kt,listeners:ce}),Vt?Kt.data=Vt:(Vt=ip(a),Vt!==null&&(Kt.data=Vt)))),(Vt=nx?ix(e,a):ax(e,a))&&(Kt=Ql(J,"onBeforeInput"),0<Kt.length&&(ce=new Qd("onBeforeInput","beforeinput",null,a,ut),mt.push({event:ce,listeners:Kt}),ce.data=Vt)),jx(mt,e,J,a,ut)}Fg(mt,n)})}function Eo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Ql(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Hs(e,a),c!=null&&o.unshift(Eo(e,c,f)),c=Hs(e,n),c!=null&&o.push(Eo(e,c,f))),e.tag===3)return o;e=e.return}return[]}function as(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gg(e,n,a,o,c){for(var f=n._reactName,M=[];a!==null&&a!==o;){var T=a,P=T.alternate,J=T.stateNode;if(T=T.tag,P!==null&&P===o)break;T!==5&&T!==26&&T!==27||J===null||(P=J,c?(J=Hs(a,f),J!=null&&M.unshift(Eo(a,J,P))):c||(J=Hs(a,f),J!=null&&M.push(Eo(a,J,P)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var Jx=/\r\n?/g,$x=/\u0000|\uFFFD/g;function Vg(e){return(typeof e=="string"?e:""+e).replace(Jx,`
`).replace($x,"")}function kg(e,n){return n=Vg(n),Vg(e)===n}function Jl(){}function Oe(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||zn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&zn(e,""+o);break;case"className":zt(e,"class",o);break;case"tabIndex":zt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":zt(e,a,o);break;case"style":Wd(e,o,f);break;case"data":if(n!=="object"){zt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=sl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(e,n,"name",c.name,c,null),Oe(e,n,"formEncType",c.formEncType,c,null),Oe(e,n,"formMethod",c.formMethod,c,null),Oe(e,n,"formTarget",c.formTarget,c,null)):(Oe(e,n,"encType",c.encType,c,null),Oe(e,n,"method",c.method,c,null),Oe(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=sl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Jl);break;case"onScroll":o!=null&&pe("scroll",e);break;case"onScrollEnd":o!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=sl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":pe("beforetoggle",e),pe("toggle",e),wt(e,"popover",o);break;case"xlinkActuate":Bt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Bt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Bt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Bt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Bt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Bt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":wt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=w0.get(a)||a,wt(e,a,o))}}function Pf(e,n,a,o,c,f){switch(a){case"style":Wd(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?zn(e,o):(typeof o=="number"||typeof o=="bigint")&&zn(e,""+o);break;case"onScroll":o!=null&&pe("scroll",e);break;case"onScrollEnd":o!=null&&pe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Jl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):wt(e,a,o)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var M=a[f];if(M!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,f,M,a,null)}}c&&Oe(e,n,"srcSet",a.srcSet,a,null),o&&Oe(e,n,"src",a.src,a,null);return;case"input":pe("invalid",e);var T=f=M=c=null,P=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var ut=a[o];if(ut!=null)switch(o){case"name":c=ut;break;case"type":M=ut;break;case"checked":P=ut;break;case"defaultChecked":J=ut;break;case"value":f=ut;break;case"defaultValue":T=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Oe(e,n,o,ut,a,null)}}Un(e,f,T,P,J,M,c,!1),_e(e);return;case"select":pe("invalid",e),o=M=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":M=T;break;case"multiple":o=T;default:Oe(e,n,c,T,a,null)}n=f,a=M,e.multiple=!!o,n!=null?Ye(e,!!o,n,!1):a!=null&&Ye(e,!!o,a,!0);return;case"textarea":pe("invalid",e),f=c=o=null;for(M in a)if(a.hasOwnProperty(M)&&(T=a[M],T!=null))switch(M){case"value":o=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Oe(e,n,M,T,a,null)}Dr(e,o,c,f),_e(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Oe(e,n,P,o,a,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(o=0;o<Mo.length;o++)pe(Mo[o],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,J,o,a,null)}return;default:if(Ku(n)){for(ut in a)a.hasOwnProperty(ut)&&(o=a[ut],o!==void 0&&Pf(e,n,ut,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Oe(e,n,T,o,a,null))}function tS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,M=null,T=null,P=null,J=null,ut=null;for(nt in a){var mt=a[nt];if(a.hasOwnProperty(nt)&&mt!=null)switch(nt){case"checked":break;case"value":break;case"defaultValue":P=mt;default:o.hasOwnProperty(nt)||Oe(e,n,nt,null,o,mt)}}for(var et in o){var nt=o[et];if(mt=a[et],o.hasOwnProperty(et)&&(nt!=null||mt!=null))switch(et){case"type":f=nt;break;case"name":c=nt;break;case"checked":J=nt;break;case"defaultChecked":ut=nt;break;case"value":M=nt;break;case"defaultValue":T=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:nt!==mt&&Oe(e,n,et,nt,o,mt)}}Le(e,M,T,P,J,ut,f,c);return;case"select":nt=M=T=et=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":nt=P;default:o.hasOwnProperty(f)||Oe(e,n,f,null,o,P)}for(c in o)if(f=o[c],P=a[c],o.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":M=f;default:f!==P&&Oe(e,n,c,f,o,P)}n=T,a=M,o=nt,et!=null?Ye(e,!!a,et,!1):!!o!=!!a&&(n!=null?Ye(e,!!a,n,!0):Ye(e,!!a,a?[]:"",!1));return;case"textarea":nt=et=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Oe(e,n,T,null,o,c)}for(M in o)if(c=o[M],f=a[M],o.hasOwnProperty(M)&&(c!=null||f!=null))switch(M){case"value":et=c;break;case"defaultValue":nt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Oe(e,n,M,c,o,f)}Sn(e,et,nt);return;case"option":for(var Jt in a)if(et=a[Jt],a.hasOwnProperty(Jt)&&et!=null&&!o.hasOwnProperty(Jt))switch(Jt){case"selected":e.selected=!1;break;default:Oe(e,n,Jt,null,o,et)}for(P in o)if(et=o[P],nt=a[P],o.hasOwnProperty(P)&&et!==nt&&(et!=null||nt!=null))switch(P){case"selected":e.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Oe(e,n,P,et,o,nt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var jt in a)et=a[jt],a.hasOwnProperty(jt)&&et!=null&&!o.hasOwnProperty(jt)&&Oe(e,n,jt,null,o,et);for(J in o)if(et=o[J],nt=a[J],o.hasOwnProperty(J)&&et!==nt&&(et!=null||nt!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Oe(e,n,J,et,o,nt)}return;default:if(Ku(n)){for(var Pe in a)et=a[Pe],a.hasOwnProperty(Pe)&&et!==void 0&&!o.hasOwnProperty(Pe)&&Pf(e,n,Pe,void 0,o,et);for(ut in o)et=o[ut],nt=a[ut],!o.hasOwnProperty(ut)||et===nt||et===void 0&&nt===void 0||Pf(e,n,ut,et,o,nt);return}}for(var q in a)et=a[q],a.hasOwnProperty(q)&&et!=null&&!o.hasOwnProperty(q)&&Oe(e,n,q,null,o,et);for(mt in o)et=o[mt],nt=a[mt],!o.hasOwnProperty(mt)||et===nt||et==null&&nt==null||Oe(e,n,mt,et,o,nt)}var Bf=null,If=null;function $l(e){return e.nodeType===9?e:e.ownerDocument}function Xg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function zf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ff=null;function eS(){var e=window.event;return e&&e.type==="popstate"?e===Ff?!1:(Ff=e,!0):(Ff=null,!1)}var qg=typeof setTimeout=="function"?setTimeout:void 0,nS=typeof clearTimeout=="function"?clearTimeout:void 0,Yg=typeof Promise=="function"?Promise:void 0,iS=typeof queueMicrotask=="function"?queueMicrotask:typeof Yg<"u"?function(e){return Yg.resolve(null).then(e).catch(aS)}:qg;function aS(e){setTimeout(function(){throw e})}function Ra(e){return e==="head"}function jg(e,n){var a=n,o=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&To(M.documentElement),a&2&&To(M.body),a&4)for(a=M.head,To(a),M=a.firstChild;M;){var T=M.nextSibling,P=M.nodeName;M[la]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=T}}if(c===0){e.removeChild(f),Lo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);Lo(n)}function Hf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hf(a),ua(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function rS(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[la])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function sS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function Gf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function oS(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Vf=null;function Zg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Kg(e,n,a){switch(n=$l(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function To(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ua(e)}var li=new Map,Qg=new Set;function tu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ji=Z.d;Z.d={f:lS,r:uS,D:cS,C:fS,L:hS,m:dS,X:mS,S:pS,M:gS};function lS(){var e=ji.f(),n=Wl();return e||n}function uS(e){var n=Oi(e);n!==null&&n.tag===5&&n.type==="form"?_m(n):ji.r(e)}var rs=typeof document>"u"?null:document;function Jg(e,n,a){var o=rs;if(o&&typeof n=="string"&&n){var c=dn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Qg.has(c)||(Qg.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),En(n,"link",e),en(n),o.head.appendChild(n)))}}function cS(e){ji.D(e),Jg("dns-prefetch",e,null)}function fS(e,n){ji.C(e,n),Jg("preconnect",e,n)}function hS(e,n,a){ji.L(e,n,a);var o=rs;if(o&&e&&n){var c='link[rel="preload"][as="'+dn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+dn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+dn(a.imageSizes)+'"]')):c+='[href="'+dn(e)+'"]';var f=c;switch(n){case"style":f=ss(e);break;case"script":f=os(e)}li.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),li.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(bo(f))||n==="script"&&o.querySelector(Ao(f))||(n=o.createElement("link"),En(n,"link",e),en(n),o.head.appendChild(n)))}}function dS(e,n){ji.m(e,n);var a=rs;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+dn(o)+'"][href="'+dn(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=os(e)}if(!li.has(f)&&(e=g({rel:"modulepreload",href:e},n),li.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ao(f)))return}o=a.createElement("link"),En(o,"link",e),en(o),a.head.appendChild(o)}}}function pS(e,n,a){ji.S(e,n,a);var o=rs;if(o&&e){var c=ca(o).hoistableStyles,f=ss(e);n=n||"default";var M=c.get(f);if(!M){var T={loading:0,preload:null};if(M=o.querySelector(bo(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=li.get(f))&&kf(e,a);var P=M=o.createElement("link");en(P),En(P,"link",e),P._p=new Promise(function(J,ut){P.onload=J,P.onerror=ut}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,eu(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:T},c.set(f,M)}}}function mS(e,n){ji.X(e,n);var a=rs;if(a&&e){var o=ca(a).hoistableScripts,c=os(e),f=o.get(c);f||(f=a.querySelector(Ao(c)),f||(e=g({src:e,async:!0},n),(n=li.get(c))&&Xf(e,n),f=a.createElement("script"),en(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function gS(e,n){ji.M(e,n);var a=rs;if(a&&e){var o=ca(a).hoistableScripts,c=os(e),f=o.get(c);f||(f=a.querySelector(Ao(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=li.get(c))&&Xf(e,n),f=a.createElement("script"),en(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function $g(e,n,a,o){var c=(c=St.current)?tu(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ss(a.href),a=ca(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ss(a.href);var f=ca(c).hoistableStyles,M=f.get(e);if(M||(c=c.ownerDocument||c,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,M),(f=c.querySelector(bo(e)))&&!f._p&&(M.instance=f,M.state.loading=5),li.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(e,a),f||_S(c,e,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=os(a),a=ca(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ss(e){return'href="'+dn(e)+'"'}function bo(e){return'link[rel="stylesheet"]['+e+"]"}function t_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function _S(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),En(n,"link",a),en(n),e.head.appendChild(n))}function os(e){return'[src="'+dn(e)+'"]'}function Ao(e){return"script[async]"+e}function e_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+dn(a.href)+'"]');if(o)return n.instance=o,en(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),en(o),En(o,"style",c),eu(o,a.precedence,e),n.instance=o;case"stylesheet":c=ss(a.href);var f=e.querySelector(bo(c));if(f)return n.state.loading|=4,n.instance=f,en(f),f;o=t_(a),(c=li.get(c))&&kf(o,c),f=(e.ownerDocument||e).createElement("link"),en(f);var M=f;return M._p=new Promise(function(T,P){M.onload=T,M.onerror=P}),En(f,"link",o),n.state.loading|=4,eu(f,a.precedence,e),n.instance=f;case"script":return f=os(a.src),(c=e.querySelector(Ao(f)))?(n.instance=c,en(c),c):(o=a,(c=li.get(f))&&(o=g({},a),Xf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),en(c),En(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,eu(o,a.precedence,e));return n.instance}function eu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,M=0;M<o.length;M++){var T=o[M];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Xf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var nu=null;function n_(e,n,a){if(nu===null){var o=new Map,c=nu=new Map;c.set(a,o)}else c=nu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[la]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var M=f.getAttribute(n)||"";M=e+M;var T=o.get(M);T?T.push(f):o.set(M,[f])}}return o}function i_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function vS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function a_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ro=null;function xS(){}function SS(e,n,a){if(Ro===null)throw Error(r(475));var o=Ro;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=ss(a.href),f=e.querySelector(bo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=iu.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,en(f);return}f=e.ownerDocument||e,a=t_(a),(c=li.get(c))&&kf(a,c),f=f.createElement("link"),en(f);var M=f;M._p=new Promise(function(T,P){M.onload=T,M.onerror=P}),En(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=iu.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function yS(){if(Ro===null)throw Error(r(475));var e=Ro;return e.stylesheets&&e.count===0&&Wf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Wf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function iu(){if(this.count--,this.count===0){if(this.stylesheets)Wf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var au=null;function Wf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,au=new Map,n.forEach(MS,e),au=null,iu.call(e))}function MS(e,n){if(!(n.state.loading&4)){var a=au.get(e);if(a)var o=a.get(null);else{a=new Map,au.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var M=c[f];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}c=n.instance,M=c.getAttribute("data-precedence"),f=a.get(M)||o,f===o&&a.set(null,c),a.set(M,c),this.count++,o=iu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Co={$$typeof:D,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function ES(e,n,a,o,c,f,M,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lt(0),this.hiddenUpdates=lt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function r_(e,n,a,o,c,f,M,T,P,J,ut,mt){return e=new ES(e,n,a,M,T,P,J,mt),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),e.current=f,f.stateNode=e,n=bc(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},wc(f),e}function s_(e){return e?(e=zr,e):zr}function o_(e,n,a,o,c,f){c=s_(c),o.context===null?o.context=c:o.pendingContext=c,o=pa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ma(e,o,n),a!==null&&($n(a,e,n),io(a,e,n))}function l_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function qf(e,n){l_(e,n),(e=e.alternate)&&l_(e,n)}function u_(e){if(e.tag===13){var n=Ir(e,67108864);n!==null&&$n(n,e,67108864),qf(e,67108864)}}var ru=!0;function TS(e,n,a,o){var c=B.T;B.T=null;var f=Z.p;try{Z.p=2,Yf(e,n,a,o)}finally{Z.p=f,B.T=c}}function bS(e,n,a,o){var c=B.T;B.T=null;var f=Z.p;try{Z.p=8,Yf(e,n,a,o)}finally{Z.p=f,B.T=c}}function Yf(e,n,a,o){if(ru){var c=jf(o);if(c===null)Of(e,n,o,su,a),f_(e,o);else if(RS(c,e,n,a,o))o.stopPropagation();else if(f_(e,o),n&4&&-1<AS.indexOf(e)){for(;c!==null;){var f=Oi(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var M=Ot(f.pendingLanes);if(M!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;M;){var P=1<<31-Ct(M);T.entanglements[1]|=P,M&=~P}wi(f),(Re&6)===0&&(kl=ee()+500,yo(0))}}break;case 13:T=Ir(f,2),T!==null&&$n(T,f,2),Wl(),qf(f,2)}if(f=jf(o),f===null&&Of(e,n,o,su,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Of(e,n,o,null,a)}}function jf(e){return e=Ju(e),Zf(e)}var su=null;function Zf(e){if(su=null,e=Ni(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return su=e,null}function c_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xt()){case De:return 2;case kt:return 8;case N:case b:return 32;case tt:return 268435456;default:return 32}default:return 32}}var Kf=!1,Ca=null,wa=null,Da=null,wo=new Map,Do=new Map,Ua=[],AS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function f_(e,n){switch(e){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Oi(n),n!==null&&u_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function RS(e,n,a,o,c){switch(n){case"focusin":return Ca=Uo(Ca,e,n,a,o,c),!0;case"dragenter":return wa=Uo(wa,e,n,a,o,c),!0;case"mouseover":return Da=Uo(Da,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return wo.set(f,Uo(wo.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Do.set(f,Uo(Do.get(f)||null,e,n,a,o,c)),!0}return!1}function h_(e){var n=Ni(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,qn(e.priority,function(){if(a.tag===13){var o=Jn();o=ze(o);var c=Ir(a,o);c!==null&&$n(c,a,o),qf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ou(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=jf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Qu=o,a.target.dispatchEvent(o),Qu=null}else return n=Oi(a),n!==null&&u_(n),e.blockedOn=a,!1;n.shift()}return!0}function d_(e,n,a){ou(e)&&a.delete(n)}function CS(){Kf=!1,Ca!==null&&ou(Ca)&&(Ca=null),wa!==null&&ou(wa)&&(wa=null),Da!==null&&ou(Da)&&(Da=null),wo.forEach(d_),Do.forEach(d_)}function lu(e,n){e.blockedOn===n&&(e.blockedOn=null,Kf||(Kf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,CS)))}var uu=null;function p_(e){uu!==e&&(uu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){uu===e&&(uu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(Zf(o||a)===null)continue;break}var f=Oi(a);f!==null&&(e.splice(n,3),n-=3,jc(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Lo(e){function n(P){return lu(P,e)}Ca!==null&&lu(Ca,e),wa!==null&&lu(wa,e),Da!==null&&lu(Da,e),wo.forEach(n),Do.forEach(n);for(var a=0;a<Ua.length;a++){var o=Ua[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ua.length&&(a=Ua[0],a.blockedOn===null);)h_(a),a.blockedOn===null&&Ua.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],M=c[xn]||null;if(typeof f=="function")M||p_(a);else if(M){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,M=f[xn]||null)T=M.formAction;else if(Zf(c)!==null)continue}else T=M.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),p_(a)}}}function Qf(e){this._internalRoot=e}cu.prototype.render=Qf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Jn();o_(a,o,e,n,null,null)},cu.prototype.unmount=Qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;o_(e.current,2,null,e,null,null),Wl(),n[Bn]=null}};function cu(e){this._internalRoot=e}cu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Me();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ua.length&&n!==0&&n<Ua[a].priority;a++);Ua.splice(a,0,e),a===0&&h_(e)}};var m_=t.version;if(m_!=="19.1.0")throw Error(r(527,m_,"19.1.0"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var wS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fu.isDisabled&&fu.supportsFiber)try{ft=fu.inject(wS),It=fu}catch{}}return Oo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=Um,f=Lm,M=Nm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=r_(e,1,!1,null,null,a,o,c,f,M,T,null),e[Bn]=n.current,Nf(e),new Qf(n)},Oo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",f=Um,M=Lm,T=Nm,P=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=r_(e,1,!0,n,a??null,o,c,f,M,T,P,J),n.context=s_(null),a=n.current,o=Jn(),o=ze(o),c=pa(o),c.callback=null,ma(a,c,o),a=o,n.current.lanes=a,pt(n,a),wi(n),e[Bn]=n.current,Nf(e),new cu(n)},Oo.version="19.1.0",Oo}var b_;function FS(){if(b_)return th.exports;b_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),th.exports=zS(),th.exports}var HS=FS(),Po={},A_;function GS(){if(A_)return Po;A_=1,Object.defineProperty(Po,"__esModule",{value:!0}),Po.parse=h,Po.serialize=p;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,u=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function h(v,y){const E=new u,A=v.length;if(A<2)return E;const S=(y==null?void 0:y.decode)||g;let _=0;do{const O=v.indexOf("=",_);if(O===-1)break;const D=v.indexOf(";",_),U=D===-1?A:D;if(O>U){_=v.lastIndexOf(";",O-1)+1;continue}const z=d(v,_,O),H=m(v,O,z),I=v.slice(z,H);if(E[I]===void 0){let W=d(v,O+1,U),w=m(v,U,W);const C=S(v.slice(W,w));E[I]=C}_=U+1}while(_<A);return E}function d(v,y,E){do{const A=v.charCodeAt(y);if(A!==32&&A!==9)return y}while(++y<E);return E}function m(v,y,E){for(;y>E;){const A=v.charCodeAt(--y);if(A!==32&&A!==9)return y+1}return E}function p(v,y,E){const A=(E==null?void 0:E.encode)||encodeURIComponent;if(!s.test(v))throw new TypeError(`argument name is invalid: ${v}`);const S=A(y);if(!t.test(S))throw new TypeError(`argument val is invalid: ${y}`);let _=v+"="+S;if(!E)return _;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);_+="; Max-Age="+E.maxAge}if(E.domain){if(!i.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);_+="; Domain="+E.domain}if(E.path){if(!r.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);_+="; Path="+E.path}if(E.expires){if(!x(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);_+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(_+="; HttpOnly"),E.secure&&(_+="; Secure"),E.partitioned&&(_+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return _}function g(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function x(v){return l.call(v)==="[object Date]"}return Po}GS();var R_="popstate";function VS(s={}){function t(l,u){let{pathname:h="/",search:d="",hash:m=""}=Ar(l.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),Ih("",{pathname:h,search:d,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function i(l,u){let h=l.document.querySelector("base"),d="";if(h&&h.getAttribute("href")){let m=l.location.href,p=m.indexOf("#");d=p===-1?m:m.slice(0,p)}return d+"#"+(typeof u=="string"?u:Wo(u))}function r(l,u){Ei(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return XS(t,i,r,s)}function We(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Ei(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function kS(){return Math.random().toString(36).substring(2,10)}function C_(s,t){return{usr:s.state,key:s.key,idx:t}}function Ih(s,t,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Ar(t):t,state:i,key:t&&t.key||r||kS()}}function Wo({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Ar(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function XS(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,h=l.history,d="POP",m=null,p=g();p==null&&(p=0,h.replaceState({...h.state,idx:p},""));function g(){return(h.state||{idx:null}).idx}function x(){d="POP";let S=g(),_=S==null?null:S-p;p=S,m&&m({action:d,location:A.location,delta:_})}function v(S,_){d="PUSH";let O=Ih(A.location,S,_);i&&i(O,S),p=g()+1;let D=C_(O,p),U=A.createHref(O);try{h.pushState(D,"",U)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;l.location.assign(U)}u&&m&&m({action:d,location:A.location,delta:1})}function y(S,_){d="REPLACE";let O=Ih(A.location,S,_);i&&i(O,S),p=g();let D=C_(O,p),U=A.createHref(O);h.replaceState(D,"",U),u&&m&&m({action:d,location:A.location,delta:0})}function E(S){return WS(S)}let A={get action(){return d},get location(){return s(l,h)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(R_,x),m=S,()=>{l.removeEventListener(R_,x),m=null}},createHref(S){return t(l,S)},createURL:E,encodeLocation(S){let _=E(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:v,replace:y,go(S){return h.go(S)}};return A}function WS(s,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),We(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Wo(s);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function Uv(s,t,i="/"){return qS(s,t,i,!1)}function qS(s,t,i,r){let l=typeof t=="string"?Ar(t):t,u=ra(l.pathname||"/",i);if(u==null)return null;let h=Lv(s);YS(h);let d=null;for(let m=0;d==null&&m<h.length;++m){let p=ay(u);d=ny(h[m],p,r)}return d}function Lv(s,t=[],i=[],r=""){let l=(u,h,d)=>{let m={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};m.relativePath.startsWith("/")&&(We(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let p=ia([r,m.relativePath]),g=i.concat(m);u.children&&u.children.length>0&&(We(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Lv(u.children,t,g,p)),!(u.path==null&&!u.index)&&t.push({path:p,score:ty(p,u.index),routesMeta:g})};return s.forEach((u,h)=>{var d;if(u.path===""||!((d=u.path)!=null&&d.includes("?")))l(u,h);else for(let m of Nv(u.path))l(u,h,m)}),t}function Nv(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let h=Nv(r.join("/")),d=[];return d.push(...h.map(m=>m===""?u:[u,m].join("/"))),l&&d.push(...h),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function YS(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:ey(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var jS=/^:[\w-]+$/,ZS=3,KS=2,QS=1,JS=10,$S=-2,w_=s=>s==="*";function ty(s,t){let i=s.split("/"),r=i.length;return i.some(w_)&&(r+=$S),t&&(r+=KS),i.filter(l=>!w_(l)).reduce((l,u)=>l+(jS.test(u)?ZS:u===""?QS:JS),r)}function ey(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function ny(s,t,i=!1){let{routesMeta:r}=s,l={},u="/",h=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,g=u==="/"?t:t.slice(u.length)||"/",x=Vu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),v=m.route;if(!x&&p&&i&&!r[r.length-1].route.index&&(x=Vu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!x)return null;Object.assign(l,x.params),h.push({params:l,pathname:ia([u,x.pathname]),pathnameBase:ly(ia([u,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(u=ia([u,x.pathnameBase]))}return h}function Vu(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=iy(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let u=l[0],h=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:x},v)=>{if(g==="*"){let E=d[v]||"";h=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const y=d[v];return x&&!y?p[g]=void 0:p[g]=(y||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:h,pattern:s}}function iy(s,t=!1,i=!0){Ei(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function ay(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ei(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function ra(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function ry(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Ar(s):s;return{pathname:i?i.startsWith("/")?i:sy(i,t):t,search:uy(r),hash:cy(l)}}function sy(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function ah(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function oy(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Ov(s){let t=oy(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function Pv(s,t,i,r=!1){let l;typeof s=="string"?l=Ar(s):(l={...s},We(!l.pathname||!l.pathname.includes("?"),ah("?","pathname","search",l)),We(!l.pathname||!l.pathname.includes("#"),ah("#","pathname","hash",l)),We(!l.search||!l.search.includes("#"),ah("#","search","hash",l)));let u=s===""||l.pathname==="",h=u?"/":l.pathname,d;if(h==null)d=i;else{let x=t.length-1;if(!r&&h.startsWith("..")){let v=h.split("/");for(;v[0]==="..";)v.shift(),x-=1;l.pathname=v.join("/")}d=x>=0?t[x]:"/"}let m=ry(l,d),p=h&&h!=="/"&&h.endsWith("/"),g=(u||h===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var ia=s=>s.join("/").replace(/\/\/+/g,"/"),ly=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),uy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,cy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function fy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var Bv=["POST","PUT","PATCH","DELETE"];new Set(Bv);var hy=["GET",...Bv];new Set(hy);var Bs=_t.createContext(null);Bs.displayName="DataRouter";var qu=_t.createContext(null);qu.displayName="DataRouterState";var Iv=_t.createContext({isTransitioning:!1});Iv.displayName="ViewTransition";var dy=_t.createContext(new Map);dy.displayName="Fetchers";var py=_t.createContext(null);py.displayName="Await";var Li=_t.createContext(null);Li.displayName="Navigation";var Zo=_t.createContext(null);Zo.displayName="Location";var oa=_t.createContext({outlet:null,matches:[],isDataRoute:!1});oa.displayName="Route";var Rd=_t.createContext(null);Rd.displayName="RouteError";function my(s,{relative:t}={}){We(Ko(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=_t.useContext(Li),{hash:l,pathname:u,search:h}=Qo(s,{relative:t}),d=u;return i!=="/"&&(d=u==="/"?i:ia([i,u])),r.createHref({pathname:d,search:h,hash:l})}function Ko(){return _t.useContext(Zo)!=null}function Rr(){return We(Ko(),"useLocation() may be used only in the context of a <Router> component."),_t.useContext(Zo).location}var zv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fv(s){_t.useContext(Li).static||_t.useLayoutEffect(s)}function gy(){let{isDataRoute:s}=_t.useContext(oa);return s?wy():_y()}function _y(){We(Ko(),"useNavigate() may be used only in the context of a <Router> component.");let s=_t.useContext(Bs),{basename:t,navigator:i}=_t.useContext(Li),{matches:r}=_t.useContext(oa),{pathname:l}=Rr(),u=JSON.stringify(Ov(r)),h=_t.useRef(!1);return Fv(()=>{h.current=!0}),_t.useCallback((m,p={})=>{if(Ei(h.current,zv),!h.current)return;if(typeof m=="number"){i.go(m);return}let g=Pv(m,JSON.parse(u),l,p.relative==="path");s==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:ia([t,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[t,i,u,l,s])}_t.createContext(null);function Qo(s,{relative:t}={}){let{matches:i}=_t.useContext(oa),{pathname:r}=Rr(),l=JSON.stringify(Ov(i));return _t.useMemo(()=>Pv(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function vy(s,t){return Hv(s,t)}function Hv(s,t,i,r){var O;We(Ko(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:u}=_t.useContext(Li),{matches:h}=_t.useContext(oa),d=h[h.length-1],m=d?d.params:{},p=d?d.pathname:"/",g=d?d.pathnameBase:"/",x=d&&d.route;{let D=x&&x.path||"";Gv(p,!x||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let v=Rr(),y;if(t){let D=typeof t=="string"?Ar(t):t;We(g==="/"||((O=D.pathname)==null?void 0:O.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${D.pathname}" was given in the \`location\` prop.`),y=D}else y=v;let E=y.pathname||"/",A=E;if(g!=="/"){let D=g.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(D.length).join("/")}let S=!u&&i&&i.matches&&i.matches.length>0?i.matches:Uv(s,{pathname:A});Ei(x||S!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Ei(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=Ey(S&&S.map(D=>Object.assign({},D,{params:Object.assign({},m,D.params),pathname:ia([g,l.encodeLocation?l.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?g:ia([g,l.encodeLocation?l.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),h,i,r);return t&&_?_t.createElement(Zo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},_):_}function xy(){let s=Cy(),t=fy(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},h=null;return console.error("Error handled by React Router default ErrorBoundary:",s),h=_t.createElement(_t.Fragment,null,_t.createElement("p",null,"💿 Hey developer 👋"),_t.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",_t.createElement("code",{style:u},"ErrorBoundary")," or"," ",_t.createElement("code",{style:u},"errorElement")," prop on your route.")),_t.createElement(_t.Fragment,null,_t.createElement("h2",null,"Unexpected Application Error!"),_t.createElement("h3",{style:{fontStyle:"italic"}},t),i?_t.createElement("pre",{style:l},i):null,h)}var Sy=_t.createElement(xy,null),yy=class extends _t.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){console.error("React Router caught the following error during render",s,t)}render(){return this.state.error!==void 0?_t.createElement(oa.Provider,{value:this.props.routeContext},_t.createElement(Rd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function My({routeContext:s,match:t,children:i}){let r=_t.useContext(Bs);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),_t.createElement(oa.Provider,{value:s},i)}function Ey(s,t=[],i=null,r=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let l=s,u=i==null?void 0:i.errors;if(u!=null){let m=l.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id])!==void 0);We(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let h=!1,d=-1;if(i)for(let m=0;m<l.length;m++){let p=l[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=m),p.route.id){let{loaderData:g,errors:x}=i,v=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!x||x[p.route.id]===void 0);if(p.route.lazy||v){h=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((m,p,g)=>{let x,v=!1,y=null,E=null;i&&(x=u&&p.route.id?u[p.route.id]:void 0,y=p.route.errorElement||Sy,h&&(d<0&&g===0?(Gv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,E=null):d===g&&(v=!0,E=p.route.hydrateFallbackElement||null)));let A=t.concat(l.slice(0,g+1)),S=()=>{let _;return x?_=y:v?_=E:p.route.Component?_=_t.createElement(p.route.Component,null):p.route.element?_=p.route.element:_=m,_t.createElement(My,{match:p,routeContext:{outlet:m,matches:A,isDataRoute:i!=null},children:_})};return i&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?_t.createElement(yy,{location:i.location,revalidation:i.revalidation,component:y,error:x,children:S(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):S()},null)}function Cd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ty(s){let t=_t.useContext(Bs);return We(t,Cd(s)),t}function by(s){let t=_t.useContext(qu);return We(t,Cd(s)),t}function Ay(s){let t=_t.useContext(oa);return We(t,Cd(s)),t}function wd(s){let t=Ay(s),i=t.matches[t.matches.length-1];return We(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function Ry(){return wd("useRouteId")}function Cy(){var r;let s=_t.useContext(Rd),t=by("useRouteError"),i=wd("useRouteError");return s!==void 0?s:(r=t.errors)==null?void 0:r[i]}function wy(){let{router:s}=Ty("useNavigate"),t=wd("useNavigate"),i=_t.useRef(!1);return Fv(()=>{i.current=!0}),_t.useCallback(async(l,u={})=>{Ei(i.current,zv),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:t,...u}))},[s,t])}var D_={};function Gv(s,t,i){!t&&!D_[s]&&(D_[s]=!0,Ei(!1,i))}_t.memo(Dy);function Dy({routes:s,future:t,state:i}){return Hv(s,void 0,i,t)}function zh(s){We(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Uy({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:u=!1}){We(!Ko(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),d=_t.useMemo(()=>({basename:h,navigator:l,static:u,future:{}}),[h,l,u]);typeof i=="string"&&(i=Ar(i));let{pathname:m="/",search:p="",hash:g="",state:x=null,key:v="default"}=i,y=_t.useMemo(()=>{let E=ra(m,h);return E==null?null:{location:{pathname:E,search:p,hash:g,state:x,key:v},navigationType:r}},[h,m,p,g,x,v,r]);return Ei(y!=null,`<Router basename="${h}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:_t.createElement(Li.Provider,{value:d},_t.createElement(Zo.Provider,{children:t,value:y}))}function Ly({children:s,location:t}){return vy(Fh(s),t)}function Fh(s,t=[]){let i=[];return _t.Children.forEach(s,(r,l)=>{if(!_t.isValidElement(r))return;let u=[...t,l];if(r.type===_t.Fragment){i.push.apply(i,Fh(r.props.children,u));return}We(r.type===zh,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),We(!r.props.index||!r.props.children,"An index route cannot have child routes.");let h={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(h.children=Fh(r.props.children,u)),i.push(h)}),i}var Ou="get",Pu="application/x-www-form-urlencoded";function Yu(s){return s!=null&&typeof s.tagName=="string"}function Ny(s){return Yu(s)&&s.tagName.toLowerCase()==="button"}function Oy(s){return Yu(s)&&s.tagName.toLowerCase()==="form"}function Py(s){return Yu(s)&&s.tagName.toLowerCase()==="input"}function By(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Iy(s,t){return s.button===0&&(!t||t==="_self")&&!By(s)}var hu=null;function zy(){if(hu===null)try{new FormData(document.createElement("form"),0),hu=!1}catch{hu=!0}return hu}var Fy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function rh(s){return s!=null&&!Fy.has(s)?(Ei(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pu}"`),null):s}function Hy(s,t){let i,r,l,u,h;if(Oy(s)){let d=s.getAttribute("action");r=d?ra(d,t):null,i=s.getAttribute("method")||Ou,l=rh(s.getAttribute("enctype"))||Pu,u=new FormData(s)}else if(Ny(s)||Py(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(r=m?ra(m,t):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Ou,l=rh(s.getAttribute("formenctype"))||rh(d.getAttribute("enctype"))||Pu,u=new FormData(d,s),!zy()){let{name:p,type:g,value:x}=s;if(g==="image"){let v=p?`${p}.`:"";u.append(`${v}x`,"0"),u.append(`${v}y`,"0")}else p&&u.append(p,x)}}else{if(Yu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Ou,r=null,l=Pu,h=s}return u&&l==="text/plain"&&(h=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:h}}function Dd(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}async function Gy(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Vy(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function ky(s,t,i){let r=await Promise.all(s.map(async l=>{let u=t.routes[l.route.id];if(u){let h=await Gy(u,i);return h.links?h.links():[]}return[]}));return Yy(r.flat(1).filter(Vy).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function U_(s,t,i,r,l,u){let h=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>{var g;return i[p].pathname!==m.pathname||((g=i[p].route.path)==null?void 0:g.endsWith("*"))&&i[p].params["*"]!==m.params["*"]};return u==="assets"?t.filter((m,p)=>h(m,p)||d(m,p)):u==="data"?t.filter((m,p)=>{var x;let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(h(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((x=i[0])==null?void 0:x.params)||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Xy(s,t,{includeHydrateFallback:i}={}){return Wy(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function Wy(s){return[...new Set(s)]}function qy(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function Yy(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let u=JSON.stringify(qy(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var jy=new Set([100,101,204,205]);function Zy(s,t){let i=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i.pathname==="/"?i.pathname="_root.data":t&&ra(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function Vv(){let s=_t.useContext(Bs);return Dd(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Ky(){let s=_t.useContext(qu);return Dd(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Ud=_t.createContext(void 0);Ud.displayName="FrameworkContext";function kv(){let s=_t.useContext(Ud);return Dd(s,"You must render this element inside a <HydratedRouter> element"),s}function Qy(s,t){let i=_t.useContext(Ud),[r,l]=_t.useState(!1),[u,h]=_t.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:x}=t,v=_t.useRef(null);_t.useEffect(()=>{if(s==="render"&&h(!0),s==="viewport"){let A=_=>{_.forEach(O=>{h(O.isIntersecting)})},S=new IntersectionObserver(A,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[s]),_t.useEffect(()=>{if(r){let A=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(A)}}},[r]);let y=()=>{l(!0)},E=()=>{l(!1),h(!1)};return i?s!=="intent"?[u,v,{}]:[u,v,{onFocus:Bo(d,y),onBlur:Bo(m,E),onMouseEnter:Bo(p,y),onMouseLeave:Bo(g,E),onTouchStart:Bo(x,y)}]:[!1,v,{}]}function Bo(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function Jy({page:s,...t}){let{router:i}=Vv(),r=_t.useMemo(()=>Uv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?_t.createElement(tM,{page:s,matches:r,...t}):null}function $y(s){let{manifest:t,routeModules:i}=kv(),[r,l]=_t.useState([]);return _t.useEffect(()=>{let u=!1;return ky(s,t,i).then(h=>{u||l(h)}),()=>{u=!0}},[s,t,i]),r}function tM({page:s,matches:t,...i}){let r=Rr(),{manifest:l,routeModules:u}=kv(),{basename:h}=Vv(),{loaderData:d,matches:m}=Ky(),p=_t.useMemo(()=>U_(s,t,m,l,r,"data"),[s,t,m,l,r]),g=_t.useMemo(()=>U_(s,t,m,l,r,"assets"),[s,t,m,l,r]),x=_t.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,A=!1;if(t.forEach(_=>{var D;let O=l.routes[_.route.id];!O||!O.hasLoader||(!p.some(U=>U.route.id===_.route.id)&&_.route.id in d&&((D=u[_.route.id])!=null&&D.shouldRevalidate)||O.hasClientLoader?A=!0:E.add(_.route.id))}),E.size===0)return[];let S=Zy(s,h);return A&&E.size>0&&S.searchParams.set("_routes",t.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[h,d,r,l,p,t,s,u]),v=_t.useMemo(()=>Xy(g,l),[g,l]),y=$y(g);return _t.createElement(_t.Fragment,null,x.map(E=>_t.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),v.map(E=>_t.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),y.map(({key:E,link:A})=>_t.createElement("link",{key:E,...A})))}function eM(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var Xv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Xv&&(window.__reactRouterVersion="7.6.0")}catch{}function nM({basename:s,children:t,window:i}){let r=_t.useRef();r.current==null&&(r.current=VS({window:i,v5Compat:!0}));let l=r.current,[u,h]=_t.useState({action:l.action,location:l.location}),d=_t.useCallback(m=>{_t.startTransition(()=>h(m))},[h]);return _t.useLayoutEffect(()=>l.listen(d),[l,d]),_t.createElement(Uy,{basename:s,children:t,location:u.location,navigationType:u.action,navigator:l})}var Wv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qo=_t.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:h,state:d,target:m,to:p,preventScrollReset:g,viewTransition:x,...v},y){let{basename:E}=_t.useContext(Li),A=typeof p=="string"&&Wv.test(p),S,_=!1;if(typeof p=="string"&&A&&(S=p,Xv))try{let w=new URL(window.location.href),C=p.startsWith("//")?new URL(w.protocol+p):new URL(p),F=ra(C.pathname,E);C.origin===w.origin&&F!=null?p=F+C.search+C.hash:_=!0}catch{Ei(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let O=my(p,{relative:l}),[D,U,z]=Qy(r,v),H=sM(p,{replace:h,state:d,target:m,preventScrollReset:g,relative:l,viewTransition:x});function I(w){t&&t(w),w.defaultPrevented||H(w)}let W=_t.createElement("a",{...v,...z,href:S||O,onClick:_||u?t:I,ref:eM(y,U),target:m,"data-discover":!A&&i==="render"?"true":void 0});return D&&!A?_t.createElement(_t.Fragment,null,W,_t.createElement(Jy,{page:O})):W});qo.displayName="Link";var iM=_t.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:h,viewTransition:d,children:m,...p},g){let x=Qo(h,{relative:p.relative}),v=Rr(),y=_t.useContext(qu),{navigator:E,basename:A}=_t.useContext(Li),S=y!=null&&fM(x)&&d===!0,_=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,O=v.pathname,D=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(O=O.toLowerCase(),D=D?D.toLowerCase():null,_=_.toLowerCase()),D&&A&&(D=ra(D,A)||D);const U=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let z=O===_||!l&&O.startsWith(_)&&O.charAt(U)==="/",H=D!=null&&(D===_||!l&&D.startsWith(_)&&D.charAt(_.length)==="/"),I={isActive:z,isPending:H,isTransitioning:S},W=z?t:void 0,w;typeof r=="function"?w=r(I):w=[r,z?"active":null,H?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let C=typeof u=="function"?u(I):u;return _t.createElement(qo,{...p,"aria-current":W,className:w,ref:g,style:C,to:h,viewTransition:d},typeof m=="function"?m(I):m)});iM.displayName="NavLink";var aM=_t.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:u,method:h=Ou,action:d,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:x,...v},y)=>{let E=uM(),A=cM(d,{relative:p}),S=h.toLowerCase()==="get"?"get":"post",_=typeof d=="string"&&Wv.test(d),O=D=>{if(m&&m(D),D.defaultPrevented)return;D.preventDefault();let U=D.nativeEvent.submitter,z=(U==null?void 0:U.getAttribute("formmethod"))||h;E(U||D.currentTarget,{fetcherKey:t,method:z,navigate:i,replace:l,state:u,relative:p,preventScrollReset:g,viewTransition:x})};return _t.createElement("form",{ref:y,method:S,action:A,onSubmit:r?m:O,...v,"data-discover":!_&&s==="render"?"true":void 0})});aM.displayName="Form";function rM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qv(s){let t=_t.useContext(Bs);return We(t,rM(s)),t}function sM(s,{target:t,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:h}={}){let d=gy(),m=Rr(),p=Qo(s,{relative:u});return _t.useCallback(g=>{if(Iy(g,t)){g.preventDefault();let x=i!==void 0?i:Wo(m)===Wo(p);d(s,{replace:x,state:r,preventScrollReset:l,relative:u,viewTransition:h})}},[m,d,p,i,r,t,s,l,u,h])}var oM=0,lM=()=>`__${String(++oM)}__`;function uM(){let{router:s}=qv("useSubmit"),{basename:t}=_t.useContext(Li),i=Ry();return _t.useCallback(async(r,l={})=>{let{action:u,method:h,encType:d,formData:m,body:p}=Hy(r,t);if(l.navigate===!1){let g=l.fetcherKey||lM();await s.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||h,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||h,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,t,i])}function cM(s,{relative:t}={}){let{basename:i}=_t.useContext(Li),r=_t.useContext(oa);We(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...Qo(s||".",{relative:t})},h=Rr();if(s==null){u.search=h.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(g=>g==="")){d.delete("index"),m.filter(x=>x).forEach(x=>d.append("index",x));let g=d.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:ia([i,u.pathname])),Wo(u)}function fM(s,t={}){let i=_t.useContext(Iv);We(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=qv("useViewTransitionState"),l=Qo(s,{relative:t.relative});if(!i.isTransitioning)return!1;let u=ra(i.currentLocation.pathname,r)||i.currentLocation.pathname,h=ra(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Vu(l.pathname,h)!=null||Vu(l.pathname,u)!=null}[...jy];const hM="_btn_h6mxj_3",dM={btn:hM};function pM(){return ke.jsxs("div",{style:{padding:"24px"},children:[ke.jsx("h1",{children:"Hoş geldiniz — Ege Başarı Seferihisar"}),ke.jsx("p",{children:"Bu site üzerinden sanal sınıf deneyimini keşfedebilirsiniz."}),ke.jsx(qo,{to:"/classroom",children:ke.jsx("button",{className:dM.btn,children:"3D Sınıfa Git"})})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ld="171",mM=0,L_=1,gM=2,Yv=1,jv=2,ta=3,Xa=0,Wn=1,On=2,Va=0,As=1,N_=2,O_=3,P_=4,_M=5,Sr=100,vM=101,xM=102,SM=103,yM=104,MM=200,EM=201,TM=202,bM=203,Hh=204,Gh=205,AM=206,RM=207,CM=208,wM=209,DM=210,UM=211,LM=212,NM=213,OM=214,Vh=0,kh=1,Xh=2,ws=3,Wh=4,qh=5,Yh=6,jh=7,Zv=0,PM=1,BM=2,ka=0,IM=1,zM=2,FM=3,Kv=4,HM=5,GM=6,VM=7,Qv=300,Ds=301,Us=302,Zh=303,Kh=304,ju=306,ku=1e3,Ha=1001,Qh=1002,Mi=1003,kM=1004,du=1005,hi=1006,sh=1007,Mr=1008,sa=1009,Jv=1010,$v=1011,Yo=1012,Nd=1013,Tr=1014,ea=1015,Jo=1016,Od=1017,Pd=1018,Ls=1020,t0=35902,e0=1021,n0=1022,yi=1023,i0=1024,a0=1025,Rs=1026,Ns=1027,r0=1028,Bd=1029,s0=1030,Id=1031,zd=1033,Bu=33776,Iu=33777,zu=33778,Fu=33779,Jh=35840,$h=35841,td=35842,ed=35843,nd=36196,id=37492,ad=37496,rd=37808,sd=37809,od=37810,ld=37811,ud=37812,cd=37813,fd=37814,hd=37815,dd=37816,pd=37817,md=37818,gd=37819,_d=37820,vd=37821,Hu=36492,xd=36494,Sd=36495,o0=36283,yd=36284,Md=36285,Ed=36286,XM=3200,WM=3201,l0=0,qM=1,Fa="",ci="srgb",Os="srgb-linear",Xu="linear",Be="srgb",ls=7680,B_=519,YM=512,jM=513,ZM=514,u0=515,KM=516,QM=517,JM=518,$M=519,I_=35044,z_="300 es",na=2e3,Wu=2001;class Cr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const r=this._listeners[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oh=Math.PI/180,Td=180/Math.PI;function $o(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function ve(s,t,i){return Math.max(t,Math.min(i,s))}function tE(s,t){return(s%t+t)%t}function lh(s,t,i){return(1-i)*s+i*t}function Io(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function kn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(t=0,i=0){Ae.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ve(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(t,i,r,l,u,h,d,m,p){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p)}set(t,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],x=r[7],v=r[2],y=r[5],E=r[8],A=l[0],S=l[3],_=l[6],O=l[1],D=l[4],U=l[7],z=l[2],H=l[5],I=l[8];return u[0]=h*A+d*O+m*z,u[3]=h*S+d*D+m*H,u[6]=h*_+d*U+m*I,u[1]=p*A+g*O+x*z,u[4]=p*S+g*D+x*H,u[7]=p*_+g*U+x*I,u[2]=v*A+y*O+E*z,u[5]=v*S+y*D+E*H,u[8]=v*_+y*U+E*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=g*h-d*p,v=d*m-g*u,y=p*u-h*m,E=i*x+r*v+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=x*A,t[1]=(l*p-g*r)*A,t[2]=(d*r-l*h)*A,t[3]=v*A,t[4]=(g*i-l*m)*A,t[5]=(l*u-d*i)*A,t[6]=y*A,t[7]=(r*m-p*i)*A,t[8]=(h*i-r*u)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(uh.makeScale(t,i)),this}rotate(t){return this.premultiply(uh.makeRotation(-t)),this}translate(t,i){return this.premultiply(uh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const uh=new se;function c0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function jo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function eE(){const s=jo("canvas");return s.style.display="block",s}const F_={};function Ts(s){s in F_||(F_[s]=!0,console.warn(s))}function nE(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function iE(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function aE(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const H_=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),G_=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rE(){const s={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Be&&(l.r=aa(l.r),l.g=aa(l.g),l.b=aa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=Cs(l.r),l.g=Cs(l.g),l.b=Cs(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Fa?Xu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Os]:{primaries:t,whitePoint:r,transfer:Xu,toXYZ:H_,fromXYZ:G_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:H_,fromXYZ:G_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),s}const Te=rE();function aa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Cs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let us;class sE{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{us===void 0&&(us=jo("canvas")),us.width=t.width,us.height=t.height;const r=us.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=us}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=jo("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=aa(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(aa(i[r]/255)*255):i[r]=aa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let oE=0;class f0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=$o(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(ch(l[h].image)):u.push(ch(l[h]))}else u=ch(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function ch(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lE=0;class wn extends Cr{constructor(t=wn.DEFAULT_IMAGE,i=wn.DEFAULT_MAPPING,r=Ha,l=Ha,u=hi,h=Mr,d=yi,m=sa,p=wn.DEFAULT_ANISOTROPY,g=Fa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=$o(),this.name="",this.source=new f0(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ku:t.x=t.x-Math.floor(t.x);break;case Ha:t.x=t.x<0?0:1;break;case Qh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ku:t.y=t.y-Math.floor(t.y);break;case Ha:t.y=t.y<0?0:1;break;case Qh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Qv;wn.DEFAULT_ANISOTROPY=1;class Ke{constructor(t=0,i=0,r=0,l=1){Ke.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],g=m[4],x=m[8],v=m[1],y=m[5],E=m[9],A=m[2],S=m[6],_=m[10];if(Math.abs(g-v)<.01&&Math.abs(x-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+A)<.1&&Math.abs(E+S)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,U=(y+1)/2,z=(_+1)/2,H=(g+v)/4,I=(x+A)/4,W=(E+S)/4;return D>U&&D>z?D<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(D),l=H/r,u=I/r):U>z?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=H/l,u=W/l):z<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(z),r=I/u,l=W/u),this.set(r,l,u,i),this}let O=Math.sqrt((S-E)*(S-E)+(x-A)*(x-A)+(v-g)*(v-g));return Math.abs(O)<.001&&(O=1),this.x=(S-E)/O,this.y=(x-A)/O,this.z=(v-g)/O,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this.w=ve(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this.w=ve(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uE extends Cr{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Ke(0,0,t,i),this.scissorTest=!1,this.viewport=new Ke(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new wn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let r=0,l=t.textures.length;r<l;r++)this.textures[r]=t.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new f0(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends uE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class h0 extends wn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=Ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cE extends wn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=Ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tl{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3];const v=u[h+0],y=u[h+1],E=u[h+2],A=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x;return}if(d===1){t[i+0]=v,t[i+1]=y,t[i+2]=E,t[i+3]=A;return}if(x!==A||m!==v||p!==y||g!==E){let S=1-d;const _=m*v+p*y+g*E+x*A,O=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const z=Math.sqrt(D),H=Math.atan2(z,_*O);S=Math.sin(S*H)/z,d=Math.sin(d*H)/z}const U=d*O;if(m=m*S+v*U,p=p*S+y*U,g=g*S+E*U,x=x*S+A*U,S===1-d){const z=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=z,p*=z,g*=z,x*=z}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],x=u[h],v=u[h+1],y=u[h+2],E=u[h+3];return t[i]=d*E+g*x+m*y-p*v,t[i+1]=m*E+g*v+p*x-d*y,t[i+2]=p*E+g*y+d*v-m*x,t[i+3]=g*E-d*x-m*v-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),x=d(u/2),v=m(r/2),y=m(l/2),E=m(u/2);switch(h){case"XYZ":this._x=v*g*x+p*y*E,this._y=p*y*x-v*g*E,this._z=p*g*E+v*y*x,this._w=p*g*x-v*y*E;break;case"YXZ":this._x=v*g*x+p*y*E,this._y=p*y*x-v*g*E,this._z=p*g*E-v*y*x,this._w=p*g*x+v*y*E;break;case"ZXY":this._x=v*g*x-p*y*E,this._y=p*y*x+v*g*E,this._z=p*g*E+v*y*x,this._w=p*g*x-v*y*E;break;case"ZYX":this._x=v*g*x-p*y*E,this._y=p*y*x+v*g*E,this._z=p*g*E-v*y*x,this._w=p*g*x+v*y*E;break;case"YZX":this._x=v*g*x+p*y*E,this._y=p*y*x+v*g*E,this._z=p*g*E-v*y*x,this._w=p*g*x-v*y*E;break;case"XZY":this._x=v*g*x-p*y*E,this._y=p*y*x-v*g*E,this._z=p*g*E+v*y*x,this._w=p*g*x+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],x=i[10],v=r+d+x;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-m)*y,this._y=(u-p)*y,this._z=(h-l)*y}else if(r>d&&r>x){const y=2*Math.sqrt(1+r-d-x);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+p)/y}else if(d>x){const y=2*Math.sqrt(1+d-r-x);this._w=(u-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+x-r-d);this._w=(h-l)/y,this._x=(u+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),x=Math.sin((1-i)*g)/p,v=Math.sin(i*g)/p;return this._w=h*x+this._w*v,this._x=r*x+this._x*v,this._y=l*x+this._y*v,this._z=u*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(t=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(V_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(V_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-u*l),x=2*(u*r-h*i);return this.x=i+m*p+h*x-d*g,this.y=r+m*g+d*p-u*x,this.z=l+m*x+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return fh.copy(this).projectOnVector(t),this.sub(fh)}reflect(t){return this.sub(fh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ve(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fh=new rt,V_=new tl;class Is{constructor(t=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(_i.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(_i.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=_i.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,_i):_i.fromBufferAttribute(u,h),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),pu.copy(r.boundingBox)),pu.applyMatrix4(t.matrixWorld),this.union(pu)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zo),mu.subVectors(this.max,zo),cs.subVectors(t.a,zo),fs.subVectors(t.b,zo),hs.subVectors(t.c,zo),Na.subVectors(fs,cs),Oa.subVectors(hs,fs),fr.subVectors(cs,hs);let i=[0,-Na.z,Na.y,0,-Oa.z,Oa.y,0,-fr.z,fr.y,Na.z,0,-Na.x,Oa.z,0,-Oa.x,fr.z,0,-fr.x,-Na.y,Na.x,0,-Oa.y,Oa.x,0,-fr.y,fr.x,0];return!hh(i,cs,fs,hs,mu)||(i=[1,0,0,0,1,0,0,0,1],!hh(i,cs,fs,hs,mu))?!1:(gu.crossVectors(Na,Oa),i=[gu.x,gu.y,gu.z],hh(i,cs,fs,hs,mu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Zi=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],_i=new rt,pu=new Is,cs=new rt,fs=new rt,hs=new rt,Na=new rt,Oa=new rt,fr=new rt,zo=new rt,mu=new rt,gu=new rt,hr=new rt;function hh(s,t,i,r,l){for(let u=0,h=s.length-3;u<=h;u+=3){hr.fromArray(s,u);const d=l.x*Math.abs(hr.x)+l.y*Math.abs(hr.y)+l.z*Math.abs(hr.z),m=t.dot(hr),p=i.dot(hr),g=r.dot(hr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const fE=new Is,Fo=new rt,dh=new rt;class Fd{constructor(t=new rt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):fE.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fo.subVectors(t,this.center);const i=Fo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Fo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fo.copy(t.center).add(dh)),this.expandByPoint(Fo.copy(t.center).sub(dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new rt,ph=new rt,_u=new rt,Pa=new rt,mh=new rt,vu=new rt,gh=new rt;class hE{constructor(t=new rt,i=new rt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ki.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,i),Ki.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){ph.copy(t).add(i).multiplyScalar(.5),_u.copy(i).sub(t).normalize(),Pa.copy(this.origin).sub(ph);const u=t.distanceTo(i)*.5,h=-this.direction.dot(_u),d=Pa.dot(this.direction),m=-Pa.dot(_u),p=Pa.lengthSq(),g=Math.abs(1-h*h);let x,v,y,E;if(g>0)if(x=h*m-d,v=h*d-m,E=u*g,x>=0)if(v>=-E)if(v<=E){const A=1/g;x*=A,v*=A,y=x*(x+h*v+2*d)+v*(h*x+v+2*m)+p}else v=u,x=Math.max(0,-(h*v+d)),y=-x*x+v*(v+2*m)+p;else v=-u,x=Math.max(0,-(h*v+d)),y=-x*x+v*(v+2*m)+p;else v<=-E?(x=Math.max(0,-(-h*u+d)),v=x>0?-u:Math.min(Math.max(-u,-m),u),y=-x*x+v*(v+2*m)+p):v<=E?(x=0,v=Math.min(Math.max(-u,-m),u),y=v*(v+2*m)+p):(x=Math.max(0,-(h*u+d)),v=x>0?u:Math.min(Math.max(-u,-m),u),y=-x*x+v*(v+2*m)+p);else v=h>0?-u:u,x=Math.max(0,-(h*v+d)),y=-x*x+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(ph).addScaledVector(_u,v),y}intersectSphere(t,i){Ki.subVectors(t.center,this.origin);const r=Ki.dot(this.direction),l=Ki.dot(Ki)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(r=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(r=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),g>=0?(u=(t.min.y-v.y)*g,h=(t.max.y-v.y)*g):(u=(t.max.y-v.y)*g,h=(t.min.y-v.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-v.z)*x,m=(t.max.z-v.z)*x):(d=(t.max.z-v.z)*x,m=(t.min.z-v.z)*x),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,i,r,l,u){mh.subVectors(i,t),vu.subVectors(r,t),gh.crossVectors(mh,vu);let h=this.direction.dot(gh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Pa.subVectors(this.origin,t);const m=d*this.direction.dot(vu.crossVectors(Pa,vu));if(m<0)return null;const p=d*this.direction.dot(mh.cross(Pa));if(p<0||m+p>h)return null;const g=-d*Pa.dot(gh);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(t,i,r,l,u,h,d,m,p,g,x,v,y,E,A,S){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p,g,x,v,y,E,A,S)}set(t,i,r,l,u,h,d,m,p,g,x,v,y,E,A,S){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=x,_[14]=v,_[3]=y,_[7]=E,_[11]=A,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/ds.setFromMatrixColumn(t,0).length(),u=1/ds.setFromMatrixColumn(t,1).length(),h=1/ds.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const v=h*g,y=h*x,E=d*g,A=d*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=y+E*p,i[5]=v-A*p,i[9]=-d*m,i[2]=A-v*p,i[6]=E+y*p,i[10]=h*m}else if(t.order==="YXZ"){const v=m*g,y=m*x,E=p*g,A=p*x;i[0]=v+A*d,i[4]=E*d-y,i[8]=h*p,i[1]=h*x,i[5]=h*g,i[9]=-d,i[2]=y*d-E,i[6]=A+v*d,i[10]=h*m}else if(t.order==="ZXY"){const v=m*g,y=m*x,E=p*g,A=p*x;i[0]=v-A*d,i[4]=-h*x,i[8]=E+y*d,i[1]=y+E*d,i[5]=h*g,i[9]=A-v*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const v=h*g,y=h*x,E=d*g,A=d*x;i[0]=m*g,i[4]=E*p-y,i[8]=v*p+A,i[1]=m*x,i[5]=A*p+v,i[9]=y*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const v=h*m,y=h*p,E=d*m,A=d*p;i[0]=m*g,i[4]=A-v*x,i[8]=E*x+y,i[1]=x,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*x+E,i[10]=v-A*x}else if(t.order==="XZY"){const v=h*m,y=h*p,E=d*m,A=d*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=v*x+A,i[5]=h*g,i[9]=y*x-E,i[2]=E*x-y,i[6]=d*g,i[10]=A*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dE,t,pE)}lookAt(t,i,r){const l=this.elements;return ti.subVectors(t,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ba.crossVectors(r,ti),Ba.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ba.crossVectors(r,ti)),Ba.normalize(),xu.crossVectors(ti,Ba),l[0]=Ba.x,l[4]=xu.x,l[8]=ti.x,l[1]=Ba.y,l[5]=xu.y,l[9]=ti.y,l[2]=Ba.z,l[6]=xu.z,l[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],x=r[5],v=r[9],y=r[13],E=r[2],A=r[6],S=r[10],_=r[14],O=r[3],D=r[7],U=r[11],z=r[15],H=l[0],I=l[4],W=l[8],w=l[12],C=l[1],F=l[5],ot=l[9],st=l[13],gt=l[2],ct=l[6],B=l[10],Z=l[14],Y=l[3],Et=l[7],L=l[11],$=l[15];return u[0]=h*H+d*C+m*gt+p*Y,u[4]=h*I+d*F+m*ct+p*Et,u[8]=h*W+d*ot+m*B+p*L,u[12]=h*w+d*st+m*Z+p*$,u[1]=g*H+x*C+v*gt+y*Y,u[5]=g*I+x*F+v*ct+y*Et,u[9]=g*W+x*ot+v*B+y*L,u[13]=g*w+x*st+v*Z+y*$,u[2]=E*H+A*C+S*gt+_*Y,u[6]=E*I+A*F+S*ct+_*Et,u[10]=E*W+A*ot+S*B+_*L,u[14]=E*w+A*st+S*Z+_*$,u[3]=O*H+D*C+U*gt+z*Y,u[7]=O*I+D*F+U*ct+z*Et,u[11]=O*W+D*ot+U*B+z*L,u[15]=O*w+D*st+U*Z+z*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],x=t[6],v=t[10],y=t[14],E=t[3],A=t[7],S=t[11],_=t[15];return E*(+u*m*x-l*p*x-u*d*v+r*p*v+l*d*y-r*m*y)+A*(+i*m*y-i*p*v+u*h*v-l*h*y+l*p*g-u*m*g)+S*(+i*p*x-i*d*y-u*h*x+r*h*y+u*d*g-r*p*g)+_*(-l*d*g-i*m*x+i*d*v+l*h*x-r*h*v+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=t[9],v=t[10],y=t[11],E=t[12],A=t[13],S=t[14],_=t[15],O=x*S*p-A*v*p+A*m*y-d*S*y-x*m*_+d*v*_,D=E*v*p-g*S*p-E*m*y+h*S*y+g*m*_-h*v*_,U=g*A*p-E*x*p+E*d*y-h*A*y-g*d*_+h*x*_,z=E*x*m-g*A*m-E*d*v+h*A*v+g*d*S-h*x*S,H=i*O+r*D+l*U+u*z;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/H;return t[0]=O*I,t[1]=(A*v*u-x*S*u-A*l*y+r*S*y+x*l*_-r*v*_)*I,t[2]=(d*S*u-A*m*u+A*l*p-r*S*p-d*l*_+r*m*_)*I,t[3]=(x*m*u-d*v*u-x*l*p+r*v*p+d*l*y-r*m*y)*I,t[4]=D*I,t[5]=(g*S*u-E*v*u+E*l*y-i*S*y-g*l*_+i*v*_)*I,t[6]=(E*m*u-h*S*u-E*l*p+i*S*p+h*l*_-i*m*_)*I,t[7]=(h*v*u-g*m*u+g*l*p-i*v*p-h*l*y+i*m*y)*I,t[8]=U*I,t[9]=(E*x*u-g*A*u-E*r*y+i*A*y+g*r*_-i*x*_)*I,t[10]=(h*A*u-E*d*u+E*r*p-i*A*p-h*r*_+i*d*_)*I,t[11]=(g*d*u-h*x*u-g*r*p+i*x*p+h*r*y-i*d*y)*I,t[12]=z*I,t[13]=(g*A*l-E*x*l+E*r*v-i*A*v-g*r*S+i*x*S)*I,t[14]=(E*d*l-h*A*l-E*r*m+i*A*m+h*r*S-i*d*S)*I,t[15]=(h*x*l-g*d*l+g*r*m-i*x*m-h*r*v+i*d*v)*I,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,m=t.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,x=d+d,v=u*p,y=u*g,E=u*x,A=h*g,S=h*x,_=d*x,O=m*p,D=m*g,U=m*x,z=r.x,H=r.y,I=r.z;return l[0]=(1-(A+_))*z,l[1]=(y+U)*z,l[2]=(E-D)*z,l[3]=0,l[4]=(y-U)*H,l[5]=(1-(v+_))*H,l[6]=(S+O)*H,l[7]=0,l[8]=(E+D)*I,l[9]=(S-O)*I,l[10]=(1-(v+A))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=ds.set(l[0],l[1],l[2]).length();const h=ds.set(l[4],l[5],l[6]).length(),d=ds.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],vi.copy(this);const p=1/u,g=1/h,x=1/d;return vi.elements[0]*=p,vi.elements[1]*=p,vi.elements[2]*=p,vi.elements[4]*=g,vi.elements[5]*=g,vi.elements[6]*=g,vi.elements[8]*=x,vi.elements[9]*=x,vi.elements[10]*=x,i.setFromRotationMatrix(vi),r.x=u,r.y=h,r.z=d,this}makePerspective(t,i,r,l,u,h,d=na){const m=this.elements,p=2*u/(i-t),g=2*u/(r-l),x=(i+t)/(i-t),v=(r+l)/(r-l);let y,E;if(d===na)y=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(d===Wu)y=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=g,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=na){const m=this.elements,p=1/(i-t),g=1/(r-l),x=1/(h-u),v=(i+t)*p,y=(r+l)*g;let E,A;if(d===na)E=(h+u)*x,A=-2*x;else if(d===Wu)E=u*x,A=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-v,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=A,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const ds=new rt,vi=new Qe,dE=new rt(0,0,0),pE=new rt(1,1,1),Ba=new rt,xu=new rt,ti=new rt,k_=new Qe,X_=new tl;class Ti{constructor(t=0,i=0,r=0,l=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],x=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(ve(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ve(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return k_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(k_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return X_.setFromEuler(this),this.setFromQuaternion(X_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class d0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mE=0;const W_=new rt,ps=new tl,Qi=new Qe,Su=new rt,Ho=new rt,gE=new rt,_E=new tl,q_=new rt(1,0,0),Y_=new rt(0,1,0),j_=new rt(0,0,1),Z_={type:"added"},vE={type:"removed"},ms={type:"childadded",child:null},_h={type:"childremoved",child:null};class vn extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const t=new rt,i=new Ti,r=new tl,l=new rt(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new se}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new d0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ps.setFromAxisAngle(t,i),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,i){return ps.setFromAxisAngle(t,i),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(q_,t)}rotateY(t){return this.rotateOnAxis(Y_,t)}rotateZ(t){return this.rotateOnAxis(j_,t)}translateOnAxis(t,i){return W_.copy(t).applyQuaternion(this.quaternion),this.position.add(W_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(q_,t)}translateY(t){return this.translateOnAxis(Y_,t)}translateZ(t){return this.translateOnAxis(j_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Su.copy(t):Su.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Ho,Su,this.up):Qi.lookAt(Su,Ho,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),ps.setFromRotationMatrix(Qi),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Z_),ms.child=t,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(vE),_h.child=t,this.dispatchEvent(_h),_h.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Z_),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,t,gE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,_E,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];u(t.shapes,x)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),x=h(t.shapes),v=h(t.skeletons),y=h(t.animations),E=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}vn.DEFAULT_UP=new rt(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new rt,Ji=new rt,vh=new rt,$i=new rt,gs=new rt,_s=new rt,K_=new rt,xh=new rt,Sh=new rt,yh=new rt,Mh=new Ke,Eh=new Ke,Th=new Ke;class Si{constructor(t=new rt,i=new rt,r=new rt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),xi.subVectors(t,i),l.cross(xi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){xi.subVectors(l,i),Ji.subVectors(r,i),vh.subVectors(t,i);const h=xi.dot(xi),d=xi.dot(Ji),m=xi.dot(vh),p=Ji.dot(Ji),g=Ji.dot(vh),x=h*p-d*d;if(x===0)return u.set(0,0,0),null;const v=1/x,y=(p*m-d*g)*v,E=(h*g-d*m)*v;return u.set(1-y-E,E,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,i,r,l,u,h,d,m){return this.getBarycoord(t,i,r,l,$i)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,$i.x),m.addScaledVector(h,$i.y),m.addScaledVector(d,$i.z),m)}static getInterpolatedAttribute(t,i,r,l,u,h){return Mh.setScalar(0),Eh.setScalar(0),Th.setScalar(0),Mh.fromBufferAttribute(t,i),Eh.fromBufferAttribute(t,r),Th.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Mh,u.x),h.addScaledVector(Eh,u.y),h.addScaledVector(Th,u.z),h}static isFrontFacing(t,i,r,l){return xi.subVectors(r,i),Ji.subVectors(t,i),xi.cross(Ji).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),xi.cross(Ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Si.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Si.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;gs.subVectors(l,r),_s.subVectors(u,r),xh.subVectors(t,r);const m=gs.dot(xh),p=_s.dot(xh);if(m<=0&&p<=0)return i.copy(r);Sh.subVectors(t,l);const g=gs.dot(Sh),x=_s.dot(Sh);if(g>=0&&x<=g)return i.copy(l);const v=m*x-g*p;if(v<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(gs,h);yh.subVectors(t,u);const y=gs.dot(yh),E=_s.dot(yh);if(E>=0&&y<=E)return i.copy(u);const A=y*p-m*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(_s,d);const S=g*E-y*x;if(S<=0&&x-g>=0&&y-E>=0)return K_.subVectors(u,l),d=(x-g)/(x-g+(y-E)),i.copy(l).addScaledVector(K_,d);const _=1/(S+A+v);return h=A*_,d=v*_,i.copy(r).addScaledVector(gs,h).addScaledVector(_s,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const p0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},yu={h:0,s:0,l:0};function bh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class ye{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Te.workingColorSpace){return this.r=t,this.g=i,this.b=r,Te.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Te.workingColorSpace){if(t=tE(t,1),i=ve(i,0,1),r=ve(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=bh(h,u,t+1/3),this.g=bh(h,u,t),this.b=bh(h,u,t-1/3)}return Te.toWorkingColorSpace(this,l),this}setStyle(t,i=ci){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ci){const r=p0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=aa(t.r),this.g=aa(t.g),this.b=aa(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return Te.fromWorkingColorSpace(Cn.copy(this),t),Math.round(ve(Cn.r*255,0,255))*65536+Math.round(ve(Cn.g*255,0,255))*256+Math.round(ve(Cn.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Te.workingColorSpace){Te.fromWorkingColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,u=Cn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=g<=.5?x/(h+d):x/(2-h-d),h){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Te.workingColorSpace){return Te.fromWorkingColorSpace(Cn.copy(this),i),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=ci){Te.fromWorkingColorSpace(Cn.copy(this),t);const i=Cn.r,r=Cn.g,l=Cn.b;return t!==ci?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ia),this.setHSL(Ia.h+t,Ia.s+i,Ia.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ia),t.getHSL(yu);const r=lh(Ia.h,yu.h,i),l=lh(Ia.s,yu.s,i),u=lh(Ia.l,yu.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new ye;ye.NAMES=p0;let xE=0;class el extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=As,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hh,this.blendDst=Gh,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(r.blending=this.blending),this.side!==Xa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Hh&&(r.blendSrc=this.blendSrc),this.blendDst!==Gh&&(r.blendDst=this.blendDst),this.blendEquation!==Sr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==B_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class m0 extends el{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rn=new rt,Mu=new Ae;class Ui{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=I_,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Mu.fromBufferAttribute(this,i),Mu.applyMatrix3(t),this.setXY(i,Mu.x,Mu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Io(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=kn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Io(i,this.array)),i}setX(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Io(i,this.array)),i}setY(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Io(i,this.array)),i}setZ(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Io(i,this.array)),i}setW(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array),u=kn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==I_&&(t.usage=this.usage),t}}class g0 extends Ui{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class _0 extends Ui{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Er extends Ui{constructor(t,i,r){super(new Float32Array(t),i,r)}}let SE=0;const ui=new Qe,Ah=new vn,vs=new rt,ei=new Is,Go=new Is,_n=new rt;class wr extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(c0(t)?_0:g0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new se().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,i,r){return ui.makeTranslation(t,i,r),this.applyMatrix4(ui),this}scale(t,i,r){return ui.makeScale(t,i,r),this.applyMatrix4(ui),this}lookAt(t){return Ah.lookAt(t),Ah.updateMatrix(),this.applyMatrix4(Ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Er(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Is);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(t){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Go.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(ei.min,Go.min),ei.expandByPoint(_n),_n.addVectors(ei.max,Go.max),ei.expandByPoint(_n)):(ei.expandByPoint(Go.min),ei.expandByPoint(Go.max))}ei.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)_n.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)_n.fromBufferAttribute(d,p),m&&(vs.fromBufferAttribute(t,p),_n.add(vs)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let W=0;W<r.count;W++)d[W]=new rt,m[W]=new rt;const p=new rt,g=new rt,x=new rt,v=new Ae,y=new Ae,E=new Ae,A=new rt,S=new rt;function _(W,w,C){p.fromBufferAttribute(r,W),g.fromBufferAttribute(r,w),x.fromBufferAttribute(r,C),v.fromBufferAttribute(u,W),y.fromBufferAttribute(u,w),E.fromBufferAttribute(u,C),g.sub(p),x.sub(p),y.sub(v),E.sub(v);const F=1/(y.x*E.y-E.x*y.y);isFinite(F)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(x,-y.y).multiplyScalar(F),S.copy(x).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(F),d[W].add(A),d[w].add(A),d[C].add(A),m[W].add(S),m[w].add(S),m[C].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let W=0,w=O.length;W<w;++W){const C=O[W],F=C.start,ot=C.count;for(let st=F,gt=F+ot;st<gt;st+=3)_(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const D=new rt,U=new rt,z=new rt,H=new rt;function I(W){z.fromBufferAttribute(l,W),H.copy(z);const w=d[W];D.copy(w),D.sub(z.multiplyScalar(z.dot(w))).normalize(),U.crossVectors(H,w);const F=U.dot(m[W])<0?-1:1;h.setXYZW(W,D.x,D.y,D.z,F)}for(let W=0,w=O.length;W<w;++W){const C=O[W],F=C.start,ot=C.count;for(let st=F,gt=F+ot;st<gt;st+=3)I(t.getX(st+0)),I(t.getX(st+1)),I(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const l=new rt,u=new rt,h=new rt,d=new rt,m=new rt,p=new rt,g=new rt,x=new rt;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),A=t.getX(v+1),S=t.getX(v+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,S),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),d.add(g),m.add(g),p.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,x=d.normalized,v=new p.constructor(m.length*g);let y=0,E=0;for(let A=0,S=m.length;A<S;A++){d.isInterleavedBufferAttribute?y=m[A]*d.data.stride+d.offset:y=m[A]*g;for(let _=0;_<g;_++)v[E++]=p[y++]}return new Ui(v,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new wr,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,x=p.length;g<x;g++){const v=p[g],y=t(v,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,v=p.length;x<v;x++){const y=p[x];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],x=u[p];for(let v=0,y=x.length;v<y;v++)g.push(x[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Q_=new Qe,dr=new hE,Eu=new Fd,J_=new rt,Tu=new rt,bu=new rt,Au=new rt,Rh=new rt,Ru=new rt,$_=new rt,Cu=new rt;class Xn extends vn{constructor(t=new wr,i=new m0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Ru.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],x=u[m];g!==0&&(Rh.fromBufferAttribute(x,t),h?Ru.addScaledVector(Rh,g):Ru.addScaledVector(Rh.sub(i),g))}i.add(Ru)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Eu.copy(r.boundingSphere),Eu.applyMatrix4(u),dr.copy(t.ray).recast(t.near),!(Eu.containsPoint(dr.origin)===!1&&(dr.intersectSphere(Eu,J_)===null||dr.origin.distanceToSquared(J_)>(t.far-t.near)**2))&&(Q_.copy(u).invert(),dr.copy(t.ray).applyMatrix4(Q_),!(r.boundingBox!==null&&dr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,dr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,v=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,A=v.length;E<A;E++){const S=v[E],_=h[S.materialIndex],O=Math.max(S.start,y.start),D=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let U=O,z=D;U<z;U+=3){const H=d.getX(U),I=d.getX(U+1),W=d.getX(U+2);l=wu(this,_,t,r,p,g,x,H,I,W),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let S=E,_=A;S<_;S+=3){const O=d.getX(S),D=d.getX(S+1),U=d.getX(S+2);l=wu(this,h,t,r,p,g,x,O,D,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,A=v.length;E<A;E++){const S=v[E],_=h[S.materialIndex],O=Math.max(S.start,y.start),D=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let U=O,z=D;U<z;U+=3){const H=U,I=U+1,W=U+2;l=wu(this,_,t,r,p,g,x,H,I,W),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let S=E,_=A;S<_;S+=3){const O=S,D=S+1,U=S+2;l=wu(this,h,t,r,p,g,x,O,D,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function yE(s,t,i,r,l,u,h,d){let m;if(t.side===Wn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,t.side===Xa,d),m===null)return null;Cu.copy(d),Cu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Cu);return p<i.near||p>i.far?null:{distance:p,point:Cu.clone(),object:s}}function wu(s,t,i,r,l,u,h,d,m,p){s.getVertexPosition(d,Tu),s.getVertexPosition(m,bu),s.getVertexPosition(p,Au);const g=yE(s,t,i,r,Tu,bu,Au,$_);if(g){const x=new rt;Si.getBarycoord($_,Tu,bu,Au,x),l&&(g.uv=Si.getInterpolatedAttribute(l,d,m,p,x,new Ae)),u&&(g.uv1=Si.getInterpolatedAttribute(u,d,m,p,x,new Ae)),h&&(g.normal=Si.getInterpolatedAttribute(h,d,m,p,x,new rt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new rt,materialIndex:0};Si.getNormal(Tu,bu,Au,v.normal),g.face=v,g.barycoord=x}return g}class zs extends wr{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],x=[];let v=0,y=0;E("z","y","x",-1,-1,r,i,t,h,u,0),E("z","y","x",1,-1,r,i,-t,h,u,1),E("x","z","y",1,1,t,r,i,l,h,2),E("x","z","y",1,-1,t,r,-i,l,h,3),E("x","y","z",1,-1,t,i,r,l,u,4),E("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Er(p,3)),this.setAttribute("normal",new Er(g,3)),this.setAttribute("uv",new Er(x,2));function E(A,S,_,O,D,U,z,H,I,W,w){const C=U/I,F=z/W,ot=U/2,st=z/2,gt=H/2,ct=I+1,B=W+1;let Z=0,Y=0;const Et=new rt;for(let L=0;L<B;L++){const $=L*F-st;for(let xt=0;xt<ct;xt++){const yt=xt*C-ot;Et[A]=yt*O,Et[S]=$*D,Et[_]=gt,p.push(Et.x,Et.y,Et.z),Et[A]=0,Et[S]=0,Et[_]=H>0?1:-1,g.push(Et.x,Et.y,Et.z),x.push(xt/I),x.push(1-L/W),Z+=1}}for(let L=0;L<W;L++)for(let $=0;$<I;$++){const xt=v+$+ct*L,yt=v+$+ct*(L+1),Q=v+($+1)+ct*(L+1),dt=v+($+1)+ct*L;m.push(xt,yt,dt),m.push(yt,Q,dt),Y+=6}d.addGroup(y,Y,w),y+=Y,v+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ps(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Nn(s){const t={};for(let i=0;i<s.length;i++){const r=Ps(s[i]);for(const l in r)t[l]=r[l]}return t}function ME(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function v0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const EE={clone:Ps,merge:Nn};var TE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wa extends el{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TE,this.fragmentShader=bE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=ME(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class x0 extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=na}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const za=new rt,tv=new Ae,ev=new Ae;class fi extends x0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Td*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(oh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Td*2*Math.atan(Math.tan(oh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(za.x,za.y).multiplyScalar(-t/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(za.x,za.y).multiplyScalar(-t/za.z)}getViewSize(t,i){return this.getViewBounds(t,tv,ev),i.subVectors(ev,tv)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(oh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const xs=-90,Ss=1;class AE extends vn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(xs,Ss,t,i);l.layers=this.layers,this.add(l);const u=new fi(xs,Ss,t,i);u.layers=this.layers,this.add(u);const h=new fi(xs,Ss,t,i);h.layers=this.layers,this.add(h);const d=new fi(xs,Ss,t,i);d.layers=this.layers,this.add(d);const m=new fi(xs,Ss,t,i);m.layers=this.layers,this.add(m);const p=new fi(xs,Ss,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===na)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Wu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,x=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(x,v,y),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class S0 extends wn{constructor(t,i,r,l,u,h,d,m,p,g){t=t!==void 0?t:[],i=i!==void 0?i:Ds,super(t,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class RE extends br{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new S0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:hi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new zs(5,5,5),u=new Wa({name:"CubemapFromEquirect",uniforms:Ps(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:Va});u.uniforms.tEquirect.value=i;const h=new Xn(l,u),d=i.minFilter;return i.minFilter===Mr&&(i.minFilter=hi),new AE(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,r,l){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}class CE extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ch=new rt,wE=new rt,DE=new se;class vr{constructor(t=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Ch.subVectors(r,i).cross(wE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Ch),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||DE.getNormalMatrix(t),l=this.coplanarPoint(Ch).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new Fd,Du=new rt;class Hd{constructor(t=new vr,i=new vr,r=new vr,l=new vr,u=new vr,h=new vr){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=na){const r=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],x=l[6],v=l[7],y=l[8],E=l[9],A=l[10],S=l[11],_=l[12],O=l[13],D=l[14],U=l[15];if(r[0].setComponents(m-u,v-p,S-y,U-_).normalize(),r[1].setComponents(m+u,v+p,S+y,U+_).normalize(),r[2].setComponents(m+h,v+g,S+E,U+O).normalize(),r[3].setComponents(m-h,v-g,S-E,U-O).normalize(),r[4].setComponents(m-d,v-x,S-A,U-D).normalize(),i===na)r[5].setComponents(m+d,v+x,S+A,U+D).normalize();else if(i===Wu)r[5].setComponents(d,x,A,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(t){return pr.center.set(0,0,0),pr.radius=.7071067811865476,pr.applyMatrix4(t.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Du.x=l.normal.x>0?t.max.x:t.min.x,Du.y=l.normal.y>0?t.max.y:t.min.y,Du.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Du)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ko extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class UE extends wn{constructor(t,i,r,l,u,h,d,m,p){super(t,i,r,l,u,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class y0 extends wn{constructor(t,i,r,l,u,h,d,m,p,g=Rs){if(g!==Rs&&g!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Rs&&(r=Tr),r===void 0&&g===Ns&&(r=Ls),super(null,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Mi,this.minFilter=m!==void 0?m:Mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ga extends wr{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,x=t/d,v=i/m,y=[],E=[],A=[],S=[];for(let _=0;_<g;_++){const O=_*v-h;for(let D=0;D<p;D++){const U=D*x-u;E.push(U,-O,0),A.push(0,0,1),S.push(D/d),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let O=0;O<d;O++){const D=O+p*_,U=O+p*(_+1),z=O+1+p*(_+1),H=O+1+p*_;y.push(D,U,H),y.push(U,z,H)}this.setIndex(y),this.setAttribute("position",new Er(E,3)),this.setAttribute("normal",new Er(A,3)),this.setAttribute("uv",new Er(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ga(t.width,t.height,t.widthSegments,t.heightSegments)}}class mr extends el{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=l0,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class LE extends el{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class NE extends el{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const nv={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class OE{constructor(t,i,r){const l=this;let u=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this.itemStart=function(g){d++,u===!1&&l.onStart!==void 0&&l.onStart(g,h,d),u=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,x){return p.push(g,x),this},this.removeHandler=function(g){const x=p.indexOf(g);return x!==-1&&p.splice(x,2),this},this.getHandler=function(g){for(let x=0,v=p.length;x<v;x+=2){const y=p[x],E=p[x+1];if(y.global&&(y.lastIndex=0),y.test(g))return E}return null}}}const PE=new OE;class Gd{constructor(t){this.manager=t!==void 0?t:PE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,u){r.load(t,l,i,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Gd.DEFAULT_MATERIAL_NAME="__DEFAULT";class BE extends Gd{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=this,h=nv.get(t);if(h!==void 0)return u.manager.itemStart(t),setTimeout(function(){i&&i(h),u.manager.itemEnd(t)},0),h;const d=jo("img");function m(){g(),nv.add(t,this),i&&i(this),u.manager.itemEnd(t)}function p(x){g(),l&&l(x),u.manager.itemError(t),u.manager.itemEnd(t)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),u.manager.itemStart(t),d.src=t,d}}class IE extends Gd{constructor(t){super(t)}load(t,i,r,l){const u=new wn,h=new BE(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},r,l),u}}class Vd extends vn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class zE extends Vd{constructor(t,i,r){super(t,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const wh=new Qe,iv=new rt,av=new rt;class FE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hd,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;iv.setFromMatrixPosition(t.matrixWorld),i.position.copy(iv),av.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(av),i.updateMatrixWorld(),wh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(wh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class M0 extends x0{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class HE extends FE{constructor(){super(new M0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class GE extends Vd{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new HE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class VE extends Vd{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class kE extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class XE extends Cr{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function rv(s,t,i,r){const l=WE(r);switch(i){case e0:return s*t;case i0:return s*t;case a0:return s*t*2;case r0:return s*t/l.components*l.byteLength;case Bd:return s*t/l.components*l.byteLength;case s0:return s*t*2/l.components*l.byteLength;case Id:return s*t*2/l.components*l.byteLength;case n0:return s*t*3/l.components*l.byteLength;case yi:return s*t*4/l.components*l.byteLength;case zd:return s*t*4/l.components*l.byteLength;case Bu:case Iu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case zu:case Fu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $h:case ed:return Math.max(s,16)*Math.max(t,8)/4;case Jh:case td:return Math.max(s,8)*Math.max(t,8)/2;case nd:case id:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ad:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case rd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case od:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ld:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ud:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case cd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case fd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case hd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case dd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case pd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case md:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case gd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case _d:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case vd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Hu:case xd:case Sd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case o0:case yd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Md:case Ed:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function WE(s){switch(s){case sa:case Jv:return{byteLength:1,components:1};case Yo:case $v:case Jo:return{byteLength:2,components:1};case Od:case Pd:return{byteLength:2,components:4};case Tr:case Nd:case ea:return{byteLength:4,components:1};case t0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ld}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ld);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function E0(){let s=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function qE(s){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,x=p.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,m,p){const g=m.array,x=m.updateRanges;if(s.bindBuffer(p,d),x.length===0)s.bufferSubData(p,0,g);else{x.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<x.length;y++){const E=x[v],A=x[y];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,x[v]=A)}x.length=v+1;for(let y=0,E=x.length;y<E;y++){const A=x[y];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var YE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ZE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$E=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_T=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ST=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ET="gl_FragColor = linearToOutputTexel( gl_FragColor );",TT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,AT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,RT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,CT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,DT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,PT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,FT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,HT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,WT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,YT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$T=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ib=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ab=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ob=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ub=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_b=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Mb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ab=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Db=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ub=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ob=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ib=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$b=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_A=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,TA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:YE,alphahash_pars_fragment:jE,alphamap_fragment:ZE,alphamap_pars_fragment:KE,alphatest_fragment:QE,alphatest_pars_fragment:JE,aomap_fragment:$E,aomap_pars_fragment:tT,batching_pars_vertex:eT,batching_vertex:nT,begin_vertex:iT,beginnormal_vertex:aT,bsdfs:rT,iridescence_fragment:sT,bumpmap_pars_fragment:oT,clipping_planes_fragment:lT,clipping_planes_pars_fragment:uT,clipping_planes_pars_vertex:cT,clipping_planes_vertex:fT,color_fragment:hT,color_pars_fragment:dT,color_pars_vertex:pT,color_vertex:mT,common:gT,cube_uv_reflection_fragment:_T,defaultnormal_vertex:vT,displacementmap_pars_vertex:xT,displacementmap_vertex:ST,emissivemap_fragment:yT,emissivemap_pars_fragment:MT,colorspace_fragment:ET,colorspace_pars_fragment:TT,envmap_fragment:bT,envmap_common_pars_fragment:AT,envmap_pars_fragment:RT,envmap_pars_vertex:CT,envmap_physical_pars_fragment:FT,envmap_vertex:wT,fog_vertex:DT,fog_pars_vertex:UT,fog_fragment:LT,fog_pars_fragment:NT,gradientmap_pars_fragment:OT,lightmap_pars_fragment:PT,lights_lambert_fragment:BT,lights_lambert_pars_fragment:IT,lights_pars_begin:zT,lights_toon_fragment:HT,lights_toon_pars_fragment:GT,lights_phong_fragment:VT,lights_phong_pars_fragment:kT,lights_physical_fragment:XT,lights_physical_pars_fragment:WT,lights_fragment_begin:qT,lights_fragment_maps:YT,lights_fragment_end:jT,logdepthbuf_fragment:ZT,logdepthbuf_pars_fragment:KT,logdepthbuf_pars_vertex:QT,logdepthbuf_vertex:JT,map_fragment:$T,map_pars_fragment:tb,map_particle_fragment:eb,map_particle_pars_fragment:nb,metalnessmap_fragment:ib,metalnessmap_pars_fragment:ab,morphinstance_vertex:rb,morphcolor_vertex:sb,morphnormal_vertex:ob,morphtarget_pars_vertex:lb,morphtarget_vertex:ub,normal_fragment_begin:cb,normal_fragment_maps:fb,normal_pars_fragment:hb,normal_pars_vertex:db,normal_vertex:pb,normalmap_pars_fragment:mb,clearcoat_normal_fragment_begin:gb,clearcoat_normal_fragment_maps:_b,clearcoat_pars_fragment:vb,iridescence_pars_fragment:xb,opaque_fragment:Sb,packing:yb,premultiplied_alpha_fragment:Mb,project_vertex:Eb,dithering_fragment:Tb,dithering_pars_fragment:bb,roughnessmap_fragment:Ab,roughnessmap_pars_fragment:Rb,shadowmap_pars_fragment:Cb,shadowmap_pars_vertex:wb,shadowmap_vertex:Db,shadowmask_pars_fragment:Ub,skinbase_vertex:Lb,skinning_pars_vertex:Nb,skinning_vertex:Ob,skinnormal_vertex:Pb,specularmap_fragment:Bb,specularmap_pars_fragment:Ib,tonemapping_fragment:zb,tonemapping_pars_fragment:Fb,transmission_fragment:Hb,transmission_pars_fragment:Gb,uv_pars_fragment:Vb,uv_pars_vertex:kb,uv_vertex:Xb,worldpos_vertex:Wb,background_vert:qb,background_frag:Yb,backgroundCube_vert:jb,backgroundCube_frag:Zb,cube_vert:Kb,cube_frag:Qb,depth_vert:Jb,depth_frag:$b,distanceRGBA_vert:tA,distanceRGBA_frag:eA,equirect_vert:nA,equirect_frag:iA,linedashed_vert:aA,linedashed_frag:rA,meshbasic_vert:sA,meshbasic_frag:oA,meshlambert_vert:lA,meshlambert_frag:uA,meshmatcap_vert:cA,meshmatcap_frag:fA,meshnormal_vert:hA,meshnormal_frag:dA,meshphong_vert:pA,meshphong_frag:mA,meshphysical_vert:gA,meshphysical_frag:_A,meshtoon_vert:vA,meshtoon_frag:xA,points_vert:SA,points_frag:yA,shadow_vert:MA,shadow_frag:EA,sprite_vert:TA,sprite_frag:bA},Ut={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Di={basic:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new ye(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Nn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Nn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new ye(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Nn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Nn([Ut.points,Ut.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Nn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Nn([Ut.common,Ut.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Nn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Nn([Ut.sprite,Ut.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:Nn([Ut.common,Ut.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:Nn([Ut.lights,Ut.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Di.physical={uniforms:Nn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const Uu={r:0,b:0,g:0},gr=new Ti,AA=new Qe;function RA(s,t,i,r,l,u,h){const d=new ye(0);let m=u===!0?0:1,p,g,x=null,v=0,y=null;function E(D){let U=D.isScene===!0?D.background:null;return U&&U.isTexture&&(U=(D.backgroundBlurriness>0?i:t).get(U)),U}function A(D){let U=!1;const z=E(D);z===null?_(d,m):z&&z.isColor&&(_(z,1),U=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(D,U){const z=E(U);z&&(z.isCubeTexture||z.mapping===ju)?(g===void 0&&(g=new Xn(new zs(1,1,1),new Wa({name:"BackgroundCubeMaterial",uniforms:Ps(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,I,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),gr.copy(U.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(AA.makeRotationFromEuler(gr)),g.material.toneMapped=Te.getTransfer(z.colorSpace)!==Be,(x!==z||v!==z.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,x=z,v=z.version,y=s.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Xn(new Ga(2,2),new Wa({name:"BackgroundMaterial",uniforms:Ps(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Te.getTransfer(z.colorSpace)!==Be,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(x!==z||v!==z.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,x=z,v=z.version,y=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function _(D,U){D.getRGB(Uu,v0(s)),r.buffers.color.setClear(Uu.r,Uu.g,Uu.b,U,h)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(D,U=1){d.set(D),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,_(d,m)},render:A,addToRenderList:S,dispose:O}}function CA(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let u=l,h=!1;function d(C,F,ot,st,gt){let ct=!1;const B=x(st,ot,F);u!==B&&(u=B,p(u.object)),ct=y(C,st,ot,gt),ct&&E(C,st,ot,gt),gt!==null&&t.update(gt,s.ELEMENT_ARRAY_BUFFER),(ct||h)&&(h=!1,U(C,F,ot,st),gt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(gt).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function x(C,F,ot){const st=ot.wireframe===!0;let gt=r[C.id];gt===void 0&&(gt={},r[C.id]=gt);let ct=gt[F.id];ct===void 0&&(ct={},gt[F.id]=ct);let B=ct[st];return B===void 0&&(B=v(m()),ct[st]=B),B}function v(C){const F=[],ot=[],st=[];for(let gt=0;gt<i;gt++)F[gt]=0,ot[gt]=0,st[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ot,attributeDivisors:st,object:C,attributes:{},index:null}}function y(C,F,ot,st){const gt=u.attributes,ct=F.attributes;let B=0;const Z=ot.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const L=gt[Y];let $=ct[Y];if($===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&($=C.instanceColor)),L===void 0||L.attribute!==$||$&&L.data!==$.data)return!0;B++}return u.attributesNum!==B||u.index!==st}function E(C,F,ot,st){const gt={},ct=F.attributes;let B=0;const Z=ot.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let L=ct[Y];L===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(L=C.instanceColor));const $={};$.attribute=L,L&&L.data&&($.data=L.data),gt[Y]=$,B++}u.attributes=gt,u.attributesNum=B,u.index=st}function A(){const C=u.newAttributes;for(let F=0,ot=C.length;F<ot;F++)C[F]=0}function S(C){_(C,0)}function _(C,F){const ot=u.newAttributes,st=u.enabledAttributes,gt=u.attributeDivisors;ot[C]=1,st[C]===0&&(s.enableVertexAttribArray(C),st[C]=1),gt[C]!==F&&(s.vertexAttribDivisor(C,F),gt[C]=F)}function O(){const C=u.newAttributes,F=u.enabledAttributes;for(let ot=0,st=F.length;ot<st;ot++)F[ot]!==C[ot]&&(s.disableVertexAttribArray(ot),F[ot]=0)}function D(C,F,ot,st,gt,ct,B){B===!0?s.vertexAttribIPointer(C,F,ot,gt,ct):s.vertexAttribPointer(C,F,ot,st,gt,ct)}function U(C,F,ot,st){A();const gt=st.attributes,ct=ot.getAttributes(),B=F.defaultAttributeValues;for(const Z in ct){const Y=ct[Z];if(Y.location>=0){let Et=gt[Z];if(Et===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(Et=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(Et=C.instanceColor)),Et!==void 0){const L=Et.normalized,$=Et.itemSize,xt=t.get(Et);if(xt===void 0)continue;const yt=xt.buffer,Q=xt.type,dt=xt.bytesPerElement,St=Q===s.INT||Q===s.UNSIGNED_INT||Et.gpuType===Nd;if(Et.isInterleavedBufferAttribute){const At=Et.data,Nt=At.stride,Yt=Et.offset;if(At.isInstancedInterleavedBuffer){for(let ae=0;ae<Y.locationSize;ae++)_(Y.location+ae,At.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let ae=0;ae<Y.locationSize;ae++)S(Y.location+ae);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let ae=0;ae<Y.locationSize;ae++)D(Y.location+ae,$/Y.locationSize,Q,L,Nt*dt,(Yt+$/Y.locationSize*ae)*dt,St)}else{if(Et.isInstancedBufferAttribute){for(let At=0;At<Y.locationSize;At++)_(Y.location+At,Et.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let At=0;At<Y.locationSize;At++)S(Y.location+At);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let At=0;At<Y.locationSize;At++)D(Y.location+At,$/Y.locationSize,Q,L,$*dt,$/Y.locationSize*At*dt,St)}}else if(B!==void 0){const L=B[Z];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(Y.location,L);break;case 3:s.vertexAttrib3fv(Y.location,L);break;case 4:s.vertexAttrib4fv(Y.location,L);break;default:s.vertexAttrib1fv(Y.location,L)}}}}O()}function z(){W();for(const C in r){const F=r[C];for(const ot in F){const st=F[ot];for(const gt in st)g(st[gt].object),delete st[gt];delete F[ot]}delete r[C]}}function H(C){if(r[C.id]===void 0)return;const F=r[C.id];for(const ot in F){const st=F[ot];for(const gt in st)g(st[gt].object),delete st[gt];delete F[ot]}delete r[C.id]}function I(C){for(const F in r){const ot=r[F];if(ot[C.id]===void 0)continue;const st=ot[C.id];for(const gt in st)g(st[gt].object),delete st[gt];delete ot[C.id]}}function W(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:w,dispose:z,releaseStatesOfGeometry:H,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:S,disableUnusedAttributes:O}}function wA(s,t,i){let r;function l(p){r=p}function u(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,x){x!==0&&(s.drawArraysInstanced(r,p,g,x),i.update(g,r,x))}function d(p,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,x);let y=0;for(let E=0;E<x;E++)y+=g[E];i.update(y,r,1)}function m(p,g,x,v){if(x===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)h(p[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,v,0,x);let E=0;for(let A=0;A<x;A++)E+=g[A]*v[A];i.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function DA(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==yi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const W=I===Jo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==sa&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ea&&!W)}function m(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=E>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:O,maxVaryings:D,maxFragmentUniforms:U,vertexTextures:z,maxSamples:H}}function UA(s){const t=this;let i=null,r=0,l=!1,u=!1;const h=new vr,d=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const y=x.length!==0||v||r!==0||l;return l=v,r=x.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,v){i=g(x,v,0)},this.setState=function(x,v,y){const E=x.clippingPlanes,A=x.clipIntersection,S=x.clipShadows,_=s.get(x);if(!l||E===null||E.length===0||u&&!S)u?g(null):p();else{const O=u?0:r,D=O*4;let U=_.clippingState||null;m.value=U,U=g(E,v,D,y);for(let z=0;z!==D;++z)U[z]=i[z];_.clippingState=U,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(x,v,y,E){const A=x!==null?x.length:0;let S=null;if(A!==0){if(S=m.value,E!==!0||S===null){const _=y+A*4,O=v.matrixWorldInverse;d.getNormalMatrix(O),(S===null||S.length<_)&&(S=new Float32Array(_));for(let D=0,U=y;D!==A;++D,U+=4)h.copy(x[D]).applyMatrix4(O,d),h.normal.toArray(S,U),S[U+3]=h.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,S}}function LA(s){let t=new WeakMap;function i(h,d){return d===Zh?h.mapping=Ds:d===Kh&&(h.mapping=Us),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Zh||d===Kh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new RE(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const bs=4,sv=[.125,.215,.35,.446,.526,.582],yr=20,Dh=new M0,ov=new ye;let Uh=null,Lh=0,Nh=0,Oh=!1;const xr=(1+Math.sqrt(5))/2,ys=1/xr,lv=[new rt(-xr,ys,0),new rt(xr,ys,0),new rt(-ys,0,xr),new rt(ys,0,xr),new rt(0,xr,-ys),new rt(0,xr,ys),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)];class uv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100){Uh=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Uh,Lh,Nh),this._renderer.xr.enabled=Oh,t.scissorTest=!1,Lu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ds||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uh=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:Jo,format:yi,colorSpace:Os,depthBuffer:!1},l=cv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cv(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NA(u)),this._blurMaterial=OA(u,t,i)}return l}_compileMaterial(t){const i=new Xn(this._lodPlanes[0],t);this._renderer.compile(i,Dh)}_sceneToCubeUV(t,i,r,l){const d=new fi(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,v=g.toneMapping;g.getClearColor(ov),g.toneMapping=ka,g.autoClear=!1;const y=new m0({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),E=new Xn(new zs,y);let A=!1;const S=t.background;S?S.isColor&&(y.color.copy(S),t.background=null,A=!0):(y.color.copy(ov),A=!0);for(let _=0;_<6;_++){const O=_%3;O===0?(d.up.set(0,m[_],0),d.lookAt(p[_],0,0)):O===1?(d.up.set(0,0,m[_]),d.lookAt(0,p[_],0)):(d.up.set(0,m[_],0),d.lookAt(0,0,p[_]));const D=this._cubeSize;Lu(l,O*D,_>2?D:0,D,D),g.setRenderTarget(l),A&&g.render(E,d),g.render(t,d)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=v,g.autoClear=x,t.background=S}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ds||t.mapping===Us;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=hv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fv());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Xn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Lu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Dh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=lv[(l-u-1)%lv.length];this._blur(t,u-1,u,h,d)}i.autoClear=r}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new Xn(this._lodPlanes[l],p),v=p.uniforms,y=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*yr-1),A=u/E,S=isFinite(u)?1+Math.floor(g*A):yr;S>yr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${yr}`);const _=[];let O=0;for(let I=0;I<yr;++I){const W=I/A,w=Math.exp(-W*W/2);_.push(w),I===0?O+=w:I<S&&(O+=2*w)}for(let I=0;I<_.length;I++)_[I]=_[I]/O;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=_,v.latitudinal.value=h==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:D}=this;v.dTheta.value=E,v.mipInt.value=D-r;const U=this._sizeLods[l],z=3*U*(l>D-bs?l-D+bs:0),H=4*(this._cubeSize-U);Lu(i,z,H,3*U,2*U),m.setRenderTarget(i),m.render(x,Dh)}}function NA(s){const t=[],i=[],r=[];let l=s;const u=s-bs+1+sv.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>s-bs?m=sv[h-s+bs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,x=1+p,v=[g,g,x,g,x,x,g,g,x,x,g,x],y=6,E=6,A=3,S=2,_=1,O=new Float32Array(A*E*y),D=new Float32Array(S*E*y),U=new Float32Array(_*E*y);for(let H=0;H<y;H++){const I=H%3*2/3-1,W=H>2?0:-1,w=[I,W,0,I+2/3,W,0,I+2/3,W+1,0,I,W,0,I+2/3,W+1,0,I,W+1,0];O.set(w,A*E*H),D.set(v,S*E*H);const C=[H,H,H,H,H,H];U.set(C,_*E*H)}const z=new wr;z.setAttribute("position",new Ui(O,A)),z.setAttribute("uv",new Ui(D,S)),z.setAttribute("faceIndex",new Ui(U,_)),t.push(z),l>bs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function cv(s,t,i){const r=new br(s,t,i);return r.texture.mapping=ju,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Lu(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function OA(s,t,i){const r=new Float32Array(yr),l=new rt(0,1,0);return new Wa({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function fv(){return new Wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function hv(){return new Wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function kd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function PA(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Zh||m===Kh,g=m===Ds||m===Us;if(p||g){let x=t.get(d);const v=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new uv(s)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new uv(s)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function BA(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ts("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function IA(s,t,i,r){const l={},u=new WeakMap;function h(x){const v=x.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",h),delete l[v.id];const y=u.get(v);y&&(t.remove(y),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(x,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function m(x){const v=x.attributes;for(const y in v)t.update(v[y],s.ARRAY_BUFFER)}function p(x){const v=[],y=x.index,E=x.attributes.position;let A=0;if(y!==null){const O=y.array;A=y.version;for(let D=0,U=O.length;D<U;D+=3){const z=O[D+0],H=O[D+1],I=O[D+2];v.push(z,H,H,I,I,z)}}else if(E!==void 0){const O=E.array;A=E.version;for(let D=0,U=O.length/3-1;D<U;D+=3){const z=D+0,H=D+1,I=D+2;v.push(z,H,H,I,I,z)}}else return;const S=new(c0(v)?_0:g0)(v,1);S.version=A;const _=u.get(x);_&&t.remove(_),u.set(x,S)}function g(x){const v=u.get(x);if(v){const y=x.index;y!==null&&v.version<y.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function zA(s,t,i){let r;function l(v){r=v}let u,h;function d(v){u=v.type,h=v.bytesPerElement}function m(v,y){s.drawElements(r,y,u,v*h),i.update(y,r,1)}function p(v,y,E){E!==0&&(s.drawElementsInstanced(r,y,u,v*h,E),i.update(y,r,E))}function g(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,v,0,E);let S=0;for(let _=0;_<E;_++)S+=y[_];i.update(S,r,1)}function x(v,y,E,A){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<v.length;_++)p(v[_]/h,y[_],A[_]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,u,v,0,A,0,E);let _=0;for(let O=0;O<E;O++)_+=y[O]*A[O];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function FA(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function HA(s,t,i){const r=new WeakMap,l=new Ke;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==x){let C=function(){W.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var y=C;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let U=0;E===!0&&(U=1),A===!0&&(U=2),S===!0&&(U=3);let z=d.attributes.position.count*U,H=1;z>t.maxTextureSize&&(H=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const I=new Float32Array(z*H*4*x),W=new h0(I,z,H,x);W.type=ea,W.needsUpdate=!0;const w=U*4;for(let F=0;F<x;F++){const ot=_[F],st=O[F],gt=D[F],ct=z*H*4*F;for(let B=0;B<ot.count;B++){const Z=B*w;E===!0&&(l.fromBufferAttribute(ot,B),I[ct+Z+0]=l.x,I[ct+Z+1]=l.y,I[ct+Z+2]=l.z,I[ct+Z+3]=0),A===!0&&(l.fromBufferAttribute(st,B),I[ct+Z+4]=l.x,I[ct+Z+5]=l.y,I[ct+Z+6]=l.z,I[ct+Z+7]=0),S===!0&&(l.fromBufferAttribute(gt,B),I[ct+Z+8]=l.x,I[ct+Z+9]=l.y,I[ct+Z+10]=l.z,I[ct+Z+11]=gt.itemSize===4?l.w:1)}}v={count:x,texture:W,size:new Ae(z,H)},r.set(d,v),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const A=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:u}}function GA(s,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,x=t.get(m,g);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const T0=new wn,dv=new y0(1,1),b0=new h0,A0=new cE,R0=new S0,pv=[],mv=[],gv=new Float32Array(16),_v=new Float32Array(9),vv=new Float32Array(4);function Fs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=pv[l];if(u===void 0&&(u=new Float32Array(l),pv[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(u,d)}return u}function cn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function fn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Zu(s,t){let i=mv[t];i===void 0&&(i=new Int32Array(t),mv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function VA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function kA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;s.uniform2fv(this.addr,t),fn(i,t)}}function XA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(cn(i,t))return;s.uniform3fv(this.addr,t),fn(i,t)}}function WA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;s.uniform4fv(this.addr,t),fn(i,t)}}function qA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),fn(i,t)}else{if(cn(i,r))return;vv.set(r),s.uniformMatrix2fv(this.addr,!1,vv),fn(i,r)}}function YA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),fn(i,t)}else{if(cn(i,r))return;_v.set(r),s.uniformMatrix3fv(this.addr,!1,_v),fn(i,r)}}function jA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),fn(i,t)}else{if(cn(i,r))return;gv.set(r),s.uniformMatrix4fv(this.addr,!1,gv),fn(i,r)}}function ZA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function KA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;s.uniform2iv(this.addr,t),fn(i,t)}}function QA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;s.uniform3iv(this.addr,t),fn(i,t)}}function JA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;s.uniform4iv(this.addr,t),fn(i,t)}}function $A(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function t1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;s.uniform2uiv(this.addr,t),fn(i,t)}}function e1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;s.uniform3uiv(this.addr,t),fn(i,t)}}function n1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;s.uniform4uiv(this.addr,t),fn(i,t)}}function i1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(dv.compareFunction=u0,u=dv):u=T0,i.setTexture2D(t||u,l)}function a1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||A0,l)}function r1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||R0,l)}function s1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||b0,l)}function o1(s){switch(s){case 5126:return VA;case 35664:return kA;case 35665:return XA;case 35666:return WA;case 35674:return qA;case 35675:return YA;case 35676:return jA;case 5124:case 35670:return ZA;case 35667:case 35671:return KA;case 35668:case 35672:return QA;case 35669:case 35673:return JA;case 5125:return $A;case 36294:return t1;case 36295:return e1;case 36296:return n1;case 35678:case 36198:case 36298:case 36306:case 35682:return i1;case 35679:case 36299:case 36307:return a1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return s1}}function l1(s,t){s.uniform1fv(this.addr,t)}function u1(s,t){const i=Fs(t,this.size,2);s.uniform2fv(this.addr,i)}function c1(s,t){const i=Fs(t,this.size,3);s.uniform3fv(this.addr,i)}function f1(s,t){const i=Fs(t,this.size,4);s.uniform4fv(this.addr,i)}function h1(s,t){const i=Fs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function d1(s,t){const i=Fs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function p1(s,t){const i=Fs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function m1(s,t){s.uniform1iv(this.addr,t)}function g1(s,t){s.uniform2iv(this.addr,t)}function _1(s,t){s.uniform3iv(this.addr,t)}function v1(s,t){s.uniform4iv(this.addr,t)}function x1(s,t){s.uniform1uiv(this.addr,t)}function S1(s,t){s.uniform2uiv(this.addr,t)}function y1(s,t){s.uniform3uiv(this.addr,t)}function M1(s,t){s.uniform4uiv(this.addr,t)}function E1(s,t,i){const r=this.cache,l=t.length,u=Zu(i,l);cn(r,u)||(s.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||T0,u[h])}function T1(s,t,i){const r=this.cache,l=t.length,u=Zu(i,l);cn(r,u)||(s.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||A0,u[h])}function b1(s,t,i){const r=this.cache,l=t.length,u=Zu(i,l);cn(r,u)||(s.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||R0,u[h])}function A1(s,t,i){const r=this.cache,l=t.length,u=Zu(i,l);cn(r,u)||(s.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||b0,u[h])}function R1(s){switch(s){case 5126:return l1;case 35664:return u1;case 35665:return c1;case 35666:return f1;case 35674:return h1;case 35675:return d1;case 35676:return p1;case 5124:case 35670:return m1;case 35667:case 35671:return g1;case 35668:case 35672:return _1;case 35669:case 35673:return v1;case 5125:return x1;case 36294:return S1;case 36295:return y1;case 36296:return M1;case 35678:case 36198:case 36298:case 36306:case 35682:return E1;case 35679:case 36299:case 36307:return T1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return A1}}class C1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=o1(i.type)}}class w1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=R1(i.type)}}class D1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const Ph=/(\w+)(\])?(\[|\.)?/g;function xv(s,t){s.seq.push(t),s.map[t.id]=t}function U1(s,t,i){const r=s.name,l=r.length;for(Ph.lastIndex=0;;){const u=Ph.exec(r),h=Ph.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){xv(i,p===void 0?new C1(d,s,t):new w1(d,s,t));break}else{let x=i.map[d];x===void 0&&(x=new D1(d),xv(i,x)),i=x}}}class Gu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);U1(u,h,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function Sv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const L1=37297;let N1=0;function O1(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const yv=new se;function P1(s){Te._getMatrix(yv,Te.workingColorSpace,s);const t=`mat3( ${yv.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(s)){case Xu:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Mv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+O1(s.getShaderSource(t),h)}else return l}function B1(s,t){const i=P1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function I1(s,t){let i;switch(t){case IM:i="Linear";break;case zM:i="Reinhard";break;case FM:i="Cineon";break;case Kv:i="ACESFilmic";break;case GM:i="AgX";break;case VM:i="Neutral";break;case HM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Nu=new rt;function z1(){Te.getLuminanceCoefficients(Nu);const s=Nu.x.toFixed(4),t=Nu.y.toFixed(4),i=Nu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function H1(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function G1(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),h=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function Xo(s){return s!==""}function Ev(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const V1=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(s){return s.replace(V1,X1)}const k1=new Map;function X1(s,t){let i=oe[t];if(i===void 0){const r=k1.get(t);if(r!==void 0)i=oe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return bd(i)}const W1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bv(s){return s.replace(W1,q1)}function q1(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Av(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Y1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Yv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===jv?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ta&&(t="SHADOWMAP_TYPE_VSM"),t}function j1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ds:case Us:t="ENVMAP_TYPE_CUBE";break;case ju:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Z1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Us:t="ENVMAP_MODE_REFRACTION";break}return t}function K1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Zv:t="ENVMAP_BLENDING_MULTIPLY";break;case PM:t="ENVMAP_BLENDING_MIX";break;case BM:t="ENVMAP_BLENDING_ADD";break}return t}function Q1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function J1(s,t,i,r){const l=s.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Y1(i),p=j1(i),g=Z1(i),x=K1(i),v=Q1(i),y=F1(i),E=H1(u),A=l.createProgram();let S,_,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Xo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Xo).join(`
`),_.length>0&&(_+=`
`)):(S=[Av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),_=[Av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?oe.tonemapping_pars_fragment:"",i.toneMapping!==ka?I1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,B1("linearToOutputTexel",i.outputColorSpace),z1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Xo).join(`
`)),h=bd(h),h=Ev(h,i),h=Tv(h,i),d=bd(d),d=Ev(d,i),d=Tv(d,i),h=bv(h),d=bv(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===z_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===z_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=O+S+h,U=O+_+d,z=Sv(l,l.VERTEX_SHADER,D),H=Sv(l,l.FRAGMENT_SHADER,U);l.attachShader(A,z),l.attachShader(A,H),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function I(F){if(s.debug.checkShaderErrors){const ot=l.getProgramInfoLog(A).trim(),st=l.getShaderInfoLog(z).trim(),gt=l.getShaderInfoLog(H).trim();let ct=!0,B=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(ct=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,z,H);else{const Z=Mv(l,z,"vertex"),Y=Mv(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ot+`
`+Z+`
`+Y)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(st===""||gt==="")&&(B=!1);B&&(F.diagnostics={runnable:ct,programLog:ot,vertexShader:{log:st,prefix:S},fragmentShader:{log:gt,prefix:_}})}l.deleteShader(z),l.deleteShader(H),W=new Gu(l,A),w=G1(l,A)}let W;this.getUniforms=function(){return W===void 0&&I(this),W};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,L1)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=N1++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=z,this.fragmentShader=H,this}let $1=0;class tR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new eR(t),i.set(t,r)),r}}class eR{constructor(t){this.id=$1++,this.code=t,this.usedTimes=0}}function nR(s,t,i,r,l,u,h){const d=new d0,m=new tR,p=new Set,g=[],x=l.logarithmicDepthBuffer,v=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return p.add(w),w===0?"uv":`uv${w}`}function S(w,C,F,ot,st){const gt=ot.fog,ct=st.geometry,B=w.isMeshStandardMaterial?ot.environment:null,Z=(w.isMeshStandardMaterial?i:t).get(w.envMap||B),Y=Z&&Z.mapping===ju?Z.image.height:null,Et=E[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const L=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,$=L!==void 0?L.length:0;let xt=0;ct.morphAttributes.position!==void 0&&(xt=1),ct.morphAttributes.normal!==void 0&&(xt=2),ct.morphAttributes.color!==void 0&&(xt=3);let yt,Q,dt,St;if(Et){const Me=Di[Et];yt=Me.vertexShader,Q=Me.fragmentShader}else yt=w.vertexShader,Q=w.fragmentShader,m.update(w),dt=m.getVertexShaderID(w),St=m.getFragmentShaderID(w);const At=s.getRenderTarget(),Nt=s.state.buffers.depth.getReversed(),Yt=st.isInstancedMesh===!0,ae=st.isBatchedMesh===!0,we=!!w.map,fe=!!w.matcap,He=!!Z,V=!!w.aoMap,Pn=!!w.lightMap,me=!!w.bumpMap,ee=!!w.normalMap,Xt=!!w.displacementMap,De=!!w.emissiveMap,kt=!!w.metalnessMap,N=!!w.roughnessMap,b=w.anisotropy>0,tt=w.clearcoat>0,vt=w.dispersion>0,Mt=w.iridescence>0,ft=w.sheen>0,It=w.transmission>0,Rt=b&&!!w.anisotropyMap,Ct=tt&&!!w.clearcoatMap,ge=tt&&!!w.clearcoatNormalMap,bt=tt&&!!w.clearcoatRoughnessMap,Ft=Mt&&!!w.iridescenceMap,Wt=Mt&&!!w.iridescenceThicknessMap,Zt=ft&&!!w.sheenColorMap,Ot=ft&&!!w.sheenRoughnessMap,le=!!w.specularMap,te=!!w.specularColorMap,Ue=!!w.specularIntensityMap,k=It&&!!w.transmissionMap,Dt=It&&!!w.thicknessMap,lt=!!w.gradientMap,pt=!!w.alphaMap,Pt=w.alphaTest>0,Lt=!!w.alphaHash,ie=!!w.extensions;let ze=ka;w.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(ze=s.toneMapping);const tn={shaderID:Et,shaderType:w.type,shaderName:w.name,vertexShader:yt,fragmentShader:Q,defines:w.defines,customVertexShaderID:dt,customFragmentShaderID:St,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:ae,batchingColor:ae&&st._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&st.instanceColor!==null,instancingMorph:Yt&&st.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:At===null?s.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Os,alphaToCoverage:!!w.alphaToCoverage,map:we,matcap:fe,envMap:He,envMapMode:He&&Z.mapping,envMapCubeUVHeight:Y,aoMap:V,lightMap:Pn,bumpMap:me,normalMap:ee,displacementMap:v&&Xt,emissiveMap:De,normalMapObjectSpace:ee&&w.normalMapType===qM,normalMapTangentSpace:ee&&w.normalMapType===l0,metalnessMap:kt,roughnessMap:N,anisotropy:b,anisotropyMap:Rt,clearcoat:tt,clearcoatMap:Ct,clearcoatNormalMap:ge,clearcoatRoughnessMap:bt,dispersion:vt,iridescence:Mt,iridescenceMap:Ft,iridescenceThicknessMap:Wt,sheen:ft,sheenColorMap:Zt,sheenRoughnessMap:Ot,specularMap:le,specularColorMap:te,specularIntensityMap:Ue,transmission:It,transmissionMap:k,thicknessMap:Dt,gradientMap:lt,opaque:w.transparent===!1&&w.blending===As&&w.alphaToCoverage===!1,alphaMap:pt,alphaTest:Pt,alphaHash:Lt,combine:w.combine,mapUv:we&&A(w.map.channel),aoMapUv:V&&A(w.aoMap.channel),lightMapUv:Pn&&A(w.lightMap.channel),bumpMapUv:me&&A(w.bumpMap.channel),normalMapUv:ee&&A(w.normalMap.channel),displacementMapUv:Xt&&A(w.displacementMap.channel),emissiveMapUv:De&&A(w.emissiveMap.channel),metalnessMapUv:kt&&A(w.metalnessMap.channel),roughnessMapUv:N&&A(w.roughnessMap.channel),anisotropyMapUv:Rt&&A(w.anisotropyMap.channel),clearcoatMapUv:Ct&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:ge&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&A(w.sheenRoughnessMap.channel),specularMapUv:le&&A(w.specularMap.channel),specularColorMapUv:te&&A(w.specularColorMap.channel),specularIntensityMapUv:Ue&&A(w.specularIntensityMap.channel),transmissionMapUv:k&&A(w.transmissionMap.channel),thicknessMapUv:Dt&&A(w.thicknessMap.channel),alphaMapUv:pt&&A(w.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(ee||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ct.attributes.uv&&(we||pt),fog:!!gt,useFog:w.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Nt,skinning:st.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:xt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:ze,decodeVideoTexture:we&&w.map.isVideoTexture===!0&&Te.getTransfer(w.map.colorSpace)===Be,decodeVideoTextureEmissive:De&&w.emissiveMap.isVideoTexture===!0&&Te.getTransfer(w.emissiveMap.colorSpace)===Be,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===On,flipSided:w.side===Wn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ie&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&w.extensions.multiDraw===!0||ae)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return tn.vertexUv1s=p.has(1),tn.vertexUv2s=p.has(2),tn.vertexUv3s=p.has(3),p.clear(),tn}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)C.push(F),C.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(O(C,w),D(C,w),C.push(s.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function O(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function D(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function U(w){const C=E[w.type];let F;if(C){const ot=Di[C];F=EE.clone(ot.uniforms)}else F=w.uniforms;return F}function z(w,C){let F;for(let ot=0,st=g.length;ot<st;ot++){const gt=g[ot];if(gt.cacheKey===C){F=gt,++F.usedTimes;break}}return F===void 0&&(F=new J1(s,C,w,u),g.push(F)),F}function H(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function I(w){m.remove(w)}function W(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:U,acquireProgram:z,releaseProgram:H,releaseShaderCache:I,programs:g,dispose:W}}function iR(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function aR(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Rv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Cv(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(x,v,y,E,A,S){let _=s[t];return _===void 0?(_={id:x.id,object:x,geometry:v,material:y,groupOrder:E,renderOrder:x.renderOrder,z:A,group:S},s[t]=_):(_.id=x.id,_.object=x,_.geometry=v,_.material=y,_.groupOrder=E,_.renderOrder=x.renderOrder,_.z=A,_.group=S),t++,_}function d(x,v,y,E,A,S){const _=h(x,v,y,E,A,S);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(x,v,y,E,A,S){const _=h(x,v,y,E,A,S);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,v){i.length>1&&i.sort(x||aR),r.length>1&&r.sort(v||Rv),l.length>1&&l.sort(v||Rv)}function g(){for(let x=t,v=s.length;x<v;x++){const y=s[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function rR(){let s=new WeakMap;function t(r,l){const u=s.get(r);let h;return u===void 0?(h=new Cv,s.set(r,[h])):l>=u.length?(h=new Cv,u.push(h)):h=u[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function sR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new rt,color:new ye};break;case"SpotLight":i={position:new rt,direction:new rt,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return s[t.id]=i,i}}}function oR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let lR=0;function uR(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function cR(s){const t=new sR,i=oR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new rt);const l=new rt,u=new Qe,h=new Qe;function d(p){let g=0,x=0,v=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,E=0,A=0,S=0,_=0,O=0,D=0,U=0,z=0,H=0,I=0;p.sort(uR);for(let w=0,C=p.length;w<C;w++){const F=p[w],ot=F.color,st=F.intensity,gt=F.distance,ct=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=ot.r*st,x+=ot.g*st,v+=ot.b*st;else if(F.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(F.sh.coefficients[B],st);I++}else if(F.isDirectionalLight){const B=t.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Z=F.shadow,Y=i.get(F);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=ct,r.directionalShadowMatrix[y]=F.shadow.matrix,O++}r.directional[y]=B,y++}else if(F.isSpotLight){const B=t.get(F);B.position.setFromMatrixPosition(F.matrixWorld),B.color.copy(ot).multiplyScalar(st),B.distance=gt,B.coneCos=Math.cos(F.angle),B.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),B.decay=F.decay,r.spot[A]=B;const Z=F.shadow;if(F.map&&(r.spotLightMap[z]=F.map,z++,Z.updateMatrices(F),F.castShadow&&H++),r.spotLightMatrix[A]=Z.matrix,F.castShadow){const Y=i.get(F);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.spotShadow[A]=Y,r.spotShadowMap[A]=ct,U++}A++}else if(F.isRectAreaLight){const B=t.get(F);B.color.copy(ot).multiplyScalar(st),B.halfWidth.set(F.width*.5,0,0),B.halfHeight.set(0,F.height*.5,0),r.rectArea[S]=B,S++}else if(F.isPointLight){const B=t.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity),B.distance=F.distance,B.decay=F.decay,F.castShadow){const Z=F.shadow,Y=i.get(F);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,r.pointShadow[E]=Y,r.pointShadowMap[E]=ct,r.pointShadowMatrix[E]=F.shadow.matrix,D++}r.point[E]=B,E++}else if(F.isHemisphereLight){const B=t.get(F);B.skyColor.copy(F.color).multiplyScalar(st),B.groundColor.copy(F.groundColor).multiplyScalar(st),r.hemi[_]=B,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=v;const W=r.hash;(W.directionalLength!==y||W.pointLength!==E||W.spotLength!==A||W.rectAreaLength!==S||W.hemiLength!==_||W.numDirectionalShadows!==O||W.numPointShadows!==D||W.numSpotShadows!==U||W.numSpotMaps!==z||W.numLightProbes!==I)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=S,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=U+z-H,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=I,W.directionalLength=y,W.pointLength=E,W.spotLength=A,W.rectAreaLength=S,W.hemiLength=_,W.numDirectionalShadows=O,W.numPointShadows=D,W.numSpotShadows=U,W.numSpotMaps=z,W.numLightProbes=I,r.version=lR++)}function m(p,g){let x=0,v=0,y=0,E=0,A=0;const S=g.matrixWorldInverse;for(let _=0,O=p.length;_<O;_++){const D=p[_];if(D.isDirectionalLight){const U=r.directional[x];U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),x++}else if(D.isSpotLight){const U=r.spot[y];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const U=r.rectArea[E];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(S),h.identity(),u.copy(D.matrixWorld),u.premultiply(S),h.extractRotation(u),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),E++}else if(D.isPointLight){const U=r.point[v];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(S),v++}else if(D.isHemisphereLight){const U=r.hemi[A];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(S),A++}}}return{setup:d,setupView:m,state:r}}function wv(s){const t=new cR(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function fR(s){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new wv(s),t.set(l,[d])):u>=h.length?(d=new wv(s),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const hR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pR(s,t,i){let r=new Hd;const l=new Ae,u=new Ae,h=new Ke,d=new LE({depthPacking:WM}),m=new NE,p={},g=i.maxTextureSize,x={[Xa]:Wn,[Wn]:Xa,[On]:On},v=new Wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:hR,fragmentShader:dR}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new wr;E.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Xn(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yv;let _=this.type;this.render=function(H,I,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;const w=s.getRenderTarget(),C=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),ot=s.state;ot.setBlending(Va),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const st=_!==ta&&this.type===ta,gt=_===ta&&this.type!==ta;for(let ct=0,B=H.length;ct<B;ct++){const Z=H[ct],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Et=Y.getFrameExtents();if(l.multiply(Et),u.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Et.x),l.x=u.x*Et.x,Y.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Et.y),l.y=u.y*Et.y,Y.mapSize.y=u.y)),Y.map===null||st===!0||gt===!0){const $=this.type!==ta?{minFilter:Mi,magFilter:Mi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new br(l.x,l.y,$),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const L=Y.getViewportCount();for(let $=0;$<L;$++){const xt=Y.getViewport($);h.set(u.x*xt.x,u.y*xt.y,u.x*xt.z,u.y*xt.w),ot.viewport(h),Y.updateMatrices(Z,$),r=Y.getFrustum(),U(I,W,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===ta&&O(Y,W),Y.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(w,C,F)};function O(H,I){const W=t.update(A);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new br(l.x,l.y)),v.uniforms.shadow_pass.value=H.map.texture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(I,null,W,v,A,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(I,null,W,y,A,null)}function D(H,I,W,w){let C=null;const F=W.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(F!==void 0)C=F;else if(C=W.isPointLight===!0?m:d,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ot=C.uuid,st=I.uuid;let gt=p[ot];gt===void 0&&(gt={},p[ot]=gt);let ct=gt[st];ct===void 0&&(ct=C.clone(),gt[st]=ct,I.addEventListener("dispose",z)),C=ct}if(C.visible=I.visible,C.wireframe=I.wireframe,w===ta?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:x[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ot=s.properties.get(C);ot.light=W}return C}function U(H,I,W,w,C){if(H.visible===!1)return;if(H.layers.test(I.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===ta)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,H.matrixWorld);const st=t.update(H),gt=H.material;if(Array.isArray(gt)){const ct=st.groups;for(let B=0,Z=ct.length;B<Z;B++){const Y=ct[B],Et=gt[Y.materialIndex];if(Et&&Et.visible){const L=D(H,Et,w,C);H.onBeforeShadow(s,H,I,W,st,L,Y),s.renderBufferDirect(W,null,st,L,H,Y),H.onAfterShadow(s,H,I,W,st,L,Y)}}}else if(gt.visible){const ct=D(H,gt,w,C);H.onBeforeShadow(s,H,I,W,st,ct,null),s.renderBufferDirect(W,null,st,ct,H,null),H.onAfterShadow(s,H,I,W,st,ct,null)}}const ot=H.children;for(let st=0,gt=ot.length;st<gt;st++)U(ot[st],I,W,w,C)}function z(H){H.target.removeEventListener("dispose",z);for(const W in p){const w=p[W],C=H.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const mR={[Vh]:kh,[Xh]:Yh,[Wh]:jh,[ws]:qh,[kh]:Vh,[Yh]:Xh,[jh]:Wh,[qh]:ws};function gR(s,t){function i(){let k=!1;const Dt=new Ke;let lt=null;const pt=new Ke(0,0,0,0);return{setMask:function(Pt){lt!==Pt&&!k&&(s.colorMask(Pt,Pt,Pt,Pt),lt=Pt)},setLocked:function(Pt){k=Pt},setClear:function(Pt,Lt,ie,ze,tn){tn===!0&&(Pt*=ze,Lt*=ze,ie*=ze),Dt.set(Pt,Lt,ie,ze),pt.equals(Dt)===!1&&(s.clearColor(Pt,Lt,ie,ze),pt.copy(Dt))},reset:function(){k=!1,lt=null,pt.set(-1,0,0,0)}}}function r(){let k=!1,Dt=!1,lt=null,pt=null,Pt=null;return{setReversed:function(Lt){if(Dt!==Lt){const ie=t.get("EXT_clip_control");Dt?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT);const ze=Pt;Pt=null,this.setClear(ze)}Dt=Lt},getReversed:function(){return Dt},setTest:function(Lt){Lt?At(s.DEPTH_TEST):Nt(s.DEPTH_TEST)},setMask:function(Lt){lt!==Lt&&!k&&(s.depthMask(Lt),lt=Lt)},setFunc:function(Lt){if(Dt&&(Lt=mR[Lt]),pt!==Lt){switch(Lt){case Vh:s.depthFunc(s.NEVER);break;case kh:s.depthFunc(s.ALWAYS);break;case Xh:s.depthFunc(s.LESS);break;case ws:s.depthFunc(s.LEQUAL);break;case Wh:s.depthFunc(s.EQUAL);break;case qh:s.depthFunc(s.GEQUAL);break;case Yh:s.depthFunc(s.GREATER);break;case jh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=Lt}},setLocked:function(Lt){k=Lt},setClear:function(Lt){Pt!==Lt&&(Dt&&(Lt=1-Lt),s.clearDepth(Lt),Pt=Lt)},reset:function(){k=!1,lt=null,pt=null,Pt=null,Dt=!1}}}function l(){let k=!1,Dt=null,lt=null,pt=null,Pt=null,Lt=null,ie=null,ze=null,tn=null;return{setTest:function(Me){k||(Me?At(s.STENCIL_TEST):Nt(s.STENCIL_TEST))},setMask:function(Me){Dt!==Me&&!k&&(s.stencilMask(Me),Dt=Me)},setFunc:function(Me,qn,hn){(lt!==Me||pt!==qn||Pt!==hn)&&(s.stencilFunc(Me,qn,hn),lt=Me,pt=qn,Pt=hn)},setOp:function(Me,qn,hn){(Lt!==Me||ie!==qn||ze!==hn)&&(s.stencilOp(Me,qn,hn),Lt=Me,ie=qn,ze=hn)},setLocked:function(Me){k=Me},setClear:function(Me){tn!==Me&&(s.clearStencil(Me),tn=Me)},reset:function(){k=!1,Dt=null,lt=null,pt=null,Pt=null,Lt=null,ie=null,ze=null,tn=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},x={},v=new WeakMap,y=[],E=null,A=!1,S=null,_=null,O=null,D=null,U=null,z=null,H=null,I=new ye(0,0,0),W=0,w=!1,C=null,F=null,ot=null,st=null,gt=null;const ct=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=Z>=2);let Et=null,L={};const $=s.getParameter(s.SCISSOR_BOX),xt=s.getParameter(s.VIEWPORT),yt=new Ke().fromArray($),Q=new Ke().fromArray(xt);function dt(k,Dt,lt,pt){const Pt=new Uint8Array(4),Lt=s.createTexture();s.bindTexture(k,Lt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ie=0;ie<lt;ie++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Dt,0,s.RGBA,1,1,pt,0,s.RGBA,s.UNSIGNED_BYTE,Pt):s.texImage2D(Dt+ie,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pt);return Lt}const St={};St[s.TEXTURE_2D]=dt(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),At(s.DEPTH_TEST),h.setFunc(ws),me(!1),ee(L_),At(s.CULL_FACE),V(Va);function At(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function Nt(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function Yt(k,Dt){return x[k]!==Dt?(s.bindFramebuffer(k,Dt),x[k]=Dt,k===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Dt),k===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Dt),!0):!1}function ae(k,Dt){let lt=y,pt=!1;if(k){lt=v.get(Dt),lt===void 0&&(lt=[],v.set(Dt,lt));const Pt=k.textures;if(lt.length!==Pt.length||lt[0]!==s.COLOR_ATTACHMENT0){for(let Lt=0,ie=Pt.length;Lt<ie;Lt++)lt[Lt]=s.COLOR_ATTACHMENT0+Lt;lt.length=Pt.length,pt=!0}}else lt[0]!==s.BACK&&(lt[0]=s.BACK,pt=!0);pt&&s.drawBuffers(lt)}function we(k){return E!==k?(s.useProgram(k),E=k,!0):!1}const fe={[Sr]:s.FUNC_ADD,[vM]:s.FUNC_SUBTRACT,[xM]:s.FUNC_REVERSE_SUBTRACT};fe[SM]=s.MIN,fe[yM]=s.MAX;const He={[MM]:s.ZERO,[EM]:s.ONE,[TM]:s.SRC_COLOR,[Hh]:s.SRC_ALPHA,[DM]:s.SRC_ALPHA_SATURATE,[CM]:s.DST_COLOR,[AM]:s.DST_ALPHA,[bM]:s.ONE_MINUS_SRC_COLOR,[Gh]:s.ONE_MINUS_SRC_ALPHA,[wM]:s.ONE_MINUS_DST_COLOR,[RM]:s.ONE_MINUS_DST_ALPHA,[UM]:s.CONSTANT_COLOR,[LM]:s.ONE_MINUS_CONSTANT_COLOR,[NM]:s.CONSTANT_ALPHA,[OM]:s.ONE_MINUS_CONSTANT_ALPHA};function V(k,Dt,lt,pt,Pt,Lt,ie,ze,tn,Me){if(k===Va){A===!0&&(Nt(s.BLEND),A=!1);return}if(A===!1&&(At(s.BLEND),A=!0),k!==_M){if(k!==S||Me!==w){if((_!==Sr||U!==Sr)&&(s.blendEquation(s.FUNC_ADD),_=Sr,U=Sr),Me)switch(k){case As:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case N_:s.blendFunc(s.ONE,s.ONE);break;case O_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case P_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case As:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case N_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case O_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case P_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}O=null,D=null,z=null,H=null,I.set(0,0,0),W=0,S=k,w=Me}return}Pt=Pt||Dt,Lt=Lt||lt,ie=ie||pt,(Dt!==_||Pt!==U)&&(s.blendEquationSeparate(fe[Dt],fe[Pt]),_=Dt,U=Pt),(lt!==O||pt!==D||Lt!==z||ie!==H)&&(s.blendFuncSeparate(He[lt],He[pt],He[Lt],He[ie]),O=lt,D=pt,z=Lt,H=ie),(ze.equals(I)===!1||tn!==W)&&(s.blendColor(ze.r,ze.g,ze.b,tn),I.copy(ze),W=tn),S=k,w=!1}function Pn(k,Dt){k.side===On?Nt(s.CULL_FACE):At(s.CULL_FACE);let lt=k.side===Wn;Dt&&(lt=!lt),me(lt),k.blending===As&&k.transparent===!1?V(Va):V(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const pt=k.stencilWrite;d.setTest(pt),pt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),De(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?At(s.SAMPLE_ALPHA_TO_COVERAGE):Nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function me(k){C!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),C=k)}function ee(k){k!==mM?(At(s.CULL_FACE),k!==F&&(k===L_?s.cullFace(s.BACK):k===gM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Nt(s.CULL_FACE),F=k}function Xt(k){k!==ot&&(B&&s.lineWidth(k),ot=k)}function De(k,Dt,lt){k?(At(s.POLYGON_OFFSET_FILL),(st!==Dt||gt!==lt)&&(s.polygonOffset(Dt,lt),st=Dt,gt=lt)):Nt(s.POLYGON_OFFSET_FILL)}function kt(k){k?At(s.SCISSOR_TEST):Nt(s.SCISSOR_TEST)}function N(k){k===void 0&&(k=s.TEXTURE0+ct-1),Et!==k&&(s.activeTexture(k),Et=k)}function b(k,Dt,lt){lt===void 0&&(Et===null?lt=s.TEXTURE0+ct-1:lt=Et);let pt=L[lt];pt===void 0&&(pt={type:void 0,texture:void 0},L[lt]=pt),(pt.type!==k||pt.texture!==Dt)&&(Et!==lt&&(s.activeTexture(lt),Et=lt),s.bindTexture(k,Dt||St[k]),pt.type=k,pt.texture=Dt)}function tt(){const k=L[Et];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function vt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Wt(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Zt(k){yt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),yt.copy(k))}function Ot(k){Q.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Q.copy(k))}function le(k,Dt){let lt=p.get(Dt);lt===void 0&&(lt=new WeakMap,p.set(Dt,lt));let pt=lt.get(k);pt===void 0&&(pt=s.getUniformBlockIndex(Dt,k.name),lt.set(k,pt))}function te(k,Dt){const pt=p.get(Dt).get(k);m.get(Dt)!==pt&&(s.uniformBlockBinding(Dt,pt,k.__bindingPointIndex),m.set(Dt,pt))}function Ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Et=null,L={},x={},v=new WeakMap,y=[],E=null,A=!1,S=null,_=null,O=null,D=null,U=null,z=null,H=null,I=new ye(0,0,0),W=0,w=!1,C=null,F=null,ot=null,st=null,gt=null,yt.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:At,disable:Nt,bindFramebuffer:Yt,drawBuffers:ae,useProgram:we,setBlending:V,setMaterial:Pn,setFlipSided:me,setCullFace:ee,setLineWidth:Xt,setPolygonOffset:De,setScissorTest:kt,activeTexture:N,bindTexture:b,unbindTexture:tt,compressedTexImage2D:vt,compressedTexImage3D:Mt,texImage2D:Ft,texImage3D:Wt,updateUBOMapping:le,uniformBlockBinding:te,texStorage2D:ge,texStorage3D:bt,texSubImage2D:ft,texSubImage3D:It,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Ct,scissor:Zt,viewport:Ot,reset:Ue}}function _R(s,t,i,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ae,g=new WeakMap;let x;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return y?new OffscreenCanvas(N,b):jo("canvas")}function A(N,b,tt){let vt=1;const Mt=kt(N);if((Mt.width>tt||Mt.height>tt)&&(vt=tt/Math.max(Mt.width,Mt.height)),vt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ft=Math.floor(vt*Mt.width),It=Math.floor(vt*Mt.height);x===void 0&&(x=E(ft,It));const Rt=b?E(ft,It):x;return Rt.width=ft,Rt.height=It,Rt.getContext("2d").drawImage(N,0,0,ft,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ft+"x"+It+")."),Rt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),N;return N}function S(N){return N.generateMipmaps}function _(N){s.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(N,b,tt,vt,Mt=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ft=b;if(b===s.RED&&(tt===s.FLOAT&&(ft=s.R32F),tt===s.HALF_FLOAT&&(ft=s.R16F),tt===s.UNSIGNED_BYTE&&(ft=s.R8)),b===s.RED_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ft=s.R8UI),tt===s.UNSIGNED_SHORT&&(ft=s.R16UI),tt===s.UNSIGNED_INT&&(ft=s.R32UI),tt===s.BYTE&&(ft=s.R8I),tt===s.SHORT&&(ft=s.R16I),tt===s.INT&&(ft=s.R32I)),b===s.RG&&(tt===s.FLOAT&&(ft=s.RG32F),tt===s.HALF_FLOAT&&(ft=s.RG16F),tt===s.UNSIGNED_BYTE&&(ft=s.RG8)),b===s.RG_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ft=s.RG8UI),tt===s.UNSIGNED_SHORT&&(ft=s.RG16UI),tt===s.UNSIGNED_INT&&(ft=s.RG32UI),tt===s.BYTE&&(ft=s.RG8I),tt===s.SHORT&&(ft=s.RG16I),tt===s.INT&&(ft=s.RG32I)),b===s.RGB_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ft=s.RGB8UI),tt===s.UNSIGNED_SHORT&&(ft=s.RGB16UI),tt===s.UNSIGNED_INT&&(ft=s.RGB32UI),tt===s.BYTE&&(ft=s.RGB8I),tt===s.SHORT&&(ft=s.RGB16I),tt===s.INT&&(ft=s.RGB32I)),b===s.RGBA_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ft=s.RGBA8UI),tt===s.UNSIGNED_SHORT&&(ft=s.RGBA16UI),tt===s.UNSIGNED_INT&&(ft=s.RGBA32UI),tt===s.BYTE&&(ft=s.RGBA8I),tt===s.SHORT&&(ft=s.RGBA16I),tt===s.INT&&(ft=s.RGBA32I)),b===s.RGB&&tt===s.UNSIGNED_INT_5_9_9_9_REV&&(ft=s.RGB9_E5),b===s.RGBA){const It=Mt?Xu:Te.getTransfer(vt);tt===s.FLOAT&&(ft=s.RGBA32F),tt===s.HALF_FLOAT&&(ft=s.RGBA16F),tt===s.UNSIGNED_BYTE&&(ft=It===Be?s.SRGB8_ALPHA8:s.RGBA8),tt===s.UNSIGNED_SHORT_4_4_4_4&&(ft=s.RGBA4),tt===s.UNSIGNED_SHORT_5_5_5_1&&(ft=s.RGB5_A1)}return(ft===s.R16F||ft===s.R32F||ft===s.RG16F||ft===s.RG32F||ft===s.RGBA16F||ft===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function U(N,b){let tt;return N?b===null||b===Tr||b===Ls?tt=s.DEPTH24_STENCIL8:b===ea?tt=s.DEPTH32F_STENCIL8:b===Yo&&(tt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Tr||b===Ls?tt=s.DEPTH_COMPONENT24:b===ea?tt=s.DEPTH_COMPONENT32F:b===Yo&&(tt=s.DEPTH_COMPONENT16),tt}function z(N,b){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Mi&&N.minFilter!==hi?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function H(N){const b=N.target;b.removeEventListener("dispose",H),W(b),b.isVideoTexture&&g.delete(b)}function I(N){const b=N.target;b.removeEventListener("dispose",I),C(b)}function W(N){const b=r.get(N);if(b.__webglInit===void 0)return;const tt=N.source,vt=v.get(tt);if(vt){const Mt=vt[b.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&w(N),Object.keys(vt).length===0&&v.delete(tt)}r.remove(N)}function w(N){const b=r.get(N);s.deleteTexture(b.__webglTexture);const tt=N.source,vt=v.get(tt);delete vt[b.__cacheKey],h.memory.textures--}function C(N){const b=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(b.__webglFramebuffer[vt]))for(let Mt=0;Mt<b.__webglFramebuffer[vt].length;Mt++)s.deleteFramebuffer(b.__webglFramebuffer[vt][Mt]);else s.deleteFramebuffer(b.__webglFramebuffer[vt]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[vt])}else{if(Array.isArray(b.__webglFramebuffer))for(let vt=0;vt<b.__webglFramebuffer.length;vt++)s.deleteFramebuffer(b.__webglFramebuffer[vt]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let vt=0;vt<b.__webglColorRenderbuffer.length;vt++)b.__webglColorRenderbuffer[vt]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[vt]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const tt=N.textures;for(let vt=0,Mt=tt.length;vt<Mt;vt++){const ft=r.get(tt[vt]);ft.__webglTexture&&(s.deleteTexture(ft.__webglTexture),h.memory.textures--),r.remove(tt[vt])}r.remove(N)}let F=0;function ot(){F=0}function st(){const N=F;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),F+=1,N}function gt(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function ct(N,b){const tt=r.get(N);if(N.isVideoTexture&&Xt(N),N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){const vt=N.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(tt,N,b);return}}i.bindTexture(s.TEXTURE_2D,tt.__webglTexture,s.TEXTURE0+b)}function B(N,b){const tt=r.get(N);if(N.version>0&&tt.__version!==N.version){Q(tt,N,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,tt.__webglTexture,s.TEXTURE0+b)}function Z(N,b){const tt=r.get(N);if(N.version>0&&tt.__version!==N.version){Q(tt,N,b);return}i.bindTexture(s.TEXTURE_3D,tt.__webglTexture,s.TEXTURE0+b)}function Y(N,b){const tt=r.get(N);if(N.version>0&&tt.__version!==N.version){dt(tt,N,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture,s.TEXTURE0+b)}const Et={[ku]:s.REPEAT,[Ha]:s.CLAMP_TO_EDGE,[Qh]:s.MIRRORED_REPEAT},L={[Mi]:s.NEAREST,[kM]:s.NEAREST_MIPMAP_NEAREST,[du]:s.NEAREST_MIPMAP_LINEAR,[hi]:s.LINEAR,[sh]:s.LINEAR_MIPMAP_NEAREST,[Mr]:s.LINEAR_MIPMAP_LINEAR},$={[YM]:s.NEVER,[$M]:s.ALWAYS,[jM]:s.LESS,[u0]:s.LEQUAL,[ZM]:s.EQUAL,[JM]:s.GEQUAL,[KM]:s.GREATER,[QM]:s.NOTEQUAL};function xt(N,b){if(b.type===ea&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===hi||b.magFilter===sh||b.magFilter===du||b.magFilter===Mr||b.minFilter===hi||b.minFilter===sh||b.minFilter===du||b.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,Et[b.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,Et[b.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,Et[b.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,L[b.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,L[b.minFilter]),b.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,$[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Mi||b.minFilter!==du&&b.minFilter!==Mr||b.type===ea&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function yt(N,b){let tt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",H));const vt=b.source;let Mt=v.get(vt);Mt===void 0&&(Mt={},v.set(vt,Mt));const ft=gt(b);if(ft!==N.__cacheKey){Mt[ft]===void 0&&(Mt[ft]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),Mt[ft].usedTimes++;const It=Mt[N.__cacheKey];It!==void 0&&(Mt[N.__cacheKey].usedTimes--,It.usedTimes===0&&w(b)),N.__cacheKey=ft,N.__webglTexture=Mt[ft].texture}return tt}function Q(N,b,tt){let vt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(vt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(vt=s.TEXTURE_3D);const Mt=yt(N,b),ft=b.source;i.bindTexture(vt,N.__webglTexture,s.TEXTURE0+tt);const It=r.get(ft);if(ft.version!==It.__version||Mt===!0){i.activeTexture(s.TEXTURE0+tt);const Rt=Te.getPrimaries(Te.workingColorSpace),Ct=b.colorSpace===Fa?null:Te.getPrimaries(b.colorSpace),ge=b.colorSpace===Fa||Rt===Ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let bt=A(b.image,!1,l.maxTextureSize);bt=De(b,bt);const Ft=u.convert(b.format,b.colorSpace),Wt=u.convert(b.type);let Zt=D(b.internalFormat,Ft,Wt,b.colorSpace,b.isVideoTexture);xt(vt,b);let Ot;const le=b.mipmaps,te=b.isVideoTexture!==!0,Ue=It.__version===void 0||Mt===!0,k=ft.dataReady,Dt=z(b,bt);if(b.isDepthTexture)Zt=U(b.format===Ns,b.type),Ue&&(te?i.texStorage2D(s.TEXTURE_2D,1,Zt,bt.width,bt.height):i.texImage2D(s.TEXTURE_2D,0,Zt,bt.width,bt.height,0,Ft,Wt,null));else if(b.isDataTexture)if(le.length>0){te&&Ue&&i.texStorage2D(s.TEXTURE_2D,Dt,Zt,le[0].width,le[0].height);for(let lt=0,pt=le.length;lt<pt;lt++)Ot=le[lt],te?k&&i.texSubImage2D(s.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,Ft,Wt,Ot.data):i.texImage2D(s.TEXTURE_2D,lt,Zt,Ot.width,Ot.height,0,Ft,Wt,Ot.data);b.generateMipmaps=!1}else te?(Ue&&i.texStorage2D(s.TEXTURE_2D,Dt,Zt,bt.width,bt.height),k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,bt.width,bt.height,Ft,Wt,bt.data)):i.texImage2D(s.TEXTURE_2D,0,Zt,bt.width,bt.height,0,Ft,Wt,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){te&&Ue&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Dt,Zt,le[0].width,le[0].height,bt.depth);for(let lt=0,pt=le.length;lt<pt;lt++)if(Ot=le[lt],b.format!==yi)if(Ft!==null)if(te){if(k)if(b.layerUpdates.size>0){const Pt=rv(Ot.width,Ot.height,b.format,b.type);for(const Lt of b.layerUpdates){const ie=Ot.data.subarray(Lt*Pt/Ot.data.BYTES_PER_ELEMENT,(Lt+1)*Pt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,Lt,Ot.width,Ot.height,1,Ft,ie)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,Ot.width,Ot.height,bt.depth,Ft,Ot.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,lt,Zt,Ot.width,Ot.height,bt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?k&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,Ot.width,Ot.height,bt.depth,Ft,Wt,Ot.data):i.texImage3D(s.TEXTURE_2D_ARRAY,lt,Zt,Ot.width,Ot.height,bt.depth,0,Ft,Wt,Ot.data)}else{te&&Ue&&i.texStorage2D(s.TEXTURE_2D,Dt,Zt,le[0].width,le[0].height);for(let lt=0,pt=le.length;lt<pt;lt++)Ot=le[lt],b.format!==yi?Ft!==null?te?k&&i.compressedTexSubImage2D(s.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,Ft,Ot.data):i.compressedTexImage2D(s.TEXTURE_2D,lt,Zt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?k&&i.texSubImage2D(s.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,Ft,Wt,Ot.data):i.texImage2D(s.TEXTURE_2D,lt,Zt,Ot.width,Ot.height,0,Ft,Wt,Ot.data)}else if(b.isDataArrayTexture)if(te){if(Ue&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Dt,Zt,bt.width,bt.height,bt.depth),k)if(b.layerUpdates.size>0){const lt=rv(bt.width,bt.height,b.format,b.type);for(const pt of b.layerUpdates){const Pt=bt.data.subarray(pt*lt/bt.data.BYTES_PER_ELEMENT,(pt+1)*lt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pt,bt.width,bt.height,1,Ft,Wt,Pt)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ft,Wt,bt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Zt,bt.width,bt.height,bt.depth,0,Ft,Wt,bt.data);else if(b.isData3DTexture)te?(Ue&&i.texStorage3D(s.TEXTURE_3D,Dt,Zt,bt.width,bt.height,bt.depth),k&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ft,Wt,bt.data)):i.texImage3D(s.TEXTURE_3D,0,Zt,bt.width,bt.height,bt.depth,0,Ft,Wt,bt.data);else if(b.isFramebufferTexture){if(Ue)if(te)i.texStorage2D(s.TEXTURE_2D,Dt,Zt,bt.width,bt.height);else{let lt=bt.width,pt=bt.height;for(let Pt=0;Pt<Dt;Pt++)i.texImage2D(s.TEXTURE_2D,Pt,Zt,lt,pt,0,Ft,Wt,null),lt>>=1,pt>>=1}}else if(le.length>0){if(te&&Ue){const lt=kt(le[0]);i.texStorage2D(s.TEXTURE_2D,Dt,Zt,lt.width,lt.height)}for(let lt=0,pt=le.length;lt<pt;lt++)Ot=le[lt],te?k&&i.texSubImage2D(s.TEXTURE_2D,lt,0,0,Ft,Wt,Ot):i.texImage2D(s.TEXTURE_2D,lt,Zt,Ft,Wt,Ot);b.generateMipmaps=!1}else if(te){if(Ue){const lt=kt(bt);i.texStorage2D(s.TEXTURE_2D,Dt,Zt,lt.width,lt.height)}k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ft,Wt,bt)}else i.texImage2D(s.TEXTURE_2D,0,Zt,Ft,Wt,bt);S(b)&&_(vt),It.__version=ft.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function dt(N,b,tt){if(b.image.length!==6)return;const vt=yt(N,b),Mt=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+tt);const ft=r.get(Mt);if(Mt.version!==ft.__version||vt===!0){i.activeTexture(s.TEXTURE0+tt);const It=Te.getPrimaries(Te.workingColorSpace),Rt=b.colorSpace===Fa?null:Te.getPrimaries(b.colorSpace),Ct=b.colorSpace===Fa||It===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const ge=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,Ft=[];for(let pt=0;pt<6;pt++)!ge&&!bt?Ft[pt]=A(b.image[pt],!0,l.maxCubemapSize):Ft[pt]=bt?b.image[pt].image:b.image[pt],Ft[pt]=De(b,Ft[pt]);const Wt=Ft[0],Zt=u.convert(b.format,b.colorSpace),Ot=u.convert(b.type),le=D(b.internalFormat,Zt,Ot,b.colorSpace),te=b.isVideoTexture!==!0,Ue=ft.__version===void 0||vt===!0,k=Mt.dataReady;let Dt=z(b,Wt);xt(s.TEXTURE_CUBE_MAP,b);let lt;if(ge){te&&Ue&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Dt,le,Wt.width,Wt.height);for(let pt=0;pt<6;pt++){lt=Ft[pt].mipmaps;for(let Pt=0;Pt<lt.length;Pt++){const Lt=lt[Pt];b.format!==yi?Zt!==null?te?k&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt,0,0,Lt.width,Lt.height,Zt,Lt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt,le,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt,0,0,Lt.width,Lt.height,Zt,Ot,Lt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt,le,Lt.width,Lt.height,0,Zt,Ot,Lt.data)}}}else{if(lt=b.mipmaps,te&&Ue){lt.length>0&&Dt++;const pt=kt(Ft[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Dt,le,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(bt){te?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Ft[pt].width,Ft[pt].height,Zt,Ot,Ft[pt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,le,Ft[pt].width,Ft[pt].height,0,Zt,Ot,Ft[pt].data);for(let Pt=0;Pt<lt.length;Pt++){const ie=lt[Pt].image[pt].image;te?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt+1,0,0,ie.width,ie.height,Zt,Ot,ie.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt+1,le,ie.width,ie.height,0,Zt,Ot,ie.data)}}else{te?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Zt,Ot,Ft[pt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,le,Zt,Ot,Ft[pt]);for(let Pt=0;Pt<lt.length;Pt++){const Lt=lt[Pt];te?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt+1,0,0,Zt,Ot,Lt.image[pt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt+1,le,Zt,Ot,Lt.image[pt])}}}S(b)&&_(s.TEXTURE_CUBE_MAP),ft.__version=Mt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function St(N,b,tt,vt,Mt,ft){const It=u.convert(tt.format,tt.colorSpace),Rt=u.convert(tt.type),Ct=D(tt.internalFormat,It,Rt,tt.colorSpace),ge=r.get(b),bt=r.get(tt);if(bt.__renderTarget=b,!ge.__hasExternalTextures){const Ft=Math.max(1,b.width>>ft),Wt=Math.max(1,b.height>>ft);Mt===s.TEXTURE_3D||Mt===s.TEXTURE_2D_ARRAY?i.texImage3D(Mt,ft,Ct,Ft,Wt,b.depth,0,It,Rt,null):i.texImage2D(Mt,ft,Ct,Ft,Wt,0,It,Rt,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),ee(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,vt,Mt,bt.__webglTexture,0,me(b)):(Mt===s.TEXTURE_2D||Mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,vt,Mt,bt.__webglTexture,ft),i.bindFramebuffer(s.FRAMEBUFFER,null)}function At(N,b,tt){if(s.bindRenderbuffer(s.RENDERBUFFER,N),b.depthBuffer){const vt=b.depthTexture,Mt=vt&&vt.isDepthTexture?vt.type:null,ft=U(b.stencilBuffer,Mt),It=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=me(b);ee(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt,ft,b.width,b.height):tt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,ft,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ft,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,It,s.RENDERBUFFER,N)}else{const vt=b.textures;for(let Mt=0;Mt<vt.length;Mt++){const ft=vt[Mt],It=u.convert(ft.format,ft.colorSpace),Rt=u.convert(ft.type),Ct=D(ft.internalFormat,It,Rt,ft.colorSpace),ge=me(b);tt&&ee(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,Ct,b.width,b.height):ee(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ge,Ct,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ct,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Nt(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=r.get(b.depthTexture);vt.__renderTarget=b,(!vt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ct(b.depthTexture,0);const Mt=vt.__webglTexture,ft=me(b);if(b.depthTexture.format===Rs)ee(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Mt,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Mt,0);else if(b.depthTexture.format===Ns)ee(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Mt,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function Yt(N){const b=r.get(N),tt=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const vt=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),vt){const Mt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,vt.removeEventListener("dispose",Mt)};vt.addEventListener("dispose",Mt),b.__depthDisposeCallback=Mt}b.__boundDepthTexture=vt}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");Nt(b.__webglFramebuffer,N)}else if(tt){b.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[vt]),b.__webglDepthbuffer[vt]===void 0)b.__webglDepthbuffer[vt]=s.createRenderbuffer(),At(b.__webglDepthbuffer[vt],N,!1);else{const Mt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer[vt];s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,ft)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),At(b.__webglDepthbuffer,N,!1);else{const vt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,Mt)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function ae(N,b,tt){const vt=r.get(N);b!==void 0&&St(vt.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),tt!==void 0&&Yt(N)}function we(N){const b=N.texture,tt=r.get(N),vt=r.get(b);N.addEventListener("dispose",I);const Mt=N.textures,ft=N.isWebGLCubeRenderTarget===!0,It=Mt.length>1;if(It||(vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture()),vt.__version=b.version,h.memory.textures++),ft){tt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer[Rt]=[];for(let Ct=0;Ct<b.mipmaps.length;Ct++)tt.__webglFramebuffer[Rt][Ct]=s.createFramebuffer()}else tt.__webglFramebuffer[Rt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)tt.__webglFramebuffer[Rt]=s.createFramebuffer()}else tt.__webglFramebuffer=s.createFramebuffer();if(It)for(let Rt=0,Ct=Mt.length;Rt<Ct;Rt++){const ge=r.get(Mt[Rt]);ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture(),h.memory.textures++)}if(N.samples>0&&ee(N)===!1){tt.__webglMultisampledFramebuffer=s.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<Mt.length;Rt++){const Ct=Mt[Rt];tt.__webglColorRenderbuffer[Rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt]);const ge=u.convert(Ct.format,Ct.colorSpace),bt=u.convert(Ct.type),Ft=D(Ct.internalFormat,ge,bt,Ct.colorSpace,N.isXRRenderTarget===!0),Wt=me(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,Ft,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(tt.__webglDepthRenderbuffer=s.createRenderbuffer(),At(tt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ft){i.bindTexture(s.TEXTURE_CUBE_MAP,vt.__webglTexture),xt(s.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ct=0;Ct<b.mipmaps.length;Ct++)St(tt.__webglFramebuffer[Rt][Ct],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ct);else St(tt.__webglFramebuffer[Rt],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);S(b)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(It){for(let Rt=0,Ct=Mt.length;Rt<Ct;Rt++){const ge=Mt[Rt],bt=r.get(ge);i.bindTexture(s.TEXTURE_2D,bt.__webglTexture),xt(s.TEXTURE_2D,ge),St(tt.__webglFramebuffer,N,ge,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,0),S(ge)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let Rt=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Rt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Rt,vt.__webglTexture),xt(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let Ct=0;Ct<b.mipmaps.length;Ct++)St(tt.__webglFramebuffer[Ct],N,b,s.COLOR_ATTACHMENT0,Rt,Ct);else St(tt.__webglFramebuffer,N,b,s.COLOR_ATTACHMENT0,Rt,0);S(b)&&_(Rt),i.unbindTexture()}N.depthBuffer&&Yt(N)}function fe(N){const b=N.textures;for(let tt=0,vt=b.length;tt<vt;tt++){const Mt=b[tt];if(S(Mt)){const ft=O(N),It=r.get(Mt).__webglTexture;i.bindTexture(ft,It),_(ft),i.unbindTexture()}}}const He=[],V=[];function Pn(N){if(N.samples>0){if(ee(N)===!1){const b=N.textures,tt=N.width,vt=N.height;let Mt=s.COLOR_BUFFER_BIT;const ft=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,It=r.get(N),Rt=b.length>1;if(Rt)for(let Ct=0;Ct<b.length;Ct++)i.bindFramebuffer(s.FRAMEBUFFER,It.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,It.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Ct=0;Ct<b.length;Ct++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Mt|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Mt|=s.STENCIL_BUFFER_BIT)),Rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,It.__webglColorRenderbuffer[Ct]);const ge=r.get(b[Ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ge,0)}s.blitFramebuffer(0,0,tt,vt,0,0,tt,vt,Mt,s.NEAREST),m===!0&&(He.length=0,V.length=0,He.push(s.COLOR_ATTACHMENT0+Ct),N.depthBuffer&&N.resolveDepthBuffer===!1&&(He.push(ft),V.push(ft),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,V)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,He))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Rt)for(let Ct=0;Ct<b.length;Ct++){i.bindFramebuffer(s.FRAMEBUFFER,It.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,It.__webglColorRenderbuffer[Ct]);const ge=r.get(b[Ct]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,It.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,ge,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function me(N){return Math.min(l.maxSamples,N.samples)}function ee(N){const b=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Xt(N){const b=h.render.frame;g.get(N)!==b&&(g.set(N,b),N.update())}function De(N,b){const tt=N.colorSpace,vt=N.format,Mt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||tt!==Os&&tt!==Fa&&(Te.getTransfer(tt)===Be?(vt!==yi||Mt!==sa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),b}function kt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=ot,this.setTexture2D=ct,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=ae,this.setupRenderTarget=we,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Pn,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ee}function vR(s,t){function i(r,l=Fa){let u;const h=Te.getTransfer(l);if(r===sa)return s.UNSIGNED_BYTE;if(r===Od)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Pd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===t0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Jv)return s.BYTE;if(r===$v)return s.SHORT;if(r===Yo)return s.UNSIGNED_SHORT;if(r===Nd)return s.INT;if(r===Tr)return s.UNSIGNED_INT;if(r===ea)return s.FLOAT;if(r===Jo)return s.HALF_FLOAT;if(r===e0)return s.ALPHA;if(r===n0)return s.RGB;if(r===yi)return s.RGBA;if(r===i0)return s.LUMINANCE;if(r===a0)return s.LUMINANCE_ALPHA;if(r===Rs)return s.DEPTH_COMPONENT;if(r===Ns)return s.DEPTH_STENCIL;if(r===r0)return s.RED;if(r===Bd)return s.RED_INTEGER;if(r===s0)return s.RG;if(r===Id)return s.RG_INTEGER;if(r===zd)return s.RGBA_INTEGER;if(r===Bu||r===Iu||r===zu||r===Fu)if(h===Be)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Bu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Iu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Bu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Iu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jh||r===$h||r===td||r===ed)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Jh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$h)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===td)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ed)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===nd||r===id||r===ad)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===nd||r===id)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===ad)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rd||r===sd||r===od||r===ld||r===ud||r===cd||r===fd||r===hd||r===dd||r===pd||r===md||r===gd||r===_d||r===vd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===rd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===od)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ld)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ud)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===cd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===md)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_d)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hu||r===xd||r===Sd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Hu)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===o0||r===yd||r===Md||r===Ed)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Hu)return u.COMPRESSED_RED_RGTC1_EXT;if(r===yd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Md)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ed)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ls?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const xR={type:"move"};class Bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ko,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ko,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ko,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const A of t.hand.values()){const S=i.getJointPose(A,r),_=this._getHandJoint(p,A);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=g.position.distanceTo(x.position),y=.02,E=.005;p.inputState.pinching&&v>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(xR)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new ko;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const SR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class MR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new wn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Wa({vertexShader:SR,fragmentShader:yR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Xn(new Ga(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ER extends Cr{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,x=null,v=null,y=null,E=null;const A=new MR,S=i.getContextAttributes();let _=null,O=null;const D=[],U=[],z=new Ae;let H=null;const I=new fi;I.viewport=new Ke;const W=new fi;W.viewport=new Ke;const w=[I,W],C=new kE;let F=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let dt=D[Q];return dt===void 0&&(dt=new Bh,D[Q]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(Q){let dt=D[Q];return dt===void 0&&(dt=new Bh,D[Q]=dt),dt.getGripSpace()},this.getHand=function(Q){let dt=D[Q];return dt===void 0&&(dt=new Bh,D[Q]=dt),dt.getHandSpace()};function st(Q){const dt=U.indexOf(Q.inputSource);if(dt===-1)return;const St=D[dt];St!==void 0&&(St.update(Q.inputSource,Q.frame,p||h),St.dispatchEvent({type:Q.type,data:Q.inputSource}))}function gt(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",gt),l.removeEventListener("inputsourceschange",ct);for(let Q=0;Q<D.length;Q++){const dt=U[Q];dt!==null&&(U[Q]=null,D[Q].disconnect(dt))}F=null,ot=null,A.reset(),t.setRenderTarget(_),y=null,v=null,x=null,l=null,O=null,yt.stop(),r.isPresenting=!1,t.setPixelRatio(H),t.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",gt),l.addEventListener("inputsourceschange",ct),S.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(z),l.renderState.layers===void 0){const dt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,dt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new br(y.framebufferWidth,y.framebufferHeight,{format:yi,type:sa,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil})}else{let dt=null,St=null,At=null;S.depth&&(At=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,dt=S.stencil?Ns:Rs,St=S.stencil?Ls:Tr);const Nt={colorFormat:i.RGBA8,depthFormat:At,scaleFactor:u};x=new XRWebGLBinding(l,i),v=x.createProjectionLayer(Nt),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),O=new br(v.textureWidth,v.textureHeight,{format:yi,type:sa,depthTexture:new y0(v.textureWidth,v.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),yt.setContext(l),yt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function ct(Q){for(let dt=0;dt<Q.removed.length;dt++){const St=Q.removed[dt],At=U.indexOf(St);At>=0&&(U[At]=null,D[At].disconnect(St))}for(let dt=0;dt<Q.added.length;dt++){const St=Q.added[dt];let At=U.indexOf(St);if(At===-1){for(let Yt=0;Yt<D.length;Yt++)if(Yt>=U.length){U.push(St),At=Yt;break}else if(U[Yt]===null){U[Yt]=St,At=Yt;break}if(At===-1)break}const Nt=D[At];Nt&&Nt.connect(St)}}const B=new rt,Z=new rt;function Y(Q,dt,St){B.setFromMatrixPosition(dt.matrixWorld),Z.setFromMatrixPosition(St.matrixWorld);const At=B.distanceTo(Z),Nt=dt.projectionMatrix.elements,Yt=St.projectionMatrix.elements,ae=Nt[14]/(Nt[10]-1),we=Nt[14]/(Nt[10]+1),fe=(Nt[9]+1)/Nt[5],He=(Nt[9]-1)/Nt[5],V=(Nt[8]-1)/Nt[0],Pn=(Yt[8]+1)/Yt[0],me=ae*V,ee=ae*Pn,Xt=At/(-V+Pn),De=Xt*-V;if(dt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(De),Q.translateZ(Xt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Nt[10]===-1)Q.projectionMatrix.copy(dt.projectionMatrix),Q.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const kt=ae+Xt,N=we+Xt,b=me-De,tt=ee+(At-De),vt=fe*we/N*kt,Mt=He*we/N*kt;Q.projectionMatrix.makePerspective(b,tt,vt,Mt,kt,N),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Et(Q,dt){dt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(dt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let dt=Q.near,St=Q.far;A.texture!==null&&(A.depthNear>0&&(dt=A.depthNear),A.depthFar>0&&(St=A.depthFar)),C.near=W.near=I.near=dt,C.far=W.far=I.far=St,(F!==C.near||ot!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,ot=C.far),I.layers.mask=Q.layers.mask|2,W.layers.mask=Q.layers.mask|4,C.layers.mask=I.layers.mask|W.layers.mask;const At=Q.parent,Nt=C.cameras;Et(C,At);for(let Yt=0;Yt<Nt.length;Yt++)Et(Nt[Yt],At);Nt.length===2?Y(C,I,W):C.projectionMatrix.copy(I.projectionMatrix),L(Q,C,At)};function L(Q,dt,St){St===null?Q.matrix.copy(dt.matrixWorld):(Q.matrix.copy(St.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(dt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(dt.projectionMatrix),Q.projectionMatrixInverse.copy(dt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Td*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(Q){m=Q,v!==null&&(v.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let $=null;function xt(Q,dt){if(g=dt.getViewerPose(p||h),E=dt,g!==null){const St=g.views;y!==null&&(t.setRenderTargetFramebuffer(O,y.framebuffer),t.setRenderTarget(O));let At=!1;St.length!==C.cameras.length&&(C.cameras.length=0,At=!0);for(let Yt=0;Yt<St.length;Yt++){const ae=St[Yt];let we=null;if(y!==null)we=y.getViewport(ae);else{const He=x.getViewSubImage(v,ae);we=He.viewport,Yt===0&&(t.setRenderTargetTextures(O,He.colorTexture,v.ignoreDepthValues?void 0:He.depthStencilTexture),t.setRenderTarget(O))}let fe=w[Yt];fe===void 0&&(fe=new fi,fe.layers.enable(Yt),fe.viewport=new Ke,w[Yt]=fe),fe.matrix.fromArray(ae.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(ae.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(we.x,we.y,we.width,we.height),Yt===0&&(C.matrix.copy(fe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),At===!0&&C.cameras.push(fe)}const Nt=l.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Yt=x.getDepthInformation(St[0]);Yt&&Yt.isValid&&Yt.texture&&A.init(t,Yt,l.renderState)}}for(let St=0;St<D.length;St++){const At=U[St],Nt=D[St];At!==null&&Nt!==void 0&&Nt.update(At,dt,p||h)}$&&$(Q,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),E=null}const yt=new E0;yt.setAnimationLoop(xt),this.setAnimationLoop=function(Q){$=Q},this.dispose=function(){}}}const _r=new Ti,TR=new Qe;function bR(s,t){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,v0(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,O,D,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(S,_):_.isMeshToonMaterial?(u(S,_),x(S,_)):_.isMeshPhongMaterial?(u(S,_),g(S,_)):_.isMeshStandardMaterial?(u(S,_),v(S,_),_.isMeshPhysicalMaterial&&y(S,_,U)):_.isMeshMatcapMaterial?(u(S,_),E(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),A(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(h(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?m(S,_,O,D):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Wn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Wn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const O=t.get(_),D=O.envMap,U=O.envMapRotation;D&&(S.envMap.value=D,_r.copy(U),_r.x*=-1,_r.y*=-1,_r.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),S.envMapRotation.value.setFromMatrix4(TR.makeRotationFromEuler(_r)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,O,D){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*O,S.scale.value=D*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function v(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,O){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Wn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function A(S,_){const O=t.get(_).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function AR(s,t,i,r){let l={},u={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,D){const U=D.program;r.uniformBlockBinding(O,U)}function p(O,D){let U=l[O.id];U===void 0&&(E(O),U=g(O),l[O.id]=U,O.addEventListener("dispose",S));const z=D.program;r.updateUBOMapping(O,z);const H=t.render.frame;u[O.id]!==H&&(v(O),u[O.id]=H)}function g(O){const D=x();O.__bindingPointIndex=D;const U=s.createBuffer(),z=O.__size,H=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,z,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,U),U}function x(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const D=l[O.id],U=O.uniforms,z=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let H=0,I=U.length;H<I;H++){const W=Array.isArray(U[H])?U[H]:[U[H]];for(let w=0,C=W.length;w<C;w++){const F=W[w];if(y(F,H,w,z)===!0){const ot=F.__offset,st=Array.isArray(F.value)?F.value:[F.value];let gt=0;for(let ct=0;ct<st.length;ct++){const B=st[ct],Z=A(B);typeof B=="number"||typeof B=="boolean"?(F.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,ot+gt,F.__data)):B.isMatrix3?(F.__data[0]=B.elements[0],F.__data[1]=B.elements[1],F.__data[2]=B.elements[2],F.__data[3]=0,F.__data[4]=B.elements[3],F.__data[5]=B.elements[4],F.__data[6]=B.elements[5],F.__data[7]=0,F.__data[8]=B.elements[6],F.__data[9]=B.elements[7],F.__data[10]=B.elements[8],F.__data[11]=0):(B.toArray(F.__data,gt),gt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ot,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(O,D,U,z){const H=O.value,I=D+"_"+U;if(z[I]===void 0)return typeof H=="number"||typeof H=="boolean"?z[I]=H:z[I]=H.clone(),!0;{const W=z[I];if(typeof H=="number"||typeof H=="boolean"){if(W!==H)return z[I]=H,!0}else if(W.equals(H)===!1)return W.copy(H),!0}return!1}function E(O){const D=O.uniforms;let U=0;const z=16;for(let I=0,W=D.length;I<W;I++){const w=Array.isArray(D[I])?D[I]:[D[I]];for(let C=0,F=w.length;C<F;C++){const ot=w[C],st=Array.isArray(ot.value)?ot.value:[ot.value];for(let gt=0,ct=st.length;gt<ct;gt++){const B=st[gt],Z=A(B),Y=U%z,Et=Y%Z.boundary,L=Y+Et;U+=Et,L!==0&&z-L<Z.storage&&(U+=z-L),ot.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=U,U+=Z.storage}}}const H=U%z;return H>0&&(U+=z-H),O.__size=U,O.__cache={},this}function A(O){const D={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(D.boundary=4,D.storage=4):O.isVector2?(D.boundary=8,D.storage=8):O.isVector3||O.isColor?(D.boundary=16,D.storage=12):O.isVector4?(D.boundary=16,D.storage=16):O.isMatrix3?(D.boundary=48,D.storage=48):O.isMatrix4?(D.boundary=64,D.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),D}function S(O){const D=O.target;D.removeEventListener("dispose",S);const U=h.indexOf(D.__bindingPointIndex);h.splice(U,1),s.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function _(){for(const O in l)s.deleteBuffer(l[O]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class RR{constructor(t={}){const{canvas:i=eE(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const E=new Uint32Array(4),A=new Int32Array(4);let S=null,_=null;const O=[],D=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ci,this.toneMapping=ka,this.toneMappingExposure=1;const U=this;let z=!1,H=0,I=0,W=null,w=-1,C=null;const F=new Ke,ot=new Ke;let st=null;const gt=new ye(0);let ct=0,B=i.width,Z=i.height,Y=1,Et=null,L=null;const $=new Ke(0,0,B,Z),xt=new Ke(0,0,B,Z);let yt=!1;const Q=new Hd;let dt=!1,St=!1;const At=new Qe,Nt=new Qe,Yt=new rt,ae=new Ke,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function He(){return W===null?Y:1}let V=r;function Pn(R,X){return i.getContext(R,X)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ld}`),i.addEventListener("webglcontextlost",pt,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",Lt,!1),V===null){const X="webgl2";if(V=Pn(X,R),V===null)throw Pn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let me,ee,Xt,De,kt,N,b,tt,vt,Mt,ft,It,Rt,Ct,ge,bt,Ft,Wt,Zt,Ot,le,te,Ue,k;function Dt(){me=new BA(V),me.init(),te=new vR(V,me),ee=new DA(V,me,t,te),Xt=new gR(V,me),ee.reverseDepthBuffer&&v&&Xt.buffers.depth.setReversed(!0),De=new FA(V),kt=new iR,N=new _R(V,me,Xt,kt,ee,te,De),b=new LA(U),tt=new PA(U),vt=new qE(V),Ue=new CA(V,vt),Mt=new IA(V,vt,De,Ue),ft=new GA(V,Mt,vt,De),Zt=new HA(V,ee,N),bt=new UA(kt),It=new nR(U,b,tt,me,ee,Ue,bt),Rt=new bR(U,kt),Ct=new rR,ge=new fR(me),Wt=new RA(U,b,tt,Xt,ft,y,m),Ft=new pR(U,ft,ee),k=new AR(V,De,ee,Xt),Ot=new wA(V,me,De),le=new zA(V,me,De),De.programs=It.programs,U.capabilities=ee,U.extensions=me,U.properties=kt,U.renderLists=Ct,U.shadowMap=Ft,U.state=Xt,U.info=De}Dt();const lt=new ER(U,V);this.xr=lt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=me.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=me.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(B,Z,!1))},this.getSize=function(R){return R.set(B,Z)},this.setSize=function(R,X,it=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,Z=X,i.width=Math.floor(R*Y),i.height=Math.floor(X*Y),it===!0&&(i.style.width=R+"px",i.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(B*Y,Z*Y).floor()},this.setDrawingBufferSize=function(R,X,it){B=R,Z=X,Y=it,i.width=Math.floor(R*it),i.height=Math.floor(X*it),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,X,it,at){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,X,it,at),Xt.viewport(F.copy($).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(xt)},this.setScissor=function(R,X,it,at){R.isVector4?xt.set(R.x,R.y,R.z,R.w):xt.set(R,X,it,at),Xt.scissor(ot.copy(xt).multiplyScalar(Y).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(R){Xt.setScissorTest(yt=R)},this.setOpaqueSort=function(R){Et=R},this.setTransparentSort=function(R){L=R},this.getClearColor=function(R){return R.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(R=!0,X=!0,it=!0){let at=0;if(R){let j=!1;if(W!==null){const Tt=W.texture.format;j=Tt===zd||Tt===Id||Tt===Bd}if(j){const Tt=W.texture.type,wt=Tt===sa||Tt===Tr||Tt===Yo||Tt===Ls||Tt===Od||Tt===Pd,zt=Wt.getClearColor(),Bt=Wt.getClearAlpha(),Qt=zt.r,$t=zt.g,Gt=zt.b;wt?(E[0]=Qt,E[1]=$t,E[2]=Gt,E[3]=Bt,V.clearBufferuiv(V.COLOR,0,E)):(A[0]=Qt,A[1]=$t,A[2]=Gt,A[3]=Bt,V.clearBufferiv(V.COLOR,0,A))}else at|=V.COLOR_BUFFER_BIT}X&&(at|=V.DEPTH_BUFFER_BIT),it&&(at|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",pt,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",Lt,!1),Wt.dispose(),Ct.dispose(),ge.dispose(),kt.dispose(),b.dispose(),tt.dispose(),ft.dispose(),Ue.dispose(),k.dispose(),It.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",sn),lt.removeEventListener("sessionend",xn),Bn.stop()};function pt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const R=De.autoReset,X=Ft.enabled,it=Ft.autoUpdate,at=Ft.needsUpdate,j=Ft.type;Dt(),De.autoReset=R,Ft.enabled=X,Ft.autoUpdate=it,Ft.needsUpdate=at,Ft.type=j}function Lt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ie(R){const X=R.target;X.removeEventListener("dispose",ie),ze(X)}function ze(R){tn(R),kt.remove(R)}function tn(R){const X=kt.get(R).programs;X!==void 0&&(X.forEach(function(it){It.releaseProgram(it)}),R.isShaderMaterial&&It.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,it,at,j,Tt){X===null&&(X=we);const wt=j.isMesh&&j.matrixWorld.determinant()<0,zt=ja(R,X,it,at,j);Xt.setMaterial(at,wt);let Bt=it.index,Qt=1;if(at.wireframe===!0){if(Bt=Mt.getWireframeAttribute(it),Bt===void 0)return;Qt=2}const $t=it.drawRange,Gt=it.attributes.position;let he=$t.start*Qt,xe=($t.start+$t.count)*Qt;Tt!==null&&(he=Math.max(he,Tt.start*Qt),xe=Math.min(xe,(Tt.start+Tt.count)*Qt)),Bt!==null?(he=Math.max(he,0),xe=Math.min(xe,Bt.count)):Gt!=null&&(he=Math.max(he,0),xe=Math.min(xe,Gt.count));const qe=xe-he;if(qe<0||qe===1/0)return;Ue.setup(j,at,zt,it,Bt);let Ge,ne=Ot;if(Bt!==null&&(Ge=vt.get(Bt),ne=le,ne.setIndex(Ge)),j.isMesh)at.wireframe===!0?(Xt.setLineWidth(at.wireframeLinewidth*He()),ne.setMode(V.LINES)):ne.setMode(V.TRIANGLES);else if(j.isLine){let qt=at.linewidth;qt===void 0&&(qt=1),Xt.setLineWidth(qt*He()),j.isLineSegments?ne.setMode(V.LINES):j.isLineLoop?ne.setMode(V.LINE_LOOP):ne.setMode(V.LINE_STRIP)}else j.isPoints?ne.setMode(V.POINTS):j.isSprite&&ne.setMode(V.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ne.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))ne.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const qt=j._multiDrawStarts,on=j._multiDrawCounts,_e=j._multiDrawCount,In=Bt?vt.get(Bt).bytesPerElement:1,di=kt.get(at).currentProgram.getUniforms();for(let Dn=0;Dn<_e;Dn++)di.setValue(V,"_gl_DrawID",Dn),ne.render(qt[Dn]/In,on[Dn])}else if(j.isInstancedMesh)ne.renderInstances(he,qe,j.count);else if(it.isInstancedBufferGeometry){const qt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,on=Math.min(it.instanceCount,qt);ne.renderInstances(he,qe,on)}else ne.render(he,qe)};function Me(R,X,it){R.transparent===!0&&R.side===On&&R.forceSinglePass===!1?(R.side=Wn,R.needsUpdate=!0,ua(R,X,it),R.side=Xa,R.needsUpdate=!0,ua(R,X,it),R.side=On):ua(R,X,it)}this.compile=function(R,X,it=null){it===null&&(it=R),_=ge.get(it),_.init(X),D.push(_),it.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),R!==it&&R.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const at=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let wt=0;wt<Tt.length;wt++){const zt=Tt[wt];Me(zt,it,j),at.add(zt)}else Me(Tt,it,j),at.add(Tt)}),D.pop(),_=null,at},this.compileAsync=function(R,X,it=null){const at=this.compile(R,X,it);return new Promise(j=>{function Tt(){if(at.forEach(function(wt){kt.get(wt).currentProgram.isReady()&&at.delete(wt)}),at.size===0){j(R);return}setTimeout(Tt,10)}me.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let qn=null;function hn(R){qn&&qn(R)}function sn(){Bn.stop()}function xn(){Bn.start()}const Bn=new E0;Bn.setAnimationLoop(hn),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(R){qn=R,lt.setAnimationLoop(R),R===null?Bn.stop():Bn.start()},lt.addEventListener("sessionstart",sn),lt.addEventListener("sessionend",xn),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(X),X=lt.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,X,W),_=ge.get(R,D.length),_.init(X),D.push(_),Nt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Q.setFromProjectionMatrix(Nt),St=this.localClippingEnabled,dt=bt.init(this.clippingPlanes,St),S=Ct.get(R,O.length),S.init(),O.push(S),lt.enabled===!0&&lt.isPresenting===!0){const Tt=U.xr.getDepthSensingMesh();Tt!==null&&qa(Tt,X,-1/0,U.sortObjects)}qa(R,X,0,U.sortObjects),S.finish(),U.sortObjects===!0&&S.sort(Et,L),fe=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,fe&&Wt.addToRenderList(S,R),this.info.render.frame++,dt===!0&&bt.beginShadows();const it=_.state.shadowsArray;Ft.render(it,R,X),dt===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=S.opaque,j=S.transmissive;if(_.setupLights(),X.isArrayCamera){const Tt=X.cameras;if(j.length>0)for(let wt=0,zt=Tt.length;wt<zt;wt++){const Bt=Tt[wt];il(at,j,R,Bt)}fe&&Wt.render(R);for(let wt=0,zt=Tt.length;wt<zt;wt++){const Bt=Tt[wt];nl(S,R,Bt,Bt.viewport)}}else j.length>0&&il(at,j,R,X),fe&&Wt.render(R),nl(S,R,X);W!==null&&(N.updateMultisampleRenderTarget(W),N.updateRenderTargetMipmap(W)),R.isScene===!0&&R.onAfterRender(U,R,X),Ue.resetDefaultState(),w=-1,C=null,D.pop(),D.length>0?(_=D[D.length-1],dt===!0&&bt.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,O.pop(),O.length>0?S=O[O.length-1]:S=null};function qa(R,X,it,at){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)it=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){at&&ae.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Nt);const wt=ft.update(R),zt=R.material;zt.visible&&S.push(R,wt,zt,it,ae.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const wt=ft.update(R),zt=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ae.copy(R.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),ae.copy(wt.boundingSphere.center)),ae.applyMatrix4(R.matrixWorld).applyMatrix4(Nt)),Array.isArray(zt)){const Bt=wt.groups;for(let Qt=0,$t=Bt.length;Qt<$t;Qt++){const Gt=Bt[Qt],he=zt[Gt.materialIndex];he&&he.visible&&S.push(R,wt,he,it,ae.z,Gt)}}else zt.visible&&S.push(R,wt,zt,it,ae.z,null)}}const Tt=R.children;for(let wt=0,zt=Tt.length;wt<zt;wt++)qa(Tt[wt],X,it,at)}function nl(R,X,it,at){const j=R.opaque,Tt=R.transmissive,wt=R.transparent;_.setupLightsView(it),dt===!0&&bt.setGlobalState(U.clippingPlanes,it),at&&Xt.viewport(F.copy(at)),j.length>0&&Ya(j,X,it),Tt.length>0&&Ya(Tt,X,it),wt.length>0&&Ya(wt,X,it),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function il(R,X,it,at){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[at.id]===void 0&&(_.state.transmissionRenderTarget[at.id]=new br(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?Jo:sa,minFilter:Mr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[at.id],wt=at.viewport||F;Tt.setSize(wt.z,wt.w);const zt=U.getRenderTarget();U.setRenderTarget(Tt),U.getClearColor(gt),ct=U.getClearAlpha(),ct<1&&U.setClearColor(16777215,.5),U.clear(),fe&&Wt.render(it);const Bt=U.toneMapping;U.toneMapping=ka;const Qt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),_.setupLightsView(at),dt===!0&&bt.setGlobalState(U.clippingPlanes,at),Ya(R,it,at),N.updateMultisampleRenderTarget(Tt),N.updateRenderTargetMipmap(Tt),me.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Gt=0,he=X.length;Gt<he;Gt++){const xe=X[Gt],qe=xe.object,Ge=xe.geometry,ne=xe.material,qt=xe.group;if(ne.side===On&&qe.layers.test(at.layers)){const on=ne.side;ne.side=Wn,ne.needsUpdate=!0,la(qe,it,at,Ge,ne,qt),ne.side=on,ne.needsUpdate=!0,$t=!0}}$t===!0&&(N.updateMultisampleRenderTarget(Tt),N.updateRenderTargetMipmap(Tt))}U.setRenderTarget(zt),U.setClearColor(gt,ct),Qt!==void 0&&(at.viewport=Qt),U.toneMapping=Bt}function Ya(R,X,it){const at=X.isScene===!0?X.overrideMaterial:null;for(let j=0,Tt=R.length;j<Tt;j++){const wt=R[j],zt=wt.object,Bt=wt.geometry,Qt=at===null?wt.material:at,$t=wt.group;zt.layers.test(it.layers)&&la(zt,X,it,Bt,Qt,$t)}}function la(R,X,it,at,j,Tt){R.onBeforeRender(U,X,it,at,j,Tt),R.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(U,X,it,at,R,Tt),j.transparent===!0&&j.side===On&&j.forceSinglePass===!1?(j.side=Wn,j.needsUpdate=!0,U.renderBufferDirect(it,X,at,j,R,Tt),j.side=Xa,j.needsUpdate=!0,U.renderBufferDirect(it,X,at,j,R,Tt),j.side=On):U.renderBufferDirect(it,X,at,j,R,Tt),R.onAfterRender(U,X,it,at,j,Tt)}function ua(R,X,it){X.isScene!==!0&&(X=we);const at=kt.get(R),j=_.state.lights,Tt=_.state.shadowsArray,wt=j.state.version,zt=It.getParameters(R,j.state,Tt,X,it),Bt=It.getProgramCacheKey(zt);let Qt=at.programs;at.environment=R.isMeshStandardMaterial?X.environment:null,at.fog=X.fog,at.envMap=(R.isMeshStandardMaterial?tt:b).get(R.envMap||at.environment),at.envMapRotation=at.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,Qt===void 0&&(R.addEventListener("dispose",ie),Qt=new Map,at.programs=Qt);let $t=Qt.get(Bt);if($t!==void 0){if(at.currentProgram===$t&&at.lightsStateVersion===wt)return Oi(R,zt),$t}else zt.uniforms=It.getUniforms(R),R.onBeforeCompile(zt,U),$t=It.acquireProgram(zt,Bt),Qt.set(Bt,$t),at.uniforms=zt.uniforms;const Gt=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Gt.clippingPlanes=bt.uniform),Oi(R,zt),at.needsLights=en(R),at.lightsStateVersion=wt,at.needsLights&&(Gt.ambientLightColor.value=j.state.ambient,Gt.lightProbe.value=j.state.probe,Gt.directionalLights.value=j.state.directional,Gt.directionalLightShadows.value=j.state.directionalShadow,Gt.spotLights.value=j.state.spot,Gt.spotLightShadows.value=j.state.spotShadow,Gt.rectAreaLights.value=j.state.rectArea,Gt.ltc_1.value=j.state.rectAreaLTC1,Gt.ltc_2.value=j.state.rectAreaLTC2,Gt.pointLights.value=j.state.point,Gt.pointLightShadows.value=j.state.pointShadow,Gt.hemisphereLights.value=j.state.hemi,Gt.directionalShadowMap.value=j.state.directionalShadowMap,Gt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Gt.spotShadowMap.value=j.state.spotShadowMap,Gt.spotLightMatrix.value=j.state.spotLightMatrix,Gt.spotLightMap.value=j.state.spotLightMap,Gt.pointShadowMap.value=j.state.pointShadowMap,Gt.pointShadowMatrix.value=j.state.pointShadowMatrix),at.currentProgram=$t,at.uniformsList=null,$t}function Ni(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Gu.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function Oi(R,X){const it=kt.get(R);it.outputColorSpace=X.outputColorSpace,it.batching=X.batching,it.batchingColor=X.batchingColor,it.instancing=X.instancing,it.instancingColor=X.instancingColor,it.instancingMorph=X.instancingMorph,it.skinning=X.skinning,it.morphTargets=X.morphTargets,it.morphNormals=X.morphNormals,it.morphColors=X.morphColors,it.morphTargetsCount=X.morphTargetsCount,it.numClippingPlanes=X.numClippingPlanes,it.numIntersection=X.numClipIntersection,it.vertexAlphas=X.vertexAlphas,it.vertexTangents=X.vertexTangents,it.toneMapping=X.toneMapping}function ja(R,X,it,at,j){X.isScene!==!0&&(X=we),N.resetTextureUnits();const Tt=X.fog,wt=at.isMeshStandardMaterial?X.environment:null,zt=W===null?U.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Os,Bt=(at.isMeshStandardMaterial?tt:b).get(at.envMap||wt),Qt=at.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,$t=!!it.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Gt=!!it.morphAttributes.position,he=!!it.morphAttributes.normal,xe=!!it.morphAttributes.color;let qe=ka;at.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(qe=U.toneMapping);const Ge=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,ne=Ge!==void 0?Ge.length:0,qt=kt.get(at),on=_.state.lights;if(dt===!0&&(St===!0||R!==C)){const Ye=R===C&&at.id===w;bt.setState(at,R,Ye)}let _e=!1;at.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==on.state.version||qt.outputColorSpace!==zt||j.isBatchedMesh&&qt.batching===!1||!j.isBatchedMesh&&qt.batching===!0||j.isBatchedMesh&&qt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&qt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&qt.instancing===!1||!j.isInstancedMesh&&qt.instancing===!0||j.isSkinnedMesh&&qt.skinning===!1||!j.isSkinnedMesh&&qt.skinning===!0||j.isInstancedMesh&&qt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&qt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&qt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&qt.instancingMorph===!1&&j.morphTexture!==null||qt.envMap!==Bt||at.fog===!0&&qt.fog!==Tt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==bt.numPlanes||qt.numIntersection!==bt.numIntersection)||qt.vertexAlphas!==Qt||qt.vertexTangents!==$t||qt.morphTargets!==Gt||qt.morphNormals!==he||qt.morphColors!==xe||qt.toneMapping!==qe||qt.morphTargetsCount!==ne)&&(_e=!0):(_e=!0,qt.__version=at.version);let In=qt.currentProgram;_e===!0&&(In=ua(at,X,j));let di=!1,Dn=!1,dn=!1;const Le=In.getUniforms(),Un=qt.uniforms;if(Xt.useProgram(In.program)&&(di=!0,Dn=!0,dn=!0),at.id!==w&&(w=at.id,Dn=!0),di||C!==R){Xt.buffers.depth.getReversed()?(At.copy(R.projectionMatrix),iE(At),aE(At),Le.setValue(V,"projectionMatrix",At)):Le.setValue(V,"projectionMatrix",R.projectionMatrix),Le.setValue(V,"viewMatrix",R.matrixWorldInverse);const Sn=Le.map.cameraPosition;Sn!==void 0&&Sn.setValue(V,Yt.setFromMatrixPosition(R.matrixWorld)),ee.logarithmicDepthBuffer&&Le.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Le.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Dn=!0,dn=!0)}if(j.isSkinnedMesh){Le.setOptional(V,j,"bindMatrix"),Le.setOptional(V,j,"bindMatrixInverse");const Ye=j.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),Le.setValue(V,"boneTexture",Ye.boneTexture,N))}j.isBatchedMesh&&(Le.setOptional(V,j,"batchingTexture"),Le.setValue(V,"batchingTexture",j._matricesTexture,N),Le.setOptional(V,j,"batchingIdTexture"),Le.setValue(V,"batchingIdTexture",j._indirectTexture,N),Le.setOptional(V,j,"batchingColorTexture"),j._colorsTexture!==null&&Le.setValue(V,"batchingColorTexture",j._colorsTexture,N));const Tn=it.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&Zt.update(j,it,In),(Dn||qt.receiveShadow!==j.receiveShadow)&&(qt.receiveShadow=j.receiveShadow,Le.setValue(V,"receiveShadow",j.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(Un.envMap.value=Bt,Un.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&X.environment!==null&&(Un.envMapIntensity.value=X.environmentIntensity),Dn&&(Le.setValue(V,"toneMappingExposure",U.toneMappingExposure),qt.needsLights&&ca(Un,dn),Tt&&at.fog===!0&&Rt.refreshFogUniforms(Un,Tt),Rt.refreshMaterialUniforms(Un,at,Y,Z,_.state.transmissionRenderTarget[R.id]),Gu.upload(V,Ni(qt),Un,N)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Gu.upload(V,Ni(qt),Un,N),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Le.setValue(V,"center",j.center),Le.setValue(V,"modelViewMatrix",j.modelViewMatrix),Le.setValue(V,"normalMatrix",j.normalMatrix),Le.setValue(V,"modelMatrix",j.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Ye=at.uniformsGroups;for(let Sn=0,Dr=Ye.length;Sn<Dr;Sn++){const zn=Ye[Sn];k.update(zn,In),k.bind(zn,In)}}return In}function ca(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function en(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,X,it){kt.get(R.texture).__webglTexture=X,kt.get(R.depthTexture).__webglTexture=it;const at=kt.get(R);at.__hasExternalTextures=!0,at.__autoAllocateDepthBuffer=it===void 0,at.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),at.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,X){const it=kt.get(R);it.__webglFramebuffer=X,it.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,it=0){W=R,H=X,I=it;let at=!0,j=null,Tt=!1,wt=!1;if(R){const Bt=kt.get(R);if(Bt.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(V.FRAMEBUFFER,null),at=!1;else if(Bt.__webglFramebuffer===void 0)N.setupRenderTarget(R);else if(Bt.__hasExternalTextures)N.rebindTextures(R,kt.get(R.texture).__webglTexture,kt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Gt=R.depthTexture;if(Bt.__boundDepthTexture!==Gt){if(Gt!==null&&kt.has(Gt)&&(R.width!==Gt.image.width||R.height!==Gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(R)}}const Qt=R.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(wt=!0);const $t=kt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($t[X])?j=$t[X][it]:j=$t[X],Tt=!0):R.samples>0&&N.useMultisampledRTT(R)===!1?j=kt.get(R).__webglMultisampledFramebuffer:Array.isArray($t)?j=$t[it]:j=$t,F.copy(R.viewport),ot.copy(R.scissor),st=R.scissorTest}else F.copy($).multiplyScalar(Y).floor(),ot.copy(xt).multiplyScalar(Y).floor(),st=yt;if(Xt.bindFramebuffer(V.FRAMEBUFFER,j)&&at&&Xt.drawBuffers(R,j),Xt.viewport(F),Xt.scissor(ot),Xt.setScissorTest(st),Tt){const Bt=kt.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Bt.__webglTexture,it)}else if(wt){const Bt=kt.get(R.texture),Qt=X||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Bt.__webglTexture,it||0,Qt)}w=-1},this.readRenderTargetPixels=function(R,X,it,at,j,Tt,wt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(zt=zt[wt]),zt){Xt.bindFramebuffer(V.FRAMEBUFFER,zt);try{const Bt=R.texture,Qt=Bt.format,$t=Bt.type;if(!ee.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-at&&it>=0&&it<=R.height-j&&V.readPixels(X,it,at,j,te.convert(Qt),te.convert($t),Tt)}finally{const Bt=W!==null?kt.get(W).__webglFramebuffer:null;Xt.bindFramebuffer(V.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(R,X,it,at,j,Tt,wt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(zt=zt[wt]),zt){const Bt=R.texture,Qt=Bt.format,$t=Bt.type;if(!ee.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=R.width-at&&it>=0&&it<=R.height-j){Xt.bindFramebuffer(V.FRAMEBUFFER,zt);const Gt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Gt),V.bufferData(V.PIXEL_PACK_BUFFER,Tt.byteLength,V.STREAM_READ),V.readPixels(X,it,at,j,te.convert(Qt),te.convert($t),0);const he=W!==null?kt.get(W).__webglFramebuffer:null;Xt.bindFramebuffer(V.FRAMEBUFFER,he);const xe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await nE(V,xe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Gt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Tt),V.deleteBuffer(Gt),V.deleteSync(xe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,X=null,it=0){R.isTexture!==!0&&(Ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1]);const at=Math.pow(2,-it),j=Math.floor(R.image.width*at),Tt=Math.floor(R.image.height*at),wt=X!==null?X.x:0,zt=X!==null?X.y:0;N.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,it,0,0,wt,zt,j,Tt),Xt.unbindTexture()};const al=V.createFramebuffer(),rl=V.createFramebuffer();this.copyTextureToTexture=function(R,X,it=null,at=null,j=0,Tt=null){R.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture function signature has changed."),at=arguments[0]||null,R=arguments[1],X=arguments[2],Tt=arguments[3]||0,it=null),Tt===null&&(j!==0?(Ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=j,j=0):Tt=0);let wt,zt,Bt,Qt,$t,Gt,he,xe,qe;const Ge=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(it!==null)wt=it.max.x-it.min.x,zt=it.max.y-it.min.y,Bt=it.isBox3?it.max.z-it.min.z:1,Qt=it.min.x,$t=it.min.y,Gt=it.isBox3?it.min.z:0;else{const Tn=Math.pow(2,-j);wt=Math.floor(Ge.width*Tn),zt=Math.floor(Ge.height*Tn),R.isDataArrayTexture?Bt=Ge.depth:R.isData3DTexture?Bt=Math.floor(Ge.depth*Tn):Bt=1,Qt=0,$t=0,Gt=0}at!==null?(he=at.x,xe=at.y,qe=at.z):(he=0,xe=0,qe=0);const ne=te.convert(X.format),qt=te.convert(X.type);let on;X.isData3DTexture?(N.setTexture3D(X,0),on=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(N.setTexture2DArray(X,0),on=V.TEXTURE_2D_ARRAY):(N.setTexture2D(X,0),on=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const _e=V.getParameter(V.UNPACK_ROW_LENGTH),In=V.getParameter(V.UNPACK_IMAGE_HEIGHT),di=V.getParameter(V.UNPACK_SKIP_PIXELS),Dn=V.getParameter(V.UNPACK_SKIP_ROWS),dn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ge.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ge.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Qt),V.pixelStorei(V.UNPACK_SKIP_ROWS,$t),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Gt);const Le=R.isDataArrayTexture||R.isData3DTexture,Un=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const Tn=kt.get(R),Ye=kt.get(X),Sn=kt.get(Tn.__renderTarget),Dr=kt.get(Ye.__renderTarget);Xt.bindFramebuffer(V.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Xt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Dr.__webglFramebuffer);for(let zn=0;zn<Bt;zn++)Le&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,kt.get(R).__webglTexture,j,Gt+zn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,kt.get(X).__webglTexture,Tt,qe+zn)),V.blitFramebuffer(Qt,$t,wt,zt,he,xe,wt,zt,V.DEPTH_BUFFER_BIT,V.NEAREST);Xt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||kt.has(R)){const Tn=kt.get(R),Ye=kt.get(X);Xt.bindFramebuffer(V.READ_FRAMEBUFFER,al),Xt.bindFramebuffer(V.DRAW_FRAMEBUFFER,rl);for(let Sn=0;Sn<Bt;Sn++)Le?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Tn.__webglTexture,j,Gt+Sn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Tn.__webglTexture,j),Un?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ye.__webglTexture,Tt,qe+Sn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ye.__webglTexture,Tt),j!==0?V.blitFramebuffer(Qt,$t,wt,zt,he,xe,wt,zt,V.COLOR_BUFFER_BIT,V.NEAREST):Un?V.copyTexSubImage3D(on,Tt,he,xe,qe+Sn,Qt,$t,wt,zt):V.copyTexSubImage2D(on,Tt,he,xe,Qt,$t,wt,zt);Xt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Un?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(on,Tt,he,xe,qe,wt,zt,Bt,ne,qt,Ge.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(on,Tt,he,xe,qe,wt,zt,Bt,ne,Ge.data):V.texSubImage3D(on,Tt,he,xe,qe,wt,zt,Bt,ne,qt,Ge):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Tt,he,xe,wt,zt,ne,qt,Ge.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Tt,he,xe,Ge.width,Ge.height,ne,Ge.data):V.texSubImage2D(V.TEXTURE_2D,Tt,he,xe,wt,zt,ne,qt,Ge);V.pixelStorei(V.UNPACK_ROW_LENGTH,_e),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,In),V.pixelStorei(V.UNPACK_SKIP_PIXELS,di),V.pixelStorei(V.UNPACK_SKIP_ROWS,Dn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,dn),Tt===0&&X.generateMipmaps&&V.generateMipmap(on),Xt.unbindTexture()},this.copyTextureToTexture3D=function(R,X,it=null,at=null,j=0){return R.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,at=arguments[1]||null,R=arguments[2],X=arguments[3],j=arguments[4]||0),Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,X,it,at,j)},this.initRenderTarget=function(R){kt.get(R).__webglFramebuffer===void 0&&N.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?N.setTextureCube(R,0):R.isData3DTexture?N.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?N.setTexture2DArray(R,0):N.setTexture2D(R,0),Xt.unbindTexture()},this.resetState=function(){H=0,I=0,W=null,Xt.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Te._getDrawingBufferColorSpace(t),i.unpackColorSpace=Te._getUnpackColorSpace()}}const Ms=new Ti(0,0,0,"YXZ"),Es=new rt,CR={type:"change"},wR={type:"lock"},DR={type:"unlock"},Dv=Math.PI/2;class UR extends XE{constructor(t,i=null){super(t,i),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=LR.bind(this),this._onPointerlockChange=NR.bind(this),this._onPointerlockError=OR.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(t){return t.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(t){if(this.enabled===!1)return;const i=this.object;Es.setFromMatrixColumn(i.matrix,0),Es.crossVectors(i.up,Es),i.position.addScaledVector(Es,t)}moveRight(t){if(this.enabled===!1)return;const i=this.object;Es.setFromMatrixColumn(i.matrix,0),i.position.addScaledVector(Es,t)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function LR(s){if(this.enabled===!1||this.isLocked===!1)return;const t=this.object;Ms.setFromQuaternion(t.quaternion),Ms.y-=s.movementX*.002*this.pointerSpeed,Ms.x-=s.movementY*.002*this.pointerSpeed,Ms.x=Math.max(Dv-this.maxPolarAngle,Math.min(Dv-this.minPolarAngle,Ms.x)),t.quaternion.setFromEuler(Ms),this.dispatchEvent(CR)}function NR(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(wR),this.isLocked=!0):(this.dispatchEvent(DR),this.isLocked=!1)}function OR(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}function PR(){const s=_t.useRef(null);return _t.useEffect(()=>{const t=s.current,i=()=>t.clientWidth,r=()=>t.clientHeight,l=new RR({antialias:!0});l.setSize(i(),r()),l.shadowMap.enabled=!0,l.outputEncoding=void 0,l.toneMapping=Kv,l.toneMappingExposure=1,l.shadowMap.type=jv,t.appendChild(l.domElement);const u=new CE;u.background=new ye(11184810);const h=new fi(75,i()/r(),.1,100);h.position.set(0,0,-10),h.lookAt(0,.75,0);const d=new UR(h,t);t.addEventListener("click",()=>{d.isLocked||d.lock()}),u.add(new VE(16777215,1)),u.add(new zE(16777215,12698049,.4));const m=new GE(16777215,.8);m.position.set(2,4,-2),m.castShadow=!0,m.shadow.mapSize.set(2048,2048),u.add(m);const p=new IE,g=p.load("./assets/floor.jpeg");g.wrapS=g.wrapT=ku,g.repeat.set(2,2);const x=(()=>{const w=document.createElement("canvas");w.width=1,w.height=256;const C=w.getContext("2d"),F=C.createLinearGradient(0,0,0,256);F.addColorStop(0,"#ffffff"),F.addColorStop(.6,"#ffffff"),F.addColorStop(.6,"#3399ff"),F.addColorStop(1,"#3399ff"),C.fillStyle=F,C.fillRect(0,0,1,256);const ot=new UE(w);return ot.wrapS=ot.wrapT=Ha,ot.minFilter=hi,ot.magFilter=hi,ot})(),v=new mr({map:g,roughness:.8,metalness:0,side:On}),y=new mr({map:x,roughness:.9,metalness:0,side:On});new mr({color:11184810,roughness:.4,metalness:.5,side:On}),new mr({color:3381759,roughness:.5,metalness:0,side:On});const E=new mr({color:14803425,roughness:.2,metalness:0,side:On}),A=new Xn(new Ga(6,6),v);A.rotation.x=-Math.PI/2,A.position.y=.05,A.receiveShadow=!0,u.add(A);const S=(w,C,F,ot,st,gt=0)=>{const ct=new Xn(new Ga(w,C),y);ct.position.set(F,ot,st),ct.rotation.y=gt,ct.receiveShadow=!0,u.add(ct)};S(6,2,0,1,3),S(6,2,0,1,-3,Math.PI),S(6,2,-3,1,0,Math.PI/2),S(6,2,3,1,0,-Math.PI/2);const _=new Xn(new Ga(6,6),new mr({color:16777215,side:On,roughness:.9}));_.rotation.x=Math.PI/2,_.position.y=2,_.receiveShadow=!0,u.add(_);const O=new Xn(new zs(2,1,.05),E);O.position.set(0,1,2.95),O.rotation.y=Math.PI,O.castShadow=!0,O.receiveShadow=!0,u.add(O);const D=new ko;D.position.z=.026,O.add(D);const U=[],z=[],H=new Xn(new Ga(2,1),new mr({map:p.load("./assets/world-map.jpg"),roughness:.8,metalness:0}));H.position.set(2.85,1.3,-1.8),H.rotation.y=-Math.PI/2,H.castShadow=H.receiveShadow=!0,u.add(H),U.forEach(w=>{w.updateMatrixWorld(!0),z.push(new Is().setFromObject(w))});const I=new vn;u.add(I),window.addEventListener("resize",()=>{h.aspect=i()/r(),h.updateProjectionMatrix(),l.setSize(i(),r())});function W(){requestAnimationFrame(W),l.render(u,h)}return W(),()=>{t.removeChild(l.domElement),l.dispose()}},[]),ke.jsx("div",{ref:s,style:{width:"100%",height:"100%"}})}function BR(){return ke.jsx("div",{style:{width:"100vw",height:"100vh",overflow:"hidden"},children:ke.jsx(PR,{})})}const IR="_navbar_x2hla_3",zR="_navbar__brand_x2hla_21",FR="_navbar__links_x2hla_33",HR="_navbar__link_x2hla_33",Vo={navbar:IR,navbar__brand:zR,navbar__links:FR,navbar__link:HR};function GR(){return ke.jsxs("header",{className:Vo.navbar,children:[ke.jsx("div",{className:Vo.navbar__brand,children:"Ege Başarı Seferihisar"}),ke.jsxs("nav",{className:Vo.navbar__links,children:[ke.jsx(qo,{to:"/",className:Vo.navbar__link,children:"Home"}),ke.jsx(qo,{to:"/classroom",className:Vo.navbar__link,children:"3D Sınıf"})]})]})}function VR(){return ke.jsxs(ke.Fragment,{children:[ke.jsx(GR,{}),ke.jsxs(Ly,{children:[ke.jsx(zh,{path:"/",element:ke.jsx(pM,{})}),ke.jsx(zh,{path:"/classroom",element:ke.jsx(BR,{})})]})]})}HS.createRoot(document.getElementById("root")).render(ke.jsx(_t.StrictMode,{children:ke.jsx(nM,{children:ke.jsx(VR,{})})}));
