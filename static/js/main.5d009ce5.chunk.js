(window.webpackJsonptestproject=window.webpackJsonptestproject||[]).push([[0],{38:function(e,t,a){},46:function(e,t,a){e.exports=a(83)},51:function(e,t,a){},53:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){e.exports=a.p+"static/media/carousel1.7da2141c.jpg"},64:function(e,t,a){e.exports=a.p+"static/media/carousel2.017a5d95.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/carousel3.d94f8b31.jpg"},73:function(e,t,a){e.exports=a.p+"static/media/reading.79fc50dd.jpg"},74:function(e,t,a){e.exports=a.p+"static/media/travel.432e0156.jpg"},75:function(e,t,a){e.exports=a.p+"static/media/tvshows.30c0ef57.jpg"},76:function(e,t,a){e.exports=a.p+"static/media/parallax1.5349a9c9.jpg"},77:function(e,t,a){e.exports=a.p+"static/media/parallax2.878dc51e.jpg"},78:function(e,t,a){e.exports=a.p+"static/media/parallax3.90c7b3b2.jpg"},79:function(e,t,a){e.exports=a.p+"static/media/school.cd762e5e.jpg"},80:function(e,t,a){e.exports=a.p+"static/media/college.a9934bbe.jpg"},81:function(e,t,a){e.exports=a.p+"static/media/university.dc35ab30.jpg"},82:function(e,t,a){e.exports=a.p+"static/media/avatar.9ffa99c4.png"},83:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(14),l=a.n(r),c=(a(51),a(52),a(53),a(103)),o=a(95),s=a(96),m=a(17),d=a(18),u=a(19),p=a(22),g=a(20),E=a(13),h=a(21),x=a(86),f=a(87),b=a(88),v=a(89),y=a(90),w=a(91),k=a(92),N=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).toggle=a.toggle.bind(Object(E.a)(a)),a.state={isOpen:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(x.a,{color:"light",light:!0,expand:"md",fixed:"top"},i.a.createElement(f.a,{href:""},"Sumair Qasim Ali"),i.a.createElement(b.a,{onClick:this.toggle}),i.a.createElement(v.a,{isOpen:this.state.isOpen,navbar:!0},i.a.createElement(y.a,{className:"ml-auto",navbar:!0},i.a.createElement(w.a,null,i.a.createElement(k.a,{href:"#Home"},"Home")),i.a.createElement(w.a,null,i.a.createElement(k.a,{href:"#Education"},"Education")),i.a.createElement(w.a,null,i.a.createElement(k.a,{href:"#WorkExperience"},"Work Experience")),i.a.createElement(w.a,null,i.a.createElement(k.a,{href:"#Interests"},"Interests")),i.a.createElement(w.a,null,i.a.createElement(k.a,{href:"https://github.com/sumairq18/"},"GitHub")),i.a.createElement(w.a,null,i.a.createElement(k.a,{href:"https://www.linkedin.com/in/sumairqasim"},"LinkedIn"))))))}}]),t}(i.a.Component),I=(a(62),a(41)),T=a(93),S=a(94),C=[{src:a(63),Text:'"Eat Sleep Code Repeat"',caption:"Slide 1"},{src:a(64),Text:"\"When there's code there's bug\"",caption:"Slide 2"},{src:a(65),Text:'"Talk is cheap. Show me the code"',caption:"Slide 3"}],j=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).state={activeIndex:0},a.next=a.next.bind(Object(E.a)(a)),a.previous=a.previous.bind(Object(E.a)(a)),a.goToIndex=a.goToIndex.bind(Object(E.a)(a)),a.onExiting=a.onExiting.bind(Object(E.a)(a)),a.onExited=a.onExited.bind(Object(E.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===C.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?C.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,a=C.map((function(t){return i.a.createElement(I.a,{onExiting:e.onExiting,onExited:e.onExited,key:t.src},i.a.createElement("h4",{className:"quoteCarousel"},t.Text))}));return i.a.createElement(T.a,{activeIndex:t,next:this.next,previous:this.previous},a,i.a.createElement(S.a,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),i.a.createElement(S.a,{direction:"next",directionText:"Next",onClickHandler:this.next}))}}]),t}(n.Component),A=a(97),O=a(98),P=a(99),H=a(100),D=a(101),B=a(102),L=a(23),R=a.n(L),W=(a(66),function(e){return console.log(e),i.a.createElement("div",{className:"cards"},i.a.createElement(o.a,null,i.a.createElement(s.a,{sm:"4"},i.a.createElement(A.a,null,i.a.createElement(O.a,{className:"CardBody"},i.a.createElement(P.a,{className:"CardTitle"},e.item[0].cardTitle),i.a.createElement(H.a,null,e.item[0].cardSubtitle)),i.a.createElement(R.a,{width:"100%",src:e.item[0].cardImg,alt:"Card image cap",thumbnail:!0}),i.a.createElement(O.a,null,i.a.createElement(D.a,null,e.item[0].cardText),i.a.createElement(B.a,{href:e.item[0].webLink},"Visit website")))),i.a.createElement(s.a,{sm:"4"},i.a.createElement(A.a,null,i.a.createElement(O.a,{className:"CardBody"},i.a.createElement(P.a,{className:"CardTitle"},e.item[1].cardTitle),i.a.createElement(H.a,null,e.item[1].cardSubtitle)),i.a.createElement(R.a,{width:"100%",src:e.item[1].cardImg,alt:"Card image cap",thumbnail:!0}),i.a.createElement(O.a,null,i.a.createElement(D.a,null,e.item[1].cardText),i.a.createElement(B.a,{href:e.item[1].webLink},"Visit website")))),i.a.createElement(s.a,{sm:"4"},i.a.createElement(A.a,null,i.a.createElement(O.a,{className:"CardBody"},i.a.createElement(P.a,{className:"CardTitle"},e.item[2].cardTitle),i.a.createElement(H.a,null,e.item[2].cardSubtitle)),i.a.createElement(R.a,{width:"100%",src:e.item[2].cardImg,alt:"Card image cap",thumbnail:!0}),i.a.createElement(O.a,null,i.a.createElement(D.a,null,e.item[2].cardText),i.a.createElement(B.a,{href:e.item[2].webLink},"Visit website"))))))}),M=(a(38),function(e){var t=e.data;return i.a.createElement("div",{className:"timeline-item"},i.a.createElement("div",{className:"timeline-item-content"},i.a.createElement("span",{className:"tag",style:{background:t.category.color}},t.category.tag),i.a.createElement("time",null,"Joined"),i.a.createElement("time",null,t.date),i.a.createElement("h4",null,t.heading),i.a.createElement("h6",null,i.a.createElement("u",null,t.subheading)),i.a.createElement("p",null,t.text),i.a.createElement("span",{className:"duration"},t.duration),t.link&&i.a.createElement("a",{href:t.link.url,target:"_blank",rel:"noopener noreferrer"},t.link.text),i.a.createElement("span",{className:"circle"})))}),K=[{heading:"Ideabox",subheading:"Junior Software Developer",text:"I have worked here for a short period of time in which I created admin Dashboard for the existing project using ASP.NET(MVC), Bootstrap, and SQL Server for Database.",date:"July 02, 2018",duration:"July 02, 2018 till August 01, 2019",category:{tag:"asp.net mvc, sql server",color:"#231651"},link:{url:"https://www.ideabox.com.pk/",text:"Company site"}},{heading:"Integrated Dealership Systems",subheading:"Software Developer",text:"A product based Company which works in Dealership Industry. My Current Role in this job is to resolve bugs. The Product(ERP) that I work on is based on multiple technologies including .NET, Universe, PICK Basic, .NET Core API, React, React Native.",date:"August 02, 2018",duration:"August 02, 2018 till today",category:{tag:".net, universe, react, PICK BASIC",color:"#4DCCBD"},link:{url:"https://www.ids-astra.com",text:"Company site"}},{heading:"Encore",subheading:"Web Developer (Part Time)",text:"The Company works in the payment industry from backend to frontend integration of Payment Systems. I'm Working as a Web Developer, developing different Single Page Applications using HTML, ASP.Net, JQuery, Bootstrap and More.",date:"April 15 2019",duration:"April 15, 2019 till today",category:{tag:"HTML, css, javascript jquery",color:"#2374AB"},link:{url:"http://encore-pay.com/",text:"Company site"}}],J=function(){return K.length>0&&i.a.createElement("div",{className:"timeline-container"},K.map((function(e,t){return i.a.createElement(M,{data:e,key:t})})))},V=a(10),q=function(e){var t=e.data;return i.a.createElement(V.c,{lg:"4",md:"12",className:"mb-lg-0 mb-4"},i.a.createElement(V.h,{hover:!0,className:"rounded z-depth-2 mb-4",waves:!0},i.a.createElement("img",{className:"img-fluid",src:t.img,alt:""}),i.a.createElement(V.f,{overlay:"white-slight"})),i.a.createElement("h4",{className:"font-weight-bold mb-3"},i.a.createElement("strong",null,t.title)),i.a.createElement("p",{className:"dark-grey-text"},t.text),i.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:t.buttonAction},"Read More"))},Q=[{tag:"Reading",title:"Reading",text:"At first I wasn't a reader kind of person but now I have a great interest in reading books in non-fiction generes ",img:a(73),buttonAction:function(){console.log("test1")}},{tag:"Travel",title:"Travel",text:"Traveling fascinates everyone so it does to me, Goal is to visit atleast one new country every year!!",img:a(74),buttonAction:function(){console.log("test2")}},{tag:"TV Shows",title:"TV Shows",text:"I believe Movies & TV Shows provides you more than just entertaintment, they let you learn about all the different type of people",img:a(75),buttonAction:function(){console.log("test3")}}],G=function(){return 0===Q.length?null:i.a.createElement("div",null,i.a.createElement(V.a,{className:"my-5 px-5 pb-5"},i.a.createElement(V.b,{className:"text-center"},i.a.createElement("h2",{className:"h1-responsive font-weight-bold text-center my-5"},"Interests"),i.a.createElement(V.g,null,Q.map((function(e,t){return i.a.createElement(q,{data:e,key:t})}))))))},F=function(){return i.a.createElement(V.e,{className:"font-small pt-4"},i.a.createElement(V.d,{fluid:!0,className:"text-center text-md-left"},i.a.createElement(V.g,null)),i.a.createElement("div",{className:"footer-copyright text-center py-3"},i.a.createElement(V.d,{fluid:!0},"\xa9 ",(new Date).getFullYear()," Copyright: ",i.a.createElement("a",{href:"#"}," Sumair Qasim Ali "))))},U=a(76),z=a(77),Y=a(78),$=[{cardImg:a(79),cardTitle:"Alyabad Community School",cardSubtitle:"Karachi, Pakistan",cardText:"Completed Matriculation in 2012",webLink:""},{cardImg:a(80),cardTitle:"Aga Khan Higher Secondary School",cardSubtitle:"Karachi, Pakistan",cardText:"Completed Intermediate in 2014",webLink:"https://www.agakhanschools.org/Pakistan/AKHSSKAR/Index"},{cardImg:a(81),cardTitle:"National University of Computing and Emerging Sciences",cardSubtitle:"Karachi, Pakistan",cardText:"Completed Graduation in 2018",webLink:"http://khi.nu.edu.pk/"}];var _=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",null,i.a.createElement(N,null)),i.a.createElement(m.Parallax,{bgImage:Y,strength:500},i.a.createElement("div",{className:"parallax"},i.a.createElement(c.a,{className:"Home"},i.a.createElement(o.a,{id:"Home",className:"HomeRow"},i.a.createElement(s.a,null,i.a.createElement("img",{src:a(82),className:"avatar col-xs-6"})),i.a.createElement(s.a,null,i.a.createElement("h1",{className:"col-xs-6"},"Hello There!!! My name is Sumair Qasim Ali and I'm a FullStack Software Developer"),i.a.createElement(j,null)))))),i.a.createElement(m.Parallax,{bgImage:U,strength:500},i.a.createElement("div",{className:"parallax"},i.a.createElement("div",{id:"Education"},i.a.createElement("h2",{className:"sectionHeading",center:!0},"Education"),i.a.createElement(c.a,{className:"EducationContainer"},i.a.createElement(W,{item:$}))))),i.a.createElement(m.Parallax,{bgImage:z,strength:500},i.a.createElement("div",{className:""},i.a.createElement(c.a,{id:"WorkExperience",className:"ExperienceContainer"},i.a.createElement("h2",{className:"sectionHeading",center:!0},"Work Experience"),i.a.createElement(J,null)))),i.a.createElement(m.Parallax,{bgImage:Y,strength:500},i.a.createElement("div",{className:"",style:{marginTop:"20px"}},i.a.createElement(c.a,{id:"Interests"},i.a.createElement(G,null)))),i.a.createElement(F,{className:"footerpage"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.5d009ce5.chunk.js.map