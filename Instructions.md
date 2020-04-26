# Exercise 3 - Explore GraphQL queries and mutations

## Background

```sh
cd api
npm install
```

Our `api` includes a new dependency:
[apollo-server-express](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-express)

typically you install it by running

```sh
npm install apollo-server-express --save
```

but I've included it in package.json already.

#### Files

These files will be modified during exercise. They also include TODO comments
for your convenience

- `api/app.js`

## Instructions

1. Write GraphQL Schema definition by defining root level Query type with one
   single hello query that will return a String
2. create a new ApolloServer providing it type definitions just defined

> Note: make sure to apply middleware before any app.use

```javascript
const {ApolloServer, gql} = require('apollo-server-express')

const server = new ApolloServer({typeDefs, resolvers})
server.applyMiddleware({app})
```

3. add `mocks: true` to ApolloServer to make sure we are able to get
   unimplemented resolvers through mocks. Make sure to also add
   `mockEntireSchema: false`
4. add resolver for hello query that will return "Hello GraphQL"
