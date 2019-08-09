
const {
    host
} = require('../../../config')
const chai = require('chai')
const http = require('chai-http')
chai.use(http)

let conn = chai.request(host)
                .post('/')

module.exports = conn