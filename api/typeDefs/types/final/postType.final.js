const {gql} = require('apollo-server-express')

const postType = gql`
  input PostInputType {
    title: String!
    subTitle: String
    content: String!
    featuredImage: String
    authorId: ID
    # -- Extra credit 1 ---
    # authorIdLegacy: Int
    # --- Extra credit 2 ---
    # author: AuthorInputType
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
