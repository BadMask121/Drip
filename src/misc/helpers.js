
const jwt = require('jsonwebtoken')
const {
    access_secret
} = require('../../config') //get ACCESS_SECRET key from config

const {InvalidException, NullException, ErrorHandler} = require('./error/errorHandler') // out custom errorHandler

//get out secret key for authorization from server
const ACCESS_SECRET = access_secret


// A helper function to insertToken into database
async function insertToken(context, args) {
    // tokenize our args for authorization
    const token = jwt.sign({
        id: args.id
    }, ACCESS_SECRET)

        if (!token)
            throw new NullException("token not generated")

    const updatedToken = await updateToken(context, args).catch(async()=>{
         //update out vendor Authorization token
         const insertToken = await context.prisma.createAuthPayload({
             token,
             vendor: {
                 connect: {
                     ...args
                 }
             },
             vendorId: args.id
         })

            if (!insertToken)
                throw new InvalidException(`Token generated but not Inserted`)

        return insertToken
    })

        if (!updatedToken)
              throw new InvalidException(`Token generated but not Inserted`)

    return token;
}


// A helper function to updateToken into database
async function updateToken(context, args) {
    // tokenize our args for authorization
    const token = jwt.sign({
        id: args.id
    }, ACCESS_SECRET)

        if (!token)
            throw new NullException("token not generated")

    //update out vendor Authorization token
    const updateToken = await context.prisma.updateAuthPayload({
        data:{
              token,
              vendor: {
                      connect: {
                          ...args
                      }
                  },
                  vendorId: args.id
        },
        where:{
            vendorId: args.id
        }
    })
        if(!updateToken)
              throw new InvalidException(`Token generated but not updated`)
 

    return updateToken;
}


//getVendorId token from Authorization header
async function getVendorId (context) {
    const auth = await context.request.get('Authorization')
        if(!auth)
            throw new NullException("Please add authorization header")

     const token = auth.replace('Bearer ', '')
        if(!token)
            throw new NullException("token not found")

     const vendorId = jwt.verify(token, ACCESS_SECRET).id     
        if(!vendorId)
            throw new InvalidException(`Invalid authorization token`)

     return vendorId
}


//unused function
function customSerializeDate(args){
    let getDateFromQuery = args;
    getDateFromQuery = getDateFromQuery.split('-')
    getDateFromQuery = getDateFromQuery[0] + getDateFromQuery[1] +  getDateFromQuery[2].substring(0, 2);

    return getDateFromQuery
}
/**
 *  defining values that will be only accepted by our apis
 */
const acceptedCurrency = [
    "USD",
    "NGR",
    "EURO",
    "POUNDS"
]

const acceptedGender =[
    "male",
    "female"
]

const acceptedStatus = [ 
    "pending",
    "cancelled",
    "delivered"
]


function checkOrderSupportedRequest(what, toCheckForSupported) {

    let checkClause = []
    let result = false;
    
    switch (what) {
        case "currency".toLowerCase():
            checkClause = acceptedCurrency
            break;
        case "gender".toLowerCase():
            checkClause = acceptedGender
            break;
        case "status".toLowerCase():
            checkClause = acceptedStatus
            break;
    
        default:
            break;
    }

    toCheckForSupported = toCheckForSupported.toLowerCase();
    checkClause = checkClause.map(x => {
        return x.toLowerCase()
    })
    
    checkClause.forEach(element => {  
        if (element === toCheckForSupported)
            result = true
    });

    return result
}

module.exports = {
    ACCESS_SECRET,
    getVendorId,
    insertToken,
    updateToken,
    checkOrderSupportedRequest,
    customSerializeDate
}