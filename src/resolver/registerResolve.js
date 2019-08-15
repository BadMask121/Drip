const Query = require('./Query')
const Mutation = require('./Mutants')
const Order = require('./root/order')
const Vendor = require('./root/vendor')
const Delivery = require('./root/delivery')

const resolvers = {
    Query,
    Mutation,
    Vendor,
    Order,
    Delivery,
}
module.exports = resolvers
