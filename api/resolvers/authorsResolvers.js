const fetch = require('node-fetch')

const authorsResolvers = {
  Author: {
    name: async (authorId, args, context) => {
      // TODO: Switch to using REST dataSource that will be accessed on context argument
      const result = await fetch(
        `http://localhost:3001/api/authors/${authorId}`,
      )
      const author = await result.json()
      return author.name
    },
    avatarUrl: async (authorId, args, context) => {
      // TODO: Switch to using REST dataSource that will be accessed on context argument
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
