"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[5194],{8860:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>s});var r=n(7953);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,s=c["".concat(l,".").concat(d)]||c[d]||g[d]||o;return n?r.createElement(s,a(a({ref:t},m),{},{components:n})):r.createElement(s,a({ref:t},m))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:i,a[1]=p;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>u,toc:()=>c});n(7953);var r=n(8860);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const p={title:"Minidump \ud30c\uc77c\uc744 \ub9cc\ub4e4\uc5b4 \ube14\ub8e8\uc2a4\ud06c\ub9b0 \uc624\ub958\ub97c \uc218\uc815\ud558\ub294 \ubc29\ubc95",sidebar_position:8},l=void 0,u={unversionedId:"guides/minidump",id:"guides/minidump",title:"Minidump \ud30c\uc77c\uc744 \ub9cc\ub4e4\uc5b4 \ube14\ub8e8\uc2a4\ud06c\ub9b0 \uc624\ub958\ub97c \uc218\uc815\ud558\ub294 \ubc29\ubc95",description:"\uc548\ud0c0\uae5d\uac8c\ub3c4 \uac70\uc758 \ubaa8\ub4e0 Windows \uc0ac\uc6a9\uc790\ub294 \ube14\ub8e8\uc2a4\ud06c\ub9b0(Blue Screen of Death, BSoD) \uc624\ub958\uc5d0 \ub300\ud574 \uc798 \uc54c\uace0 \uc788\uc2b5\ub2c8\ub2e4. BSoD\ub294 Windows \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc2dc\uc2a4\ud15c\uc774 \uc548\uc804\ud558\uac8c \uc791\ub3d9\ud558\ub294 \ub370 \uc601\ud5a5\uc744 \uc904 \uc218 \uc788\ub294 \ubb38\uc81c(\uc608: \ud0c0\uc0ac \ub4dc\ub77c\uc774\ubc84 \ucf54\ub4dc, \ud558\ub4dc\uc6e8\uc5b4 \ub610\ub294 Microsoft \ucf54\ub4dc \ubb38\uc81c)\uac00 \ubc1c\uc0dd\ud560 \ub54c \ub098\ud0c0\ub098\ub294 \uc624\ub958\uc785\ub2c8\ub2e4. \ube14\ub8e8\uc2a4\ud06c\ub9b0 \uc624\ub958\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 minidump \ud30c\uc77c\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/guides/minidump.md",sourceDirName:"guides",slug:"/guides/minidump",permalink:"/KnowledgeBase/ko/guides/minidump",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/minidump.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Minidump \ud30c\uc77c\uc744 \ub9cc\ub4e4\uc5b4 \ube14\ub8e8\uc2a4\ud06c\ub9b0 \uc624\ub958\ub97c \uc218\uc815\ud558\ub294 \ubc29\ubc95",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Google Family Link\uc5d0 HTTPS \ud544\ud130\ub9c1\uc744 \ud65c\uc131\ud654\ud558\ub294 \ubc29\ubc95",permalink:"/KnowledgeBase/ko/guides/family-link-certificate"},next:{title:"\ud478\uc2dc \uc54c\ub9bc\uc744 \ucc28\ub2e8\ud558\ub294 \ubc29\ubc95",permalink:"/KnowledgeBase/ko/guides/block-push-notifications"}},m={},c=[{value:"Minidump \ud30c\uc77c\uc774\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",id:"minidump-\ud30c\uc77c\uc774\ub780-\ubb34\uc5c7\uc778\uac00\uc694",level:2},{value:"Minidump \ud30c\uc77c\uc744 \uc0dd\uc131\ud558\ub3c4\ub85d Windows\ub97c \uc124\uc815\ud558\ub294 \ubc29\ubc95",id:"minidump-\ud30c\uc77c\uc744-\uc0dd\uc131\ud558\ub3c4\ub85d-windows\ub97c-\uc124\uc815\ud558\ub294-\ubc29\ubc95",level:2}],g={toc:c},d="wrapper";function s(e){var{components:t}=e,n=a(e,["components"]);return(0,r.yg)(d,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\uc548\ud0c0\uae5d\uac8c\ub3c4 \uac70\uc758 \ubaa8\ub4e0 Windows \uc0ac\uc6a9\uc790\ub294 ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Blue_screen_of_death"},"\ube14\ub8e8\uc2a4\ud06c\ub9b0(Blue Screen of Death, BSoD)")," \uc624\ub958\uc5d0 \ub300\ud574 \uc798 \uc54c\uace0 \uc788\uc2b5\ub2c8\ub2e4. BSoD\ub294 Windows \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc2dc\uc2a4\ud15c\uc774 \uc548\uc804\ud558\uac8c \uc791\ub3d9\ud558\ub294 \ub370 \uc601\ud5a5\uc744 \uc904 \uc218 \uc788\ub294 \ubb38\uc81c(\uc608: \ud0c0\uc0ac \ub4dc\ub77c\uc774\ubc84 \ucf54\ub4dc, \ud558\ub4dc\uc6e8\uc5b4 \ub610\ub294 Microsoft \ucf54\ub4dc \ubb38\uc81c)\uac00 \ubc1c\uc0dd\ud560 \ub54c \ub098\ud0c0\ub098\ub294 \uc624\ub958\uc785\ub2c8\ub2e4. \ube14\ub8e8\uc2a4\ud06c\ub9b0 \uc624\ub958\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 minidump \ud30c\uc77c\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.yg)("h2",{id:"minidump-\ud30c\uc77c\uc774\ub780-\ubb34\uc5c7\uc778\uac00\uc694"},"Minidump \ud30c\uc77c\uc774\ub780 \ubb34\uc5c7\uc778\uac00\uc694?"),(0,r.yg)("p",null,"Minidump \ud30c\uc77c\uc740 \uc2dc\uc2a4\ud15c \ud06c\ub798\uc2dc\uc758 \ud2b9\uc131\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ub2f4\uace0 \uc788\ub294 \ud30c\uc77c\uc785\ub2c8\ub2e4. \ube14\ub8e8\uc2a4\ud06c\ub9b0\uc774 \ub098\ud0c0\ub098\uae30 \uc9c1\uc804\uc5d0 \uc0dd\uc131\ub418\uba70 \ubb38\uc81c \ud574\uacb0\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ucd5c\uc18c\ud55c\uc758 \uc720\uc6a9\ud55c \uc815\ubcf4\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. Minidump \ud30c\uc77c\uc758 \ud655\uc7a5\uc790\ub294 \ubcf4\ud1b5 ",(0,r.yg)("em",{parentName:"p"},".dmp"),"\uc785\ub2c8\ub2e4."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Windows 10\uc5d0\uc11c\ub294 \ube14\ub8e8\uc2a4\ud06c\ub9b0\uc5d0 \uc911\uc9c0 \ucf54\ub4dc\uc640 QR \ucf54\ub4dc\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\ub294 \uc774 \uc815\ubcf4\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud2b9\uc815 \ubb38\uc81c\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uc778\ud130\ub137\uc5d0\uc11c \uac80\uc0c9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.yg)("p",null,"Minidump \ud30c\uc77c\uc744 \uc0dd\uc131\ud558\ub294 \uc635\uc158\uc740 \uae30\ubcf8\uc801\uc73c\ub85c \ube44\ud65c\uc131\ud654\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc774 \ud30c\uc77c\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uae30 \uc804\uc5d0 \uc774 \ud30c\uc77c\uc744 \ud65c\uc131\ud654\ud558\ub294 \ubc29\ubc95\uc744 \uc790\uc138\ud788 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.yg)("h2",{id:"minidump-\ud30c\uc77c\uc744-\uc0dd\uc131\ud558\ub3c4\ub85d-windows\ub97c-\uc124\uc815\ud558\ub294-\ubc29\ubc95"},"Minidump \ud30c\uc77c\uc744 \uc0dd\uc131\ud558\ub3c4\ub85d Windows\ub97c \uc124\uc815\ud558\ub294 \ubc29\ubc95"),(0,r.yg)("p",null,"BSoD \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\uc558\ub354\ub77c\ub3c4 \uc774 \uc635\uc158\uc744 \uc124\uc815\ud558\ub294 \uac83\uc774 \uc88b\uc73c\uba70, \uc774\ub294 \uc77c\ubc18\uc801\uc778 \uad8c\uc7a5 \uc0ac\ud56d\uc73c\ub85c AdGuard \uc81c\ud488\uacfc \ubc18\ub4dc\uc2dc \uad00\ub828\uc774 \uc788\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4. Minidump \ud30c\uc77c\uc744 \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ud558\ub824\uba74 \uc544\ub798 \uc9c0\uce68\uc744 \ub530\ub974\uc138\uc694."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Windows \uac80\uc0c9 \ucc3d\uc5d0 ",(0,r.yg)("em",{parentName:"p"},"sysdm.cpl"),"\uc744 \uc785\ub825\ud558\uace0 ",(0,r.yg)("strong",{parentName:"p"},"\uc5f4\uae30"),"\ub97c \ud074\ub9ad\ud569\ub2c8\ub2e4. ",(0,r.yg)("strong",{parentName:"p"},"\uc2dc\uc2a4\ud15c \uc18d\uc131 \uc81c\uc5b4\ud310 \uba54\ub274")," \ucc3d\uc774 \ud654\uba74\uc5d0 \ub098\ud0c0\ub0a9\ub2c8\ub2e4."),(0,r.yg)("admonition",{parentName:"li",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"\ub610\ub294 ",(0,r.yg)("strong",{parentName:"p"},"\uc124\uc815")," \u2192 ",(0,r.yg)("strong",{parentName:"p"},"\uc2dc\uc2a4\ud15c")," \u2192 ",(0,r.yg)("strong",{parentName:"p"},"\uc815\ubcf4")," \u2192 ",(0,r.yg)("strong",{parentName:"p"},"\uace0\uae09 \uc2dc\uc2a4\ud15c \uc124\uc815"),"\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4.")))),(0,r.yg)("p",null,":::"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"![\uc2dc\uc2a4\ud15c \uc18d\uc131 *mobile_border](https://cdn.adtidy.org/blog/new/c2huSystem_Properties.jpeg)\n")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\uace0\uae09")," \ud0ed\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\uc2dc\uc791 \ubc0f \ubcf5\uad6c")," \uc139\uc158\uc5d0\uc11c ",(0,r.yg)("strong",{parentName:"p"},"\uc124\uc815"),"\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/1dmybiStartup_and_Recovery.png",alt:"\uc2dc\uc791 \ubc0f \ubcf5\uad6c *mobile_border"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\ub2e4\uc74c \uc138 \uac00\uc9c0 \uc635\uc158\uc744 \ud65c\uc131\ud654\ud569\ub2c8\ub2e4."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c \ub85c\uadf8\uc5d0 \uc774\ubca4\ud2b8 \uae30\ub85d"),(0,r.yg)("li",{parentName:"ul"},"\uc790\ub3d9 \uc7ac\uc2dc\uc791"),(0,r.yg)("li",{parentName:"ul"},"\ub514\ubc84\uae45 \uc815\ubcf4 \uae30\ub85d \u2192 \uc791\uc740 \uba54\ubaa8\ub9ac \ub364\ud504(256KB)")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/nmr4eThree_options.png",alt:"\uc138 \uac00\uc9c0 \uc635\uc158 *mobile_border"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\ud655\uc778"),"\uc744 \ud074\ub9ad\ud558\uc5ec \uc124\uc815\uc744 \uc801\uc6a9\ud569\ub2c8\ub2e4.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\ucef4\ud4e8\ud130\ub97c \ub2e4\uc2dc \uc2dc\uc791\ud569\ub2c8\ub2e4."))),(0,r.yg)("p",null,"Minidump \ud30c\uc77c\uc744 \uc131\uacf5\uc801\uc73c\ub85c \ud65c\uc131\ud654\ud588\uc2b5\ub2c8\ub2e4. \uc774\uc81c \uc2dc\uc2a4\ud15c \ud06c\ub798\uc2dc \ubc1c\uc0dd \uc2dc minidump \ud30c\uc77c\uc774 \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"\uae30\ubcf8\uc801\uc73c\ub85c minidump \ud30c\uc77c\uc740 ",(0,r.yg)("strong",{parentName:"p"},"%SystemRoot%\\Minidump")," \ud3f4\ub354\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4. \ub514\ub809\ud1a0\ub9ac \uc704\uce58\ub97c \uc6d0\ud558\ub294 \ub300\ub85c \ubcc0\uacbd\ud560 \uc218 \uc788\uc9c0\ub9cc, \ub9ce\uc740 \ud504\ub85c\uadf8\ub7a8\uc774 \uae30\ubcf8\uc801\uc73c\ub85c \uc774 \uc704\uce58\ub97c \ucc3e\ub3c4\ub85d \uc124\uc815\ub418\uc5b4 \uc788\uc73c\ubbc0\ub85c \uc704\uce58\ub97c \ubcc0\uacbd\ud558\uc9c0 \uc54a\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.")))}s.isMDXComponent=!0}}]);