async function vendor($, args, context, info){
    return await context.prisma.vendor({id: $.id}).orders()
}

async function product($, args, context, info) {
    return await context.prisma.product({id: $.id}).orders()
}

module.exports = {
    vendor,
    product
}