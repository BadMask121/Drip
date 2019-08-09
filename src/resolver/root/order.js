async function vendor($, args, context, info){
    return await context.prisma.vendor()
}

async function product($, args, context, info) {
    return await context.prisma.product()
}

module.exports = {
    vendor,
    product
}