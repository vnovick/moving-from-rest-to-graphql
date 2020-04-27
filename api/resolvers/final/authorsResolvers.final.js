const fetch = require('node-fetch')

const authorsResolvers = {
  Author: {
    name: () => 'Name',
    avatarUrl: () => 'Avatar Url',
  },
}

module.exports = {
  authorsResolvers,
}
