"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7117],{4137:(e,n,i)=>{i.d(n,{Zo:()=>s,kt:()=>m});var t=i(7294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function u(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var o=t.createContext({}),c=function(e){var n=t.useContext(o),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},s=function(e){var n=c(e.components);return t.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),h=c(i),m=r,p=h["".concat(o,".").concat(m)]||h[m]||d[m]||a;return i?t.createElement(p,l(l({ref:n},s),{},{components:i})):t.createElement(p,l({ref:n},s))}));function m(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=h;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var c=2;c<a;c++)l[c]=i[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}h.displayName="MDXCreateElement"},1284:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var t=i(7462),r=(i(7294),i(4137));const a={title:"So blockieren Sie Push-Benachrichtigungen",sidebar_position:9},l=void 0,u={unversionedId:"guides/block-push-notifications",id:"guides/block-push-notifications",title:"So blockieren Sie Push-Benachrichtigungen",description:"Wenn Sie in der unteren rechten Ecke Ihres Bildschirms l\xe4stige Anzeigen und Pop-ups sehen, handelt es sich wahrscheinlich um Push-Benachrichtigungen von Ihrem Browser. Werbeblocker k\xf6nnen sie zwar nicht verhindern, aber Sie k\xf6nnen sie \xfcber Ihre Browsereinstellungen leicht deaktivieren. Schauen Sie sich die folgende Schritt-f\xfcr-Schritt-Anleitung an, um diese Push-Benachrichtigungen zu deaktivieren.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/guides/block-push-notifications.md",sourceDirName:"guides",slug:"/guides/block-push-notifications",permalink:"/KnowledgeBase/de/guides/block-push-notifications",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/block-push-notifications.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"So blockieren Sie Push-Benachrichtigungen",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"So erstellen Sie eine Minidump-Datei, um den BSoD-Fehler zu beheben",permalink:"/KnowledgeBase/de/guides/minidump"}},o={},c=[{value:"In Google Chrome",id:"in-google-chrome",level:2},{value:"In Firefox",id:"in-firefox",level:2},{value:"In Safari",id:"in-safari",level:2},{value:"In Microsoft Edge",id:"in-microsoft-edge",level:2},{value:"Push-Benachrichtigungen mit AdGuard blockieren",id:"push-benachrichtigungen-mit-adguard-blockieren",level:2},{value:"Unter Windows",id:"unter-windows",level:3},{value:"Unter Mac",id:"unter-mac",level:3}],s={toc:c};function d(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,t.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Wenn Sie in der unteren rechten Ecke Ihres Bildschirms l\xe4stige Anzeigen und Pop-ups sehen, handelt es sich wahrscheinlich um Push-Benachrichtigungen von Ihrem Browser. Werbeblocker k\xf6nnen sie zwar nicht verhindern, aber Sie k\xf6nnen sie \xfcber Ihre Browsereinstellungen leicht deaktivieren. Schauen Sie sich die folgende Schritt-f\xfcr-Schritt-Anleitung an, um diese Push-Benachrichtigungen zu deaktivieren."),(0,r.kt)("h2",{id:"in-google-chrome"},"In Google Chrome"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Klicken Sie auf die drei vertikalen Punkte in der oberen rechten Ecke des Browsers und w\xe4hlen Sie ",(0,r.kt)("em",{parentName:"li"},"Einstellungen"),"."),(0,r.kt)("li",{parentName:"ol"},"\xd6ffnen Sie ",(0,r.kt)("em",{parentName:"li"},"Datenschutz und Sicherheit")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"Website-Einstellungen")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"Benachrichtigungen"),"."),(0,r.kt)("li",{parentName:"ol"},"W\xe4hlen Sie unter ",(0,r.kt)("em",{parentName:"li"},"Standardeinstellung")," die Option ",(0,r.kt)("em",{parentName:"li"},"Websites d\xfcrfen keine Benachrichtigungen senden"),". Alternativ k\xf6nnen Sie Website-spezifische Einstellungen unter ",(0,r.kt)("em",{parentName:"li"},"Benutzerdefinierte Einstellungen")," verwalten.")),(0,r.kt)("h2",{id:"in-firefox"},"In Firefox"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Klicken Sie auf die drei horizontalen Linien in der oberen rechten Ecke der Navigationsleiste und w\xe4hlen Sie dann ",(0,r.kt)("em",{parentName:"li"},"Einstellungen"),"."),(0,r.kt)("li",{parentName:"ol"},"W\xe4hlen Sie ",(0,r.kt)("em",{parentName:"li"},"Datenschutz und Sicherheit")," aus dem Men\xfc auf der linken Seite."),(0,r.kt)("li",{parentName:"ol"},"Bl\xe4ttern Sie zum Abschnitt ",(0,r.kt)("em",{parentName:"li"},"Berechtigungen")," und klicken Sie dann auf die Schaltfl\xe4che ",(0,r.kt)("em",{parentName:"li"},"Einstellungen\u2026")," neben ",(0,r.kt)("em",{parentName:"li"},"Benachrichtigungen"),"."),(0,r.kt)("li",{parentName:"ol"},"Um die Benachrichtigungen f\xfcr alle zuvor genehmigten Websites zu beenden, klicken Sie auf ",(0,r.kt)("em",{parentName:"li"},"Alle Websites entfernen"),". Alternativ dazu k\xf6nnen Sie die Benachrichtigungen f\xfcr jede Website einzeln verwalten."),(0,r.kt)("li",{parentName:"ol"},"Sie k\xf6nnen auch ",(0,r.kt)("em",{parentName:"li"},"Neue Anfragen zum Anzeigen von Benachrichtigungen blockieren")," w\xe4hlen, um alle Anfragen f\xfcr Push-Benachrichtigungen auf einmal zu stoppen."),(0,r.kt)("li",{parentName:"ol"},"Klicken Sie auf ",(0,r.kt)("em",{parentName:"li"},"\xc4nderungen speichern"),".")),(0,r.kt)("h2",{id:"in-safari"},"In Safari"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Klicken Sie in der Men\xfcleiste auf ",(0,r.kt)("em",{parentName:"li"},"Safari")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"Einstellungen"),"."),(0,r.kt)("li",{parentName:"ol"},"Wechseln Sie zum Tab ",(0,r.kt)("em",{parentName:"li"},"Websites"),"."),(0,r.kt)("li",{parentName:"ol"},"W\xe4hlen Sie ",(0,r.kt)("em",{parentName:"li"},"Mitteilungen")," in der linken Seitenleiste."),(0,r.kt)("li",{parentName:"ol"},"Um alle Anfragen zu sperren, deaktivieren Sie das Kontrollk\xe4stchen ",(0,r.kt)("em",{parentName:"li"},"Websites erlauben, nach Berechtigungen zum Senden von Benachrichtigungen zu fragen"),". Alternativ k\xf6nnen Sie f\xfcr jede Website, die Sie sperren m\xf6chten, die Option ",(0,r.kt)("em",{parentName:"li"},"Ablehnen")," w\xe4hlen.")),(0,r.kt)("h2",{id:"in-microsoft-edge"},"In Microsoft Edge"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Klicken Sie auf das Drei-Punkte-Men\xfc in der oberen rechten Ecke und w\xe4hlen Sie ",(0,r.kt)("em",{parentName:"li"},"Einstellungen"),"."),(0,r.kt)("li",{parentName:"ol"},"Klicken Sie in der linken Seitenleiste auf ",(0,r.kt)("em",{parentName:"li"},"Cookies und Website-Berechtigungen"),"."),(0,r.kt)("li",{parentName:"ol"},"Bl\xe4ttern Sie nach unten und klicken Sie auf ",(0,r.kt)("em",{parentName:"li"},"Benachrichtigungen")," unter ",(0,r.kt)("em",{parentName:"li"},"Alle Berechtigungen"),"."),(0,r.kt)("li",{parentName:"ol"},"Deaktivieren Sie die Option ",(0,r.kt)("em",{parentName:"li"},"Vor dem Senden fragen"),", um alle Browser-Benachrichtigungen in Microsoft Edge zu unterbinden."),(0,r.kt)("li",{parentName:"ol"},"Alternativ k\xf6nnen Sie auch f\xfcr jede zu sperrende Website Domains zum Abschnitt ",(0,r.kt)("em",{parentName:"li"},"Blockieren")," hinzuf\xfcgen.")),(0,r.kt)("h2",{id:"push-benachrichtigungen-mit-adguard-blockieren"},"Push-Benachrichtigungen mit AdGuard blockieren"),(0,r.kt)("p",null,"Um \xe4hnliche Anzeigen in Zukunft zu vermeiden, k\xf6nnen Sie Push-Benachrichtigungen auch direkt aus den AdGuard-Apps blockieren."),(0,r.kt)("h3",{id:"unter-windows"},"Unter Windows"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\xd6ffnen Sie AdGuard. \xd6ffnen Sie ",(0,r.kt)("em",{parentName:"li"},"Einstellungen")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"Privatsph\xe4re"),"."),(0,r.kt)("li",{parentName:"ol"},"Bl\xe4ttern Sie nach unten zum Abschnitt ",(0,r.kt)("em",{parentName:"li"},"Browser-API"),"."),(0,r.kt)("li",{parentName:"ol"},"Aktivieren Sie ",(0,r.kt)("em",{parentName:"li"},"Push-API sperren"),".")),(0,r.kt)("h3",{id:"unter-mac"},"Unter Mac"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\xd6ffnen Sie AdGuard. Gehen Sie zu ",(0,r.kt)("em",{parentName:"li"},"Einstellungen"),"."),(0,r.kt)("li",{parentName:"ol"},"\xd6ffnen Sie den Tab ",(0,r.kt)("em",{parentName:"li"},"Privatsph\xe4re")," und gehen Sie zu ",(0,r.kt)("em",{parentName:"li"},"Browser-API"),"."),(0,r.kt)("li",{parentName:"ol"},"Aktivieren Sie ",(0,r.kt)("em",{parentName:"li"},"Push-API sperren"),".")))}d.isMDXComponent=!0}}]);