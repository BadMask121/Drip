
const {
    describe
} = require('mocha')

describe('Start Testing Drip', () => {
    require('./resolver/mutation/createVendor')
    require('./resolver/query/getProducts')
})