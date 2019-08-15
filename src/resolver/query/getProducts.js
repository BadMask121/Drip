const {
    NullException,
    InvalidException,
    ErrorHandler
} = require('../../misc/error/errorHandler')

module.exports = async function getProducts($, args, context, info) {
    let product = {}
    
    if(!args){
        product = await context.prisma.products()
        count = await context.prisma.prisma.productsConnection()
    }

    product = await context.prisma.products({
        where:{
            name: args.name
        }
    })

    count = await context.prisma.productsConnection({
        where: {
            name: args.name
        }
    })
    .aggregate()
    .count()

        if (!product || product.length <= 0)
            throw new NullException("Sorry! theres no product on stock")

    return product
}
