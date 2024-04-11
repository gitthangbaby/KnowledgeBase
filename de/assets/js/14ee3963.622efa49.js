"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[1704],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),m=i,g=c["".concat(d,".").concat(m)]||c[m]||p[m]||a;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9233:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(4137));const a={title:"DNS-Schutz",sidebar_position:2},o=void 0,s={unversionedId:"adguard-for-ios/features/dns-protection",id:"adguard-for-ios/features/dns-protection",title:"DNS-Schutz",description:"This article is about AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. Um zu sehen, wie es funktioniert, laden Sie die AdGuard-App herunter",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-for-ios/features/dns-protection.md",sourceDirName:"adguard-for-ios/features",slug:"/adguard-for-ios/features/dns-protection",permalink:"/KnowledgeBase/de/adguard-for-ios/features/dns-protection",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-ios/features/dns-protection.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"DNS-Schutz",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Safari protection",permalink:"/KnowledgeBase/de/adguard-for-ios/features/safari-protection"},next:{title:"Erweiterter Schutz",permalink:"/KnowledgeBase/de/adguard-for-ios/features/advanced-protection"}},d={},l=[{value:"DNS implementation",id:"dns-implementation",level:3},{value:"DNS servers",id:"dns-servers",level:3},{value:"Network settings",id:"network-settings",level:3},{value:"DNS filtering",id:"dns-filtering",level:3},{value:"DNS filters",id:"dns-filters",level:4},{value:"Allowlist and Blocklist",id:"allowlist-blocklist",level:4}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This article is about AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. Um zu sehen, wie es funktioniert, ",(0,i.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"laden Sie die AdGuard-App herunter"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering/"},"DNS protection module")," enhances your privacy by encrypting your DNS traffic. Im Gegensatz zum Blockieren von Inhalten in Safari funktioniert der DNS-Schutz systemweit, also \xfcber Safari hinaus, in Apps und anderen Browsern. Sie m\xfcssen dieses Modul erst aktivieren, bevor Sie es verwenden k\xf6nnen. You can do this on the home screen by tapping the shield icon at the top of the screen, or by going to the ",(0,i.kt)("em",{parentName:"p"},"Protection")," \u2192 ",(0,i.kt)("em",{parentName:"p"},"DNS protection")," tab."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Um die DNS-Einstellungen verwalten zu k\xf6nnen, muss f\xfcr die AdGuard-Apps ein lokales VPN eingerichtet werden. Ihr Datenverkehr wird nicht \xfcber einen externen Server geleitet. Dennoch werden Sie vom System aufgefordert, die Zugriffsberechtigung zu best\xe4tigen.")),(0,i.kt)("h3",{id:"dns-implementation"},"DNS implementation"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/features/implementation_en.jpeg",alt:"DNS implementation screen *mobile_border"})),(0,i.kt)("p",null,"In diesem Abschnitt gibt es zwei Optionen: AdGuard und Nativ. Im Grunde sind dies zwei Methoden zur Einrichtung von DNS."),(0,i.kt)("p",null,"Bei der nativen Implementierung wird das DNS vom System und nicht von der App verwaltet. Das bedeutet, dass AdGuard kein lokales VPN einrichten muss. Leider k\xf6nnen Sie damit die Systembeschr\xe4nkungen nicht umgehen und AdGuard zusammen mit anderen VPN-basierten Apps verwenden. Bei aktiviertem VPN wird das native DNS ignoriert. Consequently, you won't be able to filter traffic locally or to use our brand new ",(0,i.kt)("a",{parentName:"p",href:"https://adguard.com/en/blog/dns-over-quic.html"},"DNS-over-QUIC protocol (DoQ)"),"."),(0,i.kt)("h3",{id:"dns-servers"},"DNS servers"),(0,i.kt)("p",null,"The next section you'll see on the DNS Protection screen is DNS server. Hier werden der aktuell ausgew\xe4hlte DNS-Server und die Verschl\xfcsselungsart angezeigt. Um eine der beiden Optionen zu \xe4ndern, tippen Sie auf die Schaltfl\xe4che, um den Bildschirm \u201eDNS-Server\u201d aufzurufen."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_server_en.jpeg",alt:"DNS servers *mobile_border"})),(0,i.kt)("p",null,"Die Server unterscheiden sich durch ihre Geschwindigkeit, das verwendete Protokoll, die Vertrauensw\xfcrdigkeit, die Protokollierungspolitik usw. Standardm\xe4\xdfig schl\xe4gt AdGuard mehrere DNS-Server aus den beliebtesten vor (einschlie\xdflich AdGuard DNS). Tippen Sie auf eine beliebige Option, um die Verschl\xfcsselungsart zu \xe4ndern (sofern der Eigent\xfcmer des Servers eine solche Option anbietet) oder um die Homepage des Servers anzuzeigen. We added labels such as ",(0,i.kt)("inlineCode",{parentName:"p"},"No logging policy"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Ad blocking"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Security")," to help you make a choice."),(0,i.kt)("p",null,"Dar\xfcber hinaus gibt es am unteren Rand des Bildschirms die M\xf6glichkeit, einen benutzerdefinierten DNS-Server hinzuzuf\xfcgen. Es werden regul\xe4re, DNSCrypt-, DNS-over-HTTPS-, DNS-over-TLS- und DNS-over-QUIC-Server unterst\xfctzt."),(0,i.kt)("h3",{id:"network-settings"},"Network settings"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/features/network_settings_en.jpeg",alt:"Network settings screen *mobile_border"})),(0,i.kt)("p",null,"Die Benutzer:innen k\xf6nnen ihre DNS-Sicherheit auch im Bereich \u201eNetzwerk-Einstellungen\u201d festlegen. ",(0,i.kt)("em",{parentName:"p"},"Filter mobile data")," and ",(0,i.kt)("em",{parentName:"p"},"Filter Wi-Fi")," enable or disable DNS protection for the respective network types. Further down, at ",(0,i.kt)("em",{parentName:"p"},"Wi-Fi exceptions"),", you can exclude particular Wi-Fi networks from DNS protection (for example, you might want to exclude your home network if you use ",(0,i.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-home/overview.html"},"AdGuard Home"),")."),(0,i.kt)("h3",{id:"dns-filtering"},"DNS filtering"),(0,i.kt)("p",null,"Mit der DNS-Filterung k\xf6nnen Sie Ihren DNS-Verkehr anpassen, indem Sie AdGuard DNS filter aktivieren, benutzerdefinierte DNS-Filter hinzuf\xfcgen und die Sperr-/Positivliste verwenden."),(0,i.kt)("p",null,"So finden Sie diese Funktion:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Protection")," (the shield icon in the bottom menu bar) \u2192 ",(0,i.kt)("em",{parentName:"p"},"DNS protection")," \u2192 ",(0,i.kt)("em",{parentName:"p"},"DNS filtering")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_filtering_en.jpeg",alt:"DNS filtering screen *mobile_border"})),(0,i.kt)("h4",{id:"dns-filters"},"DNS filters"),(0,i.kt)("p",null,"Similar to filters that work in Safari, DNS filters are sets of rules written according to special ",(0,i.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering-syntax/"},"syntax"),". AdGuard \xfcberwacht Ihren DNS-Verkehr und blockiert Anfragen, die einer oder mehreren Regeln entsprechen. You can use filters such as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdguardSDNSFilter"},"AdGuard DNS filter")," or add hosts files as filters. Es k\xf6nnen mehrere Filter gleichzeitig hinzugef\xfcgt werden. To know how to do it, get acquainted with ",(0,i.kt)("a",{parentName:"p",href:"adguard-for-ios/solving-problems/system-wide-filtering"},"this exhaustive manual"),"."),(0,i.kt)("h4",{id:"allowlist-blocklist"},"Allowlist and Blocklist"),(0,i.kt)("p",null,"Zus\xe4tzlich zu den DNS-Filtern k\xf6nnen Sie die DNS-Filterung gezielt beeinflussen, indem Sie einzelne Domains zur Sperrliste oder zur Positivliste hinzuf\xfcgen. Die Sperrliste unterst\xfctzt sogar dieselbe DNS-Syntax, und beide k\xf6nnen importiert und exportiert werden, genau wie die Positivliste bei der Inhaltsblockierung von Safari."))}p.isMDXComponent=!0}}]);