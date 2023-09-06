(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(81),r=t.n(o),a=t(645),c=t.n(a),i=t(667),d=t.n(i),l=new URL(t(777),t.b),s=c()(r()),p=d()(l);s.push([e.id,`* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n@font-face {\n    font-family: "Carter_One variant0";\n    src: url(${p}) format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\nbody {\n    background-color: white;\n}\n\n.logo {\n    width: 300px;\n}\n\nh1 {\n    color: rgb(0, 0, 0);\n    font-size: 4rem;\n    color: aliceblue;\n    font-family: "Carter_One variant0";\n}\n\n#content {\n    margin: 0 auto;\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    max-width: 800px;\n}\n\n.nav-bar {\n    background-color: black;\n    display: flex;\n    gap: 10px;\n    justify-content: center;\n    align-items: center;\n    align-self: stretch;\n    padding: 10px;\n}\n\n.nav-bar button {\n    padding: 10px;\n    background-color: black;\n    color: white;\n    font-weight: bold;\n    cursor: pointer;\n    border: white solid 1px;\n    border-radius: 5%;\n    transition: 0.2s;\n}\n\n.nav-bar button:hover {\n    scale: 1.2;\n    font-weight: bolder;\n}\n\n.header {\n    background-color: #FF6F61;\n    color: white;\n    padding: 20px;\n    text-align: center;\n    width: 100%;\n}\n.container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px;\n}\n.welcome {\n    font-size: 24px;\n    margin-bottom: 20px;\n    background-color: #FF6F61;\n    color: white;\n    padding: 20px;\n}\n.about {\n    font-size: 18px;\n    line-height: 1.5;\n    margin-bottom: 30px;\n    padding: 20px;\n    background-color: #FF6F61;\n    color: white;\n}\n\n.menu-item {\n    border: 1px solid #ddd;\n    background-color: #fff;\n    padding: 20px;\n    margin-bottom: 20px;\n}\n.menu-item h3 {\n    font-size: 24px;\n}\n.menu-item p {\n    font-size: 18px;\n    line-height: 1.5;\n}`,""]);const u=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&c[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],l=o.base?d[0]+o.base:d[0],s=a[l]||0,p="".concat(l," ").concat(s);a[l]=s+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=r(m,o);o.byIndex=i,n.splice(i,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var d=o(e,r),l=0;l<a.length;l++){var s=t(a[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},777:(e,n,t)=>{e.exports=t.p+"077c4bbc891d504d9751.ttf"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),c=t.n(a),i=t(565),d=t.n(i),l=t(216),s=t.n(l),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"530b51e053ef02d05d67.png",g=t.p+"1ac6dae57030ae1f8dbb.jpg";!function(){const e=document.getElementById("content"),n=document.createElement("img"),t=document.createElement("h1"),o=document.createElement("div"),r=document.createElement("button"),a=document.createElement("button"),c=document.createElement("button");o.appendChild(r),o.appendChild(a),o.appendChild(c),r.textContent="Home",a.textContent="Menu",c.textContent="Contact",o.classList.add("nav-bar"),n.src=h,n.classList.add("logo"),t.textContent="Ratatouille",e.appendChild(n),e.appendChild(t),e.appendChild(o);const i=document.querySelector("body");i.style.backgroundImage=`url(${g})`,i.style.backgroundSize="cover",i.style.backgroundPosition="center",i.style.backgroundRepeat="no-repeat"}(),function(){const e=document.getElementById("content"),n=document.createElement("div"),t=document.createElement("h1"),o=document.createElement("p");n.classList.add("header"),t.textContent="Ratatouille Restaurant - Contact",o.textContent="Get in touch with us",n.appendChild(t),n.appendChild(o);const r=document.createElement("div"),a=document.createElement("div"),c=document.createElement("h2"),i=document.createElement("p"),d=document.createElement("p");c.textContent="Address",i.textContent="123 Gourmet Street",d.textContent="Paris, France",a.appendChild(c),a.appendChild(i),a.appendChild(d),a.classList.add("contact-info");const l=document.createElement("div"),s=document.createElement("h2"),p=document.createElement("p"),u=document.createElement("p");s.textContent="Phone",p.textContent="Reservations: +1 (123) 456-7890",u.textContent="General Inquiries: +1 (234) 567-8901",l.appendChild(s),l.appendChild(p),l.appendChild(u),l.classList.add("contact-info");const m=document.createElement("div"),f=document.createElement("h2"),h=document.createElement("p"),g=document.createElement("p");f.textContent="Email",h.textContent="info@ratatouillerestaurant.com",g.textContent="feedback@ratatouillerestaurant.com",m.appendChild(f),m.appendChild(h),m.appendChild(g),m.classList.add("contact-info");const b=document.createElement("div"),v=document.createElement("h2"),x=document.createElement("p"),C=document.createElement("p");v.textContent="Hours of Operation",x.textContent="Monday to Saturday: 11:30 AM - 10:00 PM",C.textContent="Sunday: Closed",b.appendChild(v),b.appendChild(x),b.appendChild(C),b.classList.add("contact-info"),r.appendChild(a),r.appendChild(l),r.appendChild(m),r.appendChild(b),e.appendChild(n),e.appendChild(r)}()})()})();