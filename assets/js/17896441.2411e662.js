(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[918],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=i(n),p=r,h=u["".concat(c,".").concat(p)]||u[p]||d[p]||l;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7209:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>vt});var a=n(7294),r=n(6010),l=n(7462),o=n(5999),s=n(9960);function c(e){const{permalink:t,title:n,subLabel:l,isNext:o}=e;return a.createElement(s.Z,{className:(0,r.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}function i(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(c,(0,l.Z)({},t,{subLabel:a.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(c,(0,l.Z)({},n,{subLabel:a.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var m=n(2263),d=n(5551),u=n(373),p=n(5281),h=n(4477);const g={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function f(e){const t=g[e.versionMetadata.banner];return a.createElement(t,e)}function b(e){let{versionLabel:t,to:n,onClick:r}=e;return a.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(s.Z,{to:n,onClick:r},a.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,m.Z)(),{pluginId:o}=(0,d.gA)({failfast:!0}),{savePreferredVersionName:s}=(0,u.J)(o),{latestDocSuggestion:c,latestVersionSuggestion:i}=(0,d.Jo)(o),h=c??(g=i).docs.find((e=>e.id===g.mainDocId));var g;return a.createElement("div",{className:(0,r.Z)(t,p.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(f,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(b,{versionLabel:i.label,to:h.path,onClick:()=>s(i.name)})))}function E(e){let{className:t}=e;const n=(0,h.E)();return n.banner?a.createElement(v,{className:t,versionMetadata:n}):null}function y(e){let{className:t}=e;const n=(0,h.E)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,p.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(o.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function k(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function N(e){let{lastUpdatedBy:t}=e;return a.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function L(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:r}=e;return a.createElement("span",{className:p.k.common.lastUpdated},a.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(k,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(N,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}const C="iconEdit_dcUD";function _(e){let{className:t,...n}=e;return a.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(C,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function T(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:p.k.common.editThisPage},a.createElement(_,null),a.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const Z="tag_hD8n",w="tagRegular_D6E_",B="tagWithCount_i0QQ";function x(e){let{permalink:t,label:n,count:l}=e;return a.createElement(s.Z,{href:t,className:(0,r.Z)(Z,l?B:w)},n,l&&a.createElement("span",null,l))}const O="tags_XVD_",A="tag_JSN8";function j(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(O,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:A},a.createElement(x,{label:t,permalink:n}))}))))}const H="lastUpdated_foO9";function S(e){return a.createElement("div",{className:(0,r.Z)(p.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(j,e)))}function I(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:o}=e;return a.createElement("div",{className:(0,r.Z)(p.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(T,{editUrl:t})),a.createElement("div",{className:(0,r.Z)("col",H)},(n||l)&&a.createElement(L,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:l})))}function P(e){const{content:t}=e,{metadata:n}=t,{editUrl:l,lastUpdatedAt:o,formattedLastUpdatedAt:s,lastUpdatedBy:c,tags:i}=n,m=i.length>0,d=!!(l||o||c);return m||d?a.createElement("footer",{className:(0,r.Z)(p.k.docs.docFooter,"docusaurus-mt-lg")},m&&a.createElement(S,{tags:i}),d&&a.createElement(I,{editUrl:l,lastUpdatedAt:o,lastUpdatedBy:c,formattedLastUpdatedAt:s})):null}function U(e){let{toc:t,className:n,linkClassName:r,isChild:l}=e;return t.length?a.createElement("ul",{className:l?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(U,{isChild:!0,toc:e.children,className:n,linkClassName:r}))))):null}const M=a.memo(U);var D=n(6668);function R(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function V(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=V({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function z(e){const t=e.getBoundingClientRect();return t.top===t.bottom?z(e.parentNode):t}function $(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>z(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(z(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function F(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,D.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function W(e){const t=(0,a.useRef)(void 0),n=F();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:o}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=$(s,{anchorTopOffset:n.current}),i=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){if(n){var a;t.current&&t.current!==e&&(null==(a=t.current)||a.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===i)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function q(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:s,maxHeadingLevel:c,...i}=e;const m=(0,D.L)(),d=s??m.tableOfContents.minHeadingLevel,u=c??m.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>V({toc:R(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:d,maxHeadingLevel:u});return W((0,a.useMemo)((()=>{if(r&&o)return{linkClassName:r,linkActiveClassName:o,minHeadingLevel:d,maxHeadingLevel:u}}),[r,o,d,u])),a.createElement(M,(0,l.Z)({toc:p,className:n,linkClassName:r},i))}const G="tableOfContents_cNA8";function X(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,r.Z)(G,"thin-scrollbar",t)},a.createElement(q,(0,l.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}var Q=n(6043);const J="tocCollapsible_bZGK",Y="tocCollapsibleContent_NNA8",K="tocCollapsibleExpanded_IqtF",ee="tocCollapsibleButton_l22C",te="tocCollapsibleButtonExpanded_KeTX";function ne(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,l.Z)({type:"button"},n,{className:(0,r.Z)("clean-btn",ee,!t&&te,n.className)}),a.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}function ae(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:o}=e;const{collapsed:s,toggleCollapsed:c}=(0,Q.u)({initialState:!0});return a.createElement("div",{className:(0,r.Z)(J,!s&&K,n)},a.createElement(ne,{collapsed:s,onClick:c}),a.createElement(Q.z,{lazy:!0,className:Y,collapsed:s},a.createElement(q,{toc:t,minHeadingLevel:l,maxHeadingLevel:o})))}const re="anchorWithStickyNavbar_mojV",le="anchorWithHideOnScrollNavbar_R0VQ";function oe(e){let{as:t,id:n,...s}=e;const{navbar:{hideOnScroll:c}}=(0,D.L)();return"h1"!==t&&n?a.createElement(t,(0,l.Z)({},s,{className:(0,r.Z)("anchor",c?le:re),id:n}),s.children,a.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,(0,l.Z)({},s,{id:void 0}))}const se="docItemContainer_vinB",ce="docItemCol_DM6M",ie="tocMobile_TmEX";var me=n(1944),de=n(7524),ue=n(2802),pe=n(8596);const he={breadcrumbsContainer:"breadcrumbsContainer_Xlws",breadcrumbHomeIcon:"breadcrumbHomeIcon_kU5B"};var ge=n(4996);function fe(e){return a.createElement("svg",(0,l.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}function be(e){let{children:t,href:n,isLast:r}=e;const l="breadcrumbs__link";return r?a.createElement("span",{className:l,itemProp:"name"},t):n?a.createElement(s.Z,{className:l,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:l},t)}function ve(e){let{children:t,active:n,index:o,addMicrodata:s}=e;return a.createElement("li",(0,l.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(o+1)}))}function Ee(){const e=(0,ge.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(s.Z,{"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",he.breadcrumbsItemLink),href:e},a.createElement(fe,{className:he.breadcrumbHomeIcon})))}function ye(){const e=(0,ue.s1)(),t=(0,pe.Ns)();return e?a.createElement("nav",{className:(0,r.Z)(p.k.docs.docBreadcrumbs,he.breadcrumbsContainer),"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(Ee,null),e.map(((t,n)=>{const r=n===e.length-1;return a.createElement(ve,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement(be,{href:t.href,isLast:r},t.label))})))):null}var ke=n(3905),Ne=n(5742);var Le=n(2389),Ce=n(2949);function _e(){const{prism:e}=(0,D.L)(),{colorMode:t}=(0,Ce.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}var Te=n(7594),Ze=n.n(Te);const we=/title=(?<quote>["'])(?<title>.*?)\1/,Be=/\{(?<range>[\d,-]+)\}/,xe={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function Oe(e,t){const n=e.map((e=>{const{start:n,end:a}=xe[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")})\\s*${a})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function Ae(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:r,metastring:l}=t;if(l&&Be.test(l)){const e=l.match(Be).groups.range;if(0===r.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${l}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=r[0].className,a=Ze()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const o=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return Oe(["js","jsBlock"],t);case"jsx":case"tsx":return Oe(["js","jsBlock","jsx"],t);case"html":return Oe(["js","jsBlock","html"],t);case"python":case"py":case"bash":return Oe(["bash"],t);case"markdown":case"md":return Oe(["html","jsx","bash"],t);default:return Oe(Object.keys(xe),t)}}(a,r),s=n.split("\n"),c=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(r.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),m=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),d=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<s.length;){const e=s[p].match(o);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?c[i[t]].range+=`${p},`:m[t]?c[m[t]].start=p:d[t]&&(c[d[t]].range+=`${c[d[t]].start}-${p-1},`),s.splice(p,1)}n=s.join("\n");const u={};return Object.entries(c).forEach((e=>{let[t,{range:n}]=e;Ze()(n).forEach((e=>{u[e]??(u[e]=[]),u[e].push(t)}))})),{lineClassNames:u,code:n}}const je="codeBlockContainer_MPoW";function He(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[a,r]=e;const l=t[a];l&&"string"==typeof r&&(n[l]=r)})),n}(_e());return a.createElement(t,(0,l.Z)({},n,{style:o,className:(0,r.Z)(n.className,je,p.k.common.codeBlock)}))}const Se={codeBlockContent:"codeBlockContent_B9tL",codeBlockTitle:"codeBlockTitle_YYkX",codeBlock:"codeBlock__0OG",codeBlockStandalone:"codeBlockStandalone_Px3r",codeBlockLines:"codeBlockLines_gEuF",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_hGCP",buttonGroup:"buttonGroup_hRr1"};function Ie(e){let{children:t,className:n}=e;return a.createElement(He,{as:"pre",tabIndex:0,className:(0,r.Z)(Se.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:Se.codeBlockLines},t))}const Pe={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var Ue={Prism:n(7410).default,theme:Pe};function Me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function De(){return De=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},De.apply(this,arguments)}var Re=/\r\n|\r|\n/,Ve=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},ze=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},$e=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=De({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=De({},n,{backgroundColor:null}),r};function Fe(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const We=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),Me(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?$e(e.theme,e.language):void 0;return t.themeDict=n})),Me(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,l=De({},Fe(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?De({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),Me(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return l[n[0]];var o=a?{display:"inline-block"}:{},s=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(s))}})),Me(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,l=e.token,o=De({},Fe(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?De({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),Me(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],l=0,o=0,s=[],c=[s];o>-1;){for(;(l=a[o]++)<r[o];){var i=void 0,m=t[o],d=n[o][l];if("string"==typeof d?(m=o>0?m:["plain"],i=d):(m=ze(m,d.type),d.alias&&(m=ze(m,d.alias)),i=d.content),"string"==typeof i){var u=i.split(Re),p=u.length;s.push({types:m,content:u[0]});for(var h=1;h<p;h++)Ve(s),c.push(s=[]),s.push({types:m,content:u[h]})}else o++,t.push(m),n.push(i),a.push(0),r.push(i.length)}o--,t.pop(),n.pop(),a.pop(),r.pop()}return Ve(s),c}(void 0!==o?this.tokenize(t,a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),qe="codeLine_rqGN",Ge="codeLineNumber_hzTh",Xe="codeLineContent_hM6e";function Qe(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:s,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=s({line:t,className:(0,r.Z)(n,o&&qe)}),m=t.map(((e,t)=>a.createElement("span",(0,l.Z)({key:t},c({token:e,key:t})))));return a.createElement("span",i,o?a.createElement(a.Fragment,null,a.createElement("span",{className:Ge}),a.createElement("span",{className:Xe},m)):a.createElement(a.Fragment,null,m,a.createElement("br",null)))}const Je={copyButtonCopied:"copyButtonCopied_ljy5",copyButtonIcons:"copyButtonIcons_W9eQ",copyButtonIcon:"copyButtonIcon_XEyF",copyButtonSuccessIcon:"copyButtonSuccessIcon_i9w9"};function Ye(e){let{code:t,className:n}=e;const[l,s]=(0,a.useState)(!1),c=(0,a.useRef)(void 0),i=(0,a.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const a=document.createElement("textarea"),r=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const l=document.getSelection();let o=!1;l.rangeCount>0&&(o=l.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}a.remove(),o&&(l.removeAllRanges(),l.addRange(o)),r&&r.focus()}(t),s(!0),c.current=window.setTimeout((()=>{s(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),a.createElement("button",{type:"button","aria-label":l?(0,o.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,o.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,o.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)("clean-btn",n,Je.copyButton,l&&Je.copyButtonCopied),onClick:i},a.createElement("span",{className:Je.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:Je.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:Je.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const Ke="wordWrapButtonIcon_azs1",et="wordWrapButtonEnabled_Geot";function tt(e){let{className:t,onClick:n,isEnabled:l}=e;const s=(0,o.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,r.Z)("clean-btn",t,l&&et),"aria-label":s,title:s},a.createElement("svg",{className:Ke,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function nt(e){let{children:t,className:n="",metastring:o,title:s,showLineNumbers:c,language:i}=e;const{prism:{defaultLanguage:m,magicComments:d}}=(0,D.L)(),u=i??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(n)??m,p=_e(),h=function(){const[e,t]=(0,a.useState)(!1),[n,r]=(0,a.useState)(!1),l=(0,a.useRef)(null),o=(0,a.useCallback)((()=>{const n=l.current.querySelector("code");e?n.removeAttribute("style"):n.style.whiteSpace="pre-wrap",t((e=>!e))}),[l,e]),s=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=l.current,n=e>t||l.current.querySelector("code").hasAttribute("style");r(n)}),[l]);return(0,a.useEffect)((()=>{s()}),[e,s]),(0,a.useEffect)((()=>(window.addEventListener("resize",s,{passive:!0}),()=>{window.removeEventListener("resize",s)})),[s]),{codeBlockRef:l,isEnabled:e,isCodeScrollable:n,toggle:o}}(),g=function(e){var t;return(null==e||null==(t=e.match(we))?void 0:t.groups.title)??""}(o)||s,{lineClassNames:f,code:b}=Ae(t,{metastring:o,language:u,magicComments:d}),v=c||function(e){return(null==e?void 0:e.includes("showLineNumbers"))||!1}(o);return a.createElement(He,{as:"div",className:(0,r.Z)(n,u&&!n.includes(`language-${u}`)&&`language-${u}`)},g&&a.createElement("div",{className:Se.codeBlockTitle},g),a.createElement("div",{className:Se.codeBlockContent},a.createElement(We,(0,l.Z)({},Ue,{theme:p,code:b,language:u??"text"}),(e=>{let{className:t,tokens:n,getLineProps:l,getTokenProps:o}=e;return a.createElement("pre",{tabIndex:0,ref:h.codeBlockRef,className:(0,r.Z)(t,Se.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,r.Z)(Se.codeBlockLines,v&&Se.codeBlockLinesWithNumbering)},n.map(((e,t)=>a.createElement(Qe,{key:t,line:e,getLineProps:l,getTokenProps:o,classNames:f[t],showLineNumbers:v})))))})),a.createElement("div",{className:Se.buttonGroup},(h.isEnabled||h.isCodeScrollable)&&a.createElement(tt,{className:Se.codeButton,onClick:()=>h.toggle(),isEnabled:h.isEnabled}),a.createElement(Ye,{className:Se.codeButton,code:b}))))}function at(e){let{children:t,...n}=e;const r=(0,Le.Z)(),o=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof o?nt:Ie;return a.createElement(s,(0,l.Z)({key:String(r)},n),o)}const rt="details_lb9f",lt="isBrowser_bmU9",ot="collapsibleContent_i85q";function st(e){return!!e&&("SUMMARY"===e.tagName||st(e.parentElement))}function ct(e,t){return!!e&&(e===t||ct(e.parentElement,t))}function it(e){let{summary:t,children:n,...l}=e;const o=(0,Le.Z)(),s=(0,a.useRef)(null),{collapsed:c,setCollapsed:i}=(0,Q.u)({initialState:!l.open}),[m,d]=(0,a.useState)(l.open);return a.createElement("details",{...l,ref:s,open:m,"data-collapsed":c,className:(0,r.Z)(rt,o&&lt,l.className),onMouseDown:e=>{st(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;st(t)&&ct(t,s.current)&&(e.preventDefault(),c?(i(!1),d(!0)):i(!0))}},t||a.createElement("summary",null,"Details"),a.createElement(Q.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{i(e),d(!e)}},a.createElement("div",{className:ot},n)))}const mt="details_BAp3";function dt(e){let{...t}=e;return a.createElement(it,(0,l.Z)({},t,{className:(0,r.Z)("alert alert--info",mt,t.className)}))}function ut(e){return a.createElement(oe,e)}const pt="img_E7b_";const ht={head:function(e){const t=a.Children.map(e.children,(e=>function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){const{mdxType:t,originalType:n,...r}=e.props;return a.createElement(e.props.originalType,r)}return e}(e)));return a.createElement(Ne.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props.mdxType)))?a.createElement("code",e):a.createElement(at,e)},a:function(e){return a.createElement(s.Z,e)},pre:function(e){var t;return a.createElement(at,(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>{var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(dt,(0,l.Z)({},e,{summary:n}),r)},ul:function(e){return a.createElement("ul",(0,l.Z)({},e,{className:(t=e.className,(0,r.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"clean-list"))}));var t},img:function(e){return a.createElement("img",(0,l.Z)({loading:"lazy"},e,{className:(t=e.className,(0,r.Z)(t,pt))}));var t},h1:e=>a.createElement(ut,(0,l.Z)({as:"h1"},e)),h2:e=>a.createElement(ut,(0,l.Z)({as:"h2"},e)),h3:e=>a.createElement(ut,(0,l.Z)({as:"h3"},e)),h4:e=>a.createElement(ut,(0,l.Z)({as:"h4"},e)),h5:e=>a.createElement(ut,(0,l.Z)({as:"h5"},e)),h6:e=>a.createElement(ut,(0,l.Z)({as:"h6"},e))};function gt(e){let{children:t}=e;return a.createElement(ke.Zo,{components:ht},t)}function ft(e){const{content:t}=e,{metadata:n,frontMatter:r,assets:l}=t,{keywords:o}=r,{description:s,title:c}=n,i=l.image??r.image;return a.createElement(me.d,{title:c,description:s,keywords:o,image:i})}function bt(e){const{content:t}=e,{metadata:n,frontMatter:l}=t,{hide_title:o,hide_table_of_contents:s,toc_min_heading_level:c,toc_max_heading_level:m}=l,{title:d}=n,u=!o&&void 0===t.contentTitle,h=(0,de.i)(),g=!s&&t.toc&&t.toc.length>0,f=g&&("desktop"===h||"ssr"===h);return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,r.Z)("col",!s&&ce)},a.createElement(E,null),a.createElement("div",{className:se},a.createElement("article",null,a.createElement(ye,null),a.createElement(y,null),g&&a.createElement(ae,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:m,className:(0,r.Z)(p.k.docs.docTocMobile,ie)}),a.createElement("div",{className:(0,r.Z)(p.k.docs.docMarkdown,"markdown")},u&&a.createElement("header",null,a.createElement(oe,{as:"h1"},d)),a.createElement(gt,null,a.createElement(t,null))),a.createElement(P,e)),a.createElement(i,{previous:n.previous,next:n.next}))),f&&a.createElement("div",{className:"col col--3"},a.createElement(X,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:m,className:p.k.docs.docTocDesktop})))}function vt(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`;return a.createElement(me.FG,{className:t},a.createElement(ft,e),a.createElement(bt,e))}},4477:(e,t,n)=>{"use strict";n.d(t,{E:()=>s,q:()=>o});var a=n(7294),r=n(902);const l=a.createContext(null);function o(e){let{children:t,version:n}=e;return a.createElement(l.Provider,{value:n},t)}function s(){const e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}},7594:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,l]=t;if(a&&l){a=parseInt(a),l=parseInt(l);const e=a<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=a;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);