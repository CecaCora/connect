(()=>{"use strict";const e=(e,t)=>{const C=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=document.createElementNS("http://www.w3.org/2000/svg","path");return C.setAttribute("width","15"),C.setAttribute("height","15"),C.setAttribute("viewBox","0 0 15 15"),C.setAttribute("fill","none"),C.classList.add(e),o.setAttribute("fill-rule","evenodd"),o.setAttribute("clip-rule","evenodd"),o.setAttribute("d",t),o.setAttribute("fill","currentColor"),C.appendChild(o),C};var t,C=new Uint8Array(16);function o(){if(!t&&!(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(C)}const r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,n=function(e){return"string"==typeof e&&r.test(e)};for(var l=[],s=0;s<256;++s)l.push((s+256).toString(16).substr(1));const i=function(e,t,C){var r=(e=e||{}).random||(e.rng||o)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){C=C||0;for(var s=0;s<16;++s)t[C+s]=r[s];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,C=(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase();if(!n(C))throw TypeError("Stringified UUID is invalid");return C}(r)},c=e=>{const t=i(),C=[],o=()=>t;return{id:t,parentNodeId:e,childrenNodes:C,notes:[],dueDate:"",getNodeId:o,createChildNode:()=>{const e=c(o());C.push(e)}}},d=c;console.log("Connect is now running!"),(()=>{let t=document.querySelector(".focus > h4"),C=e("submenu-icon","M7.5 0C7.77614 0 8 0.223858 8 0.5V1.80687C10.6922 2.0935 12.8167 4.28012 13.0068 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H12.9888C12.7094 10.6244 10.6244 12.7094 8 12.9888V14.5C8 14.7761 7.77614 15 7.5 15C7.22386 15 7 14.7761 7 14.5V13.0068C4.28012 12.8167 2.0935 10.6922 1.80687 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H1.78886C1.98376 4.21166 4.21166 1.98376 7 1.78886V0.5C7 0.223858 7.22386 0 7.5 0ZM8 12.0322V9.5C8 9.22386 7.77614 9 7.5 9C7.22386 9 7 9.22386 7 9.5V12.054C4.80517 11.8689 3.04222 10.1668 2.76344 8H5.5C5.77614 8 6 7.77614 6 7.5C6 7.22386 5.77614 7 5.5 7H2.7417C2.93252 4.73662 4.73662 2.93252 7 2.7417V5.5C7 5.77614 7.22386 6 7.5 6C7.77614 6 8 5.77614 8 5.5V2.76344C10.1668 3.04222 11.8689 4.80517 12.054 7H9.5C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8H12.0322C11.7621 10.0991 10.0991 11.7621 8 12.0322Z");t.insertBefore(C,t.childNodes[0]);let o=document.querySelector(".schedule > h4"),r=e("submenu-icon","M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2ZM7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7ZM11 7.5C11 7.22386 11.2239 7 11.5 7C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8C11.2239 8 11 7.77614 11 7.5ZM11.5 9C11.2239 9 11 9.22386 11 9.5C11 9.77614 11.2239 10 11.5 10C11.7761 10 12 9.77614 12 9.5C12 9.22386 11.7761 9 11.5 9ZM9 9.5C9 9.22386 9.22386 9 9.5 9C9.77614 9 10 9.22386 10 9.5C10 9.77614 9.77614 10 9.5 10C9.22386 10 9 9.77614 9 9.5ZM7.5 9C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5C8 9.22386 7.77614 9 7.5 9ZM5 9.5C5 9.22386 5.22386 9 5.5 9C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10C5.22386 10 5 9.77614 5 9.5ZM3.5 9C3.22386 9 3 9.22386 3 9.5C3 9.77614 3.22386 10 3.5 10C3.77614 10 4 9.77614 4 9.5C4 9.22386 3.77614 9 3.5 9ZM3 11.5C3 11.2239 3.22386 11 3.5 11C3.77614 11 4 11.2239 4 11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 11.2239 5.77614 11 5.5 11ZM7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12C9.77614 12 10 11.7761 10 11.5C10 11.2239 9.77614 11 9.5 11Z");o.insertBefore(r,o.childNodes[0]);let n=document.querySelector(".labels > h4"),l=e("submenu-icon","M3 2.5C3 2.22386 3.22386 2 3.5 2H11.5C11.7761 2 12 2.22386 12 2.5V13.5C12 13.6818 11.9014 13.8492 11.7424 13.9373C11.5834 14.0254 11.3891 14.0203 11.235 13.924L7.5 11.5896L3.765 13.924C3.61087 14.0203 3.41659 14.0254 3.25762 13.9373C3.09864 13.8492 3 13.6818 3 13.5V2.5ZM4 3V12.5979L6.97 10.7416C7.29427 10.539 7.70573 10.539 8.03 10.7416L11 12.5979V3H4Z");n.insertBefore(l,n.childNodes[0]);let s=document.querySelector(".archive > h4"),i=e("submenu-icon","M3.30902 1C2.93025 1 2.58398 1.214 2.41459 1.55279L1.05279 4.27639C1.01807 4.34582 1 4.42238 1 4.5V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V4.5C14 4.42238 13.9819 4.34582 13.9472 4.27639L12.5854 1.55281C12.416 1.21403 12.0698 1.00003 11.691 1.00003L7.5 1.00001L3.30902 1ZM3.30902 2L7 2.00001V4H2.30902L3.30902 2ZM8 4V2.00002L11.691 2.00003L12.691 4H8ZM7.5 5H13V13H2V5H7.5ZM5.5 7C5.22386 7 5 7.22386 5 7.5C5 7.77614 5.22386 8 5.5 8H9.5C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7H5.5Z");s.insertBefore(i,s.childNodes[0]),document.querySelectorAll(".side-nav-link").forEach((t=>{let C=e("side-nav-link-icon","M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z");t.insertBefore(C,t.childNodes[0])}));let c=document.querySelectorAll(".acc-header");document.querySelectorAll(".acc-panel").forEach((e=>{e.style.maxHeight=`${e.scrollHeight}px`})),c.forEach((t=>{let C=e("acc-icon","M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z");t.appendChild(C),t.addEventListener("click",(e=>{let t=e.target.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=`${t.scrollHeight}px`;let C=e.target.lastElementChild;C.style.transform?C.style.transform=null:C.style.transform="rotate(-90deg)"}))})),console.log("Nav component successfully activated!")})();let u=d("root");console.log(u),u.createChildNode(u.ref),console.log(u.childrenNodes[0])})();