"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[5262],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=c(r),f=l,d=s["".concat(p,".").concat(f)]||s[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,i=new Array(o);i[0]=s;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},7228:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(7462),l=(r(7294),r(3905));const o={title:"tempfile\u547d\u4ee4 \u2013 \u4e34\u65f6\u6587\u4ef6\u547d\u540d",summary:"\u6709\u65f6\u5019\u5728\u5199Shell\u811a\u672c\u7684\u65f6\u5019\u9700\u8981\u4e00\u4e9b\u4e34\u65f6\u5b58\u50a8\u6570\u636e\u7684\u624d\u505a\uff0c\u6700\u9002\u5408\u5b58\u50a8\u4e34\u65f6\u6587\u4ef6\u6570\u636e\u7684\u4f4d\u7f6e\u5c31\u662f/tmp\uff0c\u56e0\u4e3a\u8be5\u76ee\u5f55\u4e2d\u6240\u6709\u7684\u5185\u5bb9\u5728\u7cfb\u7edf\u91cd\u542f\u540e\u5c31\u4f1a\u88ab\u6e05\u7a7a\u3002",meta_keywords:"tempfile\u547d\u4ee4,\u4e34\u65f6\u6587\u4ef6\u547d\u540d",meta_description:"tempfile\u547d\u4ee4 \u2013 \u4e34\u65f6\u6587\u4ef6\u547d\u540d",categories:"linux",tag:"linux\u547d\u4ee4"},i=void 0,a={unversionedId:"\u6587\u6863\u7f16\u8f91/tempfile\u547d\u4ee4 \u2013 \u4e34\u65f6\u6587\u4ef6\u547d\u540d",id:"\u6587\u6863\u7f16\u8f91/tempfile\u547d\u4ee4 \u2013 \u4e34\u65f6\u6587\u4ef6\u547d\u540d",title:"tempfile\u547d\u4ee4 \u2013 \u4e34\u65f6\u6587\u4ef6\u547d\u540d",description:"\u6709\u65f6\u5019\u5728\u5199Shell\u811a\u672c\u7684\u65f6\u5019\u9700\u8981\u4e00\u4e9b\u4e34\u65f6\u5b58\u50a8\u6570\u636e\u7684\u624d\u505a\uff0c\u6700\u9002\u5408\u5b58\u50a8\u4e34\u65f6\u6587\u4ef6\u6570\u636e\u7684\u4f4d\u7f6e\u5c31\u662f/tmp\uff0c\u56e0\u4e3a\u8be5\u76ee\u5f55\u4e2d\u6240\u6709\u7684\u5185\u5bb9\u5728\u7cfb\u7edf\u91cd\u542f\u540e\u5c31\u4f1a\u88ab\u6e05\u7a7a\u3002",source:"@site/docs/\u6587\u6863\u7f16\u8f91/tempfile\u547d\u4ee4 \u2013 \u4e34\u65f6\u6587\u4ef6\u547d\u540d.md",sourceDirName:"\u6587\u6863\u7f16\u8f91",slug:"/\u6587\u6863\u7f16\u8f91/tempfile\u547d\u4ee4 \u2013 \u4e34\u65f6\u6587\u4ef6\u547d\u540d",permalink:"/docs/\u6587\u6863\u7f16\u8f91/tempfile\u547d\u4ee4 \u2013 \u4e34\u65f6\u6587\u4ef6\u547d\u540d",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u6587\u6863\u7f16\u8f91/tempfile\u547d\u4ee4 \u2013 \u4e34\u65f6\u6587\u4ef6\u547d\u540d.md",tags:[],version:"current",frontMatter:{title:"tempfile\u547d\u4ee4 \u2013 \u4e34\u65f6\u6587\u4ef6\u547d\u540d",summary:"\u6709\u65f6\u5019\u5728\u5199Shell\u811a\u672c\u7684\u65f6\u5019\u9700\u8981\u4e00\u4e9b\u4e34\u65f6\u5b58\u50a8\u6570\u636e\u7684\u624d\u505a\uff0c\u6700\u9002\u5408\u5b58\u50a8\u4e34\u65f6\u6587\u4ef6\u6570\u636e\u7684\u4f4d\u7f6e\u5c31\u662f/tmp\uff0c\u56e0\u4e3a\u8be5\u76ee\u5f55\u4e2d\u6240\u6709\u7684\u5185\u5bb9\u5728\u7cfb\u7edf\u91cd\u542f\u540e\u5c31\u4f1a\u88ab\u6e05\u7a7a\u3002",meta_keywords:"tempfile\u547d\u4ee4,\u4e34\u65f6\u6587\u4ef6\u547d\u540d",meta_description:"tempfile\u547d\u4ee4 \u2013 \u4e34\u65f6\u6587\u4ef6\u547d\u540d",categories:"linux",tag:"linux\u547d\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"tail\u547d\u4ee4 \u2013 \u67e5\u770b\u6587\u4ef6\u5c3e\u90e8\u5185\u5bb9",permalink:"/docs/\u6587\u6863\u7f16\u8f91/tail\u547d\u4ee4 \u2013 \u67e5\u770b\u6587\u4ef6\u5c3e\u90e8\u5185\u5bb9"},next:{title:"tput\u547d\u4ee4 \u2013 \u521d\u59cb\u5316\u548c\u64cd\u4f5c\u4f1a\u8bdd",permalink:"/docs/\u6587\u6863\u7f16\u8f91/tput\u547d\u4ee4 \u2013 \u521d\u59cb\u5316\u548c\u64cd\u4f5c\u4f1a\u8bdd"}},p={},c=[{value:"\u8bed\u6cd5\u683c\u5f0f\uff1a",id:"\u8bed\u6cd5\u683c\u5f0f",level:2},{value:"\u5e38\u7528\u53c2\u6570\uff1a",id:"\u5e38\u7528\u53c2\u6570",level:2},{value:"\u547d\u4ee4\u5b9e\u6218",id:"\u547d\u4ee4\u5b9e\u6218",level:2}],u={toc:c};function m(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6709\u65f6\u5019\u5728\u5199Shell\u811a\u672c\u7684\u65f6\u5019\u9700\u8981\u4e00\u4e9b\u4e34\u65f6\u5b58\u50a8\u6570\u636e\u7684\u624d\u505a\uff0c\u6700\u9002\u5408\u5b58\u50a8\u4e34\u65f6\u6587\u4ef6\u6570\u636e\u7684\u4f4d\u7f6e\u5c31\u662f/tmp\uff0c\u56e0\u4e3a\u8be5\u76ee\u5f55\u4e2d\u6240\u6709\u7684\u5185\u5bb9\u5728\u7cfb\u7edf\u91cd\u542f\u540e\u5c31\u4f1a\u88ab\u6e05\u7a7a\u3002\ntempfile\u547d\u4ee4\u53ea\u6709\u5728\u57fa\u4e8eDebian\u7684\u53d1\u884c\u7248\u4e2d\u624d\u9ed8\u8ba4\u81ea\u5e26\uff0c\u6bd4\u5982Ubuntu\uff0c\u5176\u4ed6\u53d1\u884c\u7248\u6ca1\u6709\u8fd9\u4e2a\u547d\u4ee4\u3002"),(0,l.kt)("h2",{id:"\u8bed\u6cd5\u683c\u5f0f"},"\u8bed\u6cd5\u683c\u5f0f\uff1a"),(0,l.kt)("p",null,"tempfile ","[\u53c2\u6570]"),(0,l.kt)("h2",{id:"\u5e38\u7528\u53c2\u6570"},"\u5e38\u7528\u53c2\u6570\uff1a"),(0,l.kt)("h2",{id:"\u547d\u4ee4\u5b9e\u6218"},"\u547d\u4ee4\u5b9e\u6218"),(0,l.kt)("p",null,"\u7528\u4e00\u4e2a\u52a0\u5e26\u4e86\u968f\u673a\u6570\u7684\u6587\u4ef6\u540d\u4f5c\u4e3a\u4e34\u65f6\u6587\u4ef6\u547d\u540d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'[root@mylinux ~]# temp_file_name="/tmp/file_$RANDOM"\n')))}m.isMDXComponent=!0}}]);