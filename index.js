"use strict";function _asyncIterator(e){var t;if("undefined"!=typeof Symbol){if(Symbol.asyncIterator&&null!=(t=e[Symbol.asyncIterator]))return t.call(e);if(Symbol.iterator&&null!=(t=e[Symbol.iterator]))return t.call(e)}throw new TypeError("Object is not async iterable")}function _AwaitValue(e){this.wrapped=e}function _AsyncGenerator(i){var o,s;function c(e,t){try{var r=i[e](t),n=r.value,a=n instanceof _AwaitValue;Promise.resolve(a?n.wrapped:n).then(function(e){a?c("next",e):u(r.done?"return":"normal",e)},function(e){c("throw",e)})}catch(e){u("throw",e)}}function u(e,t){switch(e){case"return":o.resolve({value:t,done:!0});break;case"throw":o.reject(t);break;default:o.resolve({value:t,done:!1})}(o=o.next)?c(o.key,o.arg):s=null}this._invoke=function(n,a){return new Promise(function(e,t){var r={key:n,arg:a,resolve:e,reject:t,next:null};s?s=s.next=r:(o=s=r,c(n,a))})},"function"!=typeof i.return&&(this.return=void 0)}function _wrapAsyncGenerator(e){return function(){return new _AsyncGenerator(e.apply(this,arguments))}}function _awaitAsyncGenerator(e){return new _AwaitValue(e)}function asyncGeneratorStep(e,t,r,n,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,a)}function _asyncToGenerator(s){return function(){var e=this,o=arguments;return new Promise(function(t,r){var n=s.apply(e,o);function a(e){asyncGeneratorStep(n,t,r,a,i,"next",e)}function i(e){asyncGeneratorStep(n,t,r,a,i,"throw",e)}a(void 0)})}}if(Object.defineProperty(exports,"__esModule",{value:!0}),"function"==typeof Symbol&&Symbol.asyncIterator&&(_AsyncGenerator.prototype[Symbol.asyncIterator]=function(){return this}),_AsyncGenerator.prototype.next=function(e){return this._invoke("next",e)},_AsyncGenerator.prototype.throw=function(e){return this._invoke("throw",e)},_AsyncGenerator.prototype.return=function(e){return this._invoke("return",e)},require("core-js/shim"),require("regenerator-runtime/runtime"),require("core-js/fn/regexp/escape"),global._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");global._babelPolyfill=!0;var DEFINE_PROPERTY="defineProperty";function define(e,t,r){e[t]||Object[DEFINE_PROPERTY](e,t,{writable:!0,configurable:!0,value:r})}define(String.prototype,"padLeft","".padStart),define(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(e){[][e]&&define(Array,e,Function.call.bind([][e]))});var defaultOptions={speed:[100,500],cursor:"|"},defaults={sectionClass:"ttp-section"};function getSpeed(e){if(Array.isArray(e)&&2===e.length){var t=e[0],r=e[1];if(null!==t&&null!==r){var n=Number(t),a=Number(r);if(!isNaN(n)&&!isNaN(a))return Math.random()*(a-n)+n}}var i=Number(e);return isNaN(i)?0:i}function lettersIterator(e){return _lettersIterator.apply(this,arguments)}function _lettersIterator(){return(_lettersIterator=_wrapAsyncGenerator(regeneratorRuntime.mark(function e(t){var r,n,a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=t.text,n=t.speed,a=r.split("");case 2:if(0<a.length)return e.next=5,_awaitAsyncGenerator(asyncLetter({letter:a.splice(0,1)[0],speed:n}));e.next=10;break;case 5:return i=e.sent,e.next=8,i;case 8:e.next=2;break;case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}function asyncLetter(e){var t=e.letter,r=getSpeed(e.speed);return new Promise(function(e){setTimeout(function(){e(t)},r)})}function actionIterator(e){return _actionIterator.apply(this,arguments)}function _actionIterator(){return(_actionIterator=_wrapAsyncGenerator(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=t.iterations,n=t.speed;case 1:if(0<r)return e.next=4,_awaitAsyncGenerator(asyncAction(n));e.next=8;break;case 4:return e.next=6,r--;case 6:e.next=1;break;case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function asyncAction(e){var t=getSpeed(e);return new Promise(function(e){setTimeout(function(){e()},t)})}function styleInject(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var css=".fake-cursor {\r\n    font-weight: 400;\r\n    animation: CURSOR-ANIMATION 0.9s infinite;\r\n}\r\n\r\n@keyframes CURSOR-ANIMATION {\r\n    0% { opacity: 1; }\r\n    50% { opacity: 0; }\r\n    100% { opacity: 1; }\r\n}\r\n";function textTyping(h){var t,r,n,a,e,i,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},d=Object.assign({},defaultOptions,o),y=[],v=document.createElement("span");return v.classList.add("fake-cursor"),v.innerHTML=d.cursor,h.appendChild(v),{typeText:(i=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n,a,i,o,s,c,u,p,l,f=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=1<f.length&&void 0!==f[1]?f[1]:d.speed,!t){e.next=38;break}n=newSection({elem:h,cursor:v}),y.push(n),a=lettersIterator({text:t,speed:r}),o=!(i=!0),e.prev=7,c=_asyncIterator(a);case 9:return e.next=11,c.next();case 11:return u=e.sent,i=u.done,e.next=15,u.value;case 15:if(p=e.sent,i){e.next=22;break}l=p,n.innerHTML=n.innerHTML+l;case 19:i=!0,e.next=9;break;case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(7),o=!0,s=e.t0;case 28:if(e.prev=28,e.prev=29,i||null==c.return){e.next=33;break}return e.next=33,c.return();case 33:if(e.prev=33,o)throw s;e.next=36;break;case 36:return e.finish(33);case 37:return e.finish(28);case 38:return e.abrupt("return",this);case 39:case"end":return e.stop()}},e,this,[[7,24,28,38],[29,,33,37]])})),function(e){return i.apply(this,arguments)}),lineBreak:(e=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=y[y.length-1],r=document.createElement("br"),y.push(r),h.insertBefore(r,t.nextSibling),e.abrupt("return",this);case 5:case"end":return e.stop()}},e,this)})),function(){return e.apply(this,arguments)}),injectHTML:(a=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n,a=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=1<a.length&&void 0!==a[1]?a[1]:d.speed,n=y[y.length-1],y.push(t),e.next=5,asyncAction(r);case 5:return h.insertBefore(t,n.nextSibling),e.abrupt("return",this);case 7:case"end":return e.stop()}},e,this)})),function(e){return a.apply(this,arguments)}),delete:(n=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n,a,i,o,s,c,u,p,l,f=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=1<f.length&&void 0!==f[1]?f[1]:d.speed,n=y[0],a=actionIterator({iterations:t,speed:r}),this.moveCursor("start"),o=!(i=!0),e.prev=6,c=_asyncIterator(a);case 8:return e.next=10,c.next();case 10:return u=e.sent,i=u.done,e.next=14,u.value;case 14:if(e.sent,i){e.next=22;break}if(0===n.innerHTML.length){for((p=y[0]).parentNode.removeChild(p),y.shift();!y[0].classList.contains(defaults.sectionClass);)(l=y[0]).parentNode.removeChild(l),y.shift();n=y[0]}n.innerHTML=n.innerHTML.split("").slice(1).join("");case 19:i=!0,e.next=8;break;case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(6),o=!0,s=e.t0;case 28:if(e.prev=28,e.prev=29,i||null==c.return){e.next=33;break}return e.next=33,c.return();case 33:if(e.prev=33,o)throw s;e.next=36;break;case 36:return e.finish(33);case 37:return e.finish(28);case 38:return e.abrupt("return",this);case 39:case"end":return e.stop()}},e,this,[[6,24,28,38],[29,,33,37]])})),function(e){return n.apply(this,arguments)}),backspace:(r=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n,a,i,o,s,c,u,p,l,f,h=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=1<h.length&&void 0!==h[1]?h[1]:d.speed,n=y[y.length-1],a=actionIterator({iterations:t,speed:r}),this.moveCursor("end"),o=!(i=!0),e.prev=6,c=_asyncIterator(a);case 8:return e.next=10,c.next();case 10:return u=e.sent,i=u.done,e.next=14,u.value;case 14:if(e.sent,i){e.next=23;break}if(0===n.innerHTML.length){for((p=y[y.length-1]).parentNode.removeChild(p),y.pop();!y[y.length-1].classList.contains(defaults.sectionClass);)(l=y[y.length-1]).parentNode.removeChild(l),y.pop();n=y[y.length-1]}f=n.innerHTML.split(""),n.innerHTML=f.slice(0,f.length-1).join("");case 20:i=!0,e.next=8;break;case 23:e.next=29;break;case 25:e.prev=25,e.t0=e.catch(6),o=!0,s=e.t0;case 29:if(e.prev=29,e.prev=30,i||null==c.return){e.next=34;break}return e.next=34,c.return();case 34:if(e.prev=34,o)throw s;e.next=37;break;case 37:return e.finish(34);case 38:return e.finish(29);case 39:return e.abrupt("return",this);case 40:case"end":return e.stop()}},e,this,[[6,25,29,39],[30,,34,38]])})),function(e){return r.apply(this,arguments)}),moveCursor:(t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"start"===t?h.insertBefore(v,y[0]):h.appendChild(v),e.abrupt("return",this);case 2:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})}}function newSection(e){var t=e.elem,r=e.cursor,n=document.createElement("span");return n.classList.add(defaults.sectionClass),t.insertBefore(n,r),n}styleInject(css),exports.textTyping=textTyping;
