"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[7878],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),m=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=m(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=m(r),f=a,d=c["".concat(s,".").concat(f)]||c[f]||u[f]||i;return r?n.createElement(d,l(l({ref:e},p),{},{components:r})):n.createElement(d,l({ref:e},p))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var m=2;m<i;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},721:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const i={title:"fstrim\u547d\u4ee4 \u2013 \u56de\u6536\u5df2\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u672a\u4f7f\u7528\u7684\u5757",summary:"fstrim \u7528\u4e8e\u56de\u6536(\u53c8\u79f0\u4e3a\u201dtrim\u201d)\u4e00\u4e2a\u5df2\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u4e0a\u6240\u6709\u672a\u4f7f\u7528\u7684\u5757\uff1b\u8fd9\u5bf9\u4e8e\u56fa\u6001\u786c\u76d8(SSD)\u548c\u7cbe\u7b80\u914d\u7f6e(thinly-provisioned)\u7684\u5b58\u50a8\u8bbe\u5907\u6bd4\u8f83\u6709\u610f\u4e49\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cfstrim \u5c06\u4f1a\u56de\u6536\u6587\u4ef6\u7cfb\u7edf\u4e0a\u6240\u6709\u672a\u4f7f\u7528\u7684\u5757\u3002\u4f46\u662f\u53ef\u4ee5\u901a\u8fc7\u9009\u9879\u9650\u5b9a\u56de\u6536\u7684\u8303\u56f4\u548c\u5927\u5c0f\u3002",meta_keywords:"fstrim\u547d\u4ee4,\u56de\u6536\u5df2\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u672a\u4f7f\u7528\u7684\u5757",meta_description:"fstrim\u547d\u4ee4 \u2013 \u56de\u6536\u5df2\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u672a\u4f7f\u7528\u7684\u5757",categories:"linux",tag:"linux\u547d\u4ee4"},l=void 0,o={unversionedId:"\u6587\u4ef6\u7ba1\u7406/fstrim\u547d\u4ee4 \u2013 \u56de\u6536\u5df2\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u672a\u4f7f\u7528\u7684\u5757",id:"\u6587\u4ef6\u7ba1\u7406/fstrim\u547d\u4ee4 \u2013 \u56de\u6536\u5df2\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u672a\u4f7f\u7528\u7684\u5757",title:"fstrim\u547d\u4ee4 \u2013 \u56de\u6536\u5df2\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u672a\u4f7f\u7528\u7684\u5757",description:"fstrim \u7528\u4e8e\u56de\u6536(\u53c8\u79f0\u4e3a\u201dtrim\u201d)\u4e00\u4e2a\u5df2\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u4e0a\u6240\u6709\u672a\u4f7f\u7528\u7684\u5757\uff1b\u8fd9\u5bf9\u4e8e\u56fa\u6001\u786c\u76d8(SSD)\u548c\u7cbe\u7b80\u914d\u7f6e(thinly-provisioned)\u7684\u5b58\u50a8\u8bbe\u5907\u6bd4\u8f83\u6709\u610f\u4e49\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cfstrim \u5c06\u4f1a\u56de\u6536\u6587\u4ef6\u7cfb\u7edf\u4e0a\u6240\u6709\u672a\u4f7f\u7528\u7684\u5757\u3002\u4f46\u662f\u53ef\u4ee5\u901a\u8fc7\u9009\u9879\u9650\u5b9a\u56de\u6536\u7684\u8303\u56f4\u548c\u5927\u5c0f\u3002",source:"@site/docs/\u6587\u4ef6\u7ba1\u7406/fstrim\u547d\u4ee4 \u2013 \u56de\u6536\u5df2\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u672a\u4f7f\u7528\u7684\u5757.md",sourceDirName:"\u6587\u4ef6\u7ba1\u7406",slug:"/\u6587\u4ef6\u7ba1\u7406/fstrim\u547d\u4ee4 \u2013 \u56de\u6536\u5df2\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u672a\u4f7f\u7528\u7684\u5757",permalink:"/docs/\u6587\u4ef6\u7ba1\u7406/fstrim\u547d\u4ee4 \u2013 \u56de\u6536\u5df2\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u672a\u4f7f\u7528\u7684\u5757",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u6587\u4ef6\u7ba1\u7406/fstrim\u547d\u4ee4 \u2013 \u56de\u6536\u5df2\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u672a\u4f7f\u7528\u7684\u5757.md",tags:[],version:"current",frontMatter:{title:"fstrim\u547d\u4ee4 \u2013 \u56de\u6536\u5df2\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u672a\u4f7f\u7528\u7684\u5757",summary:"fstrim \u7528\u4e8e\u56de\u6536(\u53c8\u79f0\u4e3a\u201dtrim\u201d)\u4e00\u4e2a\u5df2\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u4e0a\u6240\u6709\u672a\u4f7f\u7528\u7684\u5757\uff1b\u8fd9\u5bf9\u4e8e\u56fa\u6001\u786c\u76d8(SSD)\u548c\u7cbe\u7b80\u914d\u7f6e(thinly-provisioned)\u7684\u5b58\u50a8\u8bbe\u5907\u6bd4\u8f83\u6709\u610f\u4e49\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cfstrim \u5c06\u4f1a\u56de\u6536\u6587\u4ef6\u7cfb\u7edf\u4e0a\u6240\u6709\u672a\u4f7f\u7528\u7684\u5757\u3002\u4f46\u662f\u53ef\u4ee5\u901a\u8fc7\u9009\u9879\u9650\u5b9a\u56de\u6536\u7684\u8303\u56f4\u548c\u5927\u5c0f\u3002",meta_keywords:"fstrim\u547d\u4ee4,\u56de\u6536\u5df2\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u672a\u4f7f\u7528\u7684\u5757",meta_description:"fstrim\u547d\u4ee4 \u2013 \u56de\u6536\u5df2\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u672a\u4f7f\u7528\u7684\u5757",categories:"linux",tag:"linux\u547d\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"fixfiles\u547d\u4ee4 \u2013 \u4fee\u590d\u5b89\u5168\u4e0a\u4e0b\u6587",permalink:"/docs/\u6587\u4ef6\u7ba1\u7406/fixfiles\u547d\u4ee4 \u2013 \u4fee\u590d\u5b89\u5168\u4e0a\u4e0b\u6587"},next:{title:"getfattr\u547d\u4ee4 \u2013 \u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf\u5bf9\u8c61\u7684\u6269\u5c55\u5c5e\u6027",permalink:"/docs/\u6587\u4ef6\u7ba1\u7406/getfattr\u547d\u4ee4 \u2013 \u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf\u5bf9\u8c61\u7684\u6269\u5c55\u5c5e\u6027"}},s={},m=[{value:"\u8bed\u6cd5\u683c\u5f0f\uff1a",id:"\u8bed\u6cd5\u683c\u5f0f",level:2},{value:"\u5e38\u7528\u53c2\u6570\uff1a",id:"\u5e38\u7528\u53c2\u6570",level:2},{value:"\u547d\u4ee4\u5b9e\u6218",id:"\u547d\u4ee4\u5b9e\u6218",level:2}],p={toc:m};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"fstrim \u7528\u4e8e\u56de\u6536(\u53c8\u79f0\u4e3a\u201dtrim\u201d)\u4e00\u4e2a\u5df2\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u4e0a\u6240\u6709\u672a\u4f7f\u7528\u7684\u5757\uff1b\u8fd9\u5bf9\u4e8e\u56fa\u6001\u786c\u76d8(SSD)\u548c\u7cbe\u7b80\u914d\u7f6e(thinly-provisioned)\u7684\u5b58\u50a8\u8bbe\u5907\u6bd4\u8f83\u6709\u610f\u4e49\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cfstrim \u5c06\u4f1a\u56de\u6536\u6587\u4ef6\u7cfb\u7edf\u4e0a\u6240\u6709\u672a\u4f7f\u7528\u7684\u5757\u3002\u4f46\u662f\u53ef\u4ee5\u901a\u8fc7\u9009\u9879\u9650\u5b9a\u56de\u6536\u7684\u8303\u56f4\u548c\u5927\u5c0f\u3002"),(0,a.kt)("h2",{id:"\u8bed\u6cd5\u683c\u5f0f"},"\u8bed\u6cd5\u683c\u5f0f\uff1a"),(0,a.kt)("p",null,"fstrim ","[\u53c2\u6570]"),(0,a.kt)("h2",{id:"\u5e38\u7528\u53c2\u6570"},"\u5e38\u7528\u53c2\u6570\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-a"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u56de\u6536\u6240\u6709\u5df2\u6302\u8f7d\u6587\u4ef6\u7cfb\u7edf\u4e0a\u7684\u672a\u4f7f\u7528\u7a7a\u95f4(\u5305\u542b\u6240\u6709\u652f\u6301\u201dtrim\u201d\u7684\u8bbe\u5907)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-o"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u6587\u4ef6\u7cfb\u7edf\u4e0a\u641c\u7d22\u7a7a\u95f2\u5757\u7684\u8d77\u70b9\uff0c\u4e5f\u5c31\u662f\u4ec5\u641c\u7d22\u8be5\u70b9\u4e4b\u540e\u7684\u7a7a\u95f4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-l"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u641c\u7d22\u957f\u5ea6\uff0c\u4e5f\u5c31\u662f\u4ece\u8d77\u70b9\u5f00\u59cb\uff0c\u5728\u591a\u5927\u8303\u56f4\u5185\u641c\u7d22\u7a7a\u95f2\u5757")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-v"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8f93\u51fa\u56de\u6536\u8fc7\u7a0b\u4e2d\u7684\u8be6\u7ec6\u4fe1\u606f")))),(0,a.kt)("h2",{id:"\u547d\u4ee4\u5b9e\u6218"},"\u547d\u4ee4\u5b9e\u6218"),(0,a.kt)("p",null,"\u56de\u6536\u6240\u6709\u5df2\u6302\u8f7d\u6587\u4ef6\u7cfb\u7edf\u4e0a\u7684\u672a\u4f7f\u7528\u7a7a\u95f4(\u5305\u542b\u6240\u6709\u652f\u6301\u201dtrim\u201d\u7684\u8bbe\u5907)\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# fstrim -a\n")),(0,a.kt)("p",null,"\u8bbe\u7f6e\u6587\u4ef6\u7cfb\u7edf\u4e0a\u641c\u7d22\u7a7a\u95f2\u5757\u7684\u8d77\u70b9\uff0c\u4e5f\u5c31\u662f\u4ec5\u641c\u7d22\u8be5\u70b9\u4e4b\u540e\u7684\u7a7a\u95f4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# fstrim -o 512\n")),(0,a.kt)("p",null,"\u8bbe\u7f6e\u641c\u7d22\u957f\u5ea6\uff0c\u4e5f\u5c31\u662f\u4ece\u8d77\u70b9\u5f00\u59cb\uff0c\u5728\u591a\u5927\u8303\u56f4\u5185\u641c\u7d22\u7a7a\u95f2\u5757\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# fstrim -l 512\n")),(0,a.kt)("p",null,"\u5570\u55e6\u6a21\u5f0f,\u8f93\u51fa\u56de\u6536\u8fc7\u7a0b\u4e2d\u7684\u8be6\u7ec6\u4fe1\u606f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# fstrim -v\n")))}u.isMDXComponent=!0}}]);