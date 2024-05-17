(function(){/*
 *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
*****************************************************************************/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(e){var c=0;return function(){return c<e.length?{done:!1,value:e[c++]}:{done:!0}}};$jscomp.arrayIterator=function(e){return{next:$jscomp.arrayIteratorImpl(e)}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(e,c,f){if(e==Array.prototype||e==Object.prototype)return e;e[c]=f.value;return e};$jscomp.getGlobal=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var c=0;c<e.length;++c){var f=e[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(e,c,f){if(!f||null!=e){f=$jscomp.propertyToPolyfillSymbol[c];if(null==f)return e[c];f=e[f];return void 0!==f?f:e[c]}};
$jscomp.polyfill=function(e,c,f,a){c&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(e,c,f,a):$jscomp.polyfillUnisolated(e,c,f,a))};$jscomp.polyfillUnisolated=function(e,c,f,a){f=$jscomp.global;e=e.split(".");for(a=0;a<e.length-1;a++){var d=e[a];if(!(d in f))return;f=f[d]}e=e[e.length-1];a=f[e];c=c(a);c!=a&&null!=c&&$jscomp.defineProperty(f,e,{configurable:!0,writable:!0,value:c})};
$jscomp.polyfillIsolated=function(e,c,f,a){var d=e.split(".");e=1===d.length;a=d[0];a=!e&&a in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var l=0;l<d.length-1;l++){var g=d[l];if(!(g in a))return;a=a[g]}d=d[d.length-1];f=$jscomp.IS_SYMBOL_NATIVE&&"es6"===f?a[d]:null;c=c(f);null!=c&&(e?$jscomp.defineProperty($jscomp.polyfills,d,{configurable:!0,writable:!0,value:c}):c!==f&&(void 0===$jscomp.propertyToPolyfillSymbol[d]&&(f=1E9*Math.random()>>>0,$jscomp.propertyToPolyfillSymbol[d]=$jscomp.IS_SYMBOL_NATIVE?
$jscomp.global.Symbol(d):$jscomp.POLYFILL_PREFIX+f+"$"+d),$jscomp.defineProperty(a,$jscomp.propertyToPolyfillSymbol[d],{configurable:!0,writable:!0,value:c})))};$jscomp.initSymbol=function(){};
$jscomp.polyfill("Symbol",function(e){if(e)return e;var c=function(l,g){this.$jscomp$symbol$id_=l;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:g})};c.prototype.toString=function(){return this.$jscomp$symbol$id_};var f="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",a=0,d=function(l){if(this instanceof d)throw new TypeError("Symbol is not a constructor");return new c(f+(l||"")+"_"+a++,l)};return d},"es6","es3");
$jscomp.polyfill("Symbol.iterator",function(e){if(e)return e;e=Symbol("Symbol.iterator");for(var c="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),f=0;f<c.length;f++){var a=$jscomp.global[c[f]];"function"===typeof a&&"function"!=typeof a.prototype[e]&&$jscomp.defineProperty(a.prototype,e,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}})}return e},"es6",
"es3");$jscomp.iteratorPrototype=function(e){e={next:e};e[Symbol.iterator]=function(){return this};return e};$jscomp.checkEs6ConformanceViaProxy=function(){try{var e={},c=Object.create(new $jscomp.global.Proxy(e,{get:function(f,a,d){return f==e&&"q"==a&&d==c}}));return!0===c.q}catch(f){return!1}};$jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS=!1;$jscomp.ES6_CONFORMANCE=$jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS&&$jscomp.checkEs6ConformanceViaProxy();
$jscomp.makeIterator=function(e){var c="undefined"!=typeof Symbol&&Symbol.iterator&&e[Symbol.iterator];if(c)return c.call(e);if("number"==typeof e.length)return $jscomp.arrayIterator(e);throw Error(String(e)+" is not an iterable or ArrayLike");};$jscomp.owns=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)};$jscomp.MapEntry=function(){};
$jscomp.polyfill("Promise",function(e){function c(){this.batch_=null}function f(g){return g instanceof d?g:new d(function(b,h){b(g)})}if(e&&(!($jscomp.FORCE_POLYFILL_PROMISE||$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION&&"undefined"===typeof $jscomp.global.PromiseRejectionEvent)||!$jscomp.global.Promise||-1===$jscomp.global.Promise.toString().indexOf("[native code]")))return e;c.prototype.asyncExecute=function(g){if(null==this.batch_){this.batch_=[];var b=this;this.asyncExecuteFunction(function(){b.executeBatch_()})}this.batch_.push(g)};
var a=$jscomp.global.setTimeout;c.prototype.asyncExecuteFunction=function(g){a(g,0)};c.prototype.executeBatch_=function(){for(;this.batch_&&this.batch_.length;){var g=this.batch_;this.batch_=[];for(var b=0;b<g.length;++b){var h=g[b];g[b]=null;try{h()}catch(p){this.asyncThrow_(p)}}}this.batch_=null};c.prototype.asyncThrow_=function(g){this.asyncExecuteFunction(function(){throw g;})};var d=function(g){this.state_=0;this.result_=void 0;this.onSettledCallbacks_=[];this.isRejectionHandled_=!1;var b=this.createResolveAndReject_();
try{g(b.resolve,b.reject)}catch(h){b.reject(h)}};d.prototype.createResolveAndReject_=function(){function g(p){return function(u){h||(h=!0,p.call(b,u))}}var b=this,h=!1;return{resolve:g(this.resolveTo_),reject:g(this.reject_)}};d.prototype.resolveTo_=function(g){if(g===this)this.reject_(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof d)this.settleSameAsPromise_(g);else{a:switch(typeof g){case "object":var b=null!=g;break a;case "function":b=!0;break a;default:b=!1}b?this.resolveToNonPromiseObj_(g):
this.fulfill_(g)}};d.prototype.resolveToNonPromiseObj_=function(g){var b=void 0;try{b=g.then}catch(h){this.reject_(h);return}"function"==typeof b?this.settleSameAsThenable_(b,g):this.fulfill_(g)};d.prototype.reject_=function(g){this.settle_(2,g)};d.prototype.fulfill_=function(g){this.settle_(1,g)};d.prototype.settle_=function(g,b){if(0!=this.state_)throw Error("Cannot settle("+g+", "+b+"): Promise already settled in state"+this.state_);this.state_=g;this.result_=b;2===this.state_&&this.scheduleUnhandledRejectionCheck_();
this.executeOnSettledCallbacks_()};d.prototype.scheduleUnhandledRejectionCheck_=function(){var g=this;a(function(){if(g.notifyUnhandledRejection_()){var b=$jscomp.global.console;"undefined"!==typeof b&&b.error(g.result_)}},1)};d.prototype.notifyUnhandledRejection_=function(){if(this.isRejectionHandled_)return!1;var g=$jscomp.global.CustomEvent,b=$jscomp.global.Event,h=$jscomp.global.dispatchEvent;if("undefined"===typeof h)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):
"function"===typeof b?g=new b("unhandledrejection",{cancelable:!0}):(g=$jscomp.global.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.result_;return h(g)};d.prototype.executeOnSettledCallbacks_=function(){if(null!=this.onSettledCallbacks_){for(var g=0;g<this.onSettledCallbacks_.length;++g)l.asyncExecute(this.onSettledCallbacks_[g]);this.onSettledCallbacks_=null}};var l=new c;d.prototype.settleSameAsPromise_=function(g){var b=this.createResolveAndReject_();
g.callWhenSettled_(b.resolve,b.reject)};d.prototype.settleSameAsThenable_=function(g,b){var h=this.createResolveAndReject_();try{g.call(b,h.resolve,h.reject)}catch(p){h.reject(p)}};d.prototype.then=function(g,b){function h(r,A){return"function"==typeof r?function(m){try{p(r(m))}catch(C){u(C)}}:A}var p,u,w=new d(function(r,A){p=r;u=A});this.callWhenSettled_(h(g,p),h(b,u));return w};d.prototype.catch=function(g){return this.then(void 0,g)};d.prototype.callWhenSettled_=function(g,b){function h(){switch(p.state_){case 1:g(p.result_);
break;case 2:b(p.result_);break;default:throw Error("Unexpected state: "+p.state_);}}var p=this;null==this.onSettledCallbacks_?l.asyncExecute(h):this.onSettledCallbacks_.push(h);this.isRejectionHandled_=!0};d.resolve=f;d.reject=function(g){return new d(function(b,h){h(g)})};d.race=function(g){return new d(function(b,h){for(var p=$jscomp.makeIterator(g),u=p.next();!u.done;u=p.next())f(u.value).callWhenSettled_(b,h)})};d.all=function(g){var b=$jscomp.makeIterator(g),h=b.next();return h.done?f([]):new d(function(p,
u){function w(m){return function(C){r[m]=C;A--;0==A&&p(r)}}var r=[],A=0;do r.push(void 0),A++,f(h.value).callWhenSettled_(w(r.length-1),u),h=b.next();while(!h.done)})};return d},"es6","es3");$jscomp.checkStringArgs=function(e,c,f){if(null==e)throw new TypeError("The 'this' value for String.prototype."+f+" must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype."+f+" must not be a regular expression");return e+""};
$jscomp.polyfill("String.prototype.endsWith",function(e){return e?e:function(c,f){var a=$jscomp.checkStringArgs(this,c,"endsWith");c+="";void 0===f&&(f=a.length);f=Math.max(0,Math.min(f|0,a.length));for(var d=c.length;0<d&&0<f;)if(a[--f]!=c[--d])return!1;return 0>=d}},"es6","es3");$jscomp.underscoreProtoCanBeSet=function(){var e={a:!0},c={};try{return c.__proto__=e,c.a}catch(f){}return!1};
$jscomp.setPrototypeOf=$jscomp.TRUST_ES6_POLYFILLS&&"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf:$jscomp.underscoreProtoCanBeSet()?function(e,c){e.__proto__=c;if(e.__proto__!==c)throw new TypeError(e+" is not extensible");return e}:null;$jscomp.assign=$jscomp.TRUST_ES6_POLYFILLS&&"function"==typeof Object.assign?Object.assign:function(e,c){for(var f=1;f<arguments.length;f++){var a=arguments[f];if(a)for(var d in a)$jscomp.owns(a,d)&&(e[d]=a[d])}return e};
(function(e){function c(a){if(f[a])return f[a].exports;var d=f[a]={i:a,l:!1,exports:{}};e[a].call(d.exports,d,d.exports,c);d.l=!0;return d.exports}var f={};c.m=e;c.c=f;c.d=function(a,d,l){c.o(a,d)||Object.defineProperty(a,d,{enumerable:!0,get:l})};c.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});Object.defineProperty(a,"__esModule",{value:!0})};c.t=function(a,d){d&1&&(a=c(a));if(d&8||d&4&&"object"===typeof a&&a&&a.__esModule)return a;
var l=Object.create(null);c.r(l);Object.defineProperty(l,"default",{enumerable:!0,value:a});if(d&2&&"string"!=typeof a)for(var g in a)c.d(l,g,function(b){return a[b]}.bind(null,g));return l};c.n=function(a){var d=a&&a.__esModule?function(){return a["default"]}:function(){return a};c.d(d,"a",d);return d};c.o=function(a,d){return Object.prototype.hasOwnProperty.call(a,d)};c.p="/core/office/";return c(c.s=13)})([function(e,c,f){f.d(c,"b",function(){return d});f.d(c,"a",function(){return l});var a=f(1),
d=function(g,b){Object(a.a)("disableLogs")||(b?console.warn(g+": "+b):console.warn(g))},l=function(g,b){}},function(e,c,f){f.d(c,"a",function(){return l});f.d(c,"b",function(){return g});var a={},d={flattenedResources:!1,CANVAS_CACHE_SIZE:void 0,maxPagesBefore:void 0,maxPagesAhead:void 0,disableLogs:!1,wvsQueryParameters:{},_trnDebugMode:!1,_logFiltersEnabled:null},l=function(b){return d[b]},g=function(b,h){var p;d[b]=h;null===(p=a[b])||void 0===p?void 0:p.forEach(function(u){u(h)})}},function(e,
c,f){f.d(c,"a",function(){return x});f.d(c,"b",function(){return y});f.d(c,"c",function(){return F});var a=f(7),d=f(0),l=f(4),g=f(3),b="undefined"===typeof window?self:window,h=b.importScripts,p=!1,u=function(k,q){p||(h(b.basePath+"decode.min.js"),p=!0);k=self.BrotliDecode(Object(g.b)(k));return q?k:Object(g.a)(k)},w=function(k,q){return Object(a.a)(void 0,void 0,Promise,function(){var t;return Object(a.b)(this,function(z){switch(z.label){case 0:return p?[3,2]:[4,Object(l.a)(self.Core.getWorkerPath()+
"external/decode.min.js","Failed to download decode.min.js",window)];case 1:z.sent(),p=!0,z.label=2;case 2:return t=self.BrotliDecode(Object(g.b)(k)),[2,q?t:Object(g.a)(t)]}})})};(function(){function k(){this.remainingDataArrays=[]}k.prototype.processRaw=function(q){return q};k.prototype.processBrotli=function(q){this.remainingDataArrays.push(q);return null};k.prototype.GetNextChunk=function(q){this.decodeFunction||(this.decodeFunction=0===q[0]&&97===q[1]&&115===q[2]&&109===q[3]?this.processRaw:this.processBrotli);
return this.decodeFunction(q)};k.prototype.End=function(){if(this.remainingDataArrays.length){for(var q=this.arrays,t=0,z=0;z<q.length;++z)t+=q[z].length;t=new Uint8Array(t);var J=0;for(z=0;z<q.length;++z){var n=q[z];t.set(n,J);J+=n.length}return u(t,!0)}return null};return k})();var r=!1,A=function(k){r||(h(b.basePath+"pako_inflate.min.js"),r=!0);var q=10;if("string"===typeof k){if(k.charCodeAt(3)&8){for(;0!==k.charCodeAt(q);++q);++q}}else if(k[3]&8){for(;0!==k[q];++q);++q}k=Object(g.b)(k);k=k.subarray(q,
k.length-8);return b.pako.inflate(k,{windowBits:-15})},m=function(k,q){return q?k:Object(g.a)(k)},C=function(k){var q=!k.shouldOutputArray,t=new XMLHttpRequest;t.open("GET",k.url,k.isAsync);var z=q&&t.overrideMimeType;t.responseType=z?"text":"arraybuffer";z&&t.overrideMimeType("text/plain; charset=x-user-defined");t.send();var J=function(){var v=Date.now();var D=z?t.responseText:new Uint8Array(t.response);Object(d.a)("worker","Result length is "+D.length);D.length<k.compressedMaximum?(D=k.decompressFunction(D,
k.shouldOutputArray),Object(d.b)("There may be some degradation of performance. Your server has not been configured to serve .gz. and .br. files with the expected Content-Encoding. See https://docs.apryse.com/documentation/web/faq/content-encoding/ for instructions on how to resolve this."),h&&Object(d.a)("worker","Decompressed length is "+D.length)):q&&(D=Object(g.a)(D));h&&Object(d.a)("worker",k.url+" Decompression took "+(Date.now()-v));return D};if(k.isAsync)var n=new Promise(function(v,D){t.onload=
function(){200===this.status||0===this.status?v(J()):D("Download Failed "+k.url)};t.onerror=function(){D("Network error occurred "+k.url)}});else{if(200===t.status||0===t.status)return J();throw Error("Failed to load "+k.url);}return n},x=function(k){var q=k.lastIndexOf("/");-1===q&&(q=0);var t=k.slice(q).replace(".",".br.");h||(t.endsWith(".js.mem")?t=t.replace(".js.mem",".mem"):t.endsWith(".js")&&(t=t.concat(".mem")));return k.slice(0,q)+t},H=function(k,q){var t=k.lastIndexOf("/");-1===t&&(t=0);
var z=k.slice(t).replace(".",".gz.");q.url=k.slice(0,t)+z;q.decompressFunction=A;return C(q)},E=function(k,q){q.url=x(k);q.decompressFunction=h?u:w;return C(q)},I=function(k,q){k.endsWith(".js.mem")?k=k.slice(0,-4):k.endsWith(".mem")&&(k=k.slice(0,-4)+".js.mem");q.url=k;q.decompressFunction=m;return C(q)},K=function(k,q,t,z){return k.catch(function(J){Object(d.b)(J);return z(q,t)})},B=function(k,q,t){var z;if(t.isAsync){var J=q[0](k,t);for(z=1;z<q.length;++z)J=K(J,k,t,q[z]);return J}for(z=0;z<q.length;++z)try{return q[z](k,
t)}catch(n){Object(d.b)(n.message)}throw Error("");},F=function(k,q,t,z){return B(k,[H,E,I],{compressedMaximum:q,isAsync:t,shouldOutputArray:z})},y=function(k,q,t,z){return B(k,[E,H,I],{compressedMaximum:q,isAsync:t,shouldOutputArray:z})}},function(e,c,f){f.d(c,"b",function(){return a});f.d(c,"a",function(){return d});var a=function(l){if("string"===typeof l){for(var g=new Uint8Array(l.length),b=l.length,h=0;h<b;h++)g[h]=l.charCodeAt(h);return g}return l},d=function(l){if("string"!==typeof l){for(var g=
"",b=0,h=l.length,p;b<h;)p=l.subarray(b,b+1024),b+=1024,g+=String.fromCharCode.apply(null,p);return g}return l}},function(e,c,f){function a(l,g,b){return new Promise(function(h){if(!l)return h();var p=b.document.createElement("script");p.type="text/javascript";p.onload=function(){h()};p.onerror=function(){g&&Object(d.b)(g);h()};p.src=l;b.document.getElementsByTagName("head")[0].appendChild(p)})}f.d(c,"a",function(){return a});var d=f(0)},function(e,c,f){function a(b,h,p){function u(A){r=r||Date.now();
return A?(Object(d.a)("load","Try instantiateStreaming"),fetch(Object(l.a)(b)).then(function(m){return WebAssembly.instantiateStreaming(m,h)}).catch(function(m){Object(d.a)("load","instantiateStreaming Failed "+b+" message "+m.message);return u(!1)})):Object(l.b)(b,p,!0,!0).then(function(m){w=Date.now();Object(d.a)("load","Request took "+(w-r)+" ms");return WebAssembly.instantiate(m,h)})}var w,r;return u(!!WebAssembly.instantiateStreaming).then(function(A){Object(d.a)("load","WASM compilation took "+
(Date.now()-(w||r))+" ms");return A})}f.d(c,"a",function(){return a});var d=f(0),l=f(2),g=f(4);f.d(c,"b",function(){return g.a})},function(e,c){c=function(){return this}();try{c=c||(new Function("return this"))()}catch(f){"object"===typeof window&&(c=window)}e.exports=c},function(e,c,f){function a(l,g,b,h){function p(u){return u instanceof b?u:new b(function(w){w(u)})}return new (b||(b=Promise))(function(u,w){function r(C){try{m(h.next(C))}catch(x){w(x)}}function A(C){try{m(h["throw"](C))}catch(x){w(x)}}
function m(C){C.done?u(C.value):p(C.value).then(r,A)}m((h=h.apply(l,g||[])).next())})}function d(l,g){function b(m){return function(C){return h([m,C])}}function h(m){if(u)throw new TypeError("Generator is already executing.");for(;p;)try{if(u=1,w&&(r=m[0]&2?w["return"]:m[0]?w["throw"]||((r=w["return"])&&r.call(w),0):w.next)&&!(r=r.call(w,m[1])).done)return r;if(w=0,r)m=[m[0]&2,r.value];switch(m[0]){case 0:case 1:r=m;break;case 4:return p.label++,{value:m[1],done:!1};case 5:p.label++;w=m[1];m=[0];
continue;case 7:m=p.ops.pop();p.trys.pop();continue;default:if(!(r=p.trys,r=0<r.length&&r[r.length-1])&&(6===m[0]||2===m[0])){p=0;continue}if(3===m[0]&&(!r||m[1]>r[0]&&m[1]<r[3]))p.label=m[1];else if(6===m[0]&&p.label<r[1])p.label=r[1],r=m;else if(r&&p.label<r[2])p.label=r[2],p.ops.push(m);else{r[2]&&p.ops.pop();p.trys.pop();continue}}m=g.call(l,p)}catch(C){m=[6,C],w=0}finally{u=r=0}if(m[0]&5)throw m[1];return{value:m[0]?m[1]:void 0,done:!0}}var p={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},
trys:[],ops:[]},u,w,r,A;return A={next:b(0),"throw":b(1),"return":b(2)},"function"===typeof Symbol&&(A[Symbol.iterator]=function(){return this}),A}f.d(c,"a",function(){return a});f.d(c,"b",function(){return d})},function(e,c,f){c.a=function(){ArrayBuffer.prototype.slice||(ArrayBuffer.prototype.slice=function(a,d){void 0===a&&(a=0);void 0===d&&(d=this.byteLength);a=Math.floor(a);d=Math.floor(d);0>a&&(a+=this.byteLength);0>d&&(d+=this.byteLength);a=Math.min(Math.max(0,a),this.byteLength);d=Math.min(Math.max(0,
d),this.byteLength);if(0>=d-a)return new ArrayBuffer(0);var l=new ArrayBuffer(d-a),g=new Uint8Array(l);a=new Uint8Array(this,a,d-a);g.set(a);return l})}},function(e,c,f){f.d(c,"a",function(){return a});f(10);var a=function(d,l){return function(){}}},function(e,c,f){c.a=function(a){var d={};decodeURIComponent(a.slice(1)).split("&").forEach(function(l){l=l.split("=",2);d[l[0]]=l[1]});return d}},function(e,c,f){f.d(c,"a",function(){return b});var a=f(2),d=f(5),l=f(12),g=function(){function h(p){var u=
this;this.promise=p.then(function(w){u.response=w;u.status=200})}h.prototype.addEventListener=function(p,u){this.promise.then(u)};return h}(),b=function(h,p,u){if(Object(l.a)()&&!u){self.Module.instantiateWasm=function(r,A){return Object(d.a)(h+"Wasm.wasm",r,p["Wasm.wasm"]).then(function(m){A(m.instance)})};if(p.disableObjectURLBlobs){importScripts(h+"Wasm.js");return}u=Object(a.b)(h+"Wasm.js.mem",p["Wasm.js.mem"],!1,!1)}else{if(p.disableObjectURLBlobs){importScripts((self.Module.asmjsPrefix?self.Module.asmjsPrefix:
"")+h+".js");return}u=Object(a.b)((self.Module.asmjsPrefix?self.Module.asmjsPrefix:"")+h+".js.mem",p[".js.mem"],!1);var w=Object(a.c)((self.Module.memoryInitializerPrefixURL?self.Module.memoryInitializerPrefixURL:"")+h+".mem",p[".mem"],!0,!0);self.Module.memoryInitializerRequest=new g(w)}u=new Blob([u],{type:"application/javascript"});importScripts(URL.createObjectURL(u))}},function(e,c,f){f.d(c,"a",function(){return A});var a="undefined"===typeof window?self:window;e=function(){var m=navigator.userAgent.toLowerCase();
return(m=/(msie) ([\w.]+)/.exec(m)||/(trident)(?:.*? rv:([\w.]+)|)/.exec(m))?parseInt(m[2],10):m}();var d=function(){var m=a.navigator.userAgent.match(/OPR/),C=a.navigator.userAgent.match(/Maxthon/),x=a.navigator.userAgent.match(/Edge/);return a.navigator.userAgent.match(/Chrome\/(.*?) /)&&!m&&!C&&!x}();(function(){if(!d)return null;var m=a.navigator.userAgent.match(/Chrome\/([0-9]+)\./);return m?parseInt(m[1],10):m})();var l=!!navigator.userAgent.match(/Edge/i)||navigator.userAgent.match(/Edg\/(.*?)/)&&
a.navigator.userAgent.match(/Chrome\/(.*?) /);(function(){if(!l)return null;var m=a.navigator.userAgent.match(/Edg\/([0-9]+)\./);return m?parseInt(m[1],10):m})();c=/iPad|iPhone|iPod/.test(a.navigator.platform)||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints||/iPad|iPhone|iPod/.test(a.navigator.userAgent);var g=function(){var m=a.navigator.userAgent.match(/.*\/([0-9\.]+)\s(Safari|Mobile).*/i);return m?parseFloat(m[1]):m}(),b=/^((?!chrome|android).)*safari/i.test(a.navigator.userAgent)||
/^((?!chrome|android).)*$/.test(a.navigator.userAgent)&&c,h=a.navigator.userAgent.match(/Firefox/);(function(){if(!h)return null;var m=a.navigator.userAgent.match(/Firefox\/([0-9]+)\./);return m?parseInt(m[1],10):m})();e||/Android|webOS|Touch|IEMobile|Silk/i.test(navigator.userAgent);navigator.userAgent.match(/(iPad|iPhone|iPod)/i);a.navigator.userAgent.indexOf("Android");var p=/Mac OS X 10_13_6.*\(KHTML, like Gecko\)$/.test(a.navigator.userAgent),u=a.navigator.userAgent.match(/(iPad|iPhone).+\sOS\s((\d+)(_\d)*)/i)?
14<=parseInt(a.navigator.userAgent.match(/(iPad|iPhone).+\sOS\s((\d+)(_\d)*)/i)[3],10):!1,w=!(!self.WebAssembly||!self.WebAssembly.validate),r=-1<a.navigator.userAgent.indexOf("Edge/16")||-1<a.navigator.userAgent.indexOf("MSAppHost"),A=function(){return w&&!r&&!(!u&&(b&&14>g||p))}},function(e,c,f){e.exports=f(14)},function(e,c,f){f.r(c);f(15);f(20);e=f(8);f(21);Object(e.a)()},function(e,c,f){(function(a,d){function l(g){"@babel/helpers - typeof";return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?
function(b){return typeof b}:function(b){return b&&"function"==typeof Symbol&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},l(g)}(function(g){function b(){for(var n=0;n<z.length;n++)z[n][0](z[n][1]);z=[];J=!1}function h(n,v){z.push([n,v]);J||(J=!0,t(b,0))}function p(n,v){function D(G){r(v,G)}function L(G){m(v,G)}try{n(D,L)}catch(G){L(G)}}function u(n){var v=n.owner,D=v.state_;v=v.data_;var L=n[D];n=n.then;if("function"===typeof L){D=y;try{v=L(v)}catch(G){m(n,G)}}w(n,v)||(D===y&&
r(n,v),D===k&&m(n,v))}function w(n,v){var D;try{if(n===v)throw new TypeError("A promises callback cannot return that same promise.");if(v&&("function"===typeof v||"object"===l(v))){var L=v.then;if("function"===typeof L)return L.call(v,function(G){D||(D=!0,v!==G?r(n,G):A(n,G))},function(G){D||(D=!0,m(n,G))}),!0}}catch(G){return D||m(n,G),!0}return!1}function r(n,v){n!==v&&w(n,v)||A(n,v)}function A(n,v){n.state_===B&&(n.state_=F,n.data_=v,h(x,n))}function m(n,v){n.state_===B&&(n.state_=F,n.data_=v,
h(H,n))}function C(n){var v=n.then_;n.then_=void 0;for(n=0;n<v.length;n++)u(v[n])}function x(n){n.state_=y;C(n)}function H(n){n.state_=k;C(n)}function E(n){if("function"!==typeof n)throw new TypeError("Promise constructor takes a function argument");if(!(this instanceof E))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this.then_=[];p(n,this)}g.createPromiseCapability=function(){var n={};n.promise=new E(function(v,
D){n.resolve=v;n.reject=D});return n};var I=g.Promise,K=I&&"resolve"in I&&"reject"in I&&"all"in I&&"race"in I&&function(){var n;new I(function(v){n=v});return"function"===typeof n}();"undefined"!==typeof exports&&exports?(exports.Promise=K?I:E,exports.Polyfill=E):"function"===typeof define&&f(19)?define(function(){return K?I:E}):K||(g.Promise=E);var B="pending",F="sealed",y="fulfilled",k="rejected",q=function(){},t="undefined"!==typeof d?d:setTimeout,z=[],J;E.prototype={constructor:E,state_:B,then_:null,
data_:void 0,then:function(n,v){n={owner:this,then:new this.constructor(q),fulfilled:n,rejected:v};this.state_===y||this.state_===k?h(u,n):this.then_.push(n);return n.then},"catch":function(n){return this.then(null,n)}};E.all=function(n){if("[object Array]"!==Object.prototype.toString.call(n))throw new TypeError("You must pass an array to Promise.all().");return new this(function(v,D){function L(P){O++;return function(Q){G[P]=Q;--O||v(G)}}for(var G=[],O=0,M=0,N;M<n.length;M++)(N=n[M])&&"function"===
typeof N.then?N.then(L(M),D):G[M]=N;O||v(G)})};E.race=function(n){if("[object Array]"!==Object.prototype.toString.call(n))throw new TypeError("You must pass an array to Promise.race().");return new this(function(v,D){for(var L=0,G;L<n.length;L++)(G=n[L])&&"function"===typeof G.then?G.then(v,D):v(G)})};E.resolve=function(n){return n&&"object"===l(n)&&n.constructor===this?n:new this(function(v){v(n)})};E.reject=function(n){return new this(function(v,D){D(n)})}})("undefined"!==typeof window?window:"undefined"!==
typeof a?a:"undefined"!==typeof self?self:void 0)}).call(this,f(6),f(16).setImmediate)},function(e,c,f){(function(a){function d(b,h){this._id=b;this._clearFn=h}var l="undefined"!==typeof a&&a||"undefined"!==typeof self&&self||window,g=Function.prototype.apply;c.setTimeout=function(){return new d(g.call(setTimeout,l,arguments),clearTimeout)};c.setInterval=function(){return new d(g.call(setInterval,l,arguments),clearInterval)};c.clearTimeout=c.clearInterval=function(b){b&&b.close()};d.prototype.unref=
d.prototype.ref=function(){};d.prototype.close=function(){this._clearFn.call(l,this._id)};c.enroll=function(b,h){clearTimeout(b._idleTimeoutId);b._idleTimeout=h};c.unenroll=function(b){clearTimeout(b._idleTimeoutId);b._idleTimeout=-1};c._unrefActive=c.active=function(b){clearTimeout(b._idleTimeoutId);var h=b._idleTimeout;0<=h&&(b._idleTimeoutId=setTimeout(function(){b._onTimeout&&b._onTimeout()},h))};f(17);c.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof a&&a.setImmediate||
this&&this.setImmediate;c.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof a&&a.clearImmediate||this&&this.clearImmediate}).call(this,f(6))},function(e,c,f){(function(a,d){(function(l,g){function b(B){delete x[B]}function h(B){if(H)setTimeout(h,0,B);else{var F=x[B];if(F){H=!0;try{var y=F.callback,k=F.args;switch(k.length){case 0:y();break;case 1:y(k[0]);break;case 2:y(k[0],k[1]);break;case 3:y(k[0],k[1],k[2]);break;default:y.apply(g,k)}}finally{b(B),H=!1}}}}function p(){I=
function(B){d.nextTick(function(){h(B)})}}function u(){if(l.postMessage&&!l.importScripts){var B=!0,F=l.onmessage;l.onmessage=function(){B=!1};l.postMessage("","*");l.onmessage=F;return B}}function w(){var B="setImmediate$"+Math.random()+"$",F=function(y){y.source===l&&"string"===typeof y.data&&0===y.data.indexOf(B)&&h(+y.data.slice(B.length))};l.addEventListener?l.addEventListener("message",F,!1):l.attachEvent("onmessage",F);I=function(y){l.postMessage(B+y,"*")}}function r(){var B=new MessageChannel;
B.port1.onmessage=function(F){h(F.data)};I=function(F){B.port2.postMessage(F)}}function A(){var B=E.documentElement;I=function(F){var y=E.createElement("script");y.onreadystatechange=function(){h(F);y.onreadystatechange=null;B.removeChild(y);y=null};B.appendChild(y)}}function m(){I=function(B){setTimeout(h,0,B)}}if(!l.setImmediate){var C=1,x={},H=!1,E=l.document,I,K=Object.getPrototypeOf&&Object.getPrototypeOf(l);K=K&&K.setTimeout?K:l;"[object process]"==={}.toString.call(l.process)?p():u()?w():l.MessageChannel?
r():E&&"onreadystatechange"in E.createElement("script")?A():m();K.setImmediate=function(B){"function"!==typeof B&&(B=new Function(""+B));for(var F=Array(arguments.length-1),y=0;y<F.length;y++)F[y]=arguments[y+1];x[C]={callback:B,args:F};I(C);return C++};K.clearImmediate=b}})("undefined"===typeof self?"undefined"===typeof a?this:a:self)}).call(this,f(6),f(18))},function(e,c){function f(){throw Error("setTimeout has not been defined");}function a(){throw Error("clearTimeout has not been defined");}
function d(x){if(u===setTimeout)return setTimeout(x,0);if((u===f||!u)&&setTimeout)return u=setTimeout,setTimeout(x,0);try{return u(x,0)}catch(H){try{return u.call(null,x,0)}catch(E){return u.call(this,x,0)}}}function l(x){if(w===clearTimeout)return clearTimeout(x);if((w===a||!w)&&clearTimeout)return w=clearTimeout,clearTimeout(x);try{return w(x)}catch(H){try{return w.call(null,x)}catch(E){return w.call(this,x)}}}function g(){A&&m&&(A=!1,m.length?r=m.concat(r):C=-1,r.length&&b())}function b(){if(!A){var x=
d(g);A=!0;for(var H=r.length;H;){m=r;for(r=[];++C<H;)m&&m[C].run();C=-1;H=r.length}m=null;A=!1;l(x)}}function h(x,H){this.fun=x;this.array=H}function p(){}e=e.exports={};try{var u="function"===typeof setTimeout?setTimeout:f}catch(x){u=f}try{var w="function"===typeof clearTimeout?clearTimeout:a}catch(x){w=a}var r=[],A=!1,m,C=-1;e.nextTick=function(x){var H=Array(arguments.length-1);if(1<arguments.length)for(var E=1;E<arguments.length;E++)H[E-1]=arguments[E];r.push(new h(x,H));1!==r.length||A||d(b)};
h.prototype.run=function(){this.fun.apply(null,this.array)};e.title="browser";e.browser=!0;e.env={};e.argv=[];e.version="";e.versions={};e.on=p;e.addListener=p;e.once=p;e.off=p;e.removeListener=p;e.removeAllListeners=p;e.emit=p;e.prependListener=p;e.prependOnceListener=p;e.listeners=function(x){return[]};e.binding=function(x){throw Error("process.binding is not supported");};e.cwd=function(){return"/"};e.chdir=function(x){throw Error("process.chdir is not supported");};e.umask=function(){return 0}},
function(e,c){e.exports={}},function(e,c,f){(function(a){"undefined"===typeof a.crypto&&(a.crypto={getRandomValues:function(d){for(var l=0;l<d.length;l++)d[l]=256*Math.random()}})})("undefined"===typeof window?self:window)},function(e,c,f){function a(b){"@babel/helpers - typeof";return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(h){return typeof h}:function(h){return h&&"function"==typeof Symbol&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},a(b)}var d=
f(9),l=f(11),g=null;(function(b){function h(x){m||(m=[]);m.push(x)}var p,u,w,r,A=!1,m=[],C=function(){function x(){p=function(){}}function H(y){var k=[];return{resource_array:k,msg:JSON.stringify(y.data,function(q,t){if("object"===a(t)&&(q=null,t instanceof Uint8Array?q=t:t instanceof ArrayBuffer&&(q=new Uint8Array(t)),q)){t=w(q.length);var z=r(t);z&&(new Uint8Array(Module.HEAPU8.buffer,z,q.length)).set(q);k.push(t);return{__trn_res_id:t}}return t})}}function E(){A=!0;postMessage({type:"abort",data:{error:"Office worker has terminated unexpectedly"}})}
function I(y){if(!A)try{var k=H(y);u(k.msg)}catch(q){E(q)}}b.basePath="../";var K=b.officeWorkerPath||"";b.workerBasePath&&(b.basePath=b.workerBasePath);b.basePath=b.externalPath?b.externalPath:b.basePath+"external/";importScripts("".concat(b.basePath,"Promise.js"));b.ContinueFunc=function(y){p("ContinueFunc called");setTimeout(function(){onmessage({data:{action:"continue"}})},y)};if(b.pdfWorkerPath)var B=b.pdfWorkerPath;if(b.officeAsmPath)var F=b.officeAsmPath;b.Module={memoryInitializerPrefixURL:B,
asmjsPrefix:F,onRuntimeInitialized:function(){p||x();var y=Date.now()-g;Object(d.a)("load","time duration from start to ready: ".concat(JSON.stringify(y)));u=function(k){if(null!==k&&void 0!==k&&0!==k&&!A){var q=(k.length<<2)+1,t=Module._malloc(q);0<stringToUTF8(k,t,q)&&Module._TRN_OnMessage(t)}};w=function(k){return Module._TRN_CreateBufferResource(k)};r=function(k){return Module._TRN_GetResourcePointer(k)};p("OnReady called");onmessage=I;Module._TRN_InitWorker();for(y=0;y<m.length;++y)onmessage(m[y]);
m=null},fetchSelf:function(){g=Date.now();Object(l.a)("".concat(K,"WebOfficeWorker"),{"Wasm.wasm":5E6,"Wasm.js.mem":1E5,".js.mem":5E6,".mem":3E6,disableObjectURLBlobs:b.disableObjectURLBlobs},!!navigator.userAgent.match(/Edge/i)||b.wasmDisabled)},onAbort:E,noExitRuntime:!0}};b.onmessage=function(x){"init"===x.data.action&&(b.wasmDisabled=!x.data.wasm,b.externalPath=x.data.externalPath,b.officeAsmPath=x.data.officeAsmPath,b.pdfWorkerPath=x.data.pdfWorkerPath,b.disableObjectURLBlobs=x.data.disableObjectURLBlobs,
b.onmessage=h,C(),b.Module.fetchSelf())}})("undefined"===typeof window?self:window)}]);}).call(this || window)
