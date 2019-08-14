const Query = require('./Query')
const Mutation = require('./Mutants')
const Order = require('./root/order')
const Vendor = require('./root/vendor')
const Product = require('./root/product')

const resolvers = {
    Query,
    Mutation,
    Vendor,
    Order,
    Product,
}
module.exports = resolvers
