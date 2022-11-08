"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[6535],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var p=n.createContext({}),a=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=a(e.components);return n.createElement(p.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=a(r),f=c,m=d["".concat(p,".").concat(f)]||d[f]||i[f]||o;return r?n.createElement(m,u(u({ref:t},s),{},{components:r})):n.createElement(m,u({ref:t},s))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,u=new Array(o);u[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:c,u[1]=l;for(var a=2;a<o;a++)u[a]=r[a];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2111:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>i,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var n=r(7462),c=(r(7294),r(3905));const o={title:"lscpu\u547d\u4ee4 \u2013 \u663e\u793aCPU\u67b6\u6784\u7684\u6709\u5173\u4fe1\u606f",summary:"lscpu\u547d\u4ee4\u4ecesysfs\u548c/proc/cpuinfo\u6536\u96c6cpu\u4f53\u7cfb\u7ed3\u6784\u4fe1\u606f\uff0c\u547d\u4ee4\u7684\u8f93\u51fa\u6bd4\u8f83\u6613\u8bfb\uff0c\u547d\u4ee4\u8f93\u51fa\u7684\u4fe1\u606f\u5305\u542bcpu\u6570\u91cf\uff0c\u7ebf\u7a0b\uff0c\u6838\u6570\uff0c\u5957\u63a5\u5b57\u7b49\u3002",meta_keywords:"lscpu\u547d\u4ee4,\u663e\u793aCPU\u67b6\u6784\u7684\u6709\u5173\u4fe1\u606f",meta_description:"lscpu\u547d\u4ee4 \u2013 \u663e\u793aCPU\u67b6\u6784\u7684\u6709\u5173\u4fe1\u606f",categories:"linux",tag:"linux\u547d\u4ee4"},u=void 0,l={unversionedId:"\u8bbe\u5907\u7ba1\u7406/lscpu\u547d\u4ee4 \u2013 \u663e\u793aCPU\u67b6\u6784\u7684\u6709\u5173\u4fe1\u606f",id:"\u8bbe\u5907\u7ba1\u7406/lscpu\u547d\u4ee4 \u2013 \u663e\u793aCPU\u67b6\u6784\u7684\u6709\u5173\u4fe1\u606f",title:"lscpu\u547d\u4ee4 \u2013 \u663e\u793aCPU\u67b6\u6784\u7684\u6709\u5173\u4fe1\u606f",description:"lscpu\u547d\u4ee4\u4ecesysfs\u548c/proc/cpuinfo\u6536\u96c6cpu\u4f53\u7cfb\u7ed3\u6784\u4fe1\u606f\uff0c\u547d\u4ee4\u7684\u8f93\u51fa\u6bd4\u8f83\u6613\u8bfb\uff0c\u547d\u4ee4\u8f93\u51fa\u7684\u4fe1\u606f\u5305\u542bcpu\u6570\u91cf\uff0c\u7ebf\u7a0b\uff0c\u6838\u6570\uff0c\u5957\u63a5\u5b57\u7b49\u3002",source:"@site/docs/\u8bbe\u5907\u7ba1\u7406/lscpu\u547d\u4ee4 \u2013 \u663e\u793aCPU\u67b6\u6784\u7684\u6709\u5173\u4fe1\u606f.md",sourceDirName:"\u8bbe\u5907\u7ba1\u7406",slug:"/\u8bbe\u5907\u7ba1\u7406/lscpu\u547d\u4ee4 \u2013 \u663e\u793aCPU\u67b6\u6784\u7684\u6709\u5173\u4fe1\u606f",permalink:"/docs/\u8bbe\u5907\u7ba1\u7406/lscpu\u547d\u4ee4 \u2013 \u663e\u793aCPU\u67b6\u6784\u7684\u6709\u5173\u4fe1\u606f",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u8bbe\u5907\u7ba1\u7406/lscpu\u547d\u4ee4 \u2013 \u663e\u793aCPU\u67b6\u6784\u7684\u6709\u5173\u4fe1\u606f.md",tags:[],version:"current",frontMatter:{title:"lscpu\u547d\u4ee4 \u2013 \u663e\u793aCPU\u67b6\u6784\u7684\u6709\u5173\u4fe1\u606f",summary:"lscpu\u547d\u4ee4\u4ecesysfs\u548c/proc/cpuinfo\u6536\u96c6cpu\u4f53\u7cfb\u7ed3\u6784\u4fe1\u606f\uff0c\u547d\u4ee4\u7684\u8f93\u51fa\u6bd4\u8f83\u6613\u8bfb\uff0c\u547d\u4ee4\u8f93\u51fa\u7684\u4fe1\u606f\u5305\u542bcpu\u6570\u91cf\uff0c\u7ebf\u7a0b\uff0c\u6838\u6570\uff0c\u5957\u63a5\u5b57\u7b49\u3002",meta_keywords:"lscpu\u547d\u4ee4,\u663e\u793aCPU\u67b6\u6784\u7684\u6709\u5173\u4fe1\u606f",meta_description:"lscpu\u547d\u4ee4 \u2013 \u663e\u793aCPU\u67b6\u6784\u7684\u6709\u5173\u4fe1\u606f",categories:"linux",tag:"linux\u547d\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"lp\u547d\u4ee4 \u2013 \u6253\u5370\u6587\u4ef6\u6216\u8005\u4fee\u6539\u6392\u961f\u7684\u6253\u5370\u4efb\u52a1",permalink:"/docs/\u8bbe\u5907\u7ba1\u7406/lp\u547d\u4ee4 \u2013 \u6253\u5370\u6587\u4ef6\u6216\u8005\u4fee\u6539\u6392\u961f\u7684\u6253\u5370\u4efb\u52a1"},next:{title:"lspci\u547d\u4ee4 \u2013 \u663e\u793a\u5f53\u524d\u8bbe\u5907\u6240\u6709PCI\u603b\u7ebf\u4fe1\u606f",permalink:"/docs/\u8bbe\u5907\u7ba1\u7406/lspci\u547d\u4ee4 \u2013 \u663e\u793a\u5f53\u524d\u8bbe\u5907\u6240\u6709PCI\u603b\u7ebf\u4fe1\u606f"}},p={},a=[{value:"\u8bed\u6cd5\u683c\u5f0f\uff1a",id:"\u8bed\u6cd5\u683c\u5f0f",level:2},{value:"\u5e38\u7528\u53c2\u6570\uff1a",id:"\u5e38\u7528\u53c2\u6570",level:2},{value:"\u547d\u4ee4\u5b9e\u6218",id:"\u547d\u4ee4\u5b9e\u6218",level:2}],s={toc:a};function i(e){let{components:t,...r}=e;return(0,c.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"lscpu\u547d\u4ee4\u4ecesysfs\u548c/proc/cpuinfo\u6536\u96c6cpu\u4f53\u7cfb\u7ed3\u6784\u4fe1\u606f\uff0c\u547d\u4ee4\u7684\u8f93\u51fa\u6bd4\u8f83\u6613\u8bfb\uff0c\u547d\u4ee4\u8f93\u51fa\u7684\u4fe1\u606f\u5305\u542bcpu\u6570\u91cf\uff0c\u7ebf\u7a0b\uff0c\u6838\u6570\uff0c\u5957\u63a5\u5b57\u7b49\u3002"),(0,c.kt)("h2",{id:"\u8bed\u6cd5\u683c\u5f0f"},"\u8bed\u6cd5\u683c\u5f0f\uff1a"),(0,c.kt)("p",null,"lscpu ","[\u53c2\u6570]"),(0,c.kt)("h2",{id:"\u5e38\u7528\u53c2\u6570"},"\u5e38\u7528\u53c2\u6570\uff1a"),(0,c.kt)("h2",{id:"\u547d\u4ee4\u5b9e\u6218"},"\u547d\u4ee4\u5b9e\u6218"),(0,c.kt)("p",null,"\u663e\u793a\u6709\u5173CPU\u67b6\u6784\u7684\u4fe1\u606f\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# lscpu\nArchitecture:          x86_64\n CPU op-mode(s):        32-bit, 64-bit\n Byte Order:            Little Endian\n")))}i.isMDXComponent=!0}}]);