
/**
 *
 * Query File stores all query functions to fetch data from our database using prisma
 */
const getVendors = require('./query/getVendors')
const getProducts = require('./query/getProducts')
const getOrders = require('./query/getOrders')
const getReportForOrders = require('./query/getReportForOrders')

module.exports = {
    getVendors,
    getProducts,
    getOrders,
    getReportForOrders
}