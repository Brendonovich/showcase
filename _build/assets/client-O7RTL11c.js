const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/_...404_-CvZfi0wJ.js","assets/HttpStatusCode-DtD0FKv-.js","assets/index-B2zmu8Rr.js"])))=>i.map(i=>d[i]);
import{s as p,c as Pe,u as J,a as C,e as Qe,r as Ce,b as A,g as _,d as Re,f as Le,h as U,o as ce,i as et,j as tt,k as nt,l as x,m as rt,S as Te,n as Ne,p as z,q as it,t as ot,v as st,H as lt,E as at}from"./HttpStatusCode-DtD0FKv-.js";const ct=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],ut=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...ct]),ft=new Set(["innerHTML","textContent","innerText","children"]),dt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),ht=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function mt(e,n){const t=ht[e];return typeof t=="object"?t[n]?t.$:void 0:t}const gt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),qn=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),pt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function yt(e,n,t){let r=t.length,i=n.length,o=r,l=0,s=0,a=n[i-1].nextSibling,c=null;for(;l<i||s<o;){if(n[l]===t[s]){l++,s++;continue}for(;n[i-1]===t[o-1];)i--,o--;if(i===l){const u=o<r?s?t[s-1].nextSibling:t[o-s]:a;for(;s<o;)e.insertBefore(t[s++],u)}else if(o===s)for(;l<i;)(!c||!c.has(n[l]))&&n[l].remove(),l++;else if(n[l]===t[o-1]&&t[s]===n[i-1]){const u=n[--i].nextSibling;e.insertBefore(t[s++],n[l++].nextSibling),e.insertBefore(t[--o],u),n[i]=t[o]}else{if(!c){c=new Map;let f=s;for(;f<o;)c.set(t[f],f++)}const u=c.get(n[l]);if(u!=null)if(s<u&&u<o){let f=l,m=1,g;for(;++f<i&&f<o&&!((g=c.get(n[f]))==null||g!==u+m);)m++;if(m>u-s){const $=n[l];for(;s<u;)e.insertBefore(t[s++],$)}else e.replaceChild(t[s++],n[l++])}else l++;else n[l++].remove()}}}const ge="_$DX_DELEGATE";function pe(e,n,t,r={}){let i;return Pe(o=>{i=o,n===document?e():j(n,e(),n.firstChild?null:void 0,t)},r.owner),()=>{i(),n.textContent=""}}function k(e,n,t){let r;const i=()=>{const l=document.createElement("template");return l.innerHTML=e,t?l.content.firstChild.firstChild:l.content.firstChild},o=n?()=>J(()=>document.importNode(r||(r=i()),!0)):()=>(r||(r=i())).cloneNode(!0);return o.cloneNode=o,o}function ke(e,n=window.document){const t=n[ge]||(n[ge]=new Set);for(let r=0,i=e.length;r<i;r++){const o=e[r];t.has(o)||(t.add(o),n.addEventListener(o,Oe))}}function wt(e,n,t){R(e)||(e[n]=t)}function oe(e,n,t){R(e)||(t==null?e.removeAttribute(n):e.setAttribute(n,t))}function bt(e,n,t,r){R(e)||(r==null?e.removeAttributeNS(n,t):e.setAttributeNS(n,t,r))}function B(e,n){R(e)||(n==null?e.removeAttribute("class"):e.className=n)}function $t(e,n,t,r){if(r)Array.isArray(t)?(e[`$$${n}`]=t[0],e[`$$${n}Data`]=t[1]):e[`$$${n}`]=t;else if(Array.isArray(t)){const i=t[0];e.addEventListener(n,t[0]=o=>i.call(e,t[1],o))}else e.addEventListener(n,t)}function Et(e,n,t={}){const r=Object.keys(n||{}),i=Object.keys(t);let o,l;for(o=0,l=i.length;o<l;o++){const s=i[o];!s||s==="undefined"||n[s]||(we(e,s,!1),delete t[s])}for(o=0,l=r.length;o<l;o++){const s=r[o],a=!!n[s];!s||s==="undefined"||t[s]===a||!a||(we(e,s,!0),t[s]=a)}return t}function xt(e,n,t){if(!n)return t?oe(e,"style"):n;const r=e.style;if(typeof n=="string")return r.cssText=n;typeof t=="string"&&(r.cssText=t=void 0),t||(t={}),n||(n={});let i,o;for(o in t)n[o]==null&&r.removeProperty(o),delete t[o];for(o in n)i=n[o],i!==t[o]&&(r.setProperty(o,i),t[o]=i);return t}function G(e,n={},t,r){const i={};return r||C(()=>i.children=H(e,n.children,i.children)),C(()=>typeof n.ref=="function"&&Y(n.ref,e)),C(()=>vt(e,n,t,!0,i,!0)),i}function Hn(e,n){const t=e[n];return Object.defineProperty(e,n,{get(){return t()},enumerable:!0}),e}function Y(e,n,t){return J(()=>e(n,t))}function j(e,n,t,r){if(t!==void 0&&!r&&(r=[]),typeof n!="function")return H(e,n,r,t);C(i=>H(e,n(),i,t),r)}function vt(e,n,t,r,i={},o=!1){n||(n={});for(const l in i)if(!(l in n)){if(l==="children")continue;i[l]=be(e,l,null,i[l],t,o)}for(const l in n){if(l==="children")continue;const s=n[l];i[l]=be(e,l,s,i[l],t,o)}}function _t(e,n,t={}){if(globalThis._$HY.done)return pe(e,n,[...n.childNodes],t);p.completed=globalThis._$HY.completed,p.events=globalThis._$HY.events,p.load=r=>globalThis._$HY.r[r],p.has=r=>r in globalThis._$HY.r,p.gather=r=>Ee(n,r),p.registry=new Map,p.context={id:t.renderId||"",count:0};try{return Ee(n,t.renderId),pe(e,n,[...n.childNodes],t)}finally{p.context=null}}function N(e){let n,t;return!R()||!(n=p.registry.get(t=St()))?e():(p.completed&&p.completed.add(n),p.registry.delete(t),n)}function ye(e){let n=e,t=0,r=[];if(R(e))for(;n;){if(n.nodeType===8){const i=n.nodeValue;if(i==="$")t++;else if(i==="/"){if(t===0)return[n,r];t--}}r.push(n),n=n.nextSibling}return[n,r]}function K(){p.events&&!p.events.queued&&(queueMicrotask(()=>{const{completed:e,events:n}=p;for(n.queued=!1;n.length;){const[t,r]=n[0];if(!e.has(t))return;n.shift(),Oe(r)}p.done&&(p.events=_$HY.events=null,p.completed=_$HY.completed=null)}),p.events.queued=!0)}function R(e){return!!p.context&&!p.done&&(!e||e.isConnected)}function At(e){return e.toLowerCase().replace(/-([a-z])/g,(n,t)=>t.toUpperCase())}function we(e,n,t){const r=n.trim().split(/\s+/);for(let i=0,o=r.length;i<o;i++)e.classList.toggle(r[i],t)}function be(e,n,t,r,i,o){let l,s,a,c,u;if(n==="style")return xt(e,t,r);if(n==="classList")return Et(e,t,r);if(t===r)return r;if(n==="ref")o||t(e);else if(n.slice(0,3)==="on:"){const f=n.slice(3);r&&e.removeEventListener(f,r),t&&e.addEventListener(f,t)}else if(n.slice(0,10)==="oncapture:"){const f=n.slice(10);r&&e.removeEventListener(f,r,!0),t&&e.addEventListener(f,t,!0)}else if(n.slice(0,2)==="on"){const f=n.slice(2).toLowerCase(),m=gt.has(f);if(!m&&r){const g=Array.isArray(r)?r[0]:r;e.removeEventListener(f,g)}(m||t)&&($t(e,f,t,m),m&&ke([f]))}else if(n.slice(0,5)==="attr:")oe(e,n.slice(5),t);else if((u=n.slice(0,5)==="prop:")||(a=ft.has(n))||!i&&((c=mt(n,e.tagName))||(s=ut.has(n)))||(l=e.nodeName.includes("-"))){if(u)n=n.slice(5),s=!0;else if(R(e))return t;n==="class"||n==="className"?B(e,t):l&&!s&&!a?e[At(n)]=t:e[c||n]=t}else{const f=i&&n.indexOf(":")>-1&&pt[n.split(":")[0]];f?bt(e,f,n,t):oe(e,dt[n]||n,t)}return t}function Oe(e){if(p.registry&&p.events&&p.events.find(([r,i])=>i===e))return;const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),p.registry&&!p.done&&(p.done=_$HY.done=!0);t;){const r=t[n];if(r&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?r.call(t,i,e):r.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function H(e,n,t,r,i){const o=R(e);if(o){!t&&(t=[...e.childNodes]);let a=[];for(let c=0;c<t.length;c++){const u=t[c];u.nodeType===8&&u.data.slice(0,2)==="!$"?u.remove():a.push(u)}t=a}for(;typeof t=="function";)t=t();if(n===t)return t;const l=typeof n,s=r!==void 0;if(e=s&&t[0]&&t[0].parentNode||e,l==="string"||l==="number"){if(o||l==="number"&&(n=n.toString(),n===t))return t;if(s){let a=t[0];a&&a.nodeType===3?a.data!==n&&(a.data=n):a=document.createTextNode(n),t=I(e,t,r,a)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||l==="boolean"){if(o)return t;t=I(e,t,r)}else{if(l==="function")return C(()=>{let a=n();for(;typeof a=="function";)a=a();t=H(e,a,t,r)}),()=>t;if(Array.isArray(n)){const a=[],c=t&&Array.isArray(t);if(se(a,n,t,i))return C(()=>t=H(e,a,t,r,!0)),()=>t;if(o){if(!a.length)return t;if(r===void 0)return t=[...e.childNodes];let u=a[0];if(u.parentNode!==e)return t;const f=[u];for(;(u=u.nextSibling)!==r;)f.push(u);return t=f}if(a.length===0){if(t=I(e,t,r),s)return t}else c?t.length===0?$e(e,a,r):yt(e,t,a):(t&&I(e),$e(e,a));t=a}else if(n.nodeType){if(o&&n.parentNode)return t=s?[n]:n;if(Array.isArray(t)){if(s)return t=I(e,t,r,n);I(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function se(e,n,t,r){let i=!1;for(let o=0,l=n.length;o<l;o++){let s=n[o],a=t&&t[e.length],c;if(!(s==null||s===!0||s===!1))if((c=typeof s)=="object"&&s.nodeType)e.push(s);else if(Array.isArray(s))i=se(e,s,a)||i;else if(c==="function")if(r){for(;typeof s=="function";)s=s();i=se(e,Array.isArray(s)?s:[s],Array.isArray(a)?a:[a])||i}else e.push(s),i=!0;else{const u=String(s);a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return i}function $e(e,n,t=null){for(let r=0,i=n.length;r<i;r++)e.insertBefore(n[r],t)}function I(e,n,t,r){if(t===void 0)return e.textContent="";const i=r||document.createTextNode("");if(n.length){let o=!1;for(let l=n.length-1;l>=0;l--){const s=n[l];if(i!==s){const a=s.parentNode===e;!o&&!l?a?e.replaceChild(i,s):e.insertBefore(i,t):a&&s.remove()}else o=!0}}else e.insertBefore(i,t);return[i]}function Ee(e,n){const t=e.querySelectorAll("*[data-hk]");for(let r=0;r<t.length;r++){const i=t[r],o=i.getAttribute("data-hk");(!n||o.startsWith(n))&&!p.registry.has(o)&&p.registry.set(o,i)}}function St(){return p.getNextContextId()}const Pt=!1,Ct=(...e)=>(Qe(),_t(...e)),te="Invariant Violation",{setPrototypeOf:Rt=function(e,n){return e.__proto__=n,e}}=Object;class ue extends Error{framesToPop=1;name=te;constructor(n=te){super(typeof n=="number"?`${te}: ${n} (see https://github.com/apollographql/invariant-packages)`:n),Rt(this,ue.prototype)}}function ne(e,n){if(!e)throw new ue(n)}const Lt=/^[A-Za-z]:\//;function Tt(e=""){return e&&e.replace(/\\/g,"/").replace(Lt,n=>n.toUpperCase())}const Nt=/^[/\\]{2}/,kt=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,Ot=/^[A-Za-z]:$/,It=function(e){if(e.length===0)return".";e=Tt(e);const n=e.match(Nt),t=le(e),r=e[e.length-1]==="/";return e=jt(e,!t),e.length===0?t?"/":r?"./":".":(r&&(e+="/"),Ot.test(e)&&(e+="/"),n?t?`//${e}`:`//./${e}`:t&&!le(e)?`/${e}`:e)},Ie=function(...e){if(e.length===0)return".";let n;for(const t of e)t&&t.length>0&&(n===void 0?n=t:n+=`/${t}`);return n===void 0?".":It(n.replace(/\/\/+/g,"/"))};function jt(e,n){let t="",r=0,i=-1,o=0,l=null;for(let s=0;s<=e.length;++s){if(s<e.length)l=e[s];else{if(l==="/")break;l="/"}if(l==="/"){if(!(i===s-1||o===1))if(o===2){if(t.length<2||r!==2||t[t.length-1]!=="."||t[t.length-2]!=="."){if(t.length>2){const a=t.lastIndexOf("/");a===-1?(t="",r=0):(t=t.slice(0,a),r=t.length-1-t.lastIndexOf("/")),i=s,o=0;continue}else if(t.length>0){t="",r=0,i=s,o=0;continue}}n&&(t+=t.length>0?"/..":"..",r=2)}else t.length>0?t+=`/${e.slice(i+1,s)}`:t=e.slice(i+1,s),r=s-i-1;i=s,o=0}else l==="."&&o!==-1?++o:o=-1}return t}const le=function(e){return kt.test(e)};function Dt(e){return`virtual:${e}`}function Mt(e){return e.handler?.endsWith(".html")?le(e.handler)?e.handler:Ie(e.root,e.handler):`$vinxi/handler/${e.name}`}const Ft=new Proxy({},{get(e,n){return ne(typeof n=="string","Bundler name should be a string"),{name:n,type:"client",handler:Dt(Mt({name:n})),baseURL:"/_build",chunks:new Proxy({},{get(t,r){ne(typeof r=="string","Chunk expected");let i=Ie("/_build",r+".mjs");return{import(){return import(i)},output:{path:i}}}}),inputs:new Proxy({},{get(t,r){ne(typeof r=="string","Input must be string");let i=window.manifest[r].output;return{async import(){return import(i)},async assets(){return window.manifest[r].assets},output:{path:i}}}})}}});globalThis.MANIFEST=Ft;const Ut="modulepreload",Bt=function(e){return"/_build/"+e},xe={},X=function(n,t,r){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");i=Promise.all(t.map(s=>{if(s=Bt(s),s in xe)return;xe[s]=!0;const a=s.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${c}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Ut,a||(u.as="script",u.crossOrigin=""),u.href=s,l&&u.setAttribute("nonce",l),document.head.appendChild(u),a)return new Promise((f,m)=>{u.addEventListener("load",f),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${s}`)))})}))}return i.then(()=>n()).catch(o=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o})};function je(){let e=new Set;function n(i){return e.add(i),()=>e.delete(i)}let t=!1;function r(i,o){if(t)return!(t=!1);const l={to:i,options:o,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const s of e)s.listener({...l,from:s.location,retry:a=>{a&&(t=!0),s.navigate(i,{...o,resolve:!1})}});return!l.defaultPrevented}return{subscribe:n,confirm:r}}let ae;function fe(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),ae=window.history.state._depth}fe();function qt(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function Ht(e,n){let t=!1;return()=>{const r=ae;fe();const i=r==null?null:ae-r;if(t){t=!1;return}i&&n(i)?(t=!0,window.history.go(-i)):e()}}const Wt=/^(?:[a-z0-9]+:)?\/\//i,Vt=/^\/+|(\/)\/+$/g,De="http://sr";function q(e,n=!1){const t=e.replace(Vt,"$1");return t?n||/^[?#]/.test(t)?t:"/"+t:""}function Z(e,n,t){if(Wt.test(n))return;const r=q(e),i=t&&q(t);let o="";return!i||n.startsWith("/")?o=r:i.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+i:o=i,(o||"/")+q(n,!o)}function zt(e,n){if(e==null)throw new Error(n);return e}function Gt(e,n){return q(e).replace(/\/*(\*.*)?$/g,"")+q(n)}function Me(e){const n={};return e.searchParams.forEach((t,r)=>{n[r]=t}),n}function Kt(e,n,t){const[r,i]=e.split("/*",2),o=r.split("/").filter(Boolean),l=o.length;return s=>{const a=s.split("/").filter(Boolean),c=a.length-l;if(c<0||c>0&&i===void 0&&!n)return null;const u={path:l?"":"/",params:{}},f=m=>t===void 0?void 0:t[m];for(let m=0;m<l;m++){const g=o[m],$=a[m],h=g[0]===":",d=h?g.slice(1):g;if(h&&re($,f(d)))u.params[d]=$;else if(h||!re($,g))return null;u.path+=`/${$}`}if(i){const m=c?a.slice(-c).join("/"):"";if(re(m,f(i)))u.params[i]=m;else return null}return u}}function re(e,n){const t=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return n===void 0?!0:typeof n=="string"?t(n):typeof n=="function"?n(e):Array.isArray(n)?n.some(t):n instanceof RegExp?n.test(e):!1}function Yt(e){const[n,t]=e.pattern.split("/*",2),r=n.split("/").filter(Boolean);return r.reduce((i,o)=>i+(o.startsWith(":")?2:3),r.length-(t===void 0?0:1))}function Fe(e){const n=new Map,t=_();return new Proxy({},{get(r,i){return n.has(i)||Ce(t,()=>n.set(i,A(()=>e()[i]))),n.get(i)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Ue(e){let n=/(\/?\:[^\/]+)\?/.exec(e);if(!n)return[e];let t=e.slice(0,n.index),r=e.slice(n.index+n[0].length);const i=[t,t+=n[1]];for(;n=/^(\/\:[^\/]+)\?/.exec(r);)i.push(t+=n[1]),r=r.slice(n[0].length);return Ue(r).reduce((o,l)=>[...o,...i.map(s=>s+l)],[])}const Xt=100,Be=Le(),qe=Le(),Zt=()=>zt(Re(Be),"<A> and 'use' router primitives can be only used inside a Route."),He=()=>Zt().params;function Jt(e,n=""){const{component:t,preload:r,load:i,children:o,info:l}=e,s=!o||Array.isArray(o)&&!o.length,a={key:e,component:t,preload:r||i,info:l};return We(e.path).reduce((c,u)=>{for(const f of Ue(u)){const m=Gt(n,f);let g=s?m:m.split("/*",1)[0];g=g.split("/").map($=>$.startsWith(":")||$.startsWith("*")?$:encodeURIComponent($)).join("/"),c.push({...a,originalPath:u,pattern:g,matcher:Kt(g,!s,e.matchFilters)})}return c},[])}function Qt(e,n=0){return{routes:e,score:Yt(e[e.length-1])*1e4-n,matcher(t){const r=[];for(let i=e.length-1;i>=0;i--){const o=e[i],l=o.matcher(t);if(!l)return null;r.unshift({...l,route:o})}return r}}}function We(e){return Array.isArray(e)?e:[e]}function Ve(e,n="",t=[],r=[]){const i=We(e);for(let o=0,l=i.length;o<l;o++){const s=i[o];if(s&&typeof s=="object"){s.hasOwnProperty("path")||(s.path="");const a=Jt(s,n);for(const c of a){t.push(c);const u=Array.isArray(s.children)&&s.children.length===0;if(s.children&&!u)Ve(s.children,c.pattern,t,r);else{const f=Qt([...t],r.length);r.push(f)}t.pop()}}}return t.length?r:r.sort((o,l)=>l.score-o.score)}function ie(e,n){for(let t=0,r=e.length;t<r;t++){const i=e[t].matcher(n);if(i)return i}return[]}function en(e,n){const t=new URL(De),r=A(a=>{const c=e();try{return new URL(c,t)}catch{return console.error(`Invalid path ${c}`),a}},t,{equals:(a,c)=>a.href===c.href}),i=A(()=>r().pathname),o=A(()=>r().search,!0),l=A(()=>r().hash),s=()=>"";return{get pathname(){return i()},get search(){return o()},get hash(){return l()},get state(){return n()},get key(){return s()},query:Fe(ce(o,()=>Me(r())))}}let T;function tn(){return T}function nn(e,n,t,r={}){const{signal:[i,o],utils:l={}}=e,s=l.parsePath||(b=>b),a=l.renderPath||(b=>b),c=l.beforeLeave||je(),u=Z("",r.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!i().value&&o({value:u,replace:!0,scroll:!1});const[f,m]=U(!1);let g;const $=(b,E)=>{E.value===h()&&E.state===y()||(g===void 0&&m(!0),T=b,g=E,et(()=>{g===E&&(d(g.value),w(g.state),tt(),L[1]([]))}).finally(()=>{g===E&&nt(()=>{T=void 0,b==="navigate"&&Ze(g),m(!1),g=void 0})}))},[h,d]=U(i().value),[y,w]=U(i().state),P=en(h,y),v=[],L=U([]),M=A(()=>typeof r.transformUrl=="function"?ie(n(),r.transformUrl(P.pathname)):ie(n(),P.pathname)),Ke=Fe(()=>{const b=M(),E={};for(let S=0;S<b.length;S++)Object.assign(E,b[S].params);return E}),de={pattern:u,path:()=>u,outlet:()=>null,resolvePath(b){return Z(u,b)}};return C(ce(i,b=>$("native",b),{defer:!0})),{base:de,location:P,params:Ke,isRouting:f,renderPath:a,parsePath:s,navigatorFactory:Xe,matches:M,beforeLeave:c,preloadRoute:Je,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:L};function Ye(b,E,S){J(()=>{if(typeof E=="number"){E&&(l.go?l.go(E):console.warn("Router integration does not support relative routing"));return}const W=!E||E[0]==="?",{replace:Q,resolve:O,scroll:ee,state:F}={replace:!1,resolve:!W,scroll:!0,...S};let he;const V=O?b.resolvePath(E):Z(W&&(he=i().value)&&he.split("?")[0]||"",E);if(V===void 0)throw new Error(`Path '${E}' is not a routable path`);if(v.length>=Xt)throw new Error("Too many redirects");const me=h();(V!==me||F!==y())&&(Pt||c.confirm(V,S)&&(v.push({value:me,replace:Q,scroll:ee,state:y()}),$("navigate",{value:V,state:F})))})}function Xe(b){return b=b||Re(qe)||de,(E,S)=>Ye(b,E,S)}function Ze(b){const E=v[0];E&&(o({...b,replace:E.replace,scroll:E.scroll}),v.length=0)}function Je(b,E={}){const S=ie(n(),b.pathname),W=T;T="preload";for(let Q in S){const{route:O,params:ee}=S[Q];O.component&&O.component.preload&&O.component.preload();const{preload:F}=O;E.preloadData&&F&&Ce(t(),()=>F({params:ee,location:{pathname:b.pathname,search:b.search,hash:b.hash,query:Me(b),state:null,key:""},intent:"preload"}))}T=W}}function rn(e,n,t,r){const{base:i,location:o,params:l}=e,{pattern:s,component:a,preload:c}=r().route,u=A(()=>r().path);a&&a.preload&&a.preload();const f=c?c({params:l,location:o,intent:T||"initial"}):void 0;return{parent:n,pattern:s,path:u,outlet:()=>a?x(a,{params:l,location:o,data:f,get children(){return t()}}):t(),resolvePath(g){return Z(i.path(),g,u())}}}const on=e=>n=>{const{base:t}=n,r=rt(()=>n.children),i=A(()=>Ve(r(),n.base||""));let o;const l=nn(e,i,()=>o,{base:t,singleFlight:n.singleFlight,transformUrl:n.transformUrl});return e.create&&e.create(l),x(Be.Provider,{value:l,get children(){return x(sn,{routerState:l,get root(){return n.root},get preload(){return n.rootPreload||n.rootLoad},get children(){return[A(()=>(o=_())&&null),x(ln,{routerState:l,get branches(){return i()}})]}})}})};function sn(e){const n=e.routerState.location,t=e.routerState.params,r=A(()=>e.preload&&J(()=>{e.preload({params:t,location:n,intent:tn()||"initial"})}));return x(Te,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:i=>x(i,{params:t,location:n,get data(){return r()},get children(){return e.children}})})}function ln(e){const n=[];let t;const r=A(ce(e.routerState.matches,(i,o,l)=>{let s=o&&i.length===o.length;const a=[];for(let c=0,u=i.length;c<u;c++){const f=o&&o[c],m=i[c];l&&f&&m.route.key===f.route.key?a[c]=l[c]:(s=!1,n[c]&&n[c](),Pe(g=>{n[c]=g,a[c]=rn(e.routerState,a[c-1]||e.routerState.base,ve(()=>r()[c+1]),()=>e.routerState.matches()[c])}))}return n.splice(i.length).forEach(c=>c()),l&&s?l:(t=a[0],a)}));return ve(()=>r()&&t)()}const ve=e=>()=>x(Te,{get when(){return e()},keyed:!0,children:n=>x(qe.Provider,{value:n,get children(){return n.outlet()}})});function an([e,n],t,r){return[e,r?i=>n(r(i)):n]}function cn(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function un(e){let n=!1;const t=i=>typeof i=="string"?{value:i}:i,r=an(U(t(e.get()),{equals:(i,o)=>i.value===o.value&&i.state===o.state}),void 0,i=>(!n&&e.set(i),p.registry&&!p.done&&(p.done=!0),i));return e.init&&Ne(e.init((i=e.get())=>{n=!0,r[1](t(i)),n=!1})),on({signal:r,create:e.create,utils:e.utils})}function fn(e,n,t){return e.addEventListener(n,t),()=>e.removeEventListener(n,t)}function dn(e,n){const t=cn(`#${e}`);t?t.scrollIntoView():n&&window.scrollTo(0,0)}const hn=new Map;function mn(e=!0,n=!1,t="/_server",r){return i=>{const o=i.base.path(),l=i.navigatorFactory(i.base);let s={};function a(h){return h.namespaceURI==="http://www.w3.org/2000/svg"}function c(h){if(h.defaultPrevented||h.button!==0||h.metaKey||h.altKey||h.ctrlKey||h.shiftKey)return;const d=h.composedPath().find(M=>M instanceof Node&&M.nodeName.toUpperCase()==="A");if(!d||n&&!d.hasAttribute("link"))return;const y=a(d),w=y?d.href.baseVal:d.href;if((y?d.target.baseVal:d.target)||!w&&!d.hasAttribute("state"))return;const v=(d.getAttribute("rel")||"").split(/\s+/);if(d.hasAttribute("download")||v&&v.includes("external"))return;const L=y?new URL(w,document.baseURI):new URL(w);if(!(L.origin!==window.location.origin||o&&L.pathname&&!L.pathname.toLowerCase().startsWith(o.toLowerCase())))return[d,L]}function u(h){const d=c(h);if(!d)return;const[y,w]=d,P=i.parsePath(w.pathname+w.search+w.hash),v=y.getAttribute("state");h.preventDefault(),l(P,{resolve:!1,replace:y.hasAttribute("replace"),scroll:!y.hasAttribute("noscroll"),state:v&&JSON.parse(v)})}function f(h){const d=c(h);if(!d)return;const[y,w]=d;typeof r=="function"&&(w.pathname=r(w.pathname)),s[w.pathname]||i.preloadRoute(w,{preloadData:y.getAttribute("preload")!=="false"})}function m(h){const d=c(h);if(!d)return;const[y,w]=d;typeof r=="function"&&(w.pathname=r(w.pathname)),!s[w.pathname]&&(s[w.pathname]=setTimeout(()=>{i.preloadRoute(w,{preloadData:y.getAttribute("preload")!=="false"}),delete s[w.pathname]},200))}function g(h){const d=c(h);if(!d)return;const[,y]=d;typeof r=="function"&&(y.pathname=r(y.pathname)),s[y.pathname]&&(clearTimeout(s[y.pathname]),delete s[y.pathname])}function $(h){if(h.defaultPrevented)return;let d=h.submitter&&h.submitter.hasAttribute("formaction")?h.submitter.getAttribute("formaction"):h.target.getAttribute("action");if(!d)return;if(!d.startsWith("https://action/")){const w=new URL(d,De);if(d=i.parsePath(w.pathname+w.search),!d.startsWith(t))return}if(h.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const y=hn.get(d);if(y){h.preventDefault();const w=new FormData(h.target,h.submitter);y.call({r:i,f:h.target},h.target.enctype==="multipart/form-data"?w:new URLSearchParams(w))}}ke(["click","submit"]),document.addEventListener("click",u),e&&(document.addEventListener("mouseover",m),document.addEventListener("mouseout",g),document.addEventListener("focusin",f),document.addEventListener("touchstart",f)),document.addEventListener("submit",$),Ne(()=>{document.removeEventListener("click",u),e&&(document.removeEventListener("mouseover",m),document.removeEventListener("mouseout",g),document.removeEventListener("focusin",f),document.removeEventListener("touchstart",f)),document.removeEventListener("submit",$)})}}function gn(e){const n=()=>({value:window.location.pathname.replace(/^\/+/,"/")+window.location.search+window.location.hash,state:window.history.state}),t=je();return un({get:n,set({value:r,replace:i,scroll:o,state:l}){i?window.history.replaceState(qt(l),"",r):window.history.pushState(l,"",r),dn(decodeURIComponent(window.location.hash.slice(1)),o),fe()},init:r=>fn(window,"popstate",Ht(r,i=>{if(i&&i<0)return!t.confirm(i);{const o=n();return!t.confirm(o.value,{state:o.state})}})),create:mn(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:t}})(e)}function pn(e){e.forEach(n=>{if(!n.attrs.href)return;let t=document.head.querySelector(`link[href="${n.attrs.href}"]`);t||(t=document.createElement("link"),t.setAttribute("rel","preload"),t.setAttribute("as","style"),t.setAttribute("href",n.attrs.href),document.head.appendChild(t))})}var yn=k("<style>"),wn=k("<link>"),bn=k("<script> "),$n=k("<noscript>");const En={style:e=>(()=>{var n=N(yn);return G(n,z(()=>e.attrs),!1,!0),j(n,()=>e.children),K(),n})(),link:e=>(()=>{var n=N(wn);return G(n,z(()=>e.attrs),!1,!1),K(),n})(),script:e=>e.attrs.src?(()=>{var n=N(bn);return G(n,z(()=>e.attrs,{get id(){return e.key}}),!1,!0),K(),n})():null,noscript:e=>(()=>{var n=N($n);return G(n,z(()=>e.attrs),!1,!0),K(),n})()};function xn(e,n){let{tag:t,attrs:{key:r,...i}={key:void 0},children:o}=e;return En[t]({attrs:{...i,nonce:n},key:r,children:o})}function vn(e,n,t,r="default"){return it(async()=>{{const o=(await e.import())[r],s=(await n.inputs?.[e.src].assets()).filter(c=>c.tag==="style"||c.attrs.rel==="stylesheet");return typeof window<"u"&&pn(s),{default:c=>[...s.map(u=>xn(u)),x(o,c)]}}})}const D={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function _n(e={}){const n={options:e,rootNode:ze(),staticRoutesMap:{}},t=r=>e.strictTrailingSlash?r:r.replace(/\/$/,"")||"/";if(e.routes)for(const r in e.routes)_e(n,t(r),e.routes[r]);return{ctx:n,lookup:r=>An(n,t(r)),insert:(r,i)=>_e(n,t(r),i),remove:r=>Sn(n,t(r))}}function An(e,n){const t=e.staticRoutesMap[n];if(t)return t.data;const r=n.split("/"),i={};let o=!1,l=null,s=e.rootNode,a=null;for(let c=0;c<r.length;c++){const u=r[c];s.wildcardChildNode!==null&&(l=s.wildcardChildNode,a=r.slice(c).join("/"));const f=s.children.get(u);if(f===void 0){if(s&&s.placeholderChildren.length>1){const m=r.length-c;s=s.placeholderChildren.find(g=>g.maxDepth===m)||null}else s=s.placeholderChildren[0]||null;if(!s)break;s.paramName&&(i[s.paramName]=u),o=!0}else s=f}return(s===null||s.data===null)&&l!==null&&(s=l,i[s.paramName||"_"]=a,o=!0),s?o?{...s.data,params:o?i:void 0}:s.data:null}function _e(e,n,t){let r=!0;const i=n.split("/");let o=e.rootNode,l=0;const s=[o];for(const a of i){let c;if(c=o.children.get(a))o=c;else{const u=Pn(a);c=ze({type:u,parent:o}),o.children.set(a,c),u===D.PLACEHOLDER?(c.paramName=a==="*"?`_${l++}`:a.slice(1),o.placeholderChildren.push(c),r=!1):u===D.WILDCARD&&(o.wildcardChildNode=c,c.paramName=a.slice(3)||"_",r=!1),s.push(c),o=c}}for(const[a,c]of s.entries())c.maxDepth=Math.max(s.length-a,c.maxDepth||0);return o.data=t,r===!0&&(e.staticRoutesMap[n]=o),o}function Sn(e,n){let t=!1;const r=n.split("/");let i=e.rootNode;for(const o of r)if(i=i.children.get(o),!i)return t;if(i.data){const o=r.at(-1)||"";i.data=null,Object.keys(i.children).length===0&&i.parent&&(i.parent.children.delete(o),i.parent.wildcardChildNode=null,i.parent.placeholderChildren=[]),t=!0}return t}function ze(e={}){return{type:e.type||D.NORMAL,maxDepth:0,parent:e.parent||null,children:new Map,data:e.data||null,paramName:e.paramName||null,wildcardChildNode:null,placeholderChildren:[]}}function Pn(e){return e.startsWith("**")?D.WILDCARD:e[0]===":"||e==="*"?D.PLACEHOLDER:D.NORMAL}const Ge=[{page:!0,$component:{src:"src/routes/[...404].tsx?pick=default&pick=$css",build:()=>X(()=>import("./_...404_-CvZfi0wJ.js"),__vite__mapDeps([0,1])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/[...404].tsx?pick=default&pick=$css"].output.path)},path:"/*404",filePath:"/Users/brendonovich/github.com/lume/showcase/src/routes/[...404].tsx"},{page:!0,$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>X(()=>import("./index-C7GoVCI2.js"),[]),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/index.tsx?pick=default&pick=$css"].output.path)},path:"/",filePath:"/Users/brendonovich/github.com/lume/showcase/src/routes/index.tsx"},{page:!0,$component:{src:"src/routes/projects/[project].tsx?pick=default&pick=$css",build:()=>X(()=>import("./_project_-CPIyUM3p.js"),[]),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/projects/[project].tsx?pick=default&pick=$css"].output.path)},path:"/projects/:project",filePath:"/Users/brendonovich/github.com/lume/showcase/src/routes/projects/[project].tsx"}],Cn=Rn(Ge.filter(e=>e.page));function Rn(e){function n(t,r,i,o){const l=Object.values(t).find(s=>i.startsWith(s.id+"/"));return l?(n(l.children||(l.children=[]),r,i.slice(l.id.length)),t):(t.push({...r,id:i,path:i.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"")}),t)}return e.sort((t,r)=>t.path.length-r.path.length).reduce((t,r)=>n(t,r,r.path,r.path),[])}function Ln(e){return e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}_n({routes:Ge.reduce((e,n)=>{if(!Ln(n))return e;let t=n.path.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"").replace(/\*([^/]*)/g,(r,i)=>`**:${i}`);if(/:[^/]*\?/g.test(t))throw new Error(`Optional parameters are not supported in API routes: ${t}`);if(e[t])throw new Error(`Duplicate API routes for "${t}" found at "${e[t].route.path}" and "${n.path}"`);return e[t]={route:n},e},{})});function Tn(){function e(t){return{...t,...t.$$route?t.$$route.require().route:void 0,info:{...t.$$route?t.$$route.require().route.info:{},filesystem:!0},component:t.$component&&vn(t.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:t.children?t.children.map(e):void 0}}return Cn.map(e)}let Ae;const Nn=()=>Ae||(Ae=Tn());var kn=k('<div style=width:300px;height:250px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;overflow:hidden;><div style=width:300px;height:300px;><lume-scene webgl shadowmap-type=pcfsoft><lume-element3d align-point="0.333 0.333"><lume-ambient-light intensity=3.1></lume-ambient-light><lume-point-light position="-500 -500 800"intensity=600></lume-point-light><lume-camera-rig min-distance=0 distance=0 scale="-1 1 1"min-vertical-angle=0 max-vertical-angle=0><lume-box slot=camera mount-point="0.5 0.5 0.5"rotation="12 23 34"size="100 100 100"></lume-box></lume-camera-rig></lume-element3d><lume-plane align-point="0.5 0.666"mount-point="0.5 0.5"size="2000 2000"rotation=90 color=#f4f4f4></lume-plane><lume-sphere mount-point="0.5 0.5 0.5"color=white has=basic-material size=1000 position="2000 -3200 -20000"align-point="0.5 0.5"><lume-element3d align-point="0.5 0.5 0.5"><lume-sphere mount-point="0.5 0.5 0.5"color=#f4f4f4 size=1000 position="-1000 70 0">',!0,!1);function On(){const e=He();let n;return ot(()=>{setTimeout(()=>{const t=n.threeCamera;t.far=25e3,t.near=100,t.updateProjectionMatrix(),n.needsUpdate()})}),(()=>{var t=N(kn),r=t.firstChild,i=r.firstChild,o=i.firstChild,l=o.firstChild,s=l.nextSibling,a=s.nextSibling,c=a.firstChild,u=o.nextSibling,f=u.nextSibling,m=f.firstChild,g=m.firstChild;return Y($=>n=$,i),i._$owner=_(),o._$owner=_(),l._$owner=_(),s._$owner=_(),a._$owner=_(),Y($=>$.rotation=(h,d,y)=>[h,d+.5,y],c),c._$owner=_(),u._$owner=_(),f._$owner=_(),Y($=>$.rotation=(h,d,y)=>[h,d+.1,y],m),m._$owner=_(),g._$owner=_(),C(()=>wt(c,"color",e.project==="foo"?"orchid":e.project==="bar"?"orange":e[404]?"turquoise":"cornflowerblue")),t})()}var In=k("<main><div class=links><a href=/ style=--active-color:cornflowerblue;>index</a><a href=/projects/foo style=--active-color:orchid;>foo</a><a href=/projects/bar style=--active-color:orange;>bar</a><a href=/blahblah style=--active-color:turquoise;>404</a></div><h1></h1><!$><!/><!$><!/>");function jn(){return globalThis.window?.document&&X(()=>import("./index-B2zmu8Rr.js"),__vite__mapDeps([2,1])),x(gn,{root:e=>{const n=He(),t=A(()=>!Object.keys(n).length);return(()=>{var r=N(In),i=r.firstChild,o=i.firstChild,l=o.nextSibling,s=l.nextSibling,a=s.nextSibling,c=i.nextSibling,u=c.nextSibling,[f,m]=ye(u.nextSibling),g=f.nextSibling,[$,h]=ye(g.nextSibling);return j(c,()=>n.project?`Project: ${n.project}`:n[404]?"Page Not Found":"Hello World!"),j(r,x(st,{get children(){return e.children}}),f,m),j(r,x(On,{}),$,h),C(d=>{var y=t()?"active":"",w=n.project==="foo"?"active":"",P=n.project==="bar"?"active":"",v=n[404]?"active":"";return y!==d.e&&B(o,d.e=y),w!==d.t&&B(l,d.t=w),P!==d.a&&B(s,d.a=P),v!==d.o&&B(a,d.o=v),d},{e:void 0,t:void 0,a:void 0,o:void 0}),r})()},get children(){return x(Nn,{})}})}var Dn=k("<span style=font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;>");const Mn=e=>{const n="Error | Uncaught Client Exception";return x(at,{fallback:t=>(console.error(t),[(()=>{var r=N(Dn);return j(r,n),r})(),x(lt,{code:500})]),get children(){return e.children}})};function Fn(e,n){return Ct(e,n)}function Se(e){return e.children}function Un(){return x(Se,{get children(){return x(Se,{get children(){return x(Mn,{get children(){return x(jn,{})}})}})}})}Fn(()=>x(Un,{}),document.getElementById("app"));const Wn=void 0;export{dt as A,ft as C,gt as D,ut as P,qn as S,G as a,Hn as b,Et as c,ke as d,oe as e,bt as f,$t as g,mt as h,j as i,pt as j,Wn as k,pe as r,xt as s};
