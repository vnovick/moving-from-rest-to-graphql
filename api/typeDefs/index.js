const {query} = require('./query')
// const {postType, authorType} = require('./types')

//TODO: include postType and authorType definitions after implementing them
const typeDefs = [
  query,
  // postType,
  // authorType
]

module.exports = {
  typeDefs,
}
