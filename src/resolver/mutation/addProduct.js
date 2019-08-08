const bcrypt = require('bcryptjs')
const {
    NullException,
    InvalidException,
    ErrorHandler
} = require('../../misc/error/errorHandler')
const {
    getVendorId,
    insertToken
} = require('../../misc/helpers')





/**
 *  LEGEND
 * @param {*} $  our root variable
 * @param {*} args our data variable
 * @param {*} context our prisma context
 * @param {*} info other information to manipulate on prisma
 */

 
// add product to 
module.exports = async function addProduct($, args, context, info) {
    const addProduct = await context.prisma.createProduct({
        ...args
    })

    if(!addProduct)
        throw new ErrorHandler("Product could not be added to stock")
    return addProduct
}
