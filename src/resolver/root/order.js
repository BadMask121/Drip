async function vendor($, args, context, info){
      const orders = await context.prisma.order({
          id: $.id
      }).vendor()
      return orders
}

async function product($, args, context, info) {
    const orders = await context.prisma.order({
        id: $.id
    }).product()
    return orders
}

async function delivery($, args, context, info) {
    const orders = await context.prisma.order({
        id: $.id
    }).delivery()
    return orders
}

module.exports = {
    vendor,
    product,
    delivery
}