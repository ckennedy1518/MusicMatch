(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Dk(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Pn={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cu=Symbol.for("react.element"),Pk=Symbol.for("react.portal"),Ok=Symbol.for("react.fragment"),Lk=Symbol.for("react.strict_mode"),Mk=Symbol.for("react.profiler"),$k=Symbol.for("react.provider"),Uk=Symbol.for("react.context"),Fk=Symbol.for("react.forward_ref"),Vk=Symbol.for("react.suspense"),Bk=Symbol.for("react.memo"),zk=Symbol.for("react.lazy"),dy=Symbol.iterator;function jk(t){return t===null||typeof t!="object"?null:(t=dy&&t[dy]||t["@@iterator"],typeof t=="function"?t:null)}var k_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C_=Object.assign,b_={};function ro(t,e,n){this.props=t,this.context=e,this.refs=b_,this.updater=n||k_}ro.prototype.isReactComponent={};ro.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ro.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function R_(){}R_.prototype=ro.prototype;function kp(t,e,n){this.props=t,this.context=e,this.refs=b_,this.updater=n||k_}var Cp=kp.prototype=new R_;Cp.constructor=kp;C_(Cp,ro.prototype);Cp.isPureReactComponent=!0;var fy=Array.isArray,A_=Object.prototype.hasOwnProperty,bp={current:null},N_={key:!0,ref:!0,__self:!0,__source:!0};function x_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)A_.call(e,r)&&!N_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:cu,type:t,key:s,ref:o,props:i,_owner:bp.current}}function qk(t,e){return{$$typeof:cu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rp(t){return typeof t=="object"&&t!==null&&t.$$typeof===cu}function Hk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var py=/\/+/g;function Yh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Hk(""+t.key):e.toString(36)}function vl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case cu:case Pk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Yh(o,0):r,fy(i)?(n="",t!=null&&(n=t.replace(py,"$&/")+"/"),vl(i,e,n,"",function(l){return l})):i!=null&&(Rp(i)&&(i=qk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(py,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",fy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Yh(s,a);o+=vl(s,e,n,u,i)}else if(u=jk(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Yh(s,a++),o+=vl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function zu(t,e,n){if(t==null)return t;var r=[],i=0;return vl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Wk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gt={current:null},wl={transition:null},Gk={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:wl,ReactCurrentOwner:bp};W.Children={map:zu,forEach:function(t,e,n){zu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return zu(t,function(){e++}),e},toArray:function(t){return zu(t,function(e){return e})||[]},only:function(t){if(!Rp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=ro;W.Fragment=Ok;W.Profiler=Mk;W.PureComponent=kp;W.StrictMode=Lk;W.Suspense=Vk;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gk;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=C_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)A_.call(e,u)&&!N_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:cu,type:t.type,key:i,ref:s,props:r,_owner:o}};W.createContext=function(t){return t={$$typeof:Uk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$k,_context:t},t.Consumer=t};W.createElement=x_;W.createFactory=function(t){var e=x_.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:Fk,render:t}};W.isValidElement=Rp;W.lazy=function(t){return{$$typeof:zk,_payload:{_status:-1,_result:t},_init:Wk}};W.memo=function(t,e){return{$$typeof:Bk,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=wl.transition;wl.transition={};try{t()}finally{wl.transition=e}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(t,e){return gt.current.useCallback(t,e)};W.useContext=function(t){return gt.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return gt.current.useDeferredValue(t)};W.useEffect=function(t,e){return gt.current.useEffect(t,e)};W.useId=function(){return gt.current.useId()};W.useImperativeHandle=function(t,e,n){return gt.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return gt.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return gt.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return gt.current.useMemo(t,e)};W.useReducer=function(t,e,n){return gt.current.useReducer(t,e,n)};W.useRef=function(t){return gt.current.useRef(t)};W.useState=function(t){return gt.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return gt.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return gt.current.useTransition()};W.version="18.2.0";(function(t){t.exports=W})(Pn);const Kk=Dk(Pn.exports);var Gd={},D_={exports:{}},$t={},P_={exports:{}},O_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,j){var q=L.length;L.push(j);e:for(;0<q;){var _e=q-1>>>1,xe=L[_e];if(0<i(xe,j))L[_e]=j,L[q]=xe,q=_e;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var j=L[0],q=L.pop();if(q!==j){L[0]=q;e:for(var _e=0,xe=L.length,Vu=xe>>>1;_e<Vu;){var Jr=2*(_e+1)-1,Qh=L[Jr],Zr=Jr+1,Bu=L[Zr];if(0>i(Qh,q))Zr<xe&&0>i(Bu,Qh)?(L[_e]=Bu,L[Zr]=q,_e=Zr):(L[_e]=Qh,L[Jr]=q,_e=Jr);else if(Zr<xe&&0>i(Bu,q))L[_e]=Bu,L[Zr]=q,_e=Zr;else break e}}return j}function i(L,j){var q=L.sortIndex-j.sortIndex;return q!==0?q:L.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],l=[],c=1,h=null,d=3,p=!1,y=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var j=n(l);j!==null;){if(j.callback===null)r(l);else if(j.startTime<=L)r(l),j.sortIndex=j.expirationTime,e(u,j);else break;j=n(l)}}function I(L){if(v=!1,g(L),!y)if(n(u)!==null)y=!0,Gh(k);else{var j=n(l);j!==null&&Kh(I,j.startTime-L)}}function k(L,j){y=!1,v&&(v=!1,m(D),D=-1),p=!0;var q=d;try{for(g(j),h=n(u);h!==null&&(!(h.expirationTime>j)||L&&!Yt());){var _e=h.callback;if(typeof _e=="function"){h.callback=null,d=h.priorityLevel;var xe=_e(h.expirationTime<=j);j=t.unstable_now(),typeof xe=="function"?h.callback=xe:h===n(u)&&r(u),g(j)}else r(u);h=n(u)}if(h!==null)var Vu=!0;else{var Jr=n(l);Jr!==null&&Kh(I,Jr.startTime-j),Vu=!1}return Vu}finally{h=null,d=q,p=!1}}var R=!1,A=null,D=-1,J=5,H=-1;function Yt(){return!(t.unstable_now()-H<J)}function To(){if(A!==null){var L=t.unstable_now();H=L;var j=!0;try{j=A(!0,L)}finally{j?So():(R=!1,A=null)}}else R=!1}var So;if(typeof f=="function")So=function(){f(To)};else if(typeof MessageChannel<"u"){var hy=new MessageChannel,xk=hy.port2;hy.port1.onmessage=To,So=function(){xk.postMessage(null)}}else So=function(){E(To,0)};function Gh(L){A=L,R||(R=!0,So())}function Kh(L,j){D=E(function(){L(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,Gh(k))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var q=d;d=j;try{return L()}finally{d=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,j){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var q=d;d=L;try{return j()}finally{d=q}},t.unstable_scheduleCallback=function(L,j,q){var _e=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?_e+q:_e):q=_e,L){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=q+xe,L={id:c++,callback:j,priorityLevel:L,startTime:q,expirationTime:xe,sortIndex:-1},q>_e?(L.sortIndex=q,e(l,L),n(u)===null&&L===n(l)&&(v?(m(D),D=-1):v=!0,Kh(I,q-_e))):(L.sortIndex=xe,e(u,L),y||p||(y=!0,Gh(k))),L},t.unstable_shouldYield=Yt,t.unstable_wrapCallback=function(L){var j=d;return function(){var q=d;d=j;try{return L.apply(this,arguments)}finally{d=q}}}})(O_);(function(t){t.exports=O_})(P_);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_=Pn.exports,Ot=P_.exports;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var M_=new Set,_a={};function Hi(t,e){Ms(t,e),Ms(t+"Capture",e)}function Ms(t,e){for(_a[t]=e,t=0;t<e.length;t++)M_.add(e[t])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kd=Object.prototype.hasOwnProperty,Qk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,my={},gy={};function Yk(t){return Kd.call(gy,t)?!0:Kd.call(my,t)?!1:Qk.test(t)?gy[t]=!0:(my[t]=!0,!1)}function Xk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Jk(t,e,n,r){if(e===null||typeof e>"u"||Xk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ye[t]=new yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ye[e]=new yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ye[t]=new yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ye[t]=new yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ye[t]=new yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ye[t]=new yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ye[t]=new yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ye[t]=new yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ye[t]=new yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ap=/[\-:]([a-z])/g;function Np(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ap,Np);Ye[e]=new yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ap,Np);Ye[e]=new yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ap,Np);Ye[e]=new yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ye[t]=new yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ye.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ye[t]=new yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function xp(t,e,n,r){var i=Ye.hasOwnProperty(e)?Ye[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Jk(e,n,i,r)&&(n=null),r||i===null?Yk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Xn=L_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ju=Symbol.for("react.element"),us=Symbol.for("react.portal"),ls=Symbol.for("react.fragment"),Dp=Symbol.for("react.strict_mode"),Qd=Symbol.for("react.profiler"),$_=Symbol.for("react.provider"),U_=Symbol.for("react.context"),Pp=Symbol.for("react.forward_ref"),Yd=Symbol.for("react.suspense"),Xd=Symbol.for("react.suspense_list"),Op=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),F_=Symbol.for("react.offscreen"),yy=Symbol.iterator;function ko(t){return t===null||typeof t!="object"?null:(t=yy&&t[yy]||t["@@iterator"],typeof t=="function"?t:null)}var de=Object.assign,Xh;function qo(t){if(Xh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xh=e&&e[1]||""}return`
`+Xh+t}var Jh=!1;function Zh(t,e){if(!t||Jh)return"";Jh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Jh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qo(t):""}function Zk(t){switch(t.tag){case 5:return qo(t.type);case 16:return qo("Lazy");case 13:return qo("Suspense");case 19:return qo("SuspenseList");case 0:case 2:case 15:return t=Zh(t.type,!1),t;case 11:return t=Zh(t.type.render,!1),t;case 1:return t=Zh(t.type,!0),t;default:return""}}function Jd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ls:return"Fragment";case us:return"Portal";case Qd:return"Profiler";case Dp:return"StrictMode";case Yd:return"Suspense";case Xd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case U_:return(t.displayName||"Context")+".Consumer";case $_:return(t._context.displayName||"Context")+".Provider";case Pp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Op:return e=t.displayName||null,e!==null?e:Jd(t.type)||"Memo";case ur:e=t._payload,t=t._init;try{return Jd(t(e))}catch{}}return null}function eC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jd(e);case 8:return e===Dp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function V_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tC(t){var e=V_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qu(t){t._valueTracker||(t._valueTracker=tC(t))}function B_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=V_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Zd(t,e){var n=e.checked;return de({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function vy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function z_(t,e){e=e.checked,e!=null&&xp(t,"checked",e,!1)}function ef(t,e){z_(t,e);var n=Rr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?tf(t,e.type,n):e.hasOwnProperty("defaultValue")&&tf(t,e.type,Rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function wy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function tf(t,e,n){(e!=="number"||Fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ho=Array.isArray;function Ts(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Rr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function nf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return de({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _y(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Ho(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Rr(n)}}function j_(t,e){var n=Rr(e.value),r=Rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Iy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function q_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?q_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Hu,H_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Hu=Hu||document.createElement("div"),Hu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Hu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ia(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nC=["Webkit","ms","Moz","O"];Object.keys(ea).forEach(function(t){nC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ea[e]=ea[t]})});function W_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ea.hasOwnProperty(t)&&ea[t]?(""+e).trim():e+"px"}function G_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=W_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var rC=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sf(t,e){if(e){if(rC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function of(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var af=null;function Lp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uf=null,Ss=null,ks=null;function Ey(t){if(t=fu(t)){if(typeof uf!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Bc(e),uf(t.stateNode,t.type,e))}}function K_(t){Ss?ks?ks.push(t):ks=[t]:Ss=t}function Q_(){if(Ss){var t=Ss,e=ks;if(ks=Ss=null,Ey(t),e)for(t=0;t<e.length;t++)Ey(e[t])}}function Y_(t,e){return t(e)}function X_(){}var ed=!1;function J_(t,e,n){if(ed)return t(e,n);ed=!0;try{return Y_(t,e,n)}finally{ed=!1,(Ss!==null||ks!==null)&&(X_(),Q_())}}function Ea(t,e){var n=t.stateNode;if(n===null)return null;var r=Bc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var lf=!1;if(jn)try{var Co={};Object.defineProperty(Co,"passive",{get:function(){lf=!0}}),window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{lf=!1}function iC(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var ta=!1,Vl=null,Bl=!1,cf=null,sC={onError:function(t){ta=!0,Vl=t}};function oC(t,e,n,r,i,s,o,a,u){ta=!1,Vl=null,iC.apply(sC,arguments)}function aC(t,e,n,r,i,s,o,a,u){if(oC.apply(this,arguments),ta){if(ta){var l=Vl;ta=!1,Vl=null}else throw Error(C(198));Bl||(Bl=!0,cf=l)}}function Wi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Z_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ty(t){if(Wi(t)!==t)throw Error(C(188))}function uC(t){var e=t.alternate;if(!e){if(e=Wi(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ty(i),t;if(s===r)return Ty(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function e0(t){return t=uC(t),t!==null?t0(t):null}function t0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=t0(t);if(e!==null)return e;t=t.sibling}return null}var n0=Ot.unstable_scheduleCallback,Sy=Ot.unstable_cancelCallback,lC=Ot.unstable_shouldYield,cC=Ot.unstable_requestPaint,Ie=Ot.unstable_now,hC=Ot.unstable_getCurrentPriorityLevel,Mp=Ot.unstable_ImmediatePriority,r0=Ot.unstable_UserBlockingPriority,zl=Ot.unstable_NormalPriority,dC=Ot.unstable_LowPriority,i0=Ot.unstable_IdlePriority,$c=null,En=null;function fC(t){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot($c,t,void 0,(t.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:gC,pC=Math.log,mC=Math.LN2;function gC(t){return t>>>=0,t===0?32:31-(pC(t)/mC|0)|0}var Wu=64,Gu=4194304;function Wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Wo(a):(s&=o,s!==0&&(r=Wo(s)))}else o=n&~i,o!==0?r=Wo(o):s!==0&&(r=Wo(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-nn(e),i=1<<n,r|=t[n],e&=~i;return r}function yC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-nn(s),a=1<<o,u=i[o];u===-1?((a&n)===0||(a&r)!==0)&&(i[o]=yC(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function hf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function s0(){var t=Wu;return Wu<<=1,(Wu&4194240)===0&&(Wu=64),t}function td(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function hu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-nn(e),t[e]=n}function wC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-nn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function $p(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-nn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Z=0;function o0(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var a0,Up,u0,l0,c0,df=!1,Ku=[],vr=null,wr=null,_r=null,Ta=new Map,Sa=new Map,cr=[],_C="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ky(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":Ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(e.pointerId)}}function bo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=fu(e),e!==null&&Up(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function IC(t,e,n,r,i){switch(e){case"focusin":return vr=bo(vr,t,e,n,r,i),!0;case"dragenter":return wr=bo(wr,t,e,n,r,i),!0;case"mouseover":return _r=bo(_r,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ta.set(s,bo(Ta.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Sa.set(s,bo(Sa.get(s)||null,t,e,n,r,i)),!0}return!1}function h0(t){var e=hi(t.target);if(e!==null){var n=Wi(e);if(n!==null){if(e=n.tag,e===13){if(e=Z_(n),e!==null){t.blockedOn=e,c0(t.priority,function(){u0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _l(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ff(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);af=r,n.target.dispatchEvent(r),af=null}else return e=fu(n),e!==null&&Up(e),t.blockedOn=n,!1;e.shift()}return!0}function Cy(t,e,n){_l(t)&&n.delete(e)}function EC(){df=!1,vr!==null&&_l(vr)&&(vr=null),wr!==null&&_l(wr)&&(wr=null),_r!==null&&_l(_r)&&(_r=null),Ta.forEach(Cy),Sa.forEach(Cy)}function Ro(t,e){t.blockedOn===e&&(t.blockedOn=null,df||(df=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,EC)))}function ka(t){function e(i){return Ro(i,t)}if(0<Ku.length){Ro(Ku[0],t);for(var n=1;n<Ku.length;n++){var r=Ku[n];r.blockedOn===t&&(r.blockedOn=null)}}for(vr!==null&&Ro(vr,t),wr!==null&&Ro(wr,t),_r!==null&&Ro(_r,t),Ta.forEach(e),Sa.forEach(e),n=0;n<cr.length;n++)r=cr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)h0(n),n.blockedOn===null&&cr.shift()}var Cs=Xn.ReactCurrentBatchConfig,ql=!0;function TC(t,e,n,r){var i=Z,s=Cs.transition;Cs.transition=null;try{Z=1,Fp(t,e,n,r)}finally{Z=i,Cs.transition=s}}function SC(t,e,n,r){var i=Z,s=Cs.transition;Cs.transition=null;try{Z=4,Fp(t,e,n,r)}finally{Z=i,Cs.transition=s}}function Fp(t,e,n,r){if(ql){var i=ff(t,e,n,r);if(i===null)hd(t,e,r,Hl,n),ky(t,r);else if(IC(i,t,e,n,r))r.stopPropagation();else if(ky(t,r),e&4&&-1<_C.indexOf(t)){for(;i!==null;){var s=fu(i);if(s!==null&&a0(s),s=ff(t,e,n,r),s===null&&hd(t,e,r,Hl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else hd(t,e,r,null,n)}}var Hl=null;function ff(t,e,n,r){if(Hl=null,t=Lp(r),t=hi(t),t!==null)if(e=Wi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Z_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hl=t,null}function d0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hC()){case Mp:return 1;case r0:return 4;case zl:case dC:return 16;case i0:return 536870912;default:return 16}default:return 16}}var pr=null,Vp=null,Il=null;function f0(){if(Il)return Il;var t,e=Vp,n=e.length,r,i="value"in pr?pr.value:pr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Il=i.slice(t,1<r?1-r:void 0)}function El(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qu(){return!0}function by(){return!1}function Ut(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qu:by,this.isPropagationStopped=by,this}return de(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qu)},persist:function(){},isPersistent:Qu}),e}var io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bp=Ut(io),du=de({},io,{view:0,detail:0}),kC=Ut(du),nd,rd,Ao,Uc=de({},du,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ao&&(Ao&&t.type==="mousemove"?(nd=t.screenX-Ao.screenX,rd=t.screenY-Ao.screenY):rd=nd=0,Ao=t),nd)},movementY:function(t){return"movementY"in t?t.movementY:rd}}),Ry=Ut(Uc),CC=de({},Uc,{dataTransfer:0}),bC=Ut(CC),RC=de({},du,{relatedTarget:0}),id=Ut(RC),AC=de({},io,{animationName:0,elapsedTime:0,pseudoElement:0}),NC=Ut(AC),xC=de({},io,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),DC=Ut(xC),PC=de({},io,{data:0}),Ay=Ut(PC),OC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $C(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=MC[t])?!!e[t]:!1}function zp(){return $C}var UC=de({},du,{key:function(t){if(t.key){var e=OC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=El(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?LC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zp,charCode:function(t){return t.type==="keypress"?El(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?El(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),FC=Ut(UC),VC=de({},Uc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ny=Ut(VC),BC=de({},du,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zp}),zC=Ut(BC),jC=de({},io,{propertyName:0,elapsedTime:0,pseudoElement:0}),qC=Ut(jC),HC=de({},Uc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),WC=Ut(HC),GC=[9,13,27,32],jp=jn&&"CompositionEvent"in window,na=null;jn&&"documentMode"in document&&(na=document.documentMode);var KC=jn&&"TextEvent"in window&&!na,p0=jn&&(!jp||na&&8<na&&11>=na),xy=String.fromCharCode(32),Dy=!1;function m0(t,e){switch(t){case"keyup":return GC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function g0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function QC(t,e){switch(t){case"compositionend":return g0(e);case"keypress":return e.which!==32?null:(Dy=!0,xy);case"textInput":return t=e.data,t===xy&&Dy?null:t;default:return null}}function YC(t,e){if(cs)return t==="compositionend"||!jp&&m0(t,e)?(t=f0(),Il=Vp=pr=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return p0&&e.locale!=="ko"?null:e.data;default:return null}}var XC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Py(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!XC[t.type]:e==="textarea"}function y0(t,e,n,r){K_(r),e=Wl(e,"onChange"),0<e.length&&(n=new Bp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ra=null,Ca=null;function JC(t){R0(t,0)}function Fc(t){var e=fs(t);if(B_(e))return t}function ZC(t,e){if(t==="change")return e}var v0=!1;if(jn){var sd;if(jn){var od="oninput"in document;if(!od){var Oy=document.createElement("div");Oy.setAttribute("oninput","return;"),od=typeof Oy.oninput=="function"}sd=od}else sd=!1;v0=sd&&(!document.documentMode||9<document.documentMode)}function Ly(){ra&&(ra.detachEvent("onpropertychange",w0),Ca=ra=null)}function w0(t){if(t.propertyName==="value"&&Fc(Ca)){var e=[];y0(e,Ca,t,Lp(t)),J_(JC,e)}}function eb(t,e,n){t==="focusin"?(Ly(),ra=e,Ca=n,ra.attachEvent("onpropertychange",w0)):t==="focusout"&&Ly()}function tb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fc(Ca)}function nb(t,e){if(t==="click")return Fc(e)}function rb(t,e){if(t==="input"||t==="change")return Fc(e)}function ib(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var on=typeof Object.is=="function"?Object.is:ib;function ba(t,e){if(on(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kd.call(e,i)||!on(t[i],e[i]))return!1}return!0}function My(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $y(t,e){var n=My(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=My(n)}}function _0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function I0(){for(var t=window,e=Fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fl(t.document)}return e}function qp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sb(t){var e=I0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_0(n.ownerDocument.documentElement,n)){if(r!==null&&qp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=$y(n,s);var o=$y(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ob=jn&&"documentMode"in document&&11>=document.documentMode,hs=null,pf=null,ia=null,mf=!1;function Uy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mf||hs==null||hs!==Fl(r)||(r=hs,"selectionStart"in r&&qp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ia&&ba(ia,r)||(ia=r,r=Wl(pf,"onSelect"),0<r.length&&(e=new Bp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=hs)))}function Yu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:Yu("Animation","AnimationEnd"),animationiteration:Yu("Animation","AnimationIteration"),animationstart:Yu("Animation","AnimationStart"),transitionend:Yu("Transition","TransitionEnd")},ad={},E0={};jn&&(E0=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function Vc(t){if(ad[t])return ad[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in E0)return ad[t]=e[n];return t}var T0=Vc("animationend"),S0=Vc("animationiteration"),k0=Vc("animationstart"),C0=Vc("transitionend"),b0=new Map,Fy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(t,e){b0.set(t,e),Hi(e,[t])}for(var ud=0;ud<Fy.length;ud++){var ld=Fy[ud],ab=ld.toLowerCase(),ub=ld[0].toUpperCase()+ld.slice(1);Vr(ab,"on"+ub)}Vr(T0,"onAnimationEnd");Vr(S0,"onAnimationIteration");Vr(k0,"onAnimationStart");Vr("dblclick","onDoubleClick");Vr("focusin","onFocus");Vr("focusout","onBlur");Vr(C0,"onTransitionEnd");Ms("onMouseEnter",["mouseout","mouseover"]);Ms("onMouseLeave",["mouseout","mouseover"]);Ms("onPointerEnter",["pointerout","pointerover"]);Ms("onPointerLeave",["pointerout","pointerover"]);Hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function Vy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,aC(r,e,void 0,t),t.currentTarget=null}function R0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Vy(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Vy(i,a,l),s=u}}}if(Bl)throw t=cf,Bl=!1,cf=null,t}function re(t,e){var n=e[_f];n===void 0&&(n=e[_f]=new Set);var r=t+"__bubble";n.has(r)||(A0(e,t,2,!1),n.add(r))}function cd(t,e,n){var r=0;e&&(r|=4),A0(n,t,r,e)}var Xu="_reactListening"+Math.random().toString(36).slice(2);function Ra(t){if(!t[Xu]){t[Xu]=!0,M_.forEach(function(n){n!=="selectionchange"&&(lb.has(n)||cd(n,!1,t),cd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xu]||(e[Xu]=!0,cd("selectionchange",!1,e))}}function A0(t,e,n,r){switch(d0(e)){case 1:var i=TC;break;case 4:i=SC;break;default:i=Fp}n=i.bind(null,e,n,t),i=void 0,!lf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function hd(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=hi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}J_(function(){var l=s,c=Lp(n),h=[];e:{var d=b0.get(t);if(d!==void 0){var p=Bp,y=t;switch(t){case"keypress":if(El(n)===0)break e;case"keydown":case"keyup":p=FC;break;case"focusin":y="focus",p=id;break;case"focusout":y="blur",p=id;break;case"beforeblur":case"afterblur":p=id;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ry;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=bC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=zC;break;case T0:case S0:case k0:p=NC;break;case C0:p=qC;break;case"scroll":p=kC;break;case"wheel":p=WC;break;case"copy":case"cut":case"paste":p=DC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ny}var v=(e&4)!==0,E=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var f=l,g;f!==null;){g=f;var I=g.stateNode;if(g.tag===5&&I!==null&&(g=I,m!==null&&(I=Ea(f,m),I!=null&&v.push(Aa(f,I,g)))),E)break;f=f.return}0<v.length&&(d=new p(d,y,null,n,c),h.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==af&&(y=n.relatedTarget||n.fromElement)&&(hi(y)||y[qn]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=l,y=y?hi(y):null,y!==null&&(E=Wi(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=l),p!==y)){if(v=Ry,I="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Ny,I="onPointerLeave",m="onPointerEnter",f="pointer"),E=p==null?d:fs(p),g=y==null?d:fs(y),d=new v(I,f+"leave",p,n,c),d.target=E,d.relatedTarget=g,I=null,hi(c)===l&&(v=new v(m,f+"enter",y,n,c),v.target=g,v.relatedTarget=E,I=v),E=I,p&&y)t:{for(v=p,m=y,f=0,g=v;g;g=ts(g))f++;for(g=0,I=m;I;I=ts(I))g++;for(;0<f-g;)v=ts(v),f--;for(;0<g-f;)m=ts(m),g--;for(;f--;){if(v===m||m!==null&&v===m.alternate)break t;v=ts(v),m=ts(m)}v=null}else v=null;p!==null&&By(h,d,p,v,!1),y!==null&&E!==null&&By(h,E,y,v,!0)}}e:{if(d=l?fs(l):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var k=ZC;else if(Py(d))if(v0)k=rb;else{k=tb;var R=eb}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(k=nb);if(k&&(k=k(t,l))){y0(h,k,n,c);break e}R&&R(t,d,l),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&tf(d,"number",d.value)}switch(R=l?fs(l):window,t){case"focusin":(Py(R)||R.contentEditable==="true")&&(hs=R,pf=l,ia=null);break;case"focusout":ia=pf=hs=null;break;case"mousedown":mf=!0;break;case"contextmenu":case"mouseup":case"dragend":mf=!1,Uy(h,n,c);break;case"selectionchange":if(ob)break;case"keydown":case"keyup":Uy(h,n,c)}var A;if(jp)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else cs?m0(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(p0&&n.locale!=="ko"&&(cs||D!=="onCompositionStart"?D==="onCompositionEnd"&&cs&&(A=f0()):(pr=c,Vp="value"in pr?pr.value:pr.textContent,cs=!0)),R=Wl(l,D),0<R.length&&(D=new Ay(D,t,null,n,c),h.push({event:D,listeners:R}),A?D.data=A:(A=g0(n),A!==null&&(D.data=A)))),(A=KC?QC(t,n):YC(t,n))&&(l=Wl(l,"onBeforeInput"),0<l.length&&(c=new Ay("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=A))}R0(h,e)})}function Aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ea(t,n),s!=null&&r.unshift(Aa(t,s,i)),s=Ea(t,e),s!=null&&r.push(Aa(t,s,i))),t=t.return}return r}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function By(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=Ea(n,s),u!=null&&o.unshift(Aa(n,u,a))):i||(u=Ea(n,s),u!=null&&o.push(Aa(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cb=/\r\n?/g,hb=/\u0000|\uFFFD/g;function zy(t){return(typeof t=="string"?t:""+t).replace(cb,`
`).replace(hb,"")}function Ju(t,e,n){if(e=zy(e),zy(t)!==e&&n)throw Error(C(425))}function Gl(){}var gf=null,yf=null;function vf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wf=typeof setTimeout=="function"?setTimeout:void 0,db=typeof clearTimeout=="function"?clearTimeout:void 0,jy=typeof Promise=="function"?Promise:void 0,fb=typeof queueMicrotask=="function"?queueMicrotask:typeof jy<"u"?function(t){return jy.resolve(null).then(t).catch(pb)}:wf;function pb(t){setTimeout(function(){throw t})}function dd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ka(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ka(e)}function Ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var so=Math.random().toString(36).slice(2),dn="__reactFiber$"+so,Na="__reactProps$"+so,qn="__reactContainer$"+so,_f="__reactEvents$"+so,mb="__reactListeners$"+so,gb="__reactHandles$"+so;function hi(t){var e=t[dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qn]||n[dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qy(t);t!==null;){if(n=t[dn])return n;t=qy(t)}return e}t=n,n=t.parentNode}return null}function fu(t){return t=t[dn]||t[qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Bc(t){return t[Na]||null}var If=[],ps=-1;function Br(t){return{current:t}}function ie(t){0>ps||(t.current=If[ps],If[ps]=null,ps--)}function ne(t,e){ps++,If[ps]=t.current,t.current=e}var Ar={},ot=Br(Ar),St=Br(!1),Ci=Ar;function $s(t,e){var n=t.type.contextTypes;if(!n)return Ar;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function kt(t){return t=t.childContextTypes,t!=null}function Kl(){ie(St),ie(ot)}function Hy(t,e,n){if(ot.current!==Ar)throw Error(C(168));ne(ot,e),ne(St,n)}function N0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,eC(t)||"Unknown",i));return de({},n,r)}function Ql(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,Ci=ot.current,ne(ot,t),ne(St,St.current),!0}function Wy(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=N0(t,e,Ci),r.__reactInternalMemoizedMergedChildContext=t,ie(St),ie(ot),ne(ot,t)):ie(St),ne(St,n)}var xn=null,zc=!1,fd=!1;function x0(t){xn===null?xn=[t]:xn.push(t)}function yb(t){zc=!0,x0(t)}function zr(){if(!fd&&xn!==null){fd=!0;var t=0,e=Z;try{var n=xn;for(Z=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xn=null,zc=!1}catch(i){throw xn!==null&&(xn=xn.slice(t+1)),n0(Mp,zr),i}finally{Z=e,fd=!1}}return null}var ms=[],gs=0,Yl=null,Xl=0,Ft=[],Vt=0,bi=null,On=1,Ln="";function ni(t,e){ms[gs++]=Xl,ms[gs++]=Yl,Yl=t,Xl=e}function D0(t,e,n){Ft[Vt++]=On,Ft[Vt++]=Ln,Ft[Vt++]=bi,bi=t;var r=On;t=Ln;var i=32-nn(r)-1;r&=~(1<<i),n+=1;var s=32-nn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,On=1<<32-nn(e)+i|n<<i|r,Ln=s+t}else On=1<<s|n<<i|r,Ln=t}function Hp(t){t.return!==null&&(ni(t,1),D0(t,1,0))}function Wp(t){for(;t===Yl;)Yl=ms[--gs],ms[gs]=null,Xl=ms[--gs],ms[gs]=null;for(;t===bi;)bi=Ft[--Vt],Ft[Vt]=null,Ln=Ft[--Vt],Ft[Vt]=null,On=Ft[--Vt],Ft[Vt]=null}var Dt=null,Nt=null,oe=!1,en=null;function P0(t,e){var n=Bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dt=t,Nt=Ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dt=t,Nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=bi!==null?{id:On,overflow:Ln}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dt=t,Nt=null,!0):!1;default:return!1}}function Ef(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Tf(t){if(oe){var e=Nt;if(e){var n=e;if(!Gy(t,e)){if(Ef(t))throw Error(C(418));e=Ir(n.nextSibling);var r=Dt;e&&Gy(t,e)?P0(r,n):(t.flags=t.flags&-4097|2,oe=!1,Dt=t)}}else{if(Ef(t))throw Error(C(418));t.flags=t.flags&-4097|2,oe=!1,Dt=t}}}function Ky(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dt=t}function Zu(t){if(t!==Dt)return!1;if(!oe)return Ky(t),oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vf(t.type,t.memoizedProps)),e&&(e=Nt)){if(Ef(t))throw O0(),Error(C(418));for(;e;)P0(t,e),e=Ir(e.nextSibling)}if(Ky(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nt=Ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nt=null}}else Nt=Dt?Ir(t.stateNode.nextSibling):null;return!0}function O0(){for(var t=Nt;t;)t=Ir(t.nextSibling)}function Us(){Nt=Dt=null,oe=!1}function Gp(t){en===null?en=[t]:en.push(t)}var vb=Xn.ReactCurrentBatchConfig;function Jt(t,e){if(t&&t.defaultProps){e=de({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Jl=Br(null),Zl=null,ys=null,Kp=null;function Qp(){Kp=ys=Zl=null}function Yp(t){var e=Jl.current;ie(Jl),t._currentValue=e}function Sf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function bs(t,e){Zl=t,Kp=ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(It=!0),t.firstContext=null)}function Wt(t){var e=t._currentValue;if(Kp!==t)if(t={context:t,memoizedValue:e,next:null},ys===null){if(Zl===null)throw Error(C(308));ys=t,Zl.dependencies={lanes:0,firstContext:t}}else ys=ys.next=t;return e}var di=null;function Xp(t){di===null?di=[t]:di.push(t)}function L0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Xp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Hn(t,r)}function Hn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var lr=!1;function Jp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function M0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Y&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Hn(t,n)}return i=r.interleaved,i===null?(e.next=e,Xp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Hn(t,n)}function Tl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$p(t,n)}}function Qy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ec(t,e,n,r){var i=t.updateQueue;lr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=u))}if(s!==null){var h=i.baseState;o=0,c=l=u=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(p,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(p,h,d):y,d==null)break e;h=de({},h,d);break e;case 2:lr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=p,u=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ai|=o,t.lanes=o,t.memoizedState=h}}function Yy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var $0=new L_.Component().refs;function kf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:de({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jc={isMounted:function(t){return(t=t._reactInternals)?Wi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=pt(),i=Sr(t),s=Fn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,i),e!==null&&(rn(e,t,i,r),Tl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=pt(),i=Sr(t),s=Fn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,i),e!==null&&(rn(e,t,i,r),Tl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pt(),r=Sr(t),i=Fn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Er(t,i,r),e!==null&&(rn(e,t,r,n),Tl(e,t,r))}};function Xy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ba(n,r)||!ba(i,s):!0}function U0(t,e,n){var r=!1,i=Ar,s=e.contextType;return typeof s=="object"&&s!==null?s=Wt(s):(i=kt(e)?Ci:ot.current,r=e.contextTypes,s=(r=r!=null)?$s(t,i):Ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&jc.enqueueReplaceState(e,e.state,null)}function Cf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=$0,Jp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Wt(s):(s=kt(e)?Ci:ot.current,i.context=$s(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&jc.enqueueReplaceState(i,i.state,null),ec(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function No(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===$0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function el(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zy(t){var e=t._init;return e(t._payload)}function F0(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=kr(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,g,I){return f===null||f.tag!==6?(f=_d(g,m.mode,I),f.return=m,f):(f=i(f,g),f.return=m,f)}function u(m,f,g,I){var k=g.type;return k===ls?c(m,f,g.props.children,I,g.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ur&&Zy(k)===f.type)?(I=i(f,g.props),I.ref=No(m,f,g),I.return=m,I):(I=Al(g.type,g.key,g.props,null,m.mode,I),I.ref=No(m,f,g),I.return=m,I)}function l(m,f,g,I){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Id(g,m.mode,I),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function c(m,f,g,I,k){return f===null||f.tag!==7?(f=_i(g,m.mode,I,k),f.return=m,f):(f=i(f,g),f.return=m,f)}function h(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=_d(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ju:return g=Al(f.type,f.key,f.props,null,m.mode,g),g.ref=No(m,null,f),g.return=m,g;case us:return f=Id(f,m.mode,g),f.return=m,f;case ur:var I=f._init;return h(m,I(f._payload),g)}if(Ho(f)||ko(f))return f=_i(f,m.mode,g,null),f.return=m,f;el(m,f)}return null}function d(m,f,g,I){var k=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:a(m,f,""+g,I);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ju:return g.key===k?u(m,f,g,I):null;case us:return g.key===k?l(m,f,g,I):null;case ur:return k=g._init,d(m,f,k(g._payload),I)}if(Ho(g)||ko(g))return k!==null?null:c(m,f,g,I,null);el(m,g)}return null}function p(m,f,g,I,k){if(typeof I=="string"&&I!==""||typeof I=="number")return m=m.get(g)||null,a(f,m,""+I,k);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ju:return m=m.get(I.key===null?g:I.key)||null,u(f,m,I,k);case us:return m=m.get(I.key===null?g:I.key)||null,l(f,m,I,k);case ur:var R=I._init;return p(m,f,g,R(I._payload),k)}if(Ho(I)||ko(I))return m=m.get(g)||null,c(f,m,I,k,null);el(f,I)}return null}function y(m,f,g,I){for(var k=null,R=null,A=f,D=f=0,J=null;A!==null&&D<g.length;D++){A.index>D?(J=A,A=null):J=A.sibling;var H=d(m,A,g[D],I);if(H===null){A===null&&(A=J);break}t&&A&&H.alternate===null&&e(m,A),f=s(H,f,D),R===null?k=H:R.sibling=H,R=H,A=J}if(D===g.length)return n(m,A),oe&&ni(m,D),k;if(A===null){for(;D<g.length;D++)A=h(m,g[D],I),A!==null&&(f=s(A,f,D),R===null?k=A:R.sibling=A,R=A);return oe&&ni(m,D),k}for(A=r(m,A);D<g.length;D++)J=p(A,m,D,g[D],I),J!==null&&(t&&J.alternate!==null&&A.delete(J.key===null?D:J.key),f=s(J,f,D),R===null?k=J:R.sibling=J,R=J);return t&&A.forEach(function(Yt){return e(m,Yt)}),oe&&ni(m,D),k}function v(m,f,g,I){var k=ko(g);if(typeof k!="function")throw Error(C(150));if(g=k.call(g),g==null)throw Error(C(151));for(var R=k=null,A=f,D=f=0,J=null,H=g.next();A!==null&&!H.done;D++,H=g.next()){A.index>D?(J=A,A=null):J=A.sibling;var Yt=d(m,A,H.value,I);if(Yt===null){A===null&&(A=J);break}t&&A&&Yt.alternate===null&&e(m,A),f=s(Yt,f,D),R===null?k=Yt:R.sibling=Yt,R=Yt,A=J}if(H.done)return n(m,A),oe&&ni(m,D),k;if(A===null){for(;!H.done;D++,H=g.next())H=h(m,H.value,I),H!==null&&(f=s(H,f,D),R===null?k=H:R.sibling=H,R=H);return oe&&ni(m,D),k}for(A=r(m,A);!H.done;D++,H=g.next())H=p(A,m,D,H.value,I),H!==null&&(t&&H.alternate!==null&&A.delete(H.key===null?D:H.key),f=s(H,f,D),R===null?k=H:R.sibling=H,R=H);return t&&A.forEach(function(To){return e(m,To)}),oe&&ni(m,D),k}function E(m,f,g,I){if(typeof g=="object"&&g!==null&&g.type===ls&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ju:e:{for(var k=g.key,R=f;R!==null;){if(R.key===k){if(k=g.type,k===ls){if(R.tag===7){n(m,R.sibling),f=i(R,g.props.children),f.return=m,m=f;break e}}else if(R.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ur&&Zy(k)===R.type){n(m,R.sibling),f=i(R,g.props),f.ref=No(m,R,g),f.return=m,m=f;break e}n(m,R);break}else e(m,R);R=R.sibling}g.type===ls?(f=_i(g.props.children,m.mode,I,g.key),f.return=m,m=f):(I=Al(g.type,g.key,g.props,null,m.mode,I),I.ref=No(m,f,g),I.return=m,m=I)}return o(m);case us:e:{for(R=g.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Id(g,m.mode,I),f.return=m,m=f}return o(m);case ur:return R=g._init,E(m,f,R(g._payload),I)}if(Ho(g))return y(m,f,g,I);if(ko(g))return v(m,f,g,I);el(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=_d(g,m.mode,I),f.return=m,m=f),o(m)):n(m,f)}return E}var Fs=F0(!0),V0=F0(!1),pu={},Tn=Br(pu),xa=Br(pu),Da=Br(pu);function fi(t){if(t===pu)throw Error(C(174));return t}function Zp(t,e){switch(ne(Da,e),ne(xa,t),ne(Tn,pu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=rf(e,t)}ie(Tn),ne(Tn,e)}function Vs(){ie(Tn),ie(xa),ie(Da)}function B0(t){fi(Da.current);var e=fi(Tn.current),n=rf(e,t.type);e!==n&&(ne(xa,t),ne(Tn,n))}function em(t){xa.current===t&&(ie(Tn),ie(xa))}var ce=Br(0);function tc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pd=[];function tm(){for(var t=0;t<pd.length;t++)pd[t]._workInProgressVersionPrimary=null;pd.length=0}var Sl=Xn.ReactCurrentDispatcher,md=Xn.ReactCurrentBatchConfig,Ri=0,he=null,Ce=null,Pe=null,nc=!1,sa=!1,Pa=0,wb=0;function Ze(){throw Error(C(321))}function nm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!on(t[n],e[n]))return!1;return!0}function rm(t,e,n,r,i,s){if(Ri=s,he=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sl.current=t===null||t.memoizedState===null?Tb:Sb,t=n(r,i),sa){s=0;do{if(sa=!1,Pa=0,25<=s)throw Error(C(301));s+=1,Pe=Ce=null,e.updateQueue=null,Sl.current=kb,t=n(r,i)}while(sa)}if(Sl.current=rc,e=Ce!==null&&Ce.next!==null,Ri=0,Pe=Ce=he=null,nc=!1,e)throw Error(C(300));return t}function im(){var t=Pa!==0;return Pa=0,t}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?he.memoizedState=Pe=t:Pe=Pe.next=t,Pe}function Gt(){if(Ce===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Ce.next;var e=Pe===null?he.memoizedState:Pe.next;if(e!==null)Pe=e,Ce=t;else{if(t===null)throw Error(C(310));Ce=t,t={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Pe===null?he.memoizedState=Pe=t:Pe=Pe.next=t}return Pe}function Oa(t,e){return typeof e=="function"?e(t):e}function gd(t){var e=Gt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=Ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,l=s;do{var c=l.lane;if((Ri&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:t(r,l.action);else{var h={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,he.lanes|=c,Ai|=c}l=l.next}while(l!==null&&l!==s);u===null?o=r:u.next=a,on(r,e.memoizedState)||(It=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,he.lanes|=s,Ai|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yd(t){var e=Gt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);on(s,e.memoizedState)||(It=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function z0(){}function j0(t,e){var n=he,r=Gt(),i=e(),s=!on(r.memoizedState,i);if(s&&(r.memoizedState=i,It=!0),r=r.queue,sm(W0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,La(9,H0.bind(null,n,r,i,e),void 0,null),Le===null)throw Error(C(349));(Ri&30)!==0||q0(n,e,i)}return i}function q0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=he.updateQueue,e===null?(e={lastEffect:null,stores:null},he.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function H0(t,e,n,r){e.value=n,e.getSnapshot=r,G0(e)&&K0(t)}function W0(t,e,n){return n(function(){G0(e)&&K0(t)})}function G0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!on(t,n)}catch{return!0}}function K0(t){var e=Hn(t,1);e!==null&&rn(e,t,1,-1)}function ev(t){var e=cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:t},e.queue=t,t=t.dispatch=Eb.bind(null,he,t),[e.memoizedState,t]}function La(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=he.updateQueue,e===null?(e={lastEffect:null,stores:null},he.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Q0(){return Gt().memoizedState}function kl(t,e,n,r){var i=cn();he.flags|=t,i.memoizedState=La(1|e,n,void 0,r===void 0?null:r)}function qc(t,e,n,r){var i=Gt();r=r===void 0?null:r;var s=void 0;if(Ce!==null){var o=Ce.memoizedState;if(s=o.destroy,r!==null&&nm(r,o.deps)){i.memoizedState=La(e,n,s,r);return}}he.flags|=t,i.memoizedState=La(1|e,n,s,r)}function tv(t,e){return kl(8390656,8,t,e)}function sm(t,e){return qc(2048,8,t,e)}function Y0(t,e){return qc(4,2,t,e)}function X0(t,e){return qc(4,4,t,e)}function J0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Z0(t,e,n){return n=n!=null?n.concat([t]):null,qc(4,4,J0.bind(null,e,t),n)}function om(){}function eI(t,e){var n=Gt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function tI(t,e){var n=Gt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function nI(t,e,n){return(Ri&21)===0?(t.baseState&&(t.baseState=!1,It=!0),t.memoizedState=n):(on(n,e)||(n=s0(),he.lanes|=n,Ai|=n,t.baseState=!0),e)}function _b(t,e){var n=Z;Z=n!==0&&4>n?n:4,t(!0);var r=md.transition;md.transition={};try{t(!1),e()}finally{Z=n,md.transition=r}}function rI(){return Gt().memoizedState}function Ib(t,e,n){var r=Sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},iI(t))sI(e,n);else if(n=L0(t,e,n,r),n!==null){var i=pt();rn(n,t,r,i),oI(n,e,r)}}function Eb(t,e,n){var r=Sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(iI(t))sI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,on(a,o)){var u=e.interleaved;u===null?(i.next=i,Xp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=L0(t,e,i,r),n!==null&&(i=pt(),rn(n,t,r,i),oI(n,e,r))}}function iI(t){var e=t.alternate;return t===he||e!==null&&e===he}function sI(t,e){sa=nc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function oI(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$p(t,n)}}var rc={readContext:Wt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},Tb={readContext:Wt,useCallback:function(t,e){return cn().memoizedState=[t,e===void 0?null:e],t},useContext:Wt,useEffect:tv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,kl(4194308,4,J0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return kl(4194308,4,t,e)},useInsertionEffect:function(t,e){return kl(4,2,t,e)},useMemo:function(t,e){var n=cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ib.bind(null,he,t),[r.memoizedState,t]},useRef:function(t){var e=cn();return t={current:t},e.memoizedState=t},useState:ev,useDebugValue:om,useDeferredValue:function(t){return cn().memoizedState=t},useTransition:function(){var t=ev(!1),e=t[0];return t=_b.bind(null,t[1]),cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=he,i=cn();if(oe){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),Le===null)throw Error(C(349));(Ri&30)!==0||q0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,tv(W0.bind(null,r,s,t),[t]),r.flags|=2048,La(9,H0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=cn(),e=Le.identifierPrefix;if(oe){var n=Ln,r=On;n=(r&~(1<<32-nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=wb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Sb={readContext:Wt,useCallback:eI,useContext:Wt,useEffect:sm,useImperativeHandle:Z0,useInsertionEffect:Y0,useLayoutEffect:X0,useMemo:tI,useReducer:gd,useRef:Q0,useState:function(){return gd(Oa)},useDebugValue:om,useDeferredValue:function(t){var e=Gt();return nI(e,Ce.memoizedState,t)},useTransition:function(){var t=gd(Oa)[0],e=Gt().memoizedState;return[t,e]},useMutableSource:z0,useSyncExternalStore:j0,useId:rI,unstable_isNewReconciler:!1},kb={readContext:Wt,useCallback:eI,useContext:Wt,useEffect:sm,useImperativeHandle:Z0,useInsertionEffect:Y0,useLayoutEffect:X0,useMemo:tI,useReducer:yd,useRef:Q0,useState:function(){return yd(Oa)},useDebugValue:om,useDeferredValue:function(t){var e=Gt();return Ce===null?e.memoizedState=t:nI(e,Ce.memoizedState,t)},useTransition:function(){var t=yd(Oa)[0],e=Gt().memoizedState;return[t,e]},useMutableSource:z0,useSyncExternalStore:j0,useId:rI,unstable_isNewReconciler:!1};function Bs(t,e){try{var n="",r=e;do n+=Zk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function vd(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function bf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Cb=typeof WeakMap=="function"?WeakMap:Map;function aI(t,e,n){n=Fn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){sc||(sc=!0,$f=r),bf(t,e)},n}function uI(t,e,n){n=Fn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){bf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bf(t,e),typeof r!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function nv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Cb;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Vb.bind(null,t,e,n),e.then(t,t))}function rv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function iv(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fn(-1,1),e.tag=2,Er(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var bb=Xn.ReactCurrentOwner,It=!1;function lt(t,e,n,r){e.child=t===null?V0(e,null,n,r):Fs(e,t.child,n,r)}function sv(t,e,n,r,i){n=n.render;var s=e.ref;return bs(e,i),r=rm(t,e,n,r,s,i),n=im(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wn(t,e,i)):(oe&&n&&Hp(e),e.flags|=1,lt(t,e,r,i),e.child)}function ov(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!pm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,lI(t,e,s,r,i)):(t=Al(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ba,n(o,r)&&t.ref===e.ref)return Wn(t,e,i)}return e.flags|=1,t=kr(s,r),t.ref=e.ref,t.return=e,e.child=t}function lI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ba(s,r)&&t.ref===e.ref)if(It=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(It=!0);else return e.lanes=t.lanes,Wn(t,e,i)}return Rf(t,e,n,r,i)}function cI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(ws,Rt),Rt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ne(ws,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ne(ws,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ne(ws,Rt),Rt|=r;return lt(t,e,i,n),e.child}function hI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Rf(t,e,n,r,i){var s=kt(n)?Ci:ot.current;return s=$s(e,s),bs(e,i),n=rm(t,e,n,r,s,i),r=im(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wn(t,e,i)):(oe&&r&&Hp(e),e.flags|=1,lt(t,e,n,i),e.child)}function av(t,e,n,r,i){if(kt(n)){var s=!0;Ql(e)}else s=!1;if(bs(e,i),e.stateNode===null)Cl(t,e),U0(e,n,r),Cf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=Wt(l):(l=kt(n)?Ci:ot.current,l=$s(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&Jy(e,o,r,l),lr=!1;var d=e.memoizedState;o.state=d,ec(e,r,o,i),u=e.memoizedState,a!==r||d!==u||St.current||lr?(typeof c=="function"&&(kf(e,n,c,r),u=e.memoizedState),(a=lr||Xy(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,M0(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:Jt(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Wt(u):(u=kt(n)?Ci:ot.current,u=$s(e,u));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&Jy(e,o,r,u),lr=!1,d=e.memoizedState,o.state=d,ec(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||St.current||lr?(typeof p=="function"&&(kf(e,n,p,r),y=e.memoizedState),(l=lr||Xy(e,n,l,r,d,y,u)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Af(t,e,n,r,s,i)}function Af(t,e,n,r,i,s){hI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Wy(e,n,!1),Wn(t,e,s);r=e.stateNode,bb.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Fs(e,t.child,null,s),e.child=Fs(e,null,a,s)):lt(t,e,a,s),e.memoizedState=r.state,i&&Wy(e,n,!0),e.child}function dI(t){var e=t.stateNode;e.pendingContext?Hy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hy(t,e.context,!1),Zp(t,e.containerInfo)}function uv(t,e,n,r,i){return Us(),Gp(i),e.flags|=256,lt(t,e,n,r),e.child}var Nf={dehydrated:null,treeContext:null,retryLane:0};function xf(t){return{baseLanes:t,cachePool:null,transitions:null}}function fI(t,e,n){var r=e.pendingProps,i=ce.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ne(ce,i&1),t===null)return Tf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gc(o,r,0,null),t=_i(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xf(n),e.memoizedState=Nf,t):am(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Rb(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=kr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=kr(a,s):(s=_i(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?xf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Nf,r}return s=t.child,t=s.sibling,r=kr(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function am(t,e){return e=Gc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function tl(t,e,n,r){return r!==null&&Gp(r),Fs(e,t.child,null,n),t=am(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Rb(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=vd(Error(C(422))),tl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Gc({mode:"visible",children:r.children},i,0,null),s=_i(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Fs(e,t.child,null,o),e.child.memoizedState=xf(o),e.memoizedState=Nf,s);if((e.mode&1)===0)return tl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=vd(s,r,void 0),tl(t,e,o,r)}if(a=(o&t.childLanes)!==0,It||a){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Hn(t,i),rn(r,t,i,-1))}return fm(),r=vd(Error(C(421))),tl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Bb.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Nt=Ir(i.nextSibling),Dt=e,oe=!0,en=null,t!==null&&(Ft[Vt++]=On,Ft[Vt++]=Ln,Ft[Vt++]=bi,On=t.id,Ln=t.overflow,bi=e),e=am(e,r.children),e.flags|=4096,e)}function lv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Sf(t.return,e,n)}function wd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function pI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(lt(t,e,r.children,n),r=ce.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lv(t,n,e);else if(t.tag===19)lv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ne(ce,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&tc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),wd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&tc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}wd(e,!0,n,null,s);break;case"together":wd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Cl(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ai|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ab(t,e,n){switch(e.tag){case 3:dI(e),Us();break;case 5:B0(e);break;case 1:kt(e.type)&&Ql(e);break;case 4:Zp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ne(Jl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ne(ce,ce.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?fI(t,e,n):(ne(ce,ce.current&1),t=Wn(t,e,n),t!==null?t.sibling:null);ne(ce,ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return pI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(ce,ce.current),r)break;return null;case 22:case 23:return e.lanes=0,cI(t,e,n)}return Wn(t,e,n)}var mI,Df,gI,yI;mI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Df=function(){};gI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,fi(Tn.current);var s=null;switch(n){case"input":i=Zd(t,i),r=Zd(t,r),s=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),s=[];break;case"textarea":i=nf(t,i),r=nf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Gl)}sf(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(_a.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(_a.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&re("scroll",t),s||a===u||(s=[])):(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};yI=function(t,e,n,r){n!==r&&(e.flags|=4)};function xo(t,e){if(!oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Nb(t,e,n){var r=e.pendingProps;switch(Wp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(e),null;case 1:return kt(e.type)&&Kl(),et(e),null;case 3:return r=e.stateNode,Vs(),ie(St),ie(ot),tm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,en!==null&&(Vf(en),en=null))),Df(t,e),et(e),null;case 5:em(e);var i=fi(Da.current);if(n=e.type,t!==null&&e.stateNode!=null)gI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return et(e),null}if(t=fi(Tn.current),Zu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[dn]=e,r[Na]=s,t=(e.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<Go.length;i++)re(Go[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":vy(r,s),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},re("invalid",r);break;case"textarea":_y(r,s),re("invalid",r)}sf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ju(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ju(r.textContent,a,t),i=["children",""+a]):_a.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&re("scroll",r)}switch(n){case"input":qu(r),wy(r,s,!0);break;case"textarea":qu(r),Iy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Gl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=q_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dn]=e,t[Na]=r,mI(t,e,!1,!1),e.stateNode=t;e:{switch(o=of(n,r),n){case"dialog":re("cancel",t),re("close",t),i=r;break;case"iframe":case"object":case"embed":re("load",t),i=r;break;case"video":case"audio":for(i=0;i<Go.length;i++)re(Go[i],t);i=r;break;case"source":re("error",t),i=r;break;case"img":case"image":case"link":re("error",t),re("load",t),i=r;break;case"details":re("toggle",t),i=r;break;case"input":vy(t,r),i=Zd(t,r),re("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),re("invalid",t);break;case"textarea":_y(t,r),i=nf(t,r),re("invalid",t);break;default:i=r}sf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?G_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&H_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ia(t,u):typeof u=="number"&&Ia(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_a.hasOwnProperty(s)?u!=null&&s==="onScroll"&&re("scroll",t):u!=null&&xp(t,s,u,o))}switch(n){case"input":qu(t),wy(t,r,!1);break;case"textarea":qu(t),Iy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Rr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ts(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ts(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Gl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return et(e),null;case 6:if(t&&e.stateNode!=null)yI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=fi(Da.current),fi(Tn.current),Zu(e)){if(r=e.stateNode,n=e.memoizedProps,r[dn]=e,(s=r.nodeValue!==n)&&(t=Dt,t!==null))switch(t.tag){case 3:Ju(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ju(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=e,e.stateNode=r}return et(e),null;case 13:if(ie(ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(oe&&Nt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)O0(),Us(),e.flags|=98560,s=!1;else if(s=Zu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[dn]=e}else Us(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;et(e),s=!1}else en!==null&&(Vf(en),en=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(ce.current&1)!==0?Re===0&&(Re=3):fm())),e.updateQueue!==null&&(e.flags|=4),et(e),null);case 4:return Vs(),Df(t,e),t===null&&Ra(e.stateNode.containerInfo),et(e),null;case 10:return Yp(e.type._context),et(e),null;case 17:return kt(e.type)&&Kl(),et(e),null;case 19:if(ie(ce),s=e.memoizedState,s===null)return et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)xo(s,!1);else{if(Re!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=tc(t),o!==null){for(e.flags|=128,xo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ne(ce,ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ie()>zs&&(e.flags|=128,r=!0,xo(s,!1),e.lanes=4194304)}else{if(!r)if(t=tc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!oe)return et(e),null}else 2*Ie()-s.renderingStartTime>zs&&n!==1073741824&&(e.flags|=128,r=!0,xo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ie(),e.sibling=null,n=ce.current,ne(ce,r?n&1|2:n&1),e):(et(e),null);case 22:case 23:return dm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Rt&1073741824)!==0&&(et(e),e.subtreeFlags&6&&(e.flags|=8192)):et(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function xb(t,e){switch(Wp(e),e.tag){case 1:return kt(e.type)&&Kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vs(),ie(St),ie(ot),tm(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return em(e),null;case 13:if(ie(ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ie(ce),null;case 4:return Vs(),null;case 10:return Yp(e.type._context),null;case 22:case 23:return dm(),null;case 24:return null;default:return null}}var nl=!1,tt=!1,Db=typeof WeakSet=="function"?WeakSet:Set,P=null;function vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(t,e,r)}else n.current=null}function Pf(t,e,n){try{n()}catch(r){pe(t,e,r)}}var cv=!1;function Pb(t,e){if(gf=ql,t=I0(),qp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,l=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++l===i&&(a=o),d===s&&++c===r&&(u=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(yf={focusedElem:t,selectionRange:n},ql=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var y=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,E=y.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:Jt(e.type,v),E);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(I){pe(e,e.return,I)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return y=cv,cv=!1,y}function oa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Pf(e,n,s)}i=i.next}while(i!==r)}}function Hc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Of(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function vI(t){var e=t.alternate;e!==null&&(t.alternate=null,vI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dn],delete e[Na],delete e[_f],delete e[mb],delete e[gb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wI(t){return t.tag===5||t.tag===3||t.tag===4}function hv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gl));else if(r!==4&&(t=t.child,t!==null))for(Lf(t,e,n),t=t.sibling;t!==null;)Lf(t,e,n),t=t.sibling}function Mf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Mf(t,e,n),t=t.sibling;t!==null;)Mf(t,e,n),t=t.sibling}var je=null,Zt=!1;function ir(t,e,n){for(n=n.child;n!==null;)_I(t,e,n),n=n.sibling}function _I(t,e,n){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount($c,n)}catch{}switch(n.tag){case 5:tt||vs(n,e);case 6:var r=je,i=Zt;je=null,ir(t,e,n),je=r,Zt=i,je!==null&&(Zt?(t=je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(Zt?(t=je,n=n.stateNode,t.nodeType===8?dd(t.parentNode,n):t.nodeType===1&&dd(t,n),ka(t)):dd(je,n.stateNode));break;case 4:r=je,i=Zt,je=n.stateNode.containerInfo,Zt=!0,ir(t,e,n),je=r,Zt=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Pf(n,e,o),i=i.next}while(i!==r)}ir(t,e,n);break;case 1:if(!tt&&(vs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){pe(n,e,a)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,ir(t,e,n),tt=r):ir(t,e,n);break;default:ir(t,e,n)}}function dv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Db),e.forEach(function(r){var i=zb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:je=a.stateNode,Zt=!1;break e;case 3:je=a.stateNode.containerInfo,Zt=!0;break e;case 4:je=a.stateNode.containerInfo,Zt=!0;break e}a=a.return}if(je===null)throw Error(C(160));_I(s,o,i),je=null,Zt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(l){pe(i,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)II(e,t),e=e.sibling}function II(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xt(e,t),ln(t),r&4){try{oa(3,t,t.return),Hc(3,t)}catch(v){pe(t,t.return,v)}try{oa(5,t,t.return)}catch(v){pe(t,t.return,v)}}break;case 1:Xt(e,t),ln(t),r&512&&n!==null&&vs(n,n.return);break;case 5:if(Xt(e,t),ln(t),r&512&&n!==null&&vs(n,n.return),t.flags&32){var i=t.stateNode;try{Ia(i,"")}catch(v){pe(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&z_(i,s),of(a,o);var l=of(a,s);for(o=0;o<u.length;o+=2){var c=u[o],h=u[o+1];c==="style"?G_(i,h):c==="dangerouslySetInnerHTML"?H_(i,h):c==="children"?Ia(i,h):xp(i,c,h,l)}switch(a){case"input":ef(i,s);break;case"textarea":j_(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ts(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ts(i,!!s.multiple,s.defaultValue,!0):Ts(i,!!s.multiple,s.multiple?[]:"",!1))}i[Na]=s}catch(v){pe(t,t.return,v)}}break;case 6:if(Xt(e,t),ln(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){pe(t,t.return,v)}}break;case 3:if(Xt(e,t),ln(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ka(e.containerInfo)}catch(v){pe(t,t.return,v)}break;case 4:Xt(e,t),ln(t);break;case 13:Xt(e,t),ln(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(cm=Ie())),r&4&&dv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(l=tt)||c,Xt(e,t),tt=l):Xt(e,t),ln(t),r&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!c&&(t.mode&1)!==0)for(P=t,c=t.child;c!==null;){for(h=P=c;P!==null;){switch(d=P,p=d.child,d.tag){case 0:case 11:case 14:case 15:oa(4,d,d.return);break;case 1:vs(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){pe(r,n,v)}}break;case 5:vs(d,d.return);break;case 22:if(d.memoizedState!==null){pv(h);continue}}p!==null?(p.return=d,P=p):pv(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,l?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=W_("display",o))}catch(v){pe(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=l?"":h.memoizedProps}catch(v){pe(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Xt(e,t),ln(t),r&4&&dv(t);break;case 21:break;default:Xt(e,t),ln(t)}}function ln(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(wI(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ia(i,""),r.flags&=-33);var s=hv(t);Mf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=hv(t);Lf(t,a,o);break;default:throw Error(C(161))}}catch(u){pe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ob(t,e,n){P=t,EI(t)}function EI(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||nl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||tt;a=nl;var l=tt;if(nl=o,(tt=u)&&!l)for(P=i;P!==null;)o=P,u=o.child,o.tag===22&&o.memoizedState!==null?mv(i):u!==null?(u.return=o,P=u):mv(i);for(;s!==null;)P=s,EI(s),s=s.sibling;P=i,nl=a,tt=l}fv(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,P=s):fv(t)}}function fv(t){for(;P!==null;){var e=P;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:tt||Hc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Jt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Yy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Yy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ka(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}tt||e.flags&512&&Of(e)}catch(d){pe(e,e.return,d)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function pv(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function mv(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hc(4,e)}catch(u){pe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){pe(e,i,u)}}var s=e.return;try{Of(e)}catch(u){pe(e,s,u)}break;case 5:var o=e.return;try{Of(e)}catch(u){pe(e,o,u)}}}catch(u){pe(e,e.return,u)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var Lb=Math.ceil,ic=Xn.ReactCurrentDispatcher,um=Xn.ReactCurrentOwner,qt=Xn.ReactCurrentBatchConfig,Y=0,Le=null,ke=null,Ge=0,Rt=0,ws=Br(0),Re=0,Ma=null,Ai=0,Wc=0,lm=0,aa=null,_t=null,cm=0,zs=1/0,Nn=null,sc=!1,$f=null,Tr=null,rl=!1,mr=null,oc=0,ua=0,Uf=null,bl=-1,Rl=0;function pt(){return(Y&6)!==0?Ie():bl!==-1?bl:bl=Ie()}function Sr(t){return(t.mode&1)===0?1:(Y&2)!==0&&Ge!==0?Ge&-Ge:vb.transition!==null?(Rl===0&&(Rl=s0()),Rl):(t=Z,t!==0||(t=window.event,t=t===void 0?16:d0(t.type)),t)}function rn(t,e,n,r){if(50<ua)throw ua=0,Uf=null,Error(C(185));hu(t,n,r),((Y&2)===0||t!==Le)&&(t===Le&&((Y&2)===0&&(Wc|=n),Re===4&&hr(t,Ge)),Ct(t,r),n===1&&Y===0&&(e.mode&1)===0&&(zs=Ie()+500,zc&&zr()))}function Ct(t,e){var n=t.callbackNode;vC(t,e);var r=jl(t,t===Le?Ge:0);if(r===0)n!==null&&Sy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Sy(n),e===1)t.tag===0?yb(gv.bind(null,t)):x0(gv.bind(null,t)),fb(function(){(Y&6)===0&&zr()}),n=null;else{switch(o0(r)){case 1:n=Mp;break;case 4:n=r0;break;case 16:n=zl;break;case 536870912:n=i0;break;default:n=zl}n=NI(n,TI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function TI(t,e){if(bl=-1,Rl=0,(Y&6)!==0)throw Error(C(327));var n=t.callbackNode;if(Rs()&&t.callbackNode!==n)return null;var r=jl(t,t===Le?Ge:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=ac(t,r);else{e=r;var i=Y;Y|=2;var s=kI();(Le!==t||Ge!==e)&&(Nn=null,zs=Ie()+500,wi(t,e));do try{Ub();break}catch(a){SI(t,a)}while(1);Qp(),ic.current=s,Y=i,ke!==null?e=0:(Le=null,Ge=0,e=Re)}if(e!==0){if(e===2&&(i=hf(t),i!==0&&(r=i,e=Ff(t,i))),e===1)throw n=Ma,wi(t,0),hr(t,r),Ct(t,Ie()),n;if(e===6)hr(t,r);else{if(i=t.current.alternate,(r&30)===0&&!Mb(i)&&(e=ac(t,r),e===2&&(s=hf(t),s!==0&&(r=s,e=Ff(t,s))),e===1))throw n=Ma,wi(t,0),hr(t,r),Ct(t,Ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:ri(t,_t,Nn);break;case 3:if(hr(t,r),(r&130023424)===r&&(e=cm+500-Ie(),10<e)){if(jl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=wf(ri.bind(null,t,_t,Nn),e);break}ri(t,_t,Nn);break;case 4:if(hr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-nn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lb(r/1960))-r,10<r){t.timeoutHandle=wf(ri.bind(null,t,_t,Nn),r);break}ri(t,_t,Nn);break;case 5:ri(t,_t,Nn);break;default:throw Error(C(329))}}}return Ct(t,Ie()),t.callbackNode===n?TI.bind(null,t):null}function Ff(t,e){var n=aa;return t.current.memoizedState.isDehydrated&&(wi(t,e).flags|=256),t=ac(t,e),t!==2&&(e=_t,_t=n,e!==null&&Vf(e)),t}function Vf(t){_t===null?_t=t:_t.push.apply(_t,t)}function Mb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!on(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(t,e){for(e&=~lm,e&=~Wc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-nn(e),r=1<<n;t[n]=-1,e&=~r}}function gv(t){if((Y&6)!==0)throw Error(C(327));Rs();var e=jl(t,0);if((e&1)===0)return Ct(t,Ie()),null;var n=ac(t,e);if(t.tag!==0&&n===2){var r=hf(t);r!==0&&(e=r,n=Ff(t,r))}if(n===1)throw n=Ma,wi(t,0),hr(t,e),Ct(t,Ie()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ri(t,_t,Nn),Ct(t,Ie()),null}function hm(t,e){var n=Y;Y|=1;try{return t(e)}finally{Y=n,Y===0&&(zs=Ie()+500,zc&&zr())}}function Ni(t){mr!==null&&mr.tag===0&&(Y&6)===0&&Rs();var e=Y;Y|=1;var n=qt.transition,r=Z;try{if(qt.transition=null,Z=1,t)return t()}finally{Z=r,qt.transition=n,Y=e,(Y&6)===0&&zr()}}function dm(){Rt=ws.current,ie(ws)}function wi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,db(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Wp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Kl();break;case 3:Vs(),ie(St),ie(ot),tm();break;case 5:em(r);break;case 4:Vs();break;case 13:ie(ce);break;case 19:ie(ce);break;case 10:Yp(r.type._context);break;case 22:case 23:dm()}n=n.return}if(Le=t,ke=t=kr(t.current,null),Ge=Rt=e,Re=0,Ma=null,lm=Wc=Ai=0,_t=aa=null,di!==null){for(e=0;e<di.length;e++)if(n=di[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}di=null}return t}function SI(t,e){do{var n=ke;try{if(Qp(),Sl.current=rc,nc){for(var r=he.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}nc=!1}if(Ri=0,Pe=Ce=he=null,sa=!1,Pa=0,um.current=null,n===null||n.return===null){Re=1,Ma=e,ke=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Ge,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=rv(o);if(p!==null){p.flags&=-257,iv(p,o,a,s,e),p.mode&1&&nv(s,l,e),e=p,u=l;var y=e.updateQueue;if(y===null){var v=new Set;v.add(u),e.updateQueue=v}else y.add(u);break e}else{if((e&1)===0){nv(s,l,e),fm();break e}u=Error(C(426))}}else if(oe&&a.mode&1){var E=rv(o);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),iv(E,o,a,s,e),Gp(Bs(u,a));break e}}s=u=Bs(u,a),Re!==4&&(Re=2),aa===null?aa=[s]:aa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=aI(s,u,e);Qy(s,m);break e;case 1:a=u;var f=s.type,g=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Tr===null||!Tr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var I=uI(s,a,e);Qy(s,I);break e}}s=s.return}while(s!==null)}bI(n)}catch(k){e=k,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(1)}function kI(){var t=ic.current;return ic.current=rc,t===null?rc:t}function fm(){(Re===0||Re===3||Re===2)&&(Re=4),Le===null||(Ai&268435455)===0&&(Wc&268435455)===0||hr(Le,Ge)}function ac(t,e){var n=Y;Y|=2;var r=kI();(Le!==t||Ge!==e)&&(Nn=null,wi(t,e));do try{$b();break}catch(i){SI(t,i)}while(1);if(Qp(),Y=n,ic.current=r,ke!==null)throw Error(C(261));return Le=null,Ge=0,Re}function $b(){for(;ke!==null;)CI(ke)}function Ub(){for(;ke!==null&&!lC();)CI(ke)}function CI(t){var e=AI(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?bI(t):ke=e,um.current=null}function bI(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=Nb(n,e,Rt),n!==null){ke=n;return}}else{if(n=xb(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Re=6,ke=null;return}}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);Re===0&&(Re=5)}function ri(t,e,n){var r=Z,i=qt.transition;try{qt.transition=null,Z=1,Fb(t,e,n,r)}finally{qt.transition=i,Z=r}return null}function Fb(t,e,n,r){do Rs();while(mr!==null);if((Y&6)!==0)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(wC(t,s),t===Le&&(ke=Le=null,Ge=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||rl||(rl=!0,NI(zl,function(){return Rs(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=qt.transition,qt.transition=null;var o=Z;Z=1;var a=Y;Y|=4,um.current=null,Pb(t,n),II(n,t),sb(yf),ql=!!gf,yf=gf=null,t.current=n,Ob(n),cC(),Y=a,Z=o,qt.transition=s}else t.current=n;if(rl&&(rl=!1,mr=t,oc=i),s=t.pendingLanes,s===0&&(Tr=null),fC(n.stateNode),Ct(t,Ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sc)throw sc=!1,t=$f,$f=null,t;return(oc&1)!==0&&t.tag!==0&&Rs(),s=t.pendingLanes,(s&1)!==0?t===Uf?ua++:(ua=0,Uf=t):ua=0,zr(),null}function Rs(){if(mr!==null){var t=o0(oc),e=qt.transition,n=Z;try{if(qt.transition=null,Z=16>t?16:t,mr===null)var r=!1;else{if(t=mr,mr=null,oc=0,(Y&6)!==0)throw Error(C(331));var i=Y;for(Y|=4,P=t.current;P!==null;){var s=P,o=s.child;if((P.flags&16)!==0){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var l=a[u];for(P=l;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:oa(8,c,s)}var h=c.child;if(h!==null)h.return=c,P=h;else for(;P!==null;){c=P;var d=c.sibling,p=c.return;if(vI(c),c===l){P=null;break}if(d!==null){d.return=p,P=d;break}P=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}P=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:oa(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,P=m;break e}P=s.return}}var f=t.current;for(P=f;P!==null;){o=P;var g=o.child;if((o.subtreeFlags&2064)!==0&&g!==null)g.return=o,P=g;else e:for(o=f;P!==null;){if(a=P,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Hc(9,a)}}catch(k){pe(a,a.return,k)}if(a===o){P=null;break e}var I=a.sibling;if(I!==null){I.return=a.return,P=I;break e}P=a.return}}if(Y=i,zr(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot($c,t)}catch{}r=!0}return r}finally{Z=n,qt.transition=e}}return!1}function yv(t,e,n){e=Bs(n,e),e=aI(t,e,1),t=Er(t,e,1),e=pt(),t!==null&&(hu(t,1,e),Ct(t,e))}function pe(t,e,n){if(t.tag===3)yv(t,t,n);else for(;e!==null;){if(e.tag===3){yv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tr===null||!Tr.has(r))){t=Bs(n,t),t=uI(e,t,1),e=Er(e,t,1),t=pt(),e!==null&&(hu(e,1,t),Ct(e,t));break}}e=e.return}}function Vb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=pt(),t.pingedLanes|=t.suspendedLanes&n,Le===t&&(Ge&n)===n&&(Re===4||Re===3&&(Ge&130023424)===Ge&&500>Ie()-cm?wi(t,0):lm|=n),Ct(t,e)}function RI(t,e){e===0&&((t.mode&1)===0?e=1:(e=Gu,Gu<<=1,(Gu&130023424)===0&&(Gu=4194304)));var n=pt();t=Hn(t,e),t!==null&&(hu(t,e,n),Ct(t,n))}function Bb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),RI(t,n)}function zb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),RI(t,n)}var AI;AI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||St.current)It=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return It=!1,Ab(t,e,n);It=(t.flags&131072)!==0}else It=!1,oe&&(e.flags&1048576)!==0&&D0(e,Xl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Cl(t,e),t=e.pendingProps;var i=$s(e,ot.current);bs(e,n),i=rm(null,e,r,t,i,n);var s=im();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(s=!0,Ql(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jp(e),i.updater=jc,e.stateNode=i,i._reactInternals=e,Cf(e,r,t,n),e=Af(null,e,r,!0,s,n)):(e.tag=0,oe&&s&&Hp(e),lt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Cl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=qb(r),t=Jt(r,t),i){case 0:e=Rf(null,e,r,t,n);break e;case 1:e=av(null,e,r,t,n);break e;case 11:e=sv(null,e,r,t,n);break e;case 14:e=ov(null,e,r,Jt(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),Rf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),av(t,e,r,i,n);case 3:e:{if(dI(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,M0(t,e),ec(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Bs(Error(C(423)),e),e=uv(t,e,r,n,i);break e}else if(r!==i){i=Bs(Error(C(424)),e),e=uv(t,e,r,n,i);break e}else for(Nt=Ir(e.stateNode.containerInfo.firstChild),Dt=e,oe=!0,en=null,n=V0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Us(),r===i){e=Wn(t,e,n);break e}lt(t,e,r,n)}e=e.child}return e;case 5:return B0(e),t===null&&Tf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,vf(r,i)?o=null:s!==null&&vf(r,s)&&(e.flags|=32),hI(t,e),lt(t,e,o,n),e.child;case 6:return t===null&&Tf(e),null;case 13:return fI(t,e,n);case 4:return Zp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fs(e,null,r,n):lt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),sv(t,e,r,i,n);case 7:return lt(t,e,e.pendingProps,n),e.child;case 8:return lt(t,e,e.pendingProps.children,n),e.child;case 12:return lt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ne(Jl,r._currentValue),r._currentValue=o,s!==null)if(on(s.value,o)){if(s.children===i.children&&!St.current){e=Wn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Fn(-1,n&-n),u.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Sf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Sf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}lt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,bs(e,n),i=Wt(i),r=r(i),e.flags|=1,lt(t,e,r,n),e.child;case 14:return r=e.type,i=Jt(r,e.pendingProps),i=Jt(r.type,i),ov(t,e,r,i,n);case 15:return lI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),Cl(t,e),e.tag=1,kt(r)?(t=!0,Ql(e)):t=!1,bs(e,n),U0(e,r,i),Cf(e,r,i,n),Af(null,e,r,!0,t,n);case 19:return pI(t,e,n);case 22:return cI(t,e,n)}throw Error(C(156,e.tag))};function NI(t,e){return n0(t,e)}function jb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(t,e,n,r){return new jb(t,e,n,r)}function pm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qb(t){if(typeof t=="function")return pm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pp)return 11;if(t===Op)return 14}return 2}function kr(t,e){var n=t.alternate;return n===null?(n=Bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Al(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")pm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ls:return _i(n.children,i,s,e);case Dp:o=8,i|=8;break;case Qd:return t=Bt(12,n,e,i|2),t.elementType=Qd,t.lanes=s,t;case Yd:return t=Bt(13,n,e,i),t.elementType=Yd,t.lanes=s,t;case Xd:return t=Bt(19,n,e,i),t.elementType=Xd,t.lanes=s,t;case F_:return Gc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $_:o=10;break e;case U_:o=9;break e;case Pp:o=11;break e;case Op:o=14;break e;case ur:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=Bt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function _i(t,e,n,r){return t=Bt(7,t,r,e),t.lanes=n,t}function Gc(t,e,n,r){return t=Bt(22,t,r,e),t.elementType=F_,t.lanes=n,t.stateNode={isHidden:!1},t}function _d(t,e,n){return t=Bt(6,t,null,e),t.lanes=n,t}function Id(t,e,n){return e=Bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Hb(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=td(0),this.expirationTimes=td(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=td(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function mm(t,e,n,r,i,s,o,a,u){return t=new Hb(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jp(s),t}function Wb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:us,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function xI(t){if(!t)return Ar;t=t._reactInternals;e:{if(Wi(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(kt(n))return N0(t,n,e)}return e}function DI(t,e,n,r,i,s,o,a,u){return t=mm(n,r,!0,t,i,s,o,a,u),t.context=xI(null),n=t.current,r=pt(),i=Sr(n),s=Fn(r,i),s.callback=e!=null?e:null,Er(n,s,i),t.current.lanes=i,hu(t,i,r),Ct(t,r),t}function Kc(t,e,n,r){var i=e.current,s=pt(),o=Sr(i);return n=xI(n),e.context===null?e.context=n:e.pendingContext=n,e=Fn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Er(i,e,o),t!==null&&(rn(t,i,o,s),Tl(t,i,o)),o}function uc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gm(t,e){vv(t,e),(t=t.alternate)&&vv(t,e)}function Gb(){return null}var PI=typeof reportError=="function"?reportError:function(t){console.error(t)};function ym(t){this._internalRoot=t}Qc.prototype.render=ym.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Kc(t,e,null,null)};Qc.prototype.unmount=ym.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ni(function(){Kc(null,t,null,null)}),e[qn]=null}};function Qc(t){this._internalRoot=t}Qc.prototype.unstable_scheduleHydration=function(t){if(t){var e=l0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cr.length&&e!==0&&e<cr[n].priority;n++);cr.splice(n,0,t),n===0&&h0(t)}};function vm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wv(){}function Kb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var l=uc(o);s.call(l)}}var o=DI(e,r,t,0,null,!1,!1,"",wv);return t._reactRootContainer=o,t[qn]=o.current,Ra(t.nodeType===8?t.parentNode:t),Ni(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var l=uc(u);a.call(l)}}var u=mm(t,0,!1,null,null,!1,!1,"",wv);return t._reactRootContainer=u,t[qn]=u.current,Ra(t.nodeType===8?t.parentNode:t),Ni(function(){Kc(e,u,n,r)}),u}function Xc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=uc(o);a.call(u)}}Kc(e,o,t,i)}else o=Kb(n,e,t,i,r);return uc(o)}a0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Wo(e.pendingLanes);n!==0&&($p(e,n|1),Ct(e,Ie()),(Y&6)===0&&(zs=Ie()+500,zr()))}break;case 13:Ni(function(){var r=Hn(t,1);if(r!==null){var i=pt();rn(r,t,1,i)}}),gm(t,1)}};Up=function(t){if(t.tag===13){var e=Hn(t,134217728);if(e!==null){var n=pt();rn(e,t,134217728,n)}gm(t,134217728)}};u0=function(t){if(t.tag===13){var e=Sr(t),n=Hn(t,e);if(n!==null){var r=pt();rn(n,t,e,r)}gm(t,e)}};l0=function(){return Z};c0=function(t,e){var n=Z;try{return Z=t,e()}finally{Z=n}};uf=function(t,e,n){switch(e){case"input":if(ef(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Bc(r);if(!i)throw Error(C(90));B_(r),ef(r,i)}}}break;case"textarea":j_(t,n);break;case"select":e=n.value,e!=null&&Ts(t,!!n.multiple,e,!1)}};Y_=hm;X_=Ni;var Qb={usingClientEntryPoint:!1,Events:[fu,fs,Bc,K_,Q_,hm]},Do={findFiberByHostInstance:hi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Yb={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=e0(t),t===null?null:t.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||Gb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{$c=il.inject(Yb),En=il}catch{}}$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qb;$t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vm(e))throw Error(C(200));return Wb(t,e,null,n)};$t.createRoot=function(t,e){if(!vm(t))throw Error(C(299));var n=!1,r="",i=PI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=mm(t,1,!1,null,null,n,!1,r,i),t[qn]=e.current,Ra(t.nodeType===8?t.parentNode:t),new ym(e)};$t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=e0(e),t=t===null?null:t.stateNode,t};$t.flushSync=function(t){return Ni(t)};$t.hydrate=function(t,e,n){if(!Yc(e))throw Error(C(200));return Xc(null,t,e,!0,n)};$t.hydrateRoot=function(t,e,n){if(!vm(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=PI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=DI(e,null,t,1,n!=null?n:null,i,!1,s,o),t[qn]=e.current,Ra(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Qc(e)};$t.render=function(t,e,n){if(!Yc(e))throw Error(C(200));return Xc(null,t,e,!1,n)};$t.unmountComponentAtNode=function(t){if(!Yc(t))throw Error(C(40));return t._reactRootContainer?(Ni(function(){Xc(null,null,t,!1,function(){t._reactRootContainer=null,t[qn]=null})}),!0):!1};$t.unstable_batchedUpdates=hm;$t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yc(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Xc(t,e,n,!1,r)};$t.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=$t})(D_);var _v=D_.exports;Gd.createRoot=_v.createRoot,Gd.hydrateRoot=_v.hydrateRoot;const Xb="/assets/couplet-icon.c8c741e2.svg";/**
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
 */const OI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Jb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},LI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;u||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(OI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Zb=function(t){const e=OI(t);return LI.encodeByteArray(e,!0)},lc=function(t){return Zb(t).replace(/\./g,"")},MI=function(t){try{return LI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function cc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!eR(n)||(t[n]=cc(t[n],e[n]));return t}function eR(t){return t!=="__proto__"}/**
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
 */function fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function wm(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nR(){return typeof self=="object"&&self.self===self}function $I(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _m(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UI(){const t=fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rR(){return!wm()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $a(){return typeof indexedDB=="object"}function iR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function sR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oR=()=>sR().__FIREBASE_DEFAULTS__,aR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&MI(t[1]);return e&&JSON.parse(e)},FI=()=>{try{return oR()||aR()||uR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lR=()=>{var t;return(t=FI())===null||t===void 0?void 0:t.config},cR=t=>{var e;return(e=FI())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class hR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function VI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[lc(JSON.stringify(n)),lc(JSON.stringify(o)),a].join(".")}/**
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
 */const dR="FirebaseError";class rt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dR,Object.setPrototypeOf(this,rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gi.prototype.create)}}class Gi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?fR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new rt(i,a,r)}}function fR(t,e){return t.replace(pR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const pR=/\{\$([^}]+)}/g;/**
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
 */function Iv(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function mR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ev(s)&&Ev(o)){if(!Bf(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ev(t){return t!==null&&typeof t=="object"}/**
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
 */function oo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _s(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ko(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function BI(t,e){const n=new gR(t,e);return n.subscribe.bind(n)}class gR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ed),i.error===void 0&&(i.error=Ed),i.complete===void 0&&(i.complete=Ed);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ed(){}/**
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
 */function M(t){return t&&t._delegate?t._delegate:t}class Kt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ii="[DEFAULT]";/**
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
 */class vR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_R(e))try{this.getOrInitializeService({instanceIdentifier:ii})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ii){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ii){return this.instances.has(e)}getOptions(e=ii){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ii){return this.component?this.component.multipleInstances?e:ii:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wR(t){return t===ii?void 0:t}function _R(t){return t.instantiationMode==="EAGER"}/**
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
 */class IR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Im=[];var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const zI={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},ER=Q.INFO,TR={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},SR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=TR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jc{constructor(e){this.name=e,this._logLevel=ER,this._logHandler=SR,this._userLogHandler=null,Im.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}function kR(t){Im.forEach(e=>{e.setLogLevel(t)})}function CR(t,e){for(const n of Im){let r=null;e&&e.level&&(r=zI[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:Q[s].toLowerCase(),message:a,args:o,type:i.name})}}}const bR=(t,e)=>e.some(n=>t instanceof n);let Tv,Sv;function RR(){return Tv||(Tv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AR(){return Sv||(Sv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jI=new WeakMap,zf=new WeakMap,qI=new WeakMap,Td=new WeakMap,Em=new WeakMap;function NR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Cr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&jI.set(n,t)}).catch(()=>{}),Em.set(e,t),e}function xR(t){if(zf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});zf.set(t,e)}let jf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DR(t){jf=t(jf)}function PR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sd(this),e,...n);return qI.set(r,e.sort?e.sort():[e]),Cr(r)}:AR().includes(t)?function(...e){return t.apply(Sd(this),e),Cr(jI.get(this))}:function(...e){return Cr(t.apply(Sd(this),e))}}function OR(t){return typeof t=="function"?PR(t):(t instanceof IDBTransaction&&xR(t),bR(t,RR())?new Proxy(t,jf):t)}function Cr(t){if(t instanceof IDBRequest)return NR(t);if(Td.has(t))return Td.get(t);const e=OR(t);return e!==t&&(Td.set(t,e),Em.set(e,t)),e}const Sd=t=>Em.get(t);function LR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Cr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Cr(o.result),u.oldVersion,u.newVersion,Cr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const MR=["get","getKey","getAll","getAllKeys","count"],$R=["put","add","delete","clear"],kd=new Map;function kv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kd.get(e))return kd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=$R.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||MR.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return kd.set(e,s),s}DR(t=>({...t,get:(e,n,r)=>kv(e,n)||t.get(e,n,r),has:(e,n)=>!!kv(e,n)||t.has(e,n)}));/**
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
 */class UR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function FR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qf="@firebase/app",Cv="0.8.2";/**
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
 */const xi=new Jc("@firebase/app"),VR="@firebase/app-compat",BR="@firebase/analytics-compat",zR="@firebase/analytics",jR="@firebase/app-check-compat",qR="@firebase/app-check",HR="@firebase/auth",WR="@firebase/auth-compat",GR="@firebase/database",KR="@firebase/database-compat",QR="@firebase/functions",YR="@firebase/functions-compat",XR="@firebase/installations",JR="@firebase/installations-compat",ZR="@firebase/messaging",eA="@firebase/messaging-compat",tA="@firebase/performance",nA="@firebase/performance-compat",rA="@firebase/remote-config",iA="@firebase/remote-config-compat",sA="@firebase/storage",oA="@firebase/storage-compat",aA="@firebase/firestore",uA="@firebase/firestore-compat",lA="firebase",cA="9.12.1";/**
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
 */const Nr="[DEFAULT]",hA={[qf]:"fire-core",[VR]:"fire-core-compat",[zR]:"fire-analytics",[BR]:"fire-analytics-compat",[qR]:"fire-app-check",[jR]:"fire-app-check-compat",[HR]:"fire-auth",[WR]:"fire-auth-compat",[GR]:"fire-rtdb",[KR]:"fire-rtdb-compat",[QR]:"fire-fn",[YR]:"fire-fn-compat",[XR]:"fire-iid",[JR]:"fire-iid-compat",[ZR]:"fire-fcm",[eA]:"fire-fcm-compat",[tA]:"fire-perf",[nA]:"fire-perf-compat",[rA]:"fire-rc",[iA]:"fire-rc-compat",[sA]:"fire-gcs",[oA]:"fire-gcs-compat",[aA]:"fire-fst",[uA]:"fire-fst-compat","fire-js":"fire-js",[lA]:"fire-js-all"};/**
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
 */const xr=new Map,Ua=new Map;function hc(t,e){try{t.container.addComponent(e)}catch(n){xi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function HI(t,e){t.container.addOrOverwriteComponent(e)}function Gn(t){const e=t.name;if(Ua.has(e))return xi.debug(`There were multiple attempts to register component ${e}.`),!1;Ua.set(e,t);for(const n of xr.values())hc(n,t);return!0}function WI(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function dA(t,e,n=Nr){WI(t,e).clearInstance(n)}function fA(){Ua.clear()}/**
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
 */const pA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vn=new Gi("app","Firebase",pA);/**
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
 */class mA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vn.create("app-deleted",{appName:this._name})}}/**
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
 */const jr=cA;function Tm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Vn.create("bad-app-name",{appName:String(i)});if(n||(n=lR()),!n)throw Vn.create("no-options");const s=xr.get(i);if(s){if(Bf(n,s.options)&&Bf(r,s.config))return s;throw Vn.create("duplicate-app",{appName:i})}const o=new IR(i);for(const u of Ua.values())o.addComponent(u);const a=new mA(n,r,o);return xr.set(i,a),a}function gA(t=Nr){const e=xr.get(t);if(!e&&t===Nr)return Tm();if(!e)throw Vn.create("no-app",{appName:t});return e}function yA(){return Array.from(xr.values())}async function GI(t){const e=t.name;xr.has(e)&&(xr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Ht(t,e,n){var r;let i=(r=hA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xi.warn(a.join(" "));return}Gn(new Kt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function KI(t,e){if(t!==null&&typeof t!="function")throw Vn.create("invalid-log-argument");CR(t,e)}function QI(t){kR(t)}/**
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
 */const vA="firebase-heartbeat-database",wA=1,Fa="firebase-heartbeat-store";let Cd=null;function YI(){return Cd||(Cd=LR(vA,wA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fa)}}}).catch(t=>{throw Vn.create("idb-open",{originalErrorMessage:t.message})})),Cd}async function _A(t){var e;try{return(await YI()).transaction(Fa).objectStore(Fa).get(XI(t))}catch(n){if(n instanceof rt)xi.warn(n.message);else{const r=Vn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});xi.warn(r.message)}}}async function bv(t,e){var n;try{const i=(await YI()).transaction(Fa,"readwrite");return await i.objectStore(Fa).put(e,XI(t)),i.done}catch(r){if(r instanceof rt)xi.warn(r.message);else{const i=Vn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});xi.warn(i.message)}}}function XI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const IA=1024,EA=30*24*60*60*1e3;class TA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Rv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=EA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Rv(),{heartbeatsToSend:n,unsentEntries:r}=SA(this._heartbeatsCache.heartbeats),i=lc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Rv(){return new Date().toISOString().substring(0,10)}function SA(t,e=IA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Av(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Av(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $a()?iR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _A(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Av(t){return lc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function CA(t){Gn(new Kt("platform-logger",e=>new UR(e),"PRIVATE")),Gn(new Kt("heartbeat",e=>new TA(e),"PRIVATE")),Ht(qf,Cv,t),Ht(qf,Cv,"esm2017"),Ht("fire-js","")}CA("");const bA=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:jr,_DEFAULT_ENTRY_NAME:Nr,_addComponent:hc,_addOrOverwriteComponent:HI,_apps:xr,_clearComponents:fA,_components:Ua,_getProvider:WI,_registerComponent:Gn,_removeServiceInstance:dA,deleteApp:GI,getApp:gA,getApps:yA,initializeApp:Tm,onLog:KI,registerVersion:Ht,setLogLevel:QI,FirebaseError:rt},Symbol.toStringTag,{value:"Module"}));/**
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
 */class RA{constructor(e,n){this._delegate=e,this.firebase=n,hc(e,new Kt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),GI(this._delegate)))}_getService(e,n=Nr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Nr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){hc(this._delegate,e)}_addOrOverwriteComponent(e){HI(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const AA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Nv=new Gi("app-compat","Firebase",AA);/**
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
 */function NA(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Ht,setLogLevel:QI,onLog:KI,apps:null,SDK_VERSION:jr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:bA}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||Nr,!Iv(e,l))throw Nv.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,c={}){const h=Tm(l,c);if(Iv(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const c=l.name,h=c.replace("-compat","");if(Gn(l)&&l.type==="PUBLIC"){const d=(p=i())=>{if(typeof p[h]!="function")throw Nv.create("invalid-app-argument",{appName:c});return p[h]()};l.serviceProps!==void 0&&cc(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...p){return this._getService.bind(this,c).apply(this,l.multipleInstances?p:[])}}return l.type==="PUBLIC"?n[h]:null}function u(l,c){return c==="serverAuth"?null:c}return n}/**
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
 */function JI(){const t=NA(RA);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:JI,extendNamespace:e,createSubscribe:BI,ErrorFactory:Gi,deepExtend:cc});function e(n){cc(t,n)}return t}const xA=JI();/**
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
 */const xv=new Jc("@firebase/app-compat"),DA="@firebase/app-compat",PA="0.1.37";/**
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
 */function OA(t){Ht(DA,PA,t)}/**
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
 */if(nR()&&self.firebase!==void 0){xv.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&xv.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const an=xA;OA();var LA="firebase",MA="9.12.1";/**
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
 */an.registerVersion(LA,MA,"app-compat");function Sm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Po={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ns={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function $A(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function ZI(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UA=$A,FA=ZI,eE=new Gi("auth","Firebase",ZI());/**
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
 */const Dv=new Jc("@firebase/auth");function Nl(t,...e){Dv.logLevel<=Q.ERROR&&Dv.error(`Auth (${jr}): ${t}`,...e)}/**
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
 */function Xe(t,...e){throw km(t,...e)}function Ke(t,...e){return km(t,...e)}function tE(t,e,n){const r=Object.assign(Object.assign({},FA()),{[e]:n});return new Gi("auth","Firebase",r).create(e,{appName:t.name})}function ao(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Xe(t,"argument-error"),tE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function km(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return eE.create(t,...e)}function b(t,e,...n){if(!t)throw km(e,...n)}function wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Nl(e),new Error(e)}function un(t,e){t||wn(e)}/**
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
 */const Pv=new Map;function xt(t){un(t instanceof Function,"Expected a class definition");let e=Pv.get(t);return e?(un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pv.set(t,e),e)}function VA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Va(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Cm(){return Ov()==="http:"||Ov()==="https:"}function Ov(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function BA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cm()||$I()||"connection"in navigator)?navigator.onLine:!0}function zA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class mu{constructor(e,n){this.shortDelay=e,this.longDelay=n,un(n>e,"Short delay should be less than long delay!"),this.isMobile=tR()||_m()}get(){return BA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bm(t,e){un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class nE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const qA=new mu(3e4,6e4);function Ne(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ve(t,e,n,r,i={}){return rE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=oo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),nE.fetch()(iE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function rE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jA),e);try{const i=new HA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Qo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qo(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Qo(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Qo(t,"user-disabled",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw tE(t,c,l);Xe(t,c)}}catch(i){if(i instanceof rt)throw i;Xe(t,"network-request-failed")}}async function Jn(t,e,n,r,i={}){const s=await Ve(t,e,n,r,i);return"mfaPendingCredential"in s&&Xe(t,"multi-factor-auth-required",{_serverResponse:s}),s}function iE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?bm(t.config,i):`${t.config.apiScheme}://${i}`}class HA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"network-request-failed")),qA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ke(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function WA(t,e){return Ve(t,"POST","/v1/accounts:delete",e)}async function GA(t,e){return Ve(t,"POST","/v1/accounts:update",e)}async function KA(t,e){return Ve(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function la(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QA(t,e=!1){const n=M(t),r=await n.getIdToken(e),i=Zc(r);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:la(bd(i.auth_time)),issuedAtTime:la(bd(i.iat)),expirationTime:la(bd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bd(t){return Number(t)*1e3}function Zc(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Nl("JWT malformed, contained fewer than 3 sections"),null;try{const s=MI(r);return s?JSON.parse(s):(Nl("Failed to decode base64 JWT payload"),null)}catch(s){return Nl("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function YA(t){const e=Zc(t);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Kn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof rt&&XA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function XA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class JA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=la(this.lastLoginAt),this.creationTime=la(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ba(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Kn(t,KA(n,{idToken:r}));b(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?tN(s.providerUserInfo):[],a=eN(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new sE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function ZA(t){const e=M(t);await Ba(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function tN(t){return t.map(e=>{var{providerId:n}=e,r=Sm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function nN(t,e){const n=await rE(t,{},async()=>{const r=oo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=iE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class za{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):YA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return b(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await nN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new za;return r&&(b(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(b(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(b(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new za,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
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
 */function sr(t,e){b(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ii{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Sm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new JA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Kn(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return QA(this,e)}reload(){return ZA(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ii(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ba(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Kn(this,WA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,m=(l=n.createdAt)!==null&&l!==void 0?l:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:I,isAnonymous:k,providerData:R,stsTokenManager:A}=n;b(g&&A,e,"internal-error");const D=za.fromJSON(this.name,A);b(typeof g=="string",e,"internal-error"),sr(h,e.name),sr(d,e.name),b(typeof I=="boolean",e,"internal-error"),b(typeof k=="boolean",e,"internal-error"),sr(p,e.name),sr(y,e.name),sr(v,e.name),sr(E,e.name),sr(m,e.name),sr(f,e.name);const J=new Ii({uid:g,auth:e,email:d,emailVerified:I,displayName:h,isAnonymous:k,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:D,createdAt:m,lastLoginAt:f});return R&&Array.isArray(R)&&(J.providerData=R.map(H=>Object.assign({},H))),E&&(J._redirectEventId=E),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new za;i.updateFromServerResponse(n);const s=new Ii({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ba(s),s}}/**
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
 */class oE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}oE.type="NONE";const js=oE;/**
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
 */function Ei(t,e,n){return`firebase:${t}:${e}:${n}`}class As{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ei(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ei("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ii._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new As(xt(js),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||xt(js);const o=Ei(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=Ii._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new As(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new As(s,e,r))}}/**
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
 */function Lv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(aE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cE(e))return"Blackberry";if(hE(e))return"Webos";if(Rm(e))return"Safari";if((e.includes("chrome/")||uE(e))&&!e.includes("edge/"))return"Chrome";if(gu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function aE(t=fe()){return/firefox\//i.test(t)}function Rm(t=fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uE(t=fe()){return/crios\//i.test(t)}function lE(t=fe()){return/iemobile/i.test(t)}function gu(t=fe()){return/android/i.test(t)}function cE(t=fe()){return/blackberry/i.test(t)}function hE(t=fe()){return/webos/i.test(t)}function uo(t=fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rN(t=fe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function iN(t=fe()){var e;return uo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sN(){return UI()&&document.documentMode===10}function dE(t=fe()){return uo(t)||gu(t)||hE(t)||cE(t)||/windows phone/i.test(t)||lE(t)}function oN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function fE(t,e=[]){let n;switch(t){case"Browser":n=Lv(fe());break;case"Worker":n=`${Lv(fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${jr}/${r}`}/**
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
 */class aN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class uN{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mv(this),this.idTokenSubscription=new Mv(this),this.beforeStateQueue=new aN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await As.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u==null?void 0:u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Ba(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?M(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(xt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xt(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await As.create(this,[xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return b(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ue(t){return M(t)}class Mv{constructor(e){this.auth=e,this.observer=null,this.addObserver=BI(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function lN(t,e,n){const r=Ue(t);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=pE(e),{host:o,port:a}=cN(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||hN()}function pE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cN(t){const e=pE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:$v(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:$v(o)}}}function $v(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class lo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}/**
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
 */async function mE(t,e){return Ve(t,"POST","/v1/accounts:resetPassword",Ne(t,e))}async function gE(t,e){return Ve(t,"POST","/v1/accounts:update",e)}async function dN(t,e){return Ve(t,"POST","/v1/accounts:update",Ne(t,e))}/**
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
 */async function fN(t,e){return Jn(t,"POST","/v1/accounts:signInWithPassword",Ne(t,e))}async function eh(t,e){return Ve(t,"POST","/v1/accounts:sendOobCode",Ne(t,e))}async function pN(t,e){return eh(t,e)}async function mN(t,e){return eh(t,e)}async function gN(t,e){return eh(t,e)}async function yN(t,e){return eh(t,e)}/**
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
 */async function vN(t,e){return Jn(t,"POST","/v1/accounts:signInWithEmailLink",Ne(t,e))}async function wN(t,e){return Jn(t,"POST","/v1/accounts:signInWithEmailLink",Ne(t,e))}/**
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
 */class ja extends lo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ja(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ja(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return fN(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return vN(e,{email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return gE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return wN(e,{idToken:n,email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Bn(t,e){return Jn(t,"POST","/v1/accounts:signInWithIdp",Ne(t,e))}/**
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
 */const _N="http://localhost";class bn extends lo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Sm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new bn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bn(e,n)}buildRequest(){const e={requestUri:_N,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oo(n)}return e}}/**
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
 */async function IN(t,e){return Ve(t,"POST","/v1/accounts:sendVerificationCode",Ne(t,e))}async function EN(t,e){return Jn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ne(t,e))}async function TN(t,e){const n=await Jn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ne(t,e));if(n.temporaryProof)throw Qo(t,"account-exists-with-different-credential",n);return n}const SN={USER_NOT_FOUND:"user-not-found"};async function kN(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Jn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ne(t,n),SN)}/**
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
 */class Ti extends lo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ti({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ti({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return EN(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return TN(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return kN(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ti({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function CN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bN(t){const e=_s(Ko(t)).link,n=e?_s(Ko(e)).deep_link_id:null,r=_s(Ko(t)).deep_link_id;return(r?_s(Ko(r)).link:null)||r||n||e||t}class th{constructor(e){var n,r,i,s,o,a;const u=_s(Ko(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=CN((i=u.mode)!==null&&i!==void 0?i:null);b(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=bN(e);try{return new th(n)}catch{return null}}}/**
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
 */class qr{constructor(){this.providerId=qr.PROVIDER_ID}static credential(e,n){return ja._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=th.parseLink(n);return b(r,"argument-error"),ja._fromEmailAndCode(e,r.code,r.tenantId)}}qr.PROVIDER_ID="password";qr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Zn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class co extends Zn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ns extends co{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return b("providerId"in n&&"signInMethod"in n,"argument-error"),bn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return b(e.idToken||e.accessToken,"argument-error"),bn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ns.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ns.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Ns(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class fn extends co{constructor(){super("facebook.com")}static credential(e){return bn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
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
 */class pn extends co{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return bn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
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
 */class mn extends co{constructor(){super("github.com")}static credential(e){return bn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
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
 */const RN="http://localhost";class qs extends lo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Bn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new qs(r,s)}static _create(e,n){return new qs(e,n)}buildRequest(){return{requestUri:RN,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const AN="saml.";class dc extends Zn{constructor(e){b(e.startsWith(AN),"argument-error"),super(e)}static credentialFromResult(e){return dc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return dc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=qs.fromJSON(e);return b(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return qs._create(r,n)}catch{return null}}}/**
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
 */class gn extends co{constructor(){super("twitter.com")}static credential(e,n){return bn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
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
 */async function yE(t,e){return Jn(t,"POST","/v1/accounts:signUp",Ne(t,e))}/**
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
 */class Qt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ii._fromIdTokenResponse(e,r,i),o=Uv(r);return new Qt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Uv(r);return new Qt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Uv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function NN(t){var e;const n=Ue(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Qt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await yE(n,{returnSecureToken:!0}),i=await Qt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class fc extends rt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new fc(e,n,r,i)}}function vE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fc._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function wE(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function xN(t,e){const n=M(t);await nh(!0,n,e);const{providerUserInfo:r}=await GA(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=wE(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Am(t,e,n=!1){const r=await Kn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qt._forOperation(t,"link",r)}async function nh(t,e,n){await Ba(e);const r=wE(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";b(r.has(n)===t,e.auth,i)}/**
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
 */async function _E(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Kn(t,vE(i,s,e,t),n);b(o.idToken,i,"internal-error");const a=Zc(o.idToken);b(a,i,"internal-error");const{sub:u}=a;return b(t.uid===u,i,"user-mismatch"),Qt._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Xe(i,"user-mismatch"),o}}/**
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
 */async function IE(t,e,n=!1){const r="signIn",i=await vE(t,r,e),s=await Qt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function rh(t,e){return IE(Ue(t),e)}async function EE(t,e){const n=M(t);return await nh(!1,n,e.providerId),Am(n,e)}async function TE(t,e){return _E(M(t),e)}/**
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
 */async function DN(t,e){return Jn(t,"POST","/v1/accounts:signInWithCustomToken",Ne(t,e))}/**
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
 */async function PN(t,e){const n=Ue(t),r=await DN(n,{token:e,returnSecureToken:!0}),i=await Qt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class ih{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Nm._fromServerResponse(e,n):Xe(e,"internal-error")}}class Nm extends ih{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Nm(n)}}/**
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
 */function sh(t,e,n){var r;b(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),b(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(b(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(b(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function ON(t,e,n){const r=M(t),i={requestType:"PASSWORD_RESET",email:e};n&&sh(r,i,n),await mN(r,i)}async function LN(t,e,n){await mE(M(t),{oobCode:e,newPassword:n})}async function MN(t,e){await dN(M(t),{oobCode:e})}async function SE(t,e){const n=M(t),r=await mE(n,{oobCode:e}),i=r.requestType;switch(b(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":b(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":b(r.mfaInfo,n,"internal-error");default:b(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=ih._fromServerResponse(Ue(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function $N(t,e){const{data:n}=await SE(M(t),e);return n.email}async function UN(t,e,n){const r=Ue(t),i=await yE(r,{returnSecureToken:!0,email:e,password:n}),s=await Qt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function FN(t,e,n){return rh(M(t),qr.credential(e,n))}/**
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
 */async function VN(t,e,n){const r=M(t),i={requestType:"EMAIL_SIGNIN",email:e};b(n.handleCodeInApp,r,"argument-error"),n&&sh(r,i,n),await gN(r,i)}function BN(t,e){const n=th.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function zN(t,e,n){const r=M(t),i=qr.credentialWithLink(e,n||Va());return b(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),rh(r,i)}/**
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
 */async function jN(t,e){return Ve(t,"POST","/v1/accounts:createAuthUri",Ne(t,e))}/**
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
 */async function qN(t,e){const n=Cm()?Va():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await jN(M(t),r);return i||[]}async function HN(t,e){const n=M(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&sh(n.auth,i,e);const{email:s}=await pN(n.auth,i);s!==t.email&&await t.reload()}async function WN(t,e,n){const r=M(t),i=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};n&&sh(r.auth,s,n);const{email:o}=await yN(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function GN(t,e){return Ve(t,"POST","/v1/accounts:update",e)}/**
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
 */async function KN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=M(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Kn(r,GN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function QN(t,e){return kE(M(t),e,null)}function YN(t,e){return kE(M(t),null,e)}async function kE(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Kn(t,gE(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function XN(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=Zc(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new xs(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new JN(s,i);case"github.com":return new ZN(s,i);case"google.com":return new ex(s,i);case"twitter.com":return new tx(s,i,t.screenName||null);case"custom":case"anonymous":return new xs(s,null);default:return new xs(s,r,i)}}class xs{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class CE extends xs{constructor(e,n,r,i){super(e,n,r),this.username=i}}class JN extends xs{constructor(e,n){super(e,"facebook.com",n)}}class ZN extends CE{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class ex extends xs{constructor(e,n){super(e,"google.com",n)}}class tx extends CE{constructor(e,n,r){super(e,"twitter.com",n,r)}}function nx(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:XN(n)}class pi{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new pi("enroll",e,n)}static _fromMfaPendingCredential(e){return new pi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return pi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return pi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class xm{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Ue(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>ih._fromServerResponse(r,a));b(i.mfaPendingCredential,r,"internal-error");const o=pi._fromMfaPendingCredential(i.mfaPendingCredential);return new xm(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const c=await Qt._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return b(n.user,r,"internal-error"),Qt._forOperation(n.user,n.operationType,l);default:Xe(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function rx(t,e){var n;const r=M(t),i=e;return b(e.customData.operationType,r,"argument-error"),b((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),xm._fromError(r,i)}/**
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
 */function ix(t,e){return Ve(t,"POST","/v2/accounts/mfaEnrollment:start",Ne(t,e))}function sx(t,e){return Ve(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ne(t,e))}function ox(t,e){return Ve(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ne(t,e))}class Dm{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>ih._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Dm(e)}async getSession(){return pi._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Kn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){var n;const r=typeof e=="string"?e:e.uid,i=await this.user.getIdToken(),s=await Kn(this.user,ox(this.user.auth,{idToken:i,mfaEnrollmentId:r}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==r),await this.user._updateTokensIfNecessary(s);try{await this.user.reload()}catch(o){if(((n=o)===null||n===void 0?void 0:n.code)!=="auth/user-token-expired")throw o}}}const Rd=new WeakMap;function ax(t){const e=M(t);return Rd.has(e)||Rd.set(e,Dm._fromUser(e)),Rd.get(e)}const pc="__sak";/**
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
 */class bE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pc,"1"),this.storage.removeItem(pc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ux(){const t=fe();return Rm(t)||uo(t)}const lx=1e3,cx=10;class RE extends bE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ux()&&oN(),this.fallbackToPolling=dE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);sN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}RE.type="LOCAL";const Pm=RE;/**
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
 */class AE extends bE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}AE.type="SESSION";const Di=AE;/**
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
 */function hx(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class oh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new oh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await hx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oh.receivers=[];/**
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
 */function yu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class dx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=yu("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function be(){return window}function fx(t){be().location.href=t}/**
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
 */function Om(){return typeof be().WorkerGlobalScope<"u"&&typeof be().importScripts=="function"}async function px(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gx(){return Om()?self:null}/**
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
 */const NE="firebaseLocalStorageDb",yx=1,mc="firebaseLocalStorage",xE="fbase_key";class vu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ah(t,e){return t.transaction([mc],e?"readwrite":"readonly").objectStore(mc)}function vx(){const t=indexedDB.deleteDatabase(NE);return new vu(t).toPromise()}function Hf(){const t=indexedDB.open(NE,yx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(mc,{keyPath:xE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(mc)?e(r):(r.close(),await vx(),e(await Hf()))})})}async function Fv(t,e,n){const r=ah(t,!0).put({[xE]:e,value:n});return new vu(r).toPromise()}async function wx(t,e){const n=ah(t,!1).get(e),r=await new vu(n).toPromise();return r===void 0?null:r.value}function Vv(t,e){const n=ah(t,!0).delete(e);return new vu(n).toPromise()}const _x=800,Ix=3;class DE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ix)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Om()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oh._getInstance(gx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await px(),!this.activeServiceWorker)return;this.sender=new dx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hf();return await Fv(e,pc,"1"),await Vv(e,pc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Fv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ah(i,!1).getAll();return new vu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_x)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}DE.type="LOCAL";const qa=DE;/**
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
 */function Ex(t,e){return Ve(t,"POST","/v2/accounts/mfaSignIn:start",Ne(t,e))}function Tx(t,e){return Ve(t,"POST","/v2/accounts/mfaSignIn:finalize",Ne(t,e))}/**
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
 */async function Sx(t){return(await Ve(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function kx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function PE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ke("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",kx().appendChild(r)})}function OE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const Cx=500,bx=6e4,sl=1e12;class Rx{constructor(e){this.auth=e,this.counter=sl,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new Ax(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||sl;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||sl;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||sl;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class Ax{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;b(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Nx(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},bx)},Cx))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Nx(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Ad=OE("rcb"),xx=new mu(3e4,6e4),Dx="https://www.google.com/recaptcha/api.js?";class Px{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=be().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return b(Ox(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(be().grecaptcha):new Promise((r,i)=>{const s=be().setTimeout(()=>{i(Ke(e,"network-request-failed"))},xx.get());be()[Ad]=()=>{be().clearTimeout(s),delete be()[Ad];const a=be().grecaptcha;if(!a){i(Ke(e,"internal-error"));return}const u=a.render;a.render=(l,c)=>{const h=u(l,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${Dx}?${oo({onload:Ad,render:"explicit",hl:n})}`;PE(o).catch(()=>{clearTimeout(s),i(Ke(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=be().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Ox(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Lx{async load(e){return new Rx(e)}clearedOneInstance(){}}/**
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
 */const LE="recaptcha",Mx={theme:"light",type:"image"};class $x{constructor(e,n=Object.assign({},Mx),r){this.parameters=n,this.type=LE,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ue(r),this.isInvisible=this.parameters.size==="invisible",b(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;b(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Lx:new Px,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){b(!this.parameters.sitekey,this.auth,"argument-error"),b(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),b(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=be()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){b(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){b(Cm()&&!Om(),this.auth,"internal-error"),await Ux(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Sx(this.auth);b(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return b(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Ux(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Lm{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ti._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function Fx(t,e,n){const r=Ue(t),i=await uh(r,e,M(n));return new Lm(i,s=>rh(r,s))}async function Vx(t,e,n){const r=M(t);await nh(!1,r,"phone");const i=await uh(r.auth,e,M(n));return new Lm(i,s=>EE(r,s))}async function Bx(t,e,n){const r=M(t),i=await uh(r.auth,e,M(n));return new Lm(i,s=>TE(r,s))}async function uh(t,e,n){var r;const i=await n.verify();try{b(typeof i=="string",t,"argument-error"),b(n.type===LE,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return b(o.type==="enroll",t,"internal-error"),(await ix(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{b(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return b(a,t,"missing-multi-factor-info"),(await Ex(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await IN(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function zx(t,e){await Am(M(t),e)}/**
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
 */class sn{constructor(e){this.providerId=sn.PROVIDER_ID,this.auth=Ue(e)}verifyPhoneNumber(e,n){return uh(this.auth,e,M(n))}static credential(e,n){return Ti._fromVerification(e,n)}static credentialFromResult(e){const n=e;return sn.credentialFromTaggedObject(n)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ti._fromTokenResponse(n,r):null}}sn.PROVIDER_ID="phone";sn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Ki(t,e){return e?xt(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Mm extends lo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jx(t){return IE(t.auth,new Mm(t),t.bypassAuthState)}function qx(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),_E(n,new Mm(t),t.bypassAuthState)}async function Hx(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),Am(n,new Mm(t),t.bypassAuthState)}/**
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
 */class ME{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jx;case"linkViaPopup":case"linkViaRedirect":return Hx;case"reauthViaPopup":case"reauthViaRedirect":return qx;default:Xe(this.auth,"internal-error")}}resolve(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Wx=new mu(2e3,1e4);async function Gx(t,e,n){const r=Ue(t);ao(t,e,Zn);const i=Ki(r,n);return new Mn(r,"signInViaPopup",e,i).executeNotNull()}async function Kx(t,e,n){const r=M(t);ao(r.auth,e,Zn);const i=Ki(r.auth,n);return new Mn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function Qx(t,e,n){const r=M(t);ao(r.auth,e,Zn);const i=Ki(r.auth,n);return new Mn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Mn extends ME{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Mn.currentPopupAction&&Mn.currentPopupAction.cancel(),Mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){un(this.filter.length===1,"Popup operations only handle one event");const e=yu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Wx.get())};e()}}Mn.currentPopupAction=null;/**
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
 */const Yx="pendingRedirect",ca=new Map;class Xx extends ME{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ca.get(this.auth._key());if(!e){try{const r=await Jx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ca.set(this.auth._key(),e)}return this.bypassAuthState||ca.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Jx(t,e){const n=UE(e),r=$E(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function $m(t,e){return $E(t)._set(UE(e),"true")}function Zx(){ca.clear()}function Um(t,e){ca.set(t._key(),e)}function $E(t){return xt(t._redirectPersistence)}function UE(t){return Ei(Yx,t.config.apiKey,t.name)}/**
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
 */function eD(t,e,n){return tD(t,e,n)}async function tD(t,e,n){const r=Ue(t);ao(t,e,Zn);const i=Ki(r,n);return await $m(i,r),i._openRedirect(r,e,"signInViaRedirect")}function nD(t,e,n){return rD(t,e,n)}async function rD(t,e,n){const r=M(t);ao(r.auth,e,Zn);const i=Ki(r.auth,n);await $m(i,r.auth);const s=await FE(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function iD(t,e,n){return sD(t,e,n)}async function sD(t,e,n){const r=M(t);ao(r.auth,e,Zn);const i=Ki(r.auth,n);await nh(!1,r,e.providerId),await $m(i,r.auth);const s=await FE(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function oD(t,e){return await Ue(t)._initializationPromise,lh(t,e,!1)}async function lh(t,e,n=!1){const r=Ue(t),i=Ki(r,e),o=await new Xx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function FE(t){const e=yu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const aD=10*60*1e3;class VE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!BE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ke(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bv(e))}saveEventToCache(e){this.cachedEventUids.add(Bv(e)),this.lastProcessedEventTime=Date.now()}}function Bv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function BE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return BE(t);default:return!1}}/**
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
 */async function zE(t,e={}){return Ve(t,"GET","/v1/projects",e)}/**
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
 */const lD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cD=/^https?/;async function hD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zE(t);for(const n of e)try{if(dD(n))return}catch{}Xe(t,"unauthorized-domain")}function dD(t){const e=Va(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!cD.test(n))return!1;if(lD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const fD=new mu(3e4,6e4);function zv(){const t=be().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pD(t){return new Promise((e,n)=>{var r,i,s;function o(){zv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zv(),n(Ke(t,"network-request-failed"))},timeout:fD.get()})}if(!((i=(r=be().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=be().gapi)===null||s===void 0)&&s.load)o();else{const a=OE("iframefcb");return be()[a]=()=>{gapi.load?o():n(Ke(t,"network-request-failed"))},PE(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw xl=null,e})}let xl=null;function mD(t){return xl=xl||pD(t),xl}/**
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
 */const gD=new mu(5e3,15e3),yD="__/auth/iframe",vD="emulator/auth/iframe",wD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_D=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ID(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bm(e,vD):`https://${t.config.authDomain}/${yD}`,r={apiKey:e.apiKey,appName:t.name,v:jr},i=_D.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${oo(r).slice(1)}`}async function ED(t){const e=await mD(t),n=be().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:ID(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ke(t,"network-request-failed"),a=be().setTimeout(()=>{s(o)},gD.get());function u(){be().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const TD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SD=500,kD=600,CD="_blank",bD="http://localhost";class jv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RD(t,e,n,r=SD,i=kD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},TD),{width:r.toString(),height:i.toString(),top:s,left:o}),l=fe().toLowerCase();n&&(a=uE(l)?CD:n),aE(l)&&(e=e||bD,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(iN(l)&&a!=="_self")return AD(e||"",a),new jv(null);const h=window.open(e||"",a,c);b(h,t,"popup-blocked");try{h.focus()}catch{}return new jv(h)}function AD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ND="__/auth/handler",xD="emulator/auth/handler";function Wf(t,e,n,r,i,s){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:jr,eventId:i};if(e instanceof Zn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof co){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${DD(t)}?${oo(a).slice(1)}`}function DD({config:t}){return t.emulator?bm(t,xD):`https://${t.authDomain}/${ND}`}/**
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
 */const Nd="webStorageSupport";class PD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Di,this._completeRedirectFn=lh,this._overrideRedirectResult=Um}async _openPopup(e,n,r,i){var s;un((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Wf(e,n,r,Va(),i);return RD(e,o,yu())}async _openRedirect(e,n,r,i){return await this._originValidation(e),fx(Wf(e,n,r,Va(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(un(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ED(e),r=new VE(e);return n.register("authEvent",i=>(b(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nd,{type:Nd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Nd];o!==void 0&&n(!!o),Xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dE()||Rm()||uo()}}const OD=PD;class LD{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return wn("unexpected MultiFactorSessionType")}}}class Fm extends LD{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Fm(e)}_finalizeEnroll(e,n,r){return sx(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return Tx(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class jE{constructor(){}static assertion(e){return Fm._fromCredential(e)}}jE.FACTOR_ID="phone";var qv="@firebase/auth",Hv="0.20.10";/**
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
 */class MD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $D(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function UD(t){Gn(new Kt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,u)=>{b(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),b(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fE(t)},c=new uN(a,u,l);return VA(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gn(new Kt("auth-internal",e=>{const n=Ue(e.getProvider("auth").getImmediate());return(r=>new MD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(qv,Hv,$D(t)),Ht(qv,Hv,"esm2017")}/**
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
 */const FD=5*60;cR("authIdTokenMaxAge");UD("Browser");/**
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
 */function Pi(){return window}/**
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
 */const VD=2e3;async function BD(t,e,n){var r;const{BuildInfo:i}=Pi();un(e.sessionId,"AuthEvent did not contain a session ID");const s=await WD(e.sessionId),o={};return uo()?o.ibi=i.packageName:gu()?o.apn=i.packageName:Xe(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Wf(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function zD(t){const{BuildInfo:e}=Pi(),n={};uo()?n.iosBundleId=e.packageName:gu()?n.androidPackageName=e.packageName:Xe(t,"operation-not-supported-in-this-environment"),await zE(t,n)}function jD(t){const{cordova:e}=Pi();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,rN()?"_blank":"_system","location=yes"),n(i)})})}async function qD(t,e,n){const{cordova:r}=Pi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(Ke(t,"redirect-cancelled-by-user"))},VD))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),gu()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function HD(t){var e,n,r,i,s,o,a,u,l,c;const h=Pi();b(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),b(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),b(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),b(typeof((u=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),b(typeof((c=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function WD(t){const e=GD(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function GD(t){if(un(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const KD=20;class QD extends VE{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function YD(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:ZD(),postBody:null,tenantId:t.tenantId,error:Ke(t,"no-auth-event")}}function XD(t,e){return Gf()._set(Kf(t),e)}async function Wv(t){const e=await Gf()._get(Kf(t));return e&&await Gf()._remove(Kf(t)),e}function JD(t,e){var n,r;const i=tP(e);if(i.includes("/__/auth/callback")){const s=Dl(i),o=s.firebaseError?eP(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?Ke(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function ZD(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<KD;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Gf(){return xt(Pm)}function Kf(t){return Ei("authEvent",t.config.apiKey,t.name)}function eP(t){try{return JSON.parse(t)}catch{return null}}function tP(t){const e=Dl(t),n=e.link?decodeURIComponent(e.link):void 0,r=Dl(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Dl(i).link||i||r||n||t}function Dl(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return _s(n.join("?"))}/**
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
 */const nP=500;class rP{constructor(){this._redirectPersistence=Di,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=lh,this._overrideRedirectResult=Um}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new QD(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Xe(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){HD(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),Zx(),await this._originValidation(e);const o=YD(e,r,i);await XD(e,o);const a=await BD(e,o,n),u=await jD(a);return qD(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zD(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Pi(),o=setTimeout(async()=>{await Wv(e),n.onEvent(Gv())},nP),a=async c=>{clearTimeout(o);const h=await Wv(e);let d=null;h&&(c==null?void 0:c.url)&&(d=JD(h,c.url)),n.onEvent(d||Gv())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,l=`${s.packageName.toLowerCase()}://`;Pi().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(l)&&a({url:c}),typeof u=="function")try{u(c)}catch(h){console.error(h)}}}}const iP=rP;function Gv(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ke("no-auth-event")}}/**
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
 */function sP(t,e){Ue(t)._logFramework(e)}var oP="@firebase/auth-compat",aP="0.2.23";/**
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
 */const uP=1e3;function ha(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function lP(){return ha()==="http:"||ha()==="https:"}function qE(t=fe()){return!!((ha()==="file:"||ha()==="ionic:"||ha()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function cP(){return _m()||wm()}function hP(){return UI()&&(document==null?void 0:document.documentMode)===11}function dP(t=fe()){return/Edge\/\d+/.test(t)}function fP(t=fe()){return hP()||dP(t)}function HE(){try{const t=self.localStorage,e=yu();if(t)return t.setItem(e,"1"),t.removeItem(e),fP()?$a():!0}catch{return Vm()&&$a()}return!1}function Vm(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function xd(){return(lP()||$I()||qE())&&!cP()&&HE()&&!Vm()}function WE(){return qE()&&typeof document<"u"}async function pP(){return WE()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},uP);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function mP(){return typeof window<"u"?window:null}/**
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
 */const At={LOCAL:"local",NONE:"none",SESSION:"session"},Oo=b,GE="persistence";function gP(t,e){if(Oo(Object.values(At).includes(e),t,"invalid-persistence-type"),_m()){Oo(e!==At.SESSION,t,"unsupported-persistence-type");return}if(wm()){Oo(e===At.NONE,t,"unsupported-persistence-type");return}if(Vm()){Oo(e===At.NONE||e===At.LOCAL&&$a(),t,"unsupported-persistence-type");return}Oo(e===At.NONE||HE(),t,"unsupported-persistence-type")}async function Qf(t){await t._initializationPromise;const e=KE(),n=Ei(GE,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function yP(t,e){const n=KE();if(!n)return[];const r=Ei(GE,t,e);switch(n.getItem(r)){case At.NONE:return[js];case At.LOCAL:return[qa,Di];case At.SESSION:return[Di];default:return[]}}function KE(){var t;try{return((t=mP())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const vP=b;class gr{constructor(){this.browserResolver=xt(OD),this.cordovaResolver=xt(iP),this.underlyingResolver=null,this._redirectPersistence=Di,this._completeRedirectFn=lh,this._overrideRedirectResult=Um}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return WE()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return vP(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await pP();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function QE(t){return t.unwrap()}function wP(t){return t.wrapped()}/**
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
 */function _P(t){return YE(t)}function IP(t,e){var n,r;const i=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(((r=e)===null||r===void 0?void 0:r.code)==="auth/multi-factor-auth-required"){const s=e;s.resolver=new EP(t,rx(t,e))}else if(i){const s=YE(e),o=e;s&&(o.credential=s,o.tenantId=i.tenantId||void 0,o.email=i.email||void 0,o.phoneNumber=i.phoneNumber||void 0)}}function YE(t){const{_tokenResponse:e}=t instanceof rt?t.customData:t;if(!e)return null;if(!(t instanceof rt)&&"temporaryProof"in e&&"phoneNumber"in e)return sn.credentialFromResult(t);const n=e.providerId;if(!n||n===Po.PASSWORD)return null;let r;switch(n){case Po.GOOGLE:r=pn;break;case Po.FACEBOOK:r=fn;break;case Po.GITHUB:r=mn;break;case Po.TWITTER:r=gn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?qs._create(n,a):bn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Ns(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof rt?r.credentialFromError(t):r.credentialFromResult(t)}function vt(t,e){return e.catch(n=>{throw n instanceof rt&&IP(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:_P(n),additionalUserInfo:nx(n),user:$n.getOrCreate(i)}})}async function Yf(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>vt(t,n.confirm(r))}}class EP{constructor(e,n){this.resolver=n,this.auth=wP(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return vt(QE(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class $n{constructor(e){this._delegate=e,this.multiFactor=ax(e)}static getOrCreate(e){return $n.USER_MAP.has(e)||$n.USER_MAP.set(e,new $n(e)),$n.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return vt(this.auth,EE(this._delegate,e))}async linkWithPhoneNumber(e,n){return Yf(this.auth,Vx(this._delegate,e,n))}async linkWithPopup(e){return vt(this.auth,Qx(this._delegate,e,gr))}async linkWithRedirect(e){return await Qf(Ue(this.auth)),iD(this._delegate,e,gr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return vt(this.auth,TE(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Yf(this.auth,Bx(this._delegate,e,n))}reauthenticateWithPopup(e){return vt(this.auth,Kx(this._delegate,e,gr))}async reauthenticateWithRedirect(e){return await Qf(Ue(this.auth)),nD(this._delegate,e,gr)}sendEmailVerification(e){return HN(this._delegate,e)}async unlink(e){return await xN(this._delegate,e),this}updateEmail(e){return QN(this._delegate,e)}updatePassword(e){return YN(this._delegate,e)}updatePhoneNumber(e){return zx(this._delegate,e)}updateProfile(e){return KN(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return WN(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}$n.USER_MAP=new WeakMap;/**
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
 */const Lo=b;class Xf{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Lo(r,"invalid-api-key",{appName:e.name}),Lo(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?gr:void 0;this._delegate=n.initialize({options:{persistence:TP(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(UA),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?$n.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){lN(this._delegate,e,n)}applyActionCode(e){return MN(this._delegate,e)}checkActionCode(e){return SE(this._delegate,e)}confirmPasswordReset(e,n){return LN(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return vt(this._delegate,UN(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return qN(this._delegate,e)}isSignInWithEmailLink(e){return BN(this._delegate,e)}async getRedirectResult(){Lo(xd(),this._delegate,"operation-not-supported-in-this-environment");const e=await oD(this._delegate,gr);return e?vt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){sP(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=Kv(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=Kv(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return VN(this._delegate,e,n)}sendPasswordResetEmail(e,n){return ON(this._delegate,e,n||void 0)}async setPersistence(e){gP(this._delegate,e);let n;switch(e){case At.SESSION:n=Di;break;case At.LOCAL:n=await xt(qa)._isAvailable()?qa:Pm;break;case At.NONE:n=js;break;default:return Xe("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return vt(this._delegate,NN(this._delegate))}signInWithCredential(e){return vt(this._delegate,rh(this._delegate,e))}signInWithCustomToken(e){return vt(this._delegate,PN(this._delegate,e))}signInWithEmailAndPassword(e,n){return vt(this._delegate,FN(this._delegate,e,n))}signInWithEmailLink(e,n){return vt(this._delegate,zN(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Yf(this._delegate,Fx(this._delegate,e,n))}async signInWithPopup(e){return Lo(xd(),this._delegate,"operation-not-supported-in-this-environment"),vt(this._delegate,Gx(this._delegate,e,gr))}async signInWithRedirect(e){return Lo(xd(),this._delegate,"operation-not-supported-in-this-environment"),await Qf(this._delegate),eD(this._delegate,e,gr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return $N(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Xf.Persistence=At;function Kv(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&$n.getOrCreate(o)),error:e,complete:n}}function TP(t,e){const n=yP(t,e);if(typeof self<"u"&&!n.includes(qa)&&n.push(qa),typeof window<"u")for(const r of[Pm,Di])n.includes(r)||n.push(r);return n.includes(js)||n.push(js),n}/**
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
 */class Bm{constructor(){this.providerId="phone",this._delegate=new sn(QE(an.auth()))}static credential(e,n){return sn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Bm.PHONE_SIGN_IN_METHOD=sn.PHONE_SIGN_IN_METHOD;Bm.PROVIDER_ID=sn.PROVIDER_ID;/**
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
 */const SP=b;class kP{constructor(e,n,r=an.app()){var i;SP((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new $x(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const CP="auth-compat";function bP(t){t.INTERNAL.registerComponent(new Kt(CP,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Xf(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ns.EMAIL_SIGNIN,PASSWORD_RESET:ns.PASSWORD_RESET,RECOVER_EMAIL:ns.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ns.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ns.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ns.VERIFY_EMAIL}},EmailAuthProvider:qr,FacebookAuthProvider:fn,GithubAuthProvider:mn,GoogleAuthProvider:pn,OAuthProvider:Ns,SAMLAuthProvider:dc,PhoneAuthProvider:Bm,PhoneMultiFactorGenerator:jE,RecaptchaVerifier:kP,TwitterAuthProvider:gn,Auth:Xf,AuthCredential:lo,Error:rt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(oP,aP)}bP(an);var RP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,zm=zm||{},V=RP||self;function gc(){}function ch(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function wu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function AP(t){return Object.prototype.hasOwnProperty.call(t,Dd)&&t[Dd]||(t[Dd]=++NP)}var Dd="closure_uid_"+(1e9*Math.random()>>>0),NP=0;function xP(t,e,n){return t.call.apply(t.bind,arguments)}function DP(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function it(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?it=xP:it=DP,it.apply(null,arguments)}function ol(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Je(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Hr(){this.s=this.s,this.o=this.o}var PP=0;Hr.prototype.s=!1;Hr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),PP!=0)&&AP(this)};Hr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const XE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function jm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Qv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ch(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var OP=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{V.addEventListener("test",gc,e),V.removeEventListener("test",gc,e)}catch{}return t}();function yc(t){return/^[\s\xa0]*$/.test(t)}var Yv=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Pd(t,e){return t<e?-1:t>e?1:0}function hh(){var t=V.navigator;return t&&(t=t.userAgent)?t:""}function yn(t){return hh().indexOf(t)!=-1}function qm(t){return qm[" "](t),t}qm[" "]=gc;function LP(t){var e=UP;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var MP=yn("Opera"),Hs=yn("Trident")||yn("MSIE"),JE=yn("Edge"),Jf=JE||Hs,ZE=yn("Gecko")&&!(hh().toLowerCase().indexOf("webkit")!=-1&&!yn("Edge"))&&!(yn("Trident")||yn("MSIE"))&&!yn("Edge"),$P=hh().toLowerCase().indexOf("webkit")!=-1&&!yn("Edge");function e1(){var t=V.document;return t?t.documentMode:void 0}var vc;e:{var Od="",Ld=function(){var t=hh();if(ZE)return/rv:([^\);]+)(\)|;)/.exec(t);if(JE)return/Edge\/([\d\.]+)/.exec(t);if(Hs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if($P)return/WebKit\/(\S+)/.exec(t);if(MP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ld&&(Od=Ld?Ld[1]:""),Hs){var Md=e1();if(Md!=null&&Md>parseFloat(Od)){vc=String(Md);break e}}vc=Od}var UP={};function FP(){return LP(function(){let t=0;const e=Yv(String(vc)).split("."),n=Yv("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Pd(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Pd(i[2].length==0,s[2].length==0)||Pd(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Zf;if(V.document&&Hs){var Xv=e1();Zf=Xv||parseInt(vc,10)||void 0}else Zf=void 0;var VP=Zf;function Ha(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ZE){e:{try{qm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:BP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ha.X.h.call(this)}}Je(Ha,st);var BP={2:"touch",3:"pen",4:"mouse"};Ha.prototype.h=function(){Ha.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var _u="closure_listenable_"+(1e6*Math.random()|0),zP=0;function jP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++zP,this.ba=this.ea=!1}function dh(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Hm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function t1(t){const e={};for(const n in t)e[n]=t[n];return e}const Jv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function n1(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Jv.length;s++)n=Jv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function fh(t){this.src=t,this.g={},this.h=0}fh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=tp(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new jP(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function ep(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=XE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(dh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function tp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Wm="closure_lm_"+(1e6*Math.random()|0),$d={};function r1(t,e,n,r,i){if(r&&r.once)return s1(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)r1(t,e[s],n,r,i);return null}return n=Qm(n),t&&t[_u]?t.N(e,n,wu(r)?!!r.capture:!!r,i):i1(t,e,n,!1,r,i)}function i1(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=wu(i)?!!i.capture:!!i,a=Km(t);if(a||(t[Wm]=a=new fh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=qP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)OP||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(a1(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function qP(){function t(n){return e.call(t.src,t.listener,n)}const e=HP;return t}function s1(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)s1(t,e[s],n,r,i);return null}return n=Qm(n),t&&t[_u]?t.O(e,n,wu(r)?!!r.capture:!!r,i):i1(t,e,n,!0,r,i)}function o1(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)o1(t,e[s],n,r,i);else r=wu(r)?!!r.capture:!!r,n=Qm(n),t&&t[_u]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=tp(s,n,r,i),-1<n&&(dh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Km(t))&&(e=t.g[e.toString()],t=-1,e&&(t=tp(e,n,r,i)),(n=-1<t?e[t]:null)&&Gm(n))}function Gm(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[_u])ep(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(a1(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Km(e))?(ep(n,t),n.h==0&&(n.src=null,e[Wm]=null)):dh(t)}}}function a1(t){return t in $d?$d[t]:$d[t]="on"+t}function HP(t,e){if(t.ba)t=!0;else{e=new Ha(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Gm(t),t=n.call(r,e)}return t}function Km(t){return t=t[Wm],t instanceof fh?t:null}var Ud="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qm(t){return typeof t=="function"?t:(t[Ud]||(t[Ud]=function(e){return t.handleEvent(e)}),t[Ud])}function Fe(){Hr.call(this),this.i=new fh(this),this.P=this,this.I=null}Je(Fe,Hr);Fe.prototype[_u]=!0;Fe.prototype.removeEventListener=function(t,e,n,r){o1(this,t,e,n,r)};function Qe(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var i=e;e=new st(r,t),n1(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=al(o,r,!0,e)&&i}if(o=e.g=t,i=al(o,r,!0,e)&&i,i=al(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=al(o,r,!1,e)&&i}Fe.prototype.M=function(){if(Fe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)dh(n[r]);delete t.g[e],t.h--}}this.I=null};Fe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Fe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function al(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&ep(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ym=V.JSON.stringify;function WP(){var t=c1;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class GP{constructor(){this.h=this.g=null}add(e,n){const r=u1.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var u1=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new KP,t=>t.reset());class KP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function QP(t){V.setTimeout(()=>{throw t},0)}function l1(t,e){np||YP(),rp||(np(),rp=!0),c1.add(t,e)}var np;function YP(){var t=V.Promise.resolve(void 0);np=function(){t.then(XP)}}var rp=!1,c1=new GP;function XP(){for(var t;t=WP();){try{t.h.call(t.g)}catch(n){QP(n)}var e=u1;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}rp=!1}function ph(t,e){Fe.call(this),this.h=t||1,this.g=e||V,this.j=it(this.lb,this),this.l=Date.now()}Je(ph,Fe);$=ph.prototype;$.ca=!1;$.R=null;$.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Qe(this,"tick"),this.ca&&(Xm(this),this.start()))}};$.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xm(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}$.M=function(){ph.X.M.call(this),Xm(this),delete this.g};function Jm(t,e,n){if(typeof t=="function")n&&(t=it(t,n));else if(t&&typeof t.handleEvent=="function")t=it(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(t,e||0)}function h1(t){t.g=Jm(()=>{t.g=null,t.i&&(t.i=!1,h1(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class JP extends Hr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:h1(this)}M(){super.M(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wa(t){Hr.call(this),this.h=t,this.g={}}Je(Wa,Hr);var Zv=[];function d1(t,e,n,r){Array.isArray(n)||(n&&(Zv[0]=n.toString()),n=Zv);for(var i=0;i<n.length;i++){var s=r1(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function f1(t){Hm(t.g,function(e,n){this.g.hasOwnProperty(n)&&Gm(e)},t),t.g={}}Wa.prototype.M=function(){Wa.X.M.call(this),f1(this)};Wa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function mh(){this.g=!0}mh.prototype.Aa=function(){this.g=!1};function ZP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function eO(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Is(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+nO(t,n)+(r?" "+r:"")})}function tO(t,e){t.info(function(){return"TIMEOUT: "+e})}mh.prototype.info=function(){};function nO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ym(n)}catch{return e}}var Qi={},ew=null;function gh(){return ew=ew||new Fe}Qi.Pa="serverreachability";function p1(t){st.call(this,Qi.Pa,t)}Je(p1,st);function Ga(t){const e=gh();Qe(e,new p1(e))}Qi.STAT_EVENT="statevent";function m1(t,e){st.call(this,Qi.STAT_EVENT,t),this.stat=e}Je(m1,st);function ft(t){const e=gh();Qe(e,new m1(e,t))}Qi.Qa="timingevent";function g1(t,e){st.call(this,Qi.Qa,t),this.size=e}Je(g1,st);function Iu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){t()},e)}var yh={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},y1={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Zm(){}Zm.prototype.h=null;function tw(t){return t.h||(t.h=t.i())}function v1(){}var Eu={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function eg(){st.call(this,"d")}Je(eg,st);function tg(){st.call(this,"c")}Je(tg,st);var ip;function vh(){}Je(vh,Zm);vh.prototype.g=function(){return new XMLHttpRequest};vh.prototype.i=function(){return{}};ip=new vh;function Tu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Wa(this),this.O=rO,t=Jf?125:void 0,this.T=new ph(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new w1}function w1(){this.i=null,this.g="",this.h=!1}var rO=45e3,sp={},wc={};$=Tu.prototype;$.setTimeout=function(t){this.O=t};function op(t,e,n){t.K=1,t.v=_h(Qn(e)),t.s=n,t.P=!0,_1(t,null)}function _1(t,e){t.F=Date.now(),Su(t),t.A=Qn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),R1(n.i,"t",r),t.C=0,n=t.l.H,t.h=new w1,t.g=Q1(t.l,n?e:null,!t.s),0<t.N&&(t.L=new JP(it(t.La,t,t.g),t.N)),d1(t.S,t.g,"readystatechange",t.ib),e=t.H?t1(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ga(),ZP(t.j,t.u,t.A,t.m,t.U,t.s)}$.ib=function(t){t=t.target;const e=this.L;e&&Un(t)==3?e.l():this.La(t)};$.La=function(t){try{if(t==this.g)e:{const c=Un(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Jf||this.g&&(this.h.h||this.g.fa()||sw(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Ga(3):Ga(2)),wh(this);var n=this.g.aa();this.Y=n;t:if(I1(this)){var r=sw(this.g);t="";var i=r.length,s=Un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mi(this),da(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,eO(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!yc(a)){var l=a;break t}}l=null}if(n=l)Is(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ap(this,n);else{this.i=!1,this.o=3,ft(12),mi(this),da(this);break e}}this.P?(E1(this,c,o),Jf&&this.i&&c==3&&(d1(this.S,this.T,"tick",this.hb),this.T.start())):(Is(this.j,this.m,o,null),ap(this,o)),c==4&&mi(this),this.i&&!this.I&&(c==4?H1(this.l,this):(this.i=!1,Su(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ft(12)):(this.o=0,ft(13)),mi(this),da(this)}}}catch{}finally{}};function I1(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function E1(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=iO(t,n),i==wc){e==4&&(t.o=4,ft(14),r=!1),Is(t.j,t.m,null,"[Incomplete Response]");break}else if(i==sp){t.o=4,ft(15),Is(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Is(t.j,t.m,i,null),ap(t,i);I1(t)&&i!=wc&&i!=sp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ft(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ug(e),e.K=!0,ft(11))):(Is(t.j,t.m,n,"[Invalid Chunked Response]"),mi(t),da(t))}$.hb=function(){if(this.g){var t=Un(this.g),e=this.g.fa();this.C<e.length&&(wh(this),E1(this,t,e),this.i&&t!=4&&Su(this))}};function iO(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?wc:(n=Number(e.substring(n,r)),isNaN(n)?sp:(r+=1,r+n>e.length?wc:(e=e.substr(r,n),t.C=r+n,e)))}$.cancel=function(){this.I=!0,mi(this)};function Su(t){t.V=Date.now()+t.O,T1(t,t.O)}function T1(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Iu(it(t.gb,t),e)}function wh(t){t.B&&(V.clearTimeout(t.B),t.B=null)}$.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(tO(this.j,this.A),this.K!=2&&(Ga(),ft(17)),mi(this),this.o=2,da(this)):T1(this,this.V-t)};function da(t){t.l.G==0||t.I||H1(t.l,t)}function mi(t){wh(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Xm(t.T),f1(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ap(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||up(n.h,t))){if(!t.J&&up(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ec(n),Th(n);else break e;ag(n),ft(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Iu(it(n.cb,n),6e3));if(1>=x1(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else gi(n,11)}else if((t.J||n.g==t)&&Ec(n),!yc(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const c=l[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ng(s,s.h),s.h=null))}if(r.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,ae(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=K1(r,r.H?r.ka:null,r.V),o.J){D1(r.h,o);var a=o,u=r.J;u&&a.setTimeout(u),a.B&&(wh(a),Su(a)),r.g=o}else j1(r);0<n.i.length&&Sh(n)}else l[0]!="stop"&&l[0]!="close"||gi(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?gi(n,7):og(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Ga(4)}catch{}}function sO(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ch(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function oO(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ch(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function S1(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ch(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=oO(t),r=sO(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var k1=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Si(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Si){this.h=e!==void 0?e:t.h,_c(this,t.j),this.s=t.s,this.g=t.g,Ic(this,t.m),this.l=t.l,e=t.i;var n=new Ka;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),nw(this,n),this.o=t.o}else t&&(n=String(t).match(k1))?(this.h=!!e,_c(this,n[1]||"",!0),this.s=Yo(n[2]||""),this.g=Yo(n[3]||"",!0),Ic(this,n[4]),this.l=Yo(n[5]||"",!0),nw(this,n[6]||"",!0),this.o=Yo(n[7]||"")):(this.h=!!e,this.i=new Ka(null,this.h))}Si.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xo(e,rw,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Xo(e,rw,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Xo(n,n.charAt(0)=="/"?cO:lO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xo(n,dO)),t.join("")};function Qn(t){return new Si(t)}function _c(t,e,n){t.j=n?Yo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ic(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function nw(t,e,n){e instanceof Ka?(t.i=e,fO(t.i,t.h)):(n||(e=Xo(e,hO)),t.i=new Ka(e,t.h))}function ae(t,e,n){t.i.set(e,n)}function _h(t){return ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Yo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,uO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function uO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var rw=/[#\/\?@]/g,lO=/[#\?:]/g,cO=/[#\?]/g,hO=/[#\?@]/g,dO=/#/g;function Ka(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Wr(t){t.g||(t.g=new Map,t.h=0,t.i&&aO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=Ka.prototype;$.add=function(t,e){Wr(this),this.i=null,t=ho(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function C1(t,e){Wr(t),e=ho(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function b1(t,e){return Wr(t),e=ho(t,e),t.g.has(e)}$.forEach=function(t,e){Wr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};$.oa=function(){Wr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};$.W=function(t){Wr(this);let e=[];if(typeof t=="string")b1(this,t)&&(e=e.concat(this.g.get(ho(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return Wr(this),this.i=null,t=ho(this,t),b1(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function R1(t,e,n){C1(t,e),0<n.length&&(t.i=null,t.g.set(ho(t,e),jm(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ho(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function fO(t,e){e&&!t.j&&(Wr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(C1(this,r),R1(this,i,n))},t)),t.j=e}var pO=class{constructor(t,e){this.h=t,this.g=e}};function A1(t){this.l=t||mO,V.PerformanceNavigationTiming?(t=V.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(V.g&&V.g.Ga&&V.g.Ga()&&V.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var mO=10;function N1(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function x1(t){return t.h?1:t.g?t.g.size:0}function up(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ng(t,e){t.g?t.g.add(e):t.h=e}function D1(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}A1.prototype.cancel=function(){if(this.i=P1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function P1(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return jm(t.i)}function rg(){}rg.prototype.stringify=function(t){return V.JSON.stringify(t,void 0)};rg.prototype.parse=function(t){return V.JSON.parse(t,void 0)};function gO(){this.g=new rg}function yO(t,e,n){const r=n||"";try{S1(t,function(i,s){let o=i;wu(i)&&(o=Ym(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function vO(t,e){const n=new mh;if(V.Image){const r=new Image;r.onload=ol(ul,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ol(ul,n,r,"TestLoadImage: error",!1,e),r.onabort=ol(ul,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ol(ul,n,r,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ul(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ku(t){this.l=t.ac||null,this.j=t.jb||!1}Je(ku,Zm);ku.prototype.g=function(){return new Ih(this.l,this.j)};ku.prototype.i=function(t){return function(){return t}}({});function Ih(t,e){Fe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ig,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Je(Ih,Fe);var ig=0;$=Ih.prototype;$.open=function(t,e){if(this.readyState!=ig)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Qa(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||V).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cu(this)),this.readyState=ig};$.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Qa(this)),this.g&&(this.readyState=3,Qa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;O1(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function O1(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}$.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Cu(this):Qa(this),this.readyState==3&&O1(this)}};$.Va=function(t){this.g&&(this.response=this.responseText=t,Cu(this))};$.Ua=function(t){this.g&&(this.response=t,Cu(this))};$.ga=function(){this.g&&Cu(this)};function Cu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Qa(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Qa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ih.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var wO=V.JSON.parse;function ge(t){Fe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=L1,this.K=this.L=!1}Je(ge,Fe);var L1="",_O=/^https?$/i,IO=["POST","PUT"];$=ge.prototype;$.Ka=function(t){this.L=t};$.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ip.g(),this.C=this.u?tw(this.u):tw(ip),this.g.onreadystatechange=it(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){iw(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=V.FormData&&t instanceof V.FormData,!(0<=XE(IO,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{U1(this),0<this.B&&((this.K=EO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=it(this.qa,this)):this.A=Jm(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){iw(this,s)}};function EO(t){return Hs&&FP()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.qa=function(){typeof zm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qe(this,"timeout"),this.abort(8))};function iw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,M1(t),Eh(t)}function M1(t){t.D||(t.D=!0,Qe(t,"complete"),Qe(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Qe(this,"complete"),Qe(this,"abort"),Eh(this))};$.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Eh(this,!0)),ge.X.M.call(this)};$.Ha=function(){this.s||(this.F||this.v||this.l?$1(this):this.fb())};$.fb=function(){$1(this)};function $1(t){if(t.h&&typeof zm<"u"&&(!t.C[1]||Un(t)!=4||t.aa()!=2)){if(t.v&&Un(t)==4)Jm(t.Ha,0,t);else if(Qe(t,"readystatechange"),Un(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(k1)[1]||null;if(!i&&V.self&&V.self.location){var s=V.self.location.protocol;i=s.substr(0,s.length-1)}r=!_O.test(i?i.toLowerCase():"")}n=r}if(n)Qe(t,"complete"),Qe(t,"success");else{t.m=6;try{var o=2<Un(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",M1(t)}}finally{Eh(t)}}}}function Eh(t,e){if(t.g){U1(t);const n=t.g,r=t.C[0]?gc:null;t.g=null,t.C=null,e||Qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function U1(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(V.clearTimeout(t.A),t.A=null)}function Un(t){return t.g?t.g.readyState:0}$.aa=function(){try{return 2<Un(this)?this.g.status:-1}catch{return-1}};$.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),wO(e)}};function sw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case L1:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Ea=function(){return this.m};$.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function F1(t){let e="";return Hm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function sg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=F1(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ae(t,e,n))}function Mo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function V1(t){this.Ca=0,this.i=[],this.j=new mh,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Mo("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Mo("baseRetryDelayMs",5e3,t),this.bb=Mo("retryDelaySeedMs",1e4,t),this.$a=Mo("forwardChannelMaxRetries",2,t),this.ta=Mo("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new A1(t&&t.concurrentRequestLimit),this.Fa=new gO,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}$=V1.prototype;$.ma=8;$.G=1;function og(t){if(B1(t),t.G==3){var e=t.U++,n=Qn(t.F);ae(n,"SID",t.I),ae(n,"RID",e),ae(n,"TYPE","terminate"),bu(t,n),e=new Tu(t,t.j,e,void 0),e.K=2,e.v=_h(Qn(n)),n=!1,V.navigator&&V.navigator.sendBeacon&&(n=V.navigator.sendBeacon(e.v.toString(),"")),!n&&V.Image&&(new Image().src=e.v,n=!0),n||(e.g=Q1(e.l,null),e.g.da(e.v)),e.F=Date.now(),Su(e)}G1(t)}function Th(t){t.g&&(ug(t),t.g.cancel(),t.g=null)}function B1(t){Th(t),t.u&&(V.clearTimeout(t.u),t.u=null),Ec(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&V.clearTimeout(t.m),t.m=null)}function Sh(t){N1(t.h)||t.m||(t.m=!0,l1(t.Ja,t),t.C=0)}function TO(t,e){return x1(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Iu(it(t.Ja,t,e),W1(t,t.C)),t.C++,!0)}$.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Tu(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=t1(s),n1(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=z1(this,i,e),n=Qn(this.F),ae(n,"RID",t),ae(n,"CVER",22),this.D&&ae(n,"X-HTTP-Session-Id",this.D),bu(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(F1(s)))+"&"+e:this.o&&sg(n,this.o,s)),ng(this.h,i),this.Ya&&ae(n,"TYPE","init"),this.O?(ae(n,"$req",e),ae(n,"SID","null"),i.Z=!0,op(i,n,null)):op(i,n,e),this.G=2}}else this.G==3&&(t?ow(this,t):this.i.length==0||N1(this.h)||ow(this))};function ow(t,e){var n;e?n=e.m:n=t.U++;const r=Qn(t.F);ae(r,"SID",t.I),ae(r,"RID",n),ae(r,"AID",t.T),bu(t,r),t.o&&t.s&&sg(r,t.o,t.s),n=new Tu(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=z1(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ng(t.h,n),op(n,r,e)}function bu(t,e){t.ia&&Hm(t.ia,function(n,r){ae(e,r,n)}),t.l&&S1({},function(n,r){ae(e,r,n)})}function z1(t,e,n){n=Math.min(t.i.length,n);var r=t.l?it(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{yO(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function j1(t){t.g||t.u||(t.Z=1,l1(t.Ia,t),t.A=0)}function ag(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Iu(it(t.Ia,t),W1(t,t.A)),t.A++,!0)}$.Ia=function(){if(this.u=null,q1(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Iu(it(this.eb,this),t)}};$.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ft(10),Th(this),q1(this))};function ug(t){t.B!=null&&(V.clearTimeout(t.B),t.B=null)}function q1(t){t.g=new Tu(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Qn(t.sa);ae(e,"RID","rpc"),ae(e,"SID",t.I),ae(e,"CI",t.L?"0":"1"),ae(e,"AID",t.T),ae(e,"TYPE","xmlhttp"),bu(t,e),t.o&&t.s&&sg(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=_h(Qn(e)),n.s=null,n.P=!0,_1(n,t)}$.cb=function(){this.v!=null&&(this.v=null,Th(this),ag(this),ft(19))};function Ec(t){t.v!=null&&(V.clearTimeout(t.v),t.v=null)}function H1(t,e){var n=null;if(t.g==e){Ec(t),ug(t),t.g=null;var r=2}else if(up(t.h,e))n=e.D,D1(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=gh(),Qe(r,new g1(r,n)),Sh(t)}else j1(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&TO(t,e)||r==2&&ag(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:gi(t,5);break;case 4:gi(t,10);break;case 3:gi(t,6);break;default:gi(t,2)}}}function W1(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function gi(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=it(t.kb,t);n||(n=new Si("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||_c(n,"https"),_h(n)),vO(n.toString(),r)}else ft(2);t.G=0,t.l&&t.l.va(e),G1(t),B1(t)}$.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function G1(t){if(t.G=0,t.la=[],t.l){const e=P1(t.h);(e.length!=0||t.i.length!=0)&&(Qv(t.la,e),Qv(t.la,t.i),t.h.i.length=0,jm(t.i),t.i.length=0),t.l.ua()}}function K1(t,e,n){var r=n instanceof Si?Qn(n):new Si(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Ic(r,r.m);else{var i=V.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Si(null,void 0);r&&_c(s,r),e&&(s.g=e),i&&Ic(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&ae(r,n,e),ae(r,"VER",t.ma),bu(t,r),r}function Q1(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ge(new ku({jb:!0})):new ge(t.ra),e.Ka(t.H),e}function Y1(){}$=Y1.prototype;$.xa=function(){};$.wa=function(){};$.va=function(){};$.ua=function(){};$.Ra=function(){};function Tc(){if(Hs&&!(10<=Number(VP)))throw Error("Environmental error: no available transport.")}Tc.prototype.g=function(t,e){return new Lt(t,e)};function Lt(t,e){Fe.call(this),this.g=new V1(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!yc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!yc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new fo(this)}Je(Lt,Fe);Lt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ft(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=K1(t,null,t.V),Sh(t)};Lt.prototype.close=function(){og(this.g)};Lt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ym(t),t=n);e.i.push(new pO(e.ab++,t)),e.G==3&&Sh(e)};Lt.prototype.M=function(){this.g.l=null,delete this.j,og(this.g),delete this.g,Lt.X.M.call(this)};function X1(t){eg.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Je(X1,eg);function J1(){tg.call(this),this.status=1}Je(J1,tg);function fo(t){this.g=t}Je(fo,Y1);fo.prototype.xa=function(){Qe(this.g,"a")};fo.prototype.wa=function(t){Qe(this.g,new X1(t))};fo.prototype.va=function(t){Qe(this.g,new J1)};fo.prototype.ua=function(){Qe(this.g,"b")};Tc.prototype.createWebChannel=Tc.prototype.g;Lt.prototype.send=Lt.prototype.u;Lt.prototype.open=Lt.prototype.m;Lt.prototype.close=Lt.prototype.close;yh.NO_ERROR=0;yh.TIMEOUT=8;yh.HTTP_ERROR=6;y1.COMPLETE="complete";v1.EventType=Eu;Eu.OPEN="a";Eu.CLOSE="b";Eu.ERROR="c";Eu.MESSAGE="d";Fe.prototype.listen=Fe.prototype.N;ge.prototype.listenOnce=ge.prototype.O;ge.prototype.getLastError=ge.prototype.Oa;ge.prototype.getLastErrorCode=ge.prototype.Ea;ge.prototype.getStatus=ge.prototype.aa;ge.prototype.getResponseJson=ge.prototype.Sa;ge.prototype.getResponseText=ge.prototype.fa;ge.prototype.send=ge.prototype.da;ge.prototype.setWithCredentials=ge.prototype.Ka;var SO=function(){return new Tc},kO=function(){return gh()},Fd=yh,CO=y1,bO=Qi,aw={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},RO=ku,ll=v1,AO=ge;const uw="@firebase/firestore";/**
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
 */class Oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Oe.UNAUTHENTICATED=new Oe(null),Oe.GOOGLE_CREDENTIALS=new Oe("google-credentials-uid"),Oe.FIRST_PARTY=new Oe("first-party-uid"),Oe.MOCK_USER=new Oe("mock-user");/**
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
 */let po="9.12.1";/**
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
 */const Dr=new Jc("@firebase/firestore");function lp(){return Dr.logLevel}function NO(t){Dr.setLogLevel(t)}function S(t,...e){if(Dr.logLevel<=Q.DEBUG){const n=e.map(lg);Dr.debug(`Firestore (${po}): ${t}`,...n)}}function Ee(t,...e){if(Dr.logLevel<=Q.ERROR){const n=e.map(lg);Dr.error(`Firestore (${po}): ${t}`,...n)}}function Ws(t,...e){if(Dr.logLevel<=Q.WARN){const n=e.map(lg);Dr.warn(`Firestore (${po}): ${t}`,...n)}}function lg(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function O(t="Unexpected state"){const e=`FIRESTORE (${po}) INTERNAL ASSERTION FAILED: `+t;throw Ee(e),new Error(e)}function F(t,e){t||O()}function xO(t,e){t||O()}function x(t,e){return t}/**
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
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends rt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Me{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Z1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Oe.UNAUTHENTICATED))}shutdown(){}}class PO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class OO{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Me;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Me,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{S("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(S("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Me)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(S("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(F(typeof r.accessToken=="string"),new Z1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string"),new Oe(e)}}class LO{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(F(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class MO{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new LO(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $O{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class UO{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&S("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,S("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{S("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):S("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(F(typeof n.token=="string"),this.A=n.token,new $O(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function FO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class eT{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=FO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function B(t,e){return t<e?-1:t>e?1:0}function Gs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function tT(t){return t+"\0"}/**
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
 */class le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new T(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new T(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new T(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new T(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return le.fromMillis(Date.now())}static fromDate(e){return le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?B(this.nanoseconds,e.nanoseconds):B(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new le(0,0))}static max(){return new U(new le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ya{constructor(e,n,r){n===void 0?n=0:n>e.length&&O(),r===void 0?r=e.length-n:r>e.length-n&&O(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ya.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ya?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class K extends Ya{construct(e,n,r){return new K(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new T(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new K(n)}static emptyPath(){return new K([])}}const VO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Te extends Ya{construct(e,n,r){return new Te(e,n,r)}static isValidIdentifier(e){return VO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Te.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Te(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new T(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new T(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new T(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new T(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Te(n)}static emptyPath(){return new Te([])}}/**
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
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(K.fromString(e))}static fromName(e){return new N(K.fromString(e).popFirst(5))}static empty(){return new N(K.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&K.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return K.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new K(e.slice()))}}/**
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
 */class nT{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function cp(t){return t.fields.find(e=>e.kind===2)}function si(t){return t.fields.filter(e=>e.kind!==2)}nT.UNKNOWN_ID=-1;class BO{constructor(e,n){this.fieldPath=e,this.kind=n}}class Sc{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Sc(0,Mt.min())}}function rT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=U.fromTimestamp(r===1e9?new le(n+1,0):new le(n,r));return new Mt(i,N.empty(),e)}function iT(t){return new Mt(t.readTime,t.key,-1)}class Mt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mt(U.min(),N.empty(),-1)}static max(){return new Mt(U.max(),N.empty(),-1)}}function cg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=N.comparator(t.documentKey,e.documentKey),n!==0?n:B(t.largestBatchId,e.largestBatchId))}/**
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
 */const sT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Gr(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==sT)throw t;S("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,r)=>{n(e)})}static reject(e){return new w((n,r)=>{r(e)})}static waitFor(e){return new w((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=w.resolve(!1);for(const r of e)n=n.next(i=>i?w.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new w((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new w((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class kh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.P=new Me,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{n.error?this.P.reject(new fa(e,n.error)):this.P.resolve()},this.transaction.onerror=r=>{const i=hg(r.target.error);this.P.reject(new fa(e,i))}}static open(e,n,r,i){try{return new kh(n,e.transaction(i,r))}catch(s){throw new fa(n,s)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(S("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new jO(n)}}class tn{constructor(e,n,r){this.name=e,this.version=n,this.S=r,tn.D(fe())===12.2&&Ee("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return S("SimpleDb","Removing database:",e),oi(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!$a())return!1;if(tn.N())return!0;const e=fe(),n=tn.D(e),r=0<n&&n<10,i=tn.k(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static k(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async F(e){return this.db||(S("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new fa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new T(_.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new T(_.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new fa(e,o))},i.onupgradeneeded=s=>{S("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.$(o,i.transaction,s.oldVersion,this.version).next(()=>{S("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=kh.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(l=>(a.V(),l)).catch(l=>(a.abort(l),w.reject(l))).toPromise();return u.catch(()=>{}),await a.v,u}catch(a){const u=a,l=u.name!=="FirebaseError"&&o<3;if(S("SimpleDb","Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class zO{constructor(e){this.U=e,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(e){this.U=e}done(){this.q=!0}j(e){this.K=e}delete(){return oi(this.U.delete())}}class fa extends T{constructor(e,n){super(_.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Kr(t){return t.name==="IndexedDbTransactionError"}class jO{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(S("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(S("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),oi(r)}add(e){return S("SimpleDb","ADD",this.store.name,e,e),oi(this.store.add(e))}get(e){return oi(this.store.get(e)).next(n=>(n===void 0&&(n=null),S("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return S("SimpleDb","DELETE",this.store.name,e),oi(this.store.delete(e))}count(){return S("SimpleDb","COUNT",this.store.name),oi(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.H(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new w((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}J(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new w((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}Y(e,n){S("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.X=!1;const i=this.cursor(r);return this.H(i,(s,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.H(i,n)}tt(e){const n=this.cursor({});return new w((r,i)=>{n.onerror=s=>{const o=hg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}H(e,n){const r=[];return new w((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new zO(a),l=n(a.primaryKey,a.value,u);if(l instanceof w){const c=l.catch(h=>(u.done(),w.reject(h)));r.push(c)}u.isDone?i():u.G===null?a.continue():a.continue(u.G)}}).next(()=>w.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function oi(t){return new w((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=hg(r.target.error);n(i)}})}let lw=!1;function hg(t){const e=tn.D(fe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new T("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return lw||(lw=!0,setTimeout(()=>{throw r},0)),r}}return t}class qO{constructor(e,n){this.asyncQueue=e,this.et=n,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){S("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{S("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(n){Kr(n)?S("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Gr(n)}await this.nt(6e4)})}}class HO{constructor(e,n){this.localStore=e,this.persistence=n}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.it(n,e))}it(e,n){const r=new Set;let i=n,s=!0;return w.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return S("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}rt(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(i,s)).next(a=>(S("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ot(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=iT(s);cg(o,r)>0&&(r=o)}),new Mt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Et{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function cw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function aT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Et.at=-1;class ye{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cl(this.root,e,this.comparator,!1)}getReverseIterator(){return new cl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cl(this.root,e,this.comparator,!0)}}class cl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:qe.RED,this.left=i!=null?i:qe.EMPTY,this.right=s!=null?s:qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new qe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,r,i){return this}insert(t,e,n){return new qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ee{constructor(e){this.comparator=e,this.data=new ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new hw(this.data.getIterator())}getIteratorFrom(e){return new hw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ee)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ee(this.comparator);return n.data=e,n}}class hw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function rs(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Pt{constructor(e){this.fields=e,e.sort(Te.comparator)}static empty(){return new Pt([])}unionWith(e){let n=new ee(Te.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */function WO(){return typeof atob<"u"}/**
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
 */class Ae{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ae(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ae(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return B(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ae.EMPTY_BYTE_STRING=new Ae("");const GO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pr(t){if(F(!!t),typeof t=="string"){let e=0;const n=GO.exec(t);if(F(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(t.seconds),nanos:me(t.nanos)}}function me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Oi(t){return typeof t=="string"?Ae.fromBase64String(t):Ae.fromUint8Array(t)}/**
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
 */function dg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function uT(t){const e=t.mapValue.fields.__previous_value__;return dg(e)?uT(e):e}function Xa(t){const e=Pr(t.mapValue.fields.__local_write_time__.timestampValue);return new le(e.seconds,e.nanos)}/**
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
 */class KO{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Or{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Or("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Or&&e.projectId===this.projectId&&e.database===this.database}}function Ru(t){return t==null}function Ja(t){return t===0&&1/t==-1/0}function lT(t){return typeof t=="number"&&Number.isInteger(t)&&!Ja(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const yr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Pl={nullValue:"NULL_VALUE"};function Li(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?dg(t)?4:cT(t)?9007199254740991:10:O()}function Rn(t,e){if(t===e)return!0;const n=Li(t);if(n!==Li(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xa(t).isEqual(Xa(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Pr(r.timestampValue),o=Pr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Oi(r.bytesValue).isEqual(Oi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return me(r.geoPointValue.latitude)===me(i.geoPointValue.latitude)&&me(r.geoPointValue.longitude)===me(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return me(r.integerValue)===me(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=me(r.doubleValue),o=me(i.doubleValue);return s===o?Ja(s)===Ja(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Gs(t.arrayValue.values||[],e.arrayValue.values||[],Rn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(cw(s)!==cw(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Rn(s[a],o[a])))return!1;return!0}(t,e);default:return O()}}function Za(t,e){return(t.values||[]).find(n=>Rn(n,e))!==void 0}function Lr(t,e){if(t===e)return 0;const n=Li(t),r=Li(e);if(n!==r)return B(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return B(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=me(i.integerValue||i.doubleValue),a=me(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return dw(t.timestampValue,e.timestampValue);case 4:return dw(Xa(t),Xa(e));case 5:return B(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Oi(i),a=Oi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=B(o[u],a[u]);if(l!==0)return l}return B(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=B(me(i.latitude),me(s.latitude));return o!==0?o:B(me(i.longitude),me(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=Lr(o[u],a[u]);if(l)return l}return B(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===yr.mapValue&&s===yr.mapValue)return 0;if(i===yr.mapValue)return 1;if(s===yr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=B(a[c],l[c]);if(h!==0)return h;const d=Lr(o[a[c]],u[l[c]]);if(d!==0)return d}return B(a.length,l.length)}(t.mapValue,e.mapValue);default:throw O()}}function dw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return B(t,e);const n=Pr(t),r=Pr(e),i=B(n.seconds,r.seconds);return i!==0?i:B(n.nanos,r.nanos)}function Ds(t){return hp(t)}function hp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Pr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Oi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,N.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=hp(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${hp(r.fields[a])}`;return s+"}"}(t.mapValue):O();var e,n}function Mi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function dp(t){return!!t&&"integerValue"in t}function eu(t){return!!t&&"arrayValue"in t}function fw(t){return!!t&&"nullValue"in t}function pw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ol(t){return!!t&&"mapValue"in t}function pa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Yi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=pa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=pa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function cT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function QO(t){return"nullValue"in t?Pl:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Mi(Or.empty(),N.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:O()}function YO(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Mi(Or.empty(),N.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?yr:O()}function mw(t,e){const n=Lr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function gw(t,e){const n=Lr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class He{constructor(e){this.value=e}static empty(){return new He({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ol(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=pa(n)}setAll(e){let n=Te.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=pa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ol(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ol(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Yi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new He(pa(this.value))}}function hT(t){const e=[];return Yi(t.fields,(n,r)=>{const i=new Te([n]);if(Ol(r)){const s=hT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Pt(e)}/**
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
 */class te{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new te(e,0,U.min(),U.min(),He.empty(),0)}static newFoundDocument(e,n,r){return new te(e,1,n,U.min(),r,0)}static newNoDocument(e,n){return new te(e,2,n,U.min(),He.empty(),0)}static newUnknownDocument(e,n){return new te(e,3,n,U.min(),He.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=He.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=He.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new te(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class XO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function yw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new XO(t,e,n,r,i,s,o)}function $i(t){const e=x(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Ds(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ru(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ds(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ds(r)).join(",")),e.ht=n}return e.ht}function JO(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Ds(r.value)}`;var r}).join(", ")}]`),Ru(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ds(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ds(n)).join(",")),`Target(${e})`}function Au(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!oL(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Rn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Iw(t.startAt,e.startAt)&&Iw(t.endAt,e.endAt)}function kc(t){return N.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Cc(t,e){return t.filters.filter(n=>n instanceof We&&n.field.isEqual(e))}function vw(t,e,n){let r=Pl,i=!0;for(const s of Cc(t,e)){let o=Pl,a=!0;switch(s.op){case"<":case"<=":o=QO(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Pl}mw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];mw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function ww(t,e,n){let r=yr,i=!0;for(const s of Cc(t,e)){let o=yr,a=!0;switch(s.op){case">=":case">":o=YO(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=yr}gw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];gw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}class We extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new ZO(e,n,r):n==="array-contains"?new nL(e,r):n==="in"?new rL(e,r):n==="not-in"?new iL(e,r):n==="array-contains-any"?new sL(e,r):new We(e,n,r)}static lt(e,n,r){return n==="in"?new eL(e,r):new tL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Lr(n,this.value)):n!==null&&Li(this.value)===Li(n)&&this.ft(Lr(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return O()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ZO extends We{constructor(e,n,r){super(e,n,r),this.key=N.fromName(r.referenceValue)}matches(e){const n=N.comparator(e.key,this.key);return this.ft(n)}}class eL extends We{constructor(e,n){super(e,"in",n),this.keys=dT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class tL extends We{constructor(e,n){super(e,"not-in",n),this.keys=dT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function dT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>N.fromName(r.referenceValue))}class nL extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return eu(n)&&Za(n.arrayValue,this.value)}}class rL extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Za(this.value.arrayValue,n)}}class iL extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Za(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Za(this.value.arrayValue,n)}}class sL extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!eu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Za(this.value.arrayValue,r))}}class Mr{constructor(e,n){this.position=e,this.inclusive=n}}class Ps{constructor(e,n="asc"){this.field=e,this.dir=n}}function oL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function _w(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=N.comparator(N.fromName(o.referenceValue),n.key):r=Lr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Iw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class er{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this._t=null,this.wt=null,this.startAt,this.endAt}}function fT(t,e,n,r,i,s,o,a){return new er(t,e,n,r,i,s,o,a)}function mo(t){return new er(t)}function Ew(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function pg(t){for(const e of t.filters)if(e.dt())return e.field;return null}function mg(t){return t.collectionGroup!==null}function Ks(t){const e=x(t);if(e._t===null){e._t=[];const n=pg(e),r=fg(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new Ps(n)),e._t.push(new Ps(Te.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Ps(Te.keyField(),s))}}}return e._t}function bt(t){const e=x(t);if(!e.wt)if(e.limitType==="F")e.wt=yw(e.path,e.collectionGroup,Ks(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ks(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ps(s.field,o))}const r=e.endAt?new Mr(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Mr(e.startAt.position,e.startAt.inclusive):null;e.wt=yw(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function bc(t,e,n){return new er(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nu(t,e){return Au(bt(t),bt(e))&&t.limitType===e.limitType}function pT(t){return`${$i(bt(t))}|lt:${t.limitType}`}function fp(t){return`Query(target=${JO(bt(t))}; limitType=${t.limitType})`}function gg(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):N.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=_w(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ks(n),r)||n.endAt&&!function(i,s,o){const a=_w(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ks(n),r))}(t,e)}function mT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function gT(t){return(e,n)=>{let r=!1;for(const i of Ks(t)){const s=aL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function aL(t,e,n){const r=t.field.isKeyField()?N.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Lr(a,u):O()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return O()}}/**
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
 */function yT(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ja(e)?"-0":e}}function vT(t){return{integerValue:""+t}}function wT(t,e){return lT(e)?vT(e):yT(t,e)}/**
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
 */class Ch{constructor(){this._=void 0}}function uL(t,e,n){return t instanceof Qs?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Ui?IT(t,e):t instanceof Fi?ET(t,e):function(r,i){const s=_T(r,i),o=Tw(s)+Tw(r.yt);return dp(s)&&dp(r.yt)?vT(o):yT(r.It,o)}(t,e)}function lL(t,e,n){return t instanceof Ui?IT(t,e):t instanceof Fi?ET(t,e):n}function _T(t,e){return t instanceof Ys?dp(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Qs extends Ch{}class Ui extends Ch{constructor(e){super(),this.elements=e}}function IT(t,e){const n=TT(e);for(const r of t.elements)n.some(i=>Rn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Fi extends Ch{constructor(e){super(),this.elements=e}}function ET(t,e){let n=TT(e);for(const r of t.elements)n=n.filter(i=>!Rn(i,r));return{arrayValue:{values:n}}}class Ys extends Ch{constructor(e,n){super(),this.It=e,this.yt=n}}function Tw(t){return me(t.integerValue||t.doubleValue)}function TT(t){return eu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class xu{constructor(e,n){this.field=e,this.transform=n}}function cL(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ui&&r instanceof Ui||n instanceof Fi&&r instanceof Fi?Gs(n.elements,r.elements,Rn):n instanceof Ys&&r instanceof Ys?Rn(n.yt,r.yt):n instanceof Qs&&r instanceof Qs}(t.transform,e.transform)}class hL{constructor(e,n){this.version=e,this.transformResults=n}}class ue{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ue}static exists(e){return new ue(void 0,e)}static updateTime(e){return new ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ll(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class bh{}function ST(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new yo(t.key,ue.none()):new go(t.key,t.data,ue.none());{const n=t.data,r=He.empty();let i=new ee(Te.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new tr(t.key,r,new Pt(i.toArray()),ue.none())}}function dL(t,e,n){t instanceof go?function(r,i,s){const o=r.value.clone(),a=kw(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof tr?function(r,i,s){if(!Ll(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=kw(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(kT(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ma(t,e,n,r){return t instanceof go?function(i,s,o,a){if(!Ll(i.precondition,s))return o;const u=i.value.clone(),l=Cw(i.fieldTransforms,a,s);return u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof tr?function(i,s,o,a){if(!Ll(i.precondition,s))return o;const u=Cw(i.fieldTransforms,a,s),l=s.data;return l.setAll(kT(i)),l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Ll(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function fL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=_T(r.transform,i||null);s!=null&&(n===null&&(n=He.empty()),n.set(r.field,s))}return n||null}function Sw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Gs(n,r,(i,s)=>cL(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class go extends bh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class tr extends bh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function kT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function kw(t,e,n){const r=new Map;F(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,lL(o,a,n[i]))}return r}function Cw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,uL(s,o,e))}return r}class yo extends bh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yg extends bh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pL{constructor(e){this.count=e}}/**
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
 */var Se,G;function CT(t){switch(t){default:return O();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function bT(t){if(t===void 0)return Ee("GRPC error has no .code"),_.UNKNOWN;switch(t){case Se.OK:return _.OK;case Se.CANCELLED:return _.CANCELLED;case Se.UNKNOWN:return _.UNKNOWN;case Se.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case Se.INTERNAL:return _.INTERNAL;case Se.UNAVAILABLE:return _.UNAVAILABLE;case Se.UNAUTHENTICATED:return _.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case Se.NOT_FOUND:return _.NOT_FOUND;case Se.ALREADY_EXISTS:return _.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return _.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case Se.ABORTED:return _.ABORTED;case Se.OUT_OF_RANGE:return _.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return _.UNIMPLEMENTED;case Se.DATA_LOSS:return _.DATA_LOSS;default:return O()}}(G=Se||(Se={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Qr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return aT(this.inner)}size(){return this.innerSize}}/**
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
 */const mL=new ye(N.comparator);function Tt(){return mL}const RT=new ye(N.comparator);function Jo(...t){let e=RT;for(const n of t)e=e.insert(n.key,n);return e}function AT(t){let e=RT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function _n(){return ga()}function NT(){return ga()}function ga(){return new Qr(t=>t.toString(),(t,e)=>t.isEqual(e))}const gL=new ye(N.comparator),yL=new ee(N.comparator);function z(...t){let e=yL;for(const n of t)e=e.add(n);return e}const vL=new ee(B);function Rh(){return vL}/**
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
 */class Du{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Pu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Du(U.min(),i,Rh(),Tt(),z())}}class Pu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Pu(r,n,z(),z(),z())}}/**
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
 */class Ml{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class xT{constructor(e,n){this.targetId=e,this.At=n}}class DT{constructor(e,n,r=Ae.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class bw{constructor(){this.Rt=0,this.bt=Aw(),this.Pt=Ae.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=z(),n=z(),r=z();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:O()}}),new Pu(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=Aw()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class wL{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Tt(),this.qt=Rw(),this.Kt=new ee(B)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:O()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(kc(s))if(r===0){const o=new N(s.path);this.jt(n,o,te.newNoDocument(o,U.min()))}else F(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&kc(a.target)){const u=new N(a.target.path);this.Ut.get(u)!==null||this.ee(o,u)||this.jt(o,u,te.newNoDocument(u,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=z();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Xt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Du(e,n,this.Kt,this.Ut,r);return this.Ut=Tt(),this.qt=Rw(),this.Kt=new ee(B),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new bw,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new ee(B),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||S("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new bw),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Rw(){return new ye(N.comparator)}function Aw(){return new ye(N.comparator)}/**
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
 */const _L=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),IL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class EL{constructor(e,n){this.databaseId=e,this.gt=n}}function tu(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function PT(t,e){return t.gt?e.toBase64():e.toUint8Array()}function TL(t,e){return tu(t,e.toTimestamp())}function $e(t){return F(!!t),U.fromTimestamp(function(e){const n=Pr(e);return new le(n.seconds,n.nanos)}(t))}function vg(t,e){return function(n){return new K(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function OT(t){const e=K.fromString(t);return F(zT(e)),e}function nu(t,e){return vg(t.databaseId,e.path)}function Sn(t,e){const n=OT(e);if(n.get(1)!==t.databaseId.projectId)throw new T(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new N(MT(n))}function pp(t,e){return vg(t.databaseId,e)}function LT(t){const e=OT(t);return e.length===4?K.emptyPath():MT(e)}function ru(t){return new K(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function MT(t){return F(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Nw(t,e,n){return{name:nu(t,e),fields:n.value.mapValue.fields}}function $T(t,e,n){const r=Sn(t,e.name),i=$e(e.updateTime),s=new He({mapValue:{fields:e.fields}}),o=te.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function SL(t,e){return"found"in e?function(n,r){F(!!r.found),r.found.name,r.found.updateTime;const i=Sn(n,r.found.name),s=$e(r.found.updateTime),o=new He({mapValue:{fields:r.found.fields}});return te.newFoundDocument(i,s,o)}(t,e):"missing"in e?function(n,r){F(!!r.missing),F(!!r.readTime);const i=Sn(n,r.missing),s=$e(r.readTime);return te.newNoDocument(i,s)}(t,e):O()}function kL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:O()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.gt?(F(l===void 0||typeof l=="string"),Ae.fromBase64String(l||"")):(F(l===void 0||l instanceof Uint8Array),Ae.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?_.UNKNOWN:bT(u.code);return new T(l,u.message||"")}(o);n=new DT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Sn(t,r.document.name),s=$e(r.document.updateTime),o=new He({mapValue:{fields:r.document.fields}}),a=te.newFoundDocument(i,s,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Ml(u,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Sn(t,r.document),s=r.readTime?$e(r.readTime):U.min(),o=te.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ml([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Sn(t,r.document),s=r.removedTargetIds||[];n=new Ml([],s,i,null)}else{if(!("filter"in e))return O();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new pL(i),o=r.targetId;n=new xT(o,s)}}return n}function iu(t,e){let n;if(e instanceof go)n={update:Nw(t,e.key,e.value)};else if(e instanceof yo)n={delete:nu(t,e.key)};else if(e instanceof tr)n={update:Nw(t,e.key,e.data),updateMask:DL(e.fieldMask)};else{if(!(e instanceof yg))return O();n={verify:nu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Qs)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ui)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Fi)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ys)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw O()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:TL(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O()}(t,e.precondition)),n}function mp(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?ue.updateTime($e(i.updateTime)):i.exists!==void 0?ue.exists(i.exists):ue.none()}(e.currentDocument):ue.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)F(o.setToServerValue==="REQUEST_TIME"),a=new Qs;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new Ui(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new Fi(l)}else"increment"in o?a=new Ys(s,o.increment):O();const u=Te.fromServerFormat(o.fieldPath);return new xu(u,a)}(t,i)):[];if(e.update){e.update.name;const i=Sn(t,e.update.name),s=new He({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new Pt(u.map(l=>Te.fromServerFormat(l)))}(e.updateMask);return new tr(i,s,o,n,r)}return new go(i,s,n,r)}if(e.delete){const i=Sn(t,e.delete);return new yo(i,n)}if(e.verify){const i=Sn(t,e.verify);return new yg(i,n)}return O()}function CL(t,e){return t&&t.length>0?(F(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?$e(r.updateTime):$e(i);return s.isEqual(U.min())&&(s=$e(i)),new hL(s,r.transformResults||[])}(n,e))):[]}function UT(t,e){return{documents:[pp(t,e.path)]}}function FT(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=pp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=pp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length===0)return;const l=u.map(c=>function(h){if(h.op==="=="){if(pw(h.value))return{unaryFilter:{field:is(h.field),op:"IS_NAN"}};if(fw(h.value))return{unaryFilter:{field:is(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(pw(h.value))return{unaryFilter:{field:is(h.field),op:"IS_NOT_NAN"}};if(fw(h.value))return{unaryFilter:{field:is(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:is(h.field),op:AL(h.op),value:h.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:is(c.field),direction:RL(c.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(u,l){return u.gt||Ru(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function VT(t){let e=LT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){F(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=BT(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ps(Es(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Ru(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(c){const h=!!c.before,d=c.values||[];return new Mr(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const h=!c.before,d=c.values||[];return new Mr(d,h)}(n.endAt)),fT(e,i,o,s,a,"F",u,l)}function bL(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return O()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function BT(t){return t?t.unaryFilter!==void 0?[xL(t)]:t.fieldFilter!==void 0?[NL(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>BT(e)).reduce((e,n)=>e.concat(n)):O():[]}function RL(t){return _L[t]}function AL(t){return IL[t]}function is(t){return{fieldPath:t.canonicalString()}}function Es(t){return Te.fromServerFormat(t.fieldPath)}function NL(t){return We.create(Es(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(t.fieldFilter.op),t.fieldFilter.value)}function xL(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Es(t.unaryFilter.field);return We.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Es(t.unaryFilter.field);return We.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Es(t.unaryFilter.field);return We.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Es(t.unaryFilter.field);return We.create(i,"!=",{nullValue:"NULL_VALUE"});default:return O()}}function DL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function zT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function mt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=xw(e)),e=PL(t.get(n),e);return xw(e)}function PL(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function xw(t){return t+""}function In(t){const e=t.length;if(F(e>=2),e===2)return F(t.charAt(0)===""&&t.charAt(1)===""),K.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&O(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:O()}s=o+2}return new K(r)}/**
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
 */const Dw=["userId","batchId"];/**
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
 */function $l(t,e){return[t,mt(e)]}function jT(t,e,n){return[t,mt(e),n]}const OL={},LL=["prefixPath","collectionGroup","readTime","documentId"],ML=["prefixPath","collectionGroup","documentId"],$L=["collectionGroup","readTime","prefixPath","documentId"],UL=["canonicalId","targetId"],FL=["targetId","path"],VL=["path","targetId"],BL=["collectionId","parent"],zL=["indexId","uid"],jL=["uid","sequenceNumber"],qL=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],HL=["indexId","uid","orderedDocumentKey"],WL=["userId","collectionPath","documentId"],GL=["userId","collectionPath","largestBatchId"],KL=["userId","collectionGroup","largestBatchId"],qT=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],QL=[...qT,"documentOverlays"],HT=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],WT=HT,YL=[...WT,"indexConfiguration","indexState","indexEntries"];/**
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
 */class gp extends oT{constructor(e,n){super(),this.ie=e,this.currentSequenceNumber=n}}function Be(t,e){const n=x(t);return tn.M(n.ie,e)}/**
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
 */class wg{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&dL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ma(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ma(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=NT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=ST(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),z())}isEqual(e){return this.batchId===e.batchId&&Gs(this.mutations,e.mutations,(n,r)=>Sw(n,r))&&Gs(this.baseMutations,e.baseMutations,(n,r)=>Sw(n,r))}}class _g{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){F(e.mutations.length===r.length);let i=gL;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new _g(e,n,r,i)}}/**
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
 */class Ig{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class br{constructor(e,n,r,i,s=U.min(),o=U.min(),a=Ae.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new br(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class GT{constructor(e){this.re=e}}function XL(t,e){let n;if(e.document)n=$T(t.re,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=N.fromSegments(e.noDocument.path),i=Bi(e.noDocument.readTime);n=te.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return O();{const r=N.fromSegments(e.unknownDocument.path),i=Bi(e.unknownDocument.version);n=te.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new le(r[0],r[1]);return U.fromTimestamp(i)}(e.readTime)),n}function Pw(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Rc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:nu(i,s.key),fields:s.data.value.mapValue.fields,updateTime:tu(i,s.version.toTimestamp())}}(t.re,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Vi(e.version)};else{if(!e.isUnknownDocument())return O();r.unknownDocument={path:n.path.toArray(),version:Vi(e.version)}}return r}function Rc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Vi(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Bi(t){const e=new le(t.seconds,t.nanoseconds);return U.fromTimestamp(e)}function ai(t,e){const n=(e.baseMutations||[]).map(s=>mp(t.re,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>mp(t.re,s)),i=le.fromMillis(e.localWriteTimeMs);return new wg(e.batchId,i,n,r)}function Zo(t){const e=Bi(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Bi(t.lastLimboFreeSnapshotVersion):U.min();let r;var i;return t.query.documents!==void 0?(F((i=t.query).documents.length===1),r=bt(mo(LT(i.documents[0])))):r=function(s){return bt(VT(s))}(t.query),new br(r,t.targetId,0,t.lastListenSequenceNumber,e,n,Ae.fromBase64String(t.resumeToken))}function KT(t,e){const n=Vi(e.snapshotVersion),r=Vi(e.lastLimboFreeSnapshotVersion);let i;i=kc(e.target)?UT(t.re,e.target):FT(t.re,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:$i(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Eg(t){const e=VT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bc(e,e.limit,"L"):e}function Vd(t,e){return new Ig(e.largestBatchId,mp(t.re,e.overlayMutation))}function Ow(t,e){const n=e.path.lastSegment();return[t,mt(e.path.popLast()),n]}function Lw(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Vi(r.readTime),documentKey:mt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class JL{getBundleMetadata(e,n){return Mw(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Bi(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return Mw(e).put({bundleId:(r=n).id,createTime:Vi($e(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return $w(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:Eg(i.bundledQuery),readTime:Bi(i.readTime)};var i})}saveNamedQuery(e,n){return $w(e).put(function(r){return{name:r.name,readTime:Vi($e(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function Mw(t){return Be(t,"bundles")}function $w(t){return Be(t,"namedQueries")}/**
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
 */class Ah{constructor(e,n){this.It=e,this.userId=n}static oe(e,n){const r=n.uid||"";return new Ah(e,r)}getOverlay(e,n){return $o(e).get(Ow(this.userId,n)).next(r=>r?Vd(this.It,r):null)}getOverlays(e,n){const r=_n();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Ig(n,o);i.push(this.ue(e,a))}),w.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(mt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push($o(e).Y("collectionPathOverlayIndex",a))}),w.waitFor(s)}getOverlaysForCollection(e,n,r){const i=_n(),s=mt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return $o(e).W("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const l=Vd(this.It,u);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=_n();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return $o(e).Z({index:"collectionGroupOverlayIndex",range:a},(u,l,c)=>{const h=Vd(this.It,l);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}ue(e,n){return $o(e).put(function(r,i,s){const[o,a,u]=Ow(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:u,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:iu(r.re,s.mutation)}}(this.It,this.userId,n))}}function $o(t){return Be(t,"documentOverlays")}/**
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
 */class ui{constructor(){}ce(e,n){this.ae(e,n),n.he()}ae(e,n){if("nullValue"in e)this.le(n,5);else if("booleanValue"in e)this.le(n,10),n.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(n,15),n.fe(me(e.integerValue));else if("doubleValue"in e){const r=me(e.doubleValue);isNaN(r)?this.le(n,13):(this.le(n,15),Ja(r)?n.fe(0):n.fe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.le(n,20),typeof r=="string"?n.de(r):(n.de(`${r.seconds||""}`),n.fe(r.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,n),this.we(n);else if("bytesValue"in e)this.le(n,30),n.me(Oi(e.bytesValue)),this.we(n);else if("referenceValue"in e)this.ge(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.le(n,45),n.fe(r.latitude||0),n.fe(r.longitude||0)}else"mapValue"in e?cT(e)?this.le(n,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,n),this.we(n)):"arrayValue"in e?(this.pe(e.arrayValue,n),this.we(n)):O()}_e(e,n){this.le(n,25),this.Ie(e,n)}Ie(e,n){n.de(e)}ye(e,n){const r=e.fields||{};this.le(n,55);for(const i of Object.keys(r))this._e(i,n),this.ae(r[i],n)}pe(e,n){const r=e.values||[];this.le(n,50);for(const i of r)this.ae(i,n)}ge(e,n){this.le(n,37),N.fromName(e).path.forEach(r=>{this.le(n,60),this.Ie(r,n)})}le(e,n){e.fe(n)}we(e){e.fe(2)}}ui.Te=new ui;function ZL(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function Uw(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=ZL(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class eM{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ae(r.value),r=n.next();this.Re()}be(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Pe(r.value),r=n.next();this.ve()}Ve(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ae(r);else if(r<2048)this.Ae(960|r>>>6),this.Ae(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ae(480|r>>>12),this.Ae(128|63&r>>>6),this.Ae(128|63&r);else{const i=n.codePointAt(0);this.Ae(240|i>>>18),this.Ae(128|63&i>>>12),this.Ae(128|63&i>>>6),this.Ae(128|63&i)}}this.Re()}Se(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Pe(r);else if(r<2048)this.Pe(960|r>>>6),this.Pe(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Pe(480|r>>>12),this.Pe(128|63&r>>>6),this.Pe(128|63&r);else{const i=n.codePointAt(0);this.Pe(240|i>>>18),this.Pe(128|63&i>>>12),this.Pe(128|63&i>>>6),this.Pe(128|63&i)}}this.ve()}De(e){const n=this.Ce(e),r=Uw(n);this.xe(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Ne(e){const n=this.Ce(e),r=Uw(n);this.xe(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}ke(){this.Oe(255),this.Oe(255)}Me(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.xe(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Ce(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ae(e){const n=255&e;n===0?(this.Oe(0),this.Oe(255)):n===255?(this.Oe(255),this.Oe(0)):this.Oe(n)}Pe(e){const n=255&e;n===0?(this.Fe(0),this.Fe(255)):n===255?(this.Fe(255),this.Fe(0)):this.Fe(e)}Re(){this.Oe(0),this.Oe(1)}ve(){this.Fe(0),this.Fe(1)}Oe(e){this.xe(1),this.buffer[this.position++]=e}Fe(e){this.xe(1),this.buffer[this.position++]=~e}xe(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class tM{constructor(e){this.Be=e}me(e){this.Be.Ee(e)}de(e){this.Be.Ve(e)}fe(e){this.Be.De(e)}he(){this.Be.ke()}}class nM{constructor(e){this.Be=e}me(e){this.Be.be(e)}de(e){this.Be.Se(e)}fe(e){this.Be.Ne(e)}he(){this.Be.Me()}}class Uo{constructor(){this.Be=new eM,this.Le=new tM(this.Be),this.Ue=new nM(this.Be)}seed(e){this.Be.seed(e)}qe(e){return e===0?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}/**
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
 */class li{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Ke(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new li(this.indexId,this.documentKey,this.arrayValue,r)}}function ei(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Fw(t.arrayValue,e.arrayValue),n!==0?n:(n=Fw(t.directionalValue,e.directionalValue),n!==0?n:N.comparator(t.documentKey,e.documentKey)))}function Fw(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class rM{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ge=e.orderBy,this.Qe=[];for(const n of e.filters){const r=n;r.dt()?this.je=r:this.Qe.push(r)}}We(e){const n=cp(e);if(n!==void 0&&!this.ze(n))return!1;const r=si(e);let i=0,s=0;for(;i<r.length&&this.ze(r[i]);++i);if(i===r.length)return!0;if(this.je!==void 0){const o=r[i];if(!this.He(this.je,o)||!this.Je(this.Ge[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Ge.length||!this.Je(this.Ge[s++],o))return!1}return!0}ze(e){for(const n of this.Qe)if(this.He(n,e))return!0;return!1}He(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}Je(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */class iM{constructor(){this.Ye=new Tg}addToCollectionParentIndex(e,n){return this.Ye.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(Mt.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(Mt.min())}updateCollectionGroup(e,n,r){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class Tg{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ee(K.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ee(K.comparator)).toArray()}}/**
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
 */const hl=new Uint8Array(0);class sM{constructor(e,n){this.user=e,this.databaseId=n,this.Xe=new Tg,this.Ze=new Qr(r=>$i(r),(r,i)=>Au(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Xe.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.Xe.add(n)});const s={collectionId:r,parent:mt(i)};return Vw(e).put(s)}return w.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[tT(n),""],!1,!0);return Vw(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(In(o.parent))}return r})}addFieldIndex(e,n){const r=dl(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Vo(e);return s.next(a=>{o.put(Lw(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=dl(e),i=Vo(e),s=Fo(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=Fo(e);let i=!0;const s=new Map;return w.forEach(this.tn(n),o=>this.en(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=z();const a=[];return w.forEach(s,(u,l)=>{var c;S("IndexedDbIndexManager",`Using index ${c=u,`id=${c.indexId}|cg=${c.collectionGroup}|f=${c.fields.map(g=>`${g.fieldPath}:${g.kind}`).join(",")}`} to execute ${$i(n)}`);const h=function(g,I){const k=cp(I);if(k===void 0)return null;for(const R of Cc(g,k.fieldPath))switch(R.op){case"array-contains-any":return R.value.arrayValue.values||[];case"array-contains":return[R.value]}return null}(l,u),d=function(g,I){const k=new Map;for(const R of si(I))for(const A of Cc(g,R.fieldPath))switch(A.op){case"==":case"in":k.set(R.fieldPath.canonicalString(),A.value);break;case"not-in":case"!=":return k.set(R.fieldPath.canonicalString(),A.value),Array.from(k.values())}return null}(l,u),p=function(g,I){const k=[];let R=!0;for(const A of si(I)){const D=A.kind===0?vw(g,A.fieldPath,g.startAt):ww(g,A.fieldPath,g.startAt);k.push(D.value),R&&(R=D.inclusive)}return new Mr(k,R)}(l,u),y=function(g,I){const k=[];let R=!0;for(const A of si(I)){const D=A.kind===0?ww(g,A.fieldPath,g.endAt):vw(g,A.fieldPath,g.endAt);k.push(D.value),R&&(R=D.inclusive)}return new Mr(k,R)}(l,u),v=this.nn(u,l,p),E=this.nn(u,l,y),m=this.sn(u,l,d),f=this.rn(u.indexId,h,v,p.inclusive,E,y.inclusive,m);return w.forEach(f,g=>r.J(g,n.limit).next(I=>{I.forEach(k=>{const R=N.fromSegments(k.documentKey);o.has(R)||(o=o.add(R),a.push(R))})}))}).next(()=>a)}return w.resolve(null)})}tn(e){let n=this.Ze.get(e);return n||(n=[e],this.Ze.set(e,n),n)}rn(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),l=u/(n!=null?n.length:1),c=[];for(let h=0;h<u;++h){const d=n?this.on(n[h/l]):hl,p=this.un(e,d,r[h%l],i),y=this.cn(e,d,s[h%l],o),v=a.map(E=>this.un(e,d,E,!0));c.push(...this.createRange(p,y,v))}return c}un(e,n,r,i){const s=new li(e,N.empty(),n,r);return i?s:s.Ke()}cn(e,n,r,i){const s=new li(e,N.empty(),n,r);return i?s.Ke():s}en(e,n){const r=new rM(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.We(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;return w.forEach(this.tn(n),i=>this.en(e,i).next(s=>{s?r!==0&&s.fields.length<function(o){let a=new ee(Te.comparator),u=!1;for(const l of o.filters){const c=l;c.field.isKeyField()||(c.op==="array-contains"||c.op==="array-contains-any"?u=!0:a=a.add(c.field))}for(const l of o.orderBy)l.field.isKeyField()||(a=a.add(l.field));return a.size+(u?1:0)}(i)&&(r=1):r=0})).next(()=>r)}an(e,n){const r=new Uo;for(const i of si(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.qe(i.kind);ui.Te.ce(s,o)}return r.$e()}on(e){const n=new Uo;return ui.Te.ce(e,n.qe(0)),n.$e()}hn(e,n){const r=new Uo;return ui.Te.ce(Mi(this.databaseId,n),r.qe(function(i){const s=si(i);return s.length===0?0:s[s.length-1].kind}(e))),r.$e()}sn(e,n,r){if(r===null)return[];let i=[];i.push(new Uo);let s=0;for(const o of si(e)){const a=r[s++];for(const u of i)if(this.ln(n,o.fieldPath)&&eu(a))i=this.fn(i,o,a);else{const l=u.qe(o.kind);ui.Te.ce(a,l)}}return this.dn(i)}nn(e,n,r){return this.sn(e,n,r.position)}dn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].$e();return n}fn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new Uo;u.seed(a.$e()),ui.Te.ce(o,u.qe(n.kind)),s.push(u)}return s}ln(e,n){return!!e.filters.find(r=>r instanceof We&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=dl(e),i=Vo(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return w.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(l,c){const h=c?new Sc(c.sequenceNumber,new Mt(Bi(c.readTime),new N(In(c.documentKey)),c.largestBatchId)):Sc.empty(),d=l.fields.map(([p,y])=>new BO(Te.fromServerFormat(p),y));return new nT(l.indexId,l.collectionGroup,d,h)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:B(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=dl(e),s=Vo(e);return this._n(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>w.forEach(a,u=>s.put(Lw(u.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return w.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?w.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),w.forEach(a,u=>this.wn(e,i,u).next(l=>{const c=this.mn(s,u);return l.isEqual(c)?w.resolve():this.gn(e,s,u,l,c)}))))})}yn(e,n,r,i){return Fo(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.hn(r,n.key),documentKey:n.key.path.toArray()})}pn(e,n,r,i){return Fo(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.hn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=Fo(e);let s=new ee(ei);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.hn(r,n)])},(o,a)=>{s=s.add(new li(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}mn(e,n){let r=new ee(ei);const i=this.an(n,e);if(i==null)return r;const s=cp(n);if(s!=null){const o=e.data.field(s.fieldPath);if(eu(o))for(const a of o.arrayValue.values||[])r=r.add(new li(n.indexId,e.key,this.on(a),i))}else r=r.add(new li(n.indexId,e.key,hl,i));return r}gn(e,n,r,i,s){S("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,u,l,c,h){const d=a.getIterator(),p=u.getIterator();let y=rs(d),v=rs(p);for(;y||v;){let E=!1,m=!1;if(y&&v){const f=l(y,v);f<0?m=!0:f>0&&(E=!0)}else y!=null?m=!0:E=!0;E?(c(v),v=rs(p)):m?(h(y),y=rs(d)):(y=rs(d),v=rs(p))}}(i,s,ei,a=>{o.push(this.yn(e,n,r,a))},a=>{o.push(this.pn(e,n,r,a))}),w.waitFor(o)}_n(e){let n=1;return Vo(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>ei(o,a)).filter((o,a,u)=>!a||ei(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=ei(o,e),u=ei(o,n);if(a===0)i[0]=e.Ke();else if(a>0&&u<0)i.push(o),i.push(o.Ke());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2)s.push(IDBKeyRange.bound([i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,hl,[]],[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,hl,[]]));return s}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Bw)}getMinOffset(e,n){return w.mapArray(this.tn(n),r=>this.en(e,r).next(i=>i||O())).next(Bw)}}function Vw(t){return Be(t,"collectionParents")}function Fo(t){return Be(t,"indexEntries")}function dl(t){return Be(t,"indexConfiguration")}function Vo(t){return Be(t,"indexState")}function Bw(t){F(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;cg(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Mt(e.readTime,e.documentKey,n)}/**
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
 */const zw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class wt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new wt(e,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function QT(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.Z({range:o},(c,h,d)=>(a++,d.delete()));s.push(u.next(()=>{F(a===1)}));const l=[];for(const c of n.mutations){const h=jT(e,c.key.path,n.batchId);s.push(i.delete(h)),l.push(c.key)}return w.waitFor(s).next(()=>l)}function Ac(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw O();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */wt.DEFAULT_COLLECTION_PERCENTILE=10,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wt.DEFAULT=new wt(41943040,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wt.DISABLED=new wt(-1,0,0);class Nh{constructor(e,n,r,i){this.userId=e,this.It=n,this.indexManager=r,this.referenceDelegate=i,this.In={}}static oe(e,n,r,i){F(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Nh(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return or(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=as(e),o=or(e);return o.add({}).next(a=>{F(typeof a=="number");const u=new wg(a,n,r,i),l=function(d,p,y){const v=y.baseMutations.map(m=>iu(d.re,m)),E=y.mutations.map(m=>iu(d.re,m));return{userId:p,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:v,mutations:E}}(this.It,this.userId,u),c=[];let h=new ee((d,p)=>B(d.canonicalString(),p.canonicalString()));for(const d of i){const p=jT(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(l)),c.push(s.put(p,OL))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=u.keys()}),w.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return or(e).get(n).next(r=>r?(F(r.userId===this.userId),ai(this.It,r)):null)}Tn(e,n){return this.In[n]?w.resolve(this.In[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.In[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return or(e).Z({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(F(a.batchId>=r),s=ai(this.It,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return or(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return or(e).W("userMutationsIndex",n).next(r=>r.map(i=>ai(this.It,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=$l(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return as(e).Z({range:i},(o,a,u)=>{const[l,c,h]=o,d=In(c);if(l===this.userId&&n.path.isEqual(d))return or(e).get(h).next(p=>{if(!p)throw O();F(p.userId===this.userId),s.push(ai(this.It,p))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ee(B);const i=[];return n.forEach(s=>{const o=$l(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=as(e).Z({range:a},(l,c,h)=>{const[d,p,y]=l,v=In(p);d===this.userId&&s.path.isEqual(v)?r=r.add(y):h.done()});i.push(u)}),w.waitFor(i).next(()=>this.En(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=$l(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ee(B);return as(e).Z({range:o},(u,l,c)=>{const[h,d,p]=u,y=In(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(p)):c.done()}).next(()=>this.En(e,a))}En(e,n){const r=[],i=[];return n.forEach(s=>{i.push(or(e).get(s).next(o=>{if(o===null)throw O();F(o.userId===this.userId),r.push(ai(this.It,o))}))}),w.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return QT(e.ie,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.An(n.batchId)}),w.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return w.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return as(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=In(s[1]);i.push(u)}else a.done()}).next(()=>{F(i.length===0)})})}containsKey(e,n){return YT(e,this.userId,n)}Rn(e){return XT(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function YT(t,e,n){const r=$l(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return as(t).Z({range:s,X:!0},(a,u,l)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function or(t){return Be(t,"mutations")}function as(t){return Be(t,"documentMutations")}function XT(t){return Be(t,"mutationQueues")}/**
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
 */class zi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new zi(0)}static vn(){return new zi(-1)}}/**
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
 */class oM{constructor(e,n){this.referenceDelegate=e,this.It=n}allocateTargetId(e){return this.Vn(e).next(n=>{const r=new zi(n.highestTargetId);return n.highestTargetId=r.next(),this.Sn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(n=>U.fromTimestamp(new le(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Vn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Sn(e,i)))}addTargetData(e,n){return this.Dn(e,n).next(()=>this.Vn(e).next(r=>(r.targetCount+=1,this.Cn(n,r),this.Sn(e,r))))}updateTargetData(e,n){return this.Dn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ss(e).delete(n.targetId)).next(()=>this.Vn(e)).next(r=>(F(r.targetCount>0),r.targetCount-=1,this.Sn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ss(e).Z((o,a)=>{const u=Zo(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>w.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ss(e).Z((r,i)=>{const s=Zo(i);n(s)})}Vn(e){return jw(e).get("targetGlobalKey").next(n=>(F(n!==null),n))}Sn(e,n){return jw(e).put("targetGlobalKey",n)}Dn(e,n){return ss(e).put(KT(this.It,n))}Cn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Vn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=$i(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ss(e).Z({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const l=Zo(a);Au(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=dr(e);return n.forEach(o=>{const a=mt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),w.waitFor(i)}removeMatchingKeys(e,n,r){const i=dr(e);return w.forEach(n,s=>{const o=mt(s.path);return w.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=dr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=dr(e);let s=z();return i.Z({range:r,X:!0},(o,a,u)=>{const l=In(o[1]),c=new N(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=mt(n.path),i=IDBKeyRange.bound([r],[tT(r)],!1,!0);let s=0;return dr(e).Z({index:"documentTargetsIndex",X:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}se(e,n){return ss(e).get(n).next(r=>r?Zo(r):null)}}function ss(t){return Be(t,"targets")}function jw(t){return Be(t,"targetGlobal")}function dr(t){return Be(t,"targetDocuments")}/**
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
 */function qw([t,e],[n,r]){const i=B(t,n);return i===0?B(e,r):i}class aM{constructor(e){this.xn=e,this.buffer=new ee(qw),this.Nn=0}kn(){return++this.Nn}On(e){const n=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();qw(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class uM{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){S("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Kr(n)?S("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Gr(n)}await this.Fn(3e5)})}}class lM{constructor(e,n){this.$n=e,this.params=n}calculateTargetCount(e,n){return this.$n.Bn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return w.resolve(Et.at);const r=new aM(n);return this.$n.forEachTarget(e,i=>r.On(i.sequenceNumber)).next(()=>this.$n.Ln(e,i=>r.On(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.$n.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.$n.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(S("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(zw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(S("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zw):this.Un(e,n))}getCacheSize(e){return this.$n.getCacheSize(e)}Un(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(S("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),lp()<=Q.DEBUG&&S("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(l-u)+`ms
Total Duration: ${l-c}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
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
 */class cM{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new lM(r,i)}(this,n)}Bn(e){const n=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}qn(e){let n=0;return this.Ln(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Ln(e,n){return this.Kn(e,(r,i)=>n(i))}addReference(e,n,r){return fl(e,r)}removeReference(e,n,r){return fl(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return fl(e,n)}Gn(e,n){return function(r,i){let s=!1;return XT(r).tt(o=>YT(r,o,i).next(a=>(a&&(s=!0),w.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Kn(e,(o,a)=>{if(a<=n){const u=this.Gn(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,U.min()),dr(e).delete([0,mt(o.path)])))});i.push(u)}}).next(()=>w.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return fl(e,n)}Kn(e,n){const r=dr(e);let i,s=Et.at;return r.Z({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==Et.at&&n(new N(In(i)),s),s=l,i=u):s=Et.at}).next(()=>{s!==Et.at&&n(new N(In(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function fl(t,e){return dr(t).put(function(n,r){return{targetId:0,path:mt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
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
 */class JT{constructor(){this.changes=new Qr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,te.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?w.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class hM{constructor(e){this.It=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return ti(e).put(r)}removeEntry(e,n,r){return ti(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Rc(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Qn(e,r)))}getEntry(e,n){let r=te.newInvalidDocument(n);return ti(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Bo(n))},(i,s)=>{r=this.jn(n,s)}).next(()=>r)}Wn(e,n){let r={size:0,document:te.newInvalidDocument(n)};return ti(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Bo(n))},(i,s)=>{r={document:this.jn(n,s),size:Ac(s)}}).next(()=>r)}getEntries(e,n){let r=Tt();return this.zn(e,n,(i,s)=>{const o=this.jn(i,s);r=r.insert(i,o)}).next(()=>r)}Hn(e,n){let r=Tt(),i=new ye(N.comparator);return this.zn(e,n,(s,o)=>{const a=this.jn(s,o);r=r.insert(s,a),i=i.insert(s,Ac(o))}).next(()=>({documents:r,Jn:i}))}zn(e,n,r){if(n.isEmpty())return w.resolve();let i=new ee(Gw);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(Bo(i.first()),Bo(i.last())),o=i.getIterator();let a=o.getNext();return ti(e).Z({index:"documentKeyIndex",range:s},(u,l,c)=>{const h=N.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&Gw(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?c.j(Bo(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,n,r){const i=[n.popLast().toArray(),n.lastSegment(),Rc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],s=[n.popLast().toArray(),n.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ti(e).W(IDBKeyRange.bound(i,s,!0)).next(o=>{let a=Tt();for(const u of o){const l=this.jn(N.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);a=a.insert(l.key,l)}return a})}getAllFromCollectionGroup(e,n,r,i){let s=Tt();const o=Ww(n,r),a=Ww(n,Mt.max());return ti(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,l,c)=>{const h=this.jn(N.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new dM(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return Hw(e).get("remoteDocumentGlobalKey").next(n=>(F(!!n),n))}Qn(e,n){return Hw(e).put("remoteDocumentGlobalKey",n)}jn(e,n){if(n){const r=XL(this.It,n);if(!(r.isNoDocument()&&r.version.isEqual(U.min())))return r}return te.newInvalidDocument(e)}}function ZT(t){return new hM(t)}class dM extends JT{constructor(e,n){super(),this.Yn=e,this.trackRemovals=n,this.Xn=new Qr(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ee((s,o)=>B(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Xn.get(s);if(n.push(this.Yn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=Pw(this.Yn.It,o);i=i.add(s.path.popLast()),r+=Ac(u)-a.size,n.push(this.Yn.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=Pw(this.Yn.It,o.convertToNoDocument(U.min()));n.push(this.Yn.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.Yn.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.Yn.updateMetadata(e,r)),w.waitFor(n)}getFromCache(e,n){return this.Yn.Wn(e,n).next(r=>(this.Xn.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Yn.Hn(e,n).next(({documents:r,Jn:i})=>(i.forEach((s,o)=>{this.Xn.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Hw(t){return Be(t,"remoteDocumentGlobal")}function ti(t){return Be(t,"remoteDocumentsV14")}function Bo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Ww(t,e){const n=e.documentKey.path.toArray();return[t,Rc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Gw(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=B(n[s],r[s]),i)return i;return i=B(n.length,r.length),i||(i=B(n[n.length-2],r[r.length-2]),i||B(n[n.length-1],r[r.length-1]))}/**
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
 */class fM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class eS{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&ma(r.mutation,i,Pt.empty(),le.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=z()){const i=_n();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Jo();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=_n();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Tt();const o=ga(),a=ga();return n.forEach((u,l)=>{const c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof tr)?s=s.insert(l.key,l):c!==void 0&&(o.set(l.key,c.mutation.getFieldMask()),ma(c.mutation,l,c.mutation.getFieldMask(),le.now()))}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new fM(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ga();let i=new ye((o,a)=>o-a),s=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=r.get(u)||Pt.empty();c=a.applyToLocalView(l,c),r.set(u,c);const h=(i.get(a.batchId)||z()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=NT();c.forEach(d=>{if(!s.has(d)){const p=ST(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return w.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return N.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):mg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):w.resolve(_n());let a=-1,u=s;return o.next(l=>w.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?w.resolve():this.getBaseDocument(e,c,h).next(d=>{u=u.insert(c,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,z())).next(c=>({batchId:a,changes:AT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new N(n)).next(r=>{let i=Jo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Jo();return this.indexManager.getCollectionParents(e,i).next(o=>w.forEach(o,a=>{const u=function(l,c){return new er(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,u)=>{const l=u.getKey();i.get(l)===null&&(i=i.insert(l,te.newInvalidDocument(l)))});let o=Jo();return i.forEach((a,u)=>{const l=s.get(a);l!==void 0&&ma(l.mutation,u,Pt.empty(),le.now()),gg(n,u)&&(o=o.insert(a,u))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):w.resolve(te.newInvalidDocument(n))}}/**
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
 */class pM{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return w.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:$e(r.createTime)}),w.resolve()}getNamedQuery(e,n){return w.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:Eg(r.bundledQuery),readTime:$e(r.readTime)}}(n)),w.resolve()}}/**
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
 */class mM{constructor(){this.overlays=new ye(N.comparator),this.es=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const r=_n();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),w.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),w.resolve()}getOverlaysForCollection(e,n,r){const i=_n(),s=n.length+1,o=new N(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return w.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ye((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=_n(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=_n(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return w.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ig(n,r));let s=this.es.get(n);s===void 0&&(s=z(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
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
 */class Sg{constructor(){this.ns=new ee(De.ss),this.rs=new ee(De.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new De(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new De(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new N(new K([])),r=new De(n,e),i=new De(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new N(new K([])),r=new De(n,e),i=new De(n,e+1);let s=z();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new De(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class De{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return N.comparator(e.key,n.key)||B(e._s,n._s)}static os(e,n){return B(e._s,n._s)||N.comparator(e.key,n.key)}}/**
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
 */class gM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ee(De.ss)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wg(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new De(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return w.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new De(n,0),i=new De(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ee(B);return n.forEach(i=>{const s=new De(i,0),o=new De(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),w.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;N.isDocumentKey(s)||(s=s.child(""));const o=new De(new N(s),0);let a=new ee(B);return this.gs.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u._s)),!0)},o),w.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){F(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return w.forEach(n.mutations,i=>{const s=new De(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new De(n,0),i=this.gs.firstAfterOrEqual(r);return w.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class yM{constructor(e){this.Es=e,this.docs=new ye(N.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return w.resolve(r?r.document.mutableCopy():te.newInvalidDocument(n))}getEntries(e,n){let r=Tt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():te.newInvalidDocument(i))}),w.resolve(r)}getAllFromCollection(e,n,r){let i=Tt();const s=new N(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||cg(iT(u),r)<=0||(i=i.insert(u.key,u.mutableCopy()))}return w.resolve(i)}getAllFromCollectionGroup(e,n,r,i){O()}As(e,n){return w.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new vM(this)}getSize(e){return w.resolve(this.size)}}class vM extends JT{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),w.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class wM{constructor(e){this.persistence=e,this.Rs=new Qr(n=>$i(n),Au),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Sg,this.targetCount=0,this.vs=zi.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),w.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new zi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.Dn(n),w.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),w.waitFor(s).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return w.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),w.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),w.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),w.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return w.resolve(r)}containsKey(e,n){return w.resolve(this.Ps.containsKey(n))}}/**
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
 */class tS{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Et(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new wM(this),this.indexManager=new iM,this.remoteDocumentCache=function(r){return new yM(r)}(r=>this.referenceDelegate.xs(r)),this.It=new GT(n),this.Ns=new pM(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new gM(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){S("MemoryPersistence","Starting transaction:",e);const i=new _M(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return w.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class _M extends oT{constructor(e){super(),this.currentSequenceNumber=e}}class xh{constructor(e){this.persistence=e,this.Fs=new Sg,this.$s=null}static Bs(e){return new xh(e)}get Ls(){if(this.$s)return this.$s;throw O()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),w.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),w.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Ls,r=>{const i=N.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,U.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return w.or([()=>w.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class IM{constructor(e){this.It=e}$(e,n,r,i){const s=new kh("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Dw,{unique:!0}),a.createObjectStore("documentMutations")}(e),Kw(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=w.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Kw(e)),o=o.next(()=>function(a){const u=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:U.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,u){return u.store("mutations").W().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Dw,{unique:!0});const c=u.store("mutations"),h=l.map(d=>c.put(d));return w.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.qs(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(s)))),r<7&&i>=7&&(o=o.next(()=>this.Gs(s))),r<8&&i>=8&&(o=o.next(()=>this.Qs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.js(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const u=a.createObjectStore("documentOverlays",{keyPath:WL});u.createIndex("collectionPathOverlayIndex",GL,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",KL,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const u=a.createObjectStore("remoteDocumentsV14",{keyPath:LL});u.createIndex("documentKeyIndex",ML),u.createIndex("collectionGroupIndex",$L)}(e)).next(()=>this.Ws(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.zs(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:zL}).createIndex("sequenceNumberIndex",jL,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:qL}).createIndex("documentKeyIndex",HL,{unique:!1})}(e))),o}Ks(e){let n=0;return e.store("remoteDocuments").Z((r,i)=>{n+=Ac(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}qs(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>w.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>w.forEach(a,u=>{F(u.userId===s.userId);const l=ai(this.It,u);return QT(e,s.userId,l).next(()=>{})}))}))}Gs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const u=new K(o),l=function(c){return[0,mt(c)]}(u);s.push(n.get(l).next(c=>c?w.resolve():(h=>n.put({targetId:0,path:mt(h),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>w.waitFor(s))})}Qs(e,n){e.createObjectStore("collectionParents",{keyPath:BL});const r=n.store("collectionParents"),i=new Tg,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:mt(u)})}};return n.store("remoteDocuments").Z({X:!0},(o,a)=>{const u=new K(o);return s(u.popLast())}).next(()=>n.store("documentMutations").Z({X:!0},([o,a,u],l)=>{const c=In(a);return s(c.popLast())}))}js(e){const n=e.store("targets");return n.Z((r,i)=>{const s=Zo(i),o=KT(this.It,s);return n.put(o)})}Ws(e,n){const r=n.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=n.store("remoteDocumentsV14"),u=(l=o,l.document?new N(K.fromString(l.document.name).popFirst(5)):l.noDocument?N.fromSegments(l.noDocument.path):l.unknownDocument?N.fromSegments(l.unknownDocument.path):O()).path.toArray();var l;/**
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
*/const c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>w.waitFor(i))}zs(e,n){const r=n.store("mutations"),i=ZT(this.It),s=new tS(xh.Bs,this.It.re);return r.W().next(o=>{const a=new Map;return o.forEach(u=>{var l;let c=(l=a.get(u.userId))!==null&&l!==void 0?l:z();ai(this.It,u).keys().forEach(h=>c=c.add(h)),a.set(u.userId,c)}),w.forEach(a,(u,l)=>{const c=new Oe(l),h=Ah.oe(this.It,c),d=s.getIndexManager(c),p=Nh.oe(c,this.It,d,s.referenceDelegate);return new eS(i,p,h,d).recalculateAndSaveOverlaysForDocumentKeys(new gp(n,Et.at),u).next()})})}}function Kw(t){t.createObjectStore("targetDocuments",{keyPath:FL}).createIndex("documentTargetsIndex",VL,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",UL,{unique:!0}),t.createObjectStore("targetGlobal")}const Bd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class kg{constructor(e,n,r,i,s,o,a,u,l,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Hs=s,this.window=o,this.document=a,this.Js=l,this.Ys=c,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!kg.C())throw new T(_.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new cM(this,i),this.ii=n+"main",this.It=new GT(u),this.ri=new tn(this.ii,this.Xs,new IM(this.It)),this.Cs=new oM(this.referenceDelegate,this.It),this.remoteDocumentCache=ZT(this.It),this.Ns=new JL,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,c===!1&&Ee("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new T(_.FAILED_PRECONDITION,Bd);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new Et(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>pl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(n=>this.isPrimary&&!n?this._i(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(Kr(e))return S("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return S("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return zo(e).get("owner").next(n=>w.resolve(this.mi(n)))}gi(e){return pl(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Be(n,"clientMetadata");return r.W().next(i=>{const s=this.Ii(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return w.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const n of e)this.oi.removeItem(this.Ti(n.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?w.resolve(!0):zo(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)){if(this.mi(n)&&this.networkEnabled)return!0;if(!this.mi(n)){if(!n.allowTabSynchronization)throw new T(_.FAILED_PRECONDITION,Bd);return!1}}return!(!this.networkEnabled||!this.inForeground)||pl(e).W().next(r=>this.Ii(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&S("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new gp(e,Et.at);return this._i(n).next(()=>this.gi(n))}),this.ri.close(),this.Pi()}Ii(e,n){return e.filter(r=>this.pi(r.updateTimeMs,n)&&!this.Ei(r.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>pl(e).W().next(n=>this.Ii(n,18e5).map(r=>r.clientId)))}get started(){return this.Ds}getMutationQueue(e,n){return Nh.oe(e,this.It,n,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new sM(e,this.It.re.databaseId)}getDocumentOverlayCache(e){return Ah.oe(this.It,e)}getBundleCache(){return this.Ns}runTransaction(e,n,r){S("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.Xs)===15?YL:o===14?WT:o===13?HT:o===12?QL:o===11?qT:void O();var o;let a;return this.ri.runTransaction(e,i,s,u=>(a=new gp(u,this.Ss?this.Ss.next():Et.at),n==="readwrite-primary"?this.fi(a).next(l=>!!l||this.di(a)).next(l=>{if(!l)throw Ee(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new T(_.FAILED_PRECONDITION,sT);return r(a)}).next(l=>this.wi(a).next(()=>l)):this.Vi(a).next(()=>r(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Vi(e){return zo(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)&&!this.mi(n)&&!(this.Ys||this.allowTabSynchronization&&n.allowTabSynchronization))throw new T(_.FAILED_PRECONDITION,Bd)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return zo(e).put("owner",n)}static C(){return tn.C()}_i(e){const n=zo(e);return n.get("owner").next(r=>this.mi(r)?(S("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):w.resolve())}pi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Ee(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),rR()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var n;try{const r=((n=this.oi)===null||n===void 0?void 0:n.getItem(this.Ti(e)))!==null;return S("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ee("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){Ee("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function zo(t){return Be(t,"owner")}function pl(t){return Be(t,"clientMetadata")}function Cg(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class bg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=z(),i=z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new bg(e,n.fromCache,r,i)}}/**
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
 */class nS{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(Ew(n))return w.resolve(null);let r=bt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=bc(n,null,"F"),r=bt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=z(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.Fi(n,a);return this.$i(n,l,o,u.readTime)?this.ki(e,bc(n,null,"F")):this.Bi(e,l,n,u)}))})))}Oi(e,n,r,i){return Ew(n)||i.isEqual(U.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(lp()<=Q.DEBUG&&S("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fp(n)),this.Bi(e,o,n,rT(i,-1)))})}Fi(e,n){let r=new ee(gT(e));return n.forEach((i,s)=>{gg(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return lp()<=Q.DEBUG&&S("QueryEngine","Using full collection scan to execute query:",fp(n)),this.Ni.getDocumentsMatchingQuery(e,n,Mt.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class EM{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new ye(B),this.qi=new Qr(s=>$i(s),Au),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eS(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function rS(t,e,n,r){return new EM(t,e,n,r)}async function iS(t,e){const n=x(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=z();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function TM(t,e){const n=x(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=w.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(y=>{const v=u.docVersions.get(p);F(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),l.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=z();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function sS(t){const e=x(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function SM(t,e){const n=x(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Ae.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(y,v,E){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,p,c)&&a.push(n.Cs.updateTargetData(s,p))});let u=Tt(),l=z();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(oS(s,o,e.documentUpdates).next(c=>{u=c.Wi,l=c.zi})),!r.isEqual(U.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return w.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.Ui=i,s))}function oS(t,e,n){let r=z(),i=z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Tt();return n.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(U.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):S("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{Wi:o,zi:i}})}function kM(t,e){const n=x(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Xs(t,e){const n=x(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,w.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new br(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Js(t,e,n){const r=x(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Kr(o))throw o;S("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function Nc(t,e,n){const r=x(t);let i=U.min(),s=z();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=x(a),h=c.qi.get(l);return h!==void 0?w.resolve(c.Ui.get(h)):c.Cs.getTargetData(u,l)}(r,o,bt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:U.min(),n?s:z())).next(a=>(lS(r,mT(e),a),{documents:a,Hi:s})))}function aS(t,e){const n=x(t),r=x(n.Cs),i=n.Ui.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.se(s,e).next(o=>o?o.target:null))}function uS(t,e){const n=x(t),r=n.Ki.get(e)||U.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Gi.getAllFromCollectionGroup(i,e,rT(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(lS(n,e,i),i))}function lS(t,e,n){let r=t.Ki.get(e)||U.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}async function CM(t,e,n,r){const i=x(t);let s=z(),o=Tt();for(const l of n){const c=e.Ji(l.metadata.name);l.document&&(s=s.add(c));const h=e.Yi(l);h.setReadTime(e.Xi(l.metadata.readTime)),o=o.insert(c,h)}const a=i.Gi.newChangeBuffer({trackRemovals:!0}),u=await Xs(i,function(l){return bt(mo(K.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>oS(l,a,o).next(c=>(a.apply(l),c)).next(c=>i.Cs.removeMatchingKeysForTargetId(l,u.targetId).next(()=>i.Cs.addMatchingKeys(l,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(l,c.Wi,c.zi)).next(()=>c.Wi)))}async function bM(t,e,n=z()){const r=await Xs(t,bt(Eg(e.bundledQuery))),i=x(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=$e(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ns.saveNamedQuery(s,e);const a=r.withResumeToken(Ae.EMPTY_BYTE_STRING,o);return i.Ui=i.Ui.insert(a.targetId,a),i.Cs.updateTargetData(s,a).next(()=>i.Cs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Cs.addMatchingKeys(s,n,r.targetId)).next(()=>i.Ns.saveNamedQuery(s,e))})}function Qw(t,e){return`firestore_clients_${t}_${e}`}function Yw(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function zd(t,e){return`firestore_targets_${t}_${e}`}class xc{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Zi(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new T(i.error.code,i.error.message))),o?new xc(e,n,i.state,s):(Ee("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ya{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Zi(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new T(r.error.code,r.error.message))),s?new ya(e,r.state,i):(Ee("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Dc{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Zi(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Rh();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=lT(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Dc(e,s):(Ee("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Rg{constructor(e,n){this.clientId=e,this.onlineState=n}static Zi(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Rg(n.clientId,n.onlineState):(Ee("SharedClientState",`Failed to parse online state: ${e}`),null)}}class yp{constructor(){this.activeTargetIds=Rh()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jd{constructor(e,n,r,i,s){this.window=e,this.Hs=n,this.persistenceKey=r,this.sr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new ye(B),this.started=!1,this.cr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ar=Qw(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new yp),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const r of e){if(r===this.sr)continue;const i=this.getItem(Qw(this.persistenceKey,r));if(i){const s=Dc.Zi(r,i);s&&(this.ur=this.ur.insert(s.clientId,s))}}this.gr();const n=this.storage.getItem(this.wr);if(n){const r=this.yr(n);r&&this.pr(r)}for(const r of this.cr)this.rr(r);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let n=!1;return this.ur.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,n,r){this.Tr(e,n,r),this.Er(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(zd(this.persistenceKey,e));if(r){const i=ya.Zi(e,r);i&&(n=i.state)}}return this.Ar.er(e),this.gr(),n}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(zd(this.persistenceKey,e))}updateQueryState(e,n,r){this.Rr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Er(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return S("SharedClientState","READ",e,n),n}setItem(e,n){S("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){S("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const n=e;if(n.storageArea===this.storage){if(S("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ar)return void Ee("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.lr.test(n.key)){if(n.newValue==null){const r=this.vr(n.key);return this.Vr(r,null)}{const r=this.Sr(n.key,n.newValue);if(r)return this.Vr(r.clientId,r)}}else if(this.dr.test(n.key)){if(n.newValue!==null){const r=this.Dr(n.key,n.newValue);if(r)return this.Cr(r)}}else if(this._r.test(n.key)){if(n.newValue!==null){const r=this.Nr(n.key,n.newValue);if(r)return this.kr(r)}}else if(n.key===this.wr){if(n.newValue!==null){const r=this.yr(n.newValue);if(r)return this.pr(r)}}else if(n.key===this.hr){const r=function(i){let s=Et.at;if(i!=null)try{const o=JSON.parse(i);F(typeof o=="number"),s=o}catch(o){Ee("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==Et.at&&this.sequenceNumberHandler(r)}else if(n.key===this.mr){const r=this.Or(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Mr(i)))}}}else this.cr.push(n)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,n,r){const i=new xc(this.currentUser,e,n,r),s=Yw(this.persistenceKey,this.currentUser,e);this.setItem(s,i.tr())}Er(e){const n=Yw(this.persistenceKey,this.currentUser,e);this.removeItem(n)}br(e){const n={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(n))}Rr(e,n,r){const i=zd(this.persistenceKey,e),s=new ya(e,n,r);this.setItem(i,s.tr())}Pr(e){const n=JSON.stringify(Array.from(e));this.setItem(this.mr,n)}vr(e){const n=this.lr.exec(e);return n?n[1]:null}Sr(e,n){const r=this.vr(e);return Dc.Zi(r,n)}Dr(e,n){const r=this.dr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return xc.Zi(new Oe(s),i,n)}Nr(e,n){const r=this._r.exec(e),i=Number(r[1]);return ya.Zi(i,n)}yr(e){return Rg.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);S("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,n){const r=n?this.ur.insert(e,n):this.ur.remove(e),i=this.Ir(this.ur),s=this.Ir(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.Br(o,a).then(()=>{this.ur=r})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let n=Rh();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class cS{constructor(){this.Lr=new yp,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new yp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class RM{qr(e){}shutdown(){}}/**
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
 */class Xw{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){S("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){S("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const AM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class NM{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class xM extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);S("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(u=>(S("RestConnection","Received: ",u),u),u=>{throw Ws("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+po,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=AM[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new AO;a.setWithCredentials(!0),a.listenOnce(CO.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Fd.NO_ERROR:const l=a.getResponseJson();S("Connection","XHR received:",JSON.stringify(l)),s(l);break;case Fd.TIMEOUT:S("Connection",'RPC "'+e+'" timed out'),o(new T(_.DEADLINE_EXCEEDED,"Request time out"));break;case Fd.HTTP_ERROR:const c=a.getStatus();if(S("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const y=p.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(y)>=0?y:_.UNKNOWN}(h.status);o(new T(d,h.message))}else o(new T(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new T(_.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{S("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=SO(),o=kO(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new RO({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const u=i.join("");S("Connection","Creating WebChannel: "+u,a);const l=s.createWebChannel(u,a);let c=!1,h=!1;const d=new NM({Hr:y=>{h?S("Connection","Not sending because WebChannel is closed:",y):(c||(S("Connection","Opening WebChannel transport."),l.open(),c=!0),S("Connection","WebChannel sending:",y),l.send(y))},Jr:()=>l.close()}),p=(y,v,E)=>{y.listen(v,m=>{try{E(m)}catch(f){setTimeout(()=>{throw f},0)}})};return p(l,ll.EventType.OPEN,()=>{h||S("Connection","WebChannel transport opened.")}),p(l,ll.EventType.CLOSE,()=>{h||(h=!0,S("Connection","WebChannel transport closed"),d.io())}),p(l,ll.EventType.ERROR,y=>{h||(h=!0,Ws("Connection","WebChannel transport errored:",y),d.io(new T(_.UNAVAILABLE,"The operation could not be completed")))}),p(l,ll.EventType.MESSAGE,y=>{var v;if(!h){const E=y.data[0];F(!!E);const m=E,f=m.error||((v=m[0])===null||v===void 0?void 0:v.error);if(f){S("Connection","WebChannel received error:",f);const g=f.status;let I=function(R){const A=Se[R];if(A!==void 0)return bT(A)}(g),k=f.message;I===void 0&&(I=_.INTERNAL,k="Unknown error status: "+g+" with message "+f.message),h=!0,d.io(new T(I,k)),l.close()}else S("Connection","WebChannel received:",E),d.ro(E)}}),p(o,bO.STAT_EVENT,y=>{y.stat===aw.PROXY?S("Connection","Detected buffering proxy"):y.stat===aw.NOPROXY&&S("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
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
 */function hS(){return typeof window<"u"?window:null}function Ul(){return typeof document<"u"?document:null}/**
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
 */function Ou(t){return new EL(t,!0)}class Ag{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&S("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class dS{constructor(e,n,r,i,s,o,a,u){this.Hs=e,this.vo=r,this.Vo=i,this.So=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Ag(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Ee(n.toString()),Ee("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Do===n&&this.Qo(r,i)},r=>{e(()=>{const i=new T(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.jo(i)})})}Qo(e,n){const r=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.jo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return S("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(S("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class DM extends dS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=kL(this.It,e),r=function(i){if(!("targetChange"in i))return U.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?U.min():s.readTime?$e(s.readTime):U.min()}(e);return this.listener.zo(n,r)}Ho(e){const n={};n.database=ru(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=kc(a)?{documents:UT(i,a)}:{query:FT(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=PT(i,s.resumeToken):s.snapshotVersion.compareTo(U.min())>0&&(o.readTime=tu(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=bL(this.It,e);r&&(n.labels=r),this.Lo(n)}Jo(e){const n={};n.database=ru(this.It),n.removeTarget=e,this.Lo(n)}}class PM extends dS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(F(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=CL(e.writeResults,e.commitTime),r=$e(e.commitTime);return this.listener.tu(r,n)}return F(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=ru(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>iu(this.It,r))};this.Lo(n)}}/**
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
 */class OM extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=r,this.It=i,this.su=!1}iu(){if(this.su)throw new T(_.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.So.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new T(_.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.So._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new T(_.UNKNOWN,s.toString())})}terminate(){this.su=!0}}class LM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(Ee(n),this.uu=!1):S("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
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
 */class MM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=s,this.gu.qr(o=>{r.enqueueAndForget(async()=>{Yr(this)&&(S("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=x(a);u.wu.add(4),await vo(u),u.yu.set("Unknown"),u.wu.delete(4),await Lu(u)}(this))})}),this.yu=new LM(r,i)}}async function Lu(t){if(Yr(t))for(const e of t.mu)await e(!0)}async function vo(t){for(const e of t.mu)await e(!1)}function Dh(t,e){const n=x(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Dg(n)?xg(n):_o(n).Oo()&&Ng(n,e))}function su(t,e){const n=x(t),r=_o(n);n._u.delete(e),r.Oo()&&fS(n,e),n._u.size===0&&(r.Oo()?r.$o():Yr(n)&&n.yu.set("Unknown"))}function Ng(t,e){t.pu.Mt(e.targetId),_o(t).Ho(e)}function fS(t,e){t.pu.Mt(e),_o(t).Jo(e)}function xg(t){t.pu=new wL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),_o(t).start(),t.yu.cu()}function Dg(t){return Yr(t)&&!_o(t).ko()&&t._u.size>0}function Yr(t){return x(t).wu.size===0}function pS(t){t.pu=void 0}async function $M(t){t._u.forEach((e,n)=>{Ng(t,e)})}async function UM(t,e){pS(t),Dg(t)?(t.yu.lu(e),xg(t)):t.yu.set("Unknown")}async function FM(t,e,n){if(t.yu.set("Online"),e instanceof DT&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r._u.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r._u.delete(o),r.pu.removeTarget(o))}(t,e)}catch(r){S("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Pc(t,r)}else if(e instanceof Ml?t.pu.Gt(e):e instanceof xT?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(U.min()))try{const r=await sS(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.pu.te(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i._u.get(u);l&&i._u.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i._u.get(a);if(!u)return;i._u.set(a,u.withResumeToken(Ae.EMPTY_BYTE_STRING,u.snapshotVersion)),fS(i,a);const l=new br(u.target,a,1,u.sequenceNumber);Ng(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){S("RemoteStore","Failed to raise snapshot:",r),await Pc(t,r)}}async function Pc(t,e,n){if(!Kr(e))throw e;t.wu.add(1),await vo(t),t.yu.set("Offline"),n||(n=()=>sS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{S("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await Lu(t)})}function mS(t,e){return e().catch(n=>Pc(t,n,e))}async function wo(t){const e=x(t),n=$r(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;VM(e);)try{const i=await kM(e.localStore,r);if(i===null){e.du.length===0&&n.$o();break}r=i.batchId,BM(e,i)}catch(i){await Pc(e,i)}gS(e)&&yS(e)}function VM(t){return Yr(t)&&t.du.length<10}function BM(t,e){t.du.push(e);const n=$r(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function gS(t){return Yr(t)&&!$r(t).ko()&&t.du.length>0}function yS(t){$r(t).start()}async function zM(t){$r(t).nu()}async function jM(t){const e=$r(t);for(const n of t.du)e.Zo(n.mutations)}async function qM(t,e,n){const r=t.du.shift(),i=_g.from(r,e,n);await mS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await wo(t)}async function HM(t,e){e&&$r(t).Xo&&await async function(n,r){if(i=r.code,CT(i)&&i!==_.ABORTED){const s=n.du.shift();$r(n).Fo(),await mS(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await wo(n)}var i}(t,e),gS(t)&&yS(t)}async function Jw(t,e){const n=x(t);n.asyncQueue.verifyOperationInProgress(),S("RemoteStore","RemoteStore received new credentials");const r=Yr(n);n.wu.add(3),await vo(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await Lu(n)}async function vp(t,e){const n=x(t);e?(n.wu.delete(2),await Lu(n)):e||(n.wu.add(2),await vo(n),n.yu.set("Unknown"))}function _o(t){return t.Iu||(t.Iu=function(e,n,r){const i=x(e);return i.iu(),new DM(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:$M.bind(null,t),Zr:UM.bind(null,t),zo:FM.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),Dg(t)?xg(t):t.yu.set("Unknown")):(await t.Iu.stop(),pS(t))})),t.Iu}function $r(t){return t.Tu||(t.Tu=function(e,n,r){const i=x(e);return i.iu(),new PM(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:zM.bind(null,t),Zr:HM.bind(null,t),eu:jM.bind(null,t),tu:qM.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await wo(t)):(await t.Tu.stop(),t.du.length>0&&(S("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
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
 */class Pg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Me,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Pg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Io(t,e){if(Ee("AsyncQueue",`${e}: ${t}`),Kr(t))return new T(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Os{constructor(e){this.comparator=e?(n,r)=>e(n,r)||N.comparator(n.key,r.key):(n,r)=>N.comparator(n.key,r.key),this.keyedMap=Jo(),this.sortedSet=new ye(this.comparator)}static emptySet(e){return new Os(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Os;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Zw{constructor(){this.Eu=new ye(N.comparator)}track(e){const n=e.doc.key,r=this.Eu.get(n);r?e.type!==0&&r.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&r.type!==1?this.Eu=this.Eu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Eu=this.Eu.remove(n):e.type===1&&r.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):O():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zs{constructor(e,n,r,i,s,o,a,u,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Zs(e,n,Os.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class WM{constructor(){this.Ru=void 0,this.listeners=[]}}class GM{constructor(){this.queries=new Qr(e=>pT(e),Nu),this.onlineState="Unknown",this.bu=new Set}}async function Og(t,e){const n=x(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new WM),i)try{s.Ru=await n.onListen(r)}catch(o){const a=Io(o,`Initialization of query '${fp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Pu(n.onlineState),s.Ru&&e.vu(s.Ru)&&Mg(n)}async function Lg(t,e){const n=x(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function KM(t,e){const n=x(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Ru=i}}r&&Mg(n)}function QM(t,e,n){const r=x(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Mg(t){t.bu.forEach(e=>{e.next()})}class $g{constructor(e,n,r){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Zs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=Zs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
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
 */class YM{constructor(e,n){this.payload=e,this.byteLength=n}Ou(){return"metadata"in this.payload}}/**
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
 */class e_{constructor(e){this.It=e}Ji(e){return Sn(this.It,e)}Yi(e){return e.metadata.exists?$T(this.It,e.document,!1):te.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return $e(e)}}class XM{constructor(e,n,r){this.Mu=e,this.localStore=n,this.It=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=vS(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++n;const r=K.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}$u(e){const n=new Map,r=new e_(this.It);for(const i of e)if(i.metadata.queries){const s=r.Ji(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||z()).add(s);n.set(o,a)}}return n}async complete(){const e=await CM(this.localStore,new e_(this.It),this.documents,this.Mu.id),n=this.$u(this.documents);for(const r of this.queries)await bM(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function vS(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class wS{constructor(e){this.key=e}}class _S{constructor(e){this.key=e}}class IS{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=z(),this.mutatedKeys=z(),this.Gu=gT(e),this.Qu=new Os(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new Zw,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=gg(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;d&&p?d.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),E=!0):this.Hu(d,p)||(r.track({type:2,doc:p}),E=!0,(u&&this.Gu(p,u)>0||l&&this.Gu(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),E=!0):d&&!p&&(r.track({type:1,doc:d}),E=!0,(u||l)&&(a=!0)),E&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Au();s.sort((l,c)=>function(h,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return p(h)-p(d)}(l.type,c.type)||this.Gu(l.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,u=a!==this.qu;return this.qu=a,s.length!==0||u?{snapshot:new Zs(this.query,e.Qu,i,s,e.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Zw,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=z(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new _S(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new wS(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=z();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Zs.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class JM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class ZM{constructor(e){this.key=e,this.nc=!1}}class e${constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Qr(a=>pT(a),Nu),this.rc=new Map,this.oc=new Set,this.uc=new ye(N.comparator),this.cc=new Map,this.ac=new Sg,this.hc={},this.lc=new Map,this.fc=zi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function t$(t,e){const n=zg(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await Xs(n.localStore,bt(e));n.isPrimaryClient&&Dh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Ug(n,e,r,a==="current",o.resumeToken)}return i}async function Ug(t,e,n,r,i){t._c=(h,d,p)=>async function(y,v,E,m){let f=v.view.Wu(E);f.$i&&(f=await Nc(y.localStore,v.query,!1).then(({documents:k})=>v.view.Wu(k,f)));const g=m&&m.targetChanges.get(v.targetId),I=v.view.applyChanges(f,y.isPrimaryClient,g);return wp(y,v.targetId,I.Xu),I.snapshot}(t,h,d,p);const s=await Nc(t.localStore,e,!0),o=new IS(e,s.Hi),a=o.Wu(s.documents),u=Pu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,u);wp(t,n,l.Xu);const c=new JM(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function n$(t,e){const n=x(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Nu(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Js(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),su(n.remoteStore,r.targetId),eo(n,r.targetId)}).catch(Gr)):(eo(n,r.targetId),await Js(n.localStore,r.targetId,!0))}async function r$(t,e,n){const r=jg(t);try{const i=await function(s,o){const a=x(s),u=le.now(),l=o.reduce((d,p)=>d.add(p.key),z());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Tt(),y=z();return a.Gi.getEntries(d,l).next(v=>{p=v,p.forEach((E,m)=>{m.isValidDocument()||(y=y.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{c=v;const E=[];for(const m of o){const f=fL(m,c.get(m.key).overlayedDocument);f!=null&&E.push(new tr(m.key,f,hT(f.value.mapValue),ue.exists(!0)))}return a.mutationQueue.addMutationBatch(d,u,E,o)}).next(v=>{h=v;const E=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,E)})}).then(()=>({batchId:h.batchId,changes:AT(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.hc[s.currentUser.toKey()];u||(u=new ye(B)),u=u.insert(o,a),s.hc[s.currentUser.toKey()]=u}(r,i.batchId,n),await nr(r,i.changes),await wo(r.remoteStore)}catch(i){const s=Io(i,"Failed to persist write");n.reject(s)}}async function ES(t,e){const n=x(t);try{const r=await SM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(F(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?F(o.nc):i.removedDocuments.size>0&&(F(o.nc),o.nc=!1))}),await nr(n,r,e)}catch(r){await Gr(r)}}function t_(t,e,n){const r=x(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=x(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.Pu(o)&&(u=!0)}),u&&Mg(a)}(r.eventManager,e),i.length&&r.sc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function i$(t,e,n){const r=x(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new ye(N.comparator);o=o.insert(s,te.newNoDocument(s,U.min()));const a=z().add(s),u=new Du(U.min(),new Map,new ee(B),o,a);await ES(r,u),r.uc=r.uc.remove(s),r.cc.delete(e),Bg(r)}else await Js(r.localStore,e,!1).then(()=>eo(r,e,n)).catch(Gr)}async function s$(t,e){const n=x(t),r=e.batch.batchId;try{const i=await TM(n.localStore,e);Vg(n,r,null),Fg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await nr(n,i)}catch(i){await Gr(i)}}async function o$(t,e,n){const r=x(t);try{const i=await function(s,o){const a=x(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(F(c!==null),l=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(r.localStore,e);Vg(r,e,n),Fg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await nr(r,i)}catch(i){await Gr(i)}}async function a$(t,e){const n=x(t);Yr(n.remoteStore)||S("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=x(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.lc.get(r)||[];i.push(e),n.lc.set(r,i)}catch(r){const i=Io(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Fg(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Vg(t,e,n){const r=x(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function eo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||TS(t,r)})}function TS(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(su(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Bg(t))}function wp(t,e,n){for(const r of n)r instanceof wS?(t.ac.addReference(r.key,e),u$(t,r)):r instanceof _S?(S("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||TS(t,r.key)):O()}function u$(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(S("SyncEngine","New document in limbo: "+n),t.oc.add(r),Bg(t))}function Bg(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new N(K.fromString(e)),r=t.fc.next();t.cc.set(r,new ZM(n)),t.uc=t.uc.insert(n,r),Dh(t.remoteStore,new br(bt(mo(n.path)),r,2,Et.at))}}async function nr(t,e,n){const r=x(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,u)=>{o.push(r._c(u,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=bg.Ci(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.sc.zo(i),await async function(a,u){const l=x(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>w.forEach(u,h=>w.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>w.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Kr(c))throw c;S("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.Ui.get(h),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);l.Ui=l.Ui.insert(h,y)}}}(r.localStore,s))}async function l$(t,e){const n=x(t);if(!n.currentUser.isEqual(e)){S("SyncEngine","User change. New user:",e.toKey());const r=await iS(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new T(_.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await nr(n,r.ji)}}function c$(t,e){const n=x(t),r=n.cc.get(e);if(r&&r.nc)return z().add(r.key);{let i=z();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}async function h$(t,e){const n=x(t),r=await Nc(n.localStore,e.query,!0),i=e.view.tc(r);return n.isPrimaryClient&&wp(n,e.targetId,i.Xu),i}async function d$(t,e){const n=x(t);return uS(n.localStore,e).then(r=>nr(n,r))}async function f$(t,e,n,r){const i=x(t),s=await function(o,a){const u=x(o),l=x(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",c=>l.Tn(c,a).next(h=>h?u.localDocuments.getDocuments(c,h):w.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await wo(i.remoteStore):n==="acknowledged"||n==="rejected"?(Vg(i,e,r||null),Fg(i,e),function(o,a){x(x(o).mutationQueue).An(a)}(i.localStore,e)):O(),await nr(i,s)):S("SyncEngine","Cannot apply mutation batch with id: "+e)}async function p$(t,e){const n=x(t);if(zg(n),jg(n),e===!0&&n.dc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await n_(n,r.toArray());n.dc=!0,await vp(n.remoteStore,!0);for(const s of i)Dh(n.remoteStore,s)}else if(e===!1&&n.dc!==!1){const r=[];let i=Promise.resolve();n.rc.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(eo(n,o),Js(n.localStore,o,!0))),su(n.remoteStore,o)}),await i,await n_(n,r),function(s){const o=x(s);o.cc.forEach((a,u)=>{su(o.remoteStore,u)}),o.ac.fs(),o.cc=new Map,o.uc=new ye(N.comparator)}(n),n.dc=!1,await vp(n.remoteStore,!1)}}async function n_(t,e,n){const r=x(t),i=[],s=[];for(const o of e){let a;const u=r.rc.get(o);if(u&&u.length!==0){a=await Xs(r.localStore,bt(u[0]));for(const l of u){const c=r.ic.get(l),h=await h$(r,c);h.snapshot&&s.push(h.snapshot)}}else{const l=await aS(r.localStore,o);a=await Xs(r.localStore,l),await Ug(r,SS(l),o,!1,a.resumeToken)}i.push(a)}return r.sc.zo(s),i}function SS(t){return fT(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function m$(t){const e=x(t);return x(x(e.localStore).persistence).vi()}async function g$(t,e,n,r){const i=x(t);if(i.dc)return void S("SyncEngine","Ignoring unexpected query state notification.");const s=i.rc.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await uS(i.localStore,mT(s[0])),a=Du.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Ae.EMPTY_BYTE_STRING);await nr(i,o,a);break}case"rejected":await Js(i.localStore,e,!0),eo(i,e,r);break;default:O()}}async function y$(t,e,n){const r=zg(t);if(r.dc){for(const i of e){if(r.rc.has(i)){S("SyncEngine","Adding an already active target "+i);continue}const s=await aS(r.localStore,i),o=await Xs(r.localStore,s);await Ug(r,SS(s),o.targetId,!1,o.resumeToken),Dh(r.remoteStore,o)}for(const i of n)r.rc.has(i)&&await Js(r.localStore,i,!1).then(()=>{su(r.remoteStore,i),eo(r,i)}).catch(Gr)}}function zg(t){const e=x(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ES.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=c$.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=i$.bind(null,e),e.sc.zo=KM.bind(null,e.eventManager),e.sc.wc=QM.bind(null,e.eventManager),e}function jg(t){const e=x(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=s$.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=o$.bind(null,e),e}function v$(t,e,n){const r=x(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const p=x(h),y=$e(d.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",v=>p.Ns.getBundleMetadata(v,d.id)).then(v=>!!v&&v.createTime.compareTo(y)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(vS(a));const u=new XM(a,i.localStore,s.It);let l=await s.mc();for(;l;){const h=await u.Fu(l);h&&o._updateProgress(h),l=await s.mc()}const c=await u.complete();return await nr(i,c.Lu,void 0),await function(h,d){const p=x(h);return p.persistence.runTransaction("Save bundle","readwrite",y=>p.Ns.saveBundleMetadata(y,d))}(i.localStore,a),o._completeWith(c.progress),Promise.resolve(c.Bu)}catch(a){return Ws("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class kS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Ou(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return rS(this.persistence,new nS,e.initialUser,this.It)}yc(e){return new tS(xh.Bs,this.It)}gc(e){return new cS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class CS extends kS{constructor(e,n,r){super(),this.Ac=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await jg(this.Ac.syncEngine),await wo(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return rS(this.persistence,new nS,e.initialUser,this.It)}Tc(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new uM(r,e.asyncQueue,n)}Ec(e,n){const r=new HO(n,this.persistence);return new qO(e.asyncQueue,r)}yc(e){const n=Cg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?wt.withCacheSize(this.cacheSizeBytes):wt.DEFAULT;return new kg(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,hS(),Ul(),this.It,this.sharedClientState,!!this.forceOwnership)}gc(e){return new cS}}class w$ extends CS{constructor(e,n){super(e,n,!1),this.Ac=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ac.syncEngine;this.sharedClientState instanceof jd&&(this.sharedClientState.syncEngine={Fr:f$.bind(null,n),$r:g$.bind(null,n),Br:y$.bind(null,n),vi:m$.bind(null,n),Mr:d$.bind(null,n)},await this.sharedClientState.start()),await this.persistence.li(async r=>{await p$(this.Ac.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}gc(e){const n=hS();if(!jd.C(n))throw new T(_.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Cg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new jd(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class qg{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>t_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=l$.bind(null,this.syncEngine),await vp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new GM}createDatastore(e){const n=Ou(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new xM(i));var i;return function(s,o,a,u){return new OM(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>t_(this.syncEngine,a,0),o=Xw.C()?new Xw:new RM,new MM(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new e$(r,i,s,o,a,u);return l&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=x(e);S("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await vo(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Hg(t,e,n){if(!n)throw new T(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bS(t,e,n,r){if(e===!0&&r===!0)throw new T(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function r_(t){if(!N.isDocumentKey(t))throw new T(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function i_(t){if(N.isDocumentKey(t))throw new T(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ph(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":O()}function X(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ph(t);throw new T(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function RS(t,e){if(e<=0)throw new T(_.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */const s_=new Map;class o_{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new T(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new T(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,bS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Mu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new o_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new T(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new o_(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new DO;switch(n.type){case"gapi":const r=n.client;return new MO(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new T(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=s_.get(e);n&&(S("ComponentProvider","Removing Datastore"),s_.delete(e),n.terminate())}(this),Promise.resolve()}}function _$(t,e,n,r={}){var i;const s=(t=X(t,Mu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Ws("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Oe.MOCK_USER;else{o=VI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new T(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Oe(u)}t._authCredentials=new PO(new Z1(o,a))}}/**
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
 */class se{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new se(this.firestore,e,this._key)}}class at{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new at(this.firestore,e,this._query)}}class kn extends at{constructor(e,n,r){super(e,n,mo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new se(this.firestore,null,new N(e))}withConverter(e){return new kn(this.firestore,e,this._path)}}function AS(t,e,...n){if(t=M(t),Hg("collection","path",e),t instanceof Mu){const r=K.fromString(e,...n);return i_(r),new kn(t,null,r)}{if(!(t instanceof se||t instanceof kn))throw new T(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(K.fromString(e,...n));return i_(r),new kn(t.firestore,null,r)}}function I$(t,e){if(t=X(t,Mu),Hg("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new T(_.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new at(t,null,function(n){return new er(K.emptyPath(),n)}(e))}function Oc(t,e,...n){if(t=M(t),arguments.length===1&&(e=eT.R()),Hg("doc","path",e),t instanceof Mu){const r=K.fromString(e,...n);return r_(r),new se(t,null,new N(r))}{if(!(t instanceof se||t instanceof kn))throw new T(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(K.fromString(e,...n));return r_(r),new se(t.firestore,t instanceof kn?t.converter:null,new N(r))}}function NS(t,e){return t=M(t),e=M(e),(t instanceof se||t instanceof kn)&&(e instanceof se||e instanceof kn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function xS(t,e){return t=M(t),e=M(e),t instanceof at&&e instanceof at&&t.firestore===e.firestore&&Nu(t._query,e._query)&&t.converter===e.converter}/**
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
 */function a_(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
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
 */class Oh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Ee("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class E${constructor(e,n){this.Pc=e,this.It=n,this.metadata=new Me,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(r=>{r&&r.Ou()?this.metadata.resolve(r.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.payload)}`))},r=>this.metadata.reject(r))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const n=this.vc.decode(e),r=Number(n);isNaN(r)&&this.Dc(`length string (${n}) is not valid number`);const i=await this.Cc(r);return new YM(JSON.parse(i),e.length+r)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const n=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class T${constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(_.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=x(r),o=ru(s.It)+"/documents",a={documents:i.map(h=>nu(s.It,h))},u=await s._o("BatchGetDocuments",o,a,i.length),l=new Map;u.forEach(h=>{const d=SL(s.It,h);l.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=l.get(h.toString());F(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new yo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=N.fromPath(r);this.mutations.push(new yg(i,this.precondition(i)))}),await async function(n,r){const i=x(n),s=ru(i.It)+"/documents",o={writes:r.map(a=>iu(i.It,a))};await i.ao("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw O();n=U.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new T(_.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(U.min())?ue.exists(!1):ue.updateTime(n):ue.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(U.min()))throw new T(_.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ue.updateTime(n)}return ue.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class S${constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.kc=r.maxAttempts,this.No=new Ag(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.No.Ro(async()=>{const e=new T$(this.datastore),n=this.Mc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Fc(i)}))}).catch(r=>{this.Fc(r)})})}Mc(e){try{const n=this.updateFunction(e);return!Ru(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||!CT(n)}return!1}}/**
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
 */class k${constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Oe.UNAUTHENTICATED,this.clientId=eT.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{S("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(S("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Me;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Io(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function DS(t,e){t.asyncQueue.verifyOperationInProgress(),S("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await iS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function PS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Wg(t);S("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Jw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Jw(e.remoteStore,s)),t.onlineComponents=e}async function Wg(t){return t.offlineComponents||(S("FirestoreClient","Using default OfflineComponentProvider"),await DS(t,new kS)),t.offlineComponents}async function Lh(t){return t.onlineComponents||(S("FirestoreClient","Using default OnlineComponentProvider"),await PS(t,new qg)),t.onlineComponents}function OS(t){return Wg(t).then(e=>e.persistence)}function Gg(t){return Wg(t).then(e=>e.localStore)}function LS(t){return Lh(t).then(e=>e.remoteStore)}function Kg(t){return Lh(t).then(e=>e.syncEngine)}function C$(t){return Lh(t).then(e=>e.datastore)}async function to(t){const e=await Lh(t),n=e.eventManager;return n.onListen=t$.bind(null,e.syncEngine),n.onUnlisten=n$.bind(null,e.syncEngine),n}function b$(t){return t.asyncQueue.enqueue(async()=>{const e=await OS(t),n=await LS(t);return e.setNetworkEnabled(!0),function(r){const i=x(r);return i.wu.delete(0),Lu(i)}(n)})}function R$(t){return t.asyncQueue.enqueue(async()=>{const e=await OS(t),n=await LS(t);return e.setNetworkEnabled(!1),async function(r){const i=x(r);i.wu.add(0),await vo(i),i.yu.set("Offline")}(n)})}function A$(t,e){const n=new Me;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,u){const l=x(a);return l.persistence.runTransaction("read document","readonly",c=>l.localDocuments.getDocument(c,u))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new T(_.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Io(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Gg(t),e,n)),n.promise}function MS(t,e,n={}){const r=new Me;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Oh({next:h=>{s.enqueueAndForget(()=>Lg(i,c));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new T(_.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new T(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new $g(mo(o.path),l,{includeMetadataChanges:!0,ku:!0});return Og(i,c)}(await to(t),t.asyncQueue,e,n,r)),r.promise}function N$(t,e){const n=new Me;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Nc(r,i,!0),a=new IS(i,o.Hi),u=a.Wu(o.documents),l=a.applyChanges(u,!1);s.resolve(l.snapshot)}catch(o){const a=Io(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Gg(t),e,n)),n.promise}function $S(t,e,n={}){const r=new Me;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Oh({next:h=>{s.enqueueAndForget(()=>Lg(i,c)),h.fromCache&&a.source==="server"?u.reject(new T(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new $g(o,l,{includeMetadataChanges:!0,ku:!0});return Og(i,c)}(await to(t),t.asyncQueue,e,n,r)),r.promise}function x$(t,e){const n=new Oh(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){x(r).bu.add(i),i.next()}(await to(t),n)),()=>{n.bc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){x(r).bu.delete(i)}(await to(t),n))}}function D$(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(u,l){return new E$(u,l)}(function(u,l){if(u instanceof Uint8Array)return a_(u,l);if(u instanceof ArrayBuffer)return a_(new Uint8Array(u),l);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Ou(e));t.asyncQueue.enqueueAndForget(async()=>{v$(await Kg(t),i,r)})}function P$(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=x(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Ns.getNamedQuery(s,r))}(await Gg(t),e))}class O${constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new Ag(this,"async_queue_retry"),this.Wc=()=>{const n=Ul();n&&S("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Ul();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Ul();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new Me;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!Kr(e))throw e;S("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Ee("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Pg.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&O()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function _p(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class L${constructor(){this._progressObserver={},this._taskCompletionResolver=new Me,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const M$=-1;class ve extends Mu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new O$,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||US(this),this._firestoreClient.terminate()}}function ze(t){return t._firestoreClient||US(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function US(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new KO(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new k$(t._authCredentials,t._appCheckCredentials,t._queue,r)}function $$(t,e){VS(t=X(t,ve));const n=ze(t),r=t._freezeSettings(),i=new qg;return FS(n,i,new CS(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function U$(t){VS(t=X(t,ve));const e=ze(t),n=t._freezeSettings(),r=new qg;return FS(e,r,new w$(r,n.cacheSizeBytes))}function FS(t,e,n){const r=new Me;return t.asyncQueue.enqueue(async()=>{try{await DS(t,n),await PS(t,e),r.resolve()}catch(i){const s=i;if(!function(o){return o.name==="FirebaseError"?o.code===_.FAILED_PRECONDITION||o.code===_.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(s))throw s;Ws("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}}).then(()=>r.promise)}function F$(t){if(t._initialized&&!t._terminated)throw new T(_.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Me;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!tn.C())return Promise.resolve();const r=n+"main";await tn.delete(r)}(Cg(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function V$(t){return function(e){const n=new Me;return e.asyncQueue.enqueueAndForget(async()=>a$(await Kg(e),n)),n.promise}(ze(t=X(t,ve)))}function B$(t){return b$(ze(t=X(t,ve)))}function z$(t){return R$(ze(t=X(t,ve)))}function j$(t,e){const n=ze(t=X(t,ve)),r=new L$;return D$(n,t._databaseId,e,r),r}function q$(t,e){return P$(ze(t=X(t,ve)),e).then(n=>n?new at(t,null,n.query):null)}function VS(t){if(t._initialized||t._terminated)throw new T(_.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class An{constructor(e){this._byteString=e}static fromBase64String(e){try{return new An(Ae.fromBase64String(e))}catch(n){throw new T(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new An(Ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ur{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new T(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Xi{constructor(e){this._methodName=e}}/**
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
 */class Mh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new T(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new T(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return B(this._lat,e._lat)||B(this._long,e._long)}}/**
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
 */const H$=/^__.*__$/;class W${constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new tr(e,this.data,this.fieldMask,n,this.fieldTransforms):new go(e,this.data,n,this.fieldTransforms)}}class BS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new tr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function zS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class $h{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new $h(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Lc(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(zS(this.sa)&&H$.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class G${constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||Ou(e)}da(e,n,r,i=!1){return new $h({sa:e,methodName:n,fa:r,path:Te.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Ji(t){const e=t._freezeSettings(),n=Ou(t._databaseId);return new G$(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Uh(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);Jg("Data must be an object, but it was:",o,r);const a=HS(r,o);let u,l;if(s.merge)u=new Pt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Ip(e,h,n);if(!o.contains(d))throw new T(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);GS(c,d)||c.push(d)}u=new Pt(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new W$(new He(a),u,l)}class $u extends Xi{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $u}}function jS(t,e,n){return new $h({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.It,e.ignoreUndefinedProperties)}class Qg extends Xi{_toFieldTransform(e){return new xu(e.path,new Qs)}isEqual(e){return e instanceof Qg}}class K$ extends Xi{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=jS(this,e,!0),r=this._a.map(s=>Zi(s,n)),i=new Ui(r);return new xu(e.path,i)}isEqual(e){return this===e}}class Q$ extends Xi{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=jS(this,e,!0),r=this._a.map(s=>Zi(s,n)),i=new Fi(r);return new xu(e.path,i)}isEqual(e){return this===e}}class Y$ extends Xi{constructor(e,n){super(e),this.wa=n}_toFieldTransform(e){const n=new Ys(e.It,wT(e.It,this.wa));return new xu(e.path,n)}isEqual(e){return this===e}}function Yg(t,e,n,r){const i=t.da(1,e,n);Jg("Data must be an object, but it was:",i,r);const s=[],o=He.empty();Yi(r,(u,l)=>{const c=Zg(e,u,n);l=M(l);const h=i.ca(c);if(l instanceof $u)s.push(c);else{const d=Zi(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Pt(s);return new BS(o,a,i.fieldTransforms)}function Xg(t,e,n,r,i,s){const o=t.da(1,e,n),a=[Ip(e,r,n)],u=[i];if(s.length%2!=0)throw new T(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Ip(e,s[d])),u.push(s[d+1]);const l=[],c=He.empty();for(let d=a.length-1;d>=0;--d)if(!GS(l,a[d])){const p=a[d];let y=u[d];y=M(y);const v=o.ca(p);if(y instanceof $u)l.push(p);else{const E=Zi(y,v);E!=null&&(l.push(p),c.set(p,E))}}const h=new Pt(l);return new BS(c,h,o.fieldTransforms)}function qS(t,e,n,r=!1){return Zi(n,t.da(r?4:3,e))}function Zi(t,e){if(WS(t=M(t)))return Jg("Unsupported field value:",e,t),HS(t,e);if(t instanceof Xi)return function(n,r){if(!zS(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Zi(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=M(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return wT(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=le.fromDate(n);return{timestampValue:tu(r.It,i)}}if(n instanceof le){const i=new le(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:tu(r.It,i)}}if(n instanceof Mh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof An)return{bytesValue:PT(r.It,n._byteString)};if(n instanceof se){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:vg(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Ph(n)}`)}(t,e)}function HS(t,e){const n={};return aT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yi(t,(r,i)=>{const s=Zi(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function WS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof le||t instanceof Mh||t instanceof An||t instanceof se||t instanceof Xi)}function Jg(t,e,n){if(!WS(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ph(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function Ip(t,e,n){if((e=M(e))instanceof Ur)return e._internalPath;if(typeof e=="string")return Zg(t,e);throw Lc("Field path arguments must be of type string or ",t,!1,void 0,n)}const X$=new RegExp("[~\\*/\\[\\]]");function Zg(t,e,n){if(e.search(X$)>=0)throw Lc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ur(...e.split("."))._internalPath}catch{throw Lc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Lc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new T(_.INVALID_ARGUMENT,a+t+u)}function GS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ou{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new J$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class J$ extends ou{data(){return super.data()}}function Fh(t,e){return typeof e=="string"?Zg(t,e):e instanceof Ur?e._internalPath:e._delegate._internalPath}/**
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
 */function KS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new T(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uu{}function ar(t,...e){for(const n of e)t=n._apply(t);return t}class Z$ extends Uu{constructor(e,n,r){super(),this.ma=e,this.ga=n,this.ya=r,this.type="where"}_apply(e){const n=Ji(e.firestore),r=function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new T(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){l_(c,l);const p=[];for(const y of c)p.push(u_(a,i,y));h={arrayValue:{values:p}}}else h=u_(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||l_(c,l),h=qS(o,s,c,l==="in"||l==="not-in");const d=We.create(u,l,h);return function(p,y){if(y.dt()){const E=pg(p);if(E!==null&&!E.isEqual(y.field))throw new T(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${E.toString()}' and '${y.field.toString()}'`);const m=fg(p);m!==null&&ZS(p,y.field,m)}const v=function(E,m){for(const f of E.filters)if(m.indexOf(f.op)>=0)return f.op;return null}(p,function(E){switch(E){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(v!==null)throw v===y.op?new T(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${y.op.toString()}' filter.`):new T(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${y.op.toString()}' filters with '${v.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.ma,this.ga,this.ya);return new at(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new er(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function eU(t,e,n){const r=e,i=Fh("where",t);return new Z$(i,r,n)}class tU extends Uu{constructor(e,n){super(),this.ma=e,this.pa=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new T(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new T(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ps(i,s);return function(a,u){if(fg(a)===null){const l=pg(a);l!==null&&ZS(a,l,u.field)}}(r,o),o}(e._query,this.ma,this.pa);return new at(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new er(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function nU(t,e="asc"){const n=e,r=Fh("orderBy",t);return new tU(r,n)}class QS extends Uu{constructor(e,n,r){super(),this.type=e,this.Ia=n,this.Ta=r}_apply(e){return new at(e.firestore,e.converter,bc(e._query,this.Ia,this.Ta))}}function rU(t){return RS("limit",t),new QS("limit",t,"F")}function iU(t){return RS("limitToLast",t),new QS("limitToLast",t,"L")}class YS extends Uu{constructor(e,n,r){super(),this.type=e,this.Ea=n,this.Aa=r}_apply(e){const n=JS(e,this.type,this.Ea,this.Aa);return new at(e.firestore,e.converter,function(r,i){return new er(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function sU(...t){return new YS("startAt",t,!0)}function oU(...t){return new YS("startAfter",t,!1)}class XS extends Uu{constructor(e,n,r){super(),this.type=e,this.Ea=n,this.Aa=r}_apply(e){const n=JS(e,this.type,this.Ea,this.Aa);return new at(e.firestore,e.converter,function(r,i){return new er(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function aU(...t){return new XS("endBefore",t,!1)}function uU(...t){return new XS("endAt",t,!0)}function JS(t,e,n,r){if(n[0]=M(n[0]),n[0]instanceof ou)return function(i,s,o,a,u){if(!a)throw new T(_.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const c of Ks(i))if(c.field.isKeyField())l.push(Mi(s,a.key));else{const h=a.data.field(c.field);if(dg(h))throw new T(_.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new T(_.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new Mr(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Ji(t.firestore);return function(s,o,a,u,l,c){const h=s.explicitOrderBy;if(l.length>h.length)throw new T(_.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<l.length;p++){const y=l[p];if(h[p].field.isKeyField()){if(typeof y!="string")throw new T(_.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!mg(s)&&y.indexOf("/")!==-1)throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const v=s.path.child(K.fromString(y));if(!N.isDocumentKey(v))throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const E=new N(v);d.push(Mi(o,E))}else{const v=qS(a,u,y);d.push(v)}}return new Mr(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function u_(t,e,n){if(typeof(n=M(n))=="string"){if(n==="")throw new T(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!mg(e)&&n.indexOf("/")!==-1)throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(K.fromString(n));if(!N.isDocumentKey(r))throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Mi(t,new N(r))}if(n instanceof se)return Mi(t,n._key);throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ph(n)}.`)}function l_(t,e){if(!Array.isArray(t)||t.length===0)throw new T(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new T(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function ZS(t,e,n){if(!n.isEqual(e))throw new T(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class ey{convertValue(e,n="none"){switch(Li(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw O()}}convertObject(e,n){const r={};return Yi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Mh(me(e.latitude),me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=uT(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Xa(e));default:return null}}convertTimestamp(e){const n=Pr(e);return new le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=K.fromString(e);F(zT(r));const i=new Or(r.get(1),r.get(3)),s=new N(r.popFirst(5));return i.isEqual(n)||Ee(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Vh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class lU extends ey{constructor(e){super(),this.firestore=e}convertBytes(e){return new An(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new se(this.firestore,null,n)}}/**
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
 */class yi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yn extends ou{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new va(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Fh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class va extends Yn{data(e={}){return super.data(e)}}class Fr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new yi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new va(this._firestore,this._userDataWriter,r.key,r,new yi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new T(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new va(r._firestore,r._userDataWriter,o.doc.key,o.doc,new yi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new va(r._firestore,r._userDataWriter,o.doc.key,o.doc,new yi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:cU(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function cU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}function ek(t,e){return t instanceof Yn&&e instanceof Yn?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Fr&&e instanceof Fr&&t._firestore===e._firestore&&xS(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function hU(t){t=X(t,se);const e=X(t.firestore,ve);return MS(ze(e),t._key).then(n=>ty(e,t,n))}class es extends ey{constructor(e){super(),this.firestore=e}convertBytes(e){return new An(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new se(this.firestore,null,n)}}function dU(t){t=X(t,se);const e=X(t.firestore,ve),n=ze(e),r=new es(e);return A$(n,t._key).then(i=>new Yn(e,r,t._key,i,new yi(i!==null&&i.hasLocalMutations,!0),t.converter))}function fU(t){t=X(t,se);const e=X(t.firestore,ve);return MS(ze(e),t._key,{source:"server"}).then(n=>ty(e,t,n))}function pU(t){t=X(t,at);const e=X(t.firestore,ve),n=ze(e),r=new es(e);return KS(t._query),$S(n,t._query).then(i=>new Fr(e,r,t,i))}function mU(t){t=X(t,at);const e=X(t.firestore,ve),n=ze(e),r=new es(e);return N$(n,t._query).then(i=>new Fr(e,r,t,i))}function gU(t){t=X(t,at);const e=X(t.firestore,ve),n=ze(e),r=new es(e);return $S(n,t._query,{source:"server"}).then(i=>new Fr(e,r,t,i))}function c_(t,e,n){t=X(t,se);const r=X(t.firestore,ve),i=Vh(t.converter,e,n);return Fu(r,[Uh(Ji(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ue.none())])}function h_(t,e,n,...r){t=X(t,se);const i=X(t.firestore,ve),s=Ji(i);let o;return o=typeof(e=M(e))=="string"||e instanceof Ur?Xg(s,"updateDoc",t._key,e,n,r):Yg(s,"updateDoc",t._key,e),Fu(i,[o.toMutation(t._key,ue.exists(!0))])}function yU(t){return Fu(X(t.firestore,ve),[new yo(t._key,ue.none())])}function vU(t,e){const n=X(t.firestore,ve),r=Oc(t),i=Vh(t.converter,e);return Fu(n,[Uh(Ji(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ue.exists(!1))]).then(()=>r)}function tk(t,...e){var n,r,i;t=M(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||_p(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(_p(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof se)l=X(t.firestore,ve),c=mo(t._key.path),u={next:h=>{e[o]&&e[o](ty(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=X(t,at);l=X(h.firestore,ve),c=h._query;const d=new es(l);u={next:p=>{e[o]&&e[o](new Fr(l,d,h,p))},error:e[o+1],complete:e[o+2]},KS(t._query)}return function(h,d,p,y){const v=new Oh(y),E=new $g(d,v,p);return h.asyncQueue.enqueueAndForget(async()=>Og(await to(h),E)),()=>{v.bc(),h.asyncQueue.enqueueAndForget(async()=>Lg(await to(h),E))}}(ze(l),c,a,u)}function wU(t,e){return x$(ze(t=X(t,ve)),_p(e)?e:{next:e})}function Fu(t,e){return function(n,r){const i=new Me;return n.asyncQueue.enqueueAndForget(async()=>r$(await Kg(n),r,i)),i.promise}(ze(t),e)}function ty(t,e,n){const r=n.docs.get(e._key),i=new es(t);return new Yn(t,i,e._key,r,new yi(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const _U={maxAttempts:5};/**
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
 */class IU{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ji(e)}set(e,n,r){this._verifyNotCommitted();const i=fr(e,this._firestore),s=Vh(i.converter,n,r),o=Uh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,ue.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=fr(e,this._firestore);let o;return o=typeof(n=M(n))=="string"||n instanceof Ur?Xg(this._dataReader,"WriteBatch.update",s._key,n,r,i):Yg(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,ue.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=fr(e,this._firestore);return this._mutations=this._mutations.concat(new yo(n._key,ue.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new T(_.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function fr(t,e){if((t=M(t)).firestore!==e)throw new T(_.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class EU extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Ji(e)}get(e){const n=fr(e,this._firestore),r=new lU(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return O();const s=i[0];if(s.isFoundDocument())return new ou(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new ou(this._firestore,r,n._key,null,n.converter);throw O()})}set(e,n,r){const i=fr(e,this._firestore),s=Vh(i.converter,n,r),o=Uh(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=fr(e,this._firestore);let o;return o=typeof(n=M(n))=="string"||n instanceof Ur?Xg(this._dataReader,"Transaction.update",s._key,n,r,i):Yg(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=fr(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=fr(e,this._firestore),r=new es(this._firestore);return super.get(e).then(i=>new Yn(this._firestore,r,n._key,i._document,new yi(!1,!1),n.converter))}}function TU(t,e,n){t=X(t,ve);const r=Object.assign(Object.assign({},_U),n);return function(i){if(i.maxAttempts<1)throw new T(_.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new Me;return i.asyncQueue.enqueueAndForget(async()=>{const u=await C$(i);new S$(i.asyncQueue,u,o,s,a).run()}),a.promise}(ze(t),i=>e(new EU(t,i)),r)}/**
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
 */function SU(){return new $u("deleteField")}function kU(){return new Qg("serverTimestamp")}function CU(...t){return new K$("arrayUnion",t)}function bU(...t){return new Q$("arrayRemove",t)}function RU(t){return new Y$("increment",t)}(function(t,e=!0){(function(n){po=n})(jr),Gn(new Kt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new ve(new OO(n.getProvider("auth-internal")),new UO(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new T(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Or(a.options.projectId,u)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ht(uw,"3.7.1",t),Ht(uw,"3.7.1","esm2017")})();const AU="@firebase/firestore-compat",NU="0.2.1";/**
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
 */function ny(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new T("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function d_(){if(typeof Uint8Array>"u")throw new T("unimplemented","Uint8Arrays are not available in this environment.")}function f_(){if(!WO())throw new T("unimplemented","Blobs are unavailable in Firestore in this environment.")}class au{constructor(e){this._delegate=e}static fromBase64String(e){return f_(),new au(An.fromBase64String(e))}static fromUint8Array(e){return d_(),new au(An.fromUint8Array(e))}toBase64(){return f_(),this._delegate.toBase64()}toUint8Array(){return d_(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Ep(t){return xU(t,["next","error","complete"])}function xU(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class DU{enableIndexedDbPersistence(e,n){return $$(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return U$(e._delegate)}clearIndexedDbPersistence(e){return F$(e._delegate)}}class nk{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Or||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Ws("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){_$(this._delegate,e,n,r)}enableNetwork(){return B$(this._delegate)}disableNetwork(){return z$(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,bS("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return V$(this._delegate)}onSnapshotsInSync(e){return wU(this._delegate,e)}get app(){if(!this._appCompat)throw new T("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new no(this,AS(this._delegate,e))}catch(n){throw ht(n,"collection()","Firestore.collection()")}}doc(e){try{return new zt(this,Oc(this._delegate,e))}catch(n){throw ht(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new ct(this,I$(this._delegate,e))}catch(n){throw ht(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return TU(this._delegate,n=>e(new rk(this,n)))}batch(){return ze(this._delegate),new ik(new IU(this._delegate,e=>Fu(this._delegate,e)))}loadBundle(e){return j$(this._delegate,e)}namedQuery(e){return q$(this._delegate,e).then(n=>n?new ct(this,n):null)}}class Bh extends ey{constructor(e){super(),this.firestore=e}convertBytes(e){return new au(new An(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return zt.forKey(n,this.firestore,null)}}function PU(t){NO(t)}class rk{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Bh(e)}get(e){const n=vi(e);return this._delegate.get(n).then(r=>new uu(this._firestore,new Yn(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=vi(e);return r?(ny("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=vi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=vi(e);return this._delegate.delete(n),this}}class ik{constructor(e){this._delegate=e}set(e,n,r){const i=vi(e);return r?(ny("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=vi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=vi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class ji{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new va(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new lu(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=ji.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new ji(e,new Bh(e),n),i.set(n,s)),s}}ji.INSTANCES=new WeakMap;class zt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Bh(e)}static forPath(e,n,r){if(e.length%2!==0)throw new T("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new zt(n,new se(n._delegate,r,new N(e)))}static forKey(e,n,r){return new zt(n,new se(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new no(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new no(this.firestore,AS(this._delegate,e))}catch(n){throw ht(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=M(e),e instanceof se?NS(this._delegate,e):!1}set(e,n){n=ny("DocumentReference.set",n);try{return n?c_(this._delegate,e,n):c_(this._delegate,e)}catch(r){throw ht(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?h_(this._delegate,e):h_(this._delegate,e,n,...r)}catch(i){throw ht(i,"updateDoc()","DocumentReference.update()")}}delete(){return yU(this._delegate)}onSnapshot(...e){const n=sk(e),r=ok(e,i=>new uu(this.firestore,new Yn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return tk(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=dU(this._delegate):(e==null?void 0:e.source)==="server"?n=fU(this._delegate):n=hU(this._delegate),n.then(r=>new uu(this.firestore,new Yn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new zt(this.firestore,e?this._delegate.withConverter(ji.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ht(t,e,n){return t.message=t.message.replace(e,n),t}function sk(t){for(const e of t)if(typeof e=="object"&&!Ep(e))return e;return{}}function ok(t,e){var n,r;let i;return Ep(t[0])?i=t[0]:Ep(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class uu{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new zt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return ek(this._delegate,e._delegate)}}class lu extends uu{data(e){const n=this._delegate.data(e);return xO(n!==void 0),n}}class ct{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Bh(e)}where(e,n,r){try{return new ct(this.firestore,ar(this._delegate,eU(e,n,r)))}catch(i){throw ht(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new ct(this.firestore,ar(this._delegate,nU(e,n)))}catch(r){throw ht(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new ct(this.firestore,ar(this._delegate,rU(e)))}catch(n){throw ht(n,"limit()","Query.limit()")}}limitToLast(e){try{return new ct(this.firestore,ar(this._delegate,iU(e)))}catch(n){throw ht(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new ct(this.firestore,ar(this._delegate,sU(...e)))}catch(n){throw ht(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new ct(this.firestore,ar(this._delegate,oU(...e)))}catch(n){throw ht(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new ct(this.firestore,ar(this._delegate,aU(...e)))}catch(n){throw ht(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new ct(this.firestore,ar(this._delegate,uU(...e)))}catch(n){throw ht(n,"endAt()","Query.endAt()")}}isEqual(e){return xS(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=mU(this._delegate):(e==null?void 0:e.source)==="server"?n=gU(this._delegate):n=pU(this._delegate),n.then(r=>new Tp(this.firestore,new Fr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=sk(e),r=ok(e,i=>new Tp(this.firestore,new Fr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return tk(this._delegate,n,r)}withConverter(e){return new ct(this.firestore,e?this._delegate.withConverter(ji.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class OU{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new lu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Tp{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new ct(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new lu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new OU(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new lu(this._firestore,r))})}isEqual(e){return ek(this._delegate,e._delegate)}}class no extends ct{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new zt(this.firestore,e):null}doc(e){try{return e===void 0?new zt(this.firestore,Oc(this._delegate)):new zt(this.firestore,Oc(this._delegate,e))}catch(n){throw ht(n,"doc()","CollectionReference.doc()")}}add(e){return vU(this._delegate,e).then(n=>new zt(this.firestore,n))}isEqual(e){return NS(this._delegate,e._delegate)}withConverter(e){return new no(this.firestore,e?this._delegate.withConverter(ji.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function vi(t){return X(t,se)}/**
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
 */class ry{constructor(...e){this._delegate=new Ur(...e)}static documentId(){return new ry(Te.keyField().canonicalString())}isEqual(e){return e=M(e),e instanceof Ur?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class ci{constructor(e){this._delegate=e}static serverTimestamp(){const e=kU();return e._methodName="FieldValue.serverTimestamp",new ci(e)}static delete(){const e=SU();return e._methodName="FieldValue.delete",new ci(e)}static arrayUnion(...e){const n=CU(...e);return n._methodName="FieldValue.arrayUnion",new ci(n)}static arrayRemove(...e){const n=bU(...e);return n._methodName="FieldValue.arrayRemove",new ci(n)}static increment(e){const n=RU(e);return n._methodName="FieldValue.increment",new ci(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const LU={Firestore:nk,GeoPoint:Mh,Timestamp:le,Blob:au,Transaction:rk,WriteBatch:ik,DocumentReference:zt,DocumentSnapshot:uu,Query:ct,QueryDocumentSnapshot:lu,QuerySnapshot:Tp,CollectionReference:no,FieldPath:ry,FieldValue:ci,setLogLevel:PU,CACHE_SIZE_UNLIMITED:M$};function MU(t,e){t.INTERNAL.registerComponent(new Kt("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},LU)))}/**
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
 */function $U(t){MU(t,(e,n)=>new nk(e,n,new DU)),t.registerVersion(AU,NU)}$U(an);/**
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
 */const ak="firebasestorage.googleapis.com",uk="storageBucket",UU=2*60*1e3,FU=10*60*1e3,VU=1e3;/**
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
 */class we extends rt{constructor(e,n,r=0){super(qd(e),`Firebase Storage: ${n} (${qd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,we.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return qd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function qd(t){return"storage/"+t}function iy(){const t="An unknown error occurred, please check the error payload for server response.";return new we("unknown",t)}function BU(t){return new we("object-not-found","Object '"+t+"' does not exist.")}function zU(t){return new we("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function jU(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new we("unauthenticated",t)}function qU(){return new we("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function HU(t){return new we("unauthorized","User does not have permission to access '"+t+"'.")}function lk(){return new we("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function ck(){return new we("canceled","User canceled the upload/download.")}function WU(t){return new we("invalid-url","Invalid URL '"+t+"'.")}function GU(t){return new we("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function KU(){return new we("no-default-bucket","No default bucket found. Did you set the '"+uk+"' property when initializing the app?")}function hk(){return new we("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function QU(){return new we("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function YU(){return new we("no-download-url","The given file does not have any download URLs.")}function Ls(t){return new we("invalid-argument",t)}function dk(){return new we("app-deleted","The Firebase app was deleted.")}function fk(t){return new we("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function wa(t,e){return new we("invalid-format","String does not match format '"+t+"': "+e)}function jo(t){throw new we("internal-error","Internal error: "+t)}/**
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
 */class nt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=nt.makeFromUrl(e,n)}catch{return new nt(e,"")}if(r.path==="")return r;throw GU(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(I){I.path.charAt(I.path.length-1)==="/"&&(I.path_=I.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function l(I){I.path_=decodeURIComponent(I.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},v=n===ak?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",m=new RegExp(`^https?://${v}/${i}/${E}`,"i"),g=[{regex:a,indices:u,postModify:s},{regex:p,indices:y,postModify:l},{regex:m,indices:{bucket:1,path:2},postModify:l}];for(let I=0;I<g.length;I++){const k=g[I],R=k.regex.exec(e);if(R){const A=R[k.indices.bucket];let D=R[k.indices.path];D||(D=""),r=new nt(A,D),k.postModify(r);break}}if(r==null)throw WU(e);return r}}class XU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function JU(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let l=!1;function c(...E){l||(l=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(p,u())},E)}function d(){s&&clearTimeout(s)}function p(E,...m){if(l){d();return}if(E){d(),c.call(null,E,...m);return}if(u()||o){d(),c.call(null,E,...m);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let y=!1;function v(E){y||(y=!0,d(),!l&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function ZU(t){t(!1)}/**
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
 */function eF(t){return t!==void 0}function tF(t){return typeof t=="function"}function nF(t){return typeof t=="object"&&!Array.isArray(t)}function zh(t){return typeof t=="string"||t instanceof String}function p_(t){return sy()&&t instanceof Blob}function sy(){return typeof Blob<"u"}function Sp(t,e,n,r){if(r<e)throw Ls(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ls(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Xr(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function pk(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var ki;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ki||(ki={}));/**
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
 */function mk(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class rF{constructor(e,n,r,i,s,o,a,u,l,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ml(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ki.NO_ERROR,u=s.getStatus();if((!a||mk(u,this.additionalRetryCodes_))&&this.retry){const c=s.getErrorCode()===ki.ABORT;r(!1,new ml(!1,null,c));return}const l=this.successCodes_.indexOf(u)!==-1;r(!0,new ml(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());eF(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=iy();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?dk():ck();o(u)}else{const u=lk();o(u)}};this.canceled_?n(!1,new ml(!1,null,!0)):this.backoffId_=JU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ZU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ml{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function iF(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function sF(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function oF(t,e){e&&(t["X-Firebase-GMPID"]=e)}function aF(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function uF(t,e,n,r,i,s,o=!0){const a=pk(t.urlParams),u=t.url+a,l=Object.assign({},t.headers);return oF(l,e),iF(l,n),sF(l,s),aF(l,r),new rF(u,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function lF(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function cF(...t){const e=lF();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(sy())return new Blob(t);throw new we("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function hF(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function dF(t){return atob(t)}/**
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
 */const jt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Hd{constructor(e,n){this.data=e,this.contentType=n||null}}function gk(t,e){switch(t){case jt.RAW:return new Hd(yk(e));case jt.BASE64:case jt.BASE64URL:return new Hd(vk(t,e));case jt.DATA_URL:return new Hd(pF(e),mF(e))}throw iy()}function yk(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function fF(t){let e;try{e=decodeURIComponent(t)}catch{throw wa(jt.DATA_URL,"Malformed data URL.")}return yk(e)}function vk(t,e){switch(t){case jt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw wa(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case jt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw wa(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=dF(e)}catch{throw wa(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class wk{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw wa(jt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=gF(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function pF(t){const e=new wk(t);return e.base64?vk(jt.BASE64,e.rest):fF(e.rest)}function mF(t){return new wk(t).contentType}function gF(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Dn{constructor(e,n){let r=0,i="";p_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(p_(this.data_)){const r=this.data_,i=hF(r,e,n);return i===null?null:new Dn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Dn(r,!0)}}static getBlob(...e){if(sy()){const n=e.map(r=>r instanceof Dn?r.data_:r);return new Dn(cF.apply(null,n))}else{const n=e.map(o=>zh(o)?gk(jt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Dn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function oy(t){let e;try{e=JSON.parse(t)}catch{return null}return nF(e)?e:null}/**
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
 */function yF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function vF(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function _k(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function wF(t,e){return e}class ut{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||wF}}let gl=null;function _F(t){return!zh(t)||t.length<2?t:_k(t)}function jh(){if(gl)return gl;const t=[];t.push(new ut("bucket")),t.push(new ut("generation")),t.push(new ut("metageneration")),t.push(new ut("name","fullPath",!0));function e(s,o){return _F(o)}const n=new ut("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ut("size");return i.xform=r,t.push(i),t.push(new ut("timeCreated")),t.push(new ut("updated")),t.push(new ut("md5Hash",null,!0)),t.push(new ut("cacheControl",null,!0)),t.push(new ut("contentDisposition",null,!0)),t.push(new ut("contentEncoding",null,!0)),t.push(new ut("contentLanguage",null,!0)),t.push(new ut("contentType",null,!0)),t.push(new ut("metadata","customMetadata",!0)),gl=t,gl}function IF(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new nt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function EF(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return IF(r,t),r}function Ik(t,e,n){const r=oy(e);return r===null?null:EF(t,r,n)}function TF(t,e,n,r){const i=oy(e);if(i===null||!zh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(l=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),p=Xr(d,n,r),y=pk({alt:"media",token:l});return p+y})[0]}function ay(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const m_="prefixes",g_="items";function SF(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[m_])for(const i of n[m_]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new nt(e,s));r.prefixes.push(o)}if(n[g_])for(const i of n[g_]){const s=t._makeStorageReference(new nt(e,i.name));r.items.push(s)}return r}function kF(t,e,n){const r=oy(n);return r===null?null:SF(t,e,r)}class rr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Cn(t){if(!t)throw iy()}function qh(t,e){function n(r,i){const s=Ik(t,i,e);return Cn(s!==null),s}return n}function CF(t,e){function n(r,i){const s=kF(t,e,i);return Cn(s!==null),s}return n}function bF(t,e){function n(r,i){const s=Ik(t,i,e);return Cn(s!==null),TF(s,i,t.host,t._protocol)}return n}function Eo(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=qU():i=jU():n.getStatus()===402?i=zU(t.bucket):n.getStatus()===403?i=HU(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Hh(t){const e=Eo(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=BU(t.path)),s.serverResponse=i.serverResponse,s}return n}function Ek(t,e,n){const r=e.fullServerUrl(),i=Xr(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new rr(i,s,qh(t,n),o);return a.errorHandler=Hh(e),a}function RF(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=Xr(o,t.host,t._protocol),u="GET",l=t.maxOperationRetryTime,c=new rr(a,u,CF(t,e.bucket),l);return c.urlParams=s,c.errorHandler=Eo(e),c}function AF(t,e,n){const r=e.fullServerUrl(),i=Xr(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new rr(i,s,bF(t,n),o);return a.errorHandler=Hh(e),a}function NF(t,e,n,r){const i=e.fullServerUrl(),s=Xr(i,t.host,t._protocol),o="PATCH",a=ay(n,r),u={"Content-Type":"application/json; charset=utf-8"},l=t.maxOperationRetryTime,c=new rr(s,o,qh(t,r),l);return c.headers=u,c.body=a,c.errorHandler=Hh(e),c}function xF(t,e){const n=e.fullServerUrl(),r=Xr(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(u,l){}const a=new rr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Hh(e),a}function DF(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Tk(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=DF(null,e)),r}function PF(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let I=0;I<2;I++)g=g+Math.random().toString().slice(2);return g}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const l=Tk(e,r,i),c=ay(l,n),h="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+u+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+u+"--",p=Dn.getBlob(h,r,d);if(p===null)throw hk();const y={name:l.fullPath},v=Xr(s,t.host,t._protocol),E="POST",m=t.maxUploadRetryTime,f=new rr(v,E,qh(t,n),m);return f.urlParams=y,f.headers=o,f.body=p.uploadData(),f.errorHandler=Eo(e),f}class Mc{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function uy(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Cn(!1)}return Cn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function OF(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=Tk(e,r,i),a={name:o.fullPath},u=Xr(s,t.host,t._protocol),l="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=ay(o,n),d=t.maxUploadRetryTime;function p(v){uy(v);let E;try{E=v.getResponseHeader("X-Goog-Upload-URL")}catch{Cn(!1)}return Cn(zh(E)),E}const y=new rr(u,l,p,d);return y.urlParams=a,y.headers=c,y.body=h,y.errorHandler=Eo(e),y}function LF(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(l){const c=uy(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Cn(!1)}h||Cn(!1);const d=Number(h);return Cn(!isNaN(d)),new Mc(d,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,u=new rr(n,o,s,a);return u.headers=i,u.errorHandler=Eo(e),u}const y_=256*1024;function MF(t,e,n,r,i,s,o,a){const u=new Mc(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw QU();const l=u.total-u.current;let c=l;i>0&&(c=Math.min(c,i));const h=u.current,d=h+c;let p="";c===0?p="finalize":l===c?p="upload, finalize":p="upload";const y={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${u.current}`},v=r.slice(h,d);if(v===null)throw hk();function E(I,k){const R=uy(I,["active","final"]),A=u.current+c,D=r.size();let J;return R==="final"?J=qh(e,s)(I,k):J=null,new Mc(A,D,R==="final",J)}const m="POST",f=e.maxUploadRetryTime,g=new rr(n,m,E,f);return g.headers=y,g.body=v.uploadData(),g.progressCallback=a||null,g.errorHandler=Eo(t),g}/**
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
 */const $F={STATE_CHANGED:"state_changed"},dt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Wd(t){switch(t){case"running":case"pausing":case"canceling":return dt.RUNNING;case"paused":return dt.PAUSED;case"success":return dt.SUCCESS;case"canceled":return dt.CANCELED;case"error":return dt.ERROR;default:return dt.ERROR}}/**
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
 */class UF{constructor(e,n,r){if(tF(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function os(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class FF{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ki.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ki.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ki.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw jo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw jo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw jo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw jo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw jo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class VF extends FF{initXhr(){this.xhr_.responseType="text"}}function vn(){return new VF}/**
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
 */class Sk{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=jh(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(mk(i.status,[]))if(s)i=lk();else{this.sleepTime=Math.max(this.sleepTime*2,VU),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=OF(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,vn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=LF(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,vn,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=y_*this._chunkMultiplier,n=new Mc(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=MF(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const a=this._ref.storage._makeRequest(o,vn,i,s,!1);this._request=a,a.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){y_*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=Ek(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,vn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=PF(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,vn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=ck(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Wd(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new UF(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Wd(this._state)){case dt.SUCCESS:os(this._resolve.bind(null,this.snapshot))();break;case dt.CANCELED:case dt.ERROR:const n=this._reject;os(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Wd(this._state)){case dt.RUNNING:case dt.PAUSED:e.next&&os(e.next.bind(e,this.snapshot))();break;case dt.SUCCESS:e.complete&&os(e.complete.bind(e))();break;case dt.CANCELED:case dt.ERROR:e.error&&os(e.error.bind(e,this._error))();break;default:e.error&&os(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class qi{constructor(e,n){this._service=e,n instanceof nt?this._location=n:this._location=nt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new qi(e,n)}get root(){const e=new nt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _k(this._location.path)}get storage(){return this._service}get parent(){const e=yF(this._location.path);if(e===null)return null;const n=new nt(this._location.bucket,e);return new qi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw fk(e)}}function BF(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Sk(t,new Dn(e),n)}function zF(t){const e={prefixes:[],items:[]};return kk(t,e).then(()=>e)}async function kk(t,e,n){const i=await Ck(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await kk(t,e,i.nextPageToken)}function Ck(t,e){e!=null&&typeof e.maxResults=="number"&&Sp("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=RF(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,vn)}function jF(t){t._throwIfRoot("getMetadata");const e=Ek(t.storage,t._location,jh());return t.storage.makeRequestWithTokens(e,vn)}function qF(t,e){t._throwIfRoot("updateMetadata");const n=NF(t.storage,t._location,e,jh());return t.storage.makeRequestWithTokens(n,vn)}function HF(t){t._throwIfRoot("getDownloadURL");const e=AF(t.storage,t._location,jh());return t.storage.makeRequestWithTokens(e,vn).then(n=>{if(n===null)throw YU();return n})}function WF(t){t._throwIfRoot("deleteObject");const e=xF(t.storage,t._location);return t.storage.makeRequestWithTokens(e,vn)}function bk(t,e){const n=vF(t._location.path,e),r=new nt(t._location.bucket,n);return new qi(t.storage,r)}/**
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
 */function GF(t){return/^[A-Za-z]+:\/\//.test(t)}function KF(t,e){return new qi(t,e)}function Rk(t,e){if(t instanceof ly){const n=t;if(n._bucket==null)throw KU();const r=new qi(n,n._bucket);return e!=null?Rk(r,e):r}else return e!==void 0?bk(t,e):t}function QF(t,e){if(e&&GF(e)){if(t instanceof ly)return KF(t,e);throw Ls("To use ref(service, url), the first argument must be a Storage instance.")}else return Rk(t,e)}function v_(t,e){const n=e==null?void 0:e[uk];return n==null?null:nt.makeFromBucketSpec(n,t)}function YF(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:VI(i,t.app.options.projectId))}class ly{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=ak,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=UU,this._maxUploadRetryTime=FU,this._requests=new Set,i!=null?this._bucket=nt.makeFromBucketSpec(i,this._host):this._bucket=v_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=nt.makeFromBucketSpec(this._url,e):this._bucket=v_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Sp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Sp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new qi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new XU(dk());{const o=uF(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const w_="@firebase/storage",__="0.9.12";/**
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
 */const XF="storage";function JF(t,e,n){return t=M(t),BF(t,e,n)}function ZF(t){return t=M(t),jF(t)}function e2(t,e){return t=M(t),qF(t,e)}function t2(t,e){return t=M(t),Ck(t,e)}function n2(t){return t=M(t),zF(t)}function r2(t){return t=M(t),HF(t)}function i2(t){return t=M(t),WF(t)}function I_(t,e){return t=M(t),QF(t,e)}function s2(t,e){return bk(t,e)}function o2(t,e,n,r={}){YF(t,e,n,r)}function a2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new ly(n,r,i,e,jr)}function u2(){Gn(new Kt(XF,a2,"PUBLIC").setMultipleInstances(!0)),Ht(w_,__,""),Ht(w_,__,"esm2017")}u2();/**
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
 */class yl{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
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
 */class E_{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new yl(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new yl(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new yl(o,this,this._ref)):s={next:n.next?o=>n.next(new yl(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class T_{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new zn(e,this._service))}get items(){return this._delegate.items.map(e=>new zn(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=s2(this._delegate,e);return new zn(n,this.storage)}get root(){return new zn(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new zn(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new E_(JF(this._delegate,e,n),this)}putString(e,n=jt.RAW,r){this._throwIfRoot("putString");const i=gk(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new E_(new Sk(this._delegate,new Dn(i.data,!0),s),this)}listAll(){return n2(this._delegate).then(e=>new T_(e,this.storage))}list(e){return t2(this._delegate,e||void 0).then(n=>new T_(n,this.storage))}getMetadata(){return ZF(this._delegate)}updateMetadata(e){return e2(this._delegate,e)}getDownloadURL(){return r2(this._delegate)}delete(){return this._throwIfRoot("delete"),i2(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw fk(e)}}/**
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
 */class Ak{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(S_(e))throw Ls("ref() expected a child path but got a URL, use refFromURL instead.");return new zn(I_(this._delegate,e),this)}refFromURL(e){if(!S_(e))throw Ls("refFromURL() expected a full URL but got a child path, use ref() instead.");try{nt.makeFromUrl(e,this._delegate.host)}catch{throw Ls("refFromUrl() expected a valid full URL but got an invalid one.")}return new zn(I_(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){o2(this._delegate,e,n,r)}}function S_(t){return/^[A-Za-z]+:\/\//.test(t)}const l2="@firebase/storage-compat",c2="0.1.20";/**
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
 */const h2="storage-compat";function d2(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new Ak(n,r)}function f2(t){const e={TaskState:dt,TaskEvent:$F,StringFormat:jt,Storage:Ak,Reference:zn};t.INTERNAL.registerComponent(new Kt(h2,d2,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(l2,c2)}f2(an);const p2={apiKey:"AIzaSyDe6UcNYiCy-Cx-QdOEqc_HmbCtn9LcKbM",authDomain:"musicmatch-be96b.firebaseapp.com",projectId:"musicmatch-be96b",storageBucket:"musicmatch-be96b.appspot.com",messagingSenderId:"130618642270",appId:"1:130618642270:web:7108b490f68efe011809cf",measurementId:"G-JNGLM1KJQ6"};an.apps.length||an.initializeApp(p2);an.auth();const m2=an.firestore();an.storage();const g2="https://accounts.spotify.com/authorize",y2="11890314c28c4460b4eeffe357a237d2",v2="http://localhost:5173/",w2="token",_2=`${g2}?
client_id=${y2}
&redirect_uri=${v2}
&response_type=${w2}
&show_dialog=true`,I2=Pn.exports.createContext({user:null,spotifytoken:null});var cy={exports:{}},Wh={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E2=Pn.exports,T2=Symbol.for("react.element"),S2=Symbol.for("react.fragment"),k2=Object.prototype.hasOwnProperty,C2=E2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b2={key:!0,ref:!0,__self:!0,__source:!0};function Nk(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)k2.call(e,r)&&!b2.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:T2,type:t,key:s,ref:o,props:i,_owner:C2.current}}Wh.Fragment=S2;Wh.jsx=Nk;Wh.jsxs=Nk;(function(t){t.exports=Wh})(cy);const hn=cy.exports.jsx,R2=cy.exports.jsxs;function A2(){const[t,e]=Pn.exports.useState("");return Pn.exports.useState(""),Pn.exports.useState([]),Pn.exports.useEffect(()=>{var a,u,l;const n=m2.collection("Users"),r=window.location.hash;let i=window.localStorage.getItem("token");!i&&r&&(i=(l=(u=(a=r==null?void 0:r.substring(1))==null?void 0:a.split("&"))==null?void 0:u.find(c=>c.startsWith("access_token")))==null?void 0:l.split("=")[1],window.location.hash="",window.localStorage.setItem("token",i)),e(i);let s;(async()=>{s=await n.where("spotifytoken","==",i).get(),s.empty&&i!=null?await n.add({spotifytoken:i}):console.log("User must esxist")})()},[]),hn(I2.Provider,{value:{user:null,spotifytoken:null},children:R2("div",{className:"App",children:[hn("div",{children:hn("a",{target:"_blank",children:hn("img",{src:Xb,className:"logo",alt:"Vite logo"})})}),hn("h1",{children:"Music Match"}),hn("div",{className:"card",children:hn("a",{href:_2,target:"_blank",children:hn("button",{children:"Login with Spotify"})})})]})})}Gd.createRoot(document.getElementById("root")).render(hn(Kk.StrictMode,{children:hn(A2,{})}));
