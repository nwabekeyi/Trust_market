
const adminEndpoint = import.meta.env.LOGIN_SUPERADMIN;
const user = import.meta.env.LOGIN_GETUSER;

console.log(adminEndpoint);

// Base URL
const baseURL = 'https://trust-market-8.onrender.com';

// Endpoints
const endpoints = {
    AdminLogin: `${baseURL}/api/v1/auth/superadmin`,
    getUser: `${baseURL}/api/v1/users`,
    dminRegister: `${baseURL}/api/v1/register/admin`,
    superadminRegister: `${baseURL}/api/v1/register/superadmin`,
    buyerRegister: `${baseURL}/api/v1/register/buyer`,
    sellerRegister: `${baseURL}/api/v1/register/seller`,
    buyerLogin: `${baseURL}/api/v1/auth/buyer`,
    sellerLogin: `${baseURL}/api/v1/auth/seller`,
    getUserOne: `${baseURL}/api/v1/users/:userId`,
    logout: `${baseURL}/api/v1/auth/log-out`,


    

};
// /api/v1/auth/refresh-token


export {endpoints}
