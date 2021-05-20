(this["webpackJsonpdodo-web"]=this["webpackJsonpdodo-web"]||[]).push([[0],{56:function(e,t,r){},66:function(e,t,r){"use strict";r.r(t);var a,n=r(1),o=r(0),i=r.n(o),c=r(23),s=r.n(c),l=(r(56),r(99)),d=r(46),h=r(93),b=r(94),j=r(86),u=r(96),f=r(69);!function(e){e[e.WHITE=0]="WHITE",e[e.PRIMARY=1]="PRIMARY",e[e.SECONDARY=2]="SECONDARY"}(a||(a={}));var m=function(e,t){switch(t){case a.WHITE:return"#fff";case a.PRIMARY:return e.palette.primary.main;case a.SECONDARY:return e.palette.secondary.main}},p=r(45),A=r.n(p),x=Object(j.a)((function(e){return Object(u.a)({star:function(t){return{color:m(e,t.color),marginLeft:"1rem",marginRight:"1rem",fontSize:"3rem"}},starWrapper:{display:"flex",justifyContent:"center",alignItems:"center",margin:"1.5rem 0 1.5rem",width:"100%"},starLine:function(t){return{border:"solid",height:"0.2rem",borderRadius:"1rem",color:m(e,t.color),width:"100%",maxWidth:"9rem"}}})})),y=function(e){var t=e.color===a.WHITE?"textPrimary":"textSecondary";return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(f.a,{variant:e.variant,color:t,children:e.title}),Object(n.jsx)(g,{color:e.color})]})},g=function(e){var t=x(e);return Object(n.jsxs)("div",{className:t.starWrapper,children:[Object(n.jsx)("div",{className:t.starLine}),Object(n.jsx)(A.a,{className:t.star}),Object(n.jsx)("div",{className:t.starLine})]})},O=Object(j.a)((function(e){return Object(u.a)({root:function(t){return{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingBottom:"5rem",paddingTop:"4rem",background:t.background?m(e,t.background):"#fff"}}})})),v=function(e){var t=O(e);return Object(n.jsxs)("div",{className:t.root,children:[Object(n.jsx)(y,{title:e.title,variant:e.variant,color:e.contentColor}),e.children]})},w=Object(j.a)((function(e){return Object(u.a)({box:{marginLeft:"3rem",columnCount:2,width:"40rem"}})})),E=function(){var e=w();return Object(n.jsx)(v,{variant:"h2",title:"About",contentColor:a.PRIMARY,children:Object(n.jsx)(f.a,{className:e.box,variant:"body1",color:"textSecondary",children:"Maturity Models are valuable to communicate the current state of DevOps, especially towards the management. However, they often lack technical depth and do not provide any guidance on improving the current maturity. The research project DoDo addresses these shortcomings by combining a maturity model with technical metrics using a hierarchical system of KPIs. This method empowers its users to explore the detailed information comprehensively, thereby enabling them to discover a clear path for their DevOps journey."})})},B=r(88);var P=function(e){var t=Object(o.useRef)([]);!function(e,t){for(var r=0;r<e;r++)t.push(i.a.createRef())}(e.sections.length,t.current),function(e){Object(o.useEffect)((function(){var t=new IntersectionObserver((function(e){}),{root:null,rootMargin:"0px",threshold:1});return e.current.forEach((function(e){null!==e.current&&t.observe(e.current)})),function(){t.disconnect()}}),[e])}(t);return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(B.a,{}),e.sections.map((function(e,r){return Object(n.jsx)("section",{id:e.id,ref:t.current[r],children:e.element},"sec_key"+e.id)}))]})},I=function(){return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(f.a,{variant:"h4",gutterBottom:!0,children:"Contact"}),Object(n.jsx)(f.a,{variant:"body1",children:"Jan-Niclas Str\xfcwer"}),Object(n.jsx)(f.a,{variant:"body1",children:"Fraunhofer IEM"}),Object(n.jsx)(f.a,{variant:"body1",children:"Zukunftsmeile 1"}),Object(n.jsx)(f.a,{variant:"body1",gutterBottom:!0,children:"33102 Paderborn"}),Object(n.jsx)(f.a,{variant:"body1",children:Object(n.jsx)("a",{style:{color:"#fff"},href:"mailto:jan-niclas.struewer@iem.fraunhofer.de",children:"jan-niclas.struewer(at)iem.fraunhofer.de"})})]})},M=r(18),R=r(89),F=Object(j.a)((function(e){return Object(u.a)({root:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:e.palette.primary.dark,paddingBottom:"1rem",paddingTop:"1rem",color:"#fff"},link:{color:"#fff","&:hover":{textDecoration:"none"}}})})),N=function(){var e=F();return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(f.a,{children:"Copyright \xa9 by Fraunhofer-Gesellschaft |"}),Object(n.jsx)(R.a,{to:"/impressum",component:M.b,className:e.link,children:"\xa0Impressum & Data Protection"})]})},W=r(90),Q=r(91),D=r(92),L=r(95),k=r(97),S=Object(j.a)((function(e){return Object(u.a)({avatar:{backgroundColor:e.palette.primary.main,border:"0.1px solid white",width:e.spacing(7),height:e.spacing(7)}})})),T=function(e){var t=S();return Object(n.jsx)(L.a,{href:e.href,children:Object(n.jsx)(k.a,{className:t.avatar,children:e.children})})},Y=function(){return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(f.a,{variant:"h4",gutterBottom:!0,children:"Around the Web"}),Object(n.jsxs)("div",{children:[Object(n.jsx)(T,{href:"https://twitter.com/FraunhoferIEM",children:Object(n.jsx)(W.a,{fontSize:"large"})}),Object(n.jsx)(T,{href:"https://www.linkedin.com/company/fraunhofer-iem",children:Object(n.jsx)(Q.a,{fontSize:"large"})}),Object(n.jsx)(T,{href:"https://github.com/fraunhofer-iem",children:Object(n.jsx)(D.a,{fontSize:"large"})})]})]})},Z=Object(j.a)((function(e){return Object(u.a)({root:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:e.palette.primary.main,paddingTop:"4rem"},contentWrapper:{width:"100%",display:"flex",justifyContent:"center",alignItems:"flex-start"},content:{marginLeft:"4rem",marginRight:"4rem",marginBottom:"1rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"#fff"}})})),z=function(){var e=Z();return Object(n.jsx)(i.a.Fragment,{children:Object(n.jsxs)("footer",{className:e.root,children:[Object(n.jsxs)("div",{className:e.contentWrapper,children:[Object(n.jsx)("div",{className:e.content,children:Object(n.jsx)(I,{})}),Object(n.jsx)("div",{className:e.content,children:Object(n.jsx)(Y,{})})]}),Object(n.jsx)(N,{})]})})},C=r(47),G=r(37),V=Object(j.a)((function(e){return Object(u.a)({link:{"&:hover":{color:e.palette.secondary.main,textDecoration:"none"},color:"#fff"},titleLink:{"&:hover":{textDecoration:"none"}},linkActive:{borderRadius:"0.5rem",paddingTop:"0.75rem",paddingLeft:"0.5rem",paddingRight:"1rem",paddingBottom:"0.75rem",background:e.palette.secondary.main,color:"#fff"}})})),X=function(e){var t=V();return Object(n.jsx)(f.a,{variant:"h4",color:"textPrimary",children:Object(n.jsxs)(R.a,{color:"textPrimary",to:"/home#top",component:G.a,className:t.titleLink,children:["\xa0",e.children]})})},U=function(e){var t=V();return Object(n.jsxs)(R.a,{to:e.href,component:G.a,className:e.active?t.linkActive:t.link,children:["\xa0",e.children]})},q=r(98),H=Object(j.a)((function(e){return Object(u.a)({flex:{flexGrow:1},linkSpacing:{"& > * + *":{marginLeft:e.spacing(2)}},appBar:{boxShadow:"none",backgroundColor:e.palette.primary.main},navRoot:{width:"100%",display:"flex",justifyContent:"space-around",alignItems:"center"}})})),J=function(e){var t=H(),r=Object(o.useState)(""),a=Object(C.a)(r,1)[0];return Object(n.jsx)(q.a,{position:"fixed",className:t.appBar,children:Object(n.jsx)(B.a,{children:Object(n.jsxs)("div",{className:t.navRoot,children:[Object(n.jsx)(X,{active:!1,href:e.titleElement.href,children:e.titleElement.text}),Object(n.jsx)(f.a,{variant:"h6",color:"textPrimary",className:t.linkSpacing,children:e.navElements.map((function(e){return Object(n.jsx)(U,{active:a===e.href,href:e.href,children:e.text},"key_"+e.href)}))})]})})})},K=r.p+"static/media/iem-logo.675db7f3.svg",_=r.p+"static/media/BMBF_Logo.e67b31e3.svg",$=Object(j.a)((function(e){return Object(u.a)({box:{display:"flex",justifyContent:"center",alignItems:"center"},img:{width:"10rem",marginLeft:"2rem"},imgHorizontal:{width:"15rem",marginLeft:"2rem"}})})),ee=function(){var e=$();return Object(n.jsxs)(v,{variant:"h2",title:"Partners",contentColor:a.PRIMARY,children:[Object(n.jsxs)("div",{className:e.box,children:[Object(n.jsx)("img",{className:e.img,src:"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABGAAD/4QMsaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MCA3OS4xNjA0NTEsIDIwMTcvMDUvMDYtMDE6MDg6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMTFEOUQ5OEU1MjUxMUU4QjlGMkU0MjlBRUY4OTFDNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMTFEOUQ5OUU1MjUxMUU4QjlGMkU0MjlBRUY4OTFDNCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyQzhFMzkzRTUyNDExRThCOUYyRTQyOUFFRjg5MUM0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyQzhFMzk0RTUyNDExRThCOUYyRTQyOUFFRjg5MUM0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABAMDAwMDBAMDBAYEAwQGBwUE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",alt:"Software Campus Logo"}),Object(n.jsx)("img",{className:e.imgHorizontal,src:K,alt:"Fraunhofer IEM Logo"})]}),Object(n.jsx)(f.a,{variant:"h4",color:"textSecondary",children:"Funded by"}),Object(n.jsx)("img",{className:e.img,src:_,alt:"BMBF Logo"})]})},te=r.p+"static/media/logo.21ab40fe.svg",re=Object(j.a)((function(e){return Object(u.a)({img:{width:"22rem",marginLeft:"2rem"},root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:e.palette.secondary.main,paddingBottom:"5rem",paddingTop:"4rem"}})})),ae=function(){var e=re();return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)("img",{className:e.img,src:te,alt:"DoDo Project Logo"}),Object(n.jsx)(y,{title:"DoDo",variant:"h1",color:a.WHITE}),Object(n.jsx)(f.a,{variant:"h3",color:"textPrimary",children:"Doing Optimized DevOps"})]})},ne=r(7),oe=Object(j.a)((function(e){return Object(u.a)({box:{marginLeft:"10rem",marginRight:"10rem"}})})),ie=function(){var e=oe();return Object(n.jsxs)(v,{variant:"h3",title:"Impressum",contentColor:a.PRIMARY,background:a.WHITE,children:[Object(n.jsx)(f.a,{className:e.box,variant:"h4",color:"textSecondary",children:"Editorial Notes"}),Object(n.jsxs)(f.a,{className:e.box,variant:"body2",color:"textSecondary",children:[Object(n.jsx)("p",{children:"The Fraunhofer Institute for Mechatronic Systems Design IEM is a constituent entity of the Fraunhofer-Gesellschaft, and as such has no separate legal status."}),Object(n.jsxs)("p",{children:["Fraunhofer-Gesellschaft",Object(n.jsx)("br",{}),"zur F\xf6rderung der angewandten Forschung e.V. ",Object(n.jsx)("br",{}),"Hansastra\xdfe 27 c ",Object(n.jsx)("br",{}),"80686 M\xfcnchen ",Object(n.jsx)("br",{}),"Phone: +49 89 1205- 0",Object(n.jsx)("br",{}),"Fax: +49 89 1205-7531 ",Object(n.jsx)("br",{}),"www.fraunhofer.de ",Object(n.jsx)("br",{}),"VAT Identification Number in accordance with \xa727 a VAT Tax Act: DE 129515865"]}),Object(n.jsxs)("p",{children:["Court of jurisdiction Amtsgericht M\xfcnchen (district court)",Object(n.jsx)("br",{}),"Registered nonprofit association Registration no. VR 4461",Object(n.jsx)("br",{}),"Responsible editor: Jan-Niclas Str\xfcwer ",Object(n.jsx)("br",{}),"jan-niclas.struewer(at)iem.fraunhofer.de"]})]}),Object(n.jsx)(f.a,{className:e.box,variant:"h4",color:"textSecondary",children:"Executive Board"}),Object(n.jsx)(f.a,{className:e.box,variant:"body2",color:"textSecondary",children:Object(n.jsxs)("p",{children:["Prof. Dr.-Ing. Reimund Neugebauer, President, Corporate Policy and Research Management",Object(n.jsx)("br",{}),"Prof. Dr. Ralf Boris Wehrspohn, Technology Marketing and Business Models",Object(n.jsx)("br",{}),"Prof. Dr. Alexander Kurz, Human Resources, Legal Affairs and IP Management",Object(n.jsx)("br",{}),"Dipl.-Kfm. Andreas Meuer, Finances and Digitization"]})}),Object(n.jsx)(f.a,{className:e.box,variant:"h4",color:"textSecondary",children:"Usage Rights"}),Object(n.jsx)(f.a,{className:e.box,variant:"body2",color:"textSecondary",children:Object(n.jsxs)("p",{children:["Copyright \xa9 by ",Object(n.jsx)("br",{}),"Fraunhofer-Gesellschaft ",Object(n.jsx)("br",{}),"All rights reserved. ",Object(n.jsx)("br",{}),"All copyright for this Web site are owned in full by the Fraunhofer-Gesellschaft. ",Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:"Permission is granted to download or print material published on this site for personal use only. Its use for any other purpose, and in particular its commercial use or distribution, are strictly forbidden in the absence of prior written approval. Please address your requests for approval to:"}),Object(n.jsxs)("p",{children:["Fraunhofer Institute for Institute for Mechatronic Systems Design IEM ",Object(n.jsx)("br",{}),"info@iem.fraunhofer.de"]}),Object(n.jsx)("p",{children:"Notwithstanding this requirement, material may be downloaded or printed for use in connection with press reports on the activities of the Fraunhofer-Gesellschaft and its constituent institutes, on condition that the following terms are complied with:"}),Object(n.jsx)("p",{children:"No alterations may be made to pictorial content, with the exception of framing modifications to emphasize the central motif. The source must be quoted and two free reference copies must be sent to the above-mentioned address. Such usage is free of charge."})]})}),Object(n.jsx)(f.a,{className:e.box,variant:"h4",color:"textSecondary",children:"Disclaimer"}),Object(n.jsx)(f.a,{className:e.box,variant:"body2",color:"textSecondary",children:Object(n.jsxs)("p",{children:[Object(n.jsx)("p",{children:"We cannot assume any liability for the content of external pages. Solely the operators of those linked pages are responsible for their content."}),Object(n.jsx)("p",{children:"We make every reasonable effort to ensure that the content of this Web site is kept up to date, and that it is accurate and complete. Nevertheless, the possibility of errors cannot be entirely ruled out. We do not give any warranty in respect of the timeliness, accuracy or completeness of material published on this Web site, and disclaim all liability for (material or non-material) loss or damage incurred by third parties arising from the use of content obtained from the Web site."}),Object(n.jsx)("p",{children:"Registered trademarks and proprietary names, and copyrighted text and images, are not generally indicated as such on our Web pages. But the absence of such indications in no way implies that these names, images or text belong to the public domain in the context of trademark or copyright law."})]})})]})},ce=Object(j.a)((function(e){return Object(u.a)({box:{marginLeft:"10rem",marginRight:"10rem"}})})),se=function(){var e=ce();return Object(n.jsxs)(v,{variant:"h3",title:"Data Protection Information",contentColor:a.PRIMARY,background:a.WHITE,children:[Object(n.jsx)(f.a,{className:e.box,variant:"h4",color:"textSecondary",children:"DoDo"}),Object(n.jsxs)(f.a,{className:e.box,variant:"body2",color:"textSecondary",children:[Object(n.jsx)("p",{children:"DoDo is a project of the Fraunhofer Institute for Mechatronic Systems Design IEM."}),Object(n.jsx)("p",{children:"The following pertains to the use of this website. As the data controller, we process your personal data collected via our website and store them for the period necessary to achieve the specified purposes and to comply with statutory requirements. The following text informs you of the data we collect, the way we process them and to which rights you will be entitled to in this regard."}),Object(n.jsx)("p",{children:"Pursuant to Article 4(1) General Data Protection Regulation (GDPR), personal data are all data referring to an identified or identifiable natural person."})]}),Object(n.jsx)(f.a,{className:e.box,variant:"h4",color:"textSecondary",children:"1. Scope of this Document"}),Object(n.jsx)(f.a,{className:e.box,variant:"body2",color:"textSecondary",children:Object(n.jsx)("p",{children:"This data protection information shall apply to the project website located at https://fraunhofer-iem.github.io/dodo-web"})}),Object(n.jsx)(f.a,{className:e.box,variant:"h4",color:"textSecondary",children:"2. Name and Contact Information of the Person Responsible for Data Processing (Controller) and of the corporate Data Protection Officer"}),Object(n.jsx)(f.a,{className:e.box,variant:"body2",color:"textSecondary",children:Object(n.jsxs)("p",{children:[Object(n.jsxs)("p",{children:["Controller as defined in Article 4(7) GDPR: ",Object(n.jsx)("br",{}),"Fraunhofer-Gesellschaft",Object(n.jsx)("br",{}),"zur F\xf6rderung der angewandten Forschung e.V.",Object(n.jsx)("br",{}),"Hansastra\xdfe 27 c,",Object(n.jsx)("br",{}),"80686 Munich",Object(n.jsx)("br",{}),"for Fraunhofer IEM, Zuk\xfcnftsmeile 1, 33102, Paderborn",Object(n.jsx)("br",{}),'(hereinafter referred to "Fraunhofer IEM")']}),Object(n.jsxs)("p",{children:["Email: info@iem.fraunhofer.de",Object(n.jsx)("br",{}),"Telephone: +49 5251 5465-101",Object(n.jsx)("br",{}),"Fax: +49 5251 5465-102"]}),Object(n.jsx)("p",{children:"You can reach the Data Protection Officer at Fraunhofer at the above address c/o Data Protection Officer or at datenschutz@zv.fraunhofer.de. Please feel free to contact our Data Protection Officer directly at any time with your questions concerning the Data Protection Law or your rights as data subject. Alternatively, you may want to send an email to your contact partner Dr. Matthias Meyer at matthias.meyer@iem.fraunhofer.de."})]})}),Object(n.jsx)(f.a,{className:e.box,variant:"h4",color:"textSecondary",children:"3. Processing of Personal Data and Purposes of Data Processing"}),Object(n.jsx)(f.a,{className:e.box,variant:"body2",color:"textSecondary",children:Object(n.jsxs)("p",{children:[Object(n.jsx)("p",{children:"During your Website Visit"}),Object(n.jsx)("p",{children:"We cannot assume any liability for the content of external pages. Solely the operators of those linked pages are responsible for their content."}),Object(n.jsx)("p",{children:"We make every reasonable effort to ensure that the content of this Web site is kept up to date, and that it is accurate and complete. Nevertheless, the possibility of errors cannot be entirely ruled out. We do not give any warranty in respect of the timeliness, accuracy or completeness of material published on this Web site, and disclaim all liability for (material or non-material) loss or damage incurred by third parties arising from the use of content obtained from the Web site."}),Object(n.jsx)("p",{children:"Registered trademarks and proprietary names, and copyrighted text and images, are not generally indicated as such on our Web pages. But the absence of such indications in no way implies that these names, images or text belong to the public domain in the context of trademark or copyright law."})]})}),Object(n.jsx)(f.a,{className:e.box,variant:"h4",color:"textSecondary",children:"4. Transfer of Personal Data to Third Parties"}),Object(n.jsx)(f.a,{className:e.box,variant:"body2",color:"textSecondary",children:Object(n.jsxs)("p",{children:[Object(n.jsx)("p",{children:"We only forward your personal data to third parties if:"}),Object(n.jsx)("p",{children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"You consented explicitly pursuant to point (a) of the first sentence of Article 6(1) GDPR,"}),Object(n.jsx)("li",{children:"The data transfer is necessary pursuant to point (b) of the first sentence of Article 6(1) GDPR for the performance of a contract with you,"}),Object(n.jsx)("li",{children:"We are legally obligated to transmit the data pursuant to point (c) of the first sentence of Article 6(1) of GDPR."})]})}),Object(n.jsxs)("p",{children:["Third parties may use the transferred data only for the above-mentioned purposes. ",Object(n.jsx)("br",{}),"The transfer of personal data to countries outside the EU or an international organization shall be excluded."]})]})}),Object(n.jsx)(f.a,{className:e.box,variant:"h4",color:"textSecondary",children:"5. Your Rights as a Data Subject"}),Object(n.jsx)(f.a,{className:e.box,variant:"body2",color:"textSecondary",children:Object(n.jsxs)("p",{children:["You have the following rights:",Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Pursuant to Article 7(3) GDPR, you have the right to withdraw at any time any consent you may have given to us before. The consequence of this is that we may no longer continue the respective activity."}),Object(n.jsx)("li",{children:"Pursuant to Article 15 GDPR, you have the right to obtain information on your personal data which we have processed. In particular, you have the right to information on the following: Purposes of data processing, the category of the personal data, the categories of recipients to whom your data has been or is disclosed, the planned storage periods of data, the existence of a right to the correction, deletion, restriction of processing and objection, the right to appeal, the right to know the origin of your data in the event that we did not collect these data The right to meaningful and detailed information on the existence of automated decision-making including profiling and, if applicable, relevant information on the details thereof;"}),Object(n.jsx)("li",{children:"Pursuant to Article 16 GDPR, you have the right to obtain without undue delay the rectification of inaccurate personal data and/or the completion of incomplete personal data stored with us;"}),Object(n.jsx)("li",{children:"Pursuant to Article 17 GDPR, you have the right to the erasure of your personal data unless the erasure interferes with the execution of the right to free expression of opinions and to information, with the compliance with legal obligations, is necessary in the public interest or for establishing, exercising or defending legal claims;"}),Object(n.jsx)("li",{children:"Pursuant to Article 18 GDPR, you have the right to restriction of processing of your personal data if you contest or challenge the accuracy of these data, the processing of the data is unlawful but you oppose the erasure of these data and we no longer need the data while you still need the data to establish, exercise or defend legal claims or you have raised an objection against the data processing pursuant to Article 21 GDPR;"}),Object(n.jsx)("li",{children:"Pursuant to Article 20 GDPR, you have the right to receive the personal data concerning you in a structured, commonly used and machine-readable format or to demand to transmit those data to another data processing controller and"}),Object(n.jsx)("li",{children:"Pursuant to Article 77 GDPR, you have the right to lodge a complaint with a supervisory authority. Generally, you may find such authority at your place of habitual residence, your workplace or our company domicile."})]}),Object(n.jsxs)("p",{children:["Information about your right to object pursuant to Article 21 GDPR"," ",Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:"You have the right to object at any time, on grounds relating to your particular situation, to the processing of your personal data, pursuant to point (e) of Article 6(1) GDPR (data processing for the performance of a task carried out in the public interest) and of point (f) of Article 6(1) GDPR (data processing on the basis of legitimate interests). This shall also apply to profiling as prescribed by Article 4(4) GDPR, which is based on this provision."}),Object(n.jsx)("p",{children:"Once you file an objection, we will no longer process your personal data unless we can demonstrate compelling legitimate grounds for processing which override your interests, rights and freedoms, or unless the processing serves the establishment, exercise or defense of legal claims."}),Object(n.jsx)("p",{children:"To the extent that your objection addresses the processing of data for direct advertising, we will stop the processing immediately. In this case, citing a specific situation is not required. This shall also apply to profiling in as far as it relates to such direct advertising."}),Object(n.jsx)("p",{children:"If you would like to assert your right to object, an email to datenschutz@zv.fraunhofer.de will suffice."})]})]})}),Object(n.jsx)(f.a,{className:e.box,variant:"h4",color:"textSecondary",children:"6. Data security"}),Object(n.jsxs)(f.a,{className:e.box,variant:"body2",color:"textSecondary",children:[Object(n.jsx)("p",{children:"Moreover, we use suitable technical and organizational safety procedures to protect your data against accidental or willful manipulation, partial or complete loss, destruction or against the unauthorized access by third parties. We constantly improve these security measures as the technology advances."}),Object(n.jsx)("p",{children:"We transmit all your personal data using the widely used and secure TLS (Transport Layer Security) encryption standard. The TLS protocol is a proven and secure standard that is also used in online banking transactions. You will recognize a secure TLS connection by the s following the http (https://...) in your browser URL or by the lock symbol in the lower section of your browser."})]}),Object(n.jsx)(f.a,{className:e.box,variant:"h4",color:"textSecondary",children:"7. Timeliness and Amendments to this Data Protection Information"}),Object(n.jsxs)(f.a,{className:e.box,variant:"body2",color:"textSecondary",children:[Object(n.jsx)("p",{children:"This data protection information as amended on November 2018 is currently applicable."}),Object(n.jsx)("p",{children:"Due to improvements of our website and website offers or by virtue of amended statutory or administrative standards, it may become necessary to amend this data protection information. You may find the latest data protection information by clicking the link on this website"}),Object(n.jsx)("p",{children:"You may read or print this updated and amended version at any time."})]})]})},le=Object(l.a)(Object(d.a)({palette:{text:{primary:"#fff",secondary:"#2c3e50"},primary:{main:"#2c3e50"},secondary:{main:"#1abc9c"}}})),de="about",he="partners",be={text:"DoDo",href:"title"},je=function(e){return"#"+e},ue=[{text:"About",href:je(de)},{text:"Partners",href:je(he)}],fe=[{element:Object(n.jsx)(ae,{}),id:"title"},{element:Object(n.jsx)(E,{}),id:de},{element:Object(n.jsx)(ee,{}),id:he}];var me=function(){return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(h.a,{}),Object(n.jsxs)(b.a,{theme:le,children:[Object(n.jsx)(J,{navElements:ue,titleElement:be}),Object(n.jsxs)(ne.c,{children:[Object(n.jsxs)(ne.a,{path:"/impressum",children:[Object(n.jsx)(ie,{}),Object(n.jsx)(se,{})]}),Object(n.jsx)(ne.a,{path:"/",children:Object(n.jsx)(P,{sections:fe})})]}),Object(n.jsx)(z,{})]})]})},pe=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,100)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,o=t.getLCP,i=t.getTTFB;r(e),a(e),n(e),o(e),i(e)}))};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(M.a,{basename:"/dodo-web",children:Object(n.jsx)(me,{})})}),document.getElementById("root")),pe()}},[[66,1,2]]]);
//# sourceMappingURL=main.182615ab.chunk.js.map