const {
    NullException,
    InvalidException,
    NotAuthorized,
    ErrorHandler,
    
} = require('../../misc/error/errorHandler')
const {
    getVendorId,
    insertToken,
    checkOrderSupportedRequest
} = require('../../misc/helpers')

module.exports = async function orders($, args, context, info) {

    //check if vendor is authorized to view reports
    const getVendorAuthorizedId = await getVendorId(context)
    if (!getVendorId)
        throw new NotAuthorized("Vendor not authorized to host orders")

    const vendor = await context.prisma.vendor({
        id: getVendorAuthorizedId
    })
    if (!vendor || vendor.length <= 0)
        throw new NullException("Vendor not found")

    const orders = await context.prisma.orders({
        where: {
            vendor: {
                id: vendor.id
            }
        }
    })

    if (!orders || orders.length <= 0)
        throw new NullException("Orders not found for vendor")

    return orders
}

