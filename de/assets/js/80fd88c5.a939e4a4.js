"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[8661],{4137:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),s=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(t),m=a,c=f["".concat(d,".").concat(m)]||f[m]||p[m]||o;return t?n.createElement(c,i(i({ref:r},u),{},{components:t})):n.createElement(c,i({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6629:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(7462),a=(t(7294),t(4137));const o={title:"So erfassen Sie Protokolle in AdGuard f\xfcr Safari",sidebar_position:4},i=void 0,l={unversionedId:"adguard-for-safari/solving-problems/logs",id:"adguard-for-safari/solving-problems/logs",title:"So erfassen Sie Protokolle in AdGuard f\xfcr Safari",description:"In diesem Artikel geht es um AdGuard f\xfcr Safari, der nur Ihren Safari-Browser sch\xfctzt. Um Ihr gesamtes Ger\xe4t zu sch\xfctzen, laden Sie die AdGuard-App herunter",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-for-safari/solving-problems/logs.md",sourceDirName:"adguard-for-safari/solving-problems",slug:"/adguard-for-safari/solving-problems/logs",permalink:"/KnowledgeBase/de/adguard-for-safari/solving-problems/logs",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-safari/solving-problems/logs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"So erfassen Sie Protokolle in AdGuard f\xfcr Safari",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Filtern wird nicht beendet, wenn AdGuard f\xfcr Safari deaktiviert ist",permalink:"/KnowledgeBase/de/adguard-for-safari/solving-problems/filters-after-disable"},next:{title:"AdGuard f\xfcr Safari funktioniert nicht in privaten Tabs unter macOS Sonoma",permalink:"/KnowledgeBase/de/adguard-for-safari/solving-problems/private-sonoma"}},d={},s=[{value:"So erstellen Sie Protokolle",id:"so-erstellen-sie-protokolle",level:3}],u={toc:s};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In diesem Artikel geht es um AdGuard f\xfcr Safari, der nur Ihren Safari-Browser sch\xfctzt. Um Ihr gesamtes Ger\xe4t zu sch\xfctzen, ",(0,a.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"laden Sie die AdGuard-App herunter"))),(0,a.kt)("p",null,"Zur Analyse und Diagnose verschiedener Probleme, die mit AdGuard f\xfcr Safari auftreten k\xf6nnen, ben\xf6tigt der AdGuard-Support m\xf6glicherweise die Protokolldateien. Diese Dateien enthalten Aufzeichnungen \xfcber Fehler und andere Software-Ereignisse. Im Folgenden finden Sie eine kurze Anleitung, wie Sie Protokolle erstellen und bei Bedarf an den Support senden k\xf6nnen."),(0,a.kt)("h3",{id:"so-erstellen-sie-protokolle"},"So erstellen Sie Protokolle"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\xd6ffnen Sie AdGuard f\xfcr Safari."),(0,a.kt)("li",{parentName:"ol"},"Bl\xe4ttern Sie nach unten und klicken Sie auf ",(0,a.kt)("em",{parentName:"li"},"Protokolle exportieren"),"."),(0,a.kt)("li",{parentName:"ol"},"W\xe4hlen Sie einen Speicherort f\xfcr die .zip-Datei und klicken Sie auf ",(0,a.kt)("em",{parentName:"li"},"Speichern"),".")),(0,a.kt)("p",null,"Jetzt k\xf6nnen Sie diese Datei an ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com")," senden oder sie an Ihren Fehlerbericht auf GitHub anh\xe4ngen."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"AdGuard is committed to protecting your privacy. We strictly follow our ",(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/privacy/safari.html"},"Privacy Policy")," and do not collect any private information about users. Before sending your logs to the support team, please review the file as it may contain additional information that you don\u2019t want to share. If it contains such personal information, we recommend that you delete it first.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdGuardForSafari/issues"},"AdGuard for Safari GitHub repo")," and click ",(0,a.kt)("em",{parentName:"li"},"New issue"),"."),(0,a.kt)("li",{parentName:"ol"},"Send the log file to ",(0,a.kt)("a",{parentName:"li",href:"mailto:devteam@adguard.com."},"devteam@adguard.com.")," Geben Sie die Uhrzeit des Fehlers an und f\xfcgen Sie einen Link zu Ihrem Problem oder dessen Nummer hinzu (sie wird neben dem Titel als #Nummer angezeigt).\nAlternativ k\xf6nnen Sie die Protokolldatei auch auf Google Drive hochladen und an ",(0,a.kt)("a",{parentName:"li",href:"mailto:devteam@adguard.com"},"devteam@adguard.com")," senden. Add the file link to your GitHub issue.")))}p.isMDXComponent=!0}}]);