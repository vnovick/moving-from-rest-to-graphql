const fetch = require('node-fetch')

const authorsResolvers = {
  Author: {
    name: () => 'Name',
    avatarUrl: async (authorId) => {
      const result = await fetch(
        `http://localhost:3001/api/authors/${authorId}`,
      )
      const author = await result.json()
      return author.avatarUrl
    },

    // ------ Extra Credit 2---------
    // Remove name and avatarUrl resolvers
  },
}

module.exports = {
  authorsResolvers,
}
