"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[2379],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=p(r),c=a,f=s["".concat(i,".").concat(c)]||s[c]||m[c]||l;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3583:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={title:"semodule\u547d\u4ee4 \u2013 \u7ba1\u7406SELinux\u7b56\u7565\u6a21\u5757",summary:"semodule\u547d\u4ee4\u7684\u4f5c\u7528\u662f\u53ef\u4ee5\u7ba1\u7406SELinux\u7b56\u7565\u6a21\u5757\uff0c\u6bd4\u5982\u663e\u793a\u3001\u5b89\u88c5\u3001\u91cd\u88c5\u3001\u5347\u7ea7\u3001\u5220\u9664\u3001\u6fc0\u6d3b\u53ca\u7981\u7528\u7b56\u7565\u6a21\u5757\u3002",meta_keywords:"semodule\u547d\u4ee4,\u7ba1\u7406SELinux\u7b56\u7565\u6a21\u5757",meta_description:"semodule\u547d\u4ee4 \u2013 \u7ba1\u7406SELinux\u7b56\u7565\u6a21\u5757",categories:"linux",tag:"linux\u547d\u4ee4"},o=void 0,u={unversionedId:"\u7cfb\u7edf\u7ba1\u7406/semodule\u547d\u4ee4 \u2013 \u7ba1\u7406SELinux\u7b56\u7565\u6a21\u5757",id:"\u7cfb\u7edf\u7ba1\u7406/semodule\u547d\u4ee4 \u2013 \u7ba1\u7406SELinux\u7b56\u7565\u6a21\u5757",title:"semodule\u547d\u4ee4 \u2013 \u7ba1\u7406SELinux\u7b56\u7565\u6a21\u5757",description:"semodule\u547d\u4ee4\u7684\u4f5c\u7528\u662f\u53ef\u4ee5\u7ba1\u7406SELinux\u7b56\u7565\u6a21\u5757\uff0c\u6bd4\u5982\u663e\u793a\u3001\u5b89\u88c5\u3001\u91cd\u88c5\u3001\u5347\u7ea7\u3001\u5220\u9664\u3001\u6fc0\u6d3b\u53ca\u7981\u7528\u7b56\u7565\u6a21\u5757\u3002",source:"@site/docs/\u7cfb\u7edf\u7ba1\u7406/semodule\u547d\u4ee4 \u2013 \u7ba1\u7406SELinux\u7b56\u7565\u6a21\u5757.md",sourceDirName:"\u7cfb\u7edf\u7ba1\u7406",slug:"/\u7cfb\u7edf\u7ba1\u7406/semodule\u547d\u4ee4 \u2013 \u7ba1\u7406SELinux\u7b56\u7565\u6a21\u5757",permalink:"/docs/\u7cfb\u7edf\u7ba1\u7406/semodule\u547d\u4ee4 \u2013 \u7ba1\u7406SELinux\u7b56\u7565\u6a21\u5757",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u7cfb\u7edf\u7ba1\u7406/semodule\u547d\u4ee4 \u2013 \u7ba1\u7406SELinux\u7b56\u7565\u6a21\u5757.md",tags:[],version:"current",frontMatter:{title:"semodule\u547d\u4ee4 \u2013 \u7ba1\u7406SELinux\u7b56\u7565\u6a21\u5757",summary:"semodule\u547d\u4ee4\u7684\u4f5c\u7528\u662f\u53ef\u4ee5\u7ba1\u7406SELinux\u7b56\u7565\u6a21\u5757\uff0c\u6bd4\u5982\u663e\u793a\u3001\u5b89\u88c5\u3001\u91cd\u88c5\u3001\u5347\u7ea7\u3001\u5220\u9664\u3001\u6fc0\u6d3b\u53ca\u7981\u7528\u7b56\u7565\u6a21\u5757\u3002",meta_keywords:"semodule\u547d\u4ee4,\u7ba1\u7406SELinux\u7b56\u7565\u6a21\u5757",meta_description:"semodule\u547d\u4ee4 \u2013 \u7ba1\u7406SELinux\u7b56\u7565\u6a21\u5757",categories:"linux",tag:"linux\u547d\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"nsupdate\u547d\u4ee4 \u2013 \u52a8\u6001DNS\u66f4\u65b0\u5de5\u5177",permalink:"/docs/\u7cfb\u7edf\u7ba1\u7406/nsupdate\u547d\u4ee4 \u2013 \u52a8\u6001DNS\u66f4\u65b0\u5de5\u5177"},next:{title:"sestatus\u547d\u4ee4 \u2013 \u663e\u793aSELinux\u72b6\u6001",permalink:"/docs/\u7cfb\u7edf\u7ba1\u7406/sestatus\u547d\u4ee4 \u2013 \u663e\u793aSELinux\u72b6\u6001"}},i={},p=[{value:"\u8bed\u6cd5\u683c\u5f0f\uff1a",id:"\u8bed\u6cd5\u683c\u5f0f",level:2},{value:"\u5e38\u7528\u53c2\u6570\uff1a",id:"\u5e38\u7528\u53c2\u6570",level:2},{value:"\u547d\u4ee4\u5b9e\u6218",id:"\u547d\u4ee4\u5b9e\u6218",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"semodule\u547d\u4ee4\u7684\u4f5c\u7528\u662f\u53ef\u4ee5\u7ba1\u7406SELinux\u7b56\u7565\u6a21\u5757\uff0c\u6bd4\u5982\u663e\u793a\u3001\u5b89\u88c5\u3001\u91cd\u88c5\u3001\u5347\u7ea7\u3001\u5220\u9664\u3001\u6fc0\u6d3b\u53ca\u7981\u7528\u7b56\u7565\u6a21\u5757\u3002\nsemodule\u547d\u4ee4\u8fd8\u53ef\u7528\u4e8e\u5f3a\u5236\u4ece\u6a21\u5757\u5b58\u50a8\u91cd\u5efa\u7b56\u7565\u548c/\u6216\u5f3a\u5236\u91cd\u65b0\u52a0\u8f7d\u7b56\u7565\u800c\u4e0d\u6267\u884c\u4efb\u4f55\u5176\u4ed6\u4e8b\u52a1\u3002 semodule\u547d\u4ee4\u4f5c\u7528\u4e8esemodule_package\u521b\u5efa\u7684\u6a21\u5757\u5305\u3002\u901a\u5e38\uff0c\u8fd9\u4e9b\u6587\u4ef6\u5177\u6709.pp\u540e\u7f00\uff08\u7b56\u7565\u5305\uff09\uff0c\u5c3d\u7ba1\u8fd9\u4e0d\u662f\u4ee5\u4efb\u4f55\u65b9\u5f0f\u5f3a\u5236\u6267\u884c\u7684\u3002"),(0,a.kt)("h2",{id:"\u8bed\u6cd5\u683c\u5f0f"},"\u8bed\u6cd5\u683c\u5f0f\uff1a"),(0,a.kt)("p",null,"semodule ","[\u53c2\u6570]"),(0,a.kt)("h2",{id:"\u5e38\u7528\u53c2\u6570"},"\u5e38\u7528\u53c2\u6570\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-l"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u663e\u793a\u5b89\u88c5\u7684\u6a21\u5757")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-R"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u91cd\u88c5\u7b56\u7565\u6a21\u5757")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-B"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5efa\u7acb\u548c\u91cd\u88c5\u7b56\u7565\u6a21\u5757")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-i<\u7b56\u7565\u6a21\u5757>"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5b89\u88c5\u4e00\u4e2a\u65b0\u7684\u6a21\u5757")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-u<\u7b56\u7565\u6a21\u5757>"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5347\u7ea7\u7b56\u7565\u6a21\u5757")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-e<\u7b56\u7565\u6a21\u5757>"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6fc0\u6d3b\u7b56\u7565\u6a21\u5757")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-d<\u7b56\u7565\u6a21\u5757>"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u7981\u7528\u7b56\u7565\u6a21\u5757")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-b<\u7b56\u7565\u6a21\u5757>"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5b89\u88c5\u65b0\u7684\u57fa\u7840\u6a21\u5757")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-r<\u7b56\u7565\u6a21\u5757>"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5220\u9664\u7b56\u7565\u6a21\u5757")))),(0,a.kt)("h2",{id:"\u547d\u4ee4\u5b9e\u6218"},"\u547d\u4ee4\u5b9e\u6218"),(0,a.kt)("p",null,"\u67e5\u770bSELinux\u52a0\u8f7d\u7684\u7b56\u7565\u6a21\u5757\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# semodule -l\n")),(0,a.kt)("p",null,"\u67e5\u770bapache\u7b56\u7565\u6a21\u5757\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# semodule -l|grep apache\n")),(0,a.kt)("p",null,"\u7981\u7528zebra\u7b56\u7565\u6a21\u5757\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@localhost ~]# semodule -d zebra\n")))}m.isMDXComponent=!0}}]);