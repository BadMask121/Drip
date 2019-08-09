const assert = require('chai')
const expect = require('chai').expect
const request = require('../request')


it('Test querying all products', async () => {
    const getProducts = await request.send({
        query: `
                    query {
                        getProducts {
                            id
                            name
                        }
                    }
                `
    })
    expect(getProducts).to.be.not.null;
    expect(getProducts).to.have.status(200);
})