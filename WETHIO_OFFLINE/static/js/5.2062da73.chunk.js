(this.webpackJsonpwethio_wallet_v2=this.webpackJsonpwethio_wallet_v2||[]).push([[5],{865:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(358),s=a(2),l=function(){return Object(s.jsx)("div",{className:"h-full boxshadow bg-gradient-to-tl from-themeg1 to theme-g2 xl:p-6 lg:p-4 p-2 rounded-xl overflow-hidden flex flex-col gap-16 border border-themeg2 text-themeblue",children:Object(s.jsx)(r.a,{})})},c=a(9),d=a(236),i=a(30),o=a(5),u=a(21),b=a(27),m=a(373),j=function(){var e=Object(n.useState)("Mainnet"),t=Object(c.a)(e,2),a=t[0],r=t[1],l=Object(m.a)().t,j=Object(i.b)(),x=Object(i.c)((function(e){return e.dapp})).chainId,h=function(e){var t;j(Object(u.b)(null===(t=o.m[e])||void 0===t?void 0:t.networkId))};return Object(n.useEffect)((function(){Object(b.d)(o.j[x]),r(o.a[x])}),[x]),Object(n.useEffect)((function(){var e=JSON.parse(sessionStorage.getItem("global"));"WETHIOCHAIN_MAINNET"===e.network&&r("Mainnet"),"WETHIOCHAIN_TESTNET"===e.network&&r("Testnet")}),[]),Object(s.jsxs)("div",{className:"relative group",children:[Object(s.jsxs)("label",{className:"cursor-pointer flex items-center gap-1",children:[Object(s.jsx)("span",{className:"p-1.5 rounded-full bg-themegreen animate-blink"}),Object(s.jsxs)("span",{className:"flex gap-1 items-center",children:[l(a)," ",Object(s.jsx)(d.a,{})]})]}),Object(s.jsxs)("div",{className:" rounded-xl border border-themeg2 flex-col gap-2 bg-themeg1 p-2 group-hover:visible invisible z-40\n          }",children:[Object(s.jsxs)("button",{className:"py-2 px-1 cursor-pointer flex gap-2 items-center",onClick:function(){h("WETHIOCHAIN_MAINNET")},children:["Mainnet"===a?Object(s.jsx)("span",{className:"p-1.5 rounded-full bg-themegreen"}):Object(s.jsx)("span",{className:"p-1.5 rounded-full bg-gray-400"}),l("Mainnet")]}),Object(s.jsxs)("button",{className:"py-2 px-1 cursor-pointer flex gap-2 items-center",onClick:function(){h("WETHIOCHAIN_TESTNET")},children:["Testnet"===a?Object(s.jsx)("span",{className:"p-1.5 rounded-full bg-themegreen"}):Object(s.jsx)("span",{className:"p-1.5 rounded-full bg-gray-400"}),l("Testnet")]})]})]})},x=function(){return Object(s.jsx)("div",{className:"boxshadow bg-gradient-to-tl from-themeg1 to theme-g2 px-2 2xl:py-12 py-4 rounded-xl flex 2xl:flex-row flex-col 2xl:gap-2 gap-4 items-center justify-center border border-themeg2 text-themeblue font-medium w-full",children:Object(s.jsx)(j,{})})},h=function(e){var t=e.children;return Object(s.jsxs)("div",{className:"flex lg:gap-4 gap-3 px-2",children:[Object(s.jsx)("div",{className:"hidden sm:block lg:w-6/20 w-5/12 overflow-hidden",children:Object(s.jsx)(l,{})}),Object(s.jsx)("div",{className:"flex flex-col gap-0 xl:w-13/20  sm:w-3/5 w-full  overflow-hidden rounded-xl",children:t}),Object(s.jsx)("div",{className:"hidden sm:block flex flex-col gap-4 xl:w-1/5 lg:w-1/4 w-3/12 overflow-hidden rounded-xl h-full",children:Object(s.jsx)(x,{})})]})},v=a(124),O=a(40),g=function(){var e=Object(m.a)().t,t=Object(i.b)(),a=Object(n.useRef)(null);return Object(s.jsx)("div",{className:"flex justify-center p-5",children:Object(s.jsxs)("div",{className:"text-center px-4",children:[Object(s.jsx)("input",{ref:a,className:"hidden",type:"file",accept:".json",onChange:function(e){var a=e.target.files[0];if(a){var n=new FileReader;n.onload=function(e){try{var a=JSON.parse(e.target.result);if(!Object(v.c)(a))return t(Object(u.c)(null)),void O.b.error(o.i.JSON_NOT_VALID);t(Object(u.c)(a))}catch(n){console.error("Error parsing JSON file:",n),t(Object(u.c)(null))}},n.readAsText(a)}}}),Object(s.jsx)("button",{className:"px-4 py-2 bg-gradient-to-l font-medium flex gap-4 group rounded-xl from-themeg1 to-themeg2 boxshadow border border-themeg2 font-bold",onClick:function(){a.current.click()},children:e("Upload JSON File")})]})})},f=a(33),p=a(14),N=a(36),w=a(8),y=a.n(w),A=a(105),k=a(52),E=a(48),T=a(46),S=a.n(T),C=a(41),I=a(17),L=a.n(I),P=a(862),q=a(7),B=k.c().shape({amount:k.b().typeError("Enter a valid Amount").required("Amount is required").moreThan(0,"Enter a valid Amount"),ethereumAddress:k.d().required("Address is required").test("ethereumAddress","Invalid Address",function(){var e=Object(N.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",!1);case 2:return e.prev=2,a=Object(E.a)(null,null),e.abrupt("return",a.utils.isAddress(t));case 7:return e.prev=7,e.t0=e.catch(2),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()),nonce:k.b().typeError("Enter a valid Nonce").required("Nonce is required").min(0,"Enter a valid Nonce"),data:k.d().required("Data is required"),gasLimit:k.b().required("Gas Limit is required").integer("Gas Limit must be an integer"),gasPrice:k.b().required("Gas Price is required").positive("Invalid Gas Price")}),_=function(){var e=Object(i.b)(),t=Object(q.h)(),a=Object(n.useState)([o.c]),r=Object(c.a)(a,2),l=r[0],d=r[1],b=Object(m.a)().t,j=Object(i.c)((function(e){return e.dapp})).chainId,x=sessionStorage.getItem("privateKey"),h=x&&S.a.AES.decrypt(x,"mKzwETNaKl").toString(S.a.enc.Utf8),O=Object(i.c)((function(e){return e.dapp})).jsonData,g=Object(n.useState)(o.c),w=Object(c.a)(g,2),k=w[0],T=w[1],I={tokenList:"",amount:"",ethereumAddress:"",nonce:"",data:o.n,gasLimit:o.d,gasPrice:""},_=Object(A.b)({initialValues:I,validationSchema:B,onSubmit:function(){var e=Object(N.a)(y.a.mark((function e(a){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={nonce:a.nonce,gasPrice:a.gasPrice,privateKey:h,gasLimit:a.gasLimit,chainId:j,to:a.ethereumAddress,tokenAddress:null===k||void 0===k?void 0:k.value,amount:a.amount},(null===k||void 0===k?void 0:k.label)!==(null===o.c||void 0===o.c?void 0:o.c.label)){e.next=7;break}return e.next=4,Object(v.d)(n);case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,Object(v.e)(n);case 9:e.t0=e.sent;case 10:r=e.t0,L.a.isEmpty(r)||t("".concat(o.l.TRANSACTION),{state:r});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),F=function(e){var t,a,n,r,s=Object(E.a)(null,null),l="ethereumAddress"===(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.name)?null===e||void 0===e||null===(a=e.target)||void 0===a?void 0:a.value:_.values.ethereumAddress,c=s.utils.isAddress(l),d="amount"===(null===e||void 0===e||null===(n=e.target)||void 0===n?void 0:n.name)?null===e||void 0===e||null===(r=e.target)||void 0===r?void 0:r.value:_.values.amount;/^[0-9]*\.?[0-9]*$/.test(d)&&c&&null!==k&&void 0!==k&&k.value&&d?_.setValues(Object(p.a)(Object(p.a)({},_.values),{},{data:(null===k||void 0===k?void 0:k.value)===o.c.value?o.n:Object(v.b)(l,null===k||void 0===k?void 0:k.value,d),gasLimit:(null===k||void 0===k?void 0:k.label)===(null===o.c||void 0===o.c?void 0:o.c.label)?o.d:o.e})):_.setValues(Object(p.a)(Object(p.a)({},_.values),{},{data:o.n,gasLimit:(null===k||void 0===k?void 0:k.label)===(null===o.c||void 0===o.c?void 0:o.c.label)?o.d:o.e}))},H=function(e){F(e),_.handleChange(e)};return Object(n.useEffect)((function(){F()}),[k]),Object(n.useEffect)((function(){T(o.c),d([o.c].concat(Object(f.a)(o.q[o.j[j]])))}),[j]),Object(n.useEffect)((function(){if(O){var t=Object(E.a)(null,null);e(Object(u.b)(Object(C.d)(t,O.chainID))),_.setValues(Object(p.a)(Object(p.a)({},_.values),{},{nonce:Object(C.d)(t,O.nonce),gasLimit:(null===k||void 0===k?void 0:k.label)===(null===o.c||void 0===o.c?void 0:o.c.label)?o.d:o.e,data:o.n,gasPrice:Object(C.d)(t,O.gasPrice)}))}else _.setValues(I)}),[O]),Object(s.jsx)("div",{className:" mx-auto  mt-12 sm:mt-8 rounded-md",children:Object(s.jsxs)("form",{onSubmit:_.handleSubmit,children:[Object(s.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[Object(s.jsxs)("div",{className:"mb-4",children:[Object(s.jsx)("label",{htmlFor:"token",className:"block text-sm font-medium text-gray-600",children:b("Select Token")}),Object(s.jsx)(P.a,{options:l,value:k,name:"token",onChange:function(e){return T(e)},isSearchable:!0,placeholder:b("Select Token"),className:"mt-1"})]}),Object(s.jsxs)("div",{className:"mb-4",children:[Object(s.jsx)("label",{htmlFor:"amount",className:"block text-sm font-medium text-gray-600",children:b("Amount")}),Object(s.jsx)("input",{type:"text",id:"amount",name:"amount",onChange:H,onBlur:_.handleBlur,value:_.values.amount,className:"mt-1 p-2 w-full border rounded-md"}),_.touched.amount&&_.errors.amount&&Object(s.jsx)("div",{className:"text-red-500 text-sm",children:_.errors.amount})]})]}),Object(s.jsxs)("div",{className:"mb-4",children:[Object(s.jsx)("label",{htmlFor:"ethereumAddress",className:"block text-sm font-medium text-gray-600",children:b("To Address")}),Object(s.jsx)("input",{type:"text",id:"ethereumAddress",name:"ethereumAddress",onChange:H,onBlur:_.handleBlur,value:_.values.ethereumAddress,className:"mt-1 p-2 w-full border rounded-md"}),_.touched.ethereumAddress&&_.errors.ethereumAddress&&Object(s.jsx)("div",{className:"text-red-500 text-sm",children:_.errors.ethereumAddress})]}),Object(s.jsxs)("div",{className:"mb-4",children:[Object(s.jsx)("label",{htmlFor:"nonce",className:"block text-sm font-medium text-gray-600",children:b("Nonce")}),Object(s.jsx)("input",{type:"text",id:"nonce",name:"nonce",onChange:_.handleChange,onBlur:_.handleBlur,value:_.values.nonce,className:"mt-1 p-2 w-full border rounded-md"}),_.touched.nonce&&_.errors.nonce&&Object(s.jsx)("div",{className:"text-red-500 text-sm",children:_.errors.nonce})]}),Object(s.jsxs)("div",{className:"mb-4",children:[Object(s.jsx)("label",{htmlFor:"data",className:"block text-sm font-medium text-gray-600",children:b("Data")}),Object(s.jsx)("input",{id:"data",name:"data",disabled:!0,onChange:_.handleChange,onBlur:_.handleBlur,value:_.values.data,className:"bg-white mt-1 p-2 w-full border rounded-md"}),_.touched.data&&_.errors.data&&Object(s.jsx)("div",{className:"text-red-500 text-sm",children:_.errors.data})]}),Object(s.jsxs)("div",{className:"mb-4",children:[Object(s.jsx)("label",{htmlFor:"gasLimit",className:"block text-sm font-medium text-gray-600",children:b("Gas Limit")}),Object(s.jsx)("input",{type:"text",id:"gasLimit",name:"gasLimit",onChange:_.handleChange,onBlur:_.handleBlur,value:_.values.gasLimit,className:"mt-1 p-2 w-full border rounded-md"}),_.touched.gasLimit&&_.errors.gasLimit&&Object(s.jsx)("div",{className:"text-red-500 text-sm",children:_.errors.gasLimit})]}),Object(s.jsxs)("div",{className:"mb-4",children:[Object(s.jsx)("label",{htmlFor:"gasPrice",className:"block text-sm font-medium text-gray-600",children:b("Gas Price")}),Object(s.jsx)("input",{type:"text",id:"gasPrice",name:"gasPrice",onChange:_.handleChange,onBlur:_.handleBlur,value:_.values.gasPrice,className:"mt-1 p-2 w-full border rounded-md"}),_.touched.gasPrice&&_.errors.gasPrice&&Object(s.jsx)("div",{className:"text-red-500 text-sm",children:_.errors.gasPrice})]}),Object(s.jsx)("div",{className:"flex justify-center",children:Object(s.jsx)("button",{type:"submit",className:"px-4 py-2 bg-gradient-to-l font-medium flex gap-4 group rounded-xl from-themeg1 to-themeg2 boxshadow border border-themeg2 font-bold",children:b("Generate Transaction")})})]})})};t.default=function(){var e=Object(m.a)().t,t=Object(i.b)();return Object(n.useEffect)((function(){return function(){t(Object(u.c)(null))}}),[]),Object(s.jsx)(h,{children:Object(s.jsx)("div",{className:"boxshadow bg-gradient-to-tl flex-1 from-themeg1 to theme-g2 p-6 rounded-xl border border-themeg2 flex flex-col text-themeblue gap-4",children:Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"text-2xl font-bold",children:[Object(s.jsx)("div",{children:e("Send Offline")}),Object(s.jsx)("div",{className:"py-2 block sm:hidden absolute z-10",children:Object(s.jsx)(j,{})})]}),Object(s.jsx)(_,{}),Object(s.jsx)(g,{})]})})})}}}]);
//# sourceMappingURL=5.2062da73.chunk.js.map