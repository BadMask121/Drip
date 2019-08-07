const Query = require('./resolver/Query')
const Mutants = require('./resolver/Mutant')

const resolvers = {
    Query,
    Mutation:Mutants
}
module.exports = resolvers
