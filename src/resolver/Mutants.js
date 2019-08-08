const addProduct = require('./mutation/addProduct')
const createVendor = require('./mutation/createVendor')
const loginVendor = require('./mutation/loginVendor')
const makeOrder = require('./mutation/makeOrder')

module.exports = {
    addProduct,
    createVendor,
    loginVendor,
    makeOrder
}