(this["webpackJsonplista-repositorios"]=this["webpackJsonplista-repositorios"]||[]).push([[0],{42:function(n,e,t){n.exports=t(69)},69:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(26),i=t.n(o),c=t(36),u=t(4),l=t(11),s=t.n(l),p=t(37),d=t(27),f=t(28),b=t(29),m=t(38),g=t(30),h=t(39),x=t(9),v=t(31),y=t.n(v).a.create({baseURL:"https://api.github.com"}),E=t(5),j=t(6);function w(){var n=Object(E.a)(["\n      svg {\n        animation: "," 2s linear infinite;\n      }\n    "]);return w=function(){return n},n}function O(){var n=Object(E.a)(["\n  background: #7159c1;\n  border: 0;\n  padding: 0 15px;\n  margin-left: 10px;\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.6;\n  }\n  ","\n"]);return O=function(){return n},n}function k(){var n=Object(E.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return k=function(){return n},n}function R(){var n=Object(E.a)(["\n  margin-top: 30px;\n  display: flex;\n  flex-direction: row;\n\n  input {\n    flex: 1;\n    border: 1px solid #eee;\n    padding: 10px 15px;\n    border-radius: 4px;\n    font-size: 16px;\n  }\n"]);return R=function(){return n},n}function F(){var n=Object(E.a)(["\n  max-width: 700px;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n  padding: 30px;\n  margin: 80px auto;\n  h1 {\n    font-size: 20px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n  }\n"]);return F=function(){return n},n}var z=j.c.div(F()),S=j.c.form(R()),C=Object(j.d)(k()),A=j.c.button.attrs((function(n){return{type:"submit",disabled:n.loading}}))(O(),(function(n){return n.loading&&Object(j.b)(w(),C)})),I=function(n){function e(){var n,t;Object(f.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(m.a)(this,(n=Object(g.a)(e)).call.apply(n,[this].concat(a)))).state={newRepo:"",repositories:[],loading:!1},t.handleInputChange=function(n){t.setState({newRepo:n.target.value})},t.handleSubmit=function(){var n=Object(d.a)(s.a.mark((function n(e){var r,a,o,i,c;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),t.setState({loading:!0}),r=t.state,a=r.newRepo,o=r.repositories,n.next=5,y.get("/repos/".concat(a));case 5:i=n.sent,c={name:i.data.full_name},t.setState({repositories:[].concat(Object(p.a)(o),[c]),newRepo:""});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),t}return Object(h.a)(e,n),Object(b.a)(e,[{key:"render",value:function(){var n=this.state,e=n.newRepo,t=n.loading;return a.a.createElement(z,null,a.a.createElement("h1",null,a.a.createElement(x.a,null),"Reposit\xf3rios"),a.a.createElement(S,{onSubmit:this.handleSubmit},a.a.createElement("input",{type:"text",placeholder:"Adicionar reposit\xf3rio",value:e,onChange:this.handleInputChange}),a.a.createElement(A,{loading:t},t?a.a.createElement(x.c,{color:"#FFF",size:14}):a.a.createElement(x.b,{color:"#FFF",size:14}))))}}]),e}(r.Component);function J(){return a.a.createElement("h1",null,"Repository")}function B(){return a.a.createElement(c.a,null,a.a.createElement(u.c,null,a.a.createElement(u.a,{path:"/",exact:!0,component:I}),a.a.createElement(u.a,{path:"/repository",component:J})))}function D(){var n=Object(E.a)(["\n*{\n  margin:0;\n  padding:0;\n  outline:0;\n  box-sizing:border-box;\n}\nhtml,body,#root{\nmin-height:100%;\n}\n\nbody{\n  background:#7159c1;\n  -webkit-font-smoothing:antialiased !important;\n}\n\nbody, input, button {\ncolor:#222;\nfont-size:14px;\nfont-family:Arial, Helvetica, sans-serif;\n}\n\nbutton{\n  cursor: pointer;\n}\n\n"]);return D=function(){return n},n}var H=Object(j.a)(D());var L=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(B,null),a.a.createElement(H,null))};i.a.render(a.a.createElement(L,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.d4d62449.chunk.js.map