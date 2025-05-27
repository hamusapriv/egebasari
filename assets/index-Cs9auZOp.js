(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Jf={exports:{}},Do={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function US(){if(__)return Do;__=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Do.Fragment=e,Do.jsx=i,Do.jsxs=i,Do}var v_;function LS(){return v_||(v_=1,Jf.exports=US()),Jf.exports}var Se=LS(),$f={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function NS(){if(x_)return rt;x_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function S(N,$,xe){this.props=N,this.context=$,this.refs=A,this.updater=xe||y}S.prototype.isReactComponent={},S.prototype.setState=function(N,$){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,$,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=S.prototype;function O(N,$,xe){this.props=N,this.context=$,this.refs=A,this.updater=xe||y}var U=O.prototype=new _;U.constructor=O,E(U,S.prototype),U.isPureReactComponent=!0;var D=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function I(N,$,xe,Me,Q,de){return xe=de.ref,{$$typeof:s,type:N,key:$,ref:xe!==void 0?xe:null,props:de}}function X(N,$){return I(N.type,$,void 0,void 0,void 0,N.props)}function w(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function C(N){var $={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(xe){return $[xe]})}var H=/\/+/g;function oe(N,$){return typeof N=="object"&&N!==null&&N.key!=null?C(""+N.key):$.toString(36)}function se(){}function _e(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(se,se):(N.status="pending",N.then(function($){N.status==="pending"&&(N.status="fulfilled",N.value=$)},function($){N.status==="pending"&&(N.status="rejected",N.reason=$)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ce(N,$,xe,Me,Q){var de=typeof N;(de==="undefined"||de==="boolean")&&(N=null);var ye=!1;if(N===null)ye=!0;else switch(de){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(N.$$typeof){case s:case e:ye=!0;break;case g:return ye=N._init,ce(ye(N._payload),$,xe,Me,Q)}}if(ye)return Q=Q(N),ye=Me===""?"."+oe(N,0):Me,D(Q)?(xe="",ye!=null&&(xe=ye.replace(H,"$&/")+"/"),ce(Q,$,xe,"",function(ot){return ot})):Q!=null&&(w(Q)&&(Q=X(Q,xe+(Q.key==null||N&&N.key===Q.key?"":(""+Q.key).replace(H,"$&/")+"/")+ye)),$.push(Q)),1;ye=0;var Re=Me===""?".":Me+":";if(D(N))for(var Le=0;Le<N.length;Le++)Me=N[Le],de=Re+oe(Me,Le),ye+=ce(Me,$,xe,de,Q);else if(Le=x(N),typeof Le=="function")for(N=Le.call(N),Le=0;!(Me=N.next()).done;)Me=Me.value,de=Re+oe(Me,Le++),ye+=ce(Me,$,xe,de,Q);else if(de==="object"){if(typeof N.then=="function")return ce(_e(N),$,xe,Me,Q);throw $=String(N),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return ye}function B(N,$,xe){if(N==null)return N;var Me=[],Q=0;return ce(N,Me,"","",function(de){return $.call(xe,de,Q++)}),Me}function Z(N){if(N._status===-1){var $=N._result;$=$(),$.then(function(xe){(N._status===0||N._status===-1)&&(N._status=1,N._result=xe)},function(xe){(N._status===0||N._status===-1)&&(N._status=2,N._result=xe)}),N._status===-1&&(N._status=0,N._result=$)}if(N._status===1)return N._result.default;throw N._result}var Y=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Ee(){}return rt.Children={map:B,forEach:function(N,$,xe){B(N,function(){$.apply(this,arguments)},xe)},count:function(N){var $=0;return B(N,function(){$++}),$},toArray:function(N){return B(N,function($){return $})||[]},only:function(N){if(!w(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},rt.Component=S,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=O,rt.StrictMode=r,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,rt.__COMPILER_RUNTIME={__proto__:null,c:function(N){return F.H.useMemoCache(N)}},rt.cache=function(N){return function(){return N.apply(null,arguments)}},rt.cloneElement=function(N,$,xe){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Me=E({},N.props),Q=N.key,de=void 0;if($!=null)for(ye in $.ref!==void 0&&(de=void 0),$.key!==void 0&&(Q=""+$.key),$)!G.call($,ye)||ye==="key"||ye==="__self"||ye==="__source"||ye==="ref"&&$.ref===void 0||(Me[ye]=$[ye]);var ye=arguments.length-2;if(ye===1)Me.children=xe;else if(1<ye){for(var Re=Array(ye),Le=0;Le<ye;Le++)Re[Le]=arguments[Le+2];Me.children=Re}return I(N.type,Q,void 0,void 0,de,Me)},rt.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},rt.createElement=function(N,$,xe){var Me,Q={},de=null;if($!=null)for(Me in $.key!==void 0&&(de=""+$.key),$)G.call($,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(Q[Me]=$[Me]);var ye=arguments.length-2;if(ye===1)Q.children=xe;else if(1<ye){for(var Re=Array(ye),Le=0;Le<ye;Le++)Re[Le]=arguments[Le+2];Q.children=Re}if(N&&N.defaultProps)for(Me in ye=N.defaultProps,ye)Q[Me]===void 0&&(Q[Me]=ye[Me]);return I(N,de,void 0,void 0,null,Q)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(N){return{$$typeof:d,render:N}},rt.isValidElement=w,rt.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:Z}},rt.memo=function(N,$){return{$$typeof:p,type:N,compare:$===void 0?null:$}},rt.startTransition=function(N){var $=F.T,xe={};F.T=xe;try{var Me=N(),Q=F.S;Q!==null&&Q(xe,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(Ee,Y)}catch(de){Y(de)}finally{F.T=$}},rt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},rt.use=function(N){return F.H.use(N)},rt.useActionState=function(N,$,xe){return F.H.useActionState(N,$,xe)},rt.useCallback=function(N,$){return F.H.useCallback(N,$)},rt.useContext=function(N){return F.H.useContext(N)},rt.useDebugValue=function(){},rt.useDeferredValue=function(N,$){return F.H.useDeferredValue(N,$)},rt.useEffect=function(N,$,xe){var Me=F.H;if(typeof xe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Me.useEffect(N,$)},rt.useId=function(){return F.H.useId()},rt.useImperativeHandle=function(N,$,xe){return F.H.useImperativeHandle(N,$,xe)},rt.useInsertionEffect=function(N,$){return F.H.useInsertionEffect(N,$)},rt.useLayoutEffect=function(N,$){return F.H.useLayoutEffect(N,$)},rt.useMemo=function(N,$){return F.H.useMemo(N,$)},rt.useOptimistic=function(N,$){return F.H.useOptimistic(N,$)},rt.useReducer=function(N,$,xe){return F.H.useReducer(N,$,xe)},rt.useRef=function(N){return F.H.useRef(N)},rt.useState=function(N){return F.H.useState(N)},rt.useSyncExternalStore=function(N,$,xe){return F.H.useSyncExternalStore(N,$,xe)},rt.useTransition=function(){return F.H.useTransition()},rt.version="19.1.0",rt}var S_;function Ad(){return S_||(S_=1,$f.exports=NS()),$f.exports}var ve=Ad(),eh={exports:{}},Uo={},th={exports:{}},nh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function OS(){return y_||(y_=1,function(s){function e(B,Z){var Y=B.length;B.push(Z);e:for(;0<Y;){var Ee=Y-1>>>1,N=B[Ee];if(0<l(N,Z))B[Ee]=Z,B[Y]=N,Y=Ee;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Z=B[0],Y=B.pop();if(Y!==Z){B[0]=Y;e:for(var Ee=0,N=B.length,$=N>>>1;Ee<$;){var xe=2*(Ee+1)-1,Me=B[xe],Q=xe+1,de=B[Q];if(0>l(Me,Y))Q<N&&0>l(de,Me)?(B[Ee]=de,B[Q]=Y,Ee=Q):(B[Ee]=Me,B[xe]=Y,Ee=xe);else if(Q<N&&0>l(de,Y))B[Ee]=de,B[Q]=Y,Ee=Q;else break e}}return Z}function l(B,Z){var Y=B.sortIndex-Z.sortIndex;return Y!==0?Y:B.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,x=3,y=!1,E=!1,A=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(B){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=B)r(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(p)}}function F(B){if(A=!1,D(B),!E)if(i(m)!==null)E=!0,G||(G=!0,oe());else{var Z=i(p);Z!==null&&ce(F,Z.startTime-B)}}var G=!1,I=-1,X=5,w=-1;function C(){return S?!0:!(s.unstable_now()-w<X)}function H(){if(S=!1,G){var B=s.unstable_now();w=B;var Z=!0;try{e:{E=!1,A&&(A=!1,O(I),I=-1),y=!0;var Y=x;try{t:{for(D(B),v=i(m);v!==null&&!(v.expirationTime>B&&C());){var Ee=v.callback;if(typeof Ee=="function"){v.callback=null,x=v.priorityLevel;var N=Ee(v.expirationTime<=B);if(B=s.unstable_now(),typeof N=="function"){v.callback=N,D(B),Z=!0;break t}v===i(m)&&r(m),D(B)}else r(m);v=i(m)}if(v!==null)Z=!0;else{var $=i(p);$!==null&&ce(F,$.startTime-B),Z=!1}}break e}finally{v=null,x=Y,y=!1}Z=void 0}}finally{Z?oe():G=!1}}}var oe;if(typeof U=="function")oe=function(){U(H)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,_e=se.port2;se.port1.onmessage=H,oe=function(){_e.postMessage(null)}}else oe=function(){_(H,0)};function ce(B,Z){I=_(function(){B(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(B){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var Y=x;x=Z;try{return B()}finally{x=Y}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=x;x=B;try{return Z()}finally{x=Y}},s.unstable_scheduleCallback=function(B,Z,Y){var Ee=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Ee+Y:Ee):Y=Ee,B){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=Y+N,B={id:g++,callback:Z,priorityLevel:B,startTime:Y,expirationTime:N,sortIndex:-1},Y>Ee?(B.sortIndex=Y,e(p,B),i(m)===null&&B===i(p)&&(A?(O(I),I=-1):A=!0,ce(F,Y-Ee))):(B.sortIndex=N,e(m,B),E||y||(E=!0,G||(G=!0,oe()))),B},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(B){var Z=x;return function(){var Y=x;x=Z;try{return B.apply(this,arguments)}finally{x=Y}}}}(nh)),nh}var M_;function PS(){return M_||(M_=1,th.exports=OS()),th.exports}var ih={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function BS(){if(E_)return Cn;E_=1;var s=Ad();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Cn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},Cn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Cn.requestFormReset=function(m){r.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Cn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Cn.version="19.1.0",Cn}var T_;function IS(){if(T_)return ih.exports;T_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ih.exports=BS(),ih.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function zS(){if(b_)return Uo;b_=1;var s=PS(),e=Ad(),i=IS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),t;if(f===o)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var M=!1,T=c.child;T;){if(T===a){M=!0,a=c,o=f;break}if(T===o){M=!0,o=c,a=f;break}T=T.sibling}if(!M){for(T=f.child;T;){if(T===a){M=!0,a=f,o=c;break}if(T===o){M=!0,o=f,a=c;break}T=T.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function oe(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var se=Symbol.for("react.client.reference");function _e(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===se?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case S:return"Profiler";case A:return"StrictMode";case F:return"Suspense";case G:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case U:return(t.displayName||"Context")+".Provider";case O:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:_e(t.type)||"Memo";case X:n=t._payload,t=t._init;try{return _e(t(n))}catch{}}return null}var ce=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Ee=[],N=-1;function $(t){return{current:t}}function xe(t){0>N||(t.current=Ee[N],Ee[N]=null,N--)}function Me(t,n){N++,Ee[N]=t.current,t.current=n}var Q=$(null),de=$(null),ye=$(null),Re=$(null);function Le(t,n){switch(Me(ye,n),Me(de,t),Me(Q,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Wg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Wg(n),t=qg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}xe(Q),Me(Q,t)}function ot(){xe(Q),xe(de),xe(ye)}function Ke(t){t.memoizedState!==null&&Me(Re,t);var n=Q.current,a=qg(n,t.type);n!==a&&(Me(de,t),Me(Q,a))}function Ht(t){de.current===t&&(xe(Q),xe(de)),Re.current===t&&(xe(Re),bo._currentValue=Y)}var It=Object.prototype.hasOwnProperty,ft=s.unstable_scheduleCallback,z=s.unstable_cancelCallback,Pn=s.unstable_shouldYield,gt=s.unstable_requestPaint,it=s.unstable_now,We=s.unstable_getCurrentPriorityLevel,Ut=s.unstable_ImmediatePriority,Ve=s.unstable_UserBlockingPriority,L=s.unstable_NormalPriority,b=s.unstable_LowPriority,ee=s.unstable_IdlePriority,pe=s.log,Te=s.unstable_setDisableYieldValue,fe=null,Pe=null;function Ce(t){if(typeof pe=="function"&&Te(t),Pe&&typeof Pe.setStrictMode=="function")try{Pe.setStrictMode(fe,t)}catch{}}var Ge=Math.clz32?Math.clz32:Fe,$e=Math.log,Ae=Math.LN2;function Fe(t){return t>>>=0,t===0?32:31-($e(t)/Ae|0)|0}var je=256,Qe=4194304;function Be(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ut(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?c=Be(o):(M&=T,M!==0?c=Be(M):a||(a=T&~t,a!==0&&(c=Be(a))))):(T=o&~f,T!==0?c=Be(T):M!==0?c=Be(M):a||(a=o&~t,a!==0&&(c=Be(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function nt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Lt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var t=je;return je<<=1,(je&4194048)===0&&(je=256),t}function Ne(){var t=Qe;return Qe<<=1,(Qe&62914560)===0&&(Qe=4194304),t}function le(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function me(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ie(t,n,a,o,c,f){var M=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,P=t.expirationTimes,J=t.hiddenUpdates;for(a=M&~a;0<a;){var ue=31-Ge(a),ge=1<<ue;T[ue]=0,P[ue]=-1;var te=J[ue];if(te!==null)for(J[ue]=null,ue=0;ue<te.length;ue++){var ne=te[ue];ne!==null&&(ne.lane&=-536870913)}a&=~ge}o!==0&&Oe(t,o,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(M&~n))}function Oe(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ge(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function at(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ge(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function Gt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function tn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Et(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:f_(t.type))}function Xn(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var dn=Math.random().toString(36).slice(2),on="__reactFiber$"+dn,Sn="__reactProps$"+dn,Bn="__reactContainer$"+dn,ja="__reactEvents$"+dn,el="__reactListeners$"+dn,tl="__reactHandles$"+dn,Za="__reactResources$"+dn,ua="__reactMarker$"+dn;function ca(t){delete t[on],delete t[Sn],delete t[ja],delete t[el],delete t[tl]}function Li(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Bn]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Kg(t);t!==null;){if(a=t[on])return a;t=Kg(t)}return n}t=a,a=t.parentNode}return null}function Ni(t){if(t=t[on]||t[Bn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ka(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function fa(t){var n=t[Za];return n||(n=t[Za]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(t){t[ua]=!0}var nl=new Set,il={};function Oi(t,n){R(t,n),R(t+"Capture",n)}function R(t,n){for(il[t]=n,t=0;t<n.length;t++)nl.add(n[t])}var q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},ae={};function j(t){return It.call(ae,t)?!0:It.call(ie,t)?!1:q.test(t)?ae[t]=!0:(ie[t]=!0,!1)}function be(t,n,a){if(j(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function we(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function De(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var ze,et;function qe(t){if(ze===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ze=n&&n[1]||"",et=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ze+t+et}var Xe=!1;function dt(t,n){if(!t||Xe)return"";Xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(ne){var te=ne}Reflect.construct(t,[],ge)}else{try{ge.call()}catch(ne){te=ne}t.call(ge.prototype)}}else{try{throw Error()}catch(ne){te=ne}(ge=t())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(ne){if(ne&&te&&typeof ne.stack=="string")return[ne.stack,te.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),M=f[0],T=f[1];if(M&&T){var P=M.split(`
`),J=T.split(`
`);for(c=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(o===P.length||c===J.length)for(o=P.length-1,c=J.length-1;1<=o&&0<=c&&P[o]!==J[c];)c--;for(;1<=o&&0<=c;o--,c--)if(P[o]!==J[c]){if(o!==1||c!==1)do if(o--,c--,0>c||P[o]!==J[c]){var ue=`
`+P[o].replace(" at new "," at ");return t.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",t.displayName)),ue}while(1<=o&&0<=c);break}}}finally{Xe=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?qe(a):""}function Tt(t){switch(t.tag){case 26:case 27:case 5:return qe(t.type);case 16:return qe("Lazy");case 13:return qe("Suspense");case 19:return qe("SuspenseList");case 0:case 15:return dt(t.type,!1);case 11:return dt(t.type.render,!1);case 1:return dt(t.type,!0);case 31:return qe("Activity");default:return""}}function Wt(t){try{var n="";do n+=Tt(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function _t(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(t){var n=vt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(M){o=""+M,f.call(this,M)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function jt(t){t._valueTracker||(t._valueTracker=Ye(t))}function yt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=vt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function bn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ha=/[\n"\\]/g;function Vt(t){return t.replace(ha,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pi(t,n,a,o,c,f,M,T){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),n!=null?M==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+_t(n)):t.value!==""+_t(n)&&(t.value=""+_t(n)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),n!=null?An(t,M,_t(n)):a!=null?An(t,M,_t(a)):o!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+_t(T):t.removeAttribute("name")}function zt(t,n,a,o,c,f,M,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+_t(a):"",n=n!=null?""+_t(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M)}function An(t,n,a){n==="number"&&bn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ln(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+_t(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function pn(t,n,a){if(n!=null&&(n=""+_t(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+_t(a):""}function yn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ce(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=_t(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function Mi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Bi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wd(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Bi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function qd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Wd(t,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Wd(t,f,n[f])}function Ku(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var w0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),D0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function al(t){return D0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Qu=null;function Ju(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lr=null,Nr=null;function Yd(t){var n=Ni(t);if(n&&(t=n.stateNode)){var a=t[Sn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Pi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[Sn]||null;if(!c)throw Error(r(90));Pi(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&yt(o)}break e;case"textarea":pn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ln(t,!!a.multiple,n,!1)}}}var $u=!1;function jd(t,n,a){if($u)return t(n,a);$u=!0;try{var o=t(n);return o}finally{if($u=!1,(Lr!==null||Nr!==null)&&(kl(),Lr&&(n=Lr,t=Nr,Nr=Lr=null,Yd(n),t)))for(n=0;n<t.length;n++)Yd(t[n])}}function Is(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Sn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ec=!1;if(Ii)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){ec=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{ec=!1}var da=null,tc=null,rl=null;function Zd(){if(rl)return rl;var t,n=tc,a=n.length,o,c="value"in da?da.value:da.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var M=a-t;for(o=1;o<=M&&n[a-o]===c[f-o];o++);return rl=c.slice(t,1<o?1-o:void 0)}function sl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ol(){return!0}function Kd(){return!1}function In(t){function n(a,o,c,f,M){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=M,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ol:Kd,this.isPropagationStopped=Kd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=In(Qa),Fs=g({},Qa,{view:0,detail:0}),U0=In(Fs),nc,ic,Hs,ul=g({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hs&&(Hs&&t.type==="mousemove"?(nc=t.screenX-Hs.screenX,ic=t.screenY-Hs.screenY):ic=nc=0,Hs=t),nc)},movementY:function(t){return"movementY"in t?t.movementY:ic}}),Qd=In(ul),L0=g({},ul,{dataTransfer:0}),N0=In(L0),O0=g({},Fs,{relatedTarget:0}),ac=In(O0),P0=g({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),B0=In(P0),I0=g({},Qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),z0=In(I0),F0=g({},Qa,{data:0}),Jd=In(F0),H0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=V0[t])?!!n[t]:!1}function rc(){return k0}var X0=g({},Fs,{key:function(t){if(t.key){var n=H0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?G0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rc,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),W0=In(X0),q0=g({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$d=In(q0),Y0=g({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rc}),j0=In(Y0),Z0=g({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),K0=In(Z0),Q0=g({},ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),J0=In(Q0),$0=g({},Qa,{newState:0,oldState:0}),ex=In($0),tx=[9,13,27,32],sc=Ii&&"CompositionEvent"in window,Gs=null;Ii&&"documentMode"in document&&(Gs=document.documentMode);var nx=Ii&&"TextEvent"in window&&!Gs,ep=Ii&&(!sc||Gs&&8<Gs&&11>=Gs),tp=" ",np=!1;function ip(t,n){switch(t){case"keyup":return tx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ap(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Or=!1;function ix(t,n){switch(t){case"compositionend":return ap(n);case"keypress":return n.which!==32?null:(np=!0,tp);case"textInput":return t=n.data,t===tp&&np?null:t;default:return null}}function ax(t,n){if(Or)return t==="compositionend"||!sc&&ip(t,n)?(t=Zd(),rl=tc=da=null,Or=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ep&&n.locale!=="ko"?null:n.data;default:return null}}var rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!rx[t.type]:n==="textarea"}function sp(t,n,a,o){Lr?Nr?Nr.push(o):Nr=[o]:Lr=o,n=Zl(n,"onChange"),0<n.length&&(a=new ll("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Vs=null,ks=null;function sx(t){Hg(t,0)}function cl(t){var n=Ka(t);if(yt(n))return t}function op(t,n){if(t==="change")return n}var lp=!1;if(Ii){var oc;if(Ii){var lc="oninput"in document;if(!lc){var up=document.createElement("div");up.setAttribute("oninput","return;"),lc=typeof up.oninput=="function"}oc=lc}else oc=!1;lp=oc&&(!document.documentMode||9<document.documentMode)}function cp(){Vs&&(Vs.detachEvent("onpropertychange",fp),ks=Vs=null)}function fp(t){if(t.propertyName==="value"&&cl(ks)){var n=[];sp(n,ks,t,Ju(t)),jd(sx,n)}}function ox(t,n,a){t==="focusin"?(cp(),Vs=n,ks=a,Vs.attachEvent("onpropertychange",fp)):t==="focusout"&&cp()}function lx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cl(ks)}function ux(t,n){if(t==="click")return cl(n)}function cx(t,n){if(t==="input"||t==="change")return cl(n)}function fx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:fx;function Xs(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!It.call(n,c)||!Wn(t[c],n[c]))return!1}return!0}function hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dp(t,n){var a=hp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=hp(a)}}function pp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?pp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function mp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=bn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=bn(t.document)}return n}function uc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var hx=Ii&&"documentMode"in document&&11>=document.documentMode,Pr=null,cc=null,Ws=null,fc=!1;function gp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fc||Pr==null||Pr!==bn(o)||(o=Pr,"selectionStart"in o&&uc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ws&&Xs(Ws,o)||(Ws=o,o=Zl(cc,"onSelect"),0<o.length&&(n=new ll("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Pr)))}function Ja(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Br={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},hc={},_p={};Ii&&(_p=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function $a(t){if(hc[t])return hc[t];if(!Br[t])return t;var n=Br[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in _p)return hc[t]=n[a];return t}var vp=$a("animationend"),xp=$a("animationiteration"),Sp=$a("animationstart"),dx=$a("transitionrun"),px=$a("transitionstart"),mx=$a("transitioncancel"),yp=$a("transitionend"),Mp=new Map,dc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");dc.push("scrollEnd");function fi(t,n){Mp.set(t,n),Oi(n,[t])}var Ep=new WeakMap;function ei(t,n){if(typeof t=="object"&&t!==null){var a=Ep.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Wt(n)},Ep.set(t,n),n)}return{value:t,source:n,stack:Wt(n)}}var ti=[],Ir=0,pc=0;function fl(){for(var t=Ir,n=pc=Ir=0;n<t;){var a=ti[n];ti[n++]=null;var o=ti[n];ti[n++]=null;var c=ti[n];ti[n++]=null;var f=ti[n];if(ti[n++]=null,o!==null&&c!==null){var M=o.pending;M===null?c.next=c:(c.next=M.next,M.next=c),o.pending=c}f!==0&&Tp(a,c,f)}}function hl(t,n,a,o){ti[Ir++]=t,ti[Ir++]=n,ti[Ir++]=a,ti[Ir++]=o,pc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function mc(t,n,a,o){return hl(t,n,a,o),dl(t)}function zr(t,n){return hl(t,null,null,n),dl(t)}function Tp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Ge(a),t=f.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function dl(t){if(50<_o)throw _o=0,Mf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Fr={};function gx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,o){return new gx(t,n,a,o)}function gc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zi(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function bp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function pl(t,n,a,o,c,f){var M=0;if(o=t,typeof t=="function")gc(t)&&(M=1);else if(typeof t=="string")M=vS(t,a,Q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=qn(31,a,n,c),t.elementType=w,t.lanes=f,t;case E:return er(a.children,c,f,n);case A:M=8,c|=24;break;case S:return t=qn(12,a,n,c|2),t.elementType=S,t.lanes=f,t;case F:return t=qn(13,a,n,c),t.elementType=F,t.lanes=f,t;case G:return t=qn(19,a,n,c),t.elementType=G,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case U:M=10;break e;case O:M=9;break e;case D:M=11;break e;case I:M=14;break e;case X:M=16,o=null;break e}M=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=qn(M,a,n,c),n.elementType=t,n.type=o,n.lanes=f,n}function er(t,n,a,o){return t=qn(7,t,o,n),t.lanes=a,t}function _c(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function vc(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Hr=[],Gr=0,ml=null,gl=0,ni=[],ii=0,tr=null,Fi=1,Hi="";function nr(t,n){Hr[Gr++]=gl,Hr[Gr++]=ml,ml=t,gl=n}function Ap(t,n,a){ni[ii++]=Fi,ni[ii++]=Hi,ni[ii++]=tr,tr=t;var o=Fi;t=Hi;var c=32-Ge(o)-1;o&=~(1<<c),a+=1;var f=32-Ge(n)+c;if(30<f){var M=c-c%5;f=(o&(1<<M)-1).toString(32),o>>=M,c-=M,Fi=1<<32-Ge(n)+c|a<<c|o,Hi=f+t}else Fi=1<<f|a<<c|o,Hi=t}function xc(t){t.return!==null&&(nr(t,1),Ap(t,1,0))}function Sc(t){for(;t===ml;)ml=Hr[--Gr],Hr[Gr]=null,gl=Hr[--Gr],Hr[Gr]=null;for(;t===tr;)tr=ni[--ii],ni[ii]=null,Hi=ni[--ii],ni[ii]=null,Fi=ni[--ii],ni[ii]=null}var Ln=null,Zt=null,Rt=!1,ir=null,Ei=!1,yc=Error(r(519));function ar(t){var n=Error(r(418,""));throw js(ei(n,t)),yc}function Rp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[on]=t,n[Sn]=o,a){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)mt(xo[a],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),zt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),jt(n);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),yn(n,o.value,o.defaultValue,o.children),jt(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Xg(n.textContent,a)?(o.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),o.onScroll!=null&&mt("scroll",n),o.onScrollEnd!=null&&mt("scrollend",n),o.onClick!=null&&(n.onclick=Kl),n=!0):n=!1,n||ar(t)}function Cp(t){for(Ln=t.return;Ln;)switch(Ln.tag){case 5:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:Ln=Ln.return}}function qs(t){if(t!==Ln)return!1;if(!Rt)return Cp(t),Rt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||zf(t.type,t.memoizedProps)),a=!a),a&&Zt&&ar(t),Cp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Zt=di(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Zt=null}}else n===27?(n=Zt,wa(t.type)?(t=Vf,Vf=null,Zt=t):Zt=n):Zt=Ln?di(t.stateNode.nextSibling):null;return!0}function Ys(){Zt=Ln=null,Rt=!1}function wp(){var t=ir;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),ir=null),t}function js(t){ir===null?ir=[t]:ir.push(t)}var Mc=$(null),rr=null,Gi=null;function pa(t,n,a){Me(Mc,n._currentValue),n._currentValue=a}function Vi(t){t._currentValue=Mc.current,xe(Mc)}function Ec(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Tc(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var M=c.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=c;for(var P=0;P<n.length;P++)if(T.context===n[P]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Ec(f.return,a,t),o||(M=null);break e}f=T.next}}else if(c.tag===18){if(M=c.return,M===null)throw Error(r(341));M.lanes|=a,f=M.alternate,f!==null&&(f.lanes|=a),Ec(M,a,t),M=null}else M=c.child;if(M!==null)M.return=c;else for(M=c;M!==null;){if(M===t){M=null;break}if(c=M.sibling,c!==null){c.return=M.return,M=c;break}M=M.return}c=M}}function Zs(t,n,a,o){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var M=c.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var T=c.type;Wn(c.pendingProps.value,M.value)||(t!==null?t.push(T):t=[T])}}else if(c===Re.current){if(M=c.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(bo):t=[bo])}c=c.return}t!==null&&Tc(n,t,a,o),n.flags|=262144}function _l(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function sr(t){rr=t,Gi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return Dp(rr,t)}function vl(t,n){return rr===null&&sr(t),Dp(t,n)}function Dp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(t===null)throw Error(r(308));Gi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Gi=Gi.next=n;return a}var _x=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},vx=s.unstable_scheduleCallback,xx=s.unstable_NormalPriority,un={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bc(){return{controller:new _x,data:new Map,refCount:0}}function Ks(t){t.refCount--,t.refCount===0&&vx(xx,function(){t.controller.abort()})}var Qs=null,Ac=0,Vr=0,kr=null;function Sx(t,n){if(Qs===null){var a=Qs=[];Ac=0,Vr=wf(),kr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ac++,n.then(Up,Up),n}function Up(){if(--Ac===0&&Qs!==null){kr!==null&&(kr.status="fulfilled");var t=Qs;Qs=null,Vr=0,kr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function yx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Lp=B.S;B.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Sx(t,n),Lp!==null&&Lp(t,n)};var or=$(null);function Rc(){var t=or.current;return t!==null?t:kt.pooledCache}function xl(t,n){n===null?Me(or,or.current):Me(or,n.pool)}function Np(){var t=Rc();return t===null?null:{parent:un._currentValue,pool:t}}var Js=Error(r(460)),Op=Error(r(474)),Sl=Error(r(542)),Cc={then:function(){}};function Pp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function yl(){}function Bp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(yl,yl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,zp(t),t;default:if(typeof n.status=="string")n.then(yl,yl);else{if(t=kt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,zp(t),t}throw $s=n,Js}}var $s=null;function Ip(){if($s===null)throw Error(r(459));var t=$s;return $s=null,t}function zp(t){if(t===Js||t===Sl)throw Error(r(483))}var ma=!1;function wc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ga(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function _a(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(wt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=dl(t),Tp(t,null,a),n}return hl(t,o,n,a),dl(t)}function eo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,at(t,a)}}function Uc(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=M:f=f.next=M,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Lc=!1;function to(){if(Lc){var t=kr;if(t!==null)throw t}}function no(t,n,a,o){Lc=!1;var c=t.updateQueue;ma=!1;var f=c.firstBaseUpdate,M=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var P=T,J=P.next;P.next=null,M===null?f=J:M.next=J,M=P;var ue=t.alternate;ue!==null&&(ue=ue.updateQueue,T=ue.lastBaseUpdate,T!==M&&(T===null?ue.firstBaseUpdate=J:T.next=J,ue.lastBaseUpdate=P))}if(f!==null){var ge=c.baseState;M=0,ue=J=P=null,T=f;do{var te=T.lane&-536870913,ne=te!==T.lane;if(ne?(St&te)===te:(o&te)===te){te!==0&&te===Vr&&(Lc=!0),ue!==null&&(ue=ue.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var tt=t,Ze=T;te=n;var Pt=a;switch(Ze.tag){case 1:if(tt=Ze.payload,typeof tt=="function"){ge=tt.call(Pt,ge,te);break e}ge=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=Ze.payload,te=typeof tt=="function"?tt.call(Pt,ge,te):tt,te==null)break e;ge=g({},ge,te);break e;case 2:ma=!0}}te=T.callback,te!==null&&(t.flags|=64,ne&&(t.flags|=8192),ne=c.callbacks,ne===null?c.callbacks=[te]:ne.push(te))}else ne={lane:te,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ue===null?(J=ue=ne,P=ge):ue=ue.next=ne,M|=te;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ne=T,T=ne.next,ne.next=null,c.lastBaseUpdate=ne,c.shared.pending=null}}while(!0);ue===null&&(P=ge),c.baseState=P,c.firstBaseUpdate=J,c.lastBaseUpdate=ue,f===null&&(c.shared.lanes=0),ba|=M,t.lanes=M,t.memoizedState=ge}}function Fp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Hp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Fp(a[t],n)}var Xr=$(null),Ml=$(0);function Gp(t,n){t=Zi,Me(Ml,t),Me(Xr,n),Zi=t|n.baseLanes}function Nc(){Me(Ml,Zi),Me(Xr,Xr.current)}function Oc(){Zi=Ml.current,xe(Xr),xe(Ml)}var va=0,ct=null,Nt=null,an=null,El=!1,Wr=!1,lr=!1,Tl=0,io=0,qr=null,Mx=0;function $t(){throw Error(r(321))}function Pc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function Bc(t,n,a,o,c,f){return va=f,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?Tm:bm,lr=!1,f=a(o,c),lr=!1,Wr&&(f=kp(n,a,o,c)),Vp(t),f}function Vp(t){B.H=Dl;var n=Nt!==null&&Nt.next!==null;if(va=0,an=Nt=ct=null,El=!1,io=0,qr=null,n)throw Error(r(300));t===null||mn||(t=t.dependencies,t!==null&&_l(t)&&(mn=!0))}function kp(t,n,a,o){ct=t;var c=0;do{if(Wr&&(qr=null),io=0,Wr=!1,25<=c)throw Error(r(301));if(c+=1,an=Nt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=wx,f=n(a,o)}while(Wr);return f}function Ex(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?ao(n):n,t=t.useState()[0],(Nt!==null?Nt.memoizedState:null)!==t&&(ct.flags|=1024),n}function Ic(){var t=Tl!==0;return Tl=0,t}function zc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Fc(t){if(El){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}El=!1}va=0,an=Nt=ct=null,Wr=!1,io=Tl=0,qr=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?ct.memoizedState=an=t:an=an.next=t,an}function rn(){if(Nt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var n=an===null?ct.memoizedState:an.next;if(n!==null)an=n,Nt=t;else{if(t===null)throw ct.alternate===null?Error(r(467)):Error(r(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},an===null?ct.memoizedState=an=t:an=an.next=t}return an}function Hc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ao(t){var n=io;return io+=1,qr===null&&(qr=[]),t=Bp(qr,t,n),n=ct,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Tm:bm),t}function bl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ao(t);if(t.$$typeof===U)return Rn(t)}throw Error(r(438,String(t)))}function Gc(t){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ct.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Hc(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=C;return n.index++,a}function ki(t,n){return typeof n=="function"?n(t):n}function Al(t){var n=rn();return Vc(n,Nt,t)}function Vc(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,f=o.pending;if(f!==null){if(c!==null){var M=c.next;c.next=f.next,f.next=M}n.baseQueue=c=f,o.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=M=null,P=null,J=n,ue=!1;do{var ge=J.lane&-536870913;if(ge!==J.lane?(St&ge)===ge:(va&ge)===ge){var te=J.revertLane;if(te===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),ge===Vr&&(ue=!0);else if((va&te)===te){J=J.next,te===Vr&&(ue=!0);continue}else ge={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(T=P=ge,M=f):P=P.next=ge,ct.lanes|=te,ba|=te;ge=J.action,lr&&a(f,ge),f=J.hasEagerState?J.eagerState:a(f,ge)}else te={lane:ge,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(T=P=te,M=f):P=P.next=te,ct.lanes|=ge,ba|=ge;J=J.next}while(J!==null&&J!==n);if(P===null?M=f:P.next=T,!Wn(f,t.memoizedState)&&(mn=!0,ue&&(a=kr,a!==null)))throw a;t.memoizedState=f,t.baseState=M,t.baseQueue=P,o.lastRenderedState=f}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function kc(t){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var M=c=c.next;do f=t(f,M.action),M=M.next;while(M!==c);Wn(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Xp(t,n,a){var o=ct,c=rn(),f=Rt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!Wn((Nt||c).memoizedState,a);M&&(c.memoizedState=a,mn=!0),c=c.queue;var T=Yp.bind(null,o,c,t);if(ro(2048,8,T,[t]),c.getSnapshot!==n||M||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,Yr(9,Rl(),qp.bind(null,o,c,a,n),null),kt===null)throw Error(r(349));f||(va&124)!==0||Wp(o,n,a)}return a}function Wp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=Hc(),ct.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function qp(t,n,a,o){n.value=a,n.getSnapshot=o,jp(n)&&Zp(t)}function Yp(t,n,a){return a(function(){jp(n)&&Zp(t)})}function jp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function Zp(t){var n=zr(t,2);n!==null&&Qn(n,t,2)}function Xc(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),lr){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:t},n}function Kp(t,n,a,o){return t.baseState=a,Vc(t,Nt,typeof o=="function"?o:ki)}function Tx(t,n,a,o,c){if(wl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){f.listeners.push(M)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Qp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Qp(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var f=B.T,M={};B.T=M;try{var T=a(c,o),P=B.S;P!==null&&P(M,T),Jp(t,n,T)}catch(J){Wc(t,n,J)}finally{B.T=f}}else try{f=a(c,o),Jp(t,n,f)}catch(J){Wc(t,n,J)}}function Jp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){$p(t,n,o)},function(o){return Wc(t,n,o)}):$p(t,n,a)}function $p(t,n,a){n.status="fulfilled",n.value=a,em(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Qp(t,a)))}function Wc(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,em(n),n=n.next;while(n!==o)}t.action=null}function em(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function tm(t,n){return n}function nm(t,n){if(Rt){var a=kt.formState;if(a!==null){e:{var o=ct;if(Rt){if(Zt){t:{for(var c=Zt,f=Ei;c.nodeType!==8;){if(!f){c=null;break t}if(c=di(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Zt=di(c.nextSibling),o=c.data==="F!";break e}}ar(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tm,lastRenderedState:n},a.queue=o,a=ym.bind(null,ct,o),o.dispatch=a,o=Xc(!1),f=Kc.bind(null,ct,!1,o.queue),o=zn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=Tx.bind(null,ct,c,f,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function im(t){var n=rn();return am(n,Nt,t)}function am(t,n,a){if(n=Vc(t,n,tm)[0],t=Al(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ao(n)}catch(M){throw M===Js?Sl:M}else o=n;n=rn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,Yr(9,Rl(),bx.bind(null,c,a),null)),[o,f,t]}function bx(t,n){t.action=n}function rm(t){var n=rn(),a=Nt;if(a!==null)return am(n,a,t);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Yr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ct.updateQueue,n===null&&(n=Hc(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Rl(){return{destroy:void 0,resource:void 0}}function sm(){return rn().memoizedState}function Cl(t,n,a,o){var c=zn();o=o===void 0?null:o,ct.flags|=t,c.memoizedState=Yr(1|n,Rl(),a,o)}function ro(t,n,a,o){var c=rn();o=o===void 0?null:o;var f=c.memoizedState.inst;Nt!==null&&o!==null&&Pc(o,Nt.memoizedState.deps)?c.memoizedState=Yr(n,f,a,o):(ct.flags|=t,c.memoizedState=Yr(1|n,f,a,o))}function om(t,n){Cl(8390656,8,t,n)}function lm(t,n){ro(2048,8,t,n)}function um(t,n){return ro(4,2,t,n)}function cm(t,n){return ro(4,4,t,n)}function fm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function hm(t,n,a){a=a!=null?a.concat([t]):null,ro(4,4,fm.bind(null,n,t),a)}function qc(){}function dm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Pc(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function pm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Pc(n,o[1]))return o[0];if(o=t(),lr){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o}function Yc(t,n,a){return a===void 0||(va&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=_g(),ct.lanes|=t,ba|=t,a)}function mm(t,n,a,o){return Wn(a,n)?a:Xr.current!==null?(t=Yc(t,a,o),Wn(t,n)||(mn=!0),t):(va&42)===0?(mn=!0,t.memoizedState=a):(t=_g(),ct.lanes|=t,ba|=t,n)}function gm(t,n,a,o,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var M=B.T,T={};B.T=T,Kc(t,!1,n,a);try{var P=c(),J=B.S;if(J!==null&&J(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ue=yx(P,o);so(t,n,ue,Kn(t))}else so(t,n,o,Kn(t))}catch(ge){so(t,n,{then:function(){},status:"rejected",reason:ge},Kn())}finally{Z.p=f,B.T=M}}function Ax(){}function jc(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=_m(t).queue;gm(t,c,n,Y,a===null?Ax:function(){return vm(t),a(o)})}function _m(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function vm(t){var n=_m(t).next.queue;so(t,n,{},Kn())}function Zc(){return Rn(bo)}function xm(){return rn().memoizedState}function Sm(){return rn().memoizedState}function Rx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();t=ga(a);var o=_a(n,t,a);o!==null&&(Qn(o,n,a),eo(o,n,a)),n={cache:bc()},t.payload=n;return}n=n.return}}function Cx(t,n,a){var o=Kn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},wl(t)?Mm(n,a):(a=mc(t,n,a,o),a!==null&&(Qn(a,t,o),Em(a,n,o)))}function ym(t,n,a){var o=Kn();so(t,n,a,o)}function so(t,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(wl(t))Mm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var M=n.lastRenderedState,T=f(M,a);if(c.hasEagerState=!0,c.eagerState=T,Wn(T,M))return hl(t,n,c,0),kt===null&&fl(),!1}catch{}finally{}if(a=mc(t,n,c,o),a!==null)return Qn(a,t,o),Em(a,n,o),!0}return!1}function Kc(t,n,a,o){if(o={lane:2,revertLane:wf(),action:o,hasEagerState:!1,eagerState:null,next:null},wl(t)){if(n)throw Error(r(479))}else n=mc(t,a,o,2),n!==null&&Qn(n,t,2)}function wl(t){var n=t.alternate;return t===ct||n!==null&&n===ct}function Mm(t,n){Wr=El=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Em(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,at(t,a)}}var Dl={readContext:Rn,use:bl,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t},Tm={readContext:Rn,use:bl,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:om,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Cl(4194308,4,fm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Cl(4194308,4,t,n)},useInsertionEffect:function(t,n){Cl(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var o=t();if(lr){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=zn();if(a!==void 0){var c=a(n);if(lr){Ce(!0);try{a(n)}finally{Ce(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=Cx.bind(null,ct,t),[o.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=Xc(t);var n=t.queue,a=ym.bind(null,ct,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:qc,useDeferredValue:function(t,n){var a=zn();return Yc(a,t,n)},useTransition:function(){var t=Xc(!1);return t=gm.bind(null,ct,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ct,c=zn();if(Rt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),kt===null)throw Error(r(349));(St&124)!==0||Wp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,om(Yp.bind(null,o,f,t),[t]),o.flags|=2048,Yr(9,Rl(),qp.bind(null,o,f,a,n),null),a},useId:function(){var t=zn(),n=kt.identifierPrefix;if(Rt){var a=Hi,o=Fi;a=(o&~(1<<32-Ge(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Mx++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Zc,useFormState:nm,useActionState:nm,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Kc.bind(null,ct,!0,a),a.dispatch=n,[t,n]},useMemoCache:Gc,useCacheRefresh:function(){return zn().memoizedState=Rx.bind(null,ct)}},bm={readContext:Rn,use:bl,useCallback:dm,useContext:Rn,useEffect:lm,useImperativeHandle:hm,useInsertionEffect:um,useLayoutEffect:cm,useMemo:pm,useReducer:Al,useRef:sm,useState:function(){return Al(ki)},useDebugValue:qc,useDeferredValue:function(t,n){var a=rn();return mm(a,Nt.memoizedState,t,n)},useTransition:function(){var t=Al(ki)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:ao(t),n]},useSyncExternalStore:Xp,useId:xm,useHostTransitionStatus:Zc,useFormState:im,useActionState:im,useOptimistic:function(t,n){var a=rn();return Kp(a,Nt,t,n)},useMemoCache:Gc,useCacheRefresh:Sm},wx={readContext:Rn,use:bl,useCallback:dm,useContext:Rn,useEffect:lm,useImperativeHandle:hm,useInsertionEffect:um,useLayoutEffect:cm,useMemo:pm,useReducer:kc,useRef:sm,useState:function(){return kc(ki)},useDebugValue:qc,useDeferredValue:function(t,n){var a=rn();return Nt===null?Yc(a,t,n):mm(a,Nt.memoizedState,t,n)},useTransition:function(){var t=kc(ki)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:ao(t),n]},useSyncExternalStore:Xp,useId:xm,useHostTransitionStatus:Zc,useFormState:rm,useActionState:rm,useOptimistic:function(t,n){var a=rn();return Nt!==null?Kp(a,Nt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Gc,useCacheRefresh:Sm},jr=null,oo=0;function Ul(t){var n=oo;return oo+=1,jr===null&&(jr=[]),Bp(jr,t,n)}function lo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ll(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Am(t){var n=t._init;return n(t._payload)}function Rm(t){function n(W,V){if(t){var K=W.deletions;K===null?(W.deletions=[V],W.flags|=16):K.push(V)}}function a(W,V){if(!t)return null;for(;V!==null;)n(W,V),V=V.sibling;return null}function o(W){for(var V=new Map;W!==null;)W.key!==null?V.set(W.key,W):V.set(W.index,W),W=W.sibling;return V}function c(W,V){return W=zi(W,V),W.index=0,W.sibling=null,W}function f(W,V,K){return W.index=K,t?(K=W.alternate,K!==null?(K=K.index,K<V?(W.flags|=67108866,V):K):(W.flags|=67108866,V)):(W.flags|=1048576,V)}function M(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function T(W,V,K,he){return V===null||V.tag!==6?(V=_c(K,W.mode,he),V.return=W,V):(V=c(V,K),V.return=W,V)}function P(W,V,K,he){var He=K.type;return He===E?ue(W,V,K.props.children,he,K.key):V!==null&&(V.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===X&&Am(He)===V.type)?(V=c(V,K.props),lo(V,K),V.return=W,V):(V=pl(K.type,K.key,K.props,null,W.mode,he),lo(V,K),V.return=W,V)}function J(W,V,K,he){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=vc(K,W.mode,he),V.return=W,V):(V=c(V,K.children||[]),V.return=W,V)}function ue(W,V,K,he,He){return V===null||V.tag!==7?(V=er(K,W.mode,he,He),V.return=W,V):(V=c(V,K),V.return=W,V)}function ge(W,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=_c(""+V,W.mode,K),V.return=W,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return K=pl(V.type,V.key,V.props,null,W.mode,K),lo(K,V),K.return=W,K;case y:return V=vc(V,W.mode,K),V.return=W,V;case X:var he=V._init;return V=he(V._payload),ge(W,V,K)}if(ce(V)||oe(V))return V=er(V,W.mode,K,null),V.return=W,V;if(typeof V.then=="function")return ge(W,Ul(V),K);if(V.$$typeof===U)return ge(W,vl(W,V),K);Ll(W,V)}return null}function te(W,V,K,he){var He=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return He!==null?null:T(W,V,""+K,he);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case x:return K.key===He?P(W,V,K,he):null;case y:return K.key===He?J(W,V,K,he):null;case X:return He=K._init,K=He(K._payload),te(W,V,K,he)}if(ce(K)||oe(K))return He!==null?null:ue(W,V,K,he,null);if(typeof K.then=="function")return te(W,V,Ul(K),he);if(K.$$typeof===U)return te(W,V,vl(W,K),he);Ll(W,K)}return null}function ne(W,V,K,he,He){if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return W=W.get(K)||null,T(V,W,""+he,He);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case x:return W=W.get(he.key===null?K:he.key)||null,P(V,W,he,He);case y:return W=W.get(he.key===null?K:he.key)||null,J(V,W,he,He);case X:var ht=he._init;return he=ht(he._payload),ne(W,V,K,he,He)}if(ce(he)||oe(he))return W=W.get(K)||null,ue(V,W,he,He,null);if(typeof he.then=="function")return ne(W,V,K,Ul(he),He);if(he.$$typeof===U)return ne(W,V,K,vl(V,he),He);Ll(V,he)}return null}function tt(W,V,K,he){for(var He=null,ht=null,ke=V,Je=V=0,_n=null;ke!==null&&Je<K.length;Je++){ke.index>Je?(_n=ke,ke=null):_n=ke.sibling;var bt=te(W,ke,K[Je],he);if(bt===null){ke===null&&(ke=_n);break}t&&ke&&bt.alternate===null&&n(W,ke),V=f(bt,V,Je),ht===null?He=bt:ht.sibling=bt,ht=bt,ke=_n}if(Je===K.length)return a(W,ke),Rt&&nr(W,Je),He;if(ke===null){for(;Je<K.length;Je++)ke=ge(W,K[Je],he),ke!==null&&(V=f(ke,V,Je),ht===null?He=ke:ht.sibling=ke,ht=ke);return Rt&&nr(W,Je),He}for(ke=o(ke);Je<K.length;Je++)_n=ne(ke,W,Je,K[Je],he),_n!==null&&(t&&_n.alternate!==null&&ke.delete(_n.key===null?Je:_n.key),V=f(_n,V,Je),ht===null?He=_n:ht.sibling=_n,ht=_n);return t&&ke.forEach(function(Oa){return n(W,Oa)}),Rt&&nr(W,Je),He}function Ze(W,V,K,he){if(K==null)throw Error(r(151));for(var He=null,ht=null,ke=V,Je=V=0,_n=null,bt=K.next();ke!==null&&!bt.done;Je++,bt=K.next()){ke.index>Je?(_n=ke,ke=null):_n=ke.sibling;var Oa=te(W,ke,bt.value,he);if(Oa===null){ke===null&&(ke=_n);break}t&&ke&&Oa.alternate===null&&n(W,ke),V=f(Oa,V,Je),ht===null?He=Oa:ht.sibling=Oa,ht=Oa,ke=_n}if(bt.done)return a(W,ke),Rt&&nr(W,Je),He;if(ke===null){for(;!bt.done;Je++,bt=K.next())bt=ge(W,bt.value,he),bt!==null&&(V=f(bt,V,Je),ht===null?He=bt:ht.sibling=bt,ht=bt);return Rt&&nr(W,Je),He}for(ke=o(ke);!bt.done;Je++,bt=K.next())bt=ne(ke,W,Je,bt.value,he),bt!==null&&(t&&bt.alternate!==null&&ke.delete(bt.key===null?Je:bt.key),V=f(bt,V,Je),ht===null?He=bt:ht.sibling=bt,ht=bt);return t&&ke.forEach(function(DS){return n(W,DS)}),Rt&&nr(W,Je),He}function Pt(W,V,K,he){if(typeof K=="object"&&K!==null&&K.type===E&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case x:e:{for(var He=K.key;V!==null;){if(V.key===He){if(He=K.type,He===E){if(V.tag===7){a(W,V.sibling),he=c(V,K.props.children),he.return=W,W=he;break e}}else if(V.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===X&&Am(He)===V.type){a(W,V.sibling),he=c(V,K.props),lo(he,K),he.return=W,W=he;break e}a(W,V);break}else n(W,V);V=V.sibling}K.type===E?(he=er(K.props.children,W.mode,he,K.key),he.return=W,W=he):(he=pl(K.type,K.key,K.props,null,W.mode,he),lo(he,K),he.return=W,W=he)}return M(W);case y:e:{for(He=K.key;V!==null;){if(V.key===He)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(W,V.sibling),he=c(V,K.children||[]),he.return=W,W=he;break e}else{a(W,V);break}else n(W,V);V=V.sibling}he=vc(K,W.mode,he),he.return=W,W=he}return M(W);case X:return He=K._init,K=He(K._payload),Pt(W,V,K,he)}if(ce(K))return tt(W,V,K,he);if(oe(K)){if(He=oe(K),typeof He!="function")throw Error(r(150));return K=He.call(K),Ze(W,V,K,he)}if(typeof K.then=="function")return Pt(W,V,Ul(K),he);if(K.$$typeof===U)return Pt(W,V,vl(W,K),he);Ll(W,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(W,V.sibling),he=c(V,K),he.return=W,W=he):(a(W,V),he=_c(K,W.mode,he),he.return=W,W=he),M(W)):a(W,V)}return function(W,V,K,he){try{oo=0;var He=Pt(W,V,K,he);return jr=null,He}catch(ke){if(ke===Js||ke===Sl)throw ke;var ht=qn(29,ke,null,W.mode);return ht.lanes=he,ht.return=W,ht}finally{}}}var Zr=Rm(!0),Cm=Rm(!1),ai=$(null),Ti=null;function xa(t){var n=t.alternate;Me(cn,cn.current&1),Me(ai,t),Ti===null&&(n===null||Xr.current!==null||n.memoizedState!==null)&&(Ti=t)}function wm(t){if(t.tag===22){if(Me(cn,cn.current),Me(ai,t),Ti===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Ti=t)}}else Sa()}function Sa(){Me(cn,cn.current),Me(ai,ai.current)}function Xi(t){xe(ai),Ti===t&&(Ti=null),xe(cn)}var cn=$(0);function Nl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Gf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Qc(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Jc={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Kn(),c=ga(o);c.payload=n,a!=null&&(c.callback=a),n=_a(t,c,o),n!==null&&(Qn(n,t,o),eo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Kn(),c=ga(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=_a(t,c,o),n!==null&&(Qn(n,t,o),eo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Kn(),o=ga(a);o.tag=2,n!=null&&(o.callback=n),n=_a(t,o,a),n!==null&&(Qn(n,t,a),eo(n,t,a))}};function Dm(t,n,a,o,c,f,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,M):n.prototype&&n.prototype.isPureReactComponent?!Xs(a,o)||!Xs(c,f):!0}function Um(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Jc.enqueueReplaceState(n,n.state,null)}function ur(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var Ol=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Lm(t){Ol(t)}function Nm(t){console.error(t)}function Om(t){Ol(t)}function Pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Pm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function $c(t,n,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(t,n)},a}function Bm(t){return t=ga(t),t.tag=3,t}function Im(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;t.payload=function(){return c(f)},t.callback=function(){Pm(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){Pm(n,a,o),typeof c!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Dx(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Zs(n,a,c,!0),a=ai.current,a!==null){switch(a.tag){case 13:return Ti===null?Tf():a.alternate===null&&Kt===0&&(Kt=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Cc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Af(t,o,c)),!1;case 22:return a.flags|=65536,o===Cc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Af(t,o,c)),!1}throw Error(r(435,a.tag))}return Af(t,o,c),Tf(),!1}if(Rt)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==yc&&(t=Error(r(422),{cause:o}),js(ei(t,a)))):(o!==yc&&(n=Error(r(423),{cause:o}),js(ei(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=ei(o,a),c=$c(t.stateNode,o,c),Uc(t,c),Kt!==4&&(Kt=2)),!1;var f=Error(r(520),{cause:o});if(f=ei(f,a),go===null?go=[f]:go.push(f),Kt!==4&&(Kt=2),n===null)return!0;o=ei(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=$c(a.stateNode,o,t),Uc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Aa===null||!Aa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Bm(c),Im(c,t,a,o),Uc(a,c),!1}a=a.return}while(a!==null);return!1}var zm=Error(r(461)),mn=!1;function Mn(t,n,a,o){n.child=t===null?Cm(n,null,a,o):Zr(n,t.child,a,o)}function Fm(t,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var M={};for(var T in o)T!=="ref"&&(M[T]=o[T])}else M=o;return sr(n),o=Bc(t,n,a,M,f,c),T=Ic(),t!==null&&!mn?(zc(t,n,c),Wi(t,n,c)):(Rt&&T&&xc(n),n.flags|=1,Mn(t,n,o,c),n.child)}function Hm(t,n,a,o,c){if(t===null){var f=a.type;return typeof f=="function"&&!gc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Gm(t,n,f,o,c)):(t=pl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!lf(t,c)){var M=f.memoizedProps;if(a=a.compare,a=a!==null?a:Xs,a(M,o)&&t.ref===n.ref)return Wi(t,n,c)}return n.flags|=1,t=zi(f,o),t.ref=n.ref,t.return=n,n.child=t}function Gm(t,n,a,o,c){if(t!==null){var f=t.memoizedProps;if(Xs(f,o)&&t.ref===n.ref)if(mn=!1,n.pendingProps=o=f,lf(t,c))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,Wi(t,n,c)}return ef(t,n,a,o,c)}function Vm(t,n,a){var o=n.pendingProps,c=o.children,f=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return km(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&xl(n,f!==null?f.cachePool:null),f!==null?Gp(n,f):Nc(),wm(n);else return n.lanes=n.childLanes=536870912,km(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(xl(n,f.cachePool),Gp(n,f),Sa(),n.memoizedState=null):(t!==null&&xl(n,null),Nc(),Sa());return Mn(t,n,c,a),n.child}function km(t,n,a,o){var c=Rc();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&xl(n,null),Nc(),wm(n),t!==null&&Zs(t,n,o,!0),null}function Bl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ef(t,n,a,o,c){return sr(n),a=Bc(t,n,a,o,void 0,c),o=Ic(),t!==null&&!mn?(zc(t,n,c),Wi(t,n,c)):(Rt&&o&&xc(n),n.flags|=1,Mn(t,n,a,c),n.child)}function Xm(t,n,a,o,c,f){return sr(n),n.updateQueue=null,a=kp(n,o,a,c),Vp(t),o=Ic(),t!==null&&!mn?(zc(t,n,f),Wi(t,n,f)):(Rt&&o&&xc(n),n.flags|=1,Mn(t,n,a,f),n.child)}function Wm(t,n,a,o,c){if(sr(n),n.stateNode===null){var f=Fr,M=a.contextType;typeof M=="object"&&M!==null&&(f=Rn(M)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Jc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},wc(n),M=a.contextType,f.context=typeof M=="object"&&M!==null?Rn(M):Fr,f.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Qc(n,a,M,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(M=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),M!==f.state&&Jc.enqueueReplaceState(f,f.state,null),no(n,o,f,c),to(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,P=ur(a,T);f.props=P;var J=f.context,ue=a.contextType;M=Fr,typeof ue=="object"&&ue!==null&&(M=Rn(ue));var ge=a.getDerivedStateFromProps;ue=typeof ge=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ue||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||J!==M)&&Um(n,f,o,M),ma=!1;var te=n.memoizedState;f.state=te,no(n,o,f,c),to(),J=n.memoizedState,T||te!==J||ma?(typeof ge=="function"&&(Qc(n,a,ge,o),J=n.memoizedState),(P=ma||Dm(n,a,P,o,te,J,M))?(ue||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),f.props=o,f.state=J,f.context=M,o=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Dc(t,n),M=n.memoizedProps,ue=ur(a,M),f.props=ue,ge=n.pendingProps,te=f.context,J=a.contextType,P=Fr,typeof J=="object"&&J!==null&&(P=Rn(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M!==ge||te!==P)&&Um(n,f,o,P),ma=!1,te=n.memoizedState,f.state=te,no(n,o,f,c),to();var ne=n.memoizedState;M!==ge||te!==ne||ma||t!==null&&t.dependencies!==null&&_l(t.dependencies)?(typeof T=="function"&&(Qc(n,a,T,o),ne=n.memoizedState),(ue=ma||Dm(n,a,ue,o,te,ne,P)||t!==null&&t.dependencies!==null&&_l(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ne,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ne,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||M===t.memoizedProps&&te===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&te===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ne),f.props=o,f.state=ne,f.context=P,o=ue):(typeof f.componentDidUpdate!="function"||M===t.memoizedProps&&te===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&te===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Bl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Zr(n,t.child,null,c),n.child=Zr(n,null,a,c)):Mn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Wi(t,n,c),t}function qm(t,n,a,o){return Ys(),n.flags|=256,Mn(t,n,a,o),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(t){return{baseLanes:t,cachePool:Np()}}function af(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function Ym(t,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,M;if((M=f)||(M=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),M&&(c=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,t===null){if(Rt){if(c?xa(n):Sa(),Rt){var T=Zt,P;if(P=T){e:{for(P=T,T=Ei;P.nodeType!==8;){if(!T){T=null;break e}if(P=di(P.nextSibling),P===null){T=null;break e}}T=P}T!==null?(n.memoizedState={dehydrated:T,treeContext:tr!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},P=qn(18,null,null,0),P.stateNode=T,P.return=n,n.child=P,Ln=n,Zt=null,P=!0):P=!1}P||ar(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Gf(T)?n.lanes=32:n.lanes=536870912,null;Xi(n)}return T=o.children,o=o.fallback,c?(Sa(),c=n.mode,T=Il({mode:"hidden",children:T},c),o=er(o,c,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,c=n.child,c.memoizedState=nf(a),c.childLanes=af(t,M,a),n.memoizedState=tf,o):(xa(n),rf(n,T))}if(P=t.memoizedState,P!==null&&(T=P.dehydrated,T!==null)){if(f)n.flags&256?(xa(n),n.flags&=-257,n=sf(t,n,a)):n.memoizedState!==null?(Sa(),n.child=t.child,n.flags|=128,n=null):(Sa(),c=o.fallback,T=n.mode,o=Il({mode:"visible",children:o.children},T),c=er(c,T,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Zr(n,t.child,null,a),o=n.child,o.memoizedState=nf(a),o.childLanes=af(t,M,a),n.memoizedState=tf,n=c);else if(xa(n),Gf(T)){if(M=T.nextSibling&&T.nextSibling.dataset,M)var J=M.dgst;M=J,o=Error(r(419)),o.stack="",o.digest=M,js({value:o,source:null,stack:null}),n=sf(t,n,a)}else if(mn||Zs(t,n,a,!1),M=(a&t.childLanes)!==0,mn||M){if(M=kt,M!==null&&(o=a&-a,o=(o&42)!==0?1:Gt(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,zr(t,o),Qn(M,t,o),zm;T.data==="$?"||Tf(),n=sf(t,n,a)}else T.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=P.treeContext,Zt=di(T.nextSibling),Ln=n,Rt=!0,ir=null,Ei=!1,t!==null&&(ni[ii++]=Fi,ni[ii++]=Hi,ni[ii++]=tr,Fi=t.id,Hi=t.overflow,tr=n),n=rf(n,o.children),n.flags|=4096);return n}return c?(Sa(),c=o.fallback,T=n.mode,P=t.child,J=P.sibling,o=zi(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,J!==null?c=zi(J,c):(c=er(c,T,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,T=t.child.memoizedState,T===null?T=nf(a):(P=T.cachePool,P!==null?(J=un._currentValue,P=P.parent!==J?{parent:J,pool:J}:P):P=Np(),T={baseLanes:T.baseLanes|a,cachePool:P}),c.memoizedState=T,c.childLanes=af(t,M,a),n.memoizedState=tf,o):(xa(n),a=t.child,t=a.sibling,a=zi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(M=n.deletions,M===null?(n.deletions=[t],n.flags|=16):M.push(t)),n.child=a,n.memoizedState=null,a)}function rf(t,n){return n=Il({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Il(t,n){return t=qn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function sf(t,n,a){return Zr(n,t.child,null,a),t=rf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function jm(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Ec(t.return,n,a)}function of(t,n,a,o,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function Zm(t,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(Mn(t,n,o.children,a),o=cn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jm(t,a,n);else if(t.tag===19)jm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(Me(cn,o),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Nl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),of(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Nl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}of(n,!0,a,null,f);break;case"together":of(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Wi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ba|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Zs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=zi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=zi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function lf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&_l(t)))}function Ux(t,n,a){switch(n.tag){case 3:Le(n,n.stateNode.containerInfo),pa(n,un,t.memoizedState.cache),Ys();break;case 27:case 5:Ke(n);break;case 4:Le(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ym(t,n,a):(xa(n),t=Wi(t,n,a),t!==null?t.sibling:null);xa(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Zs(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Zm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Me(cn,cn.current),o)break;return null;case 22:case 23:return n.lanes=0,Vm(t,n,a);case 24:pa(n,un,t.memoizedState.cache)}return Wi(t,n,a)}function Km(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!lf(t,a)&&(n.flags&128)===0)return mn=!1,Ux(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,Rt&&(n.flags&1048576)!==0&&Ap(n,gl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")gc(o)?(t=ur(o,t),n.tag=1,n=Wm(null,n,o,t,a)):(n.tag=0,n=ef(null,n,o,t,a));else{if(o!=null){if(c=o.$$typeof,c===D){n.tag=11,n=Fm(null,n,o,t,a);break e}else if(c===I){n.tag=14,n=Hm(null,n,o,t,a);break e}}throw n=_e(o)||o,Error(r(306,n,""))}}return n;case 0:return ef(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=ur(o,n.pendingProps),Wm(t,n,o,c,a);case 3:e:{if(Le(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Dc(t,n),no(n,o,null,a);var M=n.memoizedState;if(o=M.cache,pa(n,un,o),o!==f.cache&&Tc(n,[un],a,!0),to(),o=M.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=qm(t,n,o,a);break e}else if(o!==c){c=ei(Error(r(424)),n),js(c),n=qm(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Zt=di(t.firstChild),Ln=n,Rt=!0,ir=null,Ei=!0,a=Cm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ys(),o===c){n=Wi(t,n,a);break e}Mn(t,n,o,a)}n=n.child}return n;case 26:return Bl(t,n),t===null?(a=e_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Rt||(a=n.type,t=n.pendingProps,o=Ql(ye.current).createElement(a),o[on]=n,o[Sn]=t,Tn(o,a,t),nn(o),n.stateNode=o):n.memoizedState=e_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ke(n),t===null&&Rt&&(o=n.stateNode=Qg(n.type,n.pendingProps,ye.current),Ln=n,Ei=!0,c=Zt,wa(n.type)?(Vf=c,Zt=di(o.firstChild)):Zt=c),Mn(t,n,n.pendingProps.children,a),Bl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Rt&&((c=o=Zt)&&(o=rS(o,n.type,n.pendingProps,Ei),o!==null?(n.stateNode=o,Ln=n,Zt=di(o.firstChild),Ei=!1,c=!0):c=!1),c||ar(n)),Ke(n),c=n.type,f=n.pendingProps,M=t!==null?t.memoizedProps:null,o=f.children,zf(c,f)?o=null:M!==null&&zf(c,M)&&(n.flags|=32),n.memoizedState!==null&&(c=Bc(t,n,Ex,null,null,a),bo._currentValue=c),Bl(t,n),Mn(t,n,o,a),n.child;case 6:return t===null&&Rt&&((t=a=Zt)&&(a=sS(a,n.pendingProps,Ei),a!==null?(n.stateNode=a,Ln=n,Zt=null,t=!0):t=!1),t||ar(n)),null;case 13:return Ym(t,n,a);case 4:return Le(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Zr(n,null,o,a):Mn(t,n,o,a),n.child;case 11:return Fm(t,n,n.type,n.pendingProps,a);case 7:return Mn(t,n,n.pendingProps,a),n.child;case 8:return Mn(t,n,n.pendingProps.children,a),n.child;case 12:return Mn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,pa(n,n.type,o.value),Mn(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,sr(n),c=Rn(c),o=o(c),n.flags|=1,Mn(t,n,o,a),n.child;case 14:return Hm(t,n,n.type,n.pendingProps,a);case 15:return Gm(t,n,n.type,n.pendingProps,a);case 19:return Zm(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=Il(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=zi(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Vm(t,n,a);case 24:return sr(n),o=Rn(un),t===null?(c=Rc(),c===null&&(c=kt,f=bc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},wc(n),pa(n,un,c)):((t.lanes&a)!==0&&(Dc(t,n),no(n,null,null,a),to()),c=t.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),pa(n,un,o)):(o=f.cache,pa(n,un,o),o!==c.cache&&Tc(n,[un],a,!0))),Mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function qi(t){t.flags|=4}function Qm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!r_(n)){if(n=ai.current,n!==null&&((St&4194048)===St?Ti!==null:(St&62914560)!==St&&(St&536870912)===0||n!==Ti))throw $s=Cc,Op;t.flags|=8192}}function zl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ne():536870912,t.lanes|=n,$r|=n)}function uo(t,n){if(!Rt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Lx(t,n,a){var o=n.pendingProps;switch(Sc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(n),null;case 1:return qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Vi(un),ot(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(qs(n)?qi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,wp())),qt(n),null;case 26:return a=n.memoizedState,t===null?(qi(n),a!==null?(qt(n),Qm(n,a)):(qt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(qi(n),qt(n),Qm(n,a)):(qt(n),n.flags&=-16777217):(t.memoizedProps!==o&&qi(n),qt(n),n.flags&=-16777217),null;case 27:Ht(n),a=ye.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qt(n),null}t=Q.current,qs(n)?Rp(n):(t=Qg(c,o,a),n.stateNode=t,qi(n))}return qt(n),null;case 5:if(Ht(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qt(n),null}if(t=Q.current,qs(n))Rp(n);else{switch(c=Ql(ye.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}t[on]=n,t[Sn]=o;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;e:switch(Tn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&qi(n)}}return qt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&qi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ye.current,qs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Ln,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Xg(t.nodeValue,a)),t||ar(n)}else t=Ql(t).createTextNode(o),t[on]=n,n.stateNode=t}return qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=qs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[on]=n}else Ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),c=!1}else c=wp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Xi(n),n):(Xi(n),null)}if(Xi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),zl(n,n.updateQueue),qt(n),null;case 4:return ot(),t===null&&Nf(n.stateNode.containerInfo),qt(n),null;case 10:return Vi(n.type),qt(n),null;case 19:if(xe(cn),c=n.memoizedState,c===null)return qt(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)uo(c,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Nl(t),f!==null){for(n.flags|=128,uo(c,!1),t=f.updateQueue,n.updateQueue=t,zl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)bp(a,t),a=a.sibling;return Me(cn,cn.current&1|2),n.child}t=t.sibling}c.tail!==null&&it()>Gl&&(n.flags|=128,o=!0,uo(c,!1),n.lanes=4194304)}else{if(!o)if(t=Nl(f),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,zl(n,t),uo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Rt)return qt(n),null}else 2*it()-c.renderingStartTime>Gl&&a!==536870912&&(n.flags|=128,o=!0,uo(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=it(),n.sibling=null,t=cn.current,Me(cn,o?t&1|2:t&1),n):(qt(n),null);case 22:case 23:return Xi(n),Oc(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qt(n),n.subtreeFlags&6&&(n.flags|=8192)):qt(n),a=n.updateQueue,a!==null&&zl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&xe(or),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(un),qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Nx(t,n){switch(Sc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Vi(un),ot(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ht(n),null;case 13:if(Xi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ys()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return xe(cn),null;case 4:return ot(),null;case 10:return Vi(n.type),null;case 22:case 23:return Xi(n),Oc(),t!==null&&xe(or),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Vi(un),null;case 25:return null;default:return null}}function Jm(t,n){switch(Sc(n),n.tag){case 3:Vi(un),ot();break;case 26:case 27:case 5:Ht(n);break;case 4:ot();break;case 13:Xi(n);break;case 19:xe(cn);break;case 10:Vi(n.type);break;case 22:case 23:Xi(n),Oc(),t!==null&&xe(or);break;case 24:Vi(un)}}function co(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var f=a.create,M=a.inst;o=f(),M.destroy=o}a=a.next}while(a!==c)}}catch(T){Ft(n,n.return,T)}}function ya(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&t)===t){var M=o.inst,T=M.destroy;if(T!==void 0){M.destroy=void 0,c=n;var P=a,J=T;try{J()}catch(ue){Ft(c,P,ue)}}}o=o.next}while(o!==f)}}catch(ue){Ft(n,n.return,ue)}}function $m(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Hp(n,a)}catch(o){Ft(t,t.return,o)}}}function eg(t,n,a){a.props=ur(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ft(t,n,o)}}function fo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Ft(t,n,c)}}function bi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ft(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ft(t,n,c)}else a.current=null}function tg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ft(t,t.return,c)}}function uf(t,n,a){try{var o=t.stateNode;eS(o,t.type,a,n),o[Sn]=n}catch(c){Ft(t,t.return,c)}}function ng(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&wa(t.type)||t.tag===4}function cf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ng(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ff(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Kl));else if(o!==4&&(o===27&&wa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(ff(t,n,a),t=t.sibling;t!==null;)ff(t,n,a),t=t.sibling}function Fl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&wa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Fl(t,n,a),t=t.sibling;t!==null;)Fl(t,n,a),t=t.sibling}function ig(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,o,a),n[on]=t,n[Sn]=a}catch(f){Ft(t,t.return,f)}}var Yi=!1,en=!1,hf=!1,ag=typeof WeakSet=="function"?WeakSet:Set,gn=null;function Ox(t,n){if(t=t.containerInfo,Bf=iu,t=mp(t),uc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var M=0,T=-1,P=-1,J=0,ue=0,ge=t,te=null;t:for(;;){for(var ne;ge!==a||c!==0&&ge.nodeType!==3||(T=M+c),ge!==f||o!==0&&ge.nodeType!==3||(P=M+o),ge.nodeType===3&&(M+=ge.nodeValue.length),(ne=ge.firstChild)!==null;)te=ge,ge=ne;for(;;){if(ge===t)break t;if(te===a&&++J===c&&(T=M),te===f&&++ue===o&&(P=M),(ne=ge.nextSibling)!==null)break;ge=te,te=ge.parentNode}ge=ne}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(If={focusedElem:t,selectionRange:a},iu=!1,gn=n;gn!==null;)if(n=gn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,gn=t;else for(;gn!==null;){switch(n=gn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var tt=ur(a.type,c,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(tt,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(Ze){Ft(a,a.return,Ze)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Hf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Hf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,gn=t;break}gn=n.return}}function rg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ma(t,a),o&4&&co(5,a);break;case 1:if(Ma(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(M){Ft(a,a.return,M)}else{var c=ur(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Ft(a,a.return,M)}}o&64&&$m(a),o&512&&fo(a,a.return);break;case 3:if(Ma(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Hp(t,n)}catch(M){Ft(a,a.return,M)}}break;case 27:n===null&&o&4&&ig(a);case 26:case 5:Ma(t,a),n===null&&o&4&&tg(a),o&512&&fo(a,a.return);break;case 12:Ma(t,a);break;case 13:Ma(t,a),o&4&&lg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=kx.bind(null,a),oS(t,a))));break;case 22:if(o=a.memoizedState!==null||Yi,!o){n=n!==null&&n.memoizedState!==null||en,c=Yi;var f=en;Yi=o,(en=n)&&!f?Ea(t,a,(a.subtreeFlags&8772)!==0):Ma(t,a),Yi=c,en=f}break;case 30:break;default:Ma(t,a)}}function sg(t){var n=t.alternate;n!==null&&(t.alternate=null,sg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ca(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Xt=null,Fn=!1;function ji(t,n,a){for(a=a.child;a!==null;)og(t,n,a),a=a.sibling}function og(t,n,a){if(Pe&&typeof Pe.onCommitFiberUnmount=="function")try{Pe.onCommitFiberUnmount(fe,a)}catch{}switch(a.tag){case 26:en||bi(a,n),ji(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:en||bi(a,n);var o=Xt,c=Fn;wa(a.type)&&(Xt=a.stateNode,Fn=!1),ji(t,n,a),yo(a.stateNode),Xt=o,Fn=c;break;case 5:en||bi(a,n);case 6:if(o=Xt,c=Fn,Xt=null,ji(t,n,a),Xt=o,Fn=c,Xt!==null)if(Fn)try{(Xt.nodeType===9?Xt.body:Xt.nodeName==="HTML"?Xt.ownerDocument.body:Xt).removeChild(a.stateNode)}catch(f){Ft(a,n,f)}else try{Xt.removeChild(a.stateNode)}catch(f){Ft(a,n,f)}break;case 18:Xt!==null&&(Fn?(t=Xt,Zg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),wo(t)):Zg(Xt,a.stateNode));break;case 4:o=Xt,c=Fn,Xt=a.stateNode.containerInfo,Fn=!0,ji(t,n,a),Xt=o,Fn=c;break;case 0:case 11:case 14:case 15:en||ya(2,a,n),en||ya(4,a,n),ji(t,n,a);break;case 1:en||(bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&eg(a,n,o)),ji(t,n,a);break;case 21:ji(t,n,a);break;case 22:en=(o=en)||a.memoizedState!==null,ji(t,n,a),en=o;break;default:ji(t,n,a)}}function lg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{wo(t)}catch(a){Ft(n,n.return,a)}}function Px(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ag),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ag),n;default:throw Error(r(435,t.tag))}}function df(t,n){var a=Px(t);n.forEach(function(o){var c=Xx.bind(null,t,o);a.has(o)||(a.add(o),o.then(c,c))})}function Yn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=t,M=n,T=M;e:for(;T!==null;){switch(T.tag){case 27:if(wa(T.type)){Xt=T.stateNode,Fn=!1;break e}break;case 5:Xt=T.stateNode,Fn=!1;break e;case 3:case 4:Xt=T.stateNode.containerInfo,Fn=!0;break e}T=T.return}if(Xt===null)throw Error(r(160));og(f,M,c),Xt=null,Fn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)ug(n,t),n=n.sibling}var hi=null;function ug(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Yn(n,t),jn(t),o&4&&(ya(3,t,t.return),co(3,t),ya(5,t,t.return));break;case 1:Yn(n,t),jn(t),o&512&&(en||a===null||bi(a,a.return)),o&64&&Yi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=hi;if(Yn(n,t),jn(t),o&512&&(en||a===null||bi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ua]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,o,a),f[on]=t,nn(f),o=f;break e;case"link":var M=i_("link","href",c).get(o+(a.href||""));if(M){for(var T=0;T<M.length;T++)if(f=M[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(T,1);break t}}f=c.createElement(o),Tn(f,o,a),c.head.appendChild(f);break;case"meta":if(M=i_("meta","content",c).get(o+(a.content||""))){for(T=0;T<M.length;T++)if(f=M[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(T,1);break t}}f=c.createElement(o),Tn(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[on]=t,nn(f),o=f}t.stateNode=o}else a_(c,t.type,t.stateNode);else t.stateNode=n_(c,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?a_(c,t.type,t.stateNode):n_(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&uf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,t),jn(t),o&512&&(en||a===null||bi(a,a.return)),a!==null&&o&4&&uf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,t),jn(t),o&512&&(en||a===null||bi(a,a.return)),t.flags&32){c=t.stateNode;try{Mi(c,"")}catch(ne){Ft(t,t.return,ne)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,uf(t,c,a!==null?a.memoizedProps:c)),o&1024&&(hf=!0);break;case 6:if(Yn(n,t),jn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ne){Ft(t,t.return,ne)}}break;case 3:if(eu=null,c=hi,hi=Jl(n.containerInfo),Yn(n,t),hi=c,jn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{wo(n.containerInfo)}catch(ne){Ft(t,t.return,ne)}hf&&(hf=!1,cg(t));break;case 4:o=hi,hi=Jl(t.stateNode.containerInfo),Yn(n,t),jn(t),hi=o;break;case 12:Yn(n,t),jn(t);break;case 13:Yn(n,t),jn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(xf=it()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,df(t,o)));break;case 22:c=t.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,J=Yi,ue=en;if(Yi=J||c,en=ue||P,Yn(n,t),en=ue,Yi=J,jn(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Yi||en||cr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)M=f.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{T=P.stateNode;var ge=P.memoizedProps.style,te=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;T.style.display=te==null||typeof te=="boolean"?"":(""+te).trim()}}catch(ne){Ft(P,P.return,ne)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(ne){Ft(P,P.return,ne)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,df(t,a))));break;case 19:Yn(n,t),jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,df(t,o)));break;case 30:break;case 21:break;default:Yn(n,t),jn(t)}}function jn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(ng(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=cf(t);Fl(t,f,c);break;case 5:var M=a.stateNode;a.flags&32&&(Mi(M,""),a.flags&=-33);var T=cf(t);Fl(t,T,M);break;case 3:case 4:var P=a.stateNode.containerInfo,J=cf(t);ff(t,J,P);break;default:throw Error(r(161))}}catch(ue){Ft(t,t.return,ue)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function cg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;cg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ma(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)rg(t,n.alternate,n),n=n.sibling}function cr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),cr(n);break;case 1:bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&eg(n,n.return,a),cr(n);break;case 27:yo(n.stateNode);case 26:case 5:bi(n,n.return),cr(n);break;case 22:n.memoizedState===null&&cr(n);break;case 30:cr(n);break;default:cr(n)}t=t.sibling}}function Ea(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,f=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:Ea(c,f,a),co(4,f);break;case 1:if(Ea(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Ft(o,o.return,J)}if(o=f,c=o.updateQueue,c!==null){var T=o.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)Fp(P[c],T)}catch(J){Ft(o,o.return,J)}}a&&M&64&&$m(f),fo(f,f.return);break;case 27:ig(f);case 26:case 5:Ea(c,f,a),a&&o===null&&M&4&&tg(f),fo(f,f.return);break;case 12:Ea(c,f,a);break;case 13:Ea(c,f,a),a&&M&4&&lg(c,f);break;case 22:f.memoizedState===null&&Ea(c,f,a),fo(f,f.return);break;case 30:break;default:Ea(c,f,a)}n=n.sibling}}function pf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ks(a))}function mf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ks(t))}function Ai(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)fg(t,n,a,o),n=n.sibling}function fg(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(t,n,a,o),c&2048&&co(9,n);break;case 1:Ai(t,n,a,o);break;case 3:Ai(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ks(t)));break;case 12:if(c&2048){Ai(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,M=f.id,T=f.onPostCommit;typeof T=="function"&&T(M,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){Ft(n,n.return,P)}}else Ai(t,n,a,o);break;case 13:Ai(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,M=n.alternate,n.memoizedState!==null?f._visibility&2?Ai(t,n,a,o):ho(t,n):f._visibility&2?Ai(t,n,a,o):(f._visibility|=2,Kr(t,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&pf(M,n);break;case 24:Ai(t,n,a,o),c&2048&&mf(n.alternate,n);break;default:Ai(t,n,a,o)}}function Kr(t,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,M=n,T=a,P=o,J=M.flags;switch(M.tag){case 0:case 11:case 15:Kr(f,M,T,P,c),co(8,M);break;case 23:break;case 22:var ue=M.stateNode;M.memoizedState!==null?ue._visibility&2?Kr(f,M,T,P,c):ho(f,M):(ue._visibility|=2,Kr(f,M,T,P,c)),c&&J&2048&&pf(M.alternate,M);break;case 24:Kr(f,M,T,P,c),c&&J&2048&&mf(M.alternate,M);break;default:Kr(f,M,T,P,c)}n=n.sibling}}function ho(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:ho(a,o),c&2048&&pf(o.alternate,o);break;case 24:ho(a,o),c&2048&&mf(o.alternate,o);break;default:ho(a,o)}n=n.sibling}}var po=8192;function Qr(t){if(t.subtreeFlags&po)for(t=t.child;t!==null;)hg(t),t=t.sibling}function hg(t){switch(t.tag){case 26:Qr(t),t.flags&po&&t.memoizedState!==null&&SS(hi,t.memoizedState,t.memoizedProps);break;case 5:Qr(t);break;case 3:case 4:var n=hi;hi=Jl(t.stateNode.containerInfo),Qr(t),hi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=po,po=16777216,Qr(t),po=n):Qr(t));break;default:Qr(t)}}function dg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,mg(o,t)}dg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)pg(t),t=t.sibling}function pg(t){switch(t.tag){case 0:case 11:case 15:mo(t),t.flags&2048&&ya(9,t,t.return);break;case 3:mo(t);break;case 12:mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Hl(t)):mo(t);break;default:mo(t)}}function Hl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,mg(o,t)}dg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ya(8,n,n.return),Hl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Hl(n));break;default:Hl(n)}t=t.sibling}}function mg(t,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ks(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else e:for(a=t;gn!==null;){o=gn;var c=o.sibling,f=o.return;if(sg(o),o===a){gn=null;break e}if(c!==null){c.return=f,gn=c;break e}gn=f}}}var Bx={getCacheForType:function(t){var n=Rn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Ix=typeof WeakMap=="function"?WeakMap:Map,wt=0,kt=null,pt=null,St=0,Dt=0,Zn=null,Ta=!1,Jr=!1,gf=!1,Zi=0,Kt=0,ba=0,fr=0,_f=0,ri=0,$r=0,go=null,Hn=null,vf=!1,xf=0,Gl=1/0,Vl=null,Aa=null,En=0,Ra=null,es=null,ts=0,Sf=0,yf=null,gg=null,_o=0,Mf=null;function Kn(){if((wt&2)!==0&&St!==0)return St&-St;if(B.T!==null){var t=Vr;return t!==0?t:wf()}return Et()}function _g(){ri===0&&(ri=(St&536870912)===0||Rt?k():536870912);var t=ai.current;return t!==null&&(t.flags|=32),ri}function Qn(t,n,a){(t===kt&&(Dt===2||Dt===9)||t.cancelPendingCommit!==null)&&(ns(t,0),Ca(t,St,ri,!1)),me(t,a),((wt&2)===0||t!==kt)&&(t===kt&&((wt&2)===0&&(fr|=a),Kt===4&&Ca(t,St,ri,!1)),Ri(t))}function vg(t,n,a){if((wt&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||nt(t,n),c=o?Hx(t,n):bf(t,n,!0),f=o;do{if(c===0){Jr&&!o&&Ca(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!zx(a)){c=bf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;e:{var T=t;c=go;var P=T.current.memoizedState.isDehydrated;if(P&&(ns(T,M).flags|=256),M=bf(T,M,!1),M!==2){if(gf&&!P){T.errorRecoveryDisabledLanes|=f,fr|=f,c=4;break e}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=M}if(f=!1,c!==2)continue}}if(c===1){ns(t,0),Ca(t,n,0,!0);break}e:{switch(o=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ca(o,n,ri,!Ta);break e;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=xf+300-it(),10<c)){if(Ca(o,n,ri,!Ta),ut(o,0,!0)!==0)break e;o.timeoutHandle=Yg(xg.bind(null,o,a,Hn,Vl,vf,n,ri,fr,$r,Ta,f,2,-0,0),c);break e}xg(o,a,Hn,Vl,vf,n,ri,fr,$r,Ta,f,0,-0,0)}}break}while(!0);Ri(t)}function xg(t,n,a,o,c,f,M,T,P,J,ue,ge,te,ne){if(t.timeoutHandle=-1,ge=n.subtreeFlags,(ge&8192||(ge&16785408)===16785408)&&(To={stylesheets:null,count:0,unsuspend:xS},hg(n),ge=yS(),ge!==null)){t.cancelPendingCommit=ge(Ag.bind(null,t,n,f,a,o,c,M,T,P,ue,1,te,ne)),Ca(t,f,M,!J);return}Ag(t,n,f,a,o,c,M,T,P)}function zx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(t,n,a,o){n&=~_f,n&=~fr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var f=31-Ge(c),M=1<<f;o[f]=-1,c&=~M}a!==0&&Oe(t,a,n)}function kl(){return(wt&6)===0?(vo(0),!1):!0}function Ef(){if(pt!==null){if(Dt===0)var t=pt.return;else t=pt,Gi=rr=null,Fc(t),jr=null,oo=0,t=pt;for(;t!==null;)Jm(t.alternate,t),t=t.return;pt=null}}function ns(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,nS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ef(),kt=t,pt=a=zi(t.current,null),St=n,Dt=0,Zn=null,Ta=!1,Jr=nt(t,n),gf=!1,$r=ri=_f=fr=ba=Kt=0,Hn=go=null,vf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Ge(o),f=1<<c;n|=t[c],o&=~f}return Zi=n,fl(),a}function Sg(t,n){ct=null,B.H=Dl,n===Js||n===Sl?(n=Ip(),Dt=3):n===Op?(n=Ip(),Dt=4):Dt=n===zm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,pt===null&&(Kt=1,Pl(t,ei(n,t.current)))}function yg(){var t=B.H;return B.H=Dl,t===null?Dl:t}function Mg(){var t=B.A;return B.A=Bx,t}function Tf(){Kt=4,Ta||(St&4194048)!==St&&ai.current!==null||(Jr=!0),(ba&134217727)===0&&(fr&134217727)===0||kt===null||Ca(kt,St,ri,!1)}function bf(t,n,a){var o=wt;wt|=2;var c=yg(),f=Mg();(kt!==t||St!==n)&&(Vl=null,ns(t,n)),n=!1;var M=Kt;e:do try{if(Dt!==0&&pt!==null){var T=pt,P=Zn;switch(Dt){case 8:Ef(),M=6;break e;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var J=Dt;if(Dt=0,Zn=null,is(t,T,P,J),a&&Jr){M=0;break e}break;default:J=Dt,Dt=0,Zn=null,is(t,T,P,J)}}Fx(),M=Kt;break}catch(ue){Sg(t,ue)}while(!0);return n&&t.shellSuspendCounter++,Gi=rr=null,wt=o,B.H=c,B.A=f,pt===null&&(kt=null,St=0,fl()),M}function Fx(){for(;pt!==null;)Eg(pt)}function Hx(t,n){var a=wt;wt|=2;var o=yg(),c=Mg();kt!==t||St!==n?(Vl=null,Gl=it()+500,ns(t,n)):Jr=nt(t,n);e:do try{if(Dt!==0&&pt!==null){n=pt;var f=Zn;t:switch(Dt){case 1:Dt=0,Zn=null,is(t,n,f,1);break;case 2:case 9:if(Pp(f)){Dt=0,Zn=null,Tg(n);break}n=function(){Dt!==2&&Dt!==9||kt!==t||(Dt=7),Ri(t)},f.then(n,n);break e;case 3:Dt=7;break e;case 4:Dt=5;break e;case 7:Pp(f)?(Dt=0,Zn=null,Tg(n)):(Dt=0,Zn=null,is(t,n,f,7));break;case 5:var M=null;switch(pt.tag){case 26:M=pt.memoizedState;case 5:case 27:var T=pt;if(!M||r_(M)){Dt=0,Zn=null;var P=T.sibling;if(P!==null)pt=P;else{var J=T.return;J!==null?(pt=J,Xl(J)):pt=null}break t}}Dt=0,Zn=null,is(t,n,f,5);break;case 6:Dt=0,Zn=null,is(t,n,f,6);break;case 8:Ef(),Kt=6;break e;default:throw Error(r(462))}}Gx();break}catch(ue){Sg(t,ue)}while(!0);return Gi=rr=null,B.H=o,B.A=c,wt=a,pt!==null?0:(kt=null,St=0,fl(),Kt)}function Gx(){for(;pt!==null&&!Pn();)Eg(pt)}function Eg(t){var n=Km(t.alternate,t,Zi);t.memoizedProps=t.pendingProps,n===null?Xl(t):pt=n}function Tg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Xm(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=Xm(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:Fc(n);default:Jm(a,n),n=pt=bp(n,Zi),n=Km(a,n,Zi)}t.memoizedProps=t.pendingProps,n===null?Xl(t):pt=n}function is(t,n,a,o){Gi=rr=null,Fc(n),jr=null,oo=0;var c=n.return;try{if(Dx(t,c,n,a,St)){Kt=1,Pl(t,ei(a,t.current)),pt=null;return}}catch(f){if(c!==null)throw pt=c,f;Kt=1,Pl(t,ei(a,t.current)),pt=null;return}n.flags&32768?(Rt||o===1?t=!0:Jr||(St&536870912)!==0?t=!1:(Ta=t=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),bg(n,t)):Xl(n)}function Xl(t){var n=t;do{if((n.flags&32768)!==0){bg(n,Ta);return}t=n.return;var a=Lx(n.alternate,n,Zi);if(a!==null){pt=a;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=t}while(n!==null);Kt===0&&(Kt=5)}function bg(t,n){do{var a=Nx(t.alternate,t);if(a!==null){a.flags&=32767,pt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pt=t;return}pt=t=a}while(t!==null);Kt=6,pt=null}function Ag(t,n,a,o,c,f,M,T,P){t.cancelPendingCommit=null;do Wl();while(En!==0);if((wt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=pc,Ie(t,a,f,M,T,P),t===kt&&(pt=kt=null,St=0),es=n,Ra=t,ts=a,Sf=f,yf=c,gg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Wx(L,function(){return Ug(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,c=Z.p,Z.p=2,M=wt,wt|=4;try{Ox(t,n,a)}finally{wt=M,Z.p=c,B.T=o}}En=1,Rg(),Cg(),wg()}}function Rg(){if(En===1){En=0;var t=Ra,n=es,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=Z.p;Z.p=2;var c=wt;wt|=4;try{ug(n,t);var f=If,M=mp(t.containerInfo),T=f.focusedElem,P=f.selectionRange;if(M!==T&&T&&T.ownerDocument&&pp(T.ownerDocument.documentElement,T)){if(P!==null&&uc(T)){var J=P.start,ue=P.end;if(ue===void 0&&(ue=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(ue,T.value.length);else{var ge=T.ownerDocument||document,te=ge&&ge.defaultView||window;if(te.getSelection){var ne=te.getSelection(),tt=T.textContent.length,Ze=Math.min(P.start,tt),Pt=P.end===void 0?Ze:Math.min(P.end,tt);!ne.extend&&Ze>Pt&&(M=Pt,Pt=Ze,Ze=M);var W=dp(T,Ze),V=dp(T,Pt);if(W&&V&&(ne.rangeCount!==1||ne.anchorNode!==W.node||ne.anchorOffset!==W.offset||ne.focusNode!==V.node||ne.focusOffset!==V.offset)){var K=ge.createRange();K.setStart(W.node,W.offset),ne.removeAllRanges(),Ze>Pt?(ne.addRange(K),ne.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),ne.addRange(K))}}}}for(ge=[],ne=T;ne=ne.parentNode;)ne.nodeType===1&&ge.push({element:ne,left:ne.scrollLeft,top:ne.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ge.length;T++){var he=ge[T];he.element.scrollLeft=he.left,he.element.scrollTop=he.top}}iu=!!Bf,If=Bf=null}finally{wt=c,Z.p=o,B.T=a}}t.current=n,En=2}}function Cg(){if(En===2){En=0;var t=Ra,n=es,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=Z.p;Z.p=2;var c=wt;wt|=4;try{rg(t,n.alternate,n)}finally{wt=c,Z.p=o,B.T=a}}En=3}}function wg(){if(En===4||En===3){En=0,gt();var t=Ra,n=es,a=ts,o=gg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,es=Ra=null,Dg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Aa=null),tn(a),n=n.stateNode,Pe&&typeof Pe.onCommitFiberRoot=="function")try{Pe.onCommitFiberRoot(fe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,c=Z.p,Z.p=2,B.T=null;try{for(var f=t.onRecoverableError,M=0;M<o.length;M++){var T=o[M];f(T.value,{componentStack:T.stack})}}finally{B.T=n,Z.p=c}}(ts&3)!==0&&Wl(),Ri(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===Mf?_o++:(_o=0,Mf=t):_o=0,vo(0)}}function Dg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ks(n)))}function Wl(t){return Rg(),Cg(),wg(),Ug()}function Ug(){if(En!==5)return!1;var t=Ra,n=Sf;Sf=0;var a=tn(ts),o=B.T,c=Z.p;try{Z.p=32>a?32:a,B.T=null,a=yf,yf=null;var f=Ra,M=ts;if(En=0,es=Ra=null,ts=0,(wt&6)!==0)throw Error(r(331));var T=wt;if(wt|=4,pg(f.current),fg(f,f.current,M,a),wt=T,vo(0,!1),Pe&&typeof Pe.onPostCommitFiberRoot=="function")try{Pe.onPostCommitFiberRoot(fe,f)}catch{}return!0}finally{Z.p=c,B.T=o,Dg(t,n)}}function Lg(t,n,a){n=ei(a,n),n=$c(t.stateNode,n,2),t=_a(t,n,2),t!==null&&(me(t,2),Ri(t))}function Ft(t,n,a){if(t.tag===3)Lg(t,t,a);else for(;n!==null;){if(n.tag===3){Lg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Aa===null||!Aa.has(o))){t=ei(a,t),a=Bm(2),o=_a(n,a,2),o!==null&&(Im(a,o,n,t),me(o,2),Ri(o));break}}n=n.return}}function Af(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Ix;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(gf=!0,c.add(a),t=Vx.bind(null,t,n,a),n.then(t,t))}function Vx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,kt===t&&(St&a)===a&&(Kt===4||Kt===3&&(St&62914560)===St&&300>it()-xf?(wt&2)===0&&ns(t,0):_f|=a,$r===St&&($r=0)),Ri(t)}function Ng(t,n){n===0&&(n=Ne()),t=zr(t,n),t!==null&&(me(t,n),Ri(t))}function kx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Ng(t,a)}function Xx(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Ng(t,a)}function Wx(t,n){return ft(t,n)}var ql=null,as=null,Rf=!1,Yl=!1,Cf=!1,hr=0;function Ri(t){t!==as&&t.next===null&&(as===null?ql=as=t:as=as.next=t),Yl=!0,Rf||(Rf=!0,Yx())}function vo(t,n){if(!Cf&&Yl){Cf=!0;do for(var a=!1,o=ql;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var M=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-Ge(42|t)+1)-1,f&=c&~(M&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Ig(o,f))}else f=St,f=ut(o,o===kt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||nt(o,f)||(a=!0,Ig(o,f));o=o.next}while(a);Cf=!1}}function qx(){Og()}function Og(){Yl=Rf=!1;var t=0;hr!==0&&(tS()&&(t=hr),hr=0);for(var n=it(),a=null,o=ql;o!==null;){var c=o.next,f=Pg(o,n);f===0?(o.next=null,a===null?ql=c:a.next=c,c===null&&(as=a)):(a=o,(t!==0||(f&3)!==0)&&(Yl=!0)),o=c}vo(t)}function Pg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var M=31-Ge(f),T=1<<M,P=c[M];P===-1?((T&a)===0||(T&o)!==0)&&(c[M]=Lt(T,n)):P<=n&&(t.expiredLanes|=T),f&=~T}if(n=kt,a=St,a=ut(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Dt===2||Dt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&z(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||nt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&z(o),tn(a)){case 2:case 8:a=Ve;break;case 32:a=L;break;case 268435456:a=ee;break;default:a=L}return o=Bg.bind(null,t),a=ft(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&z(o),t.callbackPriority=2,t.callbackNode=null,2}function Bg(t,n){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Wl()&&t.callbackNode!==a)return null;var o=St;return o=ut(t,t===kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(vg(t,o,n),Pg(t,it()),t.callbackNode!=null&&t.callbackNode===a?Bg.bind(null,t):null)}function Ig(t,n){if(Wl())return null;vg(t,n,!0)}function Yx(){iS(function(){(wt&6)!==0?ft(Ut,qx):Og()})}function wf(){return hr===0&&(hr=k()),hr}function zg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:al(""+t)}function Fg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function jx(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=zg((c[Sn]||null).action),M=o.submitter;M&&(n=(n=M[Sn]||null)?zg(n.formAction):M.getAttribute("formAction"),n!==null&&(f=n,M=null));var T=new ll("action","action",null,o,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(hr!==0){var P=M?Fg(c,M):new FormData(c);jc(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(T.preventDefault(),P=M?Fg(c,M):new FormData(c),jc(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var Df=0;Df<dc.length;Df++){var Uf=dc[Df],Zx=Uf.toLowerCase(),Kx=Uf[0].toUpperCase()+Uf.slice(1);fi(Zx,"on"+Kx)}fi(vp,"onAnimationEnd"),fi(xp,"onAnimationIteration"),fi(Sp,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(dx,"onTransitionRun"),fi(px,"onTransitionStart"),fi(mx,"onTransitionCancel"),fi(yp,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),Oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function Hg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var M=o.length-1;0<=M;M--){var T=o[M],P=T.instance,J=T.currentTarget;if(T=T.listener,P!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=J;try{f(c)}catch(ue){Ol(ue)}c.currentTarget=null,f=P}else for(M=0;M<o.length;M++){if(T=o[M],P=T.instance,J=T.currentTarget,T=T.listener,P!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=J;try{f(c)}catch(ue){Ol(ue)}c.currentTarget=null,f=P}}}}function mt(t,n){var a=n[ja];a===void 0&&(a=n[ja]=new Set);var o=t+"__bubble";a.has(o)||(Gg(n,t,2,!1),a.add(o))}function Lf(t,n,a){var o=0;n&&(o|=4),Gg(a,t,o,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Nf(t){if(!t[jl]){t[jl]=!0,nl.forEach(function(a){a!=="selectionchange"&&(Qx.has(a)||Lf(a,!1,t),Lf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[jl]||(n[jl]=!0,Lf("selectionchange",!1,n))}}function Gg(t,n,a,o){switch(f_(n)){case 2:var c=TS;break;case 8:c=bS;break;default:c=Yf}a=c.bind(null,n,a,t),c=void 0,!ec||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Of(t,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var T=o.stateNode.containerInfo;if(T===c)break;if(M===4)for(M=o.return;M!==null;){var P=M.tag;if((P===3||P===4)&&M.stateNode.containerInfo===c)return;M=M.return}for(;T!==null;){if(M=Li(T),M===null)return;if(P=M.tag,P===5||P===6||P===26||P===27){o=f=M;continue e}T=T.parentNode}}o=o.return}jd(function(){var J=f,ue=Ju(a),ge=[];e:{var te=Mp.get(t);if(te!==void 0){var ne=ll,tt=t;switch(t){case"keypress":if(sl(a)===0)break e;case"keydown":case"keyup":ne=W0;break;case"focusin":tt="focus",ne=ac;break;case"focusout":tt="blur",ne=ac;break;case"beforeblur":case"afterblur":ne=ac;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=Qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=N0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=j0;break;case vp:case xp:case Sp:ne=B0;break;case yp:ne=K0;break;case"scroll":case"scrollend":ne=U0;break;case"wheel":ne=J0;break;case"copy":case"cut":case"paste":ne=z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=$d;break;case"toggle":case"beforetoggle":ne=ex}var Ze=(n&4)!==0,Pt=!Ze&&(t==="scroll"||t==="scrollend"),W=Ze?te!==null?te+"Capture":null:te;Ze=[];for(var V=J,K;V!==null;){var he=V;if(K=he.stateNode,he=he.tag,he!==5&&he!==26&&he!==27||K===null||W===null||(he=Is(V,W),he!=null&&Ze.push(So(V,he,K))),Pt)break;V=V.return}0<Ze.length&&(te=new ne(te,tt,null,a,ue),ge.push({event:te,listeners:Ze}))}}if((n&7)===0){e:{if(te=t==="mouseover"||t==="pointerover",ne=t==="mouseout"||t==="pointerout",te&&a!==Qu&&(tt=a.relatedTarget||a.fromElement)&&(Li(tt)||tt[Bn]))break e;if((ne||te)&&(te=ue.window===ue?ue:(te=ue.ownerDocument)?te.defaultView||te.parentWindow:window,ne?(tt=a.relatedTarget||a.toElement,ne=J,tt=tt?Li(tt):null,tt!==null&&(Pt=u(tt),Ze=tt.tag,tt!==Pt||Ze!==5&&Ze!==27&&Ze!==6)&&(tt=null)):(ne=null,tt=J),ne!==tt)){if(Ze=Qd,he="onMouseLeave",W="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Ze=$d,he="onPointerLeave",W="onPointerEnter",V="pointer"),Pt=ne==null?te:Ka(ne),K=tt==null?te:Ka(tt),te=new Ze(he,V+"leave",ne,a,ue),te.target=Pt,te.relatedTarget=K,he=null,Li(ue)===J&&(Ze=new Ze(W,V+"enter",tt,a,ue),Ze.target=K,Ze.relatedTarget=Pt,he=Ze),Pt=he,ne&&tt)t:{for(Ze=ne,W=tt,V=0,K=Ze;K;K=rs(K))V++;for(K=0,he=W;he;he=rs(he))K++;for(;0<V-K;)Ze=rs(Ze),V--;for(;0<K-V;)W=rs(W),K--;for(;V--;){if(Ze===W||W!==null&&Ze===W.alternate)break t;Ze=rs(Ze),W=rs(W)}Ze=null}else Ze=null;ne!==null&&Vg(ge,te,ne,Ze,!1),tt!==null&&Pt!==null&&Vg(ge,Pt,tt,Ze,!0)}}e:{if(te=J?Ka(J):window,ne=te.nodeName&&te.nodeName.toLowerCase(),ne==="select"||ne==="input"&&te.type==="file")var He=op;else if(rp(te))if(lp)He=cx;else{He=lx;var ht=ox}else ne=te.nodeName,!ne||ne.toLowerCase()!=="input"||te.type!=="checkbox"&&te.type!=="radio"?J&&Ku(J.elementType)&&(He=op):He=ux;if(He&&(He=He(t,J))){sp(ge,He,a,ue);break e}ht&&ht(t,te,J),t==="focusout"&&J&&te.type==="number"&&J.memoizedProps.value!=null&&An(te,"number",te.value)}switch(ht=J?Ka(J):window,t){case"focusin":(rp(ht)||ht.contentEditable==="true")&&(Pr=ht,cc=J,Ws=null);break;case"focusout":Ws=cc=Pr=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,gp(ge,a,ue);break;case"selectionchange":if(hx)break;case"keydown":case"keyup":gp(ge,a,ue)}var ke;if(sc)e:{switch(t){case"compositionstart":var Je="onCompositionStart";break e;case"compositionend":Je="onCompositionEnd";break e;case"compositionupdate":Je="onCompositionUpdate";break e}Je=void 0}else Or?ip(t,a)&&(Je="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Je="onCompositionStart");Je&&(ep&&a.locale!=="ko"&&(Or||Je!=="onCompositionStart"?Je==="onCompositionEnd"&&Or&&(ke=Zd()):(da=ue,tc="value"in da?da.value:da.textContent,Or=!0)),ht=Zl(J,Je),0<ht.length&&(Je=new Jd(Je,t,null,a,ue),ge.push({event:Je,listeners:ht}),ke?Je.data=ke:(ke=ap(a),ke!==null&&(Je.data=ke)))),(ke=nx?ix(t,a):ax(t,a))&&(Je=Zl(J,"onBeforeInput"),0<Je.length&&(ht=new Jd("onBeforeInput","beforeinput",null,a,ue),ge.push({event:ht,listeners:Je}),ht.data=ke)),jx(ge,t,J,a,ue)}Hg(ge,n)})}function So(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Zl(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Is(t,a),c!=null&&o.unshift(So(t,c,f)),c=Is(t,n),c!=null&&o.push(So(t,c,f))),t.tag===3)return o;t=t.return}return[]}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Vg(t,n,a,o,c){for(var f=n._reactName,M=[];a!==null&&a!==o;){var T=a,P=T.alternate,J=T.stateNode;if(T=T.tag,P!==null&&P===o)break;T!==5&&T!==26&&T!==27||J===null||(P=J,c?(J=Is(a,f),J!=null&&M.unshift(So(a,J,P))):c||(J=Is(a,f),J!=null&&M.push(So(a,J,P)))),a=a.return}M.length!==0&&t.push({event:n,listeners:M})}var Jx=/\r\n?/g,$x=/\u0000|\uFFFD/g;function kg(t){return(typeof t=="string"?t:""+t).replace(Jx,`
`).replace($x,"")}function Xg(t,n){return n=kg(n),kg(t)===n}function Kl(){}function Ot(t,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Mi(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Mi(t,""+o);break;case"className":we(t,"class",o);break;case"tabIndex":we(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":we(t,a,o);break;case"style":qd(t,o,f);break;case"data":if(n!=="object"){we(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=al(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ot(t,n,"name",c.name,c,null),Ot(t,n,"formEncType",c.formEncType,c,null),Ot(t,n,"formMethod",c.formMethod,c,null),Ot(t,n,"formTarget",c.formTarget,c,null)):(Ot(t,n,"encType",c.encType,c,null),Ot(t,n,"method",c.method,c,null),Ot(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=al(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Kl);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=al(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":mt("beforetoggle",t),mt("toggle",t),be(t,"popover",o);break;case"xlinkActuate":De(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":De(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":De(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":De(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":De(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":De(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":De(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":De(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":De(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":be(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=w0.get(a)||a,be(t,a,o))}}function Pf(t,n,a,o,c,f){switch(a){case"style":qd(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Mi(t,o):(typeof o=="number"||typeof o=="bigint")&&Mi(t,""+o);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Kl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!il.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):be(t,a,o)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var M=a[f];if(M!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ot(t,n,f,M,a,null)}}c&&Ot(t,n,"srcSet",a.srcSet,a,null),o&&Ot(t,n,"src",a.src,a,null);return;case"input":mt("invalid",t);var T=f=M=c=null,P=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var ue=a[o];if(ue!=null)switch(o){case"name":c=ue;break;case"type":M=ue;break;case"checked":P=ue;break;case"defaultChecked":J=ue;break;case"value":f=ue;break;case"defaultValue":T=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:Ot(t,n,o,ue,a,null)}}zt(t,f,T,P,J,M,c,!1),jt(t);return;case"select":mt("invalid",t),o=M=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":M=T;break;case"multiple":o=T;default:Ot(t,n,c,T,a,null)}n=f,a=M,t.multiple=!!o,n!=null?ln(t,!!o,n,!1):a!=null&&ln(t,!!o,a,!0);return;case"textarea":mt("invalid",t),f=c=o=null;for(M in a)if(a.hasOwnProperty(M)&&(T=a[M],T!=null))switch(M){case"value":o=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ot(t,n,M,T,a,null)}yn(t,o,c,f),jt(t);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ot(t,n,P,o,a,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(o=0;o<xo.length;o++)mt(xo[o],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ot(t,n,J,o,a,null)}return;default:if(Ku(n)){for(ue in a)a.hasOwnProperty(ue)&&(o=a[ue],o!==void 0&&Pf(t,n,ue,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Ot(t,n,T,o,a,null))}function eS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,M=null,T=null,P=null,J=null,ue=null;for(ne in a){var ge=a[ne];if(a.hasOwnProperty(ne)&&ge!=null)switch(ne){case"checked":break;case"value":break;case"defaultValue":P=ge;default:o.hasOwnProperty(ne)||Ot(t,n,ne,null,o,ge)}}for(var te in o){var ne=o[te];if(ge=a[te],o.hasOwnProperty(te)&&(ne!=null||ge!=null))switch(te){case"type":f=ne;break;case"name":c=ne;break;case"checked":J=ne;break;case"defaultChecked":ue=ne;break;case"value":M=ne;break;case"defaultValue":T=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(r(137,n));break;default:ne!==ge&&Ot(t,n,te,ne,o,ge)}}Pi(t,M,T,P,J,ue,f,c);return;case"select":ne=M=T=te=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":ne=P;default:o.hasOwnProperty(f)||Ot(t,n,f,null,o,P)}for(c in o)if(f=o[c],P=a[c],o.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":te=f;break;case"defaultValue":T=f;break;case"multiple":M=f;default:f!==P&&Ot(t,n,c,f,o,P)}n=T,a=M,o=ne,te!=null?ln(t,!!a,te,!1):!!o!=!!a&&(n!=null?ln(t,!!a,n,!0):ln(t,!!a,a?[]:"",!1));return;case"textarea":ne=te=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ot(t,n,T,null,o,c)}for(M in o)if(c=o[M],f=a[M],o.hasOwnProperty(M)&&(c!=null||f!=null))switch(M){case"value":te=c;break;case"defaultValue":ne=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ot(t,n,M,c,o,f)}pn(t,te,ne);return;case"option":for(var tt in a)if(te=a[tt],a.hasOwnProperty(tt)&&te!=null&&!o.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:Ot(t,n,tt,null,o,te)}for(P in o)if(te=o[P],ne=a[P],o.hasOwnProperty(P)&&te!==ne&&(te!=null||ne!=null))switch(P){case"selected":t.selected=te&&typeof te!="function"&&typeof te!="symbol";break;default:Ot(t,n,P,te,o,ne)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ze in a)te=a[Ze],a.hasOwnProperty(Ze)&&te!=null&&!o.hasOwnProperty(Ze)&&Ot(t,n,Ze,null,o,te);for(J in o)if(te=o[J],ne=a[J],o.hasOwnProperty(J)&&te!==ne&&(te!=null||ne!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(r(137,n));break;default:Ot(t,n,J,te,o,ne)}return;default:if(Ku(n)){for(var Pt in a)te=a[Pt],a.hasOwnProperty(Pt)&&te!==void 0&&!o.hasOwnProperty(Pt)&&Pf(t,n,Pt,void 0,o,te);for(ue in o)te=o[ue],ne=a[ue],!o.hasOwnProperty(ue)||te===ne||te===void 0&&ne===void 0||Pf(t,n,ue,te,o,ne);return}}for(var W in a)te=a[W],a.hasOwnProperty(W)&&te!=null&&!o.hasOwnProperty(W)&&Ot(t,n,W,null,o,te);for(ge in o)te=o[ge],ne=a[ge],!o.hasOwnProperty(ge)||te===ne||te==null&&ne==null||Ot(t,n,ge,te,o,ne)}var Bf=null,If=null;function Ql(t){return t.nodeType===9?t:t.ownerDocument}function Wg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function zf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ff=null;function tS(){var t=window.event;return t&&t.type==="popstate"?t===Ff?!1:(Ff=t,!0):(Ff=null,!1)}var Yg=typeof setTimeout=="function"?setTimeout:void 0,nS=typeof clearTimeout=="function"?clearTimeout:void 0,jg=typeof Promise=="function"?Promise:void 0,iS=typeof queueMicrotask=="function"?queueMicrotask:typeof jg<"u"?function(t){return jg.resolve(null).then(t).catch(aS)}:Yg;function aS(t){setTimeout(function(){throw t})}function wa(t){return t==="head"}function Zg(t,n){var a=n,o=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var M=t.ownerDocument;if(a&1&&yo(M.documentElement),a&2&&yo(M.body),a&4)for(a=M.head,yo(a),M=a.firstChild;M;){var T=M.nextSibling,P=M.nodeName;M[ua]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=T}}if(c===0){t.removeChild(f),wo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);wo(n)}function Hf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hf(a),ca(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function rS(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ua])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function sS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function Gf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function oS(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Vf=null;function Kg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Qg(t,n,a){switch(n=Ql(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function yo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ca(t)}var si=new Map,Jg=new Set;function Jl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ki=Z.d;Z.d={f:lS,r:uS,D:cS,C:fS,L:hS,m:dS,X:mS,S:pS,M:gS};function lS(){var t=Ki.f(),n=kl();return t||n}function uS(t){var n=Ni(t);n!==null&&n.tag===5&&n.type==="form"?vm(n):Ki.r(t)}var ss=typeof document>"u"?null:document;function $g(t,n,a){var o=ss;if(o&&typeof n=="string"&&n){var c=Vt(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Jg.has(c)||(Jg.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Tn(n,"link",t),nn(n),o.head.appendChild(n)))}}function cS(t){Ki.D(t),$g("dns-prefetch",t,null)}function fS(t,n){Ki.C(t,n),$g("preconnect",t,n)}function hS(t,n,a){Ki.L(t,n,a);var o=ss;if(o&&t&&n){var c='link[rel="preload"][as="'+Vt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Vt(a.imageSizes)+'"]')):c+='[href="'+Vt(t)+'"]';var f=c;switch(n){case"style":f=os(t);break;case"script":f=ls(t)}si.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),si.set(f,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(Mo(f))||n==="script"&&o.querySelector(Eo(f))||(n=o.createElement("link"),Tn(n,"link",t),nn(n),o.head.appendChild(n)))}}function dS(t,n){Ki.m(t,n);var a=ss;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Vt(o)+'"][href="'+Vt(t)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ls(t)}if(!si.has(f)&&(t=g({rel:"modulepreload",href:t},n),si.set(f,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}o=a.createElement("link"),Tn(o,"link",t),nn(o),a.head.appendChild(o)}}}function pS(t,n,a){Ki.S(t,n,a);var o=ss;if(o&&t){var c=fa(o).hoistableStyles,f=os(t);n=n||"default";var M=c.get(f);if(!M){var T={loading:0,preload:null};if(M=o.querySelector(Mo(f)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=si.get(f))&&kf(t,a);var P=M=o.createElement("link");nn(P),Tn(P,"link",t),P._p=new Promise(function(J,ue){P.onload=J,P.onerror=ue}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,$l(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:T},c.set(f,M)}}}function mS(t,n){Ki.X(t,n);var a=ss;if(a&&t){var o=fa(a).hoistableScripts,c=ls(t),f=o.get(c);f||(f=a.querySelector(Eo(c)),f||(t=g({src:t,async:!0},n),(n=si.get(c))&&Xf(t,n),f=a.createElement("script"),nn(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function gS(t,n){Ki.M(t,n);var a=ss;if(a&&t){var o=fa(a).hoistableScripts,c=ls(t),f=o.get(c);f||(f=a.querySelector(Eo(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=si.get(c))&&Xf(t,n),f=a.createElement("script"),nn(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function e_(t,n,a,o){var c=(c=ye.current)?Jl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=os(a.href),a=fa(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=os(a.href);var f=fa(c).hoistableStyles,M=f.get(t);if(M||(c=c.ownerDocument||c,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,M),(f=c.querySelector(Mo(t)))&&!f._p&&(M.instance=f,M.state.loading=5),si.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},si.set(t,a),f||_S(c,t,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ls(a),a=fa(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function os(t){return'href="'+Vt(t)+'"'}function Mo(t){return'link[rel="stylesheet"]['+t+"]"}function t_(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function _S(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",a),nn(n),t.head.appendChild(n))}function ls(t){return'[src="'+Vt(t)+'"]'}function Eo(t){return"script[async]"+t}function n_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Vt(a.href)+'"]');if(o)return n.instance=o,nn(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),nn(o),Tn(o,"style",c),$l(o,a.precedence,t),n.instance=o;case"stylesheet":c=os(a.href);var f=t.querySelector(Mo(c));if(f)return n.state.loading|=4,n.instance=f,nn(f),f;o=t_(a),(c=si.get(c))&&kf(o,c),f=(t.ownerDocument||t).createElement("link"),nn(f);var M=f;return M._p=new Promise(function(T,P){M.onload=T,M.onerror=P}),Tn(f,"link",o),n.state.loading|=4,$l(f,a.precedence,t),n.instance=f;case"script":return f=ls(a.src),(c=t.querySelector(Eo(f)))?(n.instance=c,nn(c),c):(o=a,(c=si.get(f))&&(o=g({},a),Xf(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),nn(c),Tn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,$l(o,a.precedence,t));return n.instance}function $l(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,M=0;M<o.length;M++){var T=o[M];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function kf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Xf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var eu=null;function i_(t,n,a){if(eu===null){var o=new Map,c=eu=new Map;c.set(a,o)}else c=eu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[ua]||f[on]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var M=f.getAttribute(n)||"";M=t+M;var T=o.get(M);T?T.push(f):o.set(M,[f])}}return o}function a_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function vS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function r_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var To=null;function xS(){}function SS(t,n,a){if(To===null)throw Error(r(475));var o=To;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=os(a.href),f=t.querySelector(Mo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=tu.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=f,nn(f);return}f=t.ownerDocument||t,a=t_(a),(c=si.get(c))&&kf(a,c),f=f.createElement("link"),nn(f);var M=f;M._p=new Promise(function(T,P){M.onload=T,M.onerror=P}),Tn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=tu.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function yS(){if(To===null)throw Error(r(475));var t=To;return t.stylesheets&&t.count===0&&Wf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Wf(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function tu(){if(this.count--,this.count===0){if(this.stylesheets)Wf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var nu=null;function Wf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,nu=new Map,n.forEach(MS,t),nu=null,tu.call(t))}function MS(t,n){if(!(n.state.loading&4)){var a=nu.get(t);if(a)var o=a.get(null);else{a=new Map,nu.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var M=c[f];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}c=n.instance,M=c.getAttribute("data-precedence"),f=a.get(M)||o,f===o&&a.set(null,c),a.set(M,c),this.count++,o=tu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var bo={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function ES(t,n,a,o,c,f,M,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=le(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=le(0),this.hiddenUpdates=le(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function s_(t,n,a,o,c,f,M,T,P,J,ue,ge){return t=new ES(t,n,a,M,T,P,J,ge),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),t.current=f,f.stateNode=t,n=bc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},wc(f),t}function o_(t){return t?(t=Fr,t):Fr}function l_(t,n,a,o,c,f){c=o_(c),o.context===null?o.context=c:o.pendingContext=c,o=ga(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=_a(t,o,n),a!==null&&(Qn(a,t,n),eo(a,t,n))}function u_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function qf(t,n){u_(t,n),(t=t.alternate)&&u_(t,n)}function c_(t){if(t.tag===13){var n=zr(t,67108864);n!==null&&Qn(n,t,67108864),qf(t,67108864)}}var iu=!0;function TS(t,n,a,o){var c=B.T;B.T=null;var f=Z.p;try{Z.p=2,Yf(t,n,a,o)}finally{Z.p=f,B.T=c}}function bS(t,n,a,o){var c=B.T;B.T=null;var f=Z.p;try{Z.p=8,Yf(t,n,a,o)}finally{Z.p=f,B.T=c}}function Yf(t,n,a,o){if(iu){var c=jf(o);if(c===null)Of(t,n,o,au,a),h_(t,o);else if(RS(c,t,n,a,o))o.stopPropagation();else if(h_(t,o),n&4&&-1<AS.indexOf(t)){for(;c!==null;){var f=Ni(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var M=Be(f.pendingLanes);if(M!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;M;){var P=1<<31-Ge(M);T.entanglements[1]|=P,M&=~P}Ri(f),(wt&6)===0&&(Gl=it()+500,vo(0))}}break;case 13:T=zr(f,2),T!==null&&Qn(T,f,2),kl(),qf(f,2)}if(f=jf(o),f===null&&Of(t,n,o,au,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Of(t,n,o,null,a)}}function jf(t){return t=Ju(t),Zf(t)}var au=null;function Zf(t){if(au=null,t=Li(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return au=t,null}function f_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(We()){case Ut:return 2;case Ve:return 8;case L:case b:return 32;case ee:return 268435456;default:return 32}default:return 32}}var Kf=!1,Da=null,Ua=null,La=null,Ao=new Map,Ro=new Map,Na=[],AS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function h_(t,n){switch(t){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(t,n,a,o,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ni(n),n!==null&&c_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function RS(t,n,a,o,c){switch(n){case"focusin":return Da=Co(Da,t,n,a,o,c),!0;case"dragenter":return Ua=Co(Ua,t,n,a,o,c),!0;case"mouseover":return La=Co(La,t,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Ao.set(f,Co(Ao.get(f)||null,t,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Ro.set(f,Co(Ro.get(f)||null,t,n,a,o,c)),!0}return!1}function d_(t){var n=Li(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Xn(t.priority,function(){if(a.tag===13){var o=Kn();o=Gt(o);var c=zr(a,o);c!==null&&Qn(c,a,o),qf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ru(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=jf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Qu=o,a.target.dispatchEvent(o),Qu=null}else return n=Ni(a),n!==null&&c_(n),t.blockedOn=a,!1;n.shift()}return!0}function p_(t,n,a){ru(t)&&a.delete(n)}function CS(){Kf=!1,Da!==null&&ru(Da)&&(Da=null),Ua!==null&&ru(Ua)&&(Ua=null),La!==null&&ru(La)&&(La=null),Ao.forEach(p_),Ro.forEach(p_)}function su(t,n){t.blockedOn===n&&(t.blockedOn=null,Kf||(Kf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,CS)))}var ou=null;function m_(t){ou!==t&&(ou=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ou===t&&(ou=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(Zf(o||a)===null)continue;break}var f=Ni(a);f!==null&&(t.splice(n,3),n-=3,jc(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function wo(t){function n(P){return su(P,t)}Da!==null&&su(Da,t),Ua!==null&&su(Ua,t),La!==null&&su(La,t),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<Na.length;a++){var o=Na[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)d_(a),a.blockedOn===null&&Na.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],M=c[Sn]||null;if(typeof f=="function")M||m_(a);else if(M){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,M=f[Sn]||null)T=M.formAction;else if(Zf(c)!==null)continue}else T=M.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),m_(a)}}}function Qf(t){this._internalRoot=t}lu.prototype.render=Qf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Kn();l_(a,o,t,n,null,null)},lu.prototype.unmount=Qf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;l_(t.current,2,null,t,null,null),kl(),n[Bn]=null}};function lu(t){this._internalRoot=t}lu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Et();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Na.length&&n!==0&&n<Na[a].priority;a++);Na.splice(a,0,t),a===0&&d_(t)}};var g_=e.version;if(g_!=="19.1.0")throw Error(r(527,g_,"19.1.0"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var wS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uu.isDisabled&&uu.supportsFiber)try{fe=uu.inject(wS),Pe=uu}catch{}}return Uo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=Lm,f=Nm,M=Om,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=s_(t,1,!1,null,null,a,o,c,f,M,T,null),t[Bn]=n.current,Nf(t),new Qf(n)},Uo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",f=Lm,M=Nm,T=Om,P=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=s_(t,1,!0,n,a??null,o,c,f,M,T,P,J),n.context=o_(null),a=n.current,o=Kn(),o=Gt(o),c=ga(o),c.callback=null,_a(a,c,o),a=o,n.current.lanes=a,me(n,a),Ri(n),t[Bn]=n.current,Nf(t),new lu(n)},Uo.version="19.1.0",Uo}var A_;function FS(){if(A_)return eh.exports;A_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),eh.exports=zS(),eh.exports}var HS=FS(),Lo={},R_;function GS(){if(R_)return Lo;R_=1,Object.defineProperty(Lo,"__esModule",{value:!0}),Lo.parse=h,Lo.serialize=p;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,u=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function h(x,y){const E=new u,A=x.length;if(A<2)return E;const S=(y==null?void 0:y.decode)||g;let _=0;do{const O=x.indexOf("=",_);if(O===-1)break;const U=x.indexOf(";",_),D=U===-1?A:U;if(O>D){_=x.lastIndexOf(";",O-1)+1;continue}const F=d(x,_,O),G=m(x,O,F),I=x.slice(F,G);if(E[I]===void 0){let X=d(x,O+1,D),w=m(x,D,X);const C=S(x.slice(X,w));E[I]=C}_=D+1}while(_<A);return E}function d(x,y,E){do{const A=x.charCodeAt(y);if(A!==32&&A!==9)return y}while(++y<E);return E}function m(x,y,E){for(;y>E;){const A=x.charCodeAt(--y);if(A!==32&&A!==9)return y+1}return E}function p(x,y,E){const A=(E==null?void 0:E.encode)||encodeURIComponent;if(!s.test(x))throw new TypeError(`argument name is invalid: ${x}`);const S=A(y);if(!e.test(S))throw new TypeError(`argument val is invalid: ${y}`);let _=x+"="+S;if(!E)return _;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);_+="; Max-Age="+E.maxAge}if(E.domain){if(!i.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);_+="; Domain="+E.domain}if(E.path){if(!r.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);_+="; Path="+E.path}if(E.expires){if(!v(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);_+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(_+="; HttpOnly"),E.secure&&(_+="; Secure"),E.partitioned&&(_+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return _}function g(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function v(x){return l.call(x)==="[object Date]"}return Lo}GS();var C_="popstate";function VS(s={}){function e(l,u){let{pathname:h="/",search:d="",hash:m=""}=Cr(l.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),zh("",{pathname:h,search:d,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function i(l,u){let h=l.document.querySelector("base"),d="";if(h&&h.getAttribute("href")){let m=l.location.href,p=m.indexOf("#");d=p===-1?m:m.slice(0,p)}return d+"#"+(typeof u=="string"?u:Go(u))}function r(l,u){Si(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return XS(e,i,r,s)}function Yt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Si(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function kS(){return Math.random().toString(36).substring(2,10)}function w_(s,e){return{usr:s.state,key:s.key,idx:e}}function zh(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Cr(e):e,state:i,key:e&&e.key||r||kS()}}function Go({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Cr(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function XS(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,h=l.history,d="POP",m=null,p=g();p==null&&(p=0,h.replaceState({...h.state,idx:p},""));function g(){return(h.state||{idx:null}).idx}function v(){d="POP";let S=g(),_=S==null?null:S-p;p=S,m&&m({action:d,location:A.location,delta:_})}function x(S,_){d="PUSH";let O=zh(A.location,S,_);i&&i(O,S),p=g()+1;let U=w_(O,p),D=A.createHref(O);try{h.pushState(U,"",D)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;l.location.assign(D)}u&&m&&m({action:d,location:A.location,delta:1})}function y(S,_){d="REPLACE";let O=zh(A.location,S,_);i&&i(O,S),p=g();let U=w_(O,p),D=A.createHref(O);h.replaceState(U,"",D),u&&m&&m({action:d,location:A.location,delta:0})}function E(S){return WS(S)}let A={get action(){return d},get location(){return s(l,h)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(C_,v),m=S,()=>{l.removeEventListener(C_,v),m=null}},createHref(S){return e(l,S)},createURL:E,encodeLocation(S){let _=E(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:y,go(S){return h.go(S)}};return A}function WS(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Yt(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Go(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function Ov(s,e,i="/"){return qS(s,e,i,!1)}function qS(s,e,i,r){let l=typeof e=="string"?Cr(e):e,u=oa(l.pathname||"/",i);if(u==null)return null;let h=Pv(s);YS(h);let d=null;for(let m=0;d==null&&m<h.length;++m){let p=ay(u);d=ny(h[m],p,r)}return d}function Pv(s,e=[],i=[],r=""){let l=(u,h,d)=>{let m={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};m.relativePath.startsWith("/")&&(Yt(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let p=ra([r,m.relativePath]),g=i.concat(m);u.children&&u.children.length>0&&(Yt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Pv(u.children,e,g,p)),!(u.path==null&&!u.index)&&e.push({path:p,score:ey(p,u.index),routesMeta:g})};return s.forEach((u,h)=>{var d;if(u.path===""||!((d=u.path)!=null&&d.includes("?")))l(u,h);else for(let m of Bv(u.path))l(u,h,m)}),e}function Bv(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let h=Bv(r.join("/")),d=[];return d.push(...h.map(m=>m===""?u:[u,m].join("/"))),l&&d.push(...h),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function YS(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:ty(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var jS=/^:[\w-]+$/,ZS=3,KS=2,QS=1,JS=10,$S=-2,D_=s=>s==="*";function ey(s,e){let i=s.split("/"),r=i.length;return i.some(D_)&&(r+=$S),e&&(r+=KS),i.filter(l=>!D_(l)).reduce((l,u)=>l+(jS.test(u)?ZS:u===""?QS:JS),r)}function ty(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function ny(s,e,i=!1){let{routesMeta:r}=s,l={},u="/",h=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,g=u==="/"?e:e.slice(u.length)||"/",v=Vu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),x=m.route;if(!v&&p&&i&&!r[r.length-1].route.index&&(v=Vu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),h.push({params:l,pathname:ra([u,v.pathname]),pathnameBase:ly(ra([u,v.pathnameBase])),route:x}),v.pathnameBase!=="/"&&(u=ra([u,v.pathnameBase]))}return h}function Vu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=iy(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let u=l[0],h=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:v},x)=>{if(g==="*"){let E=d[x]||"";h=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const y=d[x];return v&&!y?p[g]=void 0:p[g]=(y||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:h,pattern:s}}function iy(s,e=!1,i=!0){Si(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function ay(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Si(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function oa(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function ry(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Cr(s):s;return{pathname:i?i.startsWith("/")?i:sy(i,e):e,search:uy(r),hash:cy(l)}}function sy(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function ah(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function oy(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Iv(s){let e=oy(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function zv(s,e,i,r=!1){let l;typeof s=="string"?l=Cr(s):(l={...s},Yt(!l.pathname||!l.pathname.includes("?"),ah("?","pathname","search",l)),Yt(!l.pathname||!l.pathname.includes("#"),ah("#","pathname","hash",l)),Yt(!l.search||!l.search.includes("#"),ah("#","search","hash",l)));let u=s===""||l.pathname==="",h=u?"/":l.pathname,d;if(h==null)d=i;else{let v=e.length-1;if(!r&&h.startsWith("..")){let x=h.split("/");for(;x[0]==="..";)x.shift(),v-=1;l.pathname=x.join("/")}d=v>=0?e[v]:"/"}let m=ry(l,d),p=h&&h!=="/"&&h.endsWith("/"),g=(u||h===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var ra=s=>s.join("/").replace(/\/\/+/g,"/"),ly=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),uy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,cy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function fy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var Fv=["POST","PUT","PATCH","DELETE"];new Set(Fv);var hy=["GET",...Fv];new Set(hy);var Ns=ve.createContext(null);Ns.displayName="DataRouter";var qu=ve.createContext(null);qu.displayName="DataRouterState";var Hv=ve.createContext({isTransitioning:!1});Hv.displayName="ViewTransition";var dy=ve.createContext(new Map);dy.displayName="Fetchers";var py=ve.createContext(null);py.displayName="Await";var Ui=ve.createContext(null);Ui.displayName="Navigation";var Yo=ve.createContext(null);Yo.displayName="Location";var la=ve.createContext({outlet:null,matches:[],isDataRoute:!1});la.displayName="Route";var Rd=ve.createContext(null);Rd.displayName="RouteError";function my(s,{relative:e}={}){Yt(jo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=ve.useContext(Ui),{hash:l,pathname:u,search:h}=Zo(s,{relative:e}),d=u;return i!=="/"&&(d=u==="/"?i:ra([i,u])),r.createHref({pathname:d,search:h,hash:l})}function jo(){return ve.useContext(Yo)!=null}function wr(){return Yt(jo(),"useLocation() may be used only in the context of a <Router> component."),ve.useContext(Yo).location}var Gv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Vv(s){ve.useContext(Ui).static||ve.useLayoutEffect(s)}function gy(){let{isDataRoute:s}=ve.useContext(la);return s?wy():_y()}function _y(){Yt(jo(),"useNavigate() may be used only in the context of a <Router> component.");let s=ve.useContext(Ns),{basename:e,navigator:i}=ve.useContext(Ui),{matches:r}=ve.useContext(la),{pathname:l}=wr(),u=JSON.stringify(Iv(r)),h=ve.useRef(!1);return Vv(()=>{h.current=!0}),ve.useCallback((m,p={})=>{if(Si(h.current,Gv),!h.current)return;if(typeof m=="number"){i.go(m);return}let g=zv(m,JSON.parse(u),l,p.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:ra([e,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[e,i,u,l,s])}ve.createContext(null);function Zo(s,{relative:e}={}){let{matches:i}=ve.useContext(la),{pathname:r}=wr(),l=JSON.stringify(Iv(i));return ve.useMemo(()=>zv(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function vy(s,e){return kv(s,e)}function kv(s,e,i,r){var O;Yt(jo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:u}=ve.useContext(Ui),{matches:h}=ve.useContext(la),d=h[h.length-1],m=d?d.params:{},p=d?d.pathname:"/",g=d?d.pathnameBase:"/",v=d&&d.route;{let U=v&&v.path||"";Xv(p,!v||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let x=wr(),y;if(e){let U=typeof e=="string"?Cr(e):e;Yt(g==="/"||((O=U.pathname)==null?void 0:O.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${U.pathname}" was given in the \`location\` prop.`),y=U}else y=x;let E=y.pathname||"/",A=E;if(g!=="/"){let U=g.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(U.length).join("/")}let S=!u&&i&&i.matches&&i.matches.length>0?i.matches:Ov(s,{pathname:A});Si(v||S!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Si(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=Ey(S&&S.map(U=>Object.assign({},U,{params:Object.assign({},m,U.params),pathname:ra([g,l.encodeLocation?l.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?g:ra([g,l.encodeLocation?l.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),h,i,r);return e&&_?ve.createElement(Yo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},_):_}function xy(){let s=Cy(),e=fy(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},h=null;return console.error("Error handled by React Router default ErrorBoundary:",s),h=ve.createElement(ve.Fragment,null,ve.createElement("p",null,"💿 Hey developer 👋"),ve.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ve.createElement("code",{style:u},"ErrorBoundary")," or"," ",ve.createElement("code",{style:u},"errorElement")," prop on your route.")),ve.createElement(ve.Fragment,null,ve.createElement("h2",null,"Unexpected Application Error!"),ve.createElement("h3",{style:{fontStyle:"italic"}},e),i?ve.createElement("pre",{style:l},i):null,h)}var Sy=ve.createElement(xy,null),yy=class extends ve.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){console.error("React Router caught the following error during render",s,e)}render(){return this.state.error!==void 0?ve.createElement(la.Provider,{value:this.props.routeContext},ve.createElement(Rd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function My({routeContext:s,match:e,children:i}){let r=ve.useContext(Ns);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),ve.createElement(la.Provider,{value:s},i)}function Ey(s,e=[],i=null,r=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let l=s,u=i==null?void 0:i.errors;if(u!=null){let m=l.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id])!==void 0);Yt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let h=!1,d=-1;if(i)for(let m=0;m<l.length;m++){let p=l[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=m),p.route.id){let{loaderData:g,errors:v}=i,x=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!v||v[p.route.id]===void 0);if(p.route.lazy||x){h=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((m,p,g)=>{let v,x=!1,y=null,E=null;i&&(v=u&&p.route.id?u[p.route.id]:void 0,y=p.route.errorElement||Sy,h&&(d<0&&g===0?(Xv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,E=null):d===g&&(x=!0,E=p.route.hydrateFallbackElement||null)));let A=e.concat(l.slice(0,g+1)),S=()=>{let _;return v?_=y:x?_=E:p.route.Component?_=ve.createElement(p.route.Component,null):p.route.element?_=p.route.element:_=m,ve.createElement(My,{match:p,routeContext:{outlet:m,matches:A,isDataRoute:i!=null},children:_})};return i&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?ve.createElement(yy,{location:i.location,revalidation:i.revalidation,component:y,error:v,children:S(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):S()},null)}function Cd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ty(s){let e=ve.useContext(Ns);return Yt(e,Cd(s)),e}function by(s){let e=ve.useContext(qu);return Yt(e,Cd(s)),e}function Ay(s){let e=ve.useContext(la);return Yt(e,Cd(s)),e}function wd(s){let e=Ay(s),i=e.matches[e.matches.length-1];return Yt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function Ry(){return wd("useRouteId")}function Cy(){var r;let s=ve.useContext(Rd),e=by("useRouteError"),i=wd("useRouteError");return s!==void 0?s:(r=e.errors)==null?void 0:r[i]}function wy(){let{router:s}=Ty("useNavigate"),e=wd("useNavigate"),i=ve.useRef(!1);return Vv(()=>{i.current=!0}),ve.useCallback(async(l,u={})=>{Si(i.current,Gv),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:e,...u}))},[s,e])}var U_={};function Xv(s,e,i){!e&&!U_[s]&&(U_[s]=!0,Si(!1,i))}ve.memo(Dy);function Dy({routes:s,future:e,state:i}){return kv(s,void 0,i,e)}function Lu(s){Yt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Uy({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:u=!1}){Yt(!jo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),d=ve.useMemo(()=>({basename:h,navigator:l,static:u,future:{}}),[h,l,u]);typeof i=="string"&&(i=Cr(i));let{pathname:m="/",search:p="",hash:g="",state:v=null,key:x="default"}=i,y=ve.useMemo(()=>{let E=oa(m,h);return E==null?null:{location:{pathname:E,search:p,hash:g,state:v,key:x},navigationType:r}},[h,m,p,g,v,x,r]);return Si(y!=null,`<Router basename="${h}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:ve.createElement(Ui.Provider,{value:d},ve.createElement(Yo.Provider,{children:e,value:y}))}function Ly({children:s,location:e}){return vy(Fh(s),e)}function Fh(s,e=[]){let i=[];return ve.Children.forEach(s,(r,l)=>{if(!ve.isValidElement(r))return;let u=[...e,l];if(r.type===ve.Fragment){i.push.apply(i,Fh(r.props.children,u));return}Yt(r.type===Lu,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Yt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let h={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(h.children=Fh(r.props.children,u)),i.push(h)}),i}var Nu="get",Ou="application/x-www-form-urlencoded";function Yu(s){return s!=null&&typeof s.tagName=="string"}function Ny(s){return Yu(s)&&s.tagName.toLowerCase()==="button"}function Oy(s){return Yu(s)&&s.tagName.toLowerCase()==="form"}function Py(s){return Yu(s)&&s.tagName.toLowerCase()==="input"}function By(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Iy(s,e){return s.button===0&&(!e||e==="_self")&&!By(s)}var cu=null;function zy(){if(cu===null)try{new FormData(document.createElement("form"),0),cu=!1}catch{cu=!0}return cu}var Fy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function rh(s){return s!=null&&!Fy.has(s)?(Si(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ou}"`),null):s}function Hy(s,e){let i,r,l,u,h;if(Oy(s)){let d=s.getAttribute("action");r=d?oa(d,e):null,i=s.getAttribute("method")||Nu,l=rh(s.getAttribute("enctype"))||Ou,u=new FormData(s)}else if(Ny(s)||Py(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(r=m?oa(m,e):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Nu,l=rh(s.getAttribute("formenctype"))||rh(d.getAttribute("enctype"))||Ou,u=new FormData(d,s),!zy()){let{name:p,type:g,value:v}=s;if(g==="image"){let x=p?`${p}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else p&&u.append(p,v)}}else{if(Yu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Nu,r=null,l=Ou,h=s}return u&&l==="text/plain"&&(h=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:h}}function Dd(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}async function Gy(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Vy(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function ky(s,e,i){let r=await Promise.all(s.map(async l=>{let u=e.routes[l.route.id];if(u){let h=await Gy(u,i);return h.links?h.links():[]}return[]}));return Yy(r.flat(1).filter(Vy).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function L_(s,e,i,r,l,u){let h=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>{var g;return i[p].pathname!==m.pathname||((g=i[p].route.path)==null?void 0:g.endsWith("*"))&&i[p].params["*"]!==m.params["*"]};return u==="assets"?e.filter((m,p)=>h(m,p)||d(m,p)):u==="data"?e.filter((m,p)=>{var v;let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(h(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let x=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((v=i[0])==null?void 0:v.params)||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function Xy(s,e,{includeHydrateFallback:i}={}){return Wy(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function Wy(s){return[...new Set(s)]}function qy(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function Yy(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let u=JSON.stringify(qy(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var jy=new Set([100,101,204,205]);function Zy(s,e){let i=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i.pathname==="/"?i.pathname="_root.data":e&&oa(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function Wv(){let s=ve.useContext(Ns);return Dd(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Ky(){let s=ve.useContext(qu);return Dd(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Ud=ve.createContext(void 0);Ud.displayName="FrameworkContext";function qv(){let s=ve.useContext(Ud);return Dd(s,"You must render this element inside a <HydratedRouter> element"),s}function Qy(s,e){let i=ve.useContext(Ud),[r,l]=ve.useState(!1),[u,h]=ve.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:v}=e,x=ve.useRef(null);ve.useEffect(()=>{if(s==="render"&&h(!0),s==="viewport"){let A=_=>{_.forEach(O=>{h(O.isIntersecting)})},S=new IntersectionObserver(A,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[s]),ve.useEffect(()=>{if(r){let A=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(A)}}},[r]);let y=()=>{l(!0)},E=()=>{l(!1),h(!1)};return i?s!=="intent"?[u,x,{}]:[u,x,{onFocus:No(d,y),onBlur:No(m,E),onMouseEnter:No(p,y),onMouseLeave:No(g,E),onTouchStart:No(v,y)}]:[!1,x,{}]}function No(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function Jy({page:s,...e}){let{router:i}=Wv(),r=ve.useMemo(()=>Ov(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?ve.createElement(eM,{page:s,matches:r,...e}):null}function $y(s){let{manifest:e,routeModules:i}=qv(),[r,l]=ve.useState([]);return ve.useEffect(()=>{let u=!1;return ky(s,e,i).then(h=>{u||l(h)}),()=>{u=!0}},[s,e,i]),r}function eM({page:s,matches:e,...i}){let r=wr(),{manifest:l,routeModules:u}=qv(),{basename:h}=Wv(),{loaderData:d,matches:m}=Ky(),p=ve.useMemo(()=>L_(s,e,m,l,r,"data"),[s,e,m,l,r]),g=ve.useMemo(()=>L_(s,e,m,l,r,"assets"),[s,e,m,l,r]),v=ve.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,A=!1;if(e.forEach(_=>{var U;let O=l.routes[_.route.id];!O||!O.hasLoader||(!p.some(D=>D.route.id===_.route.id)&&_.route.id in d&&((U=u[_.route.id])!=null&&U.shouldRevalidate)||O.hasClientLoader?A=!0:E.add(_.route.id))}),E.size===0)return[];let S=Zy(s,h);return A&&E.size>0&&S.searchParams.set("_routes",e.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[h,d,r,l,p,e,s,u]),x=ve.useMemo(()=>Xy(g,l),[g,l]),y=$y(g);return ve.createElement(ve.Fragment,null,v.map(E=>ve.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),x.map(E=>ve.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),y.map(({key:E,link:A})=>ve.createElement("link",{key:E,...A})))}function tM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var Yv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Yv&&(window.__reactRouterVersion="7.6.0")}catch{}function nM({basename:s,children:e,window:i}){let r=ve.useRef();r.current==null&&(r.current=VS({window:i,v5Compat:!0}));let l=r.current,[u,h]=ve.useState({action:l.action,location:l.location}),d=ve.useCallback(m=>{ve.startTransition(()=>h(m))},[h]);return ve.useLayoutEffect(()=>l.listen(d),[l,d]),ve.createElement(Uy,{basename:s,children:e,location:u.location,navigationType:u.action,navigator:l})}var jv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zv=ve.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:h,state:d,target:m,to:p,preventScrollReset:g,viewTransition:v,...x},y){let{basename:E}=ve.useContext(Ui),A=typeof p=="string"&&jv.test(p),S,_=!1;if(typeof p=="string"&&A&&(S=p,Yv))try{let w=new URL(window.location.href),C=p.startsWith("//")?new URL(w.protocol+p):new URL(p),H=oa(C.pathname,E);C.origin===w.origin&&H!=null?p=H+C.search+C.hash:_=!0}catch{Si(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let O=my(p,{relative:l}),[U,D,F]=Qy(r,x),G=sM(p,{replace:h,state:d,target:m,preventScrollReset:g,relative:l,viewTransition:v});function I(w){e&&e(w),w.defaultPrevented||G(w)}let X=ve.createElement("a",{...x,...F,href:S||O,onClick:_||u?e:I,ref:tM(y,D),target:m,"data-discover":!A&&i==="render"?"true":void 0});return U&&!A?ve.createElement(ve.Fragment,null,X,ve.createElement(Jy,{page:O})):X});Zv.displayName="Link";var iM=ve.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:h,viewTransition:d,children:m,...p},g){let v=Zo(h,{relative:p.relative}),x=wr(),y=ve.useContext(qu),{navigator:E,basename:A}=ve.useContext(Ui),S=y!=null&&fM(v)&&d===!0,_=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,O=x.pathname,U=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(O=O.toLowerCase(),U=U?U.toLowerCase():null,_=_.toLowerCase()),U&&A&&(U=oa(U,A)||U);const D=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let F=O===_||!l&&O.startsWith(_)&&O.charAt(D)==="/",G=U!=null&&(U===_||!l&&U.startsWith(_)&&U.charAt(_.length)==="/"),I={isActive:F,isPending:G,isTransitioning:S},X=F?e:void 0,w;typeof r=="function"?w=r(I):w=[r,F?"active":null,G?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let C=typeof u=="function"?u(I):u;return ve.createElement(Zv,{...p,"aria-current":X,className:w,ref:g,style:C,to:h,viewTransition:d},typeof m=="function"?m(I):m)});iM.displayName="NavLink";var aM=ve.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:u,method:h=Nu,action:d,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:v,...x},y)=>{let E=uM(),A=cM(d,{relative:p}),S=h.toLowerCase()==="get"?"get":"post",_=typeof d=="string"&&jv.test(d),O=U=>{if(m&&m(U),U.defaultPrevented)return;U.preventDefault();let D=U.nativeEvent.submitter,F=(D==null?void 0:D.getAttribute("formmethod"))||h;E(D||U.currentTarget,{fetcherKey:e,method:F,navigate:i,replace:l,state:u,relative:p,preventScrollReset:g,viewTransition:v})};return ve.createElement("form",{ref:y,method:S,action:A,onSubmit:r?m:O,...x,"data-discover":!_&&s==="render"?"true":void 0})});aM.displayName="Form";function rM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kv(s){let e=ve.useContext(Ns);return Yt(e,rM(s)),e}function sM(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:h}={}){let d=gy(),m=wr(),p=Zo(s,{relative:u});return ve.useCallback(g=>{if(Iy(g,e)){g.preventDefault();let v=i!==void 0?i:Go(m)===Go(p);d(s,{replace:v,state:r,preventScrollReset:l,relative:u,viewTransition:h})}},[m,d,p,i,r,e,s,l,u,h])}var oM=0,lM=()=>`__${String(++oM)}__`;function uM(){let{router:s}=Kv("useSubmit"),{basename:e}=ve.useContext(Ui),i=Ry();return ve.useCallback(async(r,l={})=>{let{action:u,method:h,encType:d,formData:m,body:p}=Hy(r,e);if(l.navigate===!1){let g=l.fetcherKey||lM();await s.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||h,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||h,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,e,i])}function cM(s,{relative:e}={}){let{basename:i}=ve.useContext(Ui),r=ve.useContext(la);Yt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...Zo(s||".",{relative:e})},h=wr();if(s==null){u.search=h.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(g=>g==="")){d.delete("index"),m.filter(v=>v).forEach(v=>d.append("index",v));let g=d.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:ra([i,u.pathname])),Go(u)}function fM(s,e={}){let i=ve.useContext(Hv);Yt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Kv("useViewTransitionState"),l=Zo(s,{relative:e.relative});if(!i.isTransitioning)return!1;let u=oa(i.currentLocation.pathname,r)||i.currentLocation.pathname,h=oa(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Vu(l.pathname,h)!=null||Vu(l.pathname,u)!=null}[...jy];const hM="/egebasari/assets/logo-LIj2ibPX.jpg";function dM(){return Se.jsxs("header",{className:"header",children:[Se.jsxs("div",{className:"logo",children:[Se.jsx("img",{src:hM,alt:"Ege Başarı Logo",className:"logo-img"}),Se.jsx("h2",{children:"Ege Başarı Kurs Merkezi"})]}),Se.jsxs("nav",{className:"navLinks",children:[Se.jsx("a",{href:"#hakkimizda",children:"Hakkımızda"}),Se.jsx("a",{href:"#programlar",children:"Programlar"}),Se.jsx("a",{href:"#kayit",children:"Kayıt"}),Se.jsx("a",{href:"#kaynaklar",children:"Kaynaklar"}),Se.jsx("a",{href:"#iletisim",children:"İletişim"})]}),Se.jsx("button",{className:"btnPrimary",children:"Şimdi Başvur"})]})}const pM="/egebasari/assets/image1-C1Y_qXM7.jpg",mM="/egebasari/assets/image2-BvPSn0Tl.jpg",sh="/egebasari/assets/image3-Do10bEnS.jpg",gM="/egebasari/assets/cap-D3saGWaN.jpg",_M="/egebasari/assets/english-BjA3SsP1.jpg",vM="/egebasari/assets/video-B80usdWB.mp4";function N_(){return Se.jsxs("div",{className:"app",children:[Se.jsxs("main",{className:"mainContent",children:[Se.jsxs("section",{id:"hakkimizda",className:"hero",children:[" ",Se.jsx("video",{className:"hero-video",src:vM,autoPlay:!0,muted:!0,playsInline:!0,preload:"auto",loop:!0}),Se.jsxs("div",{className:"heroOverlay",children:[Se.jsxs("div",{className:"heroText",children:[Se.jsx("h1",{children:"Öğrencileri Başarıya Taşıyoruz"}),Se.jsx("p",{children:"Ege Başarı Kurs Merkezi, Türkiye'deki öğrencilere olağanüstü eğitim desteği sağlamaya adanmıştır. Kapsamlı programlarımız ve deneyimli eğitmenlerimiz, öğrencilerin akademik hedeflerine ulaşmalarını sağlar."})]}),Se.jsx("button",{className:"btnSecondary",children:"Programları Keşfet"})]})]}),Se.jsxs("section",{id:"programlar",children:[Se.jsx("h2",{className:"sectionTitle",children:"Programlarımız"}),Se.jsxs("div",{className:"programGrid",children:[Se.jsxs("div",{className:"card",children:[Se.jsx("img",{src:gM,alt:"Ege Başarı Logo",className:"card-img"}),Se.jsx("h3",{children:"LGS Hazırlık"})]}),Se.jsxs("div",{className:"card",children:[Se.jsx("img",{src:_M,alt:"Ege Başarı Logo",className:"card-img"}),Se.jsx("h3",{children:"İngilizce Eğitimi"})]}),Se.jsxs("div",{className:"card",children:[Se.jsx("img",{src:sh,alt:"Ege Başarı Logo",className:"card-img"}),Se.jsx("h3",{children:"İlkokul"})]}),Se.jsxs("div",{className:"card",children:[Se.jsx("img",{src:sh,alt:"Ege Başarı Logo",className:"card-img"}),Se.jsx("h3",{children:"Ortaokul"})]})]})]}),Se.jsxs("section",{className:"whyChoose",id:"kaynaklar",children:[Se.jsx("h2",{className:"sectionTitle",children:"Neden Bizi Seçmelisiniz?"}),Se.jsxs("div",{className:"featureGrid",children:[Se.jsxs("div",{className:"card",children:[Se.jsx("img",{src:pM,alt:"Ege Başarı Logo",className:"card-img"}),Se.jsx("h3",{children:"Akademik Destek"}),Se.jsxs("ul",{className:"home-ul",children:[Se.jsx("li",{children:"Ödev Takibi"}),Se.jsx("li",{children:"Birebir Dersler"}),Se.jsx("li",{children:"Düzenli Deneme Sınavları"})]})]}),Se.jsxs("div",{className:"card",children:[Se.jsx("img",{src:mM,alt:"Ege Başarı Logo",className:"card-img"}),Se.jsx("h3",{children:"Gelişim ve Takip"}),Se.jsxs("ul",{className:"home-ul",children:[Se.jsx("li",{children:"Aylık Değerlendirme Raporları"}),Se.jsx("li",{children:"Parmak İzi Giriş-Çıkış Sistemi"}),Se.jsx("li",{children:"Bireysel Gelişim Takibi"})]})]}),Se.jsxs("div",{className:"card",children:[Se.jsx("img",{src:sh,alt:"Ege Başarı Logo",className:"card-img"}),Se.jsx("h3",{children:"Güvenli Ortam"}),Se.jsxs("ul",{className:"home-ul",children:[Se.jsx("li",{children:"Deneyimli Kadro"}),Se.jsx("li",{children:"Açık İletişim"}),Se.jsx("li",{children:"Şeffaf Kayıt Süreci"})]})]})]})]}),Se.jsxs("section",{id:"basari-hikayeleri",className:"testimonials",children:[Se.jsx("h2",{className:"sectionTitle",children:"Öğrenci Başarı Hikayeleri"}),Se.jsxs("div",{className:"testimonialStrip",children:[Se.jsxs("div",{className:"testimonialCard",children:[Se.jsx("div",{className:"testimonialImage",style:{backgroundImage:'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7kcp_XS9T8ypLO8z3GGEiInu3JejFMueOYdSI0l24x3S0UtLrBnGjhVuNp6xDHBqDdckUb6CU9qCFena4nbwrzUyqIitTTPCuIwS6LgK_6gY6KQz2zK-UuuhRyUYgI3pA0w9gi70jFRHW2OYF3ULMaLVu-Tm45ENX7Q6zOPe6b63Xcl4VHpcX2QV5ZLG22LZXXQi9gEIqxcbTonjkdHcpk3-ywun9c4P40aXGDm05FWbBJqxDFV-Nyczn0Bv_OSycXi7mopHXeQzP")'}}),Se.jsxs("div",{className:"testimonialContent",children:[Se.jsx("h3",{children:"Aylin'in En İyi Üniversiteye Yolculuğu"}),Se.jsx("p",{children:"Eski bir öğrenci olan Aylin, rehberliğimizle Türkiye'nin en iyi üniversitelerinden birine kabul edilme deneyimini paylaşıyor."})]})]}),Se.jsxs("div",{className:"testimonialCard",children:[Se.jsx("div",{className:"testimonialImage",style:{backgroundImage:'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDf31R_XhCi8G3V337YSWQxqaBNEeEmmkI59v1CeBT6Q5Poo6IRzLwG2Mi90oXrMzqycpTqmO0bgg1bVUFTSzqmVHnw8GBXSa0dLzV868n-mJKcOFgGx_r_l6JwNsQpwLeycfgHkCp_8HLrfOzsGsIBnhbAG_zI90yuSANbDUW1Ali9ZRCLl9AjB7FU4S8-3P0cKI4HSNp8v0rXs1jAh4nVMgzdCpQRbLWKAoRPA8r7UeZduIL6JHqI2DnlOi1LVJDICfVhH6DYZBxH")'}}),Se.jsxs("div",{className:"testimonialContent",children:[Se.jsx("h3",{children:"Mehmet'in Gelişen Notları"}),Se.jsx("p",{children:"Mehmet'in hikayesi, kişiselleştirilmiş desteğimizin kilit derslerde notlarını önemli ölçüde yükseltmesine nasıl yardımcı olduğunu vurguluyor."})]})]}),Se.jsxs("div",{className:"testimonialCard",children:[Se.jsx("div",{className:"testimonialImage",style:{backgroundImage:'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCL38BH49r_s1moVU8CLznj7gdmBXUcYDGNEExsstDdobmWEc0uiyhz1isv2aecfLmw8j5bdVfqVV-P9ZTG54eEGTKdwHweOfuE7brMHsUcPVLfKlfy8yxOIFS4UqddjuyKs1XPBud9I3N00IfxaGlxYmTbLBAWIUerTK837OlKiqJ1Qd7LJSu8zMDXTB7cHZn-80V_Q51XU_RQ-BfAe8WiB3vVxSagdtyOtklLqdHdz3VKpKRTydh9WEy1x7wSDDbNL_F0qWMI0gsF")'}}),Se.jsxs("div",{className:"testimonialContent",children:[Se.jsx("h3",{children:"İşbirlikçi Öğrenme Başarısı"}),Se.jsx("p",{children:"İşbirlikçi öğrenme yaklaşımımız, Elif ve Can gibi birçok öğrencinin akademik hedeflerine ulaşmasına yardımcı oldu."})]})]})]})]}),Se.jsxs("section",{id:"kayit",className:"cta",children:[Se.jsx("h2",{children:"Bir Sonraki Adımı Atmaya Hazır mısınız?"}),Se.jsx("p",{children:"Ege Başarı Kurs Merkezi'ne katılın ve tüm potansiyelinizi ortaya çıkarın. Akademik başarıya giden yolculuğunuza başlamak için bugün başvurun."}),Se.jsx("button",{className:"btnPrimary",children:"Şimdi Başvur"})]})]}),Se.jsxs("footer",{id:"iletisim",className:"footer",children:[Se.jsxs("nav",{className:"footerNav",children:[Se.jsx("a",{href:"#",children:"Hakkımızda"}),Se.jsx("a",{href:"#",children:"Programlar"}),Se.jsx("a",{href:"#",children:"Kayıt"}),Se.jsx("a",{href:"#",children:"Kaynaklar"}),Se.jsx("a",{href:"#",children:"İletişim"})]}),Se.jsx("p",{children:"© 2023 Ege Başarı Kurs Merkezi. Tüm hakları saklıdır."})]})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ld="176",xM=0,O_=1,SM=2,Qv=1,Jv=2,na=3,qa=0,kn=1,On=2,Xa=0,As=1,P_=2,B_=3,I_=4,yM=5,Mr=100,MM=101,EM=102,TM=103,bM=104,AM=200,RM=201,CM=202,wM=203,Hh=204,Gh=205,DM=206,UM=207,LM=208,NM=209,OM=210,PM=211,BM=212,IM=213,zM=214,Vh=0,kh=1,Xh=2,Cs=3,Wh=4,qh=5,Yh=6,jh=7,$v=0,FM=1,HM=2,Wa=0,GM=1,VM=2,kM=3,e0=4,XM=5,WM=6,qM=7,t0=300,ws=301,Ds=302,Zh=303,Kh=304,ju=306,ku=1e3,Va=1001,Qh=1002,xi=1003,YM=1004,fu=1005,ci=1006,oh=1007,Tr=1008,Di=1009,n0=1010,i0=1011,Vo=1012,Nd=1013,Ar=1014,ia=1015,Ko=1016,Od=1017,Pd=1018,ko=1020,a0=35902,r0=1021,s0=1022,vi=1023,Xo=1026,Wo=1027,o0=1028,Bd=1029,l0=1030,Id=1031,zd=1033,Pu=33776,Bu=33777,Iu=33778,zu=33779,Jh=35840,$h=35841,ed=35842,td=35843,nd=36196,id=37492,ad=37496,rd=37808,sd=37809,od=37810,ld=37811,ud=37812,cd=37813,fd=37814,hd=37815,dd=37816,pd=37817,md=37818,gd=37819,_d=37820,vd=37821,Fu=36492,xd=36494,Sd=36495,u0=36283,yd=36284,Md=36285,Ed=36286,jM=3200,ZM=3201,c0=0,KM=1,Ga="",li="srgb",Us="srgb-linear",Xu="linear",Bt="srgb",us=7680,z_=519,QM=512,JM=513,$M=514,f0=515,eE=516,tE=517,nE=518,iE=519,F_=35044,H_="300 es",aa=2e3,Wu=2001;class Dr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lh=Math.PI/180,Td=180/Math.PI;function Qo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function xt(s,e,i){return Math.max(e,Math.min(i,s))}function aE(s,e){return(s%e+e)%e}function uh(s,e,i){return(1-i)*s+i*e}function Oo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Gn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(e=0,i=0){Ct.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,i,r,l,u,h,d,m,p){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],y=r[5],E=r[8],A=l[0],S=l[3],_=l[6],O=l[1],U=l[4],D=l[7],F=l[2],G=l[5],I=l[8];return u[0]=h*A+d*O+m*F,u[3]=h*S+d*U+m*G,u[6]=h*_+d*D+m*I,u[1]=p*A+g*O+v*F,u[4]=p*S+g*U+v*G,u[7]=p*_+g*D+v*I,u[2]=x*A+y*O+E*F,u[5]=x*S+y*U+E*G,u[8]=x*_+y*D+E*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=g*h-d*p,x=d*m-g*u,y=p*u-h*m,E=i*v+r*x+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=v*A,e[1]=(l*p-g*r)*A,e[2]=(d*r-l*h)*A,e[3]=x*A,e[4]=(g*i-l*m)*A,e[5]=(l*u-d*i)*A,e[6]=y*A,e[7]=(r*m-p*i)*A,e[8]=(h*i-r*u)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(ch.makeScale(e,i)),this}rotate(e){return this.premultiply(ch.makeRotation(-e)),this}translate(e,i){return this.premultiply(ch.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ch=new st;function h0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function qo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function rE(){const s=qo("canvas");return s.style.display="block",s}const G_={};function Hu(s){s in G_||(G_[s]=!0,console.warn(s))}function sE(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function oE(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lE(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const V_=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),k_=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uE(){const s={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Bt&&(l.r=sa(l.r),l.g=sa(l.g),l.b=sa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Bt&&(l.r=Rs(l.r),l.g=Rs(l.g),l.b=Rs(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ga?Xu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Us]:{primaries:e,whitePoint:r,transfer:Xu,toXYZ:V_,fromXYZ:k_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:r,transfer:Bt,toXYZ:V_,fromXYZ:k_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),s}const At=uE();function sa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let cs;class cE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{cs===void 0&&(cs=qo("canvas")),cs.width=e.width,cs.height=e.height;const l=cs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=cs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=qo("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=sa(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(sa(i[r]/255)*255):i[r]=sa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fE=0;class Fd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=Qo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(fh(l[h].image)):u.push(fh(l[h]))}else u=fh(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function fh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hE=0;class Un extends Dr{constructor(e=Un.DEFAULT_IMAGE,i=Un.DEFAULT_MAPPING,r=Va,l=Va,u=ci,h=Tr,d=vi,m=Di,p=Un.DEFAULT_ANISOTROPY,g=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=Qo(),this.name="",this.source=new Fd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==t0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ku:e.x=e.x-Math.floor(e.x);break;case Va:e.x=e.x<0?0:1;break;case Qh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ku:e.y=e.y-Math.floor(e.y);break;case Va:e.y=e.y<0?0:1;break;case Qh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=t0;Un.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,i=0,r=0,l=1){Qt.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],v=m[8],x=m[1],y=m[5],E=m[9],A=m[2],S=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+A)<.1&&Math.abs(E+S)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,D=(y+1)/2,F=(_+1)/2,G=(g+x)/4,I=(v+A)/4,X=(E+S)/4;return U>D&&U>F?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=G/r,u=I/r):D>F?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=G/l,u=X/l):F<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(F),r=I/u,l=X/u),this.set(r,l,u,i),this}let O=Math.sqrt((S-E)*(S-E)+(v-A)*(v-A)+(x-g)*(x-g));return Math.abs(O)<.001&&(O=1),this.x=(S-E)/O,this.y=(v-A)/O,this.z=(x-g)/O,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this.w=xt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this.w=xt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dE extends Dr{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth?r.depth:1,this.scissor=new Qt(0,0,e,i),this.scissorTest=!1,this.viewport=new Qt(0,0,e,i);const l={width:e,height:i,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const u=new Un(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Fd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends dE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class d0 extends Un{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pE extends Un{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=u[h+0],y=u[h+1],E=u[h+2],A=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=x,e[i+1]=y,e[i+2]=E,e[i+3]=A;return}if(v!==A||m!==x||p!==y||g!==E){let S=1-d;const _=m*x+p*y+g*E+v*A,O=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const F=Math.sqrt(U),G=Math.atan2(F,_*O);S=Math.sin(S*G)/F,d=Math.sin(d*G)/F}const D=d*O;if(m=m*S+x*D,p=p*S+y*D,g=g*S+E*D,v=v*S+A*D,S===1-d){const F=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=F,p*=F,g*=F,v*=F}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[h],x=u[h+1],y=u[h+2],E=u[h+3];return e[i]=d*E+g*v+m*y-p*x,e[i+1]=m*E+g*x+p*v-d*y,e[i+2]=p*E+g*y+d*x-m*v,e[i+3]=g*E-d*v-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(u/2),x=m(r/2),y=m(l/2),E=m(u/2);switch(h){case"XYZ":this._x=x*g*v+p*y*E,this._y=p*y*v-x*g*E,this._z=p*g*E+x*y*v,this._w=p*g*v-x*y*E;break;case"YXZ":this._x=x*g*v+p*y*E,this._y=p*y*v-x*g*E,this._z=p*g*E-x*y*v,this._w=p*g*v+x*y*E;break;case"ZXY":this._x=x*g*v-p*y*E,this._y=p*y*v+x*g*E,this._z=p*g*E+x*y*v,this._w=p*g*v-x*y*E;break;case"ZYX":this._x=x*g*v-p*y*E,this._y=p*y*v+x*g*E,this._z=p*g*E-x*y*v,this._w=p*g*v+x*y*E;break;case"YZX":this._x=x*g*v+p*y*E,this._y=p*y*v+x*g*E,this._z=p*g*E-x*y*v,this._w=p*g*v-x*y*E;break;case"XZY":this._x=x*g*v-p*y*E,this._y=p*y*v-x*g*E,this._z=p*g*E+x*y*v,this._w=p*g*v+x*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+d+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(u-p)*y,this._z=(h-l)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(u-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(h-l)/y,this._x=(u+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,i=0,r=0){re.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(X_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(X_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),g=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+m*p+h*v-d*g,this.y=r+m*g+d*p-u*v,this.z=l+m*v+u*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return hh.copy(this).projectOnVector(e),this.sub(hh)}reflect(e){return this.sub(hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hh=new re,X_=new Jo;class Os{constructor(e=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(pi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(pi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=pi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,pi):pi.fromBufferAttribute(u,h),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),hu.copy(r.boundingBox)),hu.applyMatrix4(e.matrixWorld),this.union(hu)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),du.subVectors(this.max,Po),fs.subVectors(e.a,Po),hs.subVectors(e.b,Po),ds.subVectors(e.c,Po),Pa.subVectors(hs,fs),Ba.subVectors(ds,hs),dr.subVectors(fs,ds);let i=[0,-Pa.z,Pa.y,0,-Ba.z,Ba.y,0,-dr.z,dr.y,Pa.z,0,-Pa.x,Ba.z,0,-Ba.x,dr.z,0,-dr.x,-Pa.y,Pa.x,0,-Ba.y,Ba.x,0,-dr.y,dr.x,0];return!dh(i,fs,hs,ds,du)||(i=[1,0,0,0,1,0,0,0,1],!dh(i,fs,hs,ds,du))?!1:(pu.crossVectors(Pa,Ba),i=[pu.x,pu.y,pu.z],dh(i,fs,hs,ds,du))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qi=[new re,new re,new re,new re,new re,new re,new re,new re],pi=new re,hu=new Os,fs=new re,hs=new re,ds=new re,Pa=new re,Ba=new re,dr=new re,Po=new re,du=new re,pu=new re,pr=new re;function dh(s,e,i,r,l){for(let u=0,h=s.length-3;u<=h;u+=3){pr.fromArray(s,u);const d=l.x*Math.abs(pr.x)+l.y*Math.abs(pr.y)+l.z*Math.abs(pr.z),m=e.dot(pr),p=i.dot(pr),g=r.dot(pr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const mE=new Os,Bo=new re,ph=new re;class Hd{constructor(e=new re,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):mE.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Bo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(ph)),this.expandByPoint(Bo.copy(e.center).sub(ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ji=new re,mh=new re,mu=new re,Ia=new re,gh=new re,gu=new re,_h=new re;class gE{constructor(e=new re,i=new re(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ji.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,i),Ji.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){mh.copy(e).add(i).multiplyScalar(.5),mu.copy(i).sub(e).normalize(),Ia.copy(this.origin).sub(mh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(mu),d=Ia.dot(this.direction),m=-Ia.dot(mu),p=Ia.lengthSq(),g=Math.abs(1-h*h);let v,x,y,E;if(g>0)if(v=h*m-d,x=h*d-m,E=u*g,v>=0)if(x>=-E)if(x<=E){const A=1/g;v*=A,x*=A,y=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=u,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;else x<=-E?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-m),u),y=-v*v+x*(x+2*m)+p):x<=E?(v=0,x=Math.min(Math.max(-u,-m),u),y=x*(x+2*m)+p):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-m),u),y=-v*v+x*(x+2*m)+p);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(mh).addScaledVector(mu,x),y}intersectSphere(e,i){Ji.subVectors(e.center,this.origin);const r=Ji.dot(this.direction),l=Ji.dot(Ji)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(u=(e.min.y-x.y)*g,h=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,h=(e.min.y-x.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,i,r,l,u){gh.subVectors(i,e),gu.subVectors(r,e),_h.crossVectors(gh,gu);let h=this.direction.dot(_h),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ia.subVectors(this.origin,e);const m=d*this.direction.dot(gu.crossVectors(Ia,gu));if(m<0)return null;const p=d*this.direction.dot(gh.cross(Ia));if(p<0||m+p>h)return null;const g=-d*Ia.dot(_h);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,i,r,l,u,h,d,m,p,g,v,x,y,E,A,S){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,g,v,x,y,E,A,S)}set(e,i,r,l,u,h,d,m,p,g,v,x,y,E,A,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=y,_[7]=E,_[11]=A,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ps.setFromMatrixColumn(e,0).length(),u=1/ps.setFromMatrixColumn(e,1).length(),h=1/ps.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=h*g,y=h*v,E=d*g,A=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=y+E*p,i[5]=x-A*p,i[9]=-d*m,i[2]=A-x*p,i[6]=E+y*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*g,y=m*v,E=p*g,A=p*v;i[0]=x+A*d,i[4]=E*d-y,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=y*d-E,i[6]=A+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*g,y=m*v,E=p*g,A=p*v;i[0]=x-A*d,i[4]=-h*v,i[8]=E+y*d,i[1]=y+E*d,i[5]=h*g,i[9]=A-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*g,y=h*v,E=d*g,A=d*v;i[0]=m*g,i[4]=E*p-y,i[8]=x*p+A,i[1]=m*v,i[5]=A*p+x,i[9]=y*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,y=h*p,E=d*m,A=d*p;i[0]=m*g,i[4]=A-x*v,i[8]=E*v+y,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*v+E,i[10]=x-A*v}else if(e.order==="XZY"){const x=h*m,y=h*p,E=d*m,A=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+A,i[5]=h*g,i[9]=y*v-E,i[2]=E*v-y,i[6]=d*g,i[10]=A*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_E,e,vE)}lookAt(e,i,r){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),za.crossVectors(r,Jn),za.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),za.crossVectors(r,Jn)),za.normalize(),_u.crossVectors(Jn,za),l[0]=za.x,l[4]=_u.x,l[8]=Jn.x,l[1]=za.y,l[5]=_u.y,l[9]=Jn.y,l[2]=za.z,l[6]=_u.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],y=r[13],E=r[2],A=r[6],S=r[10],_=r[14],O=r[3],U=r[7],D=r[11],F=r[15],G=l[0],I=l[4],X=l[8],w=l[12],C=l[1],H=l[5],oe=l[9],se=l[13],_e=l[2],ce=l[6],B=l[10],Z=l[14],Y=l[3],Ee=l[7],N=l[11],$=l[15];return u[0]=h*G+d*C+m*_e+p*Y,u[4]=h*I+d*H+m*ce+p*Ee,u[8]=h*X+d*oe+m*B+p*N,u[12]=h*w+d*se+m*Z+p*$,u[1]=g*G+v*C+x*_e+y*Y,u[5]=g*I+v*H+x*ce+y*Ee,u[9]=g*X+v*oe+x*B+y*N,u[13]=g*w+v*se+x*Z+y*$,u[2]=E*G+A*C+S*_e+_*Y,u[6]=E*I+A*H+S*ce+_*Ee,u[10]=E*X+A*oe+S*B+_*N,u[14]=E*w+A*se+S*Z+_*$,u[3]=O*G+U*C+D*_e+F*Y,u[7]=O*I+U*H+D*ce+F*Ee,u[11]=O*X+U*oe+D*B+F*N,u[15]=O*w+U*se+D*Z+F*$,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],v=e[6],x=e[10],y=e[14],E=e[3],A=e[7],S=e[11],_=e[15];return E*(+u*m*v-l*p*v-u*d*x+r*p*x+l*d*y-r*m*y)+A*(+i*m*y-i*p*x+u*h*x-l*h*y+l*p*g-u*m*g)+S*(+i*p*v-i*d*y-u*h*v+r*h*y+u*d*g-r*p*g)+_*(-l*d*g-i*m*v+i*d*x+l*h*v-r*h*x+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=e[9],x=e[10],y=e[11],E=e[12],A=e[13],S=e[14],_=e[15],O=v*S*p-A*x*p+A*m*y-d*S*y-v*m*_+d*x*_,U=E*x*p-g*S*p-E*m*y+h*S*y+g*m*_-h*x*_,D=g*A*p-E*v*p+E*d*y-h*A*y-g*d*_+h*v*_,F=E*v*m-g*A*m-E*d*x+h*A*x+g*d*S-h*v*S,G=i*O+r*U+l*D+u*F;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/G;return e[0]=O*I,e[1]=(A*x*u-v*S*u-A*l*y+r*S*y+v*l*_-r*x*_)*I,e[2]=(d*S*u-A*m*u+A*l*p-r*S*p-d*l*_+r*m*_)*I,e[3]=(v*m*u-d*x*u-v*l*p+r*x*p+d*l*y-r*m*y)*I,e[4]=U*I,e[5]=(g*S*u-E*x*u+E*l*y-i*S*y-g*l*_+i*x*_)*I,e[6]=(E*m*u-h*S*u-E*l*p+i*S*p+h*l*_-i*m*_)*I,e[7]=(h*x*u-g*m*u+g*l*p-i*x*p-h*l*y+i*m*y)*I,e[8]=D*I,e[9]=(E*v*u-g*A*u-E*r*y+i*A*y+g*r*_-i*v*_)*I,e[10]=(h*A*u-E*d*u+E*r*p-i*A*p-h*r*_+i*d*_)*I,e[11]=(g*d*u-h*v*u-g*r*p+i*v*p+h*r*y-i*d*y)*I,e[12]=F*I,e[13]=(g*A*l-E*v*l+E*r*x-i*A*x-g*r*S+i*v*S)*I,e[14]=(E*d*l-h*A*l-E*r*m+i*A*m+h*r*S-i*d*S)*I,e[15]=(h*v*l-g*d*l+g*r*m-i*v*m-h*r*x+i*d*x)*I,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,v=d+d,x=u*p,y=u*g,E=u*v,A=h*g,S=h*v,_=d*v,O=m*p,U=m*g,D=m*v,F=r.x,G=r.y,I=r.z;return l[0]=(1-(A+_))*F,l[1]=(y+D)*F,l[2]=(E-U)*F,l[3]=0,l[4]=(y-D)*G,l[5]=(1-(x+_))*G,l[6]=(S+O)*G,l[7]=0,l[8]=(E+U)*I,l[9]=(S-O)*I,l[10]=(1-(x+A))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ps.set(l[0],l[1],l[2]).length();const h=ps.set(l[4],l[5],l[6]).length(),d=ps.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],mi.copy(this);const p=1/u,g=1/h,v=1/d;return mi.elements[0]*=p,mi.elements[1]*=p,mi.elements[2]*=p,mi.elements[4]*=g,mi.elements[5]*=g,mi.elements[6]*=g,mi.elements[8]*=v,mi.elements[9]*=v,mi.elements[10]*=v,i.setFromRotationMatrix(mi),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=aa){const m=this.elements,p=2*u/(i-e),g=2*u/(r-l),v=(i+e)/(i-e),x=(r+l)/(r-l);let y,E;if(d===aa)y=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(d===Wu)y=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=aa){const m=this.elements,p=1/(i-e),g=1/(r-l),v=1/(h-u),x=(i+e)*p,y=(r+l)*g;let E,A;if(d===aa)E=(h+u)*v,A=-2*v;else if(d===Wu)E=u*v,A=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=A,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ps=new re,mi=new Jt,_E=new re(0,0,0),vE=new re(1,1,1),za=new re,_u=new re,Jn=new re,W_=new Jt,q_=new Jo;class yi{constructor(e=0,i=0,r=0,l=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(xt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-xt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(xt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return W_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(W_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return q_.setFromEuler(this),this.setFromQuaternion(q_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class p0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xE=0;const Y_=new re,ms=new Jo,$i=new Jt,vu=new re,Io=new re,SE=new re,yE=new Jo,j_=new re(1,0,0),Z_=new re(0,1,0),K_=new re(0,0,1),Q_={type:"added"},ME={type:"removed"},gs={type:"childadded",child:null},vh={type:"childremoved",child:null};class xn extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new re,i=new yi,r=new Jo,l=new re(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Jt},normalMatrix:{value:new st}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new p0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ms.setFromAxisAngle(e,i),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,i){return ms.setFromAxisAngle(e,i),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(j_,e)}rotateY(e){return this.rotateOnAxis(Z_,e)}rotateZ(e){return this.rotateOnAxis(K_,e)}translateOnAxis(e,i){return Y_.copy(e).applyQuaternion(this.quaternion),this.position.add(Y_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(j_,e)}translateY(e){return this.translateOnAxis(Z_,e)}translateZ(e){return this.translateOnAxis(K_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?vu.copy(e):vu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Io,vu,this.up):$i.lookAt(vu,Io,this.up),this.quaternion.setFromRotationMatrix($i),l&&($i.extractRotation(l.matrixWorld),ms.setFromRotationMatrix($i),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Q_),gs.child=e,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ME),vh.child=e,this.dispatchEvent(vh),vh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Q_),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,SE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,yE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),v=h(e.shapes),x=h(e.skeletons),y=h(e.animations),E=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}xn.DEFAULT_UP=new re(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new re,ea=new re,xh=new re,ta=new re,_s=new re,vs=new re,J_=new re,Sh=new re,yh=new re,Mh=new re,Eh=new Qt,Th=new Qt,bh=new Qt;class _i{constructor(e=new re,i=new re,r=new re){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),gi.subVectors(e,i),l.cross(gi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){gi.subVectors(l,i),ea.subVectors(r,i),xh.subVectors(e,i);const h=gi.dot(gi),d=gi.dot(ea),m=gi.dot(xh),p=ea.dot(ea),g=ea.dot(xh),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,y=(p*m-d*g)*x,E=(h*g-d*m)*x;return u.set(1-y-E,E,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ta)===null?!1:ta.x>=0&&ta.y>=0&&ta.x+ta.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,ta)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ta.x),m.addScaledVector(h,ta.y),m.addScaledVector(d,ta.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return Eh.setScalar(0),Th.setScalar(0),bh.setScalar(0),Eh.fromBufferAttribute(e,i),Th.fromBufferAttribute(e,r),bh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Eh,u.x),h.addScaledVector(Th,u.y),h.addScaledVector(bh,u.z),h}static isFrontFacing(e,i,r,l){return gi.subVectors(r,i),ea.subVectors(e,i),gi.cross(ea).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),gi.cross(ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return _i.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return _i.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;_s.subVectors(l,r),vs.subVectors(u,r),Sh.subVectors(e,r);const m=_s.dot(Sh),p=vs.dot(Sh);if(m<=0&&p<=0)return i.copy(r);yh.subVectors(e,l);const g=_s.dot(yh),v=vs.dot(yh);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(_s,h);Mh.subVectors(e,u);const y=_s.dot(Mh),E=vs.dot(Mh);if(E>=0&&y<=E)return i.copy(u);const A=y*p-m*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(vs,d);const S=g*E-y*v;if(S<=0&&v-g>=0&&y-E>=0)return J_.subVectors(u,l),d=(v-g)/(v-g+(y-E)),i.copy(l).addScaledVector(J_,d);const _=1/(S+A+x);return h=A*_,d=x*_,i.copy(r).addScaledVector(_s,h).addScaledVector(vs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const m0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},xu={h:0,s:0,l:0};function Ah(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Mt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=At.workingColorSpace){return this.r=e,this.g=i,this.b=r,At.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=At.workingColorSpace){if(e=aE(e,1),i=xt(i,0,1),r=xt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=Ah(h,u,e+1/3),this.g=Ah(h,u,e),this.b=Ah(h,u,e-1/3)}return At.toWorkingColorSpace(this,l),this}setStyle(e,i=li){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=li){const r=m0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sa(e.r),this.g=sa(e.g),this.b=sa(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return At.fromWorkingColorSpace(Dn.copy(this),e),Math.round(xt(Dn.r*255,0,255))*65536+Math.round(xt(Dn.g*255,0,255))*256+Math.round(xt(Dn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=At.workingColorSpace){At.fromWorkingColorSpace(Dn.copy(this),i);const r=Dn.r,l=Dn.g,u=Dn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=At.workingColorSpace){return At.fromWorkingColorSpace(Dn.copy(this),i),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=li){At.fromWorkingColorSpace(Dn.copy(this),e);const i=Dn.r,r=Dn.g,l=Dn.b;return e!==li?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Fa),this.setHSL(Fa.h+e,Fa.s+i,Fa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Fa),e.getHSL(xu);const r=uh(Fa.h,xu.h,i),l=uh(Fa.s,xu.s,i),u=uh(Fa.l,xu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Mt;Mt.NAMES=m0;let EE=0;class $o extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=As,this.side=qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hh,this.blendDst=Gh,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(r.blending=this.blending),this.side!==qa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Hh&&(r.blendSrc=this.blendSrc),this.blendDst!==Gh&&(r.blendDst=this.blendDst),this.blendEquation!==Mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==z_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(r.stencilFail=this.stencilFail),this.stencilZFail!==us&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class g0 extends $o{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=$v,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new re,Su=new Ct;let TE=0;class wi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=F_,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Su.fromBufferAttribute(this,i),Su.applyMatrix3(e),this.setXY(i,Su.x,Su.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Oo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Gn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Oo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Oo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Oo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Oo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array),u=Gn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==F_&&(e.usage=this.usage),e}}class _0 extends wi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class v0 extends wi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class br extends wi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let bE=0;const oi=new Jt,Rh=new xn,xs=new re,$n=new Os,zo=new Os,vn=new re;class Ur extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(h0(e)?v0:_0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new st().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,i,r){return oi.makeTranslation(e,i,r),this.applyMatrix4(oi),this}scale(e,i,r){return oi.makeScale(e,i,r),this.applyMatrix4(oi),this}lookAt(e){return Rh.lookAt(e),Rh.updateMatrix(),this.applyMatrix4(Rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new br(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Os);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];zo.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors($n.min,zo.min),$n.expandByPoint(vn),vn.addVectors($n.max,zo.max),$n.expandByPoint(vn)):($n.expandByPoint(zo.min),$n.expandByPoint(zo.max))}$n.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)vn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)vn.fromBufferAttribute(d,p),m&&(xs.fromBufferAttribute(e,p),vn.add(xs)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<r.count;X++)d[X]=new re,m[X]=new re;const p=new re,g=new re,v=new re,x=new Ct,y=new Ct,E=new Ct,A=new re,S=new re;function _(X,w,C){p.fromBufferAttribute(r,X),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,C),x.fromBufferAttribute(u,X),y.fromBufferAttribute(u,w),E.fromBufferAttribute(u,C),g.sub(p),v.sub(p),y.sub(x),E.sub(x);const H=1/(y.x*E.y-E.x*y.y);isFinite(H)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(H),S.copy(v).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(H),d[X].add(A),d[w].add(A),d[C].add(A),m[X].add(S),m[w].add(S),m[C].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let X=0,w=O.length;X<w;++X){const C=O[X],H=C.start,oe=C.count;for(let se=H,_e=H+oe;se<_e;se+=3)_(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const U=new re,D=new re,F=new re,G=new re;function I(X){F.fromBufferAttribute(l,X),G.copy(F);const w=d[X];U.copy(w),U.sub(F.multiplyScalar(F.dot(w))).normalize(),D.crossVectors(G,w);const H=D.dot(m[X])<0?-1:1;h.setXYZW(X,U.x,U.y,U.z,H)}for(let X=0,w=O.length;X<w;++X){const C=O[X],H=C.start,oe=C.count;for(let se=H,_e=H+oe;se<_e;se+=3)I(e.getX(se+0)),I(e.getX(se+1)),I(e.getX(se+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new re,u=new re,h=new re,d=new re,m=new re,p=new re,g=new re,v=new re;if(e)for(let x=0,y=e.count;x<y;x+=3){const E=e.getX(x+0),A=e.getX(x+1),S=e.getX(x+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,S),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),d.add(g),m.add(g),p.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,v=d.normalized,x=new p.constructor(m.length*g);let y=0,E=0;for(let A=0,S=m.length;A<S;A++){d.isInterleavedBufferAttribute?y=m[A]*d.data.stride+d.offset:y=m[A]*g;for(let _=0;_<g;_++)x[E++]=p[y++]}return new wi(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ur,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,v=p.length;g<v;g++){const x=p[g],y=e(x,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const y=p[v];g.push(y.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],v=u[p];for(let x=0,y=v.length;x<y;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $_=new Jt,mr=new gE,yu=new Hd,ev=new re,Mu=new re,Eu=new re,Tu=new re,Ch=new re,bu=new re,tv=new re,Au=new re;class Vn extends xn{constructor(e=new Ur,i=new g0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){bu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],v=u[m];g!==0&&(Ch.fromBufferAttribute(v,e),h?bu.addScaledVector(Ch,g):bu.addScaledVector(Ch.sub(i),g))}i.add(bu)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yu.copy(r.boundingSphere),yu.applyMatrix4(u),mr.copy(e.ray).recast(e.near),!(yu.containsPoint(mr.origin)===!1&&(mr.intersectSphere(yu,ev)===null||mr.origin.distanceToSquared(ev)>(e.far-e.near)**2))&&($_.copy(u).invert(),mr.copy(e.ray).applyMatrix4($_),!(r.boundingBox!==null&&mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,mr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,A=x.length;E<A;E++){const S=x[E],_=h[S.materialIndex],O=Math.max(S.start,y.start),U=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let D=O,F=U;D<F;D+=3){const G=d.getX(D),I=d.getX(D+1),X=d.getX(D+2);l=Ru(this,_,e,r,p,g,v,G,I,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let S=E,_=A;S<_;S+=3){const O=d.getX(S),U=d.getX(S+1),D=d.getX(S+2);l=Ru(this,h,e,r,p,g,v,O,U,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,A=x.length;E<A;E++){const S=x[E],_=h[S.materialIndex],O=Math.max(S.start,y.start),U=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let D=O,F=U;D<F;D+=3){const G=D,I=D+1,X=D+2;l=Ru(this,_,e,r,p,g,v,G,I,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let S=E,_=A;S<_;S+=3){const O=S,U=S+1,D=S+2;l=Ru(this,h,e,r,p,g,v,O,U,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function AE(s,e,i,r,l,u,h,d){let m;if(e.side===kn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===qa,d),m===null)return null;Au.copy(d),Au.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Au);return p<i.near||p>i.far?null:{distance:p,point:Au.clone(),object:s}}function Ru(s,e,i,r,l,u,h,d,m,p){s.getVertexPosition(d,Mu),s.getVertexPosition(m,Eu),s.getVertexPosition(p,Tu);const g=AE(s,e,i,r,Mu,Eu,Tu,tv);if(g){const v=new re;_i.getBarycoord(tv,Mu,Eu,Tu,v),l&&(g.uv=_i.getInterpolatedAttribute(l,d,m,p,v,new Ct)),u&&(g.uv1=_i.getInterpolatedAttribute(u,d,m,p,v,new Ct)),h&&(g.normal=_i.getInterpolatedAttribute(h,d,m,p,v,new re),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new re,materialIndex:0};_i.getNormal(Mu,Eu,Tu,x.normal),g.face=x,g.barycoord=v}return g}class Ps extends Ur{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],v=[];let x=0,y=0;E("z","y","x",-1,-1,r,i,e,h,u,0),E("z","y","x",1,-1,r,i,-e,h,u,1),E("x","z","y",1,1,e,r,i,l,h,2),E("x","z","y",1,-1,e,r,-i,l,h,3),E("x","y","z",1,-1,e,i,r,l,u,4),E("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new br(p,3)),this.setAttribute("normal",new br(g,3)),this.setAttribute("uv",new br(v,2));function E(A,S,_,O,U,D,F,G,I,X,w){const C=D/I,H=F/X,oe=D/2,se=F/2,_e=G/2,ce=I+1,B=X+1;let Z=0,Y=0;const Ee=new re;for(let N=0;N<B;N++){const $=N*H-se;for(let xe=0;xe<ce;xe++){const Me=xe*C-oe;Ee[A]=Me*O,Ee[S]=$*U,Ee[_]=_e,p.push(Ee.x,Ee.y,Ee.z),Ee[A]=0,Ee[S]=0,Ee[_]=G>0?1:-1,g.push(Ee.x,Ee.y,Ee.z),v.push(xe/I),v.push(1-N/X),Z+=1}}for(let N=0;N<X;N++)for(let $=0;$<I;$++){const xe=x+$+ce*N,Me=x+$+ce*(N+1),Q=x+($+1)+ce*(N+1),de=x+($+1)+ce*N;m.push(xe,Me,de),m.push(Me,Q,de),Y+=6}d.addGroup(y,Y,w),y+=Y,x+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Nn(s){const e={};for(let i=0;i<s.length;i++){const r=Ls(s[i]);for(const l in r)e[l]=r[l]}return e}function RE(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function x0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const CE={clone:Ls,merge:Nn};var wE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ya extends $o{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wE,this.fragmentShader=DE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=RE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class S0 extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=aa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new re,nv=new Ct,iv=new Ct;class ui extends S0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Td*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Td*2*Math.atan(Math.tan(lh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-e/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ha.x,Ha.y).multiplyScalar(-e/Ha.z)}getViewSize(e,i){return this.getViewBounds(e,nv,iv),i.subVectors(iv,nv)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(lh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ss=-90,ys=1;class UE extends xn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ui(Ss,ys,e,i);l.layers=this.layers,this.add(l);const u=new ui(Ss,ys,e,i);u.layers=this.layers,this.add(u);const h=new ui(Ss,ys,e,i);h.layers=this.layers,this.add(h);const d=new ui(Ss,ys,e,i);d.layers=this.layers,this.add(d);const m=new ui(Ss,ys,e,i);m.layers=this.layers,this.add(m);const p=new ui(Ss,ys,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===aa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Wu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,x,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class y0 extends Un{constructor(e=[],i=ws,r,l,u,h,d,m,p,g){super(e,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class LE extends Rr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new y0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ci}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ps(5,5,5),u=new Ya({name:"CubemapFromEquirect",uniforms:Ls(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Xa});u.uniforms.tEquirect.value=i;const h=new Vn(l,u),d=i.minFilter;return i.minFilter===Tr&&(i.minFilter=ci),new UE(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class Fo extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NE={type:"move"};class wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const A of e.hand.values()){const S=i.getJointPose(A,r),_=this._getHandJoint(p,A);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),y=.02,E=.005;p.inputState.pinching&&x>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(NE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Fo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class OE extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Dh=new re,PE=new re,BE=new st;class Sr{constructor(e=new re(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Dh.subVectors(r,i).cross(PE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Dh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||BE.getNormalMatrix(e),l=this.coplanarPoint(Dh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Hd,Cu=new re;class Gd{constructor(e=new Sr,i=new Sr,r=new Sr,l=new Sr,u=new Sr,h=new Sr){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=aa){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],v=l[6],x=l[7],y=l[8],E=l[9],A=l[10],S=l[11],_=l[12],O=l[13],U=l[14],D=l[15];if(r[0].setComponents(m-u,x-p,S-y,D-_).normalize(),r[1].setComponents(m+u,x+p,S+y,D+_).normalize(),r[2].setComponents(m+h,x+g,S+E,D+O).normalize(),r[3].setComponents(m-h,x-g,S-E,D-O).normalize(),r[4].setComponents(m-d,x-v,S-A,D-U).normalize(),i===aa)r[5].setComponents(m+d,x+v,S+A,D+U).normalize();else if(i===Wu)r[5].setComponents(d,v,A,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Cu.x=l.normal.x>0?e.max.x:e.min.x,Cu.y=l.normal.y>0?e.max.y:e.min.y,Cu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Cu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class IE extends Un{constructor(e,i,r,l,u,h,d,m,p){super(e,i,r,l,u,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class M0 extends Un{constructor(e,i,r=Ar,l,u,h,d=xi,m=xi,p,g=Xo){if(g!==Xo&&g!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ka extends Ur{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=e/d,x=i/m,y=[],E=[],A=[],S=[];for(let _=0;_<g;_++){const O=_*x-h;for(let U=0;U<p;U++){const D=U*v-u;E.push(D,-O,0),A.push(0,0,1),S.push(U/d),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let O=0;O<d;O++){const U=O+p*_,D=O+p*(_+1),F=O+1+p*(_+1),G=O+1+p*_;y.push(U,D,G),y.push(D,F,G)}this.setIndex(y),this.setAttribute("position",new br(E,3)),this.setAttribute("normal",new br(A,3)),this.setAttribute("uv",new br(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.widthSegments,e.heightSegments)}}class _r extends $o{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=c0,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zE extends $o{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FE extends $o{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const av={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class HE{constructor(e,i,r){const l=this;let u=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this.itemStart=function(g){d++,u===!1&&l.onStart!==void 0&&l.onStart(g,h,d),u=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,v){return p.push(g,v),this},this.removeHandler=function(g){const v=p.indexOf(g);return v!==-1&&p.splice(v,2),this},this.getHandler=function(g){for(let v=0,x=p.length;v<x;v+=2){const y=p[v],E=p[v+1];if(y.global&&(y.lastIndex=0),y.test(g))return E}return null}}}const GE=new HE;class Vd{constructor(e){this.manager=e!==void 0?e:GE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,u){r.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Vd.DEFAULT_MATERIAL_NAME="__DEFAULT";class VE extends Vd{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,h=av.get(e);if(h!==void 0)return u.manager.itemStart(e),setTimeout(function(){i&&i(h),u.manager.itemEnd(e)},0),h;const d=qo("img");function m(){g(),av.add(e,this),i&&i(this),u.manager.itemEnd(e)}function p(v){g(),l&&l(v),u.manager.itemError(e),u.manager.itemEnd(e)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),u.manager.itemStart(e),d.src=e,d}}class kE extends Vd{constructor(e){super(e)}load(e,i,r,l){const u=new Un,h=new VE(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},r,l),u}}class kd extends xn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class XE extends kd{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Uh=new Jt,rv=new re,sv=new re;class WE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=Di,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gd,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;rv.setFromMatrixPosition(e.matrixWorld),i.position.copy(rv),sv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(sv),i.updateMatrixWorld(),Uh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Uh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class E0 extends S0{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class qE extends WE{constructor(){super(new E0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class YE extends kd{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new qE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class jE extends kd{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class ZE extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class KE extends Dr{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ov(s,e,i,r){const l=QE(r);switch(i){case r0:return s*e;case o0:return s*e/l.components*l.byteLength;case Bd:return s*e/l.components*l.byteLength;case l0:return s*e*2/l.components*l.byteLength;case Id:return s*e*2/l.components*l.byteLength;case s0:return s*e*3/l.components*l.byteLength;case vi:return s*e*4/l.components*l.byteLength;case zd:return s*e*4/l.components*l.byteLength;case Pu:case Bu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Iu:case zu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $h:case td:return Math.max(s,16)*Math.max(e,8)/4;case Jh:case ed:return Math.max(s,8)*Math.max(e,8)/2;case nd:case id:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ad:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case od:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ld:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ud:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case cd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case fd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case hd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case dd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case pd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case md:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case gd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case _d:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case vd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Fu:case xd:case Sd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case u0:case yd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Md:case Ed:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function QE(s){switch(s){case Di:case n0:return{byteLength:1,components:1};case Vo:case i0:case Ko:return{byteLength:2,components:1};case Od:case Pd:return{byteLength:2,components:4};case Ar:case Nd:case ia:return{byteLength:4,components:1};case a0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ld}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ld);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function T0(){let s=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function JE(s){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(s.bindBuffer(p,d),v.length===0)s.bufferSubData(p,0,g);else{v.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<v.length;y++){const E=v[x],A=v[y];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++x,v[x]=A)}v.length=x+1;for(let y=0,E=v.length;y<E;y++){const A=v[y];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(s.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var $E=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eT=`#ifdef USE_ALPHAHASH
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
#endif`,tT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rT=`#ifdef USE_AOMAP
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
#endif`,sT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oT=`#ifdef USE_BATCHING
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
#endif`,lT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hT=`#ifdef USE_IRIDESCENCE
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
#endif`,dT=`#ifdef USE_BUMPMAP
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
#endif`,pT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ST=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,MT=`#define PI 3.141592653589793
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
} // validated`,ET=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TT=`vec3 transformedNormal = objectNormal;
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
#endif`,bT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wT="gl_FragColor = linearToOutputTexel( gl_FragColor );",DT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UT=`#ifdef USE_ENVMAP
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
#endif`,LT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NT=`#ifdef USE_ENVMAP
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
#endif`,OT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PT=`#ifdef USE_ENVMAP
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
#endif`,BT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HT=`#ifdef USE_GRADIENTMAP
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
}`,GT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XT=`uniform bool receiveShadow;
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
#endif`,WT=`#ifdef USE_ENVMAP
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
#endif`,qT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KT=`PhysicalMaterial material;
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
#endif`,QT=`struct PhysicalMaterial {
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
}`,JT=`
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
#endif`,$T=`#if defined( RE_IndirectDiffuse )
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
#endif`,eb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ib=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ab=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ob=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lb=`#if defined( USE_POINTS_UV )
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
#endif`,ub=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,db=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pb=`#ifdef USE_MORPHTARGETS
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
#endif`,mb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_b=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yb=`#ifdef USE_NORMALMAP
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
#endif`,Mb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ab=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Db=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ub=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ob=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ib=`float getShadowMask() {
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
}`,zb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fb=`#ifdef USE_SKINNING
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
#endif`,Hb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gb=`#ifdef USE_SKINNING
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
#endif`,Vb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qb=`#ifdef USE_TRANSMISSION
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
#endif`,Yb=`#ifdef USE_TRANSMISSION
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
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$b=`uniform sampler2D t2D;
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
}`,eA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aA=`#include <common>
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
}`,rA=`#if DEPTH_PACKING == 3200
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
}`,sA=`#define DISTANCE
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
}`,oA=`#define DISTANCE
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
}`,lA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`uniform float scale;
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
}`,fA=`uniform vec3 diffuse;
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
}`,hA=`#include <common>
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
}`,dA=`uniform vec3 diffuse;
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
}`,pA=`#define LAMBERT
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
}`,mA=`#define LAMBERT
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
}`,gA=`#define MATCAP
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
}`,_A=`#define MATCAP
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
}`,vA=`#define NORMAL
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
}`,xA=`#define NORMAL
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
}`,SA=`#define PHONG
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
}`,yA=`#define PHONG
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
}`,MA=`#define STANDARD
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
}`,EA=`#define STANDARD
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
}`,TA=`#define TOON
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
}`,bA=`#define TOON
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
}`,AA=`uniform float size;
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
}`,RA=`uniform vec3 diffuse;
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
}`,CA=`#include <common>
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
}`,wA=`uniform vec3 color;
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
}`,DA=`uniform float rotation;
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
}`,UA=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:$E,alphahash_pars_fragment:eT,alphamap_fragment:tT,alphamap_pars_fragment:nT,alphatest_fragment:iT,alphatest_pars_fragment:aT,aomap_fragment:rT,aomap_pars_fragment:sT,batching_pars_vertex:oT,batching_vertex:lT,begin_vertex:uT,beginnormal_vertex:cT,bsdfs:fT,iridescence_fragment:hT,bumpmap_pars_fragment:dT,clipping_planes_fragment:pT,clipping_planes_pars_fragment:mT,clipping_planes_pars_vertex:gT,clipping_planes_vertex:_T,color_fragment:vT,color_pars_fragment:xT,color_pars_vertex:ST,color_vertex:yT,common:MT,cube_uv_reflection_fragment:ET,defaultnormal_vertex:TT,displacementmap_pars_vertex:bT,displacementmap_vertex:AT,emissivemap_fragment:RT,emissivemap_pars_fragment:CT,colorspace_fragment:wT,colorspace_pars_fragment:DT,envmap_fragment:UT,envmap_common_pars_fragment:LT,envmap_pars_fragment:NT,envmap_pars_vertex:OT,envmap_physical_pars_fragment:WT,envmap_vertex:PT,fog_vertex:BT,fog_pars_vertex:IT,fog_fragment:zT,fog_pars_fragment:FT,gradientmap_pars_fragment:HT,lightmap_pars_fragment:GT,lights_lambert_fragment:VT,lights_lambert_pars_fragment:kT,lights_pars_begin:XT,lights_toon_fragment:qT,lights_toon_pars_fragment:YT,lights_phong_fragment:jT,lights_phong_pars_fragment:ZT,lights_physical_fragment:KT,lights_physical_pars_fragment:QT,lights_fragment_begin:JT,lights_fragment_maps:$T,lights_fragment_end:eb,logdepthbuf_fragment:tb,logdepthbuf_pars_fragment:nb,logdepthbuf_pars_vertex:ib,logdepthbuf_vertex:ab,map_fragment:rb,map_pars_fragment:sb,map_particle_fragment:ob,map_particle_pars_fragment:lb,metalnessmap_fragment:ub,metalnessmap_pars_fragment:cb,morphinstance_vertex:fb,morphcolor_vertex:hb,morphnormal_vertex:db,morphtarget_pars_vertex:pb,morphtarget_vertex:mb,normal_fragment_begin:gb,normal_fragment_maps:_b,normal_pars_fragment:vb,normal_pars_vertex:xb,normal_vertex:Sb,normalmap_pars_fragment:yb,clearcoat_normal_fragment_begin:Mb,clearcoat_normal_fragment_maps:Eb,clearcoat_pars_fragment:Tb,iridescence_pars_fragment:bb,opaque_fragment:Ab,packing:Rb,premultiplied_alpha_fragment:Cb,project_vertex:wb,dithering_fragment:Db,dithering_pars_fragment:Ub,roughnessmap_fragment:Lb,roughnessmap_pars_fragment:Nb,shadowmap_pars_fragment:Ob,shadowmap_pars_vertex:Pb,shadowmap_vertex:Bb,shadowmask_pars_fragment:Ib,skinbase_vertex:zb,skinning_pars_vertex:Fb,skinning_vertex:Hb,skinnormal_vertex:Gb,specularmap_fragment:Vb,specularmap_pars_fragment:kb,tonemapping_fragment:Xb,tonemapping_pars_fragment:Wb,transmission_fragment:qb,transmission_pars_fragment:Yb,uv_pars_fragment:jb,uv_pars_vertex:Zb,uv_vertex:Kb,worldpos_vertex:Qb,background_vert:Jb,background_frag:$b,backgroundCube_vert:eA,backgroundCube_frag:tA,cube_vert:nA,cube_frag:iA,depth_vert:aA,depth_frag:rA,distanceRGBA_vert:sA,distanceRGBA_frag:oA,equirect_vert:lA,equirect_frag:uA,linedashed_vert:cA,linedashed_frag:fA,meshbasic_vert:hA,meshbasic_frag:dA,meshlambert_vert:pA,meshlambert_frag:mA,meshmatcap_vert:gA,meshmatcap_frag:_A,meshnormal_vert:vA,meshnormal_frag:xA,meshphong_vert:SA,meshphong_frag:yA,meshphysical_vert:MA,meshphysical_frag:EA,meshtoon_vert:TA,meshtoon_frag:bA,points_vert:AA,points_frag:RA,shadow_vert:CA,shadow_frag:wA,sprite_vert:DA,sprite_frag:UA},Ue={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Ci={basic:{uniforms:Nn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Nn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Mt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Nn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Nn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Nn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Mt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Nn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Nn([Ue.points,Ue.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Nn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Nn([Ue.common,Ue.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Nn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Nn([Ue.sprite,Ue.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Nn([Ue.common,Ue.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Nn([Ue.lights,Ue.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Ci.physical={uniforms:Nn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const wu={r:0,b:0,g:0},vr=new yi,LA=new Jt;function NA(s,e,i,r,l,u,h){const d=new Mt(0);let m=u===!0?0:1,p,g,v=null,x=0,y=null;function E(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?i:e).get(D)),D}function A(U){let D=!1;const F=E(U);F===null?_(d,m):F&&F.isColor&&(_(F,1),D=!0);const G=s.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(U,D){const F=E(D);F&&(F.isCubeTexture||F.mapping===ju)?(g===void 0&&(g=new Vn(new Ps(1,1,1),new Ya({name:"BackgroundCubeMaterial",uniforms:Ls(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,I,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),vr.copy(D.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(LA.makeRotationFromEuler(vr)),g.material.toneMapped=At.getTransfer(F.colorSpace)!==Bt,(v!==F||x!==F.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,v=F,x=F.version,y=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new Vn(new ka(2,2),new Ya({name:"BackgroundMaterial",uniforms:Ls(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=At.getTransfer(F.colorSpace)!==Bt,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(v!==F||x!==F.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,v=F,x=F.version,y=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,D){U.getRGB(wu,x0(s)),r.buffers.color.setClear(wu.r,wu.g,wu.b,D,h)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,D=1){d.set(U),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(d,m)},render:A,addToRenderList:S,dispose:O}}function OA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,h=!1;function d(C,H,oe,se,_e){let ce=!1;const B=v(se,oe,H);u!==B&&(u=B,p(u.object)),ce=y(C,se,oe,_e),ce&&E(C,se,oe,_e),_e!==null&&e.update(_e,s.ELEMENT_ARRAY_BUFFER),(ce||h)&&(h=!1,D(C,H,oe,se),_e!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(_e).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function v(C,H,oe){const se=oe.wireframe===!0;let _e=r[C.id];_e===void 0&&(_e={},r[C.id]=_e);let ce=_e[H.id];ce===void 0&&(ce={},_e[H.id]=ce);let B=ce[se];return B===void 0&&(B=x(m()),ce[se]=B),B}function x(C){const H=[],oe=[],se=[];for(let _e=0;_e<i;_e++)H[_e]=0,oe[_e]=0,se[_e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:oe,attributeDivisors:se,object:C,attributes:{},index:null}}function y(C,H,oe,se){const _e=u.attributes,ce=H.attributes;let B=0;const Z=oe.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const N=_e[Y];let $=ce[Y];if($===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&($=C.instanceColor)),N===void 0||N.attribute!==$||$&&N.data!==$.data)return!0;B++}return u.attributesNum!==B||u.index!==se}function E(C,H,oe,se){const _e={},ce=H.attributes;let B=0;const Z=oe.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let N=ce[Y];N===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(N=C.instanceColor));const $={};$.attribute=N,N&&N.data&&($.data=N.data),_e[Y]=$,B++}u.attributes=_e,u.attributesNum=B,u.index=se}function A(){const C=u.newAttributes;for(let H=0,oe=C.length;H<oe;H++)C[H]=0}function S(C){_(C,0)}function _(C,H){const oe=u.newAttributes,se=u.enabledAttributes,_e=u.attributeDivisors;oe[C]=1,se[C]===0&&(s.enableVertexAttribArray(C),se[C]=1),_e[C]!==H&&(s.vertexAttribDivisor(C,H),_e[C]=H)}function O(){const C=u.newAttributes,H=u.enabledAttributes;for(let oe=0,se=H.length;oe<se;oe++)H[oe]!==C[oe]&&(s.disableVertexAttribArray(oe),H[oe]=0)}function U(C,H,oe,se,_e,ce,B){B===!0?s.vertexAttribIPointer(C,H,oe,_e,ce):s.vertexAttribPointer(C,H,oe,se,_e,ce)}function D(C,H,oe,se){A();const _e=se.attributes,ce=oe.getAttributes(),B=H.defaultAttributeValues;for(const Z in ce){const Y=ce[Z];if(Y.location>=0){let Ee=_e[Z];if(Ee===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(Ee=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(Ee=C.instanceColor)),Ee!==void 0){const N=Ee.normalized,$=Ee.itemSize,xe=e.get(Ee);if(xe===void 0)continue;const Me=xe.buffer,Q=xe.type,de=xe.bytesPerElement,ye=Q===s.INT||Q===s.UNSIGNED_INT||Ee.gpuType===Nd;if(Ee.isInterleavedBufferAttribute){const Re=Ee.data,Le=Re.stride,ot=Ee.offset;if(Re.isInstancedInterleavedBuffer){for(let Ke=0;Ke<Y.locationSize;Ke++)_(Y.location+Ke,Re.meshPerAttribute);C.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Ke=0;Ke<Y.locationSize;Ke++)S(Y.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let Ke=0;Ke<Y.locationSize;Ke++)U(Y.location+Ke,$/Y.locationSize,Q,N,Le*de,(ot+$/Y.locationSize*Ke)*de,ye)}else{if(Ee.isInstancedBufferAttribute){for(let Re=0;Re<Y.locationSize;Re++)_(Y.location+Re,Ee.meshPerAttribute);C.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Re=0;Re<Y.locationSize;Re++)S(Y.location+Re);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let Re=0;Re<Y.locationSize;Re++)U(Y.location+Re,$/Y.locationSize,Q,N,$*de,$/Y.locationSize*Re*de,ye)}}else if(B!==void 0){const N=B[Z];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(Y.location,N);break;case 3:s.vertexAttrib3fv(Y.location,N);break;case 4:s.vertexAttrib4fv(Y.location,N);break;default:s.vertexAttrib1fv(Y.location,N)}}}}O()}function F(){X();for(const C in r){const H=r[C];for(const oe in H){const se=H[oe];for(const _e in se)g(se[_e].object),delete se[_e];delete H[oe]}delete r[C]}}function G(C){if(r[C.id]===void 0)return;const H=r[C.id];for(const oe in H){const se=H[oe];for(const _e in se)g(se[_e].object),delete se[_e];delete H[oe]}delete r[C.id]}function I(C){for(const H in r){const oe=r[H];if(oe[C.id]===void 0)continue;const se=oe[C.id];for(const _e in se)g(se[_e].object),delete se[_e];delete oe[C.id]}}function X(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:w,dispose:F,releaseStatesOfGeometry:G,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:S,disableUnusedAttributes:O}}function PA(s,e,i){let r;function l(p){r=p}function u(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,v){v!==0&&(s.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let y=0;for(let E=0;E<v;E++)y+=g[E];i.update(y,r,1)}function m(p,g,v,x){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)h(p[E],g[E],x[E]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let E=0;for(let A=0;A<v;A++)E+=g[A]*x[A];i.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function BA(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==vi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const X=I===Ko&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Di&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ia&&!X)}function m(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,G=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:D,vertexTextures:F,maxSamples:G}}function IA(s){const e=this;let i=null,r=0,l=!1,u=!1;const h=new Sr,d=new st,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||r!==0||l;return l=x,r=v.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,y){const E=v.clippingPlanes,A=v.clipIntersection,S=v.clipShadows,_=s.get(v);if(!l||E===null||E.length===0||u&&!S)u?g(null):p();else{const O=u?0:r,U=O*4;let D=_.clippingState||null;m.value=D,D=g(E,x,U,y);for(let F=0;F!==U;++F)D[F]=i[F];_.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,y,E){const A=v!==null?v.length:0;let S=null;if(A!==0){if(S=m.value,E!==!0||S===null){const _=y+A*4,O=x.matrixWorldInverse;d.getNormalMatrix(O),(S===null||S.length<_)&&(S=new Float32Array(_));for(let U=0,D=y;U!==A;++U,D+=4)h.copy(v[U]).applyMatrix4(O,d),h.normal.toArray(S,D),S[D+3]=h.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function zA(s){let e=new WeakMap;function i(h,d){return d===Zh?h.mapping=ws:d===Kh&&(h.mapping=Ds),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Zh||d===Kh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new LE(m.height);return p.fromEquirectangularTexture(s,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const bs=4,lv=[.125,.215,.35,.446,.526,.582],Er=20,Lh=new E0,uv=new Mt;let Nh=null,Oh=0,Ph=0,Bh=!1;const yr=(1+Math.sqrt(5))/2,Ms=1/yr,cv=[new re(-yr,Ms,0),new re(yr,Ms,0),new re(-Ms,0,yr),new re(Ms,0,yr),new re(0,yr,-Ms),new re(0,yr,Ms),new re(-1,1,-1),new re(1,1,-1),new re(-1,1,1),new re(1,1,1)],FA=new re;class fv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=FA}=u;Nh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nh,Oh,Ph),this._renderer.xr.enabled=Bh,e.scissorTest=!1,Du(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ws||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:Ko,format:vi,colorSpace:Us,depthBuffer:!1},l=hv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hv(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HA(u)),this._blurMaterial=GA(u,e,i)}return l}_compileMaterial(e){const i=new Vn(this._lodPlanes[0],e);this._renderer.compile(i,Lh)}_sceneToCubeUV(e,i,r,l,u){const m=new ui(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(uv),v.toneMapping=Wa,v.autoClear=!1;const E=new g0({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),A=new Vn(new Ps,E);let S=!1;const _=e.background;_?_.isColor&&(E.color.copy(_),e.background=null,S=!0):(E.color.copy(uv),S=!0);for(let O=0;O<6;O++){const U=O%3;U===0?(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[O],u.y,u.z)):U===1?(m.up.set(0,0,p[O]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[O],u.z)):(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[O]));const D=this._cubeSize;Du(l,U*D,O>2?D:0,D,D),v.setRenderTarget(l),S&&v.render(A,m),v.render(e,m)}A.geometry.dispose(),A.material.dispose(),v.toneMapping=y,v.autoClear=x,e.background=_}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ws||e.mapping===Ds;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=pv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dv());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Vn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Du(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Lh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=cv[(l-u-1)%cv.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Vn(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Er-1),A=u/E,S=isFinite(u)?1+Math.floor(g*A):Er;S>Er&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Er}`);const _=[];let O=0;for(let I=0;I<Er;++I){const X=I/A,w=Math.exp(-X*X/2);_.push(w),I===0?O+=w:I<S&&(O+=2*w)}for(let I=0;I<_.length;I++)_[I]=_[I]/O;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:U}=this;x.dTheta.value=E,x.mipInt.value=U-r;const D=this._sizeLods[l],F=3*D*(l>U-bs?l-U+bs:0),G=4*(this._cubeSize-D);Du(i,F,G,3*D,2*D),m.setRenderTarget(i),m.render(v,Lh)}}function HA(s){const e=[],i=[],r=[];let l=s;const u=s-bs+1+lv.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>s-bs?m=lv[h-s+bs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,E=6,A=3,S=2,_=1,O=new Float32Array(A*E*y),U=new Float32Array(S*E*y),D=new Float32Array(_*E*y);for(let G=0;G<y;G++){const I=G%3*2/3-1,X=G>2?0:-1,w=[I,X,0,I+2/3,X,0,I+2/3,X+1,0,I,X,0,I+2/3,X+1,0,I,X+1,0];O.set(w,A*E*G),U.set(x,S*E*G);const C=[G,G,G,G,G,G];D.set(C,_*E*G)}const F=new Ur;F.setAttribute("position",new wi(O,A)),F.setAttribute("uv",new wi(U,S)),F.setAttribute("faceIndex",new wi(D,_)),e.push(F),l>bs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function hv(s,e,i){const r=new Rr(s,e,i);return r.texture.mapping=ju,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Du(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function GA(s,e,i){const r=new Float32Array(Er),l=new re(0,1,0);return new Ya({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Xd(),fragmentShader:`

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
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function dv(){return new Ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xd(),fragmentShader:`

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
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function pv(){return new Ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function Xd(){return`

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
	`}function VA(s){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Zh||m===Kh,g=m===ws||m===Ds;if(p||g){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new fv(s)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new fv(s)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function kA(s){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Hu("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function XA(s,e,i,r){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",h),delete l[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const y in x)e.update(x[y],s.ARRAY_BUFFER)}function p(v){const x=[],y=v.index,E=v.attributes.position;let A=0;if(y!==null){const O=y.array;A=y.version;for(let U=0,D=O.length;U<D;U+=3){const F=O[U+0],G=O[U+1],I=O[U+2];x.push(F,G,G,I,I,F)}}else if(E!==void 0){const O=E.array;A=E.version;for(let U=0,D=O.length/3-1;U<D;U+=3){const F=U+0,G=U+1,I=U+2;x.push(F,G,G,I,I,F)}}else return;const S=new(h0(x)?v0:_0)(x,1);S.version=A;const _=u.get(v);_&&e.remove(_),u.set(v,S)}function g(v){const x=u.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function WA(s,e,i){let r;function l(x){r=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,y){s.drawElements(r,y,u,x*h),i.update(y,r,1)}function p(x,y,E){E!==0&&(s.drawElementsInstanced(r,y,u,x*h,E),i.update(y,r,E))}function g(x,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,x,0,E);let S=0;for(let _=0;_<E;_++)S+=y[_];i.update(S,r,1)}function v(x,y,E,A){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)p(x[_]/h,y[_],A[_]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,u,x,0,A,0,E);let _=0;for(let O=0;O<E;O++)_+=y[O]*A[O];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function qA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function YA(s,e,i){const r=new WeakMap,l=new Qt;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let C=function(){X.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var y=C;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),A===!0&&(D=2),S===!0&&(D=3);let F=d.attributes.position.count*D,G=1;F>e.maxTextureSize&&(G=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const I=new Float32Array(F*G*4*v),X=new d0(I,F,G,v);X.type=ia,X.needsUpdate=!0;const w=D*4;for(let H=0;H<v;H++){const oe=_[H],se=O[H],_e=U[H],ce=F*G*4*H;for(let B=0;B<oe.count;B++){const Z=B*w;E===!0&&(l.fromBufferAttribute(oe,B),I[ce+Z+0]=l.x,I[ce+Z+1]=l.y,I[ce+Z+2]=l.z,I[ce+Z+3]=0),A===!0&&(l.fromBufferAttribute(se,B),I[ce+Z+4]=l.x,I[ce+Z+5]=l.y,I[ce+Z+6]=l.z,I[ce+Z+7]=0),S===!0&&(l.fromBufferAttribute(_e,B),I[ce+Z+8]=l.x,I[ce+Z+9]=l.y,I[ce+Z+10]=l.z,I[ce+Z+11]=_e.itemSize===4?l.w:1)}}x={count:v,texture:X,size:new Ct(F,G)},r.set(d,x),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const A=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function jA(s,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const b0=new Un,mv=new M0(1,1),A0=new d0,R0=new pE,C0=new y0,gv=[],_v=[],vv=new Float32Array(16),xv=new Float32Array(9),Sv=new Float32Array(4);function Bs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=gv[l];if(u===void 0&&(u=new Float32Array(l),gv[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,s[h].toArray(u,d)}return u}function fn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function hn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Zu(s,e){let i=_v[e];i===void 0&&(i=new Int32Array(e),_v[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function ZA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function KA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;s.uniform2fv(this.addr,e),hn(i,e)}}function QA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fn(i,e))return;s.uniform3fv(this.addr,e),hn(i,e)}}function JA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;s.uniform4fv(this.addr,e),hn(i,e)}}function $A(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;Sv.set(r),s.uniformMatrix2fv(this.addr,!1,Sv),hn(i,r)}}function e1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;xv.set(r),s.uniformMatrix3fv(this.addr,!1,xv),hn(i,r)}}function t1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;vv.set(r),s.uniformMatrix4fv(this.addr,!1,vv),hn(i,r)}}function n1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function i1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;s.uniform2iv(this.addr,e),hn(i,e)}}function a1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;s.uniform3iv(this.addr,e),hn(i,e)}}function r1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;s.uniform4iv(this.addr,e),hn(i,e)}}function s1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function o1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;s.uniform2uiv(this.addr,e),hn(i,e)}}function l1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;s.uniform3uiv(this.addr,e),hn(i,e)}}function u1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;s.uniform4uiv(this.addr,e),hn(i,e)}}function c1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(mv.compareFunction=f0,u=mv):u=b0,i.setTexture2D(e||u,l)}function f1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||R0,l)}function h1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||C0,l)}function d1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||A0,l)}function p1(s){switch(s){case 5126:return ZA;case 35664:return KA;case 35665:return QA;case 35666:return JA;case 35674:return $A;case 35675:return e1;case 35676:return t1;case 5124:case 35670:return n1;case 35667:case 35671:return i1;case 35668:case 35672:return a1;case 35669:case 35673:return r1;case 5125:return s1;case 36294:return o1;case 36295:return l1;case 36296:return u1;case 35678:case 36198:case 36298:case 36306:case 35682:return c1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return d1}}function m1(s,e){s.uniform1fv(this.addr,e)}function g1(s,e){const i=Bs(e,this.size,2);s.uniform2fv(this.addr,i)}function _1(s,e){const i=Bs(e,this.size,3);s.uniform3fv(this.addr,i)}function v1(s,e){const i=Bs(e,this.size,4);s.uniform4fv(this.addr,i)}function x1(s,e){const i=Bs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function S1(s,e){const i=Bs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function y1(s,e){const i=Bs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function M1(s,e){s.uniform1iv(this.addr,e)}function E1(s,e){s.uniform2iv(this.addr,e)}function T1(s,e){s.uniform3iv(this.addr,e)}function b1(s,e){s.uniform4iv(this.addr,e)}function A1(s,e){s.uniform1uiv(this.addr,e)}function R1(s,e){s.uniform2uiv(this.addr,e)}function C1(s,e){s.uniform3uiv(this.addr,e)}function w1(s,e){s.uniform4uiv(this.addr,e)}function D1(s,e,i){const r=this.cache,l=e.length,u=Zu(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||b0,u[h])}function U1(s,e,i){const r=this.cache,l=e.length,u=Zu(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||R0,u[h])}function L1(s,e,i){const r=this.cache,l=e.length,u=Zu(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||C0,u[h])}function N1(s,e,i){const r=this.cache,l=e.length,u=Zu(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||A0,u[h])}function O1(s){switch(s){case 5126:return m1;case 35664:return g1;case 35665:return _1;case 35666:return v1;case 35674:return x1;case 35675:return S1;case 35676:return y1;case 5124:case 35670:return M1;case 35667:case 35671:return E1;case 35668:case 35672:return T1;case 35669:case 35673:return b1;case 5125:return A1;case 36294:return R1;case 36295:return C1;case 36296:return w1;case 35678:case 36198:case 36298:case 36306:case 35682:return D1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return L1;case 36289:case 36303:case 36311:case 36292:return N1}}class P1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=p1(i.type)}}class B1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=O1(i.type)}}class I1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const Ih=/(\w+)(\])?(\[|\.)?/g;function yv(s,e){s.seq.push(e),s.map[e.id]=e}function z1(s,e,i){const r=s.name,l=r.length;for(Ih.lastIndex=0;;){const u=Ih.exec(r),h=Ih.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){yv(i,p===void 0?new P1(d,s,e):new B1(d,s,e));break}else{let v=i.map[d];v===void 0&&(v=new I1(d),yv(i,v)),i=v}}}class Gu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);z1(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function Mv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const F1=37297;let H1=0;function G1(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Ev=new st;function V1(s){At._getMatrix(Ev,At.workingColorSpace,s);const e=`mat3( ${Ev.elements.map(i=>i.toFixed(4))} )`;switch(At.getTransfer(s)){case Xu:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Tv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=s.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+G1(s.getShaderSource(e),h)}else return l}function k1(s,e){const i=V1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function X1(s,e){let i;switch(e){case GM:i="Linear";break;case VM:i="Reinhard";break;case kM:i="Cineon";break;case e0:i="ACESFilmic";break;case WM:i="AgX";break;case qM:i="Neutral";break;case XM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uu=new re;function W1(){At.getLuminanceCoefficients(Uu);const s=Uu.x.toFixed(4),e=Uu.y.toFixed(4),i=Uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function Y1(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function j1(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),h=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:s.getAttribLocation(e,h),locationSize:d}}return i}function Ho(s){return s!==""}function bv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Av(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(s){return s.replace(Z1,Q1)}const K1=new Map;function Q1(s,e){let i=lt[e];if(i===void 0){const r=K1.get(e);if(r!==void 0)i=lt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return bd(i)}const J1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rv(s){return s.replace(J1,$1)}function $1(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Cv(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eR(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Qv?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Jv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===na&&(e="SHADOWMAP_TYPE_VSM"),e}function tR(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ws:case Ds:e="ENVMAP_TYPE_CUBE";break;case ju:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nR(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ds:e="ENVMAP_MODE_REFRACTION";break}return e}function iR(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $v:e="ENVMAP_BLENDING_MULTIPLY";break;case FM:e="ENVMAP_BLENDING_MIX";break;case HM:e="ENVMAP_BLENDING_ADD";break}return e}function aR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function rR(s,e,i,r){const l=s.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=eR(i),p=tR(i),g=nR(i),v=iR(i),x=aR(i),y=q1(i),E=Y1(u),A=l.createProgram();let S,_,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ho).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ho).join(`
`),_.length>0&&(_+=`
`)):(S=[Cv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),_=[Cv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wa?"#define TONE_MAPPING":"",i.toneMapping!==Wa?lt.tonemapping_pars_fragment:"",i.toneMapping!==Wa?X1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,k1("linearToOutputTexel",i.outputColorSpace),W1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ho).join(`
`)),h=bd(h),h=bv(h,i),h=Av(h,i),d=bd(d),d=bv(d,i),d=Av(d,i),h=Rv(h),d=Rv(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===H_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===H_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=O+S+h,D=O+_+d,F=Mv(l,l.VERTEX_SHADER,U),G=Mv(l,l.FRAGMENT_SHADER,D);l.attachShader(A,F),l.attachShader(A,G),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function I(H){if(s.debug.checkShaderErrors){const oe=l.getProgramInfoLog(A).trim(),se=l.getShaderInfoLog(F).trim(),_e=l.getShaderInfoLog(G).trim();let ce=!0,B=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(ce=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,F,G);else{const Z=Tv(l,F,"vertex"),Y=Tv(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+oe+`
`+Z+`
`+Y)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(se===""||_e==="")&&(B=!1);B&&(H.diagnostics={runnable:ce,programLog:oe,vertexShader:{log:se,prefix:S},fragmentShader:{log:_e,prefix:_}})}l.deleteShader(F),l.deleteShader(G),X=new Gu(l,A),w=j1(l,A)}let X;this.getUniforms=function(){return X===void 0&&I(this),X};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,F1)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=H1++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=F,this.fragmentShader=G,this}let sR=0;class oR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new lR(e),i.set(e,r)),r}}class lR{constructor(e){this.id=sR++,this.code=e,this.usedTimes=0}}function uR(s,e,i,r,l,u,h){const d=new p0,m=new oR,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return p.add(w),w===0?"uv":`uv${w}`}function S(w,C,H,oe,se){const _e=oe.fog,ce=se.geometry,B=w.isMeshStandardMaterial?oe.environment:null,Z=(w.isMeshStandardMaterial?i:e).get(w.envMap||B),Y=Z&&Z.mapping===ju?Z.image.height:null,Ee=E[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const N=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,$=N!==void 0?N.length:0;let xe=0;ce.morphAttributes.position!==void 0&&(xe=1),ce.morphAttributes.normal!==void 0&&(xe=2),ce.morphAttributes.color!==void 0&&(xe=3);let Me,Q,de,ye;if(Ee){const Et=Ci[Ee];Me=Et.vertexShader,Q=Et.fragmentShader}else Me=w.vertexShader,Q=w.fragmentShader,m.update(w),de=m.getVertexShaderID(w),ye=m.getFragmentShaderID(w);const Re=s.getRenderTarget(),Le=s.state.buffers.depth.getReversed(),ot=se.isInstancedMesh===!0,Ke=se.isBatchedMesh===!0,Ht=!!w.map,It=!!w.matcap,ft=!!Z,z=!!w.aoMap,Pn=!!w.lightMap,gt=!!w.bumpMap,it=!!w.normalMap,We=!!w.displacementMap,Ut=!!w.emissiveMap,Ve=!!w.metalnessMap,L=!!w.roughnessMap,b=w.anisotropy>0,ee=w.clearcoat>0,pe=w.dispersion>0,Te=w.iridescence>0,fe=w.sheen>0,Pe=w.transmission>0,Ce=b&&!!w.anisotropyMap,Ge=ee&&!!w.clearcoatMap,$e=ee&&!!w.clearcoatNormalMap,Ae=ee&&!!w.clearcoatRoughnessMap,Fe=Te&&!!w.iridescenceMap,je=Te&&!!w.iridescenceThicknessMap,Qe=fe&&!!w.sheenColorMap,Be=fe&&!!w.sheenRoughnessMap,ut=!!w.specularMap,nt=!!w.specularColorMap,Lt=!!w.specularIntensityMap,k=Pe&&!!w.transmissionMap,Ne=Pe&&!!w.thicknessMap,le=!!w.gradientMap,me=!!w.alphaMap,Ie=w.alphaTest>0,Oe=!!w.alphaHash,at=!!w.extensions;let Gt=Wa;w.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Gt=s.toneMapping);const tn={shaderID:Ee,shaderType:w.type,shaderName:w.name,vertexShader:Me,fragmentShader:Q,defines:w.defines,customVertexShaderID:de,customFragmentShaderID:ye,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Ke,batchingColor:Ke&&se._colorsTexture!==null,instancing:ot,instancingColor:ot&&se.instanceColor!==null,instancingMorph:ot&&se.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Re===null?s.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Us,alphaToCoverage:!!w.alphaToCoverage,map:Ht,matcap:It,envMap:ft,envMapMode:ft&&Z.mapping,envMapCubeUVHeight:Y,aoMap:z,lightMap:Pn,bumpMap:gt,normalMap:it,displacementMap:x&&We,emissiveMap:Ut,normalMapObjectSpace:it&&w.normalMapType===KM,normalMapTangentSpace:it&&w.normalMapType===c0,metalnessMap:Ve,roughnessMap:L,anisotropy:b,anisotropyMap:Ce,clearcoat:ee,clearcoatMap:Ge,clearcoatNormalMap:$e,clearcoatRoughnessMap:Ae,dispersion:pe,iridescence:Te,iridescenceMap:Fe,iridescenceThicknessMap:je,sheen:fe,sheenColorMap:Qe,sheenRoughnessMap:Be,specularMap:ut,specularColorMap:nt,specularIntensityMap:Lt,transmission:Pe,transmissionMap:k,thicknessMap:Ne,gradientMap:le,opaque:w.transparent===!1&&w.blending===As&&w.alphaToCoverage===!1,alphaMap:me,alphaTest:Ie,alphaHash:Oe,combine:w.combine,mapUv:Ht&&A(w.map.channel),aoMapUv:z&&A(w.aoMap.channel),lightMapUv:Pn&&A(w.lightMap.channel),bumpMapUv:gt&&A(w.bumpMap.channel),normalMapUv:it&&A(w.normalMap.channel),displacementMapUv:We&&A(w.displacementMap.channel),emissiveMapUv:Ut&&A(w.emissiveMap.channel),metalnessMapUv:Ve&&A(w.metalnessMap.channel),roughnessMapUv:L&&A(w.roughnessMap.channel),anisotropyMapUv:Ce&&A(w.anisotropyMap.channel),clearcoatMapUv:Ge&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:$e&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:je&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:Be&&A(w.sheenRoughnessMap.channel),specularMapUv:ut&&A(w.specularMap.channel),specularColorMapUv:nt&&A(w.specularColorMap.channel),specularIntensityMapUv:Lt&&A(w.specularIntensityMap.channel),transmissionMapUv:k&&A(w.transmissionMap.channel),thicknessMapUv:Ne&&A(w.thicknessMap.channel),alphaMapUv:me&&A(w.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(it||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:se.isPoints===!0&&!!ce.attributes.uv&&(Ht||me),fog:!!_e,useFog:w.fog===!0,fogExp2:!!_e&&_e.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Le,skinning:se.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:xe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Ht&&w.map.isVideoTexture===!0&&At.getTransfer(w.map.colorSpace)===Bt,decodeVideoTextureEmissive:Ut&&w.emissiveMap.isVideoTexture===!0&&At.getTransfer(w.emissiveMap.colorSpace)===Bt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===On,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:at&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&w.extensions.multiDraw===!0||Ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return tn.vertexUv1s=p.has(1),tn.vertexUv2s=p.has(2),tn.vertexUv3s=p.has(3),p.clear(),tn}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)C.push(H),C.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(O(C,w),U(C,w),C.push(s.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function O(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function U(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=E[w.type];let H;if(C){const oe=Ci[C];H=CE.clone(oe.uniforms)}else H=w.uniforms;return H}function F(w,C){let H;for(let oe=0,se=g.length;oe<se;oe++){const _e=g[oe];if(_e.cacheKey===C){H=_e,++H.usedTimes;break}}return H===void 0&&(H=new rR(s,C,w,u),g.push(H)),H}function G(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function I(w){m.remove(w)}function X(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:D,acquireProgram:F,releaseProgram:G,releaseShaderCache:I,programs:g,dispose:X}}function cR(){let s=new WeakMap;function e(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function fR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function wv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Dv(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(v,x,y,E,A,S){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:y,groupOrder:E,renderOrder:v.renderOrder,z:A,group:S},s[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=y,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=A,_.group=S),e++,_}function d(v,x,y,E,A,S){const _=h(v,x,y,E,A,S);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(v,x,y,E,A,S){const _=h(v,x,y,E,A,S);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||fR),r.length>1&&r.sort(x||wv),l.length>1&&l.sort(x||wv)}function g(){for(let v=e,x=s.length;v<x;v++){const y=s[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function hR(){let s=new WeakMap;function e(r,l){const u=s.get(r);let h;return u===void 0?(h=new Dv,s.set(r,[h])):l>=u.length?(h=new Dv,u.push(h)):h=u[l],h}function i(){s=new WeakMap}return{get:e,dispose:i}}function dR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new re,color:new Mt};break;case"SpotLight":i={position:new re,direction:new re,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":i={color:new Mt,position:new re,halfWidth:new re,halfHeight:new re};break}return s[e.id]=i,i}}}function pR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let mR=0;function gR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function _R(s){const e=new dR,i=pR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new re);const l=new re,u=new Jt,h=new Jt;function d(p){let g=0,v=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,E=0,A=0,S=0,_=0,O=0,U=0,D=0,F=0,G=0,I=0;p.sort(gR);for(let w=0,C=p.length;w<C;w++){const H=p[w],oe=H.color,se=H.intensity,_e=H.distance,ce=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=oe.r*se,v+=oe.g*se,x+=oe.b*se;else if(H.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(H.sh.coefficients[B],se);I++}else if(H.isDirectionalLight){const B=e.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,Y=i.get(H);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=ce,r.directionalShadowMatrix[y]=H.shadow.matrix,O++}r.directional[y]=B,y++}else if(H.isSpotLight){const B=e.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(oe).multiplyScalar(se),B.distance=_e,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,r.spot[A]=B;const Z=H.shadow;if(H.map&&(r.spotLightMap[F]=H.map,F++,Z.updateMatrices(H),H.castShadow&&G++),r.spotLightMatrix[A]=Z.matrix,H.castShadow){const Y=i.get(H);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.spotShadow[A]=Y,r.spotShadowMap[A]=ce,D++}A++}else if(H.isRectAreaLight){const B=e.get(H);B.color.copy(oe).multiplyScalar(se),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),r.rectArea[S]=B,S++}else if(H.isPointLight){const B=e.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){const Z=H.shadow,Y=i.get(H);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,r.pointShadow[E]=Y,r.pointShadowMap[E]=ce,r.pointShadowMatrix[E]=H.shadow.matrix,U++}r.point[E]=B,E++}else if(H.isHemisphereLight){const B=e.get(H);B.skyColor.copy(H.color).multiplyScalar(se),B.groundColor.copy(H.groundColor).multiplyScalar(se),r.hemi[_]=B,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const X=r.hash;(X.directionalLength!==y||X.pointLength!==E||X.spotLength!==A||X.rectAreaLength!==S||X.hemiLength!==_||X.numDirectionalShadows!==O||X.numPointShadows!==U||X.numSpotShadows!==D||X.numSpotMaps!==F||X.numLightProbes!==I)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=S,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=D+F-G,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=I,X.directionalLength=y,X.pointLength=E,X.spotLength=A,X.rectAreaLength=S,X.hemiLength=_,X.numDirectionalShadows=O,X.numPointShadows=U,X.numSpotShadows=D,X.numSpotMaps=F,X.numLightProbes=I,r.version=mR++)}function m(p,g){let v=0,x=0,y=0,E=0,A=0;const S=g.matrixWorldInverse;for(let _=0,O=p.length;_<O;_++){const U=p[_];if(U.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),v++}else if(U.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),y++}else if(U.isRectAreaLight){const D=r.rectArea[E];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(S),h.identity(),u.copy(U.matrixWorld),u.premultiply(S),h.extractRotation(u),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),E++}else if(U.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(S),x++}else if(U.isHemisphereLight){const D=r.hemi[A];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(S),A++}}}return{setup:d,setupView:m,state:r}}function Uv(s){const e=new _R(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function vR(s){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new Uv(s),e.set(l,[d])):u>=h.length?(d=new Uv(s),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const xR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SR=`uniform sampler2D shadow_pass;
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
}`;function yR(s,e,i){let r=new Gd;const l=new Ct,u=new Ct,h=new Qt,d=new zE({depthPacking:ZM}),m=new FE,p={},g=i.maxTextureSize,v={[qa]:kn,[kn]:qa,[On]:On},x=new Ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:xR,fragmentShader:SR}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new Ur;E.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Vn(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qv;let _=this.type;this.render=function(G,I,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||G.length===0)return;const w=s.getRenderTarget(),C=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),oe=s.state;oe.setBlending(Xa),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const se=_!==na&&this.type===na,_e=_===na&&this.type!==na;for(let ce=0,B=G.length;ce<B;ce++){const Z=G[ce],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Ee=Y.getFrameExtents();if(l.multiply(Ee),u.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Ee.x),l.x=u.x*Ee.x,Y.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Ee.y),l.y=u.y*Ee.y,Y.mapSize.y=u.y)),Y.map===null||se===!0||_e===!0){const $=this.type!==na?{minFilter:xi,magFilter:xi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Rr(l.x,l.y,$),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const N=Y.getViewportCount();for(let $=0;$<N;$++){const xe=Y.getViewport($);h.set(u.x*xe.x,u.y*xe.y,u.x*xe.z,u.y*xe.w),oe.viewport(h),Y.updateMatrices(Z,$),r=Y.getFrustum(),D(I,X,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===na&&O(Y,X),Y.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(w,C,H)};function O(G,I){const X=e.update(A);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,y.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Rr(l.x,l.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,s.setRenderTarget(G.mapPass),s.clear(),s.renderBufferDirect(I,null,X,x,A,null),y.uniforms.shadow_pass.value=G.mapPass.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,s.setRenderTarget(G.map),s.clear(),s.renderBufferDirect(I,null,X,y,A,null)}function U(G,I,X,w){let C=null;const H=X.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(H!==void 0)C=H;else if(C=X.isPointLight===!0?m:d,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const oe=C.uuid,se=I.uuid;let _e=p[oe];_e===void 0&&(_e={},p[oe]=_e);let ce=_e[se];ce===void 0&&(ce=C.clone(),_e[se]=ce,I.addEventListener("dispose",F)),C=ce}if(C.visible=I.visible,C.wireframe=I.wireframe,w===na?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:v[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const oe=s.properties.get(C);oe.light=X}return C}function D(G,I,X,w,C){if(G.visible===!1)return;if(G.layers.test(I.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===na)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,G.matrixWorld);const se=e.update(G),_e=G.material;if(Array.isArray(_e)){const ce=se.groups;for(let B=0,Z=ce.length;B<Z;B++){const Y=ce[B],Ee=_e[Y.materialIndex];if(Ee&&Ee.visible){const N=U(G,Ee,w,C);G.onBeforeShadow(s,G,I,X,se,N,Y),s.renderBufferDirect(X,null,se,N,G,Y),G.onAfterShadow(s,G,I,X,se,N,Y)}}}else if(_e.visible){const ce=U(G,_e,w,C);G.onBeforeShadow(s,G,I,X,se,ce,null),s.renderBufferDirect(X,null,se,ce,G,null),G.onAfterShadow(s,G,I,X,se,ce,null)}}const oe=G.children;for(let se=0,_e=oe.length;se<_e;se++)D(oe[se],I,X,w,C)}function F(G){G.target.removeEventListener("dispose",F);for(const X in p){const w=p[X],C=G.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const MR={[Vh]:kh,[Xh]:Yh,[Wh]:jh,[Cs]:qh,[kh]:Vh,[Yh]:Xh,[jh]:Wh,[qh]:Cs};function ER(s,e){function i(){let k=!1;const Ne=new Qt;let le=null;const me=new Qt(0,0,0,0);return{setMask:function(Ie){le!==Ie&&!k&&(s.colorMask(Ie,Ie,Ie,Ie),le=Ie)},setLocked:function(Ie){k=Ie},setClear:function(Ie,Oe,at,Gt,tn){tn===!0&&(Ie*=Gt,Oe*=Gt,at*=Gt),Ne.set(Ie,Oe,at,Gt),me.equals(Ne)===!1&&(s.clearColor(Ie,Oe,at,Gt),me.copy(Ne))},reset:function(){k=!1,le=null,me.set(-1,0,0,0)}}}function r(){let k=!1,Ne=!1,le=null,me=null,Ie=null;return{setReversed:function(Oe){if(Ne!==Oe){const at=e.get("EXT_clip_control");Oe?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),Ne=Oe;const Gt=Ie;Ie=null,this.setClear(Gt)}},getReversed:function(){return Ne},setTest:function(Oe){Oe?Re(s.DEPTH_TEST):Le(s.DEPTH_TEST)},setMask:function(Oe){le!==Oe&&!k&&(s.depthMask(Oe),le=Oe)},setFunc:function(Oe){if(Ne&&(Oe=MR[Oe]),me!==Oe){switch(Oe){case Vh:s.depthFunc(s.NEVER);break;case kh:s.depthFunc(s.ALWAYS);break;case Xh:s.depthFunc(s.LESS);break;case Cs:s.depthFunc(s.LEQUAL);break;case Wh:s.depthFunc(s.EQUAL);break;case qh:s.depthFunc(s.GEQUAL);break;case Yh:s.depthFunc(s.GREATER);break;case jh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=Oe}},setLocked:function(Oe){k=Oe},setClear:function(Oe){Ie!==Oe&&(Ne&&(Oe=1-Oe),s.clearDepth(Oe),Ie=Oe)},reset:function(){k=!1,le=null,me=null,Ie=null,Ne=!1}}}function l(){let k=!1,Ne=null,le=null,me=null,Ie=null,Oe=null,at=null,Gt=null,tn=null;return{setTest:function(Et){k||(Et?Re(s.STENCIL_TEST):Le(s.STENCIL_TEST))},setMask:function(Et){Ne!==Et&&!k&&(s.stencilMask(Et),Ne=Et)},setFunc:function(Et,Xn,dn){(le!==Et||me!==Xn||Ie!==dn)&&(s.stencilFunc(Et,Xn,dn),le=Et,me=Xn,Ie=dn)},setOp:function(Et,Xn,dn){(Oe!==Et||at!==Xn||Gt!==dn)&&(s.stencilOp(Et,Xn,dn),Oe=Et,at=Xn,Gt=dn)},setLocked:function(Et){k=Et},setClear:function(Et){tn!==Et&&(s.clearStencil(Et),tn=Et)},reset:function(){k=!1,Ne=null,le=null,me=null,Ie=null,Oe=null,at=null,Gt=null,tn=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,y=[],E=null,A=!1,S=null,_=null,O=null,U=null,D=null,F=null,G=null,I=new Mt(0,0,0),X=0,w=!1,C=null,H=null,oe=null,se=null,_e=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=Z>=2);let Ee=null,N={};const $=s.getParameter(s.SCISSOR_BOX),xe=s.getParameter(s.VIEWPORT),Me=new Qt().fromArray($),Q=new Qt().fromArray(xe);function de(k,Ne,le,me){const Ie=new Uint8Array(4),Oe=s.createTexture();s.bindTexture(k,Oe),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<le;at++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Ne+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return Oe}const ye={};ye[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Re(s.DEPTH_TEST),h.setFunc(Cs),gt(!1),it(O_),Re(s.CULL_FACE),z(Xa);function Re(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function Le(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function ot(k,Ne){return v[k]!==Ne?(s.bindFramebuffer(k,Ne),v[k]=Ne,k===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ne),k===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ke(k,Ne){let le=y,me=!1;if(k){le=x.get(Ne),le===void 0&&(le=[],x.set(Ne,le));const Ie=k.textures;if(le.length!==Ie.length||le[0]!==s.COLOR_ATTACHMENT0){for(let Oe=0,at=Ie.length;Oe<at;Oe++)le[Oe]=s.COLOR_ATTACHMENT0+Oe;le.length=Ie.length,me=!0}}else le[0]!==s.BACK&&(le[0]=s.BACK,me=!0);me&&s.drawBuffers(le)}function Ht(k){return E!==k?(s.useProgram(k),E=k,!0):!1}const It={[Mr]:s.FUNC_ADD,[MM]:s.FUNC_SUBTRACT,[EM]:s.FUNC_REVERSE_SUBTRACT};It[TM]=s.MIN,It[bM]=s.MAX;const ft={[AM]:s.ZERO,[RM]:s.ONE,[CM]:s.SRC_COLOR,[Hh]:s.SRC_ALPHA,[OM]:s.SRC_ALPHA_SATURATE,[LM]:s.DST_COLOR,[DM]:s.DST_ALPHA,[wM]:s.ONE_MINUS_SRC_COLOR,[Gh]:s.ONE_MINUS_SRC_ALPHA,[NM]:s.ONE_MINUS_DST_COLOR,[UM]:s.ONE_MINUS_DST_ALPHA,[PM]:s.CONSTANT_COLOR,[BM]:s.ONE_MINUS_CONSTANT_COLOR,[IM]:s.CONSTANT_ALPHA,[zM]:s.ONE_MINUS_CONSTANT_ALPHA};function z(k,Ne,le,me,Ie,Oe,at,Gt,tn,Et){if(k===Xa){A===!0&&(Le(s.BLEND),A=!1);return}if(A===!1&&(Re(s.BLEND),A=!0),k!==yM){if(k!==S||Et!==w){if((_!==Mr||D!==Mr)&&(s.blendEquation(s.FUNC_ADD),_=Mr,D=Mr),Et)switch(k){case As:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case P_:s.blendFunc(s.ONE,s.ONE);break;case B_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case I_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case As:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case P_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case B_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case I_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}O=null,U=null,F=null,G=null,I.set(0,0,0),X=0,S=k,w=Et}return}Ie=Ie||Ne,Oe=Oe||le,at=at||me,(Ne!==_||Ie!==D)&&(s.blendEquationSeparate(It[Ne],It[Ie]),_=Ne,D=Ie),(le!==O||me!==U||Oe!==F||at!==G)&&(s.blendFuncSeparate(ft[le],ft[me],ft[Oe],ft[at]),O=le,U=me,F=Oe,G=at),(Gt.equals(I)===!1||tn!==X)&&(s.blendColor(Gt.r,Gt.g,Gt.b,tn),I.copy(Gt),X=tn),S=k,w=!1}function Pn(k,Ne){k.side===On?Le(s.CULL_FACE):Re(s.CULL_FACE);let le=k.side===kn;Ne&&(le=!le),gt(le),k.blending===As&&k.transparent===!1?z(Xa):z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const me=k.stencilWrite;d.setTest(me),me&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ut(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Re(s.SAMPLE_ALPHA_TO_COVERAGE):Le(s.SAMPLE_ALPHA_TO_COVERAGE)}function gt(k){C!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),C=k)}function it(k){k!==xM?(Re(s.CULL_FACE),k!==H&&(k===O_?s.cullFace(s.BACK):k===SM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Le(s.CULL_FACE),H=k}function We(k){k!==oe&&(B&&s.lineWidth(k),oe=k)}function Ut(k,Ne,le){k?(Re(s.POLYGON_OFFSET_FILL),(se!==Ne||_e!==le)&&(s.polygonOffset(Ne,le),se=Ne,_e=le)):Le(s.POLYGON_OFFSET_FILL)}function Ve(k){k?Re(s.SCISSOR_TEST):Le(s.SCISSOR_TEST)}function L(k){k===void 0&&(k=s.TEXTURE0+ce-1),Ee!==k&&(s.activeTexture(k),Ee=k)}function b(k,Ne,le){le===void 0&&(Ee===null?le=s.TEXTURE0+ce-1:le=Ee);let me=N[le];me===void 0&&(me={type:void 0,texture:void 0},N[le]=me),(me.type!==k||me.texture!==Ne)&&(Ee!==le&&(s.activeTexture(le),Ee=le),s.bindTexture(k,Ne||ye[k]),me.type=k,me.texture=Ne)}function ee(){const k=N[Ee];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function pe(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ce(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ge(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $e(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Fe(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function je(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qe(k){Me.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Me.copy(k))}function Be(k){Q.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Q.copy(k))}function ut(k,Ne){let le=p.get(Ne);le===void 0&&(le=new WeakMap,p.set(Ne,le));let me=le.get(k);me===void 0&&(me=s.getUniformBlockIndex(Ne,k.name),le.set(k,me))}function nt(k,Ne){const me=p.get(Ne).get(k);m.get(Ne)!==me&&(s.uniformBlockBinding(Ne,me,k.__bindingPointIndex),m.set(Ne,me))}function Lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Ee=null,N={},v={},x=new WeakMap,y=[],E=null,A=!1,S=null,_=null,O=null,U=null,D=null,F=null,G=null,I=new Mt(0,0,0),X=0,w=!1,C=null,H=null,oe=null,se=null,_e=null,Me.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Re,disable:Le,bindFramebuffer:ot,drawBuffers:Ke,useProgram:Ht,setBlending:z,setMaterial:Pn,setFlipSided:gt,setCullFace:it,setLineWidth:We,setPolygonOffset:Ut,setScissorTest:Ve,activeTexture:L,bindTexture:b,unbindTexture:ee,compressedTexImage2D:pe,compressedTexImage3D:Te,texImage2D:Fe,texImage3D:je,updateUBOMapping:ut,uniformBlockBinding:nt,texStorage2D:$e,texStorage3D:Ae,texSubImage2D:fe,texSubImage3D:Pe,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ge,scissor:Qe,viewport:Be,reset:Lt}}function TR(s,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ct,g=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,b){return y?new OffscreenCanvas(L,b):qo("canvas")}function A(L,b,ee){let pe=1;const Te=Ve(L);if((Te.width>ee||Te.height>ee)&&(pe=ee/Math.max(Te.width,Te.height)),pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(pe*Te.width),Pe=Math.floor(pe*Te.height);v===void 0&&(v=E(fe,Pe));const Ce=b?E(fe,Pe):v;return Ce.width=fe,Ce.height=Pe,Ce.getContext("2d").drawImage(L,0,0,fe,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+fe+"x"+Pe+")."),Ce}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),L;return L}function S(L){return L.generateMipmaps}function _(L){s.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(L,b,ee,pe,Te=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=b;if(b===s.RED&&(ee===s.FLOAT&&(fe=s.R32F),ee===s.HALF_FLOAT&&(fe=s.R16F),ee===s.UNSIGNED_BYTE&&(fe=s.R8)),b===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.R8UI),ee===s.UNSIGNED_SHORT&&(fe=s.R16UI),ee===s.UNSIGNED_INT&&(fe=s.R32UI),ee===s.BYTE&&(fe=s.R8I),ee===s.SHORT&&(fe=s.R16I),ee===s.INT&&(fe=s.R32I)),b===s.RG&&(ee===s.FLOAT&&(fe=s.RG32F),ee===s.HALF_FLOAT&&(fe=s.RG16F),ee===s.UNSIGNED_BYTE&&(fe=s.RG8)),b===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RG8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RG16UI),ee===s.UNSIGNED_INT&&(fe=s.RG32UI),ee===s.BYTE&&(fe=s.RG8I),ee===s.SHORT&&(fe=s.RG16I),ee===s.INT&&(fe=s.RG32I)),b===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),ee===s.UNSIGNED_INT&&(fe=s.RGB32UI),ee===s.BYTE&&(fe=s.RGB8I),ee===s.SHORT&&(fe=s.RGB16I),ee===s.INT&&(fe=s.RGB32I)),b===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),ee===s.UNSIGNED_INT&&(fe=s.RGBA32UI),ee===s.BYTE&&(fe=s.RGBA8I),ee===s.SHORT&&(fe=s.RGBA16I),ee===s.INT&&(fe=s.RGBA32I)),b===s.RGB&&ee===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),b===s.RGBA){const Pe=Te?Xu:At.getTransfer(pe);ee===s.FLOAT&&(fe=s.RGBA32F),ee===s.HALF_FLOAT&&(fe=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(fe=Pe===Bt?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function D(L,b){let ee;return L?b===null||b===Ar||b===ko?ee=s.DEPTH24_STENCIL8:b===ia?ee=s.DEPTH32F_STENCIL8:b===Vo&&(ee=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ar||b===ko?ee=s.DEPTH_COMPONENT24:b===ia?ee=s.DEPTH_COMPONENT32F:b===Vo&&(ee=s.DEPTH_COMPONENT16),ee}function F(L,b){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==xi&&L.minFilter!==ci?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function G(L){const b=L.target;b.removeEventListener("dispose",G),X(b),b.isVideoTexture&&g.delete(b)}function I(L){const b=L.target;b.removeEventListener("dispose",I),C(b)}function X(L){const b=r.get(L);if(b.__webglInit===void 0)return;const ee=L.source,pe=x.get(ee);if(pe){const Te=pe[b.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&w(L),Object.keys(pe).length===0&&x.delete(ee)}r.remove(L)}function w(L){const b=r.get(L);s.deleteTexture(b.__webglTexture);const ee=L.source,pe=x.get(ee);delete pe[b.__cacheKey],h.memory.textures--}function C(L){const b=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(b.__webglFramebuffer[pe]))for(let Te=0;Te<b.__webglFramebuffer[pe].length;Te++)s.deleteFramebuffer(b.__webglFramebuffer[pe][Te]);else s.deleteFramebuffer(b.__webglFramebuffer[pe]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[pe])}else{if(Array.isArray(b.__webglFramebuffer))for(let pe=0;pe<b.__webglFramebuffer.length;pe++)s.deleteFramebuffer(b.__webglFramebuffer[pe]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pe=0;pe<b.__webglColorRenderbuffer.length;pe++)b.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[pe]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ee=L.textures;for(let pe=0,Te=ee.length;pe<Te;pe++){const fe=r.get(ee[pe]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),h.memory.textures--),r.remove(ee[pe])}r.remove(L)}let H=0;function oe(){H=0}function se(){const L=H;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),H+=1,L}function _e(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function ce(L,b){const ee=r.get(L);if(L.isVideoTexture&&We(L),L.isRenderTargetTexture===!1&&L.version>0&&ee.__version!==L.version){const pe=L.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(ee,L,b);return}}i.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+b)}function B(L,b){const ee=r.get(L);if(L.version>0&&ee.__version!==L.version){Q(ee,L,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+b)}function Z(L,b){const ee=r.get(L);if(L.version>0&&ee.__version!==L.version){Q(ee,L,b);return}i.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+b)}function Y(L,b){const ee=r.get(L);if(L.version>0&&ee.__version!==L.version){de(ee,L,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+b)}const Ee={[ku]:s.REPEAT,[Va]:s.CLAMP_TO_EDGE,[Qh]:s.MIRRORED_REPEAT},N={[xi]:s.NEAREST,[YM]:s.NEAREST_MIPMAP_NEAREST,[fu]:s.NEAREST_MIPMAP_LINEAR,[ci]:s.LINEAR,[oh]:s.LINEAR_MIPMAP_NEAREST,[Tr]:s.LINEAR_MIPMAP_LINEAR},$={[QM]:s.NEVER,[iE]:s.ALWAYS,[JM]:s.LESS,[f0]:s.LEQUAL,[$M]:s.EQUAL,[nE]:s.GEQUAL,[eE]:s.GREATER,[tE]:s.NOTEQUAL};function xe(L,b){if(b.type===ia&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===ci||b.magFilter===oh||b.magFilter===fu||b.magFilter===Tr||b.minFilter===ci||b.minFilter===oh||b.minFilter===fu||b.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Ee[b.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Ee[b.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Ee[b.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,N[b.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,N[b.minFilter]),b.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,$[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===xi||b.minFilter!==fu&&b.minFilter!==Tr||b.type===ia&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function Me(L,b){let ee=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",G));const pe=b.source;let Te=x.get(pe);Te===void 0&&(Te={},x.set(pe,Te));const fe=_e(b);if(fe!==L.__cacheKey){Te[fe]===void 0&&(Te[fe]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,ee=!0),Te[fe].usedTimes++;const Pe=Te[L.__cacheKey];Pe!==void 0&&(Te[L.__cacheKey].usedTimes--,Pe.usedTimes===0&&w(b)),L.__cacheKey=fe,L.__webglTexture=Te[fe].texture}return ee}function Q(L,b,ee){let pe=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pe=s.TEXTURE_3D);const Te=Me(L,b),fe=b.source;i.bindTexture(pe,L.__webglTexture,s.TEXTURE0+ee);const Pe=r.get(fe);if(fe.version!==Pe.__version||Te===!0){i.activeTexture(s.TEXTURE0+ee);const Ce=At.getPrimaries(At.workingColorSpace),Ge=b.colorSpace===Ga?null:At.getPrimaries(b.colorSpace),$e=b.colorSpace===Ga||Ce===Ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Ae=A(b.image,!1,l.maxTextureSize);Ae=Ut(b,Ae);const Fe=u.convert(b.format,b.colorSpace),je=u.convert(b.type);let Qe=U(b.internalFormat,Fe,je,b.colorSpace,b.isVideoTexture);xe(pe,b);let Be;const ut=b.mipmaps,nt=b.isVideoTexture!==!0,Lt=Pe.__version===void 0||Te===!0,k=fe.dataReady,Ne=F(b,Ae);if(b.isDepthTexture)Qe=D(b.format===Wo,b.type),Lt&&(nt?i.texStorage2D(s.TEXTURE_2D,1,Qe,Ae.width,Ae.height):i.texImage2D(s.TEXTURE_2D,0,Qe,Ae.width,Ae.height,0,Fe,je,null));else if(b.isDataTexture)if(ut.length>0){nt&&Lt&&i.texStorage2D(s.TEXTURE_2D,Ne,Qe,ut[0].width,ut[0].height);for(let le=0,me=ut.length;le<me;le++)Be=ut[le],nt?k&&i.texSubImage2D(s.TEXTURE_2D,le,0,0,Be.width,Be.height,Fe,je,Be.data):i.texImage2D(s.TEXTURE_2D,le,Qe,Be.width,Be.height,0,Fe,je,Be.data);b.generateMipmaps=!1}else nt?(Lt&&i.texStorage2D(s.TEXTURE_2D,Ne,Qe,Ae.width,Ae.height),k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Fe,je,Ae.data)):i.texImage2D(s.TEXTURE_2D,0,Qe,Ae.width,Ae.height,0,Fe,je,Ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){nt&&Lt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,Qe,ut[0].width,ut[0].height,Ae.depth);for(let le=0,me=ut.length;le<me;le++)if(Be=ut[le],b.format!==vi)if(Fe!==null)if(nt){if(k)if(b.layerUpdates.size>0){const Ie=ov(Be.width,Be.height,b.format,b.type);for(const Oe of b.layerUpdates){const at=Be.data.subarray(Oe*Ie/Be.data.BYTES_PER_ELEMENT,(Oe+1)*Ie/Be.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,Oe,Be.width,Be.height,1,Fe,at)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,Be.width,Be.height,Ae.depth,Fe,Be.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,le,Qe,Be.width,Be.height,Ae.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?k&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,Be.width,Be.height,Ae.depth,Fe,je,Be.data):i.texImage3D(s.TEXTURE_2D_ARRAY,le,Qe,Be.width,Be.height,Ae.depth,0,Fe,je,Be.data)}else{nt&&Lt&&i.texStorage2D(s.TEXTURE_2D,Ne,Qe,ut[0].width,ut[0].height);for(let le=0,me=ut.length;le<me;le++)Be=ut[le],b.format!==vi?Fe!==null?nt?k&&i.compressedTexSubImage2D(s.TEXTURE_2D,le,0,0,Be.width,Be.height,Fe,Be.data):i.compressedTexImage2D(s.TEXTURE_2D,le,Qe,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?k&&i.texSubImage2D(s.TEXTURE_2D,le,0,0,Be.width,Be.height,Fe,je,Be.data):i.texImage2D(s.TEXTURE_2D,le,Qe,Be.width,Be.height,0,Fe,je,Be.data)}else if(b.isDataArrayTexture)if(nt){if(Lt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,Qe,Ae.width,Ae.height,Ae.depth),k)if(b.layerUpdates.size>0){const le=ov(Ae.width,Ae.height,b.format,b.type);for(const me of b.layerUpdates){const Ie=Ae.data.subarray(me*le/Ae.data.BYTES_PER_ELEMENT,(me+1)*le/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,Ae.width,Ae.height,1,Fe,je,Ie)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Fe,je,Ae.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Qe,Ae.width,Ae.height,Ae.depth,0,Fe,je,Ae.data);else if(b.isData3DTexture)nt?(Lt&&i.texStorage3D(s.TEXTURE_3D,Ne,Qe,Ae.width,Ae.height,Ae.depth),k&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Fe,je,Ae.data)):i.texImage3D(s.TEXTURE_3D,0,Qe,Ae.width,Ae.height,Ae.depth,0,Fe,je,Ae.data);else if(b.isFramebufferTexture){if(Lt)if(nt)i.texStorage2D(s.TEXTURE_2D,Ne,Qe,Ae.width,Ae.height);else{let le=Ae.width,me=Ae.height;for(let Ie=0;Ie<Ne;Ie++)i.texImage2D(s.TEXTURE_2D,Ie,Qe,le,me,0,Fe,je,null),le>>=1,me>>=1}}else if(ut.length>0){if(nt&&Lt){const le=Ve(ut[0]);i.texStorage2D(s.TEXTURE_2D,Ne,Qe,le.width,le.height)}for(let le=0,me=ut.length;le<me;le++)Be=ut[le],nt?k&&i.texSubImage2D(s.TEXTURE_2D,le,0,0,Fe,je,Be):i.texImage2D(s.TEXTURE_2D,le,Qe,Fe,je,Be);b.generateMipmaps=!1}else if(nt){if(Lt){const le=Ve(Ae);i.texStorage2D(s.TEXTURE_2D,Ne,Qe,le.width,le.height)}k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,je,Ae)}else i.texImage2D(s.TEXTURE_2D,0,Qe,Fe,je,Ae);S(b)&&_(pe),Pe.__version=fe.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function de(L,b,ee){if(b.image.length!==6)return;const pe=Me(L,b),Te=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+ee);const fe=r.get(Te);if(Te.version!==fe.__version||pe===!0){i.activeTexture(s.TEXTURE0+ee);const Pe=At.getPrimaries(At.workingColorSpace),Ce=b.colorSpace===Ga?null:At.getPrimaries(b.colorSpace),Ge=b.colorSpace===Ga||Pe===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const $e=b.isCompressedTexture||b.image[0].isCompressedTexture,Ae=b.image[0]&&b.image[0].isDataTexture,Fe=[];for(let me=0;me<6;me++)!$e&&!Ae?Fe[me]=A(b.image[me],!0,l.maxCubemapSize):Fe[me]=Ae?b.image[me].image:b.image[me],Fe[me]=Ut(b,Fe[me]);const je=Fe[0],Qe=u.convert(b.format,b.colorSpace),Be=u.convert(b.type),ut=U(b.internalFormat,Qe,Be,b.colorSpace),nt=b.isVideoTexture!==!0,Lt=fe.__version===void 0||pe===!0,k=Te.dataReady;let Ne=F(b,je);xe(s.TEXTURE_CUBE_MAP,b);let le;if($e){nt&&Lt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,ut,je.width,je.height);for(let me=0;me<6;me++){le=Fe[me].mipmaps;for(let Ie=0;Ie<le.length;Ie++){const Oe=le[Ie];b.format!==vi?Qe!==null?nt?k&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,0,0,Oe.width,Oe.height,Qe,Oe.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,ut,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,0,0,Oe.width,Oe.height,Qe,Be,Oe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,ut,Oe.width,Oe.height,0,Qe,Be,Oe.data)}}}else{if(le=b.mipmaps,nt&&Lt){le.length>0&&Ne++;const me=Ve(Fe[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,ut,me.width,me.height)}for(let me=0;me<6;me++)if(Ae){nt?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Fe[me].width,Fe[me].height,Qe,Be,Fe[me].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ut,Fe[me].width,Fe[me].height,0,Qe,Be,Fe[me].data);for(let Ie=0;Ie<le.length;Ie++){const at=le[Ie].image[me].image;nt?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,0,0,at.width,at.height,Qe,Be,at.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,ut,at.width,at.height,0,Qe,Be,at.data)}}else{nt?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Qe,Be,Fe[me]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ut,Qe,Be,Fe[me]);for(let Ie=0;Ie<le.length;Ie++){const Oe=le[Ie];nt?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,0,0,Qe,Be,Oe.image[me]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,ut,Qe,Be,Oe.image[me])}}}S(b)&&_(s.TEXTURE_CUBE_MAP),fe.__version=Te.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ye(L,b,ee,pe,Te,fe){const Pe=u.convert(ee.format,ee.colorSpace),Ce=u.convert(ee.type),Ge=U(ee.internalFormat,Pe,Ce,ee.colorSpace),$e=r.get(b),Ae=r.get(ee);if(Ae.__renderTarget=b,!$e.__hasExternalTextures){const Fe=Math.max(1,b.width>>fe),je=Math.max(1,b.height>>fe);Te===s.TEXTURE_3D||Te===s.TEXTURE_2D_ARRAY?i.texImage3D(Te,fe,Ge,Fe,je,b.depth,0,Pe,Ce,null):i.texImage2D(Te,fe,Ge,Fe,je,0,Pe,Ce,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),it(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,Te,Ae.__webglTexture,0,gt(b)):(Te===s.TEXTURE_2D||Te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,Te,Ae.__webglTexture,fe),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(L,b,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,L),b.depthBuffer){const pe=b.depthTexture,Te=pe&&pe.isDepthTexture?pe.type:null,fe=D(b.stencilBuffer,Te),Pe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=gt(b);it(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,fe,b.width,b.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,fe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,fe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,L)}else{const pe=b.textures;for(let Te=0;Te<pe.length;Te++){const fe=pe[Te],Pe=u.convert(fe.format,fe.colorSpace),Ce=u.convert(fe.type),Ge=U(fe.internalFormat,Pe,Ce,fe.colorSpace),$e=gt(b);ee&&it(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,Ge,b.width,b.height):it(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$e,Ge,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ge,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Le(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(b.depthTexture);pe.__renderTarget=b,(!pe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ce(b.depthTexture,0);const Te=pe.__webglTexture,fe=gt(b);if(b.depthTexture.format===Xo)it(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Te,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Te,0);else if(b.depthTexture.format===Wo)it(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Te,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Te,0);else throw new Error("Unknown depthTexture format")}function ot(L){const b=r.get(L),ee=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const pe=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pe){const Te=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pe.removeEventListener("dispose",Te)};pe.addEventListener("dispose",Te),b.__depthDisposeCallback=Te}b.__boundDepthTexture=pe}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");const pe=L.texture.mipmaps;pe&&pe.length>0?Le(b.__webglFramebuffer[0],L):Le(b.__webglFramebuffer,L)}else if(ee){b.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[pe]),b.__webglDepthbuffer[pe]===void 0)b.__webglDepthbuffer[pe]=s.createRenderbuffer(),Re(b.__webglDepthbuffer[pe],L,!1);else{const Te=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,fe)}}else{const pe=L.texture.mipmaps;if(pe&&pe.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Re(b.__webglDepthbuffer,L,!1);else{const Te=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,fe)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(L,b,ee){const pe=r.get(L);b!==void 0&&ye(pe.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&ot(L)}function Ht(L){const b=L.texture,ee=r.get(L),pe=r.get(b);L.addEventListener("dispose",I);const Te=L.textures,fe=L.isWebGLCubeRenderTarget===!0,Pe=Te.length>1;if(Pe||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=b.version,h.memory.textures++),fe){ee.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer[Ce]=[];for(let Ge=0;Ge<b.mipmaps.length;Ge++)ee.__webglFramebuffer[Ce][Ge]=s.createFramebuffer()}else ee.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ce=0;Ce<b.mipmaps.length;Ce++)ee.__webglFramebuffer[Ce]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let Ce=0,Ge=Te.length;Ce<Ge;Ce++){const $e=r.get(Te[Ce]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),h.memory.textures++)}if(L.samples>0&&it(L)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ce=0;Ce<Te.length;Ce++){const Ge=Te[Ce];ee.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ce]);const $e=u.convert(Ge.format,Ge.colorSpace),Ae=u.convert(Ge.type),Fe=U(Ge.internalFormat,$e,Ae,Ge.colorSpace,L.isXRRenderTarget===!0),je=gt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,je,Fe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),Re(ee.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){i.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),xe(s.TEXTURE_CUBE_MAP,b);for(let Ce=0;Ce<6;Ce++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ge=0;Ge<b.mipmaps.length;Ge++)ye(ee.__webglFramebuffer[Ce][Ge],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ge);else ye(ee.__webglFramebuffer[Ce],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);S(b)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pe){for(let Ce=0,Ge=Te.length;Ce<Ge;Ce++){const $e=Te[Ce],Ae=r.get($e);i.bindTexture(s.TEXTURE_2D,Ae.__webglTexture),xe(s.TEXTURE_2D,$e),ye(ee.__webglFramebuffer,L,$e,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),S($e)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ce,pe.__webglTexture),xe(Ce,b),b.mipmaps&&b.mipmaps.length>0)for(let Ge=0;Ge<b.mipmaps.length;Ge++)ye(ee.__webglFramebuffer[Ge],L,b,s.COLOR_ATTACHMENT0,Ce,Ge);else ye(ee.__webglFramebuffer,L,b,s.COLOR_ATTACHMENT0,Ce,0);S(b)&&_(Ce),i.unbindTexture()}L.depthBuffer&&ot(L)}function It(L){const b=L.textures;for(let ee=0,pe=b.length;ee<pe;ee++){const Te=b[ee];if(S(Te)){const fe=O(L),Pe=r.get(Te).__webglTexture;i.bindTexture(fe,Pe),_(fe),i.unbindTexture()}}}const ft=[],z=[];function Pn(L){if(L.samples>0){if(it(L)===!1){const b=L.textures,ee=L.width,pe=L.height;let Te=s.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=r.get(L),Ce=b.length>1;if(Ce)for(let $e=0;$e<b.length;$e++)i.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Ge=L.texture.mipmaps;Ge&&Ge.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let $e=0;$e<b.length;$e++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Te|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Te|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[$e]);const Ae=r.get(b[$e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ae,0)}s.blitFramebuffer(0,0,ee,pe,0,0,ee,pe,Te,s.NEAREST),m===!0&&(ft.length=0,z.length=0,ft.push(s.COLOR_ATTACHMENT0+$e),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ft.push(fe),z.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ft))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let $e=0;$e<b.length;$e++){i.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[$e]);const Ae=r.get(b[$e]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,Ae,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function gt(L){return Math.min(l.maxSamples,L.samples)}function it(L){const b=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function We(L){const b=h.render.frame;g.get(L)!==b&&(g.set(L,b),L.update())}function Ut(L,b){const ee=L.colorSpace,pe=L.format,Te=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ee!==Us&&ee!==Ga&&(At.getTransfer(ee)===Bt?(pe!==vi||Te!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),b}function Ve(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=se,this.resetTextureUnits=oe,this.setTexture2D=ce,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=Ke,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=Pn,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=it}function bR(s,e){function i(r,l=Ga){let u;const h=At.getTransfer(l);if(r===Di)return s.UNSIGNED_BYTE;if(r===Od)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Pd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===a0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===n0)return s.BYTE;if(r===i0)return s.SHORT;if(r===Vo)return s.UNSIGNED_SHORT;if(r===Nd)return s.INT;if(r===Ar)return s.UNSIGNED_INT;if(r===ia)return s.FLOAT;if(r===Ko)return s.HALF_FLOAT;if(r===r0)return s.ALPHA;if(r===s0)return s.RGB;if(r===vi)return s.RGBA;if(r===Xo)return s.DEPTH_COMPONENT;if(r===Wo)return s.DEPTH_STENCIL;if(r===o0)return s.RED;if(r===Bd)return s.RED_INTEGER;if(r===l0)return s.RG;if(r===Id)return s.RG_INTEGER;if(r===zd)return s.RGBA_INTEGER;if(r===Pu||r===Bu||r===Iu||r===zu)if(h===Bt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Pu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Iu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Pu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Iu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jh||r===$h||r===ed||r===td)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Jh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$h)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ed)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===td)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===nd||r===id||r===ad)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===nd||r===id)return h===Bt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===ad)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rd||r===sd||r===od||r===ld||r===ud||r===cd||r===fd||r===hd||r===dd||r===pd||r===md||r===gd||r===_d||r===vd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===rd)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sd)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===od)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ld)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ud)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===cd)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fd)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hd)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dd)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pd)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===md)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gd)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_d)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vd)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fu||r===xd||r===Sd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Fu)return h===Bt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===u0||r===yd||r===Md||r===Ed)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Fu)return u.COMPRESSED_RED_RGTC1_EXT;if(r===yd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Md)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ed)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ko?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const AR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RR=`
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

}`;class CR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Un,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ya({vertexShader:AR,fragmentShader:RR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Vn(new ka(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wR extends Dr{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,x=null,y=null,E=null;const A=new CR,S=i.getContextAttributes();let _=null,O=null;const U=[],D=[],F=new Ct;let G=null;const I=new ui;I.viewport=new Qt;const X=new ui;X.viewport=new Qt;const w=[I,X],C=new ZE;let H=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=U[Q];return de===void 0&&(de=new wh,U[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=U[Q];return de===void 0&&(de=new wh,U[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=U[Q];return de===void 0&&(de=new wh,U[Q]=de),de.getHandSpace()};function se(Q){const de=D.indexOf(Q.inputSource);if(de===-1)return;const ye=U[de];ye!==void 0&&(ye.update(Q.inputSource,Q.frame,p||h),ye.dispatchEvent({type:Q.type,data:Q.inputSource}))}function _e(){l.removeEventListener("select",se),l.removeEventListener("selectstart",se),l.removeEventListener("selectend",se),l.removeEventListener("squeeze",se),l.removeEventListener("squeezestart",se),l.removeEventListener("squeezeend",se),l.removeEventListener("end",_e),l.removeEventListener("inputsourceschange",ce);for(let Q=0;Q<U.length;Q++){const de=D[Q];de!==null&&(D[Q]=null,U[Q].disconnect(de))}H=null,oe=null,A.reset(),e.setRenderTarget(_),y=null,x=null,v=null,l=null,O=null,Me.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",se),l.addEventListener("selectstart",se),l.addEventListener("selectend",se),l.addEventListener("squeeze",se),l.addEventListener("squeezestart",se),l.addEventListener("squeezeend",se),l.addEventListener("end",_e),l.addEventListener("inputsourceschange",ce),S.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Re=null,Le=null;S.depth&&(Le=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ye=S.stencil?Wo:Xo,Re=S.stencil?ko:Ar);const ot={colorFormat:i.RGBA8,depthFormat:Le,scaleFactor:u};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(ot),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),O=new Rr(x.textureWidth,x.textureHeight,{format:vi,type:Di,depthTexture:new M0(x.textureWidth,x.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ye={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,ye),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new Rr(y.framebufferWidth,y.framebufferHeight,{format:vi,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Me.setContext(l),Me.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function ce(Q){for(let de=0;de<Q.removed.length;de++){const ye=Q.removed[de],Re=D.indexOf(ye);Re>=0&&(D[Re]=null,U[Re].disconnect(ye))}for(let de=0;de<Q.added.length;de++){const ye=Q.added[de];let Re=D.indexOf(ye);if(Re===-1){for(let ot=0;ot<U.length;ot++)if(ot>=D.length){D.push(ye),Re=ot;break}else if(D[ot]===null){D[ot]=ye,Re=ot;break}if(Re===-1)break}const Le=U[Re];Le&&Le.connect(ye)}}const B=new re,Z=new re;function Y(Q,de,ye){B.setFromMatrixPosition(de.matrixWorld),Z.setFromMatrixPosition(ye.matrixWorld);const Re=B.distanceTo(Z),Le=de.projectionMatrix.elements,ot=ye.projectionMatrix.elements,Ke=Le[14]/(Le[10]-1),Ht=Le[14]/(Le[10]+1),It=(Le[9]+1)/Le[5],ft=(Le[9]-1)/Le[5],z=(Le[8]-1)/Le[0],Pn=(ot[8]+1)/ot[0],gt=Ke*z,it=Ke*Pn,We=Re/(-z+Pn),Ut=We*-z;if(de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ut),Q.translateZ(We),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Le[10]===-1)Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ve=Ke+We,L=Ht+We,b=gt-Ut,ee=it+(Re-Ut),pe=It*Ht/L*Ve,Te=ft*Ht/L*Ve;Q.projectionMatrix.makePerspective(b,ee,pe,Te,Ve,L),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Ee(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let de=Q.near,ye=Q.far;A.texture!==null&&(A.depthNear>0&&(de=A.depthNear),A.depthFar>0&&(ye=A.depthFar)),C.near=X.near=I.near=de,C.far=X.far=I.far=ye,(H!==C.near||oe!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,oe=C.far),I.layers.mask=Q.layers.mask|2,X.layers.mask=Q.layers.mask|4,C.layers.mask=I.layers.mask|X.layers.mask;const Re=Q.parent,Le=C.cameras;Ee(C,Re);for(let ot=0;ot<Le.length;ot++)Ee(Le[ot],Re);Le.length===2?Y(C,I,X):C.projectionMatrix.copy(I.projectionMatrix),N(Q,C,Re)};function N(Q,de,ye){ye===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(ye.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Td*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let $=null;function xe(Q,de){if(g=de.getViewerPose(p||h),E=de,g!==null){const ye=g.views;y!==null&&(e.setRenderTargetFramebuffer(O,y.framebuffer),e.setRenderTarget(O));let Re=!1;ye.length!==C.cameras.length&&(C.cameras.length=0,Re=!0);for(let Ke=0;Ke<ye.length;Ke++){const Ht=ye[Ke];let It=null;if(y!==null)It=y.getViewport(Ht);else{const z=v.getViewSubImage(x,Ht);It=z.viewport,Ke===0&&(e.setRenderTargetTextures(O,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(O))}let ft=w[Ke];ft===void 0&&(ft=new ui,ft.layers.enable(Ke),ft.viewport=new Qt,w[Ke]=ft),ft.matrix.fromArray(Ht.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Ht.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(It.x,It.y,It.width,It.height),Ke===0&&(C.matrix.copy(ft.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Re===!0&&C.cameras.push(ft)}const Le=l.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Ke=v.getDepthInformation(ye[0]);Ke&&Ke.isValid&&Ke.texture&&A.init(e,Ke,l.renderState)}}for(let ye=0;ye<U.length;ye++){const Re=D[ye],Le=U[ye];Re!==null&&Le!==void 0&&Le.update(Re,de,p||h)}$&&$(Q,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),E=null}const Me=new T0;Me.setAnimationLoop(xe),this.setAnimationLoop=function(Q){$=Q},this.dispose=function(){}}}const xr=new yi,DR=new Jt;function UR(s,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,x0(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,O,U,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(S,_):_.isMeshToonMaterial?(u(S,_),v(S,_)):_.isMeshPhongMaterial?(u(S,_),g(S,_)):_.isMeshStandardMaterial?(u(S,_),x(S,_),_.isMeshPhysicalMaterial&&y(S,_,D)):_.isMeshMatcapMaterial?(u(S,_),E(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),A(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(h(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?m(S,_,O,U):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===kn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===kn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const O=e.get(_),U=O.envMap,D=O.envMapRotation;U&&(S.envMap.value=U,xr.copy(D),xr.x*=-1,xr.y*=-1,xr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),S.envMapRotation.value.setFromMatrix4(DR.makeRotationFromEuler(xr)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,O,U){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*O,S.scale.value=U*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,O){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===kn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function A(S,_){const O=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function LR(s,e,i,r){let l={},u={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,U){const D=U.program;r.uniformBlockBinding(O,D)}function p(O,U){let D=l[O.id];D===void 0&&(E(O),D=g(O),l[O.id]=D,O.addEventListener("dispose",S));const F=U.program;r.updateUBOMapping(O,F);const G=e.render.frame;u[O.id]!==G&&(x(O),u[O.id]=G)}function g(O){const U=v();O.__bindingPointIndex=U;const D=s.createBuffer(),F=O.__size,G=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,F,G),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,D),D}function v(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const U=l[O.id],D=O.uniforms,F=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let G=0,I=D.length;G<I;G++){const X=Array.isArray(D[G])?D[G]:[D[G]];for(let w=0,C=X.length;w<C;w++){const H=X[w];if(y(H,G,w,F)===!0){const oe=H.__offset,se=Array.isArray(H.value)?H.value:[H.value];let _e=0;for(let ce=0;ce<se.length;ce++){const B=se[ce],Z=A(B);typeof B=="number"||typeof B=="boolean"?(H.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,oe+_e,H.__data)):B.isMatrix3?(H.__data[0]=B.elements[0],H.__data[1]=B.elements[1],H.__data[2]=B.elements[2],H.__data[3]=0,H.__data[4]=B.elements[3],H.__data[5]=B.elements[4],H.__data[6]=B.elements[5],H.__data[7]=0,H.__data[8]=B.elements[6],H.__data[9]=B.elements[7],H.__data[10]=B.elements[8],H.__data[11]=0):(B.toArray(H.__data,_e),_e+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,oe,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(O,U,D,F){const G=O.value,I=U+"_"+D;if(F[I]===void 0)return typeof G=="number"||typeof G=="boolean"?F[I]=G:F[I]=G.clone(),!0;{const X=F[I];if(typeof G=="number"||typeof G=="boolean"){if(X!==G)return F[I]=G,!0}else if(X.equals(G)===!1)return X.copy(G),!0}return!1}function E(O){const U=O.uniforms;let D=0;const F=16;for(let I=0,X=U.length;I<X;I++){const w=Array.isArray(U[I])?U[I]:[U[I]];for(let C=0,H=w.length;C<H;C++){const oe=w[C],se=Array.isArray(oe.value)?oe.value:[oe.value];for(let _e=0,ce=se.length;_e<ce;_e++){const B=se[_e],Z=A(B),Y=D%F,Ee=Y%Z.boundary,N=Y+Ee;D+=Ee,N!==0&&F-N<Z.storage&&(D+=F-N),oe.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=D,D+=Z.storage}}}const G=D%F;return G>0&&(D+=F-G),O.__size=D,O.__cache={},this}function A(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),U}function S(O){const U=O.target;U.removeEventListener("dispose",S);const D=h.indexOf(U.__bindingPointIndex);h.splice(D,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function _(){for(const O in l)s.deleteBuffer(l[O]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class NR{constructor(e={}){const{canvas:i=rE(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const E=new Uint32Array(4),A=new Int32Array(4);let S=null,_=null;const O=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let F=!1;this._outputColorSpace=li;let G=0,I=0,X=null,w=-1,C=null;const H=new Qt,oe=new Qt;let se=null;const _e=new Mt(0);let ce=0,B=i.width,Z=i.height,Y=1,Ee=null,N=null;const $=new Qt(0,0,B,Z),xe=new Qt(0,0,B,Z);let Me=!1;const Q=new Gd;let de=!1,ye=!1;const Re=new Jt,Le=new Jt,ot=new re,Ke=new Qt,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function ft(){return X===null?Y:1}let z=r;function Pn(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ld}`),i.addEventListener("webglcontextlost",me,!1),i.addEventListener("webglcontextrestored",Ie,!1),i.addEventListener("webglcontextcreationerror",Oe,!1),z===null){const q="webgl2";if(z=Pn(q,R),z===null)throw Pn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let gt,it,We,Ut,Ve,L,b,ee,pe,Te,fe,Pe,Ce,Ge,$e,Ae,Fe,je,Qe,Be,ut,nt,Lt,k;function Ne(){gt=new kA(z),gt.init(),nt=new bR(z,gt),it=new BA(z,gt,e,nt),We=new ER(z,gt),it.reverseDepthBuffer&&x&&We.buffers.depth.setReversed(!0),Ut=new qA(z),Ve=new cR,L=new TR(z,gt,We,Ve,it,nt,Ut),b=new zA(D),ee=new VA(D),pe=new JE(z),Lt=new OA(z,pe),Te=new XA(z,pe,Ut,Lt),fe=new jA(z,Te,pe,Ut),Qe=new YA(z,it,L),Ae=new IA(Ve),Pe=new uR(D,b,ee,gt,it,Lt,Ae),Ce=new UR(D,Ve),Ge=new hR,$e=new vR(gt),je=new NA(D,b,ee,We,fe,y,m),Fe=new yR(D,fe,it),k=new LR(z,Ut,it,We),Be=new PA(z,gt,Ut),ut=new WA(z,gt,Ut),Ut.programs=Pe.programs,D.capabilities=it,D.extensions=gt,D.properties=Ve,D.renderLists=Ge,D.shadowMap=Fe,D.state=We,D.info=Ut}Ne();const le=new wR(D,z);this.xr=le,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=gt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=gt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(B,Z,!1))},this.getSize=function(R){return R.set(B,Z)},this.setSize=function(R,q,ie=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,Z=q,i.width=Math.floor(R*Y),i.height=Math.floor(q*Y),ie===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(B*Y,Z*Y).floor()},this.setDrawingBufferSize=function(R,q,ie){B=R,Z=q,Y=ie,i.width=Math.floor(R*ie),i.height=Math.floor(q*ie),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,q,ie,ae){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,q,ie,ae),We.viewport(H.copy($).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(xe)},this.setScissor=function(R,q,ie,ae){R.isVector4?xe.set(R.x,R.y,R.z,R.w):xe.set(R,q,ie,ae),We.scissor(oe.copy(xe).multiplyScalar(Y).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(R){We.setScissorTest(Me=R)},this.setOpaqueSort=function(R){Ee=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ie=!0){let ae=0;if(R){let j=!1;if(X!==null){const be=X.texture.format;j=be===zd||be===Id||be===Bd}if(j){const be=X.texture.type,we=be===Di||be===Ar||be===Vo||be===ko||be===Od||be===Pd,De=je.getClearColor(),ze=je.getClearAlpha(),et=De.r,qe=De.g,Xe=De.b;we?(E[0]=et,E[1]=qe,E[2]=Xe,E[3]=ze,z.clearBufferuiv(z.COLOR,0,E)):(A[0]=et,A[1]=qe,A[2]=Xe,A[3]=ze,z.clearBufferiv(z.COLOR,0,A))}else ae|=z.COLOR_BUFFER_BIT}q&&(ae|=z.DEPTH_BUFFER_BIT),ie&&(ae|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",me,!1),i.removeEventListener("webglcontextrestored",Ie,!1),i.removeEventListener("webglcontextcreationerror",Oe,!1),je.dispose(),Ge.dispose(),$e.dispose(),Ve.dispose(),b.dispose(),ee.dispose(),fe.dispose(),Lt.dispose(),k.dispose(),Pe.dispose(),le.dispose(),le.removeEventListener("sessionstart",on),le.removeEventListener("sessionend",Sn),Bn.stop()};function me(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=Ut.autoReset,q=Fe.enabled,ie=Fe.autoUpdate,ae=Fe.needsUpdate,j=Fe.type;Ne(),Ut.autoReset=R,Fe.enabled=q,Fe.autoUpdate=ie,Fe.needsUpdate=ae,Fe.type=j}function Oe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function at(R){const q=R.target;q.removeEventListener("dispose",at),Gt(q)}function Gt(R){tn(R),Ve.remove(R)}function tn(R){const q=Ve.get(R).programs;q!==void 0&&(q.forEach(function(ie){Pe.releaseProgram(ie)}),R.isShaderMaterial&&Pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ie,ae,j,be){q===null&&(q=Ht);const we=j.isMesh&&j.matrixWorld.determinant()<0,De=Ka(R,q,ie,ae,j);We.setMaterial(ae,we);let ze=ie.index,et=1;if(ae.wireframe===!0){if(ze=Te.getWireframeAttribute(ie),ze===void 0)return;et=2}const qe=ie.drawRange,Xe=ie.attributes.position;let dt=qe.start*et,Tt=(qe.start+qe.count)*et;be!==null&&(dt=Math.max(dt,be.start*et),Tt=Math.min(Tt,(be.start+be.count)*et)),ze!==null?(dt=Math.max(dt,0),Tt=Math.min(Tt,ze.count)):Xe!=null&&(dt=Math.max(dt,0),Tt=Math.min(Tt,Xe.count));const Wt=Tt-dt;if(Wt<0||Wt===1/0)return;Lt.setup(j,ae,De,ie,ze);let _t,vt=Be;if(ze!==null&&(_t=pe.get(ze),vt=ut,vt.setIndex(_t)),j.isMesh)ae.wireframe===!0?(We.setLineWidth(ae.wireframeLinewidth*ft()),vt.setMode(z.LINES)):vt.setMode(z.TRIANGLES);else if(j.isLine){let Ye=ae.linewidth;Ye===void 0&&(Ye=1),We.setLineWidth(Ye*ft()),j.isLineSegments?vt.setMode(z.LINES):j.isLineLoop?vt.setMode(z.LINE_LOOP):vt.setMode(z.LINE_STRIP)}else j.isPoints?vt.setMode(z.POINTS):j.isSprite&&vt.setMode(z.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Hu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))vt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ye=j._multiDrawStarts,jt=j._multiDrawCounts,yt=j._multiDrawCount,bn=ze?pe.get(ze).bytesPerElement:1,ha=Ve.get(ae).currentProgram.getUniforms();for(let Vt=0;Vt<yt;Vt++)ha.setValue(z,"_gl_DrawID",Vt),vt.render(Ye[Vt]/bn,jt[Vt])}else if(j.isInstancedMesh)vt.renderInstances(dt,Wt,j.count);else if(ie.isInstancedBufferGeometry){const Ye=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,jt=Math.min(ie.instanceCount,Ye);vt.renderInstances(dt,Wt,jt)}else vt.render(dt,Wt)};function Et(R,q,ie){R.transparent===!0&&R.side===On&&R.forceSinglePass===!1?(R.side=kn,R.needsUpdate=!0,ca(R,q,ie),R.side=qa,R.needsUpdate=!0,ca(R,q,ie),R.side=On):ca(R,q,ie)}this.compile=function(R,q,ie=null){ie===null&&(ie=R),_=$e.get(ie),_.init(q),U.push(_),ie.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),R!==ie&&R.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const ae=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const be=j.material;if(be)if(Array.isArray(be))for(let we=0;we<be.length;we++){const De=be[we];Et(De,ie,j),ae.add(De)}else Et(be,ie,j),ae.add(be)}),_=U.pop(),ae},this.compileAsync=function(R,q,ie=null){const ae=this.compile(R,q,ie);return new Promise(j=>{function be(){if(ae.forEach(function(we){Ve.get(we).currentProgram.isReady()&&ae.delete(we)}),ae.size===0){j(R);return}setTimeout(be,10)}gt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Xn=null;function dn(R){Xn&&Xn(R)}function on(){Bn.stop()}function Sn(){Bn.start()}const Bn=new T0;Bn.setAnimationLoop(dn),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(R){Xn=R,le.setAnimationLoop(R),R===null?Bn.stop():Bn.start()},le.addEventListener("sessionstart",on),le.addEventListener("sessionend",Sn),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(q),q=le.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,q,X),_=$e.get(R,U.length),_.init(q),U.push(_),Le.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Q.setFromProjectionMatrix(Le),ye=this.localClippingEnabled,de=Ae.init(this.clippingPlanes,ye),S=Ge.get(R,O.length),S.init(),O.push(S),le.enabled===!0&&le.isPresenting===!0){const be=D.xr.getDepthSensingMesh();be!==null&&ja(be,q,-1/0,D.sortObjects)}ja(R,q,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(Ee,N),It=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,It&&je.addToRenderList(S,R),this.info.render.frame++,de===!0&&Ae.beginShadows();const ie=_.state.shadowsArray;Fe.render(ie,R,q),de===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=S.opaque,j=S.transmissive;if(_.setupLights(),q.isArrayCamera){const be=q.cameras;if(j.length>0)for(let we=0,De=be.length;we<De;we++){const ze=be[we];tl(ae,j,R,ze)}It&&je.render(R);for(let we=0,De=be.length;we<De;we++){const ze=be[we];el(S,R,ze,ze.viewport)}}else j.length>0&&tl(ae,j,R,q),It&&je.render(R),el(S,R,q);X!==null&&I===0&&(L.updateMultisampleRenderTarget(X),L.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(D,R,q),Lt.resetDefaultState(),w=-1,C=null,U.pop(),U.length>0?(_=U[U.length-1],de===!0&&Ae.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,O.pop(),O.length>0?S=O[O.length-1]:S=null};function ja(R,q,ie,ae){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ie=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){ae&&Ke.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Le);const we=fe.update(R),De=R.material;De.visible&&S.push(R,we,De,ie,Ke.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const we=fe.update(R),De=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ke.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ke.copy(we.boundingSphere.center)),Ke.applyMatrix4(R.matrixWorld).applyMatrix4(Le)),Array.isArray(De)){const ze=we.groups;for(let et=0,qe=ze.length;et<qe;et++){const Xe=ze[et],dt=De[Xe.materialIndex];dt&&dt.visible&&S.push(R,we,dt,ie,Ke.z,Xe)}}else De.visible&&S.push(R,we,De,ie,Ke.z,null)}}const be=R.children;for(let we=0,De=be.length;we<De;we++)ja(be[we],q,ie,ae)}function el(R,q,ie,ae){const j=R.opaque,be=R.transmissive,we=R.transparent;_.setupLightsView(ie),de===!0&&Ae.setGlobalState(D.clippingPlanes,ie),ae&&We.viewport(H.copy(ae)),j.length>0&&Za(j,q,ie),be.length>0&&Za(be,q,ie),we.length>0&&Za(we,q,ie),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function tl(R,q,ie,ae){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ae.id]===void 0&&(_.state.transmissionRenderTarget[ae.id]=new Rr(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?Ko:Di,minFilter:Tr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const be=_.state.transmissionRenderTarget[ae.id],we=ae.viewport||H;be.setSize(we.z*D.transmissionResolutionScale,we.w*D.transmissionResolutionScale);const De=D.getRenderTarget();D.setRenderTarget(be),D.getClearColor(_e),ce=D.getClearAlpha(),ce<1&&D.setClearColor(16777215,.5),D.clear(),It&&je.render(ie);const ze=D.toneMapping;D.toneMapping=Wa;const et=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),_.setupLightsView(ae),de===!0&&Ae.setGlobalState(D.clippingPlanes,ae),Za(R,ie,ae),L.updateMultisampleRenderTarget(be),L.updateRenderTargetMipmap(be),gt.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Xe=0,dt=q.length;Xe<dt;Xe++){const Tt=q[Xe],Wt=Tt.object,_t=Tt.geometry,vt=Tt.material,Ye=Tt.group;if(vt.side===On&&Wt.layers.test(ae.layers)){const jt=vt.side;vt.side=kn,vt.needsUpdate=!0,ua(Wt,ie,ae,_t,vt,Ye),vt.side=jt,vt.needsUpdate=!0,qe=!0}}qe===!0&&(L.updateMultisampleRenderTarget(be),L.updateRenderTargetMipmap(be))}D.setRenderTarget(De),D.setClearColor(_e,ce),et!==void 0&&(ae.viewport=et),D.toneMapping=ze}function Za(R,q,ie){const ae=q.isScene===!0?q.overrideMaterial:null;for(let j=0,be=R.length;j<be;j++){const we=R[j],De=we.object,ze=we.geometry,et=we.group;let qe=we.material;qe.allowOverride===!0&&ae!==null&&(qe=ae),De.layers.test(ie.layers)&&ua(De,q,ie,ze,qe,et)}}function ua(R,q,ie,ae,j,be){R.onBeforeRender(D,q,ie,ae,j,be),R.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(D,q,ie,ae,R,be),j.transparent===!0&&j.side===On&&j.forceSinglePass===!1?(j.side=kn,j.needsUpdate=!0,D.renderBufferDirect(ie,q,ae,j,R,be),j.side=qa,j.needsUpdate=!0,D.renderBufferDirect(ie,q,ae,j,R,be),j.side=On):D.renderBufferDirect(ie,q,ae,j,R,be),R.onAfterRender(D,q,ie,ae,j,be)}function ca(R,q,ie){q.isScene!==!0&&(q=Ht);const ae=Ve.get(R),j=_.state.lights,be=_.state.shadowsArray,we=j.state.version,De=Pe.getParameters(R,j.state,be,q,ie),ze=Pe.getProgramCacheKey(De);let et=ae.programs;ae.environment=R.isMeshStandardMaterial?q.environment:null,ae.fog=q.fog,ae.envMap=(R.isMeshStandardMaterial?ee:b).get(R.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",at),et=new Map,ae.programs=et);let qe=et.get(ze);if(qe!==void 0){if(ae.currentProgram===qe&&ae.lightsStateVersion===we)return Ni(R,De),qe}else De.uniforms=Pe.getUniforms(R),R.onBeforeCompile(De,D),qe=Pe.acquireProgram(De,ze),et.set(ze,qe),ae.uniforms=De.uniforms;const Xe=ae.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=Ae.uniform),Ni(R,De),ae.needsLights=nn(R),ae.lightsStateVersion=we,ae.needsLights&&(Xe.ambientLightColor.value=j.state.ambient,Xe.lightProbe.value=j.state.probe,Xe.directionalLights.value=j.state.directional,Xe.directionalLightShadows.value=j.state.directionalShadow,Xe.spotLights.value=j.state.spot,Xe.spotLightShadows.value=j.state.spotShadow,Xe.rectAreaLights.value=j.state.rectArea,Xe.ltc_1.value=j.state.rectAreaLTC1,Xe.ltc_2.value=j.state.rectAreaLTC2,Xe.pointLights.value=j.state.point,Xe.pointLightShadows.value=j.state.pointShadow,Xe.hemisphereLights.value=j.state.hemi,Xe.directionalShadowMap.value=j.state.directionalShadowMap,Xe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Xe.spotShadowMap.value=j.state.spotShadowMap,Xe.spotLightMatrix.value=j.state.spotLightMatrix,Xe.spotLightMap.value=j.state.spotLightMap,Xe.pointShadowMap.value=j.state.pointShadowMap,Xe.pointShadowMatrix.value=j.state.pointShadowMatrix),ae.currentProgram=qe,ae.uniformsList=null,qe}function Li(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Gu.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Ni(R,q){const ie=Ve.get(R);ie.outputColorSpace=q.outputColorSpace,ie.batching=q.batching,ie.batchingColor=q.batchingColor,ie.instancing=q.instancing,ie.instancingColor=q.instancingColor,ie.instancingMorph=q.instancingMorph,ie.skinning=q.skinning,ie.morphTargets=q.morphTargets,ie.morphNormals=q.morphNormals,ie.morphColors=q.morphColors,ie.morphTargetsCount=q.morphTargetsCount,ie.numClippingPlanes=q.numClippingPlanes,ie.numIntersection=q.numClipIntersection,ie.vertexAlphas=q.vertexAlphas,ie.vertexTangents=q.vertexTangents,ie.toneMapping=q.toneMapping}function Ka(R,q,ie,ae,j){q.isScene!==!0&&(q=Ht),L.resetTextureUnits();const be=q.fog,we=ae.isMeshStandardMaterial?q.environment:null,De=X===null?D.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Us,ze=(ae.isMeshStandardMaterial?ee:b).get(ae.envMap||we),et=ae.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,qe=!!ie.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Xe=!!ie.morphAttributes.position,dt=!!ie.morphAttributes.normal,Tt=!!ie.morphAttributes.color;let Wt=Wa;ae.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Wt=D.toneMapping);const _t=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,vt=_t!==void 0?_t.length:0,Ye=Ve.get(ae),jt=_.state.lights;if(de===!0&&(ye===!0||R!==C)){const pn=R===C&&ae.id===w;Ae.setState(ae,R,pn)}let yt=!1;ae.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==jt.state.version||Ye.outputColorSpace!==De||j.isBatchedMesh&&Ye.batching===!1||!j.isBatchedMesh&&Ye.batching===!0||j.isBatchedMesh&&Ye.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ye.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ye.instancing===!1||!j.isInstancedMesh&&Ye.instancing===!0||j.isSkinnedMesh&&Ye.skinning===!1||!j.isSkinnedMesh&&Ye.skinning===!0||j.isInstancedMesh&&Ye.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ye.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ye.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ye.instancingMorph===!1&&j.morphTexture!==null||Ye.envMap!==ze||ae.fog===!0&&Ye.fog!==be||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ae.numPlanes||Ye.numIntersection!==Ae.numIntersection)||Ye.vertexAlphas!==et||Ye.vertexTangents!==qe||Ye.morphTargets!==Xe||Ye.morphNormals!==dt||Ye.morphColors!==Tt||Ye.toneMapping!==Wt||Ye.morphTargetsCount!==vt)&&(yt=!0):(yt=!0,Ye.__version=ae.version);let bn=Ye.currentProgram;yt===!0&&(bn=ca(ae,q,j));let ha=!1,Vt=!1,Pi=!1;const zt=bn.getUniforms(),An=Ye.uniforms;if(We.useProgram(bn.program)&&(ha=!0,Vt=!0,Pi=!0),ae.id!==w&&(w=ae.id,Vt=!0),ha||C!==R){We.buffers.depth.getReversed()?(Re.copy(R.projectionMatrix),oE(Re),lE(Re),zt.setValue(z,"projectionMatrix",Re)):zt.setValue(z,"projectionMatrix",R.projectionMatrix),zt.setValue(z,"viewMatrix",R.matrixWorldInverse);const yn=zt.map.cameraPosition;yn!==void 0&&yn.setValue(z,ot.setFromMatrixPosition(R.matrixWorld)),it.logarithmicDepthBuffer&&zt.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&zt.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Vt=!0,Pi=!0)}if(j.isSkinnedMesh){zt.setOptional(z,j,"bindMatrix"),zt.setOptional(z,j,"bindMatrixInverse");const pn=j.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),zt.setValue(z,"boneTexture",pn.boneTexture,L))}j.isBatchedMesh&&(zt.setOptional(z,j,"batchingTexture"),zt.setValue(z,"batchingTexture",j._matricesTexture,L),zt.setOptional(z,j,"batchingIdTexture"),zt.setValue(z,"batchingIdTexture",j._indirectTexture,L),zt.setOptional(z,j,"batchingColorTexture"),j._colorsTexture!==null&&zt.setValue(z,"batchingColorTexture",j._colorsTexture,L));const ln=ie.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Qe.update(j,ie,bn),(Vt||Ye.receiveShadow!==j.receiveShadow)&&(Ye.receiveShadow=j.receiveShadow,zt.setValue(z,"receiveShadow",j.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(An.envMap.value=ze,An.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&q.environment!==null&&(An.envMapIntensity.value=q.environmentIntensity),Vt&&(zt.setValue(z,"toneMappingExposure",D.toneMappingExposure),Ye.needsLights&&fa(An,Pi),be&&ae.fog===!0&&Ce.refreshFogUniforms(An,be),Ce.refreshMaterialUniforms(An,ae,Y,Z,_.state.transmissionRenderTarget[R.id]),Gu.upload(z,Li(Ye),An,L)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Gu.upload(z,Li(Ye),An,L),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&zt.setValue(z,"center",j.center),zt.setValue(z,"modelViewMatrix",j.modelViewMatrix),zt.setValue(z,"normalMatrix",j.normalMatrix),zt.setValue(z,"modelMatrix",j.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const pn=ae.uniformsGroups;for(let yn=0,Mi=pn.length;yn<Mi;yn++){const Bi=pn[yn];k.update(Bi,bn),k.bind(Bi,bn)}}return bn}function fa(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function nn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,q,ie){const ae=Ve.get(R);ae.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),Ve.get(R.texture).__webglTexture=q,Ve.get(R.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ie,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ie=Ve.get(R);ie.__webglFramebuffer=q,ie.__useDefaultFramebuffer=q===void 0};const nl=z.createFramebuffer();this.setRenderTarget=function(R,q=0,ie=0){X=R,G=q,I=ie;let ae=!0,j=null,be=!1,we=!1;if(R){const ze=Ve.get(R);if(ze.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(z.FRAMEBUFFER,null),ae=!1;else if(ze.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(ze.__hasExternalTextures)L.rebindTextures(R,Ve.get(R.texture).__webglTexture,Ve.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Xe=R.depthTexture;if(ze.__boundDepthTexture!==Xe){if(Xe!==null&&Ve.has(Xe)&&(R.width!==Xe.image.width||R.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(we=!0);const qe=Ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qe[q])?j=qe[q][ie]:j=qe[q],be=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?j=Ve.get(R).__webglMultisampledFramebuffer:Array.isArray(qe)?j=qe[ie]:j=qe,H.copy(R.viewport),oe.copy(R.scissor),se=R.scissorTest}else H.copy($).multiplyScalar(Y).floor(),oe.copy(xe).multiplyScalar(Y).floor(),se=Me;if(ie!==0&&(j=nl),We.bindFramebuffer(z.FRAMEBUFFER,j)&&ae&&We.drawBuffers(R,j),We.viewport(H),We.scissor(oe),We.setScissorTest(se),be){const ze=Ve.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+q,ze.__webglTexture,ie)}else if(we){const ze=Ve.get(R.texture),et=q;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,ze.__webglTexture,ie,et)}else if(R!==null&&ie!==0){const ze=Ve.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ze.__webglTexture,ie)}w=-1},this.readRenderTargetPixels=function(R,q,ie,ae,j,be,we){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De){We.bindFramebuffer(z.FRAMEBUFFER,De);try{const ze=R.texture,et=ze.format,qe=ze.type;if(!it.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ae&&ie>=0&&ie<=R.height-j&&z.readPixels(q,ie,ae,j,nt.convert(et),nt.convert(qe),be)}finally{const ze=X!==null?Ve.get(X).__webglFramebuffer:null;We.bindFramebuffer(z.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(R,q,ie,ae,j,be,we){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De)if(q>=0&&q<=R.width-ae&&ie>=0&&ie<=R.height-j){We.bindFramebuffer(z.FRAMEBUFFER,De);const ze=R.texture,et=ze.format,qe=ze.type;if(!it.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Xe),z.bufferData(z.PIXEL_PACK_BUFFER,be.byteLength,z.STREAM_READ),z.readPixels(q,ie,ae,j,nt.convert(et),nt.convert(qe),0);const dt=X!==null?Ve.get(X).__webglFramebuffer:null;We.bindFramebuffer(z.FRAMEBUFFER,dt);const Tt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await sE(z,Tt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Xe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,be),z.deleteBuffer(Xe),z.deleteSync(Tt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ie=0){const ae=Math.pow(2,-ie),j=Math.floor(R.image.width*ae),be=Math.floor(R.image.height*ae),we=q!==null?q.x:0,De=q!==null?q.y:0;L.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,ie,0,0,we,De,j,be),We.unbindTexture()};const il=z.createFramebuffer(),Oi=z.createFramebuffer();this.copyTextureToTexture=function(R,q,ie=null,ae=null,j=0,be=null){be===null&&(j!==0?(Hu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=j,j=0):be=0);let we,De,ze,et,qe,Xe,dt,Tt,Wt;const _t=R.isCompressedTexture?R.mipmaps[be]:R.image;if(ie!==null)we=ie.max.x-ie.min.x,De=ie.max.y-ie.min.y,ze=ie.isBox3?ie.max.z-ie.min.z:1,et=ie.min.x,qe=ie.min.y,Xe=ie.isBox3?ie.min.z:0;else{const ln=Math.pow(2,-j);we=Math.floor(_t.width*ln),De=Math.floor(_t.height*ln),R.isDataArrayTexture?ze=_t.depth:R.isData3DTexture?ze=Math.floor(_t.depth*ln):ze=1,et=0,qe=0,Xe=0}ae!==null?(dt=ae.x,Tt=ae.y,Wt=ae.z):(dt=0,Tt=0,Wt=0);const vt=nt.convert(q.format),Ye=nt.convert(q.type);let jt;q.isData3DTexture?(L.setTexture3D(q,0),jt=z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(L.setTexture2DArray(q,0),jt=z.TEXTURE_2D_ARRAY):(L.setTexture2D(q,0),jt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const yt=z.getParameter(z.UNPACK_ROW_LENGTH),bn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ha=z.getParameter(z.UNPACK_SKIP_PIXELS),Vt=z.getParameter(z.UNPACK_SKIP_ROWS),Pi=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,_t.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_t.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,et),z.pixelStorei(z.UNPACK_SKIP_ROWS,qe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Xe);const zt=R.isDataArrayTexture||R.isData3DTexture,An=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const ln=Ve.get(R),pn=Ve.get(q),yn=Ve.get(ln.__renderTarget),Mi=Ve.get(pn.__renderTarget);We.bindFramebuffer(z.READ_FRAMEBUFFER,yn.__webglFramebuffer),We.bindFramebuffer(z.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let Bi=0;Bi<ze;Bi++)zt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ve.get(R).__webglTexture,j,Xe+Bi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ve.get(q).__webglTexture,be,Wt+Bi)),z.blitFramebuffer(et,qe,we,De,dt,Tt,we,De,z.DEPTH_BUFFER_BIT,z.NEAREST);We.bindFramebuffer(z.READ_FRAMEBUFFER,null),We.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Ve.has(R)){const ln=Ve.get(R),pn=Ve.get(q);We.bindFramebuffer(z.READ_FRAMEBUFFER,il),We.bindFramebuffer(z.DRAW_FRAMEBUFFER,Oi);for(let yn=0;yn<ze;yn++)zt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ln.__webglTexture,j,Xe+yn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ln.__webglTexture,j),An?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,pn.__webglTexture,be,Wt+yn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,pn.__webglTexture,be),j!==0?z.blitFramebuffer(et,qe,we,De,dt,Tt,we,De,z.COLOR_BUFFER_BIT,z.NEAREST):An?z.copyTexSubImage3D(jt,be,dt,Tt,Wt+yn,et,qe,we,De):z.copyTexSubImage2D(jt,be,dt,Tt,et,qe,we,De);We.bindFramebuffer(z.READ_FRAMEBUFFER,null),We.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else An?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(jt,be,dt,Tt,Wt,we,De,ze,vt,Ye,_t.data):q.isCompressedArrayTexture?z.compressedTexSubImage3D(jt,be,dt,Tt,Wt,we,De,ze,vt,_t.data):z.texSubImage3D(jt,be,dt,Tt,Wt,we,De,ze,vt,Ye,_t):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,be,dt,Tt,we,De,vt,Ye,_t.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,be,dt,Tt,_t.width,_t.height,vt,_t.data):z.texSubImage2D(z.TEXTURE_2D,be,dt,Tt,we,De,vt,Ye,_t);z.pixelStorei(z.UNPACK_ROW_LENGTH,yt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,bn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ha),z.pixelStorei(z.UNPACK_SKIP_ROWS,Vt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Pi),be===0&&q.generateMipmaps&&z.generateMipmap(jt),We.unbindTexture()},this.copyTextureToTexture3D=function(R,q,ie=null,ae=null,j=0){return Hu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,ie,ae,j)},this.initRenderTarget=function(R){Ve.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),We.unbindTexture()},this.resetState=function(){G=0,I=0,X=null,We.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),i.unpackColorSpace=At._getUnpackColorSpace()}}const Es=new yi(0,0,0,"YXZ"),Ts=new re,OR={type:"change"},PR={type:"lock"},BR={type:"unlock"},Lv=.002,Nv=Math.PI/2;class IR extends KE{constructor(e,i=null){super(e,i),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=zR.bind(this),this._onPointerlockChange=FR.bind(this),this._onPointerlockError=HR.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const i=this.object;Ts.setFromMatrixColumn(i.matrix,0),Ts.crossVectors(i.up,Ts),i.position.addScaledVector(Ts,e)}moveRight(e){if(this.enabled===!1)return;const i=this.object;Ts.setFromMatrixColumn(i.matrix,0),i.position.addScaledVector(Ts,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function zR(s){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;Es.setFromQuaternion(e.quaternion),Es.y-=s.movementX*Lv*this.pointerSpeed,Es.x-=s.movementY*Lv*this.pointerSpeed,Es.x=Math.max(Nv-this.maxPolarAngle,Math.min(Nv-this.minPolarAngle,Es.x)),e.quaternion.setFromEuler(Es),this.dispatchEvent(OR)}function FR(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(PR),this.isLocked=!0):(this.dispatchEvent(BR),this.isLocked=!1)}function HR(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}function GR(){const s=ve.useRef(null);return ve.useEffect(()=>{const e=s.current,i=()=>e.clientWidth,r=()=>e.clientHeight,l=new NR({antialias:!0});l.setSize(i(),r()),l.shadowMap.enabled=!0,l.outputEncoding=void 0,l.toneMapping=e0,l.toneMappingExposure=1,l.shadowMap.type=Jv,e.appendChild(l.domElement);const u=new OE;u.background=new Mt(11184810);const h=new ui(75,i()/r(),.1,100);h.position.set(0,0,-10),h.lookAt(0,.75,0);const d=new IR(h,e);e.addEventListener("click",()=>{d.isLocked||d.lock()}),u.add(new jE(16777215,1)),u.add(new XE(16777215,12698049,.4));const m=new YE(16777215,.8);m.position.set(2,4,-2),m.castShadow=!0,m.shadow.mapSize.set(2048,2048),u.add(m);const p=new kE,g=p.load("./assets/floor.jpeg");g.wrapS=g.wrapT=ku,g.repeat.set(2,2);const v=(()=>{const w=document.createElement("canvas");w.width=1,w.height=256;const C=w.getContext("2d"),H=C.createLinearGradient(0,0,0,256);H.addColorStop(0,"#ffffff"),H.addColorStop(.6,"#ffffff"),H.addColorStop(.6,"#3399ff"),H.addColorStop(1,"#3399ff"),C.fillStyle=H,C.fillRect(0,0,1,256);const oe=new IE(w);return oe.wrapS=oe.wrapT=Va,oe.minFilter=ci,oe.magFilter=ci,oe})(),x=new _r({map:g,roughness:.8,metalness:0,side:On}),y=new _r({map:v,roughness:.9,metalness:0,side:On});new _r({color:11184810,roughness:.4,metalness:.5,side:On}),new _r({color:3381759,roughness:.5,metalness:0,side:On});const E=new _r({color:14803425,roughness:.2,metalness:0,side:On}),A=new Vn(new ka(6,6),x);A.rotation.x=-Math.PI/2,A.position.y=.05,A.receiveShadow=!0,u.add(A);const S=(w,C,H,oe,se,_e=0)=>{const ce=new Vn(new ka(w,C),y);ce.position.set(H,oe,se),ce.rotation.y=_e,ce.receiveShadow=!0,u.add(ce)};S(6,2,0,1,3),S(6,2,0,1,-3,Math.PI),S(6,2,-3,1,0,Math.PI/2),S(6,2,3,1,0,-Math.PI/2);const _=new Vn(new ka(6,6),new _r({color:16777215,side:On,roughness:.9}));_.rotation.x=Math.PI/2,_.position.y=2,_.receiveShadow=!0,u.add(_);const O=new Vn(new Ps(2,1,.05),E);O.position.set(0,1,2.95),O.rotation.y=Math.PI,O.castShadow=!0,O.receiveShadow=!0,u.add(O);const U=new Fo;U.position.z=.026,O.add(U);const D=[],F=[],G=new Vn(new ka(2,1),new _r({map:p.load("./assets/world-map.jpg"),roughness:.8,metalness:0}));G.position.set(2.85,1.3,-1.8),G.rotation.y=-Math.PI/2,G.castShadow=G.receiveShadow=!0,u.add(G),D.forEach(w=>{w.updateMatrixWorld(!0),F.push(new Os().setFromObject(w))});const I=new xn;u.add(I),window.addEventListener("resize",()=>{h.aspect=i()/r(),h.updateProjectionMatrix(),l.setSize(i(),r())});function X(){requestAnimationFrame(X),l.render(u,h)}return X(),()=>{e.removeChild(l.domElement),l.dispose()}},[]),Se.jsx("div",{ref:s,style:{width:"100%",height:"100%"}})}function VR(){return Se.jsx("div",{style:{width:"100vw",height:"100vh",overflow:"hidden"},children:Se.jsx(GR,{})})}function kR(){return Se.jsxs(Se.Fragment,{children:[Se.jsx(dM,{}),Se.jsxs(Ly,{children:[Se.jsx(Lu,{path:"/",element:Se.jsx(N_,{})}),Se.jsx(Lu,{path:"/classroom",element:Se.jsx(VR,{})}),Se.jsx(Lu,{path:"*",element:Se.jsx(N_,{})})]})]})}HS.createRoot(document.getElementById("root")).render(Se.jsx(ve.StrictMode,{children:Se.jsx(nM,{children:Se.jsx(kR,{})})}));
