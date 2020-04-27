const {gql} = require('apollo-server-express')

const authorType = gql`
  type Author {
    id: ID!
    name: String
    avatarUrl: String
  }
`

module.exports = {
  authorType,
}
