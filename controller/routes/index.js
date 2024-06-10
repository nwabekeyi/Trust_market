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

        const postProduct = require('./postProduct');
        const getAllProducts = require('./getProduct/getAllProducts');
        const getOneProduct = require('./getProduct/getOneProduct')


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
    getAllUser,
    postProduct,
    getAllProducts,
    getOneProduct
};