(this.webpackJsonpsheffield_welcome_site=this.webpackJsonpsheffield_welcome_site||[]).push([[0],{78:function(e,t,n){},79:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(9),s=n.n(r),c=(n(78),n(34)),o=n(65),d=n(17),l=(n.p,n(79),n(4)),m=n(137),u=n(20),j=n(145),p=n(143),g=n(140),h=n(142),b=n(37),f=n(135),O=n(144),x=n(62),v=n.n(x),y=n(63),w=n.n(y),S=n(64),k=n.n(S),L=n(133),M=n(44),I=n(45),C=n(49),H=n(48),N=n(54),A=n.n(N),B=n(43),W=n.n(B),P=n(131),T=n(134),R=n(136),q=n(2),E=[{id:"1",nameHeader:"General Computing Skills",subMenu:[{id:"1",name:"Github Tutorial (Making Back-Ups)"},{id:"2",name:"Terminal Tutorial"},{id:"3",name:"Typing Skills Improvements"},{id:"4",name:"What Computer Should I Buy?"}]},{id:"2",nameHeader:"Academic Skills",subMenu:[{id:"1",name:"What To Expect In Your Course"},{id:"2",name:"Group Project Advice"},{id:"3",name:"Studying and Revision"},{id:"4",name:"How not to fail an assignment"},{id:"5",name:"Finding Past Papers"},{id:"6",name:"Important Links and Information"}]},{id:"3",nameHeader:"First Years",subMenu:[{id:"1",name:"Maths Overview"},{id:"2",name:"First Year Modules Overview"}]},{id:"4",nameHeader:"Post Graduates",subMenu:[{id:"1",name:"Expected Programming Ability"},{id:"2",name:"Expectations based on Programme"},{id:"3",name:"Self Study"}]},{id:"5",nameHeader:"General Information",subMenu:[{id:"1",name:"International Students"},{id:"2",name:"Important Links and Information"}]}],F=function(e){Object(C.a)(n,e);var t=Object(H.a)(n);function n(){var e;Object(M.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={settings:[{id:"1",open:!1},{id:"2",open:!1},{id:"3",open:!1},{id:"4",open:!1},{id:"5",open:!1}]},e.handleClick=function(t){e.setState((function(e){return Object(d.a)(Object(d.a)({},e),{},{settings:e.settings.map((function(e){return e.id===t?Object(d.a)(Object(d.a)({},e),{},{open:!e.open}):e}))})}))},e}return Object(I.a)(n,[{key:"render",value:function(){var e=this,t=this.state.settings;return Object(q.jsx)("div",{style:{},children:Object(q.jsx)(P.a,{component:"nav",style:{paddingTop:"0px"},children:E.map((function(n){return Object(q.jsxs)(a.a.Fragment,{children:[Object(q.jsxs)(L.a,{button:!0,onClick:function(){return e.handleClick(n.id)},children:[Object(q.jsx)(T.a,{inset:!0,primary:n.nameHeader}),t.find((function(e){return e.id===n.id})).open?Object(q.jsx)(A.a,{}):Object(q.jsx)(W.a,{})]}),Object(q.jsx)(f.a,{}),Object(q.jsx)(R.a,{in:t.find((function(e){return e.id===n.id})).open,timeout:"auto",unmountOnExit:!0,children:Object(q.jsx)(P.a,{component:"div",disablePadding:!0,children:n.subMenu.map((function(e){return Object(q.jsx)(L.a,{button:!0,children:Object(q.jsx)(T.a,{inset:!0,primary:e.name})},e.id)}))})})]},n.id)}))})})}}]),n}(i.Component),G=n(87),_=n(138),U=n(89),Y=n(139),J=[{id:"1",nameHeader:"Emma Norling",fileName:"EmmaNorling.jpg",role:"Lecturer Role",welcomeMessage:"Lorem Ipsum Welcome Message"},{id:"2",nameHeader:"Guy Brown",fileName:"Guy-Brown.jpg",role:"Lecturer Role",welcomeMessage:"Lorem Ipsum Welcome Message"},{id:"3",nameHeader:"Jon Barker",fileName:"Jon-Barker1.jpg",role:"Lecturer Role",welcomeMessage:"Lorem Ipsum Welcome Message"}],D=[{id:"1",nameHeader:"Computing Society",fileName:"compsoc.png",welcomeMessage:"Lorem Ipsum Welcome Message",link:"https://shefcompsoc.uk/"},{id:"2",nameHeader:"HackSheffield",fileName:"hacksheffield.jpg",welcomeMessage:"Lorem Ipsum Welcome Message",link:"https://hacksheffield.com/"},{id:"3",nameHeader:"Women In Computer Science",fileName:"womenincomputerscience.jpg",welcomeMessage:"Lorem Ipsum Welcome Message",link:"https://www.sheffield.ac.uk/dcs/news/sheffield-women-computer-science-society"}],V=Object(m.a)((function(e){return{root:{flexGrow:1},paper:{height:140,width:100},control:{padding:e.spacing(2)},logo:{maxWidth:160,marginLeft:"auto",marginTop:5,marginBottom:5}}})),z=function(e){Object(C.a)(n,e);var t=Object(H.a)(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(I.a)(n,[{key:"render",value:function(){var e=this.props.classes;return Object(q.jsxs)("div",{style:{},children:[Object(q.jsxs)(b.a,{style:{paddingLeft:"20%",paddingRight:"20%",textAlign:"center"},paragraph:!0,children:["Welcome to your first year of computer science! This website is meant to be a way to  easily find important information about how to navigate your First Year. ",Object(q.jsx)("br",{}),"Use the sections on the left to find material, or the search-bar on the top right if you can't find what you're looking for."]}),Object(q.jsx)(b.a,{style:{textAlign:"center"},variant:"h2",paragraph:!0,children:"Welcome From Heads Of Year"}),Object(q.jsx)(_.a,{container:!0,spacing:2,children:Object(q.jsx)(_.a,{item:!0,xs:12,children:Object(q.jsx)(_.a,{container:!0,justify:"center",spacing:2,children:J.map((function(t){return Object(q.jsx)(_.a,{item:!0,children:Object(q.jsxs)(U.a,{style:{textAlign:"center",paddingLeft:"2%",paddingRight:"2%",paddingBottom:"2%",paddingTop:"2%"},children:[Object(q.jsx)(b.a,{style:{textAlign:"center"},variant:"h5",paragraph:!0,children:t.nameHeader}),Object(q.jsx)(b.a,{style:{textAlign:"center"},variant:"h6",paragraph:!0,children:t.role}),Object(q.jsx)("img",{src:t.fileName,alt:"University Of Sheffield Logo",style:{borderRadius:"100%"},className:e.logo}),Object(q.jsx)(b.a,{style:{textAlign:"center"},paragraph:!0,children:t.welcomeMessage})]})},t)}))})})}),Object(q.jsx)(b.a,{style:{textAlign:"center",marginTop:"2%"},paragraph:!0,children:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."}),Object(q.jsx)(b.a,{style:{textAlign:"center"},variant:"h2",paragraph:!0,children:"Computing Societies Welcome"}),Object(q.jsx)(_.a,{container:!0,spacing:2,children:Object(q.jsx)(_.a,{item:!0,xs:12,children:Object(q.jsx)(_.a,{container:!0,justify:"center",spacing:2,children:D.map((function(t){return Object(q.jsx)(_.a,{item:!0,children:Object(q.jsxs)(U.a,{style:{textAlign:"center",paddingLeft:"2%",paddingRight:"2%",paddingBottom:"2%",paddingTop:"2%"},children:[Object(q.jsx)(b.a,{style:{textAlign:"center"},variant:"h6",paragraph:!0,children:t.nameHeader}),Object(q.jsx)(b.a,{style:{textAlign:"center"},variant:"h6",paragraph:!0,children:t.role}),Object(q.jsx)("img",{src:t.fileName,alt:"University Of Sheffield Logo",width:"100",height:"100",style:{borderRadius:"100%"},className:e.logo}),Object(q.jsx)("br",{}),Object(q.jsx)(Y.a,{href:t.link,children:" Link to website"}),Object(q.jsx)("br",{}),Object(q.jsx)(b.a,{style:{textAlign:"center"},paragraph:!0,children:t.welcomeMessage})]})},t)}))})})})]})}}]),n}(i.Component),K=Object(G.a)(V)(z),Q=n(141);function X(){return Object(q.jsx)(g.a,{position:"static",color:"primary",children:Object(q.jsx)(Q.a,{maxWidth:"md",children:Object(q.jsx)(h.a,{children:Object(q.jsx)(b.a,{variant:"body1",color:"inherit",children:"\xa9 2021 Damian Bemben"})})})})}var Z=240;var $=Object(m.a)((function(e){return{root:{display:"flex",flexGrow:1},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),backgroundColor:"#272F40"},appBarShift:{width:"calc(100% - ".concat(Z,"px)"),marginLeft:Z,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},logo:{maxWidth:160,marginLeft:"auto",marginTop:5,marginBottom:5},hide:{display:"none"},drawer:{width:Z,flexShrink:0},drawerPaper:{width:Z},drawerHeader:Object(d.a)(Object(d.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},list_root:{width:"100%",maxWiddth:360},nested:{paddingLeft:e.spacing(4)}}}));var ee=function(){var e=$(),t=Object(u.a)(),n=a.a.useState(!1),i=Object(o.a)(n,2),r=i[0],s=i[1];return Object(q.jsxs)("div",{className:e.root,children:[Object(q.jsx)(p.a,{}),Object(q.jsx)(g.a,{position:"fixed",className:Object(l.a)(e.appBar,Object(c.a)({},e.appBarShift,r)),children:Object(q.jsxs)(h.a,{children:[Object(q.jsx)(O.a,{color:"inherit","aria-label":"open drawer",onClick:function(){s(!0)},edge:"start",className:Object(l.a)(e.menuButton,r&&e.hide),children:Object(q.jsx)(v.a,{})}),Object(q.jsx)(b.a,{variant:"h6",style:{textAlign:"center"},children:"Sheffield Computer Science Introduction Website"}),Object(q.jsx)("img",{src:"TUOS_PRIMARY_LOGO_REVERSED.png",alt:"University Of Sheffield Logo",className:e.logo})]})}),Object(q.jsxs)(j.a,{className:e.drawer,variant:"persistent",anchor:"left",open:r,classes:{paper:e.drawerPaper},children:[Object(q.jsx)("div",{className:e.drawerHeader,children:Object(q.jsx)(O.a,{onClick:function(){s(!1)},children:"ltr"==t.direction?Object(q.jsx)(w.a,{}):Object(q.jsx)(k.a,{})})}),Object(q.jsx)(f.a,{}),Object(q.jsx)(F,{})]}),Object(q.jsxs)("main",{className:Object(l.a)(e.content,Object(c.a)({},e.contentShift,r)),children:[Object(q.jsx)("div",{className:e.drawerHeader}),Object(q.jsx)(K,{}),Object(q.jsx)(X,{})]})]})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,146)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),i(e),a(e),r(e),s(e)}))};s.a.render(Object(q.jsx)(a.a.StrictMode,{children:Object(q.jsx)(ee,{})}),document.getElementById("root")),te()}},[[86,1,2]]]);
//# sourceMappingURL=main.60241d2a.chunk.js.map