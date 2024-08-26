"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[3899],{8860:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>f});var i=r(7953);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||n;return r?i.createElement(f,s(s({ref:t},d),{},{components:r})):i.createElement(f,s({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<n;c++)s[c]=r[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8038:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>u});r(7953);var i=r(8860);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={title:"What is HTTPS filtering",sidebar_position:1},l=void 0,c={unversionedId:"general/https-filtering/what-is-https-filtering",id:"general/https-filtering/what-is-https-filtering",title:"What is HTTPS filtering",description:"What is HTTPS?",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/general/https-filtering/what-is-https-filtering.md",sourceDirName:"general/https-filtering",slug:"/general/https-filtering/what-is-https-filtering",permalink:"/KnowledgeBase/zh-TW/general/https-filtering/what-is-https-filtering",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/general/https-filtering/what-is-https-filtering.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"What is HTTPS filtering",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"AdGuard filter policy",permalink:"/KnowledgeBase/zh-TW/general/ad-filtering/filter-policy"},next:{title:"Known issues",permalink:"/KnowledgeBase/zh-TW/general/https-filtering/known-issues"}},d={},u=[{value:"What is HTTPS?",id:"what-is-https",level:3},{value:"What is a security certificate?",id:"what-is-a-security-certificate",level:3},{value:"Why does AdGuard need to be able to filter HTTPS?",id:"why-does-adguard-need-to-be-able-to-filter-https",level:3},{value:"How does HTTPS filtering work?",id:"how-does-https-filtering-work",level:3},{value:"Does my traffic remain encrypted and secure?",id:"does-my-traffic-remain-encrypted-and-secure",level:3},{value:"Financial websites and websites with sensitive personal data",id:"financial-websites-and-websites-with-sensitive-personal-data",level:3},{value:"Extended Validation (EV) certificates",id:"extended-validation-ev-certificates",level:3},{value:"Problems related to HTTPS filtering",id:"problems-related-to-https-filtering",level:3},{value:"HTTPS filtering issues on Android 7+",id:"https-filtering-issues-on-android-7",level:4},{value:"How to manually check HTTPS quality?",id:"how-to-manually-check-https-quality",level:3}],p={toc:u},h="wrapper";function f(e){var{components:t}=e,r=s(e,["components"]);return(0,i.yg)(h,n(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){a(e,t,r[t])}))}return e}({},p,r),{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h3",{id:"what-is-https"},"What is HTTPS?"),(0,i.yg)("p",null,"HTTPS (HyperText Transfer Protocol Secure) is an extension of the HTTP protocol that supports encryption to increase security. This protocol is used to securely transmit valuable information like personal data, credit card details, etc."),(0,i.yg)("p",null,"Using HTTPS is highly advantageous because encrypted traffic is protected against eavesdropping by a third party, and we can only welcome this. HTTPS acceptance has been growing in recent years, mainly because it is ",(0,i.yg)("a",{parentName:"p",href:"https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html"},"encouraged by Google")," and also due to the emergence of a free certificate authority ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Let's_Encrypt"},"Let\u2019s Encrypt"),"."),(0,i.yg)("p",null,"The diagram below describes the difference between plain HTTP protocol and secure HTTPS protocol."),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https.png",alt:"What is HTTPS?"})),(0,i.yg)("h3",{id:"what-is-a-security-certificate"},"What is a security certificate?"),(0,i.yg)("p",null,"Simply put, HTTPS means data encryption. But there\u2019s still a problem: how can you be sure that you\u2019ve established an encrypted connection with the right website? That\u2019s where security certificates come into play. A certificate serves as proof that the website is really what it tells you it is. If a website doesn\u2019t have such a certificate, or if the certificate contains incorrect information, the browser will not allow you to establish a secure connection. It is important that the certificate a website uses is issued by a certificate authority (CA) trusted by your browser. Such a CA guarantees that the SSL certificate is, indeed, issued to the website\u2019s owner."),(0,i.yg)("h3",{id:"why-does-adguard-need-to-be-able-to-filter-https"},"Why does AdGuard need to be able to filter HTTPS?"),(0,i.yg)("p",null,"Most websites are now using HTTPS, and the same applies to advertising. Here are a few popular websites where you can\u2019t remove ads without HTTPS filtering: youtube.com, facebook.com, and twitter.com."),(0,i.yg)("h3",{id:"how-does-https-filtering-work"},"How does HTTPS filtering work?"),(0,i.yg)("p",null,"If it were easy, HTTPS wouldn\u2019t be that secure. When a browser attempts to connect to a server, AdGuard establishes two secure connections: one with the browser (or another app) and the other with the server. The browser must trust AdGuard and the connections it creates. For this purpose, AdGuard generates a special (and unique) root certificate and installs it into the system and, when it is required, into some browsers (e.g., Firefox). Thus, AdGuard can see what is happening inside the secure connection and do its job \u2014 block ads and trackers."),(0,i.yg)("p",null,"For better understanding we depicted this process:"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png",alt:"How does HTTPS filtering work"})),(0,i.yg)("h3",{id:"does-my-traffic-remain-encrypted-and-secure"},"Does my traffic remain encrypted and secure?"),(0,i.yg)("p",null,"Of course! Your connection with a remote server remains encrypted and secure. AdGuard, just like your browser, checks the server\u2019s certificate before deciding whether to filter it or not."),(0,i.yg)("p",null,"However, HTTPS filtering has its drawbacks. The most important one is that it hides from the browser the actual certificate of the website. Instead, the browser sees the certificate issued by AdGuard."),(0,i.yg)("p",null,"Because of this, we have taken additional measures to improve connection security."),(0,i.yg)("h3",{id:"financial-websites-and-websites-with-sensitive-personal-data"},"Financial websites and websites with sensitive personal data"),(0,i.yg)("p",null,"By default, AdGuard doesn\u2019t filter any information on websites of banks, payment systems, or websites with valuable personal data. We maintain a list of ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/HttpsExclusions"},"thousands of exclusions"),"."),(0,i.yg)("p",null,"If you believe some website should be added to this list, please ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/HttpsExclusions/issues/new"},"let us know"),"."),(0,i.yg)("h3",{id:"extended-validation-ev-certificates"},"Extended Validation (EV) certificates"),(0,i.yg)("p",null,"AdGuard allows you to disable filtering for all websites that use extended validation certificates."),(0,i.yg)("p",null,"An EV certificate offers a higher level of security and provides more guarantees than a regular certificate, proving that the website is not fraudulent or fake."),(0,i.yg)("h3",{id:"problems-related-to-https-filtering"},"Problems related to HTTPS filtering"),(0,i.yg)("p",null,"A ",(0,i.yg)("a",{parentName:"p",href:"https://cdn.adtidy.org/public/Adguard/Blog/https/interception-ndss17.pdf"},"2017 study")," shows that 5 to 10% of HTTPS connections are established by HTTPS-filtering applications. It is usually done by various kinds of antivirus software. The bad news is that 24 out of 26 tested antiviruses reduced, in various ways, the connection security level, while two-thirds created connections prone to hacking."),(0,i.yg)("p",null,"The researchers came to a simple conclusion: the Internet security community should pay close attention to applications that filter secure connections. And the developers of such software must pay serious attention to the quality of filtering implementations."),(0,i.yg)("p",null,"We would like to note that AdGuard was not tested in the above study. We ran estimates according to their set of tests, and at the time of testing, we could have received the maximum score \u2014 A","*",". However, this score is not perfect. During the study, the researchers identified some issues that were omitted in the final evaluation."),(0,i.yg)("p",null,"Here at AdGuard, we fully agree with those conclusions. Moreover, we would like to be as open with users as possible and talk about the problems we are currently experiencing and the steps we are taking to improve the quality and security of the filtering mechanism. The list of these problems is sorted by priority."),(0,i.yg)("p",null,"Most of the problems discovered in the above study are related to certificate validation mechanisms. This is what we want to focus on first. We are working on a separate certificate validation library. Moreover, we want to make it open source. A ",(0,i.yg)("a",{parentName:"p",href:"../known-issues"},"separate article")," lists all the known drawbacks of HTTPS filtering in AdGuard and our plans to fix them."),(0,i.yg)("h4",{id:"https-filtering-issues-on-android-7"},"HTTPS filtering issues on Android 7+"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://adguard.com/en/blog/android-nougat-release-and-what-does-it-mean-for-adguard-users.html"},"Starting from Android 7"),", developers have to explicitly indicate that their apps trust user-installed certificates. Not everyone wants to, or bothers with it. What does it mean for AdGuard? AdGuard installs a user certificate to be able to filter HTTPS traffic. If an app doesn't trust this certificate, its HTTPS traffic will not be filtered. What to do?"),(0,i.yg)("p",null,"The first thing worth mentioning is that many apps (even modern ones) still trust user certificates. Nothing has changed in this regard. Almost all browsers also trust such certificates. There may be some exotic browsers that do not, but they are a rare exception to common practice."),(0,i.yg)("p",null,"Finally, if your device is rooted, you can move the AdGuard certificate to the system storage. This way, you don't have to worry about any permissions a particular app may or may not have \u2014 HTTPS traffic will be filtered for modern apps just as well as for older ones. Please keep in mind that in this case, some additional security restrictions (e.g., HPKP or ",(0,i.yg)("inlineCode",{parentName:"p"},"Expect-CT"),") apply to AdGuard."),(0,i.yg)("h3",{id:"how-to-manually-check-https-quality"},"How to manually check HTTPS quality?"),(0,i.yg)("p",null,"There are several dedicated websites where you can check the quality of your HTTPS connection. These websites check if your browser (or, in our case, your browser plus AdGuard) is susceptible to common vulnerabilities. If you plan to use any program that filters HTTPS, not necessarily AdGuard (e.g., an antivirus), we advise that you check the connection quality on these websites."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.ssllabs.com/ssltest/viewMyClient.html"},"https://www.ssllabs.com/ssltest/viewMyClient.html")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.howsmyssl.com/"},"https://www.howsmyssl.com/")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://badssl.com/"},"https://badssl.com/"))))}f.isMDXComponent=!0}}]);