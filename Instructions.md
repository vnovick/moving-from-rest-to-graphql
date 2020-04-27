# Exercise 5 - Implementing temporary resolvers for Queries

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

- `resolvers/postsResolvers.js` - will export resolvers relevant to posts
- `resolvers/authorsResolvers.js` - will export resolvers relevant to authors

## Instructions

We want to get in the end of this exercise to the point where we are able to run
the following query:

```graphql
query getPosts {
  posts(order: DESC, limit: 3) {
    id
    title
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
        "id": "12",
        "title": "Reprehenderit excepteur quis nulla dolore elit est velit laboris et adipisicing Lorem adipisicing labore.",
        "author": {
          "name": "Name",
          "avatarUrl": "https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e"
        }
      },
      {
        "id": "11",
        "title": "Laboris nulla pariatur incididunt velit voluptate ea.",
        "author": {
          "name": "Name",
          "avatarUrl": "https://images.unsplash.com/photo-1513732822839-24f03a92f633?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
        }
      },
      {
        "id": "10",
        "title": "Ea do irure aliqua mollit amet ex proident.",
        "author": {
          "name": "Name",
          "avatarUrl": "https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e"
        }
      }
    ]
  }
}
```

</details>

posts should be brought from `http://localhost:3001/api/posts` and avatarUrl
should be resolved from `http://localhost:3001/api/authors/${authorId}` in
`Author` type resolver

You can run final version of the app by executing `npm run start:final` and
exploring the final version

**Steps:**

1. Use
   [`async` resolver](https://graphql.org/learn/execution/#asynchronous-resolvers)
   to fetch all posts data (with `node-fetch`) from
   `http://localhost:3001/api/posts` and return it from resolver
2. load `avatarUrl` from `http://localhost:3001/api/authors/${authorId}`
   endpoint in `Author` `avatarUrl` field resolver

   > Hint: in order to pass `authorId` to Author resolver you need to map over
   > posts and return `author: posts.authorId`. Then to access it from `async`
   > resolver you can use first argument of resolver function. Read more
   > [here](https://graphql.org/learn/execution/)

## Extra Credit

- reuse frontend logic from `frontend/pages/PostsPage` to load deduplicated
  requests for authors on posts root query level
