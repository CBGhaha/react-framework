(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{13:function(e,t,n){},14:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),a=(r=u)&&r.__esModule?r:{default:r};var l=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),o(t,[{key:"render",value:function(){return a.default.createElement("div",null,"页面找不到")}}]),t}();t.default=l},15:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),a=(r=u)&&r.__esModule?r:{default:r};var l=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),o(t,[{key:"render",value:function(){var e=this.props.children;return a.default.createElement("div",null,a.default.cloneElement(e,{rootProps:"rootProps"}))}}]),t}();t.default=l},19:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(18)),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){return function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={component:null},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,u.Component),o(n,[{key:"componentDidMount",value:function(){var t,n=(t=r.default.mark(function t(){var n,o;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,o=n.default,this.setState({component:o});case 5:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(o,u){try{var a=e[o](u),l=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(l).then(function(e){r("next",e)},function(e){r("throw",e)});t(l)}("next")})});return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?a.default.createElement(e,this.props):null}}]),n}()};var u=n(1),a=l(u);function l(e){return e&&e.__esModule?e:{default:e}}},23:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=i(n(1)),u=n(11),a=i(n(19)),l=i(n(15)),c=i(n(14));function i(e){return e&&e.__esModule?e:{default:e}}var f=(0,a.default)(function(){return n.e(2).then(n.t.bind(null,38,7))}),p=(0,a.default)(function(){return n.e(1).then(n.t.bind(null,37,7))}),s=(0,a.default)(function(){return n.e(0).then(n.t.bind(null,36,7))}),d=[{routerName:"HomePage",url:"/"},{routerName:"Page1",url:"/page1"},{routerName:"Page2",url:"/page2"}],b=function(e){var t=e.component,n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["component"]);return o.default.createElement(u.Route,r({},n,{render:function(){return o.default.createElement(l.default,null,o.default.createElement(t,null))}}))};t.default=function(e){return o.default.createElement(u.BrowserRouter,null,o.default.createElement("div",null,o.default.createElement("ul",null,d.map(function(e,t){return o.default.createElement("li",null,o.default.createElement(u.Link,{to:e.url},e.routerName))})),o.default.createElement(u.Switch,null,o.default.createElement(u.Route,{path:"/page1",component:p}),o.default.createElement(u.Route,{exact:!0,path:"/page2",component:s}),o.default.createElement(b,{exact:!0,path:"/",component:f}),o.default.createElement(u.Route,{component:c.default}))))}},35:function(e,t,n){"use strict";var r,o=c(n(1)),u=c(n(33)),a=n(25),l=c(n(23));c(n(13));function c(e){return e&&e.__esModule?e:{default:e}}r=(0,l.default)(),u.default.render(o.default.createElement(a.AppContainer,null,o.default.createElement("div",null,r)),document.getElementById("appContent"))}},[[35,3,4]]]);
//# sourceMappingURL=main.9e5dcfdb.js.map