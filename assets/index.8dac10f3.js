var uf=Object.defineProperty;var ff=(i,e,t)=>e in i?uf(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var La=(i,e,t)=>(ff(i,typeof e!="symbol"?e+"":e,t),t);const hf=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};hf();function Ko(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const df="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pf=Ko(df);function Nc(i){return!!i||i===""}function Jo(i){if(Ce(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=ct(n)?_f(n):Jo(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(ct(i))return i;if(ut(i))return i}}const mf=/;(?![^(]*\))/g,gf=/:(.+)/;function _f(i){const e={};return i.split(mf).forEach(t=>{if(t){const n=t.split(gf);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Qo(i){let e="";if(ct(i))e=i;else if(Ce(i))for(let t=0;t<i.length;t++){const n=Qo(i[t]);n&&(e+=n+" ")}else if(ut(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Oc=i=>ct(i)?i:i==null?"":Ce(i)||ut(i)&&(i.toString===Gc||!Re(i.toString))?JSON.stringify(i,zc,2):String(i),zc=(i,e)=>e&&e.__v_isRef?zc(i,e.value):Ni(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r])=>(t[`${n} =>`]=r,t),{})}:Uc(e)?{[`Set(${e.size})`]:[...e.values()]}:ut(e)&&!Ce(e)&&!kc(e)?String(e):e,Xe={},Fi=[],Xt=()=>{},xf=()=>!1,vf=/^on[^a-z]/,ds=i=>vf.test(i),ea=i=>i.startsWith("onUpdate:"),dt=Object.assign,ta=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Mf=Object.prototype.hasOwnProperty,Ue=(i,e)=>Mf.call(i,e),Ce=Array.isArray,Ni=i=>ps(i)==="[object Map]",Uc=i=>ps(i)==="[object Set]",Re=i=>typeof i=="function",ct=i=>typeof i=="string",na=i=>typeof i=="symbol",ut=i=>i!==null&&typeof i=="object",Bc=i=>ut(i)&&Re(i.then)&&Re(i.catch),Gc=Object.prototype.toString,ps=i=>Gc.call(i),yf=i=>ps(i).slice(8,-1),kc=i=>ps(i)==="[object Object]",ia=i=>ct(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,ts=Ko(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ms=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},bf=/-(\w)/g,Gi=ms(i=>i.replace(bf,(e,t)=>t?t.toUpperCase():"")),Sf=/\B([A-Z])/g,Xi=ms(i=>i.replace(Sf,"-$1").toLowerCase()),Vc=ms(i=>i.charAt(0).toUpperCase()+i.slice(1)),Is=ms(i=>i?`on${Vc(i)}`:""),dr=(i,e)=>!Object.is(i,e),ns=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},as=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},wo=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Pa;const wf=()=>Pa||(Pa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Kt;class Ef{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Kt&&(this.parent=Kt,this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}run(e){if(this.active){const t=Kt;try{return Kt=this,e()}finally{Kt=t}}}on(){Kt=this}off(){Kt=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Tf(i,e=Kt){e&&e.active&&e.effects.push(i)}const ra=i=>{const e=new Set(i);return e.w=0,e.n=0,e},Hc=i=>(i.w&Nn)>0,Wc=i=>(i.n&Nn)>0,Af=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=Nn},Cf=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];Hc(r)&&!Wc(r)?r.delete(i):e[t++]=r,r.w&=~Nn,r.n&=~Nn}e.length=t}},Eo=new WeakMap;let ir=0,Nn=1;const To=30;let Vt;const ei=Symbol(""),Ao=Symbol("");class sa{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Tf(this,n)}run(){if(!this.active)return this.fn();let e=Vt,t=Rn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Vt,Vt=this,Rn=!0,Nn=1<<++ir,ir<=To?Af(this):Da(this),this.fn()}finally{ir<=To&&Cf(this),Nn=1<<--ir,Vt=this.parent,Rn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Vt===this?this.deferStop=!0:this.active&&(Da(this),this.onStop&&this.onStop(),this.active=!1)}}function Da(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let Rn=!0;const qc=[];function Yi(){qc.push(Rn),Rn=!1}function $i(){const i=qc.pop();Rn=i===void 0?!0:i}function Tt(i,e,t){if(Rn&&Vt){let n=Eo.get(i);n||Eo.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=ra()),jc(r)}}function jc(i,e){let t=!1;ir<=To?Wc(i)||(i.n|=Nn,t=!Hc(i)):t=!i.has(Vt),t&&(i.add(Vt),Vt.deps.push(i))}function _n(i,e,t,n,r,s){const a=Eo.get(i);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Ce(i))a.forEach((c,l)=>{(l==="length"||l>=n)&&o.push(c)});else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Ce(i)?ia(t)&&o.push(a.get("length")):(o.push(a.get(ei)),Ni(i)&&o.push(a.get(Ao)));break;case"delete":Ce(i)||(o.push(a.get(ei)),Ni(i)&&o.push(a.get(Ao)));break;case"set":Ni(i)&&o.push(a.get(ei));break}if(o.length===1)o[0]&&Co(o[0]);else{const c=[];for(const l of o)l&&c.push(...l);Co(ra(c))}}function Co(i,e){const t=Ce(i)?i:[...i];for(const n of t)n.computed&&Ra(n);for(const n of t)n.computed||Ra(n)}function Ra(i,e){(i!==Vt||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const Lf=Ko("__proto__,__v_isRef,__isVue"),Xc=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(na)),Pf=oa(),Df=oa(!1,!0),Rf=oa(!0),Ia=If();function If(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=We(this);for(let s=0,a=this.length;s<a;s++)Tt(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(We)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){Yi();const n=We(this)[e].apply(this,t);return $i(),n}}),i}function oa(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?$f:Jc:e?Kc:Zc).get(n))return n;const a=Ce(n);if(!i&&a&&Ue(Ia,r))return Reflect.get(Ia,r,s);const o=Reflect.get(n,r,s);return(na(r)?Xc.has(r):Lf(r))||(i||Tt(n,"get",r),e)?o:lt(o)?a&&ia(r)?o:o.value:ut(o)?i?Qc(o):ca(o):o}}const Ff=Yc(),Nf=Yc(!0);function Yc(i=!1){return function(t,n,r,s){let a=t[n];if(pr(a)&&lt(a)&&!lt(r))return!1;if(!i&&!pr(r)&&(Lo(r)||(r=We(r),a=We(a)),!Ce(t)&&lt(a)&&!lt(r)))return a.value=r,!0;const o=Ce(t)&&ia(n)?Number(n)<t.length:Ue(t,n),c=Reflect.set(t,n,r,s);return t===We(s)&&(o?dr(r,a)&&_n(t,"set",n,r):_n(t,"add",n,r)),c}}function Of(i,e){const t=Ue(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&_n(i,"delete",e,void 0),n}function zf(i,e){const t=Reflect.has(i,e);return(!na(e)||!Xc.has(e))&&Tt(i,"has",e),t}function Uf(i){return Tt(i,"iterate",Ce(i)?"length":ei),Reflect.ownKeys(i)}const $c={get:Pf,set:Ff,deleteProperty:Of,has:zf,ownKeys:Uf},Bf={get:Rf,set(i,e){return!0},deleteProperty(i,e){return!0}},Gf=dt({},$c,{get:Df,set:Nf}),aa=i=>i,gs=i=>Reflect.getPrototypeOf(i);function Tr(i,e,t=!1,n=!1){i=i.__v_raw;const r=We(i),s=We(e);t||(e!==s&&Tt(r,"get",e),Tt(r,"get",s));const{has:a}=gs(r),o=n?aa:t?fa:mr;if(a.call(r,e))return o(i.get(e));if(a.call(r,s))return o(i.get(s));i!==r&&i.get(e)}function Ar(i,e=!1){const t=this.__v_raw,n=We(t),r=We(i);return e||(i!==r&&Tt(n,"has",i),Tt(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function Cr(i,e=!1){return i=i.__v_raw,!e&&Tt(We(i),"iterate",ei),Reflect.get(i,"size",i)}function Fa(i){i=We(i);const e=We(this);return gs(e).has.call(e,i)||(e.add(i),_n(e,"add",i,i)),this}function Na(i,e){e=We(e);const t=We(this),{has:n,get:r}=gs(t);let s=n.call(t,i);s||(i=We(i),s=n.call(t,i));const a=r.call(t,i);return t.set(i,e),s?dr(e,a)&&_n(t,"set",i,e):_n(t,"add",i,e),this}function Oa(i){const e=We(this),{has:t,get:n}=gs(e);let r=t.call(e,i);r||(i=We(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&_n(e,"delete",i,void 0),s}function za(){const i=We(this),e=i.size!==0,t=i.clear();return e&&_n(i,"clear",void 0,void 0),t}function Lr(i,e){return function(n,r){const s=this,a=s.__v_raw,o=We(a),c=e?aa:i?fa:mr;return!i&&Tt(o,"iterate",ei),a.forEach((l,u)=>n.call(r,c(l),c(u),s))}}function Pr(i,e,t){return function(...n){const r=this.__v_raw,s=We(r),a=Ni(s),o=i==="entries"||i===Symbol.iterator&&a,c=i==="keys"&&a,l=r[i](...n),u=t?aa:e?fa:mr;return!e&&Tt(s,"iterate",c?Ao:ei),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function bn(i){return function(...e){return i==="delete"?!1:this}}function kf(){const i={get(s){return Tr(this,s)},get size(){return Cr(this)},has:Ar,add:Fa,set:Na,delete:Oa,clear:za,forEach:Lr(!1,!1)},e={get(s){return Tr(this,s,!1,!0)},get size(){return Cr(this)},has:Ar,add:Fa,set:Na,delete:Oa,clear:za,forEach:Lr(!1,!0)},t={get(s){return Tr(this,s,!0)},get size(){return Cr(this,!0)},has(s){return Ar.call(this,s,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Lr(!0,!1)},n={get(s){return Tr(this,s,!0,!0)},get size(){return Cr(this,!0)},has(s){return Ar.call(this,s,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Lr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=Pr(s,!1,!1),t[s]=Pr(s,!0,!1),e[s]=Pr(s,!1,!0),n[s]=Pr(s,!0,!0)}),[i,t,e,n]}const[Vf,Hf,Wf,qf]=kf();function la(i,e){const t=e?i?qf:Wf:i?Hf:Vf;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(Ue(t,r)&&r in n?t:n,r,s)}const jf={get:la(!1,!1)},Xf={get:la(!1,!0)},Yf={get:la(!0,!1)},Zc=new WeakMap,Kc=new WeakMap,Jc=new WeakMap,$f=new WeakMap;function Zf(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kf(i){return i.__v_skip||!Object.isExtensible(i)?0:Zf(yf(i))}function ca(i){return pr(i)?i:ua(i,!1,$c,jf,Zc)}function Jf(i){return ua(i,!1,Gf,Xf,Kc)}function Qc(i){return ua(i,!0,Bf,Yf,Jc)}function ua(i,e,t,n,r){if(!ut(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const a=Kf(i);if(a===0)return i;const o=new Proxy(i,a===2?n:t);return r.set(i,o),o}function Oi(i){return pr(i)?Oi(i.__v_raw):!!(i&&i.__v_isReactive)}function pr(i){return!!(i&&i.__v_isReadonly)}function Lo(i){return!!(i&&i.__v_isShallow)}function eu(i){return Oi(i)||pr(i)}function We(i){const e=i&&i.__v_raw;return e?We(e):i}function tu(i){return as(i,"__v_skip",!0),i}const mr=i=>ut(i)?ca(i):i,fa=i=>ut(i)?Qc(i):i;function nu(i){Rn&&Vt&&(i=We(i),jc(i.dep||(i.dep=ra())))}function iu(i,e){i=We(i),i.dep&&Co(i.dep)}function lt(i){return!!(i&&i.__v_isRef===!0)}function $n(i){return Qf(i,!1)}function Qf(i,e){return lt(i)?i:new eh(i,e)}class eh{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:We(e),this._value=t?e:mr(e)}get value(){return nu(this),this._value}set value(e){e=this.__v_isShallow?e:We(e),dr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:mr(e),iu(this))}}function zi(i){return lt(i)?i.value:i}const th={get:(i,e,t)=>zi(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return lt(r)&&!lt(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function ru(i){return Oi(i)?i:new Proxy(i,th)}class nh{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new sa(e,()=>{this._dirty||(this._dirty=!0,iu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=We(this);return nu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ih(i,e,t=!1){let n,r;const s=Re(i);return s?(n=i,r=Xt):(n=i.get,r=i.set),new nh(n,r,s||!r,t)}function In(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){_s(s,e,t)}return r}function Nt(i,e,t,n){if(Re(i)){const s=In(i,e,t,n);return s&&Bc(s)&&s.catch(a=>{_s(a,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(Nt(i[s],e,t,n));return r}function _s(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](i,a,o)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){In(c,null,10,[i,a,o]);return}}rh(i,t,r,n)}function rh(i,e,t,n=!0){console.error(i)}let ls=!1,Po=!1;const Et=[];let hn=0;const cr=[];let rr=null,Li=0;const ur=[];let Pn=null,Pi=0;const su=Promise.resolve();let ha=null,Do=null;function sh(i){const e=ha||su;return i?e.then(this?i.bind(this):i):e}function oh(i){let e=hn+1,t=Et.length;for(;e<t;){const n=e+t>>>1;gr(Et[n])<i?e=n+1:t=n}return e}function ou(i){(!Et.length||!Et.includes(i,ls&&i.allowRecurse?hn+1:hn))&&i!==Do&&(i.id==null?Et.push(i):Et.splice(oh(i.id),0,i),au())}function au(){!ls&&!Po&&(Po=!0,ha=su.then(uu))}function ah(i){const e=Et.indexOf(i);e>hn&&Et.splice(e,1)}function lu(i,e,t,n){Ce(i)?t.push(...i):(!e||!e.includes(i,i.allowRecurse?n+1:n))&&t.push(i),au()}function lh(i){lu(i,rr,cr,Li)}function ch(i){lu(i,Pn,ur,Pi)}function xs(i,e=null){if(cr.length){for(Do=e,rr=[...new Set(cr)],cr.length=0,Li=0;Li<rr.length;Li++)rr[Li]();rr=null,Li=0,Do=null,xs(i,e)}}function cu(i){if(xs(),ur.length){const e=[...new Set(ur)];if(ur.length=0,Pn){Pn.push(...e);return}for(Pn=e,Pn.sort((t,n)=>gr(t)-gr(n)),Pi=0;Pi<Pn.length;Pi++)Pn[Pi]();Pn=null,Pi=0}}const gr=i=>i.id==null?1/0:i.id;function uu(i){Po=!1,ls=!0,xs(i),Et.sort((t,n)=>gr(t)-gr(n));const e=Xt;try{for(hn=0;hn<Et.length;hn++){const t=Et[hn];t&&t.active!==!1&&In(t,null,14)}}finally{hn=0,Et.length=0,cu(),ls=!1,ha=null,(Et.length||cr.length||ur.length)&&uu(i)}}function uh(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||Xe;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in n){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=n[u]||Xe;h&&(r=t.map(m=>m.trim())),f&&(r=t.map(wo))}let o,c=n[o=Is(e)]||n[o=Is(Gi(e))];!c&&s&&(c=n[o=Is(Xi(e))]),c&&Nt(c,i,6,r);const l=n[o+"Once"];if(l){if(!i.emitted)i.emitted={};else if(i.emitted[o])return;i.emitted[o]=!0,Nt(l,i,6,r)}}function fu(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let a={},o=!1;if(!Re(i)){const c=l=>{const u=fu(l,e,!0);u&&(o=!0,dt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(c),i.extends&&c(i.extends),i.mixins&&i.mixins.forEach(c)}return!s&&!o?(n.set(i,null),null):(Ce(s)?s.forEach(c=>a[c]=null):dt(a,s),n.set(i,a),a)}function vs(i,e){return!i||!ds(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ue(i,e[0].toLowerCase()+e.slice(1))||Ue(i,Xi(e))||Ue(i,e))}let Wt=null,Ms=null;function cs(i){const e=Wt;return Wt=i,Ms=i&&i.type.__scopeId||null,e}function fh(i){Ms=i}function hh(){Ms=null}function dh(i,e=Wt,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&Xa(-1);const s=cs(e),a=i(...r);return cs(s),n._d&&Xa(1),a};return n._n=!0,n._c=!0,n._d=!0,n}function Fs(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:c,emit:l,render:u,renderCache:f,data:h,setupState:m,ctx:g,inheritAttrs:p}=i;let d,_;const S=cs(i);try{if(t.shapeFlag&4){const w=r||n;d=Qt(u.call(w,w,f,s,m,h,g)),_=c}else{const w=e;d=Qt(w.length>1?w(s,{attrs:c,slots:o,emit:l}):w(s,null)),_=e.props?c:ph(c)}}catch(w){fr.length=0,_s(w,i,1),d=mn(pn)}let A=d;if(_&&p!==!1){const w=Object.keys(_),{shapeFlag:b}=A;w.length&&b&7&&(a&&w.some(ea)&&(_=mh(_,a)),A=On(A,_))}return t.dirs&&(A=On(A),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&(A.transition=t.transition),d=A,cs(S),d}const ph=i=>{let e;for(const t in i)(t==="class"||t==="style"||ds(t))&&((e||(e={}))[t]=i[t]);return e},mh=(i,e)=>{const t={};for(const n in i)(!ea(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function gh(i,e,t){const{props:n,children:r,component:s}=i,{props:a,children:o,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return n?Ua(n,a,l):!!a;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==n[h]&&!vs(l,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?Ua(n,a,l):!0:!!a;return!1}function Ua(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!vs(t,s))return!0}return!1}function _h({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const xh=i=>i.__isSuspense;function vh(i,e){e&&e.pendingBranch?Ce(i)?e.effects.push(...i):e.effects.push(i):ch(i)}function Mh(i,e){if(at){let t=at.provides;const n=at.parent&&at.parent.provides;n===t&&(t=at.provides=Object.create(n)),t[i]=e}}function Ns(i,e,t=!1){const n=at||Wt;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Re(e)?e.call(n.proxy):e}}const Ba={};function Os(i,e,t){return hu(i,e,t)}function hu(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:a}=Xe){const o=at;let c,l=!1,u=!1;if(lt(i)?(c=()=>i.value,l=Lo(i)):Oi(i)?(c=()=>i,n=!0):Ce(i)?(u=!0,l=i.some(_=>Oi(_)||Lo(_)),c=()=>i.map(_=>{if(lt(_))return _.value;if(Oi(_))return Zn(_);if(Re(_))return In(_,o,2)})):Re(i)?e?c=()=>In(i,o,2):c=()=>{if(!(o&&o.isUnmounted))return f&&f(),Nt(i,o,3,[h])}:c=Xt,e&&n){const _=c;c=()=>Zn(_())}let f,h=_=>{f=d.onStop=()=>{In(_,o,4)}};if(xr)return h=Xt,e?t&&Nt(e,o,3,[c(),u?[]:void 0,h]):c(),Xt;let m=u?[]:Ba;const g=()=>{if(!!d.active)if(e){const _=d.run();(n||l||(u?_.some((S,A)=>dr(S,m[A])):dr(_,m)))&&(f&&f(),Nt(e,o,3,[_,m===Ba?void 0:m,h]),m=_)}else d.run()};g.allowRecurse=!!e;let p;r==="sync"?p=g:r==="post"?p=()=>vt(g,o&&o.suspense):p=()=>lh(g);const d=new sa(c,p);return e?t?g():m=d.run():r==="post"?vt(d.run.bind(d),o&&o.suspense):d.run(),()=>{d.stop(),o&&o.scope&&ta(o.scope.effects,d)}}function yh(i,e,t){const n=this.proxy,r=ct(i)?i.includes(".")?du(n,i):()=>n[i]:i.bind(n,n);let s;Re(e)?s=e:(s=e.handler,t=e);const a=at;ki(this);const o=hu(r,s.bind(n),t);return a?ki(a):ti(),o}function du(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function Zn(i,e){if(!ut(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),lt(i))Zn(i.value,e);else if(Ce(i))for(let t=0;t<i.length;t++)Zn(i[t],e);else if(Uc(i)||Ni(i))i.forEach(t=>{Zn(t,e)});else if(kc(i))for(const t in i)Zn(i[t],e);return i}function bh(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pa(()=>{i.isMounted=!0}),_u(()=>{i.isUnmounting=!0}),i}const Lt=[Function,Array],Sh={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Lt,onEnter:Lt,onAfterEnter:Lt,onEnterCancelled:Lt,onBeforeLeave:Lt,onLeave:Lt,onAfterLeave:Lt,onLeaveCancelled:Lt,onBeforeAppear:Lt,onAppear:Lt,onAfterAppear:Lt,onAppearCancelled:Lt},setup(i,{slots:e}){const t=ud(),n=bh();let r;return()=>{const s=e.default&&mu(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const p of s)if(p.type!==pn){a=p;break}}const o=We(i),{mode:c}=o;if(n.isLeaving)return zs(a);const l=Ga(a);if(!l)return zs(a);const u=Ro(l,o,n,t);Io(l,u);const f=t.subTree,h=f&&Ga(f);let m=!1;const{getTransitionKey:g}=l.type;if(g){const p=g();r===void 0?r=p:p!==r&&(r=p,m=!0)}if(h&&h.type!==pn&&(!jn(l,h)||m)){const p=Ro(h,o,n,t);if(Io(h,p),c==="out-in")return n.isLeaving=!0,p.afterLeave=()=>{n.isLeaving=!1,t.update()},zs(a);c==="in-out"&&l.type!==pn&&(p.delayLeave=(d,_,S)=>{const A=pu(n,h);A[String(h.key)]=h,d._leaveCb=()=>{_(),d._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return a}}},wh=Sh;function pu(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function Ro(i,e,t,n){const{appear:r,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:p,onAppear:d,onAfterAppear:_,onAppearCancelled:S}=e,A=String(i.key),w=pu(t,i),b=(v,L)=>{v&&Nt(v,n,9,L)},C=(v,L)=>{const O=L[1];b(v,L),Ce(v)?v.every(z=>z.length<=1)&&O():v.length<=1&&O()},F={mode:s,persisted:a,beforeEnter(v){let L=o;if(!t.isMounted)if(r)L=p||o;else return;v._leaveCb&&v._leaveCb(!0);const O=w[A];O&&jn(i,O)&&O.el._leaveCb&&O.el._leaveCb(),b(L,[v])},enter(v){let L=c,O=l,z=u;if(!t.isMounted)if(r)L=d||c,O=_||l,z=S||u;else return;let he=!1;const oe=v._enterCb=N=>{he||(he=!0,N?b(z,[v]):b(O,[v]),F.delayedLeave&&F.delayedLeave(),v._enterCb=void 0)};L?C(L,[v,oe]):oe()},leave(v,L){const O=String(i.key);if(v._enterCb&&v._enterCb(!0),t.isUnmounting)return L();b(f,[v]);let z=!1;const he=v._leaveCb=oe=>{z||(z=!0,L(),oe?b(g,[v]):b(m,[v]),v._leaveCb=void 0,w[O]===i&&delete w[O])};w[O]=i,h?C(h,[v,he]):he()},clone(v){return Ro(v,e,t,n)}};return F}function zs(i){if(ys(i))return i=On(i),i.children=null,i}function Ga(i){return ys(i)?i.children?i.children[0]:void 0:i}function Io(i,e){i.shapeFlag&6&&i.component?Io(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function mu(i,e=!1,t){let n=[],r=0;for(let s=0;s<i.length;s++){let a=i[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===Jt?(a.patchFlag&128&&r++,n=n.concat(mu(a.children,e,o))):(e||a.type!==pn)&&n.push(o!=null?On(a,{key:o}):a)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function da(i){return Re(i)?{setup:i,name:i.name}:i}const is=i=>!!i.type.__asyncLoader,ys=i=>i.type.__isKeepAlive;function Eh(i,e){gu(i,"a",e)}function Th(i,e){gu(i,"da",e)}function gu(i,e,t=at){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(bs(e,n,t),t){let r=t.parent;for(;r&&r.parent;)ys(r.parent.vnode)&&Ah(n,e,t,r),r=r.parent}}function Ah(i,e,t,n){const r=bs(e,i,n,!0);xu(()=>{ta(n[e],r)},t)}function bs(i,e,t=at,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;Yi(),ki(t);const o=Nt(e,t,i,a);return ti(),$i(),o});return n?r.unshift(s):r.push(s),s}}const vn=i=>(e,t=at)=>(!xr||i==="sp")&&bs(i,e,t),Ch=vn("bm"),pa=vn("m"),Lh=vn("bu"),Ph=vn("u"),_u=vn("bum"),xu=vn("um"),Dh=vn("sp"),Rh=vn("rtg"),Ih=vn("rtc");function Fh(i,e=at){bs("ec",i,e)}function Nh(i,e){const t=Wt;if(t===null)return i;const n=ws(t)||t.proxy,r=i.dirs||(i.dirs=[]);for(let s=0;s<e.length;s++){let[a,o,c,l=Xe]=e[s];Re(a)&&(a={mounted:a,updated:a}),a.deep&&Zn(o),r.push({dir:a,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l})}return i}function Un(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let c=o.dir[n];c&&(Yi(),Nt(c,t,8,[i.el,o,i,e]),$i())}}const Oh=Symbol(),Fo=i=>i?Lu(i)?ws(i)||i.proxy:Fo(i.parent):null,us=dt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Fo(i.parent),$root:i=>Fo(i.root),$emit:i=>i.emit,$options:i=>Mu(i),$forceUpdate:i=>i.f||(i.f=()=>ou(i.update)),$nextTick:i=>i.n||(i.n=sh.bind(i.proxy)),$watch:i=>yh.bind(i)}),zh={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:a,type:o,appContext:c}=i;let l;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(n!==Xe&&Ue(n,e))return a[e]=1,n[e];if(r!==Xe&&Ue(r,e))return a[e]=2,r[e];if((l=i.propsOptions[0])&&Ue(l,e))return a[e]=3,s[e];if(t!==Xe&&Ue(t,e))return a[e]=4,t[e];No&&(a[e]=0)}}const u=us[e];let f,h;if(u)return e==="$attrs"&&Tt(i,"get",e),u(i);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==Xe&&Ue(t,e))return a[e]=4,t[e];if(h=c.config.globalProperties,Ue(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return r!==Xe&&Ue(r,e)?(r[e]=t,!0):n!==Xe&&Ue(n,e)?(n[e]=t,!0):Ue(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},a){let o;return!!t[a]||i!==Xe&&Ue(i,a)||e!==Xe&&Ue(e,a)||(o=s[0])&&Ue(o,a)||Ue(n,a)||Ue(us,a)||Ue(r.config.globalProperties,a)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Ue(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let No=!0;function Uh(i){const e=Mu(i),t=i.proxy,n=i.ctx;No=!1,e.beforeCreate&&ka(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:a,watch:o,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:g,activated:p,deactivated:d,beforeDestroy:_,beforeUnmount:S,destroyed:A,unmounted:w,render:b,renderTracked:C,renderTriggered:F,errorCaptured:v,serverPrefetch:L,expose:O,inheritAttrs:z,components:he,directives:oe,filters:N}=e;if(l&&Bh(l,n,null,i.appContext.config.unwrapInjectedRef),a)for(const Y in a){const W=a[Y];Re(W)&&(n[Y]=W.bind(t))}if(r){const Y=r.call(t,t);ut(Y)&&(i.data=ca(Y))}if(No=!0,s)for(const Y in s){const W=s[Y],G=Re(W)?W.bind(t,t):Re(W.get)?W.get.bind(t,t):Xt,K=!Re(W)&&Re(W.set)?W.set.bind(t):Xt,fe=gd({get:G,set:K});Object.defineProperty(n,Y,{enumerable:!0,configurable:!0,get:()=>fe.value,set:le=>fe.value=le})}if(o)for(const Y in o)vu(o[Y],n,t,Y);if(c){const Y=Re(c)?c.call(t):c;Reflect.ownKeys(Y).forEach(W=>{Mh(W,Y[W])})}u&&ka(u,i,"c");function H(Y,W){Ce(W)?W.forEach(G=>Y(G.bind(t))):W&&Y(W.bind(t))}if(H(Ch,f),H(pa,h),H(Lh,m),H(Ph,g),H(Eh,p),H(Th,d),H(Fh,v),H(Ih,C),H(Rh,F),H(_u,S),H(xu,w),H(Dh,L),Ce(O))if(O.length){const Y=i.exposed||(i.exposed={});O.forEach(W=>{Object.defineProperty(Y,W,{get:()=>t[W],set:G=>t[W]=G})})}else i.exposed||(i.exposed={});b&&i.render===Xt&&(i.render=b),z!=null&&(i.inheritAttrs=z),he&&(i.components=he),oe&&(i.directives=oe)}function Bh(i,e,t=Xt,n=!1){Ce(i)&&(i=Oo(i));for(const r in i){const s=i[r];let a;ut(s)?"default"in s?a=Ns(s.from||r,s.default,!0):a=Ns(s.from||r):a=Ns(s),lt(a)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function ka(i,e,t){Nt(Ce(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function vu(i,e,t,n){const r=n.includes(".")?du(t,n):()=>t[n];if(ct(i)){const s=e[i];Re(s)&&Os(r,s)}else if(Re(i))Os(r,i.bind(t));else if(ut(i))if(Ce(i))i.forEach(s=>vu(s,e,t,n));else{const s=Re(i.handler)?i.handler.bind(t):e[i.handler];Re(s)&&Os(r,s,i)}}function Mu(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=i.appContext,o=s.get(e);let c;return o?c=o:!r.length&&!t&&!n?c=e:(c={},r.length&&r.forEach(l=>fs(c,l,a,!0)),fs(c,e,a)),s.set(e,c),c}function fs(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&fs(i,s,t,!0),r&&r.forEach(a=>fs(i,a,t,!0));for(const a in e)if(!(n&&a==="expose")){const o=Gh[a]||t&&t[a];i[a]=o?o(i[a],e[a]):e[a]}return i}const Gh={data:Va,props:Hn,emits:Hn,methods:Hn,computed:Hn,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:Hn,directives:Hn,watch:Vh,provide:Va,inject:kh};function Va(i,e){return e?i?function(){return dt(Re(i)?i.call(this,this):i,Re(e)?e.call(this,this):e)}:e:i}function kh(i,e){return Hn(Oo(i),Oo(e))}function Oo(i){if(Ce(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function gt(i,e){return i?[...new Set([].concat(i,e))]:e}function Hn(i,e){return i?dt(dt(Object.create(null),i),e):e}function Vh(i,e){if(!i)return e;if(!e)return i;const t=dt(Object.create(null),i);for(const n in e)t[n]=gt(i[n],e[n]);return t}function Hh(i,e,t,n=!1){const r={},s={};as(s,Ss,1),i.propsDefaults=Object.create(null),yu(i,e,r,s);for(const a in i.propsOptions[0])a in r||(r[a]=void 0);t?i.props=n?r:Jf(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function Wh(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:a}}=i,o=We(r),[c]=i.propsOptions;let l=!1;if((n||a>0)&&!(a&16)){if(a&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(vs(i.emitsOptions,h))continue;const m=e[h];if(c)if(Ue(s,h))m!==s[h]&&(s[h]=m,l=!0);else{const g=Gi(h);r[g]=zo(c,o,g,m,i,!1)}else m!==s[h]&&(s[h]=m,l=!0)}}}else{yu(i,e,r,s)&&(l=!0);let u;for(const f in o)(!e||!Ue(e,f)&&((u=Xi(f))===f||!Ue(e,u)))&&(c?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=zo(c,o,f,void 0,i,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Ue(e,f)&&!0)&&(delete s[f],l=!0)}l&&_n(i,"set","$attrs")}function yu(i,e,t,n){const[r,s]=i.propsOptions;let a=!1,o;if(e)for(let c in e){if(ts(c))continue;const l=e[c];let u;r&&Ue(r,u=Gi(c))?!s||!s.includes(u)?t[u]=l:(o||(o={}))[u]=l:vs(i.emitsOptions,c)||(!(c in n)||l!==n[c])&&(n[c]=l,a=!0)}if(s){const c=We(t),l=o||Xe;for(let u=0;u<s.length;u++){const f=s[u];t[f]=zo(r,c,f,l[f],i,!Ue(l,f))}}return a}function zo(i,e,t,n,r,s){const a=i[t];if(a!=null){const o=Ue(a,"default");if(o&&n===void 0){const c=a.default;if(a.type!==Function&&Re(c)){const{propsDefaults:l}=r;t in l?n=l[t]:(ki(r),n=l[t]=c.call(null,e),ti())}else n=c}a[0]&&(s&&!o?n=!1:a[1]&&(n===""||n===Xi(t))&&(n=!0))}return n}function bu(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,a={},o=[];let c=!1;if(!Re(i)){const u=f=>{c=!0;const[h,m]=bu(f,e,!0);dt(a,h),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!c)return n.set(i,Fi),Fi;if(Ce(s))for(let u=0;u<s.length;u++){const f=Gi(s[u]);Ha(f)&&(a[f]=Xe)}else if(s)for(const u in s){const f=Gi(u);if(Ha(f)){const h=s[u],m=a[f]=Ce(h)||Re(h)?{type:h}:h;if(m){const g=ja(Boolean,m.type),p=ja(String,m.type);m[0]=g>-1,m[1]=p<0||g<p,(g>-1||Ue(m,"default"))&&o.push(f)}}}const l=[a,o];return n.set(i,l),l}function Ha(i){return i[0]!=="$"}function Wa(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function qa(i,e){return Wa(i)===Wa(e)}function ja(i,e){return Ce(e)?e.findIndex(t=>qa(t,i)):Re(e)&&qa(e,i)?0:-1}const Su=i=>i[0]==="_"||i==="$stable",ma=i=>Ce(i)?i.map(Qt):[Qt(i)],qh=(i,e,t)=>{if(e._n)return e;const n=dh((...r)=>ma(e(...r)),t);return n._c=!1,n},wu=(i,e,t)=>{const n=i._ctx;for(const r in i){if(Su(r))continue;const s=i[r];if(Re(s))e[r]=qh(r,s,n);else if(s!=null){const a=ma(s);e[r]=()=>a}}},Eu=(i,e)=>{const t=ma(e);i.slots.default=()=>t},jh=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=We(e),as(e,"_",t)):wu(e,i.slots={})}else i.slots={},e&&Eu(i,e);as(i.slots,Ss,1)},Xh=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,a=Xe;if(n.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(dt(r,e),!t&&o===1&&delete r._):(s=!e.$stable,wu(e,r)),a=e}else e&&(Eu(i,e),a={default:1});if(s)for(const o in r)!Su(o)&&!(o in a)&&delete r[o]};function Tu(){return{app:null,config:{isNativeTag:xf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yh=0;function $h(i,e){return function(n,r=null){Re(n)||(n=Object.assign({},n)),r!=null&&!ut(r)&&(r=null);const s=Tu(),a=new Set;let o=!1;const c=s.app={_uid:Yh++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:_d,get config(){return s.config},set config(l){},use(l,...u){return a.has(l)||(l&&Re(l.install)?(a.add(l),l.install(c,...u)):Re(l)&&(a.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,f){if(!o){const h=mn(n,r);return h.appContext=s,u&&e?e(h,l):i(h,l,f),o=!0,c._container=l,l.__vue_app__=c,ws(h.component)||h.component.proxy}},unmount(){o&&(i(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}function Uo(i,e,t,n,r=!1){if(Ce(i)){i.forEach((h,m)=>Uo(h,e&&(Ce(e)?e[m]:e),t,n,r));return}if(is(n)&&!r)return;const s=n.shapeFlag&4?ws(n.component)||n.component.proxy:n.el,a=r?null:s,{i:o,r:c}=i,l=e&&e.r,u=o.refs===Xe?o.refs={}:o.refs,f=o.setupState;if(l!=null&&l!==c&&(ct(l)?(u[l]=null,Ue(f,l)&&(f[l]=null)):lt(l)&&(l.value=null)),Re(c))In(c,o,12,[a,u]);else{const h=ct(c),m=lt(c);if(h||m){const g=()=>{if(i.f){const p=h?u[c]:c.value;r?Ce(p)&&ta(p,s):Ce(p)?p.includes(s)||p.push(s):h?(u[c]=[s],Ue(f,c)&&(f[c]=u[c])):(c.value=[s],i.k&&(u[i.k]=c.value))}else h?(u[c]=a,Ue(f,c)&&(f[c]=a)):m&&(c.value=a,i.k&&(u[i.k]=a))};a?(g.id=-1,vt(g,t)):g()}}}const vt=vh;function Zh(i){return Kh(i)}function Kh(i,e){const t=wf();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:a,createText:o,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Xt,cloneNode:g,insertStaticContent:p}=i,d=(E,P,k,Z=null,J=null,ie=null,re=!1,ae=null,ue=!!P.dynamicChildren)=>{if(E===P)return;E&&!jn(E,P)&&(Z=Se(E),se(E,J,ie,!0),E=null),P.patchFlag===-2&&(ue=!1,P.dynamicChildren=null);const{type:M,ref:x,shapeFlag:R}=P;switch(M){case ga:_(E,P,k,Z);break;case pn:S(E,P,k,Z);break;case Us:E==null&&A(P,k,Z,re);break;case Jt:oe(E,P,k,Z,J,ie,re,ae,ue);break;default:R&1?C(E,P,k,Z,J,ie,re,ae,ue):R&6?N(E,P,k,Z,J,ie,re,ae,ue):(R&64||R&128)&&M.process(E,P,k,Z,J,ie,re,ae,ue,xe)}x!=null&&J&&Uo(x,E&&E.ref,ie,P||E,!P)},_=(E,P,k,Z)=>{if(E==null)n(P.el=o(P.children),k,Z);else{const J=P.el=E.el;P.children!==E.children&&l(J,P.children)}},S=(E,P,k,Z)=>{E==null?n(P.el=c(P.children||""),k,Z):P.el=E.el},A=(E,P,k,Z)=>{[E.el,E.anchor]=p(E.children,P,k,Z,E.el,E.anchor)},w=({el:E,anchor:P},k,Z)=>{let J;for(;E&&E!==P;)J=h(E),n(E,k,Z),E=J;n(P,k,Z)},b=({el:E,anchor:P})=>{let k;for(;E&&E!==P;)k=h(E),r(E),E=k;r(P)},C=(E,P,k,Z,J,ie,re,ae,ue)=>{re=re||P.type==="svg",E==null?F(P,k,Z,J,ie,re,ae,ue):O(E,P,J,ie,re,ae,ue)},F=(E,P,k,Z,J,ie,re,ae)=>{let ue,M;const{type:x,props:R,shapeFlag:B,transition:X,patchFlag:ne,dirs:_e}=E;if(E.el&&g!==void 0&&ne===-1)ue=E.el=g(E.el);else{if(ue=E.el=a(E.type,ie,R&&R.is,R),B&8?u(ue,E.children):B&16&&L(E.children,ue,null,Z,J,ie&&x!=="foreignObject",re,ae),_e&&Un(E,null,Z,"created"),R){for(const q in R)q!=="value"&&!ts(q)&&s(ue,q,null,R[q],ie,E.children,Z,J,Pe);"value"in R&&s(ue,"value",null,R.value),(M=R.onVnodeBeforeMount)&&Zt(M,Z,E)}v(ue,E,E.scopeId,re,Z)}_e&&Un(E,null,Z,"beforeMount");const y=(!J||J&&!J.pendingBranch)&&X&&!X.persisted;y&&X.beforeEnter(ue),n(ue,P,k),((M=R&&R.onVnodeMounted)||y||_e)&&vt(()=>{M&&Zt(M,Z,E),y&&X.enter(ue),_e&&Un(E,null,Z,"mounted")},J)},v=(E,P,k,Z,J)=>{if(k&&m(E,k),Z)for(let ie=0;ie<Z.length;ie++)m(E,Z[ie]);if(J){let ie=J.subTree;if(P===ie){const re=J.vnode;v(E,re,re.scopeId,re.slotScopeIds,J.parent)}}},L=(E,P,k,Z,J,ie,re,ae,ue=0)=>{for(let M=ue;M<E.length;M++){const x=E[M]=ae?Dn(E[M]):Qt(E[M]);d(null,x,P,k,Z,J,ie,re,ae)}},O=(E,P,k,Z,J,ie,re)=>{const ae=P.el=E.el;let{patchFlag:ue,dynamicChildren:M,dirs:x}=P;ue|=E.patchFlag&16;const R=E.props||Xe,B=P.props||Xe;let X;k&&Bn(k,!1),(X=B.onVnodeBeforeUpdate)&&Zt(X,k,P,E),x&&Un(P,E,k,"beforeUpdate"),k&&Bn(k,!0);const ne=J&&P.type!=="foreignObject";if(M?z(E.dynamicChildren,M,ae,k,Z,ne,ie):re||G(E,P,ae,null,k,Z,ne,ie,!1),ue>0){if(ue&16)he(ae,P,R,B,k,Z,J);else if(ue&2&&R.class!==B.class&&s(ae,"class",null,B.class,J),ue&4&&s(ae,"style",R.style,B.style,J),ue&8){const _e=P.dynamicProps;for(let y=0;y<_e.length;y++){const q=_e[y],ce=R[q],pe=B[q];(pe!==ce||q==="value")&&s(ae,q,ce,pe,J,E.children,k,Z,Pe)}}ue&1&&E.children!==P.children&&u(ae,P.children)}else!re&&M==null&&he(ae,P,R,B,k,Z,J);((X=B.onVnodeUpdated)||x)&&vt(()=>{X&&Zt(X,k,P,E),x&&Un(P,E,k,"updated")},Z)},z=(E,P,k,Z,J,ie,re)=>{for(let ae=0;ae<P.length;ae++){const ue=E[ae],M=P[ae],x=ue.el&&(ue.type===Jt||!jn(ue,M)||ue.shapeFlag&70)?f(ue.el):k;d(ue,M,x,null,Z,J,ie,re,!0)}},he=(E,P,k,Z,J,ie,re)=>{if(k!==Z){for(const ae in Z){if(ts(ae))continue;const ue=Z[ae],M=k[ae];ue!==M&&ae!=="value"&&s(E,ae,M,ue,re,P.children,J,ie,Pe)}if(k!==Xe)for(const ae in k)!ts(ae)&&!(ae in Z)&&s(E,ae,k[ae],null,re,P.children,J,ie,Pe);"value"in Z&&s(E,"value",k.value,Z.value)}},oe=(E,P,k,Z,J,ie,re,ae,ue)=>{const M=P.el=E?E.el:o(""),x=P.anchor=E?E.anchor:o("");let{patchFlag:R,dynamicChildren:B,slotScopeIds:X}=P;X&&(ae=ae?ae.concat(X):X),E==null?(n(M,k,Z),n(x,k,Z),L(P.children,k,x,J,ie,re,ae,ue)):R>0&&R&64&&B&&E.dynamicChildren?(z(E.dynamicChildren,B,k,J,ie,re,ae),(P.key!=null||J&&P===J.subTree)&&Au(E,P,!0)):G(E,P,k,x,J,ie,re,ae,ue)},N=(E,P,k,Z,J,ie,re,ae,ue)=>{P.slotScopeIds=ae,E==null?P.shapeFlag&512?J.ctx.activate(P,k,Z,re,ue):te(P,k,Z,J,ie,re,ue):H(E,P,ue)},te=(E,P,k,Z,J,ie,re)=>{const ae=E.component=cd(E,Z,J);if(ys(E)&&(ae.ctx.renderer=xe),fd(ae),ae.asyncDep){if(J&&J.registerDep(ae,Y),!E.el){const ue=ae.subTree=mn(pn);S(null,ue,P,k)}return}Y(ae,E,P,k,J,ie,re)},H=(E,P,k)=>{const Z=P.component=E.component;if(gh(E,P,k))if(Z.asyncDep&&!Z.asyncResolved){W(Z,P,k);return}else Z.next=P,ah(Z.update),Z.update();else P.el=E.el,Z.vnode=P},Y=(E,P,k,Z,J,ie,re)=>{const ae=()=>{if(E.isMounted){let{next:x,bu:R,u:B,parent:X,vnode:ne}=E,_e=x,y;Bn(E,!1),x?(x.el=ne.el,W(E,x,re)):x=ne,R&&ns(R),(y=x.props&&x.props.onVnodeBeforeUpdate)&&Zt(y,X,x,ne),Bn(E,!0);const q=Fs(E),ce=E.subTree;E.subTree=q,d(ce,q,f(ce.el),Se(ce),E,J,ie),x.el=q.el,_e===null&&_h(E,q.el),B&&vt(B,J),(y=x.props&&x.props.onVnodeUpdated)&&vt(()=>Zt(y,X,x,ne),J)}else{let x;const{el:R,props:B}=P,{bm:X,m:ne,parent:_e}=E,y=is(P);if(Bn(E,!1),X&&ns(X),!y&&(x=B&&B.onVnodeBeforeMount)&&Zt(x,_e,P),Bn(E,!0),R&&Ae){const q=()=>{E.subTree=Fs(E),Ae(R,E.subTree,E,J,null)};y?P.type.__asyncLoader().then(()=>!E.isUnmounted&&q()):q()}else{const q=E.subTree=Fs(E);d(null,q,k,Z,E,J,ie),P.el=q.el}if(ne&&vt(ne,J),!y&&(x=B&&B.onVnodeMounted)){const q=P;vt(()=>Zt(x,_e,q),J)}(P.shapeFlag&256||_e&&is(_e.vnode)&&_e.vnode.shapeFlag&256)&&E.a&&vt(E.a,J),E.isMounted=!0,P=k=Z=null}},ue=E.effect=new sa(ae,()=>ou(M),E.scope),M=E.update=()=>ue.run();M.id=E.uid,Bn(E,!0),M()},W=(E,P,k)=>{P.component=E;const Z=E.vnode.props;E.vnode=P,E.next=null,Wh(E,P.props,Z,k),Xh(E,P.children,k),Yi(),xs(void 0,E.update),$i()},G=(E,P,k,Z,J,ie,re,ae,ue=!1)=>{const M=E&&E.children,x=E?E.shapeFlag:0,R=P.children,{patchFlag:B,shapeFlag:X}=P;if(B>0){if(B&128){fe(M,R,k,Z,J,ie,re,ae,ue);return}else if(B&256){K(M,R,k,Z,J,ie,re,ae,ue);return}}X&8?(x&16&&Pe(M,J,ie),R!==M&&u(k,R)):x&16?X&16?fe(M,R,k,Z,J,ie,re,ae,ue):Pe(M,J,ie,!0):(x&8&&u(k,""),X&16&&L(R,k,Z,J,ie,re,ae,ue))},K=(E,P,k,Z,J,ie,re,ae,ue)=>{E=E||Fi,P=P||Fi;const M=E.length,x=P.length,R=Math.min(M,x);let B;for(B=0;B<R;B++){const X=P[B]=ue?Dn(P[B]):Qt(P[B]);d(E[B],X,k,null,J,ie,re,ae,ue)}M>x?Pe(E,J,ie,!0,!1,R):L(P,k,Z,J,ie,re,ae,ue,R)},fe=(E,P,k,Z,J,ie,re,ae,ue)=>{let M=0;const x=P.length;let R=E.length-1,B=x-1;for(;M<=R&&M<=B;){const X=E[M],ne=P[M]=ue?Dn(P[M]):Qt(P[M]);if(jn(X,ne))d(X,ne,k,null,J,ie,re,ae,ue);else break;M++}for(;M<=R&&M<=B;){const X=E[R],ne=P[B]=ue?Dn(P[B]):Qt(P[B]);if(jn(X,ne))d(X,ne,k,null,J,ie,re,ae,ue);else break;R--,B--}if(M>R){if(M<=B){const X=B+1,ne=X<x?P[X].el:Z;for(;M<=B;)d(null,P[M]=ue?Dn(P[M]):Qt(P[M]),k,ne,J,ie,re,ae,ue),M++}}else if(M>B)for(;M<=R;)se(E[M],J,ie,!0),M++;else{const X=M,ne=M,_e=new Map;for(M=ne;M<=B;M++){const Ne=P[M]=ue?Dn(P[M]):Qt(P[M]);Ne.key!=null&&_e.set(Ne.key,M)}let y,q=0;const ce=B-ne+1;let pe=!1,me=0;const be=new Array(ce);for(M=0;M<ce;M++)be[M]=0;for(M=X;M<=R;M++){const Ne=E[M];if(q>=ce){se(Ne,J,ie,!0);continue}let D;if(Ne.key!=null)D=_e.get(Ne.key);else for(y=ne;y<=B;y++)if(be[y-ne]===0&&jn(Ne,P[y])){D=y;break}D===void 0?se(Ne,J,ie,!0):(be[D-ne]=M+1,D>=me?me=D:pe=!0,d(Ne,P[D],k,null,J,ie,re,ae,ue),q++)}const Fe=pe?Jh(be):Fi;for(y=Fe.length-1,M=ce-1;M>=0;M--){const Ne=ne+M,D=P[Ne],de=Ne+1<x?P[Ne+1].el:Z;be[M]===0?d(null,D,k,de,J,ie,re,ae,ue):pe&&(y<0||M!==Fe[y]?le(D,k,de,2):y--)}}},le=(E,P,k,Z,J=null)=>{const{el:ie,type:re,transition:ae,children:ue,shapeFlag:M}=E;if(M&6){le(E.component.subTree,P,k,Z);return}if(M&128){E.suspense.move(P,k,Z);return}if(M&64){re.move(E,P,k,xe);return}if(re===Jt){n(ie,P,k);for(let R=0;R<ue.length;R++)le(ue[R],P,k,Z);n(E.anchor,P,k);return}if(re===Us){w(E,P,k);return}if(Z!==2&&M&1&&ae)if(Z===0)ae.beforeEnter(ie),n(ie,P,k),vt(()=>ae.enter(ie),J);else{const{leave:R,delayLeave:B,afterLeave:X}=ae,ne=()=>n(ie,P,k),_e=()=>{R(ie,()=>{ne(),X&&X()})};B?B(ie,ne,_e):_e()}else n(ie,P,k)},se=(E,P,k,Z=!1,J=!1)=>{const{type:ie,props:re,ref:ae,children:ue,dynamicChildren:M,shapeFlag:x,patchFlag:R,dirs:B}=E;if(ae!=null&&Uo(ae,null,k,E,!0),x&256){P.ctx.deactivate(E);return}const X=x&1&&B,ne=!is(E);let _e;if(ne&&(_e=re&&re.onVnodeBeforeUnmount)&&Zt(_e,P,E),x&6)Q(E.component,k,Z);else{if(x&128){E.suspense.unmount(k,Z);return}X&&Un(E,null,P,"beforeUnmount"),x&64?E.type.remove(E,P,k,J,xe,Z):M&&(ie!==Jt||R>0&&R&64)?Pe(M,P,k,!1,!0):(ie===Jt&&R&384||!J&&x&16)&&Pe(ue,P,k),Z&&ye(E)}(ne&&(_e=re&&re.onVnodeUnmounted)||X)&&vt(()=>{_e&&Zt(_e,P,E),X&&Un(E,null,P,"unmounted")},k)},ye=E=>{const{type:P,el:k,anchor:Z,transition:J}=E;if(P===Jt){Ee(k,Z);return}if(P===Us){b(E);return}const ie=()=>{r(k),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(E.shapeFlag&1&&J&&!J.persisted){const{leave:re,delayLeave:ae}=J,ue=()=>re(k,ie);ae?ae(E.el,ie,ue):ue()}else ie()},Ee=(E,P)=>{let k;for(;E!==P;)k=h(E),r(E),E=k;r(P)},Q=(E,P,k)=>{const{bum:Z,scope:J,update:ie,subTree:re,um:ae}=E;Z&&ns(Z),J.stop(),ie&&(ie.active=!1,se(re,E,P,k)),ae&&vt(ae,P),vt(()=>{E.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},Pe=(E,P,k,Z=!1,J=!1,ie=0)=>{for(let re=ie;re<E.length;re++)se(E[re],P,k,Z,J)},Se=E=>E.shapeFlag&6?Se(E.component.subTree):E.shapeFlag&128?E.suspense.next():h(E.anchor||E.el),we=(E,P,k)=>{E==null?P._vnode&&se(P._vnode,null,null,!0):d(P._vnode||null,E,P,null,null,null,k),cu(),P._vnode=E},xe={p:d,um:se,m:le,r:ye,mt:te,mc:L,pc:G,pbc:z,n:Se,o:i};let Be,Ae;return e&&([Be,Ae]=e(xe)),{render:we,hydrate:Be,createApp:$h(we,Be)}}function Bn({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function Au(i,e,t=!1){const n=i.children,r=e.children;if(Ce(n)&&Ce(r))for(let s=0;s<n.length;s++){const a=n[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Dn(r[s]),o.el=a.el),t||Au(a,o))}}function Jh(i){const e=i.slice(),t=[0];let n,r,s,a,o;const c=i.length;for(n=0;n<c;n++){const l=i[n];if(l!==0){if(r=t[t.length-1],i[r]<l){e[n]=r,t.push(n);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,i[t[o]]<l?s=o+1:a=o;l<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const Qh=i=>i.__isTeleport,Jt=Symbol(void 0),ga=Symbol(void 0),pn=Symbol(void 0),Us=Symbol(void 0),fr=[];let qt=null;function _a(i=!1){fr.push(qt=i?null:[])}function ed(){fr.pop(),qt=fr[fr.length-1]||null}let _r=1;function Xa(i){_r+=i}function td(i){return i.dynamicChildren=_r>0?qt||Fi:null,ed(),_r>0&&qt&&qt.push(i),i}function xa(i,e,t,n,r,s){return td(st(i,e,t,n,r,s,!0))}function nd(i){return i?i.__v_isVNode===!0:!1}function jn(i,e){return i.type===e.type&&i.key===e.key}const Ss="__vInternal",Cu=({key:i})=>i!=null?i:null,rs=({ref:i,ref_key:e,ref_for:t})=>i!=null?ct(i)||lt(i)||Re(i)?{i:Wt,r:i,k:e,f:!!t}:i:null;function st(i,e=null,t=null,n=0,r=null,s=i===Jt?0:1,a=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Cu(e),ref:e&&rs(e),scopeId:Ms,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null};return o?(va(c,t),s&128&&i.normalize(c)):t&&(c.shapeFlag|=ct(t)?8:16),_r>0&&!a&&qt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&qt.push(c),c}const mn=id;function id(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Oh)&&(i=pn),nd(i)){const o=On(i,e,!0);return t&&va(o,t),_r>0&&!s&&qt&&(o.shapeFlag&6?qt[qt.indexOf(i)]=o:qt.push(o)),o.patchFlag|=-2,o}if(md(i)&&(i=i.__vccOpts),e){e=rd(e);let{class:o,style:c}=e;o&&!ct(o)&&(e.class=Qo(o)),ut(c)&&(eu(c)&&!Ce(c)&&(c=dt({},c)),e.style=Jo(c))}const a=ct(i)?1:xh(i)?128:Qh(i)?64:ut(i)?4:Re(i)?2:0;return st(i,e,t,n,r,a,s,!0)}function rd(i){return i?eu(i)||Ss in i?dt({},i):i:null}function On(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:a}=i,o=e?od(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:o,key:o&&Cu(o),ref:e&&e.ref?t&&r?Ce(r)?r.concat(rs(e)):[r,rs(e)]:rs(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Jt?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&On(i.ssContent),ssFallback:i.ssFallback&&On(i.ssFallback),el:i.el,anchor:i.anchor}}function sd(i=" ",e=0){return mn(ga,null,i,e)}function Qt(i){return i==null||typeof i=="boolean"?mn(pn):Ce(i)?mn(Jt,null,i.slice()):typeof i=="object"?Dn(i):mn(ga,null,String(i))}function Dn(i){return i.el===null||i.memo?i:On(i)}function va(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Ce(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),va(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Ss in e)?e._ctx=Wt:r===3&&Wt&&(Wt.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Re(e)?(e={default:e,_ctx:Wt},t=32):(e=String(e),n&64?(t=16,e=[sd(e)]):t=8);i.children=e,i.shapeFlag|=t}function od(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=Qo([e.class,n.class]));else if(r==="style")e.style=Jo([e.style,n.style]);else if(ds(r)){const s=e[r],a=n[r];a&&s!==a&&!(Ce(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=n[r])}return e}function Zt(i,e,t,n=null){Nt(i,e,7,[t,n])}const ad=Tu();let ld=0;function cd(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||ad,s={uid:ld++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ef(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bu(n,r),emitsOptions:fu(n,r),emit:null,emitted:null,propsDefaults:Xe,inheritAttrs:n.inheritAttrs,ctx:Xe,data:Xe,props:Xe,attrs:Xe,slots:Xe,refs:Xe,setupState:Xe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=uh.bind(null,s),i.ce&&i.ce(s),s}let at=null;const ud=()=>at||Wt,ki=i=>{at=i,i.scope.on()},ti=()=>{at&&at.scope.off(),at=null};function Lu(i){return i.vnode.shapeFlag&4}let xr=!1;function fd(i,e=!1){xr=e;const{props:t,children:n}=i.vnode,r=Lu(i);Hh(i,t,r,e),jh(i,n);const s=r?hd(i,e):void 0;return xr=!1,s}function hd(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=tu(new Proxy(i.ctx,zh));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?pd(i):null;ki(i),Yi();const s=In(n,i,0,[i.props,r]);if($i(),ti(),Bc(s)){if(s.then(ti,ti),e)return s.then(a=>{Ya(i,a,e)}).catch(a=>{_s(a,i,0)});i.asyncDep=s}else Ya(i,s,e)}else Pu(i,e)}function Ya(i,e,t){Re(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:ut(e)&&(i.setupState=ru(e)),Pu(i,t)}let $a;function Pu(i,e,t){const n=i.type;if(!i.render){if(!e&&$a&&!n.render){const r=n.template;if(r){const{isCustomElement:s,compilerOptions:a}=i.appContext.config,{delimiters:o,compilerOptions:c}=n,l=dt(dt({isCustomElement:s,delimiters:o},a),c);n.render=$a(r,l)}}i.render=n.render||Xt}ki(i),Yi(),Uh(i),$i(),ti()}function dd(i){return new Proxy(i.attrs,{get(e,t){return Tt(i,"get","$attrs"),e[t]}})}function pd(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=dd(i))},slots:i.slots,emit:i.emit,expose:e}}function ws(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(ru(tu(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in us)return us[t](i)}}))}function md(i){return Re(i)&&"__vccOpts"in i}const gd=(i,e)=>ih(i,e,xr),_d="3.2.37",xd="http://www.w3.org/2000/svg",Xn=typeof document<"u"?document:null,Za=Xn&&Xn.createElement("template"),vd={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?Xn.createElementNS(xd,i):Xn.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>Xn.createTextNode(i),createComment:i=>Xn.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Xn.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},cloneNode(i){const e=i.cloneNode(!0);return"_value"in i&&(e._value=i._value),e},insertStaticContent(i,e,t,n,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Za.innerHTML=n?`<svg>${i}</svg>`:i;const o=Za.content;if(n){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Md(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function yd(i,e,t){const n=i.style,r=ct(t);if(t&&!r){for(const s in t)Bo(n,s,t[s]);if(e&&!ct(e))for(const s in e)t[s]==null&&Bo(n,s,"")}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const Ka=/\s*!important$/;function Bo(i,e,t){if(Ce(t))t.forEach(n=>Bo(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=bd(i,e);Ka.test(t)?i.setProperty(Xi(n),t.replace(Ka,""),"important"):i[n]=t}}const Ja=["Webkit","Moz","ms"],Bs={};function bd(i,e){const t=Bs[e];if(t)return t;let n=Gi(e);if(n!=="filter"&&n in i)return Bs[e]=n;n=Vc(n);for(let r=0;r<Ja.length;r++){const s=Ja[r]+n;if(s in i)return Bs[e]=s}return e}const Qa="http://www.w3.org/1999/xlink";function Sd(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Qa,e.slice(6,e.length)):i.setAttributeNS(Qa,e,t);else{const s=pf(e);t==null||s&&!Nc(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function wd(i,e,t,n,r,s,a){if(e==="innerHTML"||e==="textContent"){n&&a(n,r,s),i[e]=t==null?"":t;return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const c=t==null?"":t;(i.value!==c||i.tagName==="OPTION")&&(i.value=c),t==null&&i.removeAttribute(e);return}let o=!1;if(t===""||t==null){const c=typeof i[e];c==="boolean"?t=Nc(t):t==null&&c==="string"?(t="",o=!0):c==="number"&&(t=0,o=!0)}try{i[e]=t}catch{}o&&i.removeAttribute(e)}const[Du,Ed]=(()=>{let i=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(i=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[i,e]})();let Go=0;const Td=Promise.resolve(),Ad=()=>{Go=0},Cd=()=>Go||(Td.then(Ad),Go=Du());function Di(i,e,t,n){i.addEventListener(e,t,n)}function Ld(i,e,t,n){i.removeEventListener(e,t,n)}function Pd(i,e,t,n,r=null){const s=i._vei||(i._vei={}),a=s[e];if(n&&a)a.value=n;else{const[o,c]=Dd(e);if(n){const l=s[e]=Rd(n,r);Di(i,o,l,c)}else a&&(Ld(i,o,a,c),s[e]=void 0)}}const el=/(?:Once|Passive|Capture)$/;function Dd(i){let e;if(el.test(i)){e={};let t;for(;t=i.match(el);)i=i.slice(0,i.length-t[0].length),e[t[0].toLowerCase()]=!0}return[Xi(i.slice(2)),e]}function Rd(i,e){const t=n=>{const r=n.timeStamp||Du();(Ed||r>=t.attached-1)&&Nt(Id(n,t.value),e,5,[n])};return t.value=i,t.attached=Cd(),t}function Id(i,e){if(Ce(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const tl=/^on[a-z]/,Fd=(i,e,t,n,r=!1,s,a,o,c)=>{e==="class"?Md(i,n,r):e==="style"?yd(i,t,n):ds(e)?ea(e)||Pd(i,e,t,n,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Nd(i,e,n,r))?wd(i,e,n,s,a,o,c):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Sd(i,e,n,r))};function Nd(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&tl.test(e)&&Re(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||tl.test(e)&&ct(t)?!1:e in i}const Od={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};wh.props;const nl=i=>{const e=i.props["onUpdate:modelValue"]||!1;return Ce(e)?t=>ns(e,t):e};function zd(i){i.target.composing=!0}function il(i){const e=i.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ud={created(i,{modifiers:{lazy:e,trim:t,number:n}},r){i._assign=nl(r);const s=n||r.props&&r.props.type==="number";Di(i,e?"change":"input",a=>{if(a.target.composing)return;let o=i.value;t&&(o=o.trim()),s&&(o=wo(o)),i._assign(o)}),t&&Di(i,"change",()=>{i.value=i.value.trim()}),e||(Di(i,"compositionstart",zd),Di(i,"compositionend",il),Di(i,"change",il))},mounted(i,{value:e}){i.value=e==null?"":e},beforeUpdate(i,{value:e,modifiers:{lazy:t,trim:n,number:r}},s){if(i._assign=nl(s),i.composing||document.activeElement===i&&i.type!=="range"&&(t||n&&i.value.trim()===e||(r||i.type==="number")&&wo(i.value)===e))return;const a=e==null?"":e;i.value!==a&&(i.value=a)}},Bd=dt({patchProp:Fd},vd);let rl;function Gd(){return rl||(rl=Zh(Bd))}const kd=(...i)=>{const e=Gd().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=Vd(n);if(!r)return;const s=e._component;!Re(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Vd(i){return ct(i)?document.querySelector(i):i}class sl{constructor(e){La(this,"steps",[]);const t=e.split(`
`);for(const n of t){const r=n.split(",");if(r.length===4)try{const s=r.map(a=>{const o=Number(a);if(isNaN(o))throw Error();return o});this.steps.push({time:s[0],gyro:{x:s[1],y:s[2],z:s[3]}})}catch{}}}}const Hd={id:"side-panel"},Wd=da({__name:"SidePanel",emits:["csvLoad"],setup(i,{emit:e}){const t=$n(),n=()=>{var a;(a=t.value)==null||a.click()},r=a=>{const o=a.target.files[0];o.text().then(c=>e("csvLoad",new sl(c),o.name)).catch(alert)},s=()=>{fetch("/flight-visualizer/sample.csv").then(a=>a.text()).then(a=>{e("csvLoad",new sl(a),"sample.csv")}).catch(alert)};return(a,o)=>(_a(),xa("div",Hd,[st("button",{class:"btn btn-primary rounded-0",onClick:n},"Open CSV"),st("button",{class:"btn btn-primary rounded-0 border-top border-dark",onClick:s},"Load Sample"),st("input",{ref_key:"inputButton",ref:t,type:"file",accept:".csv",hidden:"",onChange:r},null,544)]))}});const Ma=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},qd=Ma(Wd,[["__scopeId","data-v-2e649537"]]);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ya="143",di={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jd=0,ol=1,Xd=2,Ru=1,Yd=2,sr=3,vr=0,Yt=1,Vi=2,$d=1,Fn=0,Ui=1,al=2,ll=3,cl=4,Zd=5,Ri=100,Kd=101,Jd=102,ul=103,fl=104,Qd=200,ep=201,tp=202,np=203,Iu=204,Fu=205,ip=206,rp=207,sp=208,op=209,ap=210,lp=0,cp=1,up=2,ko=3,fp=4,hp=5,dp=6,pp=7,ba=0,mp=1,gp=2,gn=0,_p=1,xp=2,vp=3,Mp=4,yp=5,Nu=300,Hi=301,Wi=302,Vo=303,Ho=304,Es=306,Wo=1e3,Ht=1001,qo=1002,Mt=1003,hl=1004,dl=1005,Rt=1006,bp=1007,Ts=1008,ri=1009,Sp=1010,wp=1011,Ou=1012,Ep=1013,Kn=1014,Jn=1015,Mr=1016,Tp=1017,Ap=1018,Bi=1020,Cp=1021,Lp=1022,tn=1023,Pp=1024,Dp=1025,ni=1026,qi=1027,Rp=1028,Ip=1029,Fp=1030,Np=1031,Op=1033,Gs=33776,ks=33777,Vs=33778,Hs=33779,pl=35840,ml=35841,gl=35842,_l=35843,zp=36196,xl=37492,vl=37496,Ml=37808,yl=37809,bl=37810,Sl=37811,wl=37812,El=37813,Tl=37814,Al=37815,Cl=37816,Ll=37817,Pl=37818,Dl=37819,Rl=37820,Il=37821,Fl=36492,si=3e3,Ze=3001,Up=3200,Bp=3201,zu=0,Gp=1,fn="srgb",Qn="srgb-linear",Ws=7680,kp=519,Nl=35044,Ol="300 es",jo=1035;class ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qs=Math.PI/180,zl=180/Math.PI;function br(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ft[i&255]+ft[i>>8&255]+ft[i>>16&255]+ft[i>>24&255]+"-"+ft[e&255]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[t&63|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[n&255]+ft[n>>8&255]+ft[n>>16&255]+ft[n>>24&255]).toLowerCase()}function yt(i,e,t){return Math.max(e,Math.min(t,i))}function Vp(i,e){return(i%e+e)%e}function js(i,e,t){return(1-t)*i+t*e}function Ul(i){return(i&i-1)===0&&i!==0}function Xo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],m=n[5],g=n[8],p=r[0],d=r[3],_=r[6],S=r[1],A=r[4],w=r[7],b=r[2],C=r[5],F=r[8];return s[0]=a*p+o*S+c*b,s[3]=a*d+o*A+c*C,s[6]=a*_+o*w+c*F,s[1]=l*p+u*S+f*b,s[4]=l*d+u*A+f*C,s[7]=l*_+u*w+f*F,s[2]=h*p+m*S+g*b,s[5]=h*d+m*A+g*C,s[8]=h*_+m*w+g*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,h=o*c-u*s,m=l*s-a*c,g=t*f+n*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=f*p,e[1]=(r*l-u*n)*p,e[2]=(o*n-r*a)*p,e[3]=h*p,e[4]=(u*t-r*c)*p,e[5]=(r*s-o*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(a*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],a=r[3],o=r[6],c=r[1],l=r[4],u=r[7];return r[0]=t*s+n*c,r[3]=t*a+n*l,r[6]=t*o+n*u,r[1]=-n*s+t*c,r[4]=-n*a+t*l,r[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Uu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>65535)return!0;return!1}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Xs={[fn]:{[Qn]:ii},[Qn]:{[fn]:ss}},Ut={legacyMode:!0,get workingColorSpace(){return Qn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(Xs[e]&&Xs[e][t]!==void 0){const n=Xs[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},Bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tt={r:0,g:0,b:0},Bt={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function Ys(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Rr(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Qn){return this.r=e,this.g=t,this.b=n,Ut.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Qn){if(e=Vp(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ys(a,s,e+1/3),this.g=Ys(a,s,e),this.b=Ys(a,s,e-1/3)}return Ut.toWorkingColorSpace(this,r),this}setStyle(e,t=fn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ut.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ut.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const c=parseFloat(s[1])/360,l=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(c,l,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ut.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ut.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=fn){const n=Bu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return Ut.fromWorkingColorSpace(Rr(this,tt),e),yt(tt.r*255,0,255)<<16^yt(tt.g*255,0,255)<<8^yt(tt.b*255,0,255)<<0}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qn){Ut.fromWorkingColorSpace(Rr(this,tt),t);const n=tt.r,r=tt.g,s=tt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Qn){return Ut.fromWorkingColorSpace(Rr(this,tt),t),e.r=tt.r,e.g=tt.g,e.b=tt.b,e}getStyle(e=fn){return Ut.fromWorkingColorSpace(Rr(this,tt),e),e!==fn?`color(${e} ${tt.r} ${tt.g} ${tt.b})`:`rgb(${tt.r*255|0},${tt.g*255|0},${tt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Bt),Bt.h+=e,Bt.s+=t,Bt.l+=n,this.setHSL(Bt.h,Bt.s,Bt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bt),e.getHSL(Dr);const n=js(Bt.h,Dr.h,t),r=js(Bt.s,Dr.s,t),s=js(Bt.l,Dr.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}He.NAMES=Bu;let mi;class Gu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{mi===void 0&&(mi=yr("canvas")),mi.width=e.width,mi.height=e.height;const n=mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ii(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ii(t[n]/255)*255):t[n]=ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ku{constructor(e=null){this.isSource=!0,this.uuid=br(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push($s(r[a].image)):s.push($s(r[a]))}else s=$s(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function $s(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hp=0;class Ot extends ci{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Ht,r=Ht,s=Rt,a=Ts,o=tn,c=ri,l=1,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=br(),this.name="",this.source=new ku(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wo:e.x=e.x-Math.floor(e.x);break;case Ht:e.x=e.x<0?0:1;break;case qo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wo:e.y=e.y-Math.floor(e.y);break;case Ht:e.y=e.y<0?0:1;break;case qo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Nu;class nt{constructor(e=0,t=0,n=0,r=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],m=c[5],g=c[9],p=c[2],d=c[6],_=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(g+d)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,w=(m+1)/2,b=(_+1)/2,C=(u+h)/4,F=(f+p)/4,v=(g+d)/4;return A>w&&A>b?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=C/n,s=F/n):w>b?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=C/r,s=v/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=F/s,r=v/s),this.set(n,r,s,t),this}let S=Math.sqrt((d-g)*(d-g)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(d-g)/S,this.y=(f-p)/S,this.z=(h-u)/S,this.w=Math.acos((l+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oi extends ci{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Ot(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ku(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vu extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wp extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ai{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3];const h=s[a+0],m=s[a+1],g=s[a+2],p=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(f!==p||c!==h||l!==m||u!==g){let d=1-o;const _=c*h+l*m+u*g+f*p,S=_>=0?1:-1,A=1-_*_;if(A>Number.EPSILON){const b=Math.sqrt(A),C=Math.atan2(b,_*S);d=Math.sin(d*C)/b,o=Math.sin(o*C)/b}const w=o*S;if(c=c*d+h*w,l=l*d+m*w,u=u*d+g*w,f=f*d+p*w,d===1-o){const b=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=b,l*=b,u*=b,f*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[a],h=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*f+c*m-l*h,e[t+1]=c*g+u*h+l*f-o*m,e[t+2]=l*g+u*m+o*h-c*f,e[t+3]=u*g-o*f-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),f=o(s/2),h=c(n/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=h*u*f+l*m*g,this._y=l*m*f-h*u*g,this._z=l*u*g+h*m*f,this._w=l*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+l*m*g,this._y=l*m*f-h*u*g,this._z=l*u*g-h*m*f,this._w=l*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-l*m*g,this._y=l*m*f+h*u*g,this._z=l*u*g+h*m*f,this._w=l*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-l*m*g,this._y=l*m*f+h*u*g,this._z=l*u*g-h*m*f,this._w=l*u*f+h*m*g;break;case"YZX":this._x=h*u*f+l*m*g,this._y=l*m*f+h*u*g,this._z=l*u*g-h*m*f,this._w=l*u*f-h*m*g;break;case"XZY":this._x=h*u*f-l*m*g,this._y=l*m*f-h*u*g,this._z=l*u*g+h*m*f,this._w=l*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*r-o*n,u=c*n+o*t-s*r,f=c*r+s*n-a*t,h=-s*t-a*n-o*r;return this.x=l*c+h*-s+u*-o-f*-a,this.y=u*c+h*-a+f*-s-l*-o,this.z=f*c+h*-o+l*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zs.copy(this).projectOnVector(e),this.sub(Zs)}reflect(e){return this.sub(Zs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zs=new I,Bl=new ai;class Zi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],f=e[c+1],h=e[c+2];u<t&&(t=u),f<n&&(n=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,n,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),f=e.getY(c),h=e.getZ(c);u<t&&(t=u),f<n&&(n=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,n,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)Gn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Gn)}else n.boundingBox===null&&n.computeBoundingBox(),Ks.copy(n.boundingBox),Ks.applyMatrix4(e.matrixWorld),this.union(Ks);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),Ir.subVectors(this.max,er),gi.subVectors(e.a,er),_i.subVectors(e.b,er),xi.subVectors(e.c,er),Sn.subVectors(_i,gi),wn.subVectors(xi,_i),kn.subVectors(gi,xi);let t=[0,-Sn.z,Sn.y,0,-wn.z,wn.y,0,-kn.z,kn.y,Sn.z,0,-Sn.x,wn.z,0,-wn.x,kn.z,0,-kn.x,-Sn.y,Sn.x,0,-wn.y,wn.x,0,-kn.y,kn.x,0];return!Js(t,gi,_i,xi,Ir)||(t=[1,0,0,0,1,0,0,0,1],!Js(t,gi,_i,xi,Ir))?!1:(Fr.crossVectors(Sn,wn),t=[Fr.x,Fr.y,Fr.z],Js(t,gi,_i,xi,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Gn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sn=[new I,new I,new I,new I,new I,new I,new I,new I],Gn=new I,Ks=new Zi,gi=new I,_i=new I,xi=new I,Sn=new I,wn=new I,kn=new I,er=new I,Ir=new I,Fr=new I,Vn=new I;function Js(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Vn.fromArray(i,s);const o=r.x*Math.abs(Vn.x)+r.y*Math.abs(Vn.y)+r.z*Math.abs(Vn.z),c=e.dot(Vn),l=t.dot(Vn),u=n.dot(Vn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const qp=new Zi,Gl=new I,Nr=new I,Qs=new I;class Sr{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qp.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Qs.subVectors(e,this.center);const t=Qs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(Qs.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Nr.set(0,0,1).multiplyScalar(e.radius):Nr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Gl.copy(e.center).add(Nr)),this.expandByPoint(Gl.copy(e.center).sub(Nr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new I,eo=new I,Or=new I,En=new I,to=new I,zr=new I,no=new I;class Sa{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.direction).multiplyScalar(t).add(this.origin),on.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){eo.copy(e).add(t).multiplyScalar(.5),Or.copy(t).sub(e).normalize(),En.copy(this.origin).sub(eo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Or),o=En.dot(this.direction),c=-En.dot(Or),l=En.lengthSq(),u=Math.abs(1-a*a);let f,h,m,g;if(u>0)if(f=a*c-o,h=a*o-c,g=s*u,f>=0)if(h>=-g)if(h<=g){const p=1/u;f*=p,h*=p,m=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Or).multiplyScalar(h).add(eo),m}intersectSphere(e,t){on.subVectors(e.center,this.origin);const n=on.dot(this.direction),r=on.dot(on)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return o<0&&c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||n!==n)&&(n=s),(a<r||r!==r)&&(r=a),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,n,r,s){to.subVectors(t,e),zr.subVectors(n,e),no.crossVectors(to,zr);let a=this.direction.dot(no),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,e);const c=o*this.direction.dot(zr.crossVectors(En,zr));if(c<0)return null;const l=o*this.direction.dot(to.cross(En));if(l<0||c+l>a)return null;const u=-o*En.dot(no);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,a,o,c,l,u,f,h,m,g,p,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=l,_[6]=u,_[10]=f,_[14]=h,_[3]=m,_[7]=g,_[11]=p,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/vi.setFromMatrixColumn(e,0).length(),s=1/vi.setFromMatrixColumn(e,1).length(),a=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,g=o*u,p=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=m+g*l,t[5]=h-p*l,t[9]=-o*c,t[2]=p-h*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,m=c*f,g=l*u,p=l*f;t[0]=h+p*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=p+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,m=c*f,g=l*u,p=l*f;t[0]=h-p*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=p-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,m=a*f,g=o*u,p=o*f;t[0]=c*u,t[4]=g*l-m,t[8]=h*l+p,t[1]=c*f,t[5]=p*l+h,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,m=a*l,g=o*c,p=o*l;t[0]=c*u,t[4]=p-h*f,t[8]=g*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*f+g,t[10]=h-p*f}else if(e.order==="XZY"){const h=a*c,m=a*l,g=o*c,p=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+p,t[5]=a*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jp,e,Xp)}lookAt(e,t,n){const r=this.elements;return St.subVectors(e,t),St.lengthSq()===0&&(St.z=1),St.normalize(),Tn.crossVectors(n,St),Tn.lengthSq()===0&&(Math.abs(n.z)===1?St.x+=1e-4:St.z+=1e-4,St.normalize(),Tn.crossVectors(n,St)),Tn.normalize(),Ur.crossVectors(St,Tn),r[0]=Tn.x,r[4]=Ur.x,r[8]=St.x,r[1]=Tn.y,r[5]=Ur.y,r[9]=St.y,r[2]=Tn.z,r[6]=Ur.z,r[10]=St.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],m=n[13],g=n[2],p=n[6],d=n[10],_=n[14],S=n[3],A=n[7],w=n[11],b=n[15],C=r[0],F=r[4],v=r[8],L=r[12],O=r[1],z=r[5],he=r[9],oe=r[13],N=r[2],te=r[6],H=r[10],Y=r[14],W=r[3],G=r[7],K=r[11],fe=r[15];return s[0]=a*C+o*O+c*N+l*W,s[4]=a*F+o*z+c*te+l*G,s[8]=a*v+o*he+c*H+l*K,s[12]=a*L+o*oe+c*Y+l*fe,s[1]=u*C+f*O+h*N+m*W,s[5]=u*F+f*z+h*te+m*G,s[9]=u*v+f*he+h*H+m*K,s[13]=u*L+f*oe+h*Y+m*fe,s[2]=g*C+p*O+d*N+_*W,s[6]=g*F+p*z+d*te+_*G,s[10]=g*v+p*he+d*H+_*K,s[14]=g*L+p*oe+d*Y+_*fe,s[3]=S*C+A*O+w*N+b*W,s[7]=S*F+A*z+w*te+b*G,s[11]=S*v+A*he+w*H+b*K,s[15]=S*L+A*oe+w*Y+b*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],p=e[7],d=e[11],_=e[15];return g*(+s*c*f-r*l*f-s*o*h+n*l*h+r*o*m-n*c*m)+p*(+t*c*m-t*l*h+s*a*h-r*a*m+r*l*u-s*c*u)+d*(+t*l*f-t*o*m-s*a*f+n*a*m+s*o*u-n*l*u)+_*(-r*o*u-t*c*f+t*o*h+r*a*f-n*a*h+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],p=e[13],d=e[14],_=e[15],S=f*d*l-p*h*l+p*c*m-o*d*m-f*c*_+o*h*_,A=g*h*l-u*d*l-g*c*m+a*d*m+u*c*_-a*h*_,w=u*p*l-g*f*l+g*o*m-a*p*m-u*o*_+a*f*_,b=g*f*c-u*p*c-g*o*h+a*p*h+u*o*d-a*f*d,C=t*S+n*A+r*w+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/C;return e[0]=S*F,e[1]=(p*h*s-f*d*s-p*r*m+n*d*m+f*r*_-n*h*_)*F,e[2]=(o*d*s-p*c*s+p*r*l-n*d*l-o*r*_+n*c*_)*F,e[3]=(f*c*s-o*h*s-f*r*l+n*h*l+o*r*m-n*c*m)*F,e[4]=A*F,e[5]=(u*d*s-g*h*s+g*r*m-t*d*m-u*r*_+t*h*_)*F,e[6]=(g*c*s-a*d*s-g*r*l+t*d*l+a*r*_-t*c*_)*F,e[7]=(a*h*s-u*c*s+u*r*l-t*h*l-a*r*m+t*c*m)*F,e[8]=w*F,e[9]=(g*f*s-u*p*s-g*n*m+t*p*m+u*n*_-t*f*_)*F,e[10]=(a*p*s-g*o*s+g*n*l-t*p*l-a*n*_+t*o*_)*F,e[11]=(u*o*s-a*f*s-u*n*l+t*f*l+a*n*m-t*o*m)*F,e[12]=b*F,e[13]=(u*p*r-g*f*r+g*n*h-t*p*h-u*n*d+t*f*d)*F,e[14]=(g*o*r-a*p*r-g*n*c+t*p*c+a*n*d-t*o*d)*F,e[15]=(a*f*r-u*o*r+u*n*c-t*f*c-a*n*h+t*o*h)*F,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,h=s*l,m=s*u,g=s*f,p=a*u,d=a*f,_=o*f,S=c*l,A=c*u,w=c*f,b=n.x,C=n.y,F=n.z;return r[0]=(1-(p+_))*b,r[1]=(m+w)*b,r[2]=(g-A)*b,r[3]=0,r[4]=(m-w)*C,r[5]=(1-(h+_))*C,r[6]=(d+S)*C,r[7]=0,r[8]=(g+A)*F,r[9]=(d-S)*F,r[10]=(1-(h+p))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=vi.set(r[0],r[1],r[2]).length();const a=vi.set(r[4],r[5],r[6]).length(),o=vi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gt.copy(this);const l=1/s,u=1/a,f=1/o;return Gt.elements[0]*=l,Gt.elements[1]*=l,Gt.elements[2]*=l,Gt.elements[4]*=u,Gt.elements[5]*=u,Gt.elements[6]*=u,Gt.elements[8]*=f,Gt.elements[9]*=f,Gt.elements[10]*=f,t.setFromRotationMatrix(Gt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a){const o=this.elements,c=2*s/(t-e),l=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r),h=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=c,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=l,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,s,a){const o=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-s),f=(t+e)*c,h=(n+r)*l,m=(a+s)*u;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vi=new I,Gt=new Je,jp=new I(0,0,0),Xp=new I(1,1,1),Tn=new I,Ur=new I,St=new I,kl=new Je,Vl=new ai;class wr{constructor(e=0,t=0,n=0,r=wr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vl.setFromEuler(this),this.setFromQuaternion(Vl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}wr.DefaultOrder="XYZ";wr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Hu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yp=0;const Hl=new I,Mi=new ai,an=new Je,Br=new I,tr=new I,$p=new I,Zp=new ai,Wl=new I(1,0,0),ql=new I(0,1,0),jl=new I(0,0,1),Kp={type:"added"},Xl={type:"removed"};class pt extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DefaultUp.clone();const e=new I,t=new wr,n=new ai,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Je},normalMatrix:{value:new Ft}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=pt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(Wl,e)}rotateY(e){return this.rotateOnAxis(ql,e)}rotateZ(e){return this.rotateOnAxis(jl,e)}translateOnAxis(e,t){return Hl.copy(e).applyQuaternion(this.quaternion),this.position.add(Hl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wl,e)}translateY(e){return this.translateOnAxis(ql,e)}translateZ(e){return this.translateOnAxis(jl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Br.copy(e):Br.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(tr,Br,this.up):an.lookAt(Br,tr,this.up),this.quaternion.setFromRotationMatrix(an),r&&(an.extractRotation(r.matrixWorld),Mi.setFromRotationMatrix(an),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Kp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Xl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,e,$p),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,Zp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}pt.DefaultUp=new I(0,1,0);pt.DefaultMatrixAutoUpdate=!0;const kt=new I,ln=new I,io=new I,cn=new I,yi=new I,bi=new I,Yl=new I,ro=new I,so=new I,oo=new I;class dn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),kt.subVectors(e,t),r.cross(kt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){kt.subVectors(r,t),ln.subVectors(n,t),io.subVectors(e,t);const a=kt.dot(kt),o=kt.dot(ln),c=kt.dot(io),l=ln.dot(ln),u=ln.dot(io),f=a*l-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(l*c-o*u)*h,g=(a*u-o*c)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,cn),cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getUV(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,cn),c.set(0,0),c.addScaledVector(s,cn.x),c.addScaledVector(a,cn.y),c.addScaledVector(o,cn.z),c}static isFrontFacing(e,t,n,r){return kt.subVectors(n,t),ln.subVectors(e,t),kt.cross(ln).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),kt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return dn.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;yi.subVectors(r,n),bi.subVectors(s,n),ro.subVectors(e,n);const c=yi.dot(ro),l=bi.dot(ro);if(c<=0&&l<=0)return t.copy(n);so.subVectors(e,r);const u=yi.dot(so),f=bi.dot(so);if(u>=0&&f<=u)return t.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(yi,a);oo.subVectors(e,s);const m=yi.dot(oo),g=bi.dot(oo);if(g>=0&&m<=g)return t.copy(s);const p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(bi,o);const d=u*g-m*f;if(d<=0&&f-u>=0&&m-g>=0)return Yl.subVectors(s,r),o=(f-u)/(f-u+(m-g)),t.copy(r).addScaledVector(Yl,o);const _=1/(d+p+h);return a=p*_,o=h*_,t.copy(n).addScaledVector(yi,a).addScaledVector(bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Jp=0;class xn extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=br(),this.name="",this.type="Material",this.blending=Ui,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Iu,this.blendDst=Fu,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===$d;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==vr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wu extends xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const et=new I,Gr=new De;class nn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Nl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),a=new He),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),a=new De),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),a=new I),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),a=new nt),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gr.fromBufferAttribute(this,t),Gr.applyMatrix3(e),this.setXY(t,Gr.x,Gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyMatrix3(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyMatrix4(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyNormalMatrix(e),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.transformDirection(e),this.setXYZ(t,et.x,et.y,et.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class qu extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ju extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ot extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Qp=0;const Pt=new Je,ao=new pt,Si=new I,wt=new Zi,nr=new Zi,rt=new I;class zt extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=br(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uu(e)?ju:qu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ft().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,n){return Pt.makeTranslation(e,t,n),this.applyMatrix4(Pt),this}scale(e,t,n){return Pt.makeScale(e,t,n),this.applyMatrix4(Pt),this}lookAt(e){return ao.lookAt(e),ao.updateMatrix(),this.applyMatrix4(ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];wt.setFromBufferAttribute(s),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];nr.setFromBufferAttribute(o),this.morphTargetsRelative?(rt.addVectors(wt.min,nr.min),wt.expandByPoint(rt),rt.addVectors(wt.max,nr.max),wt.expandByPoint(rt)):(wt.expandByPoint(nr.min),wt.expandByPoint(nr.max))}wt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)rt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(rt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)rt.fromBufferAttribute(o,l),c&&(Si.fromBufferAttribute(e,l),rt.add(Si)),r=Math.max(r,n.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let O=0;O<o;O++)l[O]=new I,u[O]=new I;const f=new I,h=new I,m=new I,g=new De,p=new De,d=new De,_=new I,S=new I;function A(O,z,he){f.fromArray(r,O*3),h.fromArray(r,z*3),m.fromArray(r,he*3),g.fromArray(a,O*2),p.fromArray(a,z*2),d.fromArray(a,he*2),h.sub(f),m.sub(f),p.sub(g),d.sub(g);const oe=1/(p.x*d.y-d.x*p.y);!isFinite(oe)||(_.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(oe),S.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(oe),l[O].add(_),l[z].add(_),l[he].add(_),u[O].add(S),u[z].add(S),u[he].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let O=0,z=w.length;O<z;++O){const he=w[O],oe=he.start,N=he.count;for(let te=oe,H=oe+N;te<H;te+=3)A(n[te+0],n[te+1],n[te+2])}const b=new I,C=new I,F=new I,v=new I;function L(O){F.fromArray(s,O*3),v.copy(F);const z=l[O];b.copy(z),b.sub(F.multiplyScalar(F.dot(z))).normalize(),C.crossVectors(v,z);const oe=C.dot(u[O])<0?-1:1;c[O*4]=b.x,c[O*4+1]=b.y,c[O*4+2]=b.z,c[O*4+3]=oe}for(let O=0,z=w.length;O<z;++O){const he=w[O],oe=he.start,N=he.count;for(let te=oe,H=oe+N;te<H;te+=3)L(n[te+0]),L(n[te+1]),L(n[te+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new I,s=new I,a=new I,o=new I,c=new I,l=new I,u=new I,f=new I;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,d),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,d),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const r in n){if(e.attributes[r]===void 0)continue;const a=n[r].array,o=e.attributes[r],c=o.array,l=o.itemSize*t,u=Math.min(c.length,a.length-l);for(let f=0,h=l;f<u;f++,h++)a[h]=c[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rt.fromBufferAttribute(e,t),rt.normalize(),e.setXYZ(t,rt.x,rt.y,rt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let m=0,g=0;for(let p=0,d=c.length;p<d;p++){o.isInterleavedBufferAttribute?m=c[p]*o.data.stride+o.offset:m=c[p]*u;for(let _=0;_<u;_++)h[g++]=l[m++]}return new nn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],m=e(h,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const $l=new Je,wi=new Sa,lo=new Sr,An=new I,Cn=new I,Ln=new I,co=new I,uo=new I,fo=new I,kr=new I,Vr=new I,Hr=new I,Wr=new De,qr=new De,jr=new De,ho=new I,Xr=new I;class jt extends pt{constructor(e=new zt,t=new Wu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(s),e.ray.intersectsSphere(lo)===!1)||($l.copy(s).invert(),wi.copy(e.ray).applyMatrix4($l),n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,c=n.attributes.position,l=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,h=n.attributes.uv2,m=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const _=m[p],S=r[_.materialIndex],A=Math.max(_.start,g.start),w=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let b=A,C=w;b<C;b+=3){const F=o.getX(b),v=o.getX(b+1),L=o.getX(b+2);a=Yr(this,S,e,wi,c,l,u,f,h,F,v,L),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const p=Math.max(0,g.start),d=Math.min(o.count,g.start+g.count);for(let _=p,S=d;_<S;_+=3){const A=o.getX(_),w=o.getX(_+1),b=o.getX(_+2);a=Yr(this,r,e,wi,c,l,u,f,h,A,w,b),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const _=m[p],S=r[_.materialIndex],A=Math.max(_.start,g.start),w=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let b=A,C=w;b<C;b+=3){const F=b,v=b+1,L=b+2;a=Yr(this,S,e,wi,c,l,u,f,h,F,v,L),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const p=Math.max(0,g.start),d=Math.min(c.count,g.start+g.count);for(let _=p,S=d;_<S;_+=3){const A=_,w=_+1,b=_+2;a=Yr(this,r,e,wi,c,l,u,f,h,A,w,b),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function em(i,e,t,n,r,s,a,o){let c;if(e.side===Yt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side!==Vi,o),c===null)return null;Xr.copy(o),Xr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Xr);return l<t.near||l>t.far?null:{distance:l,point:Xr.clone(),object:i}}function Yr(i,e,t,n,r,s,a,o,c,l,u,f){An.fromBufferAttribute(r,l),Cn.fromBufferAttribute(r,u),Ln.fromBufferAttribute(r,f);const h=i.morphTargetInfluences;if(s&&h){kr.set(0,0,0),Vr.set(0,0,0),Hr.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const d=h[g],_=s[g];d!==0&&(co.fromBufferAttribute(_,l),uo.fromBufferAttribute(_,u),fo.fromBufferAttribute(_,f),a?(kr.addScaledVector(co,d),Vr.addScaledVector(uo,d),Hr.addScaledVector(fo,d)):(kr.addScaledVector(co.sub(An),d),Vr.addScaledVector(uo.sub(Cn),d),Hr.addScaledVector(fo.sub(Ln),d)))}An.add(kr),Cn.add(Vr),Ln.add(Hr)}i.isSkinnedMesh&&(i.boneTransform(l,An),i.boneTransform(u,Cn),i.boneTransform(f,Ln));const m=em(i,e,t,n,An,Cn,Ln,ho);if(m){o&&(Wr.fromBufferAttribute(o,l),qr.fromBufferAttribute(o,u),jr.fromBufferAttribute(o,f),m.uv=dn.getUV(ho,An,Cn,Ln,Wr,qr,jr,new De)),c&&(Wr.fromBufferAttribute(c,l),qr.fromBufferAttribute(c,u),jr.fromBufferAttribute(c,f),m.uv2=dn.getUV(ho,An,Cn,Ln,Wr,qr,jr,new De));const g={a:l,b:u,c:f,normal:new I,materialIndex:0};dn.getNormal(An,Cn,Ln,g.normal),m.face=g}return m}class Er extends zt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(f,2));function g(p,d,_,S,A,w,b,C,F,v,L){const O=w/F,z=b/v,he=w/2,oe=b/2,N=C/2,te=F+1,H=v+1;let Y=0,W=0;const G=new I;for(let K=0;K<H;K++){const fe=K*z-oe;for(let le=0;le<te;le++){const se=le*O-he;G[p]=se*S,G[d]=fe*A,G[_]=N,l.push(G.x,G.y,G.z),G[p]=0,G[d]=0,G[_]=C>0?1:-1,u.push(G.x,G.y,G.z),f.push(le/F),f.push(1-K/v),Y+=1}}for(let K=0;K<v;K++)for(let fe=0;fe<F;fe++){const le=h+fe+te*K,se=h+fe+te*(K+1),ye=h+(fe+1)+te*(K+1),Ee=h+(fe+1)+te*K;c.push(le,se,Ee),c.push(se,ye,Ee),W+=6}o.addGroup(m,W,L),m+=W,h+=Y}}static fromJSON(e){return new Er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ji(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function ht(i){const e={};for(let t=0;t<i.length;t++){const n=ji(i[t]);for(const r in n)e[r]=n[r]}return e}function tm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}const nm={clone:ji,merge:ht};var im=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=im,this.fragmentShader=rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=tm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Xu extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class It extends Xu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zl*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ei=90,Ti=1;class sm extends pt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const r=new It(Ei,Ti,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new I(1,0,0)),this.add(r);const s=new It(Ei,Ti,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new I(-1,0,0)),this.add(s);const a=new It(Ei,Ti,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new I(0,1,0)),this.add(a);const o=new It(Ei,Ti,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new I(0,-1,0)),this.add(o);const c=new It(Ei,Ti,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new I(0,0,1)),this.add(c);const l=new It(Ei,Ti,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new I(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,a,o,c,l]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=gn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Yu extends Ot{constructor(e,t,n,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Hi,super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class om extends oi{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Yu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Er(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Fn});s.uniforms.tEquirect.value=t;const a=new jt(r,s),o=t.minFilter;return t.minFilter===Ts&&(t.minFilter=Rt),new sm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const po=new I,am=new I,lm=new Ft;class Wn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=po.subVectors(n,t).cross(am.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(po),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lm.getNormalMatrix(e),r=this.coplanarPoint(po).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Sr,$r=new I;class wa{constructor(e=new Wn,t=new Wn,n=new Wn,r=new Wn,s=new Wn,a=new Wn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],a=n[2],o=n[3],c=n[4],l=n[5],u=n[6],f=n[7],h=n[8],m=n[9],g=n[10],p=n[11],d=n[12],_=n[13],S=n[14],A=n[15];return t[0].setComponents(o-r,f-c,p-h,A-d).normalize(),t[1].setComponents(o+r,f+c,p+h,A+d).normalize(),t[2].setComponents(o+s,f+l,p+m,A+_).normalize(),t[3].setComponents(o-s,f-l,p-m,A-_).normalize(),t[4].setComponents(o-a,f-u,p-g,A-S).normalize(),t[5].setComponents(o+a,f+u,p+g,A+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if($r.x=r.normal.x>0?e.max.x:e.min.x,$r.y=r.normal.y>0?e.max.y:e.min.y,$r.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $u(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function cm(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,u){const f=l.array,h=l.usage,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,f,h),l.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,f){const h=u.array,m=u.updateRange;i.bindBuffer(f,l),m.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,r(l,u)):f.version<l.version&&(s(f.buffer,l,u),f.version=l.version)}return{get:a,remove:o,update:c}}class Ea extends zt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,f=e/o,h=t/c,m=[],g=[],p=[],d=[];for(let _=0;_<u;_++){const S=_*h-a;for(let A=0;A<l;A++){const w=A*f-s;g.push(w,-S,0),p.push(0,0,1),d.push(A/o),d.push(1-_/c)}}for(let _=0;_<c;_++)for(let S=0;S<o;S++){const A=S+l*_,w=S+l*(_+1),b=S+1+l*(_+1),C=S+1+l*_;m.push(A,w,C),m.push(w,b,C)}this.setIndex(m),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(p,3)),this.setAttribute("uv",new ot(d,2))}static fromJSON(e){return new Ea(e.width,e.height,e.widthSegments,e.heightSegments)}}var um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,fm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gm="vec3 transformed = vec3( position );",_m=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xm=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,vm=`#ifdef USE_IRIDESCENCE
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
#endif`,Mm=`#ifdef USE_BUMPMAP
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lm=`#define PI 3.141592653589793
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
}`,Pm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dm=`vec3 transformedNormal = objectNormal;
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
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Om="gl_FragColor = linearToOutputTexel( gl_FragColor );",zm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Um=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xm=`#ifdef USE_GRADIENTMAP
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
}`,Ym=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zm=`vec3 diffuse = vec3( 1.0 );
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
#endif`,Km=`uniform bool receiveShadow;
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
#endif`,Jm=`#if defined( USE_ENVMAP )
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
#endif`,Qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eg=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ng=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,ig=`PhysicalMaterial material;
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
#endif`,rg=`struct PhysicalMaterial {
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
}`,sg=`
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
#endif`,og=`#if defined( RE_IndirectDiffuse )
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
#endif`,ag=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,lg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ug=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_g=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vg=`#ifdef USE_MORPHNORMALS
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
#endif`,Mg=`#ifdef USE_MORPHTARGETS
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
#endif`,yg=`#ifdef USE_MORPHTARGETS
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
#endif`,bg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Sg=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ag=`#ifdef USE_NORMALMAP
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
#endif`,Cg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Dg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ig=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ug=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gg=`#ifdef USE_SHADOWMAP
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
#endif`,kg=`#ifdef USE_SHADOWMAP
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
#endif`,Vg=`#ifdef USE_SHADOWMAP
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
#endif`,Hg=`float getShadowMask() {
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
}`,Wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qg=`#ifdef USE_SKINNING
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
#endif`,jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
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
#endif`,Yg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jg=`#ifdef USE_TRANSMISSION
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
#endif`,Qg=`#ifdef USE_TRANSMISSION
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
#endif`,e_=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,t_=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,n_=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,i_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,r_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,s_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,o_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const a_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l_=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u_=`#include <envmap_common_pars_fragment>
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
}`,f_=`#include <common>
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
}`,h_=`#if DEPTH_PACKING == 3200
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
}`,d_=`#define DISTANCE
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
}`,p_=`#define DISTANCE
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
}`,m_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,__=`uniform float scale;
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
}`,x_=`uniform vec3 diffuse;
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
}`,v_=`#include <common>
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
}`,M_=`uniform vec3 diffuse;
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
}`,y_=`#define LAMBERT
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
}`,b_=`uniform vec3 diffuse;
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
}`,S_=`#define MATCAP
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
}`,w_=`#define MATCAP
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
}`,E_=`#define NORMAL
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
}`,T_=`#define NORMAL
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
}`,A_=`#define PHONG
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
}`,C_=`#define PHONG
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
}`,L_=`#define STANDARD
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
}`,P_=`#define STANDARD
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
}`,D_=`#define TOON
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
}`,R_=`#define TOON
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
}`,I_=`uniform float size;
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
}`,F_=`uniform vec3 diffuse;
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
}`,N_=`#include <common>
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
}`,O_=`uniform vec3 color;
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
}`,z_=`uniform float rotation;
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
}`,U_=`uniform vec3 diffuse;
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
}`,ze={alphamap_fragment:um,alphamap_pars_fragment:fm,alphatest_fragment:hm,alphatest_pars_fragment:dm,aomap_fragment:pm,aomap_pars_fragment:mm,begin_vertex:gm,beginnormal_vertex:_m,bsdfs:xm,iridescence_fragment:vm,bumpmap_pars_fragment:Mm,clipping_planes_fragment:ym,clipping_planes_pars_fragment:bm,clipping_planes_pars_vertex:Sm,clipping_planes_vertex:wm,color_fragment:Em,color_pars_fragment:Tm,color_pars_vertex:Am,color_vertex:Cm,common:Lm,cube_uv_reflection_fragment:Pm,defaultnormal_vertex:Dm,displacementmap_pars_vertex:Rm,displacementmap_vertex:Im,emissivemap_fragment:Fm,emissivemap_pars_fragment:Nm,encodings_fragment:Om,encodings_pars_fragment:zm,envmap_fragment:Um,envmap_common_pars_fragment:Bm,envmap_pars_fragment:Gm,envmap_pars_vertex:km,envmap_physical_pars_fragment:Jm,envmap_vertex:Vm,fog_vertex:Hm,fog_pars_vertex:Wm,fog_fragment:qm,fog_pars_fragment:jm,gradientmap_pars_fragment:Xm,lightmap_fragment:Ym,lightmap_pars_fragment:$m,lights_lambert_vertex:Zm,lights_pars_begin:Km,lights_toon_fragment:Qm,lights_toon_pars_fragment:eg,lights_phong_fragment:tg,lights_phong_pars_fragment:ng,lights_physical_fragment:ig,lights_physical_pars_fragment:rg,lights_fragment_begin:sg,lights_fragment_maps:og,lights_fragment_end:ag,logdepthbuf_fragment:lg,logdepthbuf_pars_fragment:cg,logdepthbuf_pars_vertex:ug,logdepthbuf_vertex:fg,map_fragment:hg,map_pars_fragment:dg,map_particle_fragment:pg,map_particle_pars_fragment:mg,metalnessmap_fragment:gg,metalnessmap_pars_fragment:_g,morphcolor_vertex:xg,morphnormal_vertex:vg,morphtarget_pars_vertex:Mg,morphtarget_vertex:yg,normal_fragment_begin:bg,normal_fragment_maps:Sg,normal_pars_fragment:wg,normal_pars_vertex:Eg,normal_vertex:Tg,normalmap_pars_fragment:Ag,clearcoat_normal_fragment_begin:Cg,clearcoat_normal_fragment_maps:Lg,clearcoat_pars_fragment:Pg,iridescence_pars_fragment:Dg,output_fragment:Rg,packing:Ig,premultiplied_alpha_fragment:Fg,project_vertex:Ng,dithering_fragment:Og,dithering_pars_fragment:zg,roughnessmap_fragment:Ug,roughnessmap_pars_fragment:Bg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:kg,shadowmap_vertex:Vg,shadowmask_pars_fragment:Hg,skinbase_vertex:Wg,skinning_pars_vertex:qg,skinning_vertex:jg,skinnormal_vertex:Xg,specularmap_fragment:Yg,specularmap_pars_fragment:$g,tonemapping_fragment:Zg,tonemapping_pars_fragment:Kg,transmission_fragment:Jg,transmission_pars_fragment:Qg,uv_pars_fragment:e_,uv_pars_vertex:t_,uv_vertex:n_,uv2_pars_fragment:i_,uv2_pars_vertex:r_,uv2_vertex:s_,worldpos_vertex:o_,background_vert:a_,background_frag:l_,cube_vert:c_,cube_frag:u_,depth_vert:f_,depth_frag:h_,distanceRGBA_vert:d_,distanceRGBA_frag:p_,equirect_vert:m_,equirect_frag:g_,linedashed_vert:__,linedashed_frag:x_,meshbasic_vert:v_,meshbasic_frag:M_,meshlambert_vert:y_,meshlambert_frag:b_,meshmatcap_vert:S_,meshmatcap_frag:w_,meshnormal_vert:E_,meshnormal_frag:T_,meshphong_vert:A_,meshphong_frag:C_,meshphysical_vert:L_,meshphysical_frag:P_,meshtoon_vert:D_,meshtoon_frag:R_,points_vert:I_,points_frag:F_,shadow_vert:N_,shadow_frag:O_,sprite_vert:z_,sprite_frag:U_},ge={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ft},uv2Transform:{value:new Ft},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ft}}},en={basic:{uniforms:ht([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:ht([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.fog,ge.lights,{emissive:{value:new He(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:ht([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:ht([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:ht([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new He(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:ht([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:ht([ge.points,ge.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:ht([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:ht([ge.common,ge.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:ht([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:ht([ge.sprite,ge.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},cube:{uniforms:ht([ge.envmap,{opacity:{value:1}}]),vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:ht([ge.common,ge.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:ht([ge.lights,ge.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};en.physical={uniforms:ht([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new De(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};function B_(i,e,t,n,r,s){const a=new He(0);let o=r===!0?0:1,c,l,u=null,f=0,h=null;function m(p,d){let _=!1,S=d.isScene===!0?d.background:null;S&&S.isTexture&&(S=e.get(S));const A=i.xr,w=A.getSession&&A.getSession();w&&w.environmentBlendMode==="additive"&&(S=null),S===null?g(a,o):S&&S.isColor&&(g(S,1),_=!0),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Es)?(l===void 0&&(l=new jt(new Er(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:ji(en.cube.uniforms),vertexShader:en.cube.vertexShader,fragmentShader:en.cube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,(u!==S||f!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,h=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new jt(new Ea(2,2),new li({name:"BackgroundMaterial",uniforms:ji(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,d){t.buffers.color.setClear(p.r,p.g,p.b,d,s)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),o=d,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,g(a,o)},render:m}}function G_(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=d(null);let l=c,u=!1;function f(N,te,H,Y,W){let G=!1;if(a){const K=p(Y,H,te);l!==K&&(l=K,m(l.object)),G=_(N,Y,H,W),G&&S(N,Y,H,W)}else{const K=te.wireframe===!0;(l.geometry!==Y.id||l.program!==H.id||l.wireframe!==K)&&(l.geometry=Y.id,l.program=H.id,l.wireframe=K,G=!0)}W!==null&&t.update(W,34963),(G||u)&&(u=!1,v(N,te,H,Y),W!==null&&i.bindBuffer(34963,t.get(W).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(N){return n.isWebGL2?i.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?i.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function p(N,te,H){const Y=H.wireframe===!0;let W=o[N.id];W===void 0&&(W={},o[N.id]=W);let G=W[te.id];G===void 0&&(G={},W[te.id]=G);let K=G[Y];return K===void 0&&(K=d(h()),G[Y]=K),K}function d(N){const te=[],H=[],Y=[];for(let W=0;W<r;W++)te[W]=0,H[W]=0,Y[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:H,attributeDivisors:Y,object:N,attributes:{},index:null}}function _(N,te,H,Y){const W=l.attributes,G=te.attributes;let K=0;const fe=H.getAttributes();for(const le in fe)if(fe[le].location>=0){const ye=W[le];let Ee=G[le];if(Ee===void 0&&(le==="instanceMatrix"&&N.instanceMatrix&&(Ee=N.instanceMatrix),le==="instanceColor"&&N.instanceColor&&(Ee=N.instanceColor)),ye===void 0||ye.attribute!==Ee||Ee&&ye.data!==Ee.data)return!0;K++}return l.attributesNum!==K||l.index!==Y}function S(N,te,H,Y){const W={},G=te.attributes;let K=0;const fe=H.getAttributes();for(const le in fe)if(fe[le].location>=0){let ye=G[le];ye===void 0&&(le==="instanceMatrix"&&N.instanceMatrix&&(ye=N.instanceMatrix),le==="instanceColor"&&N.instanceColor&&(ye=N.instanceColor));const Ee={};Ee.attribute=ye,ye&&ye.data&&(Ee.data=ye.data),W[le]=Ee,K++}l.attributes=W,l.attributesNum=K,l.index=Y}function A(){const N=l.newAttributes;for(let te=0,H=N.length;te<H;te++)N[te]=0}function w(N){b(N,0)}function b(N,te){const H=l.newAttributes,Y=l.enabledAttributes,W=l.attributeDivisors;H[N]=1,Y[N]===0&&(i.enableVertexAttribArray(N),Y[N]=1),W[N]!==te&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,te),W[N]=te)}function C(){const N=l.newAttributes,te=l.enabledAttributes;for(let H=0,Y=te.length;H<Y;H++)te[H]!==N[H]&&(i.disableVertexAttribArray(H),te[H]=0)}function F(N,te,H,Y,W,G){n.isWebGL2===!0&&(H===5124||H===5125)?i.vertexAttribIPointer(N,te,H,W,G):i.vertexAttribPointer(N,te,H,Y,W,G)}function v(N,te,H,Y){if(n.isWebGL2===!1&&(N.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const W=Y.attributes,G=H.getAttributes(),K=te.defaultAttributeValues;for(const fe in G){const le=G[fe];if(le.location>=0){let se=W[fe];if(se===void 0&&(fe==="instanceMatrix"&&N.instanceMatrix&&(se=N.instanceMatrix),fe==="instanceColor"&&N.instanceColor&&(se=N.instanceColor)),se!==void 0){const ye=se.normalized,Ee=se.itemSize,Q=t.get(se);if(Q===void 0)continue;const Pe=Q.buffer,Se=Q.type,we=Q.bytesPerElement;if(se.isInterleavedBufferAttribute){const xe=se.data,Be=xe.stride,Ae=se.offset;if(xe.isInstancedInterleavedBuffer){for(let E=0;E<le.locationSize;E++)b(le.location+E,xe.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let E=0;E<le.locationSize;E++)w(le.location+E);i.bindBuffer(34962,Pe);for(let E=0;E<le.locationSize;E++)F(le.location+E,Ee/le.locationSize,Se,ye,Be*we,(Ae+Ee/le.locationSize*E)*we)}else{if(se.isInstancedBufferAttribute){for(let xe=0;xe<le.locationSize;xe++)b(le.location+xe,se.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let xe=0;xe<le.locationSize;xe++)w(le.location+xe);i.bindBuffer(34962,Pe);for(let xe=0;xe<le.locationSize;xe++)F(le.location+xe,Ee/le.locationSize,Se,ye,Ee*we,Ee/le.locationSize*xe*we)}}else if(K!==void 0){const ye=K[fe];if(ye!==void 0)switch(ye.length){case 2:i.vertexAttrib2fv(le.location,ye);break;case 3:i.vertexAttrib3fv(le.location,ye);break;case 4:i.vertexAttrib4fv(le.location,ye);break;default:i.vertexAttrib1fv(le.location,ye)}}}}C()}function L(){he();for(const N in o){const te=o[N];for(const H in te){const Y=te[H];for(const W in Y)g(Y[W].object),delete Y[W];delete te[H]}delete o[N]}}function O(N){if(o[N.id]===void 0)return;const te=o[N.id];for(const H in te){const Y=te[H];for(const W in Y)g(Y[W].object),delete Y[W];delete te[H]}delete o[N.id]}function z(N){for(const te in o){const H=o[te];if(H[N.id]===void 0)continue;const Y=H[N.id];for(const W in Y)g(Y[W].object),delete Y[W];delete H[N.id]}}function he(){oe(),u=!0,l!==c&&(l=c,m(l.object))}function oe(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:he,resetDefaultState:oe,dispose:L,releaseStatesOfGeometry:O,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:w,disableUnusedAttributes:C}}function k_(i,e,t,n){const r=n.isWebGL2;let s;function a(l){s=l}function o(l,u){i.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,f){if(f===0)return;let h,m;if(r)h=i,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,l,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=c}function V_(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(F){if(F==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),h=i.getParameter(35660),m=i.getParameter(3379),g=i.getParameter(34076),p=i.getParameter(34921),d=i.getParameter(36347),_=i.getParameter(36348),S=i.getParameter(36349),A=h>0,w=a||e.has("OES_texture_float"),b=A&&w,C=a?i.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:A,floatFragmentTextures:w,floatVertexTextures:b,maxSamples:C}}function H_(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Wn,o=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const g=f.length!==0||h||n!==0||r;return r=h,t=u(f,m,0),n=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(f,h,m){const g=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,_=i.get(f);if(!r||g===null||g.length===0||s&&!d)s?u(null):l();else{const S=s?0:n,A=S*4;let w=_.clippingState||null;c.value=w,w=u(g,h,A,m);for(let b=0;b!==A;++b)w[b]=t[b];_.clippingState=w,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,g){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=c.value,g!==!0||d===null){const _=m+p*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(d===null||d.length<_)&&(d=new Float32Array(_));for(let A=0,w=m;A!==p;++A,w+=4)a.copy(f[A]).applyMatrix4(S,o),a.normal.toArray(d,w),d[w+3]=a.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function W_(i){let e=new WeakMap;function t(a,o){return o===Vo?a.mapping=Hi:o===Ho&&(a.mapping=Wi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Vo||o===Ho)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new om(c.height/2);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Zu extends Xu{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ii=4,Zl=[.125,.215,.35,.446,.526,.582],Yn=20,mo=new Zu,Kl=new He;let go=null;const qn=(1+Math.sqrt(5))/2,Ci=1/qn,Jl=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,qn,Ci),new I(0,qn,-Ci),new I(Ci,0,qn),new I(-Ci,0,qn),new I(qn,Ci,0),new I(-qn,Ci,0)];class Ql{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){go=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(go),e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===Wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),go=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:Mr,format:tn,encoding:si,depthBuffer:!1},r=ec(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ec(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=q_(s)),this._blurMaterial=j_(s,e,t)}return r}_compileMaterial(e){const t=new jt(this._lodPlanes[0],e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,n,r){const o=new It(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Kl),u.toneMapping=gn,u.autoClear=!1;const m=new Wu({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),g=new jt(new Er,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(Kl),p=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(o.up.set(0,c[_],0),o.lookAt(l[_],0,0)):S===1?(o.up.set(0,0,c[_]),o.lookAt(0,l[_],0)):(o.up.set(0,c[_],0),o.lookAt(0,0,l[_]));const A=this._cubeSize;Zr(r,S*A,_>2?A:0,A,A),u.setRenderTarget(r),p&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Hi||e.mapping===Wi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new jt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Zr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,mo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Jl[(r-1)%Jl.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new jt(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Yn-1),p=s/g,d=isFinite(s)?1+Math.floor(u*p):Yn;d>Yn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Yn}`);const _=[];let S=0;for(let F=0;F<Yn;++F){const v=F/p,L=Math.exp(-v*v/2);_.push(L),F===0?S+=L:F<d&&(S+=2*L)}for(let F=0;F<_.length;F++)_[F]=_[F]/S;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=_,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:A}=this;h.dTheta.value=g,h.mipInt.value=A-n;const w=this._sizeLods[r],b=3*w*(r>A-Ii?r-A+Ii:0),C=4*(this._cubeSize-w);Zr(t,b,C,3*w,2*w),c.setRenderTarget(t),c.render(f,mo)}}function q_(i){const e=[],t=[],n=[];let r=i;const s=i-Ii+1+Zl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-Ii?c=Zl[a-i+Ii-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,p=3,d=2,_=1,S=new Float32Array(p*g*m),A=new Float32Array(d*g*m),w=new Float32Array(_*g*m);for(let C=0;C<m;C++){const F=C%3*2/3-1,v=C>2?0:-1,L=[F,v,0,F+2/3,v,0,F+2/3,v+1,0,F,v,0,F+2/3,v+1,0,F,v+1,0];S.set(L,p*g*C),A.set(h,d*g*C);const O=[C,C,C,C,C,C];w.set(O,_*g*C)}const b=new zt;b.setAttribute("position",new nn(S,p)),b.setAttribute("uv",new nn(A,d)),b.setAttribute("faceIndex",new nn(w,_)),e.push(b),r>Ii&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ec(i,e,t){const n=new oi(i,e,t);return n.texture.mapping=Es,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function j_(i,e,t){const n=new Float32Array(Yn),r=new I(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function tc(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function nc(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Ta(){return`

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
	`}function X_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Vo||c===Ho,u=c===Hi||c===Wi;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Ql(i)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(l&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Ql(i));const h=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Y_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function $_(i,e,t,n){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const m=f.morphAttributes;for(const g in m){const p=m[g];for(let d=0,_=p.length;d<_;d++)e.update(p[d],34962)}}function l(f){const h=[],m=f.index,g=f.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let A=0,w=S.length;A<w;A+=3){const b=S[A+0],C=S[A+1],F=S[A+2];h.push(b,C,C,F,F,b)}}else{const S=g.array;p=g.version;for(let A=0,w=S.length/3-1;A<w;A+=3){const b=A+0,C=A+1,F=A+2;h.push(b,C,C,F,F,b)}}const d=new(Uu(h)?ju:qu)(h,1);d.version=p;const _=s.get(f);_&&e.remove(_),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Z_(i,e,t,n){const r=n.isWebGL2;let s;function a(h){s=h}let o,c;function l(h){o=h.type,c=h.bytesPerElement}function u(h,m){i.drawElements(s,m,o,h*c),t.update(m,s,1)}function f(h,m,g){if(g===0)return;let p,d;if(r)p=i,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,o,h*c,g),t.update(m,s,g)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=f}function K_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function J_(i,e){return i[0]-e[0]}function Q_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function _o(i,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),i.divideScalar(t)}function e0(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new nt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,f,h){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=p!==void 0?p.length:0;let _=s.get(u);if(_===void 0||_.count!==d){let H=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",H)};var g=H;_!==void 0&&_.texture.dispose();const w=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,F=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let O=0;w===!0&&(O=1),b===!0&&(O=2),C===!0&&(O=3);let z=u.attributes.position.count*O,he=1;z>e.maxTextureSize&&(he=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const oe=new Float32Array(z*he*4*d),N=new Vu(oe,z,he,d);N.type=Jn,N.needsUpdate=!0;const te=O*4;for(let Y=0;Y<d;Y++){const W=F[Y],G=v[Y],K=L[Y],fe=z*he*4*Y;for(let le=0;le<W.count;le++){const se=le*te;w===!0&&(a.fromBufferAttribute(W,le),W.normalized===!0&&_o(a,W),oe[fe+se+0]=a.x,oe[fe+se+1]=a.y,oe[fe+se+2]=a.z,oe[fe+se+3]=0),b===!0&&(a.fromBufferAttribute(G,le),G.normalized===!0&&_o(a,G),oe[fe+se+4]=a.x,oe[fe+se+5]=a.y,oe[fe+se+6]=a.z,oe[fe+se+7]=0),C===!0&&(a.fromBufferAttribute(K,le),K.normalized===!0&&_o(a,K),oe[fe+se+8]=a.x,oe[fe+se+9]=a.y,oe[fe+se+10]=a.z,oe[fe+se+11]=K.itemSize===4?a.w:1)}}_={count:d,texture:N,size:new De(z,he)},s.set(u,_),u.addEventListener("dispose",H)}let S=0;for(let w=0;w<m.length;w++)S+=m[w];const A=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(i,"morphTargetBaseInfluence",A),h.getUniforms().setValue(i,"morphTargetInfluences",m),h.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let d=n[u.id];if(d===void 0||d.length!==p){d=[];for(let b=0;b<p;b++)d[b]=[b,0];n[u.id]=d}for(let b=0;b<p;b++){const C=d[b];C[0]=b,C[1]=m[b]}d.sort(Q_);for(let b=0;b<8;b++)b<p&&d[b][1]?(o[b][0]=d[b][0],o[b][1]=d[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(J_);const _=u.morphAttributes.position,S=u.morphAttributes.normal;let A=0;for(let b=0;b<8;b++){const C=o[b],F=C[0],v=C[1];F!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+b)!==_[F]&&u.setAttribute("morphTarget"+b,_[F]),S&&u.getAttribute("morphNormal"+b)!==S[F]&&u.setAttribute("morphNormal"+b,S[F]),r[b]=v,A+=v):(_&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),S&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),r[b]=0)}const w=u.morphTargetsRelative?1:1-A;h.getUniforms().setValue(i,"morphTargetBaseInfluence",w),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function t0(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);return r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Ku=new Ot,Ju=new Vu,Qu=new Wp,ef=new Yu,ic=[],rc=[],sc=new Float32Array(16),oc=new Float32Array(9),ac=new Float32Array(4);function Ki(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ic[r];if(s===void 0&&(s=new Float32Array(r),ic[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function As(i,e){let t=rc[e];t===void 0&&(t=new Int32Array(e),rc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function n0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function i0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function r0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function s0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function o0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;ac.set(n),i.uniformMatrix2fv(this.addr,!1,ac),xt(t,n)}}function a0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;oc.set(n),i.uniformMatrix3fv(this.addr,!1,oc),xt(t,n)}}function l0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;sc.set(n),i.uniformMatrix4fv(this.addr,!1,sc),xt(t,n)}}function c0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function u0(i,e){const t=this.cache;_t(t,e)||(i.uniform2iv(this.addr,e),xt(t,e))}function f0(i,e){const t=this.cache;_t(t,e)||(i.uniform3iv(this.addr,e),xt(t,e))}function h0(i,e){const t=this.cache;_t(t,e)||(i.uniform4iv(this.addr,e),xt(t,e))}function d0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function p0(i,e){const t=this.cache;_t(t,e)||(i.uniform2uiv(this.addr,e),xt(t,e))}function m0(i,e){const t=this.cache;_t(t,e)||(i.uniform3uiv(this.addr,e),xt(t,e))}function g0(i,e){const t=this.cache;_t(t,e)||(i.uniform4uiv(this.addr,e),xt(t,e))}function _0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Ku,r)}function x0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Qu,r)}function v0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ef,r)}function M0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ju,r)}function y0(i){switch(i){case 5126:return n0;case 35664:return i0;case 35665:return r0;case 35666:return s0;case 35674:return o0;case 35675:return a0;case 35676:return l0;case 5124:case 35670:return c0;case 35667:case 35671:return u0;case 35668:case 35672:return f0;case 35669:case 35673:return h0;case 5125:return d0;case 36294:return p0;case 36295:return m0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return x0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return M0}}function b0(i,e){i.uniform1fv(this.addr,e)}function S0(i,e){const t=Ki(e,this.size,2);i.uniform2fv(this.addr,t)}function w0(i,e){const t=Ki(e,this.size,3);i.uniform3fv(this.addr,t)}function E0(i,e){const t=Ki(e,this.size,4);i.uniform4fv(this.addr,t)}function T0(i,e){const t=Ki(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function A0(i,e){const t=Ki(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function C0(i,e){const t=Ki(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function L0(i,e){i.uniform1iv(this.addr,e)}function P0(i,e){i.uniform2iv(this.addr,e)}function D0(i,e){i.uniform3iv(this.addr,e)}function R0(i,e){i.uniform4iv(this.addr,e)}function I0(i,e){i.uniform1uiv(this.addr,e)}function F0(i,e){i.uniform2uiv(this.addr,e)}function N0(i,e){i.uniform3uiv(this.addr,e)}function O0(i,e){i.uniform4uiv(this.addr,e)}function z0(i,e,t){const n=e.length,r=As(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Ku,r[s])}function U0(i,e,t){const n=e.length,r=As(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Qu,r[s])}function B0(i,e,t){const n=e.length,r=As(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||ef,r[s])}function G0(i,e,t){const n=e.length,r=As(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Ju,r[s])}function k0(i){switch(i){case 5126:return b0;case 35664:return S0;case 35665:return w0;case 35666:return E0;case 35674:return T0;case 35675:return A0;case 35676:return C0;case 5124:case 35670:return L0;case 35667:case 35671:return P0;case 35668:case 35672:return D0;case 35669:case 35673:return R0;case 5125:return I0;case 36294:return F0;case 36295:return N0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return G0}}class V0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=y0(t.type)}}class H0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=k0(t.type)}}class W0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const xo=/(\w+)(\])?(\[|\.)?/g;function lc(i,e){i.seq.push(e),i.map[e.id]=e}function q0(i,e,t){const n=i.name,r=n.length;for(xo.lastIndex=0;;){const s=xo.exec(n),a=xo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){lc(t,l===void 0?new V0(o,i,e):new H0(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new W0(o),lc(t,f)),t=f}}}class os{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);q0(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function cc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let j0=0;function X0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Y0(i){switch(i){case si:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function uc(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+X0(i.getShaderSource(e),a)}else return r}function $0(i,e){const t=Y0(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Z0(i,e){let t;switch(e){case _p:t="Linear";break;case xp:t="Reinhard";break;case vp:t="OptimizedCineon";break;case Mp:t="ACESFilmic";break;case yp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function K0(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(or).join(`
`)}function J0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Q0(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function or(i){return i!==""}function fc(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(i){return i.replace(ex,tx)}function tx(i,e){const t=ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Yo(t)}const nx=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dc(i){return i.replace(ix,tf).replace(nx,rx)}function rx(i,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),tf(i,e,t,n)}function tf(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ru?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===sr&&(e="SHADOWMAP_TYPE_VSM"),e}function ox(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hi:case Wi:e="ENVMAP_TYPE_CUBE";break;case Es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ax(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Wi:e="ENVMAP_MODE_REFRACTION";break}return e}function lx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ba:e="ENVMAP_BLENDING_MULTIPLY";break;case mp:e="ENVMAP_BLENDING_MIX";break;case gp:e="ENVMAP_BLENDING_ADD";break}return e}function cx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ux(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=sx(t),l=ox(t),u=ax(t),f=lx(t),h=cx(t),m=t.isWebGL2?"":K0(t),g=J0(s),p=r.createProgram();let d,_,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(or).join(`
`),d.length>0&&(d+=`
`),_=[m,g].filter(or).join(`
`),_.length>0&&(_+=`
`)):(d=[pc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),_=[m,pc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gn?"#define TONE_MAPPING":"",t.toneMapping!==gn?ze.tonemapping_pars_fragment:"",t.toneMapping!==gn?Z0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.encodings_pars_fragment,$0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(or).join(`
`)),a=Yo(a),a=fc(a,t),a=hc(a,t),o=Yo(o),o=fc(o,t),o=hc(o,t),a=dc(a),o=dc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const A=S+d+a,w=S+_+o,b=cc(r,35633,A),C=cc(r,35632,w);if(r.attachShader(p,b),r.attachShader(p,C),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),i.debug.checkShaderErrors){const L=r.getProgramInfoLog(p).trim(),O=r.getShaderInfoLog(b).trim(),z=r.getShaderInfoLog(C).trim();let he=!0,oe=!0;if(r.getProgramParameter(p,35714)===!1){he=!1;const N=uc(r,b,"vertex"),te=uc(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+L+`
`+N+`
`+te)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(O===""||z==="")&&(oe=!1);oe&&(this.diagnostics={runnable:he,programLog:L,vertexShader:{log:O,prefix:d},fragmentShader:{log:z,prefix:_}})}r.deleteShader(b),r.deleteShader(C);let F;this.getUniforms=function(){return F===void 0&&(F=new os(r,p)),F};let v;return this.getAttributes=function(){return v===void 0&&(v=Q0(r,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=j0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=C,this}let fx=0;class hx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new dx(e);t.set(e,n)}return t.get(e)}}class dx{constructor(e){this.id=fx++,this.code=e,this.usedTimes=0}}function px(i,e,t,n,r,s,a){const o=new Hu,c=new hx,l=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,L,O,z,he){const oe=z.fog,N=he.geometry,te=v.isMeshStandardMaterial?z.environment:null,H=(v.isMeshStandardMaterial?t:e).get(v.envMap||te),Y=!!H&&H.mapping===Es?H.image.height:null,W=g[v.type];v.precision!==null&&(m=r.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const G=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,K=G!==void 0?G.length:0;let fe=0;N.morphAttributes.position!==void 0&&(fe=1),N.morphAttributes.normal!==void 0&&(fe=2),N.morphAttributes.color!==void 0&&(fe=3);let le,se,ye,Ee;if(W){const Be=en[W];le=Be.vertexShader,se=Be.fragmentShader}else le=v.vertexShader,se=v.fragmentShader,c.update(v),ye=c.getVertexShaderID(v),Ee=c.getFragmentShaderID(v);const Q=i.getRenderTarget(),Pe=v.alphaTest>0,Se=v.clearcoat>0,we=v.iridescence>0;return{isWebGL2:u,shaderID:W,shaderName:v.type,vertexShader:le,fragmentShader:se,defines:v.defines,customVertexShaderID:ye,customFragmentShaderID:Ee,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:he.isInstancedMesh===!0,instancingColor:he.isInstancedMesh===!0&&he.instanceColor!==null,supportsVertexTextures:h,outputEncoding:Q===null?i.outputEncoding:Q.isXRRenderTarget===!0?Q.texture.encoding:si,map:!!v.map,matcap:!!v.matcap,envMap:!!H,envMapMode:H&&H.mapping,envMapCubeUVHeight:Y,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Gp,tangentSpaceNormalMap:v.normalMapType===zu,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ze,clearcoat:Se,clearcoatMap:Se&&!!v.clearcoatMap,clearcoatRoughnessMap:Se&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:Se&&!!v.clearcoatNormalMap,iridescence:we,iridescenceMap:we&&!!v.iridescenceMap,iridescenceThicknessMap:we&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Ui,alphaMap:!!v.alphaMap,alphaTest:Pe,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!N.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!oe,useFog:v.fog===!0,fogExp2:oe&&oe.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:f,skinning:he.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:fe,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:gn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Vi,flipSided:v.side===Yt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const L=[];if(v.shaderID?L.push(v.shaderID):(L.push(v.customVertexShaderID),L.push(v.customFragmentShaderID)),v.defines!==void 0)for(const O in v.defines)L.push(O),L.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(_(L,v),S(L,v),L.push(i.outputEncoding)),L.push(v.customProgramCacheKey),L.join()}function _(v,L){v.push(L.precision),v.push(L.outputEncoding),v.push(L.envMapMode),v.push(L.envMapCubeUVHeight),v.push(L.combine),v.push(L.vertexUvs),v.push(L.fogExp2),v.push(L.sizeAttenuation),v.push(L.morphTargetsCount),v.push(L.morphAttributeCount),v.push(L.numDirLights),v.push(L.numPointLights),v.push(L.numSpotLights),v.push(L.numHemiLights),v.push(L.numRectAreaLights),v.push(L.numDirLightShadows),v.push(L.numPointLightShadows),v.push(L.numSpotLightShadows),v.push(L.shadowMapType),v.push(L.toneMapping),v.push(L.numClippingPlanes),v.push(L.numClipIntersection),v.push(L.depthPacking)}function S(v,L){o.disableAll(),L.isWebGL2&&o.enable(0),L.supportsVertexTextures&&o.enable(1),L.instancing&&o.enable(2),L.instancingColor&&o.enable(3),L.map&&o.enable(4),L.matcap&&o.enable(5),L.envMap&&o.enable(6),L.lightMap&&o.enable(7),L.aoMap&&o.enable(8),L.emissiveMap&&o.enable(9),L.bumpMap&&o.enable(10),L.normalMap&&o.enable(11),L.objectSpaceNormalMap&&o.enable(12),L.tangentSpaceNormalMap&&o.enable(13),L.clearcoat&&o.enable(14),L.clearcoatMap&&o.enable(15),L.clearcoatRoughnessMap&&o.enable(16),L.clearcoatNormalMap&&o.enable(17),L.iridescence&&o.enable(18),L.iridescenceMap&&o.enable(19),L.iridescenceThicknessMap&&o.enable(20),L.displacementMap&&o.enable(21),L.specularMap&&o.enable(22),L.roughnessMap&&o.enable(23),L.metalnessMap&&o.enable(24),L.gradientMap&&o.enable(25),L.alphaMap&&o.enable(26),L.alphaTest&&o.enable(27),L.vertexColors&&o.enable(28),L.vertexAlphas&&o.enable(29),L.vertexUvs&&o.enable(30),L.vertexTangents&&o.enable(31),L.uvsVertexOnly&&o.enable(32),L.fog&&o.enable(33),v.push(o.mask),o.disableAll(),L.useFog&&o.enable(0),L.flatShading&&o.enable(1),L.logarithmicDepthBuffer&&o.enable(2),L.skinning&&o.enable(3),L.morphTargets&&o.enable(4),L.morphNormals&&o.enable(5),L.morphColors&&o.enable(6),L.premultipliedAlpha&&o.enable(7),L.shadowMapEnabled&&o.enable(8),L.physicallyCorrectLights&&o.enable(9),L.doubleSided&&o.enable(10),L.flipSided&&o.enable(11),L.useDepthPacking&&o.enable(12),L.dithering&&o.enable(13),L.specularIntensityMap&&o.enable(14),L.specularColorMap&&o.enable(15),L.transmission&&o.enable(16),L.transmissionMap&&o.enable(17),L.thicknessMap&&o.enable(18),L.sheen&&o.enable(19),L.sheenColorMap&&o.enable(20),L.sheenRoughnessMap&&o.enable(21),L.decodeVideoTexture&&o.enable(22),L.opaque&&o.enable(23),v.push(o.mask)}function A(v){const L=g[v.type];let O;if(L){const z=en[L];O=nm.clone(z.uniforms)}else O=v.uniforms;return O}function w(v,L){let O;for(let z=0,he=l.length;z<he;z++){const oe=l[z];if(oe.cacheKey===L){O=oe,++O.usedTimes;break}}return O===void 0&&(O=new ux(i,L,v,s),l.push(O)),O}function b(v){if(--v.usedTimes===0){const L=l.indexOf(v);l[L]=l[l.length-1],l.pop(),v.destroy()}}function C(v){c.remove(v)}function F(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:A,acquireProgram:w,releaseProgram:b,releaseShaderCache:C,programs:l,dispose:F}}function mx(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function gx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function mc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,h,m,g,p,d){let _=i[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:p,group:d},i[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=p,_.group=d),e++,_}function o(f,h,m,g,p,d){const _=a(f,h,m,g,p,d);m.transmission>0?n.push(_):m.transparent===!0?r.push(_):t.push(_)}function c(f,h,m,g,p,d){const _=a(f,h,m,g,p,d);m.transmission>0?n.unshift(_):m.transparent===!0?r.unshift(_):t.unshift(_)}function l(f,h){t.length>1&&t.sort(f||gx),n.length>1&&n.sort(h||mc),r.length>1&&r.sort(h||mc)}function u(){for(let f=e,h=i.length;f<h;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function _x(){let i=new WeakMap;function e(n,r){let s;return i.has(n)===!1?(s=new gc,i.set(n,[s])):r>=i.get(n).length?(s=new gc,i.get(n).push(s)):s=i.get(n)[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function xx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new He};break;case"SpotLight":t={position:new I,direction:new I,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function vx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Mx=0;function yx(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function bx(i,e){const t=new xx,n=vx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,a=new Je,o=new Je;function c(u,f){let h=0,m=0,g=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let p=0,d=0,_=0,S=0,A=0,w=0,b=0,C=0;u.sort(yx);const F=f!==!0?Math.PI:1;for(let L=0,O=u.length;L<O;L++){const z=u[L],he=z.color,oe=z.intensity,N=z.distance,te=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=he.r*oe*F,m+=he.g*oe*F,g+=he.b*oe*F;else if(z.isLightProbe)for(let H=0;H<9;H++)r.probe[H].addScaledVector(z.sh.coefficients[H],oe);else if(z.isDirectionalLight){const H=t.get(z);if(H.color.copy(z.color).multiplyScalar(z.intensity*F),z.castShadow){const Y=z.shadow,W=n.get(z);W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,r.directionalShadow[p]=W,r.directionalShadowMap[p]=te,r.directionalShadowMatrix[p]=z.shadow.matrix,w++}r.directional[p]=H,p++}else if(z.isSpotLight){const H=t.get(z);if(H.position.setFromMatrixPosition(z.matrixWorld),H.color.copy(he).multiplyScalar(oe*F),H.distance=N,H.coneCos=Math.cos(z.angle),H.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),H.decay=z.decay,z.castShadow){const Y=z.shadow,W=n.get(z);W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,r.spotShadow[_]=W,r.spotShadowMap[_]=te,r.spotShadowMatrix[_]=z.shadow.matrix,C++}r.spot[_]=H,_++}else if(z.isRectAreaLight){const H=t.get(z);H.color.copy(he).multiplyScalar(oe),H.halfWidth.set(z.width*.5,0,0),H.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=H,S++}else if(z.isPointLight){const H=t.get(z);if(H.color.copy(z.color).multiplyScalar(z.intensity*F),H.distance=z.distance,H.decay=z.decay,z.castShadow){const Y=z.shadow,W=n.get(z);W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,r.pointShadow[d]=W,r.pointShadowMap[d]=te,r.pointShadowMatrix[d]=z.shadow.matrix,b++}r.point[d]=H,d++}else if(z.isHemisphereLight){const H=t.get(z);H.skyColor.copy(z.color).multiplyScalar(oe*F),H.groundColor.copy(z.groundColor).multiplyScalar(oe*F),r.hemi[A]=H,A++}}S>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;const v=r.hash;(v.directionalLength!==p||v.pointLength!==d||v.spotLength!==_||v.rectAreaLength!==S||v.hemiLength!==A||v.numDirectionalShadows!==w||v.numPointShadows!==b||v.numSpotShadows!==C)&&(r.directional.length=p,r.spot.length=_,r.rectArea.length=S,r.point.length=d,r.hemi.length=A,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=b,r.spotShadowMatrix.length=C,v.directionalLength=p,v.pointLength=d,v.spotLength=_,v.rectAreaLength=S,v.hemiLength=A,v.numDirectionalShadows=w,v.numPointShadows=b,v.numSpotShadows=C,r.version=Mx++)}function l(u,f){let h=0,m=0,g=0,p=0,d=0;const _=f.matrixWorldInverse;for(let S=0,A=u.length;S<A;S++){const w=u[S];if(w.isDirectionalLight){const b=r.directional[h];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),h++}else if(w.isSpotLight){const b=r.spot[g];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),g++}else if(w.isRectAreaLight){const b=r.rectArea[p];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(_),o.identity(),a.copy(w.matrixWorld),a.premultiply(_),o.extractRotation(a),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),p++}else if(w.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(_),m++}else if(w.isHemisphereLight){const b=r.hemi[d];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(_),d++}}}return{setup:c,setupView:l,state:r}}function _c(i,e){const t=new bx(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(f){n.push(f)}function o(f){r.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Sx(i,e){let t=new WeakMap;function n(s,a=0){let o;return t.has(s)===!1?(o=new _c(i,e),t.set(s,[o])):a>=t.get(s).length?(o=new _c(i,e),t.get(s).push(o)):o=t.get(s)[a],o}function r(){t=new WeakMap}return{get:n,dispose:r}}class wx extends xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ex extends xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ax=`uniform sampler2D shadow_pass;
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
}`;function Cx(i,e,t){let n=new wa;const r=new De,s=new De,a=new nt,o=new wx({depthPacking:Bp}),c=new Ex,l={},u=t.maxTextureSize,f={0:Yt,1:vr,2:Vi},h=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Tx,fragmentShader:Ax}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new zt;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new jt(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ru,this.render=function(w,b,C){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;const F=i.getRenderTarget(),v=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Fn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let z=0,he=w.length;z<he;z++){const oe=w[z],N=oe.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const te=N.getFrameExtents();if(r.multiply(te),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/te.x),r.x=s.x*te.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/te.y),r.y=s.y*te.y,N.mapSize.y=s.y)),N.map===null){const Y=this.type!==sr?{minFilter:Mt,magFilter:Mt}:{};N.map=new oi(r.x,r.y,Y),N.map.texture.name=oe.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const H=N.getViewportCount();for(let Y=0;Y<H;Y++){const W=N.getViewport(Y);a.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),O.viewport(a),N.updateMatrices(oe,Y),n=N.getFrustum(),A(b,C,N.camera,oe,this.type)}N.isPointLightShadow!==!0&&this.type===sr&&_(N,C),N.needsUpdate=!1}d.needsUpdate=!1,i.setRenderTarget(F,v,L)};function _(w,b){const C=e.update(p);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new oi(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(b,null,C,h,p,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(b,null,C,m,p,null)}function S(w,b,C,F,v,L){let O=null;const z=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(z!==void 0?O=z:O=C.isPointLight===!0?c:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0){const he=O.uuid,oe=b.uuid;let N=l[he];N===void 0&&(N={},l[he]=N);let te=N[oe];te===void 0&&(te=O.clone(),N[oe]=te),O=te}return O.visible=b.visible,O.wireframe=b.wireframe,L===sr?O.side=b.shadowSide!==null?b.shadowSide:b.side:O.side=b.shadowSide!==null?b.shadowSide:f[b.side],O.alphaMap=b.alphaMap,O.alphaTest=b.alphaTest,O.clipShadows=b.clipShadows,O.clippingPlanes=b.clippingPlanes,O.clipIntersection=b.clipIntersection,O.displacementMap=b.displacementMap,O.displacementScale=b.displacementScale,O.displacementBias=b.displacementBias,O.wireframeLinewidth=b.wireframeLinewidth,O.linewidth=b.linewidth,C.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(C.matrixWorld),O.nearDistance=F,O.farDistance=v),O}function A(w,b,C,F,v){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===sr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const z=e.update(w),he=w.material;if(Array.isArray(he)){const oe=z.groups;for(let N=0,te=oe.length;N<te;N++){const H=oe[N],Y=he[H.materialIndex];if(Y&&Y.visible){const W=S(w,Y,F,C.near,C.far,v);i.renderBufferDirect(C,null,z,W,w,H)}}}else if(he.visible){const oe=S(w,he,F,C.near,C.far,v);i.renderBufferDirect(C,null,z,oe,w,null)}}const O=w.children;for(let z=0,he=O.length;z<he;z++)A(O[z],b,C,F,v)}}function Lx(i,e,t){const n=t.isWebGL2;function r(){let D=!1;const de=new nt;let $=null;const Me=new nt(0,0,0,0);return{setMask:function(ve){$!==ve&&!D&&(i.colorMask(ve,ve,ve,ve),$=ve)},setLocked:function(ve){D=ve},setClear:function(ve,ke,it,Ke,Mn){Mn===!0&&(ve*=Ke,ke*=Ke,it*=Ke),de.set(ve,ke,it,Ke),Me.equals(de)===!1&&(i.clearColor(ve,ke,it,Ke),Me.copy(de))},reset:function(){D=!1,$=null,Me.set(-1,0,0,0)}}}function s(){let D=!1,de=null,$=null,Me=null;return{setTest:function(ve){ve?Pe(2929):Se(2929)},setMask:function(ve){de!==ve&&!D&&(i.depthMask(ve),de=ve)},setFunc:function(ve){if($!==ve){if(ve)switch(ve){case lp:i.depthFunc(512);break;case cp:i.depthFunc(519);break;case up:i.depthFunc(513);break;case ko:i.depthFunc(515);break;case fp:i.depthFunc(514);break;case hp:i.depthFunc(518);break;case dp:i.depthFunc(516);break;case pp:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);$=ve}},setLocked:function(ve){D=ve},setClear:function(ve){Me!==ve&&(i.clearDepth(ve),Me=ve)},reset:function(){D=!1,de=null,$=null,Me=null}}}function a(){let D=!1,de=null,$=null,Me=null,ve=null,ke=null,it=null,Ke=null,Mn=null;return{setTest:function(Ye){D||(Ye?Pe(2960):Se(2960))},setMask:function(Ye){de!==Ye&&!D&&(i.stencilMask(Ye),de=Ye)},setFunc:function(Ye,rn,At){($!==Ye||Me!==rn||ve!==At)&&(i.stencilFunc(Ye,rn,At),$=Ye,Me=rn,ve=At)},setOp:function(Ye,rn,At){(ke!==Ye||it!==rn||Ke!==At)&&(i.stencilOp(Ye,rn,At),ke=Ye,it=rn,Ke=At)},setLocked:function(Ye){D=Ye},setClear:function(Ye){Mn!==Ye&&(i.clearStencil(Ye),Mn=Ye)},reset:function(){D=!1,de=null,$=null,Me=null,ve=null,ke=null,it=null,Ke=null,Mn=null}}}const o=new r,c=new s,l=new a,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,p=[],d=null,_=!1,S=null,A=null,w=null,b=null,C=null,F=null,v=null,L=!1,O=null,z=null,he=null,oe=null,N=null;const te=i.getParameter(35661);let H=!1,Y=0;const W=i.getParameter(7938);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=Y>=2);let G=null,K={};const fe=i.getParameter(3088),le=i.getParameter(2978),se=new nt().fromArray(fe),ye=new nt().fromArray(le);function Ee(D,de,$){const Me=new Uint8Array(4),ve=i.createTexture();i.bindTexture(D,ve),i.texParameteri(D,10241,9728),i.texParameteri(D,10240,9728);for(let ke=0;ke<$;ke++)i.texImage2D(de+ke,0,6408,1,1,0,6408,5121,Me);return ve}const Q={};Q[3553]=Ee(3553,3553,1),Q[34067]=Ee(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Pe(2929),c.setFunc(ko),Z(!1),J(ol),Pe(2884),P(Fn);function Pe(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Se(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function we(D,de){return m[D]!==de?(i.bindFramebuffer(D,de),m[D]=de,n&&(D===36009&&(m[36160]=de),D===36160&&(m[36009]=de)),!0):!1}function xe(D,de){let $=p,Me=!1;if(D)if($=g.get(de),$===void 0&&($=[],g.set(de,$)),D.isWebGLMultipleRenderTargets){const ve=D.texture;if($.length!==ve.length||$[0]!==36064){for(let ke=0,it=ve.length;ke<it;ke++)$[ke]=36064+ke;$.length=ve.length,Me=!0}}else $[0]!==36064&&($[0]=36064,Me=!0);else $[0]!==1029&&($[0]=1029,Me=!0);Me&&(t.isWebGL2?i.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function Be(D){return d!==D?(i.useProgram(D),d=D,!0):!1}const Ae={[Ri]:32774,[Kd]:32778,[Jd]:32779};if(n)Ae[ul]=32775,Ae[fl]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ae[ul]=D.MIN_EXT,Ae[fl]=D.MAX_EXT)}const E={[Qd]:0,[ep]:1,[tp]:768,[Iu]:770,[ap]:776,[sp]:774,[ip]:772,[np]:769,[Fu]:771,[op]:775,[rp]:773};function P(D,de,$,Me,ve,ke,it,Ke){if(D===Fn){_===!0&&(Se(3042),_=!1);return}if(_===!1&&(Pe(3042),_=!0),D!==Zd){if(D!==S||Ke!==L){if((A!==Ri||C!==Ri)&&(i.blendEquation(32774),A=Ri,C=Ri),Ke)switch(D){case Ui:i.blendFuncSeparate(1,771,1,771);break;case al:i.blendFunc(1,1);break;case ll:i.blendFuncSeparate(0,769,0,1);break;case cl:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ui:i.blendFuncSeparate(770,771,1,771);break;case al:i.blendFunc(770,1);break;case ll:i.blendFuncSeparate(0,769,0,1);break;case cl:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,b=null,F=null,v=null,S=D,L=Ke}return}ve=ve||de,ke=ke||$,it=it||Me,(de!==A||ve!==C)&&(i.blendEquationSeparate(Ae[de],Ae[ve]),A=de,C=ve),($!==w||Me!==b||ke!==F||it!==v)&&(i.blendFuncSeparate(E[$],E[Me],E[ke],E[it]),w=$,b=Me,F=ke,v=it),S=D,L=null}function k(D,de){D.side===Vi?Se(2884):Pe(2884);let $=D.side===Yt;de&&($=!$),Z($),D.blending===Ui&&D.transparent===!1?P(Fn):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),o.setMask(D.colorWrite);const Me=D.stencilWrite;l.setTest(Me),Me&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),re(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Pe(32926):Se(32926)}function Z(D){O!==D&&(D?i.frontFace(2304):i.frontFace(2305),O=D)}function J(D){D!==jd?(Pe(2884),D!==z&&(D===ol?i.cullFace(1029):D===Xd?i.cullFace(1028):i.cullFace(1032))):Se(2884),z=D}function ie(D){D!==he&&(H&&i.lineWidth(D),he=D)}function re(D,de,$){D?(Pe(32823),(oe!==de||N!==$)&&(i.polygonOffset(de,$),oe=de,N=$)):Se(32823)}function ae(D){D?Pe(3089):Se(3089)}function ue(D){D===void 0&&(D=33984+te-1),G!==D&&(i.activeTexture(D),G=D)}function M(D,de){G===null&&ue();let $=K[G];$===void 0&&($={type:void 0,texture:void 0},K[G]=$),($.type!==D||$.texture!==de)&&(i.bindTexture(D,de||Q[D]),$.type=D,$.texture=de)}function x(){const D=K[G];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function R(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function B(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function y(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(D){se.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),se.copy(D))}function me(D){ye.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ye.copy(D))}function be(D,de){let $=f.get(de);$===void 0&&($=new WeakMap,f.set(de,$));let Me=$.get(D);Me===void 0&&(Me=i.getUniformBlockIndex(de,D.name),$.set(D,Me))}function Fe(D,de){const Me=f.get(de).get(D);u.get(D)!==Me&&(i.uniformBlockBinding(de,Me,D.__bindingPointIndex),u.set(D,Me))}function Ne(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},G=null,K={},m={},g=new WeakMap,p=[],d=null,_=!1,S=null,A=null,w=null,b=null,C=null,F=null,v=null,L=!1,O=null,z=null,he=null,oe=null,N=null,se.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Pe,disable:Se,bindFramebuffer:we,drawBuffers:xe,useProgram:Be,setBlending:P,setMaterial:k,setFlipSided:Z,setCullFace:J,setLineWidth:ie,setPolygonOffset:re,setScissorTest:ae,activeTexture:ue,bindTexture:M,unbindTexture:x,compressedTexImage2D:R,texImage2D:q,texImage3D:ce,updateUBOMapping:be,uniformBlockBinding:Fe,texStorage2D:_e,texStorage3D:y,texSubImage2D:B,texSubImage3D:X,compressedTexSubImage2D:ne,scissor:pe,viewport:me,reset:Ne}}function Px(i,e,t,n,r,s,a){const o=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(M,x){return _?new OffscreenCanvas(M,x):yr("canvas")}function A(M,x,R,B){let X=1;if((M.width>B||M.height>B)&&(X=B/Math.max(M.width,M.height)),X<1||x===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const ne=x?Xo:Math.floor,_e=ne(X*M.width),y=ne(X*M.height);p===void 0&&(p=S(_e,y));const q=R?S(_e,y):p;return q.width=_e,q.height=y,q.getContext("2d").drawImage(M,0,0,_e,y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+_e+"x"+y+")."),q}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function w(M){return Ul(M.width)&&Ul(M.height)}function b(M){return o?!1:M.wrapS!==Ht||M.wrapT!==Ht||M.minFilter!==Mt&&M.minFilter!==Rt}function C(M,x){return M.generateMipmaps&&x&&M.minFilter!==Mt&&M.minFilter!==Rt}function F(M){i.generateMipmap(M)}function v(M,x,R,B,X=!1){if(o===!1)return x;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ne=x;return x===6403&&(R===5126&&(ne=33326),R===5131&&(ne=33325),R===5121&&(ne=33321)),x===33319&&(R===5126&&(ne=33328),R===5131&&(ne=33327),R===5121&&(ne=33323)),x===6408&&(R===5126&&(ne=34836),R===5131&&(ne=34842),R===5121&&(ne=B===Ze&&X===!1?35907:32856),R===32819&&(ne=32854),R===32820&&(ne=32855)),(ne===33325||ne===33326||ne===33327||ne===33328||ne===34842||ne===34836)&&e.get("EXT_color_buffer_float"),ne}function L(M,x,R){return C(M,R)===!0||M.isFramebufferTexture&&M.minFilter!==Mt&&M.minFilter!==Rt?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function O(M){return M===Mt||M===hl||M===dl?9728:9729}function z(M){const x=M.target;x.removeEventListener("dispose",z),oe(x),x.isVideoTexture&&g.delete(x)}function he(M){const x=M.target;x.removeEventListener("dispose",he),te(x)}function oe(M){const x=n.get(M);if(x.__webglInit===void 0)return;const R=M.source,B=d.get(R);if(B){const X=B[x.__cacheKey];X.usedTimes--,X.usedTimes===0&&N(M),Object.keys(B).length===0&&d.delete(R)}n.remove(M)}function N(M){const x=n.get(M);i.deleteTexture(x.__webglTexture);const R=M.source,B=d.get(R);delete B[x.__cacheKey],a.memory.textures--}function te(M){const x=M.texture,R=n.get(M),B=n.get(x);if(B.__webglTexture!==void 0&&(i.deleteTexture(B.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let X=0;X<6;X++)i.deleteFramebuffer(R.__webglFramebuffer[X]),R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[X]);else{if(i.deleteFramebuffer(R.__webglFramebuffer),R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let X=0;X<R.__webglColorRenderbuffer.length;X++)R.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[X]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let X=0,ne=x.length;X<ne;X++){const _e=n.get(x[X]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(x[X])}n.remove(x),n.remove(M)}let H=0;function Y(){H=0}function W(){const M=H;return M>=c&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+c),H+=1,M}function G(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.encoding),x.join()}function K(M,x){const R=n.get(M);if(M.isVideoTexture&&ae(M),M.isRenderTargetTexture===!1&&M.version>0&&R.__version!==M.version){const B=M.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(R,M,x);return}}t.activeTexture(33984+x),t.bindTexture(3553,R.__webglTexture)}function fe(M,x){const R=n.get(M);if(M.version>0&&R.__version!==M.version){Se(R,M,x);return}t.activeTexture(33984+x),t.bindTexture(35866,R.__webglTexture)}function le(M,x){const R=n.get(M);if(M.version>0&&R.__version!==M.version){Se(R,M,x);return}t.activeTexture(33984+x),t.bindTexture(32879,R.__webglTexture)}function se(M,x){const R=n.get(M);if(M.version>0&&R.__version!==M.version){we(R,M,x);return}t.activeTexture(33984+x),t.bindTexture(34067,R.__webglTexture)}const ye={[Wo]:10497,[Ht]:33071,[qo]:33648},Ee={[Mt]:9728,[hl]:9984,[dl]:9986,[Rt]:9729,[bp]:9985,[Ts]:9987};function Q(M,x,R){if(R?(i.texParameteri(M,10242,ye[x.wrapS]),i.texParameteri(M,10243,ye[x.wrapT]),(M===32879||M===35866)&&i.texParameteri(M,32882,ye[x.wrapR]),i.texParameteri(M,10240,Ee[x.magFilter]),i.texParameteri(M,10241,Ee[x.minFilter])):(i.texParameteri(M,10242,33071),i.texParameteri(M,10243,33071),(M===32879||M===35866)&&i.texParameteri(M,32882,33071),(x.wrapS!==Ht||x.wrapT!==Ht)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,10240,O(x.magFilter)),i.texParameteri(M,10241,O(x.minFilter)),x.minFilter!==Mt&&x.minFilter!==Rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");if(x.type===Jn&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===Mr&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(M,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Pe(M,x){let R=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",z));const B=x.source;let X=d.get(B);X===void 0&&(X={},d.set(B,X));const ne=G(x);if(ne!==M.__cacheKey){X[ne]===void 0&&(X[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,R=!0),X[ne].usedTimes++;const _e=X[M.__cacheKey];_e!==void 0&&(X[M.__cacheKey].usedTimes--,_e.usedTimes===0&&N(x)),M.__cacheKey=ne,M.__webglTexture=X[ne].texture}return R}function Se(M,x,R){let B=3553;x.isDataArrayTexture&&(B=35866),x.isData3DTexture&&(B=32879);const X=Pe(M,x),ne=x.source;if(t.activeTexture(33984+R),t.bindTexture(B,M.__webglTexture),ne.version!==ne.__currentVersion||X===!0){i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const _e=b(x)&&w(x.image)===!1;let y=A(x.image,_e,!1,u);y=ue(x,y);const q=w(y)||o,ce=s.convert(x.format,x.encoding);let pe=s.convert(x.type),me=v(x.internalFormat,ce,pe,x.encoding,x.isVideoTexture);Q(B,x,q);let be;const Fe=x.mipmaps,Ne=o&&x.isVideoTexture!==!0,D=ne.__currentVersion===void 0||X===!0,de=L(x,y,q);if(x.isDepthTexture)me=6402,o?x.type===Jn?me=36012:x.type===Kn?me=33190:x.type===Bi?me=35056:me=33189:x.type===Jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===ni&&me===6402&&x.type!==Ou&&x.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Kn,pe=s.convert(x.type)),x.format===qi&&me===6402&&(me=34041,x.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Bi,pe=s.convert(x.type))),D&&(Ne?t.texStorage2D(3553,1,me,y.width,y.height):t.texImage2D(3553,0,me,y.width,y.height,0,ce,pe,null));else if(x.isDataTexture)if(Fe.length>0&&q){Ne&&D&&t.texStorage2D(3553,de,me,Fe[0].width,Fe[0].height);for(let $=0,Me=Fe.length;$<Me;$++)be=Fe[$],Ne?t.texSubImage2D(3553,$,0,0,be.width,be.height,ce,pe,be.data):t.texImage2D(3553,$,me,be.width,be.height,0,ce,pe,be.data);x.generateMipmaps=!1}else Ne?(D&&t.texStorage2D(3553,de,me,y.width,y.height),t.texSubImage2D(3553,0,0,0,y.width,y.height,ce,pe,y.data)):t.texImage2D(3553,0,me,y.width,y.height,0,ce,pe,y.data);else if(x.isCompressedTexture){Ne&&D&&t.texStorage2D(3553,de,me,Fe[0].width,Fe[0].height);for(let $=0,Me=Fe.length;$<Me;$++)be=Fe[$],x.format!==tn?ce!==null?Ne?t.compressedTexSubImage2D(3553,$,0,0,be.width,be.height,ce,be.data):t.compressedTexImage2D(3553,$,me,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage2D(3553,$,0,0,be.width,be.height,ce,pe,be.data):t.texImage2D(3553,$,me,be.width,be.height,0,ce,pe,be.data)}else if(x.isDataArrayTexture)Ne?(D&&t.texStorage3D(35866,de,me,y.width,y.height,y.depth),t.texSubImage3D(35866,0,0,0,0,y.width,y.height,y.depth,ce,pe,y.data)):t.texImage3D(35866,0,me,y.width,y.height,y.depth,0,ce,pe,y.data);else if(x.isData3DTexture)Ne?(D&&t.texStorage3D(32879,de,me,y.width,y.height,y.depth),t.texSubImage3D(32879,0,0,0,0,y.width,y.height,y.depth,ce,pe,y.data)):t.texImage3D(32879,0,me,y.width,y.height,y.depth,0,ce,pe,y.data);else if(x.isFramebufferTexture){if(D)if(Ne)t.texStorage2D(3553,de,me,y.width,y.height);else{let $=y.width,Me=y.height;for(let ve=0;ve<de;ve++)t.texImage2D(3553,ve,me,$,Me,0,ce,pe,null),$>>=1,Me>>=1}}else if(Fe.length>0&&q){Ne&&D&&t.texStorage2D(3553,de,me,Fe[0].width,Fe[0].height);for(let $=0,Me=Fe.length;$<Me;$++)be=Fe[$],Ne?t.texSubImage2D(3553,$,0,0,ce,pe,be):t.texImage2D(3553,$,me,ce,pe,be);x.generateMipmaps=!1}else Ne?(D&&t.texStorage2D(3553,de,me,y.width,y.height),t.texSubImage2D(3553,0,0,0,ce,pe,y)):t.texImage2D(3553,0,me,ce,pe,y);C(x,q)&&F(B),ne.__currentVersion=ne.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function we(M,x,R){if(x.image.length!==6)return;const B=Pe(M,x),X=x.source;if(t.activeTexture(33984+R),t.bindTexture(34067,M.__webglTexture),X.version!==X.__currentVersion||B===!0){i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const ne=x.isCompressedTexture||x.image[0].isCompressedTexture,_e=x.image[0]&&x.image[0].isDataTexture,y=[];for(let $=0;$<6;$++)!ne&&!_e?y[$]=A(x.image[$],!1,!0,l):y[$]=_e?x.image[$].image:x.image[$],y[$]=ue(x,y[$]);const q=y[0],ce=w(q)||o,pe=s.convert(x.format,x.encoding),me=s.convert(x.type),be=v(x.internalFormat,pe,me,x.encoding),Fe=o&&x.isVideoTexture!==!0,Ne=X.__currentVersion===void 0||B===!0;let D=L(x,q,ce);Q(34067,x,ce);let de;if(ne){Fe&&Ne&&t.texStorage2D(34067,D,be,q.width,q.height);for(let $=0;$<6;$++){de=y[$].mipmaps;for(let Me=0;Me<de.length;Me++){const ve=de[Me];x.format!==tn?pe!==null?Fe?t.compressedTexSubImage2D(34069+$,Me,0,0,ve.width,ve.height,pe,ve.data):t.compressedTexImage2D(34069+$,Me,be,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(34069+$,Me,0,0,ve.width,ve.height,pe,me,ve.data):t.texImage2D(34069+$,Me,be,ve.width,ve.height,0,pe,me,ve.data)}}}else{de=x.mipmaps,Fe&&Ne&&(de.length>0&&D++,t.texStorage2D(34067,D,be,y[0].width,y[0].height));for(let $=0;$<6;$++)if(_e){Fe?t.texSubImage2D(34069+$,0,0,0,y[$].width,y[$].height,pe,me,y[$].data):t.texImage2D(34069+$,0,be,y[$].width,y[$].height,0,pe,me,y[$].data);for(let Me=0;Me<de.length;Me++){const ke=de[Me].image[$].image;Fe?t.texSubImage2D(34069+$,Me+1,0,0,ke.width,ke.height,pe,me,ke.data):t.texImage2D(34069+$,Me+1,be,ke.width,ke.height,0,pe,me,ke.data)}}else{Fe?t.texSubImage2D(34069+$,0,0,0,pe,me,y[$]):t.texImage2D(34069+$,0,be,pe,me,y[$]);for(let Me=0;Me<de.length;Me++){const ve=de[Me];Fe?t.texSubImage2D(34069+$,Me+1,0,0,pe,me,ve.image[$]):t.texImage2D(34069+$,Me+1,be,pe,me,ve.image[$])}}}C(x,ce)&&F(34067),X.__currentVersion=X.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function xe(M,x,R,B,X){const ne=s.convert(R.format,R.encoding),_e=s.convert(R.type),y=v(R.internalFormat,ne,_e,R.encoding);n.get(x).__hasExternalTextures||(X===32879||X===35866?t.texImage3D(X,0,y,x.width,x.height,x.depth,0,ne,_e,null):t.texImage2D(X,0,y,x.width,x.height,0,ne,_e,null)),t.bindFramebuffer(36160,M),re(x)?h.framebufferTexture2DMultisampleEXT(36160,B,X,n.get(R).__webglTexture,0,ie(x)):i.framebufferTexture2D(36160,B,X,n.get(R).__webglTexture,0),t.bindFramebuffer(36160,null)}function Be(M,x,R){if(i.bindRenderbuffer(36161,M),x.depthBuffer&&!x.stencilBuffer){let B=33189;if(R||re(x)){const X=x.depthTexture;X&&X.isDepthTexture&&(X.type===Jn?B=36012:X.type===Kn&&(B=33190));const ne=ie(x);re(x)?h.renderbufferStorageMultisampleEXT(36161,ne,B,x.width,x.height):i.renderbufferStorageMultisample(36161,ne,B,x.width,x.height)}else i.renderbufferStorage(36161,B,x.width,x.height);i.framebufferRenderbuffer(36160,36096,36161,M)}else if(x.depthBuffer&&x.stencilBuffer){const B=ie(x);R&&re(x)===!1?i.renderbufferStorageMultisample(36161,B,35056,x.width,x.height):re(x)?h.renderbufferStorageMultisampleEXT(36161,B,35056,x.width,x.height):i.renderbufferStorage(36161,34041,x.width,x.height),i.framebufferRenderbuffer(36160,33306,36161,M)}else{const B=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let X=0;X<B.length;X++){const ne=B[X],_e=s.convert(ne.format,ne.encoding),y=s.convert(ne.type),q=v(ne.internalFormat,_e,y,ne.encoding),ce=ie(x);R&&re(x)===!1?i.renderbufferStorageMultisample(36161,ce,q,x.width,x.height):re(x)?h.renderbufferStorageMultisampleEXT(36161,ce,q,x.width,x.height):i.renderbufferStorage(36161,q,x.width,x.height)}}i.bindRenderbuffer(36161,null)}function Ae(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const B=n.get(x.depthTexture).__webglTexture,X=ie(x);if(x.depthTexture.format===ni)re(x)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,B,0,X):i.framebufferTexture2D(36160,36096,3553,B,0);else if(x.depthTexture.format===qi)re(x)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,B,0,X):i.framebufferTexture2D(36160,33306,3553,B,0);else throw new Error("Unknown depthTexture format")}function E(M){const x=n.get(M),R=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");Ae(x.__webglFramebuffer,M)}else if(R){x.__webglDepthbuffer=[];for(let B=0;B<6;B++)t.bindFramebuffer(36160,x.__webglFramebuffer[B]),x.__webglDepthbuffer[B]=i.createRenderbuffer(),Be(x.__webglDepthbuffer[B],M,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Be(x.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function P(M,x,R){const B=n.get(M);x!==void 0&&xe(B.__webglFramebuffer,M,M.texture,36064,3553),R!==void 0&&E(M)}function k(M){const x=M.texture,R=n.get(M),B=n.get(x);M.addEventListener("dispose",he),M.isWebGLMultipleRenderTargets!==!0&&(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=x.version,a.memory.textures++);const X=M.isWebGLCubeRenderTarget===!0,ne=M.isWebGLMultipleRenderTargets===!0,_e=w(M)||o;if(X){R.__webglFramebuffer=[];for(let y=0;y<6;y++)R.__webglFramebuffer[y]=i.createFramebuffer()}else{if(R.__webglFramebuffer=i.createFramebuffer(),ne)if(r.drawBuffers){const y=M.texture;for(let q=0,ce=y.length;q<ce;q++){const pe=n.get(y[q]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&re(M)===!1){const y=ne?x:[x];R.__webglMultisampledFramebuffer=i.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,R.__webglMultisampledFramebuffer);for(let q=0;q<y.length;q++){const ce=y[q];R.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(36161,R.__webglColorRenderbuffer[q]);const pe=s.convert(ce.format,ce.encoding),me=s.convert(ce.type),be=v(ce.internalFormat,pe,me,ce.encoding),Fe=ie(M);i.renderbufferStorageMultisample(36161,Fe,be,M.width,M.height),i.framebufferRenderbuffer(36160,36064+q,36161,R.__webglColorRenderbuffer[q])}i.bindRenderbuffer(36161,null),M.depthBuffer&&(R.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(R.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}}if(X){t.bindTexture(34067,B.__webglTexture),Q(34067,x,_e);for(let y=0;y<6;y++)xe(R.__webglFramebuffer[y],M,x,36064,34069+y);C(x,_e)&&F(34067),t.unbindTexture()}else if(ne){const y=M.texture;for(let q=0,ce=y.length;q<ce;q++){const pe=y[q],me=n.get(pe);t.bindTexture(3553,me.__webglTexture),Q(3553,pe,_e),xe(R.__webglFramebuffer,M,pe,36064+q,3553),C(pe,_e)&&F(3553)}t.unbindTexture()}else{let y=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?y=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(y,B.__webglTexture),Q(y,x,_e),xe(R.__webglFramebuffer,M,x,36064,y),C(x,_e)&&F(y),t.unbindTexture()}M.depthBuffer&&E(M)}function Z(M){const x=w(M)||o,R=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let B=0,X=R.length;B<X;B++){const ne=R[B];if(C(ne,x)){const _e=M.isWebGLCubeRenderTarget?34067:3553,y=n.get(ne).__webglTexture;t.bindTexture(_e,y),F(_e),t.unbindTexture()}}}function J(M){if(o&&M.samples>0&&re(M)===!1){const x=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],R=M.width,B=M.height;let X=16384;const ne=[],_e=M.stencilBuffer?33306:36096,y=n.get(M),q=M.isWebGLMultipleRenderTargets===!0;if(q)for(let ce=0;ce<x.length;ce++)t.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ce,36161,null),t.bindFramebuffer(36160,y.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ce,3553,null,0);t.bindFramebuffer(36008,y.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,y.__webglFramebuffer);for(let ce=0;ce<x.length;ce++){ne.push(36064+ce),M.depthBuffer&&ne.push(_e);const pe=y.__ignoreDepthValues!==void 0?y.__ignoreDepthValues:!1;if(pe===!1&&(M.depthBuffer&&(X|=256),M.stencilBuffer&&(X|=1024)),q&&i.framebufferRenderbuffer(36008,36064,36161,y.__webglColorRenderbuffer[ce]),pe===!0&&(i.invalidateFramebuffer(36008,[_e]),i.invalidateFramebuffer(36009,[_e])),q){const me=n.get(x[ce]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,me,0)}i.blitFramebuffer(0,0,R,B,0,0,R,B,X,9728),m&&i.invalidateFramebuffer(36008,ne)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),q)for(let ce=0;ce<x.length;ce++){t.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ce,36161,y.__webglColorRenderbuffer[ce]);const pe=n.get(x[ce]).__webglTexture;t.bindFramebuffer(36160,y.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ce,3553,pe,0)}t.bindFramebuffer(36009,y.__webglMultisampledFramebuffer)}}function ie(M){return Math.min(f,M.samples)}function re(M){const x=n.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ae(M){const x=a.render.frame;g.get(M)!==x&&(g.set(M,x),M.update())}function ue(M,x){const R=M.encoding,B=M.format,X=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===jo||R!==si&&(R===Ze?o===!1?e.has("EXT_sRGB")===!0&&B===tn?(M.format=jo,M.minFilter=Rt,M.generateMipmaps=!1):x=Gu.sRGBToLinear(x):(B!==tn||X!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",R)),x}this.allocateTextureUnit=W,this.resetTextureUnits=Y,this.setTexture2D=K,this.setTexture2DArray=fe,this.setTexture3D=le,this.setTextureCube=se,this.rebindTextures=P,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=E,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=re}function Dx(i,e,t){const n=t.isWebGL2;function r(s,a=null){let o;if(s===ri)return 5121;if(s===Tp)return 32819;if(s===Ap)return 32820;if(s===Sp)return 5120;if(s===wp)return 5122;if(s===Ou)return 5123;if(s===Ep)return 5124;if(s===Kn)return 5125;if(s===Jn)return 5126;if(s===Mr)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Cp)return 6406;if(s===tn)return 6408;if(s===Pp)return 6409;if(s===Dp)return 6410;if(s===ni)return 6402;if(s===qi)return 34041;if(s===Rp)return 6403;if(s===Lp)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===jo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Ip)return 36244;if(s===Fp)return 33319;if(s===Np)return 33320;if(s===Op)return 36249;if(s===Gs||s===ks||s===Vs||s===Hs)if(a===Ze)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Gs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ks)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Hs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Gs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ks)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Hs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===pl||s===ml||s===gl||s===_l)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===pl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ml)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===gl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===_l)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===xl||s===vl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===xl)return a===Ze?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===vl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ml||s===yl||s===bl||s===Sl||s===wl||s===El||s===Tl||s===Al||s===Cl||s===Ll||s===Pl||s===Dl||s===Rl||s===Il)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Ml)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===yl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===bl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Sl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===El)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Tl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Al)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Cl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ll)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Pl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Il)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Fl)return a===Ze?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Bi?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Rx extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ar extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ix={type:"move"};class vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,n);if(l.joints[p.jointName]===void 0){const S=new ar;S.matrixAutoUpdate=!1,S.visible=!1,l.joints[p.jointName]=S,l.add(S)}const _=l.joints[p.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ix)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}}class Fx extends Ot{constructor(e,t,n,r,s,a,o,c,l,u){if(u=u!==void 0?u:ni,u!==ni&&u!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ni&&(n=Kn),n===void 0&&u===qi&&(n=Bi),super(null,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Mt,this.minFilter=c!==void 0?c:Mt,this.flipY=!1,this.generateMipmaps=!1}}class Nx extends ci{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=null,l=null,u=null,f=null,h=null,m=null;const g=t.getContextAttributes();let p=null,d=null;const _=[],S=[],A=new It;A.layers.enable(1),A.viewport=new nt;const w=new It;w.layers.enable(2),w.viewport=new nt;const b=[A,w],C=new Rx;C.layers.enable(1),C.layers.enable(2);let F=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=_[G];return K===void 0&&(K=new vo,_[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=_[G];return K===void 0&&(K=new vo,_[G]=K),K.getGripSpace()},this.getHand=function(G){let K=_[G];return K===void 0&&(K=new vo,_[G]=K),K.getHandSpace()};function L(G){const K=S.indexOf(G.inputSource);if(K===-1)return;const fe=_[K];fe!==void 0&&fe.dispatchEvent({type:G.type,data:G.inputSource})}function O(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",z);for(let G=0;G<_.length;G++){const K=S[G];K!==null&&(S[G]=null,_[G].disconnect(K))}F=null,v=null,e.setRenderTarget(p),h=null,f=null,u=null,r=null,d=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",O),r.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:h}),d=new oi(h.framebufferWidth,h.framebufferHeight,{format:tn,type:ri,encoding:e.outputEncoding})}else{let K=null,fe=null,le=null;g.depth&&(le=g.stencil?35056:33190,K=g.stencil?qi:ni,fe=g.stencil?Bi:Kn);const se={colorFormat:32856,depthFormat:le,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(se),r.updateRenderState({layers:[f]}),d=new oi(f.textureWidth,f.textureHeight,{format:tn,type:ri,depthTexture:new Fx(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ye=e.properties.get(d);ye.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),c=null,a=await r.requestReferenceSpace(o),W.setContext(r),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(G){for(let K=0;K<G.removed.length;K++){const fe=G.removed[K],le=S.indexOf(fe);le>=0&&(S[le]=null,_[le].dispatchEvent({type:"disconnected",data:fe}))}for(let K=0;K<G.added.length;K++){const fe=G.added[K];let le=S.indexOf(fe);if(le===-1){for(let ye=0;ye<_.length;ye++)if(ye>=S.length){S.push(fe),le=ye;break}else if(S[ye]===null){S[ye]=fe,le=ye;break}if(le===-1)break}const se=_[le];se&&se.dispatchEvent({type:"connected",data:fe})}}const he=new I,oe=new I;function N(G,K,fe){he.setFromMatrixPosition(K.matrixWorld),oe.setFromMatrixPosition(fe.matrixWorld);const le=he.distanceTo(oe),se=K.projectionMatrix.elements,ye=fe.projectionMatrix.elements,Ee=se[14]/(se[10]-1),Q=se[14]/(se[10]+1),Pe=(se[9]+1)/se[5],Se=(se[9]-1)/se[5],we=(se[8]-1)/se[0],xe=(ye[8]+1)/ye[0],Be=Ee*we,Ae=Ee*xe,E=le/(-we+xe),P=E*-we;K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(P),G.translateZ(E),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const k=Ee+E,Z=Q+E,J=Be-P,ie=Ae+(le-P),re=Pe*Q/Z*k,ae=Se*Q/Z*k;G.projectionMatrix.makePerspective(J,ie,re,ae,k,Z)}function te(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;C.near=w.near=A.near=G.near,C.far=w.far=A.far=G.far,(F!==C.near||v!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,v=C.far);const K=G.parent,fe=C.cameras;te(C,K);for(let se=0;se<fe.length;se++)te(fe[se],K);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),G.position.copy(C.position),G.quaternion.copy(C.quaternion),G.scale.copy(C.scale),G.matrix.copy(C.matrix),G.matrixWorld.copy(C.matrixWorld);const le=G.children;for(let se=0,ye=le.length;se<ye;se++)le[se].updateMatrixWorld(!0);fe.length===2?N(C,A,w):C.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(G){f!==null&&(f.fixedFoveation=G),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=G)};let H=null;function Y(G,K){if(l=K.getViewerPose(c||a),m=K,l!==null){const fe=l.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let le=!1;fe.length!==C.cameras.length&&(C.cameras.length=0,le=!0);for(let se=0;se<fe.length;se++){const ye=fe[se];let Ee=null;if(h!==null)Ee=h.getViewport(ye);else{const Pe=u.getViewSubImage(f,ye);Ee=Pe.viewport,se===0&&(e.setRenderTargetTextures(d,Pe.colorTexture,f.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(d))}let Q=b[se];Q===void 0&&(Q=new It,Q.layers.enable(se),Q.viewport=new nt,b[se]=Q),Q.matrix.fromArray(ye.transform.matrix),Q.projectionMatrix.fromArray(ye.projectionMatrix),Q.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),se===0&&C.matrix.copy(Q.matrix),le===!0&&C.cameras.push(Q)}}for(let fe=0;fe<_.length;fe++){const le=S[fe],se=_[fe];le!==null&&se!==void 0&&se.update(le,K,c||a)}H&&H(G,K),m=null}const W=new $u;W.setAnimationLoop(Y),this.setAnimationLoop=function(G){H=G},this.dispose=function(){}}}function Ox(i,e){function t(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,_,S,A){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),l(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,A)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),g(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,_,S):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Yt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Yt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const w=i.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*w}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let S;d.map?S=d.map:d.specularMap?S=d.specularMap:d.displacementMap?S=d.displacementMap:d.normalMap?S=d.normalMap:d.bumpMap?S=d.bumpMap:d.roughnessMap?S=d.roughnessMap:d.metalnessMap?S=d.metalnessMap:d.alphaMap?S=d.alphaMap:d.emissiveMap?S=d.emissiveMap:d.clearcoatMap?S=d.clearcoatMap:d.clearcoatNormalMap?S=d.clearcoatNormalMap:d.clearcoatRoughnessMap?S=d.clearcoatRoughnessMap:d.iridescenceMap?S=d.iridescenceMap:d.iridescenceThicknessMap?S=d.iridescenceThicknessMap:d.specularIntensityMap?S=d.specularIntensityMap:d.specularColorMap?S=d.specularColorMap:d.transmissionMap?S=d.transmissionMap:d.thicknessMap?S=d.thicknessMap:d.sheenColorMap?S=d.sheenColorMap:d.sheenRoughnessMap&&(S=d.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let A;d.aoMap?A=d.aoMap:d.lightMap&&(A=d.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uv2Transform.value.copy(A.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,_,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=S*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let A;d.map?A=d.map:d.alphaMap&&(A=d.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uvTransform.value.copy(A.matrix))}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Yt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function zx(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(35375):0;function c(S,A){const w=A.program;n.uniformBlockBinding(S,w)}function l(S,A){let w=r[S.id];w===void 0&&(g(S),w=u(S),r[S.id]=w,S.addEventListener("dispose",d));const b=A.program;n.updateUBOMapping(S,b);const C=e.render.frame;s[S.id]!==C&&(h(S),s[S.id]=C)}function u(S){const A=f();S.__bindingPointIndex=A;const w=i.createBuffer(),b=S.__size,C=S.usage;return i.bindBuffer(35345,w),i.bufferData(35345,b,C),i.bindBuffer(35345,null),i.bindBufferBase(35345,A,w),w}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const A=r[S.id],w=S.uniforms,b=S.__cache;i.bindBuffer(35345,A);for(let C=0,F=w.length;C<F;C++){const v=w[C];if(m(v,C,b)===!0){const L=v.value,O=v.__offset;typeof L=="number"?(v.__data[0]=L,i.bufferSubData(35345,O,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):L.toArray(v.__data),i.bufferSubData(35345,O,v.__data))}}i.bindBuffer(35345,null)}function m(S,A,w){const b=S.value;if(w[A]===void 0)return typeof b=="number"?w[A]=b:w[A]=b.clone(),!0;if(typeof b=="number"){if(w[A]!==b)return w[A]=b,!0}else{const C=w[A];if(C.equals(b)===!1)return C.copy(b),!0}return!1}function g(S){const A=S.uniforms;let w=0;const b=16;let C=0;for(let F=0,v=A.length;F<v;F++){const L=A[F],O=p(L);if(L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,F>0){C=w%b;const z=b-C;C!==0&&z-O.boundary<0&&(w+=b-C,L.__offset=w)}w+=O.storage}return C=w%b,C>0&&(w+=b-C),S.__size=w,S.__cache={},this}function p(S){const A=S.value,w={boundary:0,storage:0};return typeof A=="number"?(w.boundary=4,w.storage=4):A.isVector2?(w.boundary=8,w.storage=8):A.isVector3||A.isColor?(w.boundary=16,w.storage=12):A.isVector4?(w.boundary=16,w.storage=16):A.isMatrix3?(w.boundary=48,w.storage=48):A.isMatrix4?(w.boundary=64,w.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),w}function d(S){const A=S.target;A.removeEventListener("dispose",d);const w=a.indexOf(A.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function _(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:l,dispose:_}}function Ux(){const i=yr("canvas");return i.style.display="block",i}function nf(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:Ux(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,o=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,c=i.powerPreference!==void 0?i.powerPreference:"default",l=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let f=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=si,this.physicallyCorrectLights=!1,this.toneMapping=gn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,_=0,S=0,A=null,w=-1,b=null;const C=new nt,F=new nt;let v=null,L=e.width,O=e.height,z=1,he=null,oe=null;const N=new nt(0,0,L,O),te=new nt(0,0,L,O);let H=!1;const Y=new wa;let W=!1,G=!1,K=null;const fe=new Je,le=new De,se=new I,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return A===null?z:1}let Q=t;function Pe(T,U){for(let j=0;j<T.length;j++){const V=T[j],ee=e.getContext(V,U);if(ee!==null)return ee}return null}try{const T={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ya}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",Fe,!1),e.addEventListener("webglcontextcreationerror",Ne,!1),Q===null){const U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),Q=Pe(U,T),Q===null)throw Pe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Q.getShaderPrecisionFormat===void 0&&(Q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Se,we,xe,Be,Ae,E,P,k,Z,J,ie,re,ae,ue,M,x,R,B,X,ne,_e,y,q,ce;function pe(){Se=new Y_(Q),we=new V_(Q,Se,i),Se.init(we),y=new Dx(Q,Se,we),xe=new Lx(Q,Se,we),Be=new K_,Ae=new mx,E=new Px(Q,Se,xe,Ae,we,y,Be),P=new W_(p),k=new X_(p),Z=new cm(Q,we),q=new G_(Q,Se,Z,we),J=new $_(Q,Z,Be,q),ie=new t0(Q,J,Z,Be),X=new e0(Q,we,E),x=new H_(Ae),re=new px(p,P,k,Se,we,q,x),ae=new Ox(p,Ae),ue=new _x,M=new Sx(Se,we),B=new B_(p,P,xe,ie,u,a),R=new Cx(p,ie,we),ce=new zx(Q,Be,we,xe),ne=new k_(Q,Se,Be,we),_e=new Z_(Q,Se,Be,we),Be.programs=re.programs,p.capabilities=we,p.extensions=Se,p.properties=Ae,p.renderLists=ue,p.shadowMap=R,p.state=xe,p.info=Be}pe();const me=new Nx(p,Q);this.xr=me,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const T=Se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(L,O,!1))},this.getSize=function(T){return T.set(L,O)},this.setSize=function(T,U,j){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=T,O=U,e.width=Math.floor(T*z),e.height=Math.floor(U*z),j!==!1&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(L*z,O*z).floor()},this.setDrawingBufferSize=function(T,U,j){L=T,O=U,z=j,e.width=Math.floor(T*j),e.height=Math.floor(U*j),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(N)},this.setViewport=function(T,U,j,V){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,U,j,V),xe.viewport(C.copy(N).multiplyScalar(z).floor())},this.getScissor=function(T){return T.copy(te)},this.setScissor=function(T,U,j,V){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,U,j,V),xe.scissor(F.copy(te).multiplyScalar(z).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(T){xe.setScissorTest(H=T)},this.setOpaqueSort=function(T){he=T},this.setTransparentSort=function(T){oe=T},this.getClearColor=function(T){return T.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor.apply(B,arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha.apply(B,arguments)},this.clear=function(T=!0,U=!0,j=!0){let V=0;T&&(V|=16384),U&&(V|=256),j&&(V|=1024),Q.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",Fe,!1),e.removeEventListener("webglcontextcreationerror",Ne,!1),ue.dispose(),M.dispose(),Ae.dispose(),P.dispose(),k.dispose(),ie.dispose(),q.dispose(),ce.dispose(),re.dispose(),me.dispose(),me.removeEventListener("sessionstart",ke),me.removeEventListener("sessionend",it),K&&(K.dispose(),K=null),Ke.stop()};function be(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const T=Be.autoReset,U=R.enabled,j=R.autoUpdate,V=R.needsUpdate,ee=R.type;pe(),Be.autoReset=T,R.enabled=U,R.autoUpdate=j,R.needsUpdate=V,R.type=ee}function Ne(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function D(T){const U=T.target;U.removeEventListener("dispose",D),de(U)}function de(T){$(T),Ae.remove(T)}function $(T){const U=Ae.get(T).programs;U!==void 0&&(U.forEach(function(j){re.releaseProgram(j)}),T.isShaderMaterial&&re.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,j,V,ee,Te){U===null&&(U=ye);const Le=ee.isMesh&&ee.matrixWorld.determinant()<0,Oe=of(T,U,j,V,ee);xe.setMaterial(V,Le);let Ie=j.index;const je=j.attributes.position;if(Ie===null){if(je===void 0||je.count===0)return}else if(Ie.count===0)return;let Ge=1;V.wireframe===!0&&(Ie=J.getWireframeAttribute(j),Ge=2),q.setup(ee,V,Oe,j,Ie);let Ve,$e=ne;Ie!==null&&(Ve=Z.get(Ie),$e=_e,$e.setIndex(Ve));const zn=Ie!==null?Ie.count:je.count,ui=j.drawRange.start*Ge,fi=j.drawRange.count*Ge,$t=Te!==null?Te.start*Ge:0,qe=Te!==null?Te.count*Ge:1/0,hi=Math.max(ui,$t),Qe=Math.min(zn,ui+fi,$t+qe)-1,Ct=Math.max(0,Qe-hi+1);if(Ct!==0){if(ee.isMesh)V.wireframe===!0?(xe.setLineWidth(V.wireframeLinewidth*Ee()),$e.setMode(1)):$e.setMode(4);else if(ee.isLine){let yn=V.linewidth;yn===void 0&&(yn=1),xe.setLineWidth(yn*Ee()),ee.isLineSegments?$e.setMode(1):ee.isLineLoop?$e.setMode(2):$e.setMode(3)}else ee.isPoints?$e.setMode(0):ee.isSprite&&$e.setMode(4);if(ee.isInstancedMesh)$e.renderInstances(hi,Ct,ee.count);else if(j.isInstancedBufferGeometry){const yn=Math.min(j.instanceCount,j._maxInstanceCount);$e.renderInstances(hi,Ct,yn)}else $e.render(hi,Ct)}},this.compile=function(T,U){h=M.get(T),h.init(),g.push(h),T.traverseVisible(function(j){j.isLight&&j.layers.test(U.layers)&&(h.pushLight(j),j.castShadow&&h.pushShadow(j))}),h.setupLights(p.physicallyCorrectLights),T.traverse(function(j){const V=j.material;if(V)if(Array.isArray(V))for(let ee=0;ee<V.length;ee++){const Te=V[ee];Ls(Te,T,j)}else Ls(V,T,j)}),g.pop(),h=null};let Me=null;function ve(T){Me&&Me(T)}function ke(){Ke.stop()}function it(){Ke.start()}const Ke=new $u;Ke.setAnimationLoop(ve),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(T){Me=T,me.setAnimationLoop(T),T===null?Ke.stop():Ke.start()},me.addEventListener("sessionstart",ke),me.addEventListener("sessionend",it),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(U),U=me.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,U,A),h=M.get(T,g.length),h.init(),g.push(h),fe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(fe),G=this.localClippingEnabled,W=x.init(this.clippingPlanes,G,U),f=ue.get(T,m.length),f.init(),m.push(f),Mn(T,U,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(he,oe),W===!0&&x.beginShadows();const j=h.state.shadowsArray;if(R.render(j,T,U),W===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),B.render(f,T),h.setupLights(p.physicallyCorrectLights),U.isArrayCamera){const V=U.cameras;for(let ee=0,Te=V.length;ee<Te;ee++){const Le=V[ee];Ye(f,T,Le,Le.viewport)}}else Ye(f,T,U);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(p,T,U),q.resetDefaultState(),w=-1,b=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Mn(T,U,j,V){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){V&&se.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);const Le=ie.update(T),Oe=T.material;Oe.visible&&f.push(T,Le,Oe,j,se.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Be.render.frame&&(T.skeleton.update(),T.skeleton.frame=Be.render.frame),!T.frustumCulled||Y.intersectsObject(T))){V&&se.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);const Le=ie.update(T),Oe=T.material;if(Array.isArray(Oe)){const Ie=Le.groups;for(let je=0,Ge=Ie.length;je<Ge;je++){const Ve=Ie[je],$e=Oe[Ve.materialIndex];$e&&$e.visible&&f.push(T,Le,$e,j,se.z,Ve)}}else Oe.visible&&f.push(T,Le,Oe,j,se.z,null)}}const Te=T.children;for(let Le=0,Oe=Te.length;Le<Oe;Le++)Mn(Te[Le],U,j,V)}function Ye(T,U,j,V){const ee=T.opaque,Te=T.transmissive,Le=T.transparent;h.setupLightsView(j),Te.length>0&&rn(ee,U,j),V&&xe.viewport(C.copy(V)),ee.length>0&&At(ee,U,j),Te.length>0&&At(Te,U,j),Le.length>0&&At(Le,U,j),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function rn(T,U,j){const V=we.isWebGL2;K===null&&(K=new oi(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Mr:ri,minFilter:Ts,samples:V&&s===!0?4:0})),p.getDrawingBufferSize(le),V?K.setSize(le.x,le.y):K.setSize(Xo(le.x),Xo(le.y));const ee=p.getRenderTarget();p.setRenderTarget(K),p.clear();const Te=p.toneMapping;p.toneMapping=gn,At(T,U,j),p.toneMapping=Te,E.updateMultisampleRenderTarget(K),E.updateRenderTargetMipmap(K),p.setRenderTarget(ee)}function At(T,U,j){const V=U.isScene===!0?U.overrideMaterial:null;for(let ee=0,Te=T.length;ee<Te;ee++){const Le=T[ee],Oe=Le.object,Ie=Le.geometry,je=V===null?Le.material:V,Ge=Le.group;Oe.layers.test(j.layers)&&sf(Oe,U,j,Ie,je,Ge)}}function sf(T,U,j,V,ee,Te){T.onBeforeRender(p,U,j,V,ee,Te),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ee.onBeforeRender(p,U,j,V,T,Te),ee.transparent===!0&&ee.side===Vi?(ee.side=Yt,ee.needsUpdate=!0,p.renderBufferDirect(j,U,V,ee,T,Te),ee.side=vr,ee.needsUpdate=!0,p.renderBufferDirect(j,U,V,ee,T,Te),ee.side=Vi):p.renderBufferDirect(j,U,V,ee,T,Te),T.onAfterRender(p,U,j,V,ee,Te)}function Ls(T,U,j){U.isScene!==!0&&(U=ye);const V=Ae.get(T),ee=h.state.lights,Te=h.state.shadowsArray,Le=ee.state.version,Oe=re.getParameters(T,ee.state,Te,U,j),Ie=re.getProgramCacheKey(Oe);let je=V.programs;V.environment=T.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(T.isMeshStandardMaterial?k:P).get(T.envMap||V.environment),je===void 0&&(T.addEventListener("dispose",D),je=new Map,V.programs=je);let Ge=je.get(Ie);if(Ge!==void 0){if(V.currentProgram===Ge&&V.lightsStateVersion===Le)return Aa(T,Oe),Ge}else Oe.uniforms=re.getUniforms(T),T.onBuild(j,Oe,p),T.onBeforeCompile(Oe,p),Ge=re.acquireProgram(Oe,Ie),je.set(Ie,Ge),V.uniforms=Oe.uniforms;const Ve=V.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ve.clippingPlanes=x.uniform),Aa(T,Oe),V.needsLights=lf(T),V.lightsStateVersion=Le,V.needsLights&&(Ve.ambientLightColor.value=ee.state.ambient,Ve.lightProbe.value=ee.state.probe,Ve.directionalLights.value=ee.state.directional,Ve.directionalLightShadows.value=ee.state.directionalShadow,Ve.spotLights.value=ee.state.spot,Ve.spotLightShadows.value=ee.state.spotShadow,Ve.rectAreaLights.value=ee.state.rectArea,Ve.ltc_1.value=ee.state.rectAreaLTC1,Ve.ltc_2.value=ee.state.rectAreaLTC2,Ve.pointLights.value=ee.state.point,Ve.pointLightShadows.value=ee.state.pointShadow,Ve.hemisphereLights.value=ee.state.hemi,Ve.directionalShadowMap.value=ee.state.directionalShadowMap,Ve.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ve.spotShadowMap.value=ee.state.spotShadowMap,Ve.spotShadowMatrix.value=ee.state.spotShadowMatrix,Ve.pointShadowMap.value=ee.state.pointShadowMap,Ve.pointShadowMatrix.value=ee.state.pointShadowMatrix);const $e=Ge.getUniforms(),zn=os.seqWithValue($e.seq,Ve);return V.currentProgram=Ge,V.uniformsList=zn,Ge}function Aa(T,U){const j=Ae.get(T);j.outputEncoding=U.outputEncoding,j.instancing=U.instancing,j.skinning=U.skinning,j.morphTargets=U.morphTargets,j.morphNormals=U.morphNormals,j.morphColors=U.morphColors,j.morphTargetsCount=U.morphTargetsCount,j.numClippingPlanes=U.numClippingPlanes,j.numIntersection=U.numClipIntersection,j.vertexAlphas=U.vertexAlphas,j.vertexTangents=U.vertexTangents,j.toneMapping=U.toneMapping}function of(T,U,j,V,ee){U.isScene!==!0&&(U=ye),E.resetTextureUnits();const Te=U.fog,Le=V.isMeshStandardMaterial?U.environment:null,Oe=A===null?p.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:si,Ie=(V.isMeshStandardMaterial?k:P).get(V.envMap||Le),je=V.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ge=!!V.normalMap&&!!j.attributes.tangent,Ve=!!j.morphAttributes.position,$e=!!j.morphAttributes.normal,zn=!!j.morphAttributes.color,ui=V.toneMapped?p.toneMapping:gn,fi=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,$t=fi!==void 0?fi.length:0,qe=Ae.get(V),hi=h.state.lights;if(W===!0&&(G===!0||T!==b)){const bt=T===b&&V.id===w;x.setState(V,T,bt)}let Qe=!1;V.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==hi.state.version||qe.outputEncoding!==Oe||ee.isInstancedMesh&&qe.instancing===!1||!ee.isInstancedMesh&&qe.instancing===!0||ee.isSkinnedMesh&&qe.skinning===!1||!ee.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==Ie||V.fog===!0&&qe.fog!==Te||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==x.numPlanes||qe.numIntersection!==x.numIntersection)||qe.vertexAlphas!==je||qe.vertexTangents!==Ge||qe.morphTargets!==Ve||qe.morphNormals!==$e||qe.morphColors!==zn||qe.toneMapping!==ui||we.isWebGL2===!0&&qe.morphTargetsCount!==$t)&&(Qe=!0):(Qe=!0,qe.__version=V.version);let Ct=qe.currentProgram;Qe===!0&&(Ct=Ls(V,U,ee));let yn=!1,Ji=!1,Ps=!1;const mt=Ct.getUniforms(),Qi=qe.uniforms;if(xe.useProgram(Ct.program)&&(yn=!0,Ji=!0,Ps=!0),V.id!==w&&(w=V.id,Ji=!0),yn||b!==T){if(mt.setValue(Q,"projectionMatrix",T.projectionMatrix),we.logarithmicDepthBuffer&&mt.setValue(Q,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),b!==T&&(b=T,Ji=!0,Ps=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const bt=mt.map.cameraPosition;bt!==void 0&&bt.setValue(Q,se.setFromMatrixPosition(T.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&mt.setValue(Q,"isOrthographic",T.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||ee.isSkinnedMesh)&&mt.setValue(Q,"viewMatrix",T.matrixWorldInverse)}if(ee.isSkinnedMesh){mt.setOptional(Q,ee,"bindMatrix"),mt.setOptional(Q,ee,"bindMatrixInverse");const bt=ee.skeleton;bt&&(we.floatVertexTextures?(bt.boneTexture===null&&bt.computeBoneTexture(),mt.setValue(Q,"boneTexture",bt.boneTexture,E),mt.setValue(Q,"boneTextureSize",bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ds=j.morphAttributes;if((Ds.position!==void 0||Ds.normal!==void 0||Ds.color!==void 0&&we.isWebGL2===!0)&&X.update(ee,j,V,Ct),(Ji||qe.receiveShadow!==ee.receiveShadow)&&(qe.receiveShadow=ee.receiveShadow,mt.setValue(Q,"receiveShadow",ee.receiveShadow)),Ji&&(mt.setValue(Q,"toneMappingExposure",p.toneMappingExposure),qe.needsLights&&af(Qi,Ps),Te&&V.fog===!0&&ae.refreshFogUniforms(Qi,Te),ae.refreshMaterialUniforms(Qi,V,z,O,K),os.upload(Q,qe.uniformsList,Qi,E)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(os.upload(Q,qe.uniformsList,Qi,E),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&mt.setValue(Q,"center",ee.center),mt.setValue(Q,"modelViewMatrix",ee.modelViewMatrix),mt.setValue(Q,"normalMatrix",ee.normalMatrix),mt.setValue(Q,"modelMatrix",ee.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const bt=V.uniformsGroups;for(let Rs=0,cf=bt.length;Rs<cf;Rs++)if(we.isWebGL2){const Ca=bt[Rs];ce.update(Ca,Ct),ce.bind(Ca,Ct)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ct}function af(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function lf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,U,j){Ae.get(T.texture).__webglTexture=U,Ae.get(T.depthTexture).__webglTexture=j;const V=Ae.get(T);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=j===void 0,V.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const j=Ae.get(T);j.__webglFramebuffer=U,j.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,j=0){A=T,_=U,S=j;let V=!0;if(T){const Ie=Ae.get(T);Ie.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(36160,null),V=!1):Ie.__webglFramebuffer===void 0?E.setupRenderTarget(T):Ie.__hasExternalTextures&&E.rebindTextures(T,Ae.get(T.texture).__webglTexture,Ae.get(T.depthTexture).__webglTexture)}let ee=null,Te=!1,Le=!1;if(T){const Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture)&&(Le=!0);const je=Ae.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(ee=je[U],Te=!0):we.isWebGL2&&T.samples>0&&E.useMultisampledRTT(T)===!1?ee=Ae.get(T).__webglMultisampledFramebuffer:ee=je,C.copy(T.viewport),F.copy(T.scissor),v=T.scissorTest}else C.copy(N).multiplyScalar(z).floor(),F.copy(te).multiplyScalar(z).floor(),v=H;if(xe.bindFramebuffer(36160,ee)&&we.drawBuffers&&V&&xe.drawBuffers(T,ee),xe.viewport(C),xe.scissor(F),xe.setScissorTest(v),Te){const Ie=Ae.get(T.texture);Q.framebufferTexture2D(36160,36064,34069+U,Ie.__webglTexture,j)}else if(Le){const Ie=Ae.get(T.texture),je=U||0;Q.framebufferTextureLayer(36160,36064,Ie.__webglTexture,j||0,je)}w=-1},this.readRenderTargetPixels=function(T,U,j,V,ee,Te,Le){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){xe.bindFramebuffer(36160,Oe);try{const Ie=T.texture,je=Ie.format,Ge=Ie.type;if(je!==tn&&y.convert(je)!==Q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Ge===Mr&&(Se.has("EXT_color_buffer_half_float")||we.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Ge!==ri&&y.convert(Ge)!==Q.getParameter(35738)&&!(Ge===Jn&&(we.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-V&&j>=0&&j<=T.height-ee&&Q.readPixels(U,j,V,ee,y.convert(je),y.convert(Ge),Te)}finally{const Ie=A!==null?Ae.get(A).__webglFramebuffer:null;xe.bindFramebuffer(36160,Ie)}}},this.copyFramebufferToTexture=function(T,U,j=0){const V=Math.pow(2,-j),ee=Math.floor(U.image.width*V),Te=Math.floor(U.image.height*V);E.setTexture2D(U,0),Q.copyTexSubImage2D(3553,j,0,0,T.x,T.y,ee,Te),xe.unbindTexture()},this.copyTextureToTexture=function(T,U,j,V=0){const ee=U.image.width,Te=U.image.height,Le=y.convert(j.format),Oe=y.convert(j.type);E.setTexture2D(j,0),Q.pixelStorei(37440,j.flipY),Q.pixelStorei(37441,j.premultiplyAlpha),Q.pixelStorei(3317,j.unpackAlignment),U.isDataTexture?Q.texSubImage2D(3553,V,T.x,T.y,ee,Te,Le,Oe,U.image.data):U.isCompressedTexture?Q.compressedTexSubImage2D(3553,V,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,Le,U.mipmaps[0].data):Q.texSubImage2D(3553,V,T.x,T.y,Le,Oe,U.image),V===0&&j.generateMipmaps&&Q.generateMipmap(3553),xe.unbindTexture()},this.copyTextureToTexture3D=function(T,U,j,V,ee=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=T.max.x-T.min.x+1,Le=T.max.y-T.min.y+1,Oe=T.max.z-T.min.z+1,Ie=y.convert(V.format),je=y.convert(V.type);let Ge;if(V.isData3DTexture)E.setTexture3D(V,0),Ge=32879;else if(V.isDataArrayTexture)E.setTexture2DArray(V,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Q.pixelStorei(37440,V.flipY),Q.pixelStorei(37441,V.premultiplyAlpha),Q.pixelStorei(3317,V.unpackAlignment);const Ve=Q.getParameter(3314),$e=Q.getParameter(32878),zn=Q.getParameter(3316),ui=Q.getParameter(3315),fi=Q.getParameter(32877),$t=j.isCompressedTexture?j.mipmaps[0]:j.image;Q.pixelStorei(3314,$t.width),Q.pixelStorei(32878,$t.height),Q.pixelStorei(3316,T.min.x),Q.pixelStorei(3315,T.min.y),Q.pixelStorei(32877,T.min.z),j.isDataTexture||j.isData3DTexture?Q.texSubImage3D(Ge,ee,U.x,U.y,U.z,Te,Le,Oe,Ie,je,$t.data):j.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Q.compressedTexSubImage3D(Ge,ee,U.x,U.y,U.z,Te,Le,Oe,Ie,$t.data)):Q.texSubImage3D(Ge,ee,U.x,U.y,U.z,Te,Le,Oe,Ie,je,$t),Q.pixelStorei(3314,Ve),Q.pixelStorei(32878,$e),Q.pixelStorei(3316,zn),Q.pixelStorei(3315,ui),Q.pixelStorei(32877,fi),ee===0&&V.generateMipmaps&&Q.generateMipmap(Ge),xe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?E.setTextureCube(T,0):T.isData3DTexture?E.setTexture3D(T,0):T.isDataArrayTexture?E.setTexture2DArray(T,0):E.setTexture2D(T,0),xe.unbindTexture()},this.resetState=function(){_=0,S=0,A=null,xe.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Bx extends nf{}Bx.prototype.isWebGL1Renderer=!0;class Gx extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class hr extends xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xc=new I,vc=new I,Mc=new Je,Mo=new Sa,Kr=new Sr;class kx extends pt{constructor(e=new zt,t=new hr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)xc.fromBufferAttribute(t,r-1),vc.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=xc.distanceTo(vc);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Kr.radius+=s,e.ray.intersectsSphere(Kr)===!1)return;Mc.copy(r).invert(),Mo.copy(e.ray).applyMatrix4(Mc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new I,u=new I,f=new I,h=new I,m=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const _=Math.max(0,a.start),S=Math.min(g.count,a.start+a.count);for(let A=_,w=S-1;A<w;A+=m){const b=g.getX(A),C=g.getX(A+1);if(l.fromBufferAttribute(d,b),u.fromBufferAttribute(d,C),Mo.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(h);v<e.near||v>e.far||t.push({distance:v,point:f.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),S=Math.min(d.count,a.start+a.count);for(let A=_,w=S-1;A<w;A+=m){if(l.fromBufferAttribute(d,A),u.fromBufferAttribute(d,A+1),Mo.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(h);C<e.near||C>e.far||t.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const yc=new I,bc=new I;class $o extends kx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)yc.fromBufferAttribute(t,r),bc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+yc.distanceTo(bc);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lr extends xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sc=new Je,Zo=new Sa,Jr=new Sr,Qr=new I;class yo extends pt{constructor(e=new zt,t=new lr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(r),Jr.radius+=s,e.ray.intersectsSphere(Jr)===!1)return;Sc.copy(r).invert(),Zo.copy(e.ray).applyMatrix4(Sc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const h=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=h,p=m;g<p;g++){const d=l.getX(g);Qr.fromBufferAttribute(f,d),wc(Qr,d,c,r,e,t,this)}}else{const h=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=h,p=m;g<p;g++)Qr.fromBufferAttribute(f,g),wc(Qr,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function wc(i,e,t,n,r,s,a){const o=Zo.distanceSqToPoint(i);if(o<t){const c=new I;Zo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class Vx extends xn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new He(16777215),this.specular=new He(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zu,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const hs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Hx{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const m=l[f],g=l[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Wx=new Hx;class Cs{constructor(e){this.manager=e!==void 0?e:Wx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const un={};class qx extends Error{constructor(e,t){super(e),this.response=t}}class jx extends Cs{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=hs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(un[e]!==void 0){un[e].push({onLoad:t,onProgress:n,onError:r});return}un[e]=[],un[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=un[e],f=l.body.getReader(),h=l.headers.get("Content-Length"),m=h?parseInt(h):0,g=m!==0;let p=0;const d=new ReadableStream({start(_){S();function S(){f.read().then(({done:A,value:w})=>{if(A)_.close();else{p+=w.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let C=0,F=u.length;C<F;C++){const v=u[C];v.onProgress&&v.onProgress(b)}_.enqueue(w),S()}})}}});return new Response(d)}else throw new qx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(h);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{hs.add(e,l);const u=un[e];delete un[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=un[e];if(u===void 0)throw this.manager.itemError(e),l;delete un[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Xx extends Cs{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=hs.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=yr("img");function c(){u(),hs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Yx extends Cs{constructor(e){super(e)}load(e,t,n,r){const s=new Ot,a=new Xx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class rf extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ec=new Je,Tc=new I,Ac=new I;class $x{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wa,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Tc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tc),Ac.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ac),t.updateMatrixWorld(),Ec.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ec),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zx extends $x{constructor(){super(new Zu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kx extends rf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DefaultUp),this.updateMatrix(),this.target=new pt,this.shadow=new Zx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jx extends rf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Qx extends $o{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new zt;r.setAttribute("position",new ot(t,3)),r.setAttribute("color",new ot(n,3));const s=new hr({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new He,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ya);const Lc={type:"change"},bo={type:"start"},Pc={type:"end"};class ev extends ci{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:di.ROTATE,MIDDLE:di.DOLLY,RIGHT:di.PAN},this.touches={ONE:pi.ROTATE,TWO:pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",ue),this._domElementKeyEvents=y},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Lc),n.update(),s=r.NONE},this.update=function(){const y=new I,q=new ai().setFromUnitVectors(e.up,new I(0,1,0)),ce=q.clone().invert(),pe=new I,me=new ai,be=2*Math.PI;return function(){const Ne=n.object.position;y.copy(Ne).sub(n.target),y.applyQuaternion(q),o.setFromVector3(y),n.autoRotate&&s===r.NONE&&L(F()),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let D=n.minAzimuthAngle,de=n.maxAzimuthAngle;return isFinite(D)&&isFinite(de)&&(D<-Math.PI?D+=be:D>Math.PI&&(D-=be),de<-Math.PI?de+=be:de>Math.PI&&(de-=be),D<=de?o.theta=Math.max(D,Math.min(de,o.theta)):o.theta=o.theta>(D+de)/2?Math.max(D,o.theta):Math.min(de,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=l,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),y.setFromSpherical(o),y.applyQuaternion(ce),Ne.copy(n.target).add(y),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,f||pe.distanceToSquared(n.object.position)>a||8*(1-me.dot(n.object.quaternion))>a?(n.dispatchEvent(Lc),pe.copy(n.object.position),me.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",R),n.domElement.removeEventListener("pointerdown",P),n.domElement.removeEventListener("pointercancel",J),n.domElement.removeEventListener("wheel",ae),n.domElement.removeEventListener("pointermove",k),n.domElement.removeEventListener("pointerup",Z),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ue)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Cc,c=new Cc;let l=1;const u=new I;let f=!1;const h=new De,m=new De,g=new De,p=new De,d=new De,_=new De,S=new De,A=new De,w=new De,b=[],C={};function F(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function L(y){c.theta-=y}function O(y){c.phi-=y}const z=function(){const y=new I;return function(ce,pe){y.setFromMatrixColumn(pe,0),y.multiplyScalar(-ce),u.add(y)}}(),he=function(){const y=new I;return function(ce,pe){n.screenSpacePanning===!0?y.setFromMatrixColumn(pe,1):(y.setFromMatrixColumn(pe,0),y.crossVectors(n.object.up,y)),y.multiplyScalar(ce),u.add(y)}}(),oe=function(){const y=new I;return function(ce,pe){const me=n.domElement;if(n.object.isPerspectiveCamera){const be=n.object.position;y.copy(be).sub(n.target);let Fe=y.length();Fe*=Math.tan(n.object.fov/2*Math.PI/180),z(2*ce*Fe/me.clientHeight,n.object.matrix),he(2*pe*Fe/me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(ce*(n.object.right-n.object.left)/n.object.zoom/me.clientWidth,n.object.matrix),he(pe*(n.object.top-n.object.bottom)/n.object.zoom/me.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function N(y){n.object.isPerspectiveCamera?l/=y:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*y)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function te(y){n.object.isPerspectiveCamera?l*=y:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/y)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(y){h.set(y.clientX,y.clientY)}function Y(y){S.set(y.clientX,y.clientY)}function W(y){p.set(y.clientX,y.clientY)}function G(y){m.set(y.clientX,y.clientY),g.subVectors(m,h).multiplyScalar(n.rotateSpeed);const q=n.domElement;L(2*Math.PI*g.x/q.clientHeight),O(2*Math.PI*g.y/q.clientHeight),h.copy(m),n.update()}function K(y){A.set(y.clientX,y.clientY),w.subVectors(A,S),w.y>0?N(v()):w.y<0&&te(v()),S.copy(A),n.update()}function fe(y){d.set(y.clientX,y.clientY),_.subVectors(d,p).multiplyScalar(n.panSpeed),oe(_.x,_.y),p.copy(d),n.update()}function le(y){y.deltaY<0?te(v()):y.deltaY>0&&N(v()),n.update()}function se(y){let q=!1;switch(y.code){case n.keys.UP:oe(0,n.keyPanSpeed),q=!0;break;case n.keys.BOTTOM:oe(0,-n.keyPanSpeed),q=!0;break;case n.keys.LEFT:oe(n.keyPanSpeed,0),q=!0;break;case n.keys.RIGHT:oe(-n.keyPanSpeed,0),q=!0;break}q&&(y.preventDefault(),n.update())}function ye(){if(b.length===1)h.set(b[0].pageX,b[0].pageY);else{const y=.5*(b[0].pageX+b[1].pageX),q=.5*(b[0].pageY+b[1].pageY);h.set(y,q)}}function Ee(){if(b.length===1)p.set(b[0].pageX,b[0].pageY);else{const y=.5*(b[0].pageX+b[1].pageX),q=.5*(b[0].pageY+b[1].pageY);p.set(y,q)}}function Q(){const y=b[0].pageX-b[1].pageX,q=b[0].pageY-b[1].pageY,ce=Math.sqrt(y*y+q*q);S.set(0,ce)}function Pe(){n.enableZoom&&Q(),n.enablePan&&Ee()}function Se(){n.enableZoom&&Q(),n.enableRotate&&ye()}function we(y){if(b.length==1)m.set(y.pageX,y.pageY);else{const ce=_e(y),pe=.5*(y.pageX+ce.x),me=.5*(y.pageY+ce.y);m.set(pe,me)}g.subVectors(m,h).multiplyScalar(n.rotateSpeed);const q=n.domElement;L(2*Math.PI*g.x/q.clientHeight),O(2*Math.PI*g.y/q.clientHeight),h.copy(m)}function xe(y){if(b.length===1)d.set(y.pageX,y.pageY);else{const q=_e(y),ce=.5*(y.pageX+q.x),pe=.5*(y.pageY+q.y);d.set(ce,pe)}_.subVectors(d,p).multiplyScalar(n.panSpeed),oe(_.x,_.y),p.copy(d)}function Be(y){const q=_e(y),ce=y.pageX-q.x,pe=y.pageY-q.y,me=Math.sqrt(ce*ce+pe*pe);A.set(0,me),w.set(0,Math.pow(A.y/S.y,n.zoomSpeed)),N(w.y),S.copy(A)}function Ae(y){n.enableZoom&&Be(y),n.enablePan&&xe(y)}function E(y){n.enableZoom&&Be(y),n.enableRotate&&we(y)}function P(y){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(y.pointerId),n.domElement.addEventListener("pointermove",k),n.domElement.addEventListener("pointerup",Z)),B(y),y.pointerType==="touch"?M(y):ie(y))}function k(y){n.enabled!==!1&&(y.pointerType==="touch"?x(y):re(y))}function Z(y){X(y),b.length===0&&(n.domElement.releasePointerCapture(y.pointerId),n.domElement.removeEventListener("pointermove",k),n.domElement.removeEventListener("pointerup",Z)),n.dispatchEvent(Pc),s=r.NONE}function J(y){X(y)}function ie(y){let q;switch(y.button){case 0:q=n.mouseButtons.LEFT;break;case 1:q=n.mouseButtons.MIDDLE;break;case 2:q=n.mouseButtons.RIGHT;break;default:q=-1}switch(q){case di.DOLLY:if(n.enableZoom===!1)return;Y(y),s=r.DOLLY;break;case di.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enablePan===!1)return;W(y),s=r.PAN}else{if(n.enableRotate===!1)return;H(y),s=r.ROTATE}break;case di.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enableRotate===!1)return;H(y),s=r.ROTATE}else{if(n.enablePan===!1)return;W(y),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(bo)}function re(y){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;G(y);break;case r.DOLLY:if(n.enableZoom===!1)return;K(y);break;case r.PAN:if(n.enablePan===!1)return;fe(y);break}}function ae(y){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(y.preventDefault(),n.dispatchEvent(bo),le(y),n.dispatchEvent(Pc))}function ue(y){n.enabled===!1||n.enablePan===!1||se(y)}function M(y){switch(ne(y),b.length){case 1:switch(n.touches.ONE){case pi.ROTATE:if(n.enableRotate===!1)return;ye(),s=r.TOUCH_ROTATE;break;case pi.PAN:if(n.enablePan===!1)return;Ee(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case pi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(),s=r.TOUCH_DOLLY_PAN;break;case pi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Se(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(bo)}function x(y){switch(ne(y),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;we(y),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;xe(y),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ae(y),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;E(y),n.update();break;default:s=r.NONE}}function R(y){n.enabled!==!1&&y.preventDefault()}function B(y){b.push(y)}function X(y){delete C[y.pointerId];for(let q=0;q<b.length;q++)if(b[q].pointerId==y.pointerId){b.splice(q,1);return}}function ne(y){let q=C[y.pointerId];q===void 0&&(q=new De,C[y.pointerId]=q),q.set(y.pageX,y.pageY)}function _e(y){const q=y.pointerId===b[0].pointerId?b[1]:b[0];return C[q.pointerId]}n.domElement.addEventListener("contextmenu",R),n.domElement.addEventListener("pointerdown",P),n.domElement.addEventListener("pointercancel",J),n.domElement.addEventListener("wheel",ae,{passive:!1}),this.update()}}const tv=/^[og]\s*(.+)?/,nv=/^mtllib /,iv=/^usemtl /,rv=/^usemap /,Dc=/\s+/,Rc=new I,So=new I,Ic=new I,Fc=new I,Dt=new I,es=new He;function sv(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(e,t,n){const r=this.vertices,s=this.object.geometry.normals;Rc.fromArray(r,e),So.fromArray(r,t),Ic.fromArray(r,n),Dt.subVectors(Ic,So),Fc.subVectors(Rc,So),Dt.cross(Fc),Dt.normalize(),s.push(Dt.x,Dt.y,Dt.z),s.push(Dt.x,Dt.y,Dt.z),s.push(Dt.x,Dt.y,Dt.z)},addColor:function(e,t,n){const r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[n]!==void 0&&s.push(r[n+0],r[n+1],r[n+2])},addUV:function(e,t,n){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[t+0],r[t+1]),s.push(r[n+0],r[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,r,s,a,o,c,l){const u=this.vertices.length;let f=this.parseVertexIndex(e,u),h=this.parseVertexIndex(t,u),m=this.parseVertexIndex(n,u);if(this.addVertex(f,h,m),this.addColor(f,h,m),o!==void 0&&o!==""){const g=this.normals.length;f=this.parseNormalIndex(o,g),h=this.parseNormalIndex(c,g),m=this.parseNormalIndex(l,g),this.addNormal(f,h,m)}else this.addFaceNormal(f,h,m);if(r!==void 0&&r!==""){const g=this.uvs.length;f=this.parseUVIndex(r,g),h=this.parseUVIndex(s,g),m=this.parseUVIndex(a,g),this.addUV(f,h,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,r=e.length;n<r;n++){const s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,r=this.uvs.length;for(let s=0,a=e.length;s<a;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,a=t.length;s<a;s++)this.addUVLine(this.parseUVIndex(t[s],r))}};return i.startObject("",!1),i}class ov extends Cs{constructor(e){super(e),this.materials=null}load(e,t,n,r){const s=this,a=new jx(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},n,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new sv;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let r=[];for(let o=0,c=n.length;o<c;o++){const l=n[o].trimStart();if(l.length===0)continue;const u=l.charAt(0);if(u!=="#")if(u==="v"){const f=l.split(Dc);switch(f[0]){case"v":t.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7?(es.setRGB(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6])).convertSRGBToLinear(),t.colors.push(es.r,es.g,es.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":t.uvs.push(parseFloat(f[1]),parseFloat(f[2]));break}}else if(u==="f"){const h=l.slice(1).trim().split(Dc),m=[];for(let p=0,d=h.length;p<d;p++){const _=h[p];if(_.length>0){const S=_.split("/");m.push(S)}}const g=m[0];for(let p=1,d=m.length-1;p<d;p++){const _=m[p],S=m[p+1];t.addFace(g[0],_[0],S[0],g[1],_[1],S[1],g[2],_[2],S[2])}}else if(u==="l"){const f=l.substring(1).trim().split(" ");let h=[];const m=[];if(l.indexOf("/")===-1)h=f;else for(let g=0,p=f.length;g<p;g++){const d=f[g].split("/");d[0]!==""&&h.push(d[0]),d[1]!==""&&m.push(d[1])}t.addLineGeometry(h,m)}else if(u==="p"){const h=l.slice(1).trim().split(" ");t.addPointGeometry(h)}else if((r=tv.exec(l))!==null){const f=(" "+r[0].slice(1).trim()).slice(1);t.startObject(f)}else if(iv.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(nv.test(l))t.materialLibraries.push(l.substring(7).trim());else if(rv.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(r=l.split(" "),r.length>1){const h=r[1].trim().toLowerCase();t.object.smooth=h!=="0"&&h!=="off"}else t.object.smooth=!0;const f=t.object.currentMaterial();f&&(f.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const s=new ar;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,c=t.objects.length;o<c;o++){const l=t.objects[o],u=l.geometry,f=l.materials,h=u.type==="Line",m=u.type==="Points";let g=!1;if(u.vertices.length===0)continue;const p=new zt;p.setAttribute("position",new ot(u.vertices,3)),u.normals.length>0&&p.setAttribute("normal",new ot(u.normals,3)),u.colors.length>0&&(g=!0,p.setAttribute("color",new ot(u.colors,3))),u.hasUVIndices===!0&&p.setAttribute("uv",new ot(u.uvs,2));const d=[];for(let S=0,A=f.length;S<A;S++){const w=f[S],b=w.name+"_"+w.smooth+"_"+g;let C=t.materials[b];if(this.materials!==null){if(C=this.materials.create(w.name),h&&C&&!(C instanceof hr)){const F=new hr;xn.prototype.copy.call(F,C),F.color.copy(C.color),C=F}else if(m&&C&&!(C instanceof lr)){const F=new lr({size:10,sizeAttenuation:!1});xn.prototype.copy.call(F,C),F.color.copy(C.color),F.map=C.map,C=F}}C===void 0&&(h?C=new hr:m?C=new lr({size:1,sizeAttenuation:!1}):C=new Vx,C.name=w.name,C.flatShading=!w.smooth,C.vertexColors=g,t.materials[b]=C),d.push(C)}let _;if(d.length>1){for(let S=0,A=f.length;S<A;S++){const w=f[S];p.addGroup(w.groupStart,w.groupCount,S)}h?_=new $o(p,d):m?_=new yo(p,d):_=new jt(p,d)}else h?_=new $o(p,d[0]):m?_=new yo(p,d[0]):_=new jt(p,d[0]);_.name=l.name,s.add(_)}else if(t.vertices.length>0){const o=new lr({size:1,sizeAttenuation:!1}),c=new zt;c.setAttribute("position",new ot(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new ot(t.colors,3)),o.vertexColors=!0);const l=new yo(c,o);s.add(l)}return s}}const av=i=>(fh("data-v-fcb89750"),i=i(),hh(),i),lv={id:"viewer"},cv={id:"bottom-panel"},uv={id:"slider-truck"},fv={class:"ms-2"},hv=av(()=>st("label",null,"Speed up ",-1)),dv=da({__name:"Viewer",props:{flightData:{type:Object,required:!0}},setup(i){const e=i,t=100,n=t*2,r=80,s=Math.PI/180,a=$n(),o=$n();let c,l=$n(0),u=$n(1);const f=(h,m,g)=>{new ov().load(m,p=>{c=p;const d=(()=>{const S=new Zi().setFromObject(p);return Math.max(S.max.x-S.min.x,S.max.y-S.min.y,S.max.z-S.min.z)})(),_=t/d;p.scale.set(_,_,_),p.rotateX(r*s),g&&p.traverse(S=>{var A=new Yx().load(g);S instanceof jt&&(S.material.map=A)}),h.add(p)})};return pa(()=>{if(!a.value)return;const h=new Gx;h.add(new Qx(n));const m=new Jx(16777215,.4);h.add(m);const g=new Kx(16777215,1);g.position.set(1,1,-2).normalize(),h.add(g);const p=new It(60,a.value.offsetWidth/a.value.offsetHeight);p.position.set(t/1.6,t/1.6,t/1.6),p.lookAt(h.position);const d=new nf({antialias:!0});d.setClearColor(1052704,1),d.setPixelRatio(window.devicePixelRatio),d.setSize(a.value.offsetWidth,a.value.offsetHeight),a.value.appendChild(d.domElement);const _=new ev(p,d.domElement);_.maxPolarAngle=Math.PI*.5,_.minDistance=.1,_.maxDistance=n,f(h,"/flight-visualizer/rocket.obj","/flight-visualizer/rocket_texture.png");let S=0;d.setAnimationLoop(A=>{if(e.flightData){const w=A/1e3,b=e.flightData.steps[l.value],F=e.flightData.steps[l.value+1].time-b.time;S+F/u.value<=w&&(S=w,c.rotation.x+=b.gyro.x*F*s,c.rotation.y+=b.gyro.y*F*s,c.rotation.z+=b.gyro.z*F*s,l.value++,l.value===e.flightData.steps.length-1&&(l.value=0),o.value.style.width=`${100*l.value/e.flightData.steps.length}%`)}_.update(),d.render(h,p)})}),(h,m)=>(_a(),xa("div",lv,[st("div",{id:"view",ref_key:"view",ref:a},null,512),st("div",cv,[st("div",uv,[st("div",{id:"slider",ref_key:"slider",ref:o},null,512),st("div",fv,[st("p",null,Oc(e.flightData?e.flightData.steps[zi(l)].time:0)+" s",1),hv,Nh(st("input",{type:"number",class:"ms-1","onUpdate:modelValue":m[0]||(m[0]=g=>lt(u)?u.value=g:u=g),min:"0.1",max:"20"},null,512),[[Ud,zi(u)]])])])])]))}});const pv=Ma(dv,[["__scopeId","data-v-fcb89750"]]),mv={id:"app"},gv={id:"top-bar",class:"text-center"},_v={class:"m-0"},xv={id:"main",class:"row g-0"},vv={class:"col-2"},Mv={class:"col-10"},yv=da({__name:"App",setup(i){let e=$n(),t=$n();const n=(r,s)=>{e.value=r,t.value=s};return(r,s)=>(_a(),xa("div",mv,[st("div",gv,[st("p",_v,"Flight Visualizer "+Oc(zi(t)?` - ${zi(t)}`:""),1)]),st("div",xv,[st("div",vv,[mn(qd,{onCsvLoad:n})]),st("div",Mv,[mn(pv,{flightData:zi(e)},null,8,["flightData"])])])]))}});const bv=Ma(yv,[["__scopeId","data-v-aac5c86d"]]);kd(bv).mount("#app");
