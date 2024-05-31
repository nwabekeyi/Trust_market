import{b as x,r as b,j as e}from"./index-72EGJmst.js";import{c as f,a as t,b as y,C as w,T as s}from"./index.esm-3X35CrkS.js";import{e as l}from"./constant-DO_PPxh-.js";const g=a=>({submit:async o=>{try{const r=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("accessToken")}`},body:JSON.stringify(o)});if(console.log("okay"),!r.ok)throw new Error("Failed to submit data")}catch(r){throw r}}});function N(){const a=x().pathname,i=a==="/auth2/buyer-register"?l.buyerRegister:l.sellerRegister,{submit:o}=g(i),[r,n]=b.useState({email:"",userName:"",password:"",confirmPassword:"",phone_number:""}),m=f().shape({email:t().email("Invalid email").required("Email is required"),userName:t().required("Username is required"),password:t().required("Password is required"),confirmPassword:t().required("Confirm password is required").oneOf([y("password"),null],"Passwords must match"),phone_number:t().matches(/^\d+$/,"Invalid phone number").required("Phone number is required")}),c=async(u,{resetForm:p})=>{try{await o(u),p()}catch(h){console.error("Error submitting form:",h)}},d=a==="/auth2/seller-register"?"Hi, welcome seller":"Hi, welcome to the best marketplace";return e.jsx("section",{className:"w-full py-10 lg:w-2/5 border-[solid] border-[1px] border-greyLighter flex flex-col py-2 items-center justify-center rounded-[20px] bg-white shadow-lg mx-auto",children:e.jsx("div",{className:"w-4/5 mx-auto",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl text-greyLight font- mb-1",style:{fontFamily:"markazi"},children:"Create an account"}),e.jsx("div",{children:e.jsxs(w,{initialValues:r,validationSchema:m,onSubmit:c,title:d,values:n,title2:"Explore the most secured marketplace ",register:!0,children:[e.jsx(s,{label:"Email",name:"email",type:"email",style:{textAlign:"left"}}),e.jsx(s,{label:"Username",name:"userName",type:"text",style:{textAlign:"left"}}),e.jsx(s,{label:"Password",name:"password",type:"password",style:{textAlign:"left"}}),e.jsx(s,{label:"Confirm Password",name:"confirmPassword",type:"password",style:{textAlign:"left"}}),e.jsx(s,{label:"Phone Number",name:"phone_number",type:"text",style:{textAlign:"left"}})]})})]})})})}export{N as SignUpForm,N as default};
