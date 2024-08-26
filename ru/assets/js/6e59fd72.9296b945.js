"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[5395],{8860:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var o=n(7953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,y=u["".concat(s,".").concat(g)]||u[g]||m[g]||i;return n?o.createElement(y,a(a({ref:t},p),{},{components:n})):o.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>u});n(7953);var o=n(8860);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"How to block push notifications",sidebar_position:9},s=void 0,c={unversionedId:"guides/block-push-notifications",id:"guides/block-push-notifications",title:"How to block push notifications",description:"If you're seeing annoying ads and popups in the bottom right corner of your screen, they're probably push notifications from your browser. While ad blockers can't stop them, you can easily disable them through your browser settings. Check out the step-by-step guide below to turn off these push notifications.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/guides/block-push-notifications.md",sourceDirName:"guides",slug:"/guides/block-push-notifications",permalink:"/KnowledgeBase/ru/guides/block-push-notifications",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/block-push-notifications.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"How to block push notifications",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u041a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0444\u0430\u0439\u043b minidump \u0434\u043b\u044f \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u0448\u0438\u0431\u043a\u0438 BSoD",permalink:"/KnowledgeBase/ru/guides/minidump"}},p={},u=[{value:"In Google Chrome",id:"in-google-chrome",level:2},{value:"In Firefox",id:"in-firefox",level:2},{value:"\u0412 Safari",id:"\u0432-safari",level:2},{value:"In Microsoft Edge",id:"in-microsoft-edge",level:2},{value:"Blocking push notifications with AdGuard",id:"blocking-push-notifications-with-adguard",level:2},{value:"On Windows",id:"on-windows",level:3},{value:"On Mac",id:"on-mac",level:3}],m={toc:u},g="wrapper";function y(e){var{components:t}=e,n=a(e,["components"]);return(0,o.yg)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"If you're seeing annoying ads and popups in the bottom right corner of your screen, they're probably push notifications from your browser. While ad blockers can't stop them, you can easily disable them through your browser settings. Check out the step-by-step guide below to turn off these push notifications."),(0,o.yg)("h2",{id:"in-google-chrome"},"In Google Chrome"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Click the three vertical dots in the top right corner of the browser and select ",(0,o.yg)("em",{parentName:"li"},"Settings"),"."),(0,o.yg)("li",{parentName:"ol"},"Go to ",(0,o.yg)("em",{parentName:"li"},"Privacy and security")," \u2192 ",(0,o.yg)("em",{parentName:"li"},"Site settings")," \u2192 ",(0,o.yg)("em",{parentName:"li"},"Notifications"),"."),(0,o.yg)("li",{parentName:"ol"},"In ",(0,o.yg)("em",{parentName:"li"},"Default behaviour"),", select ",(0,o.yg)("em",{parentName:"li"},"Don't allow sites to send notifications"),". Alternatively, you can manage site-specific settings in ",(0,o.yg)("em",{parentName:"li"},"Customised behaviours"),".")),(0,o.yg)("h2",{id:"in-firefox"},"In Firefox"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Click the three horizontal lines in the top right corner of the navigation bar, then select ",(0,o.yg)("em",{parentName:"li"},"Settings"),"."),(0,o.yg)("li",{parentName:"ol"},"Select ",(0,o.yg)("em",{parentName:"li"},"Privacy & Security")," from the menu on the left."),(0,o.yg)("li",{parentName:"ol"},"Scroll down to the section ",(0,o.yg)("em",{parentName:"li"},"Permissions"),", then click the button ",(0,o.yg)("em",{parentName:"li"},"Settings")," next to ",(0,o.yg)("em",{parentName:"li"},"Notifications"),"."),(0,o.yg)("li",{parentName:"ol"},"To stop notifications on all previously approved websites, click ",(0,o.yg)("em",{parentName:"li"},"Remove All Websites"),". Alternatively, you can manage notifications for each website individually."),(0,o.yg)("li",{parentName:"ol"},"You can also select ",(0,o.yg)("em",{parentName:"li"},"Block new requests asking to allow notifications")," to stop all push notifications requests at once."),(0,o.yg)("li",{parentName:"ol"},"Click ",(0,o.yg)("em",{parentName:"li"},"Save Changes"),".")),(0,o.yg)("h2",{id:"\u0432-safari"},"\u0412 Safari"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Click ",(0,o.yg)("em",{parentName:"li"},"Safari")," in the menu bar \u2192 ",(0,o.yg)("em",{parentName:"li"},"System Settings"),"."),(0,o.yg)("li",{parentName:"ol"},"Go to the ",(0,o.yg)("em",{parentName:"li"},"Websites")," tab."),(0,o.yg)("li",{parentName:"ol"},"Select ",(0,o.yg)("em",{parentName:"li"},"Notifications")," from the left sidebar."),(0,o.yg)("li",{parentName:"ol"},"To block all requests, uncheck ",(0,o.yg)("em",{parentName:"li"},"Allow websites to ask for permission to send notifications"),". Alternatively, select ",(0,o.yg)("em",{parentName:"li"},"Deny")," for each site you want to block individually.")),(0,o.yg)("h2",{id:"in-microsoft-edge"},"In Microsoft Edge"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Click the three dots menu in the upper-right corner and select ",(0,o.yg)("em",{parentName:"li"},"Settings"),"."),(0,o.yg)("li",{parentName:"ol"},"In the left sidebar, click ",(0,o.yg)("em",{parentName:"li"},"Cookies and site permissions"),"."),(0,o.yg)("li",{parentName:"ol"},"Scroll down and click ",(0,o.yg)("em",{parentName:"li"},"Notifications")," under ",(0,o.yg)("em",{parentName:"li"},"Site permissions"),"."),(0,o.yg)("li",{parentName:"ol"},"Toggle off ",(0,o.yg)("em",{parentName:"li"},"Ask before sending")," to block all browser notifications within Microsoft Edge."),(0,o.yg)("li",{parentName:"ol"},"Alternatively, add domains to the ",(0,o.yg)("em",{parentName:"li"},"Block")," section for each site you want to block.")),(0,o.yg)("h2",{id:"blocking-push-notifications-with-adguard"},"Blocking push notifications with AdGuard"),(0,o.yg)("p",null,"To avoid similar ads in the future, you can also block push notifications directly from the AdGuard apps."),(0,o.yg)("h3",{id:"on-windows"},"On Windows"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Open AdGuard. Go to ",(0,o.yg)("em",{parentName:"li"},"Settings")," \u2192 ",(0,o.yg)("em",{parentName:"li"},"Stealth Mode"),"."),(0,o.yg)("li",{parentName:"ol"},"Scroll down to the ",(0,o.yg)("em",{parentName:"li"},"Browser API")," section."),(0,o.yg)("li",{parentName:"ol"},"Enable ",(0,o.yg)("em",{parentName:"li"},"Block Push API"),".")),(0,o.yg)("h3",{id:"on-mac"},"On Mac"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Open AdGuard. Go to ",(0,o.yg)("em",{parentName:"li"},"Preferences"),"."),(0,o.yg)("li",{parentName:"ol"},"In the ",(0,o.yg)("em",{parentName:"li"},"Stealth Mode")," tab, go to ",(0,o.yg)("em",{parentName:"li"},"Browser API"),"."),(0,o.yg)("li",{parentName:"ol"},"Enable ",(0,o.yg)("em",{parentName:"li"},"Block Push API"),".")))}y.isMDXComponent=!0}}]);