"use strict";(self.webpackChunkkev_y_huang_github_io=self.webpackChunkkev_y_huang_github_io||[]).push([[637],{5823:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(7294),n=a(8002),c=a(3432),s=a(7087);var l=function(e){var t=e.post;return r.createElement("header",{className:"post-header"},t.emoji&&r.createElement("div",{className:"emoji"},t.emoji),r.createElement("div",{className:"info"},r.createElement("div",{className:"categories"},t.categories.map((function(e){return r.createElement(s.Link,{className:"category",key:e,to:"/posts/"+e},e)})))),r.createElement("h1",{className:"title"},t.title),r.createElement("div",{className:"info"},r.createElement("div",{className:"author"},"posted by ",r.createElement("strong",null,t.author),",")," ",t.date))};var i=function(e){var t=e.prevPost,a=e.nextPost;return r.createElement("div",{className:"post-navigator"},r.createElement("div",{className:"post-navigator-card-wrapper"},a&&r.createElement(s.Link,{className:"post-card prev",key:a.id,to:a.slug},r.createElement("div",{className:"direction"},"Next Post"),r.createElement("div",{className:"title"},a.title))),r.createElement("div",{className:"post-navigator-card-wrapper"},t&&r.createElement(s.Link,{className:"post-card next",key:t.id,to:t.slug},r.createElement("div",{className:"direction"},"Previous Post"),r.createElement("div",{className:"title"},t.title))))},o=a(8154);var m=function(e){var t=e.html;return r.createElement("div",{className:"post-content"},r.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:t}}))};var u=function(e){var t=e.repo,a=e.path,n=(0,r.createRef)(),c=(0,r.useRef)(!1);return(0,r.useEffect)((function(){if(n.current&&!c.current){var e=localStorage.getItem("isDarkMode"),a=document.createElement("script"),r={src:"https://utteranc.es/client.js",repo:t,branch:"master",theme:JSON.parse(e)?"photon-dark":"github-light",label:"comment",async:!0,"issue-term":"pathname",crossorigin:"anonymous"};Object.keys(r).forEach((function(e){a.setAttribute(e,r[e])})),n.current.appendChild(a),c.current=!0}}),[t,n,a]),r.createElement("div",{className:"utterances",ref:n})};var d=function(e){var t,a,s=e.data,d=new o.Z(s.cur),v=s.prev&&new o.Z(s.prev),p=s.next&&new o.Z(s.next),E=(null===(t=s.site)||void 0===t?void 0:t.siteMetadata).comments,h=null==E||null===(a=E.utterances)||void 0===a?void 0:a.repo;return r.createElement(n.Z,null,r.createElement(c.Z,{title:null==d?void 0:d.title,description:null==d?void 0:d.excerpt}),r.createElement(l,{post:d}),r.createElement(m,{html:d.html}),r.createElement(i,{prevPost:v,nextPost:p}),h&&r.createElement(u,{repo:h,path:d.slug}))}}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-a50fb4e093950cebae1e.js.map