const Query = require('./resolver/Query')
const Mutants = require('./resolver/Mutant')
// const Query = require('./resolver/Query')

const resolvers = {
    Query,
    Mutation:Mutants
}
module.exports = resolvers
