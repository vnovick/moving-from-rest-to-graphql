const {gql} = require('apollo-server-express')

const postType = gql`
  # input PostInputType {
  # TODO: implement PostInputType. make sure it has authorId: ID
  # }

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
