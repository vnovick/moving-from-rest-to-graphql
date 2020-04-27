const {gql} = require('apollo-server-express')

const postType = gql`
  type Post {
    id: ID!
    title: String
    subTitle: String
    content: String
    featuredImage: String
    author: Author
  }
`

module.exports = {
  postType,
}
