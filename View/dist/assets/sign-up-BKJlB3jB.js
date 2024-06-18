import{b as m,j as e}from"./index-VZ-xhc_7.js";import{c as d,a as r,b as u,C as c,T as s,e as l}from"./index.esm-KrRgkvjd.js";function h(){const t=m().pathname,a=t==="/auth2/buyer-register"?l.buyerRegister:l.sellerRegister,i={email:"",userName:"",password:"",confirmPassword:"",phone_number:""};console.log(a);const o=d().shape({email:r().email("Invalid email").required("Email is required"),userName:r().required("Username is required"),password:r().required("Password is required"),confirmPassword:r().required("Confirm password is required").oneOf([u("password"),null],"Passwords must match"),phone_number:r().matches(/^\d+$/,"Invalid phone number").required("Phone number is required")}),n=t==="/auth2/seller-register"?"Hi, welcome seller":"Hi, welcome to the best marketplace";return e.jsx("section",{className:"w-full h-[100vh] lg:h-[auto] py-10 lg:w-2/5 border-[solid] border-[1px] border-greyLighter flex flex-col py-2 items-center justify-center rounded-[20px] bg-white shadow-lg mx-auto",children:e.jsx("div",{className:"w-4/5 mx-auto",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl text-greyLight font- mb-1",style:{fontFamily:"markazi"},children:"Create an account"}),e.jsx("div",{children:e.jsxs(c,{initialValues:i,validationSchema:o,url:a,title:n,title2:"Explore the most secured marketplace ",register:!0,modal:!0,children:[e.jsx(s,{label:"Email",name:"email",type:"email",style:{textAlign:"left"}}),e.jsx(s,{label:"Username",name:"userName",type:"text",style:{textAlign:"left"}}),e.jsx(s,{label:"Password",name:"password",type:"password",style:{textAlign:"left"}}),e.jsx(s,{label:"Confirm Password",name:"confirmPassword",type:"password",style:{textAlign:"left"}}),e.jsx(s,{label:"Phone Number",name:"phone_number",type:"text",style:{textAlign:"left"}})]})})]})})})}export{h as SignUpForm,h as default};