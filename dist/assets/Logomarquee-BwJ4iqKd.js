import{r as U,g as V,j as r}from"./index-B6kNn4jn.js";var b={},D;function Y(){if(D)return b;D=1;function u(a){if(typeof window>"u")return;const c=document.createElement("style");return c.setAttribute("type","text/css"),c.innerHTML=a,document.head.appendChild(c),a}Object.defineProperty(b,"__esModule",{value:!0});var e=U();function d(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var s=d(e);u(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const O=e.forwardRef(function({style:c={},className:B="",autoFill:m=!1,play:f=!0,pauseOnHover:L=!1,pauseOnClick:j=!1,direction:t="left",speed:h=50,delay:k=0,loop:q=0,gradient:I=!1,gradientColor:C="white",gradientWidth:v=200,onFinish:X,onCycleComplete:H,onMount:S,children:x},P){const[E,T]=e.useState(0),[y,Z]=e.useState(0),[w,_]=e.useState(1),[R,G]=e.useState(!1),J=e.useRef(null),o=P||J,g=e.useRef(null),p=e.useCallback(()=>{if(g.current&&o.current){const n=o.current.getBoundingClientRect(),M=g.current.getBoundingClientRect();let i=n.width,l=M.width;(t==="up"||t==="down")&&(i=n.height,l=M.height),_(m&&i&&l&&l<i?Math.ceil(i/l):1),T(i),Z(l)}},[m,o,t]);e.useEffect(()=>{if(R&&(p(),g.current&&o.current)){const n=new ResizeObserver(()=>p());return n.observe(o.current),n.observe(g.current),()=>{n&&n.disconnect()}}},[p,o,R]),e.useEffect(()=>{p()},[p,x]),e.useEffect(()=>{G(!0)},[]),e.useEffect(()=>{typeof S=="function"&&S()},[]);const $=e.useMemo(()=>m?y*w/h:y<E?E/h:y/h,[m,E,y,w,h]),K=e.useMemo(()=>Object.assign(Object.assign({},c),{"--pause-on-hover":!f||L?"paused":"running","--pause-on-click":!f||L&&!j||j?"paused":"running","--width":t==="up"||t==="down"?"100vh":"100%","--transform":t==="up"?"rotate(-90deg)":t==="down"?"rotate(90deg)":"none"}),[c,f,L,j,t]),Q=e.useMemo(()=>({"--gradient-color":C,"--gradient-width":typeof v=="number"?`${v}px`:v}),[C,v]),z=e.useMemo(()=>({"--play":f?"running":"paused","--direction":t==="left"?"normal":"reverse","--duration":`${$}s`,"--delay":`${k}s`,"--iteration-count":q?`${q}`:"infinite","--min-width":m?"auto":"100%"}),[f,t,$,k,q,m]),N=e.useMemo(()=>({"--transform":t==="up"?"rotate(90deg)":t==="down"?"rotate(-90deg)":"none"}),[t]),A=e.useCallback(n=>[...Array(Number.isFinite(n)&&n>=0?n:0)].map((M,i)=>s.default.createElement(e.Fragment,{key:i},e.Children.map(x,l=>s.default.createElement("div",{style:N,className:"rfm-child"},l)))),[N,x]);return R?s.default.createElement("div",{ref:o,style:K,className:"rfm-marquee-container "+B},I&&s.default.createElement("div",{style:Q,className:"rfm-overlay"}),s.default.createElement("div",{className:"rfm-marquee",style:z,onAnimationIteration:H,onAnimationEnd:X},s.default.createElement("div",{className:"rfm-initial-child-container",ref:g},e.Children.map(x,n=>s.default.createElement("div",{style:N,className:"rfm-child"},n))),A(w-1)),s.default.createElement("div",{className:"rfm-marquee",style:z},A(w))):null});return b.default=O,b}var F=Y();const W=V(F),ee=[{src:"/assets/ai.png",alt:"Logo 1"},{src:"/assets/aws.png",alt:"Logo 2"},{src:"/assets/java.png",alt:"Logo 3"},{src:"/assets/mongo.png",alt:"Logo 4"},{src:"/assets/node.png",alt:"Logo 5"},{src:"/assets/react.png",alt:"Logo 6"},{src:"/assets/next.png",alt:"Logo 7"},{src:"/assets/python.png",alt:"Logo 8"},{src:"/assets/dock.png",alt:"Logo 9"},{src:"/assets/ts.png",alt:"Logo 10"},{src:"/assets/kotlin.png",alt:"Logo 11"}],te=[{src:"/assets/css.png",alt:"Logo 1"},{src:"/assets/angular.png",alt:"Logo 2"},{src:"/assets/go.png",alt:"Logo 3"},{src:"/assets/flutter.png",alt:"Logo 4"},{src:"/assets/postgres.png",alt:"Logo 5"},{src:"/assets/ui.png",alt:"Logo 6"},{src:"/assets/sql.png",alt:"Logo 7"},{src:"/assets/vue.png",alt:"Logo 8"},{src:"/assets/kuber.png",alt:"Logo 9"},{src:"/assets/figma.png",alt:"Logo 10"},{src:"/assets/js.png",alt:"Logo 11"}];function ae(){return r.jsxs("div",{className:"my-4 md:my-8 mx-2 md:mx-0 px-3 md:px-6 py-4 md:py-6 rounded-md bg-white/80 backdrop-blur-sm overflow-hidden",children:[r.jsx("div",{className:"overflow-hidden",children:r.jsx(W,{gradient:!0,gradientColor:[255,255,255,.05],speed:50,pauseOnHover:!1,loop:0,style:{overflow:"visible"},children:ee.map(({src:u,alt:e},d)=>r.jsx("div",{className:"flex items-center justify-center mx-4 sm:mx-6 md:mx-8 lg:mx-12 h-12 sm:h-14 md:h-16 lg:h-20",children:r.jsx("img",{src:u,alt:e,className:"h-full w-auto max-w-[60px] sm:max-w-[70px] md:max-w-[80px] lg:max-w-none object-contain transition-transform duration-300 hover:scale-105",style:{filter:"brightness(1.15)"}})},d))})}),r.jsx("div",{className:"overflow-hidden mt-4 md:mt-8",children:r.jsx(W,{direction:"right",gradient:!0,gradientColor:[255,255,255,.05],speed:50,pauseOnHover:!1,loop:0,style:{overflow:"visible"},children:te.map(({src:u,alt:e},d)=>r.jsx("div",{className:"flex items-center justify-center mx-4 sm:mx-6 md:mx-8 lg:mx-12 h-12 sm:h-14 md:h-16 lg:h-20",children:r.jsx("img",{src:u,alt:e,className:"h-full w-auto max-w-[60px] sm:max-w-[70px] md:max-w-[80px] lg:max-w-none object-contain transition-transform duration-300 hover:scale-105",style:{filter:"brightness(1.15)"}})},d))})})]})}export{ae as default};
