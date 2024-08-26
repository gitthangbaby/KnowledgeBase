"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[3988],{8860:(e,n,r)=>{r.d(n,{xA:()=>g,yg:()=>y});var t=r(7953);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=t.createContext({}),s=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},g=function(e){var n=s(e.components);return t.createElement(o.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,y=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return r?t.createElement(y,l(l({ref:n},g),{},{components:r})):t.createElement(y,l({ref:n},g))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[d]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6205:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>g,contentTitle:()=>o,default:()=>y,frontMatter:()=>p,metadata:()=>s,toc:()=>d});r(7953);var t=r(8860);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={title:"So installieren Sie ein Proxy-Zertifikat",sidebar_position:2},o=void 0,s={unversionedId:"guides/proxy-certificate",id:"guides/proxy-certificate",title:"So installieren Sie ein Proxy-Zertifikat",description:"Unsere Desktop-Anwendungen, AdGuard f\xfcr Windows und AdGuard f\xfcr Mac, k\xf6nnen als Proxy f\xfcr andere Ger\xe4te verwendet werden. Dies bedeutet, dass Sie den Datenverkehr anderer Ger\xe4te durch AdGuard leiten k\xf6nnen (den gesamten Datenverkehr oder den Datenverkehr bestimmter Anwendungen und Browser).",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/guides/proxy-certificate.md",sourceDirName:"guides",slug:"/guides/proxy-certificate",permalink:"/KnowledgeBase/de/guides/proxy-certificate",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/proxy-certificate.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"So installieren Sie ein Proxy-Zertifikat",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"So sammeln Sie eine HAR-Datei",permalink:"/KnowledgeBase/de/guides/collect-har-file"},next:{title:"So melden Sie Websites und Apps",permalink:"/KnowledgeBase/de/guides/report-website"}},g={},d=[{value:"Herunterladen und Installieren des Zertifikats",id:"herunterladen-und-installieren-des-zertifikats",level:2},{value:"Windows",id:"windows",level:3},{value:"Mac",id:"mac",level:3},{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3}],m={toc:d},u="wrapper";function y(e){var{components:n}=e,r=l(e,["components"]);return(0,t.yg)(u,i(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){a(e,n,r[n])}))}return e}({},m,r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Unsere Desktop-Anwendungen, AdGuard f\xfcr Windows und AdGuard f\xfcr Mac, k\xf6nnen als Proxy f\xfcr andere Ger\xe4te verwendet werden. Dies bedeutet, dass Sie den Datenverkehr anderer Ger\xe4te durch AdGuard leiten k\xf6nnen (den gesamten Datenverkehr oder den Datenverkehr bestimmter Anwendungen und Browser)."),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"Diese Ger\xe4te m\xfcssen sich im selben Netzwerk befinden wie der PC oder Mac mit AdGuard.")),(0,t.yg)("p",null,"HTTP-Verkehr wird in jedem Fall gefiltert, aber damit AdGuard auch HTTPS-Verkehr filtern kann, m\xfcssen Sie das AdGuard-Zertifikat manuell auf dem angeschlossenen Ger\xe4t installieren."),(0,t.yg)("h2",{id:"herunterladen-und-installieren-des-zertifikats"},"Herunterladen und Installieren des Zertifikats"),(0,t.yg)("p",null,"Je nach Betriebssystem des Ger\xe4ts, dessen Datenverkehr Sie filtern m\xf6chten, befolgen Sie eine der folgenden Anweisungen:"),(0,t.yg)("h3",{id:"windows"},"Windows"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Notieren Sie die IP-Adresse Ihres Desktop-Computers mit installiertem AdGuard.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Stellen Sie sicher, dass der AdGuard-Schutz aktiviert ist. Auf einem Windows-Computer markieren Sie das K\xe4stchen ",(0,t.yg)("strong",{parentName:"p"},"AdGuard als HTTP-Proxy verwenden")," im Tab ",(0,t.yg)("strong",{parentName:"p"},"Netzwerk")," in den Einstellungen. F\xfcr Mac gehen Sie zu ",(0,t.yg)("strong",{parentName:"p"},"Einstellungen")," \u2192 ",(0,t.yg)("strong",{parentName:"p"},"Voreinstellungen")," \u2192 ",(0,t.yg)("strong",{parentName:"p"},"Netzwerk")," und aktivieren den ",(0,t.yg)("strong",{parentName:"p"},"HTTP-Proxy"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Folgen Sie auf demselben Computer mit AdGuard diesem Link: ",(0,t.yg)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Klicken Sie auf die Schaltfl\xe4che ",(0,t.yg)("strong",{parentName:"p"},"Herunterladen"),". Wenn der Download nicht startet, versuchen Sie einen anderen Browser, z. B. Firefox.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\xdcbertragen Sie die heruntergeladene Datei ",(0,t.yg)("strong",{parentName:"p"},"cert.cer")," auf das Windows-Ger\xe4t, dessen Datenverkehr Sie durch AdGuard leiten m\xf6chten. Sie k\xf6nnen dazu ein USB-Kabel, Bluetooth oder Cloud-Dienste verwenden.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Dr\xfccken Sie auf diesem Ger\xe4t ",(0,t.yg)("strong",{parentName:"p"},"Win"),", geben Sie ",(0,t.yg)("inlineCode",{parentName:"p"},"Computerzertifikate verwalten")," ein und dr\xfccken Sie ",(0,t.yg)("strong",{parentName:"p"},"Enter"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Auf der Seite ",(0,t.yg)("em",{parentName:"p"},"Zertifikate \u2014 Lokaler Computer")," ",(0,t.yg)("em",{parentName:"p"}," \u2192Vertraute Stammzertifizierungsstellen")," suchen Sie den Ordner",(0,t.yg)("em",{parentName:"p"},"Zertifikate"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Klicken Sie mit der rechten Maustaste auf den Ordner ",(0,t.yg)("em",{parentName:"p"},"Zertifikate")," und klicken Sie auf ",(0,t.yg)("strong",{parentName:"p"},"Alle Aufgaben")," \u279c ",(0,t.yg)("strong",{parentName:"p"},"Importieren"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Klicken Sie auf der Seite ",(0,t.yg)("em",{parentName:"p"},"Zertifikatsimport-Assistent")," auf ",(0,t.yg)("strong",{parentName:"p"},"Weiter"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Klicken Sie auf ",(0,t.yg)("strong",{parentName:"p"},"Durchsuchen"),", um das Zertifikat zu importieren.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Navigieren Sie zu der Zertifikatsdatei ",(0,t.yg)("strong",{parentName:"p"},"cert.cer"),", w\xe4hlen Sie sie aus, klicken Sie auf ",(0,t.yg)("strong",{parentName:"p"},"\xd6ffnen")," und dann auf ",(0,t.yg)("strong",{parentName:"p"},"Weiter"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Aktivieren Sie das Kontrollk\xe4stchen ",(0,t.yg)("strong",{parentName:"p"},"Alle Zertifikate im folgenden Speicher speichern"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Stellen Sie sicher, dass im Feld ",(0,t.yg)("em",{parentName:"p"},"Zertifikatspeicher")," ",(0,t.yg)("em",{parentName:"p"},"Vertrauensw\xfcrdige Stammzertifizierungsstellen")," angezeigt wird, und klicken Sie auf ",(0,t.yg)("strong",{parentName:"p"},"Weiter"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Klicken Sie auf ",(0,t.yg)("strong",{parentName:"p"},"Fertigstellen"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Dr\xfccken Sie ",(0,t.yg)("strong",{parentName:"p"},"Win")," und \xf6ffnen Sie dann ",(0,t.yg)("strong",{parentName:"p"},"Einstellungen"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"W\xe4hlen Sie ",(0,t.yg)("strong",{parentName:"p"},"Netzwerk und Internet")," \u2192 ",(0,t.yg)("strong",{parentName:"p"},"Proxy"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Deaktivieren Sie ",(0,t.yg)("em",{parentName:"p"},"Einstellungen automatisch erkennen"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Klicken Sie auf ",(0,t.yg)("strong",{parentName:"p"},"Einrichten")," im Tab ",(0,t.yg)("em",{parentName:"p"},"Proxyserver verwenden"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Aktivieren Sie diese Option. Geben Sie unter ",(0,t.yg)("strong",{parentName:"p"},"Proxy-IP-Adresse")," die IP-Adresse Ihres Desktop-Computers ein, die Sie in Schritt 1 notiert haben. Geben Sie bei ",(0,t.yg)("strong",{parentName:"p"},"Port")," den Port ein, den Sie in den Netzwerkeinstellungen der Desktop-App von AdGuard ausgew\xe4hlt haben.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Klicken Sie auf ",(0,t.yg)("strong",{parentName:"p"},"Speichern"),"."))),(0,t.yg)("h3",{id:"mac"},"Mac"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Notieren Sie sich die IP-Adresse Ihres Desktop-Computers mit installiertem AdGuard.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Stellen Sie sicher, dass der AdGuard-Schutz aktiviert ist. Auf einem Windows-Computer markieren Sie das K\xe4stchen ",(0,t.yg)("strong",{parentName:"p"},"AdGuard als HTTP-Proxy verwenden")," im Tab ",(0,t.yg)("strong",{parentName:"p"},"Netzwerk")," in den Einstellungen. F\xfcr Mac gehen Sie zu ",(0,t.yg)("strong",{parentName:"p"},"Einstellungen")," \u2192 ",(0,t.yg)("strong",{parentName:"p"},"Voreinstellungen")," \u2192 ",(0,t.yg)("strong",{parentName:"p"},"Netzwerk")," und aktivieren den ",(0,t.yg)("strong",{parentName:"p"},"HTTP-Proxy"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Folgen Sie diesem Link in einem Webbrowser: ",(0,t.yg)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Klicken Sie auf die Schaltfl\xe4che ",(0,t.yg)("strong",{parentName:"p"},"Herunterladen"),". Wenn der Download nicht startet, versuchen Sie einen anderen Browser, z. B. Firefox.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\xdcbertragen Sie die heruntergeladene Datei ",(0,t.yg)("strong",{parentName:"p"},"cert.cer")," auf das Mac-Ger\xe4t, dessen Datenverkehr Sie durch AdGuard leiten m\xf6chten. Sie k\xf6nnen dazu ein USB-Kabel, Bluetooth oder Cloud-Dienste verwenden.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Doppelklicken Sie auf die heruntergeladene Zertifikatsdatei.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Geben Sie das Administratorkennwort ein und klicken Sie dann auf ",(0,t.yg)("strong",{parentName:"p"},"Schl\xfcsselbund \xe4ndern"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\xd6ffnen Sie die ",(0,t.yg)("strong",{parentName:"p"},"Spotlight-Suche")," (das Suchsymbol in der oberen rechten Ecke), geben Sie ",(0,t.yg)("inlineCode",{parentName:"p"},"Schl\xfcsselbundverwaltung")," ein und w\xe4hlen Sie dann ",(0,t.yg)("strong",{parentName:"p"},"Schl\xfcsselbundverwaltung")," aus den Suchergebnissen.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Markieren Sie unter ",(0,t.yg)("em",{parentName:"p"},"System")," das Zertifikat, das Sie hinzugef\xfcgt haben.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Klicken Sie mit der rechten Maustaste darauf und w\xe4hlen Sie ",(0,t.yg)("strong",{parentName:"p"},"Informationen")," aus dem Kontextmen\xfc.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Erweitern Sie ",(0,t.yg)("em",{parentName:"p"},"Vertrauen"),", um die Vertrauensrichtlinien f\xfcr das Zertifikat anzuzeigen.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"W\xe4hlen Sie unter ",(0,t.yg)("em",{parentName:"p"},"Secure Sockets Layers (SSL)")," ",(0,t.yg)("strong",{parentName:"p"},"Immer vertrauen"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\xd6ffnen Sie ",(0,t.yg)("strong",{parentName:"p"},"Systemeinstellungen")," \u2192 ",(0,t.yg)("strong",{parentName:"p"},"Netzwerk")," und w\xe4hlen Sie oben die aktive Verbindung aus.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Klicken Sie auf ",(0,t.yg)("strong",{parentName:"p"},"Weitere Optionen \u2026")," und \xf6ffnen Sie den Tab ",(0,t.yg)("strong",{parentName:"p"},"Proxies"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Aktivieren Sie zwei Kontrollk\xe4stchen: ",(0,t.yg)("em",{parentName:"p"},"Webproxy (HTTP)")," und ",(0,t.yg)("em",{parentName:"p"},"Sicherer Webproxy (HTTPS)"),". Geben Sie in das Feld ",(0,t.yg)("strong",{parentName:"p"},"Server")," die IP-Adresse Ihres Computers ein, die Sie in Schritt 1 notiert haben. Geben Sie im Feld ",(0,t.yg)("strong",{parentName:"p"},"Port")," den Port ein, den Sie in den Netzwerkeinstellungen der AdGuard-App gew\xe4hlt haben."))),(0,t.yg)("h3",{id:"android"},"Android"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Notieren Sie sich die IP-Adresse Ihres Desktop-Computers mit installiertem AdGuard.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Stellen Sie sicher, dass der AdGuard-Schutz aktiviert ist. Auf einem Windows-Computer markieren Sie das K\xe4stchen ",(0,t.yg)("strong",{parentName:"p"},"AdGuard als HTTP-Proxy verwenden")," im Tab ",(0,t.yg)("strong",{parentName:"p"},"Netzwerk")," in den Einstellungen. F\xfcr Mac gehen Sie zu ",(0,t.yg)("strong",{parentName:"p"},"Einstellungen")," \u2192 ",(0,t.yg)("strong",{parentName:"p"},"Voreinstellungen")," \u2192 ",(0,t.yg)("strong",{parentName:"p"},"Netzwerk")," und aktivieren den ",(0,t.yg)("strong",{parentName:"p"},"HTTP-Proxy"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Folgen Sie auf dem Computer mit AdGuard diesem Link in einem Browser: ",(0,t.yg)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Klicken Sie auf die Schaltfl\xe4che ",(0,t.yg)("strong",{parentName:"p"},"Herunterladen"),". Wenn der Download nicht startet, versuchen Sie einen anderen Browser, z. B. Firefox.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\xdcbertragen Sie die heruntergeladene Datei ",(0,t.yg)("strong",{parentName:"p"},"cert.cer")," auf das Android-Ger\xe4t, dessen Datenverkehr Sie durch AdGuard leiten m\xf6chten. Sie k\xf6nnen dazu ein USB-Kabel, Bluetooth oder Cloud-Dienste verwenden.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Suchen Sie das zuvor heruntergeladene Zertifikat ",(0,t.yg)("strong",{parentName:"p"},"cert.cer")," und tippen Sie darauf, um die Datei zu \xf6ffnen, und folgen Sie den Anweisungen zur Installation des Zertifikats.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Android-Ger\xe4te vertrauen Zertifikaten standardm\xe4\xdfig nicht, daher wird eine Warnung angezeigt, die Sie ignorieren k\xf6nnen. Bei einigen Handys werden Sie m\xf6glicherweise aufgefordert, Ihr Ger\xe4tepasswort einzugeben. Tun Sie dies und dr\xfccken Sie anschlie\xdfend ",(0,t.yg)("strong",{parentName:"p"},"OK"),". Das Zertifikat wird installiert.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\xd6ffnen Sie die erweiterten Einstellungen des aktiven WLAN-Netzwerks.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\xc4ndern Sie den ",(0,t.yg)("strong",{parentName:"p"},"Proxy-Typ")," in ",(0,t.yg)("strong",{parentName:"p"},"Manuell"),". Geben Sie bei ",(0,t.yg)("strong",{parentName:"p"},"Proxy-Hostname")," die in Schritt 1 notierte IP-Adresse Ihres Desktop-Computers ein. Geben Sie bei ",(0,t.yg)("strong",{parentName:"p"},"Proxy-Port")," den Port ein, den Sie in den Netzwerkeinstellungen der AdGuard-Desktop-App gew\xe4hlt haben."))),(0,t.yg)("h3",{id:"ios"},"iOS"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Notieren Sie sich die IP-Adresse Ihres Desktop-Computers mit installiertem AdGuard.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Stellen Sie sicher, dass der AdGuard-Schutz aktiviert ist. Auf einem Windows-Computer markieren Sie das K\xe4stchen ",(0,t.yg)("strong",{parentName:"p"},"AdGuard als HTTP-Proxy verwenden")," im Tab ",(0,t.yg)("strong",{parentName:"p"},"Netzwerk")," in den Einstellungen. F\xfcr Mac gehen Sie zu ",(0,t.yg)("strong",{parentName:"p"},"Einstellungen")," \u2192 ",(0,t.yg)("strong",{parentName:"p"},"Voreinstellungen")," \u2192 ",(0,t.yg)("strong",{parentName:"p"},"Netzwerk")," und aktivieren den ",(0,t.yg)("strong",{parentName:"p"},"HTTP-Proxy"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Folgen Sie auf dem Computer mit AdGuard diesem Link in einem Browser: ",(0,t.yg)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Klicken Sie auf die Schaltfl\xe4che ",(0,t.yg)("strong",{parentName:"p"},"Herunterladen"),". Wenn der Download nicht startet, versuchen Sie einen anderen Browser, z. B. Firefox.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\xdcbertragen Sie die heruntergeladene Datei ",(0,t.yg)("strong",{parentName:"p"},"cert.cer")," auf das iOS-Ger\xe4t, dessen Datenverkehr Sie durch AdGuard leiten m\xf6chten. Sie k\xf6nnen dazu ein USB-Kabel, Bluetooth oder Cloud-Dienste verwenden.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\xd6ffnen Sie auf Ihrem iOS-Ger\xe4t ",(0,t.yg)("strong",{parentName:"p"},"Einstellungen")," \u2192 ",(0,t.yg)("strong",{parentName:"p"},"Heruntergeladene Profile")," und tippen Sie auf ",(0,t.yg)("strong",{parentName:"p"},"Installieren")," in der oberen rechten Ecke. Geben Sie Ihr Passwort ein, um Ihre Absicht zu best\xe4tigen. Tippen Sie auf ",(0,t.yg)("strong",{parentName:"p"},"Fertig"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\xd6ffnen Sie die ",(0,t.yg)("strong",{parentName:"p"},"Einstellungen")," \u279c ",(0,t.yg)("strong",{parentName:"p"},"Allgemein")," \u279c ",(0,t.yg)("strong",{parentName:"p"},"Info")," \u279c ",(0,t.yg)("strong",{parentName:"p"},"Zertifikatsvertrauenseinstellungen"),". Aktivieren Sie den Schalter neben ",(0,t.yg)("em",{parentName:"p"},"Adguard Personal CA"),". Das Zertifikat ist nun installiert.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\xd6ffnen Sie auf diesem Ger\xe4t die erweiterten Einstellungen des aktiven WLAN-Netzwerks.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\xc4ndern Sie den ",(0,t.yg)("strong",{parentName:"p"},"Proxy-Typ")," in ",(0,t.yg)("strong",{parentName:"p"},"Manuell"),". Geben Sie unter ",(0,t.yg)("strong",{parentName:"p"},"Proxy-Hostname")," die IP-Adresse Ihres Computers ein, die Sie in Schritt 1 notiert haben. Geben Sie bei ",(0,t.yg)("strong",{parentName:"p"},"Proxy-Port")," den Port ein, den Sie in den Netzwerkeinstellungen der AdGuard-Desktop-App gew\xe4hlt haben."))))}y.isMDXComponent=!0}}]);