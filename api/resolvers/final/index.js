const {postsResolvers} = require('./postsResolvers.final')
const {authorsResolvers} = require('./authorsResolvers.final')

const helloResolver = {
  Query: {
    hello: () => 'Hello GraphQL',
  },
}

const resolvers = [helloResolver, postsResolvers, authorsResolvers]

module.exports = {
  resolvers,
}
