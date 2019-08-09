const {
    NullException,
    InvalidException,
    ErrorHandler
} = require('../../misc/error/errorHandler')

async function getVendors($, args, context, info) {
    return await context.prisma.vendors()
}
module.exports = getVendors