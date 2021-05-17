(this["webpackJsonpdodo-web"]=this["webpackJsonpdodo-web"]||[]).push([[0],{46:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r,c=n(2),a=n(0),i=n.n(a),o=n(19),s=n.n(o),l=(n(46),n(83)),d=n(37),m=n(79),u=n(80),j=n(75),h=n(81),f=n(60),b=n(36),p=n.n(b);!function(e){e[e.WHITE=0]="WHITE",e[e.PRIMARY=1]="PRIMARY",e[e.SECONDARY=2]="SECONDARY"}(r||(r={}));var x=function(e,t){switch(t){case r.WHITE:return"#fff";case r.PRIMARY:return e.palette.primary.main;case r.SECONDARY:return e.palette.secondary.main}},g=Object(j.a)((function(e){return Object(h.a)({star:function(t){return{color:x(e,t.color),marginLeft:"1rem",marginRight:"1rem",fontSize:"3rem"}},starWrapper:{display:"flex",justifyContent:"center",alignItems:"center",margin:"1.5rem 0 1.5rem",width:"100%"},starLine:function(t){return{border:"solid",height:"0.2rem",borderRadius:"1rem",color:x(e,t.color),width:"100%",maxWidth:"9rem"}}})})),O=function(e){var t=g(e);return Object(c.jsxs)("div",{className:t.starWrapper,children:[Object(c.jsx)("div",{className:t.starLine}),Object(c.jsx)(p.a,{className:t.star}),Object(c.jsx)("div",{className:t.starLine})]})},v=Object(j.a)((function(e){return Object(h.a)({img:{width:"22rem",marginLeft:"2rem"},root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingBottom:"5rem",paddingTop:"4rem"},box:{marginLeft:"3rem",columnCount:2,width:"40rem"}})})),y=function(){var e=v();return Object(c.jsxs)("div",{className:e.root,children:[Object(c.jsx)(f.a,{variant:"h2",color:"textSecondary",children:"About"}),Object(c.jsx)(O,{color:r.PRIMARY}),Object(c.jsx)(f.a,{className:e.box,variant:"body1",color:"textSecondary",children:"Maturity Models are valuable to communicate the current state of DevOps, especially towards the management. However, they often lack technical depth and do not provide any guidance on improving the current maturity. The research project DoDo addresses these shortcomings by combining a maturity model with technical metrics using a hierarchical system of KPIs. This method empowers its users to explore the detailed information comprehensively, thereby enabling them to discover a clear path for their DevOps journey."})]})},w=n(77);var R,D=function(e){var t=Object(a.useRef)([]);!function(e,t){for(var n=0;n<e;n++)t.push(i.a.createRef())}(e.sections.length,t.current),function(e){Object(a.useEffect)((function(){var t=new IntersectionObserver((function(e){console.log("intersection detected"),console.log(e)}),{root:null,rootMargin:"0px",threshold:1});return e.current.forEach((function(e){null!==e.current&&t.observe(e.current)})),function(){console.log("disconnecting"),t.disconnect()}}),[e])}(t);return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsx)(w.a,{}),e.sections.map((function(e,n){return Object(c.jsx)("section",{id:e.id,ref:t.current[n],children:e.element},"sec_key"+e.id)}))]})},I=n(39),N=n(78),k=Object(j.a)((function(e){return Object(h.a)({link:{"&:hover":{color:e.palette.secondary.main},color:"#fff"},linkActive:{borderRadius:"0.5rem",paddingTop:"0.75rem",paddingLeft:"0.5rem",paddingRight:"1rem",paddingBottom:"0.75rem",background:e.palette.secondary.main,color:"#fff"}})})),E=function(e){return Object(c.jsx)(f.a,{variant:"h4",color:"textPrimary",children:Object(c.jsxs)(N.a,{color:"textPrimary",href:"#",underline:"none",children:["\xa0",e.children]})})},C=function(e){var t=k();return Object(c.jsxs)(N.a,{href:e.href,underline:"none",className:e.active?t.linkActive:t.link,children:["\xa0",e.children]})},P=n(82),L=Object(j.a)((function(e){return Object(h.a)({flex:{flexGrow:1},linkSpacing:{"& > * + *":{marginLeft:e.spacing(2)}},appBar:{boxShadow:"none",backgroundColor:e.palette.primary.main},navRoot:{width:"100%",display:"flex",justifyContent:"space-around",alignItems:"center"}})})),S=function(e){var t=L(),n=Object(a.useState)(""),r=Object(I.a)(n,2),i=r[0];r[1];return Object(c.jsx)(P.a,{position:"fixed",className:t.appBar,children:Object(c.jsx)(w.a,{children:Object(c.jsxs)("div",{className:t.navRoot,children:[Object(c.jsx)(E,{children:e.titleElement.text}),Object(c.jsx)(f.a,{variant:"h6",color:"textPrimary",className:t.linkSpacing,children:e.navElements.map((function(e){return Object(c.jsx)(C,{active:i===e.href,href:e.href,children:e.text},"key_"+e.href)}))})]})})})},A=n.p+"static/media/logo.21ab40fe.svg",T=Object(j.a)((function(e){return Object(h.a)({img:{width:"22rem",marginLeft:"2rem"},root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:e.palette.secondary.main,paddingBottom:"5rem",paddingTop:"4rem"},box:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}})})),M=function(){var e=T();return Object(c.jsxs)("div",{className:e.root,children:[Object(c.jsx)("img",{className:e.img,src:A,alt:"DoDo Project Logo"}),Object(c.jsx)(f.a,{variant:"h1",color:"textPrimary",children:"DoDo"}),Object(c.jsx)(O,{color:r.WHITE}),Object(c.jsx)(f.a,{variant:"h3",color:"textPrimary",children:"Doing Optimized DevOps"})]})},B=Object(l.a)(Object(d.a)({palette:{text:{primary:"#fff",secondary:"#2c3e50"},primary:{main:"#2c3e50"},secondary:{main:"#1abc9c"}},typography:{}})),W="about",Y={text:"DoDo",href:"#title"},F=[{text:"About",href:(R=W,"#"+R)}],H=[{element:Object(c.jsx)(M,{}),id:"title"},{element:Object(c.jsx)(y,{}),id:W}];console.log(B.mixins.toolbar.minHeight);var z=function(){return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsx)(m.a,{}),Object(c.jsxs)(u.a,{theme:B,children:[Object(c.jsx)(S,{navElements:F,titleElement:Y}),Object(c.jsx)(D,{sections:H})]})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},_=n(38);s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(_.a,{children:Object(c.jsx)(z,{})})}),document.getElementById("root")),J()}},[[57,1,2]]]);
//# sourceMappingURL=main.933c141d.chunk.js.map