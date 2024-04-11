"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[3976],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(r),f=o,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||n;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<n;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3352:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var a=r(7462),o=(r(7294),r(4137));const n={title:"Safari protection",sidebar_position:1},i=void 0,l={unversionedId:"adguard-for-ios/features/safari-protection",id:"adguard-for-ios/features/safari-protection",title:"Safari protection",description:"This article is about AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/adguard-for-ios/features/safari-protection.md",sourceDirName:"adguard-for-ios/features",slug:"/adguard-for-ios/features/safari-protection",permalink:"/KnowledgeBase/ko/adguard-for-ios/features/safari-protection",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-ios/features/safari-protection.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Safari protection",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"How to use Samsung Pay with AdGuard in South Korea",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea"},next:{title:"DNS protection",permalink:"/KnowledgeBase/ko/adguard-for-ios/features/dns-protection"}},s={},d=[{value:"Content blockers",id:"content-blockers",level:3},{value:"Filters",id:"filters",level:3},{value:"User rules",id:"user-rules",level:3},{value:"Allowlist",id:"allowlist",level:3}],c={toc:d};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This article is about AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,o.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,o.kt)("h3",{id:"content-blockers"},"Content blockers"),(0,o.kt)("p",null,"Content blockers serve as 'containers' for filtering rules that do the actual job of blocking ads and tracking. AdGuard for iOS contains six content blockers: General, Privacy, Social, Security, Custom, and Other. Previously Apple only allowed each content blocker to contain a maximum of 50K filtering rules, but with iOS 15 release the upper limit has moved to 150K rules."),(0,o.kt)("p",null,"All content blockers, their statuses, which thematic filters they currently include, and a total number of used filtering rules can be found on the respective screen in ",(0,o.kt)("em",{parentName:"p"},"Advanced settings")," (tap the gear icon at the bottom right \u2192 ",(0,o.kt)("em",{parentName:"p"},"General")," \u2192 ",(0,o.kt)("em",{parentName:"p"},"Advanced settings")," \u2192 ",(0,o.kt)("em",{parentName:"p"},"Content blockers"),")."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/features/content_blockers_en.jpeg",alt:"Content blockers *mobile_border"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Keep all content blockers enabled for the best filtering quality.")),(0,o.kt)("h3",{id:"filters"},"Filters"),(0,o.kt)("p",null,"Content blockers' work is based on filters, also sometimes referred to as filter lists. Each filter is a list of filtering rules. If you have an enabled ad blocker when browsing, it constantly checks the visited pages and elements on them against these filtering rules, and blocks anything that matches. Rules are developed to block ads, trackers, and more."),(0,o.kt)("p",null,"All filters are grouped into thematic categories. To see the full list of these categories (not to be confused with content blockers), open the ",(0,o.kt)("em",{parentName:"p"},"Protection")," section by tapping the shield icon, then go to ",(0,o.kt)("em",{parentName:"p"},"Safari protection")," \u2192 ",(0,o.kt)("em",{parentName:"p"},"Filters"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/features/filters_group_en.jpeg",alt:"Filter groups *mobile_border"})),(0,o.kt)("p",null,"There are eight of them, each category unites several filters that serve and share a common purpose, i.e. blocking ads, social media widgets, cookie notices, protecting the user from online scams. To decide which filters suit your needs, read their descriptions and navigate by the labels (",(0,o.kt)("inlineCode",{parentName:"p"},"ads"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"privacy"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"recommended"),", etc.)."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"More enabled filters does not guarantee that there will be less ads. A large number of various filters enabled simultaneously reduces the quality of ad blocking.")),(0,o.kt)("p",null,"Custom filters category is empty by default for users to add there their filters by URL. You can find filters on the Internet or even try to ",(0,o.kt)("a",{parentName:"p",href:"/general/ad-filtering/create-own-filters"},"create one by yourself"),"."),(0,o.kt)("h3",{id:"user-rules"},"User rules"),(0,o.kt)("p",null,"Here you can add new rules \u2014 either by entering them manually, or by using ",(0,o.kt)("a",{parentName:"p",href:"#assistant"},"the AdGuard manual blocking tool in Safari"),". Use this tool to customize Safari filtering without adding an entire filter list."),(0,o.kt)("p",null,"Learn ",(0,o.kt)("a",{parentName:"p",href:"/general/ad-filtering/create-own-filters"},"how to create your own ad filters"),". But please note that many of them won't work in Safari on iOS."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/features/user_rules_en.jpeg",alt:"User rules screen *mobile_border"})),(0,o.kt)("h3",{id:"allowlist"},"Allowlist"),(0,o.kt)("p",null,"The third section of the ",(0,o.kt)("em",{parentName:"p"},"Safari protection")," screen. If you want to disable ad blocking on a certain website, Allowlist will be of help. It allows you to add domains and subdomains to exclusions. AdGuard for iOS has an Import/Export feature, so the allowlist from one device can be easily transferred to another."))}u.isMDXComponent=!0}}]);