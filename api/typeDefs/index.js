const {query} = require('./query')
const {mutation} = require('./mutation')
const {postType, authorType} = require('./types')

const typeDefs = [query, mutation, postType, authorType]

module.exports = {
  typeDefs,
}
