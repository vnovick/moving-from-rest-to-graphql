const {gql} = require('apollo-server-express')

const mutation = gql`
  type Mutation {
    insertAuthor(input: AuthorInputType): Author!
    insertPost(input: PostInputType): Post!
  }
`
module.exports = {
  mutation,
}
