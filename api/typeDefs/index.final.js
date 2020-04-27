const {query} = require('./query.final')
const {postType, authorType} = require('./types/final')

const typeDefs = [query, postType, authorType]

module.exports = {
  typeDefs,
}
