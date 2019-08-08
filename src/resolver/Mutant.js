const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {NullException , InvalidException, ErrorHandler} = require('../misc/error/errorHandler')


const {ACCESS_SECRET}  = require('../misc/helpers')

async function createVendor($, args, context, info){

    const vendorExist = await context.prisma.vendor({username: args.username})

    if (vendorExist)
        throw new ErrorHandler("Vendor already exists")
        
    //hash password with 10 rotation of salting
    const password =  await bcrypt.hash(args.password, 10)
    //create vendor details
    const vendor = await context.prisma.createVendor({
        ...args,
        password
    })

    //get vendor id from created vendor object
    let vendorId = vendor.id
    // tokenize our ip for authorization
    const token = jwt.sign({vendorId: vendorId }, ACCESS_SECRET)
    
    // //insert our token details to database for debugging reasons 
    const insertToken = await context.prisma.createAuthPaylod({
        token,
        vendorId
    })

        if(!token)
            throw new NullException("token not generated")
                if(!insertToken)
                    throw new InvalidException("token generated but not inserted")
    return {
        token,
        vendor
    }
}

async function createProduct($, args, context, info) {

}

async function createOrder($, args, context, info) {

}


async function vendorExist($, args, context){

}

module.exports = {
    createVendor,
    createProduct,
    createOrder,
    vendorExist
}