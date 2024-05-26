const {
    registerAdmin,
    registerSeller,
    registerBuyer,
    registerSuperadmin,
    } = require("./registration");

    const {
        loginAdmin,
        loginSeller,
        loginBuyer,
        loginSuperadmin,
        refreshToken,
        logoutUser} = require("./auth");

     const {
        getUser,
        getAllUser
        } = require("./getUsers");

module.exports = {
    registerAdmin,
    registerBuyer,
    registerSeller,
    loginAdmin,
    loginBuyer,
    loginSeller,
    loginSuperadmin,
    registerSuperadmin,
    refreshToken,
    logoutUser,
    getUser,
    getAllUser
};