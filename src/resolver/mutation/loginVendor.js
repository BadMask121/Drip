const bcrypt = require('bcryptjs')
const {
    NullException,
    InvalidException,
    ErrorHandler
} = require('../../misc/error/errorHandler')
const {
    getVendorId,
    insertToken
} = require('../../misc/helpers')





/**
 *  LEGEND
 * @param {*} $  our root variable
 * @param {*} args our data variable
 * @param {*} context our prisma context
 * @param {*} info other information to manipulate on prisma
 */

//Vendor login resolver
async function loginVendor($, args, context, info) {
    const vendor = await context.prisma.vendor({
        username: args.username
    })
    if (!vendor)
        throw InvalidException("Vendor not found")

    const validatePassword = await bcrypt.compare(args.password, user.password)
    if (!validatePassword)
        throw InvalidException("Invalid Username or Password")

    const vendorId = vendor.id
    //insert token to database and authorization header
    const token = await insertToken(context, {
        id: vendorId
    }).catch(err => console.warn(err))

    return token;
}
