const {
    NullException,
    InvalidException,
    ErrorHandler
} = require('../../misc/error/errorHandler')
const {
    getVendorId,
    insertToken,
    checkOrderSupportedRequest
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
    const getVendorAuthorizedId= await getVendorId(context)
        if(!getVendorId)
            throw new NullException("Vendor not authorized to host orders")
    
    //check if vendor exists with consumed vendor authorization id
    const vendor = await context.prisma.vendor({
        id: getVendorAuthorizedId
    })
        if (!vendor || vendor.length <= 0)
            throw new NullException("Vendor not found")
    
    //check if product requested for is available
    const products = await context.prisma.products({
        where: {
            id: args.product.id
        }
    })
        if (!products || products.length <= 0)
            throw new NullException(`Product Id: ${args.product.id} out of stock`)



    /**
     *  after checking for vendor and product availability 
     *  we need now do validation for the data sent to api
     */
    if (!checkOrderSupportedRequest("status",  args.status))
        throw new NullException(`Status '${args.status}' not supported`)
    if (!checkOrderSupportedRequest("gender", args.delivery.gender))
         throw new NullException(`Gender '${args.delivery.gender}' not supported`)
    if (!checkOrderSupportedRequest("currency", args.currency))
          throw new NullException(`Currency '${args.currency}' not supported`)

          
          
    //finally create buyers order
    const makeOrder = await context.prisma.createOrder({
        vendor:{
            connect:{
                id: vendor.id
            }
        },
         product: {
             connect: {
                 id: args.product.id
             }
         },
        status: args.status,
        quantity: args.quantity,
        total_cost: args.total_cost,
        currency: args.currency,
        delivery:{
            create:{
                ...args.delivery,
                address: {
                    create:{
                        ...args.delivery.address
                    }
                }
            }
        }
    })

        if (!makeOrder || makeOrder.length <= 0)
            throw new ErrorHandler("Order couldnt be placed")

    return makeOrder
}