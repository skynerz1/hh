(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{6335:(e,t,n)=>{Promise.resolve().then(n.bind(n,5613)),Promise.resolve().then(n.t.bind(n,9324,23)),Promise.resolve().then(n.t.bind(n,3704,23)),Promise.resolve().then(n.t.bind(n,5299,23))},5613:(e,t,n)=>{"use strict";n.d(t,{default:()=>a});var r=n(5155),l=n(2115);function a(e){let{Code:t}=e,[n,a]=(0,l.useState)(!1),i=async()=>{try{await navigator.clipboard.writeText(t),a(!0),setTimeout(()=>a(!1),2e3)}catch(e){console.error("Failed to copy text:",e)}};return(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("span",{className:"flex bg-white/5 items-center justify-center h-8 pr-6 pl-6 rounded-md outline outline-1 outline-dashed outline-white/35 text-sm text-blue-300 drop-shadow-[0_0_20px] cursor-pointer",onClick:i,title:"Click to copy",children:t}),n&&(0,r.jsx)("div",{className:"absolute flex items-center h-8 top-0 left-[8em] pr-6 pl-6 transform bg-white/5 drop-shadow-[0_0_20px] text-white text-sm px-3 py-1 rounded-md shadow-md",style:{whiteSpace:"nowrap"},children:"Code copied!"})]})}},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3704:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return m},handleClientScriptLoad:function(){return b},initScriptLoader:function(){return h}});let r=n(306),l=n(9955),a=n(5155),i=r._(n(7650)),o=l._(n(2115)),s=n(1147),d=n(2815),u=n(8571),c=new Map,f=new Set,p=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},y=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:l=null,dangerouslySetInnerHTML:a,children:i="",strategy:o="afterInteractive",onError:s,stylesheets:u}=e,y=n||t;if(y&&f.has(y))return;if(c.has(t)){f.add(y),c.get(t).then(r,s);return}let b=()=>{l&&l(),f.add(y)},h=document.createElement("script"),_=new Promise((e,t)=>{h.addEventListener("load",function(t){e(),r&&r.call(this,t),b()}),h.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});a?(h.innerHTML=a.__html||"",b()):i?(h.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",b()):t&&(h.src=t,c.set(t,_)),(0,d.setAttributesFromProps)(h,e),"worker"===o&&h.setAttribute("type","text/partytown"),h.setAttribute("data-nscript",o),u&&p(u),document.body.appendChild(h)};function b(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>y(e))}):y(e)}function h(e){e.forEach(b),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function _(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:l=null,strategy:d="afterInteractive",onError:c,stylesheets:p,...b}=e,{updateScripts:h,scripts:_,getIsSsr:m,appDir:g,nonce:v}=(0,o.useContext)(s.HeadManagerContext),w=(0,o.useRef)(!1);(0,o.useEffect)(()=>{let e=t||n;w.current||(l&&e&&f.has(e)&&l(),w.current=!0)},[l,t,n]);let x=(0,o.useRef)(!1);if((0,o.useEffect)(()=>{!x.current&&("afterInteractive"===d?y(e):"lazyOnload"===d&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>y(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>y(e))})),x.current=!0)},[e,d]),("beforeInteractive"===d||"worker"===d)&&(h?(_[d]=(_[d]||[]).concat([{id:t,src:n,onLoad:r,onReady:l,onError:c,...b}]),h(_)):m&&m()?f.add(t||n):m&&!m()&&y(e)),g){if(p&&p.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===d)return n?(i.default.preload(n,b.integrity?{as:"script",integrity:b.integrity,nonce:v,crossOrigin:b.crossOrigin}:{as:"script",nonce:v,crossOrigin:b.crossOrigin}),(0,a.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...b,id:t}])+")"}})):(b.dangerouslySetInnerHTML&&(b.children=b.dangerouslySetInnerHTML.__html,delete b.dangerouslySetInnerHTML),(0,a.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...b,id:t}])+")"}}));"afterInteractive"===d&&n&&i.default.preload(n,b.integrity?{as:"script",integrity:b.integrity,nonce:v,crossOrigin:b.crossOrigin}:{as:"script",nonce:v,crossOrigin:b.crossOrigin})}return null}Object.defineProperty(_,"__nextScript",{value:!0});let m=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2815:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setAttributesFromProps",{enumerable:!0,get:function(){return a}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},r=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function l(e){return["async","defer","noModule"].includes(e)}function a(e,t){for(let[a,i]of Object.entries(t)){if(!t.hasOwnProperty(a)||r.includes(a)||void 0===i)continue;let o=n[a]||a.toLowerCase();"SCRIPT"===e.tagName&&l(o)?e[o]=!!i:e.setAttribute(o,String(i)),(!1===i||"SCRIPT"===e.tagName&&l(o)&&(!i||"false"===i))&&(e.setAttribute(o,""),e.removeAttribute(o))}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9324:()=>{},5299:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78"}}},e=>{var t=t=>e(e.s=t);e.O(0,[618,441,517,358],()=>t(6335)),_N_E=e.O()}]);