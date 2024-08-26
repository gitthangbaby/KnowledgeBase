"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[1709],{8860:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>m});var o=r(7953);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=s(r),c=a,m=d["".concat(p,".").concat(c)]||d[c]||u[c]||n;return r?o.createElement(m,i(i({ref:t},g),{},{components:r})):o.createElement(m,i({ref:t},g))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2517:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});r(7953);var o=r(8860);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"How to get system logs",sidebar_position:4},p=void 0,s={unversionedId:"adguard-for-android/solving-problems/logcat",id:"adguard-for-android/solving-problems/logcat",title:"How to get system logs",description:"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/logcat.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/logcat",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/logcat",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/logcat.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How to get system logs",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to automate AdGuard for Android",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/tasker"},next:{title:"HAR \ud30c\uc77c \uc218\uc9d1 \ubc29\ubc95",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/har"}},g={},d=[{value:"\uae30\uae30\uc5d0\uc11c \ubc84\uadf8 \ubcf4\uace0\uc11c \ubc1b\uae30",id:"\uae30\uae30\uc5d0\uc11c-\ubc84\uadf8-\ubcf4\uace0\uc11c-\ubc1b\uae30",level:2},{value:"Capture a bug report via Logcat",id:"capture-a-bug-report-via-logcat",level:2},{value:"Alternative way for ROOT users",id:"alternative-way-for-root-users",level:3}],u={toc:d},c="wrapper";function m(e){var{components:t}=e,r=i(e,["components"]);return(0,o.yg)(c,n(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){a(e,t,r[t])}))}return e}({},u,r),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,":::\uc815\ubcf4"),(0,o.yg)("p",null,"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,o.yg)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app")),(0,o.yg)("p",null,":::"),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Data and/or files provided in logs are processed in accordance with ",(0,o.yg)("a",{parentName:"p",href:"https://adguard.com/en/privacy.html"},"the AdGuard Privacy Policy"),".")),(0,o.yg)("p",null,"Sometimes a regular log may not be sufficient to identify the origin of the problem. In such cases a system log is needed. Below are instructions on how to collect and get it: via Developer options and Logcat."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"AdGuard is committed to protecting your privacy. We strictly follow our ",(0,o.yg)("a",{parentName:"p",href:"https://adguard.com/privacy/android.html"},"Privacy Policy")," and do not collect any private information about users. Before sending your logs to the support team, please review the file as it may contain additional information that you don\u2019t want to share. If it contains such personal information, we recommend that you delete it first.")),(0,o.yg)("h2",{id:"\uae30\uae30\uc5d0\uc11c-\ubc84\uadf8-\ubcf4\uace0\uc11c-\ubc1b\uae30"},"\uae30\uae30\uc5d0\uc11c \ubc84\uadf8 \ubcf4\uace0\uc11c \ubc1b\uae30"),(0,o.yg)("p",null,"\uae30\uae30\uc5d0\uc11c \uc9c1\uc811 \ubc84\uadf8 \ubcf4\uace0\uc11c\ub97c \ubc1b\uc73c\ub824\uba74 \ub2e4\uc74c\uc744 \uc218\ud589\ud558\uc2ed\uc2dc\uc624."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Be sure you have ",(0,o.yg)("a",{parentName:"p",href:"https://developer.android.com/studio/run/device.html#developer-device-options"},"Developer options")," enabled.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"In ",(0,o.yg)("strong",{parentName:"p"},"Developer options"),", tap ",(0,o.yg)("strong",{parentName:"p"},"Take bug report"),"."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporten.png",alt:"Bug report *mobile"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Select the type of bug report you want and tap ",(0,o.yg)("strong",{parentName:"p"},"Report"),"."),(0,o.yg)("admonition",{parentName:"li",type:"note"},(0,o.yg)("p",{parentName:"admonition"},"After a moment, you will see a notification that the bug report is ready (see Figure 2).")))),(0,o.yg)("p",null,":::"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"![Bug report *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporteen.png)\n")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"To share the bug report, tap the notification."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreport3en.png",alt:"Bug report *mobile_border"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Send this log to our support team."),(0,o.yg)("admonition",{parentName:"li",type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message to support.")))),(0,o.yg)("p",null,":::"),(0,o.yg)("h2",{id:"capture-a-bug-report-via-logcat"},"Capture a bug report via Logcat"),(0,o.yg)("p",null,"On devices with Android 7 and below, it is not possible to send a bug report automatically. Then you can capture it manually via Logcat \u2014 a standard Android command-line tool that dumps a log of system messages."),(0,o.yg)("p",null,"Follow this instruction:"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Part #1: prepare the device")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Switch device to the developer mode. To do this: go to ",(0,o.yg)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,o.yg)("strong",{parentName:"p"},"About")," \u2192 tap ",(0,o.yg)("strong",{parentName:"p"},"Build Number")," 7 times.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Go to ",(0,o.yg)("strong",{parentName:"p"},"Developer Options"),".")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Enable ",(0,o.yg)("strong",{parentName:"p"},"USB debugging"),".")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Increase ",(0,o.yg)("strong",{parentName:"p"},"Logger buffer")," sizes to 4 MB per log buffer."))),(0,o.yg)("p",null,"4 MB should be enough for storing the logs we need until you're able to do the second part (getting the log from the device);"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Part #2: reproduce the problem")),(0,o.yg)("p",null,"It is important to reproduce the problem after you're done with the first part."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"\ubb38\uc81c\ub97c \uc7ac\ud604\ud569\ub2c8\ub2e4.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Remember/write down the date and time of reproduction and include it in the email to our support later."))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Part #3: get the log")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Connect your device to a PC with a USB cable.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Download ",(0,o.yg)("a",{parentName:"p",href:"https://developer.android.com/studio/releases/platform-tools#downloads"},"Android SDK Platform Tools"),". Choose the appropriate download link for your OS from the Downloads section. Once you tap the link, a ZIP file will be downloaded. You can extract the ADB (Android Debug Bridge) files from the ZIP file and store them wherever you want.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Test whether ADB is working properly: connect your Android device to your computer using a USB cable, open the Command Prompt, PowerShell or Terminal and run the following command:"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"adb devices")),(0,o.yg)("p",{parentName:"li"},"An example of a successful result:"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/logcat/logcat_step-3.png",alt:"Step 3"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Then run the following command (insert the relevant path):"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"adb logcat -v threadtime -d > C:\\Program Files\\platform-tools\\logs.txt")),(0,o.yg)("p",{parentName:"li"},"Email the created ",(0,o.yg)("inlineCode",{parentName:"p"},"txt")," file as well as the time the problem was reproduced (from part #2) to our support team at ",(0,o.yg)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"."))),(0,o.yg)("h3",{id:"alternative-way-for-root-users"},"Alternative way for ROOT users"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Download and run ",(0,o.yg)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.pluscubed.matlog"},"Logcat"),".")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Choose ",(0,o.yg)("strong",{parentName:"p"},"Record")," in the menu. Choose a name for a log file or just press ",(0,o.yg)("strong",{parentName:"p"},"OK"),". Now you can press ",(0,o.yg)("strong",{parentName:"p"},"Home")," button, CatLog will continue recording the log in background.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Reproduce the issue.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Open CatLog and press ",(0,o.yg)("strong",{parentName:"p"},"Stop record")," in the menu.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Send this log to our support team."))),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message to support.")))}m.isMDXComponent=!0}}]);