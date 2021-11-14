(this["webpackJsonpreqres-users-app"]=this["webpackJsonpreqres-users-app"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},36:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),s=n.n(c),i=(n(28),n(29),n(4)),u=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1];return[n,function(e){r(e.target.value)}]},o=n(3),l=n(9),d=n(8),j=n.n(d),b=n(10),O=n(11),p=n(7),f=Object(p.b)("auth/loginUserAsync",function(){var e=Object(O.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,fetch("https://reqres.in/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:if(!(n=e.sent).ok){e.next=15;break}return e.next=7,n.json();case 7:if(a=e.sent,"emma.wong@reqres.in"!==t.email){e.next=12;break}return e.abrupt("return",Object(b.a)(Object(b.a)({},a),{},{isAdmin:!0}));case 12:return e.abrupt("return",Object(b.a)(Object(b.a)({},a),{},{isAdmin:!1}));case 13:e.next=17;break;case 15:return alert("Invalid Credentials"),e.abrupt("return",{token:""});case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=Object(p.c)({name:"auth",initialState:{isLoggedIn:!1,token:""},reducers:{logout:function(e,t){return{isLoggedIn:t.payload.isLoggedIn,token:""}}},extraReducers:Object(l.a)({},f.fulfilled,(function(e,t){return t.payload.token?{isLoggedIn:!0,token:t.payload.token,isAdmin:t.payload.isAdmin}:e}))}),m=h.actions.logout,x=h.reducer,v=n(2),g=(n(36),n(1));var y,N=function(){var e=u(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=u(""),c=Object(i.a)(r,2),s=c[0],l=c[1],d=Object(o.b)();return Object(o.c)((function(e){return e.auth.isLoggedIn}))?Object(g.jsx)(v.a,{to:"/user"}):Object(g.jsx)("div",{className:"Login",onSubmit:function(e){e.preventDefault(),d(f({email:n,password:s}))},children:Object(g.jsxs)("form",{children:[Object(g.jsx)("label",{children:"E-mail"}),Object(g.jsx)("input",{type:"email",placeholder:"Enter E-mail",value:n,onChange:a}),Object(g.jsx)("label",{children:"Password"}),Object(g.jsx)("input",{type:"password",placeholder:"Enter Password",value:s,onChange:l}),Object(g.jsx)("input",{type:"submit",value:"LOGIN"})]})})},C=Object(p.b)("users/getUsersAsync",Object(O.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://reqres.in/api/users?page=1");case 2:if(!(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.data);case 8:case"end":return e.stop()}}),e)})))),k=Object(p.b)("users/addUserAsync",function(){var e=Object(O.a)(j.a.mark((function e(t){var n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://reqres.in/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if(!(n=e.sent).ok){e.next=9;break}return e.next=6,n.json();case 6:return a=e.sent,r=Object(b.a)(Object(b.a)({},t),{},{id:parseInt(a.id)}),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),A=Object(p.b)("users/deleteUserAsync",function(){var e=Object(O.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://reqres.in/api/users/".concat(t.id));case 2:if(!(n=e.sent).ok){e.next=5;break}return e.abrupt("return",t);case 5:if(404!=n.status){e.next=7;break}return e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=Object(p.c)({name:"users",initialState:[],reducers:{addUser:function(e,t){var n={id:t.payload.id,email:t.payload.email,first_name:t.payload.first_name,last_name:t.payload.last_name,avatar:t.payload.avatar};return e.push(n)},deleteUser:function(e,t){return e.filter((function(e){return e.id!==t.payload.id}))}},extraReducers:(y={},Object(l.a)(y,C.fulfilled,(function(e,t){return t.payload})),Object(l.a)(y,A.fulfilled,(function(e,t){return e.filter((function(e){return e.id!==t.payload.id}))})),Object(l.a)(y,k.fulfilled,(function(e,t){console.log(t.payload),e.push(t.payload)})),y)}),S=(w.actions.addUser,w.reducer),L=n(12),E=n.n(L);n(47);E.a.setAppElement("#root");var U=function(){var e=Object(o.b)(),t=u(""),n=Object(i.a)(t,2),r=n[0],c=n[1],s=u(""),l=Object(i.a)(s,2),d=l[0],j=l[1],b=u(""),O=Object(i.a)(b,2),p=O[0],f=O[1],h=u(""),x=Object(i.a)(h,2),v=x[0],y=x[1],N=Object(o.c)((function(e){return e.auth.isAdmin})),C=Object(a.useState)(!1),A=Object(i.a)(C,2),w=A[0],S=A[1];return Object(g.jsxs)("div",{className:"Header",children:[Object(g.jsxs)(E.a,{isOpen:w,className:"Modal",overlayClassName:"Overlay",onRequestClose:function(){return S(!1)},children:[Object(g.jsx)("div",{className:"Card-close",onClick:function(){S(!1)},children:"X"}),Object(g.jsxs)("form",{className:"Modal-form",onSubmit:function(t){t.preventDefault(),e(k({email:r,first_name:d,last_name:p,avatar:v}))},children:[Object(g.jsx)("input",{type:"text",value:d,placeholder:"Enter First Name...",onChange:j}),Object(g.jsx)("input",{type:"text",value:p,placeholder:"Enter Last Name...",onChange:f}),Object(g.jsx)("input",{type:"text",value:v,placeholder:"Enter Avatar URL",onChange:y}),Object(g.jsx)("input",{type:"email",value:r,placeholder:"Enter E-mail",onChange:c}),Object(g.jsx)("input",{type:"submit",value:"Add"})]})]}),Object(g.jsx)("h1",{className:"Header-heading",children:N?"Admin":"User"}),Object(g.jsxs)("div",{className:"Header-buttons",children:[N&&Object(g.jsx)("button",{className:"Header-button",onClick:function(){S(!0)},children:"Add User"}),Object(g.jsx)("button",{className:"Header-logout",onClick:function(){e(m({isLoggedIn:!1}))},children:"Log Out"})]})]})};n(48);E.a.setAppElement("#root");var I=function(e){var t=e.user,n=Object(o.b)(),r=Object(a.useState)(!1),c=Object(i.a)(r,2),s=c[0],u=c[1];return Object(g.jsxs)("div",{className:"Card",children:[Object(g.jsxs)(E.a,{isOpen:s,className:"Modal",overlayClassName:"Overlay",onRequestClose:function(){return u(!1)},children:[Object(g.jsx)("div",{className:"Card-close",onClick:function(){u(!1)},children:"X"}),Object(g.jsx)("div",{className:"Card-avatar",children:Object(g.jsx)("img",{src:t.avatar,alt:" avatar"})}),Object(g.jsx)("h2",{className:"Card-name",children:t.first_name+" "+t.last_name}),Object(g.jsx)("p",{className:"Card-email",children:t.email})]}),Object(g.jsxs)("h2",{className:"Card-name",onClick:function(){u(!0)},children:[" ",t.first_name+" "+t.last_name]}),Object(g.jsx)("button",{className:"Card-remove",onClick:function(){n(A({id:t.id}))},children:"Remove"})]})},_=(n(49),function(){var e=Object(o.c)((function(e){return e.user})),t=Object(o.c)((function(e){return e.auth.isAdmin}));return Object(g.jsx)("div",{className:"CardWrapper",children:t?e.map((function(e){return Object(g.jsx)(I,{user:e},e.id)})):Object(g.jsx)("h1",{children:"Welcome User!"})})});n(50);var q=function(){var e=Object(o.c)((function(e){return e.auth.isAdmin}));return Object(g.jsxs)("div",{className:"Sidebar",children:[Object(g.jsx)("h2",{children:"Sidebar"}),Object(g.jsx)("h2",{children:e?"Admin":"User"})]})};n(51);var T=function(){var e=Object(o.b)();return Object(a.useEffect)((function(){e(C())}),[e]),Object(g.jsxs)("div",{className:"Dashboard",children:[Object(g.jsx)(U,{}),Object(g.jsx)("div",{className:"Dashboard-content",children:Object(g.jsx)(_,{})}),Object(g.jsx)(q,{})]})};var F=function(e){var t=e.children,n=e.redirectTo;return Object(o.c)((function(e){return e.auth.isLoggedIn}))?t:Object(g.jsx)(v.a,{to:n})};n(52);var D=function(){return Object(g.jsx)("div",{className:"NotFound",children:Object(g.jsx)("h1",{children:"404 NOT FOUND"})})};var P=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)(v.d,{children:[Object(g.jsx)(v.b,{exact:!0,path:"/",element:Object(g.jsx)(v.a,{to:"/login"})}),Object(g.jsx)(v.b,{exact:!0,path:"/login",element:Object(g.jsx)(N,{})}),Object(g.jsx)(v.b,{exact:!0,path:"/user",element:Object(g.jsx)(F,{redirectTo:"/login",children:Object(g.jsx)(T,{})})}),Object(g.jsx)(v.b,{path:"*",element:Object(g.jsx)(D,{})})]})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},H=n(18),J=Object(p.a)({reducer:{auth:x,user:S}});s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(H.a,{children:Object(g.jsx)(o.a,{store:J,children:Object(g.jsx)(P,{})})})}),document.getElementById("root")),R()}},[[53,1,2]]]);
//# sourceMappingURL=main.bebeaeaf.chunk.js.map