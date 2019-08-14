const {
    NullException,
    InvalidException,
    ErrorHandler
} = require('../../misc/error/errorHandler')

const {
    getVendorId,
    insertToken,
    customSerializeDate
} = require('../../misc/helpers')

module.exports = async function filterOrdersByDate($, args, context, info) {
     //check if vendor is authorized to view reports
     const getVendorAuthorizedId = await getVendorId(context)
     if (!getVendorId)
         throw new NotAuthorized("Vendor not authorized to host orders")

     const vendor = await context.prisma.vendor({
         id: getVendorAuthorizedId
     })
     if (!vendor || vendor.length <= 0)
         throw new NullException("Vendor not found")


    const where  = args.filter ? {
        OR : [
            {
               createdAt_not: {
                    from_gt: args.filter,
                        to_lt: args.filter
               }
            }
        ]
    } : {}
    
    const orders = await context.prisma.orders({
        where
    })
     if (!orders || orders.length <= 0)
         throw new NullException("Orders not found for vendor")

    return orders
}