async function orders($, args, context, info) {
    return await context.prisma.orders({
        id: $.id
    }).vendor()
}

module.exports = {
    orders
}