(this.webpackJsonpTODO=this.webpackJsonpTODO||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},2:function(e,t,n){e.exports={container:"Input_container__16MGs",containerDone:"Input_containerDone__ptbnH",priority:"Input_priority__3XPSI",size:"Input_size__1KUOw",animation:"Input_animation__gEHp0",showUp:"Input_showUp__2aQkc",eLetter:"Input_eLetter__2s-W2",bop:"Input_bop__3ObuR",restLetter:"Input_restLetter__oBi2Q",bopB:"Input_bopB__21KGD"}},22:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(10),i=n.n(s),r=(n(16),n(5)),l=n(3),d=n(7),j=n(2),o=n.n(j),b=(n(17),n(0)),h=function(){return Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("nav",{children:Object(b.jsx)("div",{className:"nav-wrapper grey darken-3",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row navRow",children:Object(b.jsx)("div",{className:"col s1",children:Object(b.jsx)("a",{href:"/",className:"brand-logo",children:"E-TASK"})})})})})})})};function O(e){var t,n=e.addTask,c=Object(a.useState)(""),s=Object(l.a)(c,2),i=s[0],r=s[1],j=Object(a.useState)(""),O=Object(l.a)(j,2),u=O[0],x=O[1],p=Object(a.useState)(!1),v=Object(l.a)(p,2),f=v[0],m=v[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{}),Object(b.jsxs)("h1",{class:o.a.size,children:[Object(b.jsx)("span",{className:o.a.eLetter,children:"E-"}),Object(b.jsx)("span",{className:o.a.restLetter,children:"TASK"})]}),Object(b.jsx)("h2",{children:"nowa_zmiana"}),Object(b.jsx)("h5",{className:"brown-text size",children:"Prosz\u0119, Dodaj zadanie do zrobienia"}),Object(b.jsxs)("div",{className:o.a.container,children:[Object(b.jsx)("div",{class:"row",children:Object(b.jsxs)("div",{class:"input-field col s12",children:[Object(b.jsx)("i",{class:"material-icons prefix",children:"mode_edit"}),Object(b.jsx)("textarea",(t={type:"text",id:"task",class:"autocomplete materialize-textarea"},Object(d.a)(t,"type","text"),Object(d.a)(t,"value",i),Object(d.a)(t,"onChange",(function(e){return r(e.target.value)})),t)),Object(b.jsx)("label",{for:"task",children:"ZADANIE"})]})}),Object(b.jsx)("div",{class:"row",children:Object(b.jsxs)("div",{class:"input-field col s12",children:[Object(b.jsx)("i",{class:"material-icons prefix",children:"date_range"}),Object(b.jsx)("input",{type:"date",id:"date1",className:"datepicker",value:u,format:"dd-MM-yyyy",min:(new Date).toISOString().slice(0,10),onChange:function(e){return x(e.target.value)}}),Object(b.jsx)("label",{for:"date1",children:"TERMIN WYKONANIA:"})]})}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"checkbox",value:f,checked:f,onChange:function(e){return m(e.target.checked)}}),Object(b.jsx)("span",{className:o.a.priority,children:"Piorytet"})]}),Object(b.jsxs)("button",{className:"btn waves-effect waves-light brown darken-1",type:"submit",onClick:function(){n(i,f,u),r(""),x(""),m(!1)},children:[Object(b.jsx)("i",{className:"material-icons right",children:"send"})," dodaj"]})]})]})}n(19);function u(e){var t=e.list,n=e.doneHandler,c=e.setList,s=Object(a.useState)([]),i=Object(l.a)(s,2),d=i[0],j=i[1],h=t.map((function(e){var t=e.id,a=e.priority,c=e.task,s=e.date;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{style:{color:a?"red":"black"},children:[" ",c," |Termin: ",s," |"," "]},t),Object(b.jsx)("a",{class:"btn-floating  deep-orange pulse btn-small",onClick:function(){return function(e,t){var a=(new Date).toLocaleString()+"",c=[].concat(Object(r.a)(d),["Zadanie: "+t+" | Wykonane: "+a]);j(c),n(e)}(t,c)},children:Object(b.jsx)("i",{class:"material-icons",children:"done"})})," ",Object(b.jsx)("a",{class:"btn-floating brown pulse btn-small",onClick:function(){return n(t)},children:Object(b.jsx)("i",{class:"material-icons",children:"delete"})})]})})),O=d.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsxs)("span",{children:[" ",e," "]})})}));return t.length?Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Lista zada\u0144 do zrobienia:"}),Object(b.jsx)("div",{class:o.a.container,children:Object(b.jsxs)("h5",{children:[Object(b.jsx)("a",{class:"btn-floating btn-small waves-effect waves-light red",onClick:function(){c([])},children:Object(b.jsx)("i",{class:"material-icons",children:"delete_sweep"})}),h]})}),Object(b.jsx)("h4",{children:"Zadania zrobione:"}),Object(b.jsxs)("div",{class:o.a.containerDone,children:[Object(b.jsxs)("h5",{children:["(",d.length,")"]}),Object(b.jsx)("div",{children:O})]})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Zadania do zrobienia:"}),Object(b.jsx)("div",{class:o.a.container,children:Object(b.jsx)("h5",{children:"Brak zada\u0144 do wy\u015bwietlenia! Jeste\u015b na bie\u017c\u0105co"})}),Object(b.jsx)("h4",{children:"Zadania zrobione:"}),Object(b.jsxs)("div",{class:o.a.containerDone,children:[Object(b.jsxs)("h5",{children:["(",d.length,")"]}),Object(b.jsx)("div",{children:O})]})]})}var x=n(11),p=n.n(x),v=n(9),f=n.n(v);var m=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(O,{addTask:function(e,t,a){var s={id:p()(),task:e,priority:t,date:a};if(e.length>0&&a.length>0){var i=[].concat(Object(r.a)(n),[s]);i.sort((function(e,t){return e.date<t.date?-1:e.date>t.date?1:0})),c(i)}else 0==e.length?f.a.toast({html:"Nie mo\u017cna wpisa\u0107 pustego zadania",classes:"rounded"}):f.a.toast({html:"Nie mo\u017cna doda\u0107 zadania bez podania daty",classes:"rounded"})}}),Object(b.jsx)(u,{list:n,doneHandler:function(e){var t=Object(r.a)(n).filter((function(t){return t.id!==e}));c(t)},setList:c})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),_()}},[[22,1,2]]]);
//# sourceMappingURL=main.5c85f9f8.chunk.js.map