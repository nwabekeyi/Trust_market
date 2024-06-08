import{r as g,i as N,j as t,b as R}from"./index-BRV6blv7.js";import{N as C}from"./navWrapper-DlEe5rnZ.js";import{c as A,a as T,C as O,T as w}from"./index.esm-DUpsQ7dV.js";import{e as f}from"./constant-WXt0_JmR.js";const D="/assets/login-image-BTIRhNGW.svg",$="/assets/seller-login-Dfs7KCAR.webp",x=(e,s)=>{const c=new Date().getTime()+s*1e3;localStorage.setItem("accessToken",e),localStorage.setItem("accessTokenExpiry",c)},y=()=>localStorage.getItem("accessToken"),S=()=>parseInt(localStorage.getItem("accessTokenExpiry"),10),F=e=>{document.cookie=`refreshToken=${e}; path=/; HttpOnly;`},b=()=>{const e=document.cookie.split(";");for(let s=0;s<e.length;s++){const c=e[s].trim();if(c.startsWith("refreshToken="))return c.substring(13)}return null},P=e=>{document.cookie=`${e}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`},U=()=>{const[e,s]=g.useState(!1),[c,u]=g.useState(""),l=N();g.useEffect(()=>{const r=b(),n=y(),o=S();r&&n&&new Date().getTime()<o&&(s(!0),k())},[]);const h=async(r,n,o)=>{try{const a=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,password:n})});if(!a.ok)throw new Error("Login failed");const i=await a.json(),{accessToken:I,refreshToken:E,expiresIn:L,userId:v}=i;x(I,L),F(E),s(!0),k(),d(v)}catch(a){console.error("Login error:",a)}},d=g.useCallback(async r=>{const n=`${f.getUser}/${r}`;try{const o=y();if(!o)throw new Error("Access token not found");const a=await fetch(n,{headers:{Authorization:`Bearer ${o}`}});if(!a.ok)throw new Error("Failed to fetch user info");const i=await a.json();localStorage.setItem("userDetails",JSON.stringify(i)),u(i),console.log(i),l("/dashboard")}catch(o){console.error("Fetch user info error:",o)}},[l]),m=()=>{console.log(window.localStorage),localStorage.removeItem("accessToken"),localStorage.removeItem("accessTokenExpiry"),P("refreshToken"),s(!1)},p=async()=>{try{if(!b())throw new Error("Refresh token not found");const n=await fetch("https://your-auth-api.com/refresh-token",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});if(!n.ok)throw new Error("Failed to refresh access token");const o=await n.json(),{accessToken:a}=o;x(a,900),s(!0)}catch(r){console.error("Refresh token error:",r),m()}},k=()=>{const r=S();if(!r)return;const o=r-new Date().getTime()-6e4;o>0?setTimeout(()=>{p()},o):p()};return{isLoggedIn:e,login:h,logout:m}},q=()=>{const e=R(),{login:s}=U(),c=e.pathname==="/auth1/buyer-sign-in"?f.buyerLogin:f.sellerLogin;console.log(c);const u=A().shape({email:T().required("Email is required"),password:T().required("Password is required")}),l=async(h,{setSubmitting:d})=>{try{await s(h.email,h.password,c)}catch(m){console.error("Login error:",m)}finally{d(!1)}};return t.jsxs("div",{className:"mx-20 flex gap-2 items-center ",children:[t.jsx("div",{className:"w-1/2 h-full hidden lg:block ",children:t.jsx("img",{src:e.pathname==="/auth1/buyer-sign-in"?D:$,className:"h-full w-full object-cover ",alt:"Login Image"})}),t.jsx("div",{className:"h-8/10 lg:w-3/5 mt-2 mx-auto shadow",children:t.jsx("div",{className:"w-[70%] mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2",children:t.jsxs("div",{children:[t.jsx("h2",{className:"bold text-xl",children:"LOGIN"}),t.jsxs(O,{initialValues:{email:"",password:""},validationSchema:u,onSubmit:l,login:!0,title:"Hi, welcome back to the best market place ",children:[t.jsx(w,{label:"Email",name:"email",type:"email"}),t.jsx(w,{label:"Password",name:"password",type:"password"})]})]})})})]})},_=C(q);function j(){return t.jsx("section",{children:t.jsx(_,{})})}const z=Object.freeze(Object.defineProperty({__proto__:null,SignIn:j,default:j},Symbol.toStringTag,{value:"Module"}));export{j as S,z as s,U as u};