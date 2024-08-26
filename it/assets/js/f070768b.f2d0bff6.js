"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9034],{8860:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>g});var n=r(7953);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,g=u["".concat(s,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8748:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>u});r(7953);var n=r(8860);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"How ad blocking works",sidebar_position:1},s=void 0,c={unversionedId:"general/ad-filtering/how-ad-blocking-works",id:"general/ad-filtering/how-ad-blocking-works",title:"How ad blocking works",description:"AdGuard has many ad-blocking products for various platforms, and each product has its own unique features. But what unites them all is that they block ads and trackers. This article describes how ad blocking works from the inside.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/general/ad-filtering/how-ad-blocking-works.md",sourceDirName:"general/ad-filtering",slug:"/general/ad-filtering/how-ad-blocking-works",permalink:"/KnowledgeBase/it/general/ad-filtering/how-ad-blocking-works",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/general/ad-filtering/how-ad-blocking-works.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"How ad blocking works",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/KnowledgeBase/it/"},next:{title:"AdGuard filters",permalink:"/KnowledgeBase/it/general/ad-filtering/adguard-filters"}},d={},u=[{value:"General principle",id:"general-principle",level:2},{value:"Filter lists",id:"filter-lists",level:2},{value:"Types of filtering rules",id:"types-of-filtering-rules",level:2},{value:"Basic filtering rules",id:"basic-filtering-rules",level:3},{value:"Cosmetic filtering rules",id:"cosmetic-filtering-rules",level:3},{value:"HTML filtering rules",id:"html-filtering-rules",level:3}],p={toc:u},f="wrapper";function g(e){var{components:t}=e,r=i(e,["components"]);return(0,n.yg)(f,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},p,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"AdGuard has many ad-blocking products for various platforms, and each product has its own unique features. But what unites them all is that they block ads and trackers. This article describes how ad blocking works from the inside."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"We don't cover DNS filtering here. It's a different way of blocking ads, with its own advantages and disadvantages. Follow this link to ",(0,n.yg)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering#how-does-dns-filtering-work"},"learn more about DNS filtering"),".")),(0,n.yg)("iframe",{width:"560",height:"315",class:"youtube-video",src:"https://www.youtube-nocookie.com/embed/Xq_CUdh0T_w",title:"Lettore video di YouTube",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.yg)("h2",{id:"general-principle"},"General principle"),(0,n.yg)("p",null,"Filter lists, also called filters, lie at the core of any ad blocker. Filters are literally lists of rules written in a special syntax. Ad blockers can understand this complex syntax. They interpret filtering rules and perform actions on web traffic based on what the rules tell them to do: block specific elements, alter web pages in certain ways, etc."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/manifestv3/adblockingworks.png",alt:"How ad blocking works"})),(0,n.yg)("h2",{id:"filter-lists"},"Filter lists"),(0,n.yg)("p",null,"To better understand ad blocking, it's important to know the underlying principles of how filters work."),(0,n.yg)("p",null,"Filtering rules that make up filters are not created automatically. They are developed by filter maintainers, including professionals and volunteers, who use browser developer consoles and other tools (such as the AdGuard's filtering log) to determine which rules will block a particular ad or tracker. This description of the process is very simplistic \u2014 some ads are particularly hard to block and require multiple rules, multiple iterations, and the use of complex syntax."),(0,n.yg)("p",null,"And even when a rule finally gets added to a filter, it doesn't mean that it stays there forever. Ads change, ways to serve the same ads on the same websites change, and the filter rules have to change, too. Sometimes rules become obsolete, a new ad appears, or a new filtering rule is needed to block the same ad. Filters are often maintained by one person, but even for a team of maintainers, it's impossible to constantly monitor the entire web. That's why many ad blockers have tools to help users easily report any filter-related issues they encounter."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/manifestv3/filtersupdates.png",alt:"Filter update scheme"})),(0,n.yg)("p",null,"AdGuard users ",(0,n.yg)("a",{parentName:"p",href:"https://reports.adguard.com/new_issue.html"},"have access to a special web reporting tool"),". Thanks to user complaints, filter developers can focus on correcting their filter lists and not on scouring the Internet for new and old unblocked ads."),(0,n.yg)("p",null,"Filters can do more than just block ads. There are filters that block tracking, social media widgets, and annoyances such as cookie notices. Different users may choose different combinations of filters to match their personal preferences. There are websites like ",(0,n.yg)("a",{parentName:"p",href:"https://filterlists.com/"},"filterlists.com")," that are dedicated to filter lists and have huge databases."),(0,n.yg)("p",null,"We develop and maintain ",(0,n.yg)("a",{parentName:"p",href:"../adguard-filters"},"our own set of filter lists")," that can be used with AdGuard or other ad blockers."),(0,n.yg)("h2",{id:"types-of-filtering-rules"},"Types of filtering rules"),(0,n.yg)("p",null,"There are many types of filtering rules that serve different purposes. Depending on the ad blocker you use, and especially on your OS, some types of rules may not be supported."),(0,n.yg)("h3",{id:"basic-filtering-rules"},"Basic filtering rules"),(0,n.yg)("p",null,"To be displayed on a web page or in an app, the ad has to be loaded from a server first. To do so, the browser or the app needs to send a web request. The most basic way of preventing an ad from appearing on your screen is to block this request so it never reaches the server, and thus there's no reply."),(0,n.yg)("p",null,"Basically, all AdGuard Ad Blocker products can block web requests according to the active filter rules. This method is very effective at stopping the ad, but it has some drawbacks. The most obvious one is: whatever place an ad was taking up will be left empty or occupied by an ad leftover."),(0,n.yg)("h3",{id:"cosmetic-filtering-rules"},"Cosmetic filtering rules"),(0,n.yg)("p",null,"Every web page has a Document Object Model (DOM), an HTML document containing the structure and elements of this page. As ads are also page elements, they get recorded in the DOM. Ad blockers can remove parts of the DOM, while filtering rules help them understand which parts are ads and should be removed, and which parts should be left intact."),(0,n.yg)("p",null,"This method allows you to avoid above-mentioned blank spaces and ad leftovers, as well as perform other more complicated tasks."),(0,n.yg)("h3",{id:"html-filtering-rules"},"HTML filtering rules"),(0,n.yg)("p",null,"In most cases, it's enough to use the above-mentioned basic and cosmetic rules to filter ads. But when it is necessary to change the HTML code of the page itself before it is loaded, you need filtering rules for HTML content. These rules allow you to specify the HTML elements to be cut out before the browser even loads the page."),(0,n.yg)("p",null,"These rules are quite complicated and require the ad blocker to be granted certain access rights, so not all platforms support them. Currently, these rules work only in the AdGuard Firefox add-on and in the AdGuard apps for Windows, Mac, and Android."),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"There are other types of filtering rules, but they require more advanced technical knowledge to understand how they work. If you are interested, ",(0,n.yg)("a",{parentName:"p",href:"../create-own-filters"},"check out our comprehensive guide on filtering rules in the linked article"),".")))}g.isMDXComponent=!0}}]);