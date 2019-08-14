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
    

    //check if vendor is authorized to trade
    const getVendorAuthorizedId = await getVendorId(context)
        if (!getVendorId)
            throw new NullException("Vendor not authorized to host orders")

    //check if vendor exists with consumed vendor authorization id
    const vendor = await context.prisma.vendor({
        id: getVendorAuthorizedId
    })
        if (!vendor || vendor.length <= 0)
            throw new NullException("Vendor not found")

    const addProduct = await context.prisma.createProduct({
        ...args,
        vendor:{
            connect:{
                id: vendor.id
            }
        }
    })

    if (!addProduct || addProduct.length <= 0)
        throw new ErrorHandler("Product could not be added to stock")
        
    return addProduct
}
