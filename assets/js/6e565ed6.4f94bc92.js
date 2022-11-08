"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[1791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),f=a,m=s["".concat(o,".").concat(f)]||s[f]||g[f]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={title:"fping\u547d\u4ee4 \u2013 \u68c0\u6d4b\u4e3b\u673a\u662f\u5426\u5b58\u5728",summary:"fping\u7c7b\u4f3c\u4e8eping\uff08ping\u662f\u901a\u8fc7ICMP\uff08\u7f51\u7edc\u63a7\u5236\u4fe1\u606f\u534f\u8baeInternetControl Message Protocol\uff09\u534f\u8bae\u56de\u590d\u8bf7\u6c42\u4ee5\u68c0\u6d4b\u4e3b\u673a\u662f\u5426\u5b58\u5728\uff09\u3002fping\u4e0eping\u4e0d\u540c\u7684\u5730\u65b9\u5728\u4e8e\uff0cfping\u53ef\u4ee5\u5728\u547d\u4ee4\u884c\u4e2d\u6307\u5b9a\u8981ping\u7684\u4e3b\u673a\u6570\u91cf\u8303\u56f4\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9a\u542b\u6709\u8981ping\u7684\u4e3b\u673a\u5217\u8868\u6587\u4ef6\u3002",meta_keywords:"fping\u547d\u4ee4,\u68c0\u6d4b\u4e3b\u673a\u662f\u5426\u5b58\u5728",meta_description:"fping\u547d\u4ee4 \u2013 \u68c0\u6d4b\u4e3b\u673a\u662f\u5426\u5b58\u5728",categories:"linux",tag:"linux\u547d\u4ee4"},l=void 0,p={unversionedId:"\u7f51\u7edc\u901a\u8baf/fping\u547d\u4ee4 \u2013 \u68c0\u6d4b\u4e3b\u673a\u662f\u5426\u5b58\u5728",id:"\u7f51\u7edc\u901a\u8baf/fping\u547d\u4ee4 \u2013 \u68c0\u6d4b\u4e3b\u673a\u662f\u5426\u5b58\u5728",title:"fping\u547d\u4ee4 \u2013 \u68c0\u6d4b\u4e3b\u673a\u662f\u5426\u5b58\u5728",description:"fping\u7c7b\u4f3c\u4e8eping\uff08ping\u662f\u901a\u8fc7ICMP\uff08\u7f51\u7edc\u63a7\u5236\u4fe1\u606f\u534f\u8baeInternetControl Message Protocol\uff09\u534f\u8bae\u56de\u590d\u8bf7\u6c42\u4ee5\u68c0\u6d4b\u4e3b\u673a\u662f\u5426\u5b58\u5728\uff09\u3002fping\u4e0eping\u4e0d\u540c\u7684\u5730\u65b9\u5728\u4e8e\uff0cfping\u53ef\u4ee5\u5728\u547d\u4ee4\u884c\u4e2d\u6307\u5b9a\u8981ping\u7684\u4e3b\u673a\u6570\u91cf\u8303\u56f4\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9a\u542b\u6709\u8981ping\u7684\u4e3b\u673a\u5217\u8868\u6587\u4ef6\u3002",source:"@site/docs/\u7f51\u7edc\u901a\u8baf/fping\u547d\u4ee4 \u2013 \u68c0\u6d4b\u4e3b\u673a\u662f\u5426\u5b58\u5728.md",sourceDirName:"\u7f51\u7edc\u901a\u8baf",slug:"/\u7f51\u7edc\u901a\u8baf/fping\u547d\u4ee4 \u2013 \u68c0\u6d4b\u4e3b\u673a\u662f\u5426\u5b58\u5728",permalink:"/docs/\u7f51\u7edc\u901a\u8baf/fping\u547d\u4ee4 \u2013 \u68c0\u6d4b\u4e3b\u673a\u662f\u5426\u5b58\u5728",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u7f51\u7edc\u901a\u8baf/fping\u547d\u4ee4 \u2013 \u68c0\u6d4b\u4e3b\u673a\u662f\u5426\u5b58\u5728.md",tags:[],version:"current",frontMatter:{title:"fping\u547d\u4ee4 \u2013 \u68c0\u6d4b\u4e3b\u673a\u662f\u5426\u5b58\u5728",summary:"fping\u7c7b\u4f3c\u4e8eping\uff08ping\u662f\u901a\u8fc7ICMP\uff08\u7f51\u7edc\u63a7\u5236\u4fe1\u606f\u534f\u8baeInternetControl Message Protocol\uff09\u534f\u8bae\u56de\u590d\u8bf7\u6c42\u4ee5\u68c0\u6d4b\u4e3b\u673a\u662f\u5426\u5b58\u5728\uff09\u3002fping\u4e0eping\u4e0d\u540c\u7684\u5730\u65b9\u5728\u4e8e\uff0cfping\u53ef\u4ee5\u5728\u547d\u4ee4\u884c\u4e2d\u6307\u5b9a\u8981ping\u7684\u4e3b\u673a\u6570\u91cf\u8303\u56f4\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9a\u542b\u6709\u8981ping\u7684\u4e3b\u673a\u5217\u8868\u6587\u4ef6\u3002",meta_keywords:"fping\u547d\u4ee4,\u68c0\u6d4b\u4e3b\u673a\u662f\u5426\u5b58\u5728",meta_description:"fping\u547d\u4ee4 \u2013 \u68c0\u6d4b\u4e3b\u673a\u662f\u5426\u5b58\u5728",categories:"linux",tag:"linux\u547d\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"elm\u547d\u4ee4 \u2013 \u7eaf\u6587\u672c\u90ae\u4ef6\u5ba2\u6237\u7aef\u7a0b\u5e8f",permalink:"/docs/\u7f51\u7edc\u901a\u8baf/elm\u547d\u4ee4 \u2013 \u7eaf\u6587\u672c\u90ae\u4ef6\u5ba2\u6237\u7aef\u7a0b\u5e8f"},next:{title:"gluster\u547d\u4ee4 \u2013 Gluster\u63a7\u5236\u53f0\u7ba1\u7406\u5de5\u5177",permalink:"/docs/\u7f51\u7edc\u901a\u8baf/gluster\u547d\u4ee4 \u2013 Gluster\u63a7\u5236\u53f0\u7ba1\u7406\u5de5\u5177"}},o={},u=[{value:"\u8bed\u6cd5\u683c\u5f0f\uff1a",id:"\u8bed\u6cd5\u683c\u5f0f",level:2},{value:"\u5e38\u7528\u53c2\u6570\uff1a",id:"\u5e38\u7528\u53c2\u6570",level:2},{value:"\u547d\u4ee4\u5b9e\u6218",id:"\u547d\u4ee4\u5b9e\u6218",level:2}],c={toc:u};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"fping\u7c7b\u4f3c\u4e8eping\uff08ping\u662f\u901a\u8fc7ICMP\uff08\u7f51\u7edc\u63a7\u5236\u4fe1\u606f\u534f\u8baeInternetControl Message Protocol\uff09\u534f\u8bae\u56de\u590d\u8bf7\u6c42\u4ee5\u68c0\u6d4b\u4e3b\u673a\u662f\u5426\u5b58\u5728\uff09\u3002fping\u4e0eping\u4e0d\u540c\u7684\u5730\u65b9\u5728\u4e8e\uff0cfping\u53ef\u4ee5\u5728\u547d\u4ee4\u884c\u4e2d\u6307\u5b9a\u8981ping\u7684\u4e3b\u673a\u6570\u91cf\u8303\u56f4\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9a\u542b\u6709\u8981ping\u7684\u4e3b\u673a\u5217\u8868\u6587\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u8bed\u6cd5\u683c\u5f0f"},"\u8bed\u6cd5\u683c\u5f0f\uff1a"),(0,a.kt)("p",null,"fping ","[\u53c2\u6570]"),(0,a.kt)("h2",{id:"\u5e38\u7528\u53c2\u6570"},"\u5e38\u7528\u53c2\u6570\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-a"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u663e\u793a\u5b58\u6d3b\u7684(alive)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-g"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u4e00\u4e2a\u8303\u56f4(group)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-u"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u663e\u793a\u4e0d\u5b58\u6d3b\u7684(unreacheable)")))),(0,a.kt)("h2",{id:"\u547d\u4ee4\u5b9e\u6218"},"\u547d\u4ee4\u5b9e\u6218"),(0,a.kt)("p",null,"\u68c0\u6d4b192.168.1.1\u5230192.168.1.10\u4e4b\u95f4\u7684\u4e3b\u673a\u662f\u5426\u5b58\u5728\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# fping -a -g 192.168.1.1 192.168.1.10\n")),(0,a.kt)("p",null,"\u68c0\u6d4b192.168.1.1/24\u7684\u4e3b\u673a\u662f\u5426\u5b58\u5728\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# fping -a -g 192.168.1.1/24\n")),(0,a.kt)("p",null,"\u5c06IP\u5217\u8868\u653e\u5728\u4e00\u4e2a\u6587\u4ef6\u91cc\u9762\uff0c\u901a\u8fc7\u8bfb\u53d6\u6587\u4ef6\u6765\u68c0\u6d4b\u5217\u8868\u91cc\u7684\u4e3b\u673a\u662f\u5426\u5b58\u5728\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# fping -a -f ip.txt\n")),(0,a.kt)("p",null,"\u68c0\u6d4b",(0,a.kt)("a",{parentName:"p",href:"http://www.mylinux.com%E6%98%AF%E5%90%A6%E5%AD%98%E5%9C%A8%EF%BC%9A"},"www.mylinux.com\u662f\u5426\u5b58\u5728\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# fping www.mylinux.com\n")))}g.isMDXComponent=!0}}]);