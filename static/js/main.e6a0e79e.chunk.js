(this["webpackJsonpweird-calculator"]=this["webpackJsonpweird-calculator"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var c=t(2),n=t.n(c),s=t(8),i=t.n(s),l=(t(13),t(14),t(7)),r=t(1),u=t(3),o=t(0),d=function(){var e=Object(c.useState)({id:1,value:"",checked:!1}),a=Object(u.a)(e,2),t=a[0],n=a[1],s=Object(c.useState)({id:2,value:"",checked:!1}),i=Object(u.a)(s,2),d=i[0],j=i[1],b=Object(c.useState)({id:3,value:"",checked:!1}),m=Object(u.a)(b,2),h=m[0],p=m[1],O=Object(c.useState)(null),v=Object(u.a)(O,2),x=v[0],f=v[1],_=Object(c.useState)(!1),N=Object(u.a)(_,2),g=N[0],k=N[1],y=Object(c.useState)(""),S=Object(u.a)(y,2),I=S[0],C=S[1],F=function(){var e=document.querySelector("#first-input"),a=document.querySelector("#second-input"),t=document.querySelector("#last-input");n((function(a){return Object(r.a)(Object(r.a)({},a),{},{value:""===e.value?"":parseInt(e.value)})})),j((function(e){return Object(r.a)(Object(r.a)({},e),{},{value:""===a.value?"":parseInt(a.value)})})),p((function(e){return Object(r.a)(Object(r.a)({},e),{},{value:""===t.value?"":parseInt(t.value)})}))},q=function(){var e=document.querySelector("#first-checkbox").checked,a=document.querySelector("#second-checkbox").checked,t=document.querySelector("#last-checkbox").checked;n((function(a){return Object(r.a)(Object(r.a)({},a),{},{checked:e})})),j((function(e){return Object(r.a)(Object(r.a)({},e),{},{checked:a})})),p((function(e){return Object(r.a)(Object(r.a)({},e),{},{checked:t})}))},L=function(e){C(e.target.value)};return Object(c.useEffect)((function(){!function(){var e=null,a=[],c=[],n=0;if(a=[].concat(Object(l.a)(a),[""===t.value?0:t.value,""===d.value?0:d.value,""===h.value?0:h.value]),(c=[].concat(Object(l.a)(c),[t,d,h])).forEach((function(e){!0===e.checked&&(n+=1)})),""!==I){if(n>1||0===n){for(var s=0;s<c.length;s++)!0===c[s].checked&&(null===e?e=a[s]:"plus"===I?e+=a[s]:"minus"===I?e-=a[s]:"times"===I?e*=a[s]:"divide"===I&&(e/=a[s]));k(!1)}else k(!0);f(e)}}()}),[t,d,h,I]),Object(o.jsxs)("div",{className:"page-container",children:[Object(o.jsxs)("div",{className:"input-group-container",children:[Object(o.jsxs)("div",{className:"input-group animate__animated animate__fadeInLeft",children:[Object(o.jsx)("input",{type:"number",value:t.value,onChange:F,id:"first-input",className:"input-number",placeholder:"First number..."}),Object(o.jsxs)("label",{htmlFor:"first-checkbox",className:"label-group",children:[Object(o.jsx)("input",{type:"checkbox",onChange:q,id:"first-checkbox",className:"checkbox"}),Object(o.jsx)("i",{className:"fas fa-toggle-on"})]})]}),Object(o.jsxs)("div",{className:"input-group animate__animated animate__fadeInLeft animate__fast",children:[Object(o.jsx)("input",{type:"number",value:d.value,onChange:F,id:"second-input",className:"input-number",placeholder:"Second number..."}),Object(o.jsxs)("label",{htmlFor:"second-checkbox",className:"label-group",children:[Object(o.jsx)("input",{type:"checkbox",onChange:q,id:"second-checkbox",className:"checkbox"}),Object(o.jsx)("i",{className:"fas fa-toggle-on"})]})]}),Object(o.jsxs)("div",{className:"input-group animate__animated animate__fadeInLeft animate__faster",children:[Object(o.jsx)("input",{type:"number",value:h.value,onChange:F,id:"last-input",className:"input-number",placeholder:"Last number..."}),Object(o.jsxs)("label",{htmlFor:"last-checkbox",className:"label-group",children:[Object(o.jsx)("input",{type:"checkbox",onChange:q,id:"last-checkbox",className:"checkbox"}),Object(o.jsx)("i",{className:"fas fa-toggle-on"})]})]})]}),Object(o.jsxs)("div",{className:"radio-group-container",children:[Object(o.jsx)("div",{className:"radio-group animate__animated animate__bounceIn animate__delay-1s",children:Object(o.jsxs)("div",{className:"radio-card",children:[Object(o.jsx)("input",{type:"radio",value:"plus",name:"operator",id:"plus",onChange:L,className:"radio-button"}),Object(o.jsx)("label",{htmlFor:"plus",className:"operator-value",title:"Plus",children:Object(o.jsx)("i",{className:"fas fa-plus"})})]})}),Object(o.jsx)("div",{className:"radio-group animate__animated animate__bounceIn animate__delay-1s",children:Object(o.jsxs)("div",{className:"radio-card",children:[Object(o.jsx)("input",{type:"radio",value:"minus",name:"operator",id:"minus",onChange:L,className:"radio-button"}),Object(o.jsx)("label",{htmlFor:"minus",className:"operator-value",title:"Minus",children:Object(o.jsx)("i",{className:"fas fa-minus"})})]})}),Object(o.jsx)("div",{className:"radio-group animate__animated animate__bounceIn animate__delay-1s",children:Object(o.jsxs)("div",{className:"radio-card",children:[Object(o.jsx)("input",{type:"radio",value:"times",name:"operator",id:"times",onChange:L,className:"radio-button"}),Object(o.jsx)("label",{htmlFor:"times",className:"operator-value",title:"Times",children:Object(o.jsx)("i",{className:"fas fa-times"})})]})}),Object(o.jsx)("div",{className:"radio-group animate__animated animate__bounceIn animate__delay-1s",children:Object(o.jsxs)("div",{className:"radio-card",children:[Object(o.jsx)("input",{type:"radio",value:"divide",name:"operator",id:"divide",onChange:L,className:"radio-button"}),Object(o.jsx)("label",{htmlFor:"divide",className:"operator-value",title:"Divide",children:Object(o.jsx)("i",{className:"fas fa-divide"})})]})})]}),Object(o.jsxs)("div",{className:"result-container",children:[Object(o.jsx)("div",{className:"line-break animate__animated animate__fadeInUp animate__delay-2s animate__faster"}),Object(o.jsxs)("div",{className:"result-value animate__animated animate__fadeInUp animate__delay-2s animate__fast",children:[Object(o.jsx)("span",{children:"Result:"}),Object(o.jsxs)("span",{children:[Object(o.jsx)("span",{className:"valid-value",children:x})," ",g?Object(o.jsx)("span",{className:"error-value",children:"Error!"}):Object(o.jsx)(o.Fragment,{})]})]})]})]})},j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,s=a.getLCP,i=a.getTTFB;t(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.e6a0e79e.chunk.js.map