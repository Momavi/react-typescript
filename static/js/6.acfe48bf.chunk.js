(this["webpackJsonpreact-typescript"]=this["webpackJsonpreact-typescript"]||[]).push([[6],{100:function(e,t,s){"use strict";s.d(t,"a",(function(){return g}));var a=s(2),n=s(28),i=s(29),c=s(30),r=s(31),d=s(0),o=s.n(d),l=s(5),u=s(18),j=s(1),b=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var t=function(t){Object(c.a)(d,t);var s=Object(r.a)(d);function d(){return Object(n.a)(this,d),s.apply(this,arguments)}return Object(i.a)(d,[{key:"render",value:function(){return this.props.isAuth?Object(j.jsx)(e,Object(a.a)({},this.props)):Object(j.jsx)(l.a,{to:"/login"})}}]),d}(o.a.Component);return Object(u.b)(b)(t)}},138:function(e,t,s){},250:function(e,t,s){"use strict";s.r(t);var a=s(18),n=s(19),i=s(100),c=s(46),r=s(0),d=s.n(r),o=s(13),l=s(1);var u=function(e){return Object(l.jsx)("div",{className:"dialogs__item active",children:Object(l.jsx)(o.b,{className:"dialogs__item-link",to:"/dialogs/"+e.id,children:e.name})})};var j=function(e){return Object(l.jsx)("div",{className:"dialogs__message",children:e.text})},b=s(5);s(138);var g=function(e){var t=e.dialogsPage,s=t.dialogs.map((function(e){return Object(l.jsx)(u,{name:e.name,id:e.id},e.id)})),a=t.messages.map((function(e){return Object(l.jsx)(j,{text:e.message},e.id)})),n=d.a.createRef();return e.isAuth?Object(l.jsxs)("div",{className:"dialogs",children:[Object(l.jsx)("h3",{className:"dialogs__title",children:"Dialogs"}),Object(l.jsxs)("div",{className:"dialogs__wrapper",children:[Object(l.jsx)("div",{className:"dialogs__items",children:s}),Object(l.jsxs)("div",{className:"dialogs__messages",children:[Object(l.jsx)("div",{children:a}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("textarea",{onChange:function(t){e.updateNewMessageBody(t.target.value)},ref:n,value:e.dialogsPage.newMessageBody,placeholder:"Enter you message"})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"btn",onClick:function(){e.sendMessage()},children:"Send"})})]})]})]})]}):Object(l.jsx)(b.a,{to:"/login"})};t.default=Object(n.c)(Object(a.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{updateNewMessageBody:function(t){e(Object(c.c)(t))},sendMessage:function(){e(Object(c.b)())}}})),i.a)(g)}}]);
//# sourceMappingURL=6.acfe48bf.chunk.js.map