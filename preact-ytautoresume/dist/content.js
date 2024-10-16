/*! For license information please see content.js.LICENSE.txt */
(()=>{var e={591:(e,t,r)=>{var n=r(8).default;function o(){"use strict";e.exports=o=function(){return r},e.exports.__esModule=!0,e.exports.default=e.exports;var t,r={},i=Object.prototype,a=i.hasOwnProperty,c=Object.defineProperty||function(e,t,r){e[t]=r.value},u="function"==typeof Symbol?Symbol:{},s=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function h(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{h({},"")}catch(t){h=function(e,t,r){return e[t]=r}}function p(e,t,r,n){var o=t&&t.prototype instanceof x?t:x,i=Object.create(o.prototype),a=new N(n||[]);return c(i,"_invoke",{value:I(e,r,a)}),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=p;var y="suspendedStart",v="suspendedYield",m="executing",w="completed",g={};function x(){}function b(){}function k(){}var S={};h(S,s,(function(){return this}));var T=Object.getPrototypeOf,E=T&&T(T(O([])));E&&E!==i&&a.call(E,s)&&(S=E);var L=k.prototype=x.prototype=Object.create(S);function P(e){["next","throw","return"].forEach((function(t){h(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function r(o,i,c,u){var s=d(e[o],e,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&a.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,c,u)}),(function(e){r("throw",e,c,u)})):t.resolve(f).then((function(e){l.value=e,c(l)}),(function(e){return r("throw",e,c,u)}))}u(s.arg)}var o;c(this,"_invoke",{value:function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}})}function I(e,r,n){var o=y;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===w){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=j(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=w,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var s=d(e,r,n);if("normal"===s.type){if(o=n.done?w:v,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=w,n.method="throw",n.arg=s.arg)}}}function j(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=d(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function V(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function O(e){if(e||""===e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(a.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(n(e)+" is not iterable")}return b.prototype=k,c(L,"constructor",{value:k,configurable:!0}),c(k,"constructor",{value:b,configurable:!0}),b.displayName=h(k,f,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,h(e,f,"GeneratorFunction")),e.prototype=Object.create(L),e},r.awrap=function(e){return{__await:e}},P(_.prototype),h(_.prototype,l,(function(){return this})),r.AsyncIterator=_,r.async=function(e,t,n,o,i){void 0===i&&(i=Promise);var a=new _(p(e,t,n,o),i);return r.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},P(L),h(L,f,"Generator"),h(L,s,(function(){return this})),h(L,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=O,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(V),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),V(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;V(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},8:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},757:(e,t,r)=>{var n=r(591)();e.exports=n;try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function t(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e){var t=function(e){if("object"!=n(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==n(t)?t:t+""}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,o(n.key),n)}}var a=r(757),c=r.n(a),u="ytd-video-owner-renderer ytd-channel-name a",s=browser.runtime.getURL("icons/playericon.svg"),l=browser.runtime.getURL("icons/playericon_inactive.svg"),f=!1,h=!1,p={},d=!1;new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),window.addEventListener("load",this.initialize.bind(this))}var r,n,o,a,y,v,m,w,g,x,b,k,S,T,E,L,P;return r=e,n=[{key:"initialize",value:(P=t(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.initStorage();case 2:return e.next=4,this.getUserSettings();case 4:if((p=e.sent).pauseResume){e.next=16;break}if(h=!1,!(f=this.checkWatchable(window.location.href))){e.next=12;break}return e.next=12,this.injectPlayerButton();case 12:this.setupEventListeners(),f&&!h&&this.runMainVideoProcess(),e.next=17;break;case 16:case 17:case"end":return e.stop()}}),e,this)}))),function(){return P.apply(this,arguments)})},{key:"logUserSettings",value:function(){console.log("CHECK PAUSED SETTING: "+p.pauseResume),console.log("CHECK MIN WATCH TIME SETTING: "+p.minWatchTime),console.log("CHECK MIN VID LENGTH SETTING: "+p.minVideoLength)}},{key:"setupEventListeners",value:function(){this.setupNavigationListener(),window.addEventListener("yt-title-change",this.handleTitleChange.bind(this))}},{key:"setupNavigationListener",value:function(){var e=this;document.addEventListener("yt-navigate-finish",t(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!f){t.next=8;break}return f=!1,t.next=5,e.resetButton();case 5:e.runMainVideoProcess(),t.next=12;break;case 8:return t.next=10,e.resetButton();case 10:e.runMainVideoProcess(),h=!0;case 12:case"end":return t.stop()}}),t)}))))}},{key:"handleTitleChange",value:function(e){var t=e.detail.title;this.runMainVideoProcess(t)}},{key:"dispatchTitleChangeEvent",value:function(e){var t=new CustomEvent("yt-title-change",{detail:{title:e}});window.dispatchEvent(t)}},{key:"injectPlayerButton",value:(L=t(c().mark((function e(){var t,r,n,o,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.checkBlacklist(window.location.href);case 2:r=e.sent,n=r?l:s,o=r?"Video will not auto-resume":"Video will auto-resume",i=this.createPlayerButton(n,o),null===(t=document.querySelector("div.ytp-right-controls"))||void 0===t||t.prepend(i);case 7:case"end":return e.stop()}}),e,this)}))),function(){return L.apply(this,arguments)})},{key:"createPlayerButton",value:function(e,t){var r=document.createElement("div");r.classList.add("ytp-button","YTAutoResume"),r.id="YTAutoResumePlayerSwitch",r.title=t,r.ariaLabel=t,r.style.verticalAlign="top",r.onclick=this.onPlayerButtonClick.bind(this);var n=document.createElement("img");return n.id="YTAutoResumeSwitchIcon",n.src=e,n.style.height="90%",n.style.display="block",n.style.margin="auto",r.appendChild(n),r}},{key:"onPlayerButtonClick",value:(E=t(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.grabTitle();case 2:t=document.querySelector("video"),r=t.duration-t.currentTime<p.markPlayedTime,d=document.querySelector("#YTAutoResumePlayerSwitch").checked,this.togglePlayerButtonState(d,r,t);case 6:case"end":return e.stop()}}),e,this)}))),function(){return E.apply(this,arguments)})},{key:"togglePlayerButtonState",value:(T=t(c().mark((function e(t,r,n){var o,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=document.querySelector("#YTAutoResumeSwitchIcon"),i=document.querySelector("#YTAutoResumePlayerSwitch"),o.src=t?l:s,i.title=t?"Video will not auto-resume":"Video will auto-resume",i.checked=!t,e.next=7,this.setTime({videolink:window.location.href,time:n.currentTime,duration:n.duration,title:document.querySelector("h1.title.style-scope.ytd-video-primary-info-renderer").textContent,channel:document.querySelector(u).textContent,complete:r,doNotResume:t});case 7:case 8:case"end":return e.stop()}}),e,this)}))),function(e,t,r){return T.apply(this,arguments)})},{key:"resetButton",value:(S=t(c().mark((function e(){var t,r,n,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=document.querySelector("#YTAutoResumePlayerSwitch"))){e.next=13;break}return e.next=4,this.checkBlacklist(window.location.href);case 4:r=e.sent,n=r?l:s,o=r?"Video will not auto-resume":"Video will auto-resume",t.title=o,t.ariaLabel=o,t.checked=!r,document.querySelector("#YTAutoResumeSwitchIcon").src=n,e.next=15;break;case 13:return e.next=15,this.injectPlayerButton();case 15:case"end":return e.stop()}}),e,this)}))),function(){return S.apply(this,arguments)})},{key:"getUserSettings",value:(k=t(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,browser.storage.local.get("settings");case 2:return t=e.sent,e.abrupt("return",t.settings);case 4:case"end":return e.stop()}}),e)}))),function(){return k.apply(this,arguments)})},{key:"initStorage",value:(b=t(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.initDB();case 2:return e.next=4,this.initSettings();case 4:case"end":return e.stop()}}),e,this)}))),function(){return b.apply(this,arguments)})},{key:"initDB",value:(x=t(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,browser.storage.local.get("videos");case 2:if(e.sent.videos){e.next=6;break}return e.next=6,browser.storage.local.set({videos:[]});case 6:case"end":return e.stop()}}),e)}))),function(){return x.apply(this,arguments)})},{key:"initSettings",value:(g=t(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,browser.storage.local.get("settings");case 2:if(e.sent.settings){e.next=6;break}return e.next=6,browser.storage.local.set({settings:{pauseResume:!1,minWatchTime:60,minVideoLength:480,markPlayedTime:60,deleteAfter:30}});case 6:case"end":return e.stop()}}),e)}))),function(){return g.apply(this,arguments)})},{key:"extractWatchID",value:function(e){var t=e.indexOf("v=")+2,r=e.indexOf("&",t);return-1===r?e.slice(t):e.slice(t,r)}},{key:"grabTitle",value:function(){return new Promise((function(e,t){var r=document.querySelector("h1.title.style-scope.ytd-video-primary-info-renderer");if(r)e(r.textContent);else var n=setInterval((function(){(r=document.querySelector("h1.title.style-scope.ytd-video-primary-info-renderer"))&&(clearInterval(n),e(r.textContent))}),2e3)}))}},{key:"checkWatchable",value:function(e){return e.includes("watch?")&&!e.includes("?t=")}},{key:"checkBlacklist",value:(w=t(c().mark((function e(t){var r,n=this;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,browser.storage.local.get("videos");case 2:return r=e.sent,e.abrupt("return",r.videos.some((function(e){return n.extractWatchID(e.videolink)===n.extractWatchID(t)&&e.doNotResume})));case 4:case"end":return e.stop()}}),e)}))),function(e){return w.apply(this,arguments)})},{key:"setTime",value:(m=t(c().mark((function e(t){var r,n,o=this;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,browser.storage.local.get("videos");case 2:return r=e.sent,(n=r.videos.filter((function(e){return o.extractWatchID(e.videolink)!==o.extractWatchID(t.videolink)}))).push(t),e.next=7,browser.storage.local.set({videos:n});case 7:case"end":return e.stop()}}),e)}))),function(e){return m.apply(this,arguments)})},{key:"runMainVideoProcess",value:(v=t(c().mark((function e(){var t,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:null,e.next=3,this.mainVideoProcess(t);case 3:h=!0;case 4:case"end":return e.stop()}}),e,this)}))),function(){return v.apply(this,arguments)})},{key:"mainVideoProcess",value:(y=t(c().mark((function e(){var r,n=this,o=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>0&&void 0!==o[0]?o[0]:null,e.abrupt("return",new Promise(function(){var e=t(c().mark((function e(t){var o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.checkWatchable(window.location.href)&&n.checkDuration()){e.next=4;break}return t(),e.abrupt("return");case 4:if(e.t0=r,e.t0){e.next=9;break}return e.next=8,n.grabTitle();case 8:e.t0=e.sent;case 9:return e.t0,f||h||t(),e.prev=11,e.next=15,n.checkStoredLinks(window.location.href);case 15:(o=e.sent).time>p.minWatchTime&&!o.complete&&!o.doNotResume&&(document.querySelector("video").currentTime=o.time),d=o.doNotResume,e.next=23;break;case 20:e.prev=20,e.t1=e.catch(11),d=!1;case 23:n.monitorVideoTime(t);case 24:case"end":return e.stop()}}),e,null,[[11,20]])})));return function(t){return e.apply(this,arguments)}}()));case 3:case"end":return e.stop()}}),e)}))),function(){return y.apply(this,arguments)})},{key:"checkDuration",value:function(){return document.querySelector("video").duration>=p.minVideoLength}},{key:"checkStoredLinks",value:(a=t(c().mark((function e(t){var r,n,o=this;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,browser.storage.local.get("videos");case 2:if(r=e.sent,!(n=r.videos.find((function(e){return o.extractWatchID(e.videolink)===o.extractWatchID(t)})))){e.next=14;break}if(!(this.daysSince(n.timestamp)>p.deleteAfter)){e.next=11;break}return e.next=8,this.deleteVideo(n);case 8:throw new Error("Video deleted due to age");case 11:return e.abrupt("return",n);case 12:e.next=15;break;case 14:throw new Error("Video not found");case 15:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)})},{key:"deleteVideo",value:(o=t(c().mark((function e(t){var r,n,o=this;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,browser.storage.local.get("videos");case 2:return r=e.sent,n=r.videos.filter((function(e){return o.extractWatchID(e.videolink)!==o.extractWatchID(t.videolink)})),e.next=6,browser.storage.local.set({videos:n});case 6:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)})},{key:"daysSince",value:function(e){var t=(new Date).getTime();return Math.round((t-e)/864e5)}},{key:"monitorVideoTime",value:function(e){var t=this,r=document.querySelector("video"),n=document.querySelector("h1.title.style-scope.ytd-video-primary-info-renderer").textContent;r.addEventListener("timeupdate",(function(){var e=document.querySelector("h1.title.style-scope.ytd-video-primary-info-renderer").textContent;if(e!==n&&(n=e,t.dispatchTitleChangeEvent(e)),!d){var o=r.duration-r.currentTime<p.markPlayedTime;t.setTime({videolink:window.location.href,time:r.currentTime,duration:r.duration,title:e,channel:document.querySelector(u).textContent,complete:o,doNotResume:!1})}}))}}],n&&i(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}())})()})();