"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[4e3],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>s});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),c=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},d=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=c(r),s=a,f=m["".concat(i,".").concat(s)]||m[s]||u[s]||l;return r?n.createElement(f,p(p({ref:e},d),{},{components:r})):n.createElement(f,p({ref:e},d))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,p=new Array(l);p[0]=m;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:a,p[1]=o;for(var c=2;c<l;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4802:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={title:"ntpd\u547d\u4ee4 \u2013 \u7f51\u7edc\u65f6\u95f4\u534f\u8bae(NTP)\u5b88\u62a4\u8fdb\u7a0b",summary:"ntpd\u5b9e\u7528\u7a0b\u5e8f\u662f\u4e00\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u5b88\u62a4\u7a0b\u5e8f\uff0c\u5b83\u53ef\u4ee5\u8bbe\u7f6e\u548c\u7ef4\u62a4\u7cfb\u7edf\u7684\u65f6\u95f4\u4e0e\u4e92\u8054\u7f51\u6807\u51c6\u65f6\u95f4\u670d\u52a1\u5668\u540c\u6b65\u3002\u5b83\u662fRFC-5905\u5b9a\u4e49\u7684\u7f51\u7edc\u65f6\u95f4\u534f\u8bae\uff08NTP\uff09\u7b2c4\u7248\u7684\u5b8c\u6574\u5b9e\u73b0\uff0c\u540c\u65f6\u4e5f\u662fRFC-5905\u5b9a\u4e49\u7684\u7f51\u7edc\u65f6\u95f4\u534f\u8bae\uff08NTP\uff09\u7684\u5b8c\u6574\u5b9e\u73b0\u3002",meta_keywords:"ntpd\u547d\u4ee4,\u7f51\u7edc\u65f6\u95f4\u534f\u8bae(NTP)\u5b88\u62a4\u8fdb\u7a0b",meta_description:"ntpd\u547d\u4ee4 \u2013 \u7f51\u7edc\u65f6\u95f4\u534f\u8bae(NTP)\u5b88\u62a4\u8fdb\u7a0b",categories:"linux",tag:"linux\u547d\u4ee4"},p=void 0,o={unversionedId:"\u7f51\u7edc\u901a\u8baf/ntpd\u547d\u4ee4 \u2013 \u7f51\u7edc\u65f6\u95f4\u534f\u8bae(NTP)\u5b88\u62a4\u8fdb\u7a0b",id:"\u7f51\u7edc\u901a\u8baf/ntpd\u547d\u4ee4 \u2013 \u7f51\u7edc\u65f6\u95f4\u534f\u8bae(NTP)\u5b88\u62a4\u8fdb\u7a0b",title:"ntpd\u547d\u4ee4 \u2013 \u7f51\u7edc\u65f6\u95f4\u534f\u8bae(NTP)\u5b88\u62a4\u8fdb\u7a0b",description:"ntpd\u5b9e\u7528\u7a0b\u5e8f\u662f\u4e00\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u5b88\u62a4\u7a0b\u5e8f\uff0c\u5b83\u53ef\u4ee5\u8bbe\u7f6e\u548c\u7ef4\u62a4\u7cfb\u7edf\u7684\u65f6\u95f4\u4e0e\u4e92\u8054\u7f51\u6807\u51c6\u65f6\u95f4\u670d\u52a1\u5668\u540c\u6b65\u3002\u5b83\u662fRFC-5905\u5b9a\u4e49\u7684\u7f51\u7edc\u65f6\u95f4\u534f\u8bae\uff08NTP\uff09\u7b2c4\u7248\u7684\u5b8c\u6574\u5b9e\u73b0\uff0c\u540c\u65f6\u4e5f\u662fRFC-5905\u5b9a\u4e49\u7684\u7f51\u7edc\u65f6\u95f4\u534f\u8bae\uff08NTP\uff09\u7684\u5b8c\u6574\u5b9e\u73b0\u3002",source:"@site/docs/\u7f51\u7edc\u901a\u8baf/ntpd\u547d\u4ee4 \u2013 \u7f51\u7edc\u65f6\u95f4\u534f\u8bae(NTP)\u5b88\u62a4\u8fdb\u7a0b.md",sourceDirName:"\u7f51\u7edc\u901a\u8baf",slug:"/\u7f51\u7edc\u901a\u8baf/ntpd\u547d\u4ee4 \u2013 \u7f51\u7edc\u65f6\u95f4\u534f\u8bae(NTP)\u5b88\u62a4\u8fdb\u7a0b",permalink:"/docs/\u7f51\u7edc\u901a\u8baf/ntpd\u547d\u4ee4 \u2013 \u7f51\u7edc\u65f6\u95f4\u534f\u8bae(NTP)\u5b88\u62a4\u8fdb\u7a0b",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u7f51\u7edc\u901a\u8baf/ntpd\u547d\u4ee4 \u2013 \u7f51\u7edc\u65f6\u95f4\u534f\u8bae(NTP)\u5b88\u62a4\u8fdb\u7a0b.md",tags:[],version:"current",frontMatter:{title:"ntpd\u547d\u4ee4 \u2013 \u7f51\u7edc\u65f6\u95f4\u534f\u8bae(NTP)\u5b88\u62a4\u8fdb\u7a0b",summary:"ntpd\u5b9e\u7528\u7a0b\u5e8f\u662f\u4e00\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u5b88\u62a4\u7a0b\u5e8f\uff0c\u5b83\u53ef\u4ee5\u8bbe\u7f6e\u548c\u7ef4\u62a4\u7cfb\u7edf\u7684\u65f6\u95f4\u4e0e\u4e92\u8054\u7f51\u6807\u51c6\u65f6\u95f4\u670d\u52a1\u5668\u540c\u6b65\u3002\u5b83\u662fRFC-5905\u5b9a\u4e49\u7684\u7f51\u7edc\u65f6\u95f4\u534f\u8bae\uff08NTP\uff09\u7b2c4\u7248\u7684\u5b8c\u6574\u5b9e\u73b0\uff0c\u540c\u65f6\u4e5f\u662fRFC-5905\u5b9a\u4e49\u7684\u7f51\u7edc\u65f6\u95f4\u534f\u8bae\uff08NTP\uff09\u7684\u5b8c\u6574\u5b9e\u73b0\u3002",meta_keywords:"ntpd\u547d\u4ee4,\u7f51\u7edc\u65f6\u95f4\u534f\u8bae(NTP)\u5b88\u62a4\u8fdb\u7a0b",meta_description:"ntpd\u547d\u4ee4 \u2013 \u7f51\u7edc\u65f6\u95f4\u534f\u8bae(NTP)\u5b88\u62a4\u8fdb\u7a0b",categories:"linux",tag:"linux\u547d\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"ntpdc\u547d\u4ee4 \u2013 \u67e5\u8be2NTP\u5b88\u62a4\u8fdb\u7a0b",permalink:"/docs/\u7f51\u7edc\u901a\u8baf/ntpdc\u547d\u4ee4 \u2013 \u67e5\u8be2NTP\u5b88\u62a4\u8fdb\u7a0b"},next:{title:"ntptrace\u547d\u4ee4 \u2013 \u8ffd\u8e2aNTP\u670d\u52a1\u5668\u94fe",permalink:"/docs/\u7f51\u7edc\u901a\u8baf/ntptrace\u547d\u4ee4 \u2013 \u8ffd\u8e2aNTP\u670d\u52a1\u5668\u94fe"}},i={},c=[{value:"\u8bed\u6cd5\u683c\u5f0f\uff1a",id:"\u8bed\u6cd5\u683c\u5f0f",level:2},{value:"\u5e38\u7528\u53c2\u6570\uff1a",id:"\u5e38\u7528\u53c2\u6570",level:2},{value:"\u547d\u4ee4\u5b9e\u6218",id:"\u547d\u4ee4\u5b9e\u6218",level:2}],d={toc:c};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ntpd\u5b9e\u7528\u7a0b\u5e8f\u662f\u4e00\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u5b88\u62a4\u7a0b\u5e8f\uff0c\u5b83\u53ef\u4ee5\u8bbe\u7f6e\u548c\u7ef4\u62a4\u7cfb\u7edf\u7684\u65f6\u95f4\u4e0e\u4e92\u8054\u7f51\u6807\u51c6\u65f6\u95f4\u670d\u52a1\u5668\u540c\u6b65\u3002\u5b83\u662fRFC-5905\u5b9a\u4e49\u7684\u7f51\u7edc\u65f6\u95f4\u534f\u8bae\uff08NTP\uff09\u7b2c4\u7248\u7684\u5b8c\u6574\u5b9e\u73b0\uff0c\u540c\u65f6\u4e5f\u662fRFC-5905\u5b9a\u4e49\u7684\u7f51\u7edc\u65f6\u95f4\u534f\u8bae\uff08NTP\uff09\u7684\u5b8c\u6574\u5b9e\u73b0\u3002"),(0,a.kt)("h2",{id:"\u8bed\u6cd5\u683c\u5f0f"},"\u8bed\u6cd5\u683c\u5f0f\uff1a"),(0,a.kt)("p",null,"ntpd ","[\u53c2\u6570]"),(0,a.kt)("h2",{id:"\u5e38\u7528\u53c2\u6570"},"\u5e38\u7528\u53c2\u6570\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-a"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5bf9\u5e7f\u64ad\u5ba2\u6237\u7aef\u3001\u591a\u64ad\u5ba2\u6237\u7aef\u548c\u5bf9\u79f0\u88ab\u52a8\u5173\u8054\u8fdb\u884c\u52a0\u5bc6\u8ba4\u8bc1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-A"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5e7f\u64ad\u5ba2\u6237\u7aef\u3001\u591a\u64ad\u5ba2\u6237\u7aef\u548c\u5bf9\u79f0\u88ab\u52a8\u5173\u8054\u4e0d\u9700\u8981\u52a0\u5bc6\u8ba4\u8bc1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u542f\u7528\u5ba2\u6237\u7aef\u540c\u6b65\u5230\u5e7f\u64ad\u670d\u52a1\u5668")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-c conffile"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u7684\u540d\u79f0\u548c\u8def\u5f84\uff0c\u9ed8\u8ba4\u4e3a/etc/ntp/ntp.conf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-L"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u8981\u76d1\u542c\u865a\u62dfIP\uff0c\u9ed8\u8ba4\u662f\u76d1\u542c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"-d"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u4f7f\u7528\u8c03\u8bd5\u6a21\u5f0f")))),(0,a.kt)("h2",{id:"\u547d\u4ee4\u5b9e\u6218"},"\u547d\u4ee4\u5b9e\u6218"),(0,a.kt)("p",null,"\u5bf9\u5e7f\u64ad\u5ba2\u6237\u7aef\u3001\u591a\u64ad\u5ba2\u6237\u7aef\u548c\u5bf9\u79f0\u88ab\u52a8\u5173\u8054\u8fdb\u884c\u52a0\u5bc6\u8ba4\u8bc1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# ntpd -a\n")),(0,a.kt)("p",null,"\u5e7f\u64ad\u5ba2\u6237\u7aef\u3001\u591a\u64ad\u5ba2\u6237\u7aef\u548c\u5bf9\u79f0\u88ab\u52a8\u5173\u8054\u4e0d\u9700\u8981\u52a0\u5bc6\u8ba4\u8bc1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# ntpd -A\n")),(0,a.kt)("p",null,"\u542f\u7528\u5ba2\u6237\u7aef\u540c\u6b65\u5230\u5e7f\u64ad\u670d\u52a1\u5668\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# ntpd -b\n")))}u.isMDXComponent=!0}}]);