# Exercise 4 - Design GraphQL Schema

## Background

```sh
cd api
npm install
```

Our `api` includes a new dependency:
[node-fetch](https://github.com/node-fetch/node-fetch)

typically you install it by running

```sh
npm install node-fetch --save
```

but I've included it in package.json already.

#### Folder structure

In this exercise you might have noticed the difference in folder structure.
Instead of having type definitions and resolvers inside our `app.js` I've
abstracted type definitions and resolvers in separate folders following **role
based** folder structure.

> Note: This is fine for smaller projects like ours, but for larger servers it's
> better to use **domain based** folder structure

#### Files

These files should be modified during exercise. They also include **TODO**
comments for your convenience

- `typeDef/query.js` - will include additional root query for posts
- `typeDef/index.js` - will export postType and authorType definitions after
  implementing them
- `typeDefs/types/postType.js` - will export postType definition
- `typeDefs/types/authorType.js` - will export authorType definition

## Instructions

We want to get in the end of this exercise to the point where we are able to run
the following query:

```graphql
query getPosts {
  posts(order: ASC, limit: 2) {
    id
    title
    content
    author {
      name
      avatarUrl
    }
  }
}
```

<details>
<summary>
result
</summary>

```json
{
  "data": {
    "posts": [
      {
        "id": "2",
        "title": "Post Three",
        "content": "text",
        "author": {
          "name": "Name",
          "avatarUrl": "Avatar Url"
        }
      },
      {
        "id": "5",
        "title": "Post Four",
        "content": "text",
        "author": {
          "name": "Name",
          "avatarUrl": "Avatar Url"
        }
      }
    ]
  }
}
```

</details>

You can run final version of the app by executing `npm run start:final` and
exploring the final version

**Steps:**

1. Write a new query definition to query all posts in `typeDefs/query.js`
2. Define Author type in `typeDefs/authorType.js` and Post type in `postType`.
   Import these types in `typeDefs/index.js` (Uncomment the code there)
3. Create posts root query resolver in `resolvers/postsResolvers.js` to return
   dummy Data provided in the resolver
4. Define `ORDER` [enum](https://graphql.org/learn/schema/#enumeration-types)
   with `ASC` and `DESC`
5. Define `posts` root query to accept `order` and `limit` arguments
6. implement order and limit functionality in `postsResolver`.
   > Note: arguments are passed to resolver in a second argument of resolver
   > function. [More here](https://graphql.org/learn/execution/)
7. Create Author type resolver that will include resolvers for two fields
   `avatarUrl` and `name`. They need to return result as in sample payload above
