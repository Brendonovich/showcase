const g={context:void 0,registry:void 0,done:!1,getContextId(){return ge(this.context.count)},getNextContextId(){return ge(this.context.count++)}};function ge(e){const t=String(e),s=t.length-1;return g.context.id+(s?String.fromCharCode(96+s):"")+t}function $(e){g.context=e}function Ve(){return{...g.context,id:g.getNextContextId(),count:0}}const xe=(e,t)=>e===t,X=Symbol("solid-proxy"),Se=Symbol("solid-track"),Ye=Symbol("solid-dev-component"),Y={equals:xe};let R=null,me=Ee;const T=1,B=2,ve={owned:null,cleanups:null,context:null,owner:null},le={};var d=null;let o=null,Le=null,w=null,j=null,C=null,ne=0;function _(e,t){const s=w,n=d,i=e.length===0,r=t===void 0?n:t,l=i?ve:{owned:null,cleanups:null,context:r?r.context:null,owner:r},u=i?e:()=>e(()=>F(()=>D(l)));d=l,w=null;try{return L(u,!0)}finally{w=s,d=n}}function V(e,t){t=t?Object.assign({},Y,t):Y;const s={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},n=i=>(typeof i=="function"&&(o&&o.running&&o.sources.has(s)?i=i(s.tValue):i=i(s.value)),Ae(s,i));return[Ce.bind(s),n]}function we(e,t,s){const n=z(e,t,!0,T);U(n)}function Ne(e,t,s){const n=z(e,t,!1,T);U(n)}function Me(e,t,s){me=Be;const n=z(e,t,!1,T),i=q&&re(q);i&&(n.suspense=i),(!s||!s.render)&&(n.user=!0),C?C.push(n):U(n)}function E(e,t,s){s=s?Object.assign({},Y,s):Y;const n=z(e,t,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=s.equals||void 0,U(n),Ce.bind(n)}function Re(e){return e&&typeof e=="object"&&"then"in e}function $e(e,t,s){let n,i,r;arguments.length===2&&typeof t=="object"||arguments.length===1?(n=!0,i=e,r=t||{}):(n=e,i=t,r=s||{});let l=null,u=le,f=null,a=!1,h=!1,c="initialValue"in r,x=typeof n=="function"&&E(n);const p=new Set,[m,y]=(r.storage||V)(r.initialValue),[I,P]=V(void 0),[b,v]=V(void 0,{equals:!1}),[A,M]=V(c?"ready":"unresolved");g.context&&(f=g.getNextContextId(),r.ssrLoadFrom==="initial"?u=r.initialValue:g.load&&g.has(f)&&(u=g.load(f)));function N(S,k,O,H){return l===S&&(l=null,H!==void 0&&(c=!0),(S===u||k===u)&&r.onHydrated&&queueMicrotask(()=>r.onHydrated(H,{value:k})),u=le,o&&S&&a?(o.promises.delete(S),a=!1,L(()=>{o.running=!0,he(k,O)},!1)):he(k,O)),k}function he(S,k){L(()=>{k===void 0&&y(()=>S),M(k!==void 0?"errored":c?"ready":"unresolved"),P(k);for(const O of p.keys())O.decrement();p.clear()},!1)}function se(){const S=q&&re(q),k=m(),O=I();if(O!==void 0&&!l)throw O;return w&&!w.user&&S&&we(()=>{b(),l&&(S.resolved&&o&&a?o.promises.add(l):p.has(S)||(S.increment(),p.add(S)))}),k}function ie(S=!0){if(S!==!1&&h)return;h=!1;const k=x?x():n;if(a=o&&o.running,k==null||k===!1){N(l,F(m));return}o&&l&&o.promises.delete(l);const O=u!==le?u:F(()=>i(k,{value:m(),refetching:S}));return Re(O)?(l=O,"value"in O?(O.status==="success"?N(l,O.value,void 0,k):N(l,void 0,oe(O.value),k),O):(h=!0,queueMicrotask(()=>h=!1),L(()=>{M(c?"refreshing":"pending"),v()},!1),O.then(H=>N(O,H,void 0,k),H=>N(O,void 0,oe(H),k)))):(N(l,O,void 0,k),O)}return Object.defineProperties(se,{state:{get:()=>A()},error:{get:()=>I()},loading:{get(){const S=A();return S==="pending"||S==="refreshing"}},latest:{get(){if(!c)return se();const S=I();if(S&&!l)throw S;return m()}}}),x?we(()=>ie(!1)):ie(!1),[se,{refetch:ie,mutate:y}]}function Ze(e,t=xe,s){const n=new Map,i=z(r=>{const l=e();for(const[u,f]of n.entries())if(t(u,l)!==t(u,r))for(const a of f.values())a.state=T,a.pure?j.push(a):C.push(a);return l},void 0,!0,T);return U(i),r=>{const l=w;if(l){let u;(u=n.get(r))?u.add(l):n.set(r,u=new Set([l])),W(()=>{u.delete(l),!u.size&&n.delete(r)})}return t(r,o&&o.running&&o.sources.has(i)?i.tValue:i.value)}}function et(e){return L(e,!1)}function F(e){if(w===null)return e();const t=w;w=null;try{return e()}finally{w=t}}function tt(e,t,s){const n=Array.isArray(e);let i,r=s&&s.defer;return l=>{let u;if(n){u=Array(e.length);for(let a=0;a<e.length;a++)u[a]=e[a]()}else u=e();if(r)return r=!1,l;const f=F(()=>t(u,i,l));return i=u,f}}function nt(e){Me(()=>F(e))}function W(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function De(e,t){R||(R=Symbol("error")),d=z(void 0,void 0,!0),d.context={...d.context,[R]:[t]},o&&o.running&&o.sources.add(d);try{return e()}catch(s){G(s)}finally{d=d.owner}}function rt(){return w}function qe(){return d}function st(e,t){const s=d,n=w;d=e,w=null;try{return L(t,!0)}catch(i){G(i)}finally{d=s,w=n}}function Ue(e){if(o&&o.running)return e(),o.done;const t=w,s=d;return Promise.resolve().then(()=>{w=t,d=s;let n;return q&&(n=o||(o={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),n.done||(n.done=new Promise(i=>n.resolve=i)),n.running=!0),L(e,!1),w=d=null,n?n.done:void 0})}const[He,pe]=V(!1);function it(){return[He,Ue]}function Ke(e){C.push.apply(C,e),e.length=0}function ke(e,t){const s=Symbol("context");return{id:s,Provider:We(s),defaultValue:e}}function re(e){let t;return d&&d.context&&(t=d.context[e.id])!==void 0?t:e.defaultValue}function Oe(e){const t=E(e),s=E(()=>fe(t()));return s.toArray=()=>{const n=s();return Array.isArray(n)?n:n!=null?[n]:[]},s}let q;function _e(){return q||(q=ke())}function Ce(){const e=o&&o.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===T)U(this);else{const t=j;j=null,L(()=>ee(this),!1),j=t}if(w){const t=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(t)):(w.sources=[this],w.sourceSlots=[t]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return e&&o.sources.has(this)?this.tValue:this.value}function Ae(e,t,s){let n=o&&o.running&&o.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(n,t)){if(o){const i=o.running;(i||!s&&o.sources.has(e))&&(o.sources.add(e),e.tValue=t),i||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&L(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],l=o&&o.running;l&&o.disposed.has(r)||((l?!r.tState:!r.state)&&(r.pure?j.push(r):C.push(r),r.observers&&Pe(r)),l?r.tState=T:r.state=T)}if(j.length>1e6)throw j=[],new Error},!1)}return t}function U(e){if(!e.fn)return;D(e);const t=ne;be(e,o&&o.running&&o.sources.has(e)?e.tValue:e.value,t),o&&!o.running&&o.sources.has(e)&&queueMicrotask(()=>{L(()=>{o&&(o.running=!0),w=d=e,be(e,e.tValue,t),w=d=null},!1)})}function be(e,t,s){let n;const i=d,r=w;w=d=e;try{n=e.fn(t)}catch(l){return e.pure&&(o&&o.running?(e.tState=T,e.tOwned&&e.tOwned.forEach(D),e.tOwned=void 0):(e.state=T,e.owned&&e.owned.forEach(D),e.owned=null)),e.updatedAt=s+1,G(l)}finally{w=r,d=i}(!e.updatedAt||e.updatedAt<=s)&&(e.updatedAt!=null&&"observers"in e?Ae(e,n,!0):o&&o.running&&e.pure?(o.sources.add(e),e.tValue=n):e.value=n,e.updatedAt=s)}function z(e,t,s,n=T,i){const r={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:d?d.context:null,pure:s};return o&&o.running&&(r.state=0,r.tState=n),d===null||d!==ve&&(o&&o.running&&d.pure?d.tOwned?d.tOwned.push(r):d.tOwned=[r]:d.owned?d.owned.push(r):d.owned=[r]),r}function Z(e){const t=o&&o.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===B)return ee(e);if(e.suspense&&F(e.suspense.inFallback))return e.suspense.effects.push(e);const s=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ne);){if(t&&o.disposed.has(e))return;(t?e.tState:e.state)&&s.push(e)}for(let n=s.length-1;n>=0;n--){if(e=s[n],t){let i=e,r=s[n+1];for(;(i=i.owner)&&i!==r;)if(o.disposed.has(i))return}if((t?e.tState:e.state)===T)U(e);else if((t?e.tState:e.state)===B){const i=j;j=null,L(()=>ee(e,s[0]),!1),j=i}}}function L(e,t){if(j)return e();let s=!1;t||(j=[]),C?s=!0:C=[],ne++;try{const n=e();return ze(s),n}catch(n){s||(C=null),j=null,G(n)}}function ze(e){if(j&&(Ee(j),j=null),e)return;let t;if(o){if(!o.promises.size&&!o.queue.size){const n=o.sources,i=o.disposed;C.push.apply(C,o.effects),t=o.resolve;for(const r of C)"tState"in r&&(r.state=r.tState),delete r.tState;o=null,L(()=>{for(const r of i)D(r);for(const r of n){if(r.value=r.tValue,r.owned)for(let l=0,u=r.owned.length;l<u;l++)D(r.owned[l]);r.tOwned&&(r.owned=r.tOwned),delete r.tValue,delete r.tOwned,r.tState=0}pe(!1)},!1)}else if(o.running){o.running=!1,o.effects.push.apply(o.effects,C),C=null,pe(!0);return}}const s=C;C=null,s.length&&L(()=>me(s),!1),t&&t()}function Ee(e){for(let t=0;t<e.length;t++)Z(e[t])}function Be(e){let t,s=0;for(t=0;t<e.length;t++){const n=e[t];n.user?e[s++]=n:Z(n)}if(g.context){if(g.count){g.effects||(g.effects=[]),g.effects.push(...e.slice(0,s));return}else g.effects&&(e=[...g.effects,...e],s+=g.effects.length,delete g.effects);$()}for(t=0;t<s;t++)Z(e[t])}function ee(e,t){const s=o&&o.running;s?e.tState=0:e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const r=s?i.tState:i.state;r===T?i!==t&&(!i.updatedAt||i.updatedAt<ne)&&Z(i):r===B&&ee(i,t)}}}function Pe(e){const t=o&&o.running;for(let s=0;s<e.observers.length;s+=1){const n=e.observers[s];(t?!n.tState:!n.state)&&(t?n.tState=B:n.state=B,n.pure?j.push(n):C.push(n),n.observers&&Pe(n))}}function D(e){let t;if(e.sources)for(;e.sources.length;){const s=e.sources.pop(),n=e.sourceSlots.pop(),i=s.observers;if(i&&i.length){const r=i.pop(),l=s.observerSlots.pop();n<i.length&&(r.sourceSlots[l]=n,i[n]=r,s.observerSlots[n]=l)}}if(o&&o.running&&e.pure){if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)D(e.tOwned[t]);delete e.tOwned}je(e,!0)}else if(e.owned){for(t=e.owned.length-1;t>=0;t--)D(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}o&&o.running?e.tState=0:e.state=0}function je(e,t){if(t||(e.tState=0,o.disposed.add(e)),e.owned)for(let s=0;s<e.owned.length;s++)je(e.owned[s])}function oe(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ye(e,t,s){try{for(const n of t)n(e)}catch(n){G(n,s&&s.owner||null)}}function G(e,t=d){const s=R&&t&&t.context&&t.context[R],n=oe(e);if(!s)throw n;C?C.push({fn(){ye(n,s,t)},state:T}):ye(n,s,t)}function fe(e){if(typeof e=="function"&&!e.length)return fe(e());if(Array.isArray(e)){const t=[];for(let s=0;s<e.length;s++){const n=fe(e[s]);Array.isArray(n)?t.push.apply(t,n):t.push(n)}return t}return e}function We(e,t){return function(n){let i;return Ne(()=>i=F(()=>(d.context={...d.context,[e]:n.value},Oe(()=>n.children))),void 0),i}}function lt(e){R||(R=Symbol("error")),d===null||(d.context===null||!d.context[R]?(d.context={...d.context,[R]:[e]},Q(d,R,[e])):d.context[R].push(e))}function Q(e,t,s){if(e.owned)for(let n=0;n<e.owned.length;n++)e.owned[n].context===e.context&&Q(e.owned[n],t,s),e.owned[n].context?e.owned[n].context[t]||(e.owned[n].context[t]=s,Q(e.owned[n],t,s)):(e.owned[n].context=e.context,Q(e.owned[n],t,s))}const ce=Symbol("fallback");function te(e){for(let t=0;t<e.length;t++)e[t]()}function Ge(e,t,s={}){let n=[],i=[],r=[],l=0,u=t.length>1?[]:null;return W(()=>te(r)),()=>{let f=e()||[],a=f.length,h,c;return f[Se],F(()=>{let p,m,y,I,P,b,v,A,M;if(a===0)l!==0&&(te(r),r=[],n=[],i=[],l=0,u&&(u=[])),s.fallback&&(n=[ce],i[0]=_(N=>(r[0]=N,s.fallback())),l=1);else if(l===0){for(i=new Array(a),c=0;c<a;c++)n[c]=f[c],i[c]=_(x);l=a}else{for(y=new Array(a),I=new Array(a),u&&(P=new Array(a)),b=0,v=Math.min(l,a);b<v&&n[b]===f[b];b++);for(v=l-1,A=a-1;v>=b&&A>=b&&n[v]===f[A];v--,A--)y[A]=i[v],I[A]=r[v],u&&(P[A]=u[v]);for(p=new Map,m=new Array(A+1),c=A;c>=b;c--)M=f[c],h=p.get(M),m[c]=h===void 0?-1:h,p.set(M,c);for(h=b;h<=v;h++)M=n[h],c=p.get(M),c!==void 0&&c!==-1?(y[c]=i[h],I[c]=r[h],u&&(P[c]=u[h]),c=m[c],p.set(M,c)):r[h]();for(c=b;c<a;c++)c in y?(i[c]=y[c],r[c]=I[c],u&&(u[c]=P[c],u[c](c))):i[c]=_(x);i=i.slice(0,l=a),n=f.slice(0)}return i});function x(p){if(r[c]=p,u){const[m,y]=V(c);return u[c]=y,t(f[c],m)}return t(f[c])}}}function Je(e,t,s={}){let n=[],i=[],r=[],l=[],u=0,f;return W(()=>te(r)),()=>{const a=e()||[],h=a.length;return a[Se],F(()=>{if(h===0)return u!==0&&(te(r),r=[],n=[],i=[],u=0,l=[]),s.fallback&&(n=[ce],i[0]=_(x=>(r[0]=x,s.fallback())),u=1),i;for(n[0]===ce&&(r[0](),r=[],n=[],i=[],u=0),f=0;f<h;f++)f<n.length&&n[f]!==a[f]?l[f](()=>a[f]):f>=n.length&&(i[f]=_(c));for(;f<n.length;f++)r[f]();return u=l.length=r.length=h,n=a.slice(0),i=i.slice(0,u)});function c(x){r[f]=x;const[p,m]=V(a[f]);return l[f]=m,t(p,f)}}}let Fe=!1;function ut(){Fe=!0}function Ie(e,t){if(Fe&&g.context){const s=g.context;$(Ve());const n=F(()=>e(t||{}));return $(s),n}return F(()=>e(t||{}))}function J(){return!0}const ae={get(e,t,s){return t===X?s:e.get(t)},has(e,t){return t===X?!0:e.has(t)},set:J,deleteProperty:J,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:J,deleteProperty:J}},ownKeys(e){return e.keys()}};function ue(e){return(e=typeof e=="function"?e():e)?e:{}}function Qe(){for(let e=0,t=this.length;e<t;++e){const s=this[e]();if(s!==void 0)return s}}function ot(...e){let t=!1;for(let l=0;l<e.length;l++){const u=e[l];t=t||!!u&&X in u,e[l]=typeof u=="function"?(t=!0,E(u)):u}if(t)return new Proxy({get(l){for(let u=e.length-1;u>=0;u--){const f=ue(e[u])[l];if(f!==void 0)return f}},has(l){for(let u=e.length-1;u>=0;u--)if(l in ue(e[u]))return!0;return!1},keys(){const l=[];for(let u=0;u<e.length;u++)l.push(...Object.keys(ue(e[u])));return[...new Set(l)]}},ae);const s={},n=Object.create(null);for(let l=e.length-1;l>=0;l--){const u=e[l];if(!u)continue;const f=Object.getOwnPropertyNames(u);for(let a=f.length-1;a>=0;a--){const h=f[a];if(h==="__proto__"||h==="constructor")continue;const c=Object.getOwnPropertyDescriptor(u,h);if(!n[h])n[h]=c.get?{enumerable:!0,configurable:!0,get:Qe.bind(s[h]=[c.get.bind(u)])}:c.value!==void 0?c:void 0;else{const x=s[h];x&&(c.get?x.push(c.get.bind(u)):c.value!==void 0&&x.push(()=>c.value))}}}const i={},r=Object.keys(n);for(let l=r.length-1;l>=0;l--){const u=r[l],f=n[u];f&&f.get?Object.defineProperty(i,u,f):i[u]=f?f.value:void 0}return i}function ft(e,...t){if(X in e){const i=new Set(t.length>1?t.flat():t[0]),r=t.map(l=>new Proxy({get(u){return l.includes(u)?e[u]:void 0},has(u){return l.includes(u)&&u in e},keys(){return l.filter(u=>u in e)}},ae));return r.push(new Proxy({get(l){return i.has(l)?void 0:e[l]},has(l){return i.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!i.has(l))}},ae)),r}const s={},n=t.map(()=>({}));for(const i of Object.getOwnPropertyNames(e)){const r=Object.getOwnPropertyDescriptor(e,i),l=!r.get&&!r.set&&r.enumerable&&r.writable&&r.configurable;let u=!1,f=0;for(const a of t)a.includes(i)&&(u=!0,l?n[f][i]=r.value:Object.defineProperty(n[f],i,r)),++f;u||(l?s[i]=r.value:Object.defineProperty(s,i,r))}return[...n,s]}function ct(e){let t,s;const n=i=>{const r=g.context;if(r){const[u,f]=V();g.count||(g.count=0),g.count++,(s||(s=e())).then(a=>{!g.done&&$(r),g.count--,f(()=>a.default),$()}),t=u}else if(!t){const[u]=$e(()=>(s||(s=e())).then(f=>f.default));t=u}let l;return E(()=>(l=t())?F(()=>{if(!r||g.done)return l(i);const u=g.context;$(r);const f=l(i);return $(u),f}):"")};return n.preload=()=>s||((s=e()).then(i=>t=()=>i.default),s),n}const Te=e=>`Stale read from <${e}>.`;function at(e){const t="fallback"in e&&{fallback:()=>e.fallback};return E(Ge(()=>e.each,e.children,t||void 0))}function dt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return E(Je(()=>e.each,e.children,t||void 0))}function ht(e){const t=e.keyed,s=E(()=>e.when,void 0,{equals:(n,i)=>t?n===i:!n==!i});return E(()=>{const n=s();if(n){const i=e.children;return typeof i=="function"&&i.length>0?F(()=>i(t?n:()=>{if(!F(s))throw Te("Show");return e.when})):i}return e.fallback},void 0,void 0)}function gt(e){let t=!1;const s=(r,l)=>(t?r[1]===l[1]:!r[1]==!l[1])&&r[2]===l[2],n=Oe(()=>e.children),i=E(()=>{let r=n();Array.isArray(r)||(r=[r]);for(let l=0;l<r.length;l++){const u=r[l].when;if(u)return t=!!r[l].keyed,[l,u,r[l]]}return[-1]},void 0,{equals:s});return E(()=>{const[r,l,u]=i();if(r<0)return e.fallback;const f=u.children;return typeof f=="function"&&f.length>0?F(()=>f(t?l:()=>{if(F(i)[0]!==r)throw Te("Match");return u.when})):f},void 0,void 0)}function wt(e){return e}let K;function pt(){K&&[...K].forEach(e=>e())}function bt(e){let t;g.context&&g.load&&(t=g.load(g.getContextId()));const[s,n]=V(t,void 0);return K||(K=new Set),K.add(n),W(()=>K.delete(n)),E(()=>{let i;if(i=s()){const r=e.fallback;return typeof r=="function"&&r.length?F(()=>r(i,()=>n())):r}return De(()=>e.children,n)},void 0,void 0)}const Xe=(e,t)=>e.showContent===t.showContent&&e.showFallback===t.showFallback,de=ke();function yt(e){let[t,s]=V(()=>({inFallback:!1})),n;const i=re(de),[r,l]=V([]);i&&(n=i.register(E(()=>t()().inFallback)));const u=E(f=>{const a=e.revealOrder,h=e.tail,{showContent:c=!0,showFallback:x=!0}=n?n():{},p=r(),m=a==="backwards";if(a==="together"){const b=p.every(A=>!A()),v=p.map(()=>({showContent:b&&c,showFallback:x}));return v.inFallback=!b,v}let y=!1,I=f.inFallback;const P=[];for(let b=0,v=p.length;b<v;b++){const A=m?v-b-1:b,M=p[A]();if(!y&&!M)P[A]={showContent:c,showFallback:x};else{const N=!y;N&&(I=!0),P[A]={showContent:N,showFallback:!h||N&&h==="collapsed"?x:!1},y=!0}}return y||(I=!1),P.inFallback=I,P},{inFallback:!1});return s(()=>u),Ie(de.Provider,{value:{register:f=>{let a;return l(h=>(a=h.length,[...h,f])),E(()=>u()[a],void 0,{equals:Xe})}},get children(){return e.children}})}function xt(e){let t=0,s,n,i,r,l;const[u,f]=V(!1),a=_e(),h={increment:()=>{++t===1&&f(!0)},decrement:()=>{--t===0&&f(!1)},inFallback:u,effects:[],resolved:!1},c=qe();if(g.context&&g.load){const m=g.getContextId();let y=g.load(m);if(y&&(typeof y!="object"||y.status!=="success"?i=y:g.gather(m)),i&&i!=="$$f"){const[I,P]=V(void 0,{equals:!1});r=I,i.then(()=>{if(g.done)return P();g.gather(m),$(n),P(),$()},b=>{l=b,P()})}}const x=re(de);x&&(s=x.register(h.inFallback));let p;return W(()=>p&&p()),Ie(a.Provider,{value:h,get children(){return E(()=>{if(l)throw l;if(n=g.context,r)return r(),r=void 0;n&&i==="$$f"&&$();const m=E(()=>e.children);return E(y=>{const I=h.inFallback(),{showContent:P=!0,showFallback:b=!0}=s?s():{};if((!I||i&&i!=="$$f")&&P)return h.resolved=!0,p&&p(),p=n=i=void 0,Ke(h.effects),m();if(b)return p?y:_(v=>(p=v,n&&($({id:n.id+"F",count:0}),n=void 0),e.fallback),c)})})}})}const St=e=>null;export{X as $,Ye as A,yt as B,gt as C,$e as D,bt as E,at as F,Ze as G,St as H,dt as I,Je as J,Ge as K,lt as L,wt as M,ft as N,it as O,ht as S,Ne as a,E as b,_ as c,re as d,ut as e,ke as f,qe as g,V as h,Ue as i,pt as j,et as k,Ie as l,Oe as m,W as n,tt as o,ot as p,ct as q,st as r,g as s,nt as t,F as u,xt as v,Se as w,rt as x,Me as y,we as z};
