(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[6],{615:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(156),r=a(1),c=a.n(r),o=a(614),i=c.a.memo((function(e){var t=e.name,a=e.text,r=Object(n.a)(e,["name","text"]),i=t?"https://coreui.io/react/docs/components/".concat(t):e.href;return c.a.createElement("div",{className:"card-header-actions"},c.a.createElement(o.db,Object.assign({},r,{href:i,rel:"noreferrer noopener",target:"_blank",className:"card-header-action"}),c.a.createElement("small",{className:"text-muted"},a||"docs")))}))},616:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(618);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(u){r=!0,c=u}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},617:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},618:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(617);function r(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},630:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(617);var r=a(618);function c(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},643:function(e,t,a){"use strict";a.r(t);var n=a(630),r=a(616),c=a(1),o=a.n(c),i=a(614),u=a(615);t.default=function(){var e=Object(c.useState)([{position:"static"},{position:"static"},{position:"top-right",autohide:3e3}]),t=Object(r.a)(e,2),a=t[0],l=t[1],s=Object(c.useState)("top-right"),m=Object(r.a)(s,2),f=m[0],b=m[1],d=Object(c.useState)(!0),h=Object(r.a)(d,2),p=h[0],y=h[1],E=Object(c.useState)(5e3),v=Object(r.a)(E,2),j=v[0],O=v[1],g=Object(c.useState)(!0),k=Object(r.a)(g,2),S=k[0],w=k[1],A=Object(c.useState)(!0),N=Object(r.a)(A,2),x=N[0],T=N[1],C=a.reduce((function(e,t){return e[t.position]=e[t.position]||[],e[t.position].push(t),e}),{});return o.a.createElement(i.j,null,o.a.createElement(i.n,null,"Toasts.",o.a.createElement(u.a,{name:"-Toast"})),o.a.createElement(i.k,null,o.a.createElement(i.w,null,o.a.createElement(i.wb,null,o.a.createElement(i.u,{sm:"12",lg:"6"},o.a.createElement(i.J,null,o.a.createElement("h5",null,"Add toast with following props:"),o.a.createElement(i.K,{variant:"custom-checkbox",className:"my-2 mt-4"},o.a.createElement(i.T,{id:"autohide",checked:p,onChange:function(e){y(e.target.checked)},custom:!0}),o.a.createElement(i.cb,{variant:"custom-checkbox",htmlFor:"autohide"},"Autohide of the toast")),p&&o.a.createElement(i.K,{className:"my-2"},o.a.createElement(i.cb,{htmlFor:"ccyear"},"Time to autohide"),o.a.createElement(i.S,{type:"number",value:j,onChange:function(e){O(Number(e.target.value))}})),o.a.createElement(i.K,{className:"my-2"},o.a.createElement(i.cb,{htmlFor:"ccyear"},"Position"),o.a.createElement("select",{className:"form-control",value:f,onChange:function(e){b(e.target.value)}},["static","top-left","top-center","top-right","top-full","bottom-left","bottom-center","bottom-right","bottom-full"].map((function(e,t){return o.a.createElement("option",{key:t},e)})))),o.a.createElement(i.K,{variant:"custom-checkbox",className:"my-2"},o.a.createElement(i.T,{id:"fade",checked:x,onChange:function(e){T(e.target.checked)},custom:!0}),o.a.createElement(i.cb,{variant:"custom-checkbox",htmlFor:"fade"},"fade")),o.a.createElement(i.K,{variant:"custom-checkbox",className:"my-2"},o.a.createElement(i.T,{id:"close",custom:!0,checked:S,onChange:function(e){w(e.target.checked)}}),o.a.createElement(i.cb,{variant:"custom-checkbox",htmlFor:"close"},"closeButton")),o.a.createElement(i.f,{className:"mr-1 w-25",color:"success",onClick:function(){l([].concat(Object(n.a)(a),[{position:f,autohide:p&&j,closeButton:S,fade:x}]))}},"Add toast"))),o.a.createElement(i.u,{sm:"12",lg:"6"},Object.keys(C).map((function(e){return o.a.createElement(i.Pb,{position:e,key:"toaster"+e},C[e].map((function(t,a){return o.a.createElement(i.Mb,{key:"toast"+a,show:!0,autohide:t.autohide,fade:t.fade},o.a.createElement(i.Ob,{closeButton:t.closeButton},"Toast title"),o.a.createElement(i.Nb,null,"This is a toast in ".concat(e," positioned toaster number ").concat(a+1,".")))})))})))))))}}}]);
//# sourceMappingURL=6.e97d7224.chunk.js.map