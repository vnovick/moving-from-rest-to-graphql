const {gql} = require('apollo-server-express')

const query = gql`
  enum ORDER {
    ASC
    DESC
  }

  type Query {
    hello: String
    posts(order: ORDER, limit: Int): [Post]
  }
`

module.exports = {
  query,
}
