
const jwt = require('jsonwebtoken')
const {
    access_secret
} = require('../../config') //get ACCESS_SECRET key from config

const {InvalidException, NullException, ErrorHandler} = require('./error/errorHandler') // out custom errorHandler

//get out secret key for authorization from server
const ACCESS_SECRET = access_secret




// a helper function to insertToken into database
async function insertToken(context, args) {
    // tokenize our args for authorization
    const token = jwt.sign({
        args
    }, ACCESS_SECRET)

        if (!token)
            throw new NullException("token not generated")

    // //insert our token details to database for debugging reasons 
    const insertToken = await context.prisma.createAuthPayload({
        token,
        vendor: {
            connect: {
                ...args
            }
        }
    })

        if (!insertToken)
            throw new InvalidException("token generated but not inserted")

    return token
}


//getVendorId token from Authorization header
function getVendorId (context) {
    const auth = context.request.get('Authorization')
        if(!auth)
            throw new NullException("Please add authorization header")

     const token = auth.replace('Bearer ', '')

        if(!token)
            throw new NullException("token not found")

     const vendorId = jwt.verify(token, ACCESS_SECRET).args.id
    
        if(!vendorId)
            throw new InvalidException(`Invalid authorization token`)

     return vendorId
}


module.exports = {
    ACCESS_SECRET,
    getVendorId,
    insertToken
}