!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);var r=document.getElementById("total"),o=document.getElementById("charging"),u=document.querySelector(".mileage"),c=document.querySelector(".drive");u.textContent=0,c.textContent=0,o.addEventListener("change",(function(e){var t=e.target.value;r.addEventListener("change",(function(e){var n=e.target.value;t&&n?(u=1*(u=n-t).toFixed(1),document.querySelector(".mileage").innerHTML=u):document.querySelector(".mileage").innerHTML=0,u<=41&&u>=0&&(c=41-u,document.querySelector(".drive").innerHTML=c,c<=5?document.querySelector(".drive").classList.add("red"):document.querySelector(".drive").classList.remove("red"))}))})),console.log("Everything's fine !")},function(e,t,n){}]);