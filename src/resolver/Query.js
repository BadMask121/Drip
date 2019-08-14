
/**
 *
 * Query File stores all query functions to fetch data from our database using prisma
 */
const getVendors = require('./query/getVendors')
const getProducts = require('./query/getProducts')
const orders = require('./query/getOrders')
const filterOrdersByDate = require('./query/filterOrdersByDate')

module.exports = {
    getVendors,
    getProducts,
    orders,
    filterOrdersByDate
}