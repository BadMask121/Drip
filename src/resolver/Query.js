/**
 *
 * Query File stores all query functions to fetch data from our database using prisma
 */

async function getVendors($, args, context, info) {
    return await context.prisma.Vendors()
}

async function getProducts($, args, context, info) {
    return await context.prisma.products()
}

async function getOrders($, args, context, info){
    return await context.prisma.orders()
}


/**
 * 
 * @Todo 
 * @To add other one to many query resolvers
 */

module.exports = {
    getVendors,
    getProducts,
    getOrders
}
