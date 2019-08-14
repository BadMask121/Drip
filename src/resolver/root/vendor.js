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


async function orders($, args, context, info) {
     const orders = await context.prisma.vendor({
         where: {
             vendor: {
                 id: $.id
             }
         }
     }).orders()
        if (!orders || orders.length <= 0)
            throw new NullException("Orders not found for vendor")

    return orders
}
module.exports = {
    orders,
}