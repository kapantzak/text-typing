"use strict";function _asyncIterator(e){var t;if("undefined"!=typeof Symbol){if(Symbol.asyncIterator&&null!=(t=e[Symbol.asyncIterator]))return t.call(e);if(Symbol.iterator&&null!=(t=e[Symbol.iterator]))return t.call(e)}throw new TypeError("Object is not async iterable")}function _AwaitValue(e){this.wrapped=e}function _AsyncGenerator(s){var i,o;function c(e,t){try{var r=s[e](t),n=r.value,a=n instanceof _AwaitValue;Promise.resolve(a?n.wrapped:n).then(function(e){a?c("next",e):u(r.done?"return":"normal",e)},function(e){c("throw",e)})}catch(e){u("throw",e)}}function u(e,t){switch(e){case"return":i.resolve({value:t,done:!0});break;case"throw":i.reject(t);break;default:i.resolve({value:t,done:!1})}(i=i.next)?c(i.key,i.arg):o=null}this._invoke=function(n,a){return new Promise(function(e,t){var r={key:n,arg:a,resolve:e,reject:t,next:null};o?o=o.next=r:(i=o=r,c(n,a))})},"function"!=typeof s.return&&(this.return=void 0)}function _wrapAsyncGenerator(e){return function(){return new _AsyncGenerator(e.apply(this,arguments))}}function _awaitAsyncGenerator(e){return new _AwaitValue(e)}function asyncGeneratorStep(e,t,r,n,a,s,i){try{var o=e[s](i),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,a)}function _asyncToGenerator(o){return function(){var e=this,i=arguments;return new Promise(function(t,r){var n=o.apply(e,i);function a(e){asyncGeneratorStep(n,t,r,a,s,"next",e)}function s(e){asyncGeneratorStep(n,t,r,a,s,"throw",e)}a(void 0)})}}if(Object.defineProperty(exports,"__esModule",{value:!0}),"function"==typeof Symbol&&Symbol.asyncIterator&&(_AsyncGenerator.prototype[Symbol.asyncIterator]=function(){return this}),_AsyncGenerator.prototype.next=function(e){return this._invoke("next",e)},_AsyncGenerator.prototype.throw=function(e){return this._invoke("throw",e)},_AsyncGenerator.prototype.return=function(e){return this._invoke("return",e)},require("core-js/shim"),require("regenerator-runtime/runtime"),require("core-js/fn/regexp/escape"),global._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");global._babelPolyfill=!0;var DEFINE_PROPERTY="defineProperty";function define(e,t,r){e[t]||Object[DEFINE_PROPERTY](e,t,{writable:!0,configurable:!0,value:r})}define(String.prototype,"padLeft","".padStart),define(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(e){[][e]&&define(Array,e,Function.call.bind([][e]))});var defaultOptions={speed:[100,500],cursor:"|"},defaults={sectionClass:"ttp-section"};function getSpeed(e){if(Array.isArray(e)&&2===e.length){var t=e[0],r=e[1];if(null!==t&&null!==r){var n=Number(t),a=Number(r);if(!isNaN(n)&&!isNaN(a))return Math.random()*(a-n)+n}}var s=Number(e);return isNaN(s)?0:s}function lettersIterator(e){return _lettersIterator.apply(this,arguments)}function _lettersIterator(){return(_lettersIterator=_wrapAsyncGenerator(regeneratorRuntime.mark(function e(t){var r,n,a,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=t.text,n=t.speed,a=r.split("");case 2:if(0<a.length)return e.next=5,_awaitAsyncGenerator(asyncLetter({letter:a.splice(0,1)[0],speed:n}));e.next=10;break;case 5:return s=e.sent,e.next=8,s;case 8:e.next=2;break;case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}function asyncLetter(e){var t=e.letter,r=getSpeed(e.speed);return new Promise(function(e){setTimeout(function(){e(t)},r)})}function actionIterator(e){return _actionIterator.apply(this,arguments)}function _actionIterator(){return(_actionIterator=_wrapAsyncGenerator(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=t.iterations,n=t.speed;case 1:if(0<r)return e.next=4,_awaitAsyncGenerator(asyncAction(n));e.next=8;break;case 4:return e.next=6,r--;case 6:e.next=1;break;case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function asyncAction(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,r=getSpeed(e);return new Promise(function(e){setTimeout(function(){e(t)},r)})}function styleInject(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var css=".fake-cursor {\n    font-weight: 400;\n    animation: CURSOR-ANIMATION 0.9s infinite;\n}\n\n@keyframes CURSOR-ANIMATION {\n    0% { opacity: 1; }\n    50% { opacity: 0; }\n    100% { opacity: 1; }\n}\n";function textTyping(d){var t,r,n,a,s,e,i,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},y=Object.assign({},defaultOptions,o),v=[],m=document.createElement("span");return m.classList.add("fake-cursor"),m.innerHTML=y.cursor,d.appendChild(m),{typeText:(i=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n,a,s,i,o,c,u,p,l,f,h=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=1<h.length&&void 0!==h[1]?h[1]:null,n=2<h.length&&void 0!==h[2]?h[2]:y.speed,!t){e.next=39;break}a=newSection({elem:d,cursor:m,className:r}),v.push(a),s=lettersIterator({text:t,speed:n}),o=!(i=!0),e.prev=8,u=_asyncIterator(s);case 10:return e.next=12,u.next();case 12:return p=e.sent,i=p.done,e.next=16,p.value;case 16:if(l=e.sent,i){e.next=23;break}f=l,a.innerHTML=a.innerHTML+f;case 20:i=!0,e.next=10;break;case 23:e.next=29;break;case 25:e.prev=25,e.t0=e.catch(8),o=!0,c=e.t0;case 29:if(e.prev=29,e.prev=30,i||null==u.return){e.next=34;break}return e.next=34,u.return();case 34:if(e.prev=34,o)throw c;e.next=37;break;case 37:return e.finish(34);case 38:return e.finish(29);case 39:return e.abrupt("return",this);case 40:case"end":return e.stop()}},e,this,[[8,25,29,39],[30,,34,38]])})),function(e){return i.apply(this,arguments)}),lineBreak:(e=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.createElement("br"),v.push(t),d.insertBefore(t,m),e.abrupt("return",this);case 4:case"end":return e.stop()}},e,this)})),function(){return e.apply(this,arguments)}),injectHTML:(s=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=1<n.length&&void 0!==n[1]?n[1]:y.speed,v.push(t),e.next=4,asyncAction(r);case 4:return d.insertBefore(t,m),e.abrupt("return",this);case 6:case"end":return e.stop()}},e,this)})),function(e){return s.apply(this,arguments)}),delete:(a=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n,a,s,i,o,c,u,p,l=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=1<l.length&&void 0!==l[1]?l[1]:y.speed,n=v[0],a=actionIterator({iterations:t,speed:r}),this.moveCursor("start"),i=!(s=!0),e.prev=6,c=_asyncIterator(a);case 8:return e.next=10,c.next();case 10:return u=e.sent,s=u.done,e.next=14,u.value;case 14:if(e.sent,s){e.next=30;break}if(n.innerHTML=n.innerHTML.split("").slice(1).join(""),0!==n.innerHTML.length){e.next=27;break}if(n.parentNode.removeChild(n),v.shift(),!(0<v.length)){e.next=26;break}for(;!v[0].classList.contains(defaults.sectionClass);)(p=v[0]).parentNode.removeChild(p),v.shift();n=v[0],e.next=27;break;case 26:return e.abrupt("break",30);case 27:s=!0,e.next=8;break;case 30:e.next=36;break;case 32:e.prev=32,e.t0=e.catch(6),i=!0,o=e.t0;case 36:if(e.prev=36,e.prev=37,s||null==c.return){e.next=41;break}return e.next=41,c.return();case 41:if(e.prev=41,i)throw o;e.next=44;break;case 44:return e.finish(41);case 45:return e.finish(36);case 46:return e.abrupt("return",this);case 47:case"end":return e.stop()}},e,this,[[6,32,36,46],[37,,41,45]])})),function(e){return a.apply(this,arguments)}),backspace:(n=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n,a,s,i,o,c,u,p,l,f=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=1<f.length&&void 0!==f[1]?f[1]:y.speed,n=v[v.length-1],a=actionIterator({iterations:t,speed:r}),this.moveCursor("end"),i=!(s=!0),e.prev=6,c=_asyncIterator(a);case 8:return e.next=10,c.next();case 10:return u=e.sent,s=u.done,e.next=14,u.value;case 14:if(e.sent,s){e.next=31;break}if(p=n.innerHTML.split(""),n.innerHTML=p.slice(0,p.length-1).join(""),0!==n.innerHTML.length){e.next=28;break}if(n.parentNode.removeChild(n),v.pop(),!(0<v.length)){e.next=27;break}for(;!v[v.length-1].classList.contains(defaults.sectionClass);)(l=v[v.length-1]).parentNode.removeChild(l),v.pop();n=v[v.length-1],e.next=28;break;case 27:return e.abrupt("break",31);case 28:s=!0,e.next=8;break;case 31:e.next=37;break;case 33:e.prev=33,e.t0=e.catch(6),i=!0,o=e.t0;case 37:if(e.prev=37,e.prev=38,s||null==c.return){e.next=42;break}return e.next=42,c.return();case 42:if(e.prev=42,i)throw o;e.next=45;break;case 45:return e.finish(42);case 46:return e.finish(37);case 47:return e.abrupt("return",this);case 48:case"end":return e.stop()}},e,this,[[6,33,37,47],[38,,42,46]])})),function(e){return n.apply(this,arguments)}),moveCursor:(r=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"start"===t?d.insertBefore(m,v[0]):d.appendChild(m),e.abrupt("return",this);case 2:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)}),sleep:(t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,asyncAction(t);case 2:return e.abrupt("return",this);case 3:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})}}function newSection(e){var t=e.elem,r=e.cursor,n=e.className,a=document.createElement("span");return a.classList.add(defaults.sectionClass),n&&n.split(" ").map(function(e){return e.trim()}).forEach(function(e){a.classList.add(e)}),t.insertBefore(a,r),a}styleInject(css),exports.textTyping=textTyping;
