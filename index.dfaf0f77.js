!function(){function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=Array(e);n<e;n++)a[n]=t[n];return a}function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);if("Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,n)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n=document.querySelector(".game-field").tBodies[0],a=e(n.children),r=e(n.querySelectorAll(".field-cell")),o=document.querySelector(".game-score"),s=document.querySelector(".game-best"),c=[],i=!1,u=0,d=localStorage.getItem("best")||0,l=null,f=null,m=1;function h(){return a.map(function(t){return e(t.children)})}function v(){return r.filter(function(t){return"0"===t.dataset.num})}function g(){var t,e=(t=v())[Math.floor(Math.random()*t.length)],n=e.dataset.id;e.dataset.num=Math.random()>=.9?4:2,c[n].textContent=e.dataset.num,c[n].classList.add("tile--".concat(e.dataset.num)),c[n].classList.add("anim-show"),setTimeout(function(){return c[n].classList.remove("anim-show")},500)}function p(t){var e=!1;do{e=!0;for(var n,a=0;a<t.length&&a!==t.length-1;a++)"0"!==t[a].dataset.num&&"0"===t[a+1].dataset.num&&(t[a+1].dataset.num=t[a].dataset.num,t[a].dataset.num=0,n=[t[a].dataset.id,t[a+1].dataset.id],t[a+1].dataset.id=n[0],t[a].dataset.id=n[1],i=!0,e=!1)}while(!e)}function y(t){for(var e=0;e<t.length;e++)!function(e){var n=t[e];p(n);for(var a=2;a>=0&&"break"!==function(t){if(t===n.length-1)return"break";if(n[t].dataset.num===n[t+1].dataset.num&&"0"!==n[t].dataset.num){var e=n[t],a=n[t+1],r=c[e.dataset.id],o=c[a.dataset.id],s=2*a.dataset.num;r.classList.remove("tile--".concat(e.dataset.num)),r.textContent="",e.dataset.num=0,o.classList.remove("tile--".concat(a.dataset.num)),a.dataset.num=s,o.textContent=s,o.classList.add("tile--".concat(s)),o.classList.add("anim-merge"),setTimeout(function(){return o.classList.remove("anim-merge")},500),i=!0,u+=s,2048===s&&document.querySelector(".message-win").classList.remove("hidden"),p(n)}}(a);a--);}(e);r.forEach(function(t){c[t.dataset.id].style.top=t.offsetTop+"px",c[t.dataset.id].style.left=t.offsetLeft+"px"})}function L(){y(function(){for(var t=[],e=0;e<4;e++){for(var n=[],r=0;r<a.length;r++)n.push(a[a.length-r-1].children[e]);t.push(n)}return t}()),i&&(g(),i=!1)}function b(){y(function(){for(var t=[],e=0;e<4;e++){for(var n=[],r=0;r<a.length;r++)n.push(a[r].children[e]);t.push(n)}return t}()),i&&(g(),i=!1)}function S(){y(h()),i&&(g(),i=!1)}function x(){y(h().map(function(t){return t.reverse()})),i&&(g(),i=!1)}function w(){u>d&&(localStorage.setItem("best",u),d=u),o.textContent=u,s.textContent=d,!function(){if(v().length>0)return!0;for(var t=0;t<a.length;t++)for(var e=0;e<a.length;e++){var n=a[t].children[e].dataset.num;if(e!==a.length-1&&n===a[t].children[e+1].dataset.num||t!==a.length-1&&n===a[t+1].children[e].dataset.num)return!0}return!1}()&&document.querySelector(".message-lose").classList.remove("hidden")}s.textContent=d,function(){for(var t=0;t<r.length;t++)c.push(function(t){var e=document.createElement("div");return e.classList.add("tile"),e.style.top=t.offsetTop+"px",e.style.left=t.offsetLeft+"px",n.append(e),e}(r[t]));for(var e=0;e<r.length;e++)r[e].dataset.id=e,r[e].dataset.num=0}(),document.querySelector(".button").addEventListener("click",function(t){t.target.textContent="Restart",t.target.classList.remove("start"),t.target.classList.add("restart"),document.querySelector(".message-start").classList.add("hidden"),document.querySelector(".message-lose").classList.add("hidden"),document.querySelector(".message-win").classList.add("hidden"),r.forEach(function(t){c[t.dataset.id].textContent="",c[t.dataset.id].classList.remove("tile--".concat(t.dataset.num)),t.dataset.num=0}),u=0,document.querySelector(".game-score").textContent=0,g(),g()}),document.addEventListener("keyup",function(t){switch(t.key){case"ArrowUp":L();break;case"ArrowDown":b();break;case"ArrowRight":S();break;case"ArrowLeft":x()}w()}),n.addEventListener("touchstart",function(t){var e=t.touches[0];l=e.clientX,f=e.clientY},!1),n.addEventListener("touchmove",function(t){if(l&&f){var e=t.touches[0].clientX,n=t.touches[0].clientY,a=e-l,r=n-f;Math.abs(a)>Math.abs(r)?a>0?S():x():r>0?b():L(),l=null,f=null,w()}},!1),document.addEventListener("touchmove",function(t){0===document.documentElement.scrollTop&&m-t.touches[0].clientY<0&&t.cancelable&&(t.preDefault(),t.stopPropagation()),m=t.touches[0].clientY},{passive:!1})}();
//# sourceMappingURL=index.dfaf0f77.js.map
