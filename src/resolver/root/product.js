async function vendor($, args, context, info) {
    return await context.prisma.order({
        where: {
            vendor: {
                id: $.id
            }
        }
    }).products()
}

module.exports = {
    vendor,
}