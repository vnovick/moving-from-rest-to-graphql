const {gql} = require('apollo-server-express')

const query = gql`
  type Query {
    hello: String
    posts: [Post]
  }
`

module.exports = {
  query,
}
