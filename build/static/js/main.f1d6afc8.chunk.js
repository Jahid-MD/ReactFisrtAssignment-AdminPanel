(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,s){},27:function(e,t,s){},47:function(e,t,s){},49:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s.n(c),i=s(16),r=s.n(i),a=(s(26),s(27),s(3)),l=s.n(a),d=s(7),o=s(17),j=s(18),h=s(21),u=s(20),b=s(19),m=s.n(b),x=(s(47),s(0)),O=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;return Object(o.a)(this,s),console.log("constructor()"),(e=t.call(this)).myFunc=Object(d.a)(l.a.mark((function t(){var s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'");case 2:s=t.sent,e.setState({users:s.data}),e.setState({filteredUser:e.state.users});case 5:case"end":return t.stop()}}),t)}))),e.handlefilter=function(t){var s=e.state.users.filter((function(e){return e.firstName.toLowerCase().includes(t.target.value.toLowerCase())||e.lastName.toLowerCase().includes(t.target.value.toLowerCase())||e.email.toLowerCase().includes(t.target.value.toLowerCase())}));e.setState({filteredUser:s})},e.handleClick=function(t){var s=document.getElementsByClassName("data-row");console.log(s.length);for(var c=0;c<s.length;c++)s[c].className="data-row";document.getElementById(t.id+t.firstName).className="data-row active";var n=Object(x.jsx)("div",{children:Object(x.jsxs)("div",{id:"info-content",style:{display:"block"},children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"User selected:"})," ",t.firstName," ",t.lastName]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Description: "}),Object(x.jsx)("textarea",{cols:"50",rows:"5",readonly:!0,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quia nihil. Est, illum minima libero rerum, nihil distinctio placeat sint nam quae repellendus obcaecati delectus totam non odio. Sint, reprehenderit?"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Address:"})," ",t.address.streetAddress]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"City:"})," ",t.address.city]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"State:"})," ",t.address.state]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Zip:"})," ",t.address.zip]})]})});e.setState({activeUser:n}),console.log(n)},e.state={num:0,statement:"",users:[],filteredUser:[],activeUser:""},e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.myFunc();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return console.log(this.state.users),Object(x.jsx)("div",{children:Object(x.jsxs)("main",{children:[Object(x.jsxs)("div",{id:"table-section",children:[Object(x.jsxs)("form",{action:"/",children:[Object(x.jsx)("img",{src:"./img/search-icon.svg",alt:"Search Icon"}),Object(x.jsx)("input",{onChange:this.handlefilter,type:"text",placeholder:"Enter something",name:"search-box",id:"search-box"})]}),Object(x.jsxs)("div",{id:"table-wrapper",children:[Object(x.jsx)("div",{id:"table-headers",children:Object(x.jsx)("table",{children:Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{class:"column1",children:"Id"}),Object(x.jsx)("th",{class:"column2",children:"FirstName"}),Object(x.jsx)("th",{class:"column3",children:"LastName"}),Object(x.jsx)("th",{class:"column4",children:"Email"}),Object(x.jsx)("th",{class:"column5",children:"Phone"})]})})})}),Object(x.jsx)("div",{id:"table-data",children:Object(x.jsx)("table",{children:Object(x.jsx)("tbody",{children:this.state.filteredUser.map((function(t){return Object(x.jsxs)("tr",{onClick:function(){return e.handleClick(t)},id:t.id+t.firstName,class:"data-row",children:[Object(x.jsx)("td",{class:"column1",children:t.id}),Object(x.jsx)("td",{class:"column2",children:t.firstName}),Object(x.jsx)("td",{class:"column3",children:t.lastName}),Object(x.jsx)("td",{class:"column4",children:t.email}),Object(x.jsx)("td",{class:"column5",children:t.phone})]},t.id+t.firstName)}))})})})]})]}),Object(x.jsxs)("div",{id:"info-wrapper",children:[Object(x.jsx)("h1",{children:"Details"}),Object(x.jsx)("p",{children:"Click on a table item to get detailed information"}),this.state.activeUser]})]})})}}]),s}(c.Component),f=O;var p=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(f,{},1)})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,50)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),c(e),n(e),i(e),r(e)}))};r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(p,{})}),document.getElementById("root")),v()}},[[49,1,2]]]);
//# sourceMappingURL=main.f1d6afc8.chunk.js.map