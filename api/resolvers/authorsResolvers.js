const fetch = require('node-fetch')

const authorsResolvers = {
  Author: {
    name: () => 'Name',
    avatarUrl: (obj, args, context) => {
      //TODO: Load data from http://localhost:3001/api/authors/${authorId}. Use `async` resolver for that
    },
  },
}

module.exports = {
  authorsResolvers,
}
