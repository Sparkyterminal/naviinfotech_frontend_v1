import{a as i,j as s}from"./index-OzkKveEd.js";/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),w=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,r)=>r?r.toUpperCase():o.toLowerCase()),c=e=>{const t=w(e);return t.charAt(0).toUpperCase()+t.slice(1)},d=(...e)=>e.filter((t,o,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===o).join(" ").trim(),f=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=i.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:r,className:n="",children:a,iconNode:h,...l},m)=>i.createElement("svg",{ref:m,...b,width:t,height:t,stroke:e,strokeWidth:r?Number(o)*24/Number(t):o,className:d("lucide",n),...!a&&!f(l)&&{"aria-hidden":"true"},...l},[...h.map(([p,g])=>i.createElement(p,g)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(e,t)=>{const o=i.forwardRef(({className:r,...n},a)=>i.createElement(y,{ref:a,iconNode:t,className:d(`lucide-${x(c(e))}`,`lucide-${e}`,r),...n}));return o.displayName=c(e),o};/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],j=u("chevron-down",k);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],N=u("chevron-up",v),A=()=>{const[e,t]=i.useState(new Set),o=n=>{const a=new Set(e);a.has(n)?a.delete(n):a.add(n),t(a)},r=[{question:"What do you guys do?",answer:"We build websites, apps, and digital products that are smart, stylish, and built to wow."},{question:"How long does a project take?",answer:"Depends on the size — a website might take weeks, a custom app a few months. Either way, we keep it fast, clear, and on-time."},{question:"Do you work with startups or only big companies?",answer:"Both! From garage ideas to global brands — we help everyone shine online."},{question:"Can you fix or redesign my old site/app?",answer:"Oh yes. We love turning clunky, outdated designs into fresh, modern experiences."},{question:"Why should I pick Navi Infotech?",answer:"Because we mix creativity, clean code, and bold ideas to build digital solutions that stand out."}];return s.jsx("div",{className:"min-h-screen bg-black text-white font-[neu]",children:s.jsx("div",{className:"container mx-auto px-6 py-10",children:s.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 lg:gap-16",children:[s.jsx("div",{className:"flex items-start justify-start",children:s.jsxs("div",{className:"sticky top-16",children:[s.jsxs("h1",{className:"text-6xl lg:text-7xl xl:text-8xl font-light leading-tight",children:[s.jsx("span",{className:"block text-gray-400",children:"Frequently"}),s.jsx("span",{className:"block text-white",children:"Asked"})]}),s.jsx("div",{className:"w-16 h-1 bg-blue-500 mt-6"})]})}),s.jsx("div",{className:"space-y-4",children:r.map((n,a)=>s.jsxs("div",{className:"border border-black rounded-lg bg-black backdrop-blur-sm transition-all duration-200 hover:border-gray-600",children:[s.jsxs("button",{onClick:()=>o(a),className:"w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg transition-colors",children:[s.jsx("span",{className:"text-lg font-medium text-white pr-4",children:n.question}),e.has(a)?s.jsx(N,{className:"w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200"}):s.jsx(j,{className:"w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200"})]}),e.has(a)&&s.jsx("div",{className:"px-6 pb-5 animate-in slide-in-from-top-2 duration-200",children:s.jsx("div",{className:"border-t border-black pt-4",children:s.jsx("p",{className:"text-gray-300 leading-relaxed",children:n.answer})})})]},a))})]})})})};export{A as default};
