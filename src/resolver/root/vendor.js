async function orders($, args, context, info) {
    return await context.prisma.orders()
}

module.exports = {
    orders
}