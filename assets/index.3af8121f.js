var sf=Object.defineProperty;var of=(i,e,t)=>e in i?sf(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ta=(i,e,t)=>(of(i,typeof e!="symbol"?e+"":e,t),t);const af=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};af();function Xo(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const lf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cf=Xo(lf);function Pc(i){return!!i||i===""}function Yo(i){if(Le(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=at(n)?hf(n):Yo(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(at(i))return i;if(lt(i))return i}}const uf=/;(?![^(]*\))/g,ff=/:(.+)/;function hf(i){const e={};return i.split(uf).forEach(t=>{if(t){const n=t.split(ff);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function $o(i){let e="";if(at(i))e=i;else if(Le(i))for(let t=0;t<i.length;t++){const n=$o(i[t]);n&&(e+=n+" ")}else if(lt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const df=i=>at(i)?i:i==null?"":Le(i)||lt(i)&&(i.toString===Fc||!Ie(i.toString))?JSON.stringify(i,Dc,2):String(i),Dc=(i,e)=>e&&e.__v_isRef?Dc(i,e.value):Ii(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r])=>(t[`${n} =>`]=r,t),{})}:Rc(e)?{[`Set(${e.size})`]:[...e.values()]}:lt(e)&&!Le(e)&&!Nc(e)?String(e):e,Xe={},Ri=[],jt=()=>{},pf=()=>!1,mf=/^on[^a-z]/,fs=i=>mf.test(i),Zo=i=>i.startsWith("onUpdate:"),ht=Object.assign,Ko=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},gf=Object.prototype.hasOwnProperty,Ue=(i,e)=>gf.call(i,e),Le=Array.isArray,Ii=i=>hs(i)==="[object Map]",Rc=i=>hs(i)==="[object Set]",Ie=i=>typeof i=="function",at=i=>typeof i=="string",Jo=i=>typeof i=="symbol",lt=i=>i!==null&&typeof i=="object",Ic=i=>lt(i)&&Ie(i.then)&&Ie(i.catch),Fc=Object.prototype.toString,hs=i=>Fc.call(i),_f=i=>hs(i).slice(8,-1),Nc=i=>hs(i)==="[object Object]",Qo=i=>at(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Qr=Xo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ds=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},xf=/-(\w)/g,zi=ds(i=>i.replace(xf,(e,t)=>t?t.toUpperCase():"")),vf=/\B([A-Z])/g,Wi=ds(i=>i.replace(vf,"-$1").toLowerCase()),Oc=ds(i=>i.charAt(0).toUpperCase()+i.slice(1)),Ls=ds(i=>i?`on${Oc(i)}`:""),fr=(i,e)=>!Object.is(i,e),Ps=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},ss=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},Mf=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Aa;const yf=()=>Aa||(Aa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Zt;class bf{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Zt&&(this.parent=Zt,this.index=(Zt.scopes||(Zt.scopes=[])).push(this)-1)}run(e){if(this.active){const t=Zt;try{return Zt=this,e()}finally{Zt=t}}}on(){Zt=this}off(){Zt=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Sf(i,e=Zt){e&&e.active&&e.effects.push(i)}const ea=i=>{const e=new Set(i);return e.w=0,e.n=0,e},zc=i=>(i.w&Nn)>0,Uc=i=>(i.n&Nn)>0,wf=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=Nn},Ef=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];zc(r)&&!Uc(r)?r.delete(i):e[t++]=r,r.w&=~Nn,r.n&=~Nn}e.length=t}},yo=new WeakMap;let tr=0,Nn=1;const bo=30;let Vt;const Jn=Symbol(""),So=Symbol("");class ta{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Sf(this,n)}run(){if(!this.active)return this.fn();let e=Vt,t=Rn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Vt,Vt=this,Rn=!0,Nn=1<<++tr,tr<=bo?wf(this):Ca(this),this.fn()}finally{tr<=bo&&Ef(this),Nn=1<<--tr,Vt=this.parent,Rn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Vt===this?this.deferStop=!0:this.active&&(Ca(this),this.onStop&&this.onStop(),this.active=!1)}}function Ca(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let Rn=!0;const Bc=[];function qi(){Bc.push(Rn),Rn=!1}function ji(){const i=Bc.pop();Rn=i===void 0?!0:i}function Tt(i,e,t){if(Rn&&Vt){let n=yo.get(i);n||yo.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=ea()),Gc(r)}}function Gc(i,e){let t=!1;tr<=bo?Uc(i)||(i.n|=Nn,t=!zc(i)):t=!i.has(Vt),t&&(i.add(Vt),Vt.deps.push(i))}function _n(i,e,t,n,r,s){const a=yo.get(i);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Le(i))a.forEach((l,c)=>{(c==="length"||c>=n)&&o.push(l)});else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Le(i)?Qo(t)&&o.push(a.get("length")):(o.push(a.get(Jn)),Ii(i)&&o.push(a.get(So)));break;case"delete":Le(i)||(o.push(a.get(Jn)),Ii(i)&&o.push(a.get(So)));break;case"set":Ii(i)&&o.push(a.get(Jn));break}if(o.length===1)o[0]&&wo(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);wo(ea(l))}}function wo(i,e){const t=Le(i)?i:[...i];for(const n of t)n.computed&&La(n);for(const n of t)n.computed||La(n)}function La(i,e){(i!==Vt||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const Tf=Xo("__proto__,__v_isRef,__isVue"),kc=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Jo)),Af=na(),Cf=na(!1,!0),Lf=na(!0),Pa=Pf();function Pf(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=We(this);for(let s=0,a=this.length;s<a;s++)Tt(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(We)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){qi();const n=We(this)[e].apply(this,t);return ji(),n}}),i}function na(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?jf:jc:e?qc:Wc).get(n))return n;const a=Le(n);if(!i&&a&&Ue(Pa,r))return Reflect.get(Pa,r,s);const o=Reflect.get(n,r,s);return(Jo(r)?kc.has(r):Tf(r))||(i||Tt(n,"get",r),e)?o:ft(o)?a&&Qo(r)?o:o.value:lt(o)?i?Xc(o):sa(o):o}}const Df=Vc(),Rf=Vc(!0);function Vc(i=!1){return function(t,n,r,s){let a=t[n];if(hr(a)&&ft(a)&&!ft(r))return!1;if(!i&&!hr(r)&&(Eo(r)||(r=We(r),a=We(a)),!Le(t)&&ft(a)&&!ft(r)))return a.value=r,!0;const o=Le(t)&&Qo(n)?Number(n)<t.length:Ue(t,n),l=Reflect.set(t,n,r,s);return t===We(s)&&(o?fr(r,a)&&_n(t,"set",n,r):_n(t,"add",n,r)),l}}function If(i,e){const t=Ue(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&_n(i,"delete",e,void 0),n}function Ff(i,e){const t=Reflect.has(i,e);return(!Jo(e)||!kc.has(e))&&Tt(i,"has",e),t}function Nf(i){return Tt(i,"iterate",Le(i)?"length":Jn),Reflect.ownKeys(i)}const Hc={get:Af,set:Df,deleteProperty:If,has:Ff,ownKeys:Nf},Of={get:Lf,set(i,e){return!0},deleteProperty(i,e){return!0}},zf=ht({},Hc,{get:Cf,set:Rf}),ia=i=>i,ps=i=>Reflect.getPrototypeOf(i);function wr(i,e,t=!1,n=!1){i=i.__v_raw;const r=We(i),s=We(e);t||(e!==s&&Tt(r,"get",e),Tt(r,"get",s));const{has:a}=ps(r),o=n?ia:t?aa:dr;if(a.call(r,e))return o(i.get(e));if(a.call(r,s))return o(i.get(s));i!==r&&i.get(e)}function Er(i,e=!1){const t=this.__v_raw,n=We(t),r=We(i);return e||(i!==r&&Tt(n,"has",i),Tt(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function Tr(i,e=!1){return i=i.__v_raw,!e&&Tt(We(i),"iterate",Jn),Reflect.get(i,"size",i)}function Da(i){i=We(i);const e=We(this);return ps(e).has.call(e,i)||(e.add(i),_n(e,"add",i,i)),this}function Ra(i,e){e=We(e);const t=We(this),{has:n,get:r}=ps(t);let s=n.call(t,i);s||(i=We(i),s=n.call(t,i));const a=r.call(t,i);return t.set(i,e),s?fr(e,a)&&_n(t,"set",i,e):_n(t,"add",i,e),this}function Ia(i){const e=We(this),{has:t,get:n}=ps(e);let r=t.call(e,i);r||(i=We(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&_n(e,"delete",i,void 0),s}function Fa(){const i=We(this),e=i.size!==0,t=i.clear();return e&&_n(i,"clear",void 0,void 0),t}function Ar(i,e){return function(n,r){const s=this,a=s.__v_raw,o=We(a),l=e?ia:i?aa:dr;return!i&&Tt(o,"iterate",Jn),a.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function Cr(i,e,t){return function(...n){const r=this.__v_raw,s=We(r),a=Ii(s),o=i==="entries"||i===Symbol.iterator&&a,l=i==="keys"&&a,c=r[i](...n),u=t?ia:e?aa:dr;return!e&&Tt(s,"iterate",l?So:Jn),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function bn(i){return function(...e){return i==="delete"?!1:this}}function Uf(){const i={get(s){return wr(this,s)},get size(){return Tr(this)},has:Er,add:Da,set:Ra,delete:Ia,clear:Fa,forEach:Ar(!1,!1)},e={get(s){return wr(this,s,!1,!0)},get size(){return Tr(this)},has:Er,add:Da,set:Ra,delete:Ia,clear:Fa,forEach:Ar(!1,!0)},t={get(s){return wr(this,s,!0)},get size(){return Tr(this,!0)},has(s){return Er.call(this,s,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Ar(!0,!1)},n={get(s){return wr(this,s,!0,!0)},get size(){return Tr(this,!0)},has(s){return Er.call(this,s,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Ar(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=Cr(s,!1,!1),t[s]=Cr(s,!0,!1),e[s]=Cr(s,!1,!0),n[s]=Cr(s,!0,!0)}),[i,t,e,n]}const[Bf,Gf,kf,Vf]=Uf();function ra(i,e){const t=e?i?Vf:kf:i?Gf:Bf;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(Ue(t,r)&&r in n?t:n,r,s)}const Hf={get:ra(!1,!1)},Wf={get:ra(!1,!0)},qf={get:ra(!0,!1)},Wc=new WeakMap,qc=new WeakMap,jc=new WeakMap,jf=new WeakMap;function Xf(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yf(i){return i.__v_skip||!Object.isExtensible(i)?0:Xf(_f(i))}function sa(i){return hr(i)?i:oa(i,!1,Hc,Hf,Wc)}function $f(i){return oa(i,!1,zf,Wf,qc)}function Xc(i){return oa(i,!0,Of,qf,jc)}function oa(i,e,t,n,r){if(!lt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const a=Yf(i);if(a===0)return i;const o=new Proxy(i,a===2?n:t);return r.set(i,o),o}function Fi(i){return hr(i)?Fi(i.__v_raw):!!(i&&i.__v_isReactive)}function hr(i){return!!(i&&i.__v_isReadonly)}function Eo(i){return!!(i&&i.__v_isShallow)}function Yc(i){return Fi(i)||hr(i)}function We(i){const e=i&&i.__v_raw;return e?We(e):i}function $c(i){return ss(i,"__v_skip",!0),i}const dr=i=>lt(i)?sa(i):i,aa=i=>lt(i)?Xc(i):i;function Zc(i){Rn&&Vt&&(i=We(i),Gc(i.dep||(i.dep=ea())))}function Kc(i,e){i=We(i),i.dep&&wo(i.dep)}function ft(i){return!!(i&&i.__v_isRef===!0)}function pr(i){return Zf(i,!1)}function Zf(i,e){return ft(i)?i:new Kf(i,e)}class Kf{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:We(e),this._value=t?e:dr(e)}get value(){return Zc(this),this._value}set value(e){e=this.__v_isShallow?e:We(e),fr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:dr(e),Kc(this))}}function es(i){return ft(i)?i.value:i}const Jf={get:(i,e,t)=>es(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return ft(r)&&!ft(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function Jc(i){return Fi(i)?i:new Proxy(i,Jf)}class Qf{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ta(e,()=>{this._dirty||(this._dirty=!0,Kc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=We(this);return Zc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function eh(i,e,t=!1){let n,r;const s=Ie(i);return s?(n=i,r=jt):(n=i.get,r=i.set),new Qf(n,r,s||!r,t)}function In(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){ms(s,e,t)}return r}function Nt(i,e,t,n){if(Ie(i)){const s=In(i,e,t,n);return s&&Ic(s)&&s.catch(a=>{ms(a,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(Nt(i[s],e,t,n));return r}function ms(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){In(l,null,10,[i,a,o]);return}}th(i,t,r,n)}function th(i,e,t,n=!0){console.error(i)}let os=!1,To=!1;const Et=[];let hn=0;const ar=[];let nr=null,Ai=0;const lr=[];let Pn=null,Ci=0;const Qc=Promise.resolve();let la=null,Ao=null;function nh(i){const e=la||Qc;return i?e.then(this?i.bind(this):i):e}function ih(i){let e=hn+1,t=Et.length;for(;e<t;){const n=e+t>>>1;mr(Et[n])<i?e=n+1:t=n}return e}function eu(i){(!Et.length||!Et.includes(i,os&&i.allowRecurse?hn+1:hn))&&i!==Ao&&(i.id==null?Et.push(i):Et.splice(ih(i.id),0,i),tu())}function tu(){!os&&!To&&(To=!0,la=Qc.then(ru))}function rh(i){const e=Et.indexOf(i);e>hn&&Et.splice(e,1)}function nu(i,e,t,n){Le(i)?t.push(...i):(!e||!e.includes(i,i.allowRecurse?n+1:n))&&t.push(i),tu()}function sh(i){nu(i,nr,ar,Ai)}function oh(i){nu(i,Pn,lr,Ci)}function gs(i,e=null){if(ar.length){for(Ao=e,nr=[...new Set(ar)],ar.length=0,Ai=0;Ai<nr.length;Ai++)nr[Ai]();nr=null,Ai=0,Ao=null,gs(i,e)}}function iu(i){if(gs(),lr.length){const e=[...new Set(lr)];if(lr.length=0,Pn){Pn.push(...e);return}for(Pn=e,Pn.sort((t,n)=>mr(t)-mr(n)),Ci=0;Ci<Pn.length;Ci++)Pn[Ci]();Pn=null,Ci=0}}const mr=i=>i.id==null?1/0:i.id;function ru(i){To=!1,os=!0,gs(i),Et.sort((t,n)=>mr(t)-mr(n));const e=jt;try{for(hn=0;hn<Et.length;hn++){const t=Et[hn];t&&t.active!==!1&&In(t,null,14)}}finally{hn=0,Et.length=0,iu(),os=!1,la=null,(Et.length||ar.length||lr.length)&&ru(i)}}function ah(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||Xe;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in n){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=n[u]||Xe;h&&(r=t.map(m=>m.trim())),f&&(r=t.map(Mf))}let o,l=n[o=Ls(e)]||n[o=Ls(zi(e))];!l&&s&&(l=n[o=Ls(Wi(e))]),l&&Nt(l,i,6,r);const c=n[o+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[o])return;i.emitted[o]=!0,Nt(c,i,6,r)}}function su(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let a={},o=!1;if(!Ie(i)){const l=c=>{const u=su(c,e,!0);u&&(o=!0,ht(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!o?(n.set(i,null),null):(Le(s)?s.forEach(l=>a[l]=null):ht(a,s),n.set(i,a),a)}function _s(i,e){return!i||!fs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ue(i,e[0].toLowerCase()+e.slice(1))||Ue(i,Wi(e))||Ue(i,e))}let en=null,ou=null;function as(i){const e=en;return en=i,ou=i&&i.type.__scopeId||null,e}function lh(i,e=en,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&Wa(-1);const s=as(e),a=i(...r);return as(s),n._d&&Wa(1),a};return n._n=!0,n._c=!0,n._d=!0,n}function Ds(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:g,inheritAttrs:p}=i;let d,_;const S=as(i);try{if(t.shapeFlag&4){const w=r||n;d=Jt(u.call(w,w,f,s,m,h,g)),_=l}else{const w=e;d=Jt(w.length>1?w(s,{attrs:l,slots:o,emit:c}):w(s,null)),_=e.props?l:ch(l)}}catch(w){cr.length=0,ms(w,i,1),d=mn(pn)}let A=d;if(_&&p!==!1){const w=Object.keys(_),{shapeFlag:b}=A;w.length&&b&7&&(a&&w.some(Zo)&&(_=uh(_,a)),A=On(A,_))}return t.dirs&&(A=On(A),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&(A.transition=t.transition),d=A,as(S),d}const ch=i=>{let e;for(const t in i)(t==="class"||t==="style"||fs(t))&&((e||(e={}))[t]=i[t]);return e},uh=(i,e)=>{const t={};for(const n in i)(!Zo(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function fh(i,e,t){const{props:n,children:r,component:s}=i,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Na(n,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==n[h]&&!_s(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?Na(n,a,c):!0:!!a;return!1}function Na(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!_s(t,s))return!0}return!1}function hh({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const dh=i=>i.__isSuspense;function ph(i,e){e&&e.pendingBranch?Le(i)?e.effects.push(...i):e.effects.push(i):oh(i)}function mh(i,e){if(ot){let t=ot.provides;const n=ot.parent&&ot.parent.provides;n===t&&(t=ot.provides=Object.create(n)),t[i]=e}}function Rs(i,e,t=!1){const n=ot||en;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Ie(e)?e.call(n.proxy):e}}const Oa={};function Is(i,e,t){return au(i,e,t)}function au(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:a}=Xe){const o=ot;let l,c=!1,u=!1;if(ft(i)?(l=()=>i.value,c=Eo(i)):Fi(i)?(l=()=>i,n=!0):Le(i)?(u=!0,c=i.some(_=>Fi(_)||Eo(_)),l=()=>i.map(_=>{if(ft(_))return _.value;if(Fi(_))return Pi(_);if(Ie(_))return In(_,o,2)})):Ie(i)?e?l=()=>In(i,o,2):l=()=>{if(!(o&&o.isUnmounted))return f&&f(),Nt(i,o,3,[h])}:l=jt,e&&n){const _=l;l=()=>Pi(_())}let f,h=_=>{f=d.onStop=()=>{In(_,o,4)}};if(_r)return h=jt,e?t&&Nt(e,o,3,[l(),u?[]:void 0,h]):l(),jt;let m=u?[]:Oa;const g=()=>{if(!!d.active)if(e){const _=d.run();(n||c||(u?_.some((S,A)=>fr(S,m[A])):fr(_,m)))&&(f&&f(),Nt(e,o,3,[_,m===Oa?void 0:m,h]),m=_)}else d.run()};g.allowRecurse=!!e;let p;r==="sync"?p=g:r==="post"?p=()=>xt(g,o&&o.suspense):p=()=>sh(g);const d=new ta(l,p);return e?t?g():m=d.run():r==="post"?xt(d.run.bind(d),o&&o.suspense):d.run(),()=>{d.stop(),o&&o.scope&&Ko(o.scope.effects,d)}}function gh(i,e,t){const n=this.proxy,r=at(i)?i.includes(".")?lu(n,i):()=>n[i]:i.bind(n,n);let s;Ie(e)?s=e:(s=e.handler,t=e);const a=ot;Ui(this);const o=au(r,s.bind(n),t);return a?Ui(a):Qn(),o}function lu(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function Pi(i,e){if(!lt(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),ft(i))Pi(i.value,e);else if(Le(i))for(let t=0;t<i.length;t++)Pi(i[t],e);else if(Rc(i)||Ii(i))i.forEach(t=>{Pi(t,e)});else if(Nc(i))for(const t in i)Pi(i[t],e);return i}function _h(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ua(()=>{i.isMounted=!0}),hu(()=>{i.isUnmounting=!0}),i}const Lt=[Function,Array],xh={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Lt,onEnter:Lt,onAfterEnter:Lt,onEnterCancelled:Lt,onBeforeLeave:Lt,onLeave:Lt,onAfterLeave:Lt,onLeaveCancelled:Lt,onBeforeAppear:Lt,onAppear:Lt,onAfterAppear:Lt,onAppearCancelled:Lt},setup(i,{slots:e}){const t=rd(),n=_h();let r;return()=>{const s=e.default&&uu(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const p of s)if(p.type!==pn){a=p;break}}const o=We(i),{mode:l}=o;if(n.isLeaving)return Fs(a);const c=za(a);if(!c)return Fs(a);const u=Co(c,o,n,t);Lo(c,u);const f=t.subTree,h=f&&za(f);let m=!1;const{getTransitionKey:g}=c.type;if(g){const p=g();r===void 0?r=p:p!==r&&(r=p,m=!0)}if(h&&h.type!==pn&&(!jn(c,h)||m)){const p=Co(h,o,n,t);if(Lo(h,p),l==="out-in")return n.isLeaving=!0,p.afterLeave=()=>{n.isLeaving=!1,t.update()},Fs(a);l==="in-out"&&c.type!==pn&&(p.delayLeave=(d,_,S)=>{const A=cu(n,h);A[String(h.key)]=h,d._leaveCb=()=>{_(),d._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return a}}},vh=xh;function cu(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function Co(i,e,t,n){const{appear:r,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:p,onAppear:d,onAfterAppear:_,onAppearCancelled:S}=e,A=String(i.key),w=cu(t,i),b=(v,L)=>{v&&Nt(v,n,9,L)},C=(v,L)=>{const O=L[1];b(v,L),Le(v)?v.every(z=>z.length<=1)&&O():v.length<=1&&O()},F={mode:s,persisted:a,beforeEnter(v){let L=o;if(!t.isMounted)if(r)L=p||o;else return;v._leaveCb&&v._leaveCb(!0);const O=w[A];O&&jn(i,O)&&O.el._leaveCb&&O.el._leaveCb(),b(L,[v])},enter(v){let L=l,O=c,z=u;if(!t.isMounted)if(r)L=d||l,O=_||c,z=S||u;else return;let he=!1;const oe=v._enterCb=N=>{he||(he=!0,N?b(z,[v]):b(O,[v]),F.delayedLeave&&F.delayedLeave(),v._enterCb=void 0)};L?C(L,[v,oe]):oe()},leave(v,L){const O=String(i.key);if(v._enterCb&&v._enterCb(!0),t.isUnmounting)return L();b(f,[v]);let z=!1;const he=v._leaveCb=oe=>{z||(z=!0,L(),oe?b(g,[v]):b(m,[v]),v._leaveCb=void 0,w[O]===i&&delete w[O])};w[O]=i,h?C(h,[v,he]):he()},clone(v){return Co(v,e,t,n)}};return F}function Fs(i){if(xs(i))return i=On(i),i.children=null,i}function za(i){return xs(i)?i.children?i.children[0]:void 0:i}function Lo(i,e){i.shapeFlag&6&&i.component?Lo(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function uu(i,e=!1,t){let n=[],r=0;for(let s=0;s<i.length;s++){let a=i[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===Kt?(a.patchFlag&128&&r++,n=n.concat(uu(a.children,e,o))):(e||a.type!==pn)&&n.push(o!=null?On(a,{key:o}):a)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function ca(i){return Ie(i)?{setup:i,name:i.name}:i}const ts=i=>!!i.type.__asyncLoader,xs=i=>i.type.__isKeepAlive;function Mh(i,e){fu(i,"a",e)}function yh(i,e){fu(i,"da",e)}function fu(i,e,t=ot){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(vs(e,n,t),t){let r=t.parent;for(;r&&r.parent;)xs(r.parent.vnode)&&bh(n,e,t,r),r=r.parent}}function bh(i,e,t,n){const r=vs(e,i,n,!0);du(()=>{Ko(n[e],r)},t)}function vs(i,e,t=ot,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;qi(),Ui(t);const o=Nt(e,t,i,a);return Qn(),ji(),o});return n?r.unshift(s):r.push(s),s}}const vn=i=>(e,t=ot)=>(!_r||i==="sp")&&vs(i,e,t),Sh=vn("bm"),ua=vn("m"),wh=vn("bu"),Eh=vn("u"),hu=vn("bum"),du=vn("um"),Th=vn("sp"),Ah=vn("rtg"),Ch=vn("rtc");function Lh(i,e=ot){vs("ec",i,e)}function Un(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[n];l&&(qi(),Nt(l,t,8,[i.el,o,i,e]),ji())}}const Ph=Symbol(),Po=i=>i?wu(i)?ga(i)||i.proxy:Po(i.parent):null,ls=ht(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Po(i.parent),$root:i=>Po(i.root),$emit:i=>i.emit,$options:i=>mu(i),$forceUpdate:i=>i.f||(i.f=()=>eu(i.update)),$nextTick:i=>i.n||(i.n=nh.bind(i.proxy)),$watch:i=>gh.bind(i)}),Dh={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:a,type:o,appContext:l}=i;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(n!==Xe&&Ue(n,e))return a[e]=1,n[e];if(r!==Xe&&Ue(r,e))return a[e]=2,r[e];if((c=i.propsOptions[0])&&Ue(c,e))return a[e]=3,s[e];if(t!==Xe&&Ue(t,e))return a[e]=4,t[e];Do&&(a[e]=0)}}const u=ls[e];let f,h;if(u)return e==="$attrs"&&Tt(i,"get",e),u(i);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==Xe&&Ue(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,Ue(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return r!==Xe&&Ue(r,e)?(r[e]=t,!0):n!==Xe&&Ue(n,e)?(n[e]=t,!0):Ue(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},a){let o;return!!t[a]||i!==Xe&&Ue(i,a)||e!==Xe&&Ue(e,a)||(o=s[0])&&Ue(o,a)||Ue(n,a)||Ue(ls,a)||Ue(r.config.globalProperties,a)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Ue(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let Do=!0;function Rh(i){const e=mu(i),t=i.proxy,n=i.ctx;Do=!1,e.beforeCreate&&Ua(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:g,activated:p,deactivated:d,beforeDestroy:_,beforeUnmount:S,destroyed:A,unmounted:w,render:b,renderTracked:C,renderTriggered:F,errorCaptured:v,serverPrefetch:L,expose:O,inheritAttrs:z,components:he,directives:oe,filters:N}=e;if(c&&Ih(c,n,null,i.appContext.config.unwrapInjectedRef),a)for(const Y in a){const W=a[Y];Ie(W)&&(n[Y]=W.bind(t))}if(r){const Y=r.call(t,t);lt(Y)&&(i.data=sa(Y))}if(Do=!0,s)for(const Y in s){const W=s[Y],G=Ie(W)?W.bind(t,t):Ie(W.get)?W.get.bind(t,t):jt,K=!Ie(W)&&Ie(W.set)?W.set.bind(t):jt,fe=ud({get:G,set:K});Object.defineProperty(n,Y,{enumerable:!0,configurable:!0,get:()=>fe.value,set:le=>fe.value=le})}if(o)for(const Y in o)pu(o[Y],n,t,Y);if(l){const Y=Ie(l)?l.call(t):l;Reflect.ownKeys(Y).forEach(W=>{mh(W,Y[W])})}u&&Ua(u,i,"c");function H(Y,W){Le(W)?W.forEach(G=>Y(G.bind(t))):W&&Y(W.bind(t))}if(H(Sh,f),H(ua,h),H(wh,m),H(Eh,g),H(Mh,p),H(yh,d),H(Lh,v),H(Ch,C),H(Ah,F),H(hu,S),H(du,w),H(Th,L),Le(O))if(O.length){const Y=i.exposed||(i.exposed={});O.forEach(W=>{Object.defineProperty(Y,W,{get:()=>t[W],set:G=>t[W]=G})})}else i.exposed||(i.exposed={});b&&i.render===jt&&(i.render=b),z!=null&&(i.inheritAttrs=z),he&&(i.components=he),oe&&(i.directives=oe)}function Ih(i,e,t=jt,n=!1){Le(i)&&(i=Ro(i));for(const r in i){const s=i[r];let a;lt(s)?"default"in s?a=Rs(s.from||r,s.default,!0):a=Rs(s.from||r):a=Rs(s),ft(a)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function Ua(i,e,t){Nt(Le(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function pu(i,e,t,n){const r=n.includes(".")?lu(t,n):()=>t[n];if(at(i)){const s=e[i];Ie(s)&&Is(r,s)}else if(Ie(i))Is(r,i.bind(t));else if(lt(i))if(Le(i))i.forEach(s=>pu(s,e,t,n));else{const s=Ie(i.handler)?i.handler.bind(t):e[i.handler];Ie(s)&&Is(r,s,i)}}function mu(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=i.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>cs(l,c,a,!0)),cs(l,e,a)),s.set(e,l),l}function cs(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&cs(i,s,t,!0),r&&r.forEach(a=>cs(i,a,t,!0));for(const a in e)if(!(n&&a==="expose")){const o=Fh[a]||t&&t[a];i[a]=o?o(i[a],e[a]):e[a]}return i}const Fh={data:Ba,props:Hn,emits:Hn,methods:Hn,computed:Hn,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:Hn,directives:Hn,watch:Oh,provide:Ba,inject:Nh};function Ba(i,e){return e?i?function(){return ht(Ie(i)?i.call(this,this):i,Ie(e)?e.call(this,this):e)}:e:i}function Nh(i,e){return Hn(Ro(i),Ro(e))}function Ro(i){if(Le(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function mt(i,e){return i?[...new Set([].concat(i,e))]:e}function Hn(i,e){return i?ht(ht(Object.create(null),i),e):e}function Oh(i,e){if(!i)return e;if(!e)return i;const t=ht(Object.create(null),i);for(const n in e)t[n]=mt(i[n],e[n]);return t}function zh(i,e,t,n=!1){const r={},s={};ss(s,Ms,1),i.propsDefaults=Object.create(null),gu(i,e,r,s);for(const a in i.propsOptions[0])a in r||(r[a]=void 0);t?i.props=n?r:$f(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function Uh(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:a}}=i,o=We(r),[l]=i.propsOptions;let c=!1;if((n||a>0)&&!(a&16)){if(a&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(_s(i.emitsOptions,h))continue;const m=e[h];if(l)if(Ue(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const g=zi(h);r[g]=Io(l,o,g,m,i,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{gu(i,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Ue(e,f)&&((u=Wi(f))===f||!Ue(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Io(l,o,f,void 0,i,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Ue(e,f)&&!0)&&(delete s[f],c=!0)}c&&_n(i,"set","$attrs")}function gu(i,e,t,n){const[r,s]=i.propsOptions;let a=!1,o;if(e)for(let l in e){if(Qr(l))continue;const c=e[l];let u;r&&Ue(r,u=zi(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:_s(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,a=!0)}if(s){const l=We(t),c=o||Xe;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Io(r,l,f,c[f],i,!Ue(c,f))}}return a}function Io(i,e,t,n,r,s){const a=i[t];if(a!=null){const o=Ue(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&Ie(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(Ui(r),n=c[t]=l.call(null,e),Qn())}else n=l}a[0]&&(s&&!o?n=!1:a[1]&&(n===""||n===Wi(t))&&(n=!0))}return n}function _u(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,a={},o=[];let l=!1;if(!Ie(i)){const u=f=>{l=!0;const[h,m]=_u(f,e,!0);ht(a,h),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return n.set(i,Ri),Ri;if(Le(s))for(let u=0;u<s.length;u++){const f=zi(s[u]);Ga(f)&&(a[f]=Xe)}else if(s)for(const u in s){const f=zi(u);if(Ga(f)){const h=s[u],m=a[f]=Le(h)||Ie(h)?{type:h}:h;if(m){const g=Ha(Boolean,m.type),p=Ha(String,m.type);m[0]=g>-1,m[1]=p<0||g<p,(g>-1||Ue(m,"default"))&&o.push(f)}}}const c=[a,o];return n.set(i,c),c}function Ga(i){return i[0]!=="$"}function ka(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function Va(i,e){return ka(i)===ka(e)}function Ha(i,e){return Le(e)?e.findIndex(t=>Va(t,i)):Ie(e)&&Va(e,i)?0:-1}const xu=i=>i[0]==="_"||i==="$stable",fa=i=>Le(i)?i.map(Jt):[Jt(i)],Bh=(i,e,t)=>{if(e._n)return e;const n=lh((...r)=>fa(e(...r)),t);return n._c=!1,n},vu=(i,e,t)=>{const n=i._ctx;for(const r in i){if(xu(r))continue;const s=i[r];if(Ie(s))e[r]=Bh(r,s,n);else if(s!=null){const a=fa(s);e[r]=()=>a}}},Mu=(i,e)=>{const t=fa(e);i.slots.default=()=>t},Gh=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=We(e),ss(e,"_",t)):vu(e,i.slots={})}else i.slots={},e&&Mu(i,e);ss(i.slots,Ms,1)},kh=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,a=Xe;if(n.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(ht(r,e),!t&&o===1&&delete r._):(s=!e.$stable,vu(e,r)),a=e}else e&&(Mu(i,e),a={default:1});if(s)for(const o in r)!xu(o)&&!(o in a)&&delete r[o]};function yu(){return{app:null,config:{isNativeTag:pf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vh=0;function Hh(i,e){return function(n,r=null){Ie(n)||(n=Object.assign({},n)),r!=null&&!lt(r)&&(r=null);const s=yu(),a=new Set;let o=!1;const l=s.app={_uid:Vh++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:fd,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Ie(c.install)?(a.add(c),c.install(l,...u)):Ie(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=mn(n,r);return h.appContext=s,u&&e?e(h,c):i(h,c,f),o=!0,l._container=c,c.__vue_app__=l,ga(h.component)||h.component.proxy}},unmount(){o&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Fo(i,e,t,n,r=!1){if(Le(i)){i.forEach((h,m)=>Fo(h,e&&(Le(e)?e[m]:e),t,n,r));return}if(ts(n)&&!r)return;const s=n.shapeFlag&4?ga(n.component)||n.component.proxy:n.el,a=r?null:s,{i:o,r:l}=i,c=e&&e.r,u=o.refs===Xe?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(at(c)?(u[c]=null,Ue(f,c)&&(f[c]=null)):ft(c)&&(c.value=null)),Ie(l))In(l,o,12,[a,u]);else{const h=at(l),m=ft(l);if(h||m){const g=()=>{if(i.f){const p=h?u[l]:l.value;r?Le(p)&&Ko(p,s):Le(p)?p.includes(s)||p.push(s):h?(u[l]=[s],Ue(f,l)&&(f[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else h?(u[l]=a,Ue(f,l)&&(f[l]=a)):m&&(l.value=a,i.k&&(u[i.k]=a))};a?(g.id=-1,xt(g,t)):g()}}}const xt=ph;function Wh(i){return qh(i)}function qh(i,e){const t=yf();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=jt,cloneNode:g,insertStaticContent:p}=i,d=(E,P,k,Z=null,J=null,ie=null,re=!1,ae=null,ue=!!P.dynamicChildren)=>{if(E===P)return;E&&!jn(E,P)&&(Z=Se(E),se(E,J,ie,!0),E=null),P.patchFlag===-2&&(ue=!1,P.dynamicChildren=null);const{type:M,ref:x,shapeFlag:R}=P;switch(M){case ha:_(E,P,k,Z);break;case pn:S(E,P,k,Z);break;case Ns:E==null&&A(P,k,Z,re);break;case Kt:oe(E,P,k,Z,J,ie,re,ae,ue);break;default:R&1?C(E,P,k,Z,J,ie,re,ae,ue):R&6?N(E,P,k,Z,J,ie,re,ae,ue):(R&64||R&128)&&M.process(E,P,k,Z,J,ie,re,ae,ue,xe)}x!=null&&J&&Fo(x,E&&E.ref,ie,P||E,!P)},_=(E,P,k,Z)=>{if(E==null)n(P.el=o(P.children),k,Z);else{const J=P.el=E.el;P.children!==E.children&&c(J,P.children)}},S=(E,P,k,Z)=>{E==null?n(P.el=l(P.children||""),k,Z):P.el=E.el},A=(E,P,k,Z)=>{[E.el,E.anchor]=p(E.children,P,k,Z,E.el,E.anchor)},w=({el:E,anchor:P},k,Z)=>{let J;for(;E&&E!==P;)J=h(E),n(E,k,Z),E=J;n(P,k,Z)},b=({el:E,anchor:P})=>{let k;for(;E&&E!==P;)k=h(E),r(E),E=k;r(P)},C=(E,P,k,Z,J,ie,re,ae,ue)=>{re=re||P.type==="svg",E==null?F(P,k,Z,J,ie,re,ae,ue):O(E,P,J,ie,re,ae,ue)},F=(E,P,k,Z,J,ie,re,ae)=>{let ue,M;const{type:x,props:R,shapeFlag:B,transition:X,patchFlag:ne,dirs:_e}=E;if(E.el&&g!==void 0&&ne===-1)ue=E.el=g(E.el);else{if(ue=E.el=a(E.type,ie,R&&R.is,R),B&8?u(ue,E.children):B&16&&L(E.children,ue,null,Z,J,ie&&x!=="foreignObject",re,ae),_e&&Un(E,null,Z,"created"),R){for(const q in R)q!=="value"&&!Qr(q)&&s(ue,q,null,R[q],ie,E.children,Z,J,Pe);"value"in R&&s(ue,"value",null,R.value),(M=R.onVnodeBeforeMount)&&$t(M,Z,E)}v(ue,E,E.scopeId,re,Z)}_e&&Un(E,null,Z,"beforeMount");const y=(!J||J&&!J.pendingBranch)&&X&&!X.persisted;y&&X.beforeEnter(ue),n(ue,P,k),((M=R&&R.onVnodeMounted)||y||_e)&&xt(()=>{M&&$t(M,Z,E),y&&X.enter(ue),_e&&Un(E,null,Z,"mounted")},J)},v=(E,P,k,Z,J)=>{if(k&&m(E,k),Z)for(let ie=0;ie<Z.length;ie++)m(E,Z[ie]);if(J){let ie=J.subTree;if(P===ie){const re=J.vnode;v(E,re,re.scopeId,re.slotScopeIds,J.parent)}}},L=(E,P,k,Z,J,ie,re,ae,ue=0)=>{for(let M=ue;M<E.length;M++){const x=E[M]=ae?Dn(E[M]):Jt(E[M]);d(null,x,P,k,Z,J,ie,re,ae)}},O=(E,P,k,Z,J,ie,re)=>{const ae=P.el=E.el;let{patchFlag:ue,dynamicChildren:M,dirs:x}=P;ue|=E.patchFlag&16;const R=E.props||Xe,B=P.props||Xe;let X;k&&Bn(k,!1),(X=B.onVnodeBeforeUpdate)&&$t(X,k,P,E),x&&Un(P,E,k,"beforeUpdate"),k&&Bn(k,!0);const ne=J&&P.type!=="foreignObject";if(M?z(E.dynamicChildren,M,ae,k,Z,ne,ie):re||G(E,P,ae,null,k,Z,ne,ie,!1),ue>0){if(ue&16)he(ae,P,R,B,k,Z,J);else if(ue&2&&R.class!==B.class&&s(ae,"class",null,B.class,J),ue&4&&s(ae,"style",R.style,B.style,J),ue&8){const _e=P.dynamicProps;for(let y=0;y<_e.length;y++){const q=_e[y],ce=R[q],pe=B[q];(pe!==ce||q==="value")&&s(ae,q,ce,pe,J,E.children,k,Z,Pe)}}ue&1&&E.children!==P.children&&u(ae,P.children)}else!re&&M==null&&he(ae,P,R,B,k,Z,J);((X=B.onVnodeUpdated)||x)&&xt(()=>{X&&$t(X,k,P,E),x&&Un(P,E,k,"updated")},Z)},z=(E,P,k,Z,J,ie,re)=>{for(let ae=0;ae<P.length;ae++){const ue=E[ae],M=P[ae],x=ue.el&&(ue.type===Kt||!jn(ue,M)||ue.shapeFlag&70)?f(ue.el):k;d(ue,M,x,null,Z,J,ie,re,!0)}},he=(E,P,k,Z,J,ie,re)=>{if(k!==Z){for(const ae in Z){if(Qr(ae))continue;const ue=Z[ae],M=k[ae];ue!==M&&ae!=="value"&&s(E,ae,M,ue,re,P.children,J,ie,Pe)}if(k!==Xe)for(const ae in k)!Qr(ae)&&!(ae in Z)&&s(E,ae,k[ae],null,re,P.children,J,ie,Pe);"value"in Z&&s(E,"value",k.value,Z.value)}},oe=(E,P,k,Z,J,ie,re,ae,ue)=>{const M=P.el=E?E.el:o(""),x=P.anchor=E?E.anchor:o("");let{patchFlag:R,dynamicChildren:B,slotScopeIds:X}=P;X&&(ae=ae?ae.concat(X):X),E==null?(n(M,k,Z),n(x,k,Z),L(P.children,k,x,J,ie,re,ae,ue)):R>0&&R&64&&B&&E.dynamicChildren?(z(E.dynamicChildren,B,k,J,ie,re,ae),(P.key!=null||J&&P===J.subTree)&&bu(E,P,!0)):G(E,P,k,x,J,ie,re,ae,ue)},N=(E,P,k,Z,J,ie,re,ae,ue)=>{P.slotScopeIds=ae,E==null?P.shapeFlag&512?J.ctx.activate(P,k,Z,re,ue):te(P,k,Z,J,ie,re,ue):H(E,P,ue)},te=(E,P,k,Z,J,ie,re)=>{const ae=E.component=id(E,Z,J);if(xs(E)&&(ae.ctx.renderer=xe),sd(ae),ae.asyncDep){if(J&&J.registerDep(ae,Y),!E.el){const ue=ae.subTree=mn(pn);S(null,ue,P,k)}return}Y(ae,E,P,k,J,ie,re)},H=(E,P,k)=>{const Z=P.component=E.component;if(fh(E,P,k))if(Z.asyncDep&&!Z.asyncResolved){W(Z,P,k);return}else Z.next=P,rh(Z.update),Z.update();else P.el=E.el,Z.vnode=P},Y=(E,P,k,Z,J,ie,re)=>{const ae=()=>{if(E.isMounted){let{next:x,bu:R,u:B,parent:X,vnode:ne}=E,_e=x,y;Bn(E,!1),x?(x.el=ne.el,W(E,x,re)):x=ne,R&&Ps(R),(y=x.props&&x.props.onVnodeBeforeUpdate)&&$t(y,X,x,ne),Bn(E,!0);const q=Ds(E),ce=E.subTree;E.subTree=q,d(ce,q,f(ce.el),Se(ce),E,J,ie),x.el=q.el,_e===null&&hh(E,q.el),B&&xt(B,J),(y=x.props&&x.props.onVnodeUpdated)&&xt(()=>$t(y,X,x,ne),J)}else{let x;const{el:R,props:B}=P,{bm:X,m:ne,parent:_e}=E,y=ts(P);if(Bn(E,!1),X&&Ps(X),!y&&(x=B&&B.onVnodeBeforeMount)&&$t(x,_e,P),Bn(E,!0),R&&Ae){const q=()=>{E.subTree=Ds(E),Ae(R,E.subTree,E,J,null)};y?P.type.__asyncLoader().then(()=>!E.isUnmounted&&q()):q()}else{const q=E.subTree=Ds(E);d(null,q,k,Z,E,J,ie),P.el=q.el}if(ne&&xt(ne,J),!y&&(x=B&&B.onVnodeMounted)){const q=P;xt(()=>$t(x,_e,q),J)}(P.shapeFlag&256||_e&&ts(_e.vnode)&&_e.vnode.shapeFlag&256)&&E.a&&xt(E.a,J),E.isMounted=!0,P=k=Z=null}},ue=E.effect=new ta(ae,()=>eu(M),E.scope),M=E.update=()=>ue.run();M.id=E.uid,Bn(E,!0),M()},W=(E,P,k)=>{P.component=E;const Z=E.vnode.props;E.vnode=P,E.next=null,Uh(E,P.props,Z,k),kh(E,P.children,k),qi(),gs(void 0,E.update),ji()},G=(E,P,k,Z,J,ie,re,ae,ue=!1)=>{const M=E&&E.children,x=E?E.shapeFlag:0,R=P.children,{patchFlag:B,shapeFlag:X}=P;if(B>0){if(B&128){fe(M,R,k,Z,J,ie,re,ae,ue);return}else if(B&256){K(M,R,k,Z,J,ie,re,ae,ue);return}}X&8?(x&16&&Pe(M,J,ie),R!==M&&u(k,R)):x&16?X&16?fe(M,R,k,Z,J,ie,re,ae,ue):Pe(M,J,ie,!0):(x&8&&u(k,""),X&16&&L(R,k,Z,J,ie,re,ae,ue))},K=(E,P,k,Z,J,ie,re,ae,ue)=>{E=E||Ri,P=P||Ri;const M=E.length,x=P.length,R=Math.min(M,x);let B;for(B=0;B<R;B++){const X=P[B]=ue?Dn(P[B]):Jt(P[B]);d(E[B],X,k,null,J,ie,re,ae,ue)}M>x?Pe(E,J,ie,!0,!1,R):L(P,k,Z,J,ie,re,ae,ue,R)},fe=(E,P,k,Z,J,ie,re,ae,ue)=>{let M=0;const x=P.length;let R=E.length-1,B=x-1;for(;M<=R&&M<=B;){const X=E[M],ne=P[M]=ue?Dn(P[M]):Jt(P[M]);if(jn(X,ne))d(X,ne,k,null,J,ie,re,ae,ue);else break;M++}for(;M<=R&&M<=B;){const X=E[R],ne=P[B]=ue?Dn(P[B]):Jt(P[B]);if(jn(X,ne))d(X,ne,k,null,J,ie,re,ae,ue);else break;R--,B--}if(M>R){if(M<=B){const X=B+1,ne=X<x?P[X].el:Z;for(;M<=B;)d(null,P[M]=ue?Dn(P[M]):Jt(P[M]),k,ne,J,ie,re,ae,ue),M++}}else if(M>B)for(;M<=R;)se(E[M],J,ie,!0),M++;else{const X=M,ne=M,_e=new Map;for(M=ne;M<=B;M++){const Ne=P[M]=ue?Dn(P[M]):Jt(P[M]);Ne.key!=null&&_e.set(Ne.key,M)}let y,q=0;const ce=B-ne+1;let pe=!1,me=0;const be=new Array(ce);for(M=0;M<ce;M++)be[M]=0;for(M=X;M<=R;M++){const Ne=E[M];if(q>=ce){se(Ne,J,ie,!0);continue}let D;if(Ne.key!=null)D=_e.get(Ne.key);else for(y=ne;y<=B;y++)if(be[y-ne]===0&&jn(Ne,P[y])){D=y;break}D===void 0?se(Ne,J,ie,!0):(be[D-ne]=M+1,D>=me?me=D:pe=!0,d(Ne,P[D],k,null,J,ie,re,ae,ue),q++)}const Fe=pe?jh(be):Ri;for(y=Fe.length-1,M=ce-1;M>=0;M--){const Ne=ne+M,D=P[Ne],de=Ne+1<x?P[Ne+1].el:Z;be[M]===0?d(null,D,k,de,J,ie,re,ae,ue):pe&&(y<0||M!==Fe[y]?le(D,k,de,2):y--)}}},le=(E,P,k,Z,J=null)=>{const{el:ie,type:re,transition:ae,children:ue,shapeFlag:M}=E;if(M&6){le(E.component.subTree,P,k,Z);return}if(M&128){E.suspense.move(P,k,Z);return}if(M&64){re.move(E,P,k,xe);return}if(re===Kt){n(ie,P,k);for(let R=0;R<ue.length;R++)le(ue[R],P,k,Z);n(E.anchor,P,k);return}if(re===Ns){w(E,P,k);return}if(Z!==2&&M&1&&ae)if(Z===0)ae.beforeEnter(ie),n(ie,P,k),xt(()=>ae.enter(ie),J);else{const{leave:R,delayLeave:B,afterLeave:X}=ae,ne=()=>n(ie,P,k),_e=()=>{R(ie,()=>{ne(),X&&X()})};B?B(ie,ne,_e):_e()}else n(ie,P,k)},se=(E,P,k,Z=!1,J=!1)=>{const{type:ie,props:re,ref:ae,children:ue,dynamicChildren:M,shapeFlag:x,patchFlag:R,dirs:B}=E;if(ae!=null&&Fo(ae,null,k,E,!0),x&256){P.ctx.deactivate(E);return}const X=x&1&&B,ne=!ts(E);let _e;if(ne&&(_e=re&&re.onVnodeBeforeUnmount)&&$t(_e,P,E),x&6)Q(E.component,k,Z);else{if(x&128){E.suspense.unmount(k,Z);return}X&&Un(E,null,P,"beforeUnmount"),x&64?E.type.remove(E,P,k,J,xe,Z):M&&(ie!==Kt||R>0&&R&64)?Pe(M,P,k,!1,!0):(ie===Kt&&R&384||!J&&x&16)&&Pe(ue,P,k),Z&&ye(E)}(ne&&(_e=re&&re.onVnodeUnmounted)||X)&&xt(()=>{_e&&$t(_e,P,E),X&&Un(E,null,P,"unmounted")},k)},ye=E=>{const{type:P,el:k,anchor:Z,transition:J}=E;if(P===Kt){Ee(k,Z);return}if(P===Ns){b(E);return}const ie=()=>{r(k),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(E.shapeFlag&1&&J&&!J.persisted){const{leave:re,delayLeave:ae}=J,ue=()=>re(k,ie);ae?ae(E.el,ie,ue):ue()}else ie()},Ee=(E,P)=>{let k;for(;E!==P;)k=h(E),r(E),E=k;r(P)},Q=(E,P,k)=>{const{bum:Z,scope:J,update:ie,subTree:re,um:ae}=E;Z&&Ps(Z),J.stop(),ie&&(ie.active=!1,se(re,E,P,k)),ae&&xt(ae,P),xt(()=>{E.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},Pe=(E,P,k,Z=!1,J=!1,ie=0)=>{for(let re=ie;re<E.length;re++)se(E[re],P,k,Z,J)},Se=E=>E.shapeFlag&6?Se(E.component.subTree):E.shapeFlag&128?E.suspense.next():h(E.anchor||E.el),we=(E,P,k)=>{E==null?P._vnode&&se(P._vnode,null,null,!0):d(P._vnode||null,E,P,null,null,null,k),iu(),P._vnode=E},xe={p:d,um:se,m:le,r:ye,mt:te,mc:L,pc:G,pbc:z,n:Se,o:i};let Be,Ae;return e&&([Be,Ae]=e(xe)),{render:we,hydrate:Be,createApp:Hh(we,Be)}}function Bn({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function bu(i,e,t=!1){const n=i.children,r=e.children;if(Le(n)&&Le(r))for(let s=0;s<n.length;s++){const a=n[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Dn(r[s]),o.el=a.el),t||bu(a,o))}}function jh(i){const e=i.slice(),t=[0];let n,r,s,a,o;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,i[t[o]]<c?s=o+1:a=o;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const Xh=i=>i.__isTeleport,Kt=Symbol(void 0),ha=Symbol(void 0),pn=Symbol(void 0),Ns=Symbol(void 0),cr=[];let Wt=null;function da(i=!1){cr.push(Wt=i?null:[])}function Yh(){cr.pop(),Wt=cr[cr.length-1]||null}let gr=1;function Wa(i){gr+=i}function $h(i){return i.dynamicChildren=gr>0?Wt||Ri:null,Yh(),gr>0&&Wt&&Wt.push(i),i}function pa(i,e,t,n,r,s){return $h(yt(i,e,t,n,r,s,!0))}function Zh(i){return i?i.__v_isVNode===!0:!1}function jn(i,e){return i.type===e.type&&i.key===e.key}const Ms="__vInternal",Su=({key:i})=>i!=null?i:null,ns=({ref:i,ref_key:e,ref_for:t})=>i!=null?at(i)||ft(i)||Ie(i)?{i:en,r:i,k:e,f:!!t}:i:null;function yt(i,e=null,t=null,n=0,r=null,s=i===Kt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Su(e),ref:e&&ns(e),scopeId:ou,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null};return o?(ma(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=at(t)?8:16),gr>0&&!a&&Wt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Wt.push(l),l}const mn=Kh;function Kh(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Ph)&&(i=pn),Zh(i)){const o=On(i,e,!0);return t&&ma(o,t),gr>0&&!s&&Wt&&(o.shapeFlag&6?Wt[Wt.indexOf(i)]=o:Wt.push(o)),o.patchFlag|=-2,o}if(cd(i)&&(i=i.__vccOpts),e){e=Jh(e);let{class:o,style:l}=e;o&&!at(o)&&(e.class=$o(o)),lt(l)&&(Yc(l)&&!Le(l)&&(l=ht({},l)),e.style=Yo(l))}const a=at(i)?1:dh(i)?128:Xh(i)?64:lt(i)?4:Ie(i)?2:0;return yt(i,e,t,n,r,a,s,!0)}function Jh(i){return i?Yc(i)||Ms in i?ht({},i):i:null}function On(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:a}=i,o=e?ed(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:o,key:o&&Su(o),ref:e&&e.ref?t&&r?Le(r)?r.concat(ns(e)):[r,ns(e)]:ns(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Kt?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&On(i.ssContent),ssFallback:i.ssFallback&&On(i.ssFallback),el:i.el,anchor:i.anchor}}function Qh(i=" ",e=0){return mn(ha,null,i,e)}function Jt(i){return i==null||typeof i=="boolean"?mn(pn):Le(i)?mn(Kt,null,i.slice()):typeof i=="object"?Dn(i):mn(ha,null,String(i))}function Dn(i){return i.el===null||i.memo?i:On(i)}function ma(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Le(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),ma(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Ms in e)?e._ctx=en:r===3&&en&&(en.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Ie(e)?(e={default:e,_ctx:en},t=32):(e=String(e),n&64?(t=16,e=[Qh(e)]):t=8);i.children=e,i.shapeFlag|=t}function ed(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=$o([e.class,n.class]));else if(r==="style")e.style=Yo([e.style,n.style]);else if(fs(r)){const s=e[r],a=n[r];a&&s!==a&&!(Le(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=n[r])}return e}function $t(i,e,t,n=null){Nt(i,e,7,[t,n])}const td=yu();let nd=0;function id(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||td,s={uid:nd++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new bf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_u(n,r),emitsOptions:su(n,r),emit:null,emitted:null,propsDefaults:Xe,inheritAttrs:n.inheritAttrs,ctx:Xe,data:Xe,props:Xe,attrs:Xe,slots:Xe,refs:Xe,setupState:Xe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ah.bind(null,s),i.ce&&i.ce(s),s}let ot=null;const rd=()=>ot||en,Ui=i=>{ot=i,i.scope.on()},Qn=()=>{ot&&ot.scope.off(),ot=null};function wu(i){return i.vnode.shapeFlag&4}let _r=!1;function sd(i,e=!1){_r=e;const{props:t,children:n}=i.vnode,r=wu(i);zh(i,t,r,e),Gh(i,n);const s=r?od(i,e):void 0;return _r=!1,s}function od(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=$c(new Proxy(i.ctx,Dh));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?ld(i):null;Ui(i),qi();const s=In(n,i,0,[i.props,r]);if(ji(),Qn(),Ic(s)){if(s.then(Qn,Qn),e)return s.then(a=>{qa(i,a,e)}).catch(a=>{ms(a,i,0)});i.asyncDep=s}else qa(i,s,e)}else Eu(i,e)}function qa(i,e,t){Ie(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:lt(e)&&(i.setupState=Jc(e)),Eu(i,t)}let ja;function Eu(i,e,t){const n=i.type;if(!i.render){if(!e&&ja&&!n.render){const r=n.template;if(r){const{isCustomElement:s,compilerOptions:a}=i.appContext.config,{delimiters:o,compilerOptions:l}=n,c=ht(ht({isCustomElement:s,delimiters:o},a),l);n.render=ja(r,c)}}i.render=n.render||jt}Ui(i),qi(),Rh(i),ji(),Qn()}function ad(i){return new Proxy(i.attrs,{get(e,t){return Tt(i,"get","$attrs"),e[t]}})}function ld(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=ad(i))},slots:i.slots,emit:i.emit,expose:e}}function ga(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(Jc($c(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in ls)return ls[t](i)}}))}function cd(i){return Ie(i)&&"__vccOpts"in i}const ud=(i,e)=>eh(i,e,_r),fd="3.2.37",hd="http://www.w3.org/2000/svg",Xn=typeof document<"u"?document:null,Xa=Xn&&Xn.createElement("template"),dd={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?Xn.createElementNS(hd,i):Xn.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>Xn.createTextNode(i),createComment:i=>Xn.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Xn.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},cloneNode(i){const e=i.cloneNode(!0);return"_value"in i&&(e._value=i._value),e},insertStaticContent(i,e,t,n,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Xa.innerHTML=n?`<svg>${i}</svg>`:i;const o=Xa.content;if(n){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function pd(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function md(i,e,t){const n=i.style,r=at(t);if(t&&!r){for(const s in t)No(n,s,t[s]);if(e&&!at(e))for(const s in e)t[s]==null&&No(n,s,"")}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const Ya=/\s*!important$/;function No(i,e,t){if(Le(t))t.forEach(n=>No(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=gd(i,e);Ya.test(t)?i.setProperty(Wi(n),t.replace(Ya,""),"important"):i[n]=t}}const $a=["Webkit","Moz","ms"],Os={};function gd(i,e){const t=Os[e];if(t)return t;let n=zi(e);if(n!=="filter"&&n in i)return Os[e]=n;n=Oc(n);for(let r=0;r<$a.length;r++){const s=$a[r]+n;if(s in i)return Os[e]=s}return e}const Za="http://www.w3.org/1999/xlink";function _d(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Za,e.slice(6,e.length)):i.setAttributeNS(Za,e,t);else{const s=cf(e);t==null||s&&!Pc(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function xd(i,e,t,n,r,s,a){if(e==="innerHTML"||e==="textContent"){n&&a(n,r,s),i[e]=t==null?"":t;return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t==null?"":t;(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=Pc(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{i[e]=t}catch{}o&&i.removeAttribute(e)}const[Tu,vd]=(()=>{let i=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(i=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[i,e]})();let Oo=0;const Md=Promise.resolve(),yd=()=>{Oo=0},bd=()=>Oo||(Md.then(yd),Oo=Tu());function Sd(i,e,t,n){i.addEventListener(e,t,n)}function wd(i,e,t,n){i.removeEventListener(e,t,n)}function Ed(i,e,t,n,r=null){const s=i._vei||(i._vei={}),a=s[e];if(n&&a)a.value=n;else{const[o,l]=Td(e);if(n){const c=s[e]=Ad(n,r);Sd(i,o,c,l)}else a&&(wd(i,o,a,l),s[e]=void 0)}}const Ka=/(?:Once|Passive|Capture)$/;function Td(i){let e;if(Ka.test(i)){e={};let t;for(;t=i.match(Ka);)i=i.slice(0,i.length-t[0].length),e[t[0].toLowerCase()]=!0}return[Wi(i.slice(2)),e]}function Ad(i,e){const t=n=>{const r=n.timeStamp||Tu();(vd||r>=t.attached-1)&&Nt(Cd(n,t.value),e,5,[n])};return t.value=i,t.attached=bd(),t}function Cd(i,e){if(Le(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const Ja=/^on[a-z]/,Ld=(i,e,t,n,r=!1,s,a,o,l)=>{e==="class"?pd(i,n,r):e==="style"?md(i,t,n):fs(e)?Zo(e)||Ed(i,e,t,n,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pd(i,e,n,r))?xd(i,e,n,s,a,o,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),_d(i,e,n,r))};function Pd(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&Ja.test(e)&&Ie(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||Ja.test(e)&&at(t)?!1:e in i}const Dd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};vh.props;const Rd=ht({patchProp:Ld},dd);let Qa;function Id(){return Qa||(Qa=Wh(Rd))}const Fd=(...i)=>{const e=Id().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=Nd(n);if(!r)return;const s=e._component;!Ie(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Nd(i){return at(i)?document.querySelector(i):i}class el{constructor(e){Ta(this,"steps",[]);const t=e.split(`
`);for(const n of t){const r=n.split(",");if(r.length===4)try{const s=r.map(a=>{const o=Number(a);if(isNaN(o))throw Error();return o});this.steps.push({time:s[0],gyro:{x:s[1],y:s[2],z:s[3]}})}catch{}}}}const Od={id:"side-panel"},zd=ca({__name:"SidePanel",emits:["csvLoad"],setup(i,{emit:e}){const t=pr(),n=()=>{var a;(a=t.value)==null||a.click()},r=a=>{const o=a.target.files[0];o.text().then(l=>e("csvLoad",new el(l),o.name)).catch(alert)},s=()=>{fetch("/flight-visualizer/sample.csv").then(a=>a.text()).then(a=>{e("csvLoad",new el(a),"sample.csv")}).catch(alert)};return(a,o)=>(da(),pa("div",Od,[yt("button",{class:"btn btn-primary rounded-0",onClick:n},"Open CSV"),yt("button",{class:"btn btn-primary rounded-0 border-top border-dark",onClick:s},"Load Sample"),yt("input",{ref_key:"inputButton",ref:t,type:"file",accept:".csv",hidden:"",onChange:r},null,544)]))}});const _a=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},Ud=_a(zd,[["__scopeId","data-v-2e649537"]]);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xa="143",fi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bd=0,tl=1,Gd=2,Au=1,kd=2,ir=3,xr=0,Xt=1,Bi=2,Vd=1,Fn=0,Ni=1,nl=2,il=3,rl=4,Hd=5,Li=100,Wd=101,qd=102,sl=103,ol=104,jd=200,Xd=201,Yd=202,$d=203,Cu=204,Lu=205,Zd=206,Kd=207,Jd=208,Qd=209,ep=210,tp=0,np=1,ip=2,zo=3,rp=4,sp=5,op=6,ap=7,va=0,lp=1,cp=2,gn=0,up=1,fp=2,hp=3,dp=4,pp=5,Pu=300,Gi=301,ki=302,Uo=303,Bo=304,ys=306,Go=1e3,Ht=1001,ko=1002,vt=1003,al=1004,ll=1005,Rt=1006,mp=1007,bs=1008,ni=1009,gp=1010,_p=1011,Du=1012,xp=1013,$n=1014,Zn=1015,vr=1016,vp=1017,Mp=1018,Oi=1020,yp=1021,bp=1022,tn=1023,Sp=1024,wp=1025,ei=1026,Vi=1027,Ep=1028,Tp=1029,Ap=1030,Cp=1031,Lp=1033,zs=33776,Us=33777,Bs=33778,Gs=33779,cl=35840,ul=35841,fl=35842,hl=35843,Pp=36196,dl=37492,pl=37496,ml=37808,gl=37809,_l=37810,xl=37811,vl=37812,Ml=37813,yl=37814,bl=37815,Sl=37816,wl=37817,El=37818,Tl=37819,Al=37820,Cl=37821,Ll=36492,ii=3e3,Ze=3001,Dp=3200,Rp=3201,Ru=0,Ip=1,fn="srgb",Kn="srgb-linear",ks=7680,Fp=519,Pl=35044,Dl="300 es",Vo=1035;class ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vs=Math.PI/180,Rl=180/Math.PI;function yr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ct[i&255]+ct[i>>8&255]+ct[i>>16&255]+ct[i>>24&255]+"-"+ct[e&255]+ct[e>>8&255]+"-"+ct[e>>16&15|64]+ct[e>>24&255]+"-"+ct[t&63|128]+ct[t>>8&255]+"-"+ct[t>>16&255]+ct[t>>24&255]+ct[n&255]+ct[n>>8&255]+ct[n>>16&255]+ct[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function Np(i,e){return(i%e+e)%e}function Hs(i,e,t){return(1-t)*i+t*e}function Il(i){return(i&i-1)===0&&i!==0}function Ho(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],m=n[5],g=n[8],p=r[0],d=r[3],_=r[6],S=r[1],A=r[4],w=r[7],b=r[2],C=r[5],F=r[8];return s[0]=a*p+o*S+l*b,s[3]=a*d+o*A+l*C,s[6]=a*_+o*w+l*F,s[1]=c*p+u*S+f*b,s[4]=c*d+u*A+f*C,s[7]=c*_+u*w+f*F,s[2]=h*p+m*S+g*b,s[5]=h*d+m*A+g*C,s[8]=h*_+m*w+g*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,g=t*f+n*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=f*p,e[1]=(r*c-u*n)*p,e[2]=(o*n-r*a)*p,e[3]=h*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-o*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(a*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],a=r[3],o=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+n*l,r[3]=t*a+n*c,r[6]=t*o+n*u,r[1]=-n*s+t*l,r[4]=-n*a+t*c,r[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Iu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ws={[fn]:{[Kn]:ti},[Kn]:{[fn]:is}},Ut={legacyMode:!0,get workingColorSpace(){return Kn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(Ws[e]&&Ws[e][t]!==void 0){const n=Ws[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},Fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tt={r:0,g:0,b:0},Bt={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function qs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Pr(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Kn){return this.r=e,this.g=t,this.b=n,Ut.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Kn){if(e=Np(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=qs(a,s,e+1/3),this.g=qs(a,s,e),this.b=qs(a,s,e-1/3)}return Ut.toWorkingColorSpace(this,r),this}setStyle(e,t=fn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ut.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ut.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ut.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ut.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=fn){const n=Fu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return Ut.fromWorkingColorSpace(Pr(this,tt),e),Mt(tt.r*255,0,255)<<16^Mt(tt.g*255,0,255)<<8^Mt(tt.b*255,0,255)<<0}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Kn){Ut.fromWorkingColorSpace(Pr(this,tt),t);const n=tt.r,r=tt.g,s=tt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Kn){return Ut.fromWorkingColorSpace(Pr(this,tt),t),e.r=tt.r,e.g=tt.g,e.b=tt.b,e}getStyle(e=fn){return Ut.fromWorkingColorSpace(Pr(this,tt),e),e!==fn?`color(${e} ${tt.r} ${tt.g} ${tt.b})`:`rgb(${tt.r*255|0},${tt.g*255|0},${tt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Bt),Bt.h+=e,Bt.s+=t,Bt.l+=n,this.setHSL(Bt.h,Bt.s,Bt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bt),e.getHSL(Lr);const n=Hs(Bt.h,Lr.h,t),r=Hs(Bt.s,Lr.s,t),s=Hs(Bt.l,Lr.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}He.NAMES=Fu;let di;class Nu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{di===void 0&&(di=Mr("canvas")),di.width=e.width,di.height=e.height;const n=di.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ti(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ou{constructor(e=null){this.isSource=!0,this.uuid=yr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(js(r[a].image)):s.push(js(r[a]))}else s=js(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function js(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Op=0;class Ot extends ai{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Ht,r=Ht,s=Rt,a=bs,o=tn,l=ni,c=1,u=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=yr(),this.name="",this.source=new Ou(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Go:e.x=e.x-Math.floor(e.x);break;case Ht:e.x=e.x<0?0:1;break;case ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Go:e.y=e.y-Math.floor(e.y);break;case Ht:e.y=e.y<0?0:1;break;case ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Pu;class nt{constructor(e=0,t=0,n=0,r=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],p=l[2],d=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,w=(m+1)/2,b=(_+1)/2,C=(u+h)/4,F=(f+p)/4,v=(g+d)/4;return A>w&&A>b?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=C/n,s=F/n):w>b?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=C/r,s=v/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=F/s,r=v/s),this.set(n,r,s,t),this}let S=Math.sqrt((d-g)*(d-g)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(d-g)/S,this.y=(f-p)/S,this.z=(h-u)/S,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ri extends ai{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Ot(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ou(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zu extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zp extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class si{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[a+0],m=s[a+1],g=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(f!==p||l!==h||c!==m||u!==g){let d=1-o;const _=l*h+c*m+u*g+f*p,S=_>=0?1:-1,A=1-_*_;if(A>Number.EPSILON){const b=Math.sqrt(A),C=Math.atan2(b,_*S);d=Math.sin(d*C)/b,o=Math.sin(o*C)/b}const w=o*S;if(l=l*d+h*w,c=c*d+m*w,u=u*d+g*w,f=f*d+p*w,d===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[a],h=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-o*m,e[t+2]=c*g+u*m+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),f=o(s/2),h=l(n/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*n,u=l*n+o*t-s*r,f=l*r+s*n-a*t,h=-s*t-a*n-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xs.copy(this).projectOnVector(e),this.sub(Xs)}reflect(e){return this.sub(Xs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xs=new I,Fl=new si;class Xi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,n,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,n,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)Gn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Gn)}else n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox),Ys.applyMatrix4(e.matrixWorld),this.union(Ys);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),Dr.subVectors(this.max,Ji),pi.subVectors(e.a,Ji),mi.subVectors(e.b,Ji),gi.subVectors(e.c,Ji),Sn.subVectors(mi,pi),wn.subVectors(gi,mi),kn.subVectors(pi,gi);let t=[0,-Sn.z,Sn.y,0,-wn.z,wn.y,0,-kn.z,kn.y,Sn.z,0,-Sn.x,wn.z,0,-wn.x,kn.z,0,-kn.x,-Sn.y,Sn.x,0,-wn.y,wn.x,0,-kn.y,kn.x,0];return!$s(t,pi,mi,gi,Dr)||(t=[1,0,0,0,1,0,0,0,1],!$s(t,pi,mi,gi,Dr))?!1:(Rr.crossVectors(Sn,wn),t=[Rr.x,Rr.y,Rr.z],$s(t,pi,mi,gi,Dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Gn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sn=[new I,new I,new I,new I,new I,new I,new I,new I],Gn=new I,Ys=new Xi,pi=new I,mi=new I,gi=new I,Sn=new I,wn=new I,kn=new I,Ji=new I,Dr=new I,Rr=new I,Vn=new I;function $s(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Vn.fromArray(i,s);const o=r.x*Math.abs(Vn.x)+r.y*Math.abs(Vn.y)+r.z*Math.abs(Vn.z),l=e.dot(Vn),c=t.dot(Vn),u=n.dot(Vn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Up=new Xi,Nl=new I,Ir=new I,Zs=new I;class br{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Up.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Zs.subVectors(e,this.center);const t=Zs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(Zs.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Ir.set(0,0,1).multiplyScalar(e.radius):Ir.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Nl.copy(e.center).add(Ir)),this.expandByPoint(Nl.copy(e.center).sub(Ir)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new I,Ks=new I,Fr=new I,En=new I,Js=new I,Nr=new I,Qs=new I;class Ma{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.direction).multiplyScalar(t).add(this.origin),on.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ks.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),En.copy(this.origin).sub(Ks);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Fr),o=En.dot(this.direction),l=-En.dot(Fr),c=En.lengthSq(),u=Math.abs(1-a*a);let f,h,m,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const p=1/u;f*=p,h*=p,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Fr).multiplyScalar(h).add(Ks),m}intersectSphere(e,t){on.subVectors(e.center,this.origin);const n=on.dot(this.direction),r=on.dot(on)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||n!==n)&&(n=s),(a<r||r!==r)&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,n,r,s){Js.subVectors(t,e),Nr.subVectors(n,e),Qs.crossVectors(Js,Nr);let a=this.direction.dot(Qs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,e);const l=o*this.direction.dot(Nr.crossVectors(En,Nr));if(l<0)return null;const c=o*this.direction.dot(Js.cross(En));if(c<0||l+c>a)return null;const u=-o*En.dot(Qs);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,a,o,l,c,u,f,h,m,g,p,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=m,_[7]=g,_[11]=p,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/_i.setFromMatrixColumn(e,0).length(),s=1/_i.setFromMatrixColumn(e,1).length(),a=1/_i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,g=o*u,p=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-p*c,t[9]=-o*l,t[2]=p-h*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,p=c*f;t[0]=h+p*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=p+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,p=c*f;t[0]=h-p*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=p-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,g=o*u,p=o*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=p-h*f,t[8]=g*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-p*f}else if(e.order==="XZY"){const h=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=a*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bp,e,Gp)}lookAt(e,t,n){const r=this.elements;return St.subVectors(e,t),St.lengthSq()===0&&(St.z=1),St.normalize(),Tn.crossVectors(n,St),Tn.lengthSq()===0&&(Math.abs(n.z)===1?St.x+=1e-4:St.z+=1e-4,St.normalize(),Tn.crossVectors(n,St)),Tn.normalize(),Or.crossVectors(St,Tn),r[0]=Tn.x,r[4]=Or.x,r[8]=St.x,r[1]=Tn.y,r[5]=Or.y,r[9]=St.y,r[2]=Tn.z,r[6]=Or.z,r[10]=St.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],m=n[13],g=n[2],p=n[6],d=n[10],_=n[14],S=n[3],A=n[7],w=n[11],b=n[15],C=r[0],F=r[4],v=r[8],L=r[12],O=r[1],z=r[5],he=r[9],oe=r[13],N=r[2],te=r[6],H=r[10],Y=r[14],W=r[3],G=r[7],K=r[11],fe=r[15];return s[0]=a*C+o*O+l*N+c*W,s[4]=a*F+o*z+l*te+c*G,s[8]=a*v+o*he+l*H+c*K,s[12]=a*L+o*oe+l*Y+c*fe,s[1]=u*C+f*O+h*N+m*W,s[5]=u*F+f*z+h*te+m*G,s[9]=u*v+f*he+h*H+m*K,s[13]=u*L+f*oe+h*Y+m*fe,s[2]=g*C+p*O+d*N+_*W,s[6]=g*F+p*z+d*te+_*G,s[10]=g*v+p*he+d*H+_*K,s[14]=g*L+p*oe+d*Y+_*fe,s[3]=S*C+A*O+w*N+b*W,s[7]=S*F+A*z+w*te+b*G,s[11]=S*v+A*he+w*H+b*K,s[15]=S*L+A*oe+w*Y+b*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],p=e[7],d=e[11],_=e[15];return g*(+s*l*f-r*c*f-s*o*h+n*c*h+r*o*m-n*l*m)+p*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+d*(+t*c*f-t*o*m-s*a*f+n*a*m+s*o*u-n*c*u)+_*(-r*o*u-t*l*f+t*o*h+r*a*f-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],p=e[13],d=e[14],_=e[15],S=f*d*c-p*h*c+p*l*m-o*d*m-f*l*_+o*h*_,A=g*h*c-u*d*c-g*l*m+a*d*m+u*l*_-a*h*_,w=u*p*c-g*f*c+g*o*m-a*p*m-u*o*_+a*f*_,b=g*f*l-u*p*l-g*o*h+a*p*h+u*o*d-a*f*d,C=t*S+n*A+r*w+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/C;return e[0]=S*F,e[1]=(p*h*s-f*d*s-p*r*m+n*d*m+f*r*_-n*h*_)*F,e[2]=(o*d*s-p*l*s+p*r*c-n*d*c-o*r*_+n*l*_)*F,e[3]=(f*l*s-o*h*s-f*r*c+n*h*c+o*r*m-n*l*m)*F,e[4]=A*F,e[5]=(u*d*s-g*h*s+g*r*m-t*d*m-u*r*_+t*h*_)*F,e[6]=(g*l*s-a*d*s-g*r*c+t*d*c+a*r*_-t*l*_)*F,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*m+t*l*m)*F,e[8]=w*F,e[9]=(g*f*s-u*p*s-g*n*m+t*p*m+u*n*_-t*f*_)*F,e[10]=(a*p*s-g*o*s+g*n*c-t*p*c-a*n*_+t*o*_)*F,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*m-t*o*m)*F,e[12]=b*F,e[13]=(u*p*r-g*f*r+g*n*h-t*p*h-u*n*d+t*f*d)*F,e[14]=(g*o*r-a*p*r-g*n*l+t*p*l+a*n*d-t*o*d)*F,e[15]=(a*f*r-u*o*r+u*n*l-t*f*l-a*n*h+t*o*h)*F,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,g=s*f,p=a*u,d=a*f,_=o*f,S=l*c,A=l*u,w=l*f,b=n.x,C=n.y,F=n.z;return r[0]=(1-(p+_))*b,r[1]=(m+w)*b,r[2]=(g-A)*b,r[3]=0,r[4]=(m-w)*C,r[5]=(1-(h+_))*C,r[6]=(d+S)*C,r[7]=0,r[8]=(g+A)*F,r[9]=(d-S)*F,r[10]=(1-(h+p))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=_i.set(r[0],r[1],r[2]).length();const a=_i.set(r[4],r[5],r[6]).length(),o=_i.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gt.copy(this);const c=1/s,u=1/a,f=1/o;return Gt.elements[0]*=c,Gt.elements[1]*=c,Gt.elements[2]*=c,Gt.elements[4]*=u,Gt.elements[5]*=u,Gt.elements[6]*=u,Gt.elements[8]*=f,Gt.elements[9]*=f,Gt.elements[10]*=f,t.setFromRotationMatrix(Gt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r),h=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,s,a){const o=this.elements,l=1/(t-e),c=1/(n-r),u=1/(a-s),f=(t+e)*l,h=(n+r)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _i=new I,Gt=new Je,Bp=new I(0,0,0),Gp=new I(1,1,1),Tn=new I,Or=new I,St=new I,Ol=new Je,zl=new si;class Yi{constructor(e=0,t=0,n=0,r=Yi.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ol.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ol,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zl.setFromEuler(this),this.setFromQuaternion(zl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Yi.DefaultOrder="XYZ";Yi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Uu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kp=0;const Ul=new I,xi=new si,an=new Je,zr=new I,Qi=new I,Vp=new I,Hp=new si,Bl=new I(1,0,0),Gl=new I(0,1,0),kl=new I(0,0,1),Wp={type:"added"},Vl={type:"removed"};class dt extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DefaultUp.clone();const e=new I,t=new Yi,n=new si,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Je},normalMatrix:{value:new Ft}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=dt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Uu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.multiply(xi),this}rotateOnWorldAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.premultiply(xi),this}rotateX(e){return this.rotateOnAxis(Bl,e)}rotateY(e){return this.rotateOnAxis(Gl,e)}rotateZ(e){return this.rotateOnAxis(kl,e)}translateOnAxis(e,t){return Ul.copy(e).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bl,e)}translateY(e){return this.translateOnAxis(Gl,e)}translateZ(e){return this.translateOnAxis(kl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zr.copy(e):zr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Qi,zr,this.up):an.lookAt(zr,Qi,this.up),this.quaternion.setFromRotationMatrix(an),r&&(an.extractRotation(r.matrixWorld),xi.setFromRotationMatrix(an),this.quaternion.premultiply(xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Wp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Vl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,e,Vp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,Hp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}dt.DefaultUp=new I(0,1,0);dt.DefaultMatrixAutoUpdate=!0;const kt=new I,ln=new I,eo=new I,cn=new I,vi=new I,Mi=new I,Hl=new I,to=new I,no=new I,io=new I;class dn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),kt.subVectors(e,t),r.cross(kt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){kt.subVectors(r,t),ln.subVectors(n,t),eo.subVectors(e,t);const a=kt.dot(kt),o=kt.dot(ln),l=kt.dot(eo),c=ln.dot(ln),u=ln.dot(eo),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,cn),cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getUV(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,cn),l.set(0,0),l.addScaledVector(s,cn.x),l.addScaledVector(a,cn.y),l.addScaledVector(o,cn.z),l}static isFrontFacing(e,t,n,r){return kt.subVectors(n,t),ln.subVectors(e,t),kt.cross(ln).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),kt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return dn.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;vi.subVectors(r,n),Mi.subVectors(s,n),to.subVectors(e,n);const l=vi.dot(to),c=Mi.dot(to);if(l<=0&&c<=0)return t.copy(n);no.subVectors(e,r);const u=vi.dot(no),f=Mi.dot(no);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(vi,a);io.subVectors(e,s);const m=vi.dot(io),g=Mi.dot(io);if(g>=0&&m<=g)return t.copy(s);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Mi,o);const d=u*g-m*f;if(d<=0&&f-u>=0&&m-g>=0)return Hl.subVectors(s,r),o=(f-u)/(f-u+(m-g)),t.copy(r).addScaledVector(Hl,o);const _=1/(d+p+h);return a=p*_,o=h*_,t.copy(n).addScaledVector(vi,a).addScaledVector(Mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let qp=0;class xn extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=yr(),this.name="",this.type="Material",this.blending=Ni,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Cu,this.blendDst=Lu,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Vd;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==xr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bu extends xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const et=new I,Ur=new De;class nn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Pl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),a=new He),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),a=new De),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),a=new I),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),a=new nt),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyMatrix3(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyMatrix4(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyNormalMatrix(e),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.transformDirection(e),this.setXYZ(t,et.x,et.y,et.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Gu extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ku extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class st extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jp=0;const Pt=new Je,ro=new dt,yi=new I,wt=new Xi,er=new Xi,rt=new I;class zt extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=yr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Iu(e)?ku:Gu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ft().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,n){return Pt.makeTranslation(e,t,n),this.applyMatrix4(Pt),this}scale(e,t,n){return Pt.makeScale(e,t,n),this.applyMatrix4(Pt),this}lookAt(e){return ro.lookAt(e),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new st(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];wt.setFromBufferAttribute(s),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];er.setFromBufferAttribute(o),this.morphTargetsRelative?(rt.addVectors(wt.min,er.min),wt.expandByPoint(rt),rt.addVectors(wt.max,er.max),wt.expandByPoint(rt)):(wt.expandByPoint(er.min),wt.expandByPoint(er.max))}wt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)rt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(rt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)rt.fromBufferAttribute(o,c),l&&(yi.fromBufferAttribute(e,c),rt.add(yi)),r=Math.max(r,n.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let O=0;O<o;O++)c[O]=new I,u[O]=new I;const f=new I,h=new I,m=new I,g=new De,p=new De,d=new De,_=new I,S=new I;function A(O,z,he){f.fromArray(r,O*3),h.fromArray(r,z*3),m.fromArray(r,he*3),g.fromArray(a,O*2),p.fromArray(a,z*2),d.fromArray(a,he*2),h.sub(f),m.sub(f),p.sub(g),d.sub(g);const oe=1/(p.x*d.y-d.x*p.y);!isFinite(oe)||(_.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(oe),S.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(oe),c[O].add(_),c[z].add(_),c[he].add(_),u[O].add(S),u[z].add(S),u[he].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let O=0,z=w.length;O<z;++O){const he=w[O],oe=he.start,N=he.count;for(let te=oe,H=oe+N;te<H;te+=3)A(n[te+0],n[te+1],n[te+2])}const b=new I,C=new I,F=new I,v=new I;function L(O){F.fromArray(s,O*3),v.copy(F);const z=c[O];b.copy(z),b.sub(F.multiplyScalar(F.dot(z))).normalize(),C.crossVectors(v,z);const oe=C.dot(u[O])<0?-1:1;l[O*4]=b.x,l[O*4+1]=b.y,l[O*4+2]=b.z,l[O*4+3]=oe}for(let O=0,z=w.length;O<z;++O){const he=w[O],oe=he.start,N=he.count;for(let te=oe,H=oe+N;te<H;te+=3)L(n[te+0]),L(n[te+1]),L(n[te+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,f=new I;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,d),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,d),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const r in n){if(e.attributes[r]===void 0)continue;const a=n[r].array,o=e.attributes[r],l=o.array,c=o.itemSize*t,u=Math.min(l.length,a.length-c);for(let f=0,h=c;f<u;f++,h++)a[h]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rt.fromBufferAttribute(e,t),rt.normalize(),e.setXYZ(t,rt.x,rt.y,rt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let p=0,d=l.length;p<d;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let _=0;_<u;_++)h[g++]=c[m++]}return new nn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wl=new Je,bi=new Ma,so=new br,An=new I,Cn=new I,Ln=new I,oo=new I,ao=new I,lo=new I,Br=new I,Gr=new I,kr=new I,Vr=new De,Hr=new De,Wr=new De,co=new I,qr=new I;class qt extends dt{constructor(e=new zt,t=new Bu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(s),e.ray.intersectsSphere(so)===!1)||(Wl.copy(s).invert(),bi.copy(e.ray).applyMatrix4(Wl),n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,h=n.attributes.uv2,m=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const _=m[p],S=r[_.materialIndex],A=Math.max(_.start,g.start),w=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let b=A,C=w;b<C;b+=3){const F=o.getX(b),v=o.getX(b+1),L=o.getX(b+2);a=jr(this,S,e,bi,l,c,u,f,h,F,v,L),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const p=Math.max(0,g.start),d=Math.min(o.count,g.start+g.count);for(let _=p,S=d;_<S;_+=3){const A=o.getX(_),w=o.getX(_+1),b=o.getX(_+2);a=jr(this,r,e,bi,l,c,u,f,h,A,w,b),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const _=m[p],S=r[_.materialIndex],A=Math.max(_.start,g.start),w=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let b=A,C=w;b<C;b+=3){const F=b,v=b+1,L=b+2;a=jr(this,S,e,bi,l,c,u,f,h,F,v,L),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const p=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=p,S=d;_<S;_+=3){const A=_,w=_+1,b=_+2;a=jr(this,r,e,bi,l,c,u,f,h,A,w,b),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function Xp(i,e,t,n,r,s,a,o){let l;if(e.side===Xt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side!==Bi,o),l===null)return null;qr.copy(o),qr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(qr);return c<t.near||c>t.far?null:{distance:c,point:qr.clone(),object:i}}function jr(i,e,t,n,r,s,a,o,l,c,u,f){An.fromBufferAttribute(r,c),Cn.fromBufferAttribute(r,u),Ln.fromBufferAttribute(r,f);const h=i.morphTargetInfluences;if(s&&h){Br.set(0,0,0),Gr.set(0,0,0),kr.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const d=h[g],_=s[g];d!==0&&(oo.fromBufferAttribute(_,c),ao.fromBufferAttribute(_,u),lo.fromBufferAttribute(_,f),a?(Br.addScaledVector(oo,d),Gr.addScaledVector(ao,d),kr.addScaledVector(lo,d)):(Br.addScaledVector(oo.sub(An),d),Gr.addScaledVector(ao.sub(Cn),d),kr.addScaledVector(lo.sub(Ln),d)))}An.add(Br),Cn.add(Gr),Ln.add(kr)}i.isSkinnedMesh&&(i.boneTransform(c,An),i.boneTransform(u,Cn),i.boneTransform(f,Ln));const m=Xp(i,e,t,n,An,Cn,Ln,co);if(m){o&&(Vr.fromBufferAttribute(o,c),Hr.fromBufferAttribute(o,u),Wr.fromBufferAttribute(o,f),m.uv=dn.getUV(co,An,Cn,Ln,Vr,Hr,Wr,new De)),l&&(Vr.fromBufferAttribute(l,c),Hr.fromBufferAttribute(l,u),Wr.fromBufferAttribute(l,f),m.uv2=dn.getUV(co,An,Cn,Ln,Vr,Hr,Wr,new De));const g={a:c,b:u,c:f,normal:new I,materialIndex:0};dn.getNormal(An,Cn,Ln,g.normal),m.face=g}return m}class Sr extends zt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(f,2));function g(p,d,_,S,A,w,b,C,F,v,L){const O=w/F,z=b/v,he=w/2,oe=b/2,N=C/2,te=F+1,H=v+1;let Y=0,W=0;const G=new I;for(let K=0;K<H;K++){const fe=K*z-oe;for(let le=0;le<te;le++){const se=le*O-he;G[p]=se*S,G[d]=fe*A,G[_]=N,c.push(G.x,G.y,G.z),G[p]=0,G[d]=0,G[_]=C>0?1:-1,u.push(G.x,G.y,G.z),f.push(le/F),f.push(1-K/v),Y+=1}}for(let K=0;K<v;K++)for(let fe=0;fe<F;fe++){const le=h+fe+te*K,se=h+fe+te*(K+1),ye=h+(fe+1)+te*(K+1),Ee=h+(fe+1)+te*K;l.push(le,se,Ee),l.push(se,ye,Ee),W+=6}o.addGroup(m,W,L),m+=W,h+=Y}}static fromJSON(e){return new Sr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function ut(i){const e={};for(let t=0;t<i.length;t++){const n=Hi(i[t]);for(const r in n)e[r]=n[r]}return e}function Yp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}const $p={clone:Hi,merge:ut};var Zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zp,this.fragmentShader=Kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=Yp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vu extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class It extends Vu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rl*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Si=90,wi=1;class Jp extends dt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const r=new It(Si,wi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new I(1,0,0)),this.add(r);const s=new It(Si,wi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new I(-1,0,0)),this.add(s);const a=new It(Si,wi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new I(0,1,0)),this.add(a);const o=new It(Si,wi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new I(0,-1,0)),this.add(o);const l=new It(Si,wi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new I(0,0,1)),this.add(l);const c=new It(Si,wi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new I(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=gn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Hu extends Ot{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Gi,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qp extends ri{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Hu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Sr(5,5,5),s=new oi({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:Fn});s.uniforms.tEquirect.value=t;const a=new qt(r,s),o=t.minFilter;return t.minFilter===bs&&(t.minFilter=Rt),new Jp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const uo=new I,em=new I,tm=new Ft;class Wn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=uo.subVectors(n,t).cross(em.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(uo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||tm.getNormalMatrix(e),r=this.coplanarPoint(uo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new br,Xr=new I;class ya{constructor(e=new Wn,t=new Wn,n=new Wn,r=new Wn,s=new Wn,a=new Wn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],m=n[9],g=n[10],p=n[11],d=n[12],_=n[13],S=n[14],A=n[15];return t[0].setComponents(o-r,f-l,p-h,A-d).normalize(),t[1].setComponents(o+r,f+l,p+h,A+d).normalize(),t[2].setComponents(o+s,f+c,p+m,A+_).normalize(),t[3].setComponents(o-s,f-c,p-m,A-_).normalize(),t[4].setComponents(o-a,f-u,p-g,A-S).normalize(),t[5].setComponents(o+a,f+u,p+g,A+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSprite(e){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Xr.x=r.normal.x>0?e.max.x:e.min.x,Xr.y=r.normal.y>0?e.max.y:e.min.y,Xr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wu(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function nm(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;i.bindBuffer(f,c),m.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class ba extends zt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,m=[],g=[],p=[],d=[];for(let _=0;_<u;_++){const S=_*h-a;for(let A=0;A<c;A++){const w=A*f-s;g.push(w,-S,0),p.push(0,0,1),d.push(A/o),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let S=0;S<o;S++){const A=S+c*_,w=S+c*(_+1),b=S+1+c*(_+1),C=S+1+c*_;m.push(A,w,C),m.push(w,b,C)}this.setIndex(m),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(p,3)),this.setAttribute("uv",new st(d,2))}static fromJSON(e){return new ba(e.width,e.height,e.widthSegments,e.heightSegments)}}var im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,am=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cm="vec3 transformed = vec3( position );",um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fm=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,hm=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,dm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bm=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Sm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
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
#endif`,wm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dm=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,Rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,km=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hm=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Wm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,qm=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Zm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Km=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Jm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,tg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ng=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,dg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,gg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,yg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,wg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Ag=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ig=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Fg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ng=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Og=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ug=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Bg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gg=`#ifdef USE_SKINNING
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
#endif`,kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qg=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,jg=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Xg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Yg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,$g=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Zg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Kg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Jg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t_=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i_=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,r_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,s_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,o_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,a_=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,u_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h_=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,d_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m_=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,__=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,v_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,M_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,y_=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,S_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,E_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,A_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,P_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,D_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ze={alphamap_fragment:im,alphamap_pars_fragment:rm,alphatest_fragment:sm,alphatest_pars_fragment:om,aomap_fragment:am,aomap_pars_fragment:lm,begin_vertex:cm,beginnormal_vertex:um,bsdfs:fm,iridescence_fragment:hm,bumpmap_pars_fragment:dm,clipping_planes_fragment:pm,clipping_planes_pars_fragment:mm,clipping_planes_pars_vertex:gm,clipping_planes_vertex:_m,color_fragment:xm,color_pars_fragment:vm,color_pars_vertex:Mm,color_vertex:ym,common:bm,cube_uv_reflection_fragment:Sm,defaultnormal_vertex:wm,displacementmap_pars_vertex:Em,displacementmap_vertex:Tm,emissivemap_fragment:Am,emissivemap_pars_fragment:Cm,encodings_fragment:Lm,encodings_pars_fragment:Pm,envmap_fragment:Dm,envmap_common_pars_fragment:Rm,envmap_pars_fragment:Im,envmap_pars_vertex:Fm,envmap_physical_pars_fragment:qm,envmap_vertex:Nm,fog_vertex:Om,fog_pars_vertex:zm,fog_fragment:Um,fog_pars_fragment:Bm,gradientmap_pars_fragment:Gm,lightmap_fragment:km,lightmap_pars_fragment:Vm,lights_lambert_vertex:Hm,lights_pars_begin:Wm,lights_toon_fragment:jm,lights_toon_pars_fragment:Xm,lights_phong_fragment:Ym,lights_phong_pars_fragment:$m,lights_physical_fragment:Zm,lights_physical_pars_fragment:Km,lights_fragment_begin:Jm,lights_fragment_maps:Qm,lights_fragment_end:eg,logdepthbuf_fragment:tg,logdepthbuf_pars_fragment:ng,logdepthbuf_pars_vertex:ig,logdepthbuf_vertex:rg,map_fragment:sg,map_pars_fragment:og,map_particle_fragment:ag,map_particle_pars_fragment:lg,metalnessmap_fragment:cg,metalnessmap_pars_fragment:ug,morphcolor_vertex:fg,morphnormal_vertex:hg,morphtarget_pars_vertex:dg,morphtarget_vertex:pg,normal_fragment_begin:mg,normal_fragment_maps:gg,normal_pars_fragment:_g,normal_pars_vertex:xg,normal_vertex:vg,normalmap_pars_fragment:Mg,clearcoat_normal_fragment_begin:yg,clearcoat_normal_fragment_maps:bg,clearcoat_pars_fragment:Sg,iridescence_pars_fragment:wg,output_fragment:Eg,packing:Tg,premultiplied_alpha_fragment:Ag,project_vertex:Cg,dithering_fragment:Lg,dithering_pars_fragment:Pg,roughnessmap_fragment:Dg,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Ig,shadowmap_pars_vertex:Fg,shadowmap_vertex:Ng,shadowmask_pars_fragment:Og,skinbase_vertex:zg,skinning_pars_vertex:Ug,skinning_vertex:Bg,skinnormal_vertex:Gg,specularmap_fragment:kg,specularmap_pars_fragment:Vg,tonemapping_fragment:Hg,tonemapping_pars_fragment:Wg,transmission_fragment:qg,transmission_pars_fragment:jg,uv_pars_fragment:Xg,uv_pars_vertex:Yg,uv_vertex:$g,uv2_pars_fragment:Zg,uv2_pars_vertex:Kg,uv2_vertex:Jg,worldpos_vertex:Qg,background_vert:e_,background_frag:t_,cube_vert:n_,cube_frag:i_,depth_vert:r_,depth_frag:s_,distanceRGBA_vert:o_,distanceRGBA_frag:a_,equirect_vert:l_,equirect_frag:c_,linedashed_vert:u_,linedashed_frag:f_,meshbasic_vert:h_,meshbasic_frag:d_,meshlambert_vert:p_,meshlambert_frag:m_,meshmatcap_vert:g_,meshmatcap_frag:__,meshnormal_vert:x_,meshnormal_frag:v_,meshphong_vert:M_,meshphong_frag:y_,meshphysical_vert:b_,meshphysical_frag:S_,meshtoon_vert:w_,meshtoon_frag:E_,points_vert:T_,points_frag:A_,shadow_vert:C_,shadow_frag:L_,sprite_vert:P_,sprite_frag:D_},ge={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ft},uv2Transform:{value:new Ft},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ft}}},Qt={basic:{uniforms:ut([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:ut([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.fog,ge.lights,{emissive:{value:new He(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:ut([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:ut([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:ut([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new He(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:ut([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:ut([ge.points,ge.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:ut([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:ut([ge.common,ge.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:ut([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:ut([ge.sprite,ge.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},cube:{uniforms:ut([ge.envmap,{opacity:{value:1}}]),vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:ut([ge.common,ge.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:ut([ge.lights,ge.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Qt.physical={uniforms:ut([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new De(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};function R_(i,e,t,n,r,s){const a=new He(0);let o=r===!0?0:1,l,c,u=null,f=0,h=null;function m(p,d){let _=!1,S=d.isScene===!0?d.background:null;S&&S.isTexture&&(S=e.get(S));const A=i.xr,w=A.getSession&&A.getSession();w&&w.environmentBlendMode==="additive"&&(S=null),S===null?g(a,o):S&&S.isColor&&(g(S,1),_=!0),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===ys)?(c===void 0&&(c=new qt(new Sr(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:Hi(Qt.cube.uniforms),vertexShader:Qt.cube.vertexShader,fragmentShader:Qt.cube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,(u!==S||f!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new qt(new ba(2,2),new oi({name:"BackgroundMaterial",uniforms:Hi(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,h=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,d){t.buffers.color.setClear(p.r,p.g,p.b,d,s)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),o=d,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,g(a,o)},render:m}}function I_(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=d(null);let c=l,u=!1;function f(N,te,H,Y,W){let G=!1;if(a){const K=p(Y,H,te);c!==K&&(c=K,m(c.object)),G=_(N,Y,H,W),G&&S(N,Y,H,W)}else{const K=te.wireframe===!0;(c.geometry!==Y.id||c.program!==H.id||c.wireframe!==K)&&(c.geometry=Y.id,c.program=H.id,c.wireframe=K,G=!0)}W!==null&&t.update(W,34963),(G||u)&&(u=!1,v(N,te,H,Y),W!==null&&i.bindBuffer(34963,t.get(W).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(N){return n.isWebGL2?i.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?i.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function p(N,te,H){const Y=H.wireframe===!0;let W=o[N.id];W===void 0&&(W={},o[N.id]=W);let G=W[te.id];G===void 0&&(G={},W[te.id]=G);let K=G[Y];return K===void 0&&(K=d(h()),G[Y]=K),K}function d(N){const te=[],H=[],Y=[];for(let W=0;W<r;W++)te[W]=0,H[W]=0,Y[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:H,attributeDivisors:Y,object:N,attributes:{},index:null}}function _(N,te,H,Y){const W=c.attributes,G=te.attributes;let K=0;const fe=H.getAttributes();for(const le in fe)if(fe[le].location>=0){const ye=W[le];let Ee=G[le];if(Ee===void 0&&(le==="instanceMatrix"&&N.instanceMatrix&&(Ee=N.instanceMatrix),le==="instanceColor"&&N.instanceColor&&(Ee=N.instanceColor)),ye===void 0||ye.attribute!==Ee||Ee&&ye.data!==Ee.data)return!0;K++}return c.attributesNum!==K||c.index!==Y}function S(N,te,H,Y){const W={},G=te.attributes;let K=0;const fe=H.getAttributes();for(const le in fe)if(fe[le].location>=0){let ye=G[le];ye===void 0&&(le==="instanceMatrix"&&N.instanceMatrix&&(ye=N.instanceMatrix),le==="instanceColor"&&N.instanceColor&&(ye=N.instanceColor));const Ee={};Ee.attribute=ye,ye&&ye.data&&(Ee.data=ye.data),W[le]=Ee,K++}c.attributes=W,c.attributesNum=K,c.index=Y}function A(){const N=c.newAttributes;for(let te=0,H=N.length;te<H;te++)N[te]=0}function w(N){b(N,0)}function b(N,te){const H=c.newAttributes,Y=c.enabledAttributes,W=c.attributeDivisors;H[N]=1,Y[N]===0&&(i.enableVertexAttribArray(N),Y[N]=1),W[N]!==te&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,te),W[N]=te)}function C(){const N=c.newAttributes,te=c.enabledAttributes;for(let H=0,Y=te.length;H<Y;H++)te[H]!==N[H]&&(i.disableVertexAttribArray(H),te[H]=0)}function F(N,te,H,Y,W,G){n.isWebGL2===!0&&(H===5124||H===5125)?i.vertexAttribIPointer(N,te,H,W,G):i.vertexAttribPointer(N,te,H,Y,W,G)}function v(N,te,H,Y){if(n.isWebGL2===!1&&(N.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const W=Y.attributes,G=H.getAttributes(),K=te.defaultAttributeValues;for(const fe in G){const le=G[fe];if(le.location>=0){let se=W[fe];if(se===void 0&&(fe==="instanceMatrix"&&N.instanceMatrix&&(se=N.instanceMatrix),fe==="instanceColor"&&N.instanceColor&&(se=N.instanceColor)),se!==void 0){const ye=se.normalized,Ee=se.itemSize,Q=t.get(se);if(Q===void 0)continue;const Pe=Q.buffer,Se=Q.type,we=Q.bytesPerElement;if(se.isInterleavedBufferAttribute){const xe=se.data,Be=xe.stride,Ae=se.offset;if(xe.isInstancedInterleavedBuffer){for(let E=0;E<le.locationSize;E++)b(le.location+E,xe.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let E=0;E<le.locationSize;E++)w(le.location+E);i.bindBuffer(34962,Pe);for(let E=0;E<le.locationSize;E++)F(le.location+E,Ee/le.locationSize,Se,ye,Be*we,(Ae+Ee/le.locationSize*E)*we)}else{if(se.isInstancedBufferAttribute){for(let xe=0;xe<le.locationSize;xe++)b(le.location+xe,se.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let xe=0;xe<le.locationSize;xe++)w(le.location+xe);i.bindBuffer(34962,Pe);for(let xe=0;xe<le.locationSize;xe++)F(le.location+xe,Ee/le.locationSize,Se,ye,Ee*we,Ee/le.locationSize*xe*we)}}else if(K!==void 0){const ye=K[fe];if(ye!==void 0)switch(ye.length){case 2:i.vertexAttrib2fv(le.location,ye);break;case 3:i.vertexAttrib3fv(le.location,ye);break;case 4:i.vertexAttrib4fv(le.location,ye);break;default:i.vertexAttrib1fv(le.location,ye)}}}}C()}function L(){he();for(const N in o){const te=o[N];for(const H in te){const Y=te[H];for(const W in Y)g(Y[W].object),delete Y[W];delete te[H]}delete o[N]}}function O(N){if(o[N.id]===void 0)return;const te=o[N.id];for(const H in te){const Y=te[H];for(const W in Y)g(Y[W].object),delete Y[W];delete te[H]}delete o[N.id]}function z(N){for(const te in o){const H=o[te];if(H[N.id]===void 0)continue;const Y=H[N.id];for(const W in Y)g(Y[W].object),delete Y[W];delete H[N.id]}}function he(){oe(),u=!0,c!==l&&(c=l,m(c.object))}function oe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:he,resetDefaultState:oe,dispose:L,releaseStatesOfGeometry:O,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:w,disableUnusedAttributes:C}}function F_(i,e,t,n){const r=n.isWebGL2;let s;function a(c){s=c}function o(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=i,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function N_(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(F){if(F==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),h=i.getParameter(35660),m=i.getParameter(3379),g=i.getParameter(34076),p=i.getParameter(34921),d=i.getParameter(36347),_=i.getParameter(36348),S=i.getParameter(36349),A=h>0,w=a||e.has("OES_texture_float"),b=A&&w,C=a?i.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:A,floatFragmentTextures:w,floatVertexTextures:b,maxSamples:C}}function O_(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Wn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const g=f.length!==0||h||n!==0||r;return r=h,t=u(f,m,0),n=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,m){const g=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,_=i.get(f);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const S=s?0:n,A=S*4;let w=_.clippingState||null;l.value=w,w=u(g,h,A,m);for(let b=0;b!==A;++b)w[b]=t[b];_.clippingState=w,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,g){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=l.value,g!==!0||d===null){const _=m+p*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(d===null||d.length<_)&&(d=new Float32Array(_));for(let A=0,w=m;A!==p;++A,w+=4)a.copy(f[A]).applyMatrix4(S,o),a.normal.toArray(d,w),d[w+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function z_(i){let e=new WeakMap;function t(a,o){return o===Uo?a.mapping=Gi:o===Bo&&(a.mapping=ki),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Uo||o===Bo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Qp(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class qu extends Vu{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Di=4,ql=[.125,.215,.35,.446,.526,.582],Yn=20,fo=new qu,jl=new He;let ho=null;const qn=(1+Math.sqrt(5))/2,Ti=1/qn,Xl=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,qn,Ti),new I(0,qn,-Ti),new I(Ti,0,qn),new I(-Ti,0,qn),new I(qn,Ti,0),new I(-qn,Ti,0)];class Yl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ho=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ho),e.scissorTest=!1,Yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gi||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ho=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:vr,format:tn,encoding:ii,depthBuffer:!1},r=$l(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$l(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=U_(s)),this._blurMaterial=B_(s,e,t)}return r}_compileMaterial(e){const t=new qt(this._lodPlanes[0],e);this._renderer.compile(t,fo)}_sceneToCubeUV(e,t,n,r){const o=new It(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(jl),u.toneMapping=gn,u.autoClear=!1;const m=new Bu({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),g=new qt(new Sr,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(jl),p=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):S===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const A=this._cubeSize;Yr(r,S*A,_>2?A:0,A,A),u.setRenderTarget(r),p&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Gi||e.mapping===ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new qt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Yr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,fo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xl[(r-1)%Xl.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new qt(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Yn-1),p=s/g,d=isFinite(s)?1+Math.floor(u*p):Yn;d>Yn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Yn}`);const _=[];let S=0;for(let F=0;F<Yn;++F){const v=F/p,L=Math.exp(-v*v/2);_.push(L),F===0?S+=L:F<d&&(S+=2*L)}for(let F=0;F<_.length;F++)_[F]=_[F]/S;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=_,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:A}=this;h.dTheta.value=g,h.mipInt.value=A-n;const w=this._sizeLods[r],b=3*w*(r>A-Di?r-A+Di:0),C=4*(this._cubeSize-w);Yr(t,b,C,3*w,2*w),l.setRenderTarget(t),l.render(f,fo)}}function U_(i){const e=[],t=[],n=[];let r=i;const s=i-Di+1+ql.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Di?l=ql[a-i+Di-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,p=3,d=2,_=1,S=new Float32Array(p*g*m),A=new Float32Array(d*g*m),w=new Float32Array(_*g*m);for(let C=0;C<m;C++){const F=C%3*2/3-1,v=C>2?0:-1,L=[F,v,0,F+2/3,v,0,F+2/3,v+1,0,F,v,0,F+2/3,v+1,0,F,v+1,0];S.set(L,p*g*C),A.set(h,d*g*C);const O=[C,C,C,C,C,C];w.set(O,_*g*C)}const b=new zt;b.setAttribute("position",new nn(S,p)),b.setAttribute("uv",new nn(A,d)),b.setAttribute("faceIndex",new nn(w,_)),e.push(b),r>Di&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $l(i,e,t){const n=new ri(i,e,t);return n.texture.mapping=ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function B_(i,e,t){const n=new Float32Array(Yn),r=new I(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Sa(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Zl(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sa(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Kl(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Sa(){return`

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
	`}function G_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Uo||l===Bo,u=l===Gi||l===ki;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Yl(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Yl(i));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function k_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function V_(i,e,t,n){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const m=f.morphAttributes;for(const g in m){const p=m[g];for(let d=0,_=p.length;d<_;d++)e.update(p[d],34962)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let A=0,w=S.length;A<w;A+=3){const b=S[A+0],C=S[A+1],F=S[A+2];h.push(b,C,C,F,F,b)}}else{const S=g.array;p=g.version;for(let A=0,w=S.length/3-1;A<w;A+=3){const b=A+0,C=A+1,F=A+2;h.push(b,C,C,F,F,b)}}const d=new(Iu(h)?ku:Gu)(h,1);d.version=p;const _=s.get(f);_&&e.remove(_),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function H_(i,e,t,n){const r=n.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){i.drawElements(s,m,o,h*l),t.update(m,s,1)}function f(h,m,g){if(g===0)return;let p,d;if(r)p=i,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,o,h*l,g),t.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function W_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function q_(i,e){return i[0]-e[0]}function j_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function po(i,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),i.divideScalar(t)}function X_(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new nt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=p!==void 0?p.length:0;let _=s.get(u);if(_===void 0||_.count!==d){let H=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",H)};var g=H;_!==void 0&&_.texture.dispose();const w=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,F=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let O=0;w===!0&&(O=1),b===!0&&(O=2),C===!0&&(O=3);let z=u.attributes.position.count*O,he=1;z>e.maxTextureSize&&(he=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const oe=new Float32Array(z*he*4*d),N=new zu(oe,z,he,d);N.type=Zn,N.needsUpdate=!0;const te=O*4;for(let Y=0;Y<d;Y++){const W=F[Y],G=v[Y],K=L[Y],fe=z*he*4*Y;for(let le=0;le<W.count;le++){const se=le*te;w===!0&&(a.fromBufferAttribute(W,le),W.normalized===!0&&po(a,W),oe[fe+se+0]=a.x,oe[fe+se+1]=a.y,oe[fe+se+2]=a.z,oe[fe+se+3]=0),b===!0&&(a.fromBufferAttribute(G,le),G.normalized===!0&&po(a,G),oe[fe+se+4]=a.x,oe[fe+se+5]=a.y,oe[fe+se+6]=a.z,oe[fe+se+7]=0),C===!0&&(a.fromBufferAttribute(K,le),K.normalized===!0&&po(a,K),oe[fe+se+8]=a.x,oe[fe+se+9]=a.y,oe[fe+se+10]=a.z,oe[fe+se+11]=K.itemSize===4?a.w:1)}}_={count:d,texture:N,size:new De(z,he)},s.set(u,_),u.addEventListener("dispose",H)}let S=0;for(let w=0;w<m.length;w++)S+=m[w];const A=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(i,"morphTargetBaseInfluence",A),h.getUniforms().setValue(i,"morphTargetInfluences",m),h.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let d=n[u.id];if(d===void 0||d.length!==p){d=[];for(let b=0;b<p;b++)d[b]=[b,0];n[u.id]=d}for(let b=0;b<p;b++){const C=d[b];C[0]=b,C[1]=m[b]}d.sort(j_);for(let b=0;b<8;b++)b<p&&d[b][1]?(o[b][0]=d[b][0],o[b][1]=d[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(q_);const _=u.morphAttributes.position,S=u.morphAttributes.normal;let A=0;for(let b=0;b<8;b++){const C=o[b],F=C[0],v=C[1];F!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+b)!==_[F]&&u.setAttribute("morphTarget"+b,_[F]),S&&u.getAttribute("morphNormal"+b)!==S[F]&&u.setAttribute("morphNormal"+b,S[F]),r[b]=v,A+=v):(_&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),S&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),r[b]=0)}const w=u.morphTargetsRelative?1:1-A;h.getUniforms().setValue(i,"morphTargetBaseInfluence",w),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Y_(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const ju=new Ot,Xu=new zu,Yu=new zp,$u=new Hu,Jl=[],Ql=[],ec=new Float32Array(16),tc=new Float32Array(9),nc=new Float32Array(4);function $i(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Jl[r];if(s===void 0&&(s=new Float32Array(r),Jl[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ss(i,e){let t=Ql[e];t===void 0&&(t=new Int32Array(e),Ql[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Z_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function K_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function J_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function Q_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;nc.set(n),i.uniformMatrix2fv(this.addr,!1,nc),_t(t,n)}}function e0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;tc.set(n),i.uniformMatrix3fv(this.addr,!1,tc),_t(t,n)}}function t0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;ec.set(n),i.uniformMatrix4fv(this.addr,!1,ec),_t(t,n)}}function n0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function i0(i,e){const t=this.cache;gt(t,e)||(i.uniform2iv(this.addr,e),_t(t,e))}function r0(i,e){const t=this.cache;gt(t,e)||(i.uniform3iv(this.addr,e),_t(t,e))}function s0(i,e){const t=this.cache;gt(t,e)||(i.uniform4iv(this.addr,e),_t(t,e))}function o0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function a0(i,e){const t=this.cache;gt(t,e)||(i.uniform2uiv(this.addr,e),_t(t,e))}function l0(i,e){const t=this.cache;gt(t,e)||(i.uniform3uiv(this.addr,e),_t(t,e))}function c0(i,e){const t=this.cache;gt(t,e)||(i.uniform4uiv(this.addr,e),_t(t,e))}function u0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||ju,r)}function f0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Yu,r)}function h0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||$u,r)}function d0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Xu,r)}function p0(i){switch(i){case 5126:return $_;case 35664:return Z_;case 35665:return K_;case 35666:return J_;case 35674:return Q_;case 35675:return e0;case 35676:return t0;case 5124:case 35670:return n0;case 35667:case 35671:return i0;case 35668:case 35672:return r0;case 35669:case 35673:return s0;case 5125:return o0;case 36294:return a0;case 36295:return l0;case 36296:return c0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return f0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return d0}}function m0(i,e){i.uniform1fv(this.addr,e)}function g0(i,e){const t=$i(e,this.size,2);i.uniform2fv(this.addr,t)}function _0(i,e){const t=$i(e,this.size,3);i.uniform3fv(this.addr,t)}function x0(i,e){const t=$i(e,this.size,4);i.uniform4fv(this.addr,t)}function v0(i,e){const t=$i(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function M0(i,e){const t=$i(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function y0(i,e){const t=$i(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function b0(i,e){i.uniform1iv(this.addr,e)}function S0(i,e){i.uniform2iv(this.addr,e)}function w0(i,e){i.uniform3iv(this.addr,e)}function E0(i,e){i.uniform4iv(this.addr,e)}function T0(i,e){i.uniform1uiv(this.addr,e)}function A0(i,e){i.uniform2uiv(this.addr,e)}function C0(i,e){i.uniform3uiv(this.addr,e)}function L0(i,e){i.uniform4uiv(this.addr,e)}function P0(i,e,t){const n=e.length,r=Ss(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||ju,r[s])}function D0(i,e,t){const n=e.length,r=Ss(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Yu,r[s])}function R0(i,e,t){const n=e.length,r=Ss(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||$u,r[s])}function I0(i,e,t){const n=e.length,r=Ss(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Xu,r[s])}function F0(i){switch(i){case 5126:return m0;case 35664:return g0;case 35665:return _0;case 35666:return x0;case 35674:return v0;case 35675:return M0;case 35676:return y0;case 5124:case 35670:return b0;case 35667:case 35671:return S0;case 35668:case 35672:return w0;case 35669:case 35673:return E0;case 5125:return T0;case 36294:return A0;case 36295:return C0;case 36296:return L0;case 35678:case 36198:case 36298:case 36306:case 35682:return P0;case 35679:case 36299:case 36307:return D0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return I0}}class N0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=p0(t.type)}}class O0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=F0(t.type)}}class z0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const mo=/(\w+)(\])?(\[|\.)?/g;function ic(i,e){i.seq.push(e),i.map[e.id]=e}function U0(i,e,t){const n=i.name,r=n.length;for(mo.lastIndex=0;;){const s=mo.exec(n),a=mo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ic(t,c===void 0?new N0(o,i,e):new O0(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new z0(o),ic(t,f)),t=f}}}class rs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);U0(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function rc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let B0=0;function G0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function k0(i){switch(i){case ii:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function sc(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+G0(i.getShaderSource(e),a)}else return r}function V0(i,e){const t=k0(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function H0(i,e){let t;switch(e){case up:t="Linear";break;case fp:t="Reinhard";break;case hp:t="OptimizedCineon";break;case dp:t="ACESFilmic";break;case pp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function W0(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rr).join(`
`)}function q0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function j0(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function rr(i){return i!==""}function oc(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ac(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const X0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wo(i){return i.replace(X0,Y0)}function Y0(i,e){const t=ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Wo(t)}const $0=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lc(i){return i.replace(Z0,Zu).replace($0,K0)}function K0(i,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Zu(i,e,t,n)}function Zu(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function J0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Au?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===kd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ir&&(e="SHADOWMAP_TYPE_VSM"),e}function Q0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gi:case ki:e="ENVMAP_TYPE_CUBE";break;case ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ex(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ki:e="ENVMAP_MODE_REFRACTION";break}return e}function tx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case va:e="ENVMAP_BLENDING_MULTIPLY";break;case lp:e="ENVMAP_BLENDING_MIX";break;case cp:e="ENVMAP_BLENDING_ADD";break}return e}function nx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ix(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=J0(t),c=Q0(t),u=ex(t),f=tx(t),h=nx(t),m=t.isWebGL2?"":W0(t),g=q0(s),p=r.createProgram();let d,_,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(rr).join(`
`),d.length>0&&(d+=`
`),_=[m,g].filter(rr).join(`
`),_.length>0&&(_+=`
`)):(d=[cc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),_=[m,cc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gn?"#define TONE_MAPPING":"",t.toneMapping!==gn?ze.tonemapping_pars_fragment:"",t.toneMapping!==gn?H0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.encodings_pars_fragment,V0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),a=Wo(a),a=oc(a,t),a=ac(a,t),o=Wo(o),o=oc(o,t),o=ac(o,t),a=lc(a),o=lc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===Dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const A=S+d+a,w=S+_+o,b=rc(r,35633,A),C=rc(r,35632,w);if(r.attachShader(p,b),r.attachShader(p,C),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),i.debug.checkShaderErrors){const L=r.getProgramInfoLog(p).trim(),O=r.getShaderInfoLog(b).trim(),z=r.getShaderInfoLog(C).trim();let he=!0,oe=!0;if(r.getProgramParameter(p,35714)===!1){he=!1;const N=sc(r,b,"vertex"),te=sc(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+L+`
`+N+`
`+te)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(O===""||z==="")&&(oe=!1);oe&&(this.diagnostics={runnable:he,programLog:L,vertexShader:{log:O,prefix:d},fragmentShader:{log:z,prefix:_}})}r.deleteShader(b),r.deleteShader(C);let F;this.getUniforms=function(){return F===void 0&&(F=new rs(r,p)),F};let v;return this.getAttributes=function(){return v===void 0&&(v=j0(r,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=B0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=C,this}let rx=0;class sx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new ox(e);t.set(e,n)}return t.get(e)}}class ox{constructor(e){this.id=rx++,this.code=e,this.usedTimes=0}}function ax(i,e,t,n,r,s,a){const o=new Uu,l=new sx,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,L,O,z,he){const oe=z.fog,N=he.geometry,te=v.isMeshStandardMaterial?z.environment:null,H=(v.isMeshStandardMaterial?t:e).get(v.envMap||te),Y=!!H&&H.mapping===ys?H.image.height:null,W=g[v.type];v.precision!==null&&(m=r.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const G=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,K=G!==void 0?G.length:0;let fe=0;N.morphAttributes.position!==void 0&&(fe=1),N.morphAttributes.normal!==void 0&&(fe=2),N.morphAttributes.color!==void 0&&(fe=3);let le,se,ye,Ee;if(W){const Be=Qt[W];le=Be.vertexShader,se=Be.fragmentShader}else le=v.vertexShader,se=v.fragmentShader,l.update(v),ye=l.getVertexShaderID(v),Ee=l.getFragmentShaderID(v);const Q=i.getRenderTarget(),Pe=v.alphaTest>0,Se=v.clearcoat>0,we=v.iridescence>0;return{isWebGL2:u,shaderID:W,shaderName:v.type,vertexShader:le,fragmentShader:se,defines:v.defines,customVertexShaderID:ye,customFragmentShaderID:Ee,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:he.isInstancedMesh===!0,instancingColor:he.isInstancedMesh===!0&&he.instanceColor!==null,supportsVertexTextures:h,outputEncoding:Q===null?i.outputEncoding:Q.isXRRenderTarget===!0?Q.texture.encoding:ii,map:!!v.map,matcap:!!v.matcap,envMap:!!H,envMapMode:H&&H.mapping,envMapCubeUVHeight:Y,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Ip,tangentSpaceNormalMap:v.normalMapType===Ru,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ze,clearcoat:Se,clearcoatMap:Se&&!!v.clearcoatMap,clearcoatRoughnessMap:Se&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:Se&&!!v.clearcoatNormalMap,iridescence:we,iridescenceMap:we&&!!v.iridescenceMap,iridescenceThicknessMap:we&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Ni,alphaMap:!!v.alphaMap,alphaTest:Pe,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!N.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!oe,useFog:v.fog===!0,fogExp2:oe&&oe.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:f,skinning:he.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:fe,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:gn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Bi,flipSided:v.side===Xt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const L=[];if(v.shaderID?L.push(v.shaderID):(L.push(v.customVertexShaderID),L.push(v.customFragmentShaderID)),v.defines!==void 0)for(const O in v.defines)L.push(O),L.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(_(L,v),S(L,v),L.push(i.outputEncoding)),L.push(v.customProgramCacheKey),L.join()}function _(v,L){v.push(L.precision),v.push(L.outputEncoding),v.push(L.envMapMode),v.push(L.envMapCubeUVHeight),v.push(L.combine),v.push(L.vertexUvs),v.push(L.fogExp2),v.push(L.sizeAttenuation),v.push(L.morphTargetsCount),v.push(L.morphAttributeCount),v.push(L.numDirLights),v.push(L.numPointLights),v.push(L.numSpotLights),v.push(L.numHemiLights),v.push(L.numRectAreaLights),v.push(L.numDirLightShadows),v.push(L.numPointLightShadows),v.push(L.numSpotLightShadows),v.push(L.shadowMapType),v.push(L.toneMapping),v.push(L.numClippingPlanes),v.push(L.numClipIntersection),v.push(L.depthPacking)}function S(v,L){o.disableAll(),L.isWebGL2&&o.enable(0),L.supportsVertexTextures&&o.enable(1),L.instancing&&o.enable(2),L.instancingColor&&o.enable(3),L.map&&o.enable(4),L.matcap&&o.enable(5),L.envMap&&o.enable(6),L.lightMap&&o.enable(7),L.aoMap&&o.enable(8),L.emissiveMap&&o.enable(9),L.bumpMap&&o.enable(10),L.normalMap&&o.enable(11),L.objectSpaceNormalMap&&o.enable(12),L.tangentSpaceNormalMap&&o.enable(13),L.clearcoat&&o.enable(14),L.clearcoatMap&&o.enable(15),L.clearcoatRoughnessMap&&o.enable(16),L.clearcoatNormalMap&&o.enable(17),L.iridescence&&o.enable(18),L.iridescenceMap&&o.enable(19),L.iridescenceThicknessMap&&o.enable(20),L.displacementMap&&o.enable(21),L.specularMap&&o.enable(22),L.roughnessMap&&o.enable(23),L.metalnessMap&&o.enable(24),L.gradientMap&&o.enable(25),L.alphaMap&&o.enable(26),L.alphaTest&&o.enable(27),L.vertexColors&&o.enable(28),L.vertexAlphas&&o.enable(29),L.vertexUvs&&o.enable(30),L.vertexTangents&&o.enable(31),L.uvsVertexOnly&&o.enable(32),L.fog&&o.enable(33),v.push(o.mask),o.disableAll(),L.useFog&&o.enable(0),L.flatShading&&o.enable(1),L.logarithmicDepthBuffer&&o.enable(2),L.skinning&&o.enable(3),L.morphTargets&&o.enable(4),L.morphNormals&&o.enable(5),L.morphColors&&o.enable(6),L.premultipliedAlpha&&o.enable(7),L.shadowMapEnabled&&o.enable(8),L.physicallyCorrectLights&&o.enable(9),L.doubleSided&&o.enable(10),L.flipSided&&o.enable(11),L.useDepthPacking&&o.enable(12),L.dithering&&o.enable(13),L.specularIntensityMap&&o.enable(14),L.specularColorMap&&o.enable(15),L.transmission&&o.enable(16),L.transmissionMap&&o.enable(17),L.thicknessMap&&o.enable(18),L.sheen&&o.enable(19),L.sheenColorMap&&o.enable(20),L.sheenRoughnessMap&&o.enable(21),L.decodeVideoTexture&&o.enable(22),L.opaque&&o.enable(23),v.push(o.mask)}function A(v){const L=g[v.type];let O;if(L){const z=Qt[L];O=$p.clone(z.uniforms)}else O=v.uniforms;return O}function w(v,L){let O;for(let z=0,he=c.length;z<he;z++){const oe=c[z];if(oe.cacheKey===L){O=oe,++O.usedTimes;break}}return O===void 0&&(O=new ix(i,L,v,s),c.push(O)),O}function b(v){if(--v.usedTimes===0){const L=c.indexOf(v);c[L]=c[c.length-1],c.pop(),v.destroy()}}function C(v){l.remove(v)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:A,acquireProgram:w,releaseProgram:b,releaseShaderCache:C,programs:c,dispose:F}}function lx(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function cx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function uc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function fc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,h,m,g,p,d){let _=i[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:p,group:d},i[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=p,_.group=d),e++,_}function o(f,h,m,g,p,d){const _=a(f,h,m,g,p,d);m.transmission>0?n.push(_):m.transparent===!0?r.push(_):t.push(_)}function l(f,h,m,g,p,d){const _=a(f,h,m,g,p,d);m.transmission>0?n.unshift(_):m.transparent===!0?r.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||cx),n.length>1&&n.sort(h||uc),r.length>1&&r.sort(h||uc)}function u(){for(let f=e,h=i.length;f<h;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function ux(){let i=new WeakMap;function e(n,r){let s;return i.has(n)===!1?(s=new fc,i.set(n,[s])):r>=i.get(n).length?(s=new fc,i.get(n).push(s)):s=i.get(n)[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function fx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new He};break;case"SpotLight":t={position:new I,direction:new I,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function hx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let dx=0;function px(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function mx(i,e){const t=new fx,n=hx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,a=new Je,o=new Je;function l(u,f){let h=0,m=0,g=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let p=0,d=0,_=0,S=0,A=0,w=0,b=0,C=0;u.sort(px);const F=f!==!0?Math.PI:1;for(let L=0,O=u.length;L<O;L++){const z=u[L],he=z.color,oe=z.intensity,N=z.distance,te=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=he.r*oe*F,m+=he.g*oe*F,g+=he.b*oe*F;else if(z.isLightProbe)for(let H=0;H<9;H++)r.probe[H].addScaledVector(z.sh.coefficients[H],oe);else if(z.isDirectionalLight){const H=t.get(z);if(H.color.copy(z.color).multiplyScalar(z.intensity*F),z.castShadow){const Y=z.shadow,W=n.get(z);W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,r.directionalShadow[p]=W,r.directionalShadowMap[p]=te,r.directionalShadowMatrix[p]=z.shadow.matrix,w++}r.directional[p]=H,p++}else if(z.isSpotLight){const H=t.get(z);if(H.position.setFromMatrixPosition(z.matrixWorld),H.color.copy(he).multiplyScalar(oe*F),H.distance=N,H.coneCos=Math.cos(z.angle),H.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),H.decay=z.decay,z.castShadow){const Y=z.shadow,W=n.get(z);W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,r.spotShadow[_]=W,r.spotShadowMap[_]=te,r.spotShadowMatrix[_]=z.shadow.matrix,C++}r.spot[_]=H,_++}else if(z.isRectAreaLight){const H=t.get(z);H.color.copy(he).multiplyScalar(oe),H.halfWidth.set(z.width*.5,0,0),H.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=H,S++}else if(z.isPointLight){const H=t.get(z);if(H.color.copy(z.color).multiplyScalar(z.intensity*F),H.distance=z.distance,H.decay=z.decay,z.castShadow){const Y=z.shadow,W=n.get(z);W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,r.pointShadow[d]=W,r.pointShadowMap[d]=te,r.pointShadowMatrix[d]=z.shadow.matrix,b++}r.point[d]=H,d++}else if(z.isHemisphereLight){const H=t.get(z);H.skyColor.copy(z.color).multiplyScalar(oe*F),H.groundColor.copy(z.groundColor).multiplyScalar(oe*F),r.hemi[A]=H,A++}}S>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;const v=r.hash;(v.directionalLength!==p||v.pointLength!==d||v.spotLength!==_||v.rectAreaLength!==S||v.hemiLength!==A||v.numDirectionalShadows!==w||v.numPointShadows!==b||v.numSpotShadows!==C)&&(r.directional.length=p,r.spot.length=_,r.rectArea.length=S,r.point.length=d,r.hemi.length=A,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=b,r.spotShadowMatrix.length=C,v.directionalLength=p,v.pointLength=d,v.spotLength=_,v.rectAreaLength=S,v.hemiLength=A,v.numDirectionalShadows=w,v.numPointShadows=b,v.numSpotShadows=C,r.version=dx++)}function c(u,f){let h=0,m=0,g=0,p=0,d=0;const _=f.matrixWorldInverse;for(let S=0,A=u.length;S<A;S++){const w=u[S];if(w.isDirectionalLight){const b=r.directional[h];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),h++}else if(w.isSpotLight){const b=r.spot[g];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),g++}else if(w.isRectAreaLight){const b=r.rectArea[p];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(_),o.identity(),a.copy(w.matrixWorld),a.premultiply(_),o.extractRotation(a),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),p++}else if(w.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(_),m++}else if(w.isHemisphereLight){const b=r.hemi[d];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:r}}function hc(i,e){const t=new mx(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(f){n.push(f)}function o(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function gx(i,e){let t=new WeakMap;function n(s,a=0){let o;return t.has(s)===!1?(o=new hc(i,e),t.set(s,[o])):a>=t.get(s).length?(o=new hc(i,e),t.get(s).push(o)):o=t.get(s)[a],o}function r(){t=new WeakMap}return{get:n,dispose:r}}class _x extends xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xx extends xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mx=`uniform sampler2D shadow_pass;
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
}`;function yx(i,e,t){let n=new ya;const r=new De,s=new De,a=new nt,o=new _x({depthPacking:Rp}),l=new xx,c={},u=t.maxTextureSize,f={0:Xt,1:xr,2:Bi},h=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:vx,fragmentShader:Mx}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new zt;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new qt(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Au,this.render=function(w,b,C){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;const F=i.getRenderTarget(),v=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Fn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let z=0,he=w.length;z<he;z++){const oe=w[z],N=oe.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const te=N.getFrameExtents();if(r.multiply(te),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/te.x),r.x=s.x*te.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/te.y),r.y=s.y*te.y,N.mapSize.y=s.y)),N.map===null){const Y=this.type!==ir?{minFilter:vt,magFilter:vt}:{};N.map=new ri(r.x,r.y,Y),N.map.texture.name=oe.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const H=N.getViewportCount();for(let Y=0;Y<H;Y++){const W=N.getViewport(Y);a.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),O.viewport(a),N.updateMatrices(oe,Y),n=N.getFrustum(),A(b,C,N.camera,oe,this.type)}N.isPointLightShadow!==!0&&this.type===ir&&_(N,C),N.needsUpdate=!1}d.needsUpdate=!1,i.setRenderTarget(F,v,L)};function _(w,b){const C=e.update(p);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ri(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(b,null,C,h,p,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(b,null,C,m,p,null)}function S(w,b,C,F,v,L){let O=null;const z=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(z!==void 0?O=z:O=C.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0){const he=O.uuid,oe=b.uuid;let N=c[he];N===void 0&&(N={},c[he]=N);let te=N[oe];te===void 0&&(te=O.clone(),N[oe]=te),O=te}return O.visible=b.visible,O.wireframe=b.wireframe,L===ir?O.side=b.shadowSide!==null?b.shadowSide:b.side:O.side=b.shadowSide!==null?b.shadowSide:f[b.side],O.alphaMap=b.alphaMap,O.alphaTest=b.alphaTest,O.clipShadows=b.clipShadows,O.clippingPlanes=b.clippingPlanes,O.clipIntersection=b.clipIntersection,O.displacementMap=b.displacementMap,O.displacementScale=b.displacementScale,O.displacementBias=b.displacementBias,O.wireframeLinewidth=b.wireframeLinewidth,O.linewidth=b.linewidth,C.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(C.matrixWorld),O.nearDistance=F,O.farDistance=v),O}function A(w,b,C,F,v){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===ir)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const z=e.update(w),he=w.material;if(Array.isArray(he)){const oe=z.groups;for(let N=0,te=oe.length;N<te;N++){const H=oe[N],Y=he[H.materialIndex];if(Y&&Y.visible){const W=S(w,Y,F,C.near,C.far,v);i.renderBufferDirect(C,null,z,W,w,H)}}}else if(he.visible){const oe=S(w,he,F,C.near,C.far,v);i.renderBufferDirect(C,null,z,oe,w,null)}}const O=w.children;for(let z=0,he=O.length;z<he;z++)A(O[z],b,C,F,v)}}function bx(i,e,t){const n=t.isWebGL2;function r(){let D=!1;const de=new nt;let $=null;const Me=new nt(0,0,0,0);return{setMask:function(ve){$!==ve&&!D&&(i.colorMask(ve,ve,ve,ve),$=ve)},setLocked:function(ve){D=ve},setClear:function(ve,ke,it,Ke,Mn){Mn===!0&&(ve*=Ke,ke*=Ke,it*=Ke),de.set(ve,ke,it,Ke),Me.equals(de)===!1&&(i.clearColor(ve,ke,it,Ke),Me.copy(de))},reset:function(){D=!1,$=null,Me.set(-1,0,0,0)}}}function s(){let D=!1,de=null,$=null,Me=null;return{setTest:function(ve){ve?Pe(2929):Se(2929)},setMask:function(ve){de!==ve&&!D&&(i.depthMask(ve),de=ve)},setFunc:function(ve){if($!==ve){if(ve)switch(ve){case tp:i.depthFunc(512);break;case np:i.depthFunc(519);break;case ip:i.depthFunc(513);break;case zo:i.depthFunc(515);break;case rp:i.depthFunc(514);break;case sp:i.depthFunc(518);break;case op:i.depthFunc(516);break;case ap:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);$=ve}},setLocked:function(ve){D=ve},setClear:function(ve){Me!==ve&&(i.clearDepth(ve),Me=ve)},reset:function(){D=!1,de=null,$=null,Me=null}}}function a(){let D=!1,de=null,$=null,Me=null,ve=null,ke=null,it=null,Ke=null,Mn=null;return{setTest:function(Ye){D||(Ye?Pe(2960):Se(2960))},setMask:function(Ye){de!==Ye&&!D&&(i.stencilMask(Ye),de=Ye)},setFunc:function(Ye,rn,At){($!==Ye||Me!==rn||ve!==At)&&(i.stencilFunc(Ye,rn,At),$=Ye,Me=rn,ve=At)},setOp:function(Ye,rn,At){(ke!==Ye||it!==rn||Ke!==At)&&(i.stencilOp(Ye,rn,At),ke=Ye,it=rn,Ke=At)},setLocked:function(Ye){D=Ye},setClear:function(Ye){Mn!==Ye&&(i.clearStencil(Ye),Mn=Ye)},reset:function(){D=!1,de=null,$=null,Me=null,ve=null,ke=null,it=null,Ke=null,Mn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,p=[],d=null,_=!1,S=null,A=null,w=null,b=null,C=null,F=null,v=null,L=!1,O=null,z=null,he=null,oe=null,N=null;const te=i.getParameter(35661);let H=!1,Y=0;const W=i.getParameter(7938);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=Y>=2);let G=null,K={};const fe=i.getParameter(3088),le=i.getParameter(2978),se=new nt().fromArray(fe),ye=new nt().fromArray(le);function Ee(D,de,$){const Me=new Uint8Array(4),ve=i.createTexture();i.bindTexture(D,ve),i.texParameteri(D,10241,9728),i.texParameteri(D,10240,9728);for(let ke=0;ke<$;ke++)i.texImage2D(de+ke,0,6408,1,1,0,6408,5121,Me);return ve}const Q={};Q[3553]=Ee(3553,3553,1),Q[34067]=Ee(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(2929),l.setFunc(zo),Z(!1),J(tl),Pe(2884),P(Fn);function Pe(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Se(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function we(D,de){return m[D]!==de?(i.bindFramebuffer(D,de),m[D]=de,n&&(D===36009&&(m[36160]=de),D===36160&&(m[36009]=de)),!0):!1}function xe(D,de){let $=p,Me=!1;if(D)if($=g.get(de),$===void 0&&($=[],g.set(de,$)),D.isWebGLMultipleRenderTargets){const ve=D.texture;if($.length!==ve.length||$[0]!==36064){for(let ke=0,it=ve.length;ke<it;ke++)$[ke]=36064+ke;$.length=ve.length,Me=!0}}else $[0]!==36064&&($[0]=36064,Me=!0);else $[0]!==1029&&($[0]=1029,Me=!0);Me&&(t.isWebGL2?i.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function Be(D){return d!==D?(i.useProgram(D),d=D,!0):!1}const Ae={[Li]:32774,[Wd]:32778,[qd]:32779};if(n)Ae[sl]=32775,Ae[ol]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ae[sl]=D.MIN_EXT,Ae[ol]=D.MAX_EXT)}const E={[jd]:0,[Xd]:1,[Yd]:768,[Cu]:770,[ep]:776,[Jd]:774,[Zd]:772,[$d]:769,[Lu]:771,[Qd]:775,[Kd]:773};function P(D,de,$,Me,ve,ke,it,Ke){if(D===Fn){_===!0&&(Se(3042),_=!1);return}if(_===!1&&(Pe(3042),_=!0),D!==Hd){if(D!==S||Ke!==L){if((A!==Li||C!==Li)&&(i.blendEquation(32774),A=Li,C=Li),Ke)switch(D){case Ni:i.blendFuncSeparate(1,771,1,771);break;case nl:i.blendFunc(1,1);break;case il:i.blendFuncSeparate(0,769,0,1);break;case rl:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ni:i.blendFuncSeparate(770,771,1,771);break;case nl:i.blendFunc(770,1);break;case il:i.blendFuncSeparate(0,769,0,1);break;case rl:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,b=null,F=null,v=null,S=D,L=Ke}return}ve=ve||de,ke=ke||$,it=it||Me,(de!==A||ve!==C)&&(i.blendEquationSeparate(Ae[de],Ae[ve]),A=de,C=ve),($!==w||Me!==b||ke!==F||it!==v)&&(i.blendFuncSeparate(E[$],E[Me],E[ke],E[it]),w=$,b=Me,F=ke,v=it),S=D,L=null}function k(D,de){D.side===Bi?Se(2884):Pe(2884);let $=D.side===Xt;de&&($=!$),Z($),D.blending===Ni&&D.transparent===!1?P(Fn):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const Me=D.stencilWrite;c.setTest(Me),Me&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),re(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Pe(32926):Se(32926)}function Z(D){O!==D&&(D?i.frontFace(2304):i.frontFace(2305),O=D)}function J(D){D!==Bd?(Pe(2884),D!==z&&(D===tl?i.cullFace(1029):D===Gd?i.cullFace(1028):i.cullFace(1032))):Se(2884),z=D}function ie(D){D!==he&&(H&&i.lineWidth(D),he=D)}function re(D,de,$){D?(Pe(32823),(oe!==de||N!==$)&&(i.polygonOffset(de,$),oe=de,N=$)):Se(32823)}function ae(D){D?Pe(3089):Se(3089)}function ue(D){D===void 0&&(D=33984+te-1),G!==D&&(i.activeTexture(D),G=D)}function M(D,de){G===null&&ue();let $=K[G];$===void 0&&($={type:void 0,texture:void 0},K[G]=$),($.type!==D||$.texture!==de)&&(i.bindTexture(D,de||Q[D]),$.type=D,$.texture=de)}function x(){const D=K[G];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function R(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function B(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function y(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(D){se.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),se.copy(D))}function me(D){ye.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ye.copy(D))}function be(D,de){let $=f.get(de);$===void 0&&($=new WeakMap,f.set(de,$));let Me=$.get(D);Me===void 0&&(Me=i.getUniformBlockIndex(de,D.name),$.set(D,Me))}function Fe(D,de){const Me=f.get(de).get(D);u.get(D)!==Me&&(i.uniformBlockBinding(de,Me,D.__bindingPointIndex),u.set(D,Me))}function Ne(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},G=null,K={},m={},g=new WeakMap,p=[],d=null,_=!1,S=null,A=null,w=null,b=null,C=null,F=null,v=null,L=!1,O=null,z=null,he=null,oe=null,N=null,se.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Pe,disable:Se,bindFramebuffer:we,drawBuffers:xe,useProgram:Be,setBlending:P,setMaterial:k,setFlipSided:Z,setCullFace:J,setLineWidth:ie,setPolygonOffset:re,setScissorTest:ae,activeTexture:ue,bindTexture:M,unbindTexture:x,compressedTexImage2D:R,texImage2D:q,texImage3D:ce,updateUBOMapping:be,uniformBlockBinding:Fe,texStorage2D:_e,texStorage3D:y,texSubImage2D:B,texSubImage3D:X,compressedTexSubImage2D:ne,scissor:pe,viewport:me,reset:Ne}}function Sx(i,e,t,n,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(M,x){return _?new OffscreenCanvas(M,x):Mr("canvas")}function A(M,x,R,B){let X=1;if((M.width>B||M.height>B)&&(X=B/Math.max(M.width,M.height)),X<1||x===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const ne=x?Ho:Math.floor,_e=ne(X*M.width),y=ne(X*M.height);p===void 0&&(p=S(_e,y));const q=R?S(_e,y):p;return q.width=_e,q.height=y,q.getContext("2d").drawImage(M,0,0,_e,y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+_e+"x"+y+")."),q}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function w(M){return Il(M.width)&&Il(M.height)}function b(M){return o?!1:M.wrapS!==Ht||M.wrapT!==Ht||M.minFilter!==vt&&M.minFilter!==Rt}function C(M,x){return M.generateMipmaps&&x&&M.minFilter!==vt&&M.minFilter!==Rt}function F(M){i.generateMipmap(M)}function v(M,x,R,B,X=!1){if(o===!1)return x;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ne=x;return x===6403&&(R===5126&&(ne=33326),R===5131&&(ne=33325),R===5121&&(ne=33321)),x===33319&&(R===5126&&(ne=33328),R===5131&&(ne=33327),R===5121&&(ne=33323)),x===6408&&(R===5126&&(ne=34836),R===5131&&(ne=34842),R===5121&&(ne=B===Ze&&X===!1?35907:32856),R===32819&&(ne=32854),R===32820&&(ne=32855)),(ne===33325||ne===33326||ne===33327||ne===33328||ne===34842||ne===34836)&&e.get("EXT_color_buffer_float"),ne}function L(M,x,R){return C(M,R)===!0||M.isFramebufferTexture&&M.minFilter!==vt&&M.minFilter!==Rt?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function O(M){return M===vt||M===al||M===ll?9728:9729}function z(M){const x=M.target;x.removeEventListener("dispose",z),oe(x),x.isVideoTexture&&g.delete(x)}function he(M){const x=M.target;x.removeEventListener("dispose",he),te(x)}function oe(M){const x=n.get(M);if(x.__webglInit===void 0)return;const R=M.source,B=d.get(R);if(B){const X=B[x.__cacheKey];X.usedTimes--,X.usedTimes===0&&N(M),Object.keys(B).length===0&&d.delete(R)}n.remove(M)}function N(M){const x=n.get(M);i.deleteTexture(x.__webglTexture);const R=M.source,B=d.get(R);delete B[x.__cacheKey],a.memory.textures--}function te(M){const x=M.texture,R=n.get(M),B=n.get(x);if(B.__webglTexture!==void 0&&(i.deleteTexture(B.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let X=0;X<6;X++)i.deleteFramebuffer(R.__webglFramebuffer[X]),R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[X]);else{if(i.deleteFramebuffer(R.__webglFramebuffer),R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let X=0;X<R.__webglColorRenderbuffer.length;X++)R.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[X]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let X=0,ne=x.length;X<ne;X++){const _e=n.get(x[X]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(x[X])}n.remove(x),n.remove(M)}let H=0;function Y(){H=0}function W(){const M=H;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),H+=1,M}function G(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.encoding),x.join()}function K(M,x){const R=n.get(M);if(M.isVideoTexture&&ae(M),M.isRenderTargetTexture===!1&&M.version>0&&R.__version!==M.version){const B=M.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(R,M,x);return}}t.activeTexture(33984+x),t.bindTexture(3553,R.__webglTexture)}function fe(M,x){const R=n.get(M);if(M.version>0&&R.__version!==M.version){Se(R,M,x);return}t.activeTexture(33984+x),t.bindTexture(35866,R.__webglTexture)}function le(M,x){const R=n.get(M);if(M.version>0&&R.__version!==M.version){Se(R,M,x);return}t.activeTexture(33984+x),t.bindTexture(32879,R.__webglTexture)}function se(M,x){const R=n.get(M);if(M.version>0&&R.__version!==M.version){we(R,M,x);return}t.activeTexture(33984+x),t.bindTexture(34067,R.__webglTexture)}const ye={[Go]:10497,[Ht]:33071,[ko]:33648},Ee={[vt]:9728,[al]:9984,[ll]:9986,[Rt]:9729,[mp]:9985,[bs]:9987};function Q(M,x,R){if(R?(i.texParameteri(M,10242,ye[x.wrapS]),i.texParameteri(M,10243,ye[x.wrapT]),(M===32879||M===35866)&&i.texParameteri(M,32882,ye[x.wrapR]),i.texParameteri(M,10240,Ee[x.magFilter]),i.texParameteri(M,10241,Ee[x.minFilter])):(i.texParameteri(M,10242,33071),i.texParameteri(M,10243,33071),(M===32879||M===35866)&&i.texParameteri(M,32882,33071),(x.wrapS!==Ht||x.wrapT!==Ht)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,10240,O(x.magFilter)),i.texParameteri(M,10241,O(x.minFilter)),x.minFilter!==vt&&x.minFilter!==Rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");if(x.type===Zn&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===vr&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(M,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Pe(M,x){let R=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",z));const B=x.source;let X=d.get(B);X===void 0&&(X={},d.set(B,X));const ne=G(x);if(ne!==M.__cacheKey){X[ne]===void 0&&(X[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,R=!0),X[ne].usedTimes++;const _e=X[M.__cacheKey];_e!==void 0&&(X[M.__cacheKey].usedTimes--,_e.usedTimes===0&&N(x)),M.__cacheKey=ne,M.__webglTexture=X[ne].texture}return R}function Se(M,x,R){let B=3553;x.isDataArrayTexture&&(B=35866),x.isData3DTexture&&(B=32879);const X=Pe(M,x),ne=x.source;if(t.activeTexture(33984+R),t.bindTexture(B,M.__webglTexture),ne.version!==ne.__currentVersion||X===!0){i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const _e=b(x)&&w(x.image)===!1;let y=A(x.image,_e,!1,u);y=ue(x,y);const q=w(y)||o,ce=s.convert(x.format,x.encoding);let pe=s.convert(x.type),me=v(x.internalFormat,ce,pe,x.encoding,x.isVideoTexture);Q(B,x,q);let be;const Fe=x.mipmaps,Ne=o&&x.isVideoTexture!==!0,D=ne.__currentVersion===void 0||X===!0,de=L(x,y,q);if(x.isDepthTexture)me=6402,o?x.type===Zn?me=36012:x.type===$n?me=33190:x.type===Oi?me=35056:me=33189:x.type===Zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===ei&&me===6402&&x.type!==Du&&x.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=$n,pe=s.convert(x.type)),x.format===Vi&&me===6402&&(me=34041,x.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Oi,pe=s.convert(x.type))),D&&(Ne?t.texStorage2D(3553,1,me,y.width,y.height):t.texImage2D(3553,0,me,y.width,y.height,0,ce,pe,null));else if(x.isDataTexture)if(Fe.length>0&&q){Ne&&D&&t.texStorage2D(3553,de,me,Fe[0].width,Fe[0].height);for(let $=0,Me=Fe.length;$<Me;$++)be=Fe[$],Ne?t.texSubImage2D(3553,$,0,0,be.width,be.height,ce,pe,be.data):t.texImage2D(3553,$,me,be.width,be.height,0,ce,pe,be.data);x.generateMipmaps=!1}else Ne?(D&&t.texStorage2D(3553,de,me,y.width,y.height),t.texSubImage2D(3553,0,0,0,y.width,y.height,ce,pe,y.data)):t.texImage2D(3553,0,me,y.width,y.height,0,ce,pe,y.data);else if(x.isCompressedTexture){Ne&&D&&t.texStorage2D(3553,de,me,Fe[0].width,Fe[0].height);for(let $=0,Me=Fe.length;$<Me;$++)be=Fe[$],x.format!==tn?ce!==null?Ne?t.compressedTexSubImage2D(3553,$,0,0,be.width,be.height,ce,be.data):t.compressedTexImage2D(3553,$,me,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage2D(3553,$,0,0,be.width,be.height,ce,pe,be.data):t.texImage2D(3553,$,me,be.width,be.height,0,ce,pe,be.data)}else if(x.isDataArrayTexture)Ne?(D&&t.texStorage3D(35866,de,me,y.width,y.height,y.depth),t.texSubImage3D(35866,0,0,0,0,y.width,y.height,y.depth,ce,pe,y.data)):t.texImage3D(35866,0,me,y.width,y.height,y.depth,0,ce,pe,y.data);else if(x.isData3DTexture)Ne?(D&&t.texStorage3D(32879,de,me,y.width,y.height,y.depth),t.texSubImage3D(32879,0,0,0,0,y.width,y.height,y.depth,ce,pe,y.data)):t.texImage3D(32879,0,me,y.width,y.height,y.depth,0,ce,pe,y.data);else if(x.isFramebufferTexture){if(D)if(Ne)t.texStorage2D(3553,de,me,y.width,y.height);else{let $=y.width,Me=y.height;for(let ve=0;ve<de;ve++)t.texImage2D(3553,ve,me,$,Me,0,ce,pe,null),$>>=1,Me>>=1}}else if(Fe.length>0&&q){Ne&&D&&t.texStorage2D(3553,de,me,Fe[0].width,Fe[0].height);for(let $=0,Me=Fe.length;$<Me;$++)be=Fe[$],Ne?t.texSubImage2D(3553,$,0,0,ce,pe,be):t.texImage2D(3553,$,me,ce,pe,be);x.generateMipmaps=!1}else Ne?(D&&t.texStorage2D(3553,de,me,y.width,y.height),t.texSubImage2D(3553,0,0,0,ce,pe,y)):t.texImage2D(3553,0,me,ce,pe,y);C(x,q)&&F(B),ne.__currentVersion=ne.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function we(M,x,R){if(x.image.length!==6)return;const B=Pe(M,x),X=x.source;if(t.activeTexture(33984+R),t.bindTexture(34067,M.__webglTexture),X.version!==X.__currentVersion||B===!0){i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const ne=x.isCompressedTexture||x.image[0].isCompressedTexture,_e=x.image[0]&&x.image[0].isDataTexture,y=[];for(let $=0;$<6;$++)!ne&&!_e?y[$]=A(x.image[$],!1,!0,c):y[$]=_e?x.image[$].image:x.image[$],y[$]=ue(x,y[$]);const q=y[0],ce=w(q)||o,pe=s.convert(x.format,x.encoding),me=s.convert(x.type),be=v(x.internalFormat,pe,me,x.encoding),Fe=o&&x.isVideoTexture!==!0,Ne=X.__currentVersion===void 0||B===!0;let D=L(x,q,ce);Q(34067,x,ce);let de;if(ne){Fe&&Ne&&t.texStorage2D(34067,D,be,q.width,q.height);for(let $=0;$<6;$++){de=y[$].mipmaps;for(let Me=0;Me<de.length;Me++){const ve=de[Me];x.format!==tn?pe!==null?Fe?t.compressedTexSubImage2D(34069+$,Me,0,0,ve.width,ve.height,pe,ve.data):t.compressedTexImage2D(34069+$,Me,be,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(34069+$,Me,0,0,ve.width,ve.height,pe,me,ve.data):t.texImage2D(34069+$,Me,be,ve.width,ve.height,0,pe,me,ve.data)}}}else{de=x.mipmaps,Fe&&Ne&&(de.length>0&&D++,t.texStorage2D(34067,D,be,y[0].width,y[0].height));for(let $=0;$<6;$++)if(_e){Fe?t.texSubImage2D(34069+$,0,0,0,y[$].width,y[$].height,pe,me,y[$].data):t.texImage2D(34069+$,0,be,y[$].width,y[$].height,0,pe,me,y[$].data);for(let Me=0;Me<de.length;Me++){const ke=de[Me].image[$].image;Fe?t.texSubImage2D(34069+$,Me+1,0,0,ke.width,ke.height,pe,me,ke.data):t.texImage2D(34069+$,Me+1,be,ke.width,ke.height,0,pe,me,ke.data)}}else{Fe?t.texSubImage2D(34069+$,0,0,0,pe,me,y[$]):t.texImage2D(34069+$,0,be,pe,me,y[$]);for(let Me=0;Me<de.length;Me++){const ve=de[Me];Fe?t.texSubImage2D(34069+$,Me+1,0,0,pe,me,ve.image[$]):t.texImage2D(34069+$,Me+1,be,pe,me,ve.image[$])}}}C(x,ce)&&F(34067),X.__currentVersion=X.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function xe(M,x,R,B,X){const ne=s.convert(R.format,R.encoding),_e=s.convert(R.type),y=v(R.internalFormat,ne,_e,R.encoding);n.get(x).__hasExternalTextures||(X===32879||X===35866?t.texImage3D(X,0,y,x.width,x.height,x.depth,0,ne,_e,null):t.texImage2D(X,0,y,x.width,x.height,0,ne,_e,null)),t.bindFramebuffer(36160,M),re(x)?h.framebufferTexture2DMultisampleEXT(36160,B,X,n.get(R).__webglTexture,0,ie(x)):i.framebufferTexture2D(36160,B,X,n.get(R).__webglTexture,0),t.bindFramebuffer(36160,null)}function Be(M,x,R){if(i.bindRenderbuffer(36161,M),x.depthBuffer&&!x.stencilBuffer){let B=33189;if(R||re(x)){const X=x.depthTexture;X&&X.isDepthTexture&&(X.type===Zn?B=36012:X.type===$n&&(B=33190));const ne=ie(x);re(x)?h.renderbufferStorageMultisampleEXT(36161,ne,B,x.width,x.height):i.renderbufferStorageMultisample(36161,ne,B,x.width,x.height)}else i.renderbufferStorage(36161,B,x.width,x.height);i.framebufferRenderbuffer(36160,36096,36161,M)}else if(x.depthBuffer&&x.stencilBuffer){const B=ie(x);R&&re(x)===!1?i.renderbufferStorageMultisample(36161,B,35056,x.width,x.height):re(x)?h.renderbufferStorageMultisampleEXT(36161,B,35056,x.width,x.height):i.renderbufferStorage(36161,34041,x.width,x.height),i.framebufferRenderbuffer(36160,33306,36161,M)}else{const B=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let X=0;X<B.length;X++){const ne=B[X],_e=s.convert(ne.format,ne.encoding),y=s.convert(ne.type),q=v(ne.internalFormat,_e,y,ne.encoding),ce=ie(x);R&&re(x)===!1?i.renderbufferStorageMultisample(36161,ce,q,x.width,x.height):re(x)?h.renderbufferStorageMultisampleEXT(36161,ce,q,x.width,x.height):i.renderbufferStorage(36161,q,x.width,x.height)}}i.bindRenderbuffer(36161,null)}function Ae(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const B=n.get(x.depthTexture).__webglTexture,X=ie(x);if(x.depthTexture.format===ei)re(x)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,B,0,X):i.framebufferTexture2D(36160,36096,3553,B,0);else if(x.depthTexture.format===Vi)re(x)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,B,0,X):i.framebufferTexture2D(36160,33306,3553,B,0);else throw new Error("Unknown depthTexture format")}function E(M){const x=n.get(M),R=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");Ae(x.__webglFramebuffer,M)}else if(R){x.__webglDepthbuffer=[];for(let B=0;B<6;B++)t.bindFramebuffer(36160,x.__webglFramebuffer[B]),x.__webglDepthbuffer[B]=i.createRenderbuffer(),Be(x.__webglDepthbuffer[B],M,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Be(x.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function P(M,x,R){const B=n.get(M);x!==void 0&&xe(B.__webglFramebuffer,M,M.texture,36064,3553),R!==void 0&&E(M)}function k(M){const x=M.texture,R=n.get(M),B=n.get(x);M.addEventListener("dispose",he),M.isWebGLMultipleRenderTargets!==!0&&(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=x.version,a.memory.textures++);const X=M.isWebGLCubeRenderTarget===!0,ne=M.isWebGLMultipleRenderTargets===!0,_e=w(M)||o;if(X){R.__webglFramebuffer=[];for(let y=0;y<6;y++)R.__webglFramebuffer[y]=i.createFramebuffer()}else{if(R.__webglFramebuffer=i.createFramebuffer(),ne)if(r.drawBuffers){const y=M.texture;for(let q=0,ce=y.length;q<ce;q++){const pe=n.get(y[q]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&re(M)===!1){const y=ne?x:[x];R.__webglMultisampledFramebuffer=i.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,R.__webglMultisampledFramebuffer);for(let q=0;q<y.length;q++){const ce=y[q];R.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(36161,R.__webglColorRenderbuffer[q]);const pe=s.convert(ce.format,ce.encoding),me=s.convert(ce.type),be=v(ce.internalFormat,pe,me,ce.encoding),Fe=ie(M);i.renderbufferStorageMultisample(36161,Fe,be,M.width,M.height),i.framebufferRenderbuffer(36160,36064+q,36161,R.__webglColorRenderbuffer[q])}i.bindRenderbuffer(36161,null),M.depthBuffer&&(R.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(R.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}}if(X){t.bindTexture(34067,B.__webglTexture),Q(34067,x,_e);for(let y=0;y<6;y++)xe(R.__webglFramebuffer[y],M,x,36064,34069+y);C(x,_e)&&F(34067),t.unbindTexture()}else if(ne){const y=M.texture;for(let q=0,ce=y.length;q<ce;q++){const pe=y[q],me=n.get(pe);t.bindTexture(3553,me.__webglTexture),Q(3553,pe,_e),xe(R.__webglFramebuffer,M,pe,36064+q,3553),C(pe,_e)&&F(3553)}t.unbindTexture()}else{let y=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?y=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(y,B.__webglTexture),Q(y,x,_e),xe(R.__webglFramebuffer,M,x,36064,y),C(x,_e)&&F(y),t.unbindTexture()}M.depthBuffer&&E(M)}function Z(M){const x=w(M)||o,R=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let B=0,X=R.length;B<X;B++){const ne=R[B];if(C(ne,x)){const _e=M.isWebGLCubeRenderTarget?34067:3553,y=n.get(ne).__webglTexture;t.bindTexture(_e,y),F(_e),t.unbindTexture()}}}function J(M){if(o&&M.samples>0&&re(M)===!1){const x=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],R=M.width,B=M.height;let X=16384;const ne=[],_e=M.stencilBuffer?33306:36096,y=n.get(M),q=M.isWebGLMultipleRenderTargets===!0;if(q)for(let ce=0;ce<x.length;ce++)t.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ce,36161,null),t.bindFramebuffer(36160,y.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ce,3553,null,0);t.bindFramebuffer(36008,y.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,y.__webglFramebuffer);for(let ce=0;ce<x.length;ce++){ne.push(36064+ce),M.depthBuffer&&ne.push(_e);const pe=y.__ignoreDepthValues!==void 0?y.__ignoreDepthValues:!1;if(pe===!1&&(M.depthBuffer&&(X|=256),M.stencilBuffer&&(X|=1024)),q&&i.framebufferRenderbuffer(36008,36064,36161,y.__webglColorRenderbuffer[ce]),pe===!0&&(i.invalidateFramebuffer(36008,[_e]),i.invalidateFramebuffer(36009,[_e])),q){const me=n.get(x[ce]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,me,0)}i.blitFramebuffer(0,0,R,B,0,0,R,B,X,9728),m&&i.invalidateFramebuffer(36008,ne)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),q)for(let ce=0;ce<x.length;ce++){t.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ce,36161,y.__webglColorRenderbuffer[ce]);const pe=n.get(x[ce]).__webglTexture;t.bindFramebuffer(36160,y.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ce,3553,pe,0)}t.bindFramebuffer(36009,y.__webglMultisampledFramebuffer)}}function ie(M){return Math.min(f,M.samples)}function re(M){const x=n.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ae(M){const x=a.render.frame;g.get(M)!==x&&(g.set(M,x),M.update())}function ue(M,x){const R=M.encoding,B=M.format,X=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Vo||R!==ii&&(R===Ze?o===!1?e.has("EXT_sRGB")===!0&&B===tn?(M.format=Vo,M.minFilter=Rt,M.generateMipmaps=!1):x=Nu.sRGBToLinear(x):(B!==tn||X!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",R)),x}this.allocateTextureUnit=W,this.resetTextureUnits=Y,this.setTexture2D=K,this.setTexture2DArray=fe,this.setTexture3D=le,this.setTextureCube=se,this.rebindTextures=P,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=E,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=re}function wx(i,e,t){const n=t.isWebGL2;function r(s,a=null){let o;if(s===ni)return 5121;if(s===vp)return 32819;if(s===Mp)return 32820;if(s===gp)return 5120;if(s===_p)return 5122;if(s===Du)return 5123;if(s===xp)return 5124;if(s===$n)return 5125;if(s===Zn)return 5126;if(s===vr)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===yp)return 6406;if(s===tn)return 6408;if(s===Sp)return 6409;if(s===wp)return 6410;if(s===ei)return 6402;if(s===Vi)return 34041;if(s===Ep)return 6403;if(s===bp)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Vo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Tp)return 36244;if(s===Ap)return 33319;if(s===Cp)return 33320;if(s===Lp)return 36249;if(s===zs||s===Us||s===Bs||s===Gs)if(a===Ze)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===zs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Us)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===zs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Us)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===cl||s===ul||s===fl||s===hl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===cl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ul)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Pp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===dl||s===pl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===dl)return a===Ze?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===pl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ml||s===gl||s===_l||s===xl||s===vl||s===Ml||s===yl||s===bl||s===Sl||s===wl||s===El||s===Tl||s===Al||s===Cl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ml)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_l)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ml)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===yl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===bl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Sl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===wl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===El)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Tl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Al)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Cl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ll)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Ll)return a===Ze?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Oi?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Ex extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class sr extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tx={type:"move"};class go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const S=new sr;S.matrixAutoUpdate=!1,S.visible=!1,c.joints[p.jointName]=S,c.add(S)}const _=c.joints[p.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class Ax extends Ot{constructor(e,t,n,r,s,a,o,l,c,u){if(u=u!==void 0?u:ei,u!==ei&&u!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ei&&(n=$n),n===void 0&&u===Vi&&(n=Oi),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vt,this.minFilter=l!==void 0?l:vt,this.flipY=!1,this.generateMipmaps=!1}}class Cx extends ai{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,h=null,m=null;const g=t.getContextAttributes();let p=null,d=null;const _=[],S=[],A=new It;A.layers.enable(1),A.viewport=new nt;const w=new It;w.layers.enable(2),w.viewport=new nt;const b=[A,w],C=new Ex;C.layers.enable(1),C.layers.enable(2);let F=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=_[G];return K===void 0&&(K=new go,_[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=_[G];return K===void 0&&(K=new go,_[G]=K),K.getGripSpace()},this.getHand=function(G){let K=_[G];return K===void 0&&(K=new go,_[G]=K),K.getHandSpace()};function L(G){const K=S.indexOf(G.inputSource);if(K===-1)return;const fe=_[K];fe!==void 0&&fe.dispatchEvent({type:G.type,data:G.inputSource})}function O(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",z);for(let G=0;G<_.length;G++){const K=S[G];K!==null&&(S[G]=null,_[G].disconnect(K))}F=null,v=null,e.setRenderTarget(p),h=null,f=null,u=null,r=null,d=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",O),r.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:h}),d=new ri(h.framebufferWidth,h.framebufferHeight,{format:tn,type:ni,encoding:e.outputEncoding})}else{let K=null,fe=null,le=null;g.depth&&(le=g.stencil?35056:33190,K=g.stencil?Vi:ei,fe=g.stencil?Oi:$n);const se={colorFormat:32856,depthFormat:le,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(se),r.updateRenderState({layers:[f]}),d=new ri(f.textureWidth,f.textureHeight,{format:tn,type:ni,depthTexture:new Ax(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ye=e.properties.get(d);ye.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await r.requestReferenceSpace(o),W.setContext(r),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(G){for(let K=0;K<G.removed.length;K++){const fe=G.removed[K],le=S.indexOf(fe);le>=0&&(S[le]=null,_[le].dispatchEvent({type:"disconnected",data:fe}))}for(let K=0;K<G.added.length;K++){const fe=G.added[K];let le=S.indexOf(fe);if(le===-1){for(let ye=0;ye<_.length;ye++)if(ye>=S.length){S.push(fe),le=ye;break}else if(S[ye]===null){S[ye]=fe,le=ye;break}if(le===-1)break}const se=_[le];se&&se.dispatchEvent({type:"connected",data:fe})}}const he=new I,oe=new I;function N(G,K,fe){he.setFromMatrixPosition(K.matrixWorld),oe.setFromMatrixPosition(fe.matrixWorld);const le=he.distanceTo(oe),se=K.projectionMatrix.elements,ye=fe.projectionMatrix.elements,Ee=se[14]/(se[10]-1),Q=se[14]/(se[10]+1),Pe=(se[9]+1)/se[5],Se=(se[9]-1)/se[5],we=(se[8]-1)/se[0],xe=(ye[8]+1)/ye[0],Be=Ee*we,Ae=Ee*xe,E=le/(-we+xe),P=E*-we;K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(P),G.translateZ(E),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const k=Ee+E,Z=Q+E,J=Be-P,ie=Ae+(le-P),re=Pe*Q/Z*k,ae=Se*Q/Z*k;G.projectionMatrix.makePerspective(J,ie,re,ae,k,Z)}function te(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;C.near=w.near=A.near=G.near,C.far=w.far=A.far=G.far,(F!==C.near||v!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,v=C.far);const K=G.parent,fe=C.cameras;te(C,K);for(let se=0;se<fe.length;se++)te(fe[se],K);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),G.position.copy(C.position),G.quaternion.copy(C.quaternion),G.scale.copy(C.scale),G.matrix.copy(C.matrix),G.matrixWorld.copy(C.matrixWorld);const le=G.children;for(let se=0,ye=le.length;se<ye;se++)le[se].updateMatrixWorld(!0);fe.length===2?N(C,A,w):C.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(G){f!==null&&(f.fixedFoveation=G),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=G)};let H=null;function Y(G,K){if(c=K.getViewerPose(l||a),m=K,c!==null){const fe=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let le=!1;fe.length!==C.cameras.length&&(C.cameras.length=0,le=!0);for(let se=0;se<fe.length;se++){const ye=fe[se];let Ee=null;if(h!==null)Ee=h.getViewport(ye);else{const Pe=u.getViewSubImage(f,ye);Ee=Pe.viewport,se===0&&(e.setRenderTargetTextures(d,Pe.colorTexture,f.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(d))}let Q=b[se];Q===void 0&&(Q=new It,Q.layers.enable(se),Q.viewport=new nt,b[se]=Q),Q.matrix.fromArray(ye.transform.matrix),Q.projectionMatrix.fromArray(ye.projectionMatrix),Q.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),se===0&&C.matrix.copy(Q.matrix),le===!0&&C.cameras.push(Q)}}for(let fe=0;fe<_.length;fe++){const le=S[fe],se=_[fe];le!==null&&se!==void 0&&se.update(le,K,l||a)}H&&H(G,K),m=null}const W=new Wu;W.setAnimationLoop(Y),this.setAnimationLoop=function(G){H=G},this.dispose=function(){}}}function Lx(i,e){function t(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,_,S,A){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),c(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,A)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),g(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,_,S):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Xt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Xt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const w=i.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*w}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let S;d.map?S=d.map:d.specularMap?S=d.specularMap:d.displacementMap?S=d.displacementMap:d.normalMap?S=d.normalMap:d.bumpMap?S=d.bumpMap:d.roughnessMap?S=d.roughnessMap:d.metalnessMap?S=d.metalnessMap:d.alphaMap?S=d.alphaMap:d.emissiveMap?S=d.emissiveMap:d.clearcoatMap?S=d.clearcoatMap:d.clearcoatNormalMap?S=d.clearcoatNormalMap:d.clearcoatRoughnessMap?S=d.clearcoatRoughnessMap:d.iridescenceMap?S=d.iridescenceMap:d.iridescenceThicknessMap?S=d.iridescenceThicknessMap:d.specularIntensityMap?S=d.specularIntensityMap:d.specularColorMap?S=d.specularColorMap:d.transmissionMap?S=d.transmissionMap:d.thicknessMap?S=d.thicknessMap:d.sheenColorMap?S=d.sheenColorMap:d.sheenRoughnessMap&&(S=d.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let A;d.aoMap?A=d.aoMap:d.lightMap&&(A=d.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uv2Transform.value.copy(A.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,_,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=S*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let A;d.map?A=d.map:d.alphaMap&&(A=d.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uvTransform.value.copy(A.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Xt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Px(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(35375):0;function l(S,A){const w=A.program;n.uniformBlockBinding(S,w)}function c(S,A){let w=r[S.id];w===void 0&&(g(S),w=u(S),r[S.id]=w,S.addEventListener("dispose",d));const b=A.program;n.updateUBOMapping(S,b);const C=e.render.frame;s[S.id]!==C&&(h(S),s[S.id]=C)}function u(S){const A=f();S.__bindingPointIndex=A;const w=i.createBuffer(),b=S.__size,C=S.usage;return i.bindBuffer(35345,w),i.bufferData(35345,b,C),i.bindBuffer(35345,null),i.bindBufferBase(35345,A,w),w}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const A=r[S.id],w=S.uniforms,b=S.__cache;i.bindBuffer(35345,A);for(let C=0,F=w.length;C<F;C++){const v=w[C];if(m(v,C,b)===!0){const L=v.value,O=v.__offset;typeof L=="number"?(v.__data[0]=L,i.bufferSubData(35345,O,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):L.toArray(v.__data),i.bufferSubData(35345,O,v.__data))}}i.bindBuffer(35345,null)}function m(S,A,w){const b=S.value;if(w[A]===void 0)return typeof b=="number"?w[A]=b:w[A]=b.clone(),!0;if(typeof b=="number"){if(w[A]!==b)return w[A]=b,!0}else{const C=w[A];if(C.equals(b)===!1)return C.copy(b),!0}return!1}function g(S){const A=S.uniforms;let w=0;const b=16;let C=0;for(let F=0,v=A.length;F<v;F++){const L=A[F],O=p(L);if(L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,F>0){C=w%b;const z=b-C;C!==0&&z-O.boundary<0&&(w+=b-C,L.__offset=w)}w+=O.storage}return C=w%b,C>0&&(w+=b-C),S.__size=w,S.__cache={},this}function p(S){const A=S.value,w={boundary:0,storage:0};return typeof A=="number"?(w.boundary=4,w.storage=4):A.isVector2?(w.boundary=8,w.storage=8):A.isVector3||A.isColor?(w.boundary=16,w.storage=12):A.isVector4?(w.boundary=16,w.storage=16):A.isMatrix3?(w.boundary=48,w.storage=48):A.isMatrix4?(w.boundary=64,w.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),w}function d(S){const A=S.target;A.removeEventListener("dispose",d);const w=a.indexOf(A.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function _(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:_}}function Dx(){const i=Mr("canvas");return i.style.display="block",i}function Ku(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:Dx(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,o=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let f=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ii,this.physicallyCorrectLights=!1,this.toneMapping=gn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,_=0,S=0,A=null,w=-1,b=null;const C=new nt,F=new nt;let v=null,L=e.width,O=e.height,z=1,he=null,oe=null;const N=new nt(0,0,L,O),te=new nt(0,0,L,O);let H=!1;const Y=new ya;let W=!1,G=!1,K=null;const fe=new Je,le=new De,se=new I,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return A===null?z:1}let Q=t;function Pe(T,U){for(let j=0;j<T.length;j++){const V=T[j],ee=e.getContext(V,U);if(ee!==null)return ee}return null}try{const T={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xa}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",Fe,!1),e.addEventListener("webglcontextcreationerror",Ne,!1),Q===null){const U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),Q=Pe(U,T),Q===null)throw Pe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Q.getShaderPrecisionFormat===void 0&&(Q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Se,we,xe,Be,Ae,E,P,k,Z,J,ie,re,ae,ue,M,x,R,B,X,ne,_e,y,q,ce;function pe(){Se=new k_(Q),we=new N_(Q,Se,i),Se.init(we),y=new wx(Q,Se,we),xe=new bx(Q,Se,we),Be=new W_,Ae=new lx,E=new Sx(Q,Se,xe,Ae,we,y,Be),P=new z_(p),k=new G_(p),Z=new nm(Q,we),q=new I_(Q,Se,Z,we),J=new V_(Q,Z,Be,q),ie=new Y_(Q,J,Z,Be),X=new X_(Q,we,E),x=new O_(Ae),re=new ax(p,P,k,Se,we,q,x),ae=new Lx(p,Ae),ue=new ux,M=new gx(Se,we),B=new R_(p,P,xe,ie,u,a),R=new yx(p,ie,we),ce=new Px(Q,Be,we,xe),ne=new F_(Q,Se,Be,we),_e=new H_(Q,Se,Be,we),Be.programs=re.programs,p.capabilities=we,p.extensions=Se,p.properties=Ae,p.renderLists=ue,p.shadowMap=R,p.state=xe,p.info=Be}pe();const me=new Cx(p,Q);this.xr=me,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const T=Se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(L,O,!1))},this.getSize=function(T){return T.set(L,O)},this.setSize=function(T,U,j){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=T,O=U,e.width=Math.floor(T*z),e.height=Math.floor(U*z),j!==!1&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(L*z,O*z).floor()},this.setDrawingBufferSize=function(T,U,j){L=T,O=U,z=j,e.width=Math.floor(T*j),e.height=Math.floor(U*j),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(N)},this.setViewport=function(T,U,j,V){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,U,j,V),xe.viewport(C.copy(N).multiplyScalar(z).floor())},this.getScissor=function(T){return T.copy(te)},this.setScissor=function(T,U,j,V){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,U,j,V),xe.scissor(F.copy(te).multiplyScalar(z).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(T){xe.setScissorTest(H=T)},this.setOpaqueSort=function(T){he=T},this.setTransparentSort=function(T){oe=T},this.getClearColor=function(T){return T.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor.apply(B,arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha.apply(B,arguments)},this.clear=function(T=!0,U=!0,j=!0){let V=0;T&&(V|=16384),U&&(V|=256),j&&(V|=1024),Q.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",Fe,!1),e.removeEventListener("webglcontextcreationerror",Ne,!1),ue.dispose(),M.dispose(),Ae.dispose(),P.dispose(),k.dispose(),ie.dispose(),q.dispose(),ce.dispose(),re.dispose(),me.dispose(),me.removeEventListener("sessionstart",ke),me.removeEventListener("sessionend",it),K&&(K.dispose(),K=null),Ke.stop()};function be(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const T=Be.autoReset,U=R.enabled,j=R.autoUpdate,V=R.needsUpdate,ee=R.type;pe(),Be.autoReset=T,R.enabled=U,R.autoUpdate=j,R.needsUpdate=V,R.type=ee}function Ne(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function D(T){const U=T.target;U.removeEventListener("dispose",D),de(U)}function de(T){$(T),Ae.remove(T)}function $(T){const U=Ae.get(T).programs;U!==void 0&&(U.forEach(function(j){re.releaseProgram(j)}),T.isShaderMaterial&&re.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,j,V,ee,Te){U===null&&(U=ye);const Ce=ee.isMesh&&ee.matrixWorld.determinant()<0,Oe=ef(T,U,j,V,ee);xe.setMaterial(V,Ce);let Re=j.index;const je=j.attributes.position;if(Re===null){if(je===void 0||je.count===0)return}else if(Re.count===0)return;let Ge=1;V.wireframe===!0&&(Re=J.getWireframeAttribute(j),Ge=2),q.setup(ee,V,Oe,j,Re);let Ve,$e=ne;Re!==null&&(Ve=Z.get(Re),$e=_e,$e.setIndex(Ve));const zn=Re!==null?Re.count:je.count,li=j.drawRange.start*Ge,ci=j.drawRange.count*Ge,Yt=Te!==null?Te.start*Ge:0,qe=Te!==null?Te.count*Ge:1/0,ui=Math.max(li,Yt),Qe=Math.min(zn,li+ci,Yt+qe)-1,Ct=Math.max(0,Qe-ui+1);if(Ct!==0){if(ee.isMesh)V.wireframe===!0?(xe.setLineWidth(V.wireframeLinewidth*Ee()),$e.setMode(1)):$e.setMode(4);else if(ee.isLine){let yn=V.linewidth;yn===void 0&&(yn=1),xe.setLineWidth(yn*Ee()),ee.isLineSegments?$e.setMode(1):ee.isLineLoop?$e.setMode(2):$e.setMode(3)}else ee.isPoints?$e.setMode(0):ee.isSprite&&$e.setMode(4);if(ee.isInstancedMesh)$e.renderInstances(ui,Ct,ee.count);else if(j.isInstancedBufferGeometry){const yn=Math.min(j.instanceCount,j._maxInstanceCount);$e.renderInstances(ui,Ct,yn)}else $e.render(ui,Ct)}},this.compile=function(T,U){h=M.get(T),h.init(),g.push(h),T.traverseVisible(function(j){j.isLight&&j.layers.test(U.layers)&&(h.pushLight(j),j.castShadow&&h.pushShadow(j))}),h.setupLights(p.physicallyCorrectLights),T.traverse(function(j){const V=j.material;if(V)if(Array.isArray(V))for(let ee=0;ee<V.length;ee++){const Te=V[ee];Es(Te,T,j)}else Es(V,T,j)}),g.pop(),h=null};let Me=null;function ve(T){Me&&Me(T)}function ke(){Ke.stop()}function it(){Ke.start()}const Ke=new Wu;Ke.setAnimationLoop(ve),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(T){Me=T,me.setAnimationLoop(T),T===null?Ke.stop():Ke.start()},me.addEventListener("sessionstart",ke),me.addEventListener("sessionend",it),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(U),U=me.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,U,A),h=M.get(T,g.length),h.init(),g.push(h),fe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(fe),G=this.localClippingEnabled,W=x.init(this.clippingPlanes,G,U),f=ue.get(T,m.length),f.init(),m.push(f),Mn(T,U,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(he,oe),W===!0&&x.beginShadows();const j=h.state.shadowsArray;if(R.render(j,T,U),W===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),B.render(f,T),h.setupLights(p.physicallyCorrectLights),U.isArrayCamera){const V=U.cameras;for(let ee=0,Te=V.length;ee<Te;ee++){const Ce=V[ee];Ye(f,T,Ce,Ce.viewport)}}else Ye(f,T,U);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(p,T,U),q.resetDefaultState(),w=-1,b=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Mn(T,U,j,V){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){V&&se.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);const Ce=ie.update(T),Oe=T.material;Oe.visible&&f.push(T,Ce,Oe,j,se.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Be.render.frame&&(T.skeleton.update(),T.skeleton.frame=Be.render.frame),!T.frustumCulled||Y.intersectsObject(T))){V&&se.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);const Ce=ie.update(T),Oe=T.material;if(Array.isArray(Oe)){const Re=Ce.groups;for(let je=0,Ge=Re.length;je<Ge;je++){const Ve=Re[je],$e=Oe[Ve.materialIndex];$e&&$e.visible&&f.push(T,Ce,$e,j,se.z,Ve)}}else Oe.visible&&f.push(T,Ce,Oe,j,se.z,null)}}const Te=T.children;for(let Ce=0,Oe=Te.length;Ce<Oe;Ce++)Mn(Te[Ce],U,j,V)}function Ye(T,U,j,V){const ee=T.opaque,Te=T.transmissive,Ce=T.transparent;h.setupLightsView(j),Te.length>0&&rn(ee,U,j),V&&xe.viewport(C.copy(V)),ee.length>0&&At(ee,U,j),Te.length>0&&At(Te,U,j),Ce.length>0&&At(Ce,U,j),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function rn(T,U,j){const V=we.isWebGL2;K===null&&(K=new ri(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?vr:ni,minFilter:bs,samples:V&&s===!0?4:0})),p.getDrawingBufferSize(le),V?K.setSize(le.x,le.y):K.setSize(Ho(le.x),Ho(le.y));const ee=p.getRenderTarget();p.setRenderTarget(K),p.clear();const Te=p.toneMapping;p.toneMapping=gn,At(T,U,j),p.toneMapping=Te,E.updateMultisampleRenderTarget(K),E.updateRenderTargetMipmap(K),p.setRenderTarget(ee)}function At(T,U,j){const V=U.isScene===!0?U.overrideMaterial:null;for(let ee=0,Te=T.length;ee<Te;ee++){const Ce=T[ee],Oe=Ce.object,Re=Ce.geometry,je=V===null?Ce.material:V,Ge=Ce.group;Oe.layers.test(j.layers)&&Qu(Oe,U,j,Re,je,Ge)}}function Qu(T,U,j,V,ee,Te){T.onBeforeRender(p,U,j,V,ee,Te),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ee.onBeforeRender(p,U,j,V,T,Te),ee.transparent===!0&&ee.side===Bi?(ee.side=Xt,ee.needsUpdate=!0,p.renderBufferDirect(j,U,V,ee,T,Te),ee.side=xr,ee.needsUpdate=!0,p.renderBufferDirect(j,U,V,ee,T,Te),ee.side=Bi):p.renderBufferDirect(j,U,V,ee,T,Te),T.onAfterRender(p,U,j,V,ee,Te)}function Es(T,U,j){U.isScene!==!0&&(U=ye);const V=Ae.get(T),ee=h.state.lights,Te=h.state.shadowsArray,Ce=ee.state.version,Oe=re.getParameters(T,ee.state,Te,U,j),Re=re.getProgramCacheKey(Oe);let je=V.programs;V.environment=T.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(T.isMeshStandardMaterial?k:P).get(T.envMap||V.environment),je===void 0&&(T.addEventListener("dispose",D),je=new Map,V.programs=je);let Ge=je.get(Re);if(Ge!==void 0){if(V.currentProgram===Ge&&V.lightsStateVersion===Ce)return wa(T,Oe),Ge}else Oe.uniforms=re.getUniforms(T),T.onBuild(j,Oe,p),T.onBeforeCompile(Oe,p),Ge=re.acquireProgram(Oe,Re),je.set(Re,Ge),V.uniforms=Oe.uniforms;const Ve=V.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ve.clippingPlanes=x.uniform),wa(T,Oe),V.needsLights=nf(T),V.lightsStateVersion=Ce,V.needsLights&&(Ve.ambientLightColor.value=ee.state.ambient,Ve.lightProbe.value=ee.state.probe,Ve.directionalLights.value=ee.state.directional,Ve.directionalLightShadows.value=ee.state.directionalShadow,Ve.spotLights.value=ee.state.spot,Ve.spotLightShadows.value=ee.state.spotShadow,Ve.rectAreaLights.value=ee.state.rectArea,Ve.ltc_1.value=ee.state.rectAreaLTC1,Ve.ltc_2.value=ee.state.rectAreaLTC2,Ve.pointLights.value=ee.state.point,Ve.pointLightShadows.value=ee.state.pointShadow,Ve.hemisphereLights.value=ee.state.hemi,Ve.directionalShadowMap.value=ee.state.directionalShadowMap,Ve.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ve.spotShadowMap.value=ee.state.spotShadowMap,Ve.spotShadowMatrix.value=ee.state.spotShadowMatrix,Ve.pointShadowMap.value=ee.state.pointShadowMap,Ve.pointShadowMatrix.value=ee.state.pointShadowMatrix);const $e=Ge.getUniforms(),zn=rs.seqWithValue($e.seq,Ve);return V.currentProgram=Ge,V.uniformsList=zn,Ge}function wa(T,U){const j=Ae.get(T);j.outputEncoding=U.outputEncoding,j.instancing=U.instancing,j.skinning=U.skinning,j.morphTargets=U.morphTargets,j.morphNormals=U.morphNormals,j.morphColors=U.morphColors,j.morphTargetsCount=U.morphTargetsCount,j.numClippingPlanes=U.numClippingPlanes,j.numIntersection=U.numClipIntersection,j.vertexAlphas=U.vertexAlphas,j.vertexTangents=U.vertexTangents,j.toneMapping=U.toneMapping}function ef(T,U,j,V,ee){U.isScene!==!0&&(U=ye),E.resetTextureUnits();const Te=U.fog,Ce=V.isMeshStandardMaterial?U.environment:null,Oe=A===null?p.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:ii,Re=(V.isMeshStandardMaterial?k:P).get(V.envMap||Ce),je=V.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ge=!!V.normalMap&&!!j.attributes.tangent,Ve=!!j.morphAttributes.position,$e=!!j.morphAttributes.normal,zn=!!j.morphAttributes.color,li=V.toneMapped?p.toneMapping:gn,ci=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Yt=ci!==void 0?ci.length:0,qe=Ae.get(V),ui=h.state.lights;if(W===!0&&(G===!0||T!==b)){const bt=T===b&&V.id===w;x.setState(V,T,bt)}let Qe=!1;V.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==ui.state.version||qe.outputEncoding!==Oe||ee.isInstancedMesh&&qe.instancing===!1||!ee.isInstancedMesh&&qe.instancing===!0||ee.isSkinnedMesh&&qe.skinning===!1||!ee.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==Re||V.fog===!0&&qe.fog!==Te||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==x.numPlanes||qe.numIntersection!==x.numIntersection)||qe.vertexAlphas!==je||qe.vertexTangents!==Ge||qe.morphTargets!==Ve||qe.morphNormals!==$e||qe.morphColors!==zn||qe.toneMapping!==li||we.isWebGL2===!0&&qe.morphTargetsCount!==Yt)&&(Qe=!0):(Qe=!0,qe.__version=V.version);let Ct=qe.currentProgram;Qe===!0&&(Ct=Es(V,U,ee));let yn=!1,Zi=!1,Ts=!1;const pt=Ct.getUniforms(),Ki=qe.uniforms;if(xe.useProgram(Ct.program)&&(yn=!0,Zi=!0,Ts=!0),V.id!==w&&(w=V.id,Zi=!0),yn||b!==T){if(pt.setValue(Q,"projectionMatrix",T.projectionMatrix),we.logarithmicDepthBuffer&&pt.setValue(Q,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),b!==T&&(b=T,Zi=!0,Ts=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const bt=pt.map.cameraPosition;bt!==void 0&&bt.setValue(Q,se.setFromMatrixPosition(T.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pt.setValue(Q,"isOrthographic",T.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||ee.isSkinnedMesh)&&pt.setValue(Q,"viewMatrix",T.matrixWorldInverse)}if(ee.isSkinnedMesh){pt.setOptional(Q,ee,"bindMatrix"),pt.setOptional(Q,ee,"bindMatrixInverse");const bt=ee.skeleton;bt&&(we.floatVertexTextures?(bt.boneTexture===null&&bt.computeBoneTexture(),pt.setValue(Q,"boneTexture",bt.boneTexture,E),pt.setValue(Q,"boneTextureSize",bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const As=j.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0&&we.isWebGL2===!0)&&X.update(ee,j,V,Ct),(Zi||qe.receiveShadow!==ee.receiveShadow)&&(qe.receiveShadow=ee.receiveShadow,pt.setValue(Q,"receiveShadow",ee.receiveShadow)),Zi&&(pt.setValue(Q,"toneMappingExposure",p.toneMappingExposure),qe.needsLights&&tf(Ki,Ts),Te&&V.fog===!0&&ae.refreshFogUniforms(Ki,Te),ae.refreshMaterialUniforms(Ki,V,z,O,K),rs.upload(Q,qe.uniformsList,Ki,E)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(rs.upload(Q,qe.uniformsList,Ki,E),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pt.setValue(Q,"center",ee.center),pt.setValue(Q,"modelViewMatrix",ee.modelViewMatrix),pt.setValue(Q,"normalMatrix",ee.normalMatrix),pt.setValue(Q,"modelMatrix",ee.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const bt=V.uniformsGroups;for(let Cs=0,rf=bt.length;Cs<rf;Cs++)if(we.isWebGL2){const Ea=bt[Cs];ce.update(Ea,Ct),ce.bind(Ea,Ct)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ct}function tf(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function nf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,U,j){Ae.get(T.texture).__webglTexture=U,Ae.get(T.depthTexture).__webglTexture=j;const V=Ae.get(T);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=j===void 0,V.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const j=Ae.get(T);j.__webglFramebuffer=U,j.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,j=0){A=T,_=U,S=j;let V=!0;if(T){const Re=Ae.get(T);Re.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(36160,null),V=!1):Re.__webglFramebuffer===void 0?E.setupRenderTarget(T):Re.__hasExternalTextures&&E.rebindTextures(T,Ae.get(T.texture).__webglTexture,Ae.get(T.depthTexture).__webglTexture)}let ee=null,Te=!1,Ce=!1;if(T){const Re=T.texture;(Re.isData3DTexture||Re.isDataArrayTexture)&&(Ce=!0);const je=Ae.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(ee=je[U],Te=!0):we.isWebGL2&&T.samples>0&&E.useMultisampledRTT(T)===!1?ee=Ae.get(T).__webglMultisampledFramebuffer:ee=je,C.copy(T.viewport),F.copy(T.scissor),v=T.scissorTest}else C.copy(N).multiplyScalar(z).floor(),F.copy(te).multiplyScalar(z).floor(),v=H;if(xe.bindFramebuffer(36160,ee)&&we.drawBuffers&&V&&xe.drawBuffers(T,ee),xe.viewport(C),xe.scissor(F),xe.setScissorTest(v),Te){const Re=Ae.get(T.texture);Q.framebufferTexture2D(36160,36064,34069+U,Re.__webglTexture,j)}else if(Ce){const Re=Ae.get(T.texture),je=U||0;Q.framebufferTextureLayer(36160,36064,Re.__webglTexture,j||0,je)}w=-1},this.readRenderTargetPixels=function(T,U,j,V,ee,Te,Ce){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Oe=Oe[Ce]),Oe){xe.bindFramebuffer(36160,Oe);try{const Re=T.texture,je=Re.format,Ge=Re.type;if(je!==tn&&y.convert(je)!==Q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Ge===vr&&(Se.has("EXT_color_buffer_half_float")||we.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Ge!==ni&&y.convert(Ge)!==Q.getParameter(35738)&&!(Ge===Zn&&(we.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-V&&j>=0&&j<=T.height-ee&&Q.readPixels(U,j,V,ee,y.convert(je),y.convert(Ge),Te)}finally{const Re=A!==null?Ae.get(A).__webglFramebuffer:null;xe.bindFramebuffer(36160,Re)}}},this.copyFramebufferToTexture=function(T,U,j=0){const V=Math.pow(2,-j),ee=Math.floor(U.image.width*V),Te=Math.floor(U.image.height*V);E.setTexture2D(U,0),Q.copyTexSubImage2D(3553,j,0,0,T.x,T.y,ee,Te),xe.unbindTexture()},this.copyTextureToTexture=function(T,U,j,V=0){const ee=U.image.width,Te=U.image.height,Ce=y.convert(j.format),Oe=y.convert(j.type);E.setTexture2D(j,0),Q.pixelStorei(37440,j.flipY),Q.pixelStorei(37441,j.premultiplyAlpha),Q.pixelStorei(3317,j.unpackAlignment),U.isDataTexture?Q.texSubImage2D(3553,V,T.x,T.y,ee,Te,Ce,Oe,U.image.data):U.isCompressedTexture?Q.compressedTexSubImage2D(3553,V,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,Ce,U.mipmaps[0].data):Q.texSubImage2D(3553,V,T.x,T.y,Ce,Oe,U.image),V===0&&j.generateMipmaps&&Q.generateMipmap(3553),xe.unbindTexture()},this.copyTextureToTexture3D=function(T,U,j,V,ee=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=T.max.x-T.min.x+1,Ce=T.max.y-T.min.y+1,Oe=T.max.z-T.min.z+1,Re=y.convert(V.format),je=y.convert(V.type);let Ge;if(V.isData3DTexture)E.setTexture3D(V,0),Ge=32879;else if(V.isDataArrayTexture)E.setTexture2DArray(V,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Q.pixelStorei(37440,V.flipY),Q.pixelStorei(37441,V.premultiplyAlpha),Q.pixelStorei(3317,V.unpackAlignment);const Ve=Q.getParameter(3314),$e=Q.getParameter(32878),zn=Q.getParameter(3316),li=Q.getParameter(3315),ci=Q.getParameter(32877),Yt=j.isCompressedTexture?j.mipmaps[0]:j.image;Q.pixelStorei(3314,Yt.width),Q.pixelStorei(32878,Yt.height),Q.pixelStorei(3316,T.min.x),Q.pixelStorei(3315,T.min.y),Q.pixelStorei(32877,T.min.z),j.isDataTexture||j.isData3DTexture?Q.texSubImage3D(Ge,ee,U.x,U.y,U.z,Te,Ce,Oe,Re,je,Yt.data):j.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Q.compressedTexSubImage3D(Ge,ee,U.x,U.y,U.z,Te,Ce,Oe,Re,Yt.data)):Q.texSubImage3D(Ge,ee,U.x,U.y,U.z,Te,Ce,Oe,Re,je,Yt),Q.pixelStorei(3314,Ve),Q.pixelStorei(32878,$e),Q.pixelStorei(3316,zn),Q.pixelStorei(3315,li),Q.pixelStorei(32877,ci),ee===0&&V.generateMipmaps&&Q.generateMipmap(Ge),xe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?E.setTextureCube(T,0):T.isData3DTexture?E.setTexture3D(T,0):T.isDataArrayTexture?E.setTexture2DArray(T,0):E.setTexture2D(T,0),xe.unbindTexture()},this.resetState=function(){_=0,S=0,A=null,xe.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Rx extends Ku{}Rx.prototype.isWebGL1Renderer=!0;class Ix extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class ur extends xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const dc=new I,pc=new I,mc=new Je,_o=new Ma,$r=new br;class Fx extends dt{constructor(e=new zt,t=new ur){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)dc.fromBufferAttribute(t,r-1),pc.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=dc.distanceTo(pc);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(r),$r.radius+=s,e.ray.intersectsSphere($r)===!1)return;mc.copy(r).invert(),_o.copy(e.ray).applyMatrix4(mc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,u=new I,f=new I,h=new I,m=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const _=Math.max(0,a.start),S=Math.min(g.count,a.start+a.count);for(let A=_,w=S-1;A<w;A+=m){const b=g.getX(A),C=g.getX(A+1);if(c.fromBufferAttribute(d,b),u.fromBufferAttribute(d,C),_o.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(h);v<e.near||v>e.far||t.push({distance:v,point:f.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),S=Math.min(d.count,a.start+a.count);for(let A=_,w=S-1;A<w;A+=m){if(c.fromBufferAttribute(d,A),u.fromBufferAttribute(d,A+1),_o.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(h);C<e.near||C>e.far||t.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const gc=new I,_c=new I;class qo extends Fx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)gc.fromBufferAttribute(t,r),_c.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+gc.distanceTo(_c);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class or extends xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xc=new Je,jo=new Ma,Zr=new br,Kr=new I;class xo extends dt{constructor(e=new zt,t=new or){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),Zr.radius+=s,e.ray.intersectsSphere(Zr)===!1)return;xc.copy(r).invert(),jo.copy(e.ray).applyMatrix4(xc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=h,p=m;g<p;g++){const d=c.getX(g);Kr.fromBufferAttribute(f,d),vc(Kr,d,l,r,e,t,this)}}else{const h=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=h,p=m;g<p;g++)Kr.fromBufferAttribute(f,g),vc(Kr,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function vc(i,e,t,n,r,s,a){const o=jo.distanceSqToPoint(i);if(o<t){const l=new I;jo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Nx extends xn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new He(16777215),this.specular=new He(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ru,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const us={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ox{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const zx=new Ox;class ws{constructor(e){this.manager=e!==void 0?e:zx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const un={};class Ux extends Error{constructor(e,t){super(e),this.response=t}}class Bx extends ws{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=us.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(un[e]!==void 0){un[e].push({onLoad:t,onProgress:n,onError:r});return}un[e]=[],un[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=un[e],f=c.body.getReader(),h=c.headers.get("Content-Length"),m=h?parseInt(h):0,g=m!==0;let p=0;const d=new ReadableStream({start(_){S();function S(){f.read().then(({done:A,value:w})=>{if(A)_.close();else{p+=w.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let C=0,F=u.length;C<F;C++){const v=u[C];v.onProgress&&v.onProgress(b)}_.enqueue(w),S()}})}}});return new Response(d)}else throw new Ux(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(h);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{us.add(e,c);const u=un[e];delete un[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=un[e];if(u===void 0)throw this.manager.itemError(e),c;delete un[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Gx extends ws{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=us.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Mr("img");function l(){u(),us.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class kx extends ws{constructor(e){super(e)}load(e,t,n,r){const s=new Ot,a=new Gx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Ju extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Mc=new Je,yc=new I,bc=new I;class Vx{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ya,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yc.setFromMatrixPosition(e.matrixWorld),t.position.copy(yc),bc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bc),t.updateMatrixWorld(),Mc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hx extends Vx{constructor(){super(new qu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wx extends Ju{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DefaultUp),this.updateMatrix(),this.target=new dt,this.shadow=new Hx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qx extends Ju{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jx extends qo{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new zt;r.setAttribute("position",new st(t,3)),r.setAttribute("color",new st(n,3));const s=new ur({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new He,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xa);const wc={type:"change"},vo={type:"start"},Ec={type:"end"};class Xx extends ai{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fi.ROTATE,MIDDLE:fi.DOLLY,RIGHT:fi.PAN},this.touches={ONE:hi.ROTATE,TWO:hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",ue),this._domElementKeyEvents=y},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(wc),n.update(),s=r.NONE},this.update=function(){const y=new I,q=new si().setFromUnitVectors(e.up,new I(0,1,0)),ce=q.clone().invert(),pe=new I,me=new si,be=2*Math.PI;return function(){const Ne=n.object.position;y.copy(Ne).sub(n.target),y.applyQuaternion(q),o.setFromVector3(y),n.autoRotate&&s===r.NONE&&L(F()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let D=n.minAzimuthAngle,de=n.maxAzimuthAngle;return isFinite(D)&&isFinite(de)&&(D<-Math.PI?D+=be:D>Math.PI&&(D-=be),de<-Math.PI?de+=be:de>Math.PI&&(de-=be),D<=de?o.theta=Math.max(D,Math.min(de,o.theta)):o.theta=o.theta>(D+de)/2?Math.max(D,o.theta):Math.min(de,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),y.setFromSpherical(o),y.applyQuaternion(ce),Ne.copy(n.target).add(y),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||pe.distanceToSquared(n.object.position)>a||8*(1-me.dot(n.object.quaternion))>a?(n.dispatchEvent(wc),pe.copy(n.object.position),me.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",R),n.domElement.removeEventListener("pointerdown",P),n.domElement.removeEventListener("pointercancel",J),n.domElement.removeEventListener("wheel",ae),n.domElement.removeEventListener("pointermove",k),n.domElement.removeEventListener("pointerup",Z),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ue)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Sc,l=new Sc;let c=1;const u=new I;let f=!1;const h=new De,m=new De,g=new De,p=new De,d=new De,_=new De,S=new De,A=new De,w=new De,b=[],C={};function F(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function L(y){l.theta-=y}function O(y){l.phi-=y}const z=function(){const y=new I;return function(ce,pe){y.setFromMatrixColumn(pe,0),y.multiplyScalar(-ce),u.add(y)}}(),he=function(){const y=new I;return function(ce,pe){n.screenSpacePanning===!0?y.setFromMatrixColumn(pe,1):(y.setFromMatrixColumn(pe,0),y.crossVectors(n.object.up,y)),y.multiplyScalar(ce),u.add(y)}}(),oe=function(){const y=new I;return function(ce,pe){const me=n.domElement;if(n.object.isPerspectiveCamera){const be=n.object.position;y.copy(be).sub(n.target);let Fe=y.length();Fe*=Math.tan(n.object.fov/2*Math.PI/180),z(2*ce*Fe/me.clientHeight,n.object.matrix),he(2*pe*Fe/me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(ce*(n.object.right-n.object.left)/n.object.zoom/me.clientWidth,n.object.matrix),he(pe*(n.object.top-n.object.bottom)/n.object.zoom/me.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function N(y){n.object.isPerspectiveCamera?c/=y:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*y)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function te(y){n.object.isPerspectiveCamera?c*=y:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/y)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(y){h.set(y.clientX,y.clientY)}function Y(y){S.set(y.clientX,y.clientY)}function W(y){p.set(y.clientX,y.clientY)}function G(y){m.set(y.clientX,y.clientY),g.subVectors(m,h).multiplyScalar(n.rotateSpeed);const q=n.domElement;L(2*Math.PI*g.x/q.clientHeight),O(2*Math.PI*g.y/q.clientHeight),h.copy(m),n.update()}function K(y){A.set(y.clientX,y.clientY),w.subVectors(A,S),w.y>0?N(v()):w.y<0&&te(v()),S.copy(A),n.update()}function fe(y){d.set(y.clientX,y.clientY),_.subVectors(d,p).multiplyScalar(n.panSpeed),oe(_.x,_.y),p.copy(d),n.update()}function le(y){y.deltaY<0?te(v()):y.deltaY>0&&N(v()),n.update()}function se(y){let q=!1;switch(y.code){case n.keys.UP:oe(0,n.keyPanSpeed),q=!0;break;case n.keys.BOTTOM:oe(0,-n.keyPanSpeed),q=!0;break;case n.keys.LEFT:oe(n.keyPanSpeed,0),q=!0;break;case n.keys.RIGHT:oe(-n.keyPanSpeed,0),q=!0;break}q&&(y.preventDefault(),n.update())}function ye(){if(b.length===1)h.set(b[0].pageX,b[0].pageY);else{const y=.5*(b[0].pageX+b[1].pageX),q=.5*(b[0].pageY+b[1].pageY);h.set(y,q)}}function Ee(){if(b.length===1)p.set(b[0].pageX,b[0].pageY);else{const y=.5*(b[0].pageX+b[1].pageX),q=.5*(b[0].pageY+b[1].pageY);p.set(y,q)}}function Q(){const y=b[0].pageX-b[1].pageX,q=b[0].pageY-b[1].pageY,ce=Math.sqrt(y*y+q*q);S.set(0,ce)}function Pe(){n.enableZoom&&Q(),n.enablePan&&Ee()}function Se(){n.enableZoom&&Q(),n.enableRotate&&ye()}function we(y){if(b.length==1)m.set(y.pageX,y.pageY);else{const ce=_e(y),pe=.5*(y.pageX+ce.x),me=.5*(y.pageY+ce.y);m.set(pe,me)}g.subVectors(m,h).multiplyScalar(n.rotateSpeed);const q=n.domElement;L(2*Math.PI*g.x/q.clientHeight),O(2*Math.PI*g.y/q.clientHeight),h.copy(m)}function xe(y){if(b.length===1)d.set(y.pageX,y.pageY);else{const q=_e(y),ce=.5*(y.pageX+q.x),pe=.5*(y.pageY+q.y);d.set(ce,pe)}_.subVectors(d,p).multiplyScalar(n.panSpeed),oe(_.x,_.y),p.copy(d)}function Be(y){const q=_e(y),ce=y.pageX-q.x,pe=y.pageY-q.y,me=Math.sqrt(ce*ce+pe*pe);A.set(0,me),w.set(0,Math.pow(A.y/S.y,n.zoomSpeed)),N(w.y),S.copy(A)}function Ae(y){n.enableZoom&&Be(y),n.enablePan&&xe(y)}function E(y){n.enableZoom&&Be(y),n.enableRotate&&we(y)}function P(y){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(y.pointerId),n.domElement.addEventListener("pointermove",k),n.domElement.addEventListener("pointerup",Z)),B(y),y.pointerType==="touch"?M(y):ie(y))}function k(y){n.enabled!==!1&&(y.pointerType==="touch"?x(y):re(y))}function Z(y){X(y),b.length===0&&(n.domElement.releasePointerCapture(y.pointerId),n.domElement.removeEventListener("pointermove",k),n.domElement.removeEventListener("pointerup",Z)),n.dispatchEvent(Ec),s=r.NONE}function J(y){X(y)}function ie(y){let q;switch(y.button){case 0:q=n.mouseButtons.LEFT;break;case 1:q=n.mouseButtons.MIDDLE;break;case 2:q=n.mouseButtons.RIGHT;break;default:q=-1}switch(q){case fi.DOLLY:if(n.enableZoom===!1)return;Y(y),s=r.DOLLY;break;case fi.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enablePan===!1)return;W(y),s=r.PAN}else{if(n.enableRotate===!1)return;H(y),s=r.ROTATE}break;case fi.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enableRotate===!1)return;H(y),s=r.ROTATE}else{if(n.enablePan===!1)return;W(y),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(vo)}function re(y){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;G(y);break;case r.DOLLY:if(n.enableZoom===!1)return;K(y);break;case r.PAN:if(n.enablePan===!1)return;fe(y);break}}function ae(y){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(y.preventDefault(),n.dispatchEvent(vo),le(y),n.dispatchEvent(Ec))}function ue(y){n.enabled===!1||n.enablePan===!1||se(y)}function M(y){switch(ne(y),b.length){case 1:switch(n.touches.ONE){case hi.ROTATE:if(n.enableRotate===!1)return;ye(),s=r.TOUCH_ROTATE;break;case hi.PAN:if(n.enablePan===!1)return;Ee(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case hi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(),s=r.TOUCH_DOLLY_PAN;break;case hi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Se(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(vo)}function x(y){switch(ne(y),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;we(y),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;xe(y),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ae(y),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;E(y),n.update();break;default:s=r.NONE}}function R(y){n.enabled!==!1&&y.preventDefault()}function B(y){b.push(y)}function X(y){delete C[y.pointerId];for(let q=0;q<b.length;q++)if(b[q].pointerId==y.pointerId){b.splice(q,1);return}}function ne(y){let q=C[y.pointerId];q===void 0&&(q=new De,C[y.pointerId]=q),q.set(y.pageX,y.pageY)}function _e(y){const q=y.pointerId===b[0].pointerId?b[1]:b[0];return C[q.pointerId]}n.domElement.addEventListener("contextmenu",R),n.domElement.addEventListener("pointerdown",P),n.domElement.addEventListener("pointercancel",J),n.domElement.addEventListener("wheel",ae,{passive:!1}),this.update()}}const Yx=/^[og]\s*(.+)?/,$x=/^mtllib /,Zx=/^usemtl /,Kx=/^usemap /,Tc=/\s+/,Ac=new I,Mo=new I,Cc=new I,Lc=new I,Dt=new I,Jr=new He;function Jx(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(e,t,n){const r=this.vertices,s=this.object.geometry.normals;Ac.fromArray(r,e),Mo.fromArray(r,t),Cc.fromArray(r,n),Dt.subVectors(Cc,Mo),Lc.subVectors(Ac,Mo),Dt.cross(Lc),Dt.normalize(),s.push(Dt.x,Dt.y,Dt.z),s.push(Dt.x,Dt.y,Dt.z),s.push(Dt.x,Dt.y,Dt.z)},addColor:function(e,t,n){const r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[n]!==void 0&&s.push(r[n+0],r[n+1],r[n+2])},addUV:function(e,t,n){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[t+0],r[t+1]),s.push(r[n+0],r[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,r,s,a,o,l,c){const u=this.vertices.length;let f=this.parseVertexIndex(e,u),h=this.parseVertexIndex(t,u),m=this.parseVertexIndex(n,u);if(this.addVertex(f,h,m),this.addColor(f,h,m),o!==void 0&&o!==""){const g=this.normals.length;f=this.parseNormalIndex(o,g),h=this.parseNormalIndex(l,g),m=this.parseNormalIndex(c,g),this.addNormal(f,h,m)}else this.addFaceNormal(f,h,m);if(r!==void 0&&r!==""){const g=this.uvs.length;f=this.parseUVIndex(r,g),h=this.parseUVIndex(s,g),m=this.parseUVIndex(a,g),this.addUV(f,h,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,r=e.length;n<r;n++){const s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,r=this.uvs.length;for(let s=0,a=e.length;s<a;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,a=t.length;s<a;s++)this.addUVLine(this.parseUVIndex(t[s],r))}};return i.startObject("",!1),i}class Qx extends ws{constructor(e){super(e),this.materials=null}load(e,t,n,r){const s=this,a=new Bx(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new Jx;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let r=[];for(let o=0,l=n.length;o<l;o++){const c=n[o].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const f=c.split(Tc);switch(f[0]){case"v":t.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7?(Jr.setRGB(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6])).convertSRGBToLinear(),t.colors.push(Jr.r,Jr.g,Jr.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":t.uvs.push(parseFloat(f[1]),parseFloat(f[2]));break}}else if(u==="f"){const h=c.slice(1).trim().split(Tc),m=[];for(let p=0,d=h.length;p<d;p++){const _=h[p];if(_.length>0){const S=_.split("/");m.push(S)}}const g=m[0];for(let p=1,d=m.length-1;p<d;p++){const _=m[p],S=m[p+1];t.addFace(g[0],_[0],S[0],g[1],_[1],S[1],g[2],_[2],S[2])}}else if(u==="l"){const f=c.substring(1).trim().split(" ");let h=[];const m=[];if(c.indexOf("/")===-1)h=f;else for(let g=0,p=f.length;g<p;g++){const d=f[g].split("/");d[0]!==""&&h.push(d[0]),d[1]!==""&&m.push(d[1])}t.addLineGeometry(h,m)}else if(u==="p"){const h=c.slice(1).trim().split(" ");t.addPointGeometry(h)}else if((r=Yx.exec(c))!==null){const f=(" "+r[0].slice(1).trim()).slice(1);t.startObject(f)}else if(Zx.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if($x.test(c))t.materialLibraries.push(c.substring(7).trim());else if(Kx.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(r=c.split(" "),r.length>1){const h=r[1].trim().toLowerCase();t.object.smooth=h!=="0"&&h!=="off"}else t.object.smooth=!0;const f=t.object.currentMaterial();f&&(f.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const s=new sr;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=t.objects.length;o<l;o++){const c=t.objects[o],u=c.geometry,f=c.materials,h=u.type==="Line",m=u.type==="Points";let g=!1;if(u.vertices.length===0)continue;const p=new zt;p.setAttribute("position",new st(u.vertices,3)),u.normals.length>0&&p.setAttribute("normal",new st(u.normals,3)),u.colors.length>0&&(g=!0,p.setAttribute("color",new st(u.colors,3))),u.hasUVIndices===!0&&p.setAttribute("uv",new st(u.uvs,2));const d=[];for(let S=0,A=f.length;S<A;S++){const w=f[S],b=w.name+"_"+w.smooth+"_"+g;let C=t.materials[b];if(this.materials!==null){if(C=this.materials.create(w.name),h&&C&&!(C instanceof ur)){const F=new ur;xn.prototype.copy.call(F,C),F.color.copy(C.color),C=F}else if(m&&C&&!(C instanceof or)){const F=new or({size:10,sizeAttenuation:!1});xn.prototype.copy.call(F,C),F.color.copy(C.color),F.map=C.map,C=F}}C===void 0&&(h?C=new ur:m?C=new or({size:1,sizeAttenuation:!1}):C=new Nx,C.name=w.name,C.flatShading=!w.smooth,C.vertexColors=g,t.materials[b]=C),d.push(C)}let _;if(d.length>1){for(let S=0,A=f.length;S<A;S++){const w=f[S];p.addGroup(w.groupStart,w.groupCount,S)}h?_=new qo(p,d):m?_=new xo(p,d):_=new qt(p,d)}else h?_=new qo(p,d[0]):m?_=new xo(p,d[0]):_=new qt(p,d[0]);_.name=c.name,s.add(_)}else if(t.vertices.length>0){const o=new or({size:1,sizeAttenuation:!1}),l=new zt;l.setAttribute("position",new st(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new st(t.colors,3)),o.vertexColors=!0);const c=new xo(l,o);s.add(c)}return s}}const ev={id:"viewer"},tv={id:"bottom-panel"},nv={id:"slider-truck"},iv=ca({__name:"Viewer",props:{flightData:{type:Object,required:!0}},setup(i){const e=i,t=100,n=t*2,r=Math.PI/180,s=pr(),a=pr();let o,l=0;const c=(u,f,h)=>{new Qx().load(f,m=>{o=m;const g=(()=>{const d=new Xi().setFromObject(m);return Math.max(d.max.x-d.min.x,d.max.y-d.min.y,d.max.z-d.min.z)})(),p=t/g;m.scale.set(p,p,p),h&&m.traverse(d=>{var _=new kx().load(h);d instanceof qt&&(d.material.map=_)}),u.add(m)})};return ua(()=>{if(!s.value)return;const u=new Ix;u.add(new jx(n));const f=new qx(16777215,.4);u.add(f);const h=new Wx(16777215,1);h.position.set(1,1,-2).normalize(),u.add(h);const m=new It(60,s.value.offsetWidth/s.value.offsetHeight);m.position.set(t/1.6,t/1.6,t/1.6),m.lookAt(u.position);const g=new Ku({antialias:!0});g.setClearColor(1052704,1),g.setPixelRatio(window.devicePixelRatio),g.setSize(s.value.offsetWidth,s.value.offsetHeight),s.value.appendChild(g.domElement);const p=new Xx(m,g.domElement);p.maxPolarAngle=Math.PI*.5,p.minDistance=.1,p.maxDistance=n,c(u,"/flight-visualizer/rocket.obj","/flight-visualizer/rocket_texture.png");let d=0;g.setAnimationLoop(_=>{if(e.flightData){const S=_/1e3,A=e.flightData.steps[l],b=e.flightData.steps[l+1].time-A.time;d+b<=S&&(d=S,o.setRotationFromEuler(new Yi(A.gyro.x*b*r,A.gyro.y*b*r,A.gyro.z*b*r,"XYZ")),l++,l===e.flightData.steps.length-1&&(l=0),a.value.style.width=`${100*l/e.flightData.steps.length}%`)}p.update(),g.render(u,m)})}),(u,f)=>(da(),pa("div",ev,[yt("div",{id:"view",ref_key:"view",ref:s},null,512),yt("div",tv,[yt("div",nv,[yt("div",{id:"slider",ref_key:"slider",ref:a},null,512)])])]))}});const rv=_a(iv,[["__scopeId","data-v-bd196282"]]),sv={id:"app"},ov={id:"top-bar",class:"text-center"},av={class:"m-0"},lv={id:"main",class:"row g-0"},cv={class:"col-2"},uv={class:"col-10"},fv=ca({__name:"App",setup(i){let e=pr(),t=pr();const n=(r,s)=>{e.value=r,t.value=s};return(r,s)=>(da(),pa("div",sv,[yt("div",ov,[yt("p",av,"Flight Visualizer "+df(es(t)?` - ${es(t)}`:""),1)]),yt("div",lv,[yt("div",cv,[mn(Ud,{onCsvLoad:n})]),yt("div",uv,[mn(rv,{flightData:es(e)},null,8,["flightData"])])])]))}});const hv=_a(fv,[["__scopeId","data-v-aac5c86d"]]);Fd(hv).mount("#app");
