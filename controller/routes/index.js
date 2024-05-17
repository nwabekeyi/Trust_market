const registerBuyer = require("./registerBuyer");
const registerSeller = require("./registerSeller");
const registerAdmin = require("./registerAdmin");
const registerSuperadmin = require("./registerSuperadmin");
const allUsers = require("./getUser");
const getUser = require("./getUserOne");
const loginAdmin = require("./loginAdmin");
const loginBuyer = require("./loginBuyer");
const loginSeller = require("./loginSeller");
const loginSuperadmin= require("./loginSuperadmin");





module.exports = {
    registerAdmin,
    registerBuyer,
    registerSeller,
    allUsers,
    getUser,
    loginAdmin,
    loginBuyer,
    loginSeller,
    loginSuperadmin,
    registerSuperadmin};