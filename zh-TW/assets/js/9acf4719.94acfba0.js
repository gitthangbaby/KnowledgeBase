"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[3911],{8860:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var o=r(7953);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),g=a,f=d["".concat(s,".").concat(g)]||d[g]||u[g]||n;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7140:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>d});r(7953);var o=r(8860);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"How to get HAR files",sidebar_position:5},s=void 0,c={unversionedId:"adguard-for-android/solving-problems/har",id:"adguard-for-android/solving-problems/har",title:"How to get HAR files",description:"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/har.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/har",permalink:"/KnowledgeBase/zh-TW/adguard-for-android/solving-problems/har",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/har.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"How to get HAR files",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to get system logs",permalink:"/KnowledgeBase/zh-TW/adguard-for-android/solving-problems/logcat"},next:{title:"Low-level settings guide",permalink:"/KnowledgeBase/zh-TW/adguard-for-android/solving-problems/low-level-settings"}},p={},d=[{value:"What are HAR files?",id:"what-are-har-files",level:2},{value:"How to get HAR files",id:"how-to-get-har-files",level:2},{value:"How to analyze HAR files",id:"how-to-analyze-har-files",level:2}],u={toc:d},g="wrapper";function f(e){var{components:t}=e,r=i(e,["components"]);return(0,o.yg)(g,n(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){a(e,t,r[t])}))}return e}({},u,r),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,o.yg)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"HAR files are processed in accordance with ",(0,o.yg)("a",{parentName:"p",href:"https://adguard.com/en/privacy.html"},"the AdGuard Privacy Policy"),".")),(0,o.yg)("h2",{id:"what-are-har-files"},"What are HAR files?"),(0,o.yg)("p",null,"The HAR (HTTP ARchive) format is a JSON-formatted archive file for logging of a web browser's interaction with a site. The specifications of HAR format defines an archival data for HTTP transactions that used by a browser to export detailed information about web pages it loads. More detailed description of HAR file format and its specification you can find at ",(0,o.yg)("a",{parentName:"p",href:"http://www.softwareishard.com/blog/har-12-spec/"},"softwareishard.com")," website."),(0,o.yg)("h2",{id:"how-to-get-har-files"},"How to get HAR files"),(0,o.yg)("p",null,"Sometimes we need to analyze it to block specific ads that are difficult to reproduce for some reason. To get HAR files follow these steps:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Open AdGuard and go to ",(0,o.yg)("strong",{parentName:"li"},"Settings")," (\u2699 icon in the lower right corner)."),(0,o.yg)("li",{parentName:"ol"},"Tap ",(0,o.yg)("strong",{parentName:"li"},"General")," \u2192",(0,o.yg)("strong",{parentName:"li"},"Advanced")," \u2192 ",(0,o.yg)("strong",{parentName:"li"},"Low-level settings"),"."),(0,o.yg)("li",{parentName:"ol"},"Scroll down and activate ",(0,o.yg)("strong",{parentName:"li"},"Capture HAR")," in the Filtering section."),(0,o.yg)("li",{parentName:"ol"},"Open the app and perform the necessary actions to reproduce the problem."),(0,o.yg)("li",{parentName:"ol"},"Turn ",(0,o.yg)("strong",{parentName:"li"},"Capture HAR")," off."),(0,o.yg)("li",{parentName:"ol"},"Go back to ",(0,o.yg)("strong",{parentName:"li"},"Advanced"),"."),(0,o.yg)("li",{parentName:"ol"},"Tap ",(0,o.yg)("strong",{parentName:"li"},"Export logs and system info")," \u2192 ",(0,o.yg)("strong",{parentName:"li"},"Allow")," (if necessary) \u2192 ",(0,o.yg)("strong",{parentName:"li"},"Save"),".")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Please send the file with logs (that you've got as a result) to the AdGuard support service.")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message.")),(0,o.yg)("h2",{id:"how-to-analyze-har-files"},"How to analyze HAR files"),(0,o.yg)("p",null,"Here are some sources that we can recommend to analyze HAR files:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://gitgrimbo.github.io/harviewer/master/"},"HTTP Archive Viewer master")," is a HAR analyzer tool, visualizes HTTP Archive (HAR) log files created by HTTP tracking tools."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.telerik.com/fiddler"},"Fiddler")," is a web debugging proxy, lets you capture, inspect, monitor all HTTP(S) traffic between your computer and the Internet, mock requests, and diagnose network issues.")))}f.isMDXComponent=!0}}]);