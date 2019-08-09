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
module.exports = async function loginVendor($, args, context, info) {
    const vendor = await context.prisma.vendor({
        username: args.username
    })
        if (!vendor || vendor.length <= 0 )
            throw new InvalidException("Vendor not found")
    
    const validatePassword = await bcrypt.compare(args.password, vendor.password)
        if (!validatePassword)
            throw new InvalidException("Invalid Username or Password")

    //get vendor Id
    const vendorId = vendor.id
    
    //insert token to database and authorization header
    const token = await insertToken(context, {
        id: vendorId
    }).catch(err => console.warn(err))

        if (!token || token.length <= 0)
            throw new InvalidException("Token generated but not updated")
            

    return {
        token,
        vendor
    };
}
