"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[1375],{8860:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>m});var o=r(7953);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=p(r),u=n,m=g["".concat(s,".").concat(u)]||g[u]||c[u]||a;return r?o.createElement(m,i(i({ref:t},d),{},{components:r})):o.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2852:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>g});r(7953);var o=r(8860);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={title:"How to collect AdGuard logs",sidebar_position:3},s=void 0,p={unversionedId:"adguard-for-windows/solving-problems/adguard-logs",id:"adguard-for-windows/solving-problems/adguard-logs",title:"How to collect AdGuard logs",description:"This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/docs/adguard-for-windows/solving-problems/adguard-logs.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/adguard-logs",permalink:"/KnowledgeBase/adguard-for-windows/solving-problems/adguard-logs",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/adguard-logs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"How to collect AdGuard logs",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Certificate-related issues",permalink:"/KnowledgeBase/adguard-for-windows/solving-problems/connection-not-trusted"},next:{title:"How to collect AdGuard installation logs",permalink:"/KnowledgeBase/adguard-for-windows/solving-problems/installation-logs"}},d={},g=[{value:"Debug logs",id:"debug-logs",level:3},{value:"Trace logs",id:"trace-logs",level:3}],c={toc:g},u="wrapper";function m(e){var{components:t}=e,r=i(e,["components"]);return(0,o.yg)(u,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}({},c,r),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,o.yg)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Data and/or files provided in logs are processed in accordance with ",(0,o.yg)("a",{parentName:"p",href:"https://adguard.com/en/privacy.html"},"the AdGuard Privacy Policy"),".")),(0,o.yg)("p",null,"To analyze and diagnose different problems that may potentially arise, the AdGuard support service might need AdGuard log files. These files contain records about errors and other events that occur with the software. Below is the brief instruction describing the way to get the log files and send them to the support service if necessary."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"AdGuard is committed to protecting your privacy. We strictly follow our ",(0,o.yg)("a",{parentName:"p",href:"https://adguard.com/privacy/windows.html"},"Privacy Policy")," and do not collect any private information about users. Before sending your logs to the support team, please review the file as it may contain additional information that you don\u2019t want to share. If it contains such personal information, we recommend that you delete it first.")),(0,o.yg)("h3",{id:"debug-logs"},"Debug logs"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Open the AdGuard settings. Go to the ",(0,o.yg)("em",{parentName:"p"},"General Settings")," section, scroll down to the bottom of the screen, and switch the ",(0,o.yg)("em",{parentName:"p"},"Logging Level")," to ",(0,o.yg)("em",{parentName:"p"},"Debug"),"."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png",alt:"Debug logging level *border"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Reproduce the issue."),(0,o.yg)("p",{parentName:"li"},"We strongly advise to take note of the exact time when you reproduced the issue: it will help our support team to find relevant log entries and solve the problem faster.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Export the collected logs using the ",(0,o.yg)("em",{parentName:"p"},"Export Logs")," button."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png",alt:"Export logs *border"})),(0,o.yg)("p",{parentName:"li"},"Save the archive to any folder.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Important"),": after exporting the logs, set the logging level back to ",(0,o.yg)("em",{parentName:"p"},"Default"),". ",(0,o.yg)("em",{parentName:"p"},"Debug")," logging level will slow down the application.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Send the archive to the AdGuard support service at ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("a",{parentName:"strong",href:"mailto:support@adguard.com"},"support@adguard.com")),", describe the problem and don't forget to mention the time when you reproduced the issue."))),(0,o.yg)("h3",{id:"trace-logs"},"Trace logs"),(0,o.yg)("p",null,"Sometimes support team members may ask you to send ",(0,o.yg)("em",{parentName:"p"},"trace")," logs. Then you will need to do the following:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Stop AdGuard by right-clicking the AdGuard icon in the tray menu and choosing ",(0,o.yg)("em",{parentName:"p"},"Exit AdGuard"),":"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png",alt:"Exit AdGuard *mobile"})),(0,o.yg)("p",{parentName:"li"},"Please don't leave the service running:"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png",alt:"Stop AdGuard Service *mobile_border"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Open the console (type ",(0,o.yg)("inlineCode",{parentName:"p"},"cmd")," in the start panel).")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Run the application with the command ",(0,o.yg)("inlineCode",{parentName:"p"},'C:\\"Program Files"\\Adguard\\Adguard.exe /trace')," regardless of Windows bitness if you have installed AdGuard v7.16 for Windows or later."))),(0,o.yg)("p",null,'If you have an older version of AdGuard for Windows, run the application with the command C:\\"Program Files (x86)"\\Adguard\\Adguard.exe /trace if you are using 64-bit Windows, and C:\\"Program Files"\\Adguard\\Adguard.exe /trace if you are using 32-bit.'),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Reproduce the issue."),(0,o.yg)("p",{parentName:"li"},"We strongly advise to take note of the exact time when you reproduced the issue: it will help our support team to find relevant log entries and solve the problem faster.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Export the collected logs using the ",(0,o.yg)("em",{parentName:"p"},"Export Logs")," button."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png",alt:"Export logs *border"})),(0,o.yg)("p",{parentName:"li"},"Don't worry if the log file is large. We need to know as much detail as possible to fix your problem."))))}m.isMDXComponent=!0}}]);