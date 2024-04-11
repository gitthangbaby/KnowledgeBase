"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9388],{4137:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>p});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),f=u(r),p=o,m=f["".concat(s,".").concat(p)]||f[p]||c[p]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3830:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var n=r(7462),o=(r(7294),r(4137));const a={title:"Rooted devices",sidebar_position:7},i=void 0,d={unversionedId:"adguard-for-android/features/rooted",id:"adguard-for-android/features/rooted",title:"Rooted devices",description:"Dieser Artikel behandelt AdGuard f\xfcr Android, einem multifunktionalen Werbeblocker, der Ihr Ger\xe4t auf Systemebene sch\xfctzt. Um zu sehen, wie es funktioniert, laden Sie die AdGuard-App herunter",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-for-android/features/rooted.md",sourceDirName:"adguard-for-android/features",slug:"/adguard-for-android/features/rooted",permalink:"/KnowledgeBase/de/adguard-for-android/features/rooted",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/features/rooted.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Rooted devices",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Free vs. full version",permalink:"/KnowledgeBase/de/adguard-for-android/features/free-vs-full"},next:{title:"Integration with AdGuard VPN",permalink:"/KnowledgeBase/de/adguard-for-android/features/integration-with-vpn"}},s={},u=[],l={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Dieser Artikel behandelt AdGuard f\xfcr Android, einem multifunktionalen Werbeblocker, der Ihr Ger\xe4t auf Systemebene sch\xfctzt. Um zu sehen, wie es funktioniert, ",(0,o.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"laden Sie die AdGuard-App herunter"))),(0,o.kt)("p",null,"Due to security measures of the Android OS, some AdGuard features are only available on rooted devices. Here's the list of them:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"HTTPS filtering in most apps")," requires ",(0,o.kt)("a",{parentName:"li",href:"/adguard-for-android/features/settings#security-certificates"},"installing a CA certificate into the system store"),", as most apps do not trust certificates in the user store. Installing a certificate into the system store is only possible on rooted devices"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"/adguard-for-android/features/settings#routing-mode"},(0,o.kt)("strong",{parentName:"a"},"Automatic proxy")," routing mode")," requires root access due to Android's restrictions on system-wide traffic filtering"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"/adguard-for-android/features/settings#routing-mode"},(0,o.kt)("strong",{parentName:"a"},"Manual proxy")," routing mode")," requires root access on Android 10 and above as it's no longer possible to determine the name of the app associated with a connection filtered by AdGuard")))}c.isMDXComponent=!0}}]);