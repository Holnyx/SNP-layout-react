(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{786:function(r,e,t){"use strict";var n=t(5652),o=t.n(n),a=t(8167),i=t.n(a)()(o());i.push([r.id,':root{--max-width: 1100px;--border-radius: 12px;--font-mono: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;--foreground-rgb: 0, 0, 0;--background-start-rgb: 214, 219, 220;--background-end-rgb: 255, 255, 255;--primary-glow: conic-gradient( from 180deg at 50% 50%, #16abff33 0deg, #0885ff33 55deg, #54d6ff33 120deg, #0071ff33 160deg, transparent 360deg );--secondary-glow: radial-gradient( rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) );--tile-start-rgb: 239, 245, 249;--tile-end-rgb: 228, 232, 233;--tile-border: conic-gradient( #00000080, #00000040, #00000030, #00000020, #00000010, #00000010, #00000080 );--callout-rgb: 238, 240, 241;--callout-border-rgb: 172, 175, 176;--card-rgb: 180, 185, 188;--card-border-rgb: 131, 134, 135}@media(prefers-color-scheme: dark){:root{--foreground-rgb: 255, 255, 255;--background-start-rgb: 0, 0, 0;--background-end-rgb: 0, 0, 0;--primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));--secondary-glow: linear-gradient( to bottom right, rgba(1, 65, 255, 0), rgba(1, 65, 255, 0), rgba(1, 65, 255, 0.3) );--tile-start-rgb: 2, 13, 46;--tile-end-rgb: 2, 5, 19;--tile-border: conic-gradient( #ffffff80, #ffffff40, #ffffff30, #ffffff20, #ffffff10, #ffffff10, #ffffff80 );--callout-rgb: 20, 20, 20;--callout-border-rgb: 108, 108, 108;--card-rgb: 100, 100, 100;--card-border-rgb: 200, 200, 200}}*{box-sizing:border-box;padding:0;margin:0}html,body{max-width:100vw;overflow-x:hidden}body{color:rgb(var(--foreground-rgb));background:linear-gradient(to bottom, transparent, rgb(var(--background-end-rgb))) rgb(var(--background-start-rgb))}a{color:inherit;text-decoration:none}',""]),e.Z=i},4954:function(r,e,t){Promise.resolve().then(t.t.bind(t,1721,23)),Promise.resolve().then(t.bind(t,3089))},8167:function(r){"use strict";r.exports=function(r){var e=[];return e.toString=function(){return this.map(function(e){var t="",n=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),n&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=r(e),n&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t}).join("")},e.i=function(r,t,n,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var f=0;f<r.length;f++){var u=[].concat(r[f]);n&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]&&(u[1]="@media ".concat(u[2]," {").concat(u[1],"}")),u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},5652:function(r){"use strict";r.exports=function(r){return r[1]}},1721:function(){},3089:function(r,e,t){"use strict";t.r(e);var n=t(7022),o=t.n(n),a=t(3394),i=t.n(a),c=t(3514),s=t.n(c),f=t(4970),u=t.n(f),d=t(7793),l=t.n(d),g=t(7528),p=t.n(g),b=t(786),m={};m.styleTagTransform=p(),m.setAttributes=u(),m.insert=s().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=l(),o()(b.Z,m),e.default=b.Z&&b.Z.locals?b.Z.locals:void 0},7022:function(r){"use strict";var e=[];function t(r){for(var t=-1,n=0;n<e.length;n++)if(e[n].identifier===r){t=n;break}return t}function n(r,n){for(var o={},a=[],i=0;i<r.length;i++){var c=r[i],s=n.base?c[0]+n.base:c[0],f=o[s]||0,u="".concat(s," ").concat(f);o[s]=f+1;var d=t(u),l={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(l);else{var g=function(r,e){var t=e.domAPI(e);return t.update(r),function(e){e?(e.css!==r.css||e.media!==r.media||e.sourceMap!==r.sourceMap||e.supports!==r.supports||e.layer!==r.layer)&&t.update(r=e):t.remove()}}(l,n);n.byIndex=i,e.splice(i,0,{identifier:u,updater:g,references:1})}a.push(u)}return a}r.exports=function(r,o){var a=n(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=n(r,o),f=0;f<a.length;f++){var u=t(a[f]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},3514:function(r){"use strict";var e={};r.exports=function(r,t){var n=function(r){if(void 0===e[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(r){t=null}e[r]=t}return e[r]}(r);if(!n)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},7793:function(r){"use strict";r.exports=function(r){var e=document.createElement("style");return r.setAttributes(e,r.attributes),r.insert(e,r.options),e}},4970:function(r,e,t){"use strict";r.exports=function(r){var e=t.nc;e&&r.setAttribute("nonce",e)}},3394:function(r){"use strict";r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=r.insertStyleElement(r);return{update:function(t){var n,o,a;n="",t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {")),(o=void 0!==t.layer)&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,o&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}"),(a=t.sourceMap)&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(n,e,r.options)},remove:function(){var r;null!==(r=e).parentNode&&r.parentNode.removeChild(r)}}}},7528:function(r){"use strict";r.exports=function(r,e){if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}}},function(r){r.O(0,[971,23,744],function(){return r(r.s=4954)}),_N_E=r.O()}]);