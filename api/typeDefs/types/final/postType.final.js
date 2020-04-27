const {gql} = require('apollo-server-express')

const postType = gql`
  input PostInputType {
    title: String!
    subTitle: String
    content: String!
    featuredImage: String
    # --- Extra credit ---
    # author: AuthorInputType
    authorId: Int
  }

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
