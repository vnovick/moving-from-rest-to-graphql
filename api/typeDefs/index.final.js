const {query} = require('./query')
const {mutation} = require('./mutation.final')
const {postType, authorType} = require('./types/final')

const typeDefs = [query, mutation, postType, authorType]

module.exports = {
  typeDefs,
}
