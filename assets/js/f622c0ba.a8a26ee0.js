"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[5075],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>s});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),c=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=c(r),s=n,d=m["".concat(p,".").concat(s)]||m[s]||f[s]||l;return r?a.createElement(d,o(o({ref:e},u),{},{components:r})):a.createElement(d,o({ref:e},u))}));function s(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8043:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const l={title:"getfattr\u547d\u4ee4 \u2013 \u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf\u5bf9\u8c61\u7684\u6269\u5c55\u5c5e\u6027",summary:"getfattr\u547d\u4ee4\u7684\u4f5c\u7528\u662f\u53ef\u4ee5\u83b7\u5f97\u6587\u4ef6\u7cfb\u7edf\u5bf9\u8c61\u7684\u6269\u5c55\u5c5e\u6027\u3002",meta_keywords:"getfattr\u547d\u4ee4,\u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf\u5bf9\u8c61\u7684\u6269\u5c55\u5c5e\u6027",meta_description:"getfattr\u547d\u4ee4 \u2013 \u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf\u5bf9\u8c61\u7684\u6269\u5c55\u5c5e\u6027",categories:"linux",tag:"linux\u547d\u4ee4"},o=void 0,i={unversionedId:"\u6587\u4ef6\u7ba1\u7406/getfattr\u547d\u4ee4 \u2013 \u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf\u5bf9\u8c61\u7684\u6269\u5c55\u5c5e\u6027",id:"\u6587\u4ef6\u7ba1\u7406/getfattr\u547d\u4ee4 \u2013 \u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf\u5bf9\u8c61\u7684\u6269\u5c55\u5c5e\u6027",title:"getfattr\u547d\u4ee4 \u2013 \u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf\u5bf9\u8c61\u7684\u6269\u5c55\u5c5e\u6027",description:"getfattr\u547d\u4ee4\u7684\u4f5c\u7528\u662f\u53ef\u4ee5\u83b7\u5f97\u6587\u4ef6\u7cfb\u7edf\u5bf9\u8c61\u7684\u6269\u5c55\u5c5e\u6027\u3002",source:"@site/docs/\u6587\u4ef6\u7ba1\u7406/getfattr\u547d\u4ee4 \u2013 \u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf\u5bf9\u8c61\u7684\u6269\u5c55\u5c5e\u6027.md",sourceDirName:"\u6587\u4ef6\u7ba1\u7406",slug:"/\u6587\u4ef6\u7ba1\u7406/getfattr\u547d\u4ee4 \u2013 \u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf\u5bf9\u8c61\u7684\u6269\u5c55\u5c5e\u6027",permalink:"/docs/\u6587\u4ef6\u7ba1\u7406/getfattr\u547d\u4ee4 \u2013 \u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf\u5bf9\u8c61\u7684\u6269\u5c55\u5c5e\u6027",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u6587\u4ef6\u7ba1\u7406/getfattr\u547d\u4ee4 \u2013 \u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf\u5bf9\u8c61\u7684\u6269\u5c55\u5c5e\u6027.md",tags:[],version:"current",frontMatter:{title:"getfattr\u547d\u4ee4 \u2013 \u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf\u5bf9\u8c61\u7684\u6269\u5c55\u5c5e\u6027",summary:"getfattr\u547d\u4ee4\u7684\u4f5c\u7528\u662f\u53ef\u4ee5\u83b7\u5f97\u6587\u4ef6\u7cfb\u7edf\u5bf9\u8c61\u7684\u6269\u5c55\u5c5e\u6027\u3002",meta_keywords:"getfattr\u547d\u4ee4,\u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf\u5bf9\u8c61\u7684\u6269\u5c55\u5c5e\u6027",meta_description:"getfattr\u547d\u4ee4 \u2013 \u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf\u5bf9\u8c61\u7684\u6269\u5c55\u5c5e\u6027",categories:"linux",tag:"linux\u547d\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"fstrim\u547d\u4ee4 \u2013 \u56de\u6536\u5df2\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u672a\u4f7f\u7528\u7684\u5757",permalink:"/docs/\u6587\u4ef6\u7ba1\u7406/fstrim\u547d\u4ee4 \u2013 \u56de\u6536\u5df2\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u672a\u4f7f\u7528\u7684\u5757"},next:{title:"groff\u547d\u4ee4 \u2013 \u7f16\u5199\u624b\u518c\u9875\u9762",permalink:"/docs/\u6587\u4ef6\u7ba1\u7406/groff\u547d\u4ee4 \u2013 \u7f16\u5199\u624b\u518c\u9875\u9762"}},p={},c=[{value:"\u8bed\u6cd5\u683c\u5f0f\uff1a",id:"\u8bed\u6cd5\u683c\u5f0f",level:2},{value:"\u5e38\u7528\u53c2\u6570\uff1a",id:"\u5e38\u7528\u53c2\u6570",level:2},{value:"\u547d\u4ee4\u5b9e\u6218",id:"\u547d\u4ee4\u5b9e\u6218",level:2}],u={toc:c};function f(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"getfattr\u547d\u4ee4\u7684\u4f5c\u7528\u662f\u53ef\u4ee5\u83b7\u5f97\u6587\u4ef6\u7cfb\u7edf\u5bf9\u8c61\u7684\u6269\u5c55\u5c5e\u6027\u3002\n\u5bf9\u4e8e\u6bcf\u4e2a\u6587\u4ef6\uff0cgetfattr\u547d\u4ee4\u4f1a\u663e\u793a\u8be5\u6587\u4ef6\u76f8\u5173\u8054\u7684\u6587\u4ef6\u540d\u548c\u8be5\u7ec4\u7684\u6269\u5c55\u5c5e\u6027\u7684\u540d\u79f0\uff08\u548c\u4efb\u9009\u7684\u503c\uff09\u3002\n\u8fd9\u91cc\u7684\u6587\u4ef6\u7cfb\u7edf\u6269\u5c55\u5c5e\u6027\uff0c\u4e0d\u662f\u6211\u4eec\u5e38\u8bf4\u7684lsattr\u547d\u4ee4\u548cchattr\u547d\u4ee4\u4e2d\u6587\u4ef6\u64cd\u4f5c\u7684\u5c5e\u6027\u3002\u8fd9\u91cc\u7684\u6269\u5c55\u5c5e\u6027\u662f\u5b8c\u5168\u81ea\u5b9a\u4e49\u7684\u3002\u6269\u5c55\u5c5e\u6027\u7684\u652f\u6301\uff0c\u4e0d\u540c\u6587\u4ef6\u7cfb\u7edf\u5bf9\u5176\u652f\u6301\u7a0b\u5ea6\u4e0d\u540c\u3002\u67d0\u4e9b\u7cfb\u7edf\u5bf9\u4e8e\u6587\u4ef6\u5173\u8054\u7684\u6269\u5c55\u5c5e\u6027\u7684\u6570\u91cf\u548c\u5927\u5c0f\u8fd8\u6709\u66f4\u4e3a\u4e25\u683c\u7684\u9650\u5236\u3002"),(0,n.kt)("h2",{id:"\u8bed\u6cd5\u683c\u5f0f"},"\u8bed\u6cd5\u683c\u5f0f\uff1a"),(0,n.kt)("p",null,"getfattr ","[\u53c2\u6570][\u8def\u5f84]"),(0,n.kt)("h2",{id:"\u5e38\u7528\u53c2\u6570"},"\u5e38\u7528\u53c2\u6570\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-n","<","name",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5f97\u5230\u547d\u540d\u6269\u5c55\u5c5e\u6027\u503c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-d"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u83b7\u5f97\u6240\u6709\u6269\u5c55\u5c5e\u6027\u503c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-e<\u7f16\u7801>"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7f16\u7801\u503c\uff08\u4e3a\u6587\u672c\u3001\u5341\u516d\u8fdb\u5236\u6216base64\u7f16\u7801\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u5f15\u7528\u7b26\u53f7\u94fe\u63a5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-R"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9012\u5f52\u5230\u5b50\u76ee\u5f55")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-m<\u6a21\u5f0f>"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5305\u62ec\u540d\u79f0\u5339\u914d\u6b63\u5219\u8868\u8fbe\u5f0f\u6a21\u5f0f\u7684\u5c5e\u6027")))),(0,n.kt)("h2",{id:"\u547d\u4ee4\u5b9e\u6218"},"\u547d\u4ee4\u5b9e\u6218"),(0,n.kt)("p",null,"\u67e5\u770b/root/mylinux.cfg\u6587\u4ef6\u7684\u6269\u5c55\u5c5e\u6027\u503c\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# getfattr -d -m /root/mylinux.cfg\n")),(0,n.kt)("p",null,"\u67e5\u770b\u6587\u4ef6\u6307\u5b9a\u7684\u6269\u5c55\u5c5e\u6027\uff1a\n","[root@mylinux ~]","# getfattr -n \u2018trusted.gfid\u2019 -d -e hex --absolute-names $(vs_quick_lookup.sh vm-disk-1.qcow2 | grep $(hostname) | awk -F \u201c:\u201d \u2018{print $2}\u2019 )\n\u7edf\u8ba1cephfs\u76ee\u5f55\u4e0b\u5b58\u653e\u7684\u6570\u636e\u91cf\u4ee5\u53ca\u6765\u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf\u7ed9\u51fa\u7684\u6269\u5c55\u5c5e\u6027\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# getfattr -d -m ceph.dir.* /mnt/cephfs\n")))}f.isMDXComponent=!0}}]);