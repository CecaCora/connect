(()=>{"use strict";(()=>{console.log("Nav component successfully activated!");let e=document.querySelectorAll(".acc-header");document.querySelectorAll(".acc-panel").forEach((e=>{e.style.maxHeight=`${e.scrollHeight}px`})),e.forEach((e=>{e.addEventListener("click",(e=>{let l=e.target.nextElementSibling;l.style.maxHeight?l.style.maxHeight=null:l.style.maxHeight=`${l.scrollHeight}px`}))}))})(),console.log("Connect is now running!")})();