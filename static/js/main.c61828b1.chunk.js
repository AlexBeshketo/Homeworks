(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,function(e,t,n){e.exports={link:"Header_link__1jhOt",active:"Header_active__3frNu",box:"Header_box__Ek9aT",main:"Header_main__2xrzE"}},function(e,t,n){e.exports={main:"Message_main__UakNf",text_button:"Message_text_button__GXywP",textarea:"Message_textarea__3VlLu",btn:"Message_btn__1fgE0",chat__message:"Message_chat__message__1u8EA",message:"Message_message__1bIbb",name:"Message_name__TwhOY",time:"Message_time__2niCz",message_item:"Message_message_item__2bxwL"}},,function(e,t,n){e.exports={padding:"Affairs_padding__3l35N",main:"Affairs_main__3NypA",btn:"Affairs_btn__2uKUu",btn2:"Affairs_btn2__1U8cX",priority:"Affairs_priority__38lTZ"}},,function(e,t,n){e.exports={someClass:"Greeting_someClass__231yO","error-class":"Greeting_error-class__1iPfv","error-text":"Greeting_error-text__34szF",input:"Greeting_input__2_nFW",btn:"Greeting_btn__2WJMr",btn_text:"Greeting_btn_text__K25nU",usersnumber:"Greeting_usersnumber__2HgTW",usersName:"Greeting_usersName__XozVP"}},,,,function(e,t,n){e.exports={input:"SuperInputText_input__1lLDQ",superInput:"SuperInputText_superInput__1Pycf",errorInput:"SuperInputText_errorInput__16QiU",error:"SuperInputText_error__2X4_2"}},,function(e,t,n){e.exports={blue:"HW4_blue__1caVB",column:"HW4_column__1Juoz",testSpanError:"HW4_testSpanError__3fC3e"}},function(e,t,n){e.exports={button:"SuperButton_button__1-3_6",red:"SuperButton_red__39SWv"}},,function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__10fHj",spanClassName:"SuperCheckbox_spanClassName__2XUsI"}},,function(e,t,n){e.exports={App:"App_App__3A9-I"}},function(e,t,n){e.exports={span:"SuperEditableSpan_span__8Zxjt"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(20),r=n.n(s),i=(n(27),n(21)),o=n.n(i),j=n(3),l=n(11),u=n(5),b=n.n(u),d=n(0),x="/pre-junior",O="/junior",m="/juniorplus";var h=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(d.jsx)("div",{className:"".concat(b.a.main,"  ").concat(n?b.a.active:""),children:Object(d.jsxs)("div",{className:b.a.block,children:[Object(d.jsx)(l.b,{to:x,className:function(e){return e.isActive?b.a.active:b.a.link},children:"PreJunior "}),Object(d.jsx)(l.b,{to:O,className:function(e){return e.isActive?b.a.active:b.a.link},children:"Junior"}),Object(d.jsx)(l.b,{to:m,className:function(e){return e.isActive?b.a.active:b.a.link},children:"Junior+  "}),Object(d.jsx)("div",{onClick:function(){c(!n)},className:b.a.box})]})})},_=n(15),p=n(6),f=n.n(p);var v=function(e){var t=Object(a.useState)(""),n=Object(j.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)([]),i=Object(j.a)(r,2),o=i[0],l=i[1];console.log(o);var u=(new Date).toString();return Object(d.jsx)("div",{className:f.a.main,children:Object(d.jsxs)("div",{className:f.a.button,children:[Object(d.jsx)("textarea",{value:c,className:f.a.textarea,onChange:function(e){s(e.target.value)},children:"  "}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:f.a.btn,onClick:function(){var t={avatar:e.avatar,name:"Albina",message:c,time:u.substring(0,25)};l([].concat(Object(_.a)(o),[t])),s("")},type:"submit",children:"Send message"})}),Object(d.jsx)("div",{}),o.map((function(e){return Object(d.jsx)("div",{className:f.a.chat__message,children:Object(d.jsxs)("div",{className:f.a.message,children:[Object(d.jsxs)("div",{className:f.a.name,children:[" ",e.name," "]}),Object(d.jsx)("img",{className:f.a.img,src:e.avatar,width:"100px",height:"100"}),Object(d.jsxs)("div",{className:f.a.time,children:[" ",e.time," "]}),Object(d.jsx)("div",{className:f.a.message_item,children:e.message})]})})}))]})})},g="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",N="Some Name",C="some text",k="22:00";var S=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)(v,{avatar:g,name:N,message:C,time:k}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},y=n(8),A=n.n(y);var w=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:A.a.padding,children:Object(d.jsxs)("div",{className:A.a.main,children:[Object(d.jsxs)("span",{children:["  ",e.name," "]}),Object(d.jsx)("span",{className:A.a.priority,children:e.priority}),Object(d.jsx)("button",{className:A.a.btn2,onClick:function(){e.deleteAffairCallback(e.affair.id)},children:"X"})]})})})};var E=function(e){var t=e.setFilter,n=e.data.map((function(t){return Object(d.jsx)(w,{priority:t.priority,name:t.name,affair:t,deleteAffairCallback:e.deleteAffairCallback},t.id)}));return Object(d.jsxs)("div",{children:[n,Object(d.jsx)("button",{className:A.a.btn,onClick:function(){t("all")},children:" All"}),Object(d.jsx)("button",{className:A.a.btn,onClick:function(){t("high")},children:" High"}),Object(d.jsx)("button",{className:A.a.btn,onClick:function(){t("middle")},children:" Middle"}),Object(d.jsx)("button",{className:A.a.btn,onClick:function(){t("low")},children:" Low"})]})},I=[{id:1,name:"React",priority:"high"},{id:2,name:"anime",priority:"low"},{id:3,name:"games",priority:"low"},{id:5,name:"html & css",priority:"middle"}];var T=function(){var e=Object(a.useState)(I),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)("all"),r=Object(j.a)(s,2),i=r[0],o=r[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(E,{data:l,setFilter:function(e){o(e)},deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e.id!==t}))}(n,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},P=n(10),U=n.n(P),M=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,s=e.totalUsers,r=e.users,i=c?Object(d.jsx)("span",{className:U.a["error-text"],children:c}):"",o=r.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:" Name :"}),Object(d.jsx)("span",{className:U.a.usersName,children:e.name}),Object(d.jsxs)("span",{className:U.a.id,children:[" ID :",e.id.substr(0,5)]})]})}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:n,className:c?U.a["error-class"]:U.a.input}),Object(d.jsx)("button",{className:U.a.btn,onClick:a,children:"Add"}),Object(d.jsxs)("span",{className:U.a.usersnumber,children:["Users :",s]}),Object(d.jsx)("div",{children:i}),Object(d.jsx)("div",{children:o})]})},F=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),s=Object(j.a)(c,2),r=s[0],i=s[1],o=Object(a.useState)(""),l=Object(j.a)(o,2),u=l[0],b=l[1],x=t.length;return Object(d.jsx)(M,{users:t,name:r,setNameCallback:function(e){i(e.currentTarget.value)},addUser:function(){""!==r.trim()?(n(r),i(""),b(null)):b("Name is not defined")},error:u,totalUsers:x})},H=n(31);var W=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(F,{users:n,addUserCallback:function(e){var t={id:Object(H.a)(),name:e};c([].concat(Object(_.a)(n),[t]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},G=n(7),J=n(9),B=n(14),X=n.n(B),D=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,s=e.error,r=(e.className,e.spanClassName),i=Object(J.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(X.a.error," ").concat(r||""),j="".concat(X.a.input," ").concat(s?X.a.errorInput:X.a.superInput," ");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(G.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:j},i)),s&&Object(d.jsx)("span",{className:o,children:s})]})},z=n(16),K=n.n(z),L=n(17),V=n.n(L),Z=function(e){var t=e.red,n=e.className,a=Object(J.a)(e,["red","className"]),c="".concat(V.a.button," ").concat(t?V.a.red:V.a.default,"  ").concat(n);return Object(d.jsx)("button",Object(G.a)({className:c},a))},Q=n(19),Y=n.n(Q),q=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),s=Object(J.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),r="".concat(Y.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(G.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:r},s)),c&&Object(d.jsx)("span",{className:Y.a.spanClassName,children:c})]})};var R=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],s=n?"":"error",r=function(){s?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(j.a)(i,2),l=o[0],u=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:K.a.column,children:[Object(d.jsx)(D,{value:n,onChangeText:c,onEnter:r,error:s,spanClassName:K.a.testSpanError}),Object(d.jsx)(D,{className:K.a.blue}),Object(d.jsx)(Z,{children:"Apply"}),Object(d.jsx)(Z,{red:!0,onClick:r,children:"delete "}),Object(d.jsx)(Z,{disabled:!0,children:"disabled"}),Object(d.jsx)(q,{checked:l,onChangeChecked:u,children:"Checked "}),Object(d.jsx)(q,{checked:l,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},$=n(22),ee=n.n($),te=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,s=Object(J.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),r=Object(a.useState)(!1),i=Object(j.a)(r,2),o=i[0],l=i[1],u=c||{},b=u.children,x=u.onDoubleClick,O=u.className,m=Object(J.a)(u,["children","onDoubleClick","className"]),h="".concat(ee.a.span," ").concat(O);return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(D,Object(G.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},s)):Object(d.jsx)("span",Object(G.a)(Object(G.a)({onDoubleClick:function(e){l(!0),x&&x(e)},className:h},m),{},{children:b||s.value}))})};function ne(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ae(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}ne("test",{x:"A",y:1});ae("test",{x:"",y:0});var ce=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(j.a)(s,2),i=r[0],o=r[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("div",{children:Object(d.jsx)(te,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(d.jsx)(Z,{onClick:function(){o(n),ne("editable-span-value",n),ne("editable-span-previous",i)},children:"save"}),Object(d.jsx)(Z,{onClick:function(){var e=ae("editable-span-previous",n);c(e)},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var se=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(S,{}),Object(d.jsx)(T,{}),Object(d.jsx)(W,{}),Object(d.jsx)(R,{}),Object(d.jsx)(ce,{})]})};var re=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})};var ie=function(){return Object(d.jsx)("div",{})};var oe=function(){return Object(d.jsx)("div",{})},je=n(2),le="/pre-junior",ue="/junior",be="/juniorplus";var de=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(je.c,{children:[Object(d.jsx)(je.a,{path:"/",element:Object(d.jsx)(se,{})}),Object(d.jsx)(je.a,{path:le,element:Object(d.jsx)(se,{})}),Object(d.jsx)(je.a,{path:ue,element:Object(d.jsx)(ie,{})}),Object(d.jsx)(je.a,{path:be,element:Object(d.jsx)(oe,{})}),Object(d.jsx)(je.a,{element:Object(d.jsx)(re,{})})]})})};var xe=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(de,{})]})})};var Oe=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(xe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(Oe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.c61828b1.chunk.js.map