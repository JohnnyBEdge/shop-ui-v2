(this["webpackJsonpshop-ui-v2"]=this["webpackJsonpshop-ui-v2"]||[]).push([[0],{151:function(e,a,t){e.exports=t(250)},156:function(e,a,t){},250:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),i=(t(156),t(50)),o=t(6),m=function(){return localStorage.getItem("auth")},s=t(13),u=Object(n.createContext)(null),d=t(310),p=t(290),g=t(284),f=t(311),E=t(288),b=t(307),h=t(24),v=t(291),j=t(72),O=t.n(j),N=t(132),y=t(292),S=t(281),C=Object(y.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},formContainer:{border:"solid black 1px",borderRadius:5},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},msg:{color:"red",fontSize:"20px"},linkContainer:{marginBottom:50}}})),x=function(e){var a=Object(n.useState)(""),t=Object(o.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)(""),m=Object(o.a)(i,2),j=m[0],y=m[1],x=Object(n.useState)(!1),w=Object(o.a)(x,2),k=w[0],W=w[1],I=Object(n.useState)(""),q=Object(o.a)(I,2),_=q[0],T=q[1],P=Object(s.g)(),A=Object(n.useContext)(u),z=(A.loginStatus,A.setLoginStatus),D=function(){T(""),k?localStorage.setItem("email",l):localStorage.removeItem("email"),fetch("https://jm-shop-api.herokuapp.com/api/accounts/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,password:j})}).then((function(e){var a;return 200===e.status?(a=e.headers.get("authentication"),localStorage.setItem("auth",a),P.push("/inventory"),z("Logged In")):T("Login Failed"),e.json()})).then((function(e){return localStorage.setItem("user",JSON.stringify(e))}))},H=C();return Object(n.useEffect)((function(){var e=localStorage.getItem("email");e&&(c(e),W(!0))}),[]),r.a.createElement("div",{id:"login_container"},r.a.createElement(S.a,{component:"main",maxWidth:"xs",className:H.formContainer},r.a.createElement(g.a,null),r.a.createElement("div",{className:H.paper},r.a.createElement(d.a,{className:H.avatar},r.a.createElement(O.a,null)),r.a.createElement(N.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("span",{className:H.msg},_),r.a.createElement("form",{className:H.form,noValidate:!0},r.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:l,onChange:function(e){var a=e.target;return c(a.value)}}),r.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:j,onChange:function(e){var a=e.target;return y(a.value)}}),r.a.createElement(E.a,{control:r.a.createElement(b.a,{name:"remember",checked:k,color:"primary",onChange:function(){W(!k)}}),label:"Remember me"}),r.a.createElement(p.a,{fullWidth:!0,variant:"contained",color:"primary",className:H.submit,onClick:function(){return D()}},"Sign In"),r.a.createElement(v.a,{container:!0,className:H.linkContainer},r.a.createElement(v.a,{item:!0,xs:!0},r.a.createElement(h.b,{to:"",variant:"body2"},"Forgot password?")),r.a.createElement(v.a,{item:!0},r.a.createElement(h.b,{to:"",onClick:e.handleFormView,variant:"body2"},"Don't have an account? Sign Up")))))))},w=Object(y.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},registerForm:{border:"solid black 1px",borderRadius:5,marginTop:50},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},linkContainer:{marginBottom:50}}})),k=function(e){var a=Object(n.useState)(""),t=Object(o.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)(""),m=Object(o.a)(i,2),s=m[0],u=m[1],E=Object(n.useState)(""),b=Object(o.a)(E,2),j=b[0],y=b[1],C=Object(n.useState)(""),x=Object(o.a)(C,2),k=x[0],W=x[1],I=Object(n.useState)(""),q=Object(o.a)(I,2),_=q[0],T=q[1],P=Object(n.useState)(!1),A=Object(o.a)(P,1)[0],z=Object(n.useState)([]),D=Object(o.a)(z,1)[0],H=Object(n.useState)(!1),F=Object(o.a)(H,2),L=F[0],J=F[1],B=Object(n.useState)(!1),R=Object(o.a)(B,2),V=R[0],M=R[1],U=Object(n.useState)(!1),$=Object(o.a)(U,2),G=$[0],Q=$[1],Z=Object(n.useState)(!1),Y=Object(o.a)(Z,2),K=Y[0],X=Y[1],ee=Object(n.useState)(!1),ae=Object(o.a)(ee,2),te=ae[0],ne=ae[1],re=RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),le=RegExp(/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/),ce=function(e){var a=e.name,t=e.value;switch(a){case"firstName":J(""===l);break;case"lastName":M(""===s);break;case"email":j.match(re)?Q(!1):Q(!0);break;case"password":t.match(le)?X(!1):X(!0);break;case"passwordMatch":t.match(k)?ne(!1):ne(!0)}},ie=w();return r.a.createElement("div",{id:"register_container"},r.a.createElement(S.a,{component:"main",maxWidth:"xs",className:ie.registerForm},r.a.createElement(g.a,null),r.a.createElement("div",{className:ie.paper},r.a.createElement(d.a,{className:ie.avatar},r.a.createElement(O.a,null)),r.a.createElement(N.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{id:"sign_up_form",className:ie.form,noValidate:!0},r.a.createElement(v.a,{container:!0,spacing:2},r.a.createElement(v.a,{item:!0,xs:12,sm:6},r.a.createElement(f.a,{name:"firstName",error:L,variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,value:l,onChange:function(e){var a=e.target;return c(a.value)},onBlur:function(e){var a=e.target;return ce(a)}})),r.a.createElement(v.a,{item:!0,xs:12,sm:6},r.a.createElement(f.a,{variant:"outlined",error:V,required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",value:s,onChange:function(e){var a=e.target;return u(a.value)},onBlur:function(e){var a=e.target;return ce(a)}})),r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"outlined",required:!0,error:G,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:j,onChange:function(e){var a=e.target;return y(a.value)},onBlur:function(e){var a=e.target;return ce(a)}})),r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"outlined",error:K,type:"password",required:!0,fullWidth:!0,id:"password",label:"Create Password",name:"password",value:k,onChange:function(e){var a=e.target;W(a.value),ce(a)},helperText:"Password must be at least 6 characters long and include at least one number."})),r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(f.a,{type:"password",error:te,variant:"outlined",required:!0,fullWidth:!0,id:"passwordMatch",label:"Confirm Password",name:"passwordMatch",onChange:function(e){var a=e.target;T(a.value),ce(a)},helperText:"Passwords must match.",value:_}))),r.a.createElement(p.a,{fullWidth:!0,variant:"contained",color:"primary",className:ie.submit,onClick:function(){return!1===L&&""!==l&&!1===V&&""!==s&&!1===G&&""!==j&&!1===K&&""!==k&&!1===te?console.log("valid form"):alert("Invalid form, check your information."),void fetch("https://jm-shop-api.herokuapp.com/api/accounts/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fname:l,lname:s,email:j,password:k,isAdmin:A,cart:D})}).then((function(){c(""),u(""),y(""),W(""),T("")})).then(e.handleFormView)}},"Sign Up"),r.a.createElement(v.a,{container:!0,justify:"flex-end",className:ie.linkContainer},r.a.createElement(v.a,{item:!0},r.a.createElement(h.b,{to:"",onClick:e.handleFormView,variant:"body2"},"Already have an account? Sign in")))))))},W=Object(y.a)((function(){return{logos:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",width:"100%"},logo:{width:"1fr",height:"100px"},image:{width:"90%"}}})),I=function(){var e=W();return r.a.createElement("div",{id:"ad_container",className:e.container},r.a.createElement("p",null,"All the brands you love, at prices you can afford!"),r.a.createElement("div",{className:e.logos},r.a.createElement("div",{className:e.logo},r.a.createElement("img",{src:"https://cdn.expertvoice.com/static-forever/public-web/f41203d00a203780.png",className:e.image,alt:"logo"})),r.a.createElement("div",{className:e.logo},r.a.createElement("img",{src:"https://cdn.expertvoice.com/static-forever/public-web/40f2eeff324dbf8f.png",className:e.image,alt:"logo"})),r.a.createElement("div",{className:e.logo},r.a.createElement("img",{src:"https://cdn.expertvoice.com/static-forever/public-web/33d52ffb1724c1a8.png",className:e.image,alt:"logo"})),r.a.createElement("div",{className:e.logo},r.a.createElement("img",{src:"https://cdn.expertvoice.com/static-forever/public-web/f19cf7832ff1eac4.png",className:e.image,alt:"logo"})),r.a.createElement("div",{className:e.logo},r.a.createElement("img",{src:"https://cdn.expertvoice.com/static-forever/public-web/7e5f2994c8c46d10.png",className:e.image,alt:"logo"})),r.a.createElement("div",{className:e.logo},r.a.createElement("img",{src:"https://cdn.expertvoice.com/static-forever/public-web/0e1617d09434ceee.png",className:e.image,alt:"logo"})),r.a.createElement("div",{className:e.logo},r.a.createElement("img",{src:"https://cdn.expertvoice.com/static-forever/public-web/65d54fe044bd4863.png",className:e.image,alt:"logo"})),r.a.createElement("div",{className:e.logo},r.a.createElement("img",{src:"https://cdn.expertvoice.com/static-forever/public-web/e8c894a432523c05.png",className:e.image,alt:"logo"})),r.a.createElement("div",{className:e.logo},r.a.createElement("img",{src:"https://cdn.expertvoice.com/static-forever/public-web/bdcc4ff759625385.png",className:e.image,alt:"logo"}))))},q=t(293),_=Object(y.a)((function(){return{welcomeContainer:{display:"flex"},con:{display:"flex",flexDirection:"column",width:"50%",alignItems:"center"},left:{height:"80vh",display:"flex",flexDirection:"column",alignItems:"center",padding:"30px 50px",color:"#4E4E4E",fontSize:"22px",fontWeight:"300",lineHeight:"1.5"},right:{display:"flex",flexDirection:"column",justifyContent:"center"}}})),T=function(){var e=Object(n.useState)("login"),a=Object(o.a)(e,2),t=a[0],l=a[1],c=function(){l("login"===t?"register":"login")},i="login"===t?r.a.createElement(x,{handleFormView:c}):r.a.createElement(k,{handleFormView:c}),m=_();return r.a.createElement("div",{id:"main_container"},r.a.createElement("div",{className:m.welcomeContainer},r.a.createElement("div",{className:"".concat(m.left," ").concat(m.con)},r.a.createElement("h1",null,"Welcome"),r.a.createElement("p",null,"Welcome to the exclusive, members only gear shop. To view the best deals on the market right now, please login. If you have not made an account yet, you can do so ",r.a.createElement(q.a,{onClick:c},"here!")),r.a.createElement(I,null)),r.a.createElement("div",{className:"".concat(m.right," ").concat(m.con)},i)))},P=t(123),A=t.n(P),z=t(308),D=t(309),H=t(287),F=t(306),L=Object(y.a)((function(){return{itemContainer:{width:"100%",display:"grid",gridTemplateColumns:"repeat(2, 1fr)",height:"auto"},itemContent:{display:"flex",flexDirection:"column",width:"1fr",alignItems:"center"},img:{width:400,padding:20},desc:{lineHeight:1.5,fontSize:20,fontWeight:300,padding:5,width:600},selectSize:{minWidth:120},name:{fontFamily:"Stuart,Georgia,serif",fontWeight:700,fontSize:35,padding:5,marginTop:40},quantity:{fontSize:18},price:{fontSize:18}}})),J=function(){var e=localStorage.getItem("cart"),a=Object(n.useState)(JSON.parse(localStorage.getItem("selected"))),t=Object(o.a)(a,1)[0],l=Object(n.useState)(JSON.parse(e)),c=Object(o.a)(l,1)[0],i=L();return r.a.createElement("div",{className:i.itemContainer},r.a.createElement("div",{className:i.itemContent},r.a.createElement("div",{className:"image-carousel"},r.a.createElement("img",{src:t.img,className:i.img,alt:"default img placeholder"})),r.a.createElement("p",{className:i.desc},t.desc)),r.a.createElement("div",{className:i.itemContent},r.a.createElement("p",{className:i.name},t.name),r.a.createElement("p",{className:i.price},"Price: $",t.price),r.a.createElement(H.a,{variant:"outlined"},r.a.createElement(z.a,{id:"demo"},"Size"),r.a.createElement(F.a,{labelId:"demo-simple-select-outlined-label",className:i.selectSize,label:"Size"},r.a.createElement(D.a,{value:"s"},"Small"),r.a.createElement(D.a,{value:"m"},"Medium"),r.a.createElement(D.a,{value:"l"},"Large"))),r.a.createElement("p",{className:i.quantity},"Quantity: ",t.quantity),r.a.createElement(p.a,{variant:"contained",color:"primary",endIcon:r.a.createElement(A.a,null),onClick:function(){return c.push(t),void localStorage.setItem("cart",JSON.stringify(c))}},"Add to Cart")))},B=t(305),R=t(124),V=t.n(R),M=function(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)(e.inventory.name),m=Object(o.a)(i,2),s=m[0],u=m[1],d=Object(n.useState)(e.inventory.price),g=Object(o.a)(d,2),E=g[0],b=g[1],h=Object(n.useState)(e.inventory.quantity),v=Object(o.a)(h,2),j=v[0],O=v[1],N=Object(n.useState)(e.inventory.desc),S=Object(o.a)(N,2),C=S[0],x=S[1],w=Object(n.useState)(e.inventory.img),k=Object(o.a)(w,2),W=k[0],I=k[1],q=function(){c(!l)},_=Object(y.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),top:100,left:"37%"},button:{margin:e.spacing(2,0,2)},input:{margin:e.spacing(1,0,1)}}}))();return r.a.createElement("div",{id:"edit_modal_container"},r.a.createElement(V.a,{onClick:q}),r.a.createElement(B.a,{open:l,onClose:q,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},r.a.createElement("div",{className:_.paper},r.a.createElement("h2",{id:"simple-modal-title"},"Edit Item"),r.a.createElement(f.a,{name:"name",variant:"outlined",required:!0,fullWidth:!0,id:"name",label:"Item Name",className:_.input,value:s,onChange:function(e){var a=e.target;return u(a.value)}}),r.a.createElement(f.a,{name:"quantity",variant:"outlined",required:!0,fullWidth:!0,id:"quantity",label:"Quantity",className:_.input,value:j,onChange:function(e){var a=e.target;return O(a.value)}}),r.a.createElement(f.a,{name:"price",variant:"outlined",required:!0,fullWidth:!0,id:"price",label:"Price",className:_.input,value:E,onChange:function(e){var a=e.target;return b(a.value)}}),r.a.createElement(f.a,{name:"img",variant:"outlined",required:!0,fullWidth:!0,id:"img_url",label:"Img URL",value:W,className:_.input,onChange:function(e){var a=e.target;return I(a.value)}}),r.a.createElement(f.a,{name:"desc",variant:"outlined",required:!0,fullWidth:!0,id:"desc",label:"Description",className:_.input,multiline:!0,rows:"5",value:C,onChange:function(e){var a=e.target;return x(a.value)}}),r.a.createElement(p.a,{fullWidth:!0,variant:"contained",color:"primary",className:_.button,onClick:function(){fetch("https://jm-shop-api.herokuapp.com/api/inventory/".concat(e.inventory._id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,price:E,quantity:j,desc:C,img:W})}).then(console.log("EDITED")).then((function(){return q()}))}},"Update"),r.a.createElement(p.a,{fullWidth:!0,variant:"contained",color:"secondary",className:_.button,onClick:function(){return q()}},"Cancel"))))},U=t(125),$=t.n(U),G=function(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)(""),m=Object(o.a)(i,2),s=m[0],u=m[1],d=Object(n.useState)(""),g=Object(o.a)(d,2),E=g[0],b=g[1],h=Object(n.useState)(""),v=Object(o.a)(h,2),j=v[0],O=v[1],N=Object(n.useState)(""),S=Object(o.a)(N,2),C=S[0],x=S[1],w=Object(n.useState)(""),k=Object(o.a)(w,2),W=k[0],I=k[1],q=function(){c(!l)},_=Object(y.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),top:100,left:"37%"},button:{margin:e.spacing(3,0,2)},input:{margin:e.spacing(1,0,1)}}}))();return r.a.createElement("div",{id:"edit_modal_container"},r.a.createElement(p.a,{variant:"contained",color:"primary",className:_.button,startIcon:r.a.createElement($.a,null),onClick:q},"Add Item"),r.a.createElement(B.a,{open:l,onClose:q,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},r.a.createElement("div",{className:_.paper},r.a.createElement("h2",{id:"simple-modal-title"},"Add Item"),r.a.createElement(f.a,{name:"name",variant:"outlined",required:!0,fullWidth:!0,id:"name",label:"Item Name",className:_.input,onChange:function(e){var a=e.target;return u(a.value)}}),r.a.createElement(f.a,{name:"quantity",variant:"outlined",required:!0,fullWidth:!0,id:"quantity",label:"Quantity",className:_.input,onChange:function(e){var a=e.target;return O(a.value)}}),r.a.createElement(f.a,{name:"price",variant:"outlined",required:!0,fullWidth:!0,id:"price",label:"Price",className:_.input,onChange:function(e){var a=e.target;return b(a.value)}}),r.a.createElement(f.a,{name:"img",variant:"outlined",required:!0,fullWidth:!0,id:"img_url",label:"Img URL",className:_.input,onChange:function(e){var a=e.target;return I(a.value)}}),r.a.createElement(f.a,{name:"desc",variant:"outlined",required:!0,fullWidth:!0,id:"desc",label:"Description",className:_.input,onChange:function(e){var a=e.target;return x(a.value)}}),r.a.createElement(p.a,{fullWidth:!0,variant:"contained",color:"primary",className:_.button,onClick:function(){fetch("https://jm-shop-api.herokuapp.com/api/inventory",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({name:s,price:E,quantity:j,desc:C,img:W})}).then((function(){u(""),b(""),O(""),x(""),I("")})).then((function(){return q()})).then(console.log("ADDED"))}},"Add"),r.a.createElement(p.a,{fullWidth:!0,variant:"contained",color:"secondary",className:_.button,onClick:function(){return q()}},"Cancel"))))},Q=t(126),Z=t.n(Q),Y=function(e){return r.a.createElement("div",{id:"delete_btn_container"},r.a.createElement(Z.a,{onClick:function(){window.confirm("Are you sure you want to remove this item?")&&fetch("https://jm-shop-api.herokuapp.com/api/inventory/".concat(e.inventory._id),{method:"DELETE"}).then(console.log("DELETE"))}}))},K=t(295),X=t(299),ee=t(298),ae=t(294),te=t(296),ne=t(297),re=t(252),le=Object(n.createContext)([]),ce=t(88),ie=t.n(ce),oe=function(e){var a=Object(n.useContext)(le),t=function(){p("asc"===d?"desc":"asc")},l=Object(n.useState)(a),c=Object(o.a)(l,2),i=c[0],m=c[1],s=Object(n.useState)("asc"),u=Object(o.a)(s,2),d=u[0],p=u[1],g=function(){var e=ie()(a,"quantity",d);t(),m(e)},f=Object(y.a)({table:{minWidth:650},descCell:{maxWidth:300},itemCell:{minWidth:300},quantityCell:{width:20},tableHeader:{fontWeight:"bold"}})();return r.a.createElement("div",{id:"inventory_container"},r.a.createElement(ae.a,{component:re.a},r.a.createElement(G,null),r.a.createElement(K.a,{className:f.table,"aria-label":"simple table"},r.a.createElement(te.a,null,r.a.createElement(ne.a,null,r.a.createElement(ee.a,{padding:"checkbox",align:"left",className:f.tableHeader,onClick:function(){return function(){var e=ie()(a,[function(e){return e.name.toLowerCase()}],d);t(),m(e)}()}},r.a.createElement(b.a,null),"Item"),r.a.createElement(ee.a,{align:"right",className:f.tableHeader,onClick:function(){return g()}},"Quantity"),r.a.createElement(ee.a,{align:"right",className:f.tableHeader,onClick:function(){return g()}},"Price"),r.a.createElement(ee.a,{align:"left",className:f.tableHeader},"Description"),r.a.createElement(ee.a,{align:"left",className:f.tableHeader},"Edit"),r.a.createElement(ee.a,{align:"left",className:f.tableHeader},"Delete"))),r.a.createElement(X.a,null,i.map((function(e){return r.a.createElement(ne.a,{key:e._id},r.a.createElement(ee.a,{component:"th",scope:"row",padding:"checkbox",className:f.itemCell},r.a.createElement(b.a,null),e.name),r.a.createElement(ee.a,{align:"right",className:f.quantityCell},e.quantity),r.a.createElement(ee.a,{align:"right"},e.price),r.a.createElement(ee.a,{align:"left",className:f.descCell},e.desc),r.a.createElement(ee.a,{align:"left"},r.a.createElement(M,{inventory:e})),r.a.createElement(ee.a,{align:"left"},r.a.createElement(Y,{inventory:e})))}))))))},me=t(49),se=t.n(me),ue=t(77),de=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1];function c(){return(c=Object(ue.a)(se.a.mark((function e(){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jm-shop-api.herokuapp.com/api/accounts");case 2:e.sent.json().then((function(e){return l(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){c.apply(this,arguments)}()}),[]);var i=Object(y.a)({table:{minWidth:650},descCell:{maxWidth:300},itemCell:{minWidth:50},quantityCell:{width:20},tableHeader:{fontWeight:"bold"}})();return r.a.createElement("div",{id:"inventory_container"},r.a.createElement(ae.a,{component:re.a},r.a.createElement(K.a,{className:i.table,"aria-label":"simple table"},r.a.createElement(te.a,null,r.a.createElement(ne.a,null,r.a.createElement(ee.a,{padding:"checkbox",align:"left",className:i.tableHeader},r.a.createElement(b.a,null)),r.a.createElement(ee.a,{align:"left",className:i.tableHeader},"First Name"),r.a.createElement(ee.a,{align:"left",className:i.tableHeader},"Last Name"),r.a.createElement(ee.a,{align:"left",className:i.tableHeader},"Email"),r.a.createElement(ee.a,{align:"left",className:i.tableHeader},"isAdmin"),r.a.createElement(ee.a,{align:"left",className:i.tableHeader},"Edit"))),r.a.createElement(X.a,null,t.map((function(e){return r.a.createElement(ne.a,{key:e._id},r.a.createElement(ee.a,{component:"th",scope:"row",padding:"checkbox",className:i.itemCell},r.a.createElement(b.a,null)),r.a.createElement(ee.a,{align:"left",className:i.itemCell},e.fname),r.a.createElement(ee.a,{align:"left"},e.lname),r.a.createElement(ee.a,{align:"left"},e.email),r.a.createElement(ee.a,{align:"left",className:i.descCell},e.isAdmin?"yes":"no"),r.a.createElement(ee.a,{align:"left"}))}))))))},pe=t(300),ge=t(304),fe=t(301),Ee=t(303);function be(e){var a=e.children,t=e.value,n=e.index,l=Object(i.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},l),t===n&&r.a.createElement(Ee.a,{p:3},r.a.createElement(N.a,{component:"span"},a)))}function he(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var ve=Object(y.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function je(){var e=ve(),a=r.a.useState(0),t=Object(o.a)(a,2),n=t[0],l=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(pe.a,{position:"static"},r.a.createElement(ge.a,{value:n,onChange:function(e,a){l(a)},"aria-label":"simple tabs example"},r.a.createElement(fe.a,Object.assign({label:"Inventory"},he(0))),r.a.createElement(fe.a,Object.assign({label:"Users"},he(1))))),r.a.createElement(be,{value:n,index:0},r.a.createElement(oe,null)),r.a.createElement(be,{value:n,index:1},r.a.createElement(de,null)))}var Oe=Object(y.a)((function(){return{container:{width:"1fr",height:"auto",border:"solid black 1px",borderRadius:3,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",transition:"all .1s ease-in-out",color:"rgb(45, 42, 42)","&:hover":{transform:"scale(1.1)"}},itemName:{padding:0,margin:5,fontSize:20,maxWidth:225},itemPrice:{},img:{width:150,margin:10}}})),Ne=function(e){var a=Oe();return r.a.createElement(q.a,{href:"/item",item:e.item},r.a.createElement("div",{className:a.container},r.a.createElement("div",{className:a.imgContainer},r.a.createElement("img",{className:a.img,src:e.item.img,alt:e.item.name})),r.a.createElement("h4",{className:a.itemName},e.item.name),r.a.createElement("p",{className:a.itemPrice},"Price: $",e.item.price)))},ye=Object(y.a)((function(){return{itemsContainer:{width:"80%",height:"auto",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridGap:15,marginTop:30}}})),Se=function(){var e=Object(n.useContext)(le),a=e.map((function(e){return r.a.createElement("a",{to:"/item/".concat(e._id),onClick:function(){return function(e){localStorage.setItem("selected",JSON.stringify(e))}(e)},key:e._id},r.a.createElement(Ne,{item:e}))})),t=ye();return r.a.createElement("div",{id:"inventory_container"},r.a.createElement("h1",null,"Inventory Page"),r.a.createElement("div",{id:"items_container",className:t.itemsContainer},a))},Ce=0,xe=Object(y.a)({table:{minWidth:700,maxWidth:1e3,margin:"0 auto"},btn:{margin:"20px",position:"relative",left:"70%",paddingBottom:10},header:{fontWeight:800,fontSize:18},cartH2:{marginLeft:"42%",fontSize:30}}),we=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1];function c(e){return"".concat(e.toFixed(2))}var i=[];t.map((function(e){return i.push((a=e.name,t=1,n=e.price,{desc:a,qty:t,unit:n,price:function(e,a){return e*a}(t,n)}));var a,t,n}));var m=i.map((function(e){return e.price})).reduce((function(e,a){return e+a}),0),s=.07*m,u=s+m;Object(n.useEffect)((function(){l(JSON.parse(localStorage.getItem("cart")))}),[]);var d=xe();return r.a.createElement("div",{id:"cart_container"},r.a.createElement("h2",{className:d.cartH2},"Your Cart"),r.a.createElement(ae.a,{component:re.a},r.a.createElement(K.a,{className:d.table,"aria-label":"spanning table"},r.a.createElement(te.a,null,r.a.createElement(ne.a,null,r.a.createElement(ee.a,{className:d.header},"Item"),r.a.createElement(ee.a,{className:d.header,align:"left"},"Quantity:"),r.a.createElement(ee.a,{className:d.header,align:"left"},"Price each:"),r.a.createElement(ee.a,{className:d.header,align:"right"},"Sum Total"))),r.a.createElement(X.a,null,i.map((function(e){return r.a.createElement(ne.a,{key:Ce++},r.a.createElement(ee.a,null,e.desc),r.a.createElement(ee.a,{align:"left"},e.qty),r.a.createElement(ee.a,{align:"left"},e.unit),r.a.createElement(ee.a,{align:"right"},c(e.price)))})),r.a.createElement(ne.a,null,r.a.createElement(ee.a,{rowSpan:3}),r.a.createElement(ee.a,{colSpan:2},"Subtotal"),r.a.createElement(ee.a,{align:"right"},c(m))),r.a.createElement(ne.a,null,r.a.createElement(ee.a,null,"Tax"),r.a.createElement(ee.a,{align:"right"},"".concat((.07*100).toFixed(0)," %")),r.a.createElement(ee.a,{align:"right"},c(s))),r.a.createElement(ne.a,null,r.a.createElement(ee.a,{colSpan:2},"Total"),r.a.createElement(ee.a,{align:"right"},c(u)))))),r.a.createElement(p.a,{className:d.btn,variant:"contained",color:"primary"},"Proceed With Order"))},ke=t(302),We=t(289),Ie=t(129),qe=t.n(Ie),_e=t(127),Te=t.n(_e),Pe=t(130),Ae=t(128),ze=t.n(Ae),De=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],l=a[1],c=r.a.useState(null),i=Object(o.a)(c,2),u=i[0],d=i[1],p=function(){d(null)},g=function(){var e=Object(ue.a)(se.a.mark((function e(){var a;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem("auth"),localStorage.removeItem("user"),void localStorage.setItem("cart",JSON.stringify([]));case 2:a=r.a.createElement(s.a,{to:"/"}),l(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=m();return r.a.createElement("div",{id:"avatar_container"},f?r.a.createElement("span",null,r.a.createElement(Te.a,{"aria-controls":"avatar-menu","aria-haspopup":"true",onClick:function(e){d(e.currentTarget)},fontSize:"large"}),r.a.createElement(ze.a,null),r.a.createElement(Pe.a,{id:"avatar-menu",anchorEl:u,keepMounted:!0,open:Boolean(u),onClose:p},r.a.createElement(D.a,{onClick:p},"Profile"),r.a.createElement(D.a,{onClick:p},"Shopping Cart"),r.a.createElement(D.a,{onClick:function(){p(),g()}},"Logout"))):r.a.createElement("p",null," You are not logged in."),t)},He=Object(y.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),Fe=function(){var e=He();return r.a.createElement("div",{id:"nav_container"},r.a.createElement(pe.a,{position:"static",color:"inherit"},r.a.createElement(ke.a,null,r.a.createElement(We.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(qe.a,null)),r.a.createElement(N.a,{variant:"h6",className:e.title}),r.a.createElement("span",null,r.a.createElement(De,null)))))},Le=function(){var e=Object(n.useState)(m()?"Logged In":"Not Logged In"),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(JSON.parse(localStorage.getItem("user"))),d=Object(o.a)(c,1)[0],p=Object(n.useState)([]),g=Object(o.a)(p,2),f=g[0],E=g[1];var b=function(e){var a=e.component,t=Object(i.a)(e,["component"]),n=m()&&d.isAdmin;return r.a.createElement(s.b,Object.assign({},t,{render:function(e){return n?r.a.createElement(a,e):r.a.createElement(s.a,{to:"/"})}}))},v=function(e){var a=e.component,t=Object(i.a)(e,["component"]);return r.a.createElement(s.b,Object.assign({},t,{render:function(e){return m()?r.a.createElement(a,e):r.a.createElement(s.a,{to:"/"})}}))},j=function(e){var a=e.component,t=Object(i.a)(e,["component"]);return r.a.createElement(s.b,Object.assign({},t,{render:function(e){return m()?r.a.createElement(s.a,{to:"inventory"}):r.a.createElement(a,e)}}))};return Object(n.useEffect)((function(){fetch("https://jm-shop-api.herokuapp.com/api/inventory").then((function(e){return e.json()})).then((function(e){return E(e)})),null===localStorage.getItem("cart")&&localStorage.setItem("cart",JSON.stringify([]))}),[]),r.a.createElement(le.Provider,{value:f},r.a.createElement(u.Provider,{value:{loginStatus:t,setLoginStatus:l}},r.a.createElement("div",{className:"App"},r.a.createElement(h.a,null,r.a.createElement(Fe,null),r.a.createElement(s.d,null,r.a.createElement(j,{exact:!0,path:"/",component:T}),r.a.createElement(v,{exact:!0,path:"/item",component:J}),r.a.createElement(v,{exact:!0,path:"/cart",component:we}),r.a.createElement(v,{exact:!0,path:"/inventory",component:Se}),r.a.createElement(b,{exact:!0,path:"/admin",component:je}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[151,1,2]]]);
//# sourceMappingURL=main.aa7e087a.chunk.js.map