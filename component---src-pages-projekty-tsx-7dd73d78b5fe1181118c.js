(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"1omH":function(e,t,i){"use strict";i.r(t);var a=i("q1tI"),o=i.n(a),n=i("B7F5"),m=i("z2p8"),r=i("vOnD"),c=i("Kejl"),l=r.d.section.withConfig({displayName:"projects-pagestyle__ProjectsPageWrapper",componentId:"xbdmfx-0"})(["padding:75px 0;",";@media (max-width:1350px){width:90%;}"],c.i),d=r.d.header.withConfig({displayName:"projects-pagestyle__ProjectPageHeader",componentId:"xbdmfx-1"})([""," text-align:center;margin-bottom:125px;@media (max-width:1024px){margin-bottom:75px;}"],c.f),p=r.d.section.withConfig({displayName:"projects-pagestyle__ProjectsList",componentId:"xbdmfx-2"})(["> *:not(:last-child){margin-bottom:150px;}"]),s=i("hkG0"),u=r.d.section.withConfig({displayName:"project-itemstyle__ProjectItemWrapper",componentId:"sc-1bcmy7o-0"})(["position:relative;&::before{content:'';position:absolute;left:-25px;top:-20px;width:750px;height:400px;opacity:0.25;","}&::after{content:'';position:absolute;left:50%;bottom:-75px;width:75%;height:1px;transform:translateX(-50%);",";}@media (max-width:1024px){&::before{content:none;}}"],Object(c.a)("primary100"),Object(c.a)("light300")),g=r.d.section.withConfig({displayName:"project-itemstyle__ProjectItemContent",componentId:"sc-1bcmy7o-1"})(["position:relative;display:grid;grid-template-columns:250px 6fr 4fr;grid-template-areas:'minimap image article';gap:25px;@media (max-width:1350px){grid-template-columns:250px 1fr;grid-template-areas:'minimap image' 'article article';}@media (max-width:1024px){grid-template-columns:1fr;grid-template-areas:'image' 'minimap' 'article';}@media (max-width:700px){gap:0;}"]),x=r.d.aside.withConfig({displayName:"project-itemstyle__ProjectItemMinimap",componentId:"sc-1bcmy7o-2"})(["grid-area:minimap;"," @media (max-width:1024px){display:grid;grid-template-columns:1fr 1fr 1fr;gap:25px;}@media (max-width:700px){grid-template-columns:1fr;}"],c.f),h=r.d.figure.withConfig({displayName:"project-itemstyle__MinimapImage",componentId:"sc-1bcmy7o-3"})(["margin:15px;width:220px;height:120px;background-size:cover;background-position:center;cursor:pointer;"," @media (max-width:1024px){width:100%;margin:0;}@media (max-width:700px){height:400px;}@media (max-width:550px){height:300px;}"],(function(e){var t=e.url;return Object(r.c)(["background-image:url(",");"],t)})),f=r.d.figure.withConfig({displayName:"project-itemstyle__ProjectItemImage",componentId:"sc-1bcmy7o-4"})(["grid-area:image;width:100%;height:450px;background-size:cover;background-position:center;"," @media (max-width:700px){display:none;}"],(function(e){var t=e.url;return Object(r.c)(["background-image:url(",");"],t)})),j=r.d.article.withConfig({displayName:"project-itemstyle__ProjectItemArticle",componentId:"sc-1bcmy7o-5"})(["grid-area:article;height:100%;display:flex;flex-direction:column;justify-content:center;padding-left:20px;@media (max-width:1350px){margin:25px auto 0;max-width:600px;}@media (max-width:1024px){margin:0 auto;}"]),y=r.d.header.withConfig({displayName:"project-itemstyle__ArticleHeader",componentId:"sc-1bcmy7o-6"})([""]),b=r.d.header.withConfig({displayName:"project-itemstyle__ItemHeader",componentId:"sc-1bcmy7o-7"})(["position:relative;margin-left:275px;margin-bottom:15px;@media (max-width:1024px){text-align:center;margin-left:0;}"]),w=Object(r.d)(s.c).withConfig({displayName:"project-itemstyle__ArticleHeading",componentId:"sc-1bcmy7o-8"})(["",""],Object(c.c)("dark100")),_=r.d.p.withConfig({displayName:"project-itemstyle__ArticleContent",componentId:"sc-1bcmy7o-9"})(["margin:10px 0;"]),q=function(e){var t=e.item,i=Object(a.useState)(0),n=i[0],m=i[1];return o.a.createElement(u,null,o.a.createElement(b,null,o.a.createElement(w,null,t.header)),o.a.createElement(g,null,o.a.createElement(x,null,t.images.map((function(e,t){return o.a.createElement(h,{key:t,url:e,onClick:function(){return m(t)}})}))),o.a.createElement(f,{url:t.images[n]}),o.a.createElement(j,null,o.a.createElement(y,null,o.a.createElement(s.e,null,"Krzeło")),o.a.createElement(_,null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, eligendi laborum commodi quos harum fuga odit quo aliquid numquam eos?"),o.a.createElement(_,null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, eligendi laborum commodi quos harum fuga odit quo aliquid numquam eos?"))))},I=i("wx/A"),C=[{images:[I.a+"/projects/project2.jpg",I.a+"/projects/project1.jpg",I.a+"/projects/project2.jpg"],articleHeading:"Krzeło",articleContentLine1:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, eligendi laborum\n    commodi quos harum fuga odit quo aliquid numquam eos",articleContentLine2:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, eligendi laborum\n    commodi quos harum fuga odit quo aliquid numquam eos",header:"Krzesła"},{images:[I.a+"/projects/project2.jpg",I.a+"/projects/project1.jpg",I.a+"/projects/project2.jpg"],articleHeading:"Krzeło",articleContentLine1:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, eligendi laborum\n    commodi quos harum fuga odit quo aliquid numquam eos",articleContentLine2:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, eligendi laborum\n    commodi quos harum fuga odit quo aliquid numquam eos",header:"Krzesła"}],E=function(){return o.a.createElement(l,null,o.a.createElement(d,null,o.a.createElement(s.c,null,"Nasze Projekty")),o.a.createElement(p,null,C.map((function(e,t){return o.a.createElement(q,{key:t,item:e})}))))};t.default=function(){return o.a.createElement(n.a,null,o.a.createElement(m.a,{title:"Projekty"}),o.a.createElement(E,null))}}}]);
//# sourceMappingURL=component---src-pages-projekty-tsx-7dd73d78b5fe1181118c.js.map