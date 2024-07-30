"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[5210],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),s=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),c=n,g=m["".concat(d,".").concat(c)]||m[c]||p[c]||a;return r?o.createElement(g,i(i({ref:t},u),{},{components:r})):o.createElement(g,i({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(7462),n=(r(7294),r(4137));const a={title:"How to collect debug logs",sidebar_position:2},i=void 0,l={unversionedId:"adguard-for-android/solving-problems/log",id:"adguard-for-android/solving-problems/log",title:"How to collect debug logs",description:"Dieser Artikel behandelt AdGuard f\xfcr Android, einem multifunktionalen Werbeblocker, der Ihr Ger\xe4t auf Systemebene sch\xfctzt. Um zu sehen, wie es funktioniert, laden Sie die AdGuard-App herunter",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/log.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/log",permalink:"/KnowledgeBase/de/adguard-for-android/solving-problems/log",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/log.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to collect debug logs",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Battery and traffic consumption issues",permalink:"/KnowledgeBase/de/adguard-for-android/solving-problems/battery"},next:{title:"How to automate AdGuard for Android",permalink:"/KnowledgeBase/de/adguard-for-android/solving-problems/tasker"}},d={},s=[{value:"Collecting debug log",id:"collecting-debug-log",level:3}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Dieser Artikel behandelt AdGuard f\xfcr Android, einem multifunktionalen Werbeblocker, der Ihr Ger\xe4t auf Systemebene sch\xfctzt. Um zu sehen, wie es funktioniert, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"laden Sie die AdGuard-App herunter"))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Data and/or files provided in logs are processed in accordance with ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/en/privacy.html"},"the AdGuard Privacy Policy"),".")),(0,n.kt)("p",null,"In this article, we'll guide you through the process of collecting debug logs, an essential troubleshooting step for solving complex issues that may potentially arise. Debug logs provide detailed insight into the inner workings of AdGuard for Android. If the AdGuard support team asks you to provide debug logs, simply follow these instructions."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"AdGuard is committed to protecting your privacy. We strictly follow our ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/privacy/android.html"},"Privacy Policy")," and do not collect any private information about users. Before sending your logs to the support team, please review the file as it may contain additional information that you don\u2019t want to share. If it contains such personal information, we recommend that you delete it first.")),(0,n.kt)("h3",{id:"collecting-debug-log"},"Collecting debug log"),(0,n.kt)("p",null,"To collect ",(0,n.kt)("strong",{parentName:"p"},"debug")," log and send it to us you need to perform following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("em",{parentName:"li"},"Settings")," \u2192 ",(0,n.kt)("em",{parentName:"li"},"General")," \u2192 ",(0,n.kt)("em",{parentName:"li"},"Advanced"),"."),(0,n.kt)("li",{parentName:"ol"},"Tap ",(0,n.kt)("em",{parentName:"li"},"Logging level")," and set it to ",(0,n.kt)("em",{parentName:"li"},"Debug"),"."),(0,n.kt)("li",{parentName:"ol"},"Reproduce the problem and try to remember the exact time it occurred."),(0,n.kt)("li",{parentName:"ol"},"Wait a while, then return to ",(0,n.kt)("em",{parentName:"li"},"Settings")," and choose the ",(0,n.kt)("em",{parentName:"li"},"Support")," tab. Tap ",(0,n.kt)("em",{parentName:"li"},"Report a bug")," and complete the required fields. Don't forget to check the ",(0,n.kt)("em",{parentName:"li"},"Send app logs and system info")," checkbox. Finally tap ",(0,n.kt)("em",{parentName:"li"},"Send"),".")),(0,n.kt)("p",null,"If you're interested in following the resolution of your issue and engaging in a dialogue with the developers, we recommend that you take the following steps after completing the first three:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Wait a while, then return to the ",(0,n.kt)("em",{parentName:"li"},"Advanced")," screen and export logs via ",(0,n.kt)("em",{parentName:"li"},"Export logs and system info"),". Then report a bug on GitHub by following these ",(0,n.kt)("a",{parentName:"li",href:"/KnowledgeBase/de/guides/report-bugs"},"instructions"),"."),(0,n.kt)("li",{parentName:"ol"},"After creating an issue on GitHub, send the log file to ",(0,n.kt)("a",{parentName:"li",href:"mailto:devteam@adguard.com."},"devteam@adguard.com.")," Geben Sie die Uhrzeit des Fehlers an und f\xfcgen Sie einen Link zu Ihrem Problem oder dessen Nummer hinzu (sie wird neben dem Titel als #Nummer angezeigt). Alternativ k\xf6nnen Sie die Protokolldatei auch auf Google Drive hochladen und an ",(0,n.kt)("a",{parentName:"li",href:"mailto:devteam@adguard.com"},"devteam@adguard.com")," senden. Add the file link to your GitHub issue")))}p.isMDXComponent=!0}}]);