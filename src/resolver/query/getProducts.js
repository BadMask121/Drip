const {
    NullException,
    InvalidException,
    ErrorHandler
} = require('../../misc/error/errorHandler')

module.exports = async function getProducts($, args, context, info) {
    return await context.prisma.products()
}
