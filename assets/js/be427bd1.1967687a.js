"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[4476],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>s});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),i=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=i(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),m=i(r),s=n,k=m["".concat(p,".").concat(s)]||m[s]||d[s]||l;return r?a.createElement(k,o(o({ref:e},u),{},{components:r})):a.createElement(k,o({ref:e},u))}));function s(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:n,o[1]=c;for(var i=2;i<l;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8105:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var a=r(7462),n=(r(7294),r(3905));const l={title:"clock\u547d\u4ee4 \u2013 \u8c03\u6574 RTC \u65f6\u95f4",summary:"clock\u547d\u4ee4\u7684\u4f5c\u7528\u662f\u8c03\u6574 RTC \u65f6\u95f4\u3002RTC\u662f\u7535\u8111\u5185\u5efa\u7684\u786c\u4ef6\u65f6\u95f4\uff0c\u6267\u884c\u8fd9\u9879\u6307\u4ee4\u53ef\u4ee5\u663e\u793a\u73b0\u5728\u65f6\u523b\uff0c\u8c03\u6574\u786c\u4ef6\u65f6\u949f\u7684\u65f6\u95f4\uff0c\u5c06\u7cfb\u7edf\u65f6\u95f4\u8bbe\u6210\u4e0e\u786c\u4ef6\u65f6\u949f\u4e4b\u65f6\u95f4\u4e00\u81f4\uff0c\u6216\u662f\u628a\u7cfb\u7edf\u65f6\u95f4\u56de\u5b58\u5230\u786c\u4ef6\u65f6\u949f\u3002",meta_keywords:"clock\u547d\u4ee4,\u8c03\u6574 RTC \u65f6\u95f4",meta_description:"clock\u547d\u4ee4 \u2013 \u8c03\u6574 RTC \u65f6\u95f4",categories:"linux",tag:"linux\u547d\u4ee4"},o=void 0,c={unversionedId:"\u8bbe\u5907\u7ba1\u7406/clock\u547d\u4ee4 \u2013 \u8c03\u6574 RTC \u65f6\u95f4",id:"\u8bbe\u5907\u7ba1\u7406/clock\u547d\u4ee4 \u2013 \u8c03\u6574 RTC \u65f6\u95f4",title:"clock\u547d\u4ee4 \u2013 \u8c03\u6574 RTC \u65f6\u95f4",description:"clock\u547d\u4ee4\u7684\u4f5c\u7528\u662f\u8c03\u6574 RTC \u65f6\u95f4\u3002RTC\u662f\u7535\u8111\u5185\u5efa\u7684\u786c\u4ef6\u65f6\u95f4\uff0c\u6267\u884c\u8fd9\u9879\u6307\u4ee4\u53ef\u4ee5\u663e\u793a\u73b0\u5728\u65f6\u523b\uff0c\u8c03\u6574\u786c\u4ef6\u65f6\u949f\u7684\u65f6\u95f4\uff0c\u5c06\u7cfb\u7edf\u65f6\u95f4\u8bbe\u6210\u4e0e\u786c\u4ef6\u65f6\u949f\u4e4b\u65f6\u95f4\u4e00\u81f4\uff0c\u6216\u662f\u628a\u7cfb\u7edf\u65f6\u95f4\u56de\u5b58\u5230\u786c\u4ef6\u65f6\u949f\u3002",source:"@site/docs/\u8bbe\u5907\u7ba1\u7406/clock\u547d\u4ee4 \u2013 \u8c03\u6574 RTC \u65f6\u95f4.md",sourceDirName:"\u8bbe\u5907\u7ba1\u7406",slug:"/\u8bbe\u5907\u7ba1\u7406/clock\u547d\u4ee4 \u2013 \u8c03\u6574 RTC \u65f6\u95f4",permalink:"/docs/\u8bbe\u5907\u7ba1\u7406/clock\u547d\u4ee4 \u2013 \u8c03\u6574 RTC \u65f6\u95f4",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u8bbe\u5907\u7ba1\u7406/clock\u547d\u4ee4 \u2013 \u8c03\u6574 RTC \u65f6\u95f4.md",tags:[],version:"current",frontMatter:{title:"clock\u547d\u4ee4 \u2013 \u8c03\u6574 RTC \u65f6\u95f4",summary:"clock\u547d\u4ee4\u7684\u4f5c\u7528\u662f\u8c03\u6574 RTC \u65f6\u95f4\u3002RTC\u662f\u7535\u8111\u5185\u5efa\u7684\u786c\u4ef6\u65f6\u95f4\uff0c\u6267\u884c\u8fd9\u9879\u6307\u4ee4\u53ef\u4ee5\u663e\u793a\u73b0\u5728\u65f6\u523b\uff0c\u8c03\u6574\u786c\u4ef6\u65f6\u949f\u7684\u65f6\u95f4\uff0c\u5c06\u7cfb\u7edf\u65f6\u95f4\u8bbe\u6210\u4e0e\u786c\u4ef6\u65f6\u949f\u4e4b\u65f6\u95f4\u4e00\u81f4\uff0c\u6216\u662f\u628a\u7cfb\u7edf\u65f6\u95f4\u56de\u5b58\u5230\u786c\u4ef6\u65f6\u949f\u3002",meta_keywords:"clock\u547d\u4ee4,\u8c03\u6574 RTC \u65f6\u95f4",meta_description:"clock\u547d\u4ee4 \u2013 \u8c03\u6574 RTC \u65f6\u95f4",categories:"linux",tag:"linux\u547d\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"chcpu\u547d\u4ee4 \u2013 \u914d\u7f6eCPU",permalink:"/docs/\u8bbe\u5907\u7ba1\u7406/chcpu\u547d\u4ee4 \u2013 \u914d\u7f6eCPU"},next:{title:"cpuspeed\u547d\u4ee4 \u2013 \u7528\u6237\u7a7a\u95f4\u7684CPU\u9891\u7387\u8c03\u8282",permalink:"/docs/\u8bbe\u5907\u7ba1\u7406/cpuspeed\u547d\u4ee4 \u2013 \u7528\u6237\u7a7a\u95f4\u7684CPU\u9891\u7387\u8c03\u8282"}},p={},i=[{value:"\u8bed\u6cd5\u683c\u5f0f:",id:"\u8bed\u6cd5\u683c\u5f0f",level:2},{value:"\u5e38\u7528\u53c2\u6570\uff1a",id:"\u5e38\u7528\u53c2\u6570",level:2},{value:"\u547d\u4ee4\u5b9e\u6218",id:"\u547d\u4ee4\u5b9e\u6218",level:2}],u={toc:i};function d(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"clock\u547d\u4ee4\u7684\u4f5c\u7528\u662f\u8c03\u6574 RTC \u65f6\u95f4\u3002RTC\u662f\u7535\u8111\u5185\u5efa\u7684\u786c\u4ef6\u65f6\u95f4\uff0c\u6267\u884c\u8fd9\u9879\u6307\u4ee4\u53ef\u4ee5\u663e\u793a\u73b0\u5728\u65f6\u523b\uff0c\u8c03\u6574\u786c\u4ef6\u65f6\u949f\u7684\u65f6\u95f4\uff0c\u5c06\u7cfb\u7edf\u65f6\u95f4\u8bbe\u6210\u4e0e\u786c\u4ef6\u65f6\u949f\u4e4b\u65f6\u95f4\u4e00\u81f4\uff0c\u6216\u662f\u628a\u7cfb\u7edf\u65f6\u95f4\u56de\u5b58\u5230\u786c\u4ef6\u65f6\u949f\u3002"),(0,n.kt)("h2",{id:"\u8bed\u6cd5\u683c\u5f0f"},"\u8bed\u6cd5\u683c\u5f0f:"),(0,n.kt)("p",null,"clock ","[\u53c2\u6570]"),(0,n.kt)("h2",{id:"\u5e38\u7528\u53c2\u6570"},"\u5e38\u7528\u53c2\u6570\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-- -adjust"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u81ea\u52a8\u8c03\u6574\u786c\u4ef6\u65f6\u949f\u65f6\u95f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-- -debug"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8be6\u7ec6\u663e\u793a\u6307\u4ee4\u6267\u884c\u8fc7\u7a0b\uff0c\u4fbf\u4e8e\u6392\u9519\u6216\u4e86\u89e3\u7a0b\u5e8f\u6267\u884c\u7684\u60c5\u5f62")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-- -directisa"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u901a\u8fc7\u8bbe\u5907\u6587\u4ef6/etc/rtc\uff0c\u76f4\u63a5\u5bf9\u786c\u4ef6\u65f6\u949f\u8fdb\u884c\u5b58\u53d6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-- -getepoch"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8f93\u51fa\u786c\u4ef6\u65f6\u949f\u7684\u6570\u503c\u5230\u6807\u51c6\u8f93\u51fa")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-- -hctosys"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u65f6\u949f\u540c\u6b65\uff0c\u4f7f\u7cfb\u7edf\u65f6\u949f\u548c\u786c\u4ef6\u65f6\u949f\u540c\u6b65")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-- -set- -date"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u786c\u4ef6\u65f6\u95f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-- -show"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u663e\u793a\u786c\u4ef6\u65f6\u949f\u5230\u6807\u51c6\u8f93\u51fa")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-- -systohc"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7cfb\u7edf\u65f6\u95f4\u5199\u5165\u786c\u4ef6\u65f6\u949f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-- -test"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4ec5\u4f5c\u6d4b\u8bd5\uff0c\u5e76\u4e0d\u771f\u7684\u5c06\u65f6\u95f4\u5199\u5165\u786c\u4ef6\u65f6\u949f\u6216\u7cfb\u7edf\u65f6\u95f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-- -utc"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u628a\u786c\u4ef6\u65f6\u949f\u4e0a\u7684\u65f6\u95f4\u65f6\u4e3aCUT\uff0c\u6709\u65f6\u4e5f\u79f0\u4e3aUTC\u6216UCT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"-- -version"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u663e\u793a\u7248\u672c\u4fe1\u606f")))),(0,n.kt)("h2",{id:"\u547d\u4ee4\u5b9e\u6218"},"\u547d\u4ee4\u5b9e\u6218"),(0,n.kt)("p",null,"\u663e\u793a\u5f53\u524d\u786c\u4ef6\u65f6\u949f\u65f6\u95f4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# clock\n2019\u5e7412\u670812\u65e5 \u661f\u671f\u56db 15\u65f611\u520607\u79d2  -0.578708 \u79d2\n")),(0,n.kt)("p",null,"\u663e\u793autc\u786c\u4ef6\u65f6\u949f\u65f6\u95f4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# clock --utc\n2019\u5e7412\u670812\u65e5 \u661f\u671f\u56db 15\u65f612\u520630\u79d2  -0.442566 \u79d2\n")),(0,n.kt)("p",null,"\u540c\u6b65\u65f6\u95f4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# clock --hctosys\n")))}d.isMDXComponent=!0}}]);