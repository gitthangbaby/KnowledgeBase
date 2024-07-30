"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6188],{4137:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(o),m=a,g=c["".concat(d,".").concat(m)]||c[m]||u[m]||n;return o?r.createElement(g,i(i({ref:t},p),{},{components:o})):r.createElement(g,i({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},7071:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=o(7462),a=(o(7294),o(4137));const n={title:"How to collect debug logs",sidebar_position:2},i=void 0,l={unversionedId:"adguard-for-android/solving-problems/log",id:"adguard-for-android/solving-problems/log",title:"How to collect debug logs",description:"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/log.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/log",permalink:"/KnowledgeBase/it/adguard-for-android/solving-problems/log",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/log.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to collect debug logs",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Battery and traffic consumption issues",permalink:"/KnowledgeBase/it/adguard-for-android/solving-problems/battery"},next:{title:"How to automate AdGuard for Android",permalink:"/KnowledgeBase/it/adguard-for-android/solving-problems/tasker"}},d={},s=[{value:"Collecting debug log",id:"collecting-debug-log",level:3}],p={toc:s};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,a.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Data and/or files provided in logs are processed in accordance with ",(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/en/privacy.html"},"the AdGuard Privacy Policy"),".")),(0,a.kt)("p",null,"In questo articolo, ti guideremo attraverso il processo di raccolta dei registri di debug, un passaggio essenziale per la risoluzione dei problemi complessi che potrebbero potenzialmente sorgere. Debug logs provide detailed insight into the inner workings of AdGuard for Android. If the AdGuard support team asks you to provide debug logs, simply follow these instructions."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"AdGuard si impegna a proteggere la tua privacy. We strictly follow our ",(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/privacy/android.html"},"Privacy Policy")," and do not collect any private information about users. Prima di inviare i registri al team di supporto, esamina il file poich\xe9 potrebbe contenere informazioni aggiuntive che non desideri condividere. Se contiene tali informazioni personali, ti consigliamo di eliminarle prima.")),(0,a.kt)("h3",{id:"collecting-debug-log"},"Collecting debug log"),(0,a.kt)("p",null,"To collect ",(0,a.kt)("strong",{parentName:"p"},"debug")," log and send it to us you need to perform following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("em",{parentName:"li"},"Settings")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"General")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"Advanced"),"."),(0,a.kt)("li",{parentName:"ol"},"Tap ",(0,a.kt)("em",{parentName:"li"},"Logging level")," and set it to ",(0,a.kt)("em",{parentName:"li"},"Debug"),"."),(0,a.kt)("li",{parentName:"ol"},"Reproduce the problem and try to remember the exact time it occurred."),(0,a.kt)("li",{parentName:"ol"},"Wait a while, then return to ",(0,a.kt)("em",{parentName:"li"},"Settings")," and choose the ",(0,a.kt)("em",{parentName:"li"},"Support")," tab. Tap ",(0,a.kt)("em",{parentName:"li"},"Report a bug")," and complete the required fields. Don't forget to check the ",(0,a.kt)("em",{parentName:"li"},"Send app logs and system info")," checkbox. Finally tap ",(0,a.kt)("em",{parentName:"li"},"Send"),".")),(0,a.kt)("p",null,"If you're interested in following the resolution of your issue and engaging in a dialogue with the developers, we recommend that you take the following steps after completing the first three:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Wait a while, then return to the ",(0,a.kt)("em",{parentName:"li"},"Advanced")," screen and export logs via ",(0,a.kt)("em",{parentName:"li"},"Export logs and system info"),". Then report a bug on GitHub by following these ",(0,a.kt)("a",{parentName:"li",href:"/KnowledgeBase/it/guides/report-bugs"},"instructions"),"."),(0,a.kt)("li",{parentName:"ol"},"After creating an issue on GitHub, send the log file to ",(0,a.kt)("a",{parentName:"li",href:"mailto:devteam@adguard.com."},"devteam@adguard.com.")," Includi l'ora del bug e allega un link al tuo problema o il suo numero (appare come #numero accanto al titolo). In alternativa, puoi caricare il file di registro su Google Drive e inviarlo a ",(0,a.kt)("a",{parentName:"li",href:"mailto:devteam@adguard.com."},"devteam@adguard.com.")," Add the file link to your GitHub issue")))}u.isMDXComponent=!0}}]);