(this["webpackJsonponline-diary"]=this["webpackJsonponline-diary"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(32),i=n.n(r),o=(n(39),n(5)),l=n(2),j=(n(40),function(){return Object(c.jsxs)("header",{className:"title",children:[Object(c.jsx)("h1",{className:"title-name",to:"/",children:"Online Diary"}),Object(c.jsxs)("div",{className:"options",children:[Object(c.jsx)(o.c,{className:"option-name",exact:!0,to:"/",children:"Home"}),Object(c.jsx)(o.c,{className:"option-name",exact:!0,to:"/users/add",children:"Add"}),Object(c.jsx)(o.c,{className:"option-name",exact:!0,to:"/users/search",children:"Search"})]})]})}),u=n(3),d=n.n(u),b=n(8),h=n(6),O=n(9),x=n.n(O),f=(n(30),function(e){var t=e.date,n=e.title,a=e.content,s=e.id,r=e.loadNotes,i=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.delete("http://localhost:3003/notes/".concat(s));case 2:r();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"note",children:Object(c.jsx)("table",{className:"table  table-striped table-hover table-bordered",children:Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"date-row",children:t}),Object(c.jsx)("td",{className:"title-row",children:Object(c.jsx)("h1",{children:Object(c.jsx)(o.b,{id:"title-link",to:"/user/view/".concat(s),children:n})})}),Object(c.jsx)("td",{className:"td-content",children:a.length<50?Object(c.jsx)("p",{children:a}):Object(c.jsxs)("p",{children:[a.substring(0,75),"...",Object(c.jsx)(o.b,{to:"/user/view/".concat(s),children:"Read More"})," "]})}),Object(c.jsx)("td",{className:"btn-row",children:Object(c.jsx)(o.b,{to:"/users/edit/".concat(s),children:Object(c.jsx)("button",{className:"btn",children:"Edit"})})}),Object(c.jsx)("td",{className:"btn-row",children:Object(c.jsx)("button",{className:"btn",onClick:i,children:"delete"})})]})})})})}),m=(n(31),function(){var e=Array.from({length:12},(function(e,t){return new Date(null,t+1,null).toLocaleString("en",{month:"short"})})),t=Object(a.useState)([]),n=Object(h.a)(t,2),s=n[0],r=n[1],i=Object(a.useState)("All"),o=Object(h.a)(i,2),l=o[0],j=o[1],u=Object(a.useState)("Jan"),O=Object(h.a)(u,2),m=O[0],p=O[1],v=Object(a.useState)(s),N=Object(h.a)(v,2),g=N[0],w=N[1];Object(a.useEffect)((function(){y()}),[]);var y=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("http://localhost:3003/notes");case 2:t=e.sent,r(t.data.reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){w(s.filter((function(t){var n=new Date(t.date).getMonth();return e[n]===m===!0?t:""}))),function(){switch(l){case"All":r(s);break;case"latest":case"oldest":r(s.reverse());break;default:r(s.reverse())}}()}),[l,m]),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{children:Object(c.jsxs)("select",{className:"inputText",onChange:function(e){j(e.target.value)},children:[Object(c.jsx)("option",{value:"All",defaultValue:!0,children:"All"}),Object(c.jsx)("option",{value:"latest",children:"Latest"}),Object(c.jsx)("option",{value:"oldest",children:"Oldest"})]})}),Object(c.jsx)("div",{children:Object(c.jsx)("select",{className:"inputText",onChange:function(e){p(e.target.value)},defaultValue:!0,children:e.map((function(e,t){return Object(c.jsx)("option",{value:e,children:e},t+1)}))})}),"All"===l?s.map((function(e,t){return Object(c.jsx)(f,{id:e.id,date:e.date,title:e.title,content:e.content,loadNotes:y},t)})):g.map((function(e,t){return Object(c.jsx)(f,{id:e.id,date:e.date,title:e.title,content:e.content,loadNotes:y},t)}))]})}),p=n(14),v=n(15),N=function(){var e=Object(l.f)(),t=Object(l.g)().id,n=Object(a.useState)({date:"",title:"",content:""}),s=Object(h.a)(n,2),r=s[0],i=s[1],j=r.date,u=r.title,O=r.content,f=function(e){var t=e.target,n=t.name,c=t.value;i((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(p.a)({},n,c))}))},m=function(){var n=Object(b.a)(d.a.mark((function n(c){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),n.next=3,x.a.put("http://localhost:3003/notes/".concat(t),r);case 3:e.push("/");case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("http://localhost:3003/notes/".concat(t));case 2:n=e.sent,i(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(c.jsxs)("div",{className:"main-body",children:[Object(c.jsx)("label",{children:"Edit Notes"}),Object(c.jsxs)("form",{className:"form-container",children:[Object(c.jsx)("input",{name:"date",value:j,className:"inputText",type:"date",onChange:f}),Object(c.jsx)("input",{name:"title",value:u,className:"inputText",type:"text",placeholder:"Title of Topic",onChange:f}),Object(c.jsx)("textarea",{name:"content",value:O,className:"inputTextArea",placeholder:"Start",onChange:f}),Object(c.jsx)("button",{className:"submit-btn",onClick:m,children:"Edit"}),Object(c.jsx)(o.b,{to:"/",children:Object(c.jsx)("button",{className:"submit-btn",children:"Cancel"})})]})]})},g=(n(64),function(){var e=Object(l.f)(),t=Object(a.useState)({id:"",date:"",title:"",content:""}),n=Object(h.a)(t,2),s=n[0],r=n[1],i=s.date,j=s.title,u=s.content,O=function(e){var t=e.target,n=t.name,c=t.value;r((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(p.a)({},n,c))}))},f=function(){var t=Object(b.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,x.a.post("http://localhost:3003/notes",s);case 3:e.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"main-body",children:Object(c.jsxs)("form",{className:"row g-3 needs-validation form-container",onSubmit:f,children:[Object(c.jsxs)("div",{className:"col-md-4",children:[Object(c.jsx)("label",{for:"validationCustom01",className:"form-label label-text",children:"Set Date*"}),Object(c.jsx)("input",{type:"date",className:"inputText",id:"validationCustom01",name:"date",value:i,onChange:O,required:!0}),Object(c.jsx)("div",{className:"valid-feedback",children:"Looks good!"})]}),Object(c.jsxs)("div",{className:"col-md-4",children:[Object(c.jsx)("label",{for:"validationCustom02",className:"form-label label-text",children:"Title*"}),Object(c.jsx)("input",{type:"text",className:"inputText",id:"validationCustom02",name:"title",value:j,onChange:O,required:!0}),Object(c.jsx)("div",{className:"valid-feedback",children:"Looks good!"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{for:"validationCustom02",className:"form-label label-text",children:"Content*"}),Object(c.jsx)("textarea",{type:"textArea",className:"inputTextArea ",id:"validationCustom02",name:"content",value:u,onChange:O,required:!0}),Object(c.jsx)("div",{className:"valid-feedback",children:"Looks good!"})]}),Object(c.jsxs)("div",{className:"col-12",children:[Object(c.jsx)("button",{className:"submit-btn btn btn-primary",type:"submit",children:"Add"}),Object(c.jsx)(o.b,{to:"/",children:Object(c.jsx)("button",{className:"btn btn-primary submit-btn",children:"Cancel"})})]})]})})}),w=(n(65),n(66),function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(""),i=Object(h.a)(r,2),o=i[0],l=i[1],j=Object(a.useState)(n),u=Object(h.a)(j,2),O=u[0],m=u[1];Object(a.useEffect)((function(){m(n)}),[]),Object(a.useEffect)((function(){var e=n.filter((function(e){return e.title.toLowerCase().includes(o)}));m(e)}),[o]);Object(a.useEffect)((function(){p()}),[]);var p=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("http://localhost:3003/notes");case 2:t=e.sent,s(t.data.reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{id:"search-container",children:[Object(c.jsx)("label",{className:"label-text ",children:"Enter Title"}),Object(c.jsx)("input",{className:"form-control inputText md-3",autoComplete:"off",name:"search",type:"text",value:o,placeholder:"Title",onChange:function(e){l(e.target.value)}}),Object(c.jsx)("div",{children:""===o?n.map((function(e,t){return Object(c.jsx)(f,{id:e.id,date:e.date,title:e.title,content:e.content,loadNotes:p},t)})):O.map((function(e,t){return Object(c.jsx)(f,{id:e.id,date:e.date,title:e.title,content:e.content,loadNotes:p},t)}))})]})})}),y=function(){var e=Object(a.useState)({}),t=Object(h.a)(e,2),n=t[0],s=t[1],r=Object(l.g)().id;Object(a.useEffect)((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("http://localhost:3003/notes/".concat(r));case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]);var i=n.date,j=n.title,u=n.content;return Object(c.jsx)("div",{className:"view-note",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:j}),Object(c.jsx)("hr",{}),Object(c.jsx)("h3",{children:i}),Object(c.jsx)("hr",{}),Object(c.jsx)("p",{children:u}),Object(c.jsx)(o.b,{className:"back-button",to:"/",children:Object(c.jsx)("h3",{children:"Back"})})]})})},k=function(){return Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)(j,{}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{path:"/",exact:!0,component:m}),Object(c.jsx)(l.a,{path:"/users/add",exact:!0,component:g}),Object(c.jsx)(l.a,{path:"/users/edit/:id",exact:!0,component:N}),Object(c.jsx)(l.a,{path:"/user/view/:id",exact:!0,component:y}),Object(c.jsx)(l.a,{path:"/users/search",exact:!0,component:w})]})]})})})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.474e596d.chunk.js.map