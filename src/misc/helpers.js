
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const errorHandler = require('../misc/errorHandler')

//get out secret key for authorization from server
const ACCESS_SECRET = process.env.ACCESS_SECRET



const Helper = {
    ACCESS_SECRET,
    getVendorId
}

function getVendorId (context) {
    const auth = context.request.get('Authorization')

    if(auth){
        const token = auth.replace('Bearer ' , '')
        const {vendorId} = jwt.verify(token , ACCESS_SECRET)
        return vendorId
    }

    throw new errorHandler("Request not authorized")
}


module.exports = Helper