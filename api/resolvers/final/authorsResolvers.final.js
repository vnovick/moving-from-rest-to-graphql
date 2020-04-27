const fetch = require('node-fetch')

const authorsResolvers = {
  Author: {
    name: () => 'Name',
    avatarUrl: () => 'Avatar Url',
    // ------ Extra Credit 1---------
    // avatarUrl: async (authorId) => {
    //   const result = await fetch(`http://localhost:3001/api/author/${authorId}`)
    //   const author = await result.json()
    //   return author.avatarUrl
    // },

    // ------ Extra Credit 2---------
    // Remove name and avatarUrl resolvers
  },
}

module.exports = {
  authorsResolvers,
}
