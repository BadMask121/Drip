const {
    NullException,
    InvalidException,
    ErrorHandler
} = require('../../misc/error/errorHandler')

module.exports = async function getProducts($, args, context, info) {
    return await context.prisma.products()
        // if (!products || products.length <= 0)
        //     throw new NullException("Sorry! theres no product to sell")

    // const count = await context.prisma.productsConnection({products}).aggregate().count()
    
    // return {
    //     products,
    //     count
    // }
}
