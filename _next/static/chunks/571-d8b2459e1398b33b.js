"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[571],{8149:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},1584:function(e,t,n){n.d(t,{F:function(){return i},e:function(){return o}});var r=n(2265);function i(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function o(...e){return r.useCallback(i(...e),e)}},8324:function(e,t,n){n.d(t,{b:function(){return l},k:function(){return o}});var r=n(2265),i=n(7437);function o(e,t){let n=r.createContext(t);function o(e){let{children:t,...o}=e,l=r.useMemo(()=>o,Object.values(o));return(0,i.jsx)(n.Provider,{value:l,children:t})}return o.displayName=e+"Provider",[o,function(i){let o=r.useContext(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${i}\` must be used within \`${e}\``)}]}function l(e,t=[]){let n=[],o=()=>{let t=n.map(e=>r.createContext(e));return function(n){let i=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:i}}),[n,i])}};return o.scopeName=e,[function(t,o){let l=r.createContext(o),u=n.length;function a(t){let{scope:n,children:o,...a}=t,s=n?.[e][u]||l,c=r.useMemo(()=>a,Object.values(a));return(0,i.jsx)(s.Provider,{value:c,children:o})}return n=[...n,o],a.displayName=t+"Provider",[a,function(n,i){let a=i?.[e][u]||l,s=r.useContext(a);if(s)return s;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let i=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}(o,...t)]}},3938:function(e,t,n){n.d(t,{XB:function(){return d}});var r,i=n(2265),o=n(8149),l=n(5171),u=n(1584),a=n(3440),s=n(7437),c="dismissableLayer.update",f=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),d=i.forwardRef((e,t)=>{var n,d;let{disableOutsidePointerEvents:v=!1,onEscapeKeyDown:h,onPointerDownOutside:g,onFocusOutside:y,onInteractOutside:w,onDismiss:b,...x}=e,E=i.useContext(f),[R,A]=i.useState(null),O=null!==(d=null==R?void 0:R.ownerDocument)&&void 0!==d?d:null===(n=globalThis)||void 0===n?void 0:n.document,[,C]=i.useState({}),P=(0,u.e)(t,e=>A(e)),L=Array.from(E.layers),[N]=[...E.layersWithOutsidePointerEventsDisabled].slice(-1),T=L.indexOf(N),S=R?L.indexOf(R):-1,W=E.layersWithOutsidePointerEventsDisabled.size>0,D=S>=T,j=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,a.W)(e),o=i.useRef(!1),l=i.useRef(()=>{});return i.useEffect(()=>{let e=e=>{if(e.target&&!o.current){let t=function(){m("dismissableLayer.pointerDownOutside",r,i,{discrete:!0})},i={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",l.current),l.current=t,n.addEventListener("click",l.current,{once:!0})):t()}else n.removeEventListener("click",l.current);o.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",l.current)}},[n,r]),{onPointerDownCapture:()=>o.current=!0}}(e=>{let t=e.target,n=[...E.branches].some(e=>e.contains(t));!D||n||(null==g||g(e),null==w||w(e),e.defaultPrevented||null==b||b())},O),k=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,a.W)(e),o=i.useRef(!1);return i.useEffect(()=>{let e=e=>{e.target&&!o.current&&m("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}(e=>{let t=e.target;[...E.branches].some(e=>e.contains(t))||(null==y||y(e),null==w||w(e),e.defaultPrevented||null==b||b())},O);return!function(e,t=globalThis?.document){let n=(0,a.W)(e);i.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{S!==E.layers.size-1||(null==h||h(e),!e.defaultPrevented&&b&&(e.preventDefault(),b()))},O),i.useEffect(()=>{if(R)return v&&(0===E.layersWithOutsidePointerEventsDisabled.size&&(r=O.body.style.pointerEvents,O.body.style.pointerEvents="none"),E.layersWithOutsidePointerEventsDisabled.add(R)),E.layers.add(R),p(),()=>{v&&1===E.layersWithOutsidePointerEventsDisabled.size&&(O.body.style.pointerEvents=r)}},[R,O,v,E]),i.useEffect(()=>()=>{R&&(E.layers.delete(R),E.layersWithOutsidePointerEventsDisabled.delete(R),p())},[R,E]),i.useEffect(()=>{let e=()=>C({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)},[]),(0,s.jsx)(l.WV.div,{...x,ref:P,style:{pointerEvents:W?D?"auto":"none":void 0,...e.style},onFocusCapture:(0,o.M)(e.onFocusCapture,k.onFocusCapture),onBlurCapture:(0,o.M)(e.onBlurCapture,k.onBlurCapture),onPointerDownCapture:(0,o.M)(e.onPointerDownCapture,j.onPointerDownCapture)})});function p(){let e=new CustomEvent(c);document.dispatchEvent(e)}function m(e,t,n,r){let{discrete:i}=r,o=n.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),i?(0,l.jH)(o,u):o.dispatchEvent(u)}d.displayName="DismissableLayer",i.forwardRef((e,t)=>{let n=i.useContext(f),r=i.useRef(null),o=(0,u.e)(t,r);return i.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,s.jsx)(l.WV.div,{...e,ref:o})}).displayName="DismissableLayerBranch"},3201:function(e,t,n){n.d(t,{M:function(){return a}});var r,i=n(2265),o=n(1336),l=(r||(r=n.t(i,2)))["useId".toString()]||(()=>void 0),u=0;function a(e){let[t,n]=i.useState(l());return(0,o.b)(()=>{e||n(e=>e??String(u++))},[e]),e||(t?`radix-${t}`:"")}},7683:function(e,t,n){n.d(t,{ee:function(){return eY},Eh:function(){return eq},VY:function(){return eX},fC:function(){return eU},D7:function(){return eN}});var r=n(2265);let i=["top","right","bottom","left"],o=Math.min,l=Math.max,u=Math.round,a=Math.floor,s=e=>({x:e,y:e}),c={left:"right",right:"left",bottom:"top",top:"bottom"},f={start:"end",end:"start"};function d(e,t){return"function"==typeof e?e(t):e}function p(e){return e.split("-")[0]}function m(e){return e.split("-")[1]}function v(e){return"x"===e?"y":"x"}function h(e){return"y"===e?"height":"width"}function g(e){return["top","bottom"].includes(p(e))?"y":"x"}function y(e){return e.replace(/start|end/g,e=>f[e])}function w(e){return e.replace(/left|right|bottom|top/g,e=>c[e])}function b(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function x(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function E(e,t,n){let r,{reference:i,floating:o}=e,l=g(t),u=v(g(t)),a=h(u),s=p(t),c="y"===l,f=i.x+i.width/2-o.width/2,d=i.y+i.height/2-o.height/2,y=i[a]/2-o[a]/2;switch(s){case"top":r={x:f,y:i.y-o.height};break;case"bottom":r={x:f,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:d};break;case"left":r={x:i.x-o.width,y:d};break;default:r={x:i.x,y:i.y}}switch(m(t)){case"start":r[u]-=y*(n&&c?-1:1);break;case"end":r[u]+=y*(n&&c?-1:1)}return r}let R=async(e,t,n)=>{let{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:l}=n,u=o.filter(Boolean),a=await (null==l.isRTL?void 0:l.isRTL(t)),s=await l.getElementRects({reference:e,floating:t,strategy:i}),{x:c,y:f}=E(s,r,a),d=r,p={},m=0;for(let n=0;n<u.length;n++){let{name:o,fn:v}=u[n],{x:h,y:g,data:y,reset:w}=await v({x:c,y:f,initialPlacement:r,placement:d,strategy:i,middlewareData:p,rects:s,platform:l,elements:{reference:e,floating:t}});c=null!=h?h:c,f=null!=g?g:f,p={...p,[o]:{...p[o],...y}},w&&m<=50&&(m++,"object"==typeof w&&(w.placement&&(d=w.placement),w.rects&&(s=!0===w.rects?await l.getElementRects({reference:e,floating:t,strategy:i}):w.rects),{x:c,y:f}=E(s,d,a)),n=-1)}return{x:c,y:f,placement:d,strategy:i,middlewareData:p}};async function A(e,t){var n;void 0===t&&(t={});let{x:r,y:i,platform:o,rects:l,elements:u,strategy:a}=e,{boundary:s="clippingAncestors",rootBoundary:c="viewport",elementContext:f="floating",altBoundary:p=!1,padding:m=0}=d(t,e),v=b(m),h=u[p?"floating"===f?"reference":"floating":f],g=x(await o.getClippingRect({element:null==(n=await (null==o.isElement?void 0:o.isElement(h)))||n?h:h.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(u.floating)),boundary:s,rootBoundary:c,strategy:a})),y="floating"===f?{x:r,y:i,width:l.floating.width,height:l.floating.height}:l.reference,w=await (null==o.getOffsetParent?void 0:o.getOffsetParent(u.floating)),E=await (null==o.isElement?void 0:o.isElement(w))&&await (null==o.getScale?void 0:o.getScale(w))||{x:1,y:1},R=x(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:u,rect:y,offsetParent:w,strategy:a}):y);return{top:(g.top-R.top+v.top)/E.y,bottom:(R.bottom-g.bottom+v.bottom)/E.y,left:(g.left-R.left+v.left)/E.x,right:(R.right-g.right+v.right)/E.x}}function O(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function C(e){return i.some(t=>e[t]>=0)}async function P(e,t){let{placement:n,platform:r,elements:i}=e,o=await (null==r.isRTL?void 0:r.isRTL(i.floating)),l=p(n),u=m(n),a="y"===g(n),s=["left","top"].includes(l)?-1:1,c=o&&a?-1:1,f=d(t,e),{mainAxis:v,crossAxis:h,alignmentAxis:y}="number"==typeof f?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return u&&"number"==typeof y&&(h="end"===u?-1*y:y),a?{x:h*c,y:v*s}:{x:v*s,y:h*c}}function L(e){return S(e)?(e.nodeName||"").toLowerCase():"#document"}function N(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function T(e){var t;return null==(t=(S(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function S(e){return e instanceof Node||e instanceof N(e).Node}function W(e){return e instanceof Element||e instanceof N(e).Element}function D(e){return e instanceof HTMLElement||e instanceof N(e).HTMLElement}function j(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof N(e).ShadowRoot)}function k(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=z(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function M(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch(e){return!1}})}function H(e){let t=V(),n=W(e)?z(e):e;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(e=>(n.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(n.contain||"").includes(e))}function V(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function F(e){return["html","body","#document"].includes(L(e))}function z(e){return N(e).getComputedStyle(e)}function _(e){return W(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function B(e){if("html"===L(e))return e;let t=e.assignedSlot||e.parentNode||j(e)&&e.host||T(e);return j(t)?t.host:t}function I(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);let i=function e(t){let n=B(t);return F(n)?t.ownerDocument?t.ownerDocument.body:t.body:D(n)&&k(n)?n:e(n)}(e),o=i===(null==(r=e.ownerDocument)?void 0:r.body),l=N(i);if(o){let e=$(l);return t.concat(l,l.visualViewport||[],k(i)?i:[],e&&n?I(e):[])}return t.concat(i,I(i,[],n))}function $(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function U(e){let t=z(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=D(e),o=i?e.offsetWidth:n,l=i?e.offsetHeight:r,a=u(n)!==o||u(r)!==l;return a&&(n=o,r=l),{width:n,height:r,$:a}}function Y(e){return W(e)?e:e.contextElement}function X(e){let t=Y(e);if(!D(t))return s(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:o}=U(t),l=(o?u(n.width):n.width)/r,a=(o?u(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),a&&Number.isFinite(a)||(a=1),{x:l,y:a}}let q=s(0);function Z(e){let t=N(e);return V()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:q}function G(e,t,n,r){var i;void 0===t&&(t=!1),void 0===n&&(n=!1);let o=e.getBoundingClientRect(),l=Y(e),u=s(1);t&&(r?W(r)&&(u=X(r)):u=X(e));let a=(void 0===(i=n)&&(i=!1),r&&(!i||r===N(l))&&i)?Z(l):s(0),c=(o.left+a.x)/u.x,f=(o.top+a.y)/u.y,d=o.width/u.x,p=o.height/u.y;if(l){let e=N(l),t=r&&W(r)?N(r):r,n=e,i=$(n);for(;i&&r&&t!==n;){let e=X(i),t=i.getBoundingClientRect(),r=z(i),o=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,l=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,f*=e.y,d*=e.x,p*=e.y,c+=o,f+=l,i=$(n=N(i))}}return x({width:d,height:p,x:c,y:f})}function J(e){return G(T(e)).left+_(e).scrollLeft}function K(e,t,n){let r;if("viewport"===t)r=function(e,t){let n=N(e),r=T(e),i=n.visualViewport,o=r.clientWidth,l=r.clientHeight,u=0,a=0;if(i){o=i.width,l=i.height;let e=V();(!e||e&&"fixed"===t)&&(u=i.offsetLeft,a=i.offsetTop)}return{width:o,height:l,x:u,y:a}}(e,n);else if("document"===t)r=function(e){let t=T(e),n=_(e),r=e.ownerDocument.body,i=l(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=l(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),u=-n.scrollLeft+J(e),a=-n.scrollTop;return"rtl"===z(r).direction&&(u+=l(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:u,y:a}}(T(e));else if(W(t))r=function(e,t){let n=G(e,!0,"fixed"===t),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=D(e)?X(e):s(1),l=e.clientWidth*o.x;return{width:l,height:e.clientHeight*o.y,x:i*o.x,y:r*o.y}}(t,n);else{let n=Z(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return x(r)}function Q(e){return"static"===z(e).position}function ee(e,t){return D(e)&&"fixed"!==z(e).position?t?t(e):e.offsetParent:null}function et(e,t){let n=N(e);if(M(e))return n;if(!D(e)){let t=B(e);for(;t&&!F(t);){if(W(t)&&!Q(t))return t;t=B(t)}return n}let r=ee(e,t);for(;r&&["table","td","th"].includes(L(r))&&Q(r);)r=ee(r,t);return r&&F(r)&&Q(r)&&!H(r)?n:r||function(e){let t=B(e);for(;D(t)&&!F(t);){if(H(t))return t;if(M(t))break;t=B(t)}return null}(e)||n}let en=async function(e){let t=this.getOffsetParent||et,n=this.getDimensions,r=await n(e.floating);return{reference:function(e,t,n){let r=D(t),i=T(t),o="fixed"===n,l=G(e,!0,o,t),u={scrollLeft:0,scrollTop:0},a=s(0);if(r||!r&&!o){if(("body"!==L(t)||k(i))&&(u=_(t)),r){let e=G(t,!0,o,t);a.x=e.x+t.clientLeft,a.y=e.y+t.clientTop}else i&&(a.x=J(i))}return{x:l.left+u.scrollLeft-a.x,y:l.top+u.scrollTop-a.y,width:l.width,height:l.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},er={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,o="fixed"===i,l=T(r),u=!!t&&M(t.floating);if(r===l||u&&o)return n;let a={scrollLeft:0,scrollTop:0},c=s(1),f=s(0),d=D(r);if((d||!d&&!o)&&(("body"!==L(r)||k(l))&&(a=_(r)),D(r))){let e=G(r);c=X(r),f.x=e.x+r.clientLeft,f.y=e.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-a.scrollLeft*c.x+f.x,y:n.y*c.y-a.scrollTop*c.y+f.y}},getDocumentElement:T,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,u=[..."clippingAncestors"===n?M(t)?[]:function(e,t){let n=t.get(e);if(n)return n;let r=I(e,[],!1).filter(e=>W(e)&&"body"!==L(e)),i=null,o="fixed"===z(e).position,l=o?B(e):e;for(;W(l)&&!F(l);){let t=z(l),n=H(l);n||"fixed"!==t.position||(i=null),(o?!n&&!i:!n&&"static"===t.position&&!!i&&["absolute","fixed"].includes(i.position)||k(l)&&!n&&function e(t,n){let r=B(t);return!(r===n||!W(r)||F(r))&&("fixed"===z(r).position||e(r,n))}(e,l))?r=r.filter(e=>e!==l):i=t,l=B(l)}return t.set(e,r),r}(t,this._c):[].concat(n),r],a=u[0],s=u.reduce((e,n)=>{let r=K(t,n,i);return e.top=l(r.top,e.top),e.right=o(r.right,e.right),e.bottom=o(r.bottom,e.bottom),e.left=l(r.left,e.left),e},K(t,a,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:et,getElementRects:en,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:n}=U(e);return{width:t,height:n}},getScale:X,isElement:W,isRTL:function(e){return"rtl"===z(e).direction}},ei=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:r,placement:i,rects:u,platform:a,elements:s,middlewareData:c}=t,{element:f,padding:p=0}=d(e,t)||{};if(null==f)return{};let y=b(p),w={x:n,y:r},x=v(g(i)),E=h(x),R=await a.getDimensions(f),A="y"===x,O=A?"clientHeight":"clientWidth",C=u.reference[E]+u.reference[x]-w[x]-u.floating[E],P=w[x]-u.reference[x],L=await (null==a.getOffsetParent?void 0:a.getOffsetParent(f)),N=L?L[O]:0;N&&await (null==a.isElement?void 0:a.isElement(L))||(N=s.floating[O]||u.floating[E]);let T=N/2-R[E]/2-1,S=o(y[A?"top":"left"],T),W=o(y[A?"bottom":"right"],T),D=N-R[E]-W,j=N/2-R[E]/2+(C/2-P/2),k=l(S,o(j,D)),M=!c.arrow&&null!=m(i)&&j!==k&&u.reference[E]/2-(j<S?S:W)-R[E]/2<0,H=M?j<S?j-S:j-D:0;return{[x]:w[x]+H,data:{[x]:k,centerOffset:j-k-H,...M&&{alignmentOffset:H}},reset:M}}}),eo=(e,t,n)=>{let r=new Map,i={platform:er,...n},o={...i.platform,_c:r};return R(e,t,{...i,platform:o})};var el=n(4887),eu="undefined"!=typeof document?r.useLayoutEffect:r.useEffect;function ea(e,t){let n,r,i;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!==t.length)return!1;for(r=n;0!=r--;)if(!ea(e[r],t[r]))return!1;return!0}if((n=(i=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(t,i[r]))return!1;for(r=n;0!=r--;){let n=i[r];if(("_owner"!==n||!e.$$typeof)&&!ea(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function es(e){return"undefined"==typeof window?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ec(e,t){let n=es(e);return Math.round(t*n)/n}function ef(e){let t=r.useRef(e);return eu(()=>{t.current=e}),t}let ed=e=>({name:"arrow",options:e,fn(t){let{element:n,padding:r}="function"==typeof e?e(t):e;return n&&({}).hasOwnProperty.call(n,"current")?null!=n.current?ei({element:n.current,padding:r}).fn(t):{}:n?ei({element:n,padding:r}).fn(t):{}}}),ep=(e,t)=>{var n;return{...(void 0===(n=e)&&(n=0),{name:"offset",options:n,async fn(e){var t,r;let{x:i,y:o,placement:l,middlewareData:u}=e,a=await P(e,n);return l===(null==(t=u.offset)?void 0:t.placement)&&null!=(r=u.arrow)&&r.alignmentOffset?{}:{x:i+a.x,y:o+a.y,data:{...a,placement:l}}}}),options:[e,t]}},em=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{name:"shift",options:n,async fn(e){let{x:t,y:r,placement:i}=e,{mainAxis:u=!0,crossAxis:a=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=d(n,e),f={x:t,y:r},m=await A(e,c),h=g(p(i)),y=v(h),w=f[y],b=f[h];if(u){let e="y"===y?"top":"left",t="y"===y?"bottom":"right",n=w+m[e],r=w-m[t];w=l(n,o(w,r))}if(a){let e="y"===h?"top":"left",t="y"===h?"bottom":"right",n=b+m[e],r=b-m[t];b=l(n,o(b,r))}let x=s.fn({...e,[y]:w,[h]:b});return{...x,data:{x:x.x-t,y:x.y-r}}}}),options:[e,t]}},ev=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{options:n,fn(e){let{x:t,y:r,placement:i,rects:o,middlewareData:l}=e,{offset:u=0,mainAxis:a=!0,crossAxis:s=!0}=d(n,e),c={x:t,y:r},f=g(i),m=v(f),h=c[m],y=c[f],w=d(u,e),b="number"==typeof w?{mainAxis:w,crossAxis:0}:{mainAxis:0,crossAxis:0,...w};if(a){let e="y"===m?"height":"width",t=o.reference[m]-o.floating[e]+b.mainAxis,n=o.reference[m]+o.reference[e]-b.mainAxis;h<t?h=t:h>n&&(h=n)}if(s){var x,E;let e="y"===m?"width":"height",t=["top","left"].includes(p(i)),n=o.reference[f]-o.floating[e]+(t&&(null==(x=l.offset)?void 0:x[f])||0)+(t?0:b.crossAxis),r=o.reference[f]+o.reference[e]+(t?0:(null==(E=l.offset)?void 0:E[f])||0)-(t?b.crossAxis:0);y<n?y=n:y>r&&(y=r)}return{[m]:h,[f]:y}}}),options:[e,t]}},eh=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{name:"flip",options:n,async fn(e){var t,r,i,o,l;let{placement:u,middlewareData:a,rects:s,initialPlacement:c,platform:f,elements:b}=e,{mainAxis:x=!0,crossAxis:E=!0,fallbackPlacements:R,fallbackStrategy:O="bestFit",fallbackAxisSideDirection:C="none",flipAlignment:P=!0,...L}=d(n,e);if(null!=(t=a.arrow)&&t.alignmentOffset)return{};let N=p(u),T=g(c),S=p(c)===c,W=await (null==f.isRTL?void 0:f.isRTL(b.floating)),D=R||(S||!P?[w(c)]:function(e){let t=w(e);return[y(e),t,y(t)]}(c)),j="none"!==C;!R&&j&&D.push(...function(e,t,n,r){let i=m(e),o=function(e,t,n){let r=["left","right"],i=["right","left"];switch(e){case"top":case"bottom":if(n)return t?i:r;return t?r:i;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(p(e),"start"===n,r);return i&&(o=o.map(e=>e+"-"+i),t&&(o=o.concat(o.map(y)))),o}(c,P,C,W));let k=[c,...D],M=await A(e,L),H=[],V=(null==(r=a.flip)?void 0:r.overflows)||[];if(x&&H.push(M[N]),E){let e=function(e,t,n){void 0===n&&(n=!1);let r=m(e),i=v(g(e)),o=h(i),l="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[o]>t.floating[o]&&(l=w(l)),[l,w(l)]}(u,s,W);H.push(M[e[0]],M[e[1]])}if(V=[...V,{placement:u,overflows:H}],!H.every(e=>e<=0)){let e=((null==(i=a.flip)?void 0:i.index)||0)+1,t=k[e];if(t)return{data:{index:e,overflows:V},reset:{placement:t}};let n=null==(o=V.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:o.placement;if(!n)switch(O){case"bestFit":{let e=null==(l=V.filter(e=>{if(j){let t=g(e.placement);return t===T||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:l[0];e&&(n=e);break}case"initialPlacement":n=c}if(u!==n)return{reset:{placement:n}}}return{}}}),options:[e,t]}},eg=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{name:"size",options:n,async fn(e){let t,r;let{placement:i,rects:u,platform:a,elements:s}=e,{apply:c=()=>{},...f}=d(n,e),v=await A(e,f),h=p(i),y=m(i),w="y"===g(i),{width:b,height:x}=u.floating;"top"===h||"bottom"===h?(t=h,r=y===(await (null==a.isRTL?void 0:a.isRTL(s.floating))?"start":"end")?"left":"right"):(r=h,t="end"===y?"top":"bottom");let E=x-v.top-v.bottom,R=b-v.left-v.right,O=o(x-v[t],E),C=o(b-v[r],R),P=!e.middlewareData.shift,L=O,N=C;if(w?N=y||P?o(C,R):R:L=y||P?o(O,E):E,P&&!y){let e=l(v.left,0),t=l(v.right,0),n=l(v.top,0),r=l(v.bottom,0);w?N=b-2*(0!==e||0!==t?e+t:l(v.left,v.right)):L=x-2*(0!==n||0!==r?n+r:l(v.top,v.bottom))}await c({...e,availableWidth:N,availableHeight:L});let T=await a.getDimensions(s.floating);return b!==T.width||x!==T.height?{reset:{rects:!0}}:{}}}),options:[e,t]}},ey=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{name:"hide",options:n,async fn(e){let{rects:t}=e,{strategy:r="referenceHidden",...i}=d(n,e);switch(r){case"referenceHidden":{let n=O(await A(e,{...i,elementContext:"reference"}),t.reference);return{data:{referenceHiddenOffsets:n,referenceHidden:C(n)}}}case"escaped":{let n=O(await A(e,{...i,altBoundary:!0}),t.floating);return{data:{escapedOffsets:n,escaped:C(n)}}}default:return{}}}}),options:[e,t]}},ew=(e,t)=>({...ed(e),options:[e,t]});var eb=n(5171),ex=n(7437),eE=r.forwardRef((e,t)=>{let{children:n,width:r=10,height:i=5,...o}=e;return(0,ex.jsx)(eb.WV.svg,{...o,ref:t,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:(0,ex.jsx)("polygon",{points:"0,0 30,0 15,10"})})});eE.displayName="Arrow";var eR=n(1584),eA=n(8324),eO=n(3440),eC=n(1336),eP="Popper",[eL,eN]=(0,eA.b)(eP),[eT,eS]=eL(eP),eW=e=>{let{__scopePopper:t,children:n}=e,[i,o]=r.useState(null);return(0,ex.jsx)(eT,{scope:t,anchor:i,onAnchorChange:o,children:n})};eW.displayName=eP;var eD="PopperAnchor",ej=r.forwardRef((e,t)=>{let{__scopePopper:n,virtualRef:i,...o}=e,l=eS(eD,n),u=r.useRef(null),a=(0,eR.e)(t,u);return r.useEffect(()=>{l.onAnchorChange((null==i?void 0:i.current)||u.current)}),i?null:(0,ex.jsx)(eb.WV.div,{...o,ref:a})});ej.displayName=eD;var ek="PopperContent",[eM,eH]=eL(ek),eV=r.forwardRef((e,t)=>{var n,i,u,s,c,f,d,p;let{__scopePopper:m,side:v="bottom",sideOffset:h=0,align:g="center",alignOffset:y=0,arrowPadding:w=0,avoidCollisions:b=!0,collisionBoundary:x=[],collisionPadding:E=0,sticky:R="partial",hideWhenDetached:A=!1,updatePositionStrategy:O="optimized",onPlaced:C,...P}=e,L=eS(ek,m),[N,S]=r.useState(null),W=(0,eR.e)(t,e=>S(e)),[D,j]=r.useState(null),k=function(e){let[t,n]=r.useState(void 0);return(0,eC.b)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,i;if(!Array.isArray(t)||!t.length)return;let o=t[0];if("borderBoxSize"in o){let e=o.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,i=t.blockSize}else r=e.offsetWidth,i=e.offsetHeight;n({width:r,height:i})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}(D),M=null!==(d=null==k?void 0:k.width)&&void 0!==d?d:0,H=null!==(p=null==k?void 0:k.height)&&void 0!==p?p:0,V="number"==typeof E?E:{top:0,right:0,bottom:0,left:0,...E},F=Array.isArray(x)?x:[x],z=F.length>0,_={padding:V,boundary:F.filter(eB),altBoundary:z},{refs:B,floatingStyles:$,placement:U,isPositioned:X,middlewareData:q}=function(e){void 0===e&&(e={});let{placement:t="bottom",strategy:n="absolute",middleware:i=[],platform:o,elements:{reference:l,floating:u}={},transform:a=!0,whileElementsMounted:s,open:c}=e,[f,d]=r.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,m]=r.useState(i);ea(p,i)||m(i);let[v,h]=r.useState(null),[g,y]=r.useState(null),w=r.useCallback(e=>{e!==R.current&&(R.current=e,h(e))},[]),b=r.useCallback(e=>{e!==A.current&&(A.current=e,y(e))},[]),x=l||v,E=u||g,R=r.useRef(null),A=r.useRef(null),O=r.useRef(f),C=null!=s,P=ef(s),L=ef(o),N=r.useCallback(()=>{if(!R.current||!A.current)return;let e={placement:t,strategy:n,middleware:p};L.current&&(e.platform=L.current),eo(R.current,A.current,e).then(e=>{let t={...e,isPositioned:!0};T.current&&!ea(O.current,t)&&(O.current=t,el.flushSync(()=>{d(t)}))})},[p,t,n,L]);eu(()=>{!1===c&&O.current.isPositioned&&(O.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[c]);let T=r.useRef(!1);eu(()=>(T.current=!0,()=>{T.current=!1}),[]),eu(()=>{if(x&&(R.current=x),E&&(A.current=E),x&&E){if(P.current)return P.current(x,E,N);N()}},[x,E,N,P,C]);let S=r.useMemo(()=>({reference:R,floating:A,setReference:w,setFloating:b}),[w,b]),W=r.useMemo(()=>({reference:x,floating:E}),[x,E]),D=r.useMemo(()=>{let e={position:n,left:0,top:0};if(!W.floating)return e;let t=ec(W.floating,f.x),r=ec(W.floating,f.y);return a?{...e,transform:"translate("+t+"px, "+r+"px)",...es(W.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}},[n,a,W.floating,f.x,f.y]);return r.useMemo(()=>({...f,update:N,refs:S,elements:W,floatingStyles:D}),[f,N,S,W,D])}({strategy:"fixed",placement:v+("center"!==g?"-"+g:""),whileElementsMounted:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,t,n,r){let i;void 0===r&&(r={});let{ancestorScroll:u=!0,ancestorResize:s=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:f="function"==typeof IntersectionObserver,animationFrame:d=!1}=r,p=Y(e),m=u||s?[...p?I(p):[],...I(t)]:[];m.forEach(e=>{u&&e.addEventListener("scroll",n,{passive:!0}),s&&e.addEventListener("resize",n)});let v=p&&f?function(e,t){let n,r=null,i=T(e);function u(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return!function s(c,f){void 0===c&&(c=!1),void 0===f&&(f=1),u();let{left:d,top:p,width:m,height:v}=e.getBoundingClientRect();if(c||t(),!m||!v)return;let h=a(p),g=a(i.clientWidth-(d+m)),y={rootMargin:-h+"px "+-g+"px "+-a(i.clientHeight-(p+v))+"px "+-a(d)+"px",threshold:l(0,o(1,f))||1},w=!0;function b(e){let t=e[0].intersectionRatio;if(t!==f){if(!w)return s();t?s(!1,t):n=setTimeout(()=>{s(!1,1e-7)},1e3)}w=!1}try{r=new IntersectionObserver(b,{...y,root:i.ownerDocument})}catch(e){r=new IntersectionObserver(b,y)}r.observe(e)}(!0),u}(p,n):null,h=-1,g=null;c&&(g=new ResizeObserver(e=>{let[r]=e;r&&r.target===p&&g&&(g.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var e;null==(e=g)||e.observe(t)})),n()}),p&&!d&&g.observe(p),g.observe(t));let y=d?G(e):null;return d&&function t(){let r=G(e);y&&(r.x!==y.x||r.y!==y.y||r.width!==y.width||r.height!==y.height)&&n(),y=r,i=requestAnimationFrame(t)}(),n(),()=>{var e;m.forEach(e=>{u&&e.removeEventListener("scroll",n),s&&e.removeEventListener("resize",n)}),null==v||v(),null==(e=g)||e.disconnect(),g=null,d&&cancelAnimationFrame(i)}}(...t,{animationFrame:"always"===O})},elements:{reference:L.anchor},middleware:[ep({mainAxis:h+H,alignmentAxis:y}),b&&em({mainAxis:!0,crossAxis:!1,limiter:"partial"===R?ev():void 0,..._}),b&&eh({..._}),eg({..._,apply:e=>{let{elements:t,rects:n,availableWidth:r,availableHeight:i}=e,{width:o,height:l}=n.reference,u=t.floating.style;u.setProperty("--radix-popper-available-width","".concat(r,"px")),u.setProperty("--radix-popper-available-height","".concat(i,"px")),u.setProperty("--radix-popper-anchor-width","".concat(o,"px")),u.setProperty("--radix-popper-anchor-height","".concat(l,"px"))}}),D&&ew({element:D,padding:w}),eI({arrowWidth:M,arrowHeight:H}),A&&ey({strategy:"referenceHidden",..._})]}),[Z,J]=e$(U),K=(0,eO.W)(C);(0,eC.b)(()=>{X&&(null==K||K())},[X,K]);let Q=null===(n=q.arrow)||void 0===n?void 0:n.x,ee=null===(i=q.arrow)||void 0===i?void 0:i.y,et=(null===(u=q.arrow)||void 0===u?void 0:u.centerOffset)!==0,[en,er]=r.useState();return(0,eC.b)(()=>{N&&er(window.getComputedStyle(N).zIndex)},[N]),(0,ex.jsx)("div",{ref:B.setFloating,"data-radix-popper-content-wrapper":"",style:{...$,transform:X?$.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:en,"--radix-popper-transform-origin":[null===(s=q.transformOrigin)||void 0===s?void 0:s.x,null===(c=q.transformOrigin)||void 0===c?void 0:c.y].join(" "),...(null===(f=q.hide)||void 0===f?void 0:f.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:(0,ex.jsx)(eM,{scope:m,placedSide:Z,onArrowChange:j,arrowX:Q,arrowY:ee,shouldHideArrow:et,children:(0,ex.jsx)(eb.WV.div,{"data-side":Z,"data-align":J,...P,ref:W,style:{...P.style,animation:X?void 0:"none"}})})})});eV.displayName=ek;var eF="PopperArrow",ez={top:"bottom",right:"left",bottom:"top",left:"right"},e_=r.forwardRef(function(e,t){let{__scopePopper:n,...r}=e,i=eH(eF,n),o=ez[i.placedSide];return(0,ex.jsx)("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:(0,ex.jsx)(eE,{...r,ref:t,style:{...r.style,display:"block"}})})});function eB(e){return null!==e}e_.displayName=eF;var eI=e=>({name:"transformOrigin",options:e,fn(t){var n,r,i,o,l;let{placement:u,rects:a,middlewareData:s}=t,c=(null===(n=s.arrow)||void 0===n?void 0:n.centerOffset)!==0,f=c?0:e.arrowWidth,d=c?0:e.arrowHeight,[p,m]=e$(u),v={start:"0%",center:"50%",end:"100%"}[m],h=(null!==(o=null===(r=s.arrow)||void 0===r?void 0:r.x)&&void 0!==o?o:0)+f/2,g=(null!==(l=null===(i=s.arrow)||void 0===i?void 0:i.y)&&void 0!==l?l:0)+d/2,y="",w="";return"bottom"===p?(y=c?v:"".concat(h,"px"),w="".concat(-d,"px")):"top"===p?(y=c?v:"".concat(h,"px"),w="".concat(a.floating.height+d,"px")):"right"===p?(y="".concat(-d,"px"),w=c?v:"".concat(g,"px")):"left"===p&&(y="".concat(a.floating.width+d,"px"),w=c?v:"".concat(g,"px")),{data:{x:y,y:w}}}});function e$(e){let[t,n="center"]=e.split("-");return[t,n]}var eU=eW,eY=ej,eX=eV,eq=e_},6935:function(e,t,n){n.d(t,{h:function(){return a}});var r=n(2265),i=n(4887),o=n(5171),l=n(1336),u=n(7437),a=r.forwardRef((e,t)=>{var n,a;let{container:s,...c}=e,[f,d]=r.useState(!1);(0,l.b)(()=>d(!0),[]);let p=s||f&&(null===(a=globalThis)||void 0===a?void 0:null===(n=a.document)||void 0===n?void 0:n.body);return p?i.createPortal((0,u.jsx)(o.WV.div,{...c,ref:t}),p):null});a.displayName="Portal"},1383:function(e,t,n){n.d(t,{z:function(){return u}});var r=n(2265),i=n(4887),o=n(1584),l=n(1336),u=e=>{var t,n;let u,s;let{present:c,children:f}=e,d=function(e){var t,n;let[o,u]=r.useState(),s=r.useRef({}),c=r.useRef(e),f=r.useRef("none"),[d,p]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=a(s.current);f.current="mounted"===d?e:"none"},[d]),(0,l.b)(()=>{let t=s.current,n=c.current;if(n!==e){let r=f.current,i=a(t);e?p("MOUNT"):"none"===i||(null==t?void 0:t.display)==="none"?p("UNMOUNT"):n&&r!==i?p("ANIMATION_OUT"):p("UNMOUNT"),c.current=e}},[e,p]),(0,l.b)(()=>{if(o){let e=e=>{let t=a(s.current).includes(e.animationName);e.target===o&&t&&i.flushSync(()=>p("ANIMATION_END"))},t=e=>{e.target===o&&(f.current=a(s.current))};return o.addEventListener("animationstart",t),o.addEventListener("animationcancel",e),o.addEventListener("animationend",e),()=>{o.removeEventListener("animationstart",t),o.removeEventListener("animationcancel",e),o.removeEventListener("animationend",e)}}p("ANIMATION_END")},[o,p]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=>{e&&(s.current=getComputedStyle(e)),u(e)},[])}}(c),p="function"==typeof f?f({present:d.isPresent}):r.Children.only(f),m=(0,o.e)(d.ref,(u=null===(t=Object.getOwnPropertyDescriptor(p.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in u&&u.isReactWarning?p.ref:(u=null===(n=Object.getOwnPropertyDescriptor(p,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in u&&u.isReactWarning?p.props.ref:p.props.ref||p.ref);return"function"==typeof f||d.isPresent?r.cloneElement(p,{ref:m}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}u.displayName="Presence"},5171:function(e,t,n){n.d(t,{WV:function(){return u},jH:function(){return a}});var r=n(2265),i=n(4887),o=n(1538),l=n(7437),u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...i}=e,u=r?o.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,l.jsx)(u,{...i,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function a(e,t){e&&i.flushSync(()=>e.dispatchEvent(t))}},8484:function(e,t,n){n.d(t,{f:function(){return s}});var r=n(2265),i=n(5171),o=n(7437),l="horizontal",u=["horizontal","vertical"],a=r.forwardRef((e,t)=>{let{decorative:n,orientation:r=l,...a}=e,s=u.includes(r)?r:l;return(0,o.jsx)(i.WV.div,{"data-orientation":s,...n?{role:"none"}:{"aria-orientation":"vertical"===s?s:void 0,role:"separator"},...a,ref:t})});a.displayName="Separator";var s=a},1538:function(e,t,n){n.d(t,{A4:function(){return a},g7:function(){return l}});var r=n(2265),i=n(1584),o=n(7437),l=r.forwardRef((e,t)=>{let{children:n,...i}=e,l=r.Children.toArray(n),a=l.find(s);if(a){let e=a.props.children,n=l.map(t=>t!==a?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,o.jsx)(u,{...i,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,o.jsx)(u,{...i,ref:t,children:n})});l.displayName="Slot";var u=r.forwardRef((e,t)=>{let{children:n,...o}=e;if(r.isValidElement(n)){let e,l;let u=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.props.ref:n.props.ref||n.ref;return r.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...e)=>{o(...e),i(...e)}:i&&(n[r]=i):"style"===r?n[r]={...i,...o}:"className"===r&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}(o,n.props),ref:t?(0,i.F)(t,u):u})}return r.Children.count(n)>1?r.Children.only(null):null});u.displayName="SlotClone";var a=({children:e})=>(0,o.jsx)(o.Fragment,{children:e});function s(e){return r.isValidElement(e)&&e.type===a}},3440:function(e,t,n){n.d(t,{W:function(){return i}});var r=n(2265);function i(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},1715:function(e,t,n){n.d(t,{T:function(){return o}});var r=n(2265),i=n(3440);function o({prop:e,defaultProp:t,onChange:n=()=>{}}){let[o,l]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[o]=n,l=r.useRef(o),u=(0,i.W)(t);return r.useEffect(()=>{l.current!==o&&(u(o),l.current=o)},[o,l,u]),n}({defaultProp:t,onChange:n}),u=void 0!==e,a=u?e:o,s=(0,i.W)(n);return[a,r.useCallback(t=>{if(u){let n="function"==typeof t?t(e):t;n!==e&&s(n)}else l(t)},[u,e,l,s])]}},1336:function(e,t,n){n.d(t,{b:function(){return i}});var r=n(2265),i=globalThis?.document?r.useLayoutEffect:()=>{}},2218:function(e,t,n){n.d(t,{j:function(){return o}});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,i=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(i&&(i+=" "),i+=r);else for(n in t)t[n]&&(i&&(i+=" "),i+=n)}return i}(e))&&(r&&(r+=" "),r+=t);return r},o=(e,t)=>n=>{var o;if((null==t?void 0:t.variants)==null)return i(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:l,defaultVariants:u}=t,a=Object.keys(l).map(e=>{let t=null==n?void 0:n[e],i=null==u?void 0:u[e];if(null===t)return null;let o=r(t)||r(i);return l[e][o]}),s=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return i(e,a,null==t?void 0:null===(o=t.compoundVariants)||void 0===o?void 0:o.reduce((e,t)=>{let{class:n,className:r,...i}=t;return Object.entries(i).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...u,...s}[t]):({...u,...s})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}}}]);