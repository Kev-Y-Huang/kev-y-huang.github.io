(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RXBc:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),a=n("T58H"),i=n.n(a),u=n("Bl7J"),s=n("vrFN");e.default=function(){return o.a.createElement(u.a,null,o.a.createElement(s.a,{title:"Home Page"}),o.a.createElement("h1",null,o.a.createElement(i.a,{options:{strings:["Hi, my name is Kevin!"],autoStart:!0,loop:!0}})),o.a.createElement("div",{className:"description"},o.a.createElement("div",null,"I'm a ",o.a.createElement("b",null,"rising sophomore")," at ",o.a.createElement("b",null,"Harvard University")," planning to study ",o.a.createElement("b",null,"computer science")," and ",o.a.createElement("b",null,"math"),"."),o.a.createElement("br",null),o.a.createElement("div",null,"Outside of class, I'm technical director of ",o.a.createElement("a",{href:"http://hodp.org/"},"Harvard Open Data Project"),", a principal in ",o.a.createElement("a",{href:"https://www.harvardcap.org/"},"Harvard Undergraduate Capital Partners"),", and a developer for ",o.a.createElement("a",{href:"https://datamatch.me/"},"Datamatch"),". I'm passionate about all things tech, music, and cycling."),o.a.createElement("br",null),o.a.createElement("div",null,"Currently, I'm taking a ",o.a.createElement("b",null,"gap year")," and will be working at ",o.a.createElement("b",null,"Shuttefly")," as a ",o.a.createElement("b",null,"Software Developer Contractor"),"while continuing to work with Harvard clubs/organizations and coding personal projects.")))}},T58H:function(t,e,n){var r;n("/SS/"),n("pIFo"),n("f3/d"),n("bWfx"),n("eM6i"),n("KKXr"),n("XfO3"),n("HEwt"),n("a1Th"),n("h7Nl"),n("LK8F"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Oyvg"),n("2Spj"),n("hHhE"),n("rE2o"),n("ioFf"),n("HAE/"),"undefined"!=typeof self&&self,t.exports=(r=n("q1tI"),function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=99)}([function(t,e,n){var r=n(19),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},function(t,e,n){(function(e){for(var r=n(11),o="undefined"==typeof window?e:window,a=["moz","webkit"],i="AnimationFrame",u=o["request"+i],s=o["cancel"+i]||o["cancelRequest"+i],c=0;!u&&c<a.length;c++)u=o[a[c]+"Request"+i],s=o[a[c]+"Cancel"+i]||o[a[c]+"CancelRequest"+i];if(!u||!s){var l=0,p=0,f=[];u=function(t){if(0===f.length){var e=r(),n=Math.max(0,1e3/60-(e-l));l=n+e,setTimeout((function(){var t=f.slice(0);f.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(l)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(n))}return f.push({handle:++p,callback:t,cancelled:!1}),p},s=function(t){for(var e=0;e<f.length;e++)f[e].handle===t&&(f[e].cancelled=!0)}}t.exports=function(t){return u.call(o,t)},t.exports.cancel=function(){s.apply(o,arguments)},t.exports.polyfill=function(t){t||(t=o),t.requestAnimationFrame=u,t.cancelAnimationFrame=s}}).call(this,n(4))},function(t,e,n){var r=n(45),o=n(50);t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return O}));var r=n(1),o=n.n(r),a=function(t){return new RegExp(/<[a-z][\s\S]*>/i).test(t)},i=function(t){var e=document.createElement("div");return e.innerHTML=t,e.childNodes},u=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},s="TYPE_CHARACTER",c="REMOVE_CHARACTER",l="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",f="PAUSE_FOR",v="CALL_FUNCTION",d="ADD_HTML_TAG_ELEMENT",h="CHANGE_DELETE_SPEED",y="CHANGE_DELAY",b="CHANGE_CURSOR",m="PASTE_STRING",g="HTML_TAG";function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){x(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function E(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O=function(){function t(e,n){var _=this;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),x(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),x(this,"options",{strings:null,cursor:"|",delay:"natural",deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null}),x(this,"setupWrapperElement",(function(){_.state.elements.wrapper.className=_.options.wrapperClassName,_.state.elements.cursor.className=_.options.cursorClassName,_.state.elements.cursor.innerHTML=_.options.cursor,_.state.elements.container.innerHTML="",_.state.elements.container.appendChild(_.state.elements.wrapper),_.state.elements.container.appendChild(_.state.elements.cursor)})),x(this,"start",(function(){return _.state.eventLoopPaused=!1,_.runEventLoop(),_})),x(this,"pause",(function(){return _.state.eventLoopPaused=!0,_})),x(this,"stop",(function(){return _.state.eventLoop&&(Object(r.cancel)(_.state.eventLoop),_.state.eventLoop=null),_})),x(this,"pauseFor",(function(t){return _.addEventToQueue(f,{ms:t}),_})),x(this,"typeOutAllStrings",(function(){return"string"==typeof _.options.strings?(_.typeString(_.options.strings).pauseFor(1500),_):(_.options.strings.forEach((function(t){_.typeString(t).pauseFor(1500).deleteAll(_.options.deleteSpeed)})),_)})),x(this,"typeString",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(a(t))return _.typeOutHTMLString(t,e);if(t){var n=_.options||{},r=n.stringSplitter,o="function"==typeof r?r(t):t.split("");_.typeCharacters(o,e)}return _})),x(this,"pasteString",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return a(t)?_.typeOutHTMLString(t,e,!0):(t&&_.addEventToQueue(m,{character:t,node:e}),_)})),x(this,"typeOutHTMLString",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,r=i(t);if(r.length>0)for(var o=0;o<r.length;o++){var a=r[o],u=a.innerHTML;a&&3!==a.nodeType?(a.innerHTML="",_.addEventToQueue(d,{node:a,parentNode:e}),n?_.pasteString(u,a):_.typeString(u,a)):a.textContent&&(n?_.pasteString(a.textContent,e):_.typeString(a.textContent,e))}return _})),x(this,"deleteAll",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return _.addEventToQueue(l,{speed:t}),_})),x(this,"changeDeleteSpeed",(function(t){if(!t)throw new Error("Must provide new delete speed");return _.addEventToQueue(h,{speed:t}),_})),x(this,"changeDelay",(function(t){if(!t)throw new Error("Must provide new delay");return _.addEventToQueue(y,{delay:t}),_})),x(this,"changeCursor",(function(t){if(!t)throw new Error("Must provide new cursor");return _.addEventToQueue(b,{cursor:t}),_})),x(this,"deleteChars",(function(t){if(!t)throw new Error("Must provide amount of characters to delete");for(var e=0;e<t;e++)_.addEventToQueue(c);return _})),x(this,"callFunction",(function(t,e){if(!t||"function"!=typeof t)throw new Error("Callbak must be a function");return _.addEventToQueue(v,{cb:t,thisArg:e}),_})),x(this,"typeCharacters",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t||!Array.isArray(t))throw new Error("Characters must be an array");return t.forEach((function(t){_.addEventToQueue(s,{character:t,node:e})})),_})),x(this,"removeCharacters",(function(t){if(!t||!Array.isArray(t))throw new Error("Characters must be an array");return t.forEach((function(){_.addEventToQueue(c)})),_})),x(this,"addEventToQueue",(function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return _.addEventToStateProperty(t,e,n,"eventQueue")})),x(this,"addReverseCalledEvent",(function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=_.options.loop;return r?_.addEventToStateProperty(t,e,n,"reverseCalledEvents"):_})),x(this,"addEventToStateProperty",(function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,o={eventName:t,eventArgs:e||{}};return _.state[r]=n?[o].concat(E(_.state[r])):[].concat(E(_.state[r]),[o]),_})),x(this,"runEventLoop",(function(){_.state.lastFrameTime||(_.state.lastFrameTime=Date.now());var t=Date.now(),e=t-_.state.lastFrameTime;if(!_.state.eventQueue.length){if(!_.options.loop)return;_.state.eventQueue=E(_.state.calledEvents),_.state.calledEvents=[],_.options=w({},_.state.initialOptions)}if(_.state.eventLoop=o()(_.runEventLoop),!_.state.eventLoopPaused){if(_.state.pauseUntil){if(t<_.state.pauseUntil)return;_.state.pauseUntil=null}var n,r=E(_.state.eventQueue),a=r.shift();if(!(e<=(n=a.eventName===p||a.eventName===c?"natural"===_.options.deleteSpeed?u(40,80):_.options.deleteSpeed:"natural"===_.options.delay?u(120,160):_.options.delay))){var i=a.eventName,j=a.eventArgs;switch(_.logInDevMode({currentEvent:a,state:_.state,delay:n}),i){case m:case s:var x=j.character,O=j.node,T=document.createTextNode(x);O?O.appendChild(T):_.state.elements.wrapper.appendChild(T),_.state.visibleNodes=[].concat(E(_.state.visibleNodes),[{type:"TEXT_NODE",node:T}]);break;case c:r.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case f:var A=a.eventArgs.ms;_.state.pauseUntil=Date.now()+parseInt(A);break;case v:var S=a.eventArgs,P=S.cb,C=S.thisArg;P.call(C,{elements:_.state.elements});break;case d:var k=a.eventArgs,N=k.node,L=k.parentNode;L?L.appendChild(N):_.state.elements.wrapper.appendChild(N),_.state.visibleNodes=[].concat(E(_.state.visibleNodes),[{type:g,node:N,parentNode:L||_.state.elements.wrapper}]);break;case l:var D=_.state.visibleNodes,M=j.speed,R=[];M&&R.push({eventName:h,eventArgs:{speed:M,temp:!0}});for(var F=0,H=D.length;F<H;F++)R.push({eventName:p,eventArgs:{removingCharacterNode:!1}});M&&R.push({eventName:h,eventArgs:{speed:_.options.deleteSpeed,temp:!0}}),r.unshift.apply(r,R);break;case p:var I=a.eventArgs.removingCharacterNode;if(_.state.visibleNodes.length){var z=_.state.visibleNodes.pop(),Q=z.type,U=z.node;U.parentNode.removeChild(U),Q===g&&I&&r.unshift({eventName:p,eventArgs:{}})}break;case h:_.options.deleteSpeed=a.eventArgs.speed;break;case y:_.options.delay=a.eventArgs.delay;break;case b:_.options.cursor=a.eventArgs.cursor,_.state.elements.cursor.innerHTML=a.eventArgs.cursor}_.options.loop&&(a.eventName===p||a.eventArgs&&a.eventArgs.temp||(_.state.calledEvents=[].concat(E(_.state.calledEvents),[a]))),_.state.eventQueue=r,_.state.lastFrameTime=t}}})),!e)throw new Error("No container element was provided");if("string"==typeof e){var j=document.querySelector(e);if(!j)throw new Error("Could not find container element");this.state.elements.container=j}else this.state.elements.container=e;n&&(this.options=w({},this.options,{},n)),this.state.initialOptions=w({},this.options),this.init()}var e,n;return e=t,(n=[{key:"init",value:function(){this.setupWrapperElement(),this.addEventToQueue(b,{cursor:this.options.cursor},!0),this.addEventToQueue(l,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(function(t){var e=document.createElement("style");e.appendChild(document.createTextNode(t)),document.head.appendChild(e)}(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}"),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(t){this.options.devMode&&console.log(t)}}])&&j(e.prototype,n),t}()},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(35),o=n(36),a=n(37),i=n(38),u=n(39);function s(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=u,t.exports=s},function(t,e,n){var r=n(17);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},function(t,e,n){var r=n(14),o=n(46),a=n(47),i=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):a(t)}},function(t,e,n){var r=n(2)(Object,"create");t.exports=r},function(t,e,n){var r=n(59);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){(function(e){(function(){var n,r,o,a,i,u;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:null!=e&&e.hrtime?(t.exports=function(){return(n()-i)/1e6},r=e.hrtime,a=(n=function(){var t;return 1e9*(t=r())[0]+t[1]})(),u=1e9*e.uptime(),i=a-u):Date.now?(t.exports=function(){return Date.now()-o},o=Date.now()):(t.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,n(12))},function(t,e){var n,r,o=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(t){if(n===setTimeout)return setTimeout(t,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(t){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(t){r=i}}();var s,c=[],l=!1,p=-1;function f(){l&&s&&(l=!1,s.length?c=s.concat(c):p=-1,c.length&&v())}function v(){if(!l){var t=u(f);l=!0;for(var e=c.length;e;){for(s=c,c=[];++p<e;)s&&s[p].run();p=-1,e=c.length}s=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function h(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new d(t,e)),1!==c.length||l||u(v)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){var r=n(2)(n(0),"Map");t.exports=r},function(t,e,n){var r=n(0).Symbol;t.exports=r},function(t,e){var n=Array.isArray;t.exports=n},function(t,e){t.exports=r},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,n){var r=n(7),o=n(20);t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(4))},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e,n){var r=n(51),o=n(58),a=n(60),i=n(61),u=n(62);function s(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=u,t.exports=s},function(t,e,n){var r=n(63),o=n(66),a=n(67);t.exports=function(t,e,n,i,u,s){var c=1&n,l=t.length,p=e.length;if(l!=p&&!(c&&p>l))return!1;var f=s.get(t);if(f&&s.get(e))return f==e;var v=-1,d=!0,h=2&n?new r:void 0;for(s.set(t,e),s.set(e,t);++v<l;){var y=t[v],b=e[v];if(i)var m=c?i(b,y,v,e,t,s):i(y,b,v,t,e,s);if(void 0!==m){if(m)continue;d=!1;break}if(h){if(!o(e,(function(t,e){if(!a(h,e)&&(y===t||u(y,t,n,i,s)))return h.push(e)}))){d=!1;break}}else if(y!==b&&!u(y,b,n,i,s)){d=!1;break}}return s.delete(t),s.delete(e),d}},function(t,e,n){(function(t){var r=n(0),o=n(84),a=e&&!e.nodeType&&e,i=a&&"object"==typeof t&&t&&!t.nodeType&&t,u=i&&i.exports===a?r.Buffer:void 0,s=(u?u.isBuffer:void 0)||o;t.exports=s}).call(this,n(25)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){var r=n(86),o=n(87),a=n(88),i=a&&a.isTypedArray,u=i?o(i):r;t.exports=u},function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},function(t,e,n){var r=n(32);t.exports=function(t,e){return r(t,e)}},function(t,e,n){t.exports=n(30)()},function(t,e,n){"use strict";var r=n(31);function o(){}function a(){}a.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){var r=n(33),o=n(10);t.exports=function t(e,n,a,i,u){return e===n||(null==e||null==n||!o(e)&&!o(n)?e!=e&&n!=n:r(e,n,a,i,t,u))}},function(t,e,n){var r=n(34),o=n(23),a=n(68),i=n(72),u=n(94),s=n(15),c=n(24),l=n(26),p="[object Object]",f=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,v,d,h){var y=s(t),b=s(e),m=y?"[object Array]":u(t),g=b?"[object Array]":u(e),_=(m="[object Arguments]"==m?p:m)==p,w=(g="[object Arguments]"==g?p:g)==p,E=m==g;if(E&&c(t)){if(!c(e))return!1;y=!0,_=!1}if(E&&!_)return h||(h=new r),y||l(t)?o(t,e,n,v,d,h):a(t,e,m,n,v,d,h);if(!(1&n)){var j=_&&f.call(t,"__wrapped__"),x=w&&f.call(e,"__wrapped__");if(j||x){var O=j?t.value():t,T=x?e.value():e;return h||(h=new r),d(O,T,n,v,h)}}return!!E&&(h||(h=new r),i(t,e,n,v,d,h))}},function(t,e,n){var r=n(5),o=n(40),a=n(41),i=n(42),u=n(43),s=n(44);function c(t){var e=this.__data__=new r(t);this.size=e.size}c.prototype.clear=o,c.prototype.delete=a,c.prototype.get=i,c.prototype.has=u,c.prototype.set=s,t.exports=c},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,n){var r=n(6),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0||(n==e.length-1?e.pop():o.call(e,n,1),--this.size,0))}},function(t,e,n){var r=n(6);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},function(t,e,n){var r=n(6);t.exports=function(t){return r(this.__data__,t)>-1}},function(t,e,n){var r=n(6);t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},function(t,e,n){var r=n(5);t.exports=function(){this.__data__=new r,this.size=0}},function(t,e){t.exports=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}},function(t,e){t.exports=function(t){return this.__data__.get(t)}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e,n){var r=n(5),o=n(13),a=n(22);t.exports=function(t,e){var n=this.__data__;if(n instanceof r){var i=n.__data__;if(!o||i.length<199)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new a(i)}return n.set(t,e),this.size=n.size,this}},function(t,e,n){var r=n(18),o=n(48),a=n(20),i=n(21),u=/^\[object .+?Constructor\]$/,s=Function.prototype,c=Object.prototype,l=s.toString,p=c.hasOwnProperty,f=RegExp("^"+l.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(r(t)?f:u).test(i(t))}},function(t,e,n){var r=n(14),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,u=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,u),n=t[u];try{t[u]=void 0;var r=!0}catch(t){}var o=i.call(t);return r&&(e?t[u]=n:delete t[u]),o}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e,n){var r,o=n(49),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!a&&a in t}},function(t,e,n){var r=n(0)["__core-js_shared__"];t.exports=r},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,n){var r=n(52),o=n(5),a=n(13);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},function(t,e,n){var r=n(53),o=n(54),a=n(55),i=n(56),u=n(57);function s(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=u,t.exports=s},function(t,e,n){var r=n(8);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,n){var r=n(8),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(e,t)?e[t]:void 0}},function(t,e,n){var r=n(8),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:o.call(e,t)}},function(t,e,n){var r=n(8);t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},function(t,e,n){var r=n(9);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,n){var r=n(9);t.exports=function(t){return r(this,t).get(t)}},function(t,e,n){var r=n(9);t.exports=function(t){return r(this,t).has(t)}},function(t,e,n){var r=n(9);t.exports=function(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}},function(t,e,n){var r=n(22),o=n(64),a=n(65);function i(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new r;++e<n;)this.add(t[e])}i.prototype.add=i.prototype.push=o,i.prototype.has=a,t.exports=i},function(t,e){t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}},function(t,e){t.exports=function(t,e){return t.has(e)}},function(t,e,n){var r=n(14),o=n(69),a=n(17),i=n(23),u=n(70),s=n(71),c=r?r.prototype:void 0,l=c?c.valueOf:void 0;t.exports=function(t,e,n,r,c,p,f){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!p(new o(t),new o(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var v=u;case"[object Set]":var d=1&r;if(v||(v=s),t.size!=e.size&&!d)return!1;var h=f.get(t);if(h)return h==e;r|=2,f.set(t,e);var y=i(v(t),v(e),r,c,p,f);return f.delete(t),y;case"[object Symbol]":if(l)return l.call(t)==l.call(e)}return!1}},function(t,e,n){var r=n(0).Uint8Array;t.exports=r},function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}},function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}},function(t,e,n){var r=n(73),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,a,i,u){var s=1&n,c=r(t),l=c.length;if(l!=r(e).length&&!s)return!1;for(var p=l;p--;){var f=c[p];if(!(s?f in e:o.call(e,f)))return!1}var v=u.get(t);if(v&&u.get(e))return v==e;var d=!0;u.set(t,e),u.set(e,t);for(var h=s;++p<l;){var y=t[f=c[p]],b=e[f];if(a)var m=s?a(b,y,f,e,t,u):a(y,b,f,t,e,u);if(!(void 0===m?y===b||i(y,b,n,a,u):m)){d=!1;break}h||(h="constructor"==f)}if(d&&!h){var g=t.constructor,_=e.constructor;g!=_&&"constructor"in t&&"constructor"in e&&!("function"==typeof g&&g instanceof g&&"function"==typeof _&&_ instanceof _)&&(d=!1)}return u.delete(t),u.delete(e),d}},function(t,e,n){var r=n(74),o=n(76),a=n(79);t.exports=function(t){return r(t,a,o)}},function(t,e,n){var r=n(75),o=n(15);t.exports=function(t,e,n){var a=e(t);return o(t)?a:r(a,n(t))}},function(t,e){t.exports=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}},function(t,e,n){var r=n(77),o=n(78),a=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols,u=i?function(t){return null==t?[]:(t=Object(t),r(i(t),(function(e){return a.call(t,e)})))}:o;t.exports=u},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,a=[];++n<r;){var i=t[n];e(i,n,t)&&(a[o++]=i)}return a}},function(t,e){t.exports=function(){return[]}},function(t,e,n){var r=n(80),o=n(89),a=n(93);t.exports=function(t){return a(t)?r(t):o(t)}},function(t,e,n){var r=n(81),o=n(82),a=n(15),i=n(24),u=n(85),s=n(26),c=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=a(t),l=!n&&o(t),p=!n&&!l&&i(t),f=!n&&!l&&!p&&s(t),v=n||l||p||f,d=v?r(t.length,String):[],h=d.length;for(var y in t)!e&&!c.call(t,y)||v&&("length"==y||p&&("offset"==y||"parent"==y)||f&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||u(y,h))||d.push(y);return d}},function(t,e){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},function(t,e,n){var r=n(83),o=n(10),a=Object.prototype,i=a.hasOwnProperty,u=a.propertyIsEnumerable,s=r(function(){return arguments}())?r:function(t){return o(t)&&i.call(t,"callee")&&!u.call(t,"callee")};t.exports=s},function(t,e,n){var r=n(7),o=n(10);t.exports=function(t){return o(t)&&"[object Arguments]"==r(t)}},function(t,e){t.exports=function(){return!1}},function(t,e){var n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&n.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e,n){var r=n(7),o=n(27),a=n(10),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,t.exports=function(t){return a(t)&&o(t.length)&&!!i[r(t)]}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,n){(function(t){var r=n(19),o=e&&!e.nodeType&&e,a=o&&"object"==typeof t&&t&&!t.nodeType&&t,i=a&&a.exports===o&&r.process,u=function(){try{return a&&a.require&&a.require("util").types||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=u}).call(this,n(25)(t))},function(t,e,n){var r=n(90),o=n(91),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=[];for(var n in Object(t))a.call(t,n)&&"constructor"!=n&&e.push(n);return e}},function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},function(t,e,n){var r=n(92)(Object.keys,Object);t.exports=r},function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},function(t,e,n){var r=n(18),o=n(27);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},function(t,e,n){var r=n(95),o=n(13),a=n(96),i=n(97),u=n(98),s=n(7),c=n(21),l=c(r),p=c(o),f=c(a),v=c(i),d=c(u),h=s;(r&&"[object DataView]"!=h(new r(new ArrayBuffer(1)))||o&&"[object Map]"!=h(new o)||a&&"[object Promise]"!=h(a.resolve())||i&&"[object Set]"!=h(new i)||u&&"[object WeakMap]"!=h(new u))&&(h=function(t){var e=s(t),n="[object Object]"==e?t.constructor:void 0,r=n?c(n):"";if(r)switch(r){case l:return"[object DataView]";case p:return"[object Map]";case f:return"[object Promise]";case v:return"[object Set]";case d:return"[object WeakMap]"}return e}),t.exports=h},function(t,e,n){var r=n(2)(n(0),"DataView");t.exports=r},function(t,e,n){var r=n(2)(n(0),"Promise");t.exports=r},function(t,e,n){var r=n(2)(n(0),"Set");t.exports=r},function(t,e,n){var r=n(2)(n(0),"WeakMap");t.exports=r},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));var r=n(16),o=n.n(r),a=(n(29),n(3)),i=n(28),u=n.n(i);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?v(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=function(t){function e(){var t,n;c(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return h(v(n=p(this,(t=f(e)).call.apply(t,[this].concat(o)))),"state",{instance:null}),n}var n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,t),n=e,(r=[{key:"componentDidMount",value:function(){var t=this,e=new a.default(this.typewriter,this.props.options);this.setState({instance:e},(function(){var n=t.props.onInit;n&&n(e)}))}},{key:"componentDidUpdate",value:function(t){u()(this.props.options,t.options)||this.setState({instance:new a.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{ref:function(e){return t.typewriter=e},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&l(n.prototype,r),e}(r.Component)}]).default)}}]);
//# sourceMappingURL=component---src-pages-index-js-76feb6c8b4b7022e3d00.js.map