(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[159],{7523:function(e,t,n){"use strict";n.d(t,{Q:function(){return d},l:function(){return h}});var r=n(1664),s=n.n(r),i=n(7294),l=n(3272),o=n(6281),c=n(7015),a=n(3424),u=n(7490),p=n.n(u),_=n(5893),f=function(e){var t=e.event,n=(0,i.useMemo)(function(){return(0,a.p)(t.date)},[t.date]),r=n.day,l=n.month,o=n.year;return(0,_.jsxs)(s(),{className:p()["blockMeetups-item"],href:"meetups/".concat(t.id),children:[(0,_.jsx)("h3",{className:p()["blockMeetups-itemTitle"],children:t.title}),(0,_.jsxs)("time",{dateTime:"".concat(o,"-").concat(l,"-").concat(r),children:[r,"\xa0",l,"\xa0",o]}),(0,_.jsx)("div",{className:p()["blockMeetups-itemPersonTitle"],children:"Участники:"}),t.talks.map(function(e,t){return(0,_.jsx)("div",{className:p()["blockMeetups-itemPersonWrapper"],children:e.persons.map(function(e,t){return!!(null!=e&&e.photo)&&(0,_.jsx)("img",{className:p()["blockMeetups-itemPersonPortrait"],src:e.photo.file.url,alt:"".concat(e.name," ").concat(e.lastname),title:"".concat(e.name," ").concat(e.lastname)},t)})},t)})]})},h=function(e){var t=e.events;return(0,_.jsx)("div",{className:p()["blockMeetups-list"],children:t.map(function(e,t){return(0,_.jsx)(f,{event:e},t)})})},d=function(e){return(0,_.jsx)("section",{children:(0,_.jsxs)(c.b,{children:[(0,_.jsxs)("div",{className:p()["blockMeetups-headingWrapper"],children:[(0,_.jsx)(l.b,{children:"Митапы"}),(0,_.jsx)(o.z,{className:p()["blockMeetups-button"],href:"/meetups",variant:"contained",type:"primary",title:"Смотреть все митапы",children:"Смотреть все"})]}),(0,_.jsx)(h,{events:e.events})]})})}},3272:function(e,t,n){"use strict";n.d(t,{b:function(){return l}}),n(7294);var r=n(7551),s=n.n(r),i=n(5893),l=function(e){return(0,i.jsx)("h2",{className:s().blockTitle,children:e.children})}},6281:function(e,t,n){"use strict";n.d(t,{z:function(){return h}});var r=n(9499),s=n(4184),i=n.n(s),l=n(1664),o=n.n(l);n(7294);var c=n(1462),a=n.n(c),u=n(5893),p=["type","variant","isFullWidth","href","className","onClick","children"];function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var h=function(e){var t,n=e.type,s=e.variant,l=e.isFullWidth,c=e.href,_=e.className,h=e.onClick,d=e.children,m=function(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(e,p);return(0,u.jsx)(o(),f(f({className:i()(_,a().buttonLink,(t={},(0,r.Z)(t,a().fullWidth,l),(0,r.Z)(t,a().contained,"contained"===s),(0,r.Z)(t,a().outlined,"outlined"===s),(0,r.Z)(t,a().primary,"primary"===n),(0,r.Z)(t,a().secondary,"secondary"===n),t)),href:c,onClick:h,title:m.title,role:"button"},m),{},{children:d}))}},7015:function(e,t,n){"use strict";n.d(t,{b:function(){return l}}),n(7294);var r=n(7782),s=n.n(r),i=n(5893),l=function(e){return(0,i.jsx)("div",{className:s()["contentBlock-container"],children:e.children})}},7016:function(e,t,n){"use strict";n.d(t,{$:function(){return f}});var r=n(4184),s=n.n(r),i=n(1664),l=n.n(i);n(7294);var o=n(7015),c=n(6747),a=n(845),u=n(6703),p=n.n(u),_=n(5893),f=function(){return(0,_.jsx)("footer",{className:p().wrapper,children:(0,_.jsxs)(o.b,{children:[(0,_.jsxs)("div",{className:p().flexWrapper,children:[(0,_.jsx)("div",{className:s()(p().footerBlock,p().first),children:(0,_.jsx)("div",{className:p().logo})}),(0,_.jsxs)("div",{className:s()(p().footerBlock,p().second),children:[(0,_.jsx)("div",{className:p().blockTitle,children:"Навигация"}),(0,_.jsx)("nav",{className:p().navWrapper,children:c.G.map(function(e,t){return(0,_.jsx)(l(),{className:p().navLink,href:e.href,title:e.title,children:e.title},t)})})]}),(0,_.jsxs)("div",{className:s()(p().footerBlock,p().third),children:[(0,_.jsx)("div",{className:p().blockTitle,children:"Социальные сети"}),(0,_.jsx)("div",{className:p().navWrapper,children:[{href:a.hJ,title:"Канал в Telegram"},{href:a.zi,title:"Чат в Telegram"},{href:a.Ib,title:"Twitter"},{href:a.VU,title:"YouTube"},{href:a.W3,title:"GitHub"}].map(function(e,t){return(0,_.jsx)(l(),{className:p().navLink,href:e.href,title:e.title,children:e.title},t)})})]})]}),(0,_.jsxs)("div",{className:p().copyrightLine,children:["\xa9 SPB Frontend, 2014—",new Date().getFullYear()]})]})})}},7543:function(e,t,n){"use strict";n.d(t,{W:function(){return k}});var r=n(9499),s=n(4184),i=n.n(s),l=n(1664),o=n.n(l),c=n(1163),a=n(7294),u=n(2508),p=n.n(u),_=n(5893),f=function(e){var t;return(0,_.jsx)("a",{className:p().link,href:e.href,style:e.color?{color:e.color}:void 0,title:e.title,children:(0,_.jsx)("div",{className:i()(p().socialIcon,(t={},(0,r.Z)(t,p().twitter,"twitter"==e.type),(0,r.Z)(t,p().telegram,"telegram"==e.type),(0,r.Z)(t,p().youtube,"youtube"==e.type),(0,r.Z)(t,p().github,"github"==e.type),t)),style:e.size?{width:"".concat(e.size,"px"),height:"".concat(e.size,"px")}:void 0})})};f.defaultProps={size:24,color:"currentColor"};var h=n(845),d=n(5030),m=n.n(d),b=function(e){return(0,_.jsxs)("div",{className:m()["socialList-wrapper"],children:[(0,_.jsx)(f,{size:e.size,color:e.color,type:"telegram",title:"Telegram",href:h.hJ}),(0,_.jsx)(f,{size:e.size,color:e.color,type:"twitter",title:"Twitter",href:h.Ib}),(0,_.jsx)(f,{size:e.size,color:e.color,type:"youtube",title:"YouTube",href:h.VU}),(0,_.jsx)(f,{size:e.size,color:e.color,type:"github",title:"GitHub",href:h.W3})]})},y=n(6747),v=n(3224),x=n.n(v),k=function(e){var t,n=(0,c.useRouter)(),s=(0,a.useState)(!1),l=s[0],u=s[1],p=(0,a.useRef)(null),f=function(){u(!1)};return(0,a.useEffect)(function(){var t=p.current;if(null!=t&&e.withUpcomingMeetup){var n=function(){var e=Math.min(window.scrollY||window.pageYOffset,300)/300*.85;t.style.backgroundColor="rgb(var(--background-color-dark) / ".concat(e,")")};return n(),window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}},[e.withUpcomingMeetup]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("header",{className:i()("theme-dark",x().header,(t={},(0,r.Z)(t,x().open,l),(0,r.Z)(t,x().transparent,e.withUpcomingMeetup),t)),ref:p,children:[(0,_.jsx)(o(),{className:x().logoLink,href:"/",onClick:f,title:"Главная страница"}),(0,_.jsx)("a",{href:"#",className:i()(x().hamburgerButton,(0,r.Z)({},x().active,l)),title:"Меню",role:"button",onClick:function(e){e.preventDefault(),u(!l)}}),(0,_.jsx)("nav",{className:x().menuList,children:y.G.map(function(e,t){return(0,_.jsxs)(o(),{href:e.href,target:e.target,rel:e.rel,className:i()(x().menuLink,(0,r.Z)({},x().active,n.asPath===e.href)),title:e.title,children:[e.withIcon&&(0,_.jsx)(e.Icon,{size:25}),"\xa0",e.title]},t)})})]}),(0,_.jsxs)("div",{className:i()(x().mobileMenuWrapper,(0,r.Z)({},x().open,l)),children:[(0,_.jsx)("nav",{className:x().mobileMenuList,children:y.G.map(function(e,t){return(0,_.jsxs)(o(),{className:x().mobileMenuLink,href:e.href,target:e.target,rel:e.rel,onClick:f,title:e.title,children:[e.withIcon&&(0,_.jsx)(e.Icon,{size:48}),"\xa0",e.title]},t)})}),(0,_.jsxs)("div",{className:x().socials,children:[(0,_.jsx)("div",{className:x().socialsTitle,children:"Подписывайтесь на нас в соцсетях:"}),(0,_.jsx)(b,{})]})]}),!e.withUpcomingMeetup&&(0,_.jsx)("div",{className:x().spacer})]})}},6747:function(e,t,n){"use strict";n.d(t,{G:function(){return l}});var r=n(9583),s=n(2585),i=n(845),l=[{href:"/meetups",title:"Митапы",target:"",rel:"",withIcon:!1,Icon:r.qqq},{href:i.e9,title:"Стать спикером",target:"_blank",rel:"noreferrer noopener nofollow",withIcon:!0,Icon:s.E8K}]},845:function(e,t,n){"use strict";n.d(t,{Ib:function(){return i},VU:function(){return l},W3:function(){return o},e9:function(){return c},hJ:function(){return r},zi:function(){return s}});var r="https://t.me/spb_frontend",s="https://t.me/spb_frontend_chat",i="https://twitter.com/spb_frontend",l="https://www.youtube.com/@spb_frontend",o="https://github.com/spb-frontend",c="https://forms.gle/aqZR6Nvjseu3hwxA9"},3424:function(e,t,n){"use strict";n.d(t,{p:function(){return s}});var r=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],s=function(e){var t=new Date(e);return{day:t.getDate(),month:r[t.getMonth()],year:t.getFullYear()}}},7490:function(e){e.exports={"blockMeetups-headingWrapper":"styles_blockMeetups-headingWrapper__KmjRg","blockMeetups-button":"styles_blockMeetups-button__Ux2_u","blockMeetups-list":"styles_blockMeetups-list__FDYNM","blockMeetups-item":"styles_blockMeetups-item__YhcdO","blockMeetups-itemTitle":"styles_blockMeetups-itemTitle__Gu_i9","blockMeetups-itemPersonTitle":"styles_blockMeetups-itemPersonTitle__kndep","blockMeetups-itemPersonWrapper":"styles_blockMeetups-itemPersonWrapper__rEyPq","blockMeetups-itemPersonPortrait":"styles_blockMeetups-itemPersonPortrait__limLs"}},7551:function(e){e.exports={blockTitle:"styles_blockTitle__indvF"}},1462:function(e){e.exports={buttonLink:"styles_buttonLink__hodWx",contained:"styles_contained__CKJZm",primary:"styles_primary__FhclU",secondary:"styles_secondary__IXxTt",outlined:"styles_outlined__6rBfs",fullWidth:"styles_fullWidth__81gVd"}},7782:function(e){e.exports={"contentBlock-container":"styles_contentBlock-container__jAIp3"}},6703:function(e){e.exports={wrapper:"styles_wrapper__tIufy",flexWrapper:"styles_flexWrapper__AjlZW",footerBlock:"styles_footerBlock__vrx9W",first:"styles_first__VkXJH",second:"styles_second__5dVgK",third:"styles_third__XcmoX",blockTitle:"styles_blockTitle__4NOm8",logo:"styles_logo__M45_K",cooperationInfo:"styles_cooperationInfo__Rb1rK",navWrapper:"styles_navWrapper__6Nyrg",navLink:"styles_navLink__LPx4N",copyrightLine:"styles_copyrightLine__PHBuB"}},3224:function(e){e.exports={header:"styles_header__hpWZn",transparent:"styles_transparent__LOK4G",open:"styles_open__WLh6k",logoLink:"styles_logoLink__PbDEz",hamburgerButton:"styles_hamburgerButton__l9HMg",active:"styles_active__g_ph3",mobileMenuWrapper:"styles_mobileMenuWrapper__C3qpH",mobileMenuList:"styles_mobileMenuList__GfwZS",socials:"styles_socials__KS2xs",mobileMenuLink:"styles_mobileMenuLink__xZags",menuList:"styles_menuList__YMg60",menuLink:"styles_menuLink___H_En",socialsTitle:"styles_socialsTitle__jUnOX",spacer:"styles_spacer__ajPeX"}},2508:function(e){e.exports={link:"styles_link__14MuA",socialIcon:"styles_socialIcon__VszPG",twitter:"styles_twitter__SqajI",telegram:"styles_telegram__jR94u",youtube:"styles_youtube__2OGu1",github:"styles_github__2Z35s"}},5030:function(e){e.exports={"socialList-wrapper":"styles_socialList-wrapper__qe87j"}}}]);