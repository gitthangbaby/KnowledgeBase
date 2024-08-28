"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9208],{8860:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var a=r(7953);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(y,i(i({ref:t},u),{},{components:r})):a.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8411:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>d});r(7953);var a=r(8860);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const s={title:"Battery and traffic consumption issues",sidebar_position:1},l=void 0,c={unversionedId:"adguard-for-android/solving-problems/battery",id:"adguard-for-android/solving-problems/battery",title:"Battery and traffic consumption issues",description:"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/docs/adguard-for-android/solving-problems/battery.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/battery",permalink:"/KnowledgeBase/adguard-for-android/solving-problems/battery",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/battery.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Battery and traffic consumption issues",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/KnowledgeBase/adguard-for-android/installation"},next:{title:"How to collect debug logs",permalink:"/KnowledgeBase/adguard-for-android/solving-problems/log"}},u={},d=[{value:"Own battery usage stats screen",id:"own-battery-usage-stats-screen",level:3},{value:"How much battery resource does AdGuard really consume?",id:"how-much-battery-resource-does-adguard-really-consume",level:3},{value:"Conclusion",id:"conclusion",level:3}],p={toc:d},m="wrapper";function y(e){var{components:t}=e,r=i(e,["components"]);return(0,a.yg)(m,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},p,r),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,a.yg)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,a.yg)("p",null,"Due to built-in statistics processes, high data and/or battery consumption was often attributed to AdGuard by Android 6 and earlier. This was because AdGuard counted all the traffic it filtered from various apps. As a result, AdGuard's share of total data and battery usage was overstated, while other apps were understated."),(0,a.yg)("p",null,"With Android 7, however, this scenario has improved. Now the data reflected in Android's built-in data usage statistics is very close to reality, although there are minor discrepancies in the battery usage data."),(0,a.yg)("p",null,"However, AdGuard users can always get a true picture of the situation on the ",(0,a.yg)("em",{parentName:"p"},"Battery usage")," screen."),(0,a.yg)("h3",{id:"own-battery-usage-stats-screen"},"Own battery usage stats screen"),(0,a.yg)("p",null,"You can access it by navigating to ",(0,a.yg)("em",{parentName:"p"},"Statistics")," \u2192 ",(0,a.yg)("em",{parentName:"p"},"Battery usage"),"."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/articles/battery/1.png",alt:"Battery stats *mobile_border"})),(0,a.yg)("p",null,"Inside you will find a chart that shows the AdGuard battery resource consumption within the last 24 hours, with an option to get more detailed hour-to-hour data by tapping on the chart. Besides that, there\u2019s also a numeric breakdown of the relevant data and a short technical explanation."),(0,a.yg)("h3",{id:"how-much-battery-resource-does-adguard-really-consume"},"How much battery resource does AdGuard really consume?"),(0,a.yg)("p",null,"First, let us lay down a bit of theory and links with necessary data."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Android derives traffic consumption judging on so-called Power Profile, which is given by every manufacturer: ",(0,a.yg)("a",{parentName:"p",href:"https://source.android.com/devices/tech/power/values.html"},"https://source.android.com/devices/tech/power/values.html"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Main part of Power Profile is a set of values in mAh which define battery consumption for every component of the device: ",(0,a.yg)("a",{parentName:"p",href:"https://source.android.com/devices/tech/power/values.html"},"https://source.android.com/devices/tech/power/values.html")),(0,a.yg)("p",{parentName:"li"},"For example, from the table above:"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("em",{parentName:"p"},"wifi.active=")," 31mA additional consumption in mAh caused by WiFi data exchange."),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("em",{parentName:"p"},"radio.active=")," 100-300mA additional consumption in mAh caused by data exchange over Mobile network."),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("em",{parentName:"p"},"cpu.active=")," 100-200mA additional consumption in mAh caused by CPU load.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"AdGuard by itself almost doesn't consume any traffic, so for the sake of evaluating power consumption let's get rid of 'Mobile/Wi-Fi packets' and stick to 'CPU'."),(0,a.yg)("p",{parentName:"li"},"Formula to calculate the consumption:"),(0,a.yg)("blockquote",{parentName:"li"},(0,a.yg)("p",{parentName:"blockquote"},"\u201cCPU TIME (ms)\u201d X \u201ccpu.active\u201d / (60 ",(0,a.yg)("em",{parentName:"p"},"60")," 1000) = \u201cPOWER USE mAh\u201d")),(0,a.yg)("p",{parentName:"li"},"Let's put real numbers into this formula."),(0,a.yg)("p",{parentName:"li"},"Let's take ",(0,a.yg)("em",{parentName:"p"},"CPU total")," from the second screenshot and convert into milliseconds: 506000"),(0,a.yg)("p",{parentName:"li"},"A coefficient ",(0,a.yg)("em",{parentName:"p"},"cpu.active")," for 2GHz will be roughly equal to 225mAh"),(0,a.yg)("p",{parentName:"li"},"Final result:"),(0,a.yg)("blockquote",{parentName:"li"},(0,a.yg)("p",{parentName:"blockquote"},"506000 ",(0,a.yg)("em",{parentName:"p"},"225 / (60")," 60 * 1000) = 31,625mAh")))),(0,a.yg)("h3",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"Real consumption is ",(0,a.yg)("strong",{parentName:"p"},"several times less")," than it is shown in Android statistics. Instead of 220mAh it should be somewhere around 31-40mAh. On the other hand, browser's consumption should be not 66mAh, but ~200mAh."))}y.isMDXComponent=!0}}]);