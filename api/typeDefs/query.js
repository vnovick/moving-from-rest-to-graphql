const {gql} = require('apollo-server-express')

const query = gql`
  type Query {
    hello: String
    # TODO: Define posts root query
  }
`

module.exports = {
  query,
}
