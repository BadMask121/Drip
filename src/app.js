const {GraphQLServer}  = require('graphql-yoga')
const {prisma} = require('./generated/prisma-client')
const resolvers = require('./resolver/registerResolve')
const {schema, env, stage} = require('../config') //get schema GraphQL from config

if (env === stage.DEVELOPMENT){
    // import resolve logger for debugging
    const createGraphQLLogger = require('graphql-log');
    const logExecutions = createGraphQLLogger();
    logExecutions(resolvers)
}

const server = new GraphQLServer({
    typeDefs: schema,
    resolvers,
    context: request => {
        return {
            ...request,
            prisma
        }
    }
})

server.start((res) => console.log(` Prisma server running on localhost port ${res.port}`))




