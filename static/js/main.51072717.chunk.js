(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),u=n(4),l=n.n(u),o=n(2),s=(n(9),n(0));function i(t){return t.toString().padStart(2,"0")}function a(){var t=Object(c.useState)(1500),e=Object(o.a)(t,2),n=e[0],r=e[1],u=Object(c.useState)("Let the countdown begin!!"),l=Object(o.a)(u,2),a=l[0],j=l[1],b=Object(c.useState)(!1),d=Object(o.a)(b,2),O=d[0],h=d[1],p=Object(c.useState)(!1),x=Object(o.a)(p,2),f=x[0],S=x[1],m=Object(c.useRef)(null),v=i(Math.floor(n/60)),g=i(n-60*v);function k(){h(!1),S(!1),j("Let the countdown begin!!"),clearInterval(m.current),m.current=null,r(1500)}return Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)("h2",{children:a}),Object(s.jsxs)("div",{className:"timer",children:[Object(s.jsx)("span",{children:v}),Object(s.jsx)("span",{children:":"}),Object(s.jsx)("span",{children:g})]}),Object(s.jsxs)("div",{className:"buttons",children:[O?null:Object(s.jsx)("button",{onClick:function(){h(!0),S(!0),null===m.current&&(j("You're doing great!"),m.current=setInterval((function(){r((function(t){return t>=1?t-1:(k(),0)}))}),1e3))},children:"Start"}),O?Object(s.jsx)("button",{onClick:function(){h(!1),S(!0),null!==m.current&&(clearInterval(m.current),j("keep it up!"),m.current=null)},children:"Stop"}):null,f?Object(s.jsx)("button",{onClick:k,children:"Reset"}):null]})]})}l.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(a,{})}),document.getElementById("root"))},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.51072717.chunk.js.map