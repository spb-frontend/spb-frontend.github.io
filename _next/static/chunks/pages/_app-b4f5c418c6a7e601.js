(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{5505:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});var r=n(8754)._(n(7294)).default.createContext({})},1342:function(e,t){"use strict";function n(e){var t=void 0===e?{}:e,n=t.ampFirst,r=t.hybrid,o=t.hasQuery;return void 0!==n&&n||void 0!==r&&r&&void 0!==o&&o}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},1597:function(e,t,n){"use strict";var r=n(930);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return p},default:function(){return y}});var a=n(8754),i=n(1757)._(n(7294)),c=a._(n(7271)),f=n(5505),u=n(236),s=n(1342);function p(e){void 0===e&&(e=!1);var t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(3766);var d=["name","httpEquiv","charSet","itemProp"];function m(e,t){var n,a,c,f,u=t.inAmpMode;return e.reduce(l,[]).reverse().concat(p(u).reverse()).filter((n=new Set,a=new Set,c=new Set,f={},function(e){var t=!0,r=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){r=!0;var o=e.key.slice(e.key.indexOf("$")+1);n.has(o)?t=!1:n.add(o)}switch(e.type){case"title":case"base":a.has(e.type)?t=!1:a.add(e.type);break;case"meta":for(var i=0,u=d.length;i<u;i++){var s=d[i];if(e.props.hasOwnProperty(s)){if("charSet"===s)c.has(s)?t=!1:c.add(s);else{var p=e.props[s],l=f[s]||new Set;("name"!==s||!r)&&l.has(p)?t=!1:(l.add(p),f[s]=l)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!u&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){r(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,i.default.cloneElement(e,a)}return i.default.cloneElement(e,{key:n})})}var y=function(e){var t=e.children,n=(0,i.useContext)(f.AmpStateContext),r=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});var r=n(1757)._(n(7294)),o=r.useLayoutEffect,a=r.useEffect;function i(e){var t=e.headManager,n=e.reduceComponentsToState;function i(){if(t&&t.mountedInstances){var o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}return o(function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(function(){return t&&(t._pendingUpdate=i),function(){t&&(t._pendingUpdate=i)}}),a(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null}},3766:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});var n=function(e){}},6126:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(9499),o=n(9008),a=n.n(o);n(7294),n(7952);var i=n(5893);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function f(e){var t=e.Component,n=e.pageProps;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a(),{children:[(0,i.jsx)("meta",{name:"language",content:"Russian"}),(0,i.jsx)("meta",{name:"title",content:"SPB Frontend"}),(0,i.jsx)("meta",{name:"description",content:"Cообщество петербургских фронтенд-разработчиков"}),(0,i.jsx)("meta",{name:"robots",content:"index, follow"}),(0,i.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,i.jsx)("meta",{property:"og:title",content:"SPB Frontend"}),(0,i.jsx)("meta",{property:"og:site_name",content:"SPB Frontend"}),(0,i.jsx)("meta",{property:"og:url",content:"https://spb-frontend.ru"}),(0,i.jsx)("meta",{property:"og:description",content:"SPB Frontend. Сообщество петербургских фронтенд-разработчиков"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:image",content:"/og.jpg"}),(0,i.jsx)("meta",{property:"og:image:type",content:"image/jpeg"}),(0,i.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,i.jsx)("meta",{property:"og:image:height",content:"630"}),(0,i.jsx)("meta",{property:"og:locale",content:"ru_RU"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:title",content:"SPB Frontend"}),(0,i.jsx)("meta",{name:"twitter:description",content:"Сообщество петербургских фронтенд-разработчиков"}),(0,i.jsx)("meta",{name:"twitter:url",content:"https://spb-frontend.ru"}),(0,i.jsx)("meta",{name:"twitter:image",content:"/og.jpg"}),(0,i.jsx)("link",{rel:"preload",href:"/fonts/Formular-BoldItalic.woff2",as:"font",type:"font/woff2",crossOrigin:""}),(0,i.jsx)("link",{rel:"preload",href:"/fonts/Formular-Bold.woff2",as:"font",type:"font/woff2",crossOrigin:""}),(0,i.jsx)("link",{rel:"preload",href:"/fonts/Formular-Light.woff2",as:"font",type:"font/woff2",crossOrigin:""}),(0,i.jsx)("link",{rel:"preload",href:"/fonts/Formular-LightItalic.woff2",as:"font",type:"font/woff2",crossOrigin:""}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png?v=1"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png?v=1"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png?v=1"}),(0,i.jsx)("link",{rel:"manifest",href:"/site.webmanifest?v=1"}),(0,i.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg?v=1",color:"#7363f7"}),(0,i.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico?v=1"}),(0,i.jsx)("meta",{name:"msapplication-TileColor",content:"#7363f7"}),(0,i.jsx)("meta",{name:"theme-color",content:"#ffffff"})]}),(0,i.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n))]})}},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(6126)}])},7952:function(){},9008:function(e,t,n){e.exports=n(1597)},9499:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(1996)}),_N_E=e.O()}]);