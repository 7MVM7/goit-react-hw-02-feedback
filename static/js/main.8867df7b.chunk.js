(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{18:function(t,n,e){},19:function(t,n,e){},24:function(t,n,e){"use strict";e.r(n);var a,o,r,c,i=e(1),s=e.n(i),l=e(7),d=e.n(l),b=(e(18),e(4)),j=e(6),u=e(8),p=e(9),x=e(12),h=e(11),f=(e(19),e(2)),g=e(3),O=g.a.section(a||(a=Object(f.a)(["\n\n\n padding: 20px;\n \n  .title {\n    \n  font-size: 24px;\n  line-height: 1.14;\n  margin-bottom: 20px;\n}\n"]))),m=e(0),v=function(t){var n=t.title,e=t.children;return Object(m.jsxs)(O,{children:[Object(m.jsx)("h2",{className:"title",children:n}),e]})},k=g.a.p(o||(o=Object(f.a)(["\ntext-align: center;\nbackground-color: ;\nfont-size: 30px;\ncolor: red;\nfont-family: sans-serif\t;\nfont-family:fantasy;\ntext-shadow: 1px 1px 1px black,\n             2px 2px 1px black;\n"]))),y=function(t){var n=t.notice;return Object(m.jsx)(k,{children:n})},w=g.a.button(r||(r=Object(f.a)(["\n\n width:100%; \n\n  text-align: center;\n  color: dimgrey;\n  padding: 10px 20px;\n  background-color: snow;\n  border: 2px solid aqua;\n  border-radius: 5px;\n  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.6);\n  &:not(:last-child) {\n    margin-right: 10px;\n  }\n  &:hover {\n    background-color: #69ffd2;\n   \n"]))),A=function(t){var n=t.onLeaveFeedback,e=t.btnNames;t.reset;return Object(m.jsx)(m.Fragment,{children:e.map((function(t){return Object(m.jsx)(w,{type:"button",name:t,onClick:n,children:t},t)}))})},N=g.a.div(c||(c=Object(f.a)(['\n\n    span{\n        font-family: "Roboto", "sans-serif";\n  font-size: 18px;\n  line-height: 1.14;\n  color: dimgrey;\n  margin-bottom: 10px;\n\n    }\n']))),C=function(t){var n=t.good,e=t.neutral,a=t.bad,o=t.total,r=t.positive;return Object(m.jsxs)(N,{children:[Object(m.jsxs)("span",{children:["Good: ",n," "]}),Object(m.jsxs)("span",{children:["Neutral: ",e," "]}),Object(m.jsxs)("span",{children:["Bad: ",a," "]}),Object(m.jsxs)("span",{children:["Total: ",o," "]}),Object(m.jsxs)("span",{children:["Positive: ",r," %"]})]})},F={good:0,neutral:0,bad:0},P=function(t){Object(x.a)(e,t);var n=Object(h.a)(e);function e(){var t;Object(u.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=n.call.apply(n,[this].concat(o))).state=F,t.onHandleClick=function(n){var e=n.target.name;t.setState((function(n){return Object(j.a)(Object(j.a)({},n),{},Object(b.a)({},e,t.state[e]+1))}))},t.totalAmount=function(){var n=t.state;return n.good+n.neutral+n.bad},t.positivePercentage=function(){var n=t.state.good;return Math.round(n/t.totalAmount()*100)},t}return Object(p.a)(e,[{key:"render",value:function(){var t=Object.keys(this.state),n=this.state,e=n.good,a=n.neutral,o=n.bad;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v,{title:"Please leave feedback",children:Object(m.jsx)(A,{onLeaveFeedback:this.onHandleClick,btnNames:t})}),Object(m.jsx)(v,{title:"Statistics",children:this.totalAmount()?Object(m.jsx)(C,{good:e,neutral:a,bad:o,total:this.totalAmount(),positive:this.positivePercentage()}):Object(m.jsx)(y,{notice:"No feedback given"})})]})}}]),e}(i.Component);d.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.8867df7b.chunk.js.map