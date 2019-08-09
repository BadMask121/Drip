const assert = require('chai')
const expect = require('chai').expect
const request = require('../request')

it('Test creating new vendor', async () => {
    const getProducts = await request.send({
        query: `
                    mutation {
                        createVendor(
                            name: "Promise Emakpor"
                            username: "promise12"
                            password: "promise1"
                        ) {
                            token
                        }
                    }
                `
    })
    expect(getProducts).to.be.not.null;
    expect(getProducts).to.have.status(200);
})

    

