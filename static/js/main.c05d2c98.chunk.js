(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"startLoading",function(){return ve}),a.d(n,"stopLoading",function(){return Ee});var o=a(0),r=a.n(o),s=a(13),i=a.n(s),l=a(15),c=a(12),m=a(19),u=a(18),d=a(11),h=a(20),g=(a(95),a(154)),p=a(153),f=a(82),y=a(156),b=a(126),I=a(127),w=function(e){var t=Object(f.a)({palette:{type:e,primary:b.a,secondary:{main:I.a[200]},contrastThreshold:2}});return t=Object(y.a)(t)},v=w("light"),E=w("dark"),k=a(53),j=a(30),O=a(139),C=a(105),S=a(134),x=a(129),D=a(106),N=a(130),M=a(131),P=a(132),T=a(133),A=a(157),L=a(42),R=a(135),B=a(136),H=a(137),F=a(138),W=a(128),G=a(76),U=a.n(G),Y=function(e){var t=e.handleClick;return r.a.createElement(W.a,{color:"inherit",edge:"start",onClick:t},r.a.createElement(U.a,null))},z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={showingLeftPane:!1},a.handleLeftPaneToggle=a.handleLeftPaneToggle.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleLeftPaneToggle",value:function(){this.setState(function(e,t){return{showingLeftPane:!e.showingLeftPane}})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.width,n=(e.theme,e.leftPane),o=e.rightPane,s=e.toggleTheme,i=e.isLoading,l=r.a.createElement(x.a,{item:!0,sm:4,className:t.mainPane},r.a.createElement(D.a,{className:t.mainPaneContent},n));return r.a.createElement("div",{className:t.root},i?r.a.createElement("div",{className:t.loaderContainer},r.a.createElement(N.a,{className:t.loader})):null,r.a.createElement(M.a,{position:"static",className:t.header},r.a.createElement(P.a,{className:t.container},r.a.createElement(T.a,null,r.a.createElement(A.a,{smUp:!0},r.a.createElement(Y,{handleClick:this.handleLeftPaneToggle})),r.a.createElement(L.a,{variant:"xs"===a?"h4":"h3",component:"h1",className:t.logo},r.a.createElement(R.a,{color:"inherit",href:"",underline:"none"},"MUI MailBox")),r.a.createElement(B.a,{onClick:s},r.a.createElement(H.a,null,"invert_colors")),r.a.createElement(F.a,{className:t.avatar},r.a.createElement(H.a,null,"person"))))),r.a.createElement(P.a,{className:t.mainContainer},r.a.createElement(x.a,{container:!0,direction:"row",justify:"center",alignItems:"stretch",className:t.mainGrid},this.state.showingLeftPane?r.a.createElement(A.a,{smUp:!0},l):null,r.a.createElement(A.a,{xsDown:!0},l),r.a.createElement(x.a,{item:!0,sm:8,className:t.mainPane},r.a.createElement(D.a,{className:t.mainPaneContent},o)))),r.a.createElement("footer",{className:t.footer},r.a.createElement(P.a,{className:t.container},r.a.createElement(L.a,{variant:"body2",color:"textSecondary"},"\xa9 2019. Created by PyVlad React Professionals using \xa0",r.a.createElement(R.a,{color:"inherit",href:"https://material-ui.com/"},"Material-UI"),"\xa0 components."))))}}]),t}(r.a.Component),_=Object(j.b)(function(e){return{isLoading:e.isLoading}})(Object(O.a)(Object(C.a)(function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},footer:{padding:e.spacing(1)},header:{backgroundColor:"light"===e.palette.type?e.palette.primary.light:e.palette.primary.dark,padding:e.spacing(1)},logo:{flex:1},container:{maxWidth:e.breakpoints.values.md,padding:0},mainContainer:{marginTop:e.spacing(1),marginBottom:e.spacing(1),padding:0,flex:1,maxWidth:e.breakpoints.values.md},mainGrid:{height:"100%"},mainPane:{padding:e.spacing(1),width:"100%"},mainPaneContent:{padding:e.spacing(1),height:"100%"},avatar:{margin:e.spacing(1)},loaderContainer:{backgroundColor:"RGBA(0,0,0,0.5)",width:"100%",height:"100%",top:0,left:0,position:"fixed",zIndex:1e5},loader:{position:"fixed",top:"45%",left:"45%"}}})(Object(S.a)()(z)))),Z=a(38),J=a(84),$=Object(J.a)(function(e){return{content:{padding:e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center"},paneItem:{margin:"".concat(e.spacing(2),"px 0")}}}),V=function(e){var t=$();return r.a.createElement("div",{className:t.content},e.children.map(function(e,a){return r.a.createElement("div",{className:t.paneItem,key:a},e)}))},q=a(140),K=Object(J.a)(function(e){return{buttonIcon:{marginRight:e.spacing(1)},buttonLabel:{lineHeight:1}}}),Q=function(e){var t=e.handleClick,a=K();return r.a.createElement(q.a,{variant:"extended",color:"secondary","aria-label":"edit",size:"medium",onClick:t},r.a.createElement(H.a,{className:a.buttonIcon},"edit_icon"),r.a.createElement(L.a,{variant:"body1",className:a.buttonLabel},"New Message"))},X=a(141),ee=a(142),te=a(143),ae=a(144),ne=a(145),oe=a(77),re=a.n(oe),se=Object(J.a)(function(e){return{header:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}}}),ie=function(e){var t=se(),a=e.categories,n=e.onCategorySelect;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{variant:"h4",component:"h2",className:t.header},"Categories"),r.a.createElement(X.a,{component:"nav","aria-label":"main mailbox folders"},a.map(function(e){var t=e.id,a=e.name,o=e.amount;return r.a.createElement(ee.a,{button:!0,key:t,onClick:function(){return n(t)}},r.a.createElement(te.a,null,r.a.createElement(ae.a,{color:"secondary",badgeContent:o},r.a.createElement(re.a,null))),r.a.createElement(ne.a,{primary:a}))})))},le=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).API=a.props.API,a.state={categories:a.API.categories},a.handleCategorySelect=a.handleCategorySelect.bind(Object(d.a)(a)),a.handleMessageCreate=a.handleMessageCreate.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleCategorySelect",value:function(e){this.props.history.replace("/category/".concat(e))}},{key:"handleMessageCreate",value:function(){this.props.history.replace("/create")}},{key:"updateCategoryData",value:function(){var e=this,t=this.API.categories.map(function(t){return e.API.getMessagesByCategoryId(t.id)});Promise.all(t).then(function(t){return e.API.categories.map(function(e,a){return Object.assign(e,{amount:t[a].length})})}).then(function(t){return e.setState({categories:t})})}},{key:"componentDidMount",value:function(){this.updateCategoryData()}},{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&this.updateCategoryData()}},{key:"render",value:function(){return r.a.createElement(V,null,r.a.createElement(Q,{handleClick:this.handleMessageCreate}),r.a.createElement(ie,{categories:this.state.categories,onCategorySelect:this.handleCategorySelect}))}}]),t}(r.a.Component),ce=Object(Z.g)(le),me=a(83),ue=a(146),de=a(79),he=a.n(de),ge=a(107),pe=a(45),fe=Object(J.a)(function(e){return{icon:{height:2*e.typography.fontSize,width:2*e.typography.fontSize,verticalAlign:"middle",color:e.palette.text.secondary},floatRight:{float:"right"},fromToItem:{lineHeight:0}}}),ye=function(e){var t=e.date,a=new Date(t).toLocaleString();return r.a.createElement(L.a,{variant:"overline",color:"textPrimary"},a)},be=function(e){var t=e.from,a=e.to,n=fe(),o=Object(pe.a)(),s=Object(ge.a)(o.breakpoints.up("md"));return r.a.createElement("div",{className:s?n.floatRight:null},r.a.createElement(L.a,{color:"textSecondary",variant:"overline",component:"span",className:n.fromToItem},t.name," ",r.a.createElement(he.a,{className:n.icon})," ",a.name))},Ie=function(e){var t=e.title;return r.a.createElement(L.a,{variant:"body1"},t)},we=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.categoryName,a=e.messages,n=e.onMessageSelect;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{variant:"h4",component:"h2"},t),r.a.createElement(X.a,null,a.length?a.map(function(e,t){var a=e.id,o=e.date,s=e.from,i=e.to,l=e.title;return r.a.createElement(r.a.Fragment,{key:a},t?null:r.a.createElement(ue.a,null),r.a.createElement(ee.a,{button:!0,onClick:function(){return n(a)}},r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(be,{from:s,to:i}),r.a.createElement(ye,{date:o}),r.a.createElement(Ie,{title:l}))),r.a.createElement(ue.a,null))}):r.a.createElement(L.a,{variant:"body1"},"No items in this category.")))}}]),t}(r.a.Component),ve=function(){return{type:"START_LOADING"}},Ee=function(){return{type:"STOP_LOADING"}},ke=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).updateData=function(){var e=a.props,t=e.match,n=e.startLoading,o=e.stopLoading,r=t.params.id;n(),Promise.all([a.API.getCategoryById(r),a.API.getMessagesByCategoryId(r)]).then(function(e){var t=Object(me.a)(e,2),n=t[0],o=t[1];return a.setState({category:n,messages:o})}).then(function(){return o()})},a.API=a.props.API,a.state={category:null,messages:null},a.handleMessageSelect=a.handleMessageSelect.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.updateData()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.id!==e.match.params.id&&this.updateData()}},{key:"handleMessageSelect",value:function(e){this.props.history.replace("/message/".concat(e))}},{key:"render",value:function(){return null!==this.state.category&&null!==this.state.messages?r.a.createElement(we,{categoryName:this.state.category.name,messages:this.state.messages,onMessageSelect:this.handleMessageSelect}):null}}]),t}(r.a.Component),je=Object(j.b)(void 0,n)(ke),Oe=a(158),Ce=a(152),Se=a(155),xe=a(148),De=a(149),Ne=a(150),Me=a(151),Pe=function(e){var t=e.open,a=e.dialogTitle,n=e.dialogText,o=e.onConfirm,s=e.onCancel;return r.a.createElement(Se.a,{open:t,onClose:s,"aria-labelledby":"simple-dialog-title"},r.a.createElement(xe.a,{id:"simple-dialog-title"},a),r.a.createElement(De.a,null,r.a.createElement(Ne.a,{id:"alert-dialog-description"},n)),r.a.createElement(Me.a,null,r.a.createElement(B.a,{onClick:s,color:"primary"},"No"),r.a.createElement(B.a,{onClick:o,color:"primary",autoFocus:!0},"Yes")))},Te=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={isDeleteConfirmOpen:!1,isSpamConfirmOpen:!1},a.handleDialogClose=a.handleDialogClose.bind(Object(d.a)(a)),a.handleConfirm=a.handleConfirm.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleConfirm",value:function(e){"spam"===e?this.setState({isSpamConfirmOpen:!0}):"delete"===e&&this.setState({isDeleteConfirmOpen:!0})}},{key:"handleDialogClose",value:function(){this.setState({isDeleteConfirmOpen:!1,isSpamConfirmOpen:!1})}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.from,o=t.to,s=t.date,i=t.title,l=t.body,c=t.onMessageDelete,m=t.onMessageSpam;return r.a.createElement("article",{className:a.container},r.a.createElement("header",{className:a.header},r.a.createElement("div",{className:a.date},r.a.createElement(L.a,{variant:"caption"},new Date(s).toLocaleString())),r.a.createElement("div",{className:a.actions},r.a.createElement(Pe,{open:this.state.isDeleteConfirmOpen,dialogTitle:"Confirm Delete",dialogText:"Are you sure you want to delete this message?",onConfirm:c,onCancel:this.handleDialogClose}),r.a.createElement(Oe.a,{title:"delete"},r.a.createElement(W.a,{className:a.action,onClick:function(){return e.handleConfirm("delete")}},r.a.createElement(H.a,null,"delete"))),r.a.createElement(Pe,{open:this.state.isSpamConfirmOpen,dialogTitle:"Confirm as Spam",dialogText:"Are you sure you want to mark this message as spam?",onConfirm:m,onCancel:this.handleDialogClose}),r.a.createElement(Oe.a,{title:"mark as spam"},r.a.createElement(W.a,{className:a.action,onClick:function(){return e.handleConfirm("spam")}},r.a.createElement(H.a,null,"not_interested"))))),r.a.createElement(X.a,{className:a.addressList},r.a.createElement(ee.a,{dense:!0,disableGutters:!0},r.a.createElement(Ce.a,null,r.a.createElement(F.a,null,r.a.createElement(H.a,null,"image"))),r.a.createElement(ne.a,{primary:n.name,secondary:n.address})),r.a.createElement(ue.a,{variant:"inset",component:"li"}),r.a.createElement(ee.a,{dense:!0,disableGutters:!0},r.a.createElement(Ce.a,null,r.a.createElement(F.a,null,r.a.createElement(H.a,null,"image"))),r.a.createElement(ne.a,{primary:o.name,secondary:o.address})),r.a.createElement(ue.a,{variant:"inset",component:"li"})),r.a.createElement(L.a,{variant:"h4",component:"h2",className:a.title},i),r.a.createElement("section",{className:a.body},r.a.createElement(L.a,{variant:"body1"},l)))}}]),t}(r.a.Component),Ae=Object(C.a)(function(e){return{container:{},header:{display:"flex",justifyContent:"space-between",alignItems:"center"},actions:{textAlign:"right"},action:{color:"#f55"},title:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},direction:{color:e.palette.primary[e.palette.type]}}})(Te),Le=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).updateData=function(){var e=a.props,t=e.match,n=e.startLoading,o=e.stopLoading;n(),a.API.getMessageById(parseInt(t.params.id)).then(function(e){a.setState({message:e})}).then(function(){return o()})},a.API=a.props.API,a.state={message:null},a.handleMessageDelete=a.handleMessageDelete.bind(Object(d.a)(a)),a.handleMessageSpam=a.handleMessageSpam.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.updateData()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.id!==e.match.params.id&&this.updateData()}},{key:"handleMessageDelete",value:function(e){var t=this,a=this.props,n=a.startLoading,o=a.stopLoading;n(),this.API.deleteMessageById(e).then(function(){return o()}).then(function(){return t.props.history.replace("/category/all")})}},{key:"handleMessageSpam",value:function(e){var t=this,a=this.props,n=a.startLoading,o=a.stopLoading;n(),this.API.updateMessageCategory(e,"spam").then(function(){return o()}).then(function(){return t.props.history.replace("/category/all")})}},{key:"render",value:function(){var e=this;return null!==this.state.message?r.a.createElement(Ae,Object.assign({},this.state.message,{onMessageDelete:function(){return e.handleMessageDelete(parseInt(e.props.match.params.id))},onMessageSpam:function(){return e.handleMessageSpam(parseInt(e.props.match.params.id))}})):null}}]),t}(r.a.Component),Re=Object(j.b)(void 0,n)(Le),Be=a(81),He=a(108),Fe=Object(He.a)(function(e){return{formContainer:{width:"100%",padding:10,backgroundColor:"#fff"},form:{backgroundColor:"#F6F7F8",border:"1px solid #D6D9DC",borderRadius:"3px",padding:"10px"},formHeader:{textAlign:"center",marginBottom:"20px"},formRow:{display:"flex",justifyContent:"flex-start",flexDirection:"column",flexWrap:"wrap",marginBottom:"10px"},formRowLabel:{fontSize:"16px",lineHeight:1.3,fontWeight:"bold",padding:"5px 3px"},formRowInput:{border:"1px solid #D6D9DC",borderRadius:"3px",fontSize:"14px",padding:"7px"},formRowTextarea:{fontFamily:"Helvetica",fontSize:"14px",border:"1px solid #D6D9DC",borderRadius:"3px",resize:"none",height:"150px",marginBottom:"10px",padding:"7px"},submitButton:{fontSize:"16px",fontWeight:"bold",color:"#FFFFFF",backgroundColor:"#5995DA",border:"none",borderRadius:"3px",padding:"10px 40px",cursor:"pointer","&:hover":{backgroundColor:"#76AEED"},"&:active":{backgroundColor:"#407FC7"}}}}),We=function(e){var t=e.handleSubmit,a=e.handleInputChange,n=Fe();return r.a.createElement("div",{className:n.formContainer},r.a.createElement("form",{action:"",method:"get",className:n.form,onSubmit:t},r.a.createElement("header",{className:n.formHeader},r.a.createElement("h1",null,"New Message")),r.a.createElement("div",{className:n.formRow},r.a.createElement("label",{htmlFor:"new-msg-destination",className:n.formRowLabel},"Recepient Email"),r.a.createElement("input",{type:"email",id:"new-msg-destination",name:"destination",placeholder:"bob@example.com",onChange:a,className:n.formRowInput})),r.a.createElement("div",{className:n.formRow},r.a.createElement("label",{htmlFor:"new-msg-title",className:n.formRowLabel},"Message Title"),r.a.createElement("input",{type:"text",id:"new-msg-title",name:"title",onChange:a,className:n.formRowInput})),r.a.createElement("div",{className:n.formRow},r.a.createElement("label",{htmlFor:"new-msg-body",className:n.formRowLabel},"Message Body"),r.a.createElement("textarea",{id:"new-msg-body",name:"body",onChange:a,className:n.formRowTextarea})),r.a.createElement("div",{className:n.formRow},r.a.createElement("button",{className:n.submitButton},"Send"))))},Ge=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={recepient:"",title:"",body:""},a.handleInputChange=a.handleInputChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(Be.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log(this.state),this.props.onMessageSend(this.state)}},{key:"render",value:function(){return r.a.createElement(We,{handleSubmit:this.handleSubmit,handleInputChange:this.handleInputChange})}}]),t}(r.a.Component),Ue=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).API=a.props.API,a.handleMessageSend=a.handleMessageSend.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleMessageSend",value:function(e){var t=this,a=this.props,n=a.startLoading,o=a.stopLoading;n(),this.API.createNewMessage(e).then(function(){return o()}).then(function(){return t.props.history.replace("/category/all")})}},{key:"render",value:function(){return r.a.createElement(Ge,{onMessageSend:this.handleMessageSend})}}]),t}(r.a.Component),Ye=Object(j.b)(void 0,n)(Ue),ze=function(e){return r.a.createElement(Z.d,null,r.a.createElement(Z.b,{path:"/",exact:!0,render:function(e){return r.a.createElement(Z.a,{to:"/category/all"})}}),"} />",r.a.createElement(Z.b,{path:"/category/:id",render:function(t){return r.a.createElement(je,Object.assign({},t,e))}}),r.a.createElement(Z.b,{path:"/message/:id",render:function(t){return r.a.createElement(Re,Object.assign({},t,e))}}),r.a.createElement(Z.b,{path:"/create",render:function(t){return r.a.createElement(Ye,Object.assign({},t,e))}}),r.a.createElement(Z.b,{render:function(){return r.a.createElement("div",null,"404 NOT FOUND")}}))},_e=a(60),Ze=a(29),Je=a.n(Ze),$e=a(47),Ve={categories:[{id:"inbox",name:"Inbox"},{id:"sent",name:"Sent"},{id:"spam",name:"Spam"}],messages:[{id:1,from:{name:"React Programmer",address:"react.programmer@example.com"},to:{name:"World",address:"world@example.com"},categoryId:"sent",date:"2019-01-01T00:00:01Z",title:"Hello, React World!",body:"Hey! How are you doing? Yours truely."},{id:2,from:{name:"Stan Smith",address:"stan.smith@example.com"},to:{name:"Slim Eminem",address:"slim.eminem@example.com"},categoryId:"inbox",date:"2019-01-01T00:00:02Z",title:"Hey, Slim!",body:"Dear Slim, I wrote you, but you still ain't callin'.\nI left my cell, my pager, and my home phone at the bottom.\nI sent two letters back in autumn; you must not-a got 'em.\nThere probably was a problem at the post office or somethin'.\nSometimes, I scribble addresses too sloppy when I jot 'em,\nBut anyways, F- it. What's been up, man? How's you're daughter?\nMy girlfriend's pregnant, too, I'm about to be a father.\nIf I have a daughter, guess what I'ma call her?\nI'ma name her Bonnie.\nI read about your Uncle Ronnie, too. I'm sorry.\nI had a friend kill himself over some chick who didn't want him.\nI know you probably hear this everyday, but I'm your biggest fan.\nI even got the underground stuff you did with Scam.\nI got a room full of your posters and your pictures, man.\nI like the stuff you did with Ruckus, too. That guy was fat.\nAnyways, I hope you get this, man. Hit me back, just to chat.\nTruly yours, your biggest fan.\nThis is Stan."},{id:3,from:{name:"Stan Smith",address:"john.smith@example.com"},to:{name:"Slim Eminem",address:"slim.eminem@example.com"},categoryId:"inbox",date:"2019-03-01T00:00:01Z",title:"Hey Slim! Why no answer?",body:"Dear Slim, you still ain't called or wrote. I hope you get a chance.\nI ain't mad. I just think it's SCREWED UP that you don't answer fans.\nIf you didn't wanna talk to me outside your concert you didn't have to, but you coulda signed an autograph for Matthew.\nHe's my little brother, man. He's only six years old.\nWe waited in the blistering cold for you.\n4 hours and you just said \"No\".\nThat's pretty crummy, man. You're like his favorite idol.\nHe wants to be just like you, man. He likes you more than I do.\nI ain't that mad, though. I just don't like being lied to.\nRemember when we met back in Denver, you said if I write you\nYou'd write back. See, I'm just like you in a way.\nI never knew my father, neither.\nHe used to always cheat on my mom and beat her.\nI can relate to what you're saying in your songs,\nSo when I have a crummy day, I drift away and put 'em on\n'Cause I don't really got nothin' else\nSo that stuff helps when I'm depressed.\nI even got a tattoo of your name across the chest.\nSometimes I even cut myself to see how much it bleeds.\nIt's like adrenaline. The pain is such a sudden rush for me.\nSee, everything you say is real, and I respect it cause you tell it.\nMy girlfriend's jealous 'cause I talk about you 24/7,\nBut she don't know you like I know you, Slim. No one does.\nShe don't know what it was like for people like us growin' up.\nYou gotta call me, man. I'll be the biggest fan you'll ever lose.\nSincerely yours, Stan"},{id:4,from:{name:"Stan Smith",address:"stan.smith@example.com"},to:{name:"Slim Eminem",address:"slim.eminem@example.com"},categoryId:"inbox",date:"2019-06-01T00:00:01Z",title:"Goodbye Mr I'm-Too-Good-To-Call-Or-Write-My-Fans!",body:"Dear Mr I'm-Too-Good-To-Call-Or-Write-My-Fans,\nThis'll be the last package I ever send your @$$.\nIt's been six months and still no word. I don't deserve it?\nI know you got my last two letters.\nI wrote the addresses on 'em perfect.\nSo this is my cassette I'm sending you. I hope you hear it.\nI'm in the car right now. I'm doing 90 on the freeway.\nHey Slim, I drank a fifth of vodka. You dare me to drive?\nYou know that song by Phil Collins, \"In the Air of the Night\"\nAbout that guy that coulda saved that other guy from drowning,\nBut didn't, then Phil saw it all, then later at a show he found 'em? That's kinda how this is. You coulda saved me from drowning.\nNow it's too late, I'm on a thousand downers, now. I'm drowsy' and all I wanted was a lousy\nLetter or a call.\nI hope you know I ripped ALL you're pictures off the wall.\nI love you, Slim. We coulda been together; think about it.\nYou've ruined it, now. I hope you can't sleep and you dream about it\nAnd when you dream, I hope you can't sleep and you SCREAM about it.\nI hope you're conscience EATS at you and you can't BREATHE without me!\nSee Slim,(backround screaming) Shut up, slut! I'm tryin' to talk!\nHey Slim, that's my girlfriend screamin' in the trunk,\nBut I didn't slit her throat. I just tied her up. \nSee I ain't like you 'cause if she suffocates she'll suffer more, then she'll die too.\nWell, gotta go. I'm almost at the bridge, now.\nOh shoot, I forgot. How'm I supposed to send this tape out?!\n"},{id:5,from:{name:"Slim Eminem",address:"slim.eminem@example.com"},to:{name:"Stan Smith",address:"stan.smith@example.com"},categoryId:"sent",date:"2019-06-02T00:00:01Z",title:"Hey, Stan!",body:"Dear Stan, I meant to write you sooner, but I just been busy\nYou said you're girlfriend's pregnant, now. How far along is she?\nLook, I'm really flattered you'd call you're daughter that.\nAnd here's an autograph for Matthew. I wrote it on the Starter cap.\nI'm sorry I didn't see you at the show. I musta missed you.\nDon't think I did that stuff intenionally just to diss you.\nBut what's this you said about you like to cut you're wrists, too?\nI say that stuff just clownin', dogg. C'mon, how messed up is you?\nYou got some issues, Stan. I think you need some councelin'\nTo help your butt from bouncin' off the walls when you get down some.\nAnd what's this about us meant to be together?\nThat type of junk will make me not want us to meet each other.\nI really think you and your girlfriend need each other\nOr maybe you just need to treat her better.\nI hope you get to read this letter. I just hope it reaches you in time before you hurt yourself. I think you'll be doin' just fine\nIf you relax a little. I'm glad I inspire you, but Stan,\nWhy are you so mad? Try to understand that I do want you as a fan.\nI just don't want you to do some crazy stuff.\nI saw this one thing on the news a couple weeks ago that made me sick.\nSome dude was drunk and drove his car over a bridge and had his girlfriend in the trunk, and she was pregnant with his kid.\nAnd in the car they found a tape, but they didn't say who it was to.\nCome to think about it. His name was... It was you.\nDAMN!"}]},qe=function(){function e(){var t=this;Object(l.a)(this,e),this.categories=Ve.categories,this.messages=Ve.messages,this.getResponsePromise=function(e){return new Promise(function(t,a){setTimeout(function(){return t(e)},1e3*Math.random())})},this.getMessagesByCategoryId=function(e){console.log("getting messages by category Id",e);var a=t.messages;return"all"!==e&&(a=t.messages.filter(function(t){return t.categoryId===e})),a.sort(function(e,t){var a=new Date(e.date);return new Date(t.date)-a}),t.getResponsePromise(a)},this.getMessageById=function(e){return console.log("getting message",e),t.getResponsePromise(t.messages.filter(function(t){return t.id===e})[0])},this.getCategoryById=function(){var e=Object($e.a)(Je.a.mark(function e(a){var n;return Je.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getting category",a),n="all"===a?{id:"all",name:"All Messages"}:t.categories.filter(function(e){return e.id===a})[0],e.next=4,t.getResponsePromise(n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.deleteMessageById=function(){var e=Object($e.a)(Je.a.mark(function e(a){return Je.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("deleting message"),t.messages=t.messages.filter(function(e){return e.id!==a}),e.next=4,t.getResponsePromise(null);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.updateMessageCategory=function(){var e=Object($e.a)(Je.a.mark(function e(a,n){return Je.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("updating message category"),t.messages.find(function(e){return e.id===a}).categoryId=n,e.next=5,t.getResponsePromise(null);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),this.createNewMessage=function(){var e=Object($e.a)(Je.a.mark(function e(a){var n;return Je.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("creating new message"),n={id:Math.max.apply(Math,Object(_e.a)(t.messages.map(function(e){return e.id})))+1,from:{name:"React Programmer",address:"react.programmer@example.com"},to:{name:"Unknown",address:a.destination},categoryId:"sent",date:(new Date).toISOString(),title:a.title,body:a.body},t.messages.push(n),e.next=5,t.getResponsePromise(null);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}return Object(c.a)(e,[{key:"getResource",value:function(){var e=Object($e.a)(Je.a.mark(function e(t){var a;return Je.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("fetch failed for ".concat(t," (status: ").concat(a.status,")"));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),Ke=a(55),Qe={isLoading:!1},Xe=Object(Ke.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe;switch((arguments.length>1?arguments[1]:void 0).type){case"START_LOADING":return{isLoading:!0};case"STOP_LOADING":return{isLoading:!1};default:return e}}),et=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={theme:v},a.toggleTheme=a.toggleTheme.bind(Object(d.a)(a)),a.API=new qe,a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"toggleTheme",value:function(){this.setState({theme:"light"===this.state.theme.palette.type?E:v})}},{key:"render",value:function(){return r.a.createElement(j.a,{store:Xe},r.a.createElement(p.a,{theme:this.state.theme},r.a.createElement(g.a,null),r.a.createElement(k.a,null,r.a.createElement(_,{leftPane:r.a.createElement(ce,{API:this.API}),rightPane:r.a.createElement(ze,{API:this.API}),toggleTheme:this.toggleTheme}))))}}]),t}(r.a.Component);i.a.render(r.a.createElement(et,null),document.getElementById("root"))},90:function(e,t,a){e.exports=a(103)}},[[90,1,2]]]);
//# sourceMappingURL=main.c05d2c98.chunk.js.map