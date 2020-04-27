const {query} = require('./query')
const {postType, authorType} = require('./types')

const typeDefs = [query, postType, authorType]

module.exports = {
  typeDefs,
}
