(()=>{"use strict";var e,a,d,c,b,f={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var d=t[e]={id:e,loaded:!1,exports:{}};return f[e].call(d.exports,d,d.exports,r),d.loaded=!0,d.exports}r.m=f,r.c=t,e=[],r.O=(a,d,c,b)=>{if(!d){var f=1/0;for(i=0;i<e.length;i++){d=e[i][0],c=e[i][1],b=e[i][2];for(var t=!0,o=0;o<d.length;o++)(!1&b||f>=b)&&Object.keys(r.O).every((e=>r.O[e](d[o])))?d.splice(o--,1):(t=!1,b<f&&(f=b));if(t){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}b=b||0;for(var i=e.length;i>0&&e[i-1][2]>b;i--)e[i]=e[i-1];e[i]=[d,c,b]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var b=Object.create(null);r.r(b);var f={};a=a||[null,d({}),d([]),d(d)];for(var t=2&c&&e;"object"==typeof t&&!~a.indexOf(t);t=d(t))Object.getOwnPropertyNames(t).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,r.d(b,f),b},r.d=(e,a)=>{for(var d in a)r.o(a,d)&&!r.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,d)=>(r.f[d](e,a),a)),[])),r.u=e=>"assets/js/"+({81:"c6a7d8eb",159:"56892257",310:"1fa33131",397:"9024f6a0",461:"fabbea76",491:"359fb69f",764:"5d93a0b1",824:"b2d27673",932:"2e78b5cc",968:"8f85d32a",979:"e1239376",1109:"a04b8a51",1115:"2dc359ee",1213:"7823daad",1249:"8d214dab",1262:"6f1fa490",1288:"0b86c086",1305:"2f51001c",1366:"40e7ffd9",1374:"d2e80c10",1377:"842b6bc3",1399:"4ed91304",1425:"9476227c",1531:"ce783f99",1634:"c1a34166",1641:"e3351ae3",1646:"a3bb94ae",1717:"331d2294",1794:"dff809dd",1871:"72ca5af7",1976:"841ac4fe",2001:"7ae4b33a",2007:"cb39dde8",2042:"f67a633e",2078:"a258e527",2136:"6d445c5f",2138:"1a4e3797",2208:"3fd922b3",2245:"b19f06fd",2350:"71cf2c5d",2507:"d81e68b2",2660:"b66bbe5c",2771:"916eca70",2779:"8068519c",2783:"6d61c927",2856:"f36698c8",2874:"69d3bcca",2923:"4170c70b",2933:"99cd9352",3008:"00a5da7a",3031:"62ec1b8a",3161:"dba7ed5d",3278:"0edfeb14",3283:"c3692b27",3306:"7d586225",3416:"7621bc86",3434:"fc24bb9e",3470:"cd295a96",3530:"de78489b",3551:"4f4178b8",3583:"b7d8f414",3740:"f689bbc3",3751:"05fa812a",3836:"e5666cc5",3861:"5dd388a5",3866:"e5553e1b",3943:"e185658d",3976:"ffea979f",4022:"e09a1784",4050:"2aa08fc2",4058:"867cfedb",4108:"63e2986f",4208:"642b27ca",4293:"331a48d2",4336:"e3e1c343",4372:"ef3fdf2a",4374:"8ee7d77f",4431:"42b28dcc",4459:"dbb7e369",4483:"560e6c0e",4501:"91378c96",4707:"5d2e9b05",4808:"ae1b9dfe",4928:"8701bea9",5014:"8d4dbd32",5088:"190e0945",5186:"d7b0ab1f",5230:"43f64d02",5379:"7201aec1",5418:"9e93d281",5497:"f9007bbd",5498:"59880946",5503:"adae397d",5576:"0163730e",5618:"4c880011",5728:"e7d7989d",5743:"198e1a05",5812:"076c60c6",5822:"b5ec6ea6",5860:"18313c51",6017:"89aab098",6032:"0ebd4a56",6356:"5265c857",6443:"fd1de9cf",6533:"35bbae26",6624:"9466780a",6772:"c369c920",6793:"57f229b7",6801:"0e20d6ba",6848:"eec0a1c3",6884:"2fa7ea0e",7038:"9ed6a5e8",7160:"cd7333aa",7169:"c00f8377",7216:"42246c24",7275:"3331385d",7546:"66bca0e8",7584:"989be8a9",7645:"eb1c5be5",7807:"b264fed5",7937:"dcc52a6d",7951:"81194649",7996:"1d126407",8021:"a572a2f8",8038:"14bbacdf",8124:"e16464e5",8134:"c42b33d6",8247:"e3714866",8256:"b9301a72",8366:"ca2be9ba",8401:"17896441",8446:"f6044333",8532:"c839b956",8581:"935f2afb",8584:"c4fb746e",8639:"01b71c44",8673:"4217005c",8714:"1be78505",8729:"30d60b1d",8752:"84889dc5",8793:"7ab9e3c8",8875:"6d68a753",9002:"55207fe5",9014:"7bd85737",9033:"b9b77d41",9195:"bc029754",9206:"d14a3ed5",9281:"70deba4a",9283:"8536e7d2",9288:"42892e54",9322:"eebdd88e",9327:"d7b8fc2f",9381:"76162796",9448:"cea6af2a",9516:"fca8a40b",9573:"66b083c6",9579:"d73ebf32",9595:"2b357f6a",9608:"83a23f68",9659:"f62d97ea",9676:"2c1d319f",9750:"f8ae4f25",9775:"96cae154",9832:"0ff1afcb",9864:"46775a45",9963:"4f58e873"}[e]||e)+"."+{81:"1529d9d1",159:"72d93f3f",235:"e171aa9e",310:"805f16f4",397:"16f69659",461:"2ad197dd",491:"89f7483d",764:"4e88ceb1",824:"9dc5b298",932:"5fd3595b",968:"02df0dc8",979:"0a1df818",1109:"19495f75",1115:"1aee053c",1170:"6e212aef",1213:"a40d9a1e",1249:"a3098b4d",1262:"1b3b6538",1288:"6e5cb4e9",1305:"0d4a143e",1366:"f5442462",1374:"fd717f52",1377:"e4f6b77b",1399:"3628a3c3",1425:"ca24dd8f",1531:"7cbbd448",1634:"8df29d26",1641:"c445e2eb",1646:"7f613609",1717:"7d2a3f40",1794:"d05ba48e",1871:"ab542fb2",1976:"fc1b612c",2001:"cef1392e",2007:"b0360c00",2042:"8be51c91",2078:"041365a5",2136:"768d510e",2138:"cc0f467a",2208:"fd888b95",2245:"bed3a3eb",2350:"0acb09b4",2507:"f11bf157",2660:"46ae4b07",2771:"c74985c9",2779:"e9a1f550",2783:"261227e5",2856:"6d91682b",2874:"af8f342a",2923:"0cbdb1fc",2933:"f18c7fb9",3008:"c48aa486",3031:"6a1b891d",3161:"9d27be54",3211:"aca09c9c",3278:"c55fade9",3283:"5a62d0d3",3306:"a268438c",3416:"12313f13",3434:"53e3af9a",3470:"88fe97e3",3530:"b2d4d881",3551:"0c375114",3583:"58460c55",3740:"22e9f4cc",3751:"e3ae9adf",3836:"52fdb86a",3861:"f0876521",3866:"32ff0724",3943:"470733a2",3976:"91fb45f1",4022:"9dcd13f8",4050:"5422b068",4058:"5035bc37",4108:"256ebc8e",4208:"61cb3bce",4293:"a20edb84",4336:"d2084264",4372:"6b20f51f",4374:"76a1df1f",4431:"9c34f299",4459:"b2fd8967",4483:"b0825e52",4501:"c0fa4d54",4673:"c3c6724c",4707:"8b2e7935",4808:"48010684",4928:"28bf4be7",5014:"daa79c5b",5088:"acf8e4f1",5186:"548fd47e",5230:"62ce75f2",5379:"aa900d85",5418:"7bc99db0",5497:"a71451ae",5498:"d42083ff",5503:"6dca4d0b",5576:"6426ce99",5618:"4b4649ff",5728:"beeaa9ad",5743:"34cfb94b",5812:"3c88a2d5",5822:"d0b28285",5860:"576ad5d8",6017:"a4f1c24c",6032:"903acb45",6356:"02fd1574",6443:"3509beaf",6533:"04c08631",6624:"976fb0cd",6772:"2f391b44",6793:"c481ceb7",6801:"5088ab74",6848:"e08bedb6",6884:"afde71e7",7038:"c699fb4e",7160:"2999e64f",7169:"118f4d4d",7216:"1ab0a893",7275:"424be497",7546:"bafb6721",7584:"38b1f089",7645:"730323d7",7807:"c32c7e59",7937:"9fed6859",7951:"c15c9e01",7996:"b63a8da2",8021:"2cf10eeb",8038:"ec956772",8106:"c454083c",8124:"1465e567",8134:"1cab6722",8247:"745178ee",8256:"d921be5b",8366:"d1c8da39",8401:"f89fe07b",8446:"4d420701",8453:"4a96b149",8532:"0781c41c",8581:"d9db0825",8584:"b4e04f68",8639:"51f00d59",8673:"f706ef6e",8714:"367bbe6a",8729:"1c95da99",8752:"c1c84b21",8793:"5f321a64",8875:"f4645f41",9002:"4d2fa70c",9014:"0d5c2911",9033:"f7c17c3d",9195:"9db594da",9206:"b92d6167",9281:"50ee9f1d",9283:"19834ad2",9288:"ce1f3239",9322:"80533a80",9327:"3e269bb8",9381:"6b5aea38",9416:"434bb1a7",9448:"691cffe4",9516:"d8682270",9573:"644eaf62",9579:"7523e199",9595:"0f837cac",9608:"dcfe12d9",9659:"64c63444",9676:"d4479fd4",9750:"2d04e46c",9775:"029771ab",9832:"919fe43c",9864:"92473d7c",9963:"00d78bb8"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},b="adguard-knowledge-base:",r.l=(e,a,d,f)=>{if(c[e])c[e].push(a);else{var t,o;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==b+d){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",b+d),t.src=e),c[e]=[a];var l=(a,d)=>{t.onerror=t.onload=null,clearTimeout(s);var b=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((e=>e(d))),a)return a(d)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/KnowledgeBase/es/",r.gca=function(e){return e={17896441:"8401",56892257:"159",59880946:"5498",76162796:"9381",81194649:"7951",c6a7d8eb:"81","1fa33131":"310","9024f6a0":"397",fabbea76:"461","359fb69f":"491","5d93a0b1":"764",b2d27673:"824","2e78b5cc":"932","8f85d32a":"968",e1239376:"979",a04b8a51:"1109","2dc359ee":"1115","7823daad":"1213","8d214dab":"1249","6f1fa490":"1262","0b86c086":"1288","2f51001c":"1305","40e7ffd9":"1366",d2e80c10:"1374","842b6bc3":"1377","4ed91304":"1399","9476227c":"1425",ce783f99:"1531",c1a34166:"1634",e3351ae3:"1641",a3bb94ae:"1646","331d2294":"1717",dff809dd:"1794","72ca5af7":"1871","841ac4fe":"1976","7ae4b33a":"2001",cb39dde8:"2007",f67a633e:"2042",a258e527:"2078","6d445c5f":"2136","1a4e3797":"2138","3fd922b3":"2208",b19f06fd:"2245","71cf2c5d":"2350",d81e68b2:"2507",b66bbe5c:"2660","916eca70":"2771","8068519c":"2779","6d61c927":"2783",f36698c8:"2856","69d3bcca":"2874","4170c70b":"2923","99cd9352":"2933","00a5da7a":"3008","62ec1b8a":"3031",dba7ed5d:"3161","0edfeb14":"3278",c3692b27:"3283","7d586225":"3306","7621bc86":"3416",fc24bb9e:"3434",cd295a96:"3470",de78489b:"3530","4f4178b8":"3551",b7d8f414:"3583",f689bbc3:"3740","05fa812a":"3751",e5666cc5:"3836","5dd388a5":"3861",e5553e1b:"3866",e185658d:"3943",ffea979f:"3976",e09a1784:"4022","2aa08fc2":"4050","867cfedb":"4058","63e2986f":"4108","642b27ca":"4208","331a48d2":"4293",e3e1c343:"4336",ef3fdf2a:"4372","8ee7d77f":"4374","42b28dcc":"4431",dbb7e369:"4459","560e6c0e":"4483","91378c96":"4501","5d2e9b05":"4707",ae1b9dfe:"4808","8701bea9":"4928","8d4dbd32":"5014","190e0945":"5088",d7b0ab1f:"5186","43f64d02":"5230","7201aec1":"5379","9e93d281":"5418",f9007bbd:"5497",adae397d:"5503","0163730e":"5576","4c880011":"5618",e7d7989d:"5728","198e1a05":"5743","076c60c6":"5812",b5ec6ea6:"5822","18313c51":"5860","89aab098":"6017","0ebd4a56":"6032","5265c857":"6356",fd1de9cf:"6443","35bbae26":"6533","9466780a":"6624",c369c920:"6772","57f229b7":"6793","0e20d6ba":"6801",eec0a1c3:"6848","2fa7ea0e":"6884","9ed6a5e8":"7038",cd7333aa:"7160",c00f8377:"7169","42246c24":"7216","3331385d":"7275","66bca0e8":"7546","989be8a9":"7584",eb1c5be5:"7645",b264fed5:"7807",dcc52a6d:"7937","1d126407":"7996",a572a2f8:"8021","14bbacdf":"8038",e16464e5:"8124",c42b33d6:"8134",e3714866:"8247",b9301a72:"8256",ca2be9ba:"8366",f6044333:"8446",c839b956:"8532","935f2afb":"8581",c4fb746e:"8584","01b71c44":"8639","4217005c":"8673","1be78505":"8714","30d60b1d":"8729","84889dc5":"8752","7ab9e3c8":"8793","6d68a753":"8875","55207fe5":"9002","7bd85737":"9014",b9b77d41:"9033",bc029754:"9195",d14a3ed5:"9206","70deba4a":"9281","8536e7d2":"9283","42892e54":"9288",eebdd88e:"9322",d7b8fc2f:"9327",cea6af2a:"9448",fca8a40b:"9516","66b083c6":"9573",d73ebf32:"9579","2b357f6a":"9595","83a23f68":"9608",f62d97ea:"9659","2c1d319f":"9676",f8ae4f25:"9750","96cae154":"9775","0ff1afcb":"9832","46775a45":"9864","4f58e873":"9963"}[e]||e,r.p+r.u(e)},(()=>{var e={5354:0,1869:0};r.f.j=(a,d)=>{var c=r.o(e,a)?e[a]:void 0;if(0!==c)if(c)d.push(c[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var b=new Promise(((d,b)=>c=e[a]=[d,b]));d.push(c[2]=b);var f=r.p+r.u(a),t=new Error;r.l(f,(d=>{if(r.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var b=d&&("load"===d.type?"missing":d.type),f=d&&d.target&&d.target.src;t.message="Loading chunk "+a+" failed.\n("+b+": "+f+")",t.name="ChunkLoadError",t.type=b,t.request=f,c[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,d)=>{var c,b,f=d[0],t=d[1],o=d[2],n=0;if(f.some((a=>0!==e[a]))){for(c in t)r.o(t,c)&&(r.m[c]=t[c]);if(o)var i=o(r)}for(a&&a(d);n<f.length;n++)b=f[n],r.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return r.O(i)},d=self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();