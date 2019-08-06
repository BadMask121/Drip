const {GraphQLServer}  = require('graphql-yoga')

const resolvers = require('./')

const server = new GraphQLServer({
    typeDefs: '../schema/dripSchema.graphql',
    resolvers
})

server.start((res) => console.log(` Prisma server running on localhost port ${res.port}`))




