import{R as d,j as t,r as v,N as c,k as m,b as w,i as S,L as u}from"./index-72EGJmst.js";import{c as z,a as O,C,d as k,B as P}from"./index.esm-3X35CrkS.js";var b={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=d.createContext&&d.createContext(b),M=["attr","size","title"];function V(e,r){if(e==null)return{};var s=F(e,r),a,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],!(r.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}function F(e,r){if(e==null)return{};var s={},a=Object.keys(e),i,l;for(l=0;l<a.length;l++)i=a[l],!(r.indexOf(i)>=0)&&(s[i]=e[i]);return s}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},g.apply(this,arguments)}function j(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),s.push.apply(s,a)}return s}function p(e){for(var r=1;r<arguments.length;r++){var s=arguments[r]!=null?arguments[r]:{};r%2?j(Object(s),!0).forEach(function(a){L(e,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):j(Object(s)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))})}return e}function L(e,r,s){return r=B(r),r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}function B(e){var r=E(e,"string");return typeof r=="symbol"?r:String(r)}function E(e,r){if(typeof e!="object"||e===null)return e;var s=e[Symbol.toPrimitive];if(s!==void 0){var a=s.call(e,r||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function y(e){return e&&e.map((r,s)=>d.createElement(r.tag,p({key:s},r.attr),y(r.child)))}function o(e){return r=>d.createElement(H,g({attr:p({},e.attr)},r),y(e.child))}function H(e){var r=s=>{var{attr:a,size:i,title:l}=e,x=V(e,M),h=i||s.size||"1em",n;return s.className&&(n=s.className),e.className&&(n=(n?n+" ":"")+e.className),d.createElement("svg",g({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,a,x,{className:n,style:p(p({color:e.color||s.color},s.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),l&&d.createElement("title",null,l),e.children)};return f!==void 0?d.createElement(f.Consumer,null,s=>r(s)):r(b)}function T(e){return o({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(e)}function I(e){return o({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function _(e){return o({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function A(e){return o({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(e)}function J(e){return o({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M128 96c26.5 0 48-21.5 48-48S154.5 0 128 0 80 21.5 80 48s21.5 48 48 48zm384 0c26.5 0 48-21.5 48-48S538.5 0 512 0s-48 21.5-48 48 21.5 48 48 48zm125.7 372.1l-44-110-41.1 46.4-2 18.2 27.7 69.2c5 12.5 17 20.1 29.7 20.1 4 0 8-.7 11.9-2.3 16.4-6.6 24.4-25.2 17.8-41.6zm-34.2-209.8L585 178.1c-4.6-20-18.6-36.8-37.5-44.9-18.5-8-39-6.7-56.1 3.3-22.7 13.4-39.7 34.5-48.1 59.4L432 229.8 416 240v-96c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v96l-16.1-10.2-11.3-33.9c-8.3-25-25.4-46-48.1-59.4-17.2-10-37.6-11.3-56.1-3.3-18.9 8.1-32.9 24.9-37.5 44.9l-18.4 80.2c-4.6 20 .7 41.2 14.4 56.7l67.2 75.9 10.1 92.6C130 499.8 143.8 512 160 512c1.2 0 2.3-.1 3.5-.2 17.6-1.9 30.2-17.7 28.3-35.3l-10.1-92.8c-1.5-13-6.9-25.1-15.6-35l-43.3-49 17.6-70.3 6.8 20.4c4.1 12.5 11.9 23.4 24.5 32.6l51.1 32.5c4.6 2.9 12.1 4.6 17.2 5h160c5.1-.4 12.6-2.1 17.2-5l51.1-32.5c12.6-9.2 20.4-20 24.5-32.6l6.8-20.4 17.6 70.3-43.3 49c-8.7 9.9-14.1 22-15.6 35l-10.1 92.8c-1.9 17.6 10.8 33.4 28.3 35.3 1.2.1 2.3.2 3.5.2 16.1 0 30-12.1 31.8-28.5l10.1-92.6 67.2-75.9c13.6-15.5 19-36.7 14.4-56.7zM46.3 358.1l-44 110c-6.6 16.4 1.4 35 17.8 41.6 16.8 6.6 35.1-1.7 41.6-17.8l27.7-69.2-2-18.2-41.1-46.4z"},child:[]}]})(e)}const D=()=>{const e=z().shape({email:O().email("Invalid email").required("Email is required")}),r=(a,{setSubmitting:i})=>{console.log(a),i(!1)},s=[{title:"Shop on Trust Market",items:["Home electronic appliances","Phones and laptops","Fashion and apparels","Kitchen utensils","Office supplies","Jewelries and watches","Furniture","Baby accessories","Video games and accessories","Sports and fitness","Automobiles","Travels and luggage","More"]},{title:"Sell on Trust Market",items:["Start selling","Seller Central","Become a Verified Supplier","Partnerships","Download apps"]},{title:"Help",items:["Contact us","FAQ","Customer service","Career","Refunds"]},{title:"Forum",items:["Blog","Community Forum"]}];return t.jsxs("section",{className:"hidden lg:block bg-black p-[50px] py-2 ",children:[t.jsxs("article",{className:"flex lg:flex justify-between mt-12",children:[s.map((a,i)=>t.jsxs("div",{children:[t.jsx("h2",{className:"text-greyLighter text-md lg:text-xl font-bold mb-1  lg:mb-4 ",children:a.title}),t.jsx("ul",{className:"text-white",children:a.items.map((l,x)=>t.jsxs("p",{children:[t.jsx("li",{className:"text-greyLighter text-[8px] lg:text-xs mt-1 font-weight-[light] hover:text-red cursor-pointer duration-200",children:l},x)," "]}))})]},i)),t.jsxs("div",{className:"w-1/3",children:[t.jsx("h2",{className:"text-white text-xl font-bold  mb-4",children:"Subscribe for Newsletter"}),t.jsx(C,{initialValues:{email:""},validationSchema:e,onSubmit:r,children:t.jsx(k,{name:"email",type:"email"})})]})]}),t.jsx("article",{children:t.jsxs("h2",{className:"text-greyLighter flex justify-center relative top-[-35px]",children:[t.jsx("span",{className:"text-red font-bold text-sm mr-1",children:"Follow us:"}),t.jsx(I,{size:18,style:{display:"inline",marginRight:"5px"}}),t.jsx(T,{size:18,style:{display:"inline",marginRight:"5px"}}),t.jsx(_,{size:18,style:{display:"inline",marginRight:"5px"}}),t.jsx(A,{size:18,style:{display:"inline"}})]})}),t.jsx("hr",{}),t.jsxs("article",{className:"text-center text-greyLighter mt-2",children:[t.jsx("p",{className:"text-[8px]",children:"@Copyright 2024"}),t.jsx("h1",{className:"text-xs",children:"All right reserved. Powered by Trust market"})]})]})};function R(e){return o({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(e)}function W(e){return o({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm-4.3 304c-11.8 0-21.4-9-21.4-20.6 0-11.5 9.6-20.6 21.4-20.6 11.9 0 21.5 9 21.5 20.6 0 11.6-9.5 20.6-21.5 20.6zm40.2-96.9c-17.4 10.1-23.3 17.5-23.3 30.3v7.9h-34.7l-.3-8.6c-1.7-20.6 5.5-33.4 23.6-44 16.9-10.1 24-16.5 24-28.9s-12-21.5-26.9-21.5c-15.1 0-26 9.8-26.8 24.6H192c.7-32.2 24.5-55 64.7-55 37.5 0 63.3 20.8 63.3 50.7 0 19.9-9.6 33.6-28.1 44.5z"},child:[]}]})(e)}function $(e){return o({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"},child:[]}]})(e)}const G=()=>{const[e,r]=v.useState(!1),s=()=>{r(!e)};return t.jsxs("div",{className:"relative justify-center lg:hidden px-5 pt-5 absolute text-white fixed top-0 left-0 z-10",children:[t.jsxs("nav",{className:"bg-white h-5 flex items-center justify-between ",children:[t.jsxs(c,{to:"/",className:"text-xl text-red cursor",children:["Trust ",t.jsx("span",{className:"text-yellow",children:"Market"})]}),t.jsxs("div",{onClick:s,className:"cursor-pointer space-y-1 z-20 relative",children:[t.jsx(m.motion.div,{className:`h-1 w-6 ${e?"bg-white":"bg-red"}`,initial:{rotate:0,y:0},animate:{rotate:e?45:0,y:e?6:0},transition:{duration:.3}}),t.jsx(m.motion.div,{className:"h-1 w-6 bg-red",initial:{opacity:1},animate:{opacity:e?0:1},transition:{duration:.3}}),t.jsx(m.motion.div,{className:`h-1 w-6 ${e?"bg-white":"bg-red"}`,initial:{rotate:0,y:0},animate:{rotate:e?-45:0,y:e?-11:0},transition:{duration:.3}})]})]}),e&&t.jsxs(m.motion.ul,{className:"bg-black text-white fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center space-y-4  z-10",initial:{x:"-100%"},animate:{x:0},exit:{x:"-100%"},transition:{duration:.5},children:[t.jsx("li",{className:"text-xl",children:"Home"}),t.jsx("li",{className:"text-xl",children:"Categories"}),t.jsx("li",{className:"text-xl",children:"Shop"}),t.jsx("li",{className:"text-xl",children:"Sell"}),t.jsx("li",{className:"text-xl",children:"About"}),t.jsx("li",{className:"text-xl",children:"Contact"})]})]})},Q=e=>function({SignUp:s,...a}){v.useState("/"),v.useState(0);const l=w().pathname;console.log(l);const x=S(),h=()=>{x("auth2")},n=({isActive:N})=>N?"text-grey hover:border-b-2 hover:border-b-red hover:text-red hover:border-b-red hover:border-b-solid hover:border-b-5 text-sm link active:border-b border-red":"text-grey hover:text-red text-sm link active:border-b border-red";return t.jsxs("div",{children:[l==="/"?t.jsxs("div",{children:[t.jsx("header",{className:"hidden lg:block",children:t.jsxs("nav",{className:" flex justify-between items-center bg-white py-4  lg:px-[30px] h-[80px] my-0 ",children:[t.jsx("div",{className:"flex items-center",children:t.jsxs(c,{to:"/",className:"text-3xl text-red cursor",children:["Trust ",t.jsx("span",{className:"text-yellow",children:"Market"})]})}),t.jsxs("div",{className:"flex space-x-[-50px] justify-evenly flex-grow",children:[t.jsx(c,{to:"/",className:n,children:"Home"}),t.jsx(c,{to:"/about",className:n,children:"categories"}),t.jsx(c,{to:"/contact",className:n,children:"Shop"}),t.jsx(c,{to:"/contact",className:n,children:"Sell"}),t.jsx(c,{to:"/contact",className:n,children:"About"}),t.jsx(c,{to:"/contact",className:n,children:"Contact"})]}),t.jsxs("div",{className:"flex items-center",children:[t.jsx($,{}),t.jsx(u,{to:"auth1",className:"text-sm mx-5  text-red hover:text-grey underline",children:"Sign in"}),t.jsx(P,{onClick:h,primary:!0,login:!0,children:"Sign up"})]})]})}),t.jsx(G,{className:"px-5"})]}):t.jsx("div",{children:t.jsxs("nav",{className:"flex h-[50px] justify-between shadow items-center bg-white text-white px-10 ",children:[t.jsx("div",{className:"flex items-center",children:t.jsxs(u,{to:"/",className:"text-xl text-red cursor ",children:["Trust ",t.jsx("span",{className:"text-yellow",children:"Market"})]})}),l==="/auth2"?t.jsxs("div",{className:"text-grey",children:[t.jsxs("h2",{className:"text-[10px]",children:[" Already have an acouunt? ",t.jsx(u,{className:"text-red underline hover:text-greyLight",children:"Login"})," "]}),t.jsx(u,{className:"text-[10px] hover:text-red",children:"Forget your user ID or password?"})]}):t.jsxs("div",{className:"flex",children:[t.jsx(R,{className:"text-grey text-sm"}),t.jsx(W,{className:"text-grey ml-5 text-md"})]})]})}),t.jsx("div",{className:"container mx-auto py-4 px-5 lg:px-[30px]",children:t.jsx(e,{...a})}),t.jsx(D,{})]})};export{J as F,o as G,Q as N};
