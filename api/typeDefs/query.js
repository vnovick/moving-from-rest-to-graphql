const {gql} = require('apollo-server-express')

const query = gql`
  # TODO: Define order enum
  type Query {
    hello: String
    # TODO: Define posts root query which you can order and limit
  }
`

module.exports = {
  query,
}
