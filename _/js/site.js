!function(){"use strict";var s=/^sect(\d)$/,n=document.querySelector(".nav-container"),i=document.querySelector(".nav-toggle");i.addEventListener("click",function(e){if(i.classList.contains("is-active"))return u(e);var t=document.documentElement;t.classList.add("is-clipped--nav"),i.classList.add("is-active"),n.classList.add("is-active"),t.addEventListener("click",u),v(e)}),n.addEventListener("click",v);var c,r,o,l=n.querySelector("[data-panel=menu]");function e(){var e,t,n=window.location.hash;if(n&&(n.indexOf("%")&&(n=decodeURIComponent(n)),!(e=l.querySelector('.nav-link[href="'+n+'"]')))){n=document.getElementById(n.slice(1));if(n)for(var i=n,a=document.querySelector("article.doc");(i=i.parentNode)&&i!==a;){var c=i.id;if(!c&&(c=i.className.match(s))&&(c=(i.firstElementChild||{}).id),c&&(e=l.querySelector('.nav-link[href="#'+c+'"]')))break}}if(e)t=e.parentNode;else{if(!o)return;e=(t=o).querySelector(".nav-link")}t!==r&&(f(l,".nav-item.is-active").forEach(function(e){e.classList.remove("is-active","is-current-path","is-current-page")}),t.classList.add("is-current-page"),d(r=t),m(l,e))}function d(e){for(var t,n=e.parentNode;!(t=n.classList).contains("nav-menu");)"LI"===n.tagName&&t.contains("nav-item")&&t.add("is-active","is-current-path"),n=n.parentNode;e.classList.add("is-active")}function a(){this.classList.toggle("is-active")}function u(e){var t=document.documentElement;t.classList.remove("is-clipped--nav"),i.classList.remove("is-active"),n.classList.remove("is-active"),t.removeEventListener("click",u),v(e)}function v(e){e.stopPropagation()}function m(e,t){var n=e.getBoundingClientRect(),i=n.height,a=window.getComputedStyle(c);"sticky"===a.position&&(i-=n.top-parseFloat(a.top)),e.scrollTop=Math.max(0,.5*(t.getBoundingClientRect().height-i)+t.offsetTop)}function f(e,t){return[].slice.call(e.querySelectorAll(t))}l&&(c=n.querySelector(".nav"),r=l.querySelector(".is-current-page"),(o=r)?(d(r),m(l,r.querySelector(".nav-link"))):l.scrollTop=0,f(l,".nav-item-toggle").forEach(function(e){var t=e.parentElement;e.addEventListener("click",a.bind(t));e=function(e,t){e=e.nextElementSibling;return e?(!t||e[e.matches?"matches":"msMatchesSelector"](t))&&e:void 0}(e,".nav-text");e&&(e.style.cursor="pointer",e.addEventListener("click",a.bind(t)))}),c.querySelector(".context").addEventListener("click",function(){var e=c.querySelector(".is-active[data-panel]"),t="menu"===e.dataset.panel?"explore":"menu";e.classList.toggle("is-active"),c.querySelector("[data-panel="+t+"]").classList.toggle("is-active")}),l.addEventListener("mousedown",function(e){1<e.detail&&e.preventDefault()}),l.querySelector('.nav-link[href^="#"]')&&(window.location.hash&&e(),window.addEventListener("hashchange",e)))}();
!function(){"use strict";var e=document.querySelector("aside.toc.sidebar");if(e){if(document.querySelector("body.-toc"))return e.parentNode.removeChild(e);var t=parseInt(e.dataset.levels||2);if(!(t<0)){for(var d,o,n,c,a=document.querySelector("article.doc"),i=[],r=0;r<=t;r++)i.push(r?".sect"+r+">h"+(r+1)+"[id]":"h1[id].sect0");if(o=i.join(","),n=a,!(d=[].slice.call((n||document).querySelectorAll(o))).length)return e.parentNode.removeChild(e);var s={},l=d.reduce(function(e,t){var o=document.createElement("a");o.textContent=t.textContent,s[o.href="#"+t.id]=o;var n=document.createElement("li");return n.dataset.level=parseInt(t.nodeName.slice(1))-1,n.appendChild(o),e.appendChild(n),e},document.createElement("ul")),u=e.querySelector(".toc-menu");u||((u=document.createElement("div")).className="toc-menu");var m=document.createElement("h3");m.textContent=e.dataset.title||"Contents",u.appendChild(m),u.appendChild(l);e=!document.getElementById("toc")&&a.querySelector("h1.page ~ :not(.is-before-toc)");e&&((m=document.createElement("aside")).className="toc embedded",m.appendChild(u.cloneNode(!0)),e.parentNode.insertBefore(m,e)),window.addEventListener("load",function(){f(),window.addEventListener("scroll",f)})}}function f(){var t,e=window.pageYOffset,o=1.15*p(document.documentElement,"fontSize"),n=a.offsetTop;if(e&&window.innerHeight+e+2>=document.documentElement.scrollHeight){c=Array.isArray(c)?c:Array(c||0);var i=[],r=d.length-1;return d.forEach(function(e,t){var o="#"+e.id;t===r||e.getBoundingClientRect().top+p(e,"paddingTop")>n?(i.push(o),c.indexOf(o)<0&&s[o].classList.add("is-active")):~c.indexOf(o)&&s[c.shift()].classList.remove("is-active")}),l.scrollTop=l.scrollHeight-l.offsetHeight,void(c=1<i.length?i:i[0])}Array.isArray(c)&&(c.forEach(function(e){s[e].classList.remove("is-active")}),c=void 0),d.some(function(e){return e.getBoundingClientRect().top+p(e,"paddingTop")-o>n||void(t="#"+e.id)}),t?t!==c&&(c&&s[c].classList.remove("is-active"),(e=s[t]).classList.add("is-active"),l.scrollHeight>l.offsetHeight&&(l.scrollTop=Math.max(0,e.offsetTop+e.offsetHeight-l.offsetHeight)),c=t):c&&(s[c].classList.remove("is-active"),c=void 0)}function p(e,t){return parseFloat(window.getComputedStyle(e)[t])}}();
!function(){"use strict";var o=document.querySelector("article.doc"),t=document.querySelector(".toolbar");function i(e){return e&&(~e.indexOf("%")?decodeURIComponent(e):e).slice(1)}function c(e){e&&(window.location.hash="#"+this.id,e.preventDefault()),window.scrollTo(0,function e(t,n){return o.contains(t)?e(t.offsetParent,t.offsetTop+n):n}(this,0)-t.getBoundingClientRect().bottom)}window.addEventListener("load",function e(t){var n,o;(n=i(window.location.hash))&&(o=document.getElementById(n))&&(c.bind(o)(),setTimeout(c.bind(o),0)),window.removeEventListener("load",e)}),Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).forEach(function(e){var t,n;(t=i(e.hash))&&(n=document.getElementById(t))&&e.addEventListener("click",c.bind(n))})}();
!function(){"use strict";var t,e=document.querySelector(".page-versions .version-menu-toggle");e&&(t=document.querySelector(".page-versions"),e.addEventListener("click",function(e){t.classList.toggle("is-active"),e.stopPropagation()}),document.documentElement.addEventListener("click",function(){t.classList.remove("is-active")}))}();
document.addEventListener("DOMContentLoaded",function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);0!==t.length&&t.forEach(function(e){e.addEventListener("click",function(t){t.stopPropagation(),e.classList.toggle("is-active"),document.getElementById(e.dataset.target).classList.toggle("is-active"),document.documentElement.classList.toggle("is-clipped--navbar")})})});
!function(){"use strict";var l=window.location.hash;function o(t,a){return Array.prototype.slice.call((a||document).querySelectorAll(t))}o(".tabset").forEach(function(c){var n,r,t=c.querySelector(".tabs");t&&(o("li",t).forEach(function(t,a){var e,i,s=(t.querySelector("a[id]")||t).id;s&&(i=s,e=o(".tab-pane",c).find(function(t){return t.getAttribute("aria-labelledby")===i}),a||(r={tab:t,pane:e}),!n&&l==="#"+s&&(n=!0)?(t.classList.add("is-active"),e&&e.classList.add("is-active")):a||(t.classList.remove("is-active"),e&&e.classList.remove("is-active")),t.addEventListener("click",function(t){var a=this.tab,e=this.pane;o(".tabs li, .tab-pane",this.tabset).forEach(function(t){t===a||t===e?t.classList.add("is-active"):t.classList.remove("is-active")}),t.preventDefault()}.bind({tabset:c,tab:t,pane:e})))}),!n&&r&&(r.tab.classList.add("is-active"),r.pane&&r.pane.classList.add("is-active"))),c.classList.remove("is-loading")})}();
document.addEventListener("DOMContentLoaded",function(){for(var i=function(e){e=e||window.location.href;var n={},r=document.createElement("a");r.href=e;for(var o=r.search.substring(1).split("&"),t=0;t<o.length;t++){var a=o[t].split("=");n[a[0]]=decodeURIComponent(a[1])}return n}(),s=Object.keys(i),e=0;e<s.length;e++)!function e(n,r,o){var t;if(3===n.nodeType&&(t=n.data,n.data=d(t,r,o)),1===n.nodeType&&"SCRIPT"!==n.nodeName)for(var a=0;a<n.childNodes.length;a++)e(n.childNodes[a],r,o)}(document.body,s[e],i[s[e]]);var n=document.querySelectorAll(".query-params-link");n&&n.forEach(r);n=document.querySelectorAll(".params-link");n&&n.forEach(r);n=document.querySelectorAll(".nav-link");function r(e){var n,r=window.location.search,o=e.classList.contains("query-params-link")||e.classList.contains("nav-link");if(e.href&&(n=e.href,!new RegExp(/\?.+=.*/g).test(n))&&r){for(var t=e.href,a=0;a<s.length;a++)t=d(t,s[a],i[s[a]]);e.href=o?t+r:t}else if(e.classList.contains("imageblock")){for(var e=e.querySelector("a.image"),c=e.href,l=0;l<s.length;l++)c=d(c,s[l],i[s[l]]);e.href=o?c+r:c}}function d(e,n,r){n="(%25"+n+"%25|%25"+n.toLowerCase()+"%25|(?<!-)%"+n+"%(?!-))",n=new RegExp(n,"gi");return e.replace(n,r)}n&&n.forEach(r)});