/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(t){if("Escape"===t.key){var e=document.querySelector(".popup_opened");r(e)}}var e=function(e){e.classList.add("popup_opened"),document.addEventListener("keydown",t)},r=function(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",t)};function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return e};var t,e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),c=new N(n||[]);return a(i,"_invoke",{value:O(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var d="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function b(){}function _(){}function w(){}var L={};f(L,u,(function(){return this}));var E=Object.getPrototypeOf,x=E&&E(E(T([])));x&&x!==r&&i.call(x,u)&&(L=x);var S=w.prototype=b.prototype=Object.create(L);function k(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function q(t,e){function r(o,a,c,u){var s=h(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function O(e,r,n){var o=d;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=j(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=h(e,r,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function j(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(n(e)+" is not iterable")}return _.prototype=w,a(S,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:_,configurable:!0}),_.displayName=f(w,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,l,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},k(q.prototype),f(q.prototype,s,(function(){return this})),e.AsyncIterator=q,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new q(p(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(S),f(S,l,"Generator"),f(S,u,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function i(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}document.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&r(t.target)}));var c={baseUrl:"https://nomoreparties.co/v1/wff-cohort-1",headers:{authorization:"cc68cdb0-46fc-43a8-80ad-b4fa34b78718","Content-Type":"application/json"}},u=function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))},s=function(){var t=a(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(c.baseUrl+"/cards",{headers:c.headers}).then((function(t){return u(t)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=a(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(c.baseUrl+"/users/me",{headers:c.headers}).then((function(t){return u(t)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=a(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.all([l(),s()]));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=a(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(c.baseUrl+"/users/me",{method:"PATCH",headers:c.headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(t){return u(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=a(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(c.baseUrl+"/cards",{method:"POST",headers:c.headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(t){return u(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=a(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(c.baseUrl+"/cards/likes/".concat(e),{method:"PUT",headers:c.headers}).then((function(t){return u(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=a(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(c.baseUrl+"/cards/likes/".concat(e),{method:"DELETE",headers:c.headers}).then((function(t){return u(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=a(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(c.baseUrl+"/cards/".concat(e),{method:"DELETE",headers:c.headers}).then((function(t){return u(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=a(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(c.baseUrl+"/users/me/avatar",{method:"PATCH",headers:c.headers,body:JSON.stringify({avatar:e})}).then((function(t){return u(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=document.querySelector("#card-template").content,b=function(t,e){var r=t.target.parentNode.querySelector(".element__like-count");t.target.classList.contains("cards__like_active")?y(e).then((function(e){t.target.classList.remove("cards__like_active"),r.textContent=e.likes.length})).catch((function(t){console.log(t)})):d(e).then((function(e){t.target.classList.add("cards__like_active"),r.textContent=e.likes.length})).catch((function(t){console.log(t)}))},_=function(t,e,r,n,o,i){var a=function(t,e,r,n,o){var i=g.querySelector(".cards__item").cloneNode(!0),a=i.querySelector(".cards__like"),c=i.querySelector(".cards__delete"),u=i.querySelector(".cards__image"),s=i.querySelector(".cards__description"),l=i.querySelector(".element__like-count");return i.dataset.cardId=t._id,i.dataset.ownerId=t.owner._id,s.textContent=t.name,u.src=t.link,u.alt=t.name,l.textContent=t.likes.length,t.likes.some((function(t){return t._id===e}))&&a.classList.add("element__like_active"),t.owner._id===e?c.addEventListener("click",(function(e){r(e,t._id)})):c.remove(),a.addEventListener("click",(function(e){n(e,t._id)})),u.addEventListener("click",(function(){o(u.src,u.alt,s.textContent)})),i}(t,e,o,n,i);r.prepend(a)},w=function(t,e,r,n){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(r),o.textContent="",o.classList.remove(n)},L=function(t,e,r){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.classList.remove(r),e.disabled=!1):(e.classList.add(r),e.disabled=!0)},E=function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector));t.querySelector(e.submitButtonSelector).classList.add(e.inactiveButtonClass),r.forEach((function(r){w(t,r,e.inputErrorClass,e.errorClass),r.setCustomValidity("")}))};function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function S(){S=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:O(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var p="suspendedStart",h="suspendedYield",d="executing",y="completed",v={};function m(){}function g(){}function b(){}var _={};s(_,a,(function(){return this}));var w=Object.getPrototypeOf,L=w&&w(w(T([])));L&&L!==r&&n.call(L,a)&&(_=L);var E=b.prototype=m.prototype=Object.create(_);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function q(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==x(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function O(e,r,n){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=j(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?y:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function j(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(x(e)+" is not iterable")}return g.prototype=b,o(E,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=s(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},k(q.prototype),s(q.prototype,c,(function(){return this})),e.AsyncIterator=q,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new q(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(E),s(E,u,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function k(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function q(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){k(i,n,o,a,c,"next",t)}function c(t){k(i,n,o,a,c,"throw",t)}a(void 0)}))}}var O,j=document.querySelector(".profile__edit-button"),C=document.querySelector(".profile__add-button"),P=document.querySelector("#profile-popup"),N=document.querySelector("#cards-popup"),T=document.querySelector(".profile__name"),G=document.querySelector(".profile__about"),A=P.querySelector(".popup__input_name_username"),I=P.querySelector(".popup__input_name_about"),F=document.querySelector(".cards"),U=document.querySelectorAll(".popup__close-button"),B=document.querySelector("#image-popup"),D=B.querySelector(".popup__description"),Y=B.querySelector(".popup__image"),J=document.forms.popup,M=document.forms.mesto,V=document.querySelector(".profile__avatar"),H=document.querySelector(".popup_type_confirm"),z=H.querySelector(".popup__submit-button"),K=document.forms["edit-avatar"],Q=document.querySelector(".profile__avatar-container"),R=document.querySelector(".popup_type_avatar"),W={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__disabled-button",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},X=function(t){T.textContent=t.name,G.textContent=t.about,V.style.backgroundImage="url(".concat(t.avatar,")")},Z=function(t,e){e.textContent=t?"Сохранение...":"Сохранить"},$=function(t,r){e(H),H.dataset.cardId=r},tt=function(){var t=q(S().mark((function t(e){return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),Z(!0,K.querySelector(".popup__submit-button")),m(K.link.value).then((function(t){X(t),r(R)})).catch((function(t){console.log(t)})).finally((function(){Z(!1,K.querySelector(".popup__submit-button"))}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),et=function(t,r,n){Y.src=t,Y.alt=r,D.textContent=n,e(B)},rt=function(){var t=q(S().mark((function t(e){return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),Z(!0,J.querySelector(".popup__submit-button")),p({name:J.userName.value,about:J.nameAbout.value}).then((function(t){X(t),r(P)})).catch((function(t){console.log(t)})).finally((function(){Z(!1,J.querySelector(".popup__submit-button"))}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),nt=function(){var t=q(S().mark((function t(e){return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:v(H.dataset.cardId).then((function(t){document.querySelector('[data-card-id="'.concat(H.dataset.cardId,'"]')).remove(),r(H)})).catch((function(t){console.log(t)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ot=function(){var t=q(S().mark((function t(e){var n,o;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),Z(!0,M.querySelector(".popup__submit-button")),n=M.elements.mestoName.value,o=M.elements.linkImage.value,h({name:n,link:o}).then((function(t){_(t,O,F,b,$,et),r(N)})).catch((function(t){console.log(t)})).finally((function(){Z(!1,M.querySelector(".popup__submit-button"))}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Q.addEventListener("click",(function(t){E(K,W),K.reset(),e(R)})),j.addEventListener("click",(function(){E(J,W),A.value=T.textContent,I.value=G.textContent,e(P)})),C.addEventListener("click",(function(){M.reset(),E(M,W),e(N)})),U.forEach((function(t){var e=t.closest(".popup");t.addEventListener("click",(function(){return r(e)}))})),P.addEventListener("submit",rt),N.addEventListener("submit",ot),K.addEventListener("submit",tt),document.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&r(t.target)})),z.addEventListener("click",nt),f().then((function(t){var e=t[0];O=e._id;var r=t[1];X(e),function(t,e){t.forEach((function(t){_(t,e,F,b,$,et)}))}(r,O)})).catch((function(t){console.log(t)})),function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){e.addEventListener("submit",(function(t){t.preventDefault()})),function(t,e,r,n,o,i){var a=Array.from(t.querySelectorAll(e)),c=t.querySelector(o);L(a,c,i),a.forEach((function(e){e.addEventListener("input",(function(){!function(t,e,r,n){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?w(t,e,r,n):function(t,e,r,n,o){var i=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n),i.textContent=r,i.classList.add(o)}(t,e,e.validationMessage,r,n)}(t,e,r,n),L(a,c,i)}))}))}(e,t.inputSelector,t.inputErrorClass,t.errorClass,t.submitButtonSelector,t.inactiveButtonClass)}))}(W)})();