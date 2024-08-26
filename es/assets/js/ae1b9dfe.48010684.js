"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[4808],{8860:(e,r,a)=>{a.d(r,{xA:()=>c,yg:()=>g});var n=a(7953);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function t(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?t(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,n,o=function(e,r){if(null==e)return{};var a,n,o={},t=Object.keys(e);for(n=0;n<t.length;n++)a=t[n],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)a=t[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var r=n.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},c=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var a=e.components,o=e.mdxType,t=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=o,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||t;return a?n.createElement(g,i(i({ref:r},c),{},{components:a})):n.createElement(g,i({ref:r},c))}));function g(e,r){var a=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var t=a.length,i=new Array(t);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<t;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6685:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>u});a(7953);var n=a(8860);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function t(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})),e}function i(e,r){if(null==e)return{};var a,n,o=function(e,r){if(null==e)return{};var a,n,o={},t=Object.keys(e);for(n=0;n<t.length;n++)a=t[n],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)a=t[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const l={title:"Posibles fugas de DNS",sidebar_position:9},s=void 0,d={unversionedId:"adguard-for-windows/solving-problems/dns-leaks",id:"adguard-for-windows/solving-problems/dns-leaks",title:"Posibles fugas de DNS",description:"Este art\xedculo trata sobre AdGuard para Windows, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver c\xf3mo funciona, descarga la aplicaci\xf3n AdGuard",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/dns-leaks.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/dns-leaks",permalink:"/KnowledgeBase/es/adguard-for-windows/solving-problems/dns-leaks",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/dns-leaks.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Posibles fugas de DNS",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"C\xf3mo crear un archivo dump",permalink:"/KnowledgeBase/es/adguard-for-windows/solving-problems/dump-file"},next:{title:"Problemas conocidos de AdGuard para Windows",permalink:"/KnowledgeBase/es/adguard-for-windows/solving-problems/known-issues"}},c={},u=[{value:"Direcci\xf3n DNS Bootstrap",id:"direcci\xf3n-dns-bootstrap",level:2},{value:"Servidor DNS fallback",id:"servidor-dns-fallback",level:2}],p={toc:u},m="wrapper";function g(e){var{components:r}=e,a=i(e,["components"]);return(0,n.yg)(m,t(function(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(r){o(e,r,a[r])}))}return e}({},p,a),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"Este art\xedculo trata sobre AdGuard para Windows, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver c\xf3mo funciona, ",(0,n.yg)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"descarga la aplicaci\xf3n AdGuard"))),(0,n.yg)("p",null,"AdGuard para Windows permite a los usuarios especificar una direcci\xf3n de servidor DNS para resolver consultas en lugar del servidor DNS del sistema, que proporciona tu ISP si no se anula en la configuraci\xf3n del sistema. El uso de un servidor DNS no predeterminado puede proteger tu tr\xe1fico DNS de la interceptaci\xf3n del ISP. Adem\xe1s, al elegir un servidor DNS cifrado y/o filtrado, obtienes otra capa de protecci\xf3n contra malos actores y anuncios molestos."),(0,n.yg)("p",null,"Muchos usuarios de AdGuard para Windows aprecian la funci\xf3n de protecci\xf3n DNS. Pero algunos de ellos se encuentran con el siguiente problema: una comprobaci\xf3n en un sitio web como ",(0,n.yg)("a",{parentName:"p",href:"https://ipleak.net/"},"https://ipleak.net/")," muestra que las solicitudes son gestionadas por el servidor DNS predeterminado en lugar del seleccionado. En este art\xedculo, te contamos por qu\xe9 ocurre esto y c\xf3mo evitarlo."),(0,n.yg)("h2",{id:"direcci\xf3n-dns-bootstrap"},"Direcci\xf3n DNS Bootstrap"),(0,n.yg)("p",null,"Las direcciones del servidor DNS pueden escribirse como IP o como nombres de dominio. En el caso de las direcciones IP no hay dificultades: AdGuard reenv\xeda la solicitud DNS directamente al servidor especificado en el m\xf3dulo de protecci\xf3n DNS. Sin embargo, las direcciones de servidor DNS cifradas, como DoT o DoH, suelen escribirse como nombres de dominio. En este caso, para resolver primero la direcci\xf3n del servidor DNS cifrado, AdGuard env\xeda una consulta DNS a la direcci\xf3n de arranque, que es de forma predeterminada un servidor DNS del sistema. Esta conexi\xf3n es lo que los servicios de control perciben como una fuga."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Para eliminar esta fuga:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"ve a ",(0,n.yg)("em",{parentName:"li"},"Configuraci\xf3n avanzada")),(0,n.yg)("li",{parentName:"ul"},"despl\xe1zate hacia abajo hasta la secci\xf3n ",(0,n.yg)("em",{parentName:"li"},"Lista de direcciones de arranque personalizadas")),(0,n.yg)("li",{parentName:"ul"},"ingresa la direcci\xf3n de arranque personalizada en formato de direcci\xf3n IP (puedes usar ",(0,n.yg)("a",{parentName:"li",href:"https://adguard-dns.io/kb/general/dns-providers/"},"la lista de proveedores de DNS conocidos"),")"),(0,n.yg)("li",{parentName:"ul"},"haz clic en ",(0,n.yg)("em",{parentName:"li"},"Guardar"))),(0,n.yg)("h2",{id:"servidor-dns-fallback"},"Servidor DNS fallback"),(0,n.yg)("p",null,"Puede ocurrir que AdGuard no pueda llegar al servidor especificado debido a una conexi\xf3n a Internet d\xe9bil, a que haya expirado el tiempo de espera establecido por defecto o a alg\xfan problema relacionado con el servidor. En este caso, se conectar\xe1 al servidor fallback, que de forma predeterminada es un servidor DNS del sistema. Esta conexi\xf3n tambi\xe9n ser\xe1 considerada por el servicio de control como una fuga."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Para eliminar esta fuga:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"ve a ",(0,n.yg)("em",{parentName:"li"},"Configuraci\xf3n avanzada")),(0,n.yg)("li",{parentName:"ul"},"despl\xe1zate hacia abajo hasta la secci\xf3n ",(0,n.yg)("em",{parentName:"li"},"Servidores fallback")),(0,n.yg)("li",{parentName:"ul"},"marca la opci\xf3n ",(0,n.yg)("em",{parentName:"li"},"Usar servidores personalizados")),(0,n.yg)("li",{parentName:"ul"},"luego busca la secci\xf3n ",(0,n.yg)("em",{parentName:"li"},"Lista de servidores fallback personalizados")," e ingresa los servidores fallback personalizados, uno por l\xednea")),(0,n.yg)("p",null,"o"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"ve a ",(0,n.yg)("em",{parentName:"li"},"Configuraci\xf3n avanzada")),(0,n.yg)("li",{parentName:"ul"},"despl\xe1zate hacia abajo hasta la secci\xf3n ",(0,n.yg)("em",{parentName:"li"},"Servidores fallback")),(0,n.yg)("li",{parentName:"ul"},"marca la opci\xf3n ",(0,n.yg)("em",{parentName:"li"},"No usar servidores alternativos"))),(0,n.yg)("p",null,"o"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"ve a ",(0,n.yg)("em",{parentName:"li"},"Configuraci\xf3n avanzada")),(0,n.yg)("li",{parentName:"ul"},"despl\xe1zate hacia abajo hasta la secci\xf3n ",(0,n.yg)("em",{parentName:"li"},"Per\xedodo de tiempo de espera del servidor DNS")),(0,n.yg)("li",{parentName:"ul"},"introduce un n\xfamero grande arbitrario")))}g.isMDXComponent=!0}}]);