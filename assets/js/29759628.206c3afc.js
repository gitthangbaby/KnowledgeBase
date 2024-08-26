"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[3315],{8860:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var l=r(7953);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,l,i=function(e,t){if(null==e)return{};var r,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=l.createContext({}),d=function(e){var t=l.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},g=l.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(r),g=i,y=c["".concat(s,".").concat(g)]||c[g]||p[g]||a;return r?l.createElement(y,n(n({ref:t},u),{},{components:r})):l.createElement(y,n({ref:t},u))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,n=new Array(a);n[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,n[1]=o;for(var d=2;d<a;d++)n[d]=r[d];return l.createElement.apply(null,n)}return l.createElement.apply(null,r)}g.displayName="MDXCreateElement"},753:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>d,toc:()=>c});r(7953);var l=r(8860);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function n(e,t){if(null==e)return{};var r,l,i=function(e,t){if(null==e)return{};var r,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const o={title:"Low-level settings guide",sidebar_position:6},s=void 0,d={unversionedId:"adguard-for-android/solving-problems/low-level-settings",id:"adguard-for-android/solving-problems/low-level-settings",title:"Low-level settings guide",description:"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/docs/adguard-for-android/solving-problems/low-level-settings.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/low-level-settings",permalink:"/KnowledgeBase/adguard-for-android/solving-problems/low-level-settings",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/low-level-settings.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Low-level settings guide",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"How to generate HAR files",permalink:"/KnowledgeBase/adguard-for-android/solving-problems/har"},next:{title:"How to block ads in the YouTube app",permalink:"/KnowledgeBase/adguard-for-android/solving-problems/youtube-ads"}},u={},c=[{value:"How to reach Low-level settings",id:"how-to-reach-low-level-settings",level:2},{value:"Low-level settings",id:"low-level-settings",level:2},{value:"DNS protection",id:"dns-protection",level:3},{value:"Fallback upstreams",id:"fallback-upstreams",level:4},{value:"Fallback domains",id:"fallback-domains",level:4},{value:"Detect search domains",id:"detect-search-domains",level:4},{value:"Bootstrap upstreams",id:"bootstrap-upstreams",level:4},{value:"Blocking mode for adblock-style rules",id:"blocking-mode-for-adblock-style-rules",level:4},{value:"Blocking mode for hosts rules",id:"blocking-mode-for-hosts-rules",level:4},{value:"DNS request timeout",id:"dns-request-timeout",level:4},{value:"Blocked response TTL",id:"blocked-response-ttl",level:4},{value:"DNS cache size",id:"dns-cache-size",level:4},{value:"ECH blocking",id:"ech-blocking",level:4},{value:"Ignore unavailable outbound proxy",id:"ignore-unavailable-outbound-proxy",level:4},{value:"Try HTTP/3 for DNS-over-HTTPS upstreams",id:"try-http3-for-dns-over-https-upstreams",level:4},{value:"SERVFAIL failure response",id:"servfail-failure-response",level:4},{value:"Use fallback for non-fallback domains",id:"use-fallback-for-non-fallback-domains",level:4},{value:"Validate DNS upstreams",id:"validate-dns-upstreams",level:4},{value:"Filter secure DNS",id:"filter-secure-dns",level:4},{value:"Filtering",id:"filtering",level:3},{value:"Capture HAR",id:"capture-har",level:4},{value:"HTTPS filtering",id:"https-filtering",level:3},{value:"Encrypted Client Hello",id:"encrypted-client-hello",level:4},{value:"OCSP checking",id:"ocsp-checking",level:4},{value:"Redirect DNS-over-HTTPS requests",id:"redirect-dns-over-https-requests",level:4},{value:"Filter HTTP/3",id:"filter-http3",level:4},{value:"Outbound proxy",id:"outbound-proxy",level:3},{value:"Show the Filter DNS requests setting",id:"show-the-filter-dns-requests-setting",level:4},{value:"Protection",id:"protection",level:3},{value:"Port ranges",id:"port-ranges",level:4},{value:"Log removed HTML events",id:"log-removed-html-events",level:4},{value:"Scriptlet debugging",id:"scriptlet-debugging",level:4},{value:"Excluded apps",id:"excluded-apps",level:4},{value:"QUIC bypass packages",id:"quic-bypass-packages",level:4},{value:"Reconfigure Automatic proxy when network changes",id:"reconfigure-automatic-proxy-when-network-changes",level:4},{value:"IPv6 filtering",id:"ipv6-filtering",level:4},{value:"IPv4 ranges excluded from filtering",id:"ipv4-ranges-excluded-from-filtering",level:4},{value:"IPv6 ranges excluded from filtering",id:"ipv6-ranges-excluded-from-filtering",level:4},{value:"TCP keepalive for outgoing sockets",id:"tcp-keepalive-for-outgoing-sockets",level:4},{value:"Local VPN settings",id:"local-vpn-settings",level:3},{value:"Recovery delay for revoked VPN",id:"recovery-delay-for-revoked-vpn",level:4},{value:"Reschedule delay for revoked VPN recovery",id:"reschedule-delay-for-revoked-vpn-recovery",level:4},{value:"MTU",id:"mtu",level:4},{value:"Restore VPN automatically",id:"restore-vpn-automatically",level:4},{value:"Packet capture (PCAP)",id:"packet-capture-pcap",level:4},{value:"Include Wi-Fi gateway in VPN routes",id:"include-wi-fi-gateway-in-vpn-routes",level:4},{value:"IPv4 address",id:"ipv4-address",level:4},{value:"Forcibly route LAN IPv4",id:"forcibly-route-lan-ipv4",level:4},{value:"Route all LAN IPv4 connections",id:"route-all-lan-ipv4-connections",level:4},{value:"IPv6 address",id:"ipv6-address",level:4},{value:"Miscellaneous",id:"miscellaneous",level:3},{value:"Detect Samsung Pay",id:"detect-samsung-pay",level:4}],p={toc:c},g="wrapper";function y(e){var{components:t}=e,r=n(e,["components"]);return(0,l.yg)(g,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},l=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),l.forEach((function(t){i(e,t,r[t])}))}return e}({},p,r),{components:t,mdxType:"MDXLayout"}),(0,l.yg)("admonition",{type:"info"},(0,l.yg)("p",{parentName:"admonition"},"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,l.yg)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,l.yg)("h2",{id:"how-to-reach-low-level-settings"},"How to reach Low-level settings"),(0,l.yg)("admonition",{type:"caution"},(0,l.yg)("p",{parentName:"admonition"},"Changing ",(0,l.yg)("em",{parentName:"p"},"Low-level settings")," can cause problems with the performance of AdGuard, may break the Internet connection or compromise your security and privacy. This section should only be opened if you know what you are doing, or you were asked to do so by our support team.")),(0,l.yg)("p",null,"To go to ",(0,l.yg)("em",{parentName:"p"},"Low-level settings"),", open the AdGuard app and tap the gear icon in the lower right corner of the screen. Then choose ",(0,l.yg)("em",{parentName:"p"},"General \u2192 Advanced \u2192 Low-level settings"),"."),(0,l.yg)("h2",{id:"low-level-settings"},"Low-level settings"),(0,l.yg)("p",null,"For AdGuard v4.0 for Android we've completely redesigned the low-level settings: divided them into thematic blocks, made them clearer, added validation of entered values and other safety valves, got rid of some settings, and added others."),(0,l.yg)("h3",{id:"dns-protection"},"DNS protection"),(0,l.yg)("h4",{id:"fallback-upstreams"},"Fallback upstreams"),(0,l.yg)("p",null,"Here you can specify the fallback DNS resolver(s) to be used if the configured server is unavailable. There are three options: ",(0,l.yg)("em",{parentName:"p"},"Automatic DNS"),", ",(0,l.yg)("em",{parentName:"p"},"None"),", and ",(0,l.yg)("em",{parentName:"p"},"Custom DNS"),". If no fallback server is specified, the ",(0,l.yg)("em",{parentName:"p"},"Automatic DNS")," \u2014 the system DNS or AdGuard DNS \u2014 will be used. ",(0,l.yg)("em",{parentName:"p"},"None")," means no fallback at all. Selecting ",(0,l.yg)("em",{parentName:"p"},"Custom DNS")," allows you to list IPv4 and IPv6 server addresses to use as upstreams."),(0,l.yg)("h4",{id:"fallback-domains"},"Fallback domains"),(0,l.yg)("p",null,"Here you can list domains that will be forwarded directly to fallback upstreams if they exist."),(0,l.yg)("h4",{id:"detect-search-domains"},"Detect search domains"),(0,l.yg)("p",null,"If this setting is enabled, AdGuard will detect search domains and automatically forward them to fallback upstreams."),(0,l.yg)("h4",{id:"bootstrap-upstreams"},"Bootstrap upstreams"),(0,l.yg)("p",null,"Bootstrap DNS for DoH, DoT, and DoQ servers. The ",(0,l.yg)("em",{parentName:"p"},"Automatic DNS")," \u2014 the system DNS or AdGuard DNS \u2014 is used by default. By selecting ",(0,l.yg)("em",{parentName:"p"},"Custom DNS"),", you can list IPv4 and IPv6 server addresses to use as bootstrap upstreams."),(0,l.yg)("h4",{id:"blocking-mode-for-adblock-style-rules"},"Blocking mode for adblock-style rules"),(0,l.yg)("p",null,"Here you can specify the response type for domains blocked by DNS rules based on adblock rule syntax (for instance, ",(0,l.yg)("inlineCode",{parentName:"p"},"||example.org^"),")."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Respond with REFUSED"),(0,l.yg)("li",{parentName:"ul"},"Respond with NXDOMAIN"),(0,l.yg)("li",{parentName:"ul"},"Respond with Custom IP address (IPv4 and IPv6 addresses can be specified here)")),(0,l.yg)("h4",{id:"blocking-mode-for-hosts-rules"},"Blocking mode for hosts rules"),(0,l.yg)("p",null,"Here you can specify the response type for domains blocked by DNS rules based on hosts rule syntax\n(for instance, ",(0,l.yg)("inlineCode",{parentName:"p"},"<ip> <domain> 0.0.0.0 example.com"),")."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Respond with REFUSED"),(0,l.yg)("li",{parentName:"ul"},"Respond with NXDOMAIN"),(0,l.yg)("li",{parentName:"ul"},"Respond with Custom IP address (IPv4 and IPv6 addresses can be specified here)")),(0,l.yg)("h4",{id:"dns-request-timeout"},"DNS request timeout"),(0,l.yg)("p",null,"Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. If you don\u2019t fill in this field or enter an invalid value, the value of 5000 will be used."),(0,l.yg)("h4",{id:"blocked-response-ttl"},"Blocked response TTL"),(0,l.yg)("p",null,"Here you can specify the TTL (time to live) value that will be returned in response to a blocked request."),(0,l.yg)("h4",{id:"dns-cache-size"},"DNS cache size"),(0,l.yg)("p",null,"Here you can specify the maximum number of cached responses. Default value is 1000."),(0,l.yg)("h4",{id:"ech-blocking"},"ECH blocking"),(0,l.yg)("p",null,"If enabled, AdGuard strips Encrypted Client Hello parameters from DNS responses."),(0,l.yg)("h4",{id:"ignore-unavailable-outbound-proxy"},"Ignore unavailable outbound proxy"),(0,l.yg)("p",null,"If this setting is enabled, AdGuard will send DNS requests directly when the outbound proxy is unavailable."),(0,l.yg)("h4",{id:"try-http3-for-dns-over-https-upstreams"},"Try HTTP/3 for DNS-over-HTTPS upstreams"),(0,l.yg)("p",null,"If this setting is enabled, AdGuard will use HTTP/3 to speed up DNS query resolution for DoH upstreams. Otherwise, AdGuard will revert to its default behavior and use HTTP/2 to send all DNS requests for DNS-over-HTTPS."),(0,l.yg)("h4",{id:"servfail-failure-response"},"SERVFAIL failure response"),(0,l.yg)("p",null,"If this setting is enabled and all upstreams, including fallback ones, fail to respond, AdGuard will send a SERVFAIL response to the client."),(0,l.yg)("h4",{id:"use-fallback-for-non-fallback-domains"},"Use fallback for non-fallback domains"),(0,l.yg)("p",null,"If this setting is enabled, AdGuard will use fallback upstreams for all domains. Otherwise, fallback upstreams will only be used for fallback domains and search domains if the corresponding option is enabled."),(0,l.yg)("h4",{id:"validate-dns-upstreams"},"Validate DNS upstreams"),(0,l.yg)("p",null,"If this setting is enabled, AdGuard will test DNS upstreams before adding or updating custom DNS servers."),(0,l.yg)("h4",{id:"filter-secure-dns"},"Filter secure DNS"),(0,l.yg)("p",null,"If this setting is on, AdGuard will apply all enabled DNS filters and DNS user rules to encrypted DNS-over-HTTPS (DoH) traffic and not only to plain DNS. DoH traffic mostly comes from Chrome and other browsers that have a ",(0,l.yg)("em",{parentName:"p"},"Secure DNS")," (or similar) setting. You can use ",(0,l.yg)("em",{parentName:"p"},"Filter secure DNS")," in two different modes:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Filter on the fly"),". In this mode, AdGuard applies all enabled DNS filters and DNS user rules to DoH traffic but doesn\u2019t redirect it to the local DNS proxy. If a DNS server is specified in the browser\u2019s settings, this server will handle the DoH traffic for this browser")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Redirect to DNS proxy"),". In this mode, AdGuard applies all enabled DNS filters and DNS user rules to DoH traffic by redirecting it to the local DNS proxy. The DNS server specified in the AdGuard\u2019s DNS settings will handle all DoH traffic"))),(0,l.yg)("h3",{id:"filtering"},"Filtering"),(0,l.yg)("h4",{id:"capture-har"},"Capture HAR"),(0,l.yg)("p",null,"If this setting is enabled, AdGuard will capture HAR files. It will create a directory named \u201char\u201d inside the app cache directory and add there information about all filtered HTTP requests in HAR 1.2 format that can be analyzed with the Fiddler program."),(0,l.yg)("p",null,"Use it only for debugging purposes!"),(0,l.yg)("h3",{id:"https-filtering"},"HTTPS filtering"),(0,l.yg)("h4",{id:"encrypted-client-hello"},"Encrypted Client Hello"),(0,l.yg)("p",null,"Every encrypted Internet connection has an unencrypted part. This is the very first packet which contains the name of the server you are connecting to. Encrypted Client Hello technology is supposed to solve this issue and encrypt that last bit of unencrypted information. To benefit from it, enable the ",(0,l.yg)("em",{parentName:"p"},"Encrypted Client Hello")," option. It uses a local DNS proxy to look for the ECH configuration for the domain. If it is found, Client Hello packet will be encrypted."),(0,l.yg)("h4",{id:"ocsp-checking"},"OCSP checking"),(0,l.yg)("p",null,"If this setting is enabled, AdGuard will perform asynchronous OCSP checks to get the revocation status of a website's SSL certificate."),(0,l.yg)("p",null,"If an OCSP check is completed within the required timeout, AdGuard will immediately block the connection if the certificate is revoked or establish the connection if the certificate is valid."),(0,l.yg)("p",null,"If the verification takes too long, AdGuard will allow the connection while continuing to check the certificate status in the background. If the certificate is revoked, current and future connections to the domain will be blocked."),(0,l.yg)("h4",{id:"redirect-dns-over-https-requests"},"Redirect DNS-over-HTTPS requests"),(0,l.yg)("p",null,"If this setting is enabled, AdGuard will redirect DNS-over-HTTPS requests to the local DNS proxy in addition to plain DNS requests. We recommend disabling fallback upstreams and using only encrypted DNS servers to maintain privacy."),(0,l.yg)("h4",{id:"filter-http3"},"Filter HTTP/3"),(0,l.yg)("p",null,"If this setting is enabled, AdGuard will filter requests sent over HTTP/3 in addition to other request types."),(0,l.yg)("h3",{id:"outbound-proxy"},"Outbound proxy"),(0,l.yg)("h4",{id:"show-the-filter-dns-requests-setting"},"Show the Filter DNS requests setting"),(0,l.yg)("p",null,"If this is enabled, the ",(0,l.yg)("em",{parentName:"p"},"Filter DNS requests")," switch will be displayed in the ",(0,l.yg)("em",{parentName:"p"},"Add proxy server")," dialog. Use it to enable filtering of DNS requests passing through the specified proxy."),(0,l.yg)("h3",{id:"protection"},"Protection"),(0,l.yg)("h4",{id:"port-ranges"},"Port ranges"),(0,l.yg)("p",null,"Here you can specify port ranges that should be filtered."),(0,l.yg)("h4",{id:"log-removed-html-events"},"Log removed HTML events"),(0,l.yg)("p",null,"If this setting is enabled, AdGuard will record blocked HTML elements in ",(0,l.yg)("em",{parentName:"p"},"Recent activity"),"."),(0,l.yg)("h4",{id:"scriptlet-debugging"},"Scriptlet debugging"),(0,l.yg)("p",null,"If this setting is enabled, debugging in scriptlets will be activated, and the browser log will record when scriptlet rules are applied."),(0,l.yg)("h4",{id:"excluded-apps"},"Excluded apps"),(0,l.yg)("p",null,"Here you can list package names and UIDs that you want to exclude from AdGuard protection."),(0,l.yg)("h4",{id:"quic-bypass-packages"},"QUIC bypass packages"),(0,l.yg)("p",null,"Here you can specify package names for which AdGuard should bypass QUIC traffic."),(0,l.yg)("h4",{id:"reconfigure-automatic-proxy-when-network-changes"},"Reconfigure Automatic proxy when network changes"),(0,l.yg)("p",null,"If this setting is enabled, the AdGuard protection will restart to reconfigure the automatic proxy settings when your device connects to another network. This setting only applies if ",(0,l.yg)("em",{parentName:"p"},"Routing mode")," is set to ",(0,l.yg)("em",{parentName:"p"},"Automatic proxy"),"."),(0,l.yg)("h4",{id:"ipv6-filtering"},"IPv6 filtering"),(0,l.yg)("p",null,"If this setting is enabled, AdGuard will filter IPv6 networks if an IPv6 network interface is available."),(0,l.yg)("h4",{id:"ipv4-ranges-excluded-from-filtering"},"IPv4 ranges excluded from filtering"),(0,l.yg)("p",null,"Filtering for the IPv4 ranges listed in this section is disabled."),(0,l.yg)("h4",{id:"ipv6-ranges-excluded-from-filtering"},"IPv6 ranges excluded from filtering"),(0,l.yg)("p",null,"Filtering for the IPv6 ranges listed in this section is disabled."),(0,l.yg)("h4",{id:"tcp-keepalive-for-outgoing-sockets"},"TCP keepalive for outgoing sockets"),(0,l.yg)("p",null,"If this setting is enabled, AdGuard will send a keepalive probe after the specified time period to ensure that the TCP connection is alive. Here, you can specify the idle time before starting keepalive probes and the time between keepalive probes for an unresponsive peer."),(0,l.yg)("p",null,"After a system-defined number of unsuccessful attempts to get a response from the server, the system automatically closes the TCP connection."),(0,l.yg)("h3",{id:"local-vpn-settings"},"Local VPN settings"),(0,l.yg)("h4",{id:"recovery-delay-for-revoked-vpn"},"Recovery delay for revoked VPN"),(0,l.yg)("p",null,"Here you can set the time of a delay in milliseconds before AdGuard tries to restore VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms."),(0,l.yg)("h4",{id:"reschedule-delay-for-revoked-vpn-recovery"},"Reschedule delay for revoked VPN recovery"),(0,l.yg)("p",null,"Here you can set the time of a delay in milliseconds before AdGuard reschedules the restoration of VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms."),(0,l.yg)("h4",{id:"mtu"},"MTU"),(0,l.yg)("p",null,"Here you can set the maximum transmission unit (MTU) of the VPN interface. The recommended range is 1500-1900 bytes."),(0,l.yg)("h4",{id:"restore-vpn-automatically"},"Restore VPN automatically"),(0,l.yg)("p",null,"If this setting is enabled, AdGuard\u2019s local VPN will be automatically re-enabled after being turned off due to network absence, tethering, or low-power mode."),(0,l.yg)("h4",{id:"packet-capture-pcap"},"Packet capture (PCAP)"),(0,l.yg)("p",null,"If this setting is enabled, AdGuard will create a file ",(0,l.yg)("inlineCode",{parentName:"p"},"timestamp.pcap")," (for instance, 1682599851461.pcap) in the app cache directory. This file lists all network packets transferred through the VPN and can be analyzed with the Wireshark program."),(0,l.yg)("h4",{id:"include-wi-fi-gateway-in-vpn-routes"},"Include Wi-Fi gateway in VPN routes"),(0,l.yg)("p",null,"If this setting is enabled, the gateway IP addresses will be added to VPN routes when on Wi-Fi."),(0,l.yg)("h4",{id:"ipv4-address"},"IPv4 address"),(0,l.yg)("p",null,"Here you can enter the IP address that will be used to create a TUN interface. By default, it is ",(0,l.yg)("inlineCode",{parentName:"p"},"172.18.11.218"),"."),(0,l.yg)("h4",{id:"forcibly-route-lan-ipv4"},"Forcibly route LAN IPv4"),(0,l.yg)("p",null,"If this setting is enabled, AdGuard will filter all LAN connections, including local IPv4 network traffic, even if the ",(0,l.yg)("em",{parentName:"p"},"Route all LAN IPv4 connections")," option is enabled."),(0,l.yg)("h4",{id:"route-all-lan-ipv4-connections"},"Route all LAN IPv4 connections"),(0,l.yg)("p",null,"If this setting is enabled, AdGuard will exclude LAN connections from filtering for simple networks. This may not work for complex networks. This setting only applies if ",(0,l.yg)("em",{parentName:"p"},"Forcibly route LAN IPv4")," is disabled."),(0,l.yg)("h4",{id:"ipv6-address"},"IPv6 address"),(0,l.yg)("p",null,"Here you can enter the IP address that will be used to create a TUN interface. By default, it is ",(0,l.yg)("inlineCode",{parentName:"p"},"2001:db8:ad:0:ff::"),"."),(0,l.yg)("h3",{id:"miscellaneous"},"Miscellaneous"),(0,l.yg)("h4",{id:"detect-samsung-pay"},"Detect Samsung Pay"),(0,l.yg)("p",null,"If this setting is enabled, AdGuard protection will be paused while Samsung Pay is in use. Korean users require this feature as they experience ",(0,l.yg)("a",{parentName:"p",href:"/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea"},"issues with Samsung Pay")," when AdGuard is enabled."))}y.isMDXComponent=!0}}]);