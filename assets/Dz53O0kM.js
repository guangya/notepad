import{u as P,d as B,r as q,a as N,o as I,b as U,c as T,e as H,f as V,h as A,g as L,p as F,n as M,i as x,j as O,k as z,l as D,m as $,q as W,w as G,s as K,_ as Q,t as J,v as X,x as S,y as C,z as Y,A as Z,B as ee}from"./B4D-8X4W.js";import{u as te}from"./DCfH_dO9.js";async function E(t,n=P()){const{path:f,matched:h}=n.resolve(t);if(!h.length||(n._routePreloaded||(n._routePreloaded=new Set),n._routePreloaded.has(f)))return;const p=n._preloadPromises=n._preloadPromises||[];if(p.length>4)return Promise.all(p).then(()=>E(t,n));n._routePreloaded.add(f);const e=h.map(r=>{var l;return(l=r.components)==null?void 0:l.default}).filter(r=>typeof r=="function");for(const r of e){const l=Promise.resolve(r()).catch(()=>{}).finally(()=>p.splice(p.indexOf(l)));p.push(l)}await Promise.all(p)}const ne=(...t)=>t.find(n=>n!==void 0);function re(t){const n=t.componentName||"NuxtLink";function f(e){return typeof e=="string"&&e.startsWith("#")}function h(e,r){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return j(e,t.trailingSlash);const l="path"in e&&e.path!==void 0?e.path:r(e).path;return{...e,name:void 0,path:j(l,t.trailingSlash)}}function p(e){const r=P(),l=W(),u=x(()=>!!e.target&&e.target!=="_self"),v=x(()=>{const d=e.to||e.href||"";return typeof d=="string"&&O(d,{acceptRelative:!0})}),k=L("RouterLink"),b=k&&typeof k!="string"?k.useLink:void 0,m=x(()=>{if(e.external)return!0;const d=e.to||e.href||"";return typeof d=="object"?!1:d===""||v.value}),a=x(()=>{const d=e.to||e.href||"";return m.value?d:h(d,r.resolve)}),c=m.value||b==null?void 0:b({...e,to:a}),y=x(()=>{var d;if(!a.value||v.value||f(a.value))return a.value;if(m.value){const w=typeof a.value=="object"&&"path"in a.value?z(a.value):a.value,_=typeof w=="object"?r.resolve(w).href:w;return h(_,r.resolve)}return typeof a.value=="object"?((d=r.resolve(a.value))==null?void 0:d.href)??null:h(D(l.app.baseURL,a.value),r.resolve)});return{to:a,hasTarget:u,isAbsoluteUrl:v,isExternal:m,href:y,isActive:(c==null?void 0:c.isActive)??x(()=>a.value===r.currentRoute.value.path),isExactActive:(c==null?void 0:c.isExactActive)??x(()=>a.value===r.currentRoute.value.path),route:(c==null?void 0:c.route)??x(()=>r.resolve(a.value)),async navigate(){await $(y.value,{replace:e.replace,external:m.value||u.value})}}}return B({name:n,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:p,setup(e,{slots:r}){const l=P(),{to:u,href:v,navigate:k,isExternal:b,hasTarget:m,isAbsoluteUrl:a}=p(e),c=q(!1),y=q(null),d=i=>{var s;y.value=e.custom?(s=i==null?void 0:i.$el)==null?void 0:s.nextElementSibling:i==null?void 0:i.$el};function w(i){var s,o;return!c.value&&(typeof e.prefetchOn=="string"?e.prefetchOn===i:((s=e.prefetchOn)==null?void 0:s[i])??((o=t.prefetchOn)==null?void 0:o[i]))&&(e.prefetch??t.prefetch)!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!ue()}async function _(i=N()){if(c.value)return;c.value=!0;const s=typeof u.value=="string"?u.value:b.value?z(u.value):l.resolve(u.value).fullPath,o=b.value?new URL(s,window.location.href).href:s;await Promise.all([i.hooks.callHook("link:prefetch",o).catch(()=>{}),!b.value&&!m.value&&E(u.value,l).catch(()=>{})])}if(w("visibility")){const i=N();let s,o=null;I(()=>{const g=ie();U(()=>{s=T(()=>{var R;(R=y==null?void 0:y.value)!=null&&R.tagName&&(o=g.observe(y.value,async()=>{o==null||o(),o=null,await _(i)}))})})}),H(()=>{s&&V(s),o==null||o(),o=null})}return()=>{var o;if(!b.value&&!m.value&&!f(u.value)){const g={ref:d,to:u.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(w("interaction")&&(g.onPointerenter=_.bind(null,void 0),g.onFocus=_.bind(null,void 0)),c.value&&(g.class=e.prefetchedClass||t.prefetchedClass),g.rel=e.rel||void 0),A(L("RouterLink"),g,r.default)}const i=e.target||null,s=ne(e.noRel?"":e.rel,t.externalRelAttribute,a.value||m.value?"noopener noreferrer":"")||null;return e.custom?r.default?r.default({href:v.value,navigate:k,prefetch:_,get route(){if(!v.value)return;const g=new URL(v.value,window.location.href);return{path:g.pathname,fullPath:g.pathname,get query(){return F(g.search)},hash:g.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:v.value}},rel:s,target:i,isExternal:b.value||m.value,isActive:!1,isExactActive:!1}):null:A("a",{ref:y,href:v.value||null,rel:s,target:i},(o=r.default)==null?void 0:o.call(r))}}})}const ae=re(M);function j(t,n){const f=n==="append"?G:K;return O(t)&&!t.startsWith("http")?t:f(t,!0)}function ie(){const t=N();if(t._observer)return t._observer;let n=null;const f=new Map,h=(e,r)=>(n||(n=new IntersectionObserver(l=>{for(const u of l){const v=f.get(u.target);(u.isIntersecting||u.intersectionRatio>0)&&v&&v()}})),f.set(e,r),n.observe(e),()=>{f.delete(e),n==null||n.unobserve(e),f.size===0&&(n==null||n.disconnect(),n=null)});return t._observer={observe:h}}const oe=/2g/;function ue(){const t=navigator.connection;return!!(t&&(t.saveData||oe.test(t.effectiveType)))}const se={class:"antialiased bg-white dark:bg-black dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-black"},le={class:"max-w-520px text-center z-20"},ce=["textContent"],fe=["textContent"],de={class:"flex items-center justify-center w-full"},he={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(t){const n=t;return te({title:`${n.statusCode} - ${n.statusMessage} | ${n.appName}`,script:[{children:`!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();`}],style:[{children:'*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }'}]}),(f,h)=>{const p=ae;return J(),X("div",se,[h[0]||(h[0]=S("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),S("div",le,[S("h1",{class:"font-medium mb-8 sm:text-10xl text-8xl",textContent:C(t.statusCode)},null,8,ce),S("p",{class:"font-light leading-tight mb-16 px-8 sm:px-0 sm:text-4xl text-xl",textContent:C(t.description)},null,8,fe),S("div",de,[Y(p,{to:"/",class:"cursor-pointer gradient-border px-4 py-2 sm:px-6 sm:py-3 sm:text-xl text-md"},{default:Z(()=>[ee(C(t.backHome),1)]),_:1})])])])}}},ge=Q(he,[["__scopeId","data-v-c2c324f7"]]);export{ge as default};
