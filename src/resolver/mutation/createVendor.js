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

//create Vendors account
module.exports = async function createVendor($, args, context, info) {

    const vendorExist = await context.prisma.vendor({
        username: args.username
    })

    if (vendorExist)
        throw new ErrorHandler("Vendor already exists")

    //hash password with 10 rotation of salting
    const password = await bcrypt.hash(args.password, 10)
    //create vendor details
    const vendor = await context.prisma.createVendor({
        ...args,
        password
    })

    //get vendor id from created vendor object
    let vendorId = vendor.id

    //insert token to database and authorization header
    const token = await insertToken(context, {
        id: vendorId
    }).catch(err => console.warn(err))
    
    return {
        token,
        vendor
    }
}
