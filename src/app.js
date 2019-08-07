const {GraphQLServer}  = require('graphql-yoga')
const {prisma} = require('./generated/prisma-client')
const resolvers = require('./resolver')

const server = new GraphQLServer({
    typeDefs: __dirname  + '/schema/dripSchema.graphql',
    resolvers,
    context: request =>{
        return {
            ...request,
            prisma
        }
    }
})

server.start((res) => console.log(` Prisma server running on localhost port ${res.port}`))




