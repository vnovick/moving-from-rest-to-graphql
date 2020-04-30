# Exercise 2 - Explore GraphQL queries and mutations

#### Instructions

In this exercise you are not required to make any changes to the files, but more
exploring how you can query GraphQL endpoints

- Go to [https://graphiql-online.com/](https://graphiql-online.com/) and paste
  the following endpoint:
  `https://moving-from-rest-to-graphql.herokuapp.com/v1/graphql` (This endpoint
  is already implemented GraphQL server)
- Explore Schema and docs

# Actual exercise

1. Query all the posts with the avatar URL in one request
2. Filter posts based on post title and order them ascending. Represent data as
   `ordered_array` (hint: aliases)
3. Insert both authors and posts in the same mutation and make sure both are
   inserted.
4. Create reusable insert mutation called addPost from that mutation using
   variable of some input type.
