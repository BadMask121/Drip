async function address($, args, context, info) {
    return await context.prisma.delivery({
        id: $.id
    }).address()
}

module.exports = {
    address,
}