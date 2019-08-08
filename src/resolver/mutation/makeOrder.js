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


//make an order from vendors account
module.exports = async function makeOrder($, args, context, info) {

    //check if vendor is authorized to trade
    const getVendorAuthorizedId= getVendorId(context)
        if(!getVendorId)
            throw new NullException("Vendor not authorized to host orders")
    
    //check if vendor exists with consumed vendor authorization id
    const vendor = await context.prisma.vendor({
        id: getVendorAuthorizedId
    })
    
        if(!vendor)
            throw new NullException("Vendor not found")
    
    const products = await context.prisma.products({
        where: {
            name: args.product.name
        }
    })
    
        if(products.length === [])
            throw new NullException(`${args.product.name} out of stock`)

    
    const makeOrder = await context.prisma.createOrder({
        // ...args,
        vendor:{
            connect:{
                id: vendor.id
            }
        },
        status: args.status,
        quantity: args.quantity,
        total_cost: args.total_cost,
        currency: args.currency,
        product:{
            connect:{
                id: args.product.id
            }
        }
    })

        if (!makeOrder)
            throw new ErrorHandler("Order couldnt be placed")

    return makeOrder
}