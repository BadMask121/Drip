const Query = require('./Query')
const Mutation = require('./Mutants')
const Order = require('./root/order')
const Vendor = require('./root/vendor')

const resolvers = {
    Query,
    Mutation,
    Order,
    Vendor
}
module.exports = resolvers
