(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),d=t.n(c),s=new URL(t(777),t.b),l=i()(o()),u=d()(s);l.push([e.id,`* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n@font-face {\n    font-family: "Carter_One variant0";\n    src: url(${u}) format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\nbody {\n    background-color: white;\n}\n\n.logo {\n    width: 300px;\n}\n\nh1 {\n    color: rgb(0, 0, 0);\n    font-size: 4rem;\n    color: aliceblue;\n    font-family: "Carter_One variant0";\n}\n\n#content {\n    margin: 0 auto;\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    max-width: 800px;\n}\n\n.nav-bar {\n    background-color: black;\n    display: flex;\n    gap: 10px;\n    justify-content: center;\n    align-items: center;\n    align-self: stretch;\n    padding: 10px;\n}\n\n.nav-bar button {\n    padding: 10px;\n    background-color: black;\n    color: white;\n    font-weight: bold;\n    cursor: pointer;\n    border: white solid 1px;\n    border-radius: 5%;\n    transition: 0.2s;\n}\n\n.nav-bar button:hover {\n    scale: 1.2;\n    font-weight: bolder;\n}\n\n.header {\n    background-color: #FF6F61;\n    color: white;\n    padding: 20px;\n    text-align: center;\n    width: 100%;\n}\n.container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px;\n}\n.welcome {\n    font-size: 24px;\n    margin-bottom: 20px;\n    background-color: #FF6F61;\n    color: white;\n    padding: 20px;\n}\n.about {\n    font-size: 18px;\n    line-height: 1.5;\n    margin-bottom: 30px;\n    padding: 20px;\n    background-color: #FF6F61;\n    color: white;\n}\n\n.menu-item {\n    border: 1px solid #ddd;\n    background-color: #fff;\n    padding: 20px;\n    margin-bottom: 20px;\n}\n.menu-item h3 {\n    font-size: 24px;\n}\n.menu-item p {\n    font-size: 18px;\n    line-height: 1.5;\n}`,""]);const p=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},777:(e,n,t)=>{e.exports=t.p+"077c4bbc891d504d9751.ttf"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),d=t.n(c),s=t(216),l=t.n(s),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"530b51e053ef02d05d67.png",g=t.p+"1ac6dae57030ae1f8dbb.jpg";!function(){const e=document.getElementById("content"),n=document.createElement("img"),t=document.createElement("h1"),r=document.createElement("div"),o=document.createElement("button"),a=document.createElement("button"),i=document.createElement("button");r.appendChild(o),r.appendChild(a),r.appendChild(i),o.textContent="Home",a.textContent="Menu",i.textContent="Contact",r.classList.add("nav-bar"),n.src=h,n.classList.add("logo"),t.textContent="Ratatouille",e.appendChild(n),e.appendChild(t),e.appendChild(r);const c=document.querySelector("body");c.style.backgroundImage=`url(${g})`,c.style.backgroundSize="cover",c.style.backgroundPosition="center",c.style.backgroundRepeat="no-repeat"}(),function(){const e=document.getElementById("content"),n=document.createElement("div"),t=document.createElement("h1"),r=document.createElement("p");n.classList.add("header"),t.textContent="Ratatouille Restaurant - Menu",r.textContent="Explore our delightful menu offerings",n.appendChild(t),n.appendChild(r);const o=document.createElement("div"),a=document.createElement("div"),i=document.createElement("h3"),c=document.createElement("p");i.textContent="Appetizers",c.textContent="Start your meal with our tantalizing appetizers, including bruschetta, stuffed mushrooms, and crispy calamari. Perfect for sharing or savoring on your own.",a.appendChild(i),a.appendChild(c),a.classList.add("menu-item");const d=document.createElement("div"),s=document.createElement("h3"),l=document.createElement("p");s.textContent="Entrees",l.textContent="Indulge in our savory entrees, featuring a variety of dishes such as coq au vin, seafood paella, and steak au poivre. Each dish is prepared to perfection.",d.appendChild(s),d.appendChild(l),d.classList.add("menu-item");const u=document.createElement("div"),p=document.createElement("h3"),m=document.createElement("p");p.textContent="Desserts",m.textContent="Complete your dining experience with our heavenly desserts. From rich chocolate fondant to classic crème brûlée, our desserts will satisfy your sweet cravings.",u.appendChild(p),u.appendChild(m),u.classList.add("menu-item"),o.appendChild(a),o.appendChild(d),o.appendChild(u),e.appendChild(n),e.appendChild(o)}()})()})();