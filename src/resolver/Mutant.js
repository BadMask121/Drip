const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const errorHandler = require('../misc/errorHandler')


const {ACCESS_SECRET}  = require('../misc/helpers')


async function createVendor($, args, context, info){

    const vendorExist = await context.prisma.vendor({username: args.username})

    if (vendorExist)
        throw new errorHandler("Vendor already exists")
        
    //hash password
    const password =  await bcrypt.hash(args.password, 20)
    
    //store password to our passed argument object
    args.password = password;

    //create vendor details
    const vendor = await context.prisma.createVendor({
        ...args
    })

    //tokenize our ip for authorization
    const token = jwt.sign({vendorId: vendor.id }, ACCESS_SECRET)


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