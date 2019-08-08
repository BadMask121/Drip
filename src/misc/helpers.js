
const jwt = require('jsonwebtoken')
const {
    access_secret
} = require('../../config') //get ACCESS_SECRET key from config

const errorHandler = require('./error/errorHandler') // out custom errorHandler

//get out secret key for authorization from server
const ACCESS_SECRET = access_secret

function getVendorId (context) {
    const auth = context.request.get('Authorization')

    if(auth){
        const token = auth.replace('Bearer ' , '')
        const {vendorId} = jwt.verify(token , ACCESS_SECRET)
        return vendorId
    }

    throw new errorHandler("Request not authorized")
}


module.exports = {
    ACCESS_SECRET,
    getVendorId
}