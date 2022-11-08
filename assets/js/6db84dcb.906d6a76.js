"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[7595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},i=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,u=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||s[d]||u;return n?r.createElement(f,a(a({ref:t},i),{},{components:n})):r.createElement(f,a({ref:t},i))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=n.length,a=new Array(u);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var m=2;m<u;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>u,metadata:()=>l,toc:()=>m});var r=n(7462),o=(n(7294),n(3905));const u={title:"mount\u547d\u4ee4 \u2013 \u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d",summary:"mount\u547d\u4ee4\u7528\u4e8e\u52a0\u8f7d\u6587\u4ef6\u7cfb\u7edf\u5230\u6307\u5b9a\u7684\u52a0\u8f7d\u70b9\u3002\u6b64\u547d\u4ee4\u7684\u6700\u5e38\u7528\u4e8e\u6302\u8f7dcdrom\uff0c\u4f7f\u6211\u4eec\u53ef\u4ee5\u8bbf\u95eecdrom\u4e2d\u7684\u6570\u636e\uff0c\u56e0\u4e3a\u4f60\u5c06\u5149\u76d8\u63d2\u5165cdrom\u4e2d\uff0cLinux\u5e76\u4e0d\u4f1a\u81ea\u52a8\u6302\u8f7d\uff0c\u5fc5\u987b\u4f7f\u7528Linux mount\u547d\u4ee4\u6765\u624b\u52a8\u5b8c\u6210\u6302\u8f7d\u3002",meta_keywords:"mount\u547d\u4ee4,\u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d",meta_description:"mount\u547d\u4ee4 \u2013 \u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d",categories:"linux",tag:"linux\u547d\u4ee4"},a=void 0,l={unversionedId:"\u8bbe\u5907\u7ba1\u7406/mount\u547d\u4ee4 \u2013 \u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d",id:"\u8bbe\u5907\u7ba1\u7406/mount\u547d\u4ee4 \u2013 \u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d",title:"mount\u547d\u4ee4 \u2013 \u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d",description:"mount\u547d\u4ee4\u7528\u4e8e\u52a0\u8f7d\u6587\u4ef6\u7cfb\u7edf\u5230\u6307\u5b9a\u7684\u52a0\u8f7d\u70b9\u3002\u6b64\u547d\u4ee4\u7684\u6700\u5e38\u7528\u4e8e\u6302\u8f7dcdrom\uff0c\u4f7f\u6211\u4eec\u53ef\u4ee5\u8bbf\u95eecdrom\u4e2d\u7684\u6570\u636e\uff0c\u56e0\u4e3a\u4f60\u5c06\u5149\u76d8\u63d2\u5165cdrom\u4e2d\uff0cLinux\u5e76\u4e0d\u4f1a\u81ea\u52a8\u6302\u8f7d\uff0c\u5fc5\u987b\u4f7f\u7528Linux mount\u547d\u4ee4\u6765\u624b\u52a8\u5b8c\u6210\u6302\u8f7d\u3002",source:"@site/docs/\u8bbe\u5907\u7ba1\u7406/mount\u547d\u4ee4 \u2013 \u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d.md",sourceDirName:"\u8bbe\u5907\u7ba1\u7406",slug:"/\u8bbe\u5907\u7ba1\u7406/mount\u547d\u4ee4 \u2013 \u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d",permalink:"/docs/\u8bbe\u5907\u7ba1\u7406/mount\u547d\u4ee4 \u2013 \u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u8bbe\u5907\u7ba1\u7406/mount\u547d\u4ee4 \u2013 \u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d.md",tags:[],version:"current",frontMatter:{title:"mount\u547d\u4ee4 \u2013 \u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d",summary:"mount\u547d\u4ee4\u7528\u4e8e\u52a0\u8f7d\u6587\u4ef6\u7cfb\u7edf\u5230\u6307\u5b9a\u7684\u52a0\u8f7d\u70b9\u3002\u6b64\u547d\u4ee4\u7684\u6700\u5e38\u7528\u4e8e\u6302\u8f7dcdrom\uff0c\u4f7f\u6211\u4eec\u53ef\u4ee5\u8bbf\u95eecdrom\u4e2d\u7684\u6570\u636e\uff0c\u56e0\u4e3a\u4f60\u5c06\u5149\u76d8\u63d2\u5165cdrom\u4e2d\uff0cLinux\u5e76\u4e0d\u4f1a\u81ea\u52a8\u6302\u8f7d\uff0c\u5fc5\u987b\u4f7f\u7528Linux mount\u547d\u4ee4\u6765\u624b\u52a8\u5b8c\u6210\u6302\u8f7d\u3002",meta_keywords:"mount\u547d\u4ee4,\u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d",meta_description:"mount\u547d\u4ee4 \u2013 \u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d",categories:"linux",tag:"linux\u547d\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"mev\u547d\u4ee4 \u2013 \u62a5\u544a\u9f20\u6807\u4e8b\u4ef6",permalink:"/docs/\u8bbe\u5907\u7ba1\u7406/mev\u547d\u4ee4 \u2013 \u62a5\u544a\u9f20\u6807\u4e8b\u4ef6"},next:{title:"mouseconfig\u547d\u4ee4 \u2013 \u8bbe\u7f6e\u9f20\u6807\u76f8\u5173\u53c2\u6570",permalink:"/docs/\u8bbe\u5907\u7ba1\u7406/mouseconfig\u547d\u4ee4 \u2013 \u8bbe\u7f6e\u9f20\u6807\u76f8\u5173\u53c2\u6570"}},c={},m=[{value:"\u8bed\u6cd5\u683c\u5f0f\uff1a",id:"\u8bed\u6cd5\u683c\u5f0f",level:2},{value:"\u5e38\u7528\u53c2\u6570\uff1a\ufeff",id:"\u5e38\u7528\u53c2\u6570",level:2},{value:"\u547d\u4ee4\u5b9e\u6218\ufeff",id:"\u547d\u4ee4\u5b9e\u6218",level:2}],i={toc:m};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"mount\u547d\u4ee4\u7528\u4e8e\u52a0\u8f7d\u6587\u4ef6\u7cfb\u7edf\u5230\u6307\u5b9a\u7684\u52a0\u8f7d\u70b9\u3002\u6b64\u547d\u4ee4\u7684\u6700\u5e38\u7528\u4e8e\u6302\u8f7dcdrom\uff0c\u4f7f\u6211\u4eec\u53ef\u4ee5\u8bbf\u95eecdrom\u4e2d\u7684\u6570\u636e\uff0c\u56e0\u4e3a\u4f60\u5c06\u5149\u76d8\u63d2\u5165cdrom\u4e2d\uff0cLinux\u5e76\u4e0d\u4f1a\u81ea\u52a8\u6302\u8f7d\uff0c\u5fc5\u987b\u4f7f\u7528Linux mount\u547d\u4ee4\u6765\u624b\u52a8\u5b8c\u6210\u6302\u8f7d\u3002"),(0,o.kt)("h2",{id:"\u8bed\u6cd5\u683c\u5f0f"},"\u8bed\u6cd5\u683c\u5f0f\uff1a"),(0,o.kt)("p",null,"mount ","[\u53c2\u6570]"),(0,o.kt)("h2",{id:"\u5e38\u7528\u53c2\u6570"},"\u5e38\u7528\u53c2\u6570\uff1a\ufeff"),(0,o.kt)("h2",{id:"\u547d\u4ee4\u5b9e\u6218"},"\u547d\u4ee4\u5b9e\u6218\ufeff"),(0,o.kt)("p",null,"\u67e5\u770b\u7248\u672c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# mount -V\n")),(0,o.kt)("p",null,"\u542f\u52a8\u6240\u6709\u6302\u8f7d\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# mount -a\n")),(0,o.kt)("p",null,"\u6302\u8f7d /dev/cdrom \u5230 /mnt\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# mount /dev/cdrom /mnt\n")),(0,o.kt)("p",null,"\u6302\u8f7dnfs\u683c\u5f0f\u6587\u4ef6\u7cfb\u7edf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# mount -t nfs /123 /mnt\n")),(0,o.kt)("p",null,"\u6302\u8f7d\u7b2c\u4e00\u5757\u76d8\u7684\u7b2c\u4e00\u4e2a\u5206\u533a\u5230/etc\u76ee\u5f55 \uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"[root@mylinux ~]# mount -t ext4 -o loop,default /dev/sda1 /etc\n")))}s.isMDXComponent=!0}}]);