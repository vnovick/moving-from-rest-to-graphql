const {postsResolvers} = require('./postsResolvers')
const {authorsResolvers} = require('./authorsResolvers')

const helloResolver = {
  Query: {
    hello: () => 'Hello GraphQL',
  },
}

const resolvers = [helloResolver]

module.exports = {
  resolvers,
}
