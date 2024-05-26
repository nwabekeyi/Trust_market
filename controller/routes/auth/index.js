const loginAdmin = require('./loginAdmin');
const loginBuyer = require('./loginBuyer');
const loginSeller = require('./loginSeller');
const loginSuperadmin = require('./loginSuperadmin');
const refreshToken = require('./refreshToken');
const logoutUser = require('./logoutUser')

module.exports= {
    loginSuperadmin,
    loginSeller,
    loginBuyer,
    loginAdmin,
    refreshToken,
    logoutUser};