(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{57:function(e,t,n){e.exports=n(93)},66:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){},86:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(46),i=n.n(o),c=(n(66),n(18)),l=n(7),u=(n(68),n(70),n(81)),s=n.n(u),h=n(80),f=n.n(h),m=n(118),p=n(116),d=n(82),v=n.n(d),y=n(111),g=(n(72),function(){return a.a.createElement("div",{className:"sidebarChat"},a.a.createElement(m.a,null),a.a.createElement("div",{className:"sidebarChat_info"},a.a.createElement("h2",null,"Room Name"),a.a.createElement("p",null,"Last message on the room")))}),E=function(){return a.a.createElement("div",{className:"sidebar"},a.a.createElement("div",{className:"sidebar_header"},a.a.createElement(m.a,{src:"https://cdn.pixabay.com/photo/2016/01/31/19/41/apple-1172060_960_720.jpg"}),a.a.createElement("div",{className:"sidebar_headerRight"},a.a.createElement(p.a,null,a.a.createElement(f.a,null)),a.a.createElement(p.a,null,a.a.createElement(s.a,null)),a.a.createElement(p.a,null,a.a.createElement(v.a,null)))),a.a.createElement("div",{className:"sidebar_search"},a.a.createElement("div",{className:"sidebar_searchContainer"},a.a.createElement(y.a,null),a.a.createElement("input",{placeholder:"Search or Start new chat",type:"text"}))),a.a.createElement("div",{className:"sidebar_chats"},a.a.createElement(g,null),a.a.createElement(g,null)))},w=n(50),b=(n(86),n(112)),_=n(113),L=n(53),x=n.n(L),N=n(54),j=n.n(N),O=n(115).a.create({baseURL:"https://whatsappclone.mhuzaifa4.repl.co"});function S(){S=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(j){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),i=new L(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return N()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(j){return{type:"throw",arg:j}}}e.wrap=l;var s={};function h(){}function f(){}function m(){}var p={};c(p,a,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(x([])));v&&v!==t&&n.call(v,a)&&(p=v);var y=m.prototype=h.prototype=Object.create(p);function g(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;this._invoke=function(a,o){function i(){return new t(function(r,i){!function r(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(h).then(function(e){s.value=e,i(s)},function(e){return r("throw",e,i,c)})}c(l.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function x(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return f.prototype=m,c(y,"constructor",m),c(m,"constructor",f),f.displayName=c(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(E.prototype),c(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new E(l(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},g(y),c(y,i,"Generator"),c(y,a,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;_(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}var k=function(e){var t=e.messages,n=a.a.useState(""),r=Object(l.a)(n,2),o=r[0],i=r[1],c=function(){var e=Object(w.a)(S().mark(function e(t){return S().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,O.post("/messages/new",{message:o,name:(Math.random()+1).toString(36).substring(7),timestamp:Date().split(" ")[4],received:Boolean(Math.round(Math.random()))});case 3:i("");case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("div",{className:"chat"},a.a.createElement("div",{className:"chat_header"},a.a.createElement(m.a,null),a.a.createElement("div",{className:"chat_headerInfo"},a.a.createElement("h3",null,"Room Name"),a.a.createElement("p",null,"Last scene")),a.a.createElement("div",{className:"chat_headerRight"},a.a.createElement(p.a,null,a.a.createElement(y.a,null)),a.a.createElement(p.a,null,a.a.createElement(b.a,null)),a.a.createElement(p.a,null,a.a.createElement(_.a,null)))),a.a.createElement("div",{className:"chat_body"},t.map(function(e,t){return a.a.createElement("p",{key:t,className:"chat_message ".concat(e.received&&"chat_receiver")},a.a.createElement("span",{className:"chat_name"}," ",e.name," "),e.message,a.a.createElement("span",{className:"chat_timestamp"}," ",e.timestamp," "))})),a.a.createElement("div",{className:"chat_footer"},a.a.createElement(x.a,null),a.a.createElement("form",null,a.a.createElement("input",{value:o,onChange:function(e){return i(e.target.value)},placeholder:"Type a message...",type:"text"}),a.a.createElement("button",{onClick:c,type:"submit"},"Send a message")),a.a.createElement(j.a,null)))},F=n(55),C=n.n(F);var G=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1];return Object(r.useEffect)(function(){O.get("/messages/sync").then(function(e){o(e.data)})},[]),Object(r.useEffect)(function(){var e=new C.a("f67bd1478faa505418f5",{cluster:"eu"}).subscribe("messages");return e.bind("inserted",function(e){o([].concat(Object(c.a)(n),[e]))}),function(){e.unbind_all(),e.unsubscribe()}},[n]),a.a.createElement("div",{className:"app"},a.a.createElement("div",{className:"app_body"},a.a.createElement(E,null),a.a.createElement(k,{messages:n})))},P=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,114)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(G,null))),P()}},[[57,3,2]]]);
//# sourceMappingURL=main.63f7b73d.chunk.js.map